views.extend({
    renderProfile: function (user) {
        const anoAtualSistema = new Date().getFullYear();

        const dados = user || { name: "", fullName: "", matricula: "", turma: "", serie: "", email: "", photoURL: null };
        const safeName = views.escapeHTML(dados.name || "Visitante");
        const safeFullName = views.escapeHTML(dados.fullName || dados.name || '');
        const safeEmail = views.escapeHTML(dados.email || "Sem email vinculado");
        const safeMatricula = views.escapeHTML(dados.matricula || '');
        const safeTurma = views.escapeHTML(dados.turma || '');
        const safePhoto = dados.photoURL ? views.escapeHTML(dados.photoURL) : null;

        // O <select> é gerado da base canônica (R25): 16 códigos EI01..EM03
        // agrupados por etapa. "Professor" não é série escolhível (falha 10).
        const niveis = window.NIVEIS || (typeof NIVEIS !== 'undefined' ? NIVEIS : {});
        const codigoDaSerie = typeof codigoDoNivel === 'function' ? codigoDoNivel(dados.serie) : null;
        const nivelAtual = codigoDaSerie || 'EF06'; // visitante/novo usuário
        const etapas = [
            { sigla: 'EI', rotulo: 'Educação Infantil' },
            { sigla: 'EF', rotulo: 'Ensino Fundamental' },
            { sigla: 'EM', rotulo: 'Ensino Médio' },
        ];
        const opcoesSerie = etapas.map((etapa) => {
            const codigos = Object.keys(niveis).filter((codigo) => niveis[codigo].etapa === etapa.sigla);
            if (codigos.length === 0) return '';
            return `
                                <optgroup label="${etapa.rotulo}">
                                    ${codigos.map((codigo) => `
                                    <option value="${codigo}" ${codigo === nivelAtual ? 'selected' : ''}
                                            class="text-gray-800 bg-white dark:bg-gray-900 dark:text-white py-2">
                                        ${views.escapeHTML(niveis[codigo].rotulo)}
                                    </option>
                                `).join('')}
                                </optgroup>
                            `;
        }).join('');

        return `
            <div class="min-h-screen p-6 pb-24 animate-fade-in max-w-2xl mx-auto">
                
                <div class="flex items-center gap-4 mb-8">
                    <button onclick="app.back()" class="w-12 h-12 glass-child rounded-2xl flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-all shadow-sm">
                        <i class="fas fa-arrow-left text-lg"></i>
                    </button>
                    <h2 class="text-2xl font-black text-gray-800 dark:text-white drop-shadow-sm">Meu Perfil</h2>
                </div>

                <div class="glass-panel rounded-3xl p-8 shadow-xl border border-white/40 mb-8 flex flex-col items-center text-center">
                    <div class="w-28 h-28 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center text-5xl text-white shadow-lg mb-4 border-4 border-white/50 dark:border-white/20 ring-4 ring-black/5 relative overflow-hidden">
                        ${safePhoto ? `<img src="${safePhoto}" class="w-full h-full object-cover">` : '<i class="fas fa-user"></i>'}
                    </div>
                    
                    <h3 class="text-2xl font-extrabold text-gray-800 dark:text-white mb-1">${safeName}</h3>
                    <p class="text-gray-500 dark:text-gray-400 text-sm font-bold mb-6">${safeEmail}</p>
                    
                    <div class="flex flex-wrap justify-center gap-3">
                        <span class="px-4 py-2 glass-child rounded-xl text-yellow-600 dark:text-yellow-400 text-xs font-black uppercase tracking-wide flex items-center gap-2">
                            <i class="fas fa-bolt text-lg"></i> ${parseInt(dados.xp, 10) || 0} XP
                        </span>
                        <span class="px-4 py-2 glass-child rounded-xl text-green-600 dark:text-green-400 text-xs font-black uppercase tracking-wide flex items-center gap-2">
                            <i class="fas fa-check-circle text-lg"></i> ${dados.completedLessons ? dados.completedLessons.length : 0} Lições
                        </span>
                    </div>
                </div>

                <!-- SEÇÃO DE BADGES -->
                <div class="glass-panel rounded-3xl p-8 shadow-xl border border-white/40 mb-8">
                    <h3 class="text-xl font-black text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                        <i class="fas fa-award text-2xl text-yellow-500"></i>
                        Suas Conquistas
                    </h3>
                    
                    ${(() => {
                        const badges_list = window.badges?.getUnlockedBadges(dados) || [];
                        
                        if (badges_list.length === 0) {
                            return `
                                <div class="text-center py-8">
                                    <p class="text-gray-500 dark:text-gray-400 font-bold mb-2">Nenhum badge desbloqueado ainda</p>
                                    <p class="text-xs text-gray-400 dark:text-gray-500">Complete lições e desafios para ganhar badges!</p>
                                </div>
                            `;
                        }
                        
                        return `
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                ${badges_list.map(badge => `
                                    <div class="glass-child rounded-2xl p-4 flex flex-col items-center text-center group hover:scale-105 transition-transform cursor-pointer" title="${views.escapeHTML(badge.description)}">
                                        <div class="w-12 h-12 ${badge.color} rounded-full flex items-center justify-center text-white text-2xl mb-2 shadow-lg">
                                            <i class="fas ${badge.icon}"></i>
                                        </div>
                                        <h4 class="text-xs font-bold text-gray-800 dark:text-white leading-tight">${views.escapeHTML(badge.name)}</h4>
                                        <p class="text-[9px] text-gray-500 dark:text-gray-400 mt-1 opacity-70">${views.escapeHTML(badge.type)}</p>
                                    </div>
                                `).join('')}
                            </div>
                        `;
                    })()}
                </div>

                <form onsubmit="event.preventDefault(); app.saveProfile(this)" class="glass-panel rounded-3xl p-8 shadow-lg border border-white/40 space-y-6">
                    
                    <h3 class="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest text-xs border-b border-gray-200 dark:border-white/10 pb-2 mb-2">
                        <i class="fas fa-id-card mr-2"></i> Dados Escolares
                    </h3>

                    <div>
                        <label class="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2 ml-1">Nome Completo</label>
                        <input type="text" name="fullName" value="${safeFullName}" 
                               class="glass-child w-full rounded-2xl p-4 font-bold text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue border-transparent transition-all h-14">
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2 ml-1">Matrícula</label>
                            <input type="text" name="matricula" value="${safeMatricula}" placeholder="00000"
                                   class="glass-child w-full rounded-2xl p-4 font-bold text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue border-transparent transition-all h-14">
                            <p class="text-[11px] text-gray-400 dark:text-gray-500 mt-2 ml-1 leading-snug">
                                Guardamos só o hash (SHA-256): não é possível exibi-la de volta.
                            </p>
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2 ml-1">Turma</label>
                            <input type="text" name="turma" value="${safeTurma}" placeholder="Ex: 3B"
                                   class="glass-child w-full rounded-2xl p-4 font-bold text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-blue border-transparent transition-all h-14">
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2 ml-1">Série Atual</label>
                        <div class="relative">
                            <select id="input-serie" 
                                    name="serie" 
                                    onchange="app.atualizarPerfil({ serie: this.value })"
                                    class="glass-child w-full rounded-2xl p-4 pr-12 font-bold text-gray-700 dark:text-white 
                                           outline-none focus:ring-2 focus:ring-brand-blue border border-transparent 
                                           transition-all appearance-none h-16 cursor-pointer text-lg shadow-sm">
                                
                                ${opcoesSerie}
                            </select>
                            
                            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-bold text-gray-400 dark:text-gray-500 mb-2 ml-1">Ano Letivo (Automático)</label>
                        <div class="w-full bg-black/5 dark:bg-white/5 border border-transparent rounded-2xl p-4 font-bold text-gray-500 dark:text-gray-400 flex justify-between items-center cursor-not-allowed h-14">
                            <span>${anoAtualSistema}</span>
                            <i class="fas fa-lock text-xs opacity-50"></i>
                        </div>
                        <input type="hidden" name="schoolYear" value="${anoAtualSistema}">
                    </div>

                    <div class="pt-4">
                        <button type="submit" 
                            class="w-full bg-brand-green hover:bg-green-600 text-white font-extrabold py-4 rounded-2xl shadow-[0_4px_0_#46a302] active:shadow-none active:translate-y-[4px] transition-all uppercase tracking-wider text-sm">
                            <i class="fas fa-save mr-2"></i> Salvar Alterações
                        </button>
                    </div>
                </form>

                <button onclick="app.logout()" 
                        class="w-full mt-8 glass-child hover:bg-red-500/10 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 border-red-200 dark:border-red-900/30 font-bold uppercase text-xs tracking-widest p-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                    <i class="fas fa-sign-out-alt"></i> 
                    Sair da Conta
                </button>
            </div>
        `;
    }
});