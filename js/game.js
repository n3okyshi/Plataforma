var game = {

    // Helper: Pega a data de hoje formatada (AAAA-MM-DD) para evitar erros de fuso horário
    _getToday: function () {
        return new Date().toLocaleDateString('en-CA'); // Retorna "2023-10-30"
    },
    syncProgress: function (user) { },
    // 1. Chamado ao abrir o App (app.js)
    // Serve apenas para RESETAR a ofensiva se o aluno ficou dias sem vir.
    syncProgress: function (user) {
        if (!user.streak) user.streak = 0;
        if (!user.lastActivity) return; // Nunca estudou

        const hoje = this._getToday();
        const ultimaAtividade = user.lastActivity;

        // Calcula a diferença de dias
        const diffTempo = new Date(hoje) - new Date(ultimaAtividade);
        const diffDias = diffTempo / (1000 * 60 * 60 * 24);

        // Se a diferença for maior que 1 dia (e não for hoje), perdeu a ofensiva!
        if (diffDias > 1 && ultimaAtividade !== hoje) {
            console.log("🔥 Ofensiva perdida! Resetando...");
            user.streak = 0;
            app.saveProgress();
            ui.updateHeader(); // Atualiza visual para mostrar 0 ou ícone cinza
        }
    },

    // 2. Chamado ao terminar uma Lição ou Arena
    updateStreak: function () {
        const user = app.state.userProgress;
        const hoje = this._getToday();
        const ultima = user.lastActivity;

        // Cenário A: Já estudou hoje? Não faz nada.
        if (ultima === hoje) return;

        // Cenário B: Estudou ontem? (Diferença de 1 dia ou é a primeira vez)
        // Se a streak estava zerada, vira 1. Se tinha numero, aumenta.
        // Como o syncProgress já rodou no login, se ele não zerou lá, é porque é sequencial.

        user.streak = (user.streak || 0) + 1;
        user.lastActivity = hoje;

        // Efeito visual de Fogo
        ui.fx.streakUp();

        app.saveProgress();
        ui.updateHeader();
    },

    // Verifica se completou lição
    isLessonCompleted: function (lessonId) {
        return app.state.userProgress?.completedLessons?.includes(lessonId);
    },

    // Finaliza lição teórica
    finishLesson: function (lessonId) {
        if (this.isLessonCompleted(lessonId)) {
            alert("Aula já concluída!");
            app.navigate('map');
            return;
        }
        if (!app.state.userProgress.completedLessons) app.state.userProgress.completedLessons = [];

        app.state.userProgress.completedLessons.push(lessonId);

        this.updateStreak();

        ui.fx.playSuccess(); // Usa FX da UI
        this.addXP(50);

        setTimeout(() => { alert("Aula concluída! 🎉"); app.navigate('map'); }, 1000);
    },

    // Adiciona XP e Salva
    addXP: function (amount) {
        const currentXP = parseInt(app.state.userProgress.xp) || 0;
        app.state.userProgress.xp = currentXP + amount;
        app.saveProgress();
        ui.updateHeader(); // Atualiza UI
    },

    // Inicia Arena
    startArena: function () {
        const allQ = window.PLATAFORMA_QUESTOES || [];
        if (!allQ.length) return alert("Sem questões cadastradas.");

        const theme = app.state.currentCourse || app.state.currentSubject;
        const level = app.state.currentLevel;

        const filtered = allQ.filter(q => {
            const matchAno = level ? q.ano === level : true;
            const matchTema = (q.tema === theme) || (q.ano === theme);
            return matchTema && matchAno;
        });

        if (!filtered.length) return alert(`Sem questões para ${theme} - ${level || "Geral"}`);

        app.state.arena.activeQuestions = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 5);
        app.state.arena.currentIndex = 0;
        app.state.arena.score = 0;
        app.navigate('arena_play');
    },

    // Processa Resposta da Arena
    handleAnswer: function (btn, idx) {
        const q = app.state.arena.activeQuestions[app.state.arena.currentIndex];
        const isCorrect = idx === q.correta;
        const grid = document.getElementById('options-grid');
        if (grid) grid.classList.add('pointer-events-none');

        if (isCorrect) {
            ui.fx.success(btn);
            app.state.arena.score++;
            this.addXP(15);
        } else {
            ui.fx.error(btn);
        }

        setTimeout(() => {
            app.state.arena.currentIndex++;
            app.navigate('arena_play');
        }, 1500);
    },

    finishArena: function () {

        if (app.state.arena.score > 0) {
            this.updateStreak();
        }

        ui.fx.playSuccess();
        alert(`Fim! Acertos: ${app.state.arena.score}`);
        app.navigate('home');
    },

    // Sistema de Notas
    registrarNota: function (unidade, tipo, nota) {
        if (!app.state.userProgress.desempenho) app.state.userProgress.desempenho = {};
        const key = `${unidade}_${tipo}`;
        const reg = app.state.userProgress.desempenho[key] || { nota: 0, tentativas: 0 };

        if (tipo === 'prova') {
            if (reg.tentativas >= 3) return alert("Limite de tentativas atingido!");
            reg.tentativas++;
            if (nota > reg.nota) reg.nota = nota;
        } else {
            const total = reg.nota * reg.tentativas;
            reg.tentativas++;
            reg.nota = (total + nota) / reg.tentativas;
        }

        app.state.userProgress.desempenho[key] = reg;
        app.saveProgress();
    },

    getNota: function (unidade, tipo) {
        // Correção: APP -> app
        return app.state.userProgress?.desempenho?.[`${unidade}_${tipo}`]?.nota || null;
    },

    // --- Wrappers de Compatibilidade para HTML antigo ---

    // (Mini-quizzes dentro das lições)
    verificarAtividade: function (id, resp) {
        const inp = document.getElementById(id);
        if (!inp) return;
        if (inp.value.trim().toLowerCase() == resp.toString().toLowerCase()) {
            inp.className = "border-green-500 bg-green-50 ring-2 ring-green-200";
            audioManager.play('success');
        } else {
            inp.className = "border-red-500 bg-red-50";
            audioManager.play('error');
        }
    },

    verificarQuiz: function (elementoBotao, isCorreto, idFeedback) {
        const feedbackEl = document.getElementById(idFeedback);
        const pai = elementoBotao.parentElement;
        Array.from(pai.children).forEach(btn => {
            btn.classList.remove(
                'bg-green-500/20', 'border-green-500', 'text-green-600', 'dark:text-green-300', 'ring-2', 'ring-green-400',
                'bg-red-500/20', 'border-red-500', 'text-red-600', 'dark:text-red-300', 'ring-2', 'ring-red-400',
                'animate-success', 'animate-shake'
            );
            btn.classList.add('glass-child', 'text-gray-600', 'dark:text-gray-300');
        });
        elementoBotao.classList.remove('glass-child');
        if (isCorreto) {
            elementoBotao.classList.add('bg-green-500/20', 'border-green-500', 'text-green-700', 'dark:text-green-300', 'border-2', 'animate-success');
            if (typeof audioManager !== 'undefined') audioManager.play('success');
            if (feedbackEl) {
                feedbackEl.classList.remove('hidden');
                feedbackEl.classList.add('animate-fade-in');
            }
        } else {
            elementoBotao.classList.add('bg-red-500/20', 'border-red-500', 'text-red-700', 'dark:text-red-300', 'border-2', 'animate-shake');
            if (typeof audioManager !== 'undefined') audioManager.play('error');
            if (navigator.vibrate) navigator.vibrate(200);
            if (feedbackEl) feedbackEl.classList.add('hidden');
        }
    },
};