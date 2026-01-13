/**
 * JS/ARENA.JS
 * Engine de Desafios e Avaliações (Treino vs Prova)
 */

const arena = {
    // Banco de dados local (carregado via window.registrarQuestoes)
    questoes: [], 

    // Sessão Atual
    sessaoAtual: {
        ativo: false,
        tipo: null, // 'treino' ou 'prova'
        unidade: null,
        questoesSelecionadas: [],
        indice: 0,
        acertos: 0,
        respostasUsuario: []
    },

    init: function() {
        // Carrega questões do registro global se existirem
        if(window.PLATAFORMA_QUESTOES) {
            this.questoes = window.PLATAFORMA_QUESTOES;
        }
        console.log("⚔️ [Arena] Engine pronta com " + this.questoes.length + " questões.");
    },

    /**
     * Inicia um desafio específico para uma unidade
     */
    comecarDesafio: function(disciplina, nivel, unidade, tipo) {
        
        // 1. Verifica se há questões carregadas
        if (!this.questoes || this.questoes.length === 0) {
            // Tenta recarregar do global caso tenha chegado depois
            if(window.PLATAFORMA_QUESTOES) this.questoes = window.PLATAFORMA_QUESTOES;
            
            if(!this.questoes || this.questoes.length === 0) {
                alert("Erro: Nenhuma questão carregada no sistema.");
                return;
            }
        }

        // 2. Filtrar o banco de dados
        // Nota: O filtro deve ser flexível com strings
        let pool = this.questoes.filter(q => {
            // Normaliza para evitar erros de acentuação/espaço
            const qUnidade = (q.unidade || "").trim().toLowerCase();
            const tUnidade = (unidade || "").trim().toLowerCase();
            const qTipo = (q.tipo || "treino").trim().toLowerCase(); // Padrão é treino se não vier
            
            return qUnidade === tUnidade && qTipo === tipo;
        });

        // FALLBACK: Se não achar questões específicas, pega genéricas da matéria para não travar
        if (pool.length === 0) {
            console.warn(`[Arena] Nenhuma questão específica encontrada para: ${unidade} (${tipo}). Usando genéricas.`);
            pool = this.questoes.filter(q => q.disciplina === disciplina || q.tema === disciplina);
        }

        if (pool.length === 0) {
            alert(`Ainda não há desafios cadastrados para ${unidade}.`);
            return;
        }

        // 3. Regra de Embaralhamento e Seleção
        const qtd = tipo === 'prova' ? 10 : 5;
        
        // Embaralha
        pool.sort(() => Math.random() - 0.5);

        // Seleciona as N primeiras (ou todas se tiver menos que N)
        const selecionadas = pool.slice(0, qtd);

        // 4. Configura a Sessão
        this.sessaoAtual = {
            ativo: true,
            tipo: tipo,
            unidade: unidade,
            questoesSelecionadas: selecionadas,
            indice: 0,
            acertos: 0,
            respostasUsuario: []
        };

        // 5. Navega para a tela de Arena e renderiza
        app.state.currentView = 'arena'; // Força estado visual
        this.renderizarTelaArena();
    },

    renderizarTelaArena: function() {
        const questao = this.sessaoAtual.questoesSelecionadas[this.sessaoAtual.indice];
        const total = this.sessaoAtual.questoesSelecionadas.length;
        const atual = this.sessaoAtual.indice + 1;
        
        const container = document.getElementById('main-container');
        
        // Usa o views.js para renderizar o card (precisamos garantir que views tenha essa função)
        // Se views.renderArenaCard não existir, usamos um HTML básico aqui mesmo
        if (views.renderArenaCard) {
            container.innerHTML = views.renderArenaCard(questao, atual, total);
        } else {
            // Fallback simples caso você não tenha atualizado o views.js ainda
            container.innerHTML = this._htmlFallback(questao, atual, total);
        }
    },

    responder: function(indiceResposta) {
        // Bloqueia cliques múltiplos
        const botoes = document.querySelectorAll('.option-btn');
        botoes.forEach(b => b.classList.add('pointer-events-none'));

        const questao = this.sessaoAtual.questoesSelecionadas[this.sessaoAtual.indice];
        const acertou = indiceResposta === questao.correta;
        const btnClicado = botoes[indiceResposta];

        // Feedback Visual
        if (acertou) {
            this.sessaoAtual.acertos++;
            if(window.audioManager) audioManager.play('success');
            btnClicado.classList.remove('bg-white/40', 'dark:bg-black/20');
            btnClicado.classList.add('bg-green-500', 'text-white', 'border-green-700');
            // Confetti
             if(window.app && app.fireConfetti) app.fireConfetti();
        } else {
            if(window.audioManager) audioManager.play('error');
            btnClicado.classList.remove('bg-white/40', 'dark:bg-black/20');
            btnClicado.classList.add('bg-red-500', 'text-white', 'border-red-700');
            
            // Mostra a correta
            botoes[questao.correta].classList.add('ring-4', 'ring-green-400');
        }

        // Salva resposta
        this.sessaoAtual.respostasUsuario.push({
            idQuestao: questao.id,
            acertou: acertou
        });

        // Delay para próxima questão
        setTimeout(() => {
            this.proximaQuestao();
        }, 2000);
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

        // Salvar Progresso
        this.salvarNota(this.sessaoAtual.unidade, this.sessaoAtual.tipo, nota);

        // Mostrar Tela de Resultado
        const container = document.getElementById('main-container');
        if (views.renderResultados) {
            container.innerHTML = views.renderResultados(nota, this.sessaoAtual.tipo, acertos, total);
        } else {
            container.innerHTML = `<div class="p-10 text-center text-2xl">Nota: ${nota.toFixed(1)}</div><button onclick="app.back()" class="p-4 bg-blue-500 rounded text-white mt-4">Voltar</button>`;
        }
        
        if(window.audioManager) audioManager.play('finish');
    },

    salvarNota: function(unidade, tipo, nota) {
        if(window.app && app.registrarNota) {
            app.registrarNota(unidade, tipo, nota);
        }
    },

    // HTML Fallback caso o views.js não tenha o renderizador ainda
    _htmlFallback: function(q, atual, total) {
        return `
            <div class="p-6 max-w-2xl mx-auto mt-10">
                <h2 class="text-xl mb-4">Questão ${atual}/${total}</h2>
                <div class="glass-panel p-6 rounded-2xl mb-6 text-xl font-bold">${q.pergunta}</div>
                <div class="space-y-3">
                    ${q.opcoes.map((opt, i) => `
                        <button onclick="arena.responder(${i})" class="option-btn w-full p-4 glass-child rounded-xl text-left hover:bg-white/50 transition">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
};

// EXPOSIÇÃO GLOBAL (Importante para o onclick funcionar)
window.arena = arena;

// Auto-init se carregado depois do loader
if(window.PLATAFORMA_QUESTOES) arena.init();

//audioManager.init();
//audioManager.play('success');
