/**
 * TEACHER.JS - MÓDULO DO PROFESSOR
 * Gerencia a visão de turmas, notas e relatórios.
 */

const teacher = {
    // Dados simulados para teste (Mock Data)
    // Em produção, isso viria do Firestore: collection('users').where('classId', '==', '6A')
    mockStudents: [
        { id: 1, nome: "Alice Silva", turma: "6º A", xp: 1250, nivel: 5, notas: { "Matemática": 8.5, "História": 9.0 } },
        { id: 2, nome: "Bruno Souza", turma: "6º A", xp: 890, nivel: 3, notas: { "Matemática": 6.0, "História": 7.5 } },
        { id: 3, nome: "Carla Dias", turma: "6º B", xp: 2100, nivel: 8, notas: { "Matemática": 10.0, "História": 9.5 } },
        { id: 4, nome: "Daniel Rocha", turma: "7º A", xp: 450, nivel: 2, notas: { "Matemática": 4.5, "História": 6.0 } },
        { id: 5, nome: "Elena Martins", turma: "6º A", xp: 1500, nivel: 6, notas: { "Matemática": 7.0, "História": 8.0 } },
    ],

    state: {
        filterTurma: "Todas",
        filterDisciplina: "Matemática"
    },

    init: function () {
        // O app.js chama isso ao iniciar.
        // Vamos verificar se temos permissão AGORA.
        this.verificarPermissao();

        // E vamos deixar um "olheiro" caso o usuário mude (login/logout)
        // Isso é um Monkey Patch simples no app.navigate ou auth
        const originalAuth = auth.loadUserData;
        // (Nota: a melhor forma é o app.js chamar teacher.init() após o login, 
        // mas vamos garantir aqui)
    },

    /**
     * Verifica se o usuário atual é um Professor
     */
    verificarPermissao: function () {
        const user = app.state.userProgress;

        if (!user || !user.serie) {
            this.removeButton();
            return;
        }

        // Normaliza para minúsculas e remove espaços para evitar erros bobos
        const serieNormalizada = user.serie.toLowerCase().trim();
        const roleNormalizada = (user.role || "").toLowerCase().trim();

        // Aceita "professor", "admin", "coordenação", etc.
        const isProfessor = serieNormalizada === "professor" || roleNormalizada === "admin";

        if (isProfessor) {
            this.renderButton();
            console.log("👨‍🏫 [Teacher] Acesso liberado para:", user.nome);
        } else {
            this.removeButton();
        }
    },

    renderButton: function () {
        const headerRight = document.querySelector('header > div:last-child');

        // Evita duplicar o botão
        if (document.getElementById('btn-teacher')) return;

        const btn = document.createElement('button');
        btn.id = "btn-teacher";
        btn.className = "text-gray-400 hover:text-blue-500 transition-colors p-2 rounded-lg animate-pop-in";
        btn.innerHTML = '<i class="fas fa-chalkboard-teacher text-xl"></i>';
        btn.title = "Área do Professor";
        btn.onclick = () => this.openDashboard();

        // Insere como o primeiro ícone da direita
        if (headerRight) {
            headerRight.insertBefore(btn, headerRight.children[0]);
        }
    },

    removeButton: function () {
        const btn = document.getElementById('btn-teacher');
        if (btn) btn.remove();
    },

    openDashboard: function () {
        app.state.currentView = 'teacher_dashboard';
        const container = document.getElementById('main-container');
        container.innerHTML = views.renderTeacherDashboard(this.mockStudents);
        this.updateStats();
    },

    applyFilters: function () {
        const turmaSelect = document.getElementById('filter-turma').value;
        const disciplinaSelect = document.getElementById('filter-disciplina').value;

        this.state.filterTurma = turmaSelect;
        this.state.filterDisciplina = disciplinaSelect;

        // Filtra os dados
        let filtered = this.mockStudents;
        if (turmaSelect !== "Todas") {
            filtered = filtered.filter(s => s.turma === turmaSelect);
        }

        // Re-renderiza apenas a tabela (tbody) para performance
        const tbody = document.getElementById('teacher-table-body');
        tbody.innerHTML = views._generateStudentRows(filtered, disciplinaSelect);

        this.updateStats(filtered, disciplinaSelect);
    },

    updateStats: function (data = this.mockStudents, disciplina = this.state.filterDisciplina) {
        // Recalcula médias
        const totalAlunos = data.length;
        const mediaGeral = data.reduce((acc, curr) => acc + (curr.notas[disciplina] || 0), 0) / totalAlunos;

        // Atualiza os Cards
        document.getElementById('stat-alunos').innerText = totalAlunos;
        document.getElementById('stat-media').innerText = mediaGeral.toFixed(1);

        // Colora a média
        const mediaEl = document.getElementById('stat-media');
        mediaEl.className = `text-3xl font-black ${mediaGeral >= 6 ? 'text-green-500' : 'text-red-500'}`;
    }
};

// Auto-inicializa se carregado
window.teacher = teacher;





// Futuro teacher.js
// async function carregarDadosReais(turma) {
//   const snapshot = await db.collection('users').where('turma', '==', turma).get();
//   this.mockStudents = snapshot.docs.map(doc => doc.data());
//   this.applyFilters();
//}