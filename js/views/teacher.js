/**
 * JS/VIEWS/TEACHER.JS - v4.0 (Refatorado)
 * Renderizador do Painel Administrativo com Filtros Expandidos
 */
views.extend({
    renderTeacherDashboard: function (alunos) {
        // Cálculo da média real da lista atual para o card
        const mediaGeral = alunos && alunos.length > 0
            ? (alunos.reduce((acc, a) => acc + (Object.values(a.notas)[0] || 0), 0) / alunos.length).toFixed(1)
            : "0.0";

        // Gerador de Opções de Turmas (6º ao 9º, A ao D)
        const anos = [6, 7, 8, 9];
        const letras = ['A', 'B', 'C', 'D'];
        let optionsTurmas = `<option value="Todas">Todas as Turmas</option>`;

        anos.forEach(ano => {
            letras.forEach(letra => {
                const turma = `${ano}º ${letra}`;
                optionsTurmas += `<option value="${turma}">${turma} Ano ${letra}</option>`;
            });
        });

        return `
        <div class="p-4 md:p-8 w-full max-w-6xl mx-auto animate-fade-in pb-24 relative">
            
            <button onclick="app.back()" 
                 class="absolute left-4 top-4 md:left-8 md:top-8 w-12 h-12 glass-child rounded-2xl flex items-center justify-center text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-all shadow-sm z-10 active:scale-90">
                <i class="fas fa-arrow-left text-lg"></i>
            </button>

            <div class="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 mt-12 md:mt-0">
                <div class="text-center md:text-left">
                    <h2 class="text-3xl md:text-4xl font-black text-brand-text dark:text-white flex items-center justify-center md:justify-start gap-3">
                        <i class="fas fa-chalkboard-teacher text-brand-blue drop-shadow-sm"></i> Painel do Professor
                    </h2>
                    <p class="text-gray-500 dark:text-gray-400 font-medium">Acompanhamento pedagógico em tempo real</p>
                </div>

                <div class="flex gap-3 bg-white/60 dark:bg-black/40 p-2.5 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg">
                    <select id="filter-turma" onchange="audioManager.play('click'); teacher.applyFilters() teacher.carregarDadosReais(this.value)" class="bg-transparent font-bold text-gray-700 dark:text-gray-200 outline-none cursor-pointer text-sm">
                        ${optionsTurmas}
                    </select>
                    <div class="w-px bg-gray-300 dark:bg-gray-600"></div>
                    <select id="filter-disciplina" onchange="audioManager.play('click'); teacher.applyFilters()" class="bg-transparent font-bold text-brand-blue outline-none cursor-pointer text-sm">
                        <option value="Artes">Artes</option>
                        <option value="Astronomia">Astronomia</option>
                        <option value="Biologia">Biologia</option>
                        <option value="Ciências Naturais">Ciências Naturais</option>
                        <option value="Educação Física">Educação Física</option>
                        <option value="Filosofia">Filosofia</option>
                        <option value="Física">Física</option>
                        <option value="Geografia">Geografia</option>
                        <option value="Geologia">Geologia</option>
                        <option value="História">História</option>
                        <option value="Lingua Estrangeira">Lingua Estrangeira</option>
                        <option value="Língua Portuguesa">Língua Portuguesa</option>
                        <option value="Matemática">Matemática</option>
                        <option value="Química">Química</option>
                        <option value="Redação">Redação</option>
                        <option value="Sociologia">Sociologia</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div class="glass-panel p-6 rounded-[2rem] flex items-center gap-5 relative overflow-hidden group border border-white/40 shadow-xl">
                    <div class="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                        <i class="fas fa-users"></i>
                    </div>
                    <div>
                        <p class="text-xs font-black text-gray-400 uppercase tracking-widest">Total de Alunos</p>
                        <p id="stat-alunos" class="text-3xl font-black text-gray-700 dark:text-white">${alunos ? alunos.length : 0}</p>
                    </div>
                </div>

                <div class="glass-panel p-6 rounded-[2rem] flex items-center gap-5 relative overflow-hidden group border border-white/40 shadow-xl">
                    <div class="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div>
                        <p class="text-xs font-black text-gray-400 uppercase tracking-widest">Média do Filtro</p>
                        <p id="stat-media" class="text-3xl font-black text-gray-700 dark:text-white">${mediaGeral}</p>
                    </div>
                </div>

                <div class="glass-panel p-6 rounded-[2rem] flex items-center gap-5 relative overflow-hidden group border border-white/40 shadow-xl">
                    <div class="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <div>
                        <p class="text-xs font-black text-gray-400 uppercase tracking-widest">Engajamento</p>
                        <div class="flex items-center gap-2">
                             <p class="text-2xl font-black text-gray-700 dark:text-white uppercase tracking-tight">Ativo</p>
                             <span class="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="glass-panel rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/40">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-black/5 dark:bg-white/5 border-b border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest">
                                <th class="p-6 font-black">Aluno</th>
                                <th class="p-6 font-black text-center">Turma</th>
                                <th class="p-6 font-black">Progresso Geral</th>
                                <th class="p-6 font-black text-right">Nota</th>
                                <th class="p-6 font-black text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody id="teacher-table-body" class="text-gray-700 dark:text-gray-200">
                            ${this._generateStudentRows(alunos, document.getElementById('filter-disciplina')?.value || 'Matemática')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `;
    },

    _generateStudentRows: function (lista, disciplina) {
        if (!lista || lista.length === 0) {
            return `<tr><td colspan="5" class="p-12 text-center text-gray-400 font-bold">Nenhum aluno encontrado.</td></tr>`;
        }

        return lista.map(aluno => {
            // HIERARQUIA DE NOMES: Prioriza fullname, depois nome, depois fallback
            const nomeBruto = aluno.fullname || aluno.nome || "Estudante";

            // Força conversão para string para garantir que o .substring() funcione
            const nomeValido = String(nomeBruto);

            // Pega as duas primeiras letras para o Avatar
            const iniciais = nomeValido.substring(0, 2).toUpperCase();

            // Lógica de Notas e XP (mantida)
            const notasAlvo = aluno.notas || {};
            const nota = notasAlvo[disciplina] || 0;
            const corNota = nota >= 7 ? 'text-green-500' : (nota >= 5 ? 'text-yellow-500' : 'text-red-500');
            const progressPercent = Math.min(((aluno.xp || 0) % 1000) / 10, 100);

            return `
            <tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-white/40 transition-all group">
                <td class="p-4 px-6">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue to-blue-600 flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
                            ${iniciais}
                        </div>
                        <div>
                            <span class="font-black text-lg text-gray-800 dark:text-white block leading-tight">${nomeValido}</span>
                            <span class="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">LVL ${aluno.nivel || 1}</span>
                        </div>
                    </div>
                </td>
                <td class="p-4 px-6 text-center font-black text-gray-500 dark:text-gray-400 text-sm">
                    <span class="glass-child px-3 py-1 rounded-lg border border-black/5">
                        ${aluno.turma || "S/T"}
                    </span>
                </td>
                <td class="p-4 px-6">
                    <div class="flex flex-col gap-1.5 min-w-[120px]">
                        <div class="flex justify-between items-end text-[10px] font-black uppercase">
                            <span class="text-brand-purple">Progresso</span>
                            <span class="text-gray-400">${aluno.xp || 0} XP</span>
                        </div>
                        <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden p-0.5">
                            <div class="h-full bg-brand-purple rounded-full" style="width: ${progressPercent}%"></div>
                        </div>
                    </div>
                </td>
                <td class="p-4 px-6 text-right">
                    <span class="text-3xl font-black ${corNota} drop-shadow-sm">${Number(nota).toFixed(1)}</span>
                </td>
                <td class="p-4 px-6 text-center">
                    <button class="text-gray-400 hover:text-brand-blue transition-all active:scale-90 p-2">
                        <i class="fas fa-chart-line text-lg"></i>
                    </button>
                </td>
            </tr>`;
        }).join('');
    }
});