/**
 * UI.JS - Gerenciador de Interface e Efeitos
 * Responsável por: Header, Loading, Temas, Confetes, Sons e Classes CSS.
 */
var ui = {
    init: function () {
        // Carrega tema salvo
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) this.applyTheme(savedTheme);
    },

    // Atualiza a Barra Superior (Header)
    updateHeader: function () {
        const els = {
            btnLog: document.getElementById('btn-login'),
            btnSet: document.getElementById('btn-settings'),
            lblXp: document.getElementById('header-xp'),
            lblLes: document.getElementById('header-lessons'),
            header: document.querySelector('header')
        };

        if (['login', 'loading'].includes(app.state.currentView)) {
            if (els.header) els.header.classList.add('opacity-0', 'pointer-events-none');
            return;
        }

        if (els.header) els.header.classList.remove('opacity-0', 'pointer-events-none');
        const user = app.state.userProgress;

        if (user) {
            if (els.lblXp) els.lblXp.innerText = user.xp || 0;
            if (els.lblLes) els.lblLes.innerText = user.completedLessons?.length || 0;

            if (els.btnSet) {
                els.btnSet.style.visibility = "visible";
                els.btnSet.onclick = () => app.navigate('settings');
            }

            if (els.btnLog) {
                const isGuest = user.isGuest === true;
                els.btnLog.innerHTML = `<div class="glass-child flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer"><span class="text-xs font-bold uppercase">${isGuest ? "Login" : user.name}</span></div>`;
                els.btnLog.onclick = () => isGuest ? app.logout() : app.navigate('settings');
            }
            let streakContainer = document.getElementById('header-streak');
            if (!streakContainer && document.getElementById('header-xp')) {
            } else if (streakContainer) {
                const dias = user.streak || 0;
                streakContainer.innerHTML = `<i class="fas fa-fire ${dias > 0 ? 'text-orange-500 animate-pulse' : 'text-gray-300'}"></i> ${dias}`;
            }
        }
    },

    renderLoading: function () {
        const c = document.getElementById('main-container');
        if (c) c.innerHTML = `<div class="fixed inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"><div class="w-12 h-12 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div></div>`;
    },

    toggleTheme: function () {
        if (window.audioManager) audioManager.play('click');
        const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        this.applyTheme(newTheme);

        // Atualiza persistência via APP
        if (app.state.userProgress && !app.state.userProgress.isGuest) {
            app.state.userProgress.theme = newTheme;
            app.saveProgress(); // Chama o método público do app
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
                btn.classList.add('animate-success', 'bg-green-100', 'border-green-500');
                const icon = btn.querySelector('div');
                if (icon) { icon.innerHTML = '<i class="fas fa-check"></i>'; icon.classList.add('bg-green-500', 'text-white'); }
            }
        },

        // Feedback Visual de Erro
        error: function (btn) {
            if (window.audioManager) audioManager.play('error');
            if (navigator.vibrate) navigator.vibrate(200);
            if (btn) {
                btn.classList.add('animate-shake', 'bg-red-100', 'border-red-500');
                const icon = btn.querySelector('div');
                if (icon) { icon.innerHTML = '<i class="fas fa-times"></i>'; icon.classList.add('bg-red-500', 'text-white'); }
            }
        },

        fireConfetti: function () {
            const c = document.getElementById('confetti-canvas') || document.createElement('canvas');
            if (!c.id) { c.id = 'confetti-canvas'; c.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:999'; document.body.appendChild(c); }
            const ctx = c.getContext('2d'); c.width = window.innerWidth; c.height = window.innerHeight;
            const p = Array.from({ length: 50 }, () => ({ x: c.width / 2, y: c.height / 2, color: ['#58cc02', '#1cb0f6', '#ff4b4b'][Math.floor(Math.random() * 3)], vx: (Math.random() - .5) * 20, vy: (Math.random() - .5) * 20, life: 1 }));
            function step() {
                ctx.clearRect(0, 0, c.width, c.height);
                let a = false;
                p.forEach(o => { if (o.life > 0) { a = true; o.x += o.vx; o.y += o.vy; o.vy += 0.5; o.life -= 0.02; ctx.globalAlpha = o.life; ctx.fillStyle = o.color; ctx.beginPath(); ctx.arc(o.x, o.y, 5, 0, 6.28); ctx.fill(); } });
                if (a) requestAnimationFrame(step); else ctx.clearRect(0, 0, c.width, c.height);
            }
            step();
        },
        streakUp: function () {
            if (window.audioManager) audioManager.play('success'); // Ou um som de fogo 'fire'

            // Cria um aviso visual no meio da tela
            const div = document.createElement('div');
            div.className = "fixed inset-0 z-[60] flex items-center justify-center pointer-events-none";
            div.innerHTML = `
                <div class="flex flex-col items-center animate-bounce-in">
                    <i class="fas fa-fire text-6xl text-orange-500 drop-shadow-lg mb-2"></i>
                    <h1 class="text-4xl font-black text-orange-500 stroke-white">OFENSIVA AUMENTOU!</h1>
                    <p class="text-white font-bold text-xl drop-shadow-md">${(app.state.userProgress.streak || 0)} dias seguidos</p>
                </div>
            `;
            document.body.appendChild(div);

            // Remove depois de 2 segundos
            setTimeout(() => div.remove(), 2500);

            this.fireConfetti();
        },
    }
};