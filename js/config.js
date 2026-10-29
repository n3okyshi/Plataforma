/**
 * ============================================================================
 * CONFIG.JS - CENTRAL DE CONFIGURAÇÃO E ESTILOS
 * ============================================================================
 * Define temas, chaves de API e configurações globais.
 * Alterar aqui reflete em todo o aplicativo.
 */

// 1. FIREBASE CONFIG (Mantenha suas chaves seguras em produção!)
const nonkey = "QUl6YVN5QllOeEZkSjNNOFV3MW9ld3VwVVhLWHhwcFNSZDJIaVJZ";
const firebaseConfig = {
    apiKey: atob(nonkey),
    authDomain: "mathligo.firebaseapp.com",
    projectId: "mathligo",
    storageBucket: "mathligo.firebasestorage.app",
    messagingSenderId: "852191827758",
    appId: "1:852191827758:web:5f1365bb919b81eb808cbf",
};

// === CORREÇÃO: INICIALIZA O FIREBASE AQUI ===
if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log("[Config] Firebase inicializado com sucesso!");
    }
} else {
    console.warn("[Config] Scripts do Firebase não carregados. Verifique sua internet.");
}

// 2. CONFIGURAÇÃO DAS DISCIPLINAS (CORES, ÍCONES E NÍVEIS)
// SUBJECT_CONFIG e LEVEL_THEMES agora são derivados da base canônica e
// definidos por js/gerado.js, carregado antes deste arquivo no index.html.
// Cores, ícones e temas estão definidos em js/gerado.js.

// 3. CONFIGURAÇÕES GERAIS
const APP_CONFIG = {
    appName: "mathlingo",
    version: "0.0.7 (Matemática EF01–EF02 e EF06–EF09)",
    defaultSubject: "Educacao",
    xpPerLesson: 50,
    xpPerQuestion: 15
};

// 4. MATHJAX
window.MathJax = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']] },
    svg: { fontCache: 'global' }
};
