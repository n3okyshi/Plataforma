/**
 * ***_CONTENT.JS
 * Conteúdo teórico das aulas de ***.
 */

window.registrarTeoria({
    // IDEIAS

    "Resumo: 1º Bimestre": `
        <h3 class="text-xl font-bold text-brand-blue mb-4">O que vimos até agora?</h3>
        <p class="mb-4">Neste bimestre, focamos nas operações essenciais...</p>

        <div class="lesson-content">
            <h3>📂 Material de Apoio</h3>
            <p>Preparei um PDF com o resumo de tudo que caiu na prova. Baixem e imprimam se preferirem.</p>

            <div class="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-card flex items-center gap-4 my-6">
                
                <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-500 text-2xl shrink-0">
                    <i class="fas fa-file-pdf"></i>
                </div>

                <div class="flex-1">
                    <h4 class="m-0 text-gray-700 dark:text-white !text-lg">Resumo_Matemática_B1.pdf</h4>
                    <p class="!m-0 text-xs text-gray-400 uppercase font-bold">PDF • 2.4 MB</p>
                </div>

                <a href="SEU_LINK_DO_GOOGLE_DRIVE_AQUI" target="_blank" 
                   class="btn-game bg-[#1cb0f6] hover:bg-[#1899d6] text-white font-bold py-2 px-6 rounded-xl border-[#1899d6] flex items-center gap-2 no-underline">
                   <i class="fas fa-download"></i> <span class="hidden md:inline">Baixar</span>
                </a>
            </div>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r">
            <h4 class="font-bold text-yellow-700"><i class="fas fa-file-pdf"></i> Material de Apoio</h4>
            <p class="text-sm text-yellow-600 mb-2">Baixe o PDF com o resumo completo e mapas mentais.</p>
            <a href="https://seusite.com/arquivos/resumo_6ano_bim1.pdf" target="_blank" 
               class="inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-yellow-600 transition">
               Baixar PDF
            </a>
        </div>

        <h3>📝 O que estudar?</h3>
            <ul>
                <li>Equações de 1º Grau</li>
                <li>Regra de Três Simples</li>
                <li>Interpretação de Gráficos</li>
            </ul>
        </div>

        <div class="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lUwgX7XUg4w" frameborder="0" allowfullscreen></iframe>
        </div>

        QUESTÕES DENTRO DO CONTENT tA FALTANDO APLICAR O TEMA NESSE ROLE, TEM QUE SER COM UMA CLASSE NESSE INPUT

        <div class="my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 flex flex-col items-center text-center gap-4">
    
    <p class="font-bold text-lg text-gray-600 dark:text-gray-300 m-0">
        <i class="fas fa-question-circle text-brand-blue mr-2"></i>
        Desafio Rápido: Quanto é 2 + 2?
    </p>

    <div class="flex items-center gap-2">
        <input type="text" id="q1" 
               class="border-2 border-gray-300 dark:border-gray-600 rounded-xl p-3 w-32 text-center font-black text-xl text-gray-700 dark:text-black outline-none focus:border-brand-blue transition-all" 
               placeholder="?" autocomplete="off">
        
        <button onclick="app.verificarAtividade('q1', '4')" 
                class="bg-brand-green hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-[0_4px_0_#46a302] active:shadow-none active:translate-y-[4px] transition-all uppercase tracking-wide text-sm">
            Verificar
        </button>
    </div>

</div>
    `,

    "Lista de Exercícios 1": `
        <h2>Hora de Praticar</h2>
        <p>Resolva os exercícios abaixo. As respostas estão no final da página.</p>
        <div class="my-6 p-4 bg-white border rounded-xl shadow-sm">
            <p class="font-bold">Questão 1:</p>
            <p>Calcule o valor de: $$ \frac{2}{3} + \frac{1}{5} $$</p>
            
            <details class="mt-4 cursor-pointer">
                <summary class="text-blue-500 font-bold">Ver Resposta</summary>
                <p class="mt-2 text-green-600 font-bold">Resposta: 13/15</p>
            </details>
        </div>
    `,


    // =================================================================================
    // ENSINO FUNDAMENTAL - ANOS INICIAIS (1º ao 5º)
    // =================================================================================

    // ============================================
    // 1º ANO
    // ============================================

    // ==================================
    // MÓDULO 1: 
    // ==================================

    // "título":`conteudo`,

    // ============================================
    // 2º ANO
    // ============================================


    // ============================================
    // 3º ANO
    // ============================================


    // ============================================
    // 4º ANO
    // ============================================


    // ============================================
    // 5º ANO
    // ============================================

    // =================================================================================
    // ENSINO FUNDAMENTAL - ANOS FINAIS (6º ao 9º)
    // =================================================================================

    // ============================================
    // 6º ANO
    // ============================================

    // ============================================
    // 7º ANO
    // ============================================


    // ============================================
    // 8º ANO
    // ============================================


    // ============================================
    // 9º ANO
    // ============================================


    // =================================================================================
    // ENSINO MÉDIO - 1º ao 3º ano
    // =================================================================================

    // ============================================
    // 1º ANO
    // ============================================


    // ============================================
    // 2º ANO
    // ============================================


    // ============================================
    // 3º ANO
    // ============================================


});