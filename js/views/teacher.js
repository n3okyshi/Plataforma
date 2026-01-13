views.extend({
    renderTeacherDashboard: function (alunos) {
        return `
        <div class="p-4 md:p-8 w-full max-w-6xl mx-auto animate-fade-in pb-24">
            
            <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <h2 class="text-3xl font-black text-brand-text dark:text-white flex items-center gap-3">
                        <i class="fas fa-chalkboard-teacher text-brand-blue"></i> Painel do Professor
                    </h2>
                    <p class="text-gray-500 dark:text-gray-400">Acompanhamento pedagógico em tempo real</p>
                </div>

                <div class="flex gap-3 bg-white/50 dark:bg-black/20 p-2 rounded-xl backdrop-blur-sm border border-white/20">
                    <select id="filter-turma" onchange="teacher.applyFilters()" class="bg-transparent font-bold text-gray-700 dark:text-gray-200 outline-none cursor-pointer">
                        <option value="Todas">Todas as Turmas</option>
                        <option value="6º A">6º Ano A</option>
                        <option value="6º B">6º Ano B</option>
                        <option value="7º A">7º Ano A</option>
                    </select>
                    <div class="w-px bg-gray-300 dark:bg-gray-600"></div>
                    <select id="filter-disciplina" onchange="teacher.applyFilters()" class="bg-transparent font-bold text-brand-blue outline-none cursor-pointer">
                        <option value="Matemática">Matemática</option>
                        <option value="História">História</option>
                        <option value="Ciências">Ciências</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="glass-panel p-6 rounded-3xl flex items-center gap-4 relative overflow-hidden group">
                    <div class="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                        <i class="fas fa-users"></i>
                    </div>
                    <div>
                        <p class="text-sm font-bold text-gray-400 uppercase">Total de Alunos</p>
                        <p id="stat-alunos" class="text-3xl font-black text-gray-700 dark:text-white">0</p>
                    </div>
                </div>

                <div class="glass-panel p-6 rounded-3xl flex items-center gap-4 relative overflow-hidden group">
                    <div class="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div>
                        <p class="text-sm font-bold text-gray-400 uppercase">Média da Turma</p>
                        <p id="stat-media" class="text-3xl font-black text-gray-700 dark:text-white">0.0</p>
                    </div>
                </div>

                <div class="glass-panel p-6 rounded-3xl flex items-center gap-4 relative overflow-hidden group">
                    <div class="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <div>
                        <p class="text-sm font-bold text-gray-400 uppercase">Engajamento (XP)</p>
                        <p class="text-3xl font-black text-gray-700 dark:text-white">Alta</p>
                    </div>
                </div>
            </div>

            <div class="glass-panel rounded-3xl overflow-hidden shadow-lg">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-black/5 dark:bg-white/5 border-b border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">
                                <th class="p-6 font-bold">Aluno</th>
                                <th class="p-6 font-bold">Turma</th>
                                <th class="p-6 font-bold">Nível / XP</th>
                                <th class="p-6 font-bold text-right">Nota Atual</th>
                                <th class="p-6 font-bold text-center">Ações</th>
                            </tr>
                        </thead>
                        <tbody id="teacher-table-body" class="text-gray-700 dark:text-gray-200">
                            ${this._generateStudentRows(alunos, 'Matemática')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `;
    },

    // Helper para gerar as linhas da tabela
    _generateStudentRows: function (lista, disciplina) {
        if (lista.length === 0) {
            return `<tr><td colspan="5" class="p-8 text-center text-gray-400">Nenhum aluno encontrado nesta turma.</td></tr>`;
        }

        return lista.map(aluno => {
            const nota = aluno.notas[disciplina] || 0;
            const corNota = nota >= 7 ? 'text-green-500' : (nota >= 5 ? 'text-yellow-500' : 'text-red-500');

            return `
            <tr class="border-b border-gray-100 dark:border-gray-700 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <td class="p-4 px-6">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                            ${aluno.nome.substring(0, 2).toUpperCase()}
                        </div>
                        <span class="font-bold text-lg">${aluno.nome}</span>
                    </div>
                </td>
                <td class="p-4 px-6 font-semibold text-gray-500">${aluno.turma}</td>
                <td class="p-4 px-6">
                    <div class="flex flex-col">
                        <span class="font-bold text-xs uppercase text-brand-purple">Nível ${aluno.nivel}</span>
                        <span class="text-xs text-gray-400">${aluno.xp} XP</span>
                    </div>
                </td>
                <td class="p-4 px-6 text-right">
                    <span class="text-2xl font-black ${corNota}">${nota.toFixed(1)}</span>
                </td>
                <td class="p-4 px-6 text-center">
                    <button class="text-gray-400 hover:text-blue-500 p-2 rounded-lg transition-colors" title="Ver Detalhes">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="text-gray-400 hover:text-green-500 p-2 rounded-lg transition-colors" title="Enviar Mensagem">
                        <i class="fas fa-comment-dots"></i>
                    </button>
                </td>
            </tr>
            `;
        }).join('');
    }
});