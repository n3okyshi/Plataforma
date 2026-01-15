/**
 * mat6_content.js
 * Conteúdo teórico das aulas de Matemática para o 6º ano do ensino fundamental.
 */

window.registrarTeoria({
    // ============================================
    // 6º ANO DO ENSINO FUNDAMENTAL
    // ============================================

    // Ponto de Partida
    "Diagnóstico e Retomada": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Diagnóstico e Retomada</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Seção destinada a levantar os conhecimentos prévios dos estudantes construídos ao longo dos Anos Iniciais (até o 5º ano).
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">💡 Foco da revisão:</p>
            <p class="text-gray-700 dark:text-gray-300">Identificar quais tópicos exigem maior investimento: operações básicas, frações, geometria plana/espacial e leitura de gráficos.</p>
        </div>
    </div>
    `,

    // Números naturais: um pouco de História
    "Números naturais: um pouco de História": `
        <h3 class="text-2xl font-bold text-brand-blue mb-4">Números Naturais: Um Pouco de História</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Como percebemos, vivemos atualmente no “mundo dos números”. Mas foram necessários séculos e séculos de descobertas e aperfeiçoamentos para chegarmos ao modo atual de escrita.
        </p>
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <strong>Povos Primitivos:</strong> Quando e como o ser humano começou a contar? Há milhares de anos, já se contavam pequenas quantidades: animais caçados, objetos feitos, mudanças das fases da Lua (para medir o tempo) e rebanhos.
        </p>
        
        

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🦴 O Registro Antes da Escrita:</p>
            <p class="text-gray-700 dark:text-gray-300">
                Sem símbolos numéricos, usava-se a <strong>correspondência um a um</strong>: dedos da mão, pedrinhas, nós em cordas e talhos em ossos ou madeira. Cada marca representava um objeto.
            </p>
        </div>
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Com o passar do tempo, o pastoreio e o comércio exigiram o registro de quantidades maiores, forçando a criação de <strong>Sistemas de Numeração</strong>: conjuntos de símbolos e regras lógicas para representar números.
        </p>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4">O Sistema Egípcio (3000 a.C.)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Os egípcios registravam quantidades usando símbolos relacionados a imagens familiares a eles (hieróglifos). Cada símbolo representava uma potência de 10.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 text-center text-sm">
            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border dark:border-gray-600">
                <span class="block text-3xl text-brand-blue font-bold mb-1">|</span>
                <span class="font-bold text-gray-700 dark:text-gray-200">1</span>
                <br><span class="text-xs text-gray-500">Bastão</span>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border dark:border-gray-600">
                <span class="block text-3xl text-brand-blue font-bold mb-1">∩</span>
                <span class="font-bold text-gray-700 dark:text-gray-200">10</span>
                <br><span class="text-xs text-gray-500">Calcanhar</span>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border dark:border-gray-600">
                <span class="block text-3xl text-brand-blue font-bold mb-1">୭</span>
                <span class="font-bold text-gray-700 dark:text-gray-200">100</span>
                <br><span class="text-xs text-gray-500">Corda</span>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border dark:border-gray-600">
                <span class="block text-3xl text-brand-blue font-bold mb-1">𓆼</span>
                <span class="font-bold text-gray-700 dark:text-gray-200">1.000</span>
                <br><span class="text-xs text-gray-500">Flor de Lótus</span>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border dark:border-gray-600">
                <span class="block text-3xl text-brand-blue font-bold mb-1">𓂭</span>
                <span class="font-bold text-gray-700 dark:text-gray-200">10.000</span>
                <br><span class="text-xs text-gray-500">Dedo</span>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border dark:border-gray-600">
                <span class="block text-3xl text-brand-blue font-bold mb-1">𓆐</span>
                <span class="font-bold text-gray-700 dark:text-gray-200">100.000</span>
                <br><span class="text-xs text-gray-500">Peixe/Ave</span>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border dark:border-gray-600">
                <span class="block text-3xl text-brand-blue font-bold mb-1">𓁨</span>
                <span class="font-bold text-gray-700 dark:text-gray-200">1 Milhão</span>
                <br><span class="text-xs text-gray-500">Pessoa</span>
            </div>
        </div>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue space-y-2">
            <p class="font-bold text-brand-blue dark:text-blue-300">📜 Regras Fundamentais:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li><strong>Princípio Aditivo:</strong> O valor do número é a soma dos valores dos símbolos. Ex: <code>∩∩|</code> = 10+10+1 = 21.</li>
                <li><strong>Repetição:</strong> Cada símbolo pode ser repetido até <strong>9 vezes</strong>.</li>
                <li><strong>Não Posicional:</strong> A ordem não importa. <code>|∩</code> vale 11, assim como <code>∩|</code> vale 11.</li>
            </ul>
        </div>
        
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <strong>Exemplos Históricos:</strong>
            <br>• <strong>7:</strong> ||||||| (7 bastões)
            <br>• <strong>135:</strong> ୭ ∩∩∩ ||||| (1 corda, 3 calcanhares, 5 bastões)
            <br>• <strong>12.125:</strong> 𓂭 𓆼𓆼 ୭ ∩∩ |||||
        </p>
    </div>


    <h3 class="text-2xl font-bold text-brand-blue mb-4">Atividade 1: Tradução Numérica</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <p class="text-gray-700 dark:text-gray-200 font-bold mb-2">Converta os símbolos egípcios para o nosso sistema decimal:</p>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
            <p class="text-brand-blue text-xl mb-2 font-serif">୭ ୭ ୭ ∩ ||||||</p>
            <p class="text-xs text-gray-500 mb-2">(3 Cordas, 1 Calcanhar, 6 Bastões)</p>
            <div class="flex gap-2">
                <input type="text" id="input-atv1a" class="flex-1 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none focus:border-brand-blue transition-colors" placeholder="Valor decimal...">
                <button onclick="app.verificarAtividade('input-atv1a', '316')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl transition-colors">Verificar</button>
            </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
            <p class="text-brand-blue text-xl mb-2 font-serif">୭ ୭ ୭ |||||||</p>
            <p class="text-xs text-gray-500 mb-2">(3 Cordas, 7 Bastões)</p>
            <div class="flex gap-2">
                <input type="text" id="input-atv1b" class="flex-1 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none focus:border-brand-blue transition-colors" placeholder="Valor decimal...">
                <button onclick="app.verificarAtividade('input-atv1b', '307')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl transition-colors">Verificar</button>
            </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
            <p class="text-brand-blue text-xl mb-2 font-serif">𓂭 𓂭 ୭ ୭ 𓆼 ∩ ||</p>
            <p class="text-xs text-gray-500 mb-2">(2 Dedos, 2 Cordas, 1 Flor, 1 Calcanhar, 2 Bastões)</p>
            <div class="flex gap-2">
                <input type="text" id="input-atv1c" class="flex-1 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none focus:border-brand-blue transition-colors" placeholder="Valor decimal...">
                <button onclick="app.verificarAtividade('input-atv1c', '21212')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl transition-colors">Verificar</button>
            </div>
        </div>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4">Atividade 2: Engenharia Egípcia</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Das pirâmides de Gizé, a de <strong>Quéops</strong> é a mais importante. Traduza as medidas encontradas pelos arqueólogos para metros (soma total):
        </p>

        <div class="mb-6">
            <label class="block font-bold text-gray-700 dark:text-gray-200 mb-2">
                a) Medida do lado da Base:
                <br><span class="text-brand-blue text-xl font-serif">୭ ୭ ∩ ∩ ∩ | | |</span>
                <span class="text-xs text-gray-500 block mt-1">(2 Cordas, 3 Calcanhares, 3 Bastões)</span>
            </label>
            <div class="flex gap-2">
                <input type="text" id="input-queops1" class="flex-1 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none focus:border-brand-blue" placeholder="Metros...">
                <button onclick="app.verificarAtividade('input-queops1', '233')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl">Verificar</button>
            </div>
        </div>

        <div>
            <label class="block font-bold text-gray-700 dark:text-gray-200 mb-2">
                b) Medida da Altura original:
                <br><span class="text-brand-blue text-xl font-serif">୭ ∩ ∩ ∩ ∩ | | | | | | |</span>
                <span class="text-xs text-gray-500 block mt-1">(1 Corda, 4 Calcanhares, 7 Bastões)</span>
            </label>
            <div class="flex gap-2">
                <input type="text" id="input-queops2" class="flex-1 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none focus:border-brand-blue" placeholder="Metros...">
                <button onclick="app.verificarAtividade('input-queops2', '147')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl">Verificar</button>
            </div>
        </div>
    </div>


    <h3 class="text-2xl font-bold text-brand-blue mb-4">Atividade 3: Contexto Geográfico</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-brand-blue text-white font-bold px-3 py-1 rounded-lg text-sm">Q1</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 text-lg">Em qual continente fica o Egito?</h4>
        </div>
        <div class="flex flex-col gap-3 mb-6">
            <button onclick="app.verificarQuiz(this, false, 'fb-geo1')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-transparent p-4 rounded-xl transition-all">
                Asiático
            </button>
            <button onclick="app.verificarQuiz(this, true, 'fb-geo1')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-transparent p-4 rounded-xl transition-all">
                Africano
            </button>
        </div>
        <div id="fb-geo1" class="hidden mb-6 text-sm font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl">
            Correto! O Egito situa-se no nordeste da África.
        </div>

        <div class="flex items-center gap-3 mb-4">
            <span class="bg-brand-blue text-white font-bold px-3 py-1 rounded-lg text-sm">Q2</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 text-lg">Qual é o nome do importante rio que atravessa o Egito?</h4>
        </div>
        <div class="flex flex-col gap-3">
            <button onclick="app.verificarQuiz(this, true, 'fb-geo2')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-transparent p-4 rounded-xl transition-all">
                Rio Nilo
            </button>
            <button onclick="app.verificarQuiz(this, false, 'fb-geo2')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-transparent p-4 rounded-xl transition-all">
                Rio Amazonas
            </button>
        </div>
        <div id="fb-geo2" class="hidden mt-4 text-sm font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl">
            Isso mesmo! O Rio Nilo foi fundamental para a agricultura e transporte egípcio.
        </div>
    </div>


    <h3 class="text-2xl font-bold text-brand-blue mb-4">Atividade 4: Extensão do Nilo</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-brand-blue text-white font-bold px-3 py-1 rounded-lg text-sm">Desafio</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 text-lg">
                O Rio Nilo tem aproximadamente <strong>6.741 km</strong>. Como os egípcios representavam esse número?
            </h4>
        </div>

        <div class="flex flex-col gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-nilo')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-transparent p-4 rounded-xl transition-all">
                <span class="text-brand-blue text-xl mr-2">𓆼 ୭ ୭ ∩ |</span>
                (1 Flor, 2 Cordas, 1 Calcanhar, 1 Bastão)
            </button>

            <button onclick="app.verificarQuiz(this, true, 'fb-nilo')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-transparent p-4 rounded-xl transition-all">
                <span class="text-brand-blue text-xl mr-2">𓆼𓆼𓆼𓆼𓆼𓆼 ୭୭୭୭୭୭୭ ∩∩∩∩ |</span>
                (6 Flores, 7 Cordas, 4 Calcanhares, 1 Bastão)
            </button>

            <button onclick="app.verificarQuiz(this, false, 'fb-nilo')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-transparent p-4 rounded-xl transition-all">
                <span class="text-brand-blue text-xl mr-2">𓂭 𓆼 ୭ ∩ |</span>
                (1 Dedo, 1 Flor, 1 Corda, 1 Calcanhar, 1 Bastão)
            </button>
        </div>

        <div id="fb-nilo" class="hidden mt-4 text-sm font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl">
            Correto! 
            <br>6 x 1.000 (Flor) = 6.000
            <br>7 x 100 (Corda) = 700
            <br>4 x 10 (Calcanhar) = 40
            <br>1 x 1 (Bastão) = 1
            <br>Total = 6.741
        </div>
    </div>
  
























<h3 class="text-2xl font-bold text-brand-blue mb-4">O Legado de Roma</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            O sistema romano espalhou-se pelo mundo com a expansão do Império. Hoje, ainda o usamos para ler relógios, indicar séculos, capítulos de livros e nomes de reis ou papas.
        </p>
        
        

[Image of roman numerals clock face]


        <div class="flex flex-wrap justify-center gap-2 md:gap-4 text-center">
            <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl border border-blue-100 dark:border-blue-800 min-w-[60px]">
                <span class="block text-2xl font-bold text-brand-blue">I</span>
                <span class="text-sm font-bold text-gray-600 dark:text-gray-300">1</span>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl border border-blue-100 dark:border-blue-800 min-w-[60px]">
                <span class="block text-2xl font-bold text-brand-blue">V</span>
                <span class="text-sm font-bold text-gray-600 dark:text-gray-300">5</span>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl border border-blue-100 dark:border-blue-800 min-w-[60px]">
                <span class="block text-2xl font-bold text-brand-blue">X</span>
                <span class="text-sm font-bold text-gray-600 dark:text-gray-300">10</span>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl border border-blue-100 dark:border-blue-800 min-w-[60px]">
                <span class="block text-2xl font-bold text-brand-blue">L</span>
                <span class="text-sm font-bold text-gray-600 dark:text-gray-300">50</span>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl border border-blue-100 dark:border-blue-800 min-w-[60px]">
                <span class="block text-2xl font-bold text-brand-blue">C</span>
                <span class="text-sm font-bold text-gray-600 dark:text-gray-300">100</span>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl border border-blue-100 dark:border-blue-800 min-w-[60px]">
                <span class="block text-2xl font-bold text-brand-blue">D</span>
                <span class="text-sm font-bold text-gray-600 dark:text-gray-300">500</span>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl border border-blue-100 dark:border-blue-800 min-w-[60px]">
                <span class="block text-2xl font-bold text-brand-blue">M</span>
                <span class="text-sm font-bold text-gray-600 dark:text-gray-300">1000</span>
            </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border-l-4 border-brand-blue space-y-2">
            <p class="font-bold text-brand-blue dark:text-blue-300">📜 Regras de Ouro:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 text-base">
                <li><strong>Repetição:</strong> I, X, C e M podem repetir até 3 vezes (III = 3). V, L e D <strong>nunca</strong> repetem.</li>
                <li><strong>Adição:</strong> Símbolo menor à direita soma (VI = 5 + 1 = 6).</li>
                <li><strong>Subtração:</strong> Símbolo menor (apenas I, X, C) à esquerda subtrai (IV = 5 - 1 = 4).</li>
                <li><strong>Milhares:</strong> Um traço sobre a letra multiplica por 1.000 (ex: <span class="overline decoration-2">V</span> = 5.000).</li>
            </ul>
        </div>
    </div>


    <h3 class="text-2xl font-bold text-brand-blue mb-4">Contexto Histórico</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-brand-purple text-white font-bold px-3 py-1 rounded-lg text-sm">Pesquisa</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 text-lg">Origem do Sistema</h4>
        </div>

        <div class="space-y-4">
            <div>
                <label class="block font-bold text-gray-700 dark:text-gray-200 mb-2">a) Qual o nome do país atual onde fica Roma?</label>
                <div class="flex gap-2">
                    <input 
                        type="text" 
                        id="input-atv5a" 
                        oninput="this.value = this.value.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')" 
                        class="flex-1 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none" 
                        placeholder="Digite o país..."
                    >
                    <button onclick="app.verificarAtividade('input-atv5a', 'ITALIA')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl">Verificar</button>
                </div>
                <p class="text-xs text-gray-400 mt-1">*Digite sem acento se preferir.</p>
            </div>
            
            <div>
                <label class="block font-bold text-gray-700 dark:text-gray-200 mb-2">b) Em que continente esse país fica?</label>
                <div class="flex gap-2">
                    <input type="text" id="input-atv5b" oninput="this.value = this.value.toUpperCase()" class="flex-1 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none" placeholder="Digite o continente...">
                    <button onclick="app.verificarAtividade('input-atv5b', 'EUROPA')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl">Verificar</button>
                </div>
            </div>
        </div>
    </div>


    <h3 class="text-2xl font-bold text-brand-blue mb-4">Traduzindo Números</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        
        <div class="border-b-2 border-gray-100 dark:border-gray-700 pb-6">
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-4">6. Romano para Decimal (Arábico)</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="text-sm font-bold text-gray-500 block mb-1">XXVI</label>
                    <div class="flex gap-2">
                        <input type="number" id="input-atv6a" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-white outline-none">
                        <button onclick="app.verificarAtividade('input-atv6a', '26')" class="text-xs bg-brand-blue text-white px-3 rounded-lg">OK</button>
                    </div>
                </div>
                <div>
                    <label class="text-sm font-bold text-gray-500 block mb-1">LXXIII</label>
                    <div class="flex gap-2">
                        <input type="number" id="input-atv6b" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-white outline-none">
                        <button onclick="app.verificarAtividade('input-atv6b', '73')" class="text-xs bg-brand-blue text-white px-3 rounded-lg">OK</button>
                    </div>
                </div>
                <div>
                    <label class="text-sm font-bold text-gray-500 block mb-1">CCII</label>
                    <div class="flex gap-2">
                        <input type="number" id="input-atv6c" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-white outline-none">
                        <button onclick="app.verificarAtividade('input-atv6c', '202')" class="text-xs bg-brand-blue text-white px-3 rounded-lg">OK</button>
                    </div>
                </div>
                <div>
                    <label class="text-sm font-bold text-gray-500 block mb-1">MDC</label>
                    <div class="flex gap-2">
                        <input type="number" id="input-atv6d" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-white outline-none">
                        <button onclick="app.verificarAtividade('input-atv6d', '1600')" class="text-xs bg-brand-blue text-white px-3 rounded-lg">OK</button>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-4">7. Decimal para Romano</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="text-sm font-bold text-gray-500 block mb-1">31</label>
                    <div class="flex gap-2">
                        <input type="text" id="input-atv7a" oninput="this.value = this.value.toUpperCase()" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-white outline-none uppercase">
                        <button onclick="app.verificarAtividade('input-atv7a', 'XXXI')" class="text-xs bg-brand-blue text-white px-3 rounded-lg">OK</button>
                    </div>
                </div>
                <div>
                    <label class="text-sm font-bold text-gray-500 block mb-1">95</label>
                    <div class="flex gap-2">
                        <input type="text" id="input-atv7b" oninput="this.value = this.value.toUpperCase()" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-white outline-none uppercase">
                        <button onclick="app.verificarAtividade('input-atv7b', 'XCV')" class="text-xs bg-brand-blue text-white px-3 rounded-lg">OK</button>
                    </div>
                </div>
                <div>
                    <label class="text-sm font-bold text-gray-500 block mb-1">230</label>
                    <div class="flex gap-2">
                        <input type="text" id="input-atv7c" oninput="this.value = this.value.toUpperCase()" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-white outline-none uppercase">
                        <button onclick="app.verificarAtividade('input-atv7c', 'CCXXX')" class="text-xs bg-brand-blue text-white px-3 rounded-lg">OK</button>
                    </div>
                </div>
                <div>
                    <label class="text-sm font-bold text-gray-500 block mb-1">2026</label>
                    <div class="flex gap-2">
                        <input type="text" id="input-atv7d" oninput="this.value = this.value.toUpperCase()" class="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-white outline-none uppercase">
                        <button onclick="app.verificarAtividade('input-atv7d', 'MMXXVI')" class="text-xs bg-brand-blue text-white px-3 rounded-lg">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <h3 class="text-2xl font-bold text-brand-blue mb-4">Números no Dia a Dia</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        
        <div>
            <p class="font-bold text-gray-700 dark:text-gray-200 mb-2">8. Reescreva usando romanos:</p>
            
            <div class="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-xl mb-2">
                <span class="text-gray-600 dark:text-gray-300">Século Quinze</span>
                <div class="flex gap-2 w-1/3">
                    <input type="text" id="input-atv8a" oninput="this.value = this.value.toUpperCase()" class="flex-1 bg-white dark:bg-gray-900 border border-gray-300 rounded-lg px-2 text-center uppercase" placeholder="...">
                    <button onclick="app.verificarAtividade('input-atv8a', 'XV')" class="text-brand-green font-bold">✓</button>
                </div>
            </div>

            <div class="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-xl mb-2">
                <span class="text-gray-600 dark:text-gray-300">Capítulo Dezenove</span>
                <div class="flex gap-2 w-1/3">
                    <input type="text" id="input-atv8b" oninput="this.value = this.value.toUpperCase()" class="flex-1 bg-white dark:bg-gray-900 border border-gray-300 rounded-lg px-2 text-center uppercase" placeholder="...">
                    <button onclick="app.verificarAtividade('input-atv8b', 'XIX')" class="text-brand-green font-bold">✓</button>
                </div>
            </div>
        </div>

        <div class="border-t-2 border-gray-100 dark:border-gray-700 pt-4">
            <p class="font-bold text-gray-700 dark:text-gray-200 mb-2">9. Decifre a Construção:</p>
            
            <label class="block text-sm text-gray-500 mb-2">Que ano está escrito na fachada (MDCCCLXIX)?</label>
            <div class="flex gap-2">
                <input type="text" id="input-atv9" class="flex-1 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none" placeholder="Ano em decimal...">
                <button onclick="app.verificarAtividade('input-atv9', '1869')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl">Verificar</button>
            </div>
        </div>
    </div>


    <h3 class="text-2xl font-bold text-brand-blue mb-4">Desafios de Lógica</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        
        <div class="mb-8">
            <div class="flex items-center gap-3 mb-4">
                <span class="bg-brand-purple text-white font-bold px-3 py-1 rounded-lg text-sm">Desafio 11</span>
                <h4 class="font-bold text-gray-700 dark:text-gray-200 text-lg">O Maior Número</h4>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
                Qual o maior número que podemos escrever usando os símbolos <strong>I, X, L, C</strong> sem repeti-los?
                <br><span class="text-xs text-gray-500">(Dica: coloque os maiores valores primeiro!)</span>
            </p>
            <div class="flex gap-2 mb-4">
                <input type="text" id="input-atv11" oninput="this.value = this.value.toUpperCase()" class="flex-1 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none uppercase" placeholder="Escreva em romano...">
                <button onclick="app.verificarAtividade('input-atv11', 'CLXI')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl">Verificar</button>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                <strong>Explicação:</strong> Começamos pelo maior (C=100), depois L (50), X (10) e I (1). Resultado: CLXI (161).
            </div>
        </div>
    </div>


    <h3 class="text-2xl font-bold text-brand-blue mb-4">Viajando no Tempo</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Complete a tabela dos séculos. Lembre-se: O século começa no ano 01 e termina no ano 00.
        </p>

        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-600 dark:text-gray-300 border-collapse">
                <thead class="bg-gray-100 dark:bg-gray-800 text-brand-blue font-bold">
                    <tr>
                        <th class="px-4 py-2 border dark:border-gray-700">Período (Anos)</th>
                        <th class="px-4 py-2 border dark:border-gray-700">Século (Romano)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="px-4 py-2 border dark:border-gray-700">De 2101 a 2200</td>
                        <td class="px-4 py-2 border dark:border-gray-700">
                            <input type="text" id="input-sec1" class="w-full bg-white dark:bg-gray-900 border border-gray-300 rounded px-2 py-1 text-center uppercase" onblur="app.verificarAtividade('input-sec1', 'XXII')" placeholder="?">
                        </td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border dark:border-gray-700">
                            De <input type="text" id="input-sec2a" class="w-16 bg-white dark:bg-gray-900 border border-gray-300 rounded px-1 text-center" onblur="app.verificarAtividade('input-sec2a', '1401')"> a <input type="text" id="input-sec2b" class="w-16 bg-white dark:bg-gray-900 border border-gray-300 rounded px-1 text-center" onblur="app.verificarAtividade('input-sec2b', '1500')">
                        </td>
                        <td class="px-4 py-2 border dark:border-gray-700 font-bold">Século XV</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border dark:border-gray-700">De 1801 a 1900</td>
                        <td class="px-4 py-2 border dark:border-gray-700">
                            <input type="text" id="input-sec3" class="w-full bg-white dark:bg-gray-900 border border-gray-300 rounded px-2 py-1 text-center uppercase" onblur="app.verificarAtividade('input-sec3', 'XIX')" placeholder="?">
                        </td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2 border dark:border-gray-700">
                            De <input type="text" id="input-sec4a" class="w-16 bg-white dark:bg-gray-900 border border-gray-300 rounded px-1 text-center" onblur="app.verificarAtividade('input-sec4a', '1701')"> a <input type="text" id="input-sec4b" class="w-16 bg-white dark:bg-gray-900 border border-gray-300 rounded px-1 text-center" onblur="app.verificarAtividade('input-sec4b', '1800')">
                        </td>
                        <td class="px-4 py-2 border dark:border-gray-700 font-bold">Século XVIII</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-6 border-t-2 border-gray-100 dark:border-gray-700 pt-6">
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">15. Acontecimento do Século XX</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Pesquisa rápida: Em que ano o homem pisou na Lua pela primeira vez (Século XX)?
            </p>
            <div class="flex gap-2">
                <input type="text" id="input-atv15" class="flex-1 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none" placeholder="Ano (ex: 1950)">
                <button onclick="app.verificarAtividade('input-atv15', '1969')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl">Verificar</button>
            </div>
        </div>
    </div>














<h3 class="text-2xl font-bold text-brand-blue mb-4">Como Nasce o Conhecimento?</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Antes de estudarmos os Maias, vamos aprender a ferramenta fundamental dos cientistas e historiadores: o <strong>Projeto de Pesquisa</strong>. Pesquisar não é apenas "dar um Google"; é um processo organizado de investigação.
        </p>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300 text-lg mb-3">🧭 O Mapa da Pesquisa:</p>
            <ol class="relative border-l border-gray-300 dark:border-gray-600 ml-3 space-y-6">
                <li class="ml-6">
                    <span class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-brand-blue rounded-full ring-4 ring-white dark:ring-gray-900">
                        <span class="text-white text-xs">1</span>
                    </span>
                    <h4 class="font-bold text-gray-800 dark:text-white">Escolha do Tema</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">O que vamos estudar? (Ex: Numeração Maia)</p>
                </li>
                <li class="ml-6">
                    <span class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-brand-blue rounded-full ring-4 ring-white dark:ring-gray-900">
                        <span class="text-white text-xs">2</span>
                    </span>
                    <h4 class="font-bold text-gray-800 dark:text-white">Definição da Pergunta</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">O que queremos descobrir exatamente?</p>
                </li>
                <li class="ml-6">
                    <span class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-brand-blue rounded-full ring-4 ring-white dark:ring-gray-900">
                        <span class="text-white text-xs">3</span>
                    </span>
                    <h4 class="font-bold text-gray-800 dark:text-white">Hipóteses</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">O que a gente <em>acha</em> que é a resposta (antes de estudar)?</p>
                </li>
                <li class="ml-6">
                    <span class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-brand-blue rounded-full ring-4 ring-white dark:ring-gray-900">
                        <span class="text-white text-xs">4</span>
                    </span>
                    <h4 class="font-bold text-gray-800 dark:text-white">Levantamento Bibliográfico</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Ler livros e fontes confiáveis para buscar dados.</p>
                </li>
                <li class="ml-6">
                    <span class="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-500 rounded-full ring-4 ring-white dark:ring-gray-900">
                        <span class="text-white text-xs">✓</span>
                    </span>
                    <h4 class="font-bold text-gray-800 dark:text-white">Conclusão</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Testar as hipóteses e criar um relatório.</p>
                </li>
            </ol>
        </div>
    </div>

<h3 class="text-2xl font-bold text-brand-blue mb-4">O Sistema Maia</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            A civilização Maia (América Central) criou um sistema fascinante baseado na contagem dos dedos das mãos e dos pés (20 dedos). Por isso, é um sistema <strong>Vigesimal (Base 20)</strong>.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border-2 border-transparent hover:border-brand-blue transition-all">
                <span class="text-4xl">🐚</span>
                <p class="font-bold text-gray-700 dark:text-gray-200 mt-2">Concha (Zero)</p>
                <p class="text-xs text-gray-500">A grande invenção maia!</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border-2 border-transparent hover:border-brand-blue transition-all">
                <span class="text-4xl text-gray-800 dark:text-white">●</span>
                <p class="font-bold text-gray-700 dark:text-gray-200 mt-2">Ponto (Um)</p>
                <p class="text-xs text-gray-500">Vale 1 unidade.</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border-2 border-transparent hover:border-brand-blue transition-all">
                <span class="text-4xl text-gray-800 dark:text-white">▬</span>
                <p class="font-bold text-gray-700 dark:text-gray-200 mt-2">Traço (Cinco)</p>
                <p class="text-xs text-gray-500">Vale 5 unidades.</p>
            </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
            <p class="font-bold text-gray-700 dark:text-gray-200 mb-2">🔢 Como contar:</p>
            <div class="grid grid-cols-5 gap-2 text-center text-sm font-mono text-gray-600 dark:text-gray-400">
                <div>0: 🐚</div>
                <div>1: ●</div>
                <div>2: ●●</div>
                <div>3: ●●●</div>
                <div>4: ●●●●</div>
                <div>5: ▬</div>
                <div>6: ▬●</div>
                <div>10: ▬▬</div>
                <div>13: ▬▬●●●</div>
                <div>19: ▬▬▬●●●●</div>
            </div>
        </div>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4">Quiz: O Cientista</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-brand-blue text-white font-bold px-3 py-1 rounded-lg text-sm">Passo a Passo</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 text-lg">O que são "Hipóteses"?</h4>
        </div>

        <div class="flex flex-col gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-met1')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-xl transition-all">
                São as conclusões finais do trabalho.
            </button>
            
            <button onclick="app.verificarQuiz(this, true, 'fb-met1')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-xl transition-all">
                São o que pensamos ser a resposta antes de pesquisar.
            </button>
            
            <button onclick="app.verificarQuiz(this, false, 'fb-met1')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-xl transition-all">
                São os livros que lemos para o trabalho.
            </button>
        </div>

        <div id="fb-met1" class="hidden mt-4 text-sm font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl">
            Correto! Hipóteses são nossas "apostas" iniciais. A pesquisa serve para confirmar se elas estavam certas ou erradas.
        </div>
    </div>

<h3 class="text-2xl font-bold text-brand-blue mb-4">Matemática Maia</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <p class="text-gray-600 dark:text-gray-300">
            Calcule o valor dos números maias no nosso sistema decimal.
            <br><span class="text-xs italic">Lembrete: ● = 1 e ▬ = 5</span>
        </p>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
            <div class="flex items-center gap-4 mb-3">
                <div class="flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-sm w-20 gap-1 border dark:border-gray-700">
                    <span class="text-xs text-gray-800 dark:text-white font-bold">●●</span>
                    <div class="w-10 h-2 bg-gray-800 dark:bg-white rounded-full"></div>
                </div>
                <span class="text-gray-500">=</span>
                <p class="text-sm text-gray-600 dark:text-gray-400">(1 traço e 2 pontos)</p>
            </div>
            <div class="flex gap-2">
                <input type="text" id="input-maia1" class="flex-1 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none" placeholder="Valor decimal...">
                <button onclick="app.verificarAtividade('input-maia1', '7')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl">Verificar</button>
            </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
            <div class="flex items-center gap-4 mb-3">
                <div class="flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-sm w-20 gap-1 border dark:border-gray-700">
                    <span class="text-xs text-gray-800 dark:text-white font-bold">●●●●</span>
                    <div class="w-10 h-2 bg-gray-800 dark:bg-white rounded-full"></div>
                    <div class="w-10 h-2 bg-gray-800 dark:bg-white rounded-full"></div>
                </div>
                <span class="text-gray-500">=</span>
                <p class="text-sm text-gray-600 dark:text-gray-400">(2 traços e 4 pontos)</p>
            </div>
            <div class="flex gap-2">
                <input type="text" id="input-maia2" class="flex-1 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none" placeholder="Valor decimal...">
                <button onclick="app.verificarAtividade('input-maia2', '14')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl">Verificar</button>
            </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
            <div class="flex items-center gap-4 mb-3">
                <div class="flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-2 rounded-lg shadow-sm w-20 gap-1 border dark:border-gray-700">
                    <span class="text-xs text-gray-800 dark:text-white font-bold">●●●</span>
                    <div class="w-10 h-2 bg-gray-800 dark:bg-white rounded-full"></div>
                    <div class="w-10 h-2 bg-gray-800 dark:bg-white rounded-full"></div>
                    <div class="w-10 h-2 bg-gray-800 dark:bg-white rounded-full"></div>
                </div>
                <span class="text-gray-500">=</span>
                <p class="text-sm text-gray-600 dark:text-gray-400">(3 traços e 3 pontos)</p>
            </div>
            <div class="flex gap-2">
                <input type="text" id="input-maia3" class="flex-1 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none" placeholder="Valor decimal...">
                <button onclick="app.verificarAtividade('input-maia3', '18')" class="bg-brand-green hover:bg-brand-greenDark text-white font-bold px-4 rounded-xl">Verificar</button>
            </div>
        </div>
    </div>

<h3 class="text-2xl font-bold text-brand-blue mb-4">Relatório Final</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <p class="text-gray-600 dark:text-gray-300 mb-4">
            Após analisar os dados do sistema Maia, qual é a principal conclusão sobre a estrutura desse sistema?
        </p>

        <div class="flex flex-col gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-conc')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-xl transition-all">
                É um sistema idêntico ao nosso, base 10.
            </button>
            
            <button onclick="app.verificarQuiz(this, true, 'fb-conc')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-xl transition-all">
                É vigesimal (base 20) e possui o Zero.
            </button>
            
            <button onclick="app.verificarQuiz(this, false, 'fb-conc')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-xl transition-all">
                Não utiliza símbolos para representar quantidades.
            </button>
        </div>

        <div id="fb-conc" class="hidden mt-4 text-sm font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl">
            Excelente conclusão! O sistema vigesimal e o uso do zero são as marcas registradas da matemática Maia.
        </div>
    </div>















<h3 class="text-2xl font-bold text-brand-blue mb-4">O Sistema Indo-Arábico</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            O sistema que usamos hoje nasceu na Índia (século V) e foi aperfeiçoado e divulgado pelos árabes. Por isso, é chamado de <strong>Sistema de Numeração Decimal Indo-Arábico</strong>.
        </p>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-brand-blue space-y-4">
            <h4 class="font-bold text-brand-blue dark:text-blue-300 text-lg">Características Fundamentais:</h4>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Base 10:</strong> Os agrupamentos são feitos de 10 em 10. (10 unidades = 1 dezena, 10 dezenas = 1 centena).</li>
                <li><strong>Símbolos (Algarismos):</strong> Usamos apenas 10 símbolos (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) para escrever <em>qualquer</em> número, por maior que seja.</li>
                <li><strong>Posicional:</strong> A posição do algarismo determina seu valor. O número <strong>25</strong> é diferente de <strong>52</strong>, embora usem os mesmos símbolos.</li>
            </ul>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                <p class="font-bold text-gray-700 dark:text-gray-200 text-center text-xl mb-2">25</p>
                <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
                    2 Dezenas (20) + 5 Unidades
                </p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                <p class="font-bold text-gray-700 dark:text-gray-200 text-center text-xl mb-2">52</p>
                <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
                    5 Dezenas (50) + 2 Unidades
                </p>
            </div>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
            <p class="font-bold text-yellow-700 dark:text-yellow-400">📜 Curiosidade Histórica:</p>
            <p class="text-gray-700 dark:text-gray-300 mt-2">
                A palavra <strong>algarismo</strong> vem do nome do matemático árabe <em>Al-Khowarizmi</em>. Já a palavra <strong>dígito</strong> vem do latim <em>digitus</em> (dedo), lembrando que começamos a contar usando os dedos das mãos.
            </p>
        </div>
    </div>


<h3 class="text-2xl font-bold text-brand-blue mb-4">Valor Posicional</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-8">
        
        <div>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">16. Qual é o valor do algarismo 6?</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input type="text" id="input-q16a" class="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-white outline-none" placeholder="Em 164..." onblur="app.verificarAtividade('input-q16a', '60')">
                <input type="text" id="input-q16b" class="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-white outline-none" placeholder="Em 1.236..." onblur="app.verificarAtividade('input-q16b', '6')">
                <input type="text" id="input-q16c" class="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-white outline-none" placeholder="Em 6.524..." onblur="app.verificarAtividade('input-q16c', '6000')">
            </div>
        </div>

        <div>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">17. Escreva o valor do número em destaque:</h4>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li class="flex gap-2 items-center">
                    <span>5<strong class="text-brand-blue">2</strong>60:</span>
                    <input type="text" id="input-q17a" class="w-24 bg-white dark:bg-gray-900 border border-gray-300 rounded px-2" onblur="app.verificarAtividade('input-q17a', '200')">
                </li>
                <li class="flex gap-2 items-center">
                    <span>3<strong class="text-brand-blue">5</strong>0.237:</span>
                    <input type="text" id="input-q17b" class="w-24 bg-white dark:bg-gray-900 border border-gray-300 rounded px-2" onblur="app.verificarAtividade('input-q17b', '50000')">
                </li>
                <li class="flex gap-2 items-center">
                    <span>1.7<strong class="text-brand-blue">0</strong>1:</span>
                    <input type="text" id="input-q17c" class="w-24 bg-white dark:bg-gray-900 border border-gray-300 rounded px-2" onblur="app.verificarAtividade('input-q17c', '0')">
                </li>
                <li class="flex gap-2 items-center">
                    <span>3.4<strong class="text-brand-blue">7</strong>8:</span>
                    <input type="text" id="input-q17d" class="w-24 bg-white dark:bg-gray-900 border border-gray-300 rounded px-2" onblur="app.verificarAtividade('input-q17d', '70')">
                </li>
            </ul>
        </div>

        <div class="border-t border-gray-100 dark:border-gray-700 pt-4">
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">18. Onde o 8 vale mais?</h4>
            <p class="text-sm text-gray-500 mb-3">Analise os números: 28.345, 3.168, 1.869, 45.387</p>
            <div class="flex flex-col gap-2">
                <button onclick="app.verificarQuiz(this, true, 'fb-q18')" class="text-left bg-gray-50 dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all">
                    28.345 (Vale 8.000)
                </button>
                <button onclick="app.verificarQuiz(this, false, 'fb-q18')" class="text-left bg-gray-50 dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all">
                    1.869 (Vale 800)
                </button>
                <button onclick="app.verificarQuiz(this, false, 'fb-q18')" class="text-left bg-gray-50 dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all">
                    45.387 (Vale 80)
                </button>
            </div>
            <div id="fb-q18" class="hidden mt-2 text-sm font-bold text-green-600 bg-green-100 p-2 rounded">
                Correto! Na unidade de milhar, o 8 vale oito mil.
            </div>
        </div>

        <div>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">19. O Intruso Constante</h4>
            <p class="text-gray-600 dark:text-gray-300 mb-2">Qual algarismo tem o <strong>mesmo valor posicional</strong> nestes três números?</p>
            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center font-mono tracking-widest text-brand-blue mb-2">
                23.569<br>269.537<br>963.572
            </div>
            <div class="flex gap-2 items-center">
                <label class="text-sm font-bold text-gray-500">Algarismo:</label>
                <input type="text" id="input-q19" class="w-16 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg p-2 text-center" onblur="app.verificarAtividade('input-q19', '5')">
                <span class="text-xs text-gray-400">(Dica: Ele vale 500 em todos)</span>
            </div>
        </div>
    </div>


<h3 class="text-2xl font-bold text-brand-blue mb-4">Desafios de Lógica</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        
        <div>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">20. Responda Rápido:</h4>
            <div class="space-y-3">
                <div class="flex flex-col">
                    <label class="text-sm text-gray-600 dark:text-gray-400">a) O maior número natural de 3 dígitos:</label>
                    <div class="flex gap-2">
                        <input type="text" id="input-q20b" class="flex-1 bg-gray-50 dark:bg-gray-800 border rounded p-2 text-gray-900 dark:text-white" placeholder="...">
                        <button onclick="app.verificarAtividade('input-q20b', '999')" class="bg-brand-blue text-white px-3 rounded">OK</button>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label class="text-sm text-gray-600 dark:text-gray-400">b) O menor número natural de 3 dígitos:</label>
                    <div class="flex gap-2">
                        <input type="text" id="input-q20c" class="flex-1 bg-gray-50 dark:bg-gray-800 border rounded p-2 text-gray-900 dark:text-white" placeholder="...">
                        <button onclick="app.verificarAtividade('input-q20c', '100')" class="bg-brand-blue text-white px-3 rounded">OK</button>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label class="text-sm text-gray-600 dark:text-gray-400">c) O menor número de 3 dígitos <strong>distintos</strong>:</label>
                    <div class="flex gap-2">
                        <input type="text" id="input-q20d" class="flex-1 bg-gray-50 dark:bg-gray-800 border rounded p-2 text-gray-900 dark:text-white" placeholder="...">
                        <button onclick="app.verificarAtividade('input-q20d', '102')" class="bg-brand-blue text-white px-3 rounded">OK</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
            <h4 class="font-bold text-brand-blue dark:text-blue-300 mb-2">21. O Enigma do 700</h4>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Use os algarismos <strong>4, 3, 7</strong> (sem repetir). Escreva um número onde o 7 valha 700.
            </p>
            <div class="flex gap-2">
                <input type="text" id="input-q21" class="flex-1 bg-white dark:bg-gray-900 border rounded p-2 text-gray-900 dark:text-white" placeholder="Sua resposta...">
                <button onclick="app.verificarAtividade('input-q21', '734')" class="bg-brand-green text-white px-4 rounded font-bold">Verificar</button>
            </div>
            <p class="text-xs text-gray-500 mt-1">(Aceita 734 ou 743)</p>
        </div>

        <div>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">22. Permutação</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Use <strong>1, 2, 3, 4</strong>. Escreva um número onde o 2 valha 2.000.
            </p>
            <div class="flex gap-2">
                <input type="text" id="input-q22" class="flex-1 bg-gray-50 dark:bg-gray-800 border rounded p-2 text-gray-900 dark:text-white" placeholder="Ex: 2314">
                <button onclick="app.verificarAtividade('input-q22', '2134')" class="bg-brand-blue text-white px-3 rounded">OK</button>
            </div>
        </div>
    </div>


<h3 class="text-2xl font-bold text-brand-blue mb-4">Lendo o Ábaco</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border dark:border-gray-600 p-3 rounded-lg text-center">
                <p class="text-xs text-gray-500 uppercase mb-2">Ábaco A</p>
                <div class="flex justify-center gap-2 font-mono text-lg text-gray-700 dark:text-gray-300">
                    <div class="flex flex-col"><span>|</span><span>⚫⚫⚫⚫</span></div>
                    <div class="flex flex-col"><span>|</span><span>⚫⚫</span></div>
                    <div class="flex flex-col"><span>|</span><span>⚫⚫⚫</span></div>
                    <div class="flex flex-col"><span>|</span><span>⚫</span></div>
                </div>
                <p class="text-xs mt-2 font-bold">UM - C - D - U</p>
                <input type="text" id="input-abaco1" class="mt-2 w-full text-center bg-gray-100 dark:bg-gray-800 rounded p-1" placeholder="Que número é?" onblur="app.verificarAtividade('input-abaco1', '4231')">
            </div>

            <div class="border dark:border-gray-600 p-3 rounded-lg text-center">
                <p class="text-xs text-gray-500 uppercase mb-2">Ábaco B</p>
                <div class="flex justify-center gap-2 font-mono text-lg text-gray-700 dark:text-gray-300">
                    <div class="flex flex-col"><span>|</span><span>⚫</span></div>
                    <div class="flex flex-col"><span>|</span><span>⚫⚫⚫⚫</span></div>
                    <div class="flex flex-col"><span>|</span><span>⚫⚫</span></div>
                    <div class="flex flex-col"><span>|</span><span>⚫⚫⚫</span></div>
                </div>
                <p class="text-xs mt-2 font-bold">UM - C - D - U</p>
                <input type="text" id="input-abaco2" class="mt-2 w-full text-center bg-gray-100 dark:bg-gray-800 rounded p-1" placeholder="Que número é?" onblur="app.verificarAtividade('input-abaco2', '1423')">
            </div>

            <div class="border dark:border-gray-600 p-3 rounded-lg text-center">
                <p class="text-xs text-gray-500 uppercase mb-2">Ábaco C</p>
                <div class="flex justify-center gap-2 font-mono text-lg text-gray-700 dark:text-gray-300">
                    <div class="flex flex-col"><span>|</span><span>⚫⚫⚫</span></div>
                    <div class="flex flex-col"><span>|</span><span>⚫</span></div>
                    <div class="flex flex-col"><span>|</span><span>⚫⚫⚫⚫</span></div>
                    <div class="flex flex-col"><span>|</span><span>⚫⚫</span></div>
                </div>
                <p class="text-xs mt-2 font-bold">UM - C - D - U</p>
                <input type="text" id="input-abaco3" class="mt-2 w-full text-center bg-gray-100 dark:bg-gray-800 rounded p-1" placeholder="Que número é?" onblur="app.verificarAtividade('input-abaco3', '3142')">
            </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">25. Coloque em Ordem Crescente</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Use os números que você descobriu acima.</p>
            <div class="flex items-center gap-2">
                <input type="text" class="w-20 p-2 rounded text-center border" placeholder="Menor" onblur="app.verificarAtividade(this.id, '1423')">
                <span class="text-gray-400">&lt;</span>
                <input type="text" class="w-20 p-2 rounded text-center border" placeholder="Meio" onblur="app.verificarAtividade(this.id, '3142')">
                <span class="text-gray-400">&lt;</span>
                <input type="text" class="w-20 p-2 rounded text-center border" placeholder="Maior" onblur="app.verificarAtividade(this.id, '4231')">
            </div>
        </div>
    </div>


<h3 class="text-2xl font-bold text-brand-blue mb-4">Descobrindo Padrões</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <p class="text-gray-600 dark:text-gray-300">
            Descubra o <strong>7º termo</strong> seguindo as regras misteriosas:
        </p>
        
        <div class="text-xs bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-4">
            <strong>Regras:</strong><br>
            1. Se 3º termo > 5º termo: 7º = 1º + 4º<br>
            2. Se 3º termo < 5º termo e 5º é PAR: 7º = 1º × 4º<br>
            3. Se 3º termo < 5º termo e 5º é ÍMPAR: 7º = Sucessor do 1º
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <p class="font-mono text-brand-blue mb-2">a) 3, 15, 10, 2, 12, 5, ...</p>
                <div class="flex gap-2">
                    <input type="text" id="input-seq-a" class="w-full bg-white dark:bg-gray-900 border rounded px-2" placeholder="7º termo?">
                    <button onclick="app.verificarAtividade('input-seq-a', '6')" class="bg-brand-blue text-white px-2 rounded">✓</button>
                </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <p class="font-mono text-brand-blue mb-2">b) 8, 10, 9, 3, 7, 16, ...</p>
                <div class="flex gap-2">
                    <input type="text" id="input-seq-b" class="w-full bg-white dark:bg-gray-900 border rounded px-2" placeholder="7º termo?">
                    <button onclick="app.verificarAtividade('input-seq-b', '11')" class="bg-brand-blue text-white px-2 rounded">✓</button>
                </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <p class="font-mono text-brand-blue mb-2">c) 6, 5, 8, 3, 9, 10, ...</p>
                <div class="flex gap-2">
                    <input type="text" id="input-seq-c" class="w-full bg-white dark:bg-gray-900 border rounded px-2" placeholder="7º termo?">
                    <button onclick="app.verificarAtividade('input-seq-c', '7')" class="bg-brand-blue text-white px-2 rounded">✓</button>
                </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <p class="font-mono text-brand-blue mb-2">d) 66, 77, 58, 29, 52, 95, ...</p>
                <div class="flex gap-2">
                    <input type="text" id="input-seq-d" class="w-full bg-white dark:bg-gray-900 border rounded px-2" placeholder="7º termo?">
                    <button onclick="app.verificarAtividade('input-seq-d', '95')" class="bg-brand-blue text-white px-2 rounded">✓</button>
                </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg col-span-1 md:col-span-2">
                <p class="font-mono text-brand-blue mb-2">f) 20, 35, 39, 18, 40, 48, ...</p>
                <div class="flex gap-2">
                    <input type="text" id="input-seq-f" class="w-full bg-white dark:bg-gray-900 border rounded px-2" placeholder="7º termo?">
                    <button onclick="app.verificarAtividade('input-seq-f', '360')" class="bg-brand-blue text-white px-2 rounded">✓</button>
                </div>
            </div>
        </div>
    </div>
















<h3 class="text-2xl font-bold text-brand-blue mb-4">A Classe dos Milhões</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Expandindo nossos horizontes para números gigantes! Digite um número abaixo para ver como ele se organiza em ordens e classes, e como se lê:
        </p>

        <div class="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center w-full shadow-inner select-none">
            
            <h3 class="text-gray-400 dark:text-gray-500 font-bold uppercase text-xs tracking-widest mb-6">Raio-X Interativo</h3>

            <div class="w-full max-w-2xl mb-8">
                <input type="text" id="raio-x-input" value="12345678" maxlength="15" 
                    class="w-full text-3xl md:text-5xl font-mono font-bold text-center border-b-4 border-gray-300 dark:border-gray-600 outline-none text-gray-800 dark:text-white bg-transparent pb-2 tracking-widest focus:border-brand-blue transition-all placeholder-gray-400" 
                    placeholder="0"
                    oninput="
                        // 1. Limpeza do Valor
                        let val = this.value.replace(/[^0-9]/g, '');
                        if(val.length > 15) val = val.slice(0,15);
                        this.value = val;
                        
                        // 2. Elementos de Destino
                        const grid = document.getElementById('raio-x-grid');
                        const textRead = document.getElementById('raio-x-text');
                        
                        // 3. Configurações Visuais
                        const configs = [
                            {n:'Unidades', c:'green'}, {n:'Milhares', c:'blue'}, 
                            {n:'Milhões', c:'orange'}, {n:'Bilhões', c:'purple'}, {n:'Trilhões', c:'red'}
                        ];

                        // --- LÓGICA DO EXTENSO ---
                        const getExtenso = (n) => {
                            if (!n || n === '0') return 'zero';
                            const uns = ['','um','dois','três','quatro','cinco','seis','sete','oito','nove'];
                            const dez = ['','dez','vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa'];
                            const d10 = ['dez','onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove'];
                            const cen = ['','cento','duzentos','trezentos','quatrocentos','quinhentos','seiscentos','setecentos','oitocentos','novecentos'];
                            const sing = ['','mil','milhão','bilhão','trilhão'];
                            const plur = ['','mil','milhões','bilhões','trilhões'];
                            
                            let s = n.toString();
                            s = s.padStart(Math.ceil(s.length/3)*3, '0');
                            let grps = s.match(/.{1,3}/g).map(Number);
                            let tot = grps.length;
                            let res = [];

                            grps.forEach((v, i) => {
                                if (v === 0) return;
                                let idx = tot - 1 - i;
                                let txt = '';
                                let c = Math.floor(v/100), d = Math.floor((v%100)/10), u = v%10;

                                if (v === 100) txt = 'cem';
                                else {
                                    if (c > 0) { txt += cen[c]; if(d||u) txt += ' e '; }
                                    if (d === 1) txt += d10[u];
                                    else {
                                        if (d > 0) { txt += dez[d]; if(u) txt += ' e '; }
                                        if (u > 0) txt += uns[u];
                                    }
                                }

                                if (idx > 0) {
                                    if (idx===1 && v===1) txt = ''; // 'um mil' vira 'mil'
                                    txt += ' ' + (v===1 ? sing[idx] : plur[idx]);
                                }
                                res.push(txt);
                            });
                            return res.join(', ').replace(/, ([^,]*)$/, ' e $1');
                        };

                        // Atualiza o Texto
                        textRead.innerText = getExtenso(val);

                        // --- LÓGICA DO GRID VISUAL ---
                        const html = val.split('').reverse().join('').match(/.{1,3}/g) || [];
                        
                        grid.innerHTML = html.map((g, i) => {
                            if(i >= configs.length) return '';
                            const conf = configs[i];
                            
                            // Gera os dígitos (U-D-C)
                            const digits = g.split('').map((d, j) => {
                                const label = ['U','D','C'][j];
                                const order = (i*3) + j + 1;
                                return \`
                                    <div class='flex flex-col items-center group relative cursor-help'>
                                        <div class='w-8 h-10 bg-white dark:bg-gray-800 border-2 border-\${conf.c}-200 dark:border-\${conf.c}-700 rounded flex items-center justify-center font-bold text-gray-700 dark:text-gray-200 shadow-sm z-10 transition-transform group-hover:-translate-y-1'>\${d}</div>
                                        <div class='text-[9px] font-bold mt-1 text-\${conf.c}-600 dark:text-\${conf.c}-400'>\${label}</div>
                                        <div class='absolute bottom-full mb-1 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap z-20 pointer-events-none'>\${order}ª Ordem</div>
                                    </div>
                                \`;
                            }).join(''); 

                            // Card da Classe
                            return \`
                                <div class='flex flex-col items-center p-2 rounded-xl border-2 bg-\${conf.c}-50 border-\${conf.c}-200 dark:bg-gray-900 dark:border-\${conf.c}-900 shadow-sm animate-fade-in min-w-[90px]'>
                                    <span class='text-[9px] font-black uppercase mb-2 px-2 py-0.5 rounded-full bg-\${conf.c}-200 dark:bg-\${conf.c}-900 text-\${conf.c}-800 dark:text-\${conf.c}-300'>\${conf.n}</span>
                                    <div class='flex flex-row-reverse gap-1'>\${digits}</div>
                                </div>
                            \`;
                        }).reverse().join(''); 
                    ">
                <div class="text-center text-xs text-gray-400 mt-2 font-bold uppercase">Digite um número</div>
            </div>

            <div id="raio-x-grid" class="flex flex-wrap justify-center gap-2 md:gap-4 w-full pb-4"></div>

            <div class="mt-6 w-full bg-blue-50 dark:bg-gray-800 p-4 rounded-xl border border-blue-100 dark:border-gray-600 text-center relative overflow-hidden transition-all">
                <div class="absolute top-0 left-0 w-1 h-full bg-brand-blue"></div>
                <span class="text-[10px] font-bold text-gray-400 uppercase block mb-1 tracking-wider">Como se lê</span>
                <p id="raio-x-text" class="text-brand-blue dark:text-blue-300 font-bold text-lg md:text-xl leading-tight italic capitalize">...</p>
            </div>

            <img src="x" style="display:none;" onerror="document.getElementById('raio-x-input').dispatchEvent(new Event('input'))">
        </div>
    </div>


<h3 class="text-2xl font-bold text-brand-blue mb-4">A Revolução do Zero</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Parece óbvio hoje, mas a humanidade demorou séculos para inventar um símbolo para o "nada". Sem o Zero, como diferenciaríamos <strong>32</strong> de <strong>302</strong> ou <strong>3002</strong>?
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📜 Personagens Históricos:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>Al-Khowarizmi:</strong> Matemático árabe que ajudou a espalhar o sistema decimal. Dele vem a palavra <em>Algarismo</em>.</li>
                <li><strong>Fibonacci:</strong> Levou esses números para a Europa através do livro <em>Liber Abaci</em>.</li>
                <li><strong>Maias e Hindus:</strong> Foram os povos que desenvolveram a ideia do Zero posicional.</li>
            </ul>
        </div>
    </div>


<h3 class="text-2xl font-bold text-brand-blue mb-4">Raio-X do Número</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <div class="text-center bg-gray-50 dark:bg-gray-800 p-4 rounded-xl mb-4">
            <span class="text-3xl font-mono font-bold text-brand-purple tracking-widest">23.847.651</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label class="block font-bold text-gray-700 dark:text-gray-200 mb-2">a) Quantas classes?</label>
                <div class="flex gap-2">
                    <input type="text" id="input-atv27a" class="flex-1 bg-white dark:bg-gray-900 border rounded p-2 text-gray-900 dark:text-white" onblur="app.verificarAtividade('input-atv27a', '3')">
                </div>
            </div>
            <div>
                <label class="block font-bold text-gray-700 dark:text-gray-200 mb-2">b) Quantas ordens?</label>
                <div class="flex gap-2">
                    <input type="text" id="input-atv27b" class="flex-1 bg-white dark:bg-gray-900 border rounded p-2 text-gray-900 dark:text-white" onblur="app.verificarAtividade('input-atv27b', '8')">
                </div>
            </div>
            <div>
                <label class="block font-bold text-gray-700 dark:text-gray-200 mb-2">c) Algarismo da 5ª ordem?</label>
                <div class="flex gap-2">
                    <input type="text" id="input-atv27d" class="flex-1 bg-white dark:bg-gray-900 border rounded p-2 text-gray-900 dark:text-white" placeholder="(Conte da direita p/ esquerda)" onblur="app.verificarAtividade('input-atv27d', '4')">
                </div>
            </div>
            <div>
                <label class="block font-bold text-gray-700 dark:text-gray-200 mb-2">d) Nome da 2ª classe?</label>
                <div class="flex gap-2">
                    <input type="text" id="input-atv27e" class="flex-1 bg-white dark:bg-gray-900 border rounded p-2 text-gray-900 dark:text-white" placeholder="Classe dos..." onblur="app.verificarAtividade('input-atv27e', 'milhares')">
                </div>
            </div>
        </div>
    </div>


<h3 class="text-2xl font-bold text-brand-blue mb-4">Escrevendo Números</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-8">
        
        <div>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-3">28. Transforme em Algarismos:</h4>
            <div class="space-y-3">
                <div class="flex flex-col md:flex-row md:items-center gap-2">
                    <span class="text-sm w-full md:w-1/2 text-gray-600 dark:text-gray-400">Cento e cinco mil e quinhentos:</span>
                    <input type="text" id="input-atv28a" class="flex-1 bg-gray-50 dark:bg-gray-800 border rounded p-2 text-gray-900 dark:text-white" onblur="app.verificarAtividade('input-atv28a', '105500')">
                </div>
                <div class="flex flex-col md:flex-row md:items-center gap-2">
                    <span class="text-sm w-full md:w-1/2 text-gray-600 dark:text-gray-400">Doze milhões, quatrocentos e oitenta mil, cento e vinte e oito:</span>
                    <input type="text" id="input-atv28b" class="flex-1 bg-gray-50 dark:bg-gray-800 border rounded p-2 text-gray-900 dark:text-white" onblur="app.verificarAtividade('input-atv28b', '12480128')">
                </div>
            </div>
        </div>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
            <h4 class="font-bold text-brand-blue dark:text-blue-300 mb-3">31. Composição:</h4>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">
                5 unidades de milhão, 3 centenas de milhar, 8 centenas, 4 dezenas e 9 unidades.
            </p>
            <div class="flex gap-2">
                <input type="text" id="input-atv31a" class="flex-1 bg-white dark:bg-gray-900 border rounded p-2 text-gray-900 dark:text-white" placeholder="Escreva o número completo" onblur="app.verificarAtividade('input-atv31a', '5300849')">
            </div>
            <p class="text-xs text-gray-500 mt-1">Cuidado com as ordens vazias (zero)!</p>
        </div>

        <div>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-3">34. Números Mistos:</h4>
            <div class="flex flex-col gap-3">
                <div class="flex items-center gap-2">
                    <span class="text-sm w-1/3 text-gray-600 dark:text-gray-400">4 milhões e 600 mil:</span>
                    <input type="text" id="input-atv34b" class="flex-1 bg-gray-50 dark:bg-gray-800 border rounded p-2 text-gray-900 dark:text-white" onblur="app.verificarAtividade('input-atv34b', '4600000')">
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-sm w-1/3 text-gray-600 dark:text-gray-400">4 trilhões e 700 mil:</span>
                    <input type="text" id="input-atv34d" class="flex-1 bg-gray-50 dark:bg-gray-800 border rounded p-2 text-gray-900 dark:text-white" onblur="app.verificarAtividade('input-atv34d', '4000000700000')">
                </div>
            </div>
        </div>
    </div>


<h3 class="text-2xl font-bold text-brand-blue mb-4">Números no Mundo Real</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        
        <div>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">29. O Monte Everest (8.848 m)</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Decomponha este número:</p>
            <div class="grid grid-cols-4 gap-2">
                <div class="text-center">
                    <input type="text" id="input-ev1" class="w-full bg-gray-50 dark:bg-gray-800 border rounded p-2 text-center" onblur="app.verificarAtividade('input-ev1', '8')">
                    <span class="text-xs">UM</span>
                </div>
                <div class="text-center">
                    <input type="text" id="input-ev2" class="w-full bg-gray-50 dark:bg-gray-800 border rounded p-2 text-center" onblur="app.verificarAtividade('input-ev2', '8')">
                    <span class="text-xs">C</span>
                </div>
                <div class="text-center">
                    <input type="text" id="input-ev3" class="w-full bg-gray-50 dark:bg-gray-800 border rounded p-2 text-center" onblur="app.verificarAtividade('input-ev3', '4')">
                    <span class="text-xs">D</span>
                </div>
                <div class="text-center">
                    <input type="text" id="input-ev4" class="w-full bg-gray-50 dark:bg-gray-800 border rounded p-2 text-center" onblur="app.verificarAtividade('input-ev4', '8')">
                    <span class="text-xs">U</span>
                </div>
            </div>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
            <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">30. Pico da Neblina (Brasil)</h4>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Componha a soma: <strong>2.000 + 900 + 90 + 5</strong>
            </p>
            <div class="flex gap-2">
                <input type="text" id="input-neblina" class="flex-1 bg-white dark:bg-gray-900 border rounded p-2 text-gray-900 dark:text-white" placeholder="Altura total..." onblur="app.verificarAtividade('input-neblina', '2995')">
                <span class="self-center font-bold text-gray-600">metros</span>
            </div>
        </div>

        <div>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">32. Distância Terra-Sol</h4>
            <p class="text-gray-600 dark:text-gray-300 mb-2">149.600.000 km</p>
            <p class="text-sm font-bold text-gray-500">Escreva como se lê (use letras minúsculas):</p>
            <textarea id="input-sol" class="w-full bg-gray-50 dark:bg-gray-800 border rounded p-3 text-gray-900 dark:text-white h-24 text-sm" placeholder="Ex: cento e quarenta e nove milhões..."></textarea>
            <button onclick="app.verificarAtividade('input-sol', 'cento e quarenta e nove milhões e seiscentos mil')" class="mt-2 bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-bold">Verificar Texto</button>
        </div>
    </div>


<h3 class="text-2xl font-bold text-brand-blue mb-4">Preenchendo um Recibo</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <p class="text-gray-600 dark:text-gray-300 mb-4">
            Imagine que você consertou um celular e cobrou <strong>R$ 85,00</strong>. Como você preenche o valor no recibo?
        </p>

        <div class="border-2 border-dashed border-gray-300 dark:border-gray-600 p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/10">
            <h4 class="text-center font-serif font-bold text-xl mb-4 text-gray-800 dark:text-gray-200">RECIBO</h4>
            
            <div class="flex justify-between items-center mb-4">
                <span class="font-bold text-gray-700 dark:text-gray-300">VALOR: R$</span>
                <input type="text" id="input-recibo-num" class="w-32 bg-white dark:bg-gray-900 border border-gray-300 p-2 text-right font-mono" placeholder="0,00" onblur="app.verificarAtividade('input-recibo-num', '85,00')">
            </div>

            <div class="mb-4">
                <span class="block font-bold text-gray-700 dark:text-gray-300 mb-1">Recebi a importância de:</span>
                <input type="text" id="input-recibo-extenso" class="w-full bg-white dark:bg-gray-900 border border-gray-300 p-2 italic" placeholder="Escreva por extenso..." onblur="app.verificarAtividade('input-recibo-extenso', 'oitenta e cinco reais')">
            </div>

            <p class="text-xs text-gray-500 text-center">Referente ao conserto de celular.</p>
        </div>
    </div>


<h3 class="text-2xl font-bold text-brand-blue mb-4">Desafios Finais</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        
        <div>
            <div class="flex items-center gap-3 mb-4">
                <span class="bg-brand-purple text-white font-bold px-3 py-1 rounded-lg text-sm">Desafio 36</span>
                <h4 class="font-bold text-gray-700 dark:text-gray-200">A Troca dos Algarismos</h4>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
                No número <strong>14.392</strong>, se trocarmos o <strong>4</strong> e o <strong>9</strong> de lugar, o que acontece?
                <br>Novo número: <strong>19.342</strong>.
            </p>
            <div class="flex flex-col gap-3">
                <button onclick="app.verificarQuiz(this, true, 'fb-logica36')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-xl border-2 border-transparent transition-all">
                    O 4 valia 4.000 e passou a valer 40. O 9 valia 90 e passou a valer 9.000.
                </button>
                <button onclick="app.verificarQuiz(this, false, 'fb-logica36')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-xl border-2 border-transparent transition-all">
                    O valor total do número diminuiu.
                </button>
            </div>
            <div id="fb-logica36" class="hidden mt-4 text-sm font-bold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 p-4 rounded-xl">
                Exato! O valor posicional mudou drasticamente.
            </div>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
            <h4 class="font-bold text-yellow-800 dark:text-yellow-300 mb-2">37. Pesquisa: Censo Demográfico</h4>
            <p class="text-sm text-gray-700 dark:text-gray-300">
                Pesquise a população da sua cidade.
                <br>1. Escreva o número.
                <br>2. Identifique quantas classes ele tem.
                <br>3. Identifique a ordem do algarismo de maior valor.
            </p>
        </div>
    </div>


<h3 class="text-2xl font-bold text-brand-blue mb-4">Desafio: A Casa dos Pombos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-red-500 text-white font-bold px-3 py-1 rounded-lg text-sm">Lógica Avançada</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 text-lg">O Mistério do Aniversário</h4>
        </div>
        
        <p class="text-gray-600 dark:text-gray-300 mb-6">
            Em uma turma há <strong>25 estudantes</strong>. É certeza absoluta que pelo menos <strong>3 estudantes</strong> fazem aniversário no mesmo mês. Por quê?
        </p>

        <div class="flex flex-col gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-pombos')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-xl border-2 border-transparent transition-all">
                Porque a maioria das pessoas nasce em março.
            </button>
            
            <button onclick="app.verificarQuiz(this, true, 'fb-pombos')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-xl border-2 border-transparent transition-all">
                Porque existem apenas 12 meses. Se colocarmos 2 alunos em cada mês (2 x 12 = 24), o 25º aluno terá que entrar em um mês que já tem 2.
            </button>
            
            <button onclick="app.verificarQuiz(this, false, 'fb-pombos')" class="w-full text-left font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-4 rounded-xl border-2 border-transparent transition-all">
                Não é certeza, é apenas sorte.
            </button>
        </div>

        <div id="fb-pombos" class="hidden mt-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
            <p class="font-bold text-green-700 dark:text-green-300 mb-2">Princípio das Gavetas de Dirichlet!</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
                Imagine 12 gavetas (meses). Se você tem 25 pombos (alunos), não dá para colocar apenas 2 em cada gaveta (cabem só 24). Um pombo vai sobrar e terá que dividir a gaveta com outros dois, totalizando 3!
            </p>
        </div>
    </div>
`,

    "Onde usamos os números naturais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Onde usamos os números?</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Os números naturais não servem apenas para contar. Eles têm quatro funções principais no nosso dia a dia.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                <div class="flex items-center gap-3 mb-2">
                    <span class="text-2xl">🔢</span>
                    <h4 class="font-bold text-brand-blue dark:text-blue-300">1. Contagem</h4>
                </div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                    Responde à pergunta "Quantos?".
                    <br><strong>Ex:</strong> População do Brasil (213.837.477 habitantes).
                </p>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-100 dark:border-purple-800">
                <div class="flex items-center gap-3 mb-2">
                    <span class="text-2xl">🏆</span>
                    <h4 class="font-bold text-brand-purple dark:text-purple-300">2. Ordem (Posição)</h4>
                </div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                    Indica a posição em uma sequência.
                    <br><strong>Ex:</strong> 1º lugar na corrida, 2º andar do prédio.
                </p>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-800">
                <div class="flex items-center gap-3 mb-2">
                    <span class="text-2xl">📏</span>
                    <h4 class="font-bold text-brand-green dark:text-green-300">3. Medida</h4>
                </div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                    Resultado de uma medição (comprimento, peso, tempo).
                    <br><strong>Ex:</strong> Placa de estrada (126 km), Régua (30 cm).
                </p>
            </div>

            <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-800">
                <div class="flex items-center gap-3 mb-2">
                    <span class="text-2xl">🆔</span>
                    <h4 class="font-bold text-brand-orange dark:text-orange-300">4. Código</h4>
                </div>
                <p class="text-sm text-gray-700 dark:text-gray-300">
                    Identificação que não indica quantidade nem ordem.
                    <br><strong>Ex:</strong> CEP, placa do carro, número do telefone.
                </p>
            </div>
        </div>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4 mt-8">Praticando as Funções</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        
        <div>
            <div class="flex items-center gap-3 mb-4">
                <span class="bg-brand-blue text-white font-bold px-3 py-1 rounded-lg text-sm">Atividade 40</span>
                <h4 class="font-bold text-gray-700 dark:text-gray-200 text-lg">Verdadeiro ou Falso?</h4>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg border dark:border-gray-600">
                <em>"Entre 2 números naturais sempre existe outro número natural."</em>
            </p>
            <div class="flex gap-3">
                <button onclick="app.verificarQuiz(this, false, 'fb-atv40')" class="flex-1 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 p-3 rounded-xl transition-all">
                    Verdadeiro
                </button>
                <button onclick="app.verificarQuiz(this, true, 'fb-atv40')" class="flex-1 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 p-3 rounded-xl transition-all">
                    Falso
                </button>
            </div>
            <div id="fb-atv40" class="hidden mt-4 text-sm font-bold text-gray-600 dark:text-gray-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-800">
                Correto! É Falso. Contraexemplo: Entre o número 2 e o 3 não existe nenhum número natural. Eles são consecutivos.
            </div>
        </div>

        <div class="border-t border-gray-100 dark:border-gray-700 pt-6">
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-4">Atividade 41: Classifique os Números</h4>
            
            <div class="space-y-4">
                <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">a) "Classificou-se em <strong>1º lugar</strong>"</p>
                    <div class="flex gap-2">
                        <select id="sel-41a" class="flex-1 bg-gray-50 dark:bg-gray-800 border dark:border-gray-600 rounded p-2 text-gray-700 dark:text-gray-200">
                            <option value="">Escolha...</option>
                            <option value="contagem">Contagem</option>
                            <option value="ordem">Ordem</option>
                            <option value="medida">Medida</option>
                            <option value="codigo">Código</option>
                        </select>
                        <button onclick="app.verificarAtividade('sel-41a', 'ordem')" class="bg-brand-blue text-white px-3 rounded">OK</button>
                    </div>
                </div>

                <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">b) "Marcou <strong>26 gols</strong>"</p>
                    <div class="flex gap-2">
                        <select id="sel-41b" class="flex-1 bg-gray-50 dark:bg-gray-800 border dark:border-gray-600 rounded p-2 text-gray-700 dark:text-gray-200">
                            <option value="">Escolha...</option>
                            <option value="contagem">Contagem</option>
                            <option value="ordem">Ordem</option>
                            <option value="medida">Medida</option>
                            <option value="codigo">Código</option>
                        </select>
                        <button onclick="app.verificarAtividade('sel-41b', 'contagem')" class="bg-brand-blue text-white px-3 rounded">OK</button>
                    </div>
                </div>

                <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">c) "Carro identificado por <strong>2183</strong>"</p>
                    <div class="flex gap-2">
                        <select id="sel-41c" class="flex-1 bg-gray-50 dark:bg-gray-800 border dark:border-gray-600 rounded p-2 text-gray-700 dark:text-gray-200">
                            <option value="">Escolha...</option>
                            <option value="contagem">Contagem</option>
                            <option value="ordem">Ordem</option>
                            <option value="medida">Medida</option>
                            <option value="codigo">Código</option>
                        </select>
                        <button onclick="app.verificarAtividade('sel-41c', 'codigo')" class="bg-brand-blue text-white px-3 rounded">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4 mt-8">Arredondamentos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Nem sempre precisamos do número exato. Às vezes, um valor aproximado facilita a compreensão.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">Regra de Ouro:</p>
            <p class="text-gray-700 dark:text-gray-300 mt-2">
                Olhe para o algarismo à <strong>direita</strong> da ordem que você quer arredondar:
            </p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2 ml-2">
                <li><strong>0, 1, 2, 3, 4:</strong> Mantém o número (arredonda para baixo).</li>
                <li><strong>5, 6, 7, 8, 9:</strong> Aumenta 1 (arredonda para cima).</li>
            </ul>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mt-4">
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p class="text-gray-500 text-xs uppercase mb-1">Exemplo 1</p>
                <p class="text-xl font-mono text-gray-800 dark:text-white">2.3<strong class="text-red-500">2</strong>6 → 2.300</p>
                <p class="text-xs text-gray-500 mt-1">O 2 é menor que 5, mantemos o 300.</p>
            </div>
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p class="text-gray-500 text-xs uppercase mb-1">Exemplo 2</p>
                <p class="text-xl font-mono text-gray-800 dark:text-white">16.<strong class="text-green-500">7</strong>43 → 17.000</p>
                <p class="text-xs text-gray-500 mt-1">O 7 é maior que 5, subimos para 17 mil.</p>
            </div>
        </div>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4 mt-8">Atividade 43: Arredondando o Brasil</h3>
    <div class="bg-white dark:bg-brand-darkCard p-4 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm overflow-x-auto">
        <p class="text-gray-600 dark:text-gray-300 mb-4 px-2">
            Complete a tabela arredondando as áreas das regiões brasileiras.
            <br><span class="text-xs text-gray-400">Dica: Digite apenas números (ex: 3851000).</span>
        </p>

        <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300 border-collapse min-w-[600px]">
            <thead class="bg-gray-100 dark:bg-gray-800 text-brand-blue font-bold uppercase text-xs">
                <tr>
                    <th class="px-3 py-3 border dark:border-gray-700">Região</th>
                    <th class="px-3 py-3 border dark:border-gray-700">Área (km²)</th>
                    <th class="px-3 py-3 border dark:border-gray-700 text-center bg-blue-50 dark:bg-blue-900/20">Para Unidade de Milhar</th>
                    <th class="px-3 py-3 border dark:border-gray-700 text-center bg-green-50 dark:bg-green-900/20">Para Dezena de Milhar</th>
                    <th class="px-3 py-3 border dark:border-gray-700 text-center bg-orange-50 dark:bg-orange-900/20">Para Centena de Milhar</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white dark:bg-gray-900">
                    <td class="px-3 py-2 border dark:border-gray-700 font-bold">Norte</td>
                    <td class="px-3 py-2 border dark:border-gray-700 font-mono">3.850.516</td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-gray-50 dark:bg-gray-800 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '3851000')" id="tab43-n1"></td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-gray-50 dark:bg-gray-800 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '3850000')" id="tab43-n2"></td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-gray-50 dark:bg-gray-800 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '3900000')" id="tab43-n3"></td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-800/50">
                    <td class="px-3 py-2 border dark:border-gray-700 font-bold">Sul</td>
                    <td class="px-3 py-2 border dark:border-gray-700 font-mono">576.737</td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-white dark:bg-gray-900 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '577000')" id="tab43-s1"></td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-white dark:bg-gray-900 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '580000')" id="tab43-s2"></td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-white dark:bg-gray-900 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '600000')" id="tab43-s3"></td>
                </tr>
                <tr class="bg-white dark:bg-gray-900">
                    <td class="px-3 py-2 border dark:border-gray-700 font-bold">Sudeste</td>
                    <td class="px-3 py-2 border dark:border-gray-700 font-mono">924.558</td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-gray-50 dark:bg-gray-800 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '925000')" id="tab43-se1"></td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-gray-50 dark:bg-gray-800 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '920000')" id="tab43-se2"></td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-gray-50 dark:bg-gray-800 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '900000')" id="tab43-se3"></td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-800/50">
                    <td class="px-3 py-2 border dark:border-gray-700 font-bold">Nordeste</td>
                    <td class="px-3 py-2 border dark:border-gray-700 font-mono">1.552.175</td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-white dark:bg-gray-900 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '1552000')" id="tab43-ne1"></td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-white dark:bg-gray-900 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '1550000')" id="tab43-ne2"></td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-white dark:bg-gray-900 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '1600000')" id="tab43-ne3"></td>
                </tr>
                <tr class="bg-white dark:bg-gray-900">
                    <td class="px-3 py-2 border dark:border-gray-700 font-bold">Centro-Oeste</td>
                    <td class="px-3 py-2 border dark:border-gray-700 font-mono">1.606.359</td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-gray-50 dark:bg-gray-800 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '1606000')" id="tab43-co1"></td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-gray-50 dark:bg-gray-800 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '1610000')" id="tab43-co2"></td>
                    <td class="px-2 py-2 border dark:border-gray-700"><input type="text" class="w-full bg-gray-50 dark:bg-gray-800 border rounded px-1 py-1 text-center" onblur="app.verificarAtividade(this.id, '1600000')" id="tab43-co3"></td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4 mt-8">Atividade 44: Biomas</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        <p class="text-gray-600 dark:text-gray-300">
            Sobre a Amazônia (4.212.742 km²) e o Pantanal (150.988 km²):
        </p>
        
        

[Image of map of brazilian biomes]


        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label class="block font-bold text-gray-700 dark:text-gray-200 mb-2">
                    Arredonde a área do Pantanal para a <span class="text-brand-blue">unidade de milhar</span> mais próxima:
                </label>
                <div class="flex gap-2">
                    <input type="text" id="input-atv44b" class="flex-1 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none" placeholder="150.988 -> ?" onblur="app.verificarAtividade('input-atv44b', '151000')">
                </div>
                <p class="text-xs text-gray-400 mt-1">Dica: Olhe o algarismo da centena (9).</p>
            </div>

            <div>
                <label class="block font-bold text-gray-700 dark:text-gray-200 mb-2">
                    Some as áreas exatas (Amazônia + Pantanal):
                </label>
                <div class="flex gap-2">
                    <input type="text" id="input-atv44c" class="flex-1 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-3 text-gray-900 dark:text-white outline-none" placeholder="Total em km²" onblur="app.verificarAtividade('input-atv44c', '4363730')">
                </div>
            </div>
        </div>
    </div>
    `,

    "Números naturais e Sistema Decimal": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Números Naturais</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        
        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400">
            <h4 class="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Explore para Descobrir</h4>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Observe a sequência dos números naturais e complete as lacunas:
            </p>
            <div class="flex flex-wrap gap-2 font-mono text-lg items-center justify-center bg-white dark:bg-gray-800 p-3 rounded-lg border border-yellow-200 dark:border-yellow-700">
                <span>0, 1, 2, 3, 4, 5, 6, 7,</span>
                <input type="text" class="w-10 text-center border-b-2 border-gray-400 outline-none bg-transparent" onblur="app.verificarAtividade(this.id, '8')" id="seq-nat-1">,
                <span>9, 10,</span>
                <input type="text" class="w-10 text-center border-b-2 border-gray-400 outline-none bg-transparent" onblur="app.verificarAtividade(this.id, '11')" id="seq-nat-2">,
                <span>12, 13,</span>
                <input type="text" class="w-10 text-center border-b-2 border-gray-400 outline-none bg-transparent" onblur="app.verificarAtividade(this.id, '14')" id="seq-nat-3">,
                <input type="text" class="w-10 text-center border-b-2 border-gray-400 outline-none bg-transparent" onblur="app.verificarAtividade(this.id, '15')" id="seq-nat-4">,
                <span>...</span>
            </div>
        </div>

        <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <p><strong>a, b, c)</strong> O primeiro número é o <strong>0</strong>. Para achar o próximo, somamos 1.</p>
            <p><strong>g, h)</strong> <span class="text-brand-blue font-bold">Sucessor:</span> É o número que vem imediatamente depois (+1). <span class="text-brand-red font-bold">Antecessor:</span> É o número que vem imediatamente antes (-1).</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div class="flex items-center justify-center gap-2 bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                <span class="font-bold">(4)</span>
                <span class="text-xs text-gray-400">⟶ +1 ⟶</span>
                <input type="text" class="w-12 text-center border rounded" placeholder="?" onblur="app.verificarAtividade(this.id, '5')" id="suc-4">
            </div>
            <div class="flex items-center justify-center gap-2 bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                <span class="font-bold">(13)</span>
                <span class="text-xs text-gray-400">⟶ +1 ⟶</span>
                <input type="text" class="w-12 text-center border rounded" placeholder="?" onblur="app.verificarAtividade(this.id, '14')" id="suc-13">
            </div>
            <div class="flex items-center justify-center gap-2 bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                <input type="text" class="w-12 text-center border rounded" placeholder="?" onblur="app.verificarAtividade(this.id, '3')" id="ant-4">
                <span class="text-xs text-gray-400">⟶ +1 ⟶</span>
                <span class="font-bold">(4)</span>
            </div>
            <div class="flex items-center justify-center gap-2 bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                <input type="text" class="w-12 text-center border rounded" placeholder="?" onblur="app.verificarAtividade(this.id, '12')" id="ant-13">
                <span class="text-xs text-gray-400">⟶ +1 ⟶</span>
                <span class="font-bold">(13)</span>
            </div>
        </div>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue mt-4">
            <p class="font-bold text-brand-blue dark:text-blue-300">Conjunto N:</p>
            <p>A sequência é infinita. Representamos o conjunto dos números naturais assim: <br><strong>N = {0, 1, 2, 3, 4, 5, ...}</strong></p>
        </div>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4 mt-8">Reta Numérica e Ordem</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        
        
        
        <div class="relative w-full h-12 mt-4">
            <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-300 dark:bg-gray-600"></div>
            <div class="flex justify-between w-full absolute top-0 px-2">
                ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => `
                    <div class="flex flex-col items-center">
                        <div class="w-0.5 h-3 bg-gray-400 mb-1"></div>
                        <span class="text-sm font-bold ${n === 6 || n === 10 ? 'text-blue-500' : (n === 8 || n === 9 ? 'text-red-500' : 'text-gray-600 dark:text-gray-400')}">${n}</span>
                    </div>
                `).join('')}
                <div class="absolute right-0 -top-2 text-gray-400">➤</div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
                <h4 class="font-bold text-gray-700 dark:text-gray-200">Comparação (>, <, =)</h4>
                <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm mt-2">
                    <li><strong>8 < 9</strong> (8 é menor do que 9) - 8 está à esquerda.</li>
                    <li><strong>10 > 6</strong> (10 é maior do que 6) - 10 está à direita.</li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold text-gray-700 dark:text-gray-200">Números Consecutivos</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    São números que vêm um logo após o outro.
                    <br>Ex: <strong>5, 6 e 7</strong> são consecutivos.
                </p>
            </div>
        </div>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4 mt-8">Pares e Ímpares</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6 overflow-x-auto">
        
        <h4 class="font-bold text-brand-blue dark:text-blue-300">a) Sequência dos Pares (2n)</h4>
        <table class="w-full text-center text-sm border-collapse mb-6">
            <tr class="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                <td class="p-2 border border-blue-200 font-bold">Natural (n)</td>
                ${[0, 1, 2, 3, 4, 5, '...', 'n'].map(v => `<td class="p-2 border border-blue-200">${v}</td>`).join('')}
            </tr>
            <tr class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                <td class="p-2 border border-gray-200 font-bold">Par (2n)</td>
                ${[0, 2, 4, 6, 8, 10, '...', '2n'].map(v => `<td class="p-2 border border-gray-200 font-mono">${v}</td>`).join('')}
            </tr>
        </table>

        <h4 class="font-bold text-brand-purple dark:text-purple-300">b) Sequência dos Ímpares (2n + 1)</h4>
        <table class="w-full text-center text-sm border-collapse">
            <tr class="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200">
                <td class="p-2 border border-purple-200 font-bold">Natural (n)</td>
                ${[0, 1, 2, 3, 4, 5, '...', 'n'].map(v => `<td class="p-2 border border-purple-200">${v}</td>`).join('')}
            </tr>
            <tr class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                <td class="p-2 border border-gray-200 font-bold">Ímpar (2n+1)</td>
                ${[1, 3, 5, 7, 9, 11, '...', '2n+1'].map(v => `<td class="p-2 border border-gray-200 font-mono">${v}</td>`).join('')}
            </tr>
        </table>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4 mt-8">Atividades Práticas</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-6">
        
        <div>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">45. Responda Rápido:</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input type="text" class="p-2 border rounded bg-gray-50 dark:bg-gray-800 dark:text-white" placeholder="Sucessor de 199" onblur="app.verificarAtividade(this.id, '200')" id="atv45-a">
                <input type="text" class="p-2 border rounded bg-gray-50 dark:bg-gray-800 dark:text-white" placeholder="Antecessor de 1010" onblur="app.verificarAtividade(this.id, '1009')" id="atv45-b">
                <input type="text" class="p-2 border rounded bg-gray-50 dark:bg-gray-800 dark:text-white" placeholder="Sem antecessor em N?" onblur="app.verificarAtividade(this.id, '0')" id="atv45-c">
            </div>
        </div>

        <div class="border-t border-gray-100 dark:border-gray-700 pt-4">
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">46. Ordenação:</h4>
            <div class="space-y-2">
                <p class="text-sm text-gray-600 dark:text-gray-400">a) Crescente: 1006, 209, 1060, 290</p>
                <div class="flex gap-1">
                    <input type="text" class="w-full p-1 border rounded text-center text-sm" placeholder="1º" onblur="app.verificarAtividade(this.id, '209')" id="atv46-a1">
                    <input type="text" class="w-full p-1 border rounded text-center text-sm" placeholder="2º" onblur="app.verificarAtividade(this.id, '290')" id="atv46-a2">
                    <input type="text" class="w-full p-1 border rounded text-center text-sm" placeholder="3º" onblur="app.verificarAtividade(this.id, '1006')" id="atv46-a3">
                    <input type="text" class="w-full p-1 border rounded text-center text-sm" placeholder="4º" onblur="app.verificarAtividade(this.id, '1060')" id="atv46-a4">
                </div>
            </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">47. Sequências:</h4>
            <div class="space-y-3">
                <div class="flex flex-col">
                    <span class="text-xs">a) Pares > 100 e < 110:</span>
                    <div class="flex gap-2"><input type="text" class="w-16 border rounded text-center" id="atv47a-1" onblur="app.verificarAtividade(this.id, '102')"><input type="text" class="w-16 border rounded text-center" id="atv47a-2" onblur="app.verificarAtividade(this.id, '104')"><input type="text" class="w-16 border rounded text-center" id="atv47a-3" onblur="app.verificarAtividade(this.id, '106')"></div>
                </div>
                <div class="flex flex-col">
                    <span class="text-xs">c) Pares de 18 até 28 (extremidades incluídas):</span>
                    <input type="text" class="w-full border rounded p-1 text-sm" placeholder="Ex: 18, 20, 22..." id="atv47c" onblur="if(this.value.includes('18') && this.value.includes('28') && this.value.includes('24')) alert('Muito bem! Verifique se colocou todos: 18, 20, 22, 24, 26, 28')">
                </div>
            </div>
        </div>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4 mt-8">Atividade 48: O Algoritmo de Jorge</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <p class="text-gray-600 dark:text-gray-300 mb-4">Complete o raciocínio de Jorge para descobrir se um número é Par.</p>
        
        <div class="flex flex-col items-center space-y-2 text-sm font-bold text-gray-700 dark:text-gray-200">
            <div class="px-4 py-2 bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded-full">INÍCIO</div>
            <div class="h-4 w-0.5 bg-gray-400"></div>
            
            <div class="px-4 py-2 bg-white dark:bg-gray-800 border-2 border-gray-400 rounded">Escolha um número Natural</div>
            <div class="h-4 w-0.5 bg-gray-400"></div>
            
            <div class="relative px-6 py-4 bg-yellow-50 dark:bg-yellow-900/30 border-2 border-yellow-500 rounded-lg transform rotate-0" style="clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 200px; height: 100px; display:flex; align-items:center; justify-content:center; text-align:center;">
                <span class="text-xs">É o dobro de outro natural?</span>
            </div>
            
            <div class="flex w-full justify-center gap-16 relative">
                <div class="flex flex-col items-center">
                    <div class="h-4 w-0.5 bg-gray-400"></div>
                    <span class="text-red-500 text-xs bg-white dark:bg-gray-800 px-1 z-10">NÃO</span>
                    <div class="h-4 w-0.5 bg-gray-400"></div>
                    <div class="px-3 py-2 bg-red-100 dark:bg-red-900/50 border-2 border-red-400 rounded text-center w-24">
                        O número é<br><strong class="text-red-600 uppercase">Ímpar</strong>
                    </div>
                </div>

                <div class="flex flex-col items-center">
                    <div class="h-4 w-0.5 bg-gray-400"></div>
                    <span class="text-green-500 text-xs bg-white dark:bg-gray-800 px-1 z-10">SIM</span>
                    <div class="h-4 w-0.5 bg-gray-400"></div>
                    <div class="px-3 py-2 bg-blue-100 dark:bg-blue-900/50 border-2 border-blue-400 rounded text-center w-24">
                        O número é<br>
                        <input type="text" class="w-16 bg-white dark:bg-gray-900 border rounded text-center uppercase text-xs font-bold text-blue-600" placeholder="..." onblur="app.verificarAtividade(this.id, 'PAR')" id="fluxo-input">
                    </div>
                </div>
            </div>

            <div class="flex justify-center w-full pt-2">
                <div class="h-4 w-full max-w-[200px] border-l-2 border-r-2 border-b-2 border-gray-400 rounded-b-xl"></div>
            </div>
            <div class="h-2 w-0.5 bg-gray-400"></div>
            <div class="px-4 py-2 bg-red-100 dark:bg-red-900 border-2 border-red-500 rounded-full">FIM</div>
        </div>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4 mt-8">Atividade 49: Comparação</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <p class="mb-4 text-gray-600 dark:text-gray-300">Substitua o espaço pelo símbolo <strong><</strong> (menor) ou <strong>></strong> (maior).</p>
        <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center gap-2 justify-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                <span>27</span>
                <select id="atv49a" class="bg-white dark:bg-gray-700 border rounded" onchange="app.verificarAtividade(this.id, '<')"><option>?</option><option><</option><option>></option></select>
                <span>35</span>
            </div>
            <div class="flex items-center gap-2 justify-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                <span>169</span>
                <select id="atv49b" class="bg-white dark:bg-gray-700 border rounded" onchange="app.verificarAtividade(this.id, '>')"><option>?</option><option><</option><option>></option></select>
                <span>167</span>
            </div>
            <div class="flex items-center gap-2 justify-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                <span>4.099</span>
                <select id="atv49c" class="bg-white dark:bg-gray-700 border rounded" onchange="app.verificarAtividade(this.id, '<')"><option>?</option><option><</option><option>></option></select>
                <span>4.100</span>
            </div>
            <div class="flex items-center gap-2 justify-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                <span>5.001</span>
                <select id="atv49d" class="bg-white dark:bg-gray-700 border rounded" onchange="app.verificarAtividade(this.id, '>')"><option>?</option><option><</option><option>></option></select>
                <span>5.000</span>
            </div>
        </div>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4 mt-8">Atividade 50: Ordene na Reta</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm overflow-x-auto">
        <p class="mb-4 text-gray-600 dark:text-gray-300">Posicione os números: <strong>170, 167, 158, 161, 179</strong> nos locais corretos.</p>
        
        <div class="relative min-w-[600px] h-24 pt-8">
            <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-800 dark:bg-gray-400"></div>
            
            ${[156, 160, 164, 168, 172, 176, 180].map((n, i) => `
                <div class="absolute" style="left: ${i * 16.6}%; top: 50%;">
                    <div class="w-0.5 h-4 bg-gray-800 dark:bg-gray-400"></div>
                    <span class="absolute -left-3 top-4 text-xs font-bold text-gray-500">${n}</span>
                </div>
            `).join('')}

            <div class="absolute" style="left: 8.3%; bottom: 50%;">
                <input type="text" class="w-8 text-xs text-center border-2 border-blue-300 rounded mb-1 bg-white dark:bg-gray-900 dark:text-white" placeholder="?" id="reta-158" onblur="app.verificarAtividade(this.id, '158')">
                <div class="w-0.5 h-3 bg-blue-500 mx-auto"></div>
            </div>
            
            <div class="absolute" style="left: 20%; bottom: 50%;">
                <input type="text" class="w-8 text-xs text-center border-2 border-blue-300 rounded mb-1 bg-white dark:bg-gray-900 dark:text-white" placeholder="?" id="reta-161" onblur="app.verificarAtividade(this.id, '161')">
                <div class="w-0.5 h-3 bg-blue-500 mx-auto"></div>
            </div>

            <div class="absolute" style="left: 45%; bottom: 50%;">
                <input type="text" class="w-8 text-xs text-center border-2 border-blue-300 rounded mb-1 bg-white dark:bg-gray-900 dark:text-white" placeholder="?" id="reta-167" onblur="app.verificarAtividade(this.id, '167')">
                <div class="w-0.5 h-3 bg-blue-500 mx-auto"></div>
            </div>

            <div class="absolute" style="left: 58%; bottom: 50%;">
                <input type="text" class="w-8 text-xs text-center border-2 border-blue-300 rounded mb-1 bg-white dark:bg-gray-900 dark:text-white" placeholder="?" id="reta-170" onblur="app.verificarAtividade(this.id, '170')">
                <div class="w-0.5 h-3 bg-blue-500 mx-auto"></div>
            </div>

            <div class="absolute" style="left: 95%; bottom: 50%;">
                <input type="text" class="w-8 text-xs text-center border-2 border-blue-300 rounded mb-1 bg-white dark:bg-gray-900 dark:text-white" placeholder="?" id="reta-179" onblur="app.verificarAtividade(this.id, '179')">
                <div class="w-0.5 h-3 bg-blue-500 mx-auto"></div>
            </div>
        </div>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4 mt-8">Desafios e Curiosidades</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-8">
        
        <div>
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">51. Complete a ordem:</h4>
            <div class="flex flex-wrap gap-2 items-center bg-gray-50 dark:bg-gray-800 p-3 rounded text-sm md:text-base">
                <span>7.000 < </span>
                <input type="text" class="w-16 text-center border rounded" placeholder="..." onblur="app.verificarAtividade(this.id, '7007')" id="atv51-1">
                <span> < 7.077 < </span>
                <input type="text" class="w-16 text-center border rounded" placeholder="..." onblur="app.verificarAtividade(this.id, '7700')" id="atv51-2">
                <span> < 7.707 < </span>
                <input type="text" class="w-16 text-center border rounded" placeholder="..." onblur="app.verificarAtividade(this.id, '7770')" id="atv51-3">
                <span> < 7.777</span>
            </div>
        </div>

        <div class="border-t border-gray-200 dark:border-gray-600 pt-4">
            <h4 class="font-bold text-gray-700 dark:text-gray-200 mb-2">52. Pirâmides de Gizé</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">Alturas: <strong>146m</strong> (Quéops), <strong>143m</strong> (Quéfren), <strong>62m</strong> (Miquerinos).</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <span class="text-sm">a) Sucessor de 142?</span>
                    <button onclick="app.verificarQuiz(this, true, null)" class="px-2 py-1 bg-white dark:bg-gray-700 border rounded text-xs">143</button>
                </div>
                <div class="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <span class="text-sm">b) Menor número par?</span>
                    <button onclick="app.verificarQuiz(this, true, null)" class="px-2 py-1 bg-white dark:bg-gray-700 border rounded text-xs">62</button>
                </div>
                <div class="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <span class="text-sm">c) 6 a mais que 140?</span>
                    <button onclick="app.verificarQuiz(this, true, null)" class="px-2 py-1 bg-white dark:bg-gray-700 border rounded text-xs">146</button>
                </div>
                <div class="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <span class="text-sm">d) Está entre os outros 2?</span>
                    <button onclick="app.verificarQuiz(this, true, null)" class="px-2 py-1 bg-white dark:bg-gray-700 border rounded text-xs">143</button>
                </div>
            </div>
        </div>

        <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 class="font-bold text-purple-800 dark:text-purple-300 flex items-center gap-2">
                <span>🔄</span> Você sabia? Palíndromos
            </h4>
            <p class="text-sm text-gray-700 dark:text-gray-300 mt-1 mb-3">
                São números que lemos igual de trás para frente (ex: 121, 1001).
            </p>
            <div class="space-y-2">
                <div class="flex flex-col md:flex-row gap-2 items-center">
                    <span class="text-sm">a) Entre 226, 622 e 262, o palíndromo é:</span>
                    <input type="text" class="w-16 text-center border rounded" onblur="app.verificarAtividade(this.id, '262')" id="palin-1">
                </div>
                <div class="flex flex-col md:flex-row gap-2 items-center">
                    <span class="text-sm">b) Palíndromo entre 7.500 e 7.600:</span>
                    <input type="text" class="w-16 text-center border rounded" onblur="app.verificarAtividade(this.id, '7557')" id="palin-2">
                </div>
            </div>
        </div>
    </div>

    <h3 class="text-2xl font-bold text-brand-blue mb-4 mt-8">Para ler, pensar e divertir-se</h3>
    
    <div class="grid grid-cols-1 gap-6">
        
        <div class="bg-gray-800 text-white p-6 rounded-2xl shadow-lg">
            <h4 class="text-green-400 font-mono font-bold text-lg mb-2">> LER: 0 e 1 (Sistema Binário)</h4>
            <p class="text-sm leading-relaxed text-gray-300">
                Por trás de cada vídeo ou jogo no seu celular, existe uma sequência infinita de apenas dois algarismos: <strong>0 e 1</strong>.
                <br>O computador lê: 0 = Desligado, 1 = Ligado.
                <br>Por exemplo, o número <strong>23</strong> para o computador é <strong>10111</strong>.
            </p>
        </div>

        <div class="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border-2 border-orange-200 dark:border-orange-700">
            <h4 class="text-orange-800 dark:text-orange-300 font-bold text-lg mb-4">💡 PENSAR: Desafio dos Palitos</h4>
            <p class="mb-4 text-center font-mono text-2xl tracking-widest bg-white dark:bg-gray-800 py-2 rounded shadow-sm">VI - II = VII</p>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Essa conta está errada (6 - 2 não é 7). Mova <strong>um único palito</strong> para torná-la verdadeira.
            </p>
            <div class="text-center">
                <button onclick="document.getElementById('resp-palito').classList.remove('hidden')" class="text-xs text-orange-600 underline cursor-pointer">Ver Resposta</button>
                <p id="resp-palito" class="hidden text-sm font-bold text-green-600 mt-2">
                    Pegue o "I" do sinal de menos (-) e coloque no VI, transformando em VII.<br>
                    Nova conta: <strong>VII - I = VI</strong> (7 - 1 = 6). <br>
                    <span class="text-xs font-normal text-gray-500">(Outra solução: VII - II = V não serve pois movemos para o resultado).</span>
                </p>
            </div>
        </div>

        <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-blue-200 dark:border-blue-800 shadow-sm relative">
            <div class="absolute top-0 right-0 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-bl-xl">JOGO</div>
            <h4 class="text-brand-blue font-bold text-lg mb-4">🎮 Caça-Números</h4>
            
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Encontre os números romanos convertidos para o nosso sistema (decimal) no quadro abaixo.
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
                <div class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">MCCXXXIV = <strong>1234</strong></div>
                <div class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">MCXXV = <strong>1125</strong></div>
                <div class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">MDLI = <strong>1551</strong></div>
                <div class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">CMXIII = <strong>913</strong></div>
                <div class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">MMMCCLII = <strong>3252</strong></div>
            </div>

            <div id="caca-numeros-container" class="w-full overflow-x-auto bg-gray-50 dark:bg-gray-900 p-2 rounded-xl border border-gray-200 dark:border-gray-700">
                </div>

            <img src="x" style="display:none;" onerror="
                (function(){
                    const container = document.getElementById('caca-numeros-container');
                    if(container.innerHTML.trim() !== '') return; // Evita recriar

                    // A Matriz exata fornecida
                    const gridData = [
                        '65416574654168765498654165419865416511865',
                        '41652184283116826402698238726496568642798',
                        '51125591235478954732589625899632589913235',
                        '87155162841368412665633256645895262054632',
                        '56632588998952362429487551961598314863168',
                        '45646888589713498815716491465498158851864',
                        '51649646634953669861394665464519046849099',
                        '59419409829733183506860483711446168216816',
                        '65897821651635860489628591358962598625935',
                        '86876141428761686547789974713011214965214'
                    ];

                    // Números a encontrar (Coordenadas manuais baseadas na matriz fornecida)
                    // Exemplo: 3252 está na linha 4 (indice 4), col 20..23 (aprox)
                    // Para simplificar, vamos permitir que o aluno clique nas células e elas fiquem verdes.
                    
                    let html = '<div class=\\'grid gap-px bg-gray-300 dark:bg-gray-600\\' style=\\'grid-template-columns: repeat(41, minmax(15px, 1fr));\\'>';
                    
                    gridData.forEach((row, r) => {
                        row.split('').forEach((num, c) => {
                            html += \`<div class='bg-white dark:bg-gray-800 text-center text-[10px] md:text-xs py-1 cursor-pointer hover:bg-yellow-200 dark:hover:bg-yellow-900 select-none' 
                                onclick='this.classList.toggle(\\"bg-green-300\\"); this.classList.toggle(\\"dark:bg-green-700\\"); this.classList.toggle(\\"text-white\\");'>\${num}</div>\`;
                        });
                    });
                    
                    html += '</div>';
                    container.innerHTML = html;
                })();
            ">
            <p class="text-xs text-gray-400 mt-2 text-center">Clique nos números para marcá-los.</p>
        </div>

    </div>














<h3 class="text-2xl font-bold text-brand-blue mb-4">Testes Oficiais</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Vamos testar seus conhecimentos com questões que caíram em provas importantes como <strong>Saeb</strong>, <strong>Saresp</strong>, <strong>Prova Brasil</strong> e <strong>Obmep</strong>.
        </p>
    </div>

    <div class="mt-8 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">1. SAEB</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Maior Número Possível</h4>
        </div>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
            Qual é o maior número que você pode escrever usando os algarismos <strong>8, 9, 1, 5 e 7</strong> sem repeti-los?
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-t1')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">a) 91 875</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t1')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">b) 98 715</button>
            <button onclick="app.verificarQuiz(this, true, 'fb-t1')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">c) 98 751</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t1')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">d) 97 851</button>
        </div>
        <div id="fb-t1" class="hidden mt-3 text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
            Correto! Para formar o maior número, devemos colocar os algarismos em ordem decrescente: 9, 8, 7, 5, 1.
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded">2. SARESP</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Valor Posicional</h4>
        </div>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
            No número <strong>1372</strong>, foi colocado um zero entre os algarismos 3 e 7 (virou <strong>13072</strong>). Pode-se afirmar que, no novo número, o valor do algarismo 3 ficou:
        </p>
        <div class="flex flex-col gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-t2')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">a) dividido por 1.</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t2')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">b) dividido por 10.</button>
            <button onclick="app.verificarQuiz(this, true, 'fb-t2')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">c) multiplicado por 10.</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t2')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">d) multiplicado por 100.</button>
        </div>
        <div id="fb-t2" class="hidden mt-3 text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
            Isso aí! Antes o 3 valia 300 (centena). Agora ele vale 3.000 (unidade de milhar). 300 x 10 = 3.000.
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">3. PROVA BRASIL</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Quantas Centenas?</h4>
        </div>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
            O litoral brasileiro tem cerca de <strong>7500 quilômetros</strong> de extensão. Esse número possui quantas centenas?
        </p>
        <div class="grid grid-cols-2 gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-t3')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">a) 5</button>
            <button onclick="app.verificarQuiz(this, true, 'fb-t3')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">b) 75</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t3')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">c) 500</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t3')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">d) 7500</button>
        </div>
        <div id="fb-t3" class="hidden mt-3 text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
            Exato! 7500 dividido por 100 é igual a 75.
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded">4. SARESP</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Combinação</h4>
        </div>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
            Usando os algarismos <strong>1, 2 e 3</strong>, sem repetir nenhum, é possível formar:
        </p>
        <div class="flex flex-col gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-t4')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">a) dois números de três algarismos.</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t4')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">b) três números de três algarismos.</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t4')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">c) quatro números de três algarismos.</button>
            <button onclick="app.verificarQuiz(this, true, 'fb-t4')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">d) seis números de três algarismos.</button>
        </div>
        <div id="fb-t4" class="hidden mt-3 text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
            Correto! As combinações são: 123, 132, 213, 231, 312 e 321.
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">5. OBMEP</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Trocando Algarismos</h4>
        </div>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
            Cláudia inverteu as posições de dois algarismos vizinhos no número <strong>682479</strong> e obteve um número menor. Quais foram esses algarismos?
        </p>
        <div class="grid grid-cols-2 gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-t5')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">a) 6 e 8</button>
            <button onclick="app.verificarQuiz(this, true, 'fb-t5')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">b) 8 e 2</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t5')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">c) 2 e 4</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t5')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">d) 4 e 7</button>
        </div>
        <div id="fb-t5" class="hidden mt-3 text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
            Certo! Trocando 8 e 2 (6<strong>82</strong>479), obtemos 6<strong>28</strong>479, que é menor.
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">6. PROVA BRASIL</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Interpretação de Gráfico</h4>
        </div>
        <p class="mb-6 text-gray-600 dark:text-gray-300">
            Onde os alunos preferem passar as férias? Analise o gráfico e responda: <strong>Qual local foi o menos escolhido?</strong>
        </p>
        
        <div class="flex items-end justify-around h-40 border-b-2 border-l-2 border-gray-300 dark:border-gray-600 p-2 mb-6 bg-gray-50 dark:bg-gray-900/30">
            <div class="w-1/5 flex flex-col items-center group">
                <div class="w-full bg-blue-300 dark:bg-blue-600 rounded-t h-16 relative group-hover:bg-blue-400 transition-all"></div>
                <span class="text-[10px] mt-1 font-bold">CASA</span>
            </div>
            <div class="w-1/5 flex flex-col items-center group">
                <div class="w-full bg-blue-300 dark:bg-blue-600 rounded-t h-24 relative group-hover:bg-blue-400 transition-all"></div>
                <span class="text-[10px] mt-1 font-bold">PRAIA</span>
            </div>
            <div class="w-1/5 flex flex-col items-center group">
                <div class="w-full bg-blue-300 dark:bg-blue-600 rounded-t h-32 relative group-hover:bg-blue-400 transition-all"></div>
                <span class="text-[10px] mt-1 font-bold text-center leading-none">SÍTIO<br>VOVÓ</span>
            </div>
            <div class="w-1/5 flex flex-col items-center group">
                <div class="w-full bg-blue-300 dark:bg-blue-600 rounded-t h-10 relative group-hover:bg-blue-400 transition-all"></div>
                <span class="text-[10px] mt-1 font-bold text-center leading-none">FAZENDA<br>TIO</span>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-t6')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">a) Casa.</button>
            <button onclick="app.verificarQuiz(this, true, 'fb-t6')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">b) Fazenda do tio.</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t6')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">c) Praia.</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t6')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">d) Sítio da vovó.</button>
        </div>
        <div id="fb-t6" class="hidden mt-3 text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
            Correto! A barra da "Fazenda do tio" é a mais baixa de todas.
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">7. SAEB</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Reta Numérica</h4>
        </div>
        <p class="mb-6 text-gray-600 dark:text-gray-300">
            Na reta abaixo, P = 960 e U = 1010. Em qual ponto está localizado o número <strong>990</strong>?
        </p>

        <div class="relative h-16 w-full mb-6 select-none">
            <div class="absolute top-1/2 left-4 right-4 h-1 bg-gray-400 dark:bg-gray-600"></div>
            <div class="flex justify-between px-4 absolute w-full top-2">
                <div class="flex flex-col items-center"><div class="h-4 w-0.5 bg-gray-600 dark:bg-gray-300"></div><span class="text-xs font-bold mt-1">P<br>960</span></div>
                <div class="flex flex-col items-center"><div class="h-4 w-0.5 bg-gray-600 dark:bg-gray-300"></div><span class="text-xs font-bold mt-1">Q</span></div>
                <div class="flex flex-col items-center"><div class="h-4 w-0.5 bg-gray-600 dark:bg-gray-300"></div><span class="text-xs font-bold mt-1">R</span></div>
                <div class="flex flex-col items-center"><div class="h-4 w-0.5 bg-gray-600 dark:bg-gray-300"></div><span class="text-xs font-bold mt-1">S</span></div>
                <div class="flex flex-col items-center"><div class="h-4 w-0.5 bg-gray-600 dark:bg-gray-300"></div><span class="text-xs font-bold mt-1">T</span></div>
                <div class="flex flex-col items-center"><div class="h-4 w-0.5 bg-gray-600 dark:bg-gray-300"></div><span class="text-xs font-bold mt-1">U<br>1010</span></div>
            </div>
        </div>

        <div class="grid grid-cols-4 gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-t7')" class="text-center p-2 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-bold dark:text-gray-300">T</button>
            <button onclick="app.verificarQuiz(this, true, 'fb-t7')" class="text-center p-2 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-bold dark:text-gray-300">S</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t7')" class="text-center p-2 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-bold dark:text-gray-300">R</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t7')" class="text-center p-2 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-bold dark:text-gray-300">Q</button>
        </div>
        <div id="fb-t7" class="hidden mt-3 text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
            Correto! A reta pula de 10 em 10. Q=970, R=980, <strong>S=990</strong>.
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">8. SAEB</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Formando Números</h4>
        </div>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
            Usando somente os algarismos <strong>2, 5 e 8</strong>, sem repetição, escrevi todos os números possíveis. O maior número que escrevi foi:
        </p>
        <div class="grid grid-cols-2 gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-t8')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">a) 528.</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t8')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">b) 258.</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t8')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">c) 825.</button>
            <button onclick="app.verificarQuiz(this, true, 'fb-t8')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">d) 852.</button>
        </div>
        <div id="fb-t8" class="hidden mt-3 text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
            Muito bem! Ordem decrescente dos algarismos: 852.
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">9. PROVA BRASIL</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Leitura de Tabela</h4>
        </div>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
            Altitudes acima de <strong>2600 m</strong> provocam dor de cabeça. Analise a tabela:
        </p>

        <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm text-center border-collapse">
                <thead>
                    <tr class="bg-brand-purple text-white">
                        <th class="p-2 border border-purple-600">Cidade</th>
                        <th class="p-2 border border-purple-600">Altitude</th>
                    </tr>
                </thead>
                <tbody class="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                    <tr><td class="p-2 border border-gray-300 dark:border-gray-600">Rio de Janeiro</td><td class="p-2 border border-gray-300 dark:border-gray-600">0 m</td></tr>
                    <tr><td class="p-2 border border-gray-300 dark:border-gray-600">São Paulo</td><td class="p-2 border border-gray-300 dark:border-gray-600">750 m</td></tr>
                    <tr><td class="p-2 border border-gray-300 dark:border-gray-600">Belo Horizonte</td><td class="p-2 border border-gray-300 dark:border-gray-600">1150 m</td></tr>
                    <tr><td class="p-2 border border-gray-300 dark:border-gray-600">Cidade do México</td><td class="p-2 border border-gray-300 dark:border-gray-600">2240 m</td></tr>
                    <tr><td class="p-2 border border-gray-300 dark:border-gray-600 font-bold text-red-600 dark:text-red-400">Quito</td><td class="p-2 border border-gray-300 dark:border-gray-600 font-bold text-red-600 dark:text-red-400">2850 m</td></tr>
                </tbody>
            </table>
        </div>

        <p class="mb-4 text-gray-600 dark:text-gray-300">Em qual cidade as pessoas poderão sentir dor de cabeça devido à altitude?</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button onclick="app.verificarQuiz(this, false, 'fb-t9')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">a) Rio de Janeiro.</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t9')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">b) Cidade do México.</button>
            <button onclick="app.verificarQuiz(this, false, 'fb-t9')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">c) São Paulo.</button>
            <button onclick="app.verificarQuiz(this, true, 'fb-t9')" class="text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all dark:text-gray-300">d) Quito.</button>
        </div>
        <div id="fb-t9" class="hidden mt-3 text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
            Correto! 2850 m é maior que 2600 m.
        </div>
    </div>

















<h3 class="text-2xl font-bold text-brand-blue mb-4">Ponto de Checagem</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Vamos revisar tudo o que aprendemos sobre sistemas de numeração e números naturais. Preparado?
        </p>
    </div>

    <div class="mt-8 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">1. Conversão</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Egípcio x Decimal</h4>
        </div>
        <p class="mb-4 text-gray-600 dark:text-gray-300">
            Passe do sistema decimal para o egípcio ou vice-versa.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-600">
                <p class="font-bold text-brand-blue mb-2">a) 32</p>
                <div class="flex flex-col gap-2">
                    <button onclick="app.verificarQuiz(this, true, 'fb-check1a')" class="text-left text-sm p-2 rounded bg-white dark:bg-gray-700 border hover:bg-blue-50 transition-all">∩∩∩ ||</button>
                    <button onclick="app.verificarQuiz(this, false, 'fb-check1a')" class="text-left text-sm p-2 rounded bg-white dark:bg-gray-700 border hover:bg-blue-50 transition-all">∩∩ |||</button>
                </div>
                <div id="fb-check1a" class="hidden mt-2 text-xs text-green-600 font-bold">Correto! 3 calcanhares (30) e 2 bastões (2).</div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-600">
                <p class="font-bold text-brand-blue mb-2">b) ∩∩ |||</p>
                <div class="flex gap-2">
                    <input type="text" id="inp-check1b" class="flex-1 p-2 rounded border text-center dark:bg-gray-700 dark:text-white" placeholder="?">
                    <button onclick="app.verificarAtividade('inp-check1b', '23')" class="bg-brand-green text-white px-3 rounded text-sm">OK</button>
                </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-600">
                <p class="font-bold text-brand-blue mb-2">c) ୭ |||</p>
                <div class="flex gap-2">
                    <input type="text" id="inp-check1c" class="flex-1 p-2 rounded border text-center dark:bg-gray-700 dark:text-white" placeholder="?">
                    <button onclick="app.verificarAtividade('inp-check1c', '103')" class="bg-brand-green text-white px-3 rounded text-sm">OK</button>
                </div>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-200 dark:border-gray-600">
                <p class="font-bold text-brand-blue mb-2">d) 314</p>
                <div class="flex flex-col gap-2">
                    <button onclick="app.verificarQuiz(this, false, 'fb-check1d')" class="text-left text-sm p-2 rounded bg-white dark:bg-gray-700 border hover:bg-blue-50 transition-all">୭୭ ∩ ||||</button>
                    <button onclick="app.verificarQuiz(this, true, 'fb-check1d')" class="text-left text-sm p-2 rounded bg-white dark:bg-gray-700 border hover:bg-blue-50 transition-all">୭୭୭ ∩ ||||</button>
                </div>
                <div id="fb-check1d" class="hidden mt-2 text-xs text-green-600 font-bold">Correto! 3 cordas (300), 1 calcanhar (10), 4 bastões (4).</div>
            </div>
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded">2. Séculos</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Linha do Tempo</h4>
        </div>
        
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-center border-collapse">
                <tr class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 font-bold">
                    <td class="p-2 border border-purple-300">Século XVIII</td>
                    <td class="p-2 border border-purple-300">1º/1/1701 a 31/12/1800</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <td class="p-2 border border-gray-300 dark:border-gray-600 font-bold">Século XIX</td>
                    <td class="p-2 border border-gray-300 dark:border-gray-600">
                        <div class="flex items-center justify-center gap-1">
                            <input type="text" class="w-16 p-1 border rounded text-center text-xs" placeholder="Início" id="sec19-ini" onblur="app.verificarAtividade(this.id, '1801')">
                            <span>a</span>
                            <input type="text" class="w-16 p-1 border rounded text-center text-xs" placeholder="Fim" id="sec19-fim" onblur="app.verificarAtividade(this.id, '1900')">
                        </div>
                    </td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-800/50">
                    <td class="p-2 border border-gray-300 dark:border-gray-600 font-bold">Século XX</td>
                    <td class="p-2 border border-gray-300 dark:border-gray-600">
                        <div class="flex items-center justify-center gap-1">
                            <input type="text" class="w-16 p-1 border rounded text-center text-xs" placeholder="Início" id="sec20-ini" onblur="app.verificarAtividade(this.id, '1901')">
                            <span>a</span>
                            <input type="text" class="w-16 p-1 border rounded text-center text-xs" placeholder="Fim" id="sec20-fim" onblur="app.verificarAtividade(this.id, '2000')">
                        </div>
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <td class="p-2 border border-gray-300 dark:border-gray-600 font-bold">Século XXI</td>
                    <td class="p-2 border border-gray-300 dark:border-gray-600">
                        <div class="flex items-center justify-center gap-1">
                            <input type="text" class="w-16 p-1 border rounded text-center text-xs" placeholder="Início" id="sec21-ini" onblur="app.verificarAtividade(this.id, '2001')">
                            <span>a</span>
                            <input type="text" class="w-16 p-1 border rounded text-center text-xs" placeholder="Fim" id="sec21-fim" onblur="app.verificarAtividade(this.id, '2100')">
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">3. Escrita e Valor</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Números Grandes</h4>
        </div>

        <div class="space-y-4">
            <div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">a) Como se lê <strong>20 006 400</strong>?</p>
                <div class="bg-gray-50 dark:bg-gray-800 p-2 rounded text-sm italic text-green-700 dark:text-green-400">
                    Vinte milhões, seis mil e quatrocentos.
                </div>
            </div>

            <div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">b) Escreva com algarismos: <strong>dezessete milhões e um</strong>.</p>
                <div class="flex gap-2">
                    <input type="text" id="check3b" class="flex-1 p-2 border rounded" onblur="app.verificarAtividade('check3b', '17000001')">
                </div>
            </div>

            <div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">c) Componha: 6 mi + 300 mil + 10 mil + 5 mil + 20 + 5</p>
                <div class="flex gap-2">
                    <input type="text" id="check3c" class="flex-1 p-2 border rounded" placeholder="Resultado" onblur="app.verificarAtividade('check3c', '6315025')">
                </div>
            </div>

            <div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">d) Valor posicional de cada 4 em <strong>4 444</strong> (da esquerda para direita):</p>
                <div class="grid grid-cols-4 gap-2 text-center">
                    <input type="text" class="p-1 border rounded text-xs" placeholder="1º" id="vp4-1" onblur="app.verificarAtividade(this.id, '4000')">
                    <input type="text" class="p-1 border rounded text-xs" placeholder="2º" id="vp4-2" onblur="app.verificarAtividade(this.id, '400')">
                    <input type="text" class="p-1 border rounded text-xs" placeholder="3º" id="vp4-3" onblur="app.verificarAtividade(this.id, '40')">
                    <input type="text" class="p-1 border rounded text-xs" placeholder="4º" id="vp4-4" onblur="app.verificarAtividade(this.id, '4')">
                </div>
            </div>

            <div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">e) Quantas dezenas há no número <strong>1200</strong>?</p>
                <div class="flex gap-2">
                    <input type="text" id="check3e" class="w-24 p-2 border rounded text-center" onblur="app.verificarAtividade('check3e', '120')">
                    <span class="self-center text-sm">dezenas</span>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">4. Picos do Brasil</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Análise de Tabela e Reta</h4>
        </div>

        <div class="overflow-x-auto mb-6">
            <table class="w-full text-xs text-left border-collapse">
                <thead class="bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 font-bold uppercase">
                    <tr>
                        <th class="p-2 border border-yellow-300">Pico</th>
                        <th class="p-2 border border-yellow-300">Altura (m)</th>
                    </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <tr><td class="p-2 border">Pico da Bandeira</td><td class="p-2 border">2891</td></tr>
                    <tr><td class="p-2 border">Pico da Neblina</td><td class="p-2 border">2995</td></tr>
                    <tr><td class="p-2 border">Agulhas Negras</td><td class="p-2 border">2791</td></tr>
                    <tr><td class="p-2 border">Pedra da Mina</td><td class="p-2 border">2798</td></tr>
                    <tr><td class="p-2 border">Pico 31 de Março</td><td class="p-2 border">2974</td></tr>
                </tbody>
            </table>
        </div>

        <div class="relative w-full h-16 mb-6 text-xs text-gray-600 dark:text-gray-400 select-none">
            <div class="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400"></div>
            <div class="absolute left-[0%]" style="top: 30%">|<br>2780</div>
            <div class="absolute left-[10%]" style="top: 30%">|<br>B</div>
            <div class="absolute left-[20%]" style="top: 30%">|<br>2820</div>
            <div class="absolute left-[40%]" style="top: 30%">|<br>2860</div>
            <div class="absolute left-[50%]" style="top: 30%">|<br>2880</div>
            <div class="absolute left-[55%]" style="top: 10%"><span class="text-red-500 font-bold">A</span><br>|</div>
            <div class="absolute left-[60%]" style="top: 30%">|<br>2900</div>
            <div class="absolute left-[70%]" style="top: 30%">|<br>2920</div>
            <div class="absolute left-[80%]" style="top: 30%">|<br>2940</div>
            <div class="absolute left-[90%]" style="top: 30%">|<br>2960</div>
            <div class="absolute left-[95%]" style="top: 10%"><span class="text-red-500 font-bold">D</span><br>|</div>
            <div class="absolute left-[100%]" style="top: 30%">|<br>3000<br><span class="text-red-500 font-bold">C</span></div>
            <div class="absolute left-[5%]" style="top: 10%"><span class="text-red-500 font-bold">E</span><br>|</div>
        </div>

        <div class="space-y-4">
            <p class="font-bold text-sm text-gray-700 dark:text-gray-200">a) Associe os pontos aos picos (aproximadamente):</p>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-2">
                <div class="text-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <span class="block text-xs font-bold mb-1">A (~2890)</span>
                    <select id="pico-A" class="w-full text-xs" onchange="app.verificarAtividade(this.id, 'bandeira')">
                        <option>?</option><option value="bandeira">Bandeira</option><option value="neblina">Neblina</option>
                    </select>
                </div>
                <div class="text-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <span class="block text-xs font-bold mb-1">B (~2790)</span>
                    <select id="pico-B" class="w-full text-xs" onchange="app.verificarAtividade(this.id, 'agulhas')">
                        <option>?</option><option value="agulhas">Agulhas N.</option><option value="mina">Pedra Mina</option>
                    </select>
                </div>
                <div class="text-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <span class="block text-xs font-bold mb-1">C (~3000)</span>
                    <select id="pico-C" class="w-full text-xs" onchange="app.verificarAtividade(this.id, 'neblina')">
                        <option>?</option><option value="neblina">Neblina</option><option value="marco">31 Março</option>
                    </select>
                </div>
                <div class="text-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <span class="block text-xs font-bold mb-1">D (~2970)</span>
                    <select id="pico-D" class="w-full text-xs" onchange="app.verificarAtividade(this.id, 'marco')">
                        <option>?</option><option value="marco">31 Março</option><option value="neblina">Neblina</option>
                    </select>
                </div>
                <div class="text-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <span class="block text-xs font-bold mb-1">E (~2800)</span>
                    <select id="pico-E" class="w-full text-xs" onchange="app.verificarAtividade(this.id, 'mina')">
                        <option>?</option><option value="mina">Pedra Mina</option><option value="agulhas">Agulhas N.</option>
                    </select>
                </div>
            </div>

            <p class="font-bold text-sm text-gray-700 dark:text-gray-200 mt-2">b) Ordem decrescente das alturas:</p>
            <div class="bg-green-50 dark:bg-green-900/20 p-2 rounded text-xs text-green-800 dark:text-green-300 font-mono text-center">
                2995 > 2974 > 2891 > 2798 > 2791
            </div>
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">5. Combinação</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Algarismos 4, 5, 8</h4>
        </div>
        
        <div class="space-y-4">
            <div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">a) Forme todos os números possíveis (sem repetição):</p>
                <div class="grid grid-cols-3 md:grid-cols-6 gap-2 text-center text-sm font-mono text-blue-600 font-bold">
                    <span>458</span><span>485</span><span>548</span><span>584</span><span>845</span><span>854</span>
                </div>
            </div>
            
            <div>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">b) Em quais números o algarismo 4 vale <strong>40</strong>?</p>
                <div class="flex gap-2">
                    <button onclick="app.verificarQuiz(this, false, null)" class="px-3 py-1 border rounded text-xs">458 e 485</button>
                    <button onclick="app.verificarQuiz(this, true, null)" class="px-3 py-1 border rounded text-xs bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold">548 e 845</button>
                    <button onclick="app.verificarQuiz(this, false, null)" class="px-3 py-1 border rounded text-xs">584 e 854</button>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-6 bg-white dark:bg-brand-darkCard p-6 rounded-3xl border-2 border-gray-100 dark:border-gray-700 shadow-sm">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">6. Verdadeiro ou Falso</span>
            <h4 class="font-bold text-gray-700 dark:text-gray-200">Propriedades</h4>
        </div>

        <div class="space-y-3">
            <div class="flex flex-col gap-1 p-2 border rounded bg-gray-50 dark:bg-gray-800">
                <p class="text-xs">a) Ao multiplicarmos um natural por 2, o resultado é sempre PAR.</p>
                <div class="flex gap-2">
                    <button onclick="app.verificarQuiz(this, true, null)" class="text-xs bg-white border px-2 py-1 rounded hover:bg-green-100">Verdadeiro</button>
                    <button onclick="app.verificarQuiz(this, false, null)" class="text-xs bg-white border px-2 py-1 rounded hover:bg-red-100">Falso</button>
                </div>
            </div>

            <div class="flex flex-col gap-1 p-2 border rounded bg-gray-50 dark:bg-gray-800">
                <p class="text-xs">b) Se dividirmos um número por 2 e o resto for 1, ele é PAR.</p>
                <div class="flex gap-2">
                    <button onclick="app.verificarQuiz(this, false, null)" class="text-xs bg-white border px-2 py-1 rounded hover:bg-green-100">Verdadeiro</button>
                    <button onclick="app.verificarQuiz(this, true, null)" class="text-xs bg-white border px-2 py-1 rounded hover:bg-red-100">Falso</button>
                </div>
                <p class="text-[10px] text-gray-500 italic mt-1">Correção: Se o resto é 1, ele é ÍMPAR.</p>
            </div>

            <div class="flex flex-col gap-1 p-2 border rounded bg-gray-50 dark:bg-gray-800">
                <p class="text-xs">c) Somando 1 a um número PAR, o resultado é ÍMPAR.</p>
                <div class="flex gap-2">
                    <button onclick="app.verificarQuiz(this, true, null)" class="text-xs bg-white border px-2 py-1 rounded hover:bg-green-100">Verdadeiro</button>
                    <button onclick="app.verificarQuiz(this, false, null)" class="text-xs bg-white border px-2 py-1 rounded hover:bg-red-100">Falso</button>
                </div>
            </div>

            <div class="flex flex-col gap-1 p-2 border rounded bg-gray-50 dark:bg-gray-800">
                <p class="text-xs">d) A sequência dos pares pode ser formada contando de 2 em 2 a partir do 1.</p>
                <div class="flex gap-2">
                    <button onclick="app.verificarQuiz(this, false, null)" class="text-xs bg-white border px-2 py-1 rounded hover:bg-green-100">Verdadeiro</button>
                    <button onclick="app.verificarQuiz(this, true, null)" class="text-xs bg-white border px-2 py-1 rounded hover:bg-red-100">Falso</button>
                </div>
                <p class="text-[10px] text-gray-500 italic mt-1">Correção: Deve-se começar do 0 (ou 2), não do 1.</p>
            </div>
        </div>
    </div>

    <div class="mt-8 bg-blue-50 dark:bg-blue-900/30 p-6 rounded-3xl border border-blue-200 dark:border-blue-800">
        <h3 class="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center gap-2">
            <span>✅</span> Autoavaliação
        </h3>
        <p class="text-sm text-blue-900 dark:text-blue-200 mb-4">
            Reflita sobre o que você aprendeu neste capítulo:
        </p>
        <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex items-start gap-2">
                <input type="checkbox" class="mt-1">
                <span>Reconheço as diferenças entre os sistemas egípcio, romano e decimal?</span>
            </li>
            <li class="flex items-start gap-2">
                <input type="checkbox" class="mt-1">
                <span>Consigo ler e escrever números grandes (milhões) por extenso e algarismos?</span>
            </li>
            <li class="flex items-start gap-2">
                <input type="checkbox" class="mt-1">
                <span>Entendi as regras de valor posicional e classes?</span>
            </li>
            <li class="flex items-start gap-2">
                <input type="checkbox" class="mt-1">
                <span>Compartilhei ideias com os colegas e o professor?</span>
            </li>
        </ul>
    </div>
    `,

    // Unidade: Operações com números naturais
    "Adição de Números Naturais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Adição</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Retomada e aprofundamento das ideias associadas à adição: <strong>juntar quantidades</strong> e <strong>acrescentar</strong> uma quantidade à outra.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">➕ Termos da Adição:</p>
            <p class="text-gray-700 dark:text-gray-300">Consolidação do algoritmo usual e nomenclatura: <strong>parcelas</strong> e <strong>soma</strong>.</p>
        </div>
    </div>
    `,

    "Subtração de Números Naturais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Subtração</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Exploração das ideias fundamentais: tirar uma quantidade de outra, completar uma quantidade até atingir outra e comparar duas quantidades (quanto a mais/menos).
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">➖ Nomenclatura:</p>
            <p class="text-gray-700 dark:text-gray-300">Estudo do algoritmo com: <strong>minuendo, subtraendo e resto (ou diferença)</strong>.</p>
        </div>
    </div>
    `,

    "Adição e Subtração - Operação Inversa": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Operações Inversas (+ e -)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Reconhecimento de que adição e subtração são operações inversas: <em>"o que uma faz, a outra desfaz"</em>.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">💡 Utilidade Prática:</p>
            <p class="text-gray-700 dark:text-gray-300">Utilizamos essa relação para fazer a <strong>prova real</strong> e descobrir termos desconhecidos.</p>
        </div>
    </div>
    `,

    "Multiplicação de Números Naturais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Multiplicação</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Desenvolvimento do pensamento multiplicativo e prática do algoritmo.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">✖️ Ideias da Multiplicação:</p>
            <p class="text-gray-700 dark:text-gray-300">Adição de parcelas iguais, disposição retangular, proporcionalidade e combinatória.</p>
        </div>
    </div>
    `,

    "Divisão de Números Naturais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Divisão</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estudo das ideias de <strong>repartir igualmente</strong> (divisão partitiva) e <strong>medir/quantas vezes cabe</strong> (divisão quotitiva).
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">➗ Relação Fundamental:</p>
            <p class="text-gray-700 dark:text-gray-300">Dividendo = divisor × quociente + resto.</p>
        </div>
    </div>
    `,

    "Multiplicação e Divisão - Operação Inversa": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Operações Inversas (× e ÷)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Compreensão da relação inversa entre multiplicação e divisão exata.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔍 Aplicação:</p>
            <p class="text-gray-700 dark:text-gray-300">Uso dessa propriedade para conferir cálculos e resolver problemas onde é necessário encontrar um valor inicial desconhecido.</p>
        </div>
    </div>
    `,

    "Calculo Mental": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Cálculo Mental</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estratégias para realizar operações sem o uso de algoritmos escritos.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🧠 Técnicas:</p>
            <p class="text-gray-700 dark:text-gray-300">Utilização de propriedades das operações (associativa, distributiva) e <strong>decomposição numérica</strong> para agilizar o raciocínio.</p>
        </div>
    </div>
    `,

    "Arredondamento e Resultado Aproximado": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Estimativa e Arredondamento</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Técnicas de arredondamento de números para a dezena, centena ou milhar mais próxima.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🎯 Objetivo:</p>
            <p class="text-gray-700 dark:text-gray-300">Desenvolver a capacidade de <strong>estimativa</strong> para prever a ordem de grandeza de um resultado antes mesmo de calcular.</p>
        </div>
    </div>
    `,

    "Igualdade e Propriedades das Desigualdades": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Igualdade e Equivalência</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Introdução ao pensamento algébrico através da noção de equivalência.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⚖️ A Balança:</p>
            <p class="text-gray-700 dark:text-gray-300">Usamos a analogia com a balança de dois pratos: o que é feito em um membro da igualdade deve ser feito no outro para mantê-la verdadeira.</p>
        </div>
    </div>
    `,

    "Resolução de Problemas Envolvendo as 4 Operações": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Resolução de Problemas</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Integração das quatro operações fundamentais em cenários complexos.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">👣 Passo a Passo:</p>
            <ol class="list-decimal list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li>Interpretação de texto.</li>
                <li>Identificação dos dados.</li>
                <li>Seleção da operação adequada.</li>
                <li>Validação da resposta no contexto.</li>
            </ol>
        </div>
    </div>
    `,

    "Potenciação de Números Naturais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Potenciação</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Introdução à potenciação como uma multiplicação de fatores iguais.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📦 Visualização Geométrica:</p>
            <p class="text-gray-700 dark:text-gray-300">Associação visual com <strong>quadrados perfeitos (x²)</strong> e <strong>cubos perfeitos (x³)</strong> para facilitar a compreensão.</p>
        </div>
    </div>
    `,

    "Expressões Numéricas envolvendo as 4 operações e Potenciação": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Expressões Numéricas</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Organização dos cálculos respeitando os sinais de associação (parênteses, colchetes e chaves).
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⚠️ Ordem de Prioridade:</p>
            <ol class="list-decimal list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li>Potências.</li>
                <li>Multiplicações e Divisões.</li>
                <li>Adições e Subtrações.</li>
            </ol>
        </div>
    </div>
    `,

    "A Ideia de Função": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">A Ideia de Função</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Introdução intuitiva à dependência entre grandezas, sem formalismo algébrico complexo.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">💡 Exemplo Prático:</p>
            <p class="text-gray-700 dark:text-gray-300">Situações onde o valor de uma variável depende de outra (ex: <em>preço a pagar em função da quantidade comprada</em>).</p>
        </div>
    </div>
    `,

    // Unidade: Sólidos geométricos
    "Sólidos geométricos": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Sólidos Geométricos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Classificação geral e diferenciação dos sólidos em dois grandes grupos.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📐 Diferenciação:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>Poliedros:</strong> Apenas faces planas.</li>
                <li><strong>Corpos Redondos:</strong> Têm ao menos uma superfície curva e rolam (ex: esfera, cilindro).</li>
            </ul>
        </div>
    </div>
    `,

    "Prismas e Pirâmides": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Prismas e Pirâmides</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estudo detalhado dos poliedros, incluindo a contagem de faces, vértices e arestas.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔍 Como identificar:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>Prismas:</strong> Duas bases iguais e faces laterais retangulares.</li>
                <li><strong>Pirâmides:</strong> Uma base e faces laterais triangulares que convergem para um vértice.</li>
            </ul>
        </div>
    </div>
    `,

    "Principais Corpos Redondos": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Corpos Redondos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Identificação e caracterização do <strong>cilindro</strong>, do <strong>cone</strong> e da <strong>esfera</strong>.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🌍 No Cotidiano:</p>
            <p class="text-gray-700 dark:text-gray-300">Análise de suas superfícies (planas e curvas) e observação de objetos do dia a dia que possuem essas formas.</p>
        </div>
    </div>
    `,

    // Unidade: Múltiplos e divisores
    "Múltiplos de um número natural": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Múltiplos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Conceito de múltiplo como o resultado da multiplicação de um número natural por outro.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">♾️ Infinito:</p>
            <p class="text-gray-700 dark:text-gray-300">Trabalhamos a ideia de sequências infinitas. Exemplo M(3): {0, 3, 6, 9, ...}.</p>
        </div>
    </div>
    `,

    "Divisores de um número Natural": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Divisores</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Identificação dos números que dividem um determinado número de forma exata (resto zero).
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🛑 Conjunto Finito:</p>
            <p class="text-gray-700 dark:text-gray-300">Ao contrário dos múltiplos, os divisores formam sequências finitas. O número <strong>1 é divisor universal</strong>.</p>
        </div>
    </div>
    `,

    "Múltiplo e Divisor de um Número Natural": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Relação Múltiplo e Divisor</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Interligação dos conceitos: se A é múltiplo de B, então B é divisor de A.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⚡ Atalhos:</p>
            <p class="text-gray-700 dark:text-gray-300">Apresentação dos <strong>Critérios de Divisibilidade</strong> (por 2, 3, 5, etc.) para facilitar a identificação sem efetuar a conta.</p>
        </div>
    </div>
    `,

    "Número Primo": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Números Primos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Definição de números primos (possuem apenas dois divisores: 1 e ele mesmo) e números compostos.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🕵️ Caça aos Primos:</p>
            <p class="text-gray-700 dark:text-gray-300">Introdução ao <strong>Crivo de Eratóstenes</strong>, um método antigo para encontrar números primos.</p>
        </div>
    </div>
    `,

    // Unidade: Ângulos e polígonos
    "Ponto, Reta e Plano": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Entes Geométricos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Apresentação intuitiva dos conceitos primitivos da geometria.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📍 Definições Básicas:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>Ponto:</strong> Uma localização.</li>
                <li><strong>Reta:</strong> Uma direção infinita.</li>
                <li><strong>Plano:</strong> Uma superfície infinita.</li>
            </ul>
        </div>
    </div>
    `,

    "Ângulos": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Ângulos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Definição de ângulo como região do plano limitada por duas semirretas de mesma origem e como <strong>medida de giro</strong>.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📐 Classificação:</p>
            <p class="text-gray-700 dark:text-gray-300">Uso do transferidor para classificar em: <strong>Agudo, Reto, Obtuso e Raso</strong>.</p>
        </div>
    </div>
    `,

    "Retas Paralelas e Retas Concorrentes": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Posições Relativas de Retas</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estudo da posição relativa entre retas no plano.
        </p>
        

[Image of parallel and perpendicular lines]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🛣️ Tipos:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li><strong>Paralelas:</strong> Mantêm a mesma distância e não se cruzam.</li>
                <li><strong>Concorrentes:</strong> Possuem um ponto em comum.</li>
                <li><strong>Perpendiculares:</strong> Concorrentes que formam 90º.</li>
            </ul>
        </div>
    </div>
    `,

    "Região Plana e Contorno": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Região Plana vs Contorno</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Distinção essencial entre a linha que delimita uma figura (contorno) e a superfície interna (região plana).
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">💡 Importância:</p>
            <p class="text-gray-700 dark:text-gray-300">Este é o conceito fundamental para diferenciar futuramente <strong>Perímetro</strong> (borda) de <strong>Área</strong> (recheio).</p>
        </div>
    </div>
    `,

    "Polígonos": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Polígonos</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Figuras planas fechadas formadas apenas por segmentos de reta que não se cruzam.
        </p>
        

[Image of various polygons]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔷 Classificação:</p>
            <p class="text-gray-700 dark:text-gray-300">Nomeamos de acordo com o número de lados: triângulos (3), quadriláteros (4), pentágonos (5), etc.</p>
        </div>
    </div>
    `,

    "Plano Cartesiano": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Plano Cartesiano</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Introdução ao sistema de coordenadas. Aprendemos a localizar pontos e identificar eixos e quadrantes.
        </p>
        

[Image of cartesian plane with points]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🗺️ GPS Matemático:</p>
            <p class="text-gray-700 dark:text-gray-300">Usamos <strong>pares ordenados (x, y)</strong>, onde X é a posição horizontal e Y a vertical.</p>
        </div>
    </div>
    `,

    "Ampliação e Redução de Figuras Planas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Ampliação e Redução</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Uso de malhas quadriculadas para desenhar figuras em tamanhos diferentes.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔍 O que muda?</p>
            <p class="text-gray-700 dark:text-gray-300">Observamos a <strong>conservação da forma e dos ângulos</strong>, enquanto as medidas dos lados sofrem alteração proporcional.</p>
        </div>
    </div>
    `,

    // Unidade: Frações e porcentagem
    "Ideias associadas à fração": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Conceito de Fração</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Leitura, representação gráfica e identificação de <strong>numerador</strong> e <strong>denominador</strong>.
        </p>
        

[Image of pizza fraction examples]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🍕 Significados:</p>
            <p class="text-gray-700 dark:text-gray-300">A fração não é apenas "parte de um todo", mas também o resultado de uma <strong>divisão</strong> e uma <strong>razão</strong>.</p>
        </div>
    </div>
    `,

    "Frações Equivalentes": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Frações Equivalentes</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Compreensão de que frações escritas com números diferentes podem representar a <strong>mesma quantidade</strong>.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🛠️ Como obter?</p>
            <p class="text-gray-700 dark:text-gray-300">Multiplicando ou dividindo tanto o numerador quanto o denominador pelo mesmo número.</p>
        </div>
    </div>
    `,

    "Comparando Frações": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Comparação de Frações</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estratégias para determinar qual fração é maior ou menor.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📏 Casos:</p>
            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                <li>Denominadores iguais (olha o numerador).</li>
                <li>Numeradores iguais (quanto maior o denominador, menor o pedaço).</li>
                <li>Redução ao mesmo denominador.</li>
            </ul>
        </div>
    </div>
    `,

    "Adição e Subtração de Frações": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Operações com Frações (+ e -)</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Resolução de operações de soma e subtração.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⚠️ Atenção:</p>
            <p class="text-gray-700 dark:text-gray-300">Se os denominadores forem iguais, conserva-se a base. Se forem diferentes, precisamos encontrar <strong>frações equivalentes (MMC)</strong> antes de somar.</p>
        </div>
    </div>
    `,

    "Fração em Ampliação e Redução de Figuras Planas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Razão de Semelhança</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Aplicação prática de frações no redimensionamento de imagens.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔍 A Regra:</p>
            <p class="text-gray-700 dark:text-gray-300">Multiplicar as dimensões por uma fração <strong>maior que 1 amplia</strong> a figura. Multiplicar por uma fração <strong>menor que 1 a reduz</strong>.</p>
        </div>
    </div>
    `,

    "Porcentagem": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Porcentagem</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Apresentação da porcentagem como uma <strong>fração de denominador 100</strong>.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🔄 Conversões:</p>
            <p class="text-gray-700 dark:text-gray-300">Aprendemos a transitar entre as representações fracionária, decimal e percentual (%), aplicando a contextos simples de desconto e acréscimo.</p>
        </div>
    </div>
    `,

    // Unidade: Decimais
    "Décimo, Centésimo e Milésimo": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Números Decimais</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Expansão do sistema de numeração para ordens menores que a unidade.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📏 Após a vírgula:</p>
            <p class="text-gray-700 dark:text-gray-300">Compreensão do valor posicional: décimo (0,1), centésimo (0,01) e milésimo (0,001).</p>
        </div>
    </div>
    `,

    "Decimais e Sistema de Numeração Decimal": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Decimais e Base 10</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Relação entre frações decimais e números decimais.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">💡 Continuidade:</p>
            <p class="text-gray-700 dark:text-gray-300">O sistema continua seguindo a <strong>base 10</strong>: cada ordem vale 10 vezes a ordem imediatamente à sua direita, mesmo após a vírgula.</p>
        </div>
    </div>
    `,

    "Comparação entre Decimais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Comparando Decimais</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Técnicas para comparar números racionais na forma decimal.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">👀 Onde olhar:</p>
            <p class="text-gray-700 dark:text-gray-300">Analisamos primeiro a <strong>parte inteira</strong>. Se for igual, olhamos as casas decimais sucessivamente (décimos, depois centésimos...).</p>
        </div>
    </div>
    `,

    "Operações com decimais": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Operações com Decimais</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Algoritmos para somar, subtrair, multiplicar e dividir números decimais, com ênfase no sistema monetário.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⚠️ Regra de Ouro:</p>
            <p class="text-gray-700 dark:text-gray-300">Na adição e subtração, o segredo é o <strong>alinhamento da vírgula</strong> (vírgula embaixo de vírgula).</p>
        </div>
    </div>
    `,

    "Outras Situações Envolvendo os Decimais e as Operações": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Decimais no Cotidiano</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Resolução de problemas contextualizados que exigem múltiplas etapas e interpretação de dados.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🌍 Aplicações:</p>
            <p class="text-gray-700 dark:text-gray-300">Leitura de contas de luz, extratos bancários, receitas culinárias e medidas de precisão.</p>
        </div>
    </div>
    `,

    "Porcentagem na Forma Decimal": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Porcentagem e Decimais</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Cálculo de porcentagens utilizando a forma decimal.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">💡 Truque:</p>
            <p class="text-gray-700 dark:text-gray-300">Calcular 20% de algo é o mesmo que multiplicar esse algo por <strong>0,20</strong>. Isso facilita o uso de calculadoras.</p>
        </div>
    </div>
    `,

    // Unidade: Grandezas geométricas
    "Grandeza Comprimento": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Medidas de Comprimento</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Revisão e aprofundamento das unidades padronizadas, com foco no <strong>metro</strong>, seus múltiplos e submúltiplos.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📏 Conversão:</p>
            <p class="text-gray-700 dark:text-gray-300">Prática de conversão entre unidades (ex: transformar km em m) para resolver problemas.</p>
        </div>
    </div>
    `,

    "Grandeza Perímetro": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Perímetro</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Conceito de perímetro como a medida do comprimento do <strong>contorno</strong> de uma figura plana.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🧱 Exemplos:</p>
            <p class="text-gray-700 dark:text-gray-300">Cálculo de cercas para terrenos, molduras de quadros e voltas completas em pistas.</p>
        </div>
    </div>
    `,

    "Grandeza Área": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Área</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Conceito de área como a medida de uma <strong>superfície</strong>.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📐 O Metro Quadrado:</p>
            <p class="text-gray-700 dark:text-gray-300">Introdução ao m² e cálculo de área de retângulos/quadrados multiplicando suas dimensões (Base × Altura).</p>
        </div>
    </div>
    `,

    "As Grandeza Perímetro e Área em Vistas Aérea e Plantas Baixas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Plantas Baixas</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Aplicação prática dos conceitos de área e perímetro na interpretação de plantas de casas e mapas.
        </p>
        

[Image of house floor plan]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🏠 Não confunda:</p>
            <p class="text-gray-700 dark:text-gray-300">Diferenciação clara entre a medida da borda (perímetro - rodapés) e do preenchimento (área - piso).</p>
        </div>
    </div>
    `,

    // Unidade: Outras grandezas e medidas
    "Grandeza Massa": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Massa</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Trabalho com as unidades usuais: grama, quilograma e tonelada, e instrumentos de medição (balanças).
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⚖️ Físico-Química:</p>
            <p class="text-gray-700 dark:text-gray-300">Diferenciação conceitual importante entre <strong>peso</strong> (força) e <strong>massa</strong> (quantidade de matéria).</p>
        </div>
    </div>
    `,

    "Grandeza Volume": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Volume</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Noção de volume como o <strong>espaço ocupado</strong> por um corpo tridimensional.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🧊 Cubinhos:</p>
            <p class="text-gray-700 dark:text-gray-300">Introdução intuitiva através da contagem de cubinhos empilhados (unidades cúbicas).</p>
        </div>
    </div>
    `,

    "Grandeza Capacidade": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Capacidade</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Estudo da capacidade como o <strong>volume interno</strong> de um recipiente.
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🥛 Litros:</p>
            <p class="text-gray-700 dark:text-gray-300">Relação entre as unidades de volume e capacidade (ex: 1 litro = 1 decímetro cúbico).</p>
        </div>
    </div>
    `,

    "Mais Grandezas": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Tempo e Temperatura</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Exploração das grandezas <strong>Tempo</strong> (horas, minutos, segundos) e <strong>Temperatura</strong> (Celsius).
        </p>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">⏱️ Instrumentos:</p>
            <p class="text-gray-700 dark:text-gray-300">Prática de leitura de relógios (analógicos e digitais) e termômetros.</p>
        </div>
    </div>
    `,

    // Unidade: Probabilidade e pesquisa estatística
    "Probabilidade": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Probabilidade</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Introdução ao estudo da chance e do risco.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">🎲 Aleatório vs Determinado:</p>
            <p class="text-gray-700 dark:text-gray-300">Cálculo simples de probabilidade em situações equiprováveis (ex: cara ou coroa, lançamento de dados).</p>
        </div>
    </div>
    `,

    "Pesquisa estatística": `
    <h3 class="text-2xl font-bold text-brand-blue mb-4">Estatística</h3>
    <div class="bg-white dark:bg-brand-darkCard p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-700 shadow-sm space-y-4">
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            As etapas de uma pesquisa: coleta, organização e interpretação de dados.
        </p>
        

[Image of bar chart and pie chart]

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-brand-blue">
            <p class="font-bold text-brand-blue dark:text-blue-300">📊 Gráficos:</p>
            <p class="text-gray-700 dark:text-gray-300">Leitura e construção de tabelas de frequência e gráficos (barras, colunas e linhas) para sintetizar informações.</p>
        </div>
    </div>
    `,

});