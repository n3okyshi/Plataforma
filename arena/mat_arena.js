/**
 * MAT_ARENA.JS
 * Banco de questões de Matemática.
 */

window.registrarQuestoes([
    // ============================================
    // 1º ANO - QUESTÕES VISUAIS E LÚDICAS
    // ============================================
    
    // TEMA: CONTAGEM
    {
        ano: "1º Ano EFI",
        tema: "Números e Contagem",
        pergunta: "Quantas maçãs aparecem aqui? 🍎🍎🍎",
        opcoes: ["2", "3", "4", "5"],
        correta: 1 // Índice 1 é "3"
    },
    {
        ano: "1º Ano EFI",
        tema: "Números e Contagem",
        pergunta: "Qual número vem DEPOIS do 4?",
        opcoes: ["3", "5", "6", "2"],
        correta: 1 // Índice 1 é "5"
    },
    
    // TEMA: OPERAÇÕES (SOMA VISUAL)
    {
        ano: "1º Ano EFI",
        tema: "Operações Básicas",
        pergunta: "Quanto é 🐱 + 🐱🐱 ?",
        opcoes: ["1 Gato", "2 Gatos", "3 Gatos", "4 Gatos"],
        correta: 2
    },
    {
        ano: "1º Ano EFI",
        tema: "Operações Básicas",
        pergunta: "Se você tem 5 dedos em uma mão, quantos dedos tem nas duas mãos juntas? 🖐️ + 🖐️",
        opcoes: ["5", "8", "10", "20"],
        correta: 2
    },

    // TEMA: GEOMETRIA
    {
        ano: "1º Ano EFI",
        tema: "Geometria e Espaço",
        pergunta: "Qual destas formas parece uma bola de futebol? ⚽",
        opcoes: ["Quadrado", "Triângulo", "Círculo", "Retângulo"],
        correta: 2
    },
    {
        ano: "1º Ano EFI",
        tema: "Geometria e Espaço",
        pergunta: "O quadrado tem quantos lados iguais? 🟧",
        opcoes: ["3 Lados", "4 Lados", "5 Lados", "Não tem lados"],
        correta: 1
    },

    // TEMA: GRANDEZAS (DINHEIRO E TEMPO)
    {
        ano: "1º Ano EFI",
        tema: "Grandezas e Medidas",
        pergunta: "Qual animal aparece na nota de 2 reais? 🐢",
        opcoes: ["Onça", "Tartaruga", "Arara", "Mico-leão"],
        correta: 1
    },
    {
        ano: "1º Ano EFI",
        tema: "Grandezas e Medidas",
        pergunta: "O que usamos para ver as horas? ⏰",
        opcoes: ["Régua", "Balança", "Relógio", "Termômetro"],
        correta: 2
    },

    // EFII

    {
        id: "mat_int_01", // ID único ajuda a controlar o "já visto"
        ano: "7º Ano EF",
        unidade: "Números Inteiros", // O pulo do gato: Vínculo com o Currículo
        tipo: "treino", // ou 'prova' se quiser questões exclusivas de prova
        pergunta: "O oposto de -5 é...",
        opcoes: ["5", "-5", "0", "1/5"],
        correta: 0
    },

    {
        id: "",
        ano: "7º Ano EF",
        unidade: "",
        tema: "Matemática",
        pergunta: "Qual é o resultado de -5 + 2?",
        opcoes: ["-7", "-3", "3", "7"],
        correta: 1
    },
    {
        ano: "9º Ano EF",
        tema: "Matemática",
        pergunta: "Na função f(x) = 2x + 1, qual o valor de f(3)?",
        opcoes: ["5", "6", "7", "8"],
        correta: 2
    },

    // Médio e Superior
    {
        ano: "3º Ano EM",
        tema: "Matemática",
        pergunta: "Qual é a unidade imaginária 'i' elevada ao quadrado (i²)?",
        opcoes: ["0", "1", "-1", "i"],
        correta: 2
    },
    {
        ano: "Ensino Superior",
        tema: "Cálculo",
        pergunta: "A derivada de uma constante é sempre:",
        opcoes: ["A própria constante", "1", "0", "Infinito"],
        correta: 2
    },
]);