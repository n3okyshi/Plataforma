/**
 * FIS_CURRICULUM.JS
 * Estrutura curricular de Física.
 * Chave: "Física" (Deve bater com o config.js)
 */

window.registrarCurriculo("Física", {
    "1º Ano do EM": {
        // Unidade 1: Grandezas, movimentos e forças
        "Grandezas e unidades de medida": ["Grandezas físicas"],
        "Movimentos": ["Movimento e mobilidade urbana", "Conceitos iniciais de movimento", "Movimento uniforme (MU)", "Movimento uniformemente variado (MUV)"],
        "As leis de Newton e o estudo do movimento": ["Um pouco da história do estudo dos movimentos", "Inércia", "Leis de Newton", "Principais forças da Mecânica"],

        // Unidade 2: Princípios de conservação
        "Energia": ["O que é energia?", "Trabalho", "Energia cinética", "Energia potencial", "Energia mecânica", "Potência"],
        "Impulso e quantidade de movimento": ["Quantidade de movimento", "Impulso de uma força", "Conservação da quantidade de movimento"]
    },

    "2º Ano do EM": {
        // Unidade 3: Termologia
        "Temperatura e dilatação": ["Temperatura", "Escalas de temperatura", "Lei zero da Termodinâmica", "Dilatação"],
        "Calorimetria": ["O conceito de calor", "Quantidade de calor", "Propagação do calor"],
        "Termodinâmica": ["Introdução ao estudo dos gases ideais", "Máquinas térmicas", "Primeira lei da Termodinâmica", "Segunda lei da Termodinâmica"],

        // Unidade 4: As ondas e o Universo
        "Luz e ondas eletromagnéticas": ["Fontes e propagação da luz", "Fenômenos ópticos", "Espelhos e lentes", "Ondas eletromagnéticas"],
        "Som e ondas mecânicas": ["Ondas mecânicas", "Ondas sonoras"],
        "Astronomia e Gravitação": ["Corpos celestes", "Leis de Kepler", "Lei da gravitação universal", "Modelo cosmológico padrão"]
    },

    "3º Ano do EM": {
        // Unidade 5: Eletromagnetismo
        "Carga, força e campo elétricos": ["A Ciência dos cabos de telégrafo", "Carga elétrica", "Força elétrica", "Campo elétrico"],
        "Equipamentos e circuitos elétricos": ["Tensão elétrica", "Corrente elétrica", "Resistência elétrica"],
        "Eletromagnetismo": ["Ímãs", "Campo magnético", "Eletroímãs"],

        // Unidade 6: Física moderna e contemporânea
        "Geração e distribuição de energia elétrica": ["Fontes de energia", "A indução eletromagnética e o gerador elétrico", "Tipos de usina", "Distribuição de energia elétrica"],
        "Noções de Física quântica e Física nuclear": ["Noções de Física quântica", "Introdução à Física nuclear", "Usos controversos da ciência e a postura dos cientistas"]
    }
});