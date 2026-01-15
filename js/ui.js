/**
 * UI.JS - Gerenciador de Interface e Efeitos (Versão Aprimorada)
 * Responsável por: Header, Loading, Temas, Confetes, Sons, Toasts e Modais.
 */
var ui = {
    // Inicialização básica
    init: function () {
        // Carrega tema salvo
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) this.applyTheme(savedTheme);

        // [NOVO] Prepara o container de notificações se não existir
        if (!document.getElementById('toast-container')) {
            const tc = document.createElement('div');
            tc.id = 'toast-container';
            tc.className = "fixed top-4 right-4 z-[100] flex flex-col gap-2";
            document.body.appendChild(tc);
        }
    },

    // --- GERENCIAMENTO DO HEADER ---
    updateHeader: function () {
        const els = {
            btnLog: document.getElementById('btn-login'),
            btnSet: document.getElementById('btn-settings'),
            lblXp: document.getElementById('header-xp'),
            lblLes: document.getElementById('header-lessons'),
            header: document.getElementById('app-header') // Usando o ID que corrigimos no index.html
        };

        // 1. GARANTIA DE VISIBILIDADE
        // Se NÃO estiver em login/loading, o header DEVE aparecer
        const isSystemView = app.state.currentView && ['login', 'loading'].includes(app.state.currentView);
        
        if (els.header) {
            if (isSystemView) {
                els.header.classList.add('hidden');
                return; // Para a execução aqui
            } else {
                els.header.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
            }
        }

        // Se estiver em telas de "sistema", esconde o header
        if (app.state.currentView && ['login', 'loading'].includes(app.state.currentView)) {
            if (els.header) els.header.classList.add('opacity-0', 'pointer-events-none');
            return;
        }

        // 2. LÓGICA DE INSERÇÃO DA JUKEBOX
        let controlContainer = els.btnSet?.parentElement || els.btnLog?.parentElement || document.querySelector('header > div:last-child');

        if (controlContainer) {
            controlContainer.classList.add('flex', 'items-center', 'gap-2');
            this._renderJukeboxBtn(controlContainer);
        }

        // Renderiza o botão se achou um lugar
        if (controlContainer) {
            // Garante que o container esteja visível e flexível
            controlContainer.classList.add('flex', 'items-center', 'gap-2');
            this._renderJukeboxBtn(controlContainer);
        } else {
            console.warn("UI: Não foi possível encontrar onde inserir a Jukebox.");
        }

        const user = app.state.userProgress;

        if (user) {
            // Atualiza XP e Lições
            if (els.lblXp) els.lblXp.innerText = user.xp || 0;
            if (els.lblLes) els.lblLes.innerText = user.completedLessons?.length || 0;

            // Botão de Configurações
            if (els.btnSet) {
                els.btnSet.style.visibility = "visible";
                els.btnSet.onclick = () => app.navigate('settings');
            }

            // Botão de Perfil/Login
            if (els.btnLog) {
                const isGuest = user.isGuest === true;
                els.btnLog.innerHTML = `
                    <div class="glass-child flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer hover:bg-white/20 transition-colors">
                        <span class="text-xs font-bold uppercase truncate max-w-[100px]">${isGuest ? "Login" : user.name}</span>
                        ${isGuest ? '<i class="fas fa-sign-in-alt"></i>' : '<i class="fas fa-user-circle"></i>'}
                    </div>`;
                els.btnLog.onclick = () => isGuest ? app.logout() : app.navigate('settings');
            }

            // [MELHORIA] Ícone de Ofensiva (Streak)
            let streakContainer = document.getElementById('header-streak');
            // Se não existir, tentamos injetar ao lado do XP (lógica de fallback)
            if (streakContainer) {
                const dias = user.streak || 0;
                // Adiciona animação se tiver ofensiva ativa
                const fireClass = dias > 0 ? 'text-orange-500 animate-pulse drop-shadow-sm' : 'text-gray-300';
                streakContainer.innerHTML = `<i class="fas fa-fire ${fireClass}"></i> ${dias}`;
            }
        }
    },

    // Função exclusiva para desenhar o botão da Jukebox
    _renderJukeboxBtn: function (container) {
        if (!container) return;

        // 1. Cria/Encontra o WRAPPER (Agrupador)
        // Isso garante que os botões fiquem juntinhos
        let wrapper = document.getElementById('jukebox-controls');
        if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.id = 'jukebox-controls';
            wrapper.className = "flex items-center gap-1 mr-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm";
            // Insere no início do container pai (ao lado de settings)
            container.insertBefore(wrapper, container.firstChild);
        }

        // Limpa o conteúdo para redesenhar se o estado mudou
        wrapper.innerHTML = '';

        const isMuted = window.audioManager ? audioManager.musicMuted : false;

        // --- BOTÃO 1: TOGGLE MUSIC ---
        const btnToggle = document.createElement('button');
        btnToggle.className = `relative group flex items-center justify-center w-9 h-9 rounded-lg transition-all active:scale-95 ${isMuted
                ? 'bg-red-100 text-red-500 hover:bg-red-200 dark:bg-red-900/40'
                : 'bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900/40 dark:text-green-400'
            }`;

        if (isMuted) {
            btnToggle.innerHTML = `
                <i class="fas fa-music text-sm opacity-50"></i>
                <div class="absolute w-[70%] h-[2px] bg-red-500 rotate-45 rounded-full"></div>
            `;
            btnToggle.title = "Ativar Música";
        } else {
            btnToggle.innerHTML = `
                <i class="fas fa-music text-sm animate-bounce-gentle"></i>
                <div class="absolute top-1 right-1 w-1.5 h-1.5 bg-green-500 rounded-full animate-ping opacity-75"></div>
            `;
            btnToggle.title = "Pausar Música";
        }

        btnToggle.onclick = () => {
            if (window.audioManager) {
                audioManager.toggleMusic();
                this._renderJukeboxBtn(container); // Redesenha para atualizar cor

                if (audioManager.musicMuted) this.showToast("Música pausada", "info");
                else this.showToast("Música tocando", "success");
            }
        };

        // --- BOTÃO 2: NEXT TRACK ---
        const btnNext = document.createElement('button');
        btnNext.className = "w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-brand-blue hover:bg-blue-50 dark:text-gray-400 dark:hover:bg-gray-700 transition-all active:scale-95";
        btnNext.innerHTML = `<i class="fas fa-step-forward text-sm"></i>`;
        btnNext.title = "Próxima Música";

        btnNext.onclick = () => {
            if (window.audioManager) {
                // Chama nextTrack e recebe o nome da nova música
                const trackName = audioManager.nextTrack();

                // Força atualização visual (caso estivesse mutado, agora fica verde)
                this._renderJukeboxBtn(container);

                // Efeito sonoro de clique e toast
                audioManager.play('click');
                this.showToast(`Tocando: ${trackName}`, "info");
            }
        };

        // Adiciona os botões ao wrapper
        wrapper.appendChild(btnToggle);
        wrapper.appendChild(btnNext);
    },

    // --- LOADING E TELAS ---
    renderLoading: function () {
        const c = document.getElementById('main-container');
        if (c) {
            // [MELHORIA] Adicionei fade-in para suavizar a entrada
            c.innerHTML = `
            <div class="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
                <div class="flex flex-col items-center gap-4">
                    <div class="w-12 h-12 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
                    <p class="text-brand-blue font-bold text-sm animate-pulse">Carregando...</p>
                </div>
            </div>`;
        }
    },

    // --- TEMAS (Dark/Light) ---
    toggleTheme: function () {
        if (window.audioManager) audioManager.play('click');
        const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        this.applyTheme(newTheme);

        // Atualiza persistência no App se usuário estiver logado
        if (app.state.userProgress && !app.state.userProgress.isGuest) {
            app.state.userProgress.theme = newTheme;
            app.saveProgress();
        }
    },

    applyTheme: function (theme) {
        const el = document.documentElement;
        const icon = document.getElementById("icon-theme");

        if (theme === "dark") {
            el.classList.add("dark");
            if (icon) icon.className = "fas fa-sun text-yellow-400 drop-shadow-md";
        } else {
            el.classList.remove("dark");
            if (icon) icon.className = "fas fa-moon text-indigo-500 drop-shadow-sm";
        }
        localStorage.setItem("theme", theme);
    },

    // ========================================================================
    // SISTEMA DE NOTIFICAÇÕES (TOASTS)
    // ========================================================================
    // Uso: ui.showToast("Salvo com sucesso!", "success")
    showToast: function (message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return; // Segurança

        // Cores baseadas no tipo
        const colors = {
            success: 'bg-green-500 border-green-600',
            error: 'bg-red-500 border-red-600',
            warning: 'bg-yellow-500 border-yellow-600',
            info: 'bg-blue-500 border-blue-600'
        };
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-times-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };

        const toast = document.createElement('div');
        toast.className = `${colors[type] || colors.info} text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 min-w-[300px] border-b-4 animate-slide-in-right transform transition-all duration-300`;
        toast.innerHTML = `
            <i class="fas ${icons[type] || icons.info} text-lg"></i>
            <span class="font-bold text-sm flex-1">${message}</span>
            <button onclick="this.parentElement.remove()" class="text-white/70 hover:text-white"><i class="fas fa-times"></i></button>
        `;

        container.appendChild(toast);

        // Som de feedback (se disponível)
        if (window.audioManager) {
            if (type === 'error') audioManager.play('error');
            else if (type === 'success') audioManager.play('success');
        }

        // Auto-remove após 4 segundos
        setTimeout(() => {
            toast.classList.add('opacity-0', 'translate-x-full');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    },

    // ========================================================================
    // SISTEMA DE MODAL GENÉRICO
    // ========================================================================
    // Uso: ui.showModal("Título", "Conteúdo HTML", [botoes])
    showModal: function (title, contentHTML, buttons = []) {
        // Remove modal anterior se existir
        this.closeModal();

        const modalOverlay = document.createElement('div');
        modalOverlay.id = "ui-modal-overlay";
        modalOverlay.className = "fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in";

        // Gera HTML dos botões
        const buttonsHTML = buttons.map(btn => `
            <button onclick="${btn.onclick}; ui.closeModal()" 
                class="${btn.class || 'bg-gray-200 text-gray-700'} font-bold py-3 px-6 rounded-xl flex-1 transition-transform active:scale-95">
                ${btn.label}
            </button>
        `).join('');

        modalOverlay.innerHTML = `
            <div class="bg-white dark:bg-gray-800 w-full max-w-md rounded-3xl p-6 shadow-2xl transform transition-all animate-bounce-in border-b-4 border-gray-200 dark:border-gray-900">
                <div class="text-center mb-6">
                    <h3 class="text-2xl font-black text-gray-700 dark:text-white mb-2">${title}</h3>
                    <div class="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">${contentHTML}</div>
                </div>
                <div class="flex gap-3">
                    ${buttonsHTML}
                    ${buttons.length === 0 ? '<button onclick="ui.closeModal()" class="bg-brand-blue text-white w-full py-3 rounded-xl font-bold">OK</button>' : ''}
                </div>
            </div>
        `;

        document.body.appendChild(modalOverlay);
    },

    closeModal: function () {
        const el = document.getElementById("ui-modal-overlay");
        if (el) {
            el.classList.add('opacity-0');
            setTimeout(() => el.remove(), 200);
        }
    },

    // --- EFEITOS ESPECIAIS (FX) ---
    fx: {
        playSuccess: function () {
            if (window.audioManager) audioManager.play('success');
            this.fireConfetti();
        },

        // Feedback Visual de Sucesso
        success: function (btn) {
            this.playSuccess();
            if (btn) {
                btn.classList.add('animate-success', 'bg-green-100', 'border-green-500', 'dark:bg-green-900/30');
                const icon = btn.querySelector('div');
                if (icon) {
                    icon.innerHTML = '<i class="fas fa-check"></i>';
                    icon.classList.add('bg-green-500', 'text-white', 'border-transparent');
                }
            }
        },

        // Feedback Visual de Erro
        error: function (btn) {
            if (window.audioManager) audioManager.play('error');
            // [NOVO] Mostra Toast de erro
            ui.showToast("Ops! Resposta incorreta.", "error");

            if (navigator.vibrate) navigator.vibrate(200);
            if (btn) {
                btn.classList.add('animate-shake', 'bg-red-100', 'border-red-500', 'dark:bg-red-900/30');
                const icon = btn.querySelector('div');
                if (icon) {
                    icon.innerHTML = '<i class="fas fa-times"></i>';
                    icon.classList.add('bg-red-500', 'text-white', 'border-transparent');
                }
            }
        },

        fireConfetti: function () {
            const c = document.getElementById('confetti-canvas') || document.createElement('canvas');
            if (!c.id) {
                c.id = 'confetti-canvas';
                c.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:999';
                document.body.appendChild(c);
            }
            const ctx = c.getContext('2d');
            c.width = window.innerWidth;
            c.height = window.innerHeight;

            const p = Array.from({ length: 50 }, () => ({
                x: c.width / 2,
                y: c.height / 2,
                color: ['#58cc02', '#1cb0f6', '#ff4b4b', '#fbbf24'][Math.floor(Math.random() * 4)], // [MELHORIA] Mais cores
                vx: (Math.random() - .5) * 20,
                vy: (Math.random() - .5) * 20,
                life: 1
            }));

            function step() {
                ctx.clearRect(0, 0, c.width, c.height);
                let a = false;
                p.forEach(o => {
                    if (o.life > 0) {
                        a = true;
                        o.x += o.vx;
                        o.y += o.vy;
                        o.vy += 0.5; // Gravidade
                        o.life -= 0.02;
                        ctx.globalAlpha = o.life;
                        ctx.fillStyle = o.color;
                        ctx.beginPath();
                        ctx.arc(o.x, o.y, 6, 0, 6.28);
                        ctx.fill();
                    }
                });
                if (a) requestAnimationFrame(step);
                else ctx.clearRect(0, 0, c.width, c.height);
            }
            step();
        },

        streakUp: function () {
            if (window.audioManager) audioManager.play('success');

            // Cria um aviso visual no meio da tela
            const div = document.createElement('div');
            div.className = "fixed inset-0 z-[60] flex items-center justify-center pointer-events-none bg-black/40 backdrop-blur-sm transition-opacity";
            div.innerHTML = `
                <div class="flex flex-col items-center animate-bounce-in bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border-b-8 border-orange-500">
                    <i class="fas fa-fire text-8xl text-orange-500 drop-shadow-lg mb-4 animate-pulse"></i>
                    <h1 class="text-4xl font-black text-orange-500 uppercase tracking-wider mb-2">Ofensiva!</h1>
                    <p class="text-gray-600 dark:text-white font-bold text-2xl drop-shadow-sm">
                        ${(app.state.userProgress.streak || 0)} dias seguidos
                    </p>
                </div>
            `;
            document.body.appendChild(div);

            // [NOVO] Confete extra
            this.fireConfetti();

            // Remove depois de 3 segundos com fade out
            setTimeout(() => {
                div.classList.add('opacity-0');
                setTimeout(() => div.remove(), 500);
            }, 2500);
        },
    }
};