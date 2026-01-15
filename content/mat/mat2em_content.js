/**
 * mat2em_content.js
 * Conteúdo teórico das aulas de Matemática para o 2º ano do ensino médio.
 */

window.registrarTeoria({
    // ============================================
    // 2º ANO DO ENSINO MÉDIO
    // ============================================

    // Unidade: Regiões Planas e Área
    "Medida de Área de Regiões Planas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Áreas de Figuras Planas</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Revisão e aprofundamento do cálculo de áreas. O foco é a estratégia de <strong>decomposição</strong>: dividir figuras complexas em formas simples (triângulos, retângulos) para somar as áreas.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🧩 Dividir para Conquistar:</p>
            <p class="text-gray-700 dark:text-gray-300">Qualquer polígono pode ser "fatiado" em triângulos. É a base para entender a fórmula da área de polígonos regulares.</p>
        </div>
    </div>
    `,

    "Ladrilhamento": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Ladrilhamento do Plano</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estudo da pavimentação (cobrir o plano sem falhas ou sobreposições).
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🎨 Arte e Matemática:</p>
            <p class="text-gray-700 dark:text-gray-300">Para ladrilhar com um único tipo de polígono regular, a soma dos ângulos no vértice deve ser <strong>360º</strong> (ex: hexágonos das abelhas).</p>
        </div>
    </div>
    `,

    // Unidade: Geometria Espacial
    "Introdução à Geometria Espacial": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Geometria Espacial: O Início</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Saímos do papel (2D) para o espaço (3D). Conceitos de Ponto, Reta e Plano.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⚠️ Novidade: Retas Reversas:</p>
            <p class="text-gray-700 dark:text-gray-300">No espaço, duas retas podem não se cruzar e NÃO serem paralelas. Elas estão em planos diferentes (como um viaduto passando sobre uma rua).</p>
        </div>
    </div>
    `,

    "Prismas e Cilindros": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Prismas e Cilindros</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Sólidos com duas bases paralelas e iguais ("teto e chão").
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🥞 Princípio de Cavalieri:</p>
            <p class="text-gray-700 dark:text-gray-300">Se duas pilhas de moedas têm a mesma altura e a mesma área de base, elas têm o mesmo volume, mesmo se uma pilha estiver torta.</p>
        </div>
    </div>
    `,

    "Pirâmide e Cone": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Sólidos de Ponta</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Sólidos que convergem para um único vértice (Pirâmides e Cones).
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⅓ A Regra do 1/3:</p>
            <p class="text-gray-700 dark:text-gray-300">O volume de uma pirâmide (ou cone) é exatamente <strong>um terço</strong> do volume de um prisma (ou cilindro) com mesma base e altura.</p>
        </div>
    </div>
    `,

    "Esfera e Projeções Cartográficas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Esfera e Mapas</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Cálculo de área e volume da esfera e o desafio de representar a Terra curva em um mapa plano (projeções).
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🍊 Descascando a Laranja:</p>
            <p class="text-gray-700 dark:text-gray-300">É impossível planificar uma esfera sem distorções. As projeções (Cilíndrica, Cônica) são tentativas matemáticas de minimizar isso.</p>
        </div>
    </div>
    `,

    // Unidade: Trigonometria
    "Semelhança de Polígonos": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Semelhança (Base da Trigonometria)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Compreensão da razão de semelhança. Se os ângulos são mantidos, os lados crescem proporcionalmente.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔗 Conexão:</p>
            <p class="text-gray-700 dark:text-gray-300">Isso fundamenta o porquê de o seno de 30º ser sempre 0,5, não importa o tamanho do triângulo.</p>
        </div>
    </div>
    `,

    "Relações Trigonométricas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Trigonometria no Triângulo Retângulo</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Definição de Seno, Cosseno e Tangente. Resolução de problemas de alturas inacessíveis.
        </p>
        

[Image of sohcahtoa right triangle]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📐 SOH CAH TOA:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>S</strong>eno = <strong>O</strong>posto / <strong>H</strong>ipotenusa</li>
                <li><strong>C</strong>osseno = <strong>A</strong>djacente / <strong>H</strong>ipotenusa</li>
                <li><strong>T</strong>angente = <strong>O</strong>posto / <strong>A</strong>djacente</li>
            </ul>
        </div>
    </div>
    `,

    "Conceitos Trigonométricos Básicos na Circunferência": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">O Ciclo Trigonométrico</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Expandindo a trigonometria para além de 90º. Introdução aos <strong>Radianos</strong> e arcos côngruos.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">π Radianos:</p>
            <p class="text-gray-700 dark:text-gray-300">A conversão chave: <strong>180º = π rad</strong>. O ciclo tem raio 1, facilitando os cálculos.</p>
        </div>
    </div>
    `,

    "Funções Trigonométricas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Funções Seno e Cosseno</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Análise dos gráficos (senoides) que modelam fenômenos periódicos (ondas, som, marés).
        </p>
        

[Image of sine and cosine wave graphs]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🌊 Ondas:</p>
            <p class="text-gray-700 dark:text-gray-300">Identificamos o <strong>Período</strong> (tempo de uma volta completa) e a <strong>Amplitude</strong> (altura da onda).</p>
        </div>
    </div>
    `,

    // Unidade: Matrizes, Determinantes e Sistemas Lineares
    "Matrizes e Determinantes": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Matrizes</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Organização de dados em tabelas. Operações de soma e produto. O Determinante como um número associado à matriz quadrada.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">✖️ Produto:</p>
            <p class="text-gray-700 dark:text-gray-300">Multiplicação de matrizes segue a regra: <strong>Linha por Coluna</strong>. Não é apenas multiplicar termo a termo!</p>
        </div>
    </div>
    `,

    "Sistemas Lineares": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Sistemas Lineares</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Resolução e discussão de sistemas (SPD, SPI, SI).
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🛠️ Escalonamento:</p>
            <p class="text-gray-700 dark:text-gray-300">A técnica mais poderosa (muito usada em computação) para resolver sistemas, eliminando variáveis passo a passo.</p>
        </div>
    </div>
    `,

});