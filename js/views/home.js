views.extend({
    renderHome: function (disciplinasDisponiveis, filtroAtivo = "Todos", user) {
        const categorias = ["Todos", "Ciências Exatas", "Ciências Naturais", "Linguagens", "Ciências Humanas", "Universidade",];

        const u = user || { name: "Visitante", photoURL: null, serie: "Geral", xp: 0, completedLessons: [] };

        let nivelLabel = "Nível Geral";
        if (u.serie && (u.serie.includes("EF") || u.serie.includes("Fundamental"))) {
            nivelLabel = "Ensino Fundamental";
        } else if (u.serie && (u.serie.includes("EM") || u.serie.includes("Médio"))) {
            nivelLabel = "Ensino Médio";
        } else if (u.serie && (u.serie.includes("Superior") || u.serie.includes("Faculdade"))) {
            nivelLabel = "Ensino Superior";
        }

        let html = `
            <div style="height: 15px"></div> <div class="glass-panel rounded-3xl p-6 w-full mb-8 flex flex-col md:flex-row items-center md:items-start gap-6 animate-fade-in mx-4 md:mx-auto max-w-5xl shadow-xl border border-white/40">
                
                <div class="w-24 h-24 rounded-full bg-gradient-to-br from-[#58cc02]/80 to-[#46a302]/80 dark:from-[#58cc02]/40 dark:to-[#46a302]/50 backdrop-blur-md border-4 border-white/50 dark:border-white/20 shadow-lg flex items-center justify-center overflow-hidden shrink-0 relative ring-4 ring-black/5">
                    ${u.photoURL
                ? `<img src="${u.photoURL}" class="w-full h-full object-cover" alt="Foto">`
                : `<i class="fas fa-user text-4xl text-white drop-shadow-md"></i>`
            }
                </div>

                <div class="flex-1 text-center md:text-left">
                    <h2 class="text-3xl font-extrabold text-gray-800 dark:text-white drop-shadow-sm mb-1">Olá, ${u.name}!</h2>
                    <p class="text-brand-blue dark:text-blue-300 font-bold text-sm uppercase tracking-wide mb-3">${u.serie}</p>
                    
                    <div class="flex items-center justify-center md:justify-start gap-4 text-xs font-bold text-gray-500 dark:text-gray-300">
                        <span class="flex items-center gap-2 bg-white/40 dark:bg-black/20 px-3 py-1 rounded-lg border border-white/20">
                            <i class="fas fa-check-circle text-brand-green text-sm"></i> 
                            ${u.completedLessons ? u.completedLessons.length : 0} Lições
                        </span>
                        <span class="flex items-center gap-2 bg-white/40 dark:bg-black/20 px-3 py-1 rounded-lg border border-white/20">
                            <i class="fas fa-bolt text-brand-yellow text-sm"></i> 
                            ${u.xp} XP
                        </span>
                    </div>
                </div>

                <div class="glass-child px-5 py-3 rounded-2xl flex items-center shadow-sm">
                    <i class="fas fa-graduation-cap text-gray-400 dark:text-gray-300 mr-3 text-xl"></i>
                    <p class="text-gray-600 dark:text-gray-200 font-bold text-sm uppercase tracking-wide">
                        ${nivelLabel}
                    </p>
                </div>
            </div>

            <div class="p-6 max-w-5xl mx-auto animate-fade-in pb-20">
                <h2 class="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white mb-6 drop-shadow-sm flex items-center gap-2">
                    <i class="fas fa-map-signs text-brand-blue"></i> O que vamos estudar?
                </h2>
                
                <div class="flex gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar mask-gradient">
        `;

        categorias.forEach((cat) => {
            const isActive = cat === filtroAtivo;
            // Botão Ativo: Cor sólida vibrante
            const activeClass = "bg-brand-blue text-white shadow-lg scale-105 ring-2 ring-blue-300 dark:ring-blue-900";
            // Botão Inativo: Vidro Fosco
            const inactiveClass = "glass-child text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/10";

            html += `
                <button onclick="app.setFilter('${cat}')" 
                    class="whitespace-nowrap px-6 py-2.5 rounded-2xl font-bold text-sm transition-all duration-200 ${isActive ? activeClass : inactiveClass}">
                    ${cat}
                </button>
            `;
        });

        html += `</div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">`;

        let encontrou = false;
        for (const disc in disciplinasDisponiveis) {
            const config = SUBJECT_CONFIG[disc] || {
                category: "Outros",
                icon: "fa-book",
                theme: {
                    main: "bg-gray-500",
                    text: "text-gray-500",
                    border: "border-gray-500",
                    borderDark: "border-gray-700",
                },
            };

            if (filtroAtivo !== "Todos" && config.category !== filtroAtivo) continue;

            encontrou = true;
            html += `
                <div onclick="audioManager.play('success'); app.navigate('mode_select', '${disc}')" 
                     class="group glass-child relative overflow-hidden rounded-3xl border-b-4 ${config.theme.border} hover:${config.theme.borderDark} active:border-b-0 active:translate-y-1 transition-all cursor-pointer shadow-lg hover:shadow-xl p-6 flex flex-col items-center gap-5 h-full justify-center">
                    
                    <div class="absolute inset-0 bg-white/20 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div class="relative w-20 h-20 rounded-2xl ${config.theme.main} flex items-center justify-center text-white text-3xl shadow-inner-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ring-4 ring-white/30 dark:ring-black/20">
                        <i class="fas ${config.icon} drop-shadow-md"></i>
                    </div>
                    
                    <div class="text-center relative z-10">
                        <h3 class="font-extrabold text-xl text-gray-800 dark:text-white tracking-tight">${disc}</h3>
                        <p class="text-[10px] text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-widest font-bold opacity-80">${config.category}</p>
                    </div>
                </div>
            `;
        }

        if (!encontrou) {
            html += `
            <div class="col-span-full glass-panel rounded-3xl p-10 text-center flex flex-col items-center gap-4">
                <i class="fas fa-search text-4xl text-gray-300"></i>
                <p class="text-gray-500 dark:text-gray-400 font-bold">Nenhuma disciplina encontrada nesta categoria.</p>
                <button onclick="app.setFilter('Todos')" class="text-brand-blue hover:underline font-bold text-sm">Limpar Filtros</button>
            </div>`;
        }

        html += `</div></div>`;
        return html;
    },

    // ========================================================================
    // 3. SELETOR DE MODO (CORRIGIDO: NÃO SOBRESCREVE A MATÉRIA)
    // ========================================================================
    renderModeSelector: function (disciplina) {
        // Configuração visual (mantida)
        const config = (typeof SUBJECT_CONFIG !== 'undefined' && SUBJECT_CONFIG[disciplina])
            ? SUBJECT_CONFIG[disciplina]
            : {
                category: "Geral",
                icon: "fa-book",
                theme: { main: "bg-gray-600", border: "border-gray-700", light: "bg-gray-100", text: "text-gray-600", borderDark: "border-gray-800" }
            };

        return `
            <div class="min-h-screen flex flex-col items-center justify-center p-6 animate-pop-in relative">
                
                <button onclick="app.back()" class="absolute top-6 left-6 w-12 h-12 glass-child rounded-2xl flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-all shadow-sm z-10">
                    <i class="fas fa-arrow-left text-lg"></i>
                </button>

                <div class="glass-panel rounded-3xl p-8 mb-10 text-center w-full max-w-lg shadow-xl border border-white/40">
                    <div class="w-24 h-24 mx-auto ${config.theme.main} rounded-2xl flex items-center justify-center text-white text-5xl shadow-lg mb-4 ring-4 ring-white/30 dark:ring-black/10">
                        <i class="fas ${config.icon} drop-shadow-md"></i>
                    </div>
                    <h2 class="text-3xl font-black text-gray-800 dark:text-white drop-shadow-sm mb-1">${disciplina}</h2>
                    <p class="text-gray-500 dark:text-gray-300 font-bold uppercase tracking-wide text-xs">Selecione seu caminho</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                    
                    <div onclick="app.setStudyMode('teoria')" 
                         class="cursor-pointer glass-child p-8 rounded-3xl border-b-[6px] border-blue-400/30 hover:border-blue-500 active:border-b-0 active:translate-y-[6px] transition-all duration-200 shadow-lg hover:shadow-xl group flex flex-col items-center text-center relative overflow-hidden">
                        
                        <div class="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div class="w-24 h-24 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-blue-50 dark:ring-blue-900/20">
                            <i class="fas fa-book-open text-4xl text-blue-500 dark:text-blue-400"></i>
                        </div>
                        <h3 class="text-2xl font-black text-gray-800 dark:text-white mb-3">Trilha de Teoria</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                            Aprenda passo a passo com aulas interativas.
                        </p>
                    </div>

                    <div onclick="app.setStudyMode('arena')" 
                         class="cursor-pointer glass-child p-8 rounded-3xl border-b-[6px] border-red-400/30 hover:border-red-500 active:border-b-0 active:translate-y-[6px] transition-all duration-200 shadow-lg hover:shadow-xl group flex flex-col items-center text-center relative overflow-hidden">
                        
                        <div class="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div class="w-24 h-24 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-red-50 dark:ring-red-900/20">
                            <i class="fas fa-trophy text-4xl text-red-500 dark:text-red-400"></i>
                        </div>
                        <h3 class="text-2xl font-black text-gray-800 dark:text-white mb-3">Arena de Desafios</h3>
                        <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                            Teste seus conhecimentos e suba no ranking.
                        </p>
                    </div>

                </div>
            </div>
        `;
    },
});