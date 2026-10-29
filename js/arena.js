/** Desafios por componente, nível e unidade. Treino e prova usam bancos separados. */
const arena = {
    sessaoAtual: { ativo: false },

    embaralhar(lista) {
        const copia = [...lista];
        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia;
    },

    comecarDesafio(disciplina, nivel, unidade, tipo) {
        this.sessaoAtual = { ativo: false };
        if (!window.Registry || !['treino', 'prova'].includes(tipo)) return;
        let pool = Registry.getQuestoes(nivel, disciplina, unidade, tipo);
        const prova = tipo === 'prova' ? Registry.getProva(nivel, disciplina, unidade) : null;
        const quantidade = tipo === 'prova' ? (prova?.questoes?.length || 0) : 5;
        if (tipo === 'prova' && prova && Array.isArray(prova.questoes)) {
            const porId = new Map(pool.map(q => [q.id, q]));
            pool = prova.questoes.map(id => porId.get(id)).filter(Boolean);
        }
        if (!quantidade || pool.length < quantidade || new Set(pool.map(q => q.id)).size !== pool.length) {
            const msg = tipo === 'prova'
                ? 'A prova desta unidade ainda não está disponível.'
                : 'O treino desta unidade ainda não tem questões suficientes.';
            if (window.ui) ui.showToast(msg, 'info');
            return;
        }
        const selecionadas = tipo === 'prova' ? pool : this.embaralhar(pool).slice(0, quantidade);
        this.sessaoAtual = {
            ativo: true, disciplina, nivel, unidade, tipo, prova,
            questoesSelecionadas: selecionadas, indice: 0, acertos: 0,
            respostasUsuario: [], respondida: false, startTime: Date.now()
        };
        app.state.currentView = 'arena';
        this.renderizarTelaArena();
    },

    renderizarTelaArena() {
        const s = this.sessaoAtual;
        const q = s.questoesSelecionadas[s.indice];
        const container = document.getElementById('main-container');
        if (!container || !q) return;
        s.respondida = false;
        const instrucoes = s.tipo === 'prova'
            ? (s.prova.instrucoes || 'Responda a todos os itens. A correção será apresentada ao final.')
            : 'Escolha uma alternativa, leia a resolução e avance quando estiver pronto.';
        container.innerHTML = `<div class="max-w-3xl mx-auto px-6 pt-6"><h1 class="text-xl font-bold">${views.escapeHTML(s.tipo === 'prova' ? s.prova.titulo : 'Treino da unidade')}</h1><p>${views.escapeHTML(instrucoes)}</p></div>`
            + views.renderArena(q, s.indice, s.questoesSelecionadas.length, 'arena-unit-answer')
            + '<div id="arena-feedback" class="max-w-3xl mx-auto px-6 pb-10" aria-live="polite"></div>';
        window.scrollTo(0, 0);
    },

    responder(indice) {
        const s = this.sessaoAtual;
        const q = s.questoesSelecionadas?.[s.indice];
        if (!s.ativo || s.respondida || !q || !Number.isInteger(indice) || indice < 0 || indice >= q.opcoes.length) return;
        s.respondida = true;
        const acertou = indice === q.correta;
        if (acertou) s.acertos++;
        s.respostasUsuario.push({ idQuestao: q.id, respostaDada: indice, acertou });
        document.querySelectorAll('[data-action="arena-unit-answer"]').forEach(b => {
            b.disabled = true;
            if (s.tipo === 'treino' && Number(b.dataset.arg) === q.correta) b.classList.add('ring-4', 'ring-green-400');
        });
        if (s.tipo === 'treino' && acertou && window.game) game.addXP(10);
        const feedback = document.getElementById('arena-feedback');
        if (feedback) {
            feedback.innerHTML = s.tipo === 'prova'
                ? '<p>Resposta registrada. A resolução será apresentada ao final.</p>'
                : `<h2 class="text-xl font-bold">${acertou ? 'Resposta correta!' : 'Vamos revisar.'}</h2><p>${views.escapeHTML(q.explicacao)}</p>`;
            feedback.innerHTML += '<button data-action="arena-unit-next" class="mt-4 px-6 py-3 rounded-xl bg-brand-blue text-white font-bold">Continuar</button>';
            feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    },

    proximaQuestao() {
        const s = this.sessaoAtual;
        if (!s.ativo || !s.respondida) return;
        s.respondida = false;
        s.indice++;
        if (s.indice >= s.questoesSelecionadas.length) this.finalizarDesafio();
        else this.renderizarTelaArena();
    },

    finalizarDesafio() {
        const s = this.sessaoAtual;
        if (!s.ativo) return;
        s.ativo = false;
        const total = s.questoesSelecionadas.length;
        const nota = s.acertos / total * 10;
        if (window.game && app.state.currentSubject === s.disciplina && app.state.currentLevel === s.nivel) {
            game.registrarNota(s.unidade, s.tipo, nota);
        }
        const container = document.getElementById('main-container');
        if (!container) return;
        const revisao = s.questoesSelecionadas.map((q, i) => {
            const r = s.respostasUsuario[i];
            return `<li class="my-5 p-4 rounded-xl border"><h2 class="font-bold">${i + 1}. ${views.escapeHTML(q.pergunta)}</h2><p>Sua resposta: ${views.escapeHTML(q.opcoes[r.respostaDada])} — ${r.acertou ? 'correta' : 'rever'}</p><p>Resposta esperada: ${views.escapeHTML(q.opcoes[q.correta])}</p><p>${views.escapeHTML(q.explicacao)}</p></li>`;
        }).join('');
        const pratica = s.tipo === 'prova' ? s.prova?.avaliacaoPratica : null;
        const etapaPratica = pratica ? `<section class="my-8 p-5 rounded-xl border"><h2 class="text-2xl font-bold">Etapa prática: ${views.escapeHTML(pratica.titulo)}</h2><p class="my-3">${views.escapeHTML(pratica.enunciado)}</p><h3 class="font-bold">Critérios para observar sua produção</h3><ul class="list-disc pl-5">${pratica.rubrica.map(c => `<li>${views.escapeHTML(c)}</li>`).join('')}</ul><p class="my-3">A nota acima considera os itens objetivos. Esta etapa precisa da sua produção e da avaliação do professor; não recebe nota automática.</p><details><summary class="font-bold cursor-pointer">Orientações para autoavaliação</summary><p>${views.escapeHTML(pratica.gabarito)}</p></details></section>` : '';
        const tituloResultado = pratica ? 'Resultado da parte objetiva' : 'Resultado';
        container.innerHTML = `<section class="max-w-3xl mx-auto p-6"><h1 class="text-3xl font-bold">${tituloResultado}: ${nota.toFixed(1)}</h1><p>${s.acertos} de ${total} respostas corretas.</p><h2 class="text-xl font-bold mt-6">Correção comentada</h2><ol>${revisao}</ol>${etapaPratica}<button data-action="nav" data-arg="map" class="px-6 py-3 rounded-xl bg-brand-blue text-white">Voltar à trilha</button></section>`;
        window.scrollTo(0, 0);
    }
};
window.arena = arena;
