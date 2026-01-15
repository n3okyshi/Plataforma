/**
 * mat1em_content.js
 * Conteúdo teórico das aulas de Matemática para o 1º ano do ensino médio.
 */

window.registrarTeoria({
    // ============================================
    // 1º ANO DO ENSINO MÉDIO
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

});