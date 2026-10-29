/**
 * JS/ARENA.JS
 * Engine de Desafios e Avaliações (Treino vs Prova) - Versão Blindada
 */

const arena = {
    // Banco de dados local
    questoes: [], 

    // Sessão Atual
    sessaoAtual: {
        ativo: false,
        tipo: null, // 'treino' ou 'prova'
        unidade: null,
        questoesSelecionadas: [],
        indice: 0,
        acertos: 0,
        respostasUsuario: [],
        startTime: null // [NOVO] Para medir tempo de prova
    },

    init: function() {
        // [MELHORIA] Tenta carregar do Registry novo primeiro
        if (window.Registry && Registry.getQuestoes) {
            // Carrega tudo inicialmente, mas o filtro real acontece no comecarDesafio
            this.questoes = window.PLATAFORMA_QUESTOES || [];
            console.log("⚔️ [Arena] Conectado ao Registry.");
        } else if (window.PLATAFORMA_QUESTOES) {
            this.questoes = window.PLATAFORMA_QUESTOES;
            console.log("⚔️ [Arena] Conectado ao Legacy Global.");
        }
    },

    /**
     * Inicia um desafio específico para uma unidade
     * @param {string} disciplina - Ex: "Matemática"
     * @param {string} nivel - Ex: "6º Ano"
     * @param {string} unidade - Ex: "Frações"
     * @param {string} tipo - "treino" ou "prova"
     */
    comecarDesafio: function(disciplina, nivel, unidade, tipo) {
        console.log(`⚔️ [Arena] Iniciando: ${disciplina} > ${unidade} (${tipo})`);

        // 1. Busca Inteligente de Questões
        let pool = [];

        // Tentativa 1: Via Registry (Mais preciso)
        if (window.Registry && Registry.getQuestoes) {
            // Pega questões do Ano e Matéria
            const raw = Registry.getQuestoes(nivel, disciplina);
            // Filtra localmente por unidade e tipo
            pool = raw.filter(q => {
                const qUnidade = (q.unidade || "").trim().toLowerCase();
                const tUnidade = (unidade || "").trim().toLowerCase();
                const qTipo = (q.tipo || "treino").trim().toLowerCase();
                // Se o tipo for 'prova', aceitamos questões de 'treino' também para encher o banco
                const matchTipo = tipo === 'prova' ? true : qTipo === tipo;
                return qUnidade === tUnidade && matchTipo;
            });
        } 
        
        // Tentativa 2: Método Legado (Fallback)
        if (pool.length === 0) {
            if (!this.questoes || this.questoes.length === 0) {
                 if(window.PLATAFORMA_QUESTOES) this.questoes = window.PLATAFORMA_QUESTOES;
            }
            pool = this.questoes.filter(q => {
                const qUnidade = (q.unidade || "").trim().toLowerCase();
                const tUnidade = (unidade || "").trim().toLowerCase();
                return qUnidade === tUnidade;
            });
        }

        // [MELHORIA] Fallback Genérico para não travar a demo
        if (pool.length === 0) {
            if (window.ui) ui.showToast(`Usando questões genéricas para ${unidade}`, "warning");
            pool = this.questoes.filter(q => q.disciplina === disciplina || q.tema === disciplina);
        }

        // Se mesmo assim falhar
        if (pool.length === 0) {
            const msg = `Não há questões cadastradas para ${unidade}.`;
            if (window.ui && ui.showModal) ui.showModal("Ops!", msg, [{label: "Voltar", onclick: () => app.navigate('map') }]);
            else alert(msg);
            return;
        }

        // 3. Seleção e Embaralhamento
        const qtd = tipo === 'prova' ? 10 : 5;
        pool.sort(() => Math.random() - 0.5);
        const selecionadas = pool.slice(0, qtd);

        // 4. Configura a Sessão
        this.sessaoAtual = {
            ativo: true,
            tipo: tipo,
            unidade: unidade,
            questoesSelecionadas: selecionadas,
            indice: 0,
            acertos: 0,
            respostasUsuario: [],
            startTime: Date.now() // [NOVO] Marca o início
        };

        // 5. Renderização
        app.state.currentView = 'arena';
        this.renderizarTelaArena();
    },

    renderizarTelaArena: function() {
        const questao = this.sessaoAtual.questoesSelecionadas[this.sessaoAtual.indice];
        const total = this.sessaoAtual.questoesSelecionadas.length;
        const atual = this.sessaoAtual.indice + 1;
        
        const container = document.getElementById('main-container');
        if (!container) return; // Proteção
        
        // Scroll para o topo
        window.scrollTo(0, 0);

        // Usa View ou Fallback
        if (typeof views !== 'undefined' && views.renderArenaCard) {
            container.innerHTML = views.renderArenaCard(questao, atual, total);
        } else {
            container.innerHTML = this._htmlFallback(questao, atual, total);
        }

        // [NOVO] Inicia animação de entrada se UI disponível
        if (window.ui) {
            const card = container.querySelector('.glass-panel');
            if (card) card.classList.add('animate-fade-in');
        }
    },

    responder: function(indiceResposta) {
        // Bloqueia cliques múltiplos
        const botoes = document.querySelectorAll('.option-btn');
        botoes.forEach(b => b.classList.add('pointer-events-none'));

        const questao = this.sessaoAtual.questoesSelecionadas[this.sessaoAtual.indice];
        const acertou = indiceResposta === questao.correta;
        const btnClicado = botoes[indiceResposta];

        // [MELHORIA] Integração com UI.JS FX
        if (acertou) {
            this.sessaoAtual.acertos++;
            
            // Usa o sistema centralizado de efeitos
            if (window.ui && ui.fx) {
                ui.fx.success(btnClicado);
            } else {
                // Fallback manual
                btnClicado.classList.add('bg-green-500', 'text-white');
                if(window.audioManager) audioManager.play('success');
            }
            
            // XP Imediato por acerto (Gamificação)
            if (window.game && game.addXP) game.addXP(10);

        } else {
            if (window.ui && ui.fx) {
                ui.fx.error(btnClicado);
            } else {
                btnClicado.classList.add('bg-red-500', 'text-white');
                if(window.audioManager) audioManager.play('error');
            }
            
            // Mostra a correta se errou
            if (botoes[questao.correta]) {
                botoes[questao.correta].classList.add('ring-4', 'ring-green-400', 'bg-green-100', 'dark:bg-green-900');
            }
        }

        // Salva resposta
        this.sessaoAtual.respostasUsuario.push({
            idQuestao: questao.id || "gen_id",
            acertou: acertou,
            respostaDada: indiceResposta
        });

        // Delay para próxima questão
        setTimeout(() => {
            this.proximaQuestao();
        }, 1800);
    },

    proximaQuestao: function() {
        this.sessaoAtual.indice++;

        if (this.sessaoAtual.indice >= this.sessaoAtual.questoesSelecionadas.length) {
            this.finalizarDesafio();
        } else {
            this.renderizarTelaArena();
        }
    },

    finalizarDesafio: function() {
        const total = this.sessaoAtual.questoesSelecionadas.length;
        const acertos = this.sessaoAtual.acertos;
        const nota = (acertos / total) * 10;
        
        // Calcula tempo gasto
        const tempoSegundos = (Date.now() - this.sessaoAtual.startTime) / 1000;

        console.log(`🏁 [Arena] Fim. Nota: ${nota}. Tempo: ${tempoSegundos.toFixed(0)}s`);

        // [MELHORIA] Salvar Nota via Game Controller
        if (window.game && game.registrarNota) {
            game.registrarNota(this.sessaoAtual.unidade, this.sessaoAtual.tipo, nota);
        } else if (window.app && app.registrarNota) {
            app.registrarNota(this.sessaoAtual.unidade, this.sessaoAtual.tipo, nota);
        }

        // [MELHORIA] Atualiza Streak se foi bem
        if (nota >= 6 && window.game && game.updateStreak) {
            game.updateStreak();
        }

        // Renderiza Resultado
        const container = document.getElementById('main-container');
        
        if (typeof views !== 'undefined' && views.renderResultados) {
            container.innerHTML = views.renderResultados(nota, this.sessaoAtual.tipo, acertos, total);
            // Efeito sonoro final
            if (nota >= 6 && window.ui && ui.fx) ui.fx.playSuccess();
        } else {
            // Fallback visual simples
            container.innerHTML = `
                <div class="flex flex-col items-center justify-center min-h-screen">
                    <h1 class="text-4xl font-bold mb-4">Concluído!</h1>
                    <div class="text-6xl font-black ${nota >= 6 ? 'text-green-500' : 'text-red-500'} mb-6">${nota.toFixed(1)}</div>
                    <p class="text-gray-500 mb-8">Acertos: ${acertos} / ${total}</p>
                    <button onclick="app.navigate('map')" class="bg-blue-500 text-white px-8 py-3 rounded-xl font-bold">Voltar ao Mapa</button>
                </div>`;
            if(window.audioManager) audioManager.play('finish');
        }
    },

    // Mantido para compatibilidade se views.js falhar
    _htmlFallback: function(q, atual, total) {
        return `
            <div class="p-6 max-w-2xl mx-auto mt-10 animate-fade-in">
                <div class="flex justify-between items-center mb-6">
                    <span class="text-gray-500 font-bold uppercase text-xs tracking-widest">Questão ${atual} de ${total}</span>
                    <span class="bg-brand-blue text-white text-xs px-2 py-1 rounded">Tempo: --</span>
                </div>
                
                <div class="glass-panel p-8 rounded-3xl mb-8 shadow-lg border-b-4 border-gray-200 dark:border-gray-700">
                    <p class="text-xl md:text-2xl font-bold text-gray-800 dark:text-white leading-relaxed">${q.pergunta}</p>
                </div>

                <div class="space-y-4" id="options-grid">
                    ${q.opcoes.map((opt, i) => `
                        <button onclick="arena.responder(${i})" class="option-btn w-full p-5 glass-child rounded-2xl text-left hover:bg-white/80 transition-all font-semibold text-gray-700 dark:text-gray-200 border-2 border-transparent active:scale-[0.98]">
                            <div class="flex items-center gap-4">
                                <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center font-bold text-sm text-gray-500">${['A','B','C','D'][i] || i+1}</div>
                                <span>${opt}</span>
                            </div>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
};

// EXPOSIÇÃO GLOBAL
window.arena = arena;

// Auto-init seguro
if (window.PLATAFORMA_QUESTOES || window.Registry) arena.init();