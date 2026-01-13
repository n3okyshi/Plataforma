/**
 * ============================================================================
 * CONFIG.JS - CENTRAL DE CONFIGURAÇÃO E ESTILOS
 * ============================================================================
 * Define temas, chaves de API e configurações globais.
 * Alterar aqui reflete em todo o aplicativo.
 */

// 1. FIREBASE CONFIG (Mantenha suas chaves seguras em produção!)
const firebaseConfig = {
    apiKey: "AIzaSyBYNxFdJ3M8Uw1oewupUXKXxppSRd2HiRY",
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

// 2. CONFIGURAÇÃO DAS DISCIPLINAS (CORES E ÍCONES)
const SUBJECT_CONFIG = {
    // === LINGUAGENS ===
    "Língua Portuguesa": { category: "Linguagens", icon: "fa-feather-alt", theme: { main: "bg-red-500", text: "text-red-500", border: "border-red-500", borderDark: "border-red-700", light: "bg-red-50" } },
    "Inglês": { category: "Linguagens", icon: "fa-flag-usa", theme: { main: "bg-blue-800", text: "text-blue-800", border: "border-blue-800", borderDark: "border-blue-900", light: "bg-blue-100" } },
    "Artes": { category: "Linguagens", icon: "fa-palette", theme: { main: "bg-pink-500", text: "text-pink-500", border: "border-pink-500", borderDark: "border-pink-700", light: "bg-pink-50" } },
    "Educação Física": { category: "Linguagens", icon: "fa-running", theme: { main: "bg-orange-500", text: "text-orange-500", border: "border-orange-500", borderDark: "border-orange-700", light: "bg-orange-50" } },

    // === REDAÇÃO (ESPECIAL) ===
    "Redação": { category: "Linguagens", icon: "fa-pen-nib", theme: { main: "bg-rose-500", text: "text-rose-500", border: "border-rose-500", borderDark: "border-rose-700", light: "bg-rose-50" } },

    // === CIÊNCIAS EXATAS ===
    "Matemática": { category: "Ciências Exatas", icon: "fa-calculator", theme: { main: "bg-brand-blue", text: "text-brand-blue", border: "border-brand-blue", borderDark: "border-brand-blueDark", light: "bg-blue-50" } },
    "Física": { category: "Ciências Exatas", icon: "fa-atom", theme: { main: "bg-violet-600", text: "text-violet-600", border: "border-violet-600", borderDark: "border-violet-800", light: "bg-violet-50" } },
    "Química": { category: "Ciências Exatas", icon: "fa-flask", theme: { main: "bg-fuchsia-600", text: "text-fuchsia-600", border: "border-fuchsia-600", borderDark: "border-fuchsia-800", light: "bg-fuchsia-50" } },
    "Astronomia": { category: "Ciências Exatas", icon: "fa-star", theme: { main: "bg-indigo-900", text: "text-indigo-900", border: "border-indigo-900", borderDark: "border-black", light: "bg-indigo-100" } },

    // === CIÊNCIAS DA NATUREZA ===
    "Ciências Naturais": { category: "Ciências Naturais", icon: "fa-leaf", theme: { main: "bg-green-500", text: "text-green-500", border: "border-green-500", borderDark: "border-green-700", light: "bg-green-50" } },
    "Biologia": { category: "Ciências Naturais", icon: "fa-dna", theme: { main: "bg-emerald-500", text: "text-emerald-500", border: "border-emerald-500", borderDark: "border-emerald-700", light: "bg-emerald-50" } },
    "Geologia": { category: "Ciências Naturais", icon: "fa-mountain", theme: { main: "bg-amber-600", text: "text-amber-600", border: "border-amber-600", borderDark: "border-amber-800", light: "bg-amber-50" } },

    // === CIÊNCIAS HUMANAS ===
    "História": { category: "Ciências Humanas", icon: "fa-landmark", theme: { main: "bg-yellow-500", text: "text-yellow-600", border: "border-yellow-500", borderDark: "border-yellow-700", light: "bg-yellow-50" } },
    "Geografia": { category: "Ciências Humanas", icon: "fa-globe-americas", theme: { main: "bg-cyan-600", text: "text-cyan-600", border: "border-cyan-600", borderDark: "border-cyan-800", light: "bg-cyan-50" } },
    "Filosofia": { category: "Ciências Humanas", icon: "fa-quote-left", theme: { main: "bg-zinc-500", text: "text-zinc-500", border: "border-zinc-500", borderDark: "border-zinc-700", light: "bg-zinc-100" } },
    "Sociologia": { category: "Ciências Humanas", icon: "fa-users", theme: { main: "bg-teal-600", text: "text-teal-600", border: "border-teal-600", borderDark: "border-teal-800", light: "bg-teal-50" } },

    // === NÍVEL SUPERIOR (META-CATEGORIA) ===
    "Ensino Superior": {
        category: "Universidade",
        icon: "fa-graduation-cap",
        theme: { main: "bg-gray-800", text: "text-gray-800", border: "border-gray-800", borderDark: "border-black", light: "bg-gray-200" }
    },
};

// 3. CONFIGURAÇÃO DOS NÍVEIS DE ENSINO
const LEVEL_THEMES = {
    // Fundamental I
    "1º Ano EFI": { main: "bg-lime-400", text: "text-lime-600", gradient: "from-lime-300 to-lime-500" },
    "2º Ano EFI": { main: "bg-green-400", text: "text-green-600", gradient: "from-green-300 to-green-500" },
    "3º Ano EFI": { main: "bg-teal-400", text: "text-teal-600", gradient: "from-teal-300 to-teal-500" },
    "4º Ano EFI": { main: "bg-cyan-400", text: "text-cyan-600", gradient: "from-cyan-300 to-cyan-500" },
    "5º Ano EFI": { main: "bg-sky-400", text: "text-sky-600", gradient: "from-sky-300 to-sky-500" },

    // Fundamental II
    "6º Ano EF": { main: "bg-[#58cc02]", text: "text-[#58cc02]", gradient: "from-green-400 to-green-600" },
    "7º Ano EF": { main: "bg-[#1cb0f6]", text: "text-[#1cb0f6]", gradient: "from-blue-400 to-blue-600" },
    "8º Ano EF": { main: "bg-[#ce82ff]", text: "text-[#ce82ff]", gradient: "from-purple-400 to-purple-600" },
    "9º Ano EF": { main: "bg-[#ff4b4b]", text: "text-[#ff4b4b]", gradient: "from-red-400 to-red-600" },

    // Ensino Médio
    "1º Ano EM": { main: "bg-[#FF9600]", text: "text-[#FF9600]", gradient: "from-orange-400 to-orange-600" },
    "2º Ano EM": { main: "bg-[#FFC800]", text: "text-[#E5B400]", gradient: "from-yellow-400 to-yellow-600" },
    "3º Ano EM": { main: "bg-[#FF2E93]", text: "text-[#FF2E93]", gradient: "from-pink-400 to-pink-600" },

    // === CORES DOS CURSOS (Quando clicamos em Ensino Superior) ===
    "Ciência da Computação": { main: "bg-indigo-600", text: "text-indigo-600", gradient: "from-indigo-500 to-indigo-700" },
    "Matemática": { main: "bg-blue-700", text: "text-blue-700", gradient: "from-blue-600 to-blue-800" },
    "Engenharia Civil": { main: "bg-orange-600", text: "text-orange-600", gradient: "from-orange-500 to-orange-700" },

    // === CORES DAS DISCIPLINAS (Quando estamos dentro do curso) ===
    "Cálculo I":          { main: "bg-blue-600", text: "text-blue-600", gradient: "from-blue-500 to-blue-700" },
    "Geometria Analítica":{ main: "bg-cyan-600", text: "text-cyan-600", gradient: "from-cyan-500 to-cyan-700" },
    "Álgebra Linear":     { main: "bg-purple-600", text: "text-purple-600", gradient: "from-purple-500 to-purple-700" },
    "Algoritmos":         { main: "bg-emerald-600", text: "text-emerald-600", gradient: "from-emerald-500 to-emerald-700" },
    "História da Computação": { main: "bg-pink-600", text: "text-pink-600", gradient: "from-pink-500 to-pink-700" },

    "default": { main: "bg-gray-600", text: "text-gray-600", gradient: "from-gray-500 to-gray-700" }
};

// 4. CONFIGURAÇÕES GERAIS
const APP_CONFIG = {
    appName: "mathlingo",
    version: "0.0.1 (Modular)",
    defaultSubject: "Educacao",
    xpPerLesson: 50,
    xpPerQuestion: 15
};

// 5. MATHJAX
window.MathJax = {
    tex: { inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$']] },
    svg: { fontCache: 'global' }
};