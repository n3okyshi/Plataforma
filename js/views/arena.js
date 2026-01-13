views.extend({
    renderArena: function (questao, indiceAtual, totalQuestoes) {
        const porcentagem = ((indiceAtual) / totalQuestoes) * 100;

        // Mistura as opções
        let opcoesMisturadas = questao.opcoes.map((texto, index) => ({ texto: texto, idOriginal: index }));
        opcoesMisturadas.sort(() => Math.random() - 0.5);

        return `
            <div class="animate-fade-in min-h-screen flex flex-col max-w-3xl mx-auto px-6 py-6 relative">
                
                <canvas id="confetti-canvas" class="fixed inset-0 pointer-events-none z-50"></canvas>

                <div class="flex items-center gap-4 mb-8">
                    
                    <button onclick="app.back()" 
                            class="w-12 h-12 glass-child rounded-2xl flex items-center justify-center text-gray-500 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition-all shadow-sm shrink-0">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                    
                    <div class="flex-1 glass-child h-6 rounded-full overflow-hidden p-1 relative">
                        <div class="absolute inset-0 bg-gray-200/50 dark:bg-gray-700/50"></div>
                        
                        <div class="h-full rounded-full bg-gradient-to-r from-green-400 to-brand-green transition-all duration-500 shadow-[0_0_15px_rgba(74,222,128,0.6)] relative overflow-hidden" 
                             style="width: ${porcentagem < 5 ? 5 : porcentagem}%">
                             <div class="absolute inset-0 bg-white/30 w-full h-full animate-pulse"></div>
                             
                             <div class="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                        </div>
                    </div>
                </div>

                <div class="flex-1 flex flex-col justify-center pb-10">
                    
                    <div class="glass-panel p-8 md:p-10 rounded-[2rem] mb-10 text-center relative shadow-2xl border border-white/40">
                         <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-white/40 dark:bg-white/10 rounded-b-xl"></div>
                        
                        <h2 class="text-2xl md:text-3xl font-black text-gray-800 dark:text-white leading-tight drop-shadow-sm">
                            ${questao.pergunta}
                        </h2>
                    </div>

                    <div id="options-grid" class="grid grid-cols-1 md:grid-cols-2 gap-5">
                        ${opcoesMisturadas.map((opcao, i) => `
                            <button onclick="app.handleArenaAnswer(this, ${opcao.idOriginal})" 
                                class="option-btn group relative glass-child bg-white/40 dark:bg-black/20 
                                       border-b-[6px] border-black/5 dark:border-white/5 
                                       hover:bg-white/60 dark:hover:bg-white/10 hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:-translate-y-1
                                       active:border-b-0 active:translate-y-[6px] active:brightness-90
                                       rounded-2xl p-6 transition-all duration-150 w-full text-left flex items-center gap-5 shadow-lg">
                                
                                <div class="w-12 h-12 rounded-xl bg-white/50 dark:bg-white/10 text-gray-500 dark:text-gray-300 font-black flex items-center justify-center border border-white/20 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors text-lg shrink-0">
                                    <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                                </div>

                                <span class="text-lg md:text-xl font-bold text-gray-700 dark:text-gray-100 leading-tight">
                                    ${opcao.texto}
                                </span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
});