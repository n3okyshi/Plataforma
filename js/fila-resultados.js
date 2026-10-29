/**
 * ============================================================================
 * FILA-RESULTADOS.JS — FILA OFFLINE DE RESULTADOS (§5.11, Task 9)
 * ============================================================================
 * Cada tentativa de atividade vira um evento imutável
 * `{aulaId, atividadeId, tipo, resposta, correta, ns, versaoAula}` gravado
 * primeiro no aparelho (IndexedDB `mathlingo-fila`; localStorage e memória como
 * fallbacks) e drenado em lotes de até 100 para
 * `users/{uid}/resultados` quando houver sessão autenticada.
 *
 * Regras aplicadas:
 *  - convidado (ou sem uid) NUNCA drena: `registrar` grava só localmente;
 *  - `drenar()` nunca rejeita e nunca perde evento sem confirmação do envio;
 *  - id determinístico (hash do conteúdo, não UUID) => reenvio idempotente;
 *  - sem `enviarLote` configurado, o caminho real usa o batch do Firestore do
 *    app (nenhum import de Firebase neste arquivo — só os globais já existentes).
 *
 * O arquivo roda no browser (global `window.filaResultados`) e no Node
 * (`require`), com o mesmo guard de `js/traduzir-progresso.js`.
 */

'use strict';

var filaResultadosModulo = (function () {
  var LIMITE_LOTE = 100;
  var CHAVE_LOCALSTORAGE = 'mathlingo_fila_resultados';
  var NOME_BANCO = 'mathlingo-fila';
  var NOME_LOJA = 'eventos';

  // --------------------------------------------------------------------------
  // Helpers puros
  // --------------------------------------------------------------------------

  function texto(valor) {
    return valor === null || valor === undefined ? '' : String(valor);
  }

  function inteiro(valor) {
    var numero = Number(valor);
    return Number.isFinite(numero) ? Math.trunc(numero) : 0;
  }

  /** Resposta canônica para o hash: distingue "2" (texto) de 2 (índice). */
  function respostaCanonica(valor) {
    if (valor === null || valor === undefined) return 'nulo';
    return typeof valor + ':' + String(valor);
  }

  /** FNV-1a 32 bits (Math.imul: 32 bits sem perder precisão). */
  function fnv1a32(cadeia, semente) {
    var hash = semente >>> 0;
    for (var i = 0; i < cadeia.length; i += 1) {
      hash ^= cadeia.charCodeAt(i);
      hash = Math.imul(hash, 0x01000193) >>> 0;
    }
    return hash >>> 0;
  }

  function hex8(numero) {
    return ('00000000' + (numero >>> 0).toString(16)).slice(-8);
  }

  /**
   * Id determinístico do evento (idempotência do reenvio).
   *
   * Campos que entram no hash, exatamente:
   *   aulaId, atividadeId, tipo, resposta (com o tipo JS), ns, versaoAula.
   *
   * `correta` fica FORA de propósito: é a correção local, que o servidor pode
   * recalcular; incluí-la faria o mesmo envio mudar de id se o cliente
   * corrigisse diferente. `ns` entra porque duas tentativas iguais em momentos
   * diferentes são eventos distintos — repetir o MESMO evento (mesmo ns) é que
   * precisa cair no mesmo documento.
   *
   * @param {Object} evt
   * @returns {string} `evt_<16 hex>` (FNV-1a ×2, ~64 bits)
   */
  function idEvento(evt) {
    var evento = evt && typeof evt === 'object' ? evt : {};
    var canonico = JSON.stringify([
      texto(evento.aulaId),
      texto(evento.atividadeId),
      texto(evento.tipo),
      respostaCanonica(evento.resposta),
      inteiro(evento.ns),
      inteiro(evento.versaoAula),
    ]);
    var parte1 = fnv1a32(canonico, 0x811c9dc5);
    var parte2 = fnv1a32(canonico + '#2', 0x7f4a7c15);
    return 'evt_' + hex8(parte1) + hex8(parte2);
  }

  /** Normaliza o evento do chamador e injeta o id determinístico. */
  function normalizarEvento(evt) {
    if (!evt || typeof evt !== 'object') return null;
    var resposta = evt.resposta;
    if (typeof resposta !== 'string' && typeof resposta !== 'number') {
      resposta = resposta === null || resposta === undefined ? '' : String(resposta);
    }
    if (typeof resposta === 'string') resposta = resposta.slice(0, 2000);

    var evento = {
      aulaId: texto(evt.aulaId),
      atividadeId: texto(evt.atividadeId),
      tipo: texto(evt.tipo),
      resposta: resposta,
      // null = autoavaliação (discursiva); booleano = correção local.
      correta: evt.correta === true ? true : (evt.correta === false ? false : null),
      ns: inteiro(evt.ns) || Date.now(),
      versaoAula: inteiro(evt.versaoAula) || 1,
    };
    evento.id = idEvento(evento);
    return evento;
  }

  // --------------------------------------------------------------------------
  // Armazenamento: IndexedDB -> localStorage -> memória (por instância)
  // --------------------------------------------------------------------------

  function obterJanela() {
    try {
      return typeof window !== 'undefined' ? window : null;
    } catch (erro) {
      return null;
    }
  }

  // Sempre via `window`: no Node (testes) os dois não existem e a fila cai na
  // memória por instância, sem sequer tocar no getter experimental do Node.
  function temIndexedDB() {
    var janela = obterJanela();
    return Boolean(janela && janela.indexedDB);
  }

  function temLocalStorage() {
    var janela = obterJanela();
    return Boolean(janela && janela.localStorage);
  }

  function storeMemoria() {
    var dados = [];
    return {
      nome: 'memoria',
      ler: function () { return Promise.resolve(dados.slice()); },
      gravar: function (lista) {
        dados = lista.slice();
        return Promise.resolve();
      },
    };
  }

  function storeLocalStorage() {
    return {
      nome: 'localStorage',
      ler: function () {
        try {
          var bruto = obterJanela().localStorage.getItem(CHAVE_LOCALSTORAGE);
          var lista = bruto ? JSON.parse(bruto) : [];
          return Promise.resolve(Array.isArray(lista) ? lista : []);
        } catch (erro) {
          return Promise.resolve([]);
        }
      },
      gravar: function (lista) {
        try {
          obterJanela().localStorage.setItem(CHAVE_LOCALSTORAGE, JSON.stringify(lista));
        } catch (erro) {
          // cota cheia/modo privado: a memória da instância continua valendo
        }
        return Promise.resolve();
      },
    };
  }

  function abrirIndexedDB() {
    return new Promise(function (resolve, reject) {
      var pedido = obterJanela().indexedDB.open(NOME_BANCO, 1);

      pedido.onupgradeneeded = function () {
        var banco = pedido.result;
        if (!banco.objectStoreNames.contains(NOME_LOJA)) {
          banco.createObjectStore(NOME_LOJA, { keyPath: 'id' });
        }
      };

      pedido.onsuccess = function () {
        var banco = pedido.result;
        resolve({
          nome: 'indexedDB',
          ler: function () {
            return new Promise(function (ok, falha) {
              var tx = banco.transaction(NOME_LOJA, 'readonly');
              var pedidoTodos = tx.objectStore(NOME_LOJA).getAll();
              pedidoTodos.onsuccess = function () {
                ok(Array.isArray(pedidoTodos.result) ? pedidoTodos.result : []);
              };
              pedidoTodos.onerror = function () { falha(pedidoTodos.error); };
            });
          },
          gravar: function (lista) {
            return new Promise(function (ok, falha) {
              var tx = banco.transaction(NOME_LOJA, 'readwrite');
              var loja = tx.objectStore(NOME_LOJA);
              loja.clear();
              for (var i = 0; i < lista.length; i += 1) loja.put(lista[i]);
              tx.oncomplete = function () { ok(); };
              tx.onerror = function () { falha(tx.error); };
              tx.onabort = function () { falha(tx.error); };
            });
          },
        });
      };

      pedido.onerror = function () { reject(pedido.error || new Error('indexedDB indisponível')); };
    });
  }

  // --------------------------------------------------------------------------
  // Envio real (Firestore do app) — sem import, só os globais já carregados
  // --------------------------------------------------------------------------

  /**
   * Grava o lote em `users/{uid}/resultados` com `set(..., {merge:true})`.
   * `merge` torna create e update o mesmo caminho (as regras permitem ambos) e
   * o id determinístico impede duplicata no reenvio.
   * @returns {Promise<Array<string>>} ids confirmados
   */
  function enviarLoteFirestore(eventos, uid) {
    return Promise.resolve().then(function () {
      if (typeof firebase === 'undefined' || !firebase.firestore) {
        throw new Error('Firestore indisponível');
      }
      var servico = typeof window !== 'undefined' ? window.firebaseService : null;
      var banco = (servico && servico.db) || firebase.firestore();
      var lote = banco.batch();

      for (var i = 0; i < eventos.length; i += 1) {
        var referencia = banco.collection('users').doc(uid).collection('resultados').doc(eventos[i].id);
        lote.set(referencia, eventos[i], { merge: true });
      }

      return lote.commit().then(function () {
        return eventos.map(function (evento) { return evento.id; });
      });
    });
  }

  function obterUidPadrao() {
    try {
      var app = typeof window !== 'undefined' ? window.app : null;
      var usuario = app && app.state ? app.state.userProgress : null;
      if (!usuario || usuario.isGuest === true) return null;
      return typeof usuario.uid === 'string' && usuario.uid ? usuario.uid : null;
    } catch (erro) {
      return null;
    }
  }

  function ehConvidadoPadrao() {
    try {
      var app = typeof window !== 'undefined' ? window.app : null;
      var usuario = app && app.state ? app.state.userProgress : null;
      return Boolean(usuario && usuario.isGuest === true);
    } catch (erro) {
      return false;
    }
  }

  /**
   * Lê a confirmação do sender:
   *   - array de ids -> só esses saem da fila (confirmação parcial);
   *   - `true`/`undefined` -> o lote inteiro foi confirmado;
   *   - qualquer outra coisa -> nada confirmado (conservador).
   */
  function idsConfirmados(resposta, lote) {
    if (resposta === true || resposta === undefined || resposta === null) {
      return lote.map(function (evento) { return evento.id; });
    }
    var lista = Array.isArray(resposta)
      ? resposta
      : (resposta && Array.isArray(resposta.confirmados) ? resposta.confirmados : []);
    var porId = {};
    for (var i = 0; i < lote.length; i += 1) porId[lote[i].id] = true;
    var confirmados = [];
    for (var j = 0; j < lista.length; j += 1) {
      if (typeof lista[j] === 'string' && porId[lista[j]]) {
        confirmados.push(lista[j]);
        delete porId[lista[j]];
      }
    }
    return confirmados;
  }

  // --------------------------------------------------------------------------
  // Instância
  // --------------------------------------------------------------------------

  /**
   * Cria uma fila independente (o app usa a instância única `filaResultados`;
   * os testes criam instâncias isoladas).
   * @param {{enviarLote?:Function, obterUid?:Function, ehConvidado?:Function,
   *          armazenamento?:{ler:Function, gravar:Function}}} [opcoes]
   */
  function criarFila(opcoes) {
    var config = opcoes && typeof opcoes === 'object' ? opcoes : {};

    var estado = {
      eventos: [],
      carregado: false,
      carregando: null,
      emVoo: null,
      persistindo: Promise.resolve(),
      armazenamento: config.armazenamento || null,
      memoria: null,
      enviarLote: typeof config.enviarLote === 'function' ? config.enviarLote : null,
      obterUid: typeof config.obterUid === 'function' ? config.obterUid : obterUidPadrao,
      ehConvidado: typeof config.ehConvidado === 'function' ? config.ehConvidado : ehConvidadoPadrao,
    };

    function abrirArmazenamento() {
      if (estado.armazenamento) return Promise.resolve(estado.armazenamento);
      if (temIndexedDB()) {
        return abrirIndexedDB().catch(function () {
          // Bloqueado/modo privado: cai para localStorage ou memória.
          return temLocalStorage() ? storeLocalStorage() : (estado.memoria || (estado.memoria = storeMemoria()));
        });
      }
      if (temLocalStorage()) return Promise.resolve(storeLocalStorage());
      if (!estado.memoria) estado.memoria = storeMemoria();
      return Promise.resolve(estado.memoria);
    }

    /** Mescla o que veio do aparelho com o que já está em memória (por id). */
    function mesclar(persistidos) {
      var vistos = Object.create(null);
      var resultado = [];
      var lista = Array.isArray(persistidos) ? persistidos : [];
      for (var i = 0; i < lista.length; i += 1) {
        var evento = lista[i];
        if (!evento || typeof evento !== 'object' || typeof evento.id !== 'string' || vistos[evento.id]) continue;
        vistos[evento.id] = true;
        resultado.push(evento);
      }
      // Eventos registrados antes de a leitura terminar entram no fim (FIFO).
      for (var j = 0; j < estado.eventos.length; j += 1) {
        var novo = estado.eventos[j];
        if (novo && typeof novo.id === 'string' && !vistos[novo.id]) {
          vistos[novo.id] = true;
          resultado.push(novo);
        }
      }
      estado.eventos = resultado;
    }

    function carregar() {
      if (estado.carregado) return Promise.resolve(estado.eventos);
      if (estado.carregando) return estado.carregando;
      estado.carregando = abrirArmazenamento()
        .then(function (store) { return store.ler(); })
        .then(function (lista) {
          mesclar(lista);
          estado.carregado = true;
          return estado.eventos;
        })
        .catch(function () {
          estado.carregado = true; // store quebrado: segue com a memória
          return estado.eventos;
        });
      return estado.carregando;
    }

    function gravarAtual() {
      return abrirArmazenamento()
        .then(function (store) { return store.gravar(estado.eventos.slice()); })
        .catch(function () { /* persistência é best-effort */ });
    }

    /** Persiste depois de carregar, serializado (evita corrida entre writes). */
    function persistir() {
      estado.persistindo = estado.persistindo
        .then(carregar)
        .then(gravarAtual)
        .catch(function () {});
      return estado.persistindo;
    }

    function tamanho() {
      return estado.eventos.length;
    }

    /** Cópia dos eventos ainda não confirmados (diagnóstico/testes). */
    function eventosPendentes() {
      return estado.eventos.slice();
    }

    /**
     * Grava a tentativa no aparelho. NUNCA drena e NUNCA lança — telemetria não
     * pode quebrar a prática da aula.
     * @returns {string|null} id do evento (null se a entrada for inválida)
     */
    function registrar(evt) {
      var evento = normalizarEvento(evt);
      if (!evento) return null;
      for (var i = 0; i < estado.eventos.length; i += 1) {
        if (estado.eventos[i].id === evento.id) return evento.id; // idempotente
      }
      estado.eventos.push(evento);
      persistir();
      return evento.id;
    }

    async function executarDrenagem() {
      await carregar();

      var uid = estado.obterUid();
      if (!uid) return { enviados: 0, pendentes: tamanho() };

      var lote = estado.eventos.slice(0, LIMITE_LOTE);
      if (!lote.length) return { enviados: 0, pendentes: 0 };

      var enviar = estado.enviarLote || enviarLoteFirestore;
      var resposta;
      try {
        resposta = await enviar(lote, uid);
      } catch (erro) {
        // Falha de rede/servidor: nada sai da fila e a promessa resolve.
        return { enviados: 0, pendentes: tamanho() };
      }

      var confirmados = idsConfirmados(resposta, lote);
      if (confirmados.length) {
        var remover = Object.create(null);
        for (var i = 0; i < confirmados.length; i += 1) remover[confirmados[i]] = true;
        estado.eventos = estado.eventos.filter(function (evento) { return !remover[evento.id]; });
        await gravarAtual();
      }
      return { enviados: confirmados.length, pendentes: tamanho() };
    }

    /**
     * Envia até 100 eventos e remove só os confirmados. Convidado/sem uid é
     * no-op (não toca em store nem em rede). Nunca rejeita.
     * @returns {Promise<{enviados:number, pendentes:number}>}
     */
    function drenar() {
      var convidado = false;
      var uid = null;
      try {
        convidado = estado.ehConvidado();
        uid = convidado ? null : estado.obterUid();
      } catch (erro) {
        convidado = true;
      }
      if (convidado || !uid) {
        return Promise.resolve({ enviados: 0, pendentes: tamanho() });
      }

      if (estado.emVoo) return estado.emVoo; // uma drenagem por vez

      estado.emVoo = executarDrenagem()
        .catch(function () { return { enviados: 0, pendentes: tamanho() }; })
        .then(function (resultado) {
          estado.emVoo = null;
          return resultado;
        });
      return estado.emVoo;
    }

    /** Ajusta as costuras (testes/app) sem recriar a instância. */
    function configurar(parcial) {
      if (!parcial || typeof parcial !== 'object') return api;
      if (typeof parcial.enviarLote === 'function') estado.enviarLote = parcial.enviarLote;
      if (typeof parcial.obterUid === 'function') estado.obterUid = parcial.obterUid;
      if (typeof parcial.ehConvidado === 'function') estado.ehConvidado = parcial.ehConvidado;
      if (parcial.armazenamento) estado.armazenamento = parcial.armazenamento;
      return api;
    }

    var api = {
      registrar: registrar,
      drenar: drenar,
      tamanho: tamanho,
      eventosPendentes: eventosPendentes,
      configurar: configurar,
    };
    return api;
  }

  // Instância única do app. Não toca em store/rede no load: tudo é preguiçoso.
  var filaResultados = criarFila();

  return {
    filaResultados: filaResultados,
    criarFila: criarFila,
    idEvento: idEvento,
    LIMITE_LOTE: LIMITE_LOTE,
  };
})();

if (typeof window !== 'undefined') {
  window.filaResultados = filaResultadosModulo.filaResultados;
  window.criarFilaResultados = filaResultadosModulo.criarFila;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = filaResultadosModulo;
}
