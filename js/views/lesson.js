views.extend({
    renderLesson: function (titulo, conteudoHTML) {

        // Placeholder estilizado com Glassmorphism
        const htmlConteudo = conteudoHTML || `
            <div class="flex flex-col items-center justify-center py-10 text-center opacity-80">
                <div class="w-24 h-24 bg-yellow-100 dark:bg-yellow-500/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-yellow-50 dark:ring-yellow-900/20">
                    <i class="fas fa-hard-hat text-5xl text-yellow-500"></i>
                </div>
                <h3 class="text-2xl font-black text-gray-700 dark:text-white mb-2">Em Construção</h3>
                <p class="text-gray-500 dark:text-gray-400 font-medium">O conteúdo "${titulo}" será adicionado em breve.</p>
            </div>
        `;

        return `
            <div class="animate-fade-in min-h-screen pb-24 pt-4 px-4 max-w-5xl mx-auto">
                
                <div class="flex items-center gap-4 mb-8 sticky">
                    
                    <button onclick="app.back()" 
                        class="w-12 h-12 glass-child rounded-2xl flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-all shadow-sm backdrop-blur-md">
                        <i class="fas fa-arrow-left text-lg"></i>
                    </button>
                    
                    <div class="flex-1 glass-child px-5 py-3 rounded-2xl flex items-center shadow-sm backdrop-blur-md">
                        <h2 class="text-lg md:text-xl font-black text-gray-800 dark:text-white leading-tight truncate">
                            ${titulo}
                        </h2>
                    </div>

                    <button onclick="audioManager.play('success'); app.finishLesson('${titulo}')" 
                        class="bg-brand-green hover:bg-green-600 text-white px-4 md:px-6 py-3 rounded-2xl font-extrabold shadow-lg border-b-[4px] border-green-700 active:border-b-0 active:translate-y-[4px] active:shadow-none transition-all text-sm uppercase tracking-wider flex items-center gap-2 shrink-0">
                        <span class="hidden md:inline">Concluir</span> <i class="fas fa-check"></i>
                    </button>
                </div>

                <div class="glass-panel rounded-[2rem] p-6 md:p-10 shadow-2xl border border-white/40 leading-relaxed text-lg text-gray-800 dark:text-gray-200 lesson-content relative overflow-hidden">
                    
                    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 dark:via-white/10 to-transparent opacity-50"></div>
                    
                    ${htmlConteudo}

                </div>

                <div class="text-center mt-8 mb-4">
                    <p class="text-gray-400 dark:text-gray-500 text-xs font-black uppercase tracking-[0.2em] opacity-70">
                        <i class="fas fa-arrow-down mr-1"></i> Fim da Lição <i class="fas fa-arrow-down ml-1"></i>
                    </p>
                </div>
            </div>
        `;
    }
});