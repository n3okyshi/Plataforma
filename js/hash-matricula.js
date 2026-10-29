/**
 * ============================================================================
 * HASH-MATRICULA.JS — HASH DA MATRÍCULA NO CLIENTE (Task 8 / R29)
 * ============================================================================
 * O cliente envia ao Firestore APENAS o SHA-256 (hex) da matrícula
 * normalizada (§5.10). O browser não tem `require('crypto')`, então este
 * arquivo usa Web Crypto (`crypto.subtle.digest`) — por isso `hashMatricula`
 * é ASSÍNCRONO (devolve Promise) aqui, enquanto a cópia Node
 * (tools/lib/hashMatricula.js) é síncrona.
 *
 * A normalização é DUPLICADA VERBATIM de tools/lib/hashMatricula.js (D1
 * aceita: o formato de matrícula é congelado). RISCO CONHECIDO: alterar a
 * regra em um só lado quebra a paridade — tools/testes/teste-hashMatricula.js
 * compara os dois caminhos. Mantenha as duas `normalizarMatricula` idênticas.
 *
 * Carregado por <script> no index.html ANTES do loader (que carrega app.js e
 * as views). O guard `module` existe para o teste Node poder fazer `require`.
 */
'use strict';

/**
 * Normaliza a matrícula institucional.
 * @param {*} texto Matrícula digitada (aceita número).
 * @returns {string} Só dígitos/letras, em maiúsculas; '' para entrada vazia.
 */
function normalizarMatricula(texto) {
    if (texto === null || texto === undefined) return '';
    return String(texto).replace(/[.\-\/\s]/g, '').toUpperCase();
}

/**
 * SHA-256 hex da matrícula normalizada (Web Crypto).
 * @param {*} texto Matrícula em claro.
 * @returns {Promise<string>} 64 caracteres hex; '' quando a matrícula é vazia.
 *   Rejeita se o contexto não for seguro (Web Crypto só existe em HTTPS/localhost).
 */
async function hashMatricula(texto) {
    var normalizada = normalizarMatricula(texto);
    if (!normalizada) return '';

    if (typeof crypto === 'undefined' || !crypto.subtle || typeof TextEncoder === 'undefined') {
        throw new Error('Web Crypto indisponível: o hash da matrícula exige HTTPS.');
    }

    var bytes = new TextEncoder().encode(normalizada);
    var digest = await crypto.subtle.digest('SHA-256', bytes);
    return Array.prototype.map.call(new Uint8Array(digest), function (byte) {
        return byte.toString(16).padStart(2, '0');
    }).join('');
}

// Exportação para o teste Node (o browser usa os globais declarados acima).
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        normalizarMatricula: normalizarMatricula,
        hashMatricula: hashMatricula,
    };
}
