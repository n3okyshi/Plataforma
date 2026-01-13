/**
 * MAT_CONTENT.JS
 * Conteúdo teórico das aulas de Matemática.
 */

window.registrarTeoria({
    // ============================================
    // ENSINO MÉDIO - 1º ao 3º ano
    // ============================================

    // ============================================
    // 1º ANO
    // ============================================

    // Unidade: Conjuntos e Função Afim
    "Conjuntos": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Teoria dos Conjuntos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Revisão da linguagem de conjuntos e operações (união $\\cup$, interseção $\\cap$, diferença $-$). O foco crucial está nos <strong>intervalos reais</strong>.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🛑 Intervalos:</p>
            <p class="text-gray-700 dark:text-gray-300">Bolinha fechada $[a, b]$ inclui o número. Bolinha aberta $(a, b)$ exclui o número. Isso define o domínio das funções.</p>
        </div>
    </div>
    `,

    "A Ideia de Função": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">O Que é Função?</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Formalização da relação entre grandezas. Definição rigorosa de Domínio (entrada), Contradomínio (possíveis saídas) e Imagem (saídas reais).
        </p>
        

[Image of function mapping diagram domain range]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔍 Teste da Reta Vertical:</p>
            <p class="text-gray-700 dark:text-gray-300">No gráfico, se você traçar uma linha vertical e ela cortar a curva em mais de um ponto, <strong>não é função</strong>.</p>
        </div>
    </div>
    `,

    "A Função Afim": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Função Afim (1º Grau)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A função polinomial $f(x) = ax + b$. Seu gráfico é sempre uma <strong>reta</strong>.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📈 Coeficientes:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>a (Angular):</strong> Define a inclinação (crescente ou decrescente).</li>
                <li><strong>b (Linear):</strong> Onde a reta corta o eixo Y.</li>
            </ul>
        </div>
    </div>
    `,

    "Funções Definidas por Mais de uma Sentença": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Funções por Partes e Modular</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Funções que mudam de comportamento dependendo do intervalo. Introdução à <strong>Função Modular</strong> ($|x|$).
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📐 Formato em V:</p>
            <p class="text-gray-700 dark:text-gray-300">A função modular básica $f(x) = |x|$ reflete a parte negativa para cima, criando um gráfico em forma de "V".</p>
        </div>
    </div>
    `,

    // Unidade: Função Quadrática
    "A Função Quadrática": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Função Quadrática (2º Grau)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A função $f(x) = ax^2 + bx + c$. O gráfico é uma curva chamada <strong>Parábola</strong>.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🙂 Concavidade:</p>
            <p class="text-gray-700 dark:text-gray-300">Quem manda é o "a":<br>Se $a > 0$, concavidade para cima.<br>Se $a < 0$, concavidade para baixo.</p>
        </div>
    </div>
    `,

    "Análises Algébrica e Gráfica da Função Quadrática": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Vértice e Raízes</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Cálculo dos pontos críticos: Raízes (onde corta X) e Vértice (ponto de máximo ou mínimo).
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⛰️ O Vértice:</p>
            <p class="text-gray-700 dark:text-gray-300">As coordenadas do vértice são fundamentais para problemas de otimização (ex: lucro máximo). $X_v = -b/2a$.</p>
        </div>
    </div>
    `,

    // Unidade: Função Exponencial
    "Potenciação e Radiciação": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Potência e Raiz</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Revisão aprofundada, focando em expoentes racionais que viram raízes.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">☀️ Regra Prática:</p>
            <p class="text-gray-700 dark:text-gray-300">Expoente fracionário: "Quem está na sombra (denominador) vai pro sol (índice da raiz)".</p>
        </div>
    </div>
    `,

    "A Função Exponencial": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Função Exponencial</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A função $f(x) = a^x$. Crescimento ou decaimento muito rápido.
        </p>
        

[Image of exponential growth and decay graph]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🦠 Aplicações:</p>
            <p class="text-gray-700 dark:text-gray-300">Essencial para entender juros compostos, crescimento de bactérias e epidemias.</p>
        </div>
    </div>
    `,

    // Unidade: Função Logarítmica
    "Logaritmo": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Logaritmos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A operação inversa da exponenciação. "A base elevada a quanto dá o logaritmando?"
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔄 Ciclo:</p>
            <p class="text-gray-700 dark:text-gray-300">$\log_a b = x \iff a^x = b$.<br>Condição: $a > 0, a \neq 1$ e $b > 0$.</p>
        </div>
    </div>
    `,

    "A Função Logarítmica": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Função Logarítmica</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estudo da função $f(x) = \log_a(x)$. Análise gráfica e aplicações.
        </p>
        

[Image of logarithmic function graph vs exponential]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🪞 Simetria:</p>
            <p class="text-gray-700 dark:text-gray-300">O gráfico do logaritmo é simétrico ao da exponencial em relação à reta $y = x$. Usado na Escala Richter e pH.</p>
        </div>
    </div>
    `,

    // Unidade: Sequências e Progressões
    "Sequências": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Sequências Numéricas</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Identificação de padrões matemáticos e generalização através do <strong>Termo Geral</strong> ($a_n$).
        </p>
        

[Image of fibonacci sequence pattern]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔢 Padrões:</p>
            <p class="text-gray-700 dark:text-gray-300">Diferenciar o valor do termo ($a_n$) da sua posição ($n$) na fila.</p>
        </div>
    </div>
    `,

    "Progressão Aritmética": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Progressão Aritmética (P.A.)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Sequência onde cada termo é o anterior <strong>somado</strong> a uma constante (razão $r$).
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">∑ Soma de Gauss:</p>
            <p class="text-gray-700 dark:text-gray-300">Famosa fórmula da soma: $(a_1 + a_n) \cdot n / 2$. "O primeiro mais o último, vezes a quantidade, dividido por 2".</p>
        </div>
    </div>
    `,

    "Progressão Geométrica": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Progressão Geométrica (P.G.)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Sequência onde cada termo é o anterior <strong>multiplicado</strong> por uma constante (razão $q$).
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">♾️ Soma Infinita:</p>
            <p class="text-gray-700 dark:text-gray-300">Se $-1 < q < 1$, a soma infinita converge para um valor fixo. Essencial para entender fractais.</p>
        </div>
    </div>
    `,

    // ============================================
    // 2º ANO
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

    // ============================================
    // 3º ANO
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