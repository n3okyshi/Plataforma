/**
 * GAME.JS - LÓGICA DE GAMIFICAÇÃO E PROGRESSO
 * Responsável por XP, Ofensiva (Streak), Conclusão de Aulas e Quiz.
 */

var game = {

    // Helper: Pega a data de hoje formatada (AAAA-MM-DD)
    // Usa "en-CA" pois segue o padrão ISO 8601 (2024-12-31) que ordena corretamente
    _getToday: function () {
        return new Date().toLocaleDateString('en-CA');
    },

    // ========================================================================
    // 1. SINCRONIZAÇÃO E OFENSIVA (STREAK)
    // ========================================================================

    // Mapa legado (título -> id) carregado uma vez por sessão.
    _mapaLegado: null,
    // Promessa da migração em andamento (evita duas migrações concorrentes).
    _migracaoEmCurso: null,

    // Chamado apenas no Login/Boot para checar se perdeu a ofensiva
    syncProgress: function (user) {
        if (!user) return; // Proteção básica

        // Antes de qualquer leitura de completedLessons: migra títulos -> ids.
        this.migrarProgresso(user);

        if (!user.streak) user.streak = 0;
        if (!user.lastActivity) return; // Usuário novo, nunca estudou

        const hoje = this._getToday();
        const ultimaAtividade = user.lastActivity;

        // Se já logou hoje, tudo certo
        if (ultimaAtividade === hoje) return;

        // Calcula a diferença em dias reais
        const dataHoje = new Date(hoje);
        const dataUltima = new Date(ultimaAtividade);
        const diffTempo = dataHoje - dataUltima;
        const diffDias = diffTempo / (1000 * 60 * 60 * 24);

        // Se passou mais de 1 dia (ex: estudou dia 1, hoje é dia 3), perdeu.
        // Math.floor garante que 1.5 dias ainda conta como "ontem" dependendo do fuso,
        // mas aqui arredondamos para ser rigoroso: > 1.9 dia já é perigoso.
        // Vamos usar > 1.5 para dar uma margem de segurança.
        if (diffDias > 1.5) {
            console.log("🔥 [Game] Ofensiva perdida! (Dias ausente: " + diffDias.toFixed(1) + ")");
            user.streak = 0;

            // Só salva se realmente mudou algo
            if (window.app && app.saveProgress) app.saveProgress();
            if (window.ui && ui.updateHeader) ui.updateHeader();
        }
    },

    // ========================================================================
    // 1.1 MIGRAÇÃO DE PROGRESSO LEGADO (TÍTULO -> ID CANÔNICO)
    // ========================================================================

    /**
     * Migração UMA-VEZ de `completedLessons` (R5/R24): se `progressoV2` não
     * estiver marcado E houver alguma entrada fora do padrão canônico, traduz
     * os títulos pelo `data/base/mapa-legado-ids.json` (fetch único, cacheado)
     * e persiste só se a lista mudou. Sem mapa (fetch falhou ou JSON vazio) ou
     * 100% canônico: nada de fetch/flag/save.
     * @param {Object} user app.state.userProgress (convidado ou autenticado)
     * @returns {Promise<Object>} o próprio user
     */
    migrarProgresso: function (user) {
        if (!user || user.progressoV2 === true) return Promise.resolve(user);
        if (typeof traduzirProgresso !== 'function') return Promise.resolve(user);

        // R24: lista vazia (convidado/usuário novo) ou 100% de ids canônicos
        // não precisa do mapa — sem fetch, sem flag, sem save.
        const jaCanonico = (typeof precisaMigrar === 'function')
            ? !precisaMigrar(user.completedLessons, user.progressoV2)
            : false;
        if (jaCanonico) return Promise.resolve(user);

        if (this._migracaoEmCurso) return this._migracaoEmCurso;

        const aplicar = (mapa) => {
            // Mapa vazio/ inválido = indisponível: não muta nem marca a flag,
            // para tentar de novo no próximo boot (contrato de "sem data loss").
            if (!mapa || typeof mapa !== 'object' || Object.keys(mapa).length === 0) return user;

            const antes = Array.isArray(user.completedLessons) ? user.completedLessons : [];
            const depois = traduzirProgresso(antes, mapa);
            user.completedLessons = depois;
            user.progressoV2 = true;

            // Só persiste quando a lista realmente mudou (R24).
            const mudou = (typeof progressoMudou === 'function') ? progressoMudou(antes, depois) : true;
            if (!mudou) return user;

            if (window.app && app.saveProgress) app.saveProgress();
            if (window.ui && ui.updateHeader) ui.updateHeader();
            return user;
        };

        this._migracaoEmCurso = this._carregarMapaLegado()
            .then(aplicar)
            .catch((erro) => {
                console.warn("[Game] Falha na migração de progresso:", erro);
                return user;
            })
            .then((resultado) => {
                this._migracaoEmCurso = null;
                return resultado;
            });

        return this._migracaoEmCurso;
    },

    /**
     * Carrega (uma vez) o mapa título -> id, relativo à raiz do site.
     * @returns {Promise<Object|null>} null se indisponível
     */
    _carregarMapaLegado: function () {
        if (this._mapaLegado) return Promise.resolve(this._mapaLegado);
        if (typeof fetch !== 'function') return Promise.resolve(null);

        return fetch('data/base/mapa-legado-ids.json')
            .then((resposta) => {
                if (!resposta || !resposta.ok) {
                    throw new Error("HTTP " + (resposta ? resposta.status : "?"));
                }
                return resposta.json();
            })
            .then((mapa) => {
                const valido = mapa && typeof mapa === 'object' && Object.keys(mapa).length > 0;
                this._mapaLegado = valido ? mapa : null;
                return this._mapaLegado;
            })
            .catch((erro) => {
                console.warn("[Game] Mapa legado indisponível (nova tentativa no próximo boot):", erro);
                return null;
            });
    },

    // Chamado ao ganhar XP (terminar aula/quiz)
    updateStreak: function () {
        // [Proteção] Garante que app e user existem
        if (!window.app || !app.state || !app.state.userProgress) return;

        const user = app.state.userProgress;
        const hoje = this._getToday();
        const ultima = user.lastActivity;

        // Cenário A: Já pontuou hoje? Não aumenta streak, só atualiza lastActivity
        if (ultima === hoje) return;

        // Cenário B: É um novo dia de estudo!
        user.streak = (user.streak || 0) + 1;
        user.lastActivity = hoje;

        // Chama efeito visual da UI
        if (window.ui && ui.fx && ui.fx.streakUp) {
            ui.fx.streakUp();
        }

        if (app.saveProgress) app.saveProgress();
        if (window.ui) ui.updateHeader();
    },

    // ========================================================================
    // 2. CONTROLE DE AULAS (LESSONS)
    // ========================================================================

    isLessonCompleted: function (lessonId) {
        const user = app.state?.userProgress;
        return user?.completedLessons?.includes(lessonId);
    },

    finishLesson: function (lessonId) {
        // [Proteção]
        if (!app.state.userProgress) {
            console.error("[Game] Erro: Usuário não carregado.");
            return;
        }

        // Se já completou, apenas volta
        if (this.isLessonCompleted(lessonId)) {
            if(window.ui) ui.showToast("Você já completou esta aula!", "info");
            else alert("Aula já concluída!");
            app.navigate('map');
            return;
        }

        // Inicializa array se não existir
        if (!app.state.userProgress.completedLessons) {
            app.state.userProgress.completedLessons = [];
        }

        // Registra conclusão
        app.state.userProgress.completedLessons.push(lessonId);

        // Atualiza ofensiva
        this.updateStreak();

        // Efeitos e XP
        if (window.ui && ui.fx) ui.fx.playSuccess();
        this.addXP(50);

        // ===== VERIFICAR BADGES =====
        if (window.badges) {
            const disciplina = app.state.currentSubject;
            const nivel = app.state.currentLevel;

            // Verifica badges de trilha
            badges.checkTrilhaBadges(disciplina, nivel, app.state.userProgress);
            // Verifica badges de milestone
            badges.checkMilestoneBadges(app.state.userProgress);
            // Verifica badges de streak
            badges.checkStreakBadges(app.state.userProgress);
        }

        // Feedback e Navegação
        if (window.ui && ui.showToast) {
            ui.showToast("Aula Concluída! +50 XP", "success");
            setTimeout(() => app.navigate('map'), 1500);
        } else {
            alert("Aula concluída! 🎉");
            app.navigate('map');
        }
    },

    addXP: function (amount) {
        if (!app.state.userProgress) return;

        const currentXP = parseInt(app.state.userProgress.xp) || 0;
        app.state.userProgress.xp = currentXP + amount;

        if (app.saveProgress) app.saveProgress();
        if (window.ui) ui.updateHeader();
    },

    // ========================================================================
    // 3. SISTEMA DA ARENA (QUIZ)
    // ========================================================================

    startArena: function () {
        const theme = app.state.currentCourse || app.state.currentSubject;
        const level = app.state.currentLevel;
        const questions = window.Registry ? Registry.getQuestoes(level, theme, null, 'treino') : [];
        if (!questions.length) {
            if (window.ui) ui.showToast("Sem questões revisadas para este nível e componente.", "info");
            return;
        }
        app.state.arena.activeQuestions = arena.embaralhar(questions).slice(0, 5);
        app.state.arena.answered = false;

        // Inicializa estado da Arena
        app.state.arena.currentIndex = 0;
        app.state.arena.score = 0;
        app.navigate('arena_play');
    },

    handleAnswer: function (btn, idx) {
        const q = app.state.arena.activeQuestions[app.state.arena.currentIndex];

        // [Proteção] Se a questão não existir (erro de índice), sai
        if (!q || app.state.arena.answered) return;
        app.state.arena.answered = true;

        const isCorrect = idx === q.correta;
        const grid = document.getElementById('options-grid');

        // Bloqueia cliques múltiplos
        if (grid) grid.classList.add('pointer-events-none');

        if (isCorrect) {
            if (window.ui && ui.fx) ui.fx.success(btn);
            app.state.arena.score++;
            this.addXP(15);
        } else {
            if (window.ui && ui.fx) ui.fx.error(btn);
        }

        const feedback = document.createElement('div');
        feedback.className = 'max-w-3xl mx-auto p-6';
        const texto = document.createElement('p');
        texto.textContent = q.explicacao;
        feedback.appendChild(texto);
        const avancar = document.createElement('button');
        avancar.textContent = 'Continuar';
        avancar.dataset.action = 'arena-global-next';
        avancar.className = 'mt-4 px-6 py-3 rounded-xl bg-brand-blue text-white';
        feedback.appendChild(avancar);
        if (grid) grid.parentNode.appendChild(feedback);
    },

    finishArena: function () {
        // Se acertou pelo menos uma, conta como atividade do dia
        if (app.state.arena.score > 0) {
            this.updateStreak();
        }

        if (window.ui && ui.fx) ui.fx.playSuccess();

        const msg = `Fim do Quiz! Você acertou ${app.state.arena.score} de ${app.state.arena.activeQuestions.length}`;

        if (window.ui && ui.showModal) {
            ui.showModal("Resultado", `<div class='text-center text-4xl mb-4'>🏆</div><p>${msg}</p>`, [
                { label: "Voltar ao Mapa", onclick: () => app.navigate('home'), class: "bg-brand-blue text-white" }
            ]);
        } else {
            alert(msg);
            app.navigate('home');
        }
    },

    // ========================================================================
    // 4. SISTEMA DE NOTAS E PROVAS
    // ========================================================================

    registrarNota: function (unidade, tipo, nota) {
        if (!app.state.userProgress) return;
        if (!app.state.userProgress.desempenho) app.state.userProgress.desempenho = {};

        const key = `${app.state.currentSubject}|${app.state.currentLevel}|${unidade}|${tipo}`;
        const reg = app.state.userProgress.desempenho[key] || { nota: 0, tentativas: 0 };
        if (tipo === 'prova') {
            reg.escopo = 'parte_objetiva';
            reg.etapaPraticaPendente = !!(window.Registry && Registry.getProva(app.state.currentLevel, app.state.currentSubject, unidade)?.avaliacaoPratica);
        }

        if (tipo === 'prova') {
            // Regra da Prova: Máximo 3 tentativas, salva a maior nota
            if (reg.tentativas >= 3) {
                if(window.ui) ui.showToast("Limite de tentativas atingido!", "error");
                else alert("Limite atingido!");
                return;
            }
            reg.tentativas++;
            if (nota > reg.nota) reg.nota = nota;
        } else {
            // Regra de Atividade Comum: Média ponderada simples
            const total = reg.nota * reg.tentativas;
            reg.tentativas++;
            reg.nota = (total + nota) / reg.tentativas;
        }

        app.state.userProgress.desempenho[key] = reg;
        if (app.saveProgress) app.saveProgress();
    },

    getNota: function (unidade, tipo) {
        return app.state.userProgress?.desempenho?.[`${app.state.currentSubject}|${app.state.currentLevel}|${unidade}|${tipo}`]?.nota ?? null;
    },

    // ========================================================================
    // 5. WRAPPERS DE COMPATIBILIDADE (LEGADO/HTML PURO)
    // Mantidos para suportar os botões "Verificar" dentro dos textos das aulas
    // ========================================================================

    verificarAtividade: function (id, resp) {
        const inp = document.getElementById(id);
        if (!inp) return;

        const val = inp.value.trim().toLowerCase();
        const gabarito = resp.toString().toLowerCase();

        if (val == gabarito) {
            // Estilo Tailwind direto no elemento
            inp.className = "border-green-500 bg-green-50 ring-2 ring-green-200 p-2 rounded transition-all";
            if (window.audioManager) audioManager.play('success');
            if (window.ui) ui.showToast("Correto!", "success");
        } else {
            inp.className = "border-red-500 bg-red-50 p-2 rounded transition-all animate-shake";
            if (window.audioManager) audioManager.play('error');
        }
    },

    verificarQuiz: function (elementoBotao, isCorreto, idFeedback) {
        const feedbackEl = document.getElementById(idFeedback);
        const pai = elementoBotao.parentElement;

        // Reseta estilos dos irmãos
        Array.from(pai.children).forEach(btn => {
            // Remove classes de sucesso/erro
            btn.classList.remove(
                'bg-green-500/20', 'border-green-500', 'text-green-600', 'dark:text-green-300', 'ring-2', 'ring-green-400',
                'bg-red-500/20', 'border-red-500', 'text-red-600', 'dark:text-red-300', 'ring-2', 'ring-red-400',
                'animate-success', 'animate-shake'
            );
            // Adiciona classe neutra se não for o clicado
            if (btn !== elementoBotao) btn.classList.add('opacity-50');
        });

        // Remove estilo "glass" para aplicar cor sólida
        elementoBotao.classList.remove('glass-child');

        if (isCorreto) {
            elementoBotao.classList.add('bg-green-500/20', 'border-green-500', 'text-green-700', 'dark:text-green-300', 'border-2', 'animate-success');
            if (window.audioManager) audioManager.play('success');

            if (feedbackEl) {
                feedbackEl.classList.remove('hidden');
                feedbackEl.classList.add('animate-fade-in');
            }
        } else {
            elementoBotao.classList.add('bg-red-500/20', 'border-red-500', 'text-red-700', 'dark:text-red-300', 'border-2', 'animate-shake');
            if (window.audioManager) audioManager.play('error');
            if (navigator.vibrate) navigator.vibrate(200);

            if (feedbackEl) feedbackEl.classList.add('hidden');
        }
    },
};
