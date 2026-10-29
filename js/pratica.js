/**
 * ============================================================================
 * PRATICA.JS — ATIVIDADES DA AULA (§5.11, Task 9)
 * ============================================================================
 * Renderiza as `atividades[]` do JSON canônico da aula DEPOIS dos blocos de
 * conteúdo e corrige tudo localmente (offline, determinístico):
 *
 *   - multipla_escolha: compara o índice marcado com `correta` e mostra
 *     `explicacao`;
 *   - numerica: aceita vírgula OU ponto e compara com `resposta` ± `tolerancia`;
 *   - discursiva: revela `gabarito`/`rubrica` após o envio (autoavaliação).
 *
 * Sem rede e sem escrita no servidor: cada tentativa vira um evento entregue a
 * `filaResultados.registrar` (telemetria separada, js/fila-resultados.js).
 *
 * Contrato de interação (Task 7): o HTML emitido SÓ usa data-action/data-arg*;
 * os handlers são instalados em `ui.actions` por `instalarAcoes`.
 *   - `pratica-responder` (aulaId, atividadeId, el) — alternativa marcada,
 *     índice da alternativa em `data-arg3` (string do DOM, convertida aqui);
 *   - `pratica-enviar`    (aulaId, atividadeId, el) — numérica/discursiva.
 *
 * O arquivo roda no browser (global `window.pratica`) e no Node (`require`).
 */

'use strict';

var pratica = (function () {
  // Nomes das ações expostos no relatório/task.
  var ACAO_RESPONDER = 'pratica-responder';
  var ACAO_ENVIAR = 'pratica-enviar';

  /** Escapa texto para interpolar em HTML. Usa o helper das views quando há. */
  function escapar(valor) {
    if (typeof window !== 'undefined' && window.views && typeof window.views.escapeHTML === 'function') {
      return window.views.escapeHTML(valor);
    }
    return String(valor === null || valor === undefined ? '' : valor)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Converte "3,14"/"3.14"/" 10 " em número. Devolve null quando não é
   * numérico. A vírgula é o separador decimal pt-BR; o ponto continua valendo
   * como separador decimal (padrão do JSON e do teclado numérico).
   */
  function normalizarNumero(valor) {
    if (typeof valor === 'number') return isFinite(valor) ? valor : null;
    if (typeof valor !== 'string') return null;
    var texto = valor.trim().replace(/\s+/g, '');
    if (!texto) return null;
    // Troca a vírgula decimal por ponto; mais de um ponto é ambíguo/ inválido.
    texto = texto.replace(',', '.');
    if ((texto.match(/\./g) || []).length > 1) return null;
    var numero = Number(texto);
    return isFinite(numero) ? numero : null;
  }

  /** Inteiro estrito: aceita number inteiro ou string de dígitos ("1"). */
  function inteiro(valor) {
    if (typeof valor === 'number') return Number.isInteger(valor) ? valor : null;
    if (typeof valor !== 'string') return null;
    var texto = valor.trim();
    if (!/^-?\d+$/.test(texto)) return null;
    return parseInt(texto, 10);
  }

  /**
   * Compara a resposta digitada com o gabarito numérico.
   * @param {string|number} resposta texto do input (vírgula ou ponto)
   * @param {{resposta:number, tolerancia?:number}} atividade
   * @returns {boolean}
   */
  function avaliarNumerica(resposta, atividade) {
    if (!atividade || typeof atividade !== 'object') return false;
    var esperado = normalizarNumero(atividade.resposta);
    var obtido = normalizarNumero(resposta);
    if (esperado === null || obtido === null) return false;

    var tolerancia = normalizarNumero(atividade.tolerancia);
    if (tolerancia === null || tolerancia < 0) tolerancia = 0;
    // +1e-12 absorve só o ruído de ponto flutuante, não alarga a tolerância.
    return Math.abs(obtido - esperado) <= tolerancia + 1e-12;
  }

  /**
   * Compara o índice marcado com `atividade.correta`. O índice chega do DOM
   * como string ("1") e é convertido; fora do intervalo é sempre falso.
   * @param {string|number} indice
   * @param {{alternativas:Array, correta:number}} atividade
   * @returns {boolean}
   */
  function avaliarMultipla(indice, atividade) {
    if (!atividade || typeof atividade !== 'object' || !Array.isArray(atividade.alternativas)) return false;
    var marcado = inteiro(indice);
    var correta = inteiro(atividade.correta);
    if (marcado === null || correta === null) return false;
    if (marcado < 0 || marcado >= atividade.alternativas.length) return false;
    return marcado === correta;
  }

  // --------------------------------------------------------------------------
  // Renderização
  // --------------------------------------------------------------------------

  function atributosDeAcao(aulaId, atividadeId) {
    return `data-arg="${escapar(aulaId)}" data-arg2="${escapar(atividadeId)}"`;
  }

  function corpoMultipla(atividade, aulaId, atividadeId) {
    var alternativas = Array.isArray(atividade.alternativas) ? atividade.alternativas : [];
    var botoes = alternativas.map(function (alternativa, indice) {
      return `<button type="button"
        class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-xl border-2 border-transparent transition-all"
        data-action="${ACAO_RESPONDER}" ${atributosDeAcao(aulaId, atividadeId)} data-arg3="${indice}">${escapar(alternativa)}</button>`;
    }).join('');

    var explicacao = atividade.explicacao
      ? `<p class="hidden mt-2 text-sm text-gray-600 dark:text-gray-400" data-pratica-explicacao>${escapar(atividade.explicacao)}</p>`
      : '';

    return `
      <div class="flex flex-col gap-2">${botoes}</div>
      <p class="hidden mt-3 text-sm font-bold" data-pratica-feedback role="status"></p>
      ${explicacao}`;
  }

  function corpoNumerica(atividade, aulaId, atividadeId) {
    var unidade = atividade.unidade
      ? `<span class="self-center font-bold text-gray-500 dark:text-gray-400">${escapar(atividade.unidade)}</span>`
      : '';
    var dica = atividade.dica
      ? `<p class="mt-2 text-xs text-gray-500 dark:text-gray-400"><i class="fas fa-lightbulb mr-1"></i>${escapar(atividade.dica)}</p>`
      : '';

    return `
      <div class="flex gap-2 items-center">
        <input type="text" inputmode="decimal" autocomplete="off" data-pratica-entrada
          class="flex-1 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none"
          placeholder="Sua resposta">
        ${unidade}
        <button type="button"
          class="bg-brand-blue text-white px-4 py-3 rounded-xl font-extrabold"
          data-action="${ACAO_ENVIAR}" ${atributosDeAcao(aulaId, atividadeId)}>Conferir</button>
      </div>
      <p class="hidden mt-3 text-sm font-bold" data-pratica-feedback role="status"></p>
      ${dica}`;
  }

  function corpoDiscursiva(atividade, aulaId, atividadeId) {
    var rubrica = Array.isArray(atividade.rubrica) && atividade.rubrica.length
      ? `<ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2">${atividade.rubrica
        .map(function (item) { return `<li>${escapar(item)}</li>`; })
        .join('')}</ul>`
      : '';

    return `
      <textarea rows="4" data-pratica-entrada
        class="w-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none"
        placeholder="Escreva sua resposta"></textarea>
      <div class="mt-2 flex justify-end">
        <button type="button"
          class="bg-brand-blue text-white px-4 py-3 rounded-xl font-extrabold"
          data-action="${ACAO_ENVIAR}" ${atributosDeAcao(aulaId, atividadeId)}>Enviar resposta</button>
      </div>
      <p class="hidden mt-3 text-sm font-bold" data-pratica-feedback role="status"></p>
      <div data-pratica-gabarito class="hidden mt-3 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
        <p class="text-xs font-black uppercase tracking-wide text-green-700 dark:text-green-300 mb-1">Gabarito</p>
        <p class="text-sm text-gray-700 dark:text-gray-300">${escapar(atividade.gabarito || '')}</p>
        ${rubrica}
      </div>`;
  }

  function renderAtividade(atividade, aulaId, indice) {
    if (!atividade || typeof atividade !== 'object') return '';
    var tipo = atividade.tipo;
    if (tipo !== 'multipla_escolha' && tipo !== 'numerica' && tipo !== 'discursiva') return '';

    // `id` pode faltar em conteúdo legado; mantém a chave estável pelo índice.
    var atividadeId = (typeof atividade.id === 'string' && atividade.id)
      ? atividade.id
      : 'a' + (indice + 1);
    var enunciado = escapar(atividade.enunciado);

    var corpo = tipo === 'multipla_escolha'
      ? corpoMultipla(atividade, aulaId, atividadeId)
      : (tipo === 'numerica'
        ? corpoNumerica(atividade, aulaId, atividadeId)
        : corpoDiscursiva(atividade, aulaId, atividadeId));

    return `
      <article class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm"
        data-pratica-atividade data-atividade-id="${escapar(atividadeId)}">
        <p class="font-bold text-gray-700 dark:text-gray-200 mb-3">${enunciado}</p>
        ${corpo}
      </article>`;
  }

  /**
   * HTML das atividades da aula. Devolve '' quando não há atividades (aulas
   * legadas migradas) ou quando o objeto de aula não traz o campo.
   * @param {Object} aula JSON canônico (§5.2)
   * @returns {string}
   */
  function render(aula) {
    if (!aula || !Array.isArray(aula.atividades) || aula.atividades.length === 0) return '';
    var aulaId = typeof aula.id === 'string' ? aula.id : '';

    var blocos = [];
    for (var i = 0; i < aula.atividades.length; i += 1) {
      var bloco = renderAtividade(aula.atividades[i], aulaId, i);
      if (bloco) blocos.push(bloco);
    }
    if (!blocos.length) return '';

    return `
      <section class="mt-8" data-pratica>
        <h3 class="text-2xl font-black text-gray-800 dark:text-white mb-2 flex items-center gap-2">
          <i class="fas fa-pencil-alt text-brand-blue"></i> Prática
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
          A correção acontece no seu aparelho — funciona offline.
        </p>
        <div class="flex flex-col gap-4">${blocos.join('')}</div>
      </section>`;
  }

  // --------------------------------------------------------------------------
  // Handlers (delegação da Task 7)
  // --------------------------------------------------------------------------

  function buscarAula(aulaId) {
    if (typeof window === 'undefined' || !window.Registry) return null;
    if (typeof window.Registry.getAula !== 'function') return null;
    return window.Registry.getAula(aulaId) || null;
  }

  function buscarAtividade(aulaId, atividadeId) {
    var aula = buscarAula(aulaId);
    if (!aula || !Array.isArray(aula.atividades)) return null;
    for (var i = 0; i < aula.atividades.length; i += 1) {
      var atividade = aula.atividades[i];
      if (!atividade) continue;
      if (String(atividade.id) === String(atividadeId)) return atividade;
      // Conteúdo sem `id`: o render usa a chave sintética "a<n>" (1-based).
      var semId = atividade.id === undefined || atividade.id === null || atividade.id === '';
      if (semId && String(atividadeId) === 'a' + (i + 1)) return atividade;
    }
    return null;
  }

  function blocoDe(el) {
    if (!el || typeof el.closest !== 'function') return null;
    return el.closest('[data-pratica-atividade]');
  }

  /** Feedback textual via textContent (nunca innerHTML com dado do aluno). */
  function mostrarFeedback(bloco, texto, correta) {
    if (!bloco) return;
    var alvo = bloco.querySelector('[data-pratica-feedback]');
    if (!alvo) return;
    alvo.textContent = texto;
    alvo.classList.remove('hidden', 'text-green-600', 'dark:text-green-400', 'text-red-500', 'text-brand-blue');
    if (correta === true) alvo.classList.add('text-green-600', 'dark:text-green-400');
    else if (correta === false) alvo.classList.add('text-red-500');
    else alvo.classList.add('text-brand-blue');
  }

  /** Registra a tentativa na fila offline; telemetria nunca quebra a prática. */
  function registrarEvento(evento) {
    try {
      if (typeof window !== 'undefined' && window.filaResultados && typeof window.filaResultados.registrar === 'function') {
        window.filaResultados.registrar(evento);
      }
    } catch (erro) {
      // silencioso de propósito: a prática é local e não depende da telemetria
    }
  }

  function versaoDaAula(aulaId) {
    var aula = buscarAula(aulaId);
    var versao = aula && aula.metadados ? aula.metadados.versao : undefined;
    return Number.isInteger(versao) ? versao : 1;
  }

  /** Handler de `pratica-responder` (múltipla escolha). */
  function responderMultipla(aulaId, atividadeId, el) {
    var atividade = buscarAtividade(aulaId, atividadeId);
    if (!atividade) return;

    var indice = parseInt(el && el.getAttribute ? el.getAttribute('data-arg3') : '', 10);
    if (!isFinite(indice)) return;
    var correta = avaliarMultipla(indice, atividade);

    var bloco = blocoDe(el);
    mostrarFeedback(bloco, correta
      ? 'Resposta correta!'
      : 'Ainda não. Revise o conteúdo e tente outra alternativa.', correta);

    if (bloco) {
      var explicacao = bloco.querySelector('[data-pratica-explicacao]');
      if (explicacao) explicacao.classList.remove('hidden');

      var botoes = bloco.querySelectorAll('[data-action="' + ACAO_RESPONDER + '"]');
      for (var i = 0; i < botoes.length; i += 1) {
        var botao = botoes[i];
        var indiceBotao = Number(botao.getAttribute('data-arg3'));
        botao.classList.remove('border-brand-blue', 'border-brand-green', 'bg-blue-50', 'dark:bg-blue-900/20');
        if (indiceBotao === indice) botao.classList.add('border-brand-blue', 'bg-blue-50', 'dark:bg-blue-900/20');
        if (indiceBotao === Number(atividade.correta)) botao.classList.add('border-brand-green');
      }
    }

    registrarEvento({
      aulaId: aulaId,
      atividadeId: atividadeId,
      tipo: 'multipla_escolha',
      resposta: indice,
      correta: correta,
      ns: Date.now(),
      versaoAula: versaoDaAula(aulaId),
    });
  }

  /** Handler de `pratica-enviar` (numérica ou discursiva). */
  function enviarAberta(aulaId, atividadeId, el) {
    var atividade = buscarAtividade(aulaId, atividadeId);
    if (!atividade) return;

    var bloco = blocoDe(el);
    var entrada = bloco ? bloco.querySelector('[data-pratica-entrada]') : null;
    var resposta = entrada && typeof entrada.value === 'string' ? entrada.value : '';

    if (atividade.tipo === 'numerica') {
      var correta = avaliarNumerica(resposta, atividade);
      mostrarFeedback(bloco, correta
        ? 'Resposta correta!'
        : 'Ainda não. Confira o cálculo e tente de novo.', correta);
      registrarEvento({
        aulaId: aulaId,
        atividadeId: atividadeId,
        tipo: 'numerica',
        resposta: resposta,
        correta: correta,
        ns: Date.now(),
        versaoAula: versaoDaAula(aulaId),
      });
      return;
    }

    if (atividade.tipo === 'discursiva') {
      // Sem correção automática nesta fase: só revela o gabarito.
      var gabarito = bloco ? bloco.querySelector('[data-pratica-gabarito]') : null;
      if (gabarito) gabarito.classList.remove('hidden');
      mostrarFeedback(bloco, 'Resposta enviada. Compare com o gabarito abaixo.', null);
      registrarEvento({
        aulaId: aulaId,
        atividadeId: atividadeId,
        tipo: 'discursiva',
        resposta: resposta,
        correta: null, // autoavaliação; o servidor decide depois
        ns: Date.now(),
        versaoAula: versaoDaAula(aulaId),
      });
    }
  }

  /**
   * Instala os handlers em `ui.actions` (contrato da Task 7). Idempotente.
   * @param {Object} [uiAlvo] default: window.ui
   * @returns {boolean} true se o registro foi feito
   */
  function instalarAcoes(uiAlvo) {
    var alvo = uiAlvo || (typeof window !== 'undefined' ? window.ui : null);
    if (!alvo || typeof alvo !== 'object' || !alvo.actions) return false;

    alvo.actions[ACAO_RESPONDER] = function (aulaId, atividadeId, el) {
      responderMultipla(aulaId, atividadeId, el);
    };
    alvo.actions[ACAO_ENVIAR] = function (aulaId, atividadeId, el) {
      enviarAberta(aulaId, atividadeId, el);
    };
    return true;
  }

  return {
    ACAO_RESPONDER: ACAO_RESPONDER,
    ACAO_ENVIAR: ACAO_ENVIAR,
    normalizarNumero: normalizarNumero,
    avaliarNumerica: avaliarNumerica,
    avaliarMultipla: avaliarMultipla,
    render: render,
    instalarAcoes: instalarAcoes,
    responderMultipla: responderMultipla,
    enviarAberta: enviarAberta,
  };
})();

if (typeof window !== 'undefined') {
  window.pratica = pratica;
  // O loader carrega este arquivo depois de js/ui.js; a guarda cobre o Node e
  // qualquer ordem de carga em testes.
  if (window.ui) pratica.instalarAcoes(window.ui);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = pratica;
}
