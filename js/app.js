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

        // Sincroniza model.state reativo se disponível
        if (window.model && window.model.state) {
            this.state = window.model.state;
            window.model.subscribe((state, prop, value) => {
                if (prop === 'userProgress' && window.ui) {
                    ui.updateHeader();
                }
            });
        }

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

    // Sequência de navegação: descarta o render que concluir depois de outra
    // navegação (o await do chunk pode resolver fora de ordem).
    _navSeq: 0,

    navigate: function (viewName, data = null) {
        // Fecha a promise aqui: onclick/back/game não observam rejeições.
        return this._navegar(viewName, data).catch((erro) => {
            console.error("[App] Falha na navegação:", erro);
        });
    },

    _navegar: async function (viewName, data = null) {
        const seq = ++this._navSeq;
        console.log(`🧭 [Router] Navegando para: ${viewName}`);

        const container = document.getElementById("main-container");
        if (!container) return; // Proteção crítica

        // 1. Pré-Navegação (Sons e Sync)
        this._handleNavigationSound(viewName);
        this._syncUserState();

        // 2. Atualiza Estado
        this.state.currentView = viewName;
        window.scrollTo(0, 0);

        // 3. Conteúdo sob demanda (Task 6): garante o chunk da matéria + série
        // antes de renderizar. Sem chunk, as views seguem com o "Em Construção"
        // já existente — nunca uma tela em branco.
        if (viewName === 'map' || viewName === 'lesson') {
            if (data && viewName === 'map') this.state.currentSubject = data;
            await this._garantirConteudo();
            // Outra navegação começou durante o await: este render está stale.
            if (seq !== this._navSeq) return;
        }

        // 4. Renderização Condicional
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
                    // `data` é o ID canônico da lição (não mais o título).
                    const lessonId = data;
                    const content = (window.Registry && Registry.getTeoria)
                        ? Registry.getTeoria(lessonId)
                        : (window.PLATAFORMA_TEORIA ? window.PLATAFORMA_TEORIA[lessonId] : null);

                    html = views.renderLesson
                        ? views.renderLesson(this._getLessonTitle(lessonId), content, lessonId)
                        : "Erro na view Lesson";
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

        // 5. Injeção no DOM
        if (['map', 'home'].includes(viewName)) {
            // Em vez de container.innerHTML = html, usamos o novo motor
            this.renderProgressive(html);
        } else {
            container.innerHTML = html;
        }

        // Delegação de cliques: as views emitem data-action (falha 5). Ligamos
        // no container reutilizado — idempotente por nó via bindActions.
        if (window.ui && ui.bindActions) ui.bindActions(container);

        if (window.ui) ui.updateHeader();
        this._renderMathJax(container);

        // Telemetria (§5.11): drena a fila de resultados em idle, sem bloquear
        // a navegação e sem deixar erro de rede virar erro de tela.
        this._agendarDrenagemResultados();
    },

    /**
     * Agenda `filaResultados.drenar()` para quando o navegador estiver ocioso.
     * Uma drenagem por vez: a flag cobre reentrância e a fila também tem a sua.
     * Qualquer falha (inclusive `requestIdleCallback` ausente) é silenciosa.
     */
    _agendarDrenagemResultados: function () {
        if (!window.filaResultados || typeof window.filaResultados.drenar !== 'function') return;

        const executar = () => {
            if (this._drenagemEmVoo) return;
            this._drenagemEmVoo = true;
            Promise.resolve()
                .then(() => window.filaResultados.drenar())
                .catch(() => {})
                .then(() => { this._drenagemEmVoo = false; });
        };

        try {
            if (typeof window.requestIdleCallback === 'function') {
                window.requestIdleCallback(executar, { timeout: 2000 });
            } else {
                setTimeout(executar, 0);
            }
        } catch (erro) {
            // Nunca interrompe a navegação.
        }
    },

    // Helper: Renderiza Fórmulas Matemáticas com segurança
    _renderMathJax: function (container) {
        if (!window.MathJax || !window.MathJax.typesetPromise) return;

        // Em vez de processar o container todo, processamos apenas blocos de texto
        // Isso evita que o MathJax bloqueie a Main Thread por muito tempo
        const mathElements = container.querySelectorAll('h4, p, span, .glass-panel');

        // Processa em pequenos grupos para manter a fluidez
        const batchSize = 5;
        let i = 0;

        const processBatch = () => {
            if (i >= mathElements.length) return;

            const elementsToProcess = Array.from(mathElements).slice(i, i + batchSize);
            window.MathJax.typesetPromise(elementsToProcess)
                .catch(err => console.warn('MathJax Batch Error:', err));

            i += batchSize;
            setTimeout(processBatch, 50); // Dá um respiro de 50ms para o navegador
        };

        processBatch();
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

    // Varre o currículo uma única vez para exibir o título humano de uma lição
    // a partir do id canônico (as views navegam por id; o Registry só guarda a
    // teoria por id, sem título).
    _getLessonTitle: function (lessonId) {
        if (!this._lessonTitlesCache) {
            const mapa = {};
            const curriculo = window.PLATAFORMA_CURRICULO || {};
            for (const disciplina in curriculo) {
                const niveis = curriculo[disciplina] || {};
                for (const nivel in niveis) {
                    const unidades = niveis[nivel] || {};
                    for (const unidade in unidades) {
                        const licoes = unidades[unidade];
                        if (!Array.isArray(licoes)) continue;
                        for (const licao of licoes) {
                            if (licao && licao.id) mapa[licao.id] = licao.titulo || licao.id;
                        }
                    }
                }
            }
            this._lessonTitlesCache = mapa;
        }
        return this._lessonTitlesCache[lessonId] || lessonId;
    },

    // Garante o chunk content/<sigla>/<sigla><sufixo>_content.js da matéria e
    // série atuais. Falha silenciosa (false): a view mostra "Em Construção".
    _garantirConteudo: async function () {
        if (typeof window.carregarConteudo !== 'function') return false;

        const sigla = window.siglaDoComponente
            ? window.siglaDoComponente(this.state.currentSubject)
            : null;
        const sufixo = window.sufixoDe
            ? window.sufixoDe(this.state.currentLevel)
            : null;
        if (!sigla || !sufixo) return false; // ex.: Ensino Superior (curso, não etapa)

        try {
            return await window.carregarConteudo(sigla, sufixo);
        } catch (erro) {
            console.warn("[App] Falha ao carregar conteúdo sob demanda:", erro);
            return false;
        }
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
        // Mensagem de erro pode vir de exceção/rede: escapa antes de interpolar
        // (falha 6 — XSS na tela de erro).
        const seguro = views.escapeHTML(msg);
        return `<div class="p-10 text-center glass-panel rounded-3xl m-4 border-red-500 border-2">
            <h2 class="text-xl font-bold text-red-600">Erro</h2>
            <p class="text-gray-600 mb-4">${seguro}</p>
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
        // Convidado também passa pela migração de progresso (mesmo formato).
        if (window.game && game.syncProgress) game.syncProgress(this.state.userProgress);
        this.navigate('home');
    },

    logout: function () {
        // [MELHORIA] Modal de Confirmação Bonito
        if (window.ui && ui.showModal) {
            ui.showModal("Sair da conta?", "Você precisará logar novamente para ver seu progresso.", [
                { label: "Cancelar", class: "bg-gray-200 text-gray-700" },
                { label: "Sair", onclick: () => app._confirmLogout(), class: "bg-red-500 text-white" }
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

    /**
     * Salva o perfil. A matrícula NUNCA sai do formulário em claro: vira
     * `matriculaHash` (SHA-256 da matrícula normalizada, Web Crypto — R29) e só
     * o hash entra no estado/payload. Campo vazio → a chave é OMITIDA de
     * propósito: o formulário não mostra o hash de volta, então re-salvar sem
     * digitar a matrícula não pode apagar o hash já gravado (idempotência).
     */
    saveProfile: async function (form) {
        if (!this.state.userProgress) return;
        const data = new FormData(form);
        const fullName = String(data.get('fullName') || '').trim();
        const matricula = data.get('matricula');

        const dados = {
            fullName: fullName,
            name: fullName.split(' ')[0] || "Aluno",
            turma: data.get('turma'),
            serie: data.get('serie')
        };

        if (matricula && String(matricula).trim()) {
            if (typeof hashMatricula !== 'function') {
                console.error("[App] js/hash-matricula.js não carregou: matrícula não pode ser salva.");
                if (window.ui && ui.showToast) ui.showToast("Não foi possível proteger a matrícula.", "error");
                return;
            }
            try {
                const hash = await hashMatricula(matricula);
                if (hash) dados.matriculaHash = hash;
            } catch (erro) {
                console.error("[App] Falha ao calcular o hash da matrícula:", erro);
                if (window.ui && ui.showToast) ui.showToast("Matrícula exige conexão segura (HTTPS).", "error");
                return;
            }
        }

        this.atualizarPerfil(dados);

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

    renderProgressive: function (html) {
        const container = document.getElementById("main-container");
        if (!container) return;

        container.innerHTML = "";
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        const elements = Array.from(tempDiv.children);
        const fragment = document.createDocumentFragment();

        // Renderiza os primeiros 5 elementos (Header do mapa e primeiras lições)
        const initialBatch = elements.slice(0, 5);
        initialBatch.forEach(el => fragment.appendChild(el));
        container.appendChild(fragment);

        let index = 5;
        const renderNext = () => {
            if (index >= elements.length) {
                this._renderMathJax(container); // Renderiza fórmulas ao final
                return;
            }

            const batch = document.createDocumentFragment();
            const limit = Math.min(index + 3, elements.length);
            for (let i = index; i < limit; i++) {
                batch.appendChild(elements[i]);
            }
            container.appendChild(batch);
            index = limit;
            requestAnimationFrame(renderNext);
        };
        requestAnimationFrame(renderNext);
    },

    // Adicione isso ao seu app.js
    renderView: function (html) {
        const container = document.getElementById("main-container");
        if (!container) return;

        container.innerHTML = ""; // Limpa a tela anterior
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        const elements = Array.from(tempDiv.children);
        const fragment = document.createDocumentFragment();

        // Renderiza o esqueleto ou os primeiros itens (ex: 8 itens)
        const initialCount = 8;
        elements.slice(0, initialCount).forEach(el => fragment.appendChild(el));
        container.appendChild(fragment);

        // Carrega o resto sob demanda
        let currentPos = initialCount;
        const chunk = 4; // Quantos itens carregar por vez

        const renderNext = () => {
            if (currentPos >= elements.length) {
                // Após terminar tudo, renderiza o MathJax se necessário
                if (this._renderMathJax) this._renderMathJax(container);
                return;
            }

            const nextBatch = document.createDocumentFragment();
            const end = Math.min(currentPos + chunk, elements.length);

            for (let i = currentPos; i < end; i++) {
                nextBatch.appendChild(elements[i]);
            }

            container.appendChild(nextBatch);
            currentPos = end;

            // Usa o tempo ocioso do navegador para não travar o scroll
            requestAnimationFrame(renderNext);
        };

        requestAnimationFrame(renderNext);
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