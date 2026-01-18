/**
 * APP.JS - NÚCLEO DA APLICAÇÃO (VERSÃO ESTABILIZADA v3.0)
 * Responsabilidade: Orquestrar módulos, gerenciar estado global e roteamento.
 */

var app = {

    // ========================================================================
    // 1. ESTADO GLOBAL (STATE MANAGEMENT)
    // ========================================================================
    state: {
        // Controle de Navegação
        currentView: "loading",
        currentFilter: "Todos",
        currentSubject: null,
        currentMode: null,
        currentCourse: null,
        currentLevel: null,

        // Dados do Usuário
        userProgress: null,
        authMode: 'login', // 'login' ou 'register'

        // Estado Temporário da Arena (Quiz)
        arena: {
            activeQuestions: [],
            currentIndex: 0,
            score: 0,
            streak: 0
        },

        // Configurações do Sistema
        ui: {
            isLoading: false
        },
        settings: {
            soundEnabled: true,
            theme: 'light'
        }
    },

    // ========================================================================
    // 2. INICIALIZAÇÃO E BOOT (CORE)
    // ========================================================================
    init: function () {
        console.log("[App] Inicializando núcleo do sistema...");

        // 1. Inicia UI imediatamente para feedback visual
        if (typeof ui !== 'undefined') {
            ui.renderLoading();
            ui.init();
        } else {
            console.warn("[App] Módulo UI não detectado. Iniciando em modo básico.");
        }

        // 2. Carrega Configurações Salvas
        this._loadSettings();

        // 3. Inicializa Módulos Satélites (Se existirem)
        if (window.audioManager) window.audioManager.init();
        if (window.teacher) window.teacher.init();
        if (window.game && typeof game.syncProgress === 'function') {
            // Sincroniza estado inicial do jogo (ofensiva, etc)
        }

        // 4. Configura Listeners de Eventos Globais
        this._setupListeners();

        // 5. Decisão de Roteamento Inicial (Autenticação)
        this._decideInitialRoute();
    },

    // Lógica separada para decidir onde o usuário cai ao abrir o site
    _decideInitialRoute: function () {
        // Se for convidado, pula login
        if (localStorage.getItem("mathlingo_guest") === "true") {
            console.log("[App] Modo Visitante detectado.");
            this.loginGuest();
        }
        // Se tiver Auth, inicia e espera o callback
        else if (typeof auth !== "undefined") {
            auth.init();
        }
        // Fallback total
        else {
            this.navigate("login");
        }
    },

    _loadSettings: function () {
        try {
            const savedSound = localStorage.getItem('soundEnabled');
            if (savedSound !== null && window.audioManager) {
                const isSoundOn = savedSound === 'true';
                window.audioManager.muted = !isSoundOn;

                if (!this.state.settings) this.state.settings = {};
                this.state.settings.soundEnabled = isSoundOn;
            }
        } catch (e) {
            console.error("[App] Erro ao carregar configurações:", e);
        }
    },

    _setupListeners: function () {
        // Escuta mudanças de autenticação vindas do auth.js
        window.addEventListener("auth-change", (e) => {
            const { user, loggedIn } = e.detail;

            if (loggedIn && user) {
                console.log("[App] Usuário autenticado:", user.email || "Sem email");
                this.state.userProgress = user;

                // Redirecionamento Inteligente
                if (['loading', 'login'].includes(this.state.currentView)) {
                    this.navigate("home");
                }
                // Se já estava no mapa, recarrega para atualizar progresso visual
                else if (this.state.currentView === 'map') {
                    this.navigate('map', this.state.currentSubject); // Passa o subject para garantir
                }

                // Sincroniza módulos externos
                if (window.ui) ui.updateHeader();
                if (window.game) game.syncProgress(user);
                if (window.teacher) teacher.verificarPermissao();

            } else if (!localStorage.getItem('mathlingo_guest')) {
                // Se deslogou e não é convidado
                this.state.userProgress = null;
                this.navigate("login");
            }
        });
    },

    // ========================================================================
    // 3. ROTEADOR (NAVIGATION ENGINE)
    // ========================================================================
    navigate: function (viewName, data = null) {
        console.log(`🧭 [Router] Navegando para: ${viewName}`);

        const container = document.getElementById("main-container");
        if (!container) return; // Proteção crítica

        // 1. Pré-Navegação (Sons e Sync)
        this._handleNavigationSound(viewName);
        this._syncUserState();

        // 2. Atualiza Estado
        this.state.currentView = viewName;
        window.scrollTo(0, 0);

        // 3. Renderização Condicional
        let html = "";

        // Garante que views existe antes de chamar
        if (typeof views === 'undefined') {
            container.innerHTML = "<h1 style='text-align:center; margin-top:50px;'>Erro: Módulo de Visualização não carregado.</h1>";
            return;
        }

        try {
            switch (viewName) {
                case "loading": return; // Não faz nada, UI loading já cuida

                case "home":
                    this._resetDeepNavigation();
                    html = this._getHomeHTML();
                    break;

                case "settings":
                    html = views.renderProfile ? views.renderProfile(this.state.userProgress) : "Erro na view Profile";
                    break;

                case "mode_select":
                    this.state.currentSubject = data;
                    html = views.renderModeSelector ? views.renderModeSelector(data) : "Erro na view ModeSelector";
                    break;

                case "login":
                    html = views.renderLogin ? views.renderLogin(this.state.authMode) : "Erro na view Login";
                    break;

                case "map":
                    html = this._getMapHTML(data);
                    break;

                case "lesson":
                    // Busca segura via Registry ou Global
                    const content = (window.Registry && Registry.getTeoria)
                        ? Registry.getTeoria(data)
                        : (window.PLATAFORMA_TEORIA ? window.PLATAFORMA_TEORIA[data] : null);

                    html = views.renderLesson ? views.renderLesson(data, content) : "Erro na view Lesson";
                    break;

                case "arena_play":
                    const q = this.state.arena.activeQuestions[this.state.arena.currentIndex];
                    if (!q) {
                        this.finishArena();
                        return;
                    }
                    html = views.renderArena ? views.renderArena(q, this.state.arena.currentIndex, this.state.arena.activeQuestions.length) : "Erro na view Arena";
                    break;

                case "teacher_dashboard":
                    // O teacher.js gerencia isso, mas se cair aqui por engano, redireciona
                    if (window.teacher) teacher.openDashboard();
                    return;

                default:
                    html = this._get404HTML();
            }
        } catch (error) {
            console.error(`[App] Erro ao renderizar view ${viewName}:`, error);
            html = this._getErrorHTML(error.message);
        }

        // 4. Injeção no DOM
        container.innerHTML = html;
        if (window.ui) ui.updateHeader();

        // 5. Renderização Matemática (MathJax)
        this._renderMathJax(container);
    },

    // Helper: Renderiza Fórmulas Matemáticas com segurança
    _renderMathJax: function (container) {
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([container])
                .then(() => { /* Sucesso silencioso */ })
                .catch((err) => console.warn('Aviso MathJax:', err));
        }
    },

    // --- Helpers de Navegação ---

    _handleNavigationSound: function (viewName) {
        if (!window.audioManager) return;

        // 1. Efeitos de Transição (SFX)
        const sounds = {
            'level_selector': 'open_subject',
            'mode_select': 'open_subject',
            'map': 'open_unit',
            'lesson': 'start_lesson'
        };
        if (sounds[viewName]) audioManager.play(sounds[viewName]);

        if (['home', 'map', 'lesson', 'mode_select', 'settings'].includes(viewName)) {
            
            audioManager.playMusic('focus_drone'); 
        }
        else if (viewName === 'login') {
            audioManager.stopMusic();
        }
    },

    _syncUserState: function () {
        // Se o Auth já tem usuário mas o State perdeu (ex: refresh), ressincroniza
        if (window.auth && auth.user && !this.state.userProgress) {
            this.state.userProgress = auth.user;
        }
    },

    back: function () {
        if (window.audioManager) audioManager.play('click');
        const view = this.state.currentView;

        // Lógica de "Voltar" Inteligente
        if (view === 'lesson') this.navigate('map', this.state.currentSubject); // Garante contexto
        else if (view === 'settings') this.navigate('home');
        else if (view === 'arena') this.navigate('map'); // Caso esteja na intro da arena
        else if (view === 'map') {
            if (this.state.currentLevel) {
                this.state.currentLevel = null;
                this.navigate('map');
            }
            else if (this.state.currentCourse) {
                this.state.currentCourse = null;
                this.navigate('map');
            }
            else this.navigate('mode_select', this.state.currentSubject);
        }
        else this.navigate('home');
    },

    // --- Actions de Fluxo ---

    selectMode: function (disciplina) {
        if (disciplina === 'Em Breve') return;
        this.state.currentSubject = disciplina;
        // Reseta níveis profundos ao trocar de matéria
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

        // Lógica Ensino Superior (Curso -> Disciplina)
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
    // 4. LÓGICA DE RENDERIZAÇÃO (DATA FETCHING)
    // ========================================================================

    _getHomeHTML: function () {
        // Usa Registry se disponível, senão variável global
        const todos = (window.Registry && Registry.getCurriculo)
            ? window.PLATAFORMA_CURRICULO // Registry usa essa var internamente, então é seguro
            : (window.PLATAFORMA_CURRICULO || {});

        let filtrados = {};

        if (this.state.currentFilter === "Todos") {
            filtrados = todos;
        } else {
            for (const [materia, conteudo] of Object.entries(todos)) {
                const conf = (typeof SUBJECT_CONFIG !== 'undefined' ? SUBJECT_CONFIG[materia] : null);
                if (conf && conf.category === this.state.currentFilter) filtrados[materia] = conteudo;
            }
        }
        return views.renderHome ? views.renderHome(filtrados, this.state.currentFilter, this.state.userProgress) : "Erro Home";
    },

    _getMapHTML: function (data) {
        if (data) this.state.currentSubject = data;

        // Proteção contra dados vazios
        const subjData = window.PLATAFORMA_CURRICULO ? window.PLATAFORMA_CURRICULO[this.state.currentSubject] : null;

        // Se não houver dados para a matéria (erro de carga)
        if (!subjData && this.state.currentSubject !== "Ensino Superior") { // Superior pode ser especial
            return this._getErrorHTML("Conteúdo não encontrado para esta matéria.");
        }

        // Lógica Superior
        if (this.state.currentSubject === "Ensino Superior") {
            if (!this.state.currentCourse) return views.renderLevelSelector("Ensino Superior", subjData);
            if (!this.state.currentLevel) return views.renderLevelSelector(this.state.currentCourse, subjData[this.state.currentCourse]);
            return views.renderMap(this.state.currentLevel, this.state.currentCourse, subjData[this.state.currentCourse][this.state.currentLevel]);
        }

        // Lógica Padrão (Ensino Básico)
        if (!this.state.currentLevel) return views.renderLevelSelector(this.state.currentSubject, subjData);

        const unidades = subjData ? subjData[this.state.currentLevel] : null;
        if (!unidades) {
            // Se o nível selecionado não existe, reseta
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
        return `<div class="p-10 text-center glass-panel rounded-3xl m-4 animate-fade-in">
            <h2 class="text-xl font-bold text-gray-700 dark:text-white">Página não encontrada</h2>
            <button onclick="app.navigate('home')" class="mt-4 text-brand-blue font-bold hover:underline">Voltar ao Início</button>
        </div>`;
    },

    _getErrorHTML: function (msg) {
        return `<div class="p-10 text-center glass-panel rounded-3xl m-4 border-red-500 border-2">
            <h2 class="text-xl font-bold text-red-600">Erro</h2>
            <p class="text-gray-600 mb-4">${msg}</p>
            <button onclick="app.navigate('home')" class="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">Voltar</button>
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
        if (!email || !pass) {
            if (window.ui && ui.showToast) ui.showToast("Preencha email e senha!", "warning");
            else alert("Preencha campos!");
            return;
        }

        const promise = this.state.authMode === 'login'
            ? auth.loginEmail(email, pass)
            : auth.registerEmail(email, pass);

        promise
            .then(() => {
                if (window.audioManager) audioManager.play('success');
            })
            .catch(err => {
                if (window.audioManager) audioManager.play('error');
                const msg = this._translateFirebaseError(err.code);

                if (window.ui && ui.showToast) ui.showToast(msg, "error");
                else alert(msg);
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
        // [MELHORIA] Modal de Confirmação Bonito
        if (window.ui && ui.showModal) {
            ui.showModal("Sair da conta?", "Você precisará logar novamente para ver seu progresso.", [
                { label: "Cancelar", onclick: "ui.closeModal()", class: "bg-gray-200 text-gray-700" },
                { label: "Sair", onclick: "app._confirmLogout()", class: "bg-red-500 text-white" }
            ]);
        } else {
            if (!confirm("Tem certeza que deseja sair?")) return;
            this._confirmLogout();
        }
    },

    _confirmLogout: function () {
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

        if (window.ui && ui.showToast) ui.showToast("Perfil salvo com sucesso!", "success");
        else alert("Perfil salvo!");

        this.navigate('home');
    },

    atualizarPerfil: function (novosDados) {
        this.state.userProgress = { ...this.state.userProgress, ...novosDados };
        this.saveProgress();
        if (window.ui) ui.updateHeader();
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
            'auth/email-already-in-use': "Email já está em uso.",
            'auth/wrong-password': "Senha incorreta.",
            'auth/user-not-found': "Usuário não encontrado.",
            'auth/invalid-email': "Email inválido.",
            'auth/weak-password': "A senha deve ter pelo menos 6 caracteres."
        };
        return errors[code] || "Erro de login (" + code + ")";
    },

    // ========================================================================
    // 8. CAMADA DE COMPATIBILIDADE (LEGACY SHIELD)
    // Redireciona chamadas antigas para os novos módulos (Game, UI, etc)
    // ========================================================================

    // --- Redireciona para GAME.JS ---
    isLessonCompleted: function (id) {
        return window.game ? game.isLessonCompleted(id) : false;
    },

    finishLesson: function (id) {
        if (window.game) game.finishLesson(id);
    },

    startArenaSession: function () {
        if (window.game) game.startArena();
    },

    handleArenaAnswer: function (btn, idx) {
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
        if (window.ui) ui.updateHeader();
    },

    fireConfetti: function () {
        if (window.ui && ui.fx) ui.fx.fireConfetti();
    },
};

// Exposição Global
window.app = app;