/**
 * mat3em_content.js
 * Conteúdo teórico das aulas de Matemática para o 3º ano do ensino médio.
 */

window.registrarTeoria({
    // ============================================
    // 3º ANO DO ENSINO MÉDIO
    // ============================================

    // Unidade: Geometria no Plano Cartesiano
    "Geometria Analítica: Ponto, Reta e Circunferência": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Geometria Analítica</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A fusão da Álgebra com a Geometria. Estudamos as formas geométricas através de equações e coordenadas.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📍 Distância:</p>
            <p class="text-gray-700 dark:text-gray-300">A fórmula da distância entre dois pontos nada mais é do que o <strong>Teorema de Pitágoras</strong> aplicado no gráfico: $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.</p>
        </div>
    </div>
    `,

    "Transformações Geométricas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Matrizes e Transformações</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Como mover figuras no plano cartesiano usando matemática. Análise de isometrias (reflexão, translação, rotação).
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🎮 Computação Gráfica:</p>
            <p class="text-gray-700 dark:text-gray-300">Multiplicar coordenadas por <strong>Matrizes</strong> é a base para rotacionar e redimensionar personagens em jogos 3D.</p>
        </div>
    </div>
    `,

    // Unidade: Educação Financeira
    "Fundamentos da Matemática Financeira": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Matemática do Dinheiro</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Conceitos vitais: Inflação (perda de poder de compra) e Amortização (como pagar dívidas longas).
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🏠 SAC vs Price:</p>
            <p class="text-gray-700 dark:text-gray-300">No financiamento da casa (SAC), as parcelas diminuem. No carro (Price), as parcelas costumam ser fixas.</p>
        </div>
    </div>
    `,

    "Planejamento e Gestão de Orçamento Pessoal": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Gestão Financeira</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estratégias para organizar a vida adulta. Análise de investimentos (Renda Fixa vs Variável) e planilhas.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">💰 A Regra 50-30-20:</p>
            <p class="text-gray-700 dark:text-gray-300">Uma dica comum: 50% para necessidades, 30% para desejos e 20% para investimentos/dívidas.</p>
        </div>
    </div>
    `,

    // Unidade: Análise Combinatória e Probabilidade
    "Análise Combinatória - Diferentes Estratégias de Contagem": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Análise Combinatória</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Técnicas avançadas de contagem: Permutação, Arranjo e Combinação.
        </p>
        

[Image of combination vs permutation formula]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🤔 O Grande Dilema:</p>
            <p class="text-gray-700 dark:text-gray-300">A ordem importa? <br><strong>Sim:</strong> Arranjo (Pódio, Senha). <br><strong>Não:</strong> Combinação (Grupo de estudo, Carta de baralho).</p>
        </div>
    </div>
    `,

    "Probabilidade": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Probabilidade Condicional</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Cálculo de chances em cenários complexos. Probabilidade da união, intersecção e a Distribuição Binomial.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🎲 Dado que...</p>
            <p class="text-gray-700 dark:text-gray-300">Na probabilidade condicional, o nosso "universo" (espaço amostral) diminui baseada em uma informação prévia.</p>
        </div>
    </div>
    `,

    // Unidade: Estatística
    "Introdução à Estatística": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Estatística Avançada</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Interpretação crítica de dados. Construção de histogramas e do poderoso <strong>Boxplot</strong>.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📦 Boxplot:</p>
            <p class="text-gray-700 dark:text-gray-300">Um gráfico que mostra onde está a maioria dos dados e identifica os <em>outliers</em> (pontos fora da curva).</p>
        </div>
    </div>
    `,

    "Medidas de Tendência Central e Medidas de Dispersão": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Regularidade dos Dados</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Além da média, analisamos a variabilidade através da <strong>Variância</strong> e do <strong>Desvio Padrão</strong>.
        </p>
        

[Image of standard deviation bell curve]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🎯 Confiabilidade:</p>
            <p class="text-gray-700 dark:text-gray-300">O Desvio Padrão mede a regularidade. Dois alunos podem ter a mesma média, mas o que tem menor desvio padrão é mais regular.</p>
        </div>
    </div>
    `,

    // Unidade: Computação
    "Um Pouco de História": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">História da Computação</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Do Ábaco aos Supercomputadores. Personagens como Ada Lovelace (a primeira programadora) e Alan Turing.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🕰️ Evolução:</p>
            <p class="text-gray-700 dark:text-gray-300">Entender que o computador é uma máquina de processar lógica, não apenas eletrônica.</p>
        </div>
    </div>
    `,

    "Algoritmos e Fluxogramas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Algoritmos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            O passo a passo para resolver problemas. Representação gráfica através de <strong>Fluxogramas</strong>.
        </p>
        

[Image of flowchart symbols logic]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🍔 A Receita:</p>
            <p class="text-gray-700 dark:text-gray-300">Um algoritmo é como uma receita de bolo: uma sequência finita de instruções claras para atingir um objetivo.</p>
        </div>
    </div>
    `,

    "Conceitos Iniciais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Lógica de Programação</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A base do código: Variáveis, Condicionais (SE/ENTÃO) e Loops (Repetição).
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">0101 Binário:</p>
            <p class="text-gray-700 dark:text-gray-300">Introdução à lógica binária, a linguagem fundamental de zeros e uns que as máquinas entendem.</p>
        </div>
    </div>
    `,

});