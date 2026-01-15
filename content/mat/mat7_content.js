/**
 * mat7_content.js
 * Conteúdo teórico das aulas de Matemática para o 7º ano do ensino fundamental.
 */

window.registrarTeoria({
    // ============================================
    // 7º ANO DO ENSINO FUNDAMENTAL
    // ============================================

    // Unidade: Números Inteiros
    "Números inteiros e reta numérica": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Números Inteiros (Z)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Ampliação do conjunto dos números naturais. Agora incluímos os negativos para representar situações como temperaturas abaixo de zero e saldos devedores.
        </p>
        

[Image of integer number line with negative and positive numbers]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📏 Conceitos Chave:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>Opostos (Simétricos):</strong> Estão à mesma distância do zero (ex: -3 e +3).</li>
                <li><strong>Módulo:</strong> É a distância até o zero, sempre positivo (ex: |-5| = 5).</li>
            </ul>
        </div>
    </div>
    `,

    "Comparação de números inteiros": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Quem é maior?</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estabelecimento de ordem em Z. A regra de ouro na reta numérica é: qualquer número <strong>à direita</strong> é maior que qualquer número à esquerda.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">💡 Pense em Dinheiro:</p>
            <p class="text-gray-700 dark:text-gray-300">Dever R$ 2,00 (-2) é uma situação "maior" (melhor) do que dever R$ 5,00 (-5). Logo, -2 > -5.</p>
        </div>
    </div>
    `,

    // Unidade: Operações com números inteiros
    "Adição e Subtração de Inteiros": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Soma e Subtração em Z</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Resolução de problemas envolvendo ganhos (+), perdas (-) e variações. Focamos na eliminação de parênteses.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⚡ Regras Práticas:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>Sinais Iguais:</strong> Soma e mantém o sinal.</li>
                <li><strong>Sinais Diferentes:</strong> Subtrai e mantém o sinal do maior valor absoluto (quem "pesa" mais).</li>
            </ul>
        </div>
    </div>
    `,

    "Multiplicação e Divisão de Inteiros": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Regra de Sinais (× e ÷)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Diferente da soma, aqui olhamos apenas para a combinação dos sinais.
        </p>
        

[Image of multiplication sign rules chart]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🧠 Memorize:</p>
            <p class="text-gray-700 dark:text-gray-300">Amigo do meu amigo é meu amigo (+ com + = +).<br>Inimigo do meu inimigo é meu amigo (- com - = +).</p>
        </div>
    </div>
    `,

    "Potenciação e Raiz Quadrada de Inteiros": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Potências e Raízes</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Cálculo de potências com base negativa e raízes exatas de quadrados perfeitos.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⚠️ Atenção ao Expoente:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li>Base negativa com expoente <strong>PAR</strong>: Resultado Positivo.</li>
                <li>Base negativa com expoente <strong>ÍMPAR</strong>: Resultado Negativo.</li>
            </ul>
        </div>
    </div>
    `,

    // Unidade: Números Racionais
    "O Conjunto dos Números Racionais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Números Racionais (Q)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Definição: todo número que pode ser escrito como fração. Isso inclui inteiros, decimais exatos e dízimas periódicas, agora também negativos.
        </p>
        

[Image of venn diagram real numbers sets]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🗺️ Na Reta:</p>
            <p class="text-gray-700 dark:text-gray-300">Entre dois inteiros (ex: 1 e 2) existem infinitos números racionais.</p>
        </div>
    </div>
    `,

    "Operações com Números Racionais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Cálculos com Racionais</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Extensão das quatro operações, potência e raiz para Q.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔗 Conexão:</p>
            <p class="text-gray-700 dark:text-gray-300">As regras de sinais aprendidas nos Inteiros (Z) continuam valendo aqui, mas agora aplicadas a frações e decimais.</p>
        </div>
    </div>
    `,

    // Unidade: Expressões Algébricas e Equações
    "Expressões Algébricas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">A Linguagem da Álgebra</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Introdução ao uso de letras (variáveis) para representar números desconhecidos ou generalizar padrões.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔡 Valor Numérico:</p>
            <p class="text-gray-700 dark:text-gray-300">É o resultado quando trocamos a letra por um número específico e fazemos a conta.</p>
        </div>
    </div>
    `,

    "Equações do 1º Grau": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Equações do 1º Grau</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            O conceito de igualdade como uma balança equilibrada. O objetivo é isolar a incógnita.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⚖️ Princípio de Equivalência:</p>
            <p class="text-gray-700 dark:text-gray-300">Tudo que você faz de um lado da igualdade (somar, dividir, multiplicar), deve fazer do outro para manter o equilíbrio.</p>
        </div>
    </div>
    `,

    "Resolução de Problemas com Equações": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Modelagem Matemática</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A arte de traduzir o português para o "matematiquês".
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🗣️ Dicionário:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li>"Um número" → <strong>x</strong></li>
                <li>"O dobro" → <strong>2x</strong></li>
                <li>"A terça parte" → <strong>x/3</strong></li>
                <li>"Aumentado de" → <strong>+</strong></li>
            </ul>
        </div>
    </div>
    `,

    // Unidade: Inequações do 1º Grau
    "Desigualdades e Inequações": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Inequações</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estudo de sentenças expressas por desigualdades (>, <, ≥, ≤). A resposta não é só um número, mas um conjunto de soluções.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⚠️ Perigo:</p>
            <p class="text-gray-700 dark:text-gray-300">Ao multiplicar ou dividir a inequação por um número <strong>negativo</strong>, o sinal da desigualdade inverte (o ">" vira "<").</p>
        </div>
    </div>
    `,

    // Unidade: Grandezas Proporcionais
    "Razão e Proporção": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Razão e Proporção</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Razão é uma divisão. Proporção é a igualdade entre duas razões.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">✖️ Propriedade Fundamental:</p>
            <p class="text-gray-700 dark:text-gray-300">"O produto dos extremos é igual ao produto dos meios" (Multiplicação cruzada).</p>
        </div>
    </div>
    `,

    "Grandezas Direta e Inversamente Proporcionais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Tipos de Proporção</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Análise da dependência entre grandezas.
        </p>
        

[Image of direct vs inverse proportion graphs]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔍 O Teste:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>Direta:</strong> Se uma dobra, a outra dobra. (Ex: Tempo e Distância).</li>
                <li><strong>Inversa:</strong> Se uma dobra, a outra cai pela metade. (Ex: Velocidade e Tempo).</li>
            </ul>
        </div>
    </div>
    `,

    "Regra de Três Simples": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Regra de Três</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A técnica suprema para resolver problemas. Temos três valores conhecidos e queremos descobrir o quarto.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🛠️ Passo a Passo:</p>
            <p class="text-gray-700 dark:text-gray-300">1. Monte a tabela. 2. Identifique se é direta ou inversa. 3. Calcule.</p>
        </div>
    </div>
    `,

    "Porcentagem e Juros Simples": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Educação Financeira</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Aplicação de porcentagem em aumentos e descontos, e introdução aos Juros Simples.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">💰 Fórmula:</p>
            <p class="text-gray-700 dark:text-gray-300"><strong>J = C · i · t</strong> (Juros = Capital × taxa × tempo).</p>
        </div>
    </div>
    `,

    // Unidade: Geometria: Ângulos e Triângulos
    "Ângulos": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Ângulos e Retas</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estudo de complementares, suplementares e Opostos pelo Vértice (OPV). Foco especial em retas paralelas cortadas por uma transversal.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">👀 Regra do Z:</p>
            <p class="text-gray-700 dark:text-gray-300">Em paralelas, os ângulos alternos (que formam um "Z") são congruentes (iguais).</p>
        </div>
    </div>
    `,

    "Triângulos": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Triângulos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A figura mais rígida da geometria. Classificação quanto aos lados (equilátero, isósceles, escaleno) e ângulos.
        </p>
        

[Image of triangle classification types]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📐 Lei Universal:</p>
            <p class="text-gray-700 dark:text-gray-300">A soma dos ângulos internos de qualquer triângulo é sempre <strong>180º</strong>.</p>
        </div>
    </div>
    `,

    // Unidade: Polígonos e Transformações Geométricas
    "Polígonos Regulares": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Polígonos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estudo dos polígonos regulares (lados e ângulos iguais).
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⬡ Soma dos Ângulos:</p>
            <p class="text-gray-700 dark:text-gray-300">Podemos calcular a soma dos ângulos internos dividindo o polígono em triângulos: <strong>S = (n-2) × 180º</strong>.</p>
        </div>
    </div>
    `,

    "Transformações Geométricas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Isometrias</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Movendo figuras sem deformá-las.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔄 Os 3 Movimentos:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>Reflexão:</strong> Efeito de espelho (simetria axial).</li>
                <li><strong>Translação:</strong> Deslizamento (arrastar).</li>
                <li><strong>Rotação:</strong> Giro em torno de um ponto.</li>
            </ul>
        </div>
    </div>
    `,

    // Unidade: Medidas de Volume
    "Volume de Blocos Retangulares": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Volume</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Conceito de volume como medida do espaço ocupado. Unidades de medida cúbicas (m³, cm³).
        </p>
        

[Image of calculating volume of rectangular prism]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📦 Fórmula Básica:</p>
            <p class="text-gray-700 dark:text-gray-300">Para blocos retangulares: <strong>V = Comprimento × Largura × Altura</strong>.</p>
        </div>
    </div>
    `,

    "Relação entre Volume e Capacidade": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Volume vs Capacidade</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Conexão entre o sólido (m³) e o líquido que cabe nele (Litros).
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">💧 Conversão de Ouro:</p>
            <p class="text-gray-700 dark:text-gray-300">1 decímetro cúbico (dm³) = <strong>1 Litro</strong>.<br>1 metro cúbico (m³) = <strong>1000 Litros</strong>.</p>
        </div>
    </div>
    `,

    // Unidade: Estatística e Probabilidade
    "Medidas de Tendência Central": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Estatística: O Centro</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Resumindo um monte de dados em um único número representativo.
        </p>
        

[Image of mean median mode comparison]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📊 O Trio:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>Média:</strong> Soma tudo e divide pela quantidade.</li>
                <li><strong>Mediana:</strong> O valor central (após ordenar).</li>
                <li><strong>Moda:</strong> O que mais aparece (está na moda).</li>
            </ul>
        </div>
    </div>
    `,

    "Gráficos e Probabilidade": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Gráficos e Chances</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Interpretação visual de dados (setores/pizza) e cálculo de riscos.
        </p>
        

[Image of pie chart with percentages]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🎲 Probabilidade:</p>
            <p class="text-gray-700 dark:text-gray-300">É uma fração: O que eu quero (casos favoráveis) dividido por Tudo que pode acontecer (casos totais).</p>
        </div>
    </div>
    `,

});