/**
 * ============================================================================
 * TRADUZIR-PROGRESSO.JS — PROGRESSO LEGADO (TÍTULO) -> ID CANÔNICO
 * ============================================================================
 * Uma única implementação (R5): o browser carrega este arquivo por <script>
 * antes de js/game.js e o teste Node faz `require` do mesmo arquivo.
 *
 * - `traduzirProgresso(titulos, mapa)`: converte `completedLessons` antigo
 *   (títulos) em ids usando `data/base/mapa-legado-ids.json`. Título sem
 *   correspondência é DESCARTADO (não é mantido como veio).
 * - `codigoDoNivel(serie)`: espelho cliente de `tools/lib/niveisLegado.js`
 *   (display -> código EF01..EF09/EM01..EM03) usado enquanto o perfil ainda
 *   guarda a série em formato de exibição (R22; Task 7 migra o <select>).
 */
'use strict';

var ORDINAIS_NIVEL = ['1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º'];

// Tabela display -> código, montada a partir dos dialetos legados documentados
// em tools/lib/niveisLegado.js:
//   "1º Ano EF" / "1º Ano EFI" / "1º Ano EFII" / "1º Ano" / "1º Ano do EM"
var TABELA_NIVEIS = Object.create(null);
(function () {
    for (var ano = 1; ano <= 9; ano += 1) {
        var dois = String(ano).padStart(2, '0');
        TABELA_NIVEIS[ORDINAIS_NIVEL[ano - 1] + ' Ano EF'] = 'EF' + dois;
        TABELA_NIVEIS[ORDINAIS_NIVEL[ano - 1] + ' Ano'] = 'EF' + dois;
        if (ano <= 5) TABELA_NIVEIS[ORDINAIS_NIVEL[ano - 1] + ' Ano EFI'] = 'EF' + dois;
        if (ano >= 6) TABELA_NIVEIS[ORDINAIS_NIVEL[ano - 1] + ' Ano EFII'] = 'EF' + dois;
    }
    for (var anoEm = 1; anoEm <= 3; anoEm += 1) {
        var doisEm = String(anoEm).padStart(2, '0');
        TABELA_NIVEIS[ORDINAIS_NIVEL[anoEm - 1] + ' Ano EM'] = 'EM' + doisEm;
        TABELA_NIVEIS[ORDINAIS_NIVEL[anoEm - 1] + ' Ano do EM'] = 'EM' + doisEm;
    }
})();

// "1º Ano EF", "1o Ano EF", "1 Ano EF", "1º ano do EM"...
var ANALISADOR_NIVEL = /^([1-9])\s*(?:º|ª|o|a)?\.?\s*ano(?:\s+(?:do|de|da)\s+)?(?:(efi{1,2}|ef|em))?$/i;

var REGEX_CODIGO_NIVEL = /^(EI0[1-4]|EF0[1-9]|EM0[1-3])$/;

// Ids canônicos têm o formato "<componente>.<nivel>.<unidade>.<aula>" (ex.:
// mat.ef06.operacoes.adicao_de_numeros_naturais). Serve para reconhecer
// progresso já migrado — idempotência quando o backend não devolve
// `progressoV2` (js/firebase-service.js monta o perfil campo a campo).
var REGEX_ID_AULA = /^[a-z]{2,4}\.(ei|ef|em)\d{2}\.[a-z0-9_]+\.[a-z0-9_]+$/;

function temChave(objeto, chave) {
    return Object.prototype.hasOwnProperty.call(objeto, chave);
}

/**
 * Traduz uma lista de títulos legados para ids canônicos.
 * @param {Array<string>} titulos `completedLessons` no formato antigo.
 * @param {Object<string,string>} mapa `{tituloOriginal: idNovo}`.
 * @returns {Array<string>} ids válidos, na ordem de entrada, sem duplicatas.
 */
function traduzirProgresso(titulos, mapa) {
    if (!Array.isArray(titulos)) return [];
    var saida = [];
    var vistos = Object.create(null);
    for (var i = 0; i < titulos.length; i += 1) {
        var titulo = titulos[i];
        if (typeof titulo !== 'string' || !titulo) continue;
        // Já é id canônico (progresso migrado numa sessão anterior): mantém.
        var id = REGEX_ID_AULA.test(titulo)
            ? titulo
            : (mapa && typeof mapa === 'object' && temChave(mapa, titulo) ? mapa[titulo] : null);
        if (typeof id !== 'string' || !id || vistos[id]) continue;
        vistos[id] = true;
        saida.push(id);
    }
    return saida;
}

/**
 * Decide se o progresso ainda precisa da migração de títulos -> ids (R24).
 * Verdadeiro só quando há ao menos uma entrada NÃO canônica. Lista vazia
 * (convidado/usuário novo) ou 100% de ids canônicos dispensa o fetch do mapa.
 * @param {*} completedLessons
 * @param {boolean} flagV2 `user.progressoV2`
 * @returns {boolean}
 */
function precisaMigrar(completedLessons, flagV2) {
    if (flagV2 === true) return false;
    if (!Array.isArray(completedLessons) || completedLessons.length === 0) return false;
    for (var i = 0; i < completedLessons.length; i += 1) {
        if (!REGEX_ID_AULA.test(completedLessons[i])) return true;
    }
    return false; // todas as entradas já são ids canônicos
}

/**
 * Compara a lista antes/depois da tradução, na ordem.
 * @param {*} antes
 * @param {*} depois
 * @returns {boolean} true se algo mudou
 */
function progressoMudou(antes, depois) {
    if (!Array.isArray(antes) || !Array.isArray(depois)) return false;
    if (antes.length !== depois.length) return true;
    for (var i = 0; i < antes.length; i += 1) {
        if (antes[i] !== depois[i]) return true;
    }
    return false;
}

/**
 * Converte o nome de nível/série em código canônico (ou null se não for ano
 * escolar). Aceita o próprio código ("EF06") e os dialetos de exibição.
 * @param {*} serie
 * @returns {string|null}
 */
function codigoDoNivel(serie) {
    if (typeof serie !== 'string') return null;
    var texto = serie.normalize('NFC').trim().replace(/\s+/g, ' ');
    if (!texto) return null;

    var comoCodigo = texto.toUpperCase();
    if (REGEX_CODIGO_NIVEL.test(comoCodigo)) return comoCodigo;
    if (temChave(TABELA_NIVEIS, texto)) return TABELA_NIVEIS[texto];

    var achado = ANALISADOR_NIVEL.exec(texto);
    if (!achado) return null;
    var ano = Number(achado[1]);
    var etapa = (achado[2] || 'ef').toLowerCase();
    if (etapa === 'em') return ano <= 3 ? 'EM' + String(ano).padStart(2, '0') : null;
    return 'EF' + String(ano).padStart(2, '0');
}

// Exportação para o teste Node (o browser usa os globais declarados acima).
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        traduzirProgresso: traduzirProgresso,
        codigoDoNivel: codigoDoNivel,
        precisaMigrar: precisaMigrar,
        progressoMudou: progressoMudou,
    };
}
