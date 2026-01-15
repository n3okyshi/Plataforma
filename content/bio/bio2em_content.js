/**
 * bio2em_content.js
 * Conteúdo teórico das aulas de Biologia para o 2º ano do ensino médio.
 */

window.registrarTeoria({
    // ============================================
    // 2º ANO DO ENSINO MÉDIO
    // ============================================

    // Unidade 4: Biodiversidade na Terra
    // Vírus, bactérias, protozoários, algas e fungos
    "Vírus": `
    <div class="space-y-6">
        <p>Os vírus são seres acelulares, compostos basicamente por material genético (DNA ou RNA) envolto por uma cápsula proteica chamada <b>capsídeo</b>. Eles são parasitas intracelulares obrigatórios.</p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border-l-4 border-blue-500">
            <h4 class="font-black text-blue-700 dark:text-blue-300 mb-2">Por que são parasitas obrigatórios?</h4>
            <p class="text-sm">Os vírus não possuem metabolismo próprio (ribossomos ou enzimas para produção de energia). Para se reproduzirem, eles precisam "sequestrar" a maquinaria de uma célula viva.</p>
        </div>

        <h3 class="text-2xl font-black text-brand-green mt-8">Estrutura Viral</h3>
        <ul class="list-disc list-inside space-y-2">
            <li><b>Material Genético:</b> Pode ser DNA ou RNA (exclusividade biológica: alguns vírus possuem RNA de fita dupla).</li>
            <li><b>Capsídeo:</b> Envoltório de proteínas que protege o ácido nucleico.</li>
            <li><b>Envelope:</b> Alguns vírus (como o HIV e o Influenza) possuem uma camada externa de lipídios derivada da membrana da célula hospedeira.</li>
        </ul>

        <h3 class="text-2xl font-black text-brand-green mt-8">Ciclos de Replicação</h3>
        <div class="grid md:grid-cols-2 gap-4">
            <div class="p-4 glass-child rounded-xl border border-gray-200 dark:border-gray-700">
                <h5 class="font-bold text-red-500 mb-2">Ciclo Lítico</h5>
                <p class="text-sm">O vírus invade a célula, se multiplica rapidamente e causa a <b>lise</b> (rompimento) da célula hospedeira para liberar novos vírus.</p>
            </div>
            <div class="p-4 glass-child rounded-xl border border-gray-200 dark:border-gray-700">
                <h5 class="font-bold text-blue-500 mb-2">Ciclo Lisogênico</h5>
                <p class="text-sm">O material genético viral se integra ao DNA da célula e permanece "adormecido", sendo replicado toda vez que a célula se divide.</p>
            </div>
        </div>
    </div>`,

});
