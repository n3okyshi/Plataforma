/**
 * SUPERIOR_CURRICULUM.JS
 * Estrutura: Ensino Superior > Curso > Disciplina > Unidade > Conteúdo
 */

window.registrarCurriculo("Ensino Superior", {

    // --- CURSO 1 ---
    "Ciência da Computação": {
        "Algoritmos": {
            "Introdução": ["Lógica de Programação", "Variáveis e Tipos"],
            "Estruturas de Dados": ["Vetores", "Matrizes"]
        },
        "História da Computação": {
            "Pioneiras": ["Ada Lovelace", "Grace Hopper"],
            "Hardware": ["ENIAC", "Transistores"]
        },
        "Cálculo I": {
            "Limites": ["Noção Intuitiva"],
            "Derivadas": ["Regra do Tombo"]
        }
    },

    // --- CURSO 2 ---
    "Matemática": {
        "Cálculo I": {
            "Limites Avançados": ["Epsilon-Delta"],
            "Derivada": ["Taxa de Variação"],
            "Integrais": ["Somas de Riemann"]
        },
        "Geometria Analítica": {
            "Vetores": ["Soma e Produto"],
            "Cônicas": ["Elipse", "Circunferência", "Parábola", "Ponto", "Reta", "Hipérbole"]
        },
        "Álgebra Linear": {
            "Matrizes": ["Determinantes", "Inversa"],
            "Espaços": ["Base e Dimensão"]
        },
    },

    // --- CURSO 3 ---
    "Engenharia Civil": {
        "Cálculo I": {
            "Limites Avançados": ["Epsilon-Delta"],
            "Derivada": ["Taxa de Variação"],
            "Integrais": ["Somas de Riemann"],
            "Integral para Engenheiros": ["Exemplo_de_disciplina_apenas_para_o_curso"],
        },
        "Geometria Analítica": {
            "Vetores": ["Soma e Produto"],
            "Cônicas": ["Elipse", "Circunferência", "Parábola", "Ponto", "Reta", "Hipérbole"]
        },
        "Álgebra Linear": {
            "Matrizes": ["Determinantes", "Inversa"],
            "Espaços": ["Base e Dimensão"]
        },
    }
});