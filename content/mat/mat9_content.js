/**
 * mat9_content.js
 * Conteúdo teórico das aulas de Matemática para o 9º ano do ensino fundamental.
 */

window.registrarTeoria({
    // ============================================
    // 9º ANO DO ENSINO FUNDAMENTAL
    // ============================================

    // Unidade: Números Reais
    "Conjunto dos Números Racionais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Números Racionais (Q)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Revisão dos números que podem ser escritos como fração. Focamos na técnica para transformar <strong>dízimas periódicas</strong> em frações geratrizes.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔍 Densidade:</p>
            <p class="text-gray-700 dark:text-gray-300">Entre dois números racionais, sempre existe outro racional. A reta é densa, mas ainda tem "buracos".</p>
        </div>
    </div>
    `,

    "Conjunto dos Números Irracionais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Números Irracionais (I)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Os números com representação decimal <strong>infinita e não periódica</strong>. Eles não podem virar fração.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">π As Celebridades:</p>
            <p class="text-gray-700 dark:text-gray-300">O Pi (π) e as raízes não exatas (como √2 e √3) são os exemplos fundamentais.</p>
        </div>
    </div>
    `,

    "Conjunto dos Números Reais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Números Reais (R)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A união completa: Racionais + Irracionais. Agora, cada ponto da reta numérica corresponde a um único número real.
        </p>
        

[Image of real number system venn diagram]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🤝 Completude:</p>
            <p class="text-gray-700 dark:text-gray-300">Os irracionais preenchem as "lacunas" deixadas pelos racionais, formando a <strong>Reta Real</strong> contínua.</p>
        </div>
    </div>
    `,

    "Operações com Raízes": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Radiciação Avançada</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Simplificação, operações e <strong>Racionalização de Denominadores</strong> (tirar a raiz da parte de baixo da fração).
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🛠️ Regra Chave:</p>
            <p class="text-gray-700 dark:text-gray-300">Só podemos somar raízes se o índice e o radicando forem iguais (ex: 2√3 + 5√3 = 7√3).</p>
        </div>
    </div>
    `,

    "Potenciação com Base Real": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Expoentes Fracionários</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Extensão das propriedades para bases reais e a conexão entre potência e raiz.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">☀️ O Sol e a Sombra:</p>
            <p class="text-gray-700 dark:text-gray-300">Regra mnemônica: "Quem está no sol (numerador) vai para a sombra (dentro da raiz), e quem está na sombra (denominador) vai para o sol (índice)".</p>
        </div>
    </div>
    `,

    // Unidade: Produtos Notáveis, Fatoração e Equações
    "Produtos Notáveis": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Produtos Notáveis</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Atalhos para multiplicação algébrica: Quadrado da soma, da diferença e produto da soma pela diferença.
        </p>
        

[Image of geometric proof of (a+b)^2]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🟥 Geometria:</p>
            <p class="text-gray-700 dark:text-gray-300">Interpretamos $(a+b)^2$ como a área de um quadrado grande formado por quadrados menores e retângulos.</p>
        </div>
    </div>
    `,

    "Fatoração de Polinômios": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Fatoração</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            O processo inverso dos produtos notáveis. Transformamos somas em multiplicações.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🧩 Técnicas:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li>Fator comum em evidência.</li>
                <li>Agrupamento.</li>
                <li>Diferença de quadrados ($a^2 - b^2$).</li>
                <li>Trinômio Quadrado Perfeito.</li>
            </ul>
        </div>
    </div>
    `,

    "Equações do 2º Grau com 1 Incógnita": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Equação do 2º Grau</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Definição da forma $ax^2 + bx + c = 0$. Resolução pela lendária <strong>Fórmula de Bhaskara</strong>.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⚠️ O Delta (Δ):</p>
            <p class="text-gray-700 dark:text-gray-300">O discriminante nos diz quantas soluções reais existem:
            <br>Δ > 0 (duas raízes), Δ = 0 (uma raiz), Δ < 0 (nenhuma raiz real).</p>
        </div>
    </div>
    `,

    // Unidade: Proporcionalidade e Juros
    "Retomando as Ideias de Razão e de Proporção": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Razão e Proporção</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Resolução de problemas complexos envolvendo escalas, divisão proporcional e <strong>Regra de Três Composta</strong>.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🗺️ Escalas:</p>
            <p class="text-gray-700 dark:text-gray-300">Essencial para leitura de mapas (ex: 1:100 significa que 1 cm no papel = 100 cm na realidade).</p>
        </div>
    </div>
    `,

    "Feixe de Retas Paralelas e o Teorema de Tales": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Teorema de Tales</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A proporcionalidade entre segmentos determinados por um feixe de retas paralelas cortadas por transversais.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📏 A Regra:</p>
            <p class="text-gray-700 dark:text-gray-300">"O está para O, assim como O está para O". A montagem correta das frações é o segredo.</p>
        </div>
    </div>
    `,

    "Outras Situações Que Envolvem Proporcionalidade em Geometria": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Teorema da Bissetriz</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Aplicação do Teorema da Bissetriz Interna e análise de segmentos proporcionais em triângulos.
        </p>
        

[Image of angle bisector theorem triangle]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">✂️ Divisão:</p>
            <p class="text-gray-700 dark:text-gray-300">A bissetriz divide o lado oposto em segmentos proporcionais aos lados adjacentes.</p>
        </div>
    </div>
    `,

    "Juros": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Juros Compostos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Diferenciação crítica entre Juros Simples (crescimento linear) e Compostos (crescimento exponencial).
        </p>
        

[Image of simple vs compound interest graph]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📈 Bola de Neve:</p>
            <p class="text-gray-700 dark:text-gray-300">No regime composto, temos "juros sobre juros". É como funcionam as dívidas de cartão e os investimentos.</p>
        </div>
    </div>
    `,

    // Unidade: Geometria - Semelhança e Vistas
    "Semelhanças de Figuras": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Semelhança de Triângulos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Figuras que têm a mesma forma, mas tamanhos diferentes. Ângulos iguais e lados proporcionais.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📐 Casos de Semelhança:</p>
            <p class="text-gray-700 dark:text-gray-300">O caso mais comum é o <strong>AA (Ângulo-Ângulo)</strong>: se dois triângulos têm dois ângulos iguais, eles são semelhantes.</p>
        </div>
    </div>
    `,

    "Perspectiva - Técnica Para Representação de Objetos no Plano": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Vistas Ortogonais</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Como representar o 3D no papel 2D. Interpretação de vistas frontal, lateral e superior.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🏗️ Engenharia:</p>
            <p class="text-gray-700 dark:text-gray-300">Essencial para leitura de projetos arquitetônicos e peças mecânicas.</p>
        </div>
    </div>
    `,

    // Unidade: Estatística, Combinatória e Probabilidade
    "Estatística": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Estatística Crítica</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Análise de histogramas e polígonos de frequência. Introdução a medidas de dispersão (o quão "espalhados" estão os dados).
        </p>
        

[Image of histogram vs bar chart]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📊 Amplitude:</p>
            <p class="text-gray-700 dark:text-gray-300">Diferença entre o maior e o menor valor da amostra.</p>
        </div>
    </div>
    `,

    "Combinatória - Método de Contagem": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Combinatória</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Aprofundamento do Princípio Fundamental da Contagem.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🤔 A Pergunta de Ouro:</p>
            <p class="text-gray-700 dark:text-gray-300">"A ordem importa?" <br>Sim = Arranjo (Senha). <br>Não = Combinação (Salada de frutas).</p>
        </div>
    </div>
    `,

    "Probabilidade": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Probabilidade Avançada</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Cálculo em espaços equiprováveis. Probabilidade da união e eventos independentes.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🎲 Conectivos:</p>
            <p class="text-gray-700 dark:text-gray-300">"OU" geralmente indica Soma (União). "E" geralmente indica Multiplicação (Eventos independentes).</p>
        </div>
    </div>
    `,

    "Estatística e Probabilidade": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Previsões</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Integração dos temas: uso da probabilidade para fazer previsões baseadas em frequências estatísticas passadas.
        </p>
    </div>
    `,

    // Unidade: Relações Métricas no Triângulo Retângulo
    "Uma Grande Descoberta que Envolve Medidas de Área - O Teorema de Pitágoras": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Teorema de Pitágoras</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A relação mais famosa da matemática: $a^2 = b^2 + c^2$.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🟥 Visualização:</p>
            <p class="text-gray-700 dark:text-gray-300">A área do quadrado construído sobre a hipotenusa é igual à soma das áreas dos quadrados sobre os catetos.</p>
        </div>
    </div>
    `,

    "Os Elementos e as Relações Métricas no Triângulo Retângulo": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Relações Métricas</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Além de Pitágoras, existem outras relações envolvendo a altura e as projeções dos catetos.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📏 Fórmulas:</p>
            <p class="text-gray-700 dark:text-gray-300">$h^2 = m \\cdot n$ (altura ao quadrado = produto das projeções).<br>$b^2 = a \\cdot m$ (cateto ao quadrado = hipotenusa vezes sua projeção).</p>
        </div>
    </div>
    `,

    "Aplicações Importantes do Teorema de Pitágoras": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Aplicações de Pitágoras</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Uso do teorema para calcular a diagonal de um quadrado, a altura de um triângulo equilátero e a distância entre dois pontos.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📍 Diagonal:</p>
            <p class="text-gray-700 dark:text-gray-300">Diagonal do quadrado: $d = l\\sqrt{2}$.<br>Altura do triângulo equilátero: $h = \\frac{l\\sqrt{3}}{2}$.</p>
        </div>
    </div>
    `,

    // Unidade: Explorando a Ideia de Função
    "A Ideia de Função": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">O Conceito de Função</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Formalização da relação de dependência entre duas variáveis. Notação $f(x)$.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🏭 A Máquina:</p>
            <p class="text-gray-700 dark:text-gray-300">Imagine uma máquina onde entra um número (Domínio), ocorre um processamento (Lei) e sai outro número (Imagem).</p>
        </div>
    </div>
    `,

    "Construção do Gráfico de uma Função": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Gráficos de Funções</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Visualizando o comportamento da função no plano cartesiano.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📈 Análise:</p>
            <p class="text-gray-700 dark:text-gray-300">Identificamos intervalos de crescimento, decrescimento e os <strong>zeros da função</strong> (onde o gráfico corta o eixo X).</p>
        </div>
    </div>
    `,

    "Função Quadrática": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Função do 2º Grau</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A função $y = ax^2 + bx + c$. Seu gráfico é uma curva chamada <strong>Parábola</strong>.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🙂 ou ☹️:</p>
            <p class="text-gray-700 dark:text-gray-300">Se $a > 0$, concavidade para cima (sorriso). Se $a < 0$, concavidade para baixo (tristeza).</p>
        </div>
    </div>
    `,

    // Unidade: Grandezas e Medidas
    "Grandezas e Medidas no Plano Cartesiano": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Geometria Analítica Básica</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Resolução de problemas geométricos usando coordenadas (perímetro e área de polígonos no gráfico).
        </p>
    </div>
    `,

    "Volume de Sólidos Geométricos": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Volume de Sólidos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Além de prismas e cilindros, avançamos para pirâmides, cones e esferas.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⅓ Regra do 1/3:</p>
            <p class="text-gray-700 dark:text-gray-300">O volume do cone e da pirâmide é sempre <strong>um terço</strong> do volume do prisma/cilindro correspondente.</p>
        </div>
    </div>
    `,

    "Unidades de Medida de Outras Grandezas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Unidades Compostas</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Conversão e aplicação de unidades de informática (bytes), velocidade média e densidade demográfica.
        </p>
    </div>
    `,

    // Unidade: Circunferência e Círculos
    "Círculo e Circunferência": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Círculo vs Circunferência</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Distinção essencial: Circunferência é a linha (borda), Círculo é a região (recheio).
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⭕ Elementos:</p>
            <p class="text-gray-700 dark:text-gray-300">Raio, diâmetro (2x raio), corda (liga dois pontos), arco e flecha.</p>
        </div>
    </div>
    `,

    "Circunferência, Retas e Polígonos": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Reta e Circunferência</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Posições relativas (tangente, secante, externa). Estudo de polígonos inscritos e circunscritos.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">👆 Tangente:</p>
            <p class="text-gray-700 dark:text-gray-300">A reta tangente toca a circunferência em apenas um ponto e forma <strong>90º</strong> com o raio.</p>
        </div>
    </div>
    `,

    "ângulos em uma Circunferência": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Ângulos na Circunferência</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estudo do ângulo central e do ângulo inscrito.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">👁️ Relação 2x:</p>
            <p class="text-gray-700 dark:text-gray-300">O ângulo central é sempre o <strong>dobro</strong> do ângulo inscrito que "enxerga" o mesmo arco.</p>
        </div>
    </div>
    `,

});