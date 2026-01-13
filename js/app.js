/**
 * APP.JS
 * O "Cérebro" da aplicação. Gerencia estado, navegação e lógica de negócios.
 */

/**
 * APP.JS (REFATORADO)
 * Gerencia estado, roteamento e orquestra os módulos.
 */

var app = {

    // ========================================================================
    // 1. ESTADO (STATE)
    // ========================================================================
    state: {
        currentView: "loading",
        currentFilter: "Todos",
        currentSubject: null,
        currentMode: null,
        currentCourse: null,
        currentLevel: null,
        userProgress: null,
        authMode: 'login',
        arena: {
            activeQuestions: [],
            currentIndex: 0,
            score: 0,
            streak: 0
        },
        ui: {
            //isChatOpen: false,
            isLoading: false
        },
        settings: {
            soundEnabled: true,
            theme: 'light'
        }
    },

    // ========================================================================
    // 2. CORE & INICIALIZAÇÃO
    // ========================================================================
    init: function () {
        console.log("[App] Iniciando...");
        if (typeof ui !== 'undefined') {
            ui.renderLoading();
            ui.init(); // Aproveita e inicia o tema também
        }

        // 1. Carrega Serviços Básicos
        this._loadSettings();
        if (window.audioManager) window.audioManager.init();
        if (window.teacher) window.teacher.init();
        //if (typeof chatbot !== 'undefined') chatbot.init();

        // 2. Carrega Usuário
        const savedUser = localStorage.getItem('mathlingo_user');
        if (savedUser) {
            this.state.userProgress = JSON.parse(savedUser);
        } else {
            this.state.userProgress = { uid: 'guest', turma: '6º Ano', xp: 0 };
        }

        // 3. Listeners
        this._setupListeners();

        // 4. Decisão de Boot
        if (localStorage.getItem("mathlingo_guest") === "true") {
            this.loginGuest();
        } else if (typeof auth !== "undefined") {
            auth.init();
        } else {
            this.navigate("login");
        }

        // Verifica permissões de professor se já tiver usuário carregado
        if (window.teacher) window.teacher.verificarPermissao();
    },

    _loadSettings: function () {
        const savedSound = localStorage.getItem('soundEnabled');
        if (savedSound !== null && window.audioManager) {
            const isSoundOn = savedSound === 'true';
            window.audioManager.muted = !isSoundOn;
            if (!this.state.settings) this.state.settings = {};
            this.state.settings.soundEnabled = isSoundOn;
        }
    },

    _setupListeners: function () {
        window.addEventListener("auth-change", (e) => {
            const { user, loggedIn } = e.detail;
            if (loggedIn && user) {
                console.log("[App] Login confirmado.");
                this.state.userProgress = user;
                if (['loading', 'login'].includes(this.state.currentView)) this.navigate("home");
                else if (this.state.currentView === 'map') this.navigate('map');
                ui.updateHeader();
            } else if (!localStorage.getItem('mathlingo_guest')) {
                this.state.userProgress = null;
                this.navigate("login");
            }
        });
    },

    // ========================================================================
    // 3. ROTEADOR (NAVIGATION)
    // ========================================================================
    navigate: function (viewName, data = null) {
        console.log("🧭 [Router] ->", viewName);
        const container = document.getElementById("main-container");

        // 1. Som e Estado
        this._handleNavigationSound(viewName);
        this._syncUserState();

        // 2. Atualiza Variáveis
        this.state.currentView = viewName;
        window.scrollTo(0, 0);
        //if (this.state.ui.isChatOpen && window.chatbot) chatbot.toggle();

        // 3. Renderização
        let html = "";
        switch (viewName) {
            case "loading": return;
            case "home":
                this._resetDeepNavigation();
                html = this._getHomeHTML();
                break;
            case "settings":
                html = views.renderProfile(this.state.userProgress);
                break;
            case "mode_select":
                this.state.currentSubject = data;
                html = views.renderModeSelector(data);
                break;
            case "login":
                html = views.renderLogin(this.state.authMode);
                break;
            case "map":
                html = this._getMapHTML(data);
                break;
            case "lesson":
                const content = window.PLATAFORMA_TEORIA ? window.PLATAFORMA_TEORIA[data] : null;
                html = views.renderLesson(data, content);
                break;
            case "arena_play":
                const q = this.state.arena.activeQuestions[this.state.arena.currentIndex];
                if (!q) { this.finishArena(); return; }
                html = views.renderArena(q, this.state.arena.currentIndex, this.state.arena.activeQuestions.length);
                break;
            default:
                html = this._get404HTML();
        }

        // 4. Pós-Render
        if (container) container.innerHTML = html;
        ui.updateHeader();
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([container])
                .then(() => {
                    console.log('MathJax renderizado com sucesso.');
                })
                .catch((err) => console.warn('Erro no MathJax:', err));
        }
    },

    // --- Helpers de Navegação ---

    _handleNavigationSound: function (viewName) {
        if (!window.audioManager) return;
        if (['level_selector', 'courses'].includes(viewName)) audioManager.play('open_subject');
        else if (viewName === 'map') audioManager.play('open_unit');
        else if (viewName === 'lesson') audioManager.play('start_lesson');
    },

    _syncUserState: function () {
        if (window.auth && auth.user && !this.state.userProgress) {
            this.state.userProgress = auth.user;
        }
    },

    back: function () {
        if (window.audioManager) audioManager.play('click');
        const view = this.state.currentView;

        if (view === 'lesson') this.navigate('map');
        else if (view === 'map') {
            if (this.state.currentLevel) { this.state.currentLevel = null; this.navigate('map'); }
            else if (this.state.currentCourse) { this.state.currentCourse = null; this.navigate('map'); }
            else this.navigate('mode_select', this.state.currentSubject);
        }
        else this.navigate('home');
    },

    // --- Actions de Fluxo ---

    selectMode: function (disciplina) {
        if (disciplina === 'Em Breve') return;
        this.state.currentSubject = disciplina;
        this.state.currentMode = null;
        this.state.currentCourse = null;
        this.state.currentLevel = null;
        this.navigate('mode_select', disciplina);
    },

    setStudyMode: function (modo) {
        this.state.currentMode = modo;
        if (window.audioManager) audioManager.play('open_unit');
        this.navigate('map');
    },

    selectLevel: function (selecionado) {
        if (window.audioManager) audioManager.play('open_unit');

        // Lógica Ensino Superior
        if (this.state.currentSubject === "Ensino Superior" && !this.state.currentCourse) {
            this.state.currentCourse = selecionado;
        } else {
            this.state.currentLevel = selecionado;
        }
        this.navigate('map');
    },

    setFilter: function (cat) {
        this.state.currentFilter = cat;
        this.navigate('home');
    },

    // ========================================================================
    // 4. LÓGICA DE RENDERIZAÇÃO (VIEWS HELPERS)
    // ========================================================================

    _getHomeHTML: function () {
        const todos = window.PLATAFORMA_CURRICULO || {};
        let filtrados = {};

        if (this.state.currentFilter === "Todos") {
            filtrados = todos;
        } else {
            for (const [materia, conteudo] of Object.entries(todos)) {
                const conf = (typeof SUBJECT_CONFIG !== 'undefined' ? SUBJECT_CONFIG[materia] : null);
                if (conf && conf.category === this.state.currentFilter) filtrados[materia] = conteudo;
            }
        }
        return views.renderHome(filtrados, this.state.currentFilter, this.state.userProgress);
    },

    _getMapHTML: function (data) {
        if (data) this.state.currentSubject = data;
        const subjData = window.PLATAFORMA_CURRICULO[this.state.currentSubject];

        // Lógica Superior
        if (this.state.currentSubject === "Ensino Superior") {
            if (!this.state.currentCourse) return views.renderLevelSelector("Ensino Superior", subjData);
            if (!this.state.currentLevel) return views.renderLevelSelector(this.state.currentCourse, subjData[this.state.currentCourse]);
            return views.renderMap(this.state.currentLevel, this.state.currentCourse, subjData[this.state.currentCourse][this.state.currentLevel]);
        }

        // Lógica Padrão
        if (!this.state.currentLevel) return views.renderLevelSelector(this.state.currentSubject, subjData);

        const unidades = subjData ? subjData[this.state.currentLevel] : null;
        if (!unidades) {
            this.state.currentLevel = null;
            return views.renderLevelSelector(this.state.currentSubject, subjData);
        }
        return views.renderMap(this.state.currentSubject, this.state.currentLevel, unidades);
    },

    _resetDeepNavigation: function () {
        this.state.currentSubject = null;
        this.state.currentCourse = null;
        this.state.currentLevel = null;
    },

    _get404HTML: function () {
        return `<div class="p-10 text-center glass-panel rounded-3xl m-4">
            <h2 class="text-xl font-bold text-gray-700 dark:text-white">Página não encontrada</h2>
            <button onclick="app.navigate('home')" class="mt-4 text-brand-blue font-bold">Voltar ao Início</button>
        </div>`;
    },

    // ========================================================================
    // 5. AUTENTICAÇÃO E PERFIL
    // ========================================================================

    setAuthMode: function (mode) {
        if (window.audioManager) audioManager.play('click');
        this.state.authMode = mode;
        this.navigate('login');
    },

    handleAuthSubmit: function (email, pass) {
        if (!email || !pass) return alert("Preencha email e senha!");

        const promise = this.state.authMode === 'login'
            ? auth.loginEmail(email, pass)
            : auth.registerEmail(email, pass);

        promise
            .then(() => {
                if (window.audioManager) audioManager.play('success');
            })
            .catch(err => {
                if (window.audioManager) audioManager.play('error');
                alert(this._translateFirebaseError(err.code));
            });
    },

    loginGoogle: function () {
        if (window.audioManager) audioManager.play('click');
        if (window.auth) auth.login();
    },

    loginGuest: function () {
        if (window.audioManager) audioManager.play('success');
        this.state.userProgress = { name: "Visitante", xp: 0, completedLessons: [], isGuest: true };
        localStorage.setItem('mathlingo_guest', 'true');
        this.navigate('home');
    },

    logout: function () {
        if (!confirm("Tem certeza que deseja sair?")) return;
        localStorage.removeItem('mathlingo_guest');
        if (window.auth) auth.logout();
        this.state.userProgress = null;
        this.navigate('login');
    },

    saveProfile: function (form) {
        if (!this.state.userProgress) return;
        const data = new FormData(form);

        this.atualizarPerfil({
            fullName: data.get('fullName'),
            name: data.get('fullName').trim().split(' ')[0] || "Aluno",
            matricula: data.get('matricula'),
            turma: data.get('turma'),
            serie: data.get('serie')
        });

        if (window.audioManager) audioManager.play('success');
        alert("Perfil salvo!");
        this.navigate('home');
    },

    atualizarPerfil: function (novosDados) {
        this.state.userProgress = { ...this.state.userProgress, ...novosDados };
        this.saveProgress();
        ui.updateHeader();
        if (window.teacher) teacher.verificarPermissao();
    },

    saveProgress: function () {
        if (this.state.userProgress && !this.state.userProgress.isGuest && window.auth) {
            auth.saveUserData(this.state.userProgress);
        } else {
            localStorage.setItem('guest_data', JSON.stringify(this.state.userProgress));
        }
    },

    _translateFirebaseError: function (code) {
        const errors = {
            'auth/email-already-in-use': "Email já em uso.",
            'auth/wrong-password': "Senha incorreta.",
            'auth/user-not-found': "Usuário não encontrado."
        };
        return errors[code] || "Erro desconhecido (" + code + ")";
    },
    // ========================================================================
    // 8. CAMADA DE COMPATIBILIDADE (LEGACY SHIELD)
    // Mantém o funcionamento de views antigas que chamam app.funcao()
    // ========================================================================

    // --- Redireciona para GAME.JS ---
    isLessonCompleted: function (id) {
        return window.game ? game.isLessonCompleted(id) : false;
    },

    finishLesson: function (id) {
        if (window.game) game.finishLesson(id);
    },

    startArenaSession: function () {
        // Note: No game.js renomeamos para startArena, aqui mapeamos
        if (window.game) game.startArena();
    },

    handleArenaAnswer: function (btn, idx) {
        // Note: No game.js renomeamos para handleAnswer
        if (window.game) game.handleAnswer(btn, idx);
    },

    finishArena: function () {
        if (window.game) game.finishArena();
    },

    getNota: function (unidade, tipo) {
        return window.game ? game.getNota(unidade, tipo) : null;
    },

    registrarNota: function (unidade, tipo, nota) {
        if (window.game) game.registrarNota(unidade, tipo, nota);
    },

    verificarAtividade: function (id, resp) {
        if (window.game) game.verificarAtividade(id, resp);
    },

    verificarQuiz: function (btn, correto, idFeed) {
        if (window.game) game.verificarQuiz(btn, correto, idFeed);
    },

    // --- Redireciona para UI.JS ---
    renderLoading: function () {
        if (window.ui) ui.renderLoading();
    },

    toggleTheme: function () {
        if (window.ui) ui.toggleTheme();
    },

    updateHeaderUI: function () {
        // Note: No ui.js renomeamos para updateHeader
        if (window.ui) ui.updateHeader();
    },

    // --- Redireciona FX (Efeitos) ---
    fireConfetti: function () {
        if (window.ui && ui.fx) ui.fx.fireConfetti();
    },

}; 