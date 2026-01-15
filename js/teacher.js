/**
 * TEACHER.JS - MÓDULO DO PROFESSOR (Versão Melhorada)
 * Gerencia a visão de turmas, notas e relatórios.
 */

var teacher = {
    // Dados simulados para teste (Mock Data)
    mockStudents: [
        { id: 1, nome: "Igor Lima", turma: "8º B", xp: 14076, nivel: 15, notas: { "Língua Portuguesa": 5.5, "Língua Estrangeira": 9.1, "Matemática": 5.0, "História": 6.7, "Geografia": 6.3, "Educação Física": 5.4, "Artes": 6.9, "Ciências Naturais": 7.1 } },
        { id: 2, nome: "Nadia Alves", turma: "9º B", xp: 428, nivel: 1, notas: { "Língua Portuguesa": 9.5, "Língua Estrangeira": 7.2, "Matemática": 5.0, "História": 6.6, "Geografia": 8.1, "Educação Física": 6.4, "Artes": 9.3, "Ciências Naturais": 9.7 } },
        { id: 3, nome: "Larissa Santos", turma: "8º B", xp: 5428, nivel: 6, notas: { "Língua Portuguesa": 7.8, "Língua Estrangeira": 5.5, "Matemática": 6.6, "História": 5.1, "Geografia": 5.1, "Educação Física": 8.9, "Artes": 7.6, "Ciências Naturais": 7.5 } },
        { id: 4, nome: "Rafael Alves", turma: "8º A", xp: 2930, nivel: 3, notas: { "Língua Portuguesa": 9.8, "Língua Estrangeira": 5.8, "Matemática": 5.0, "História": 9.2, "Geografia": 8.8, "Educação Física": 9.8, "Artes": 9.3, "Ciências Naturais": 4.7 } },
        { id: 5, nome: "Julia Silva", turma: "8º B", xp: 1603, nivel: 2, notas: { "Língua Portuguesa": 5.5, "Língua Estrangeira": 5.7, "Matemática": 5.7, "História": 6.6, "Geografia": 7.0, "Educação Física": 8.0, "Artes": 5.9, "Ciências Naturais": 7.0 } },
        { id: 6, nome: "Davi Lima", turma: "7º A", xp: 11324, nivel: 12, notas: { "Língua Portuguesa": 8.4, "Língua Estrangeira": 5.1, "Matemática": 7.5, "História": 5.4, "Geografia": 7.1, "Educação Física": 9.2, "Artes": 4.5, "Ciências Naturais": 7.6 } },
        { id: 7, nome: "Hanna Ferreira", turma: "9º B", xp: 1734, nivel: 2, notas: { "Língua Portuguesa": 4.7, "Língua Estrangeira": 4.4, "Matemática": 6.3, "História": 8.4, "Geografia": 7.7, "Educação Física": 7.8, "Artes": 4.5, "Ciências Naturais": 8.6 } },
        { id: 8, nome: "Gabriel Santos", turma: "8º B", xp: 8808, nivel: 9, notas: { "Língua Portuguesa": 5.1, "Língua Estrangeira": 7.0, "Matemática": 5.4, "História": 8.2, "Geografia": 6.1, "Educação Física": 9.0, "Artes": 9.5, "Ciências Naturais": 6.8 } },
        { id: 9, nome: "Igor Alves", turma: "9º B", xp: 14456, nivel: 15, notas: { "Língua Portuguesa": 9.9, "Língua Estrangeira": 4.5, "Matemática": 4.3, "História": 4.1, "Geografia": 4.8, "Educação Física": 9.1, "Artes": 8.0, "Ciências Naturais": 5.9 } },
        { id: 10, nome: "Nadia Lima", turma: "7º A", xp: 9769, nivel: 10, notas: { "Língua Portuguesa": 5.6, "Língua Estrangeira": 8.3, "Matemática": 8.2, "História": 8.8, "Geografia": 9.3, "Educação Física": 6.1, "Artes": 4.5, "Ciências Naturais": 4.2 } },
        { id: 11, nome: "Tiago Lima", turma: "9º B", xp: 12836, nivel: 13, notas: { "Língua Portuguesa": 6.7, "Língua Estrangeira": 8.7, "Matemática": 6.5, "História": 4.7, "Geografia": 8.7, "Educação Física": 6.2, "Artes": 7.9, "Ciências Naturais": 8.3 } },
        { id: 12, nome: "Nadia Lima", turma: "9º B", xp: 3124, nivel: 4, notas: { "Língua Portuguesa": 4.2, "Língua Estrangeira": 6.2, "Matemática": 5.5, "História": 9.9, "Geografia": 6.3, "Educação Física": 5.7, "Artes": 5.5, "Ciências Naturais": 4.4 } },
        { id: 13, nome: "Davi Santos", turma: "9º B", xp: 5855, nivel: 6, notas: { "Língua Portuguesa": 9.7, "Língua Estrangeira": 9.4, "Matemática": 9.7, "História": 5.2, "Geografia": 6.9, "Educação Física": 9.6, "Artes": 6.9, "Ciências Naturais": 8.8 } },
        { id: 14, nome: "Bruno Ferreira", turma: "9º B", xp: 12615, nivel: 13, notas: { "Língua Portuguesa": 4.8, "Língua Estrangeira": 5.3, "Matemática": 6.1, "História": 4.0, "Geografia": 7.8, "Educação Física": 6.8, "Artes": 5.3, "Ciências Naturais": 7.0 } },
        { id: 15, nome: "Paula Souza", turma: "7º A", xp: 298, nivel: 1, notas: { "Língua Portuguesa": 7.7, "Língua Estrangeira": 5.5, "Matemática": 7.8, "História": 4.2, "Geografia": 8.9, "Educação Física": 8.4, "Artes": 5.5, "Ciências Naturais": 5.4 } },
        { id: 16, nome: "Tiago Santos", turma: "7º A", xp: 12227, nivel: 13, notas: { "Língua Portuguesa": 8.4, "Língua Estrangeira": 6.1, "Matemática": 9.8, "História": 9.4, "Geografia": 4.9, "Educação Física": 4.8, "Artes": 8.7, "Ciências Naturais": 4.5 } },
        { id: 17, nome: "Elena Rodrigues", turma: "7º A", xp: 7710, nivel: 8, notas: { "Língua Portuguesa": 6.8, "Língua Estrangeira": 6.0, "Matemática": 8.7, "História": 4.5, "Geografia": 6.7, "Educação Física": 8.1, "Artes": 8.6, "Ciências Naturais": 6.7 } },
        { id: 18, nome: "Hanna Santos", turma: "7º A", xp: 3684, nivel: 4, notas: { "Língua Portuguesa": 7.7, "Língua Estrangeira": 6.1, "Matemática": 5.1, "História": 9.9, "Geografia": 6.7, "Educação Física": 9.8, "Artes": 4.6, "Ciências Naturais": 6.0 } },
        { id: 19, nome: "Gabriel Lima", turma: "8º A", xp: 11896, nivel: 12, notas: { "Língua Portuguesa": 6.8, "Língua Estrangeira": 9.3, "Matemática": 4.2, "História": 6.1, "Geografia": 8.8, "Educação Física": 6.8, "Artes": 6.1, "Ciências Naturais": 6.2 } },
        { id: 20, nome: "Elena Souza", turma: "7º A", xp: 2388, nivel: 3, notas: { "Língua Portuguesa": 9.1, "Língua Estrangeira": 9.6, "Matemática": 7.8, "História": 9.0, "Geografia": 7.0, "Educação Física": 8.8, "Artes": 9.4, "Ciências Naturais": 9.2 } },
        { id: 21, nome: "Fernanda Alves", turma: "8º A", xp: 12828, nivel: 13, notas: { "Língua Portuguesa": 7.7, "Língua Estrangeira": 7.9, "Matemática": 9.6, "História": 9.5, "Geografia": 5.5, "Educação Física": 4.8, "Artes": 6.7, "Ciências Naturais": 9.1 } },
        { id: 22, nome: "Fernanda Ferreira", turma: "8º B", xp: 13233, nivel: 14, notas: { "Língua Portuguesa": 7.3, "Língua Estrangeira": 4.6, "Matemática": 9.9, "História": 6.4, "Geografia": 5.9, "Educação Física": 5.4, "Artes": 5.1, "Ciências Naturais": 7.8 } },
        { id: 23, nome: "Caio Alves", turma: "8º A", xp: 2020, nivel: 3, notas: { "Língua Portuguesa": 6.4, "Língua Estrangeira": 7.1, "Matemática": 4.4, "História": 8.0, "Geografia": 7.1, "Educação Física": 5.3, "Artes": 6.1, "Ciências Naturais": 4.6 } },
        { id: 24, nome: "Mateus Ferreira", turma: "8º A", xp: 6139, nivel: 7, notas: { "Língua Portuguesa": 7.7, "Língua Estrangeira": 7.7, "Matemática": 8.3, "História": 5.3, "Geografia": 5.3, "Educação Física": 7.7, "Artes": 5.3, "Ciências Naturais": 6.7 } },
        { id: 25, nome: "Nadia Souza", turma: "8º A", xp: 2853, nivel: 3, notas: { "Língua Portuguesa": 6.2, "Língua Estrangeira": 9.7, "Matemática": 4.7, "História": 7.2, "Geografia": 5.6, "Educação Física": 6.9, "Artes": 6.6, "Ciências Naturais": 6.4 } },
        { id: 26, nome: "Bruno Alves", turma: "7º A", xp: 8314, nivel: 9, notas: { "Língua Portuguesa": 4.5, "Língua Estrangeira": 6.8, "Matemática": 6.9, "História": 9.4, "Geografia": 9.4, "Educação Física": 7.2, "Artes": 5.2, "Ciências Naturais": 8.3 } },
        { id: 27, nome: "Nadia Pereira", turma: "8º A", xp: 5133, nivel: 6, notas: { "Língua Portuguesa": 9.6, "Língua Estrangeira": 6.1, "Matemática": 7.2, "História": 5.7, "Geografia": 5.0, "Educação Física": 5.2, "Artes": 8.5, "Ciências Naturais": 7.8 } },
        { id: 28, nome: "Larissa Pereira", turma: "9º A", xp: 12577, nivel: 13, notas: { "Língua Portuguesa": 6.1, "Língua Estrangeira": 5.3, "Matemática": 5.7, "História": 5.0, "Geografia": 4.3, "Educação Física": 8.0, "Artes": 7.6, "Ciências Naturais": 6.7 } },
        { id: 29, nome: "Caio Ferreira", turma: "9º A", xp: 9179, nivel: 10, notas: { "Língua Portuguesa": 4.2, "Língua Estrangeira": 7.1, "Matemática": 5.7, "História": 5.8, "Geografia": 8.0, "Educação Física": 7.2, "Artes": 4.6, "Ciências Naturais": 5.7 } },
        { id: 30, nome: "Kevin Souza", turma: "8º A", xp: 3477, nivel: 4, notas: { "Língua Portuguesa": 5.7, "Língua Estrangeira": 7.6, "Matemática": 5.4, "História": 4.1, "Geografia": 9.7, "Educação Física": 8.3, "Artes": 8.7, "Ciências Naturais": 4.9 } },
        { id: 31, nome: "Tiago Souza", turma: "7º A", xp: 197, nivel: 1, notas: { "Língua Portuguesa": 7.1, "Língua Estrangeira": 9.3, "Matemática": 7.5, "História": 6.3, "Geografia": 7.5, "Educação Física": 8.5, "Artes": 9.7, "Ciências Naturais": 8.2 } },
        { id: 32, nome: "Paula Alves", turma: "7º A", xp: 9631, nivel: 10, notas: { "Língua Portuguesa": 9.7, "Língua Estrangeira": 4.5, "Matemática": 5.8, "História": 4.9, "Geografia": 5.7, "Educação Física": 5.2, "Artes": 4.6, "Ciências Naturais": 7.1 } },
        { id: 33, nome: "Kevin Lima", turma: "9º A", xp: 4725, nivel: 5, notas: { "Língua Portuguesa": 7.1, "Língua Estrangeira": 6.1, "Matemática": 9.7, "História": 6.5, "Geografia": 5.6, "Educação Física": 5.3, "Artes": 4.4, "Ciências Naturais": 8.5 } },
        { id: 34, nome: "Bruno Souza", turma: "8º A", xp: 12838, nivel: 13, notas: { "Língua Portuguesa": 9.1, "Língua Estrangeira": 7.7, "Matemática": 9.4, "História": 6.2, "Geografia": 5.6, "Educação Física": 6.4, "Artes": 9.3, "Ciências Naturais": 6.3 } },
        { id: 35, nome: "Paula Ferreira", turma: "8º A", xp: 7149, nivel: 8, notas: { "Língua Portuguesa": 7.2, "Língua Estrangeira": 5.2, "Matemática": 6.0, "História": 6.8, "Geografia": 8.1, "Educação Física": 8.5, "Artes": 7.2, "Ciências Naturais": 4.7 } },
        { id: 36, nome: "Igor Santos", turma: "7º A", xp: 7724, nivel: 8, notas: { "Língua Portuguesa": 5.8, "Língua Estrangeira": 4.9, "Matemática": 7.8, "História": 8.8, "Geografia": 4.5, "Educação Física": 4.8, "Artes": 9.1, "Ciências Naturais": 5.0 } },
        { id: 37, nome: "Hanna Oliveira", turma: "9º A", xp: 13137, nivel: 14, notas: { "Língua Portuguesa": 7.9, "Língua Estrangeira": 8.4, "Matemática": 6.1, "História": 9.8, "Geografia": 5.0, "Educação Física": 6.8, "Artes": 9.9, "Ciências Naturais": 8.6 } },
        { id: 38, nome: "Tiago Santos", turma: "9º B", xp: 6102, nivel: 7, notas: { "Língua Portuguesa": 7.8, "Língua Estrangeira": 5.1, "Matemática": 7.1, "História": 5.2, "Geografia": 4.3, "Educação Física": 7.7, "Artes": 8.3, "Ciências Naturais": 8.8 } },
        { id: 39, nome: "Mateus Oliveira", turma: "8º A", xp: 7638, nivel: 8, notas: { "Língua Portuguesa": 9.2, "Língua Estrangeira": 7.0, "Matemática": 5.2, "História": 9.2, "Geografia": 8.3, "Educação Física": 7.7, "Artes": 6.2, "Ciências Naturais": 9.7 } },
        { id: 40, nome: "Nadia Gomes", turma: "8º A", xp: 2140, nivel: 3, notas: { "Língua Portuguesa": 7.9, "Língua Estrangeira": 7.3, "Matemática": 9.8, "História": 5.3, "Geografia": 6.6, "Educação Física": 8.6, "Artes": 5.0, "Ciências Naturais": 6.4 } },
        { id: 41, nome: "Tiago Rodrigues", turma: "9º A", xp: 14666, nivel: 15, notas: { "Língua Portuguesa": 4.1, "Língua Estrangeira": 8.6, "Matemática": 5.9, "História": 5.3, "Geografia": 7.4, "Educação Física": 9.9, "Artes": 9.5, "Ciências Naturais": 9.4 } },
        { id: 42, nome: "Paula Souza", turma: "8º B", xp: 4443, nivel: 5, notas: { "Língua Portuguesa": 8.2, "Língua Estrangeira": 4.6, "Matemática": 5.5, "História": 4.2, "Geografia": 8.7, "Educação Física": 9.5, "Artes": 4.2, "Ciências Naturais": 9.5 } },
        { id: 43, nome: "Caio Ferreira", turma: "7º A", xp: 12611, nivel: 13, notas: { "Língua Portuguesa": 8.8, "Língua Estrangeira": 7.4, "Matemática": 4.4, "História": 4.7, "Geografia": 9.9, "Educação Física": 5.1, "Artes": 9.9, "Ciências Naturais": 7.2 } },
        { id: 44, nome: "Gabriel Pereira", turma: "9º A", xp: 13307, nivel: 14, notas: { "Língua Portuguesa": 4.3, "Língua Estrangeira": 4.4, "Matemática": 4.6, "História": 5.9, "Geografia": 9.7, "Educação Física": 4.7, "Artes": 4.8, "Ciências Naturais": 7.7 } },
        { id: 45, nome: "Fernanda Lima", turma: "7º A", xp: 13361, nivel: 14, notas: { "Língua Portuguesa": 5.1, "Língua Estrangeira": 6.0, "Matemática": 6.9, "História": 9.3, "Geografia": 7.3, "Educação Física": 7.7, "Artes": 4.8, "Ciências Naturais": 4.8 } },
        { id: 46, nome: "Quiteria Pereira", turma: "8º A", xp: 3567, nivel: 4, notas: { "Língua Portuguesa": 5.6, "Língua Estrangeira": 5.7, "Matemática": 5.0, "História": 7.6, "Geografia": 7.5, "Educação Física": 5.4, "Artes": 5.4, "Ciências Naturais": 8.4 } },
        { id: 47, nome: "Larissa Alves", turma: "7º A", xp: 3277, nivel: 4, notas: { "Língua Portuguesa": 7.1, "Língua Estrangeira": 7.9, "Matemática": 6.1, "História": 9.7, "Geografia": 7.4, "Educação Física": 8.8, "Artes": 8.7, "Ciências Naturais": 6.2 } },
        { id: 48, nome: "Bruno Alves", turma: "7º A", xp: 3852, nivel: 4, notas: { "Língua Portuguesa": 9.1, "Língua Estrangeira": 5.1, "Matemática": 7.0, "História": 7.7, "Geografia": 9.1, "Educação Física": 7.1, "Artes": 6.3, "Ciências Naturais": 7.6 } },
        { id: 49, nome: "Tiago Alves", turma: "9º B", xp: 13620, nivel: 14, notas: { "Língua Portuguesa": 7.6, "Língua Estrangeira": 9.4, "Matemática": 7.2, "História": 4.9, "Geografia": 4.2, "Educação Física": 7.8, "Artes": 8.4, "Ciências Naturais": 6.9 } },
        { id: 50, nome: "Nadia Rodrigues", turma: "8º B", xp: 6892, nivel: 7, notas: { "Língua Portuguesa": 6.0, "Língua Estrangeira": 6.6, "Matemática": 4.4, "História": 7.7, "Geografia": 7.3, "Educação Física": 9.0, "Artes": 8.9, "Ciências Naturais": 9.0 } },
        { id: 51, nome: "Larissa Ferreira", turma: "9º B", xp: 3230, nivel: 4, notas: { "Língua Portuguesa": 6.4, "Língua Estrangeira": 5.8, "Matemática": 5.2, "História": 5.0, "Geografia": 7.0, "Educação Física": 4.6, "Artes": 5.0, "Ciências Naturais": 9.4 } },
        { id: 52, nome: "Caio Lima", turma: "8º B", xp: 9884, nivel: 10, notas: { "Língua Portuguesa": 4.5, "Língua Estrangeira": 5.4, "Matemática": 5.6, "História": 9.6, "Geografia": 6.9, "Educação Física": 5.4, "Artes": 6.0, "Ciências Naturais": 5.4 } },
        { id: 53, nome: "Gabriel Silva", turma: "8º A", xp: 3582, nivel: 4, notas: { "Língua Portuguesa": 5.6, "Língua Estrangeira": 6.4, "Matemática": 7.1, "História": 4.5, "Geografia": 9.9, "Educação Física": 6.1, "Artes": 5.3, "Ciências Naturais": 6.2 } },
        { id: 54, nome: "Bruno Ferreira", turma: "8º A", xp: 5475, nivel: 6, notas: { "Língua Portuguesa": 9.9, "Língua Estrangeira": 7.2, "Matemática": 8.9, "História": 7.3, "Geografia": 8.7, "Educação Física": 8.1, "Artes": 6.5, "Ciências Naturais": 6.4 } },
        { id: 55, nome: "Mateus Oliveira", turma: "7º A", xp: 11306, nivel: 12, notas: { "Língua Portuguesa": 8.7, "Língua Estrangeira": 9.4, "Matemática": 5.4, "História": 4.7, "Geografia": 7.3, "Educação Física": 7.4, "Artes": 8.7, "Ciências Naturais": 5.5 } },
        { id: 56, nome: "Mateus Oliveira", turma: "8º A", xp: 6195, nivel: 7, notas: { "Língua Portuguesa": 6.0, "Língua Estrangeira": 4.5, "Matemática": 8.9, "História": 9.3, "Geografia": 5.0, "Educação Física": 6.2, "Artes": 4.4, "Ciências Naturais": 6.9 } },
        { id: 57, nome: "Julia Gomes", turma: "8º A", xp: 13996, nivel: 14, notas: { "Língua Portuguesa": 8.1, "Língua Estrangeira": 8.7, "Matemática": 5.9, "História": 6.6, "Geografia": 4.1, "Educação Física": 7.5, "Artes": 7.7, "Ciências Naturais": 9.2 } },
        { id: 58, nome: "Davi Pereira", turma: "8º A", xp: 7018, nivel: 8, notas: { "Língua Portuguesa": 9.4, "Língua Estrangeira": 4.5, "Matemática": 4.6, "História": 8.0, "Geografia": 8.5, "Educação Física": 8.7, "Artes": 5.1, "Ciências Naturais": 7.3 } },
        { id: 59, nome: "Larissa Oliveira", turma: "8º B", xp: 14237, nivel: 15, notas: { "Língua Portuguesa": 4.2, "Língua Estrangeira": 6.0, "Matemática": 4.2, "História": 5.7, "Geografia": 9.1, "Educação Física": 6.6, "Artes": 6.2, "Ciências Naturais": 10.0 } },
        { id: 60, nome: "Otávio Ferreira", turma: "9º B", xp: 11318, nivel: 12, notas: { "Língua Portuguesa": 5.2, "Língua Estrangeira": 5.4, "Matemática": 6.8, "História": 6.0, "Geografia": 4.7, "Educação Física": 9.4, "Artes": 8.0, "Ciências Naturais": 9.7 } },
        { id: 61, nome: "Julia Santos", turma: "8º A", xp: 4224, nivel: 5, notas: { "Língua Portuguesa": 6.6, "Língua Estrangeira": 9.4, "Matemática": 6.7, "História": 4.4, "Geografia": 7.5, "Educação Física": 6.4, "Artes": 9.5, "Ciências Naturais": 4.7 } },
        { id: 62, nome: "Bruno Souza", turma: "9º B", xp: 3416, nivel: 4, notas: { "Língua Portuguesa": 7.0, "Língua Estrangeira": 9.6, "Matemática": 8.4, "História": 9.0, "Geografia": 4.7, "Educação Física": 5.9, "Artes": 5.4, "Ciências Naturais": 5.5 } },
        { id: 63, nome: "Gabriel Gomes", turma: "8º B", xp: 1831, nivel: 2, notas: { "Língua Portuguesa": 6.1, "Língua Estrangeira": 9.3, "Matemática": 4.8, "História": 6.3, "Geografia": 7.9, "Educação Física": 8.9, "Artes": 8.8, "Ciências Naturais": 9.2 } },
        { id: 64, nome: "Paula Souza", turma: "8º A", xp: 9809, nivel: 10, notas: { "Língua Portuguesa": 6.3, "Língua Estrangeira": 4.5, "Matemática": 5.1, "História": 7.4, "Geografia": 6.8, "Educação Física": 9.9, "Artes": 9.1, "Ciências Naturais": 9.8 } },
        { id: 65, nome: "Tiago Oliveira", turma: "9º B", xp: 2354, nivel: 3, notas: { "Língua Portuguesa": 8.9, "Língua Estrangeira": 9.6, "Matemática": 8.8, "História": 6.0, "Geografia": 7.6, "Educação Física": 5.2, "Artes": 4.6, "Ciências Naturais": 5.9 } },
        { id: 66, nome: "Julia Oliveira", turma: "9º A", xp: 3314, nivel: 4, notas: { "Língua Portuguesa": 9.7, "Língua Estrangeira": 8.8, "Matemática": 5.4, "História": 9.0, "Geografia": 9.6, "Educação Física": 7.8, "Artes": 5.1, "Ciências Naturais": 5.9 } },
        { id: 67, nome: "Kevin Souza", turma: "9º B", xp: 11414, nivel: 12, notas: { "Língua Portuguesa": 9.2, "Língua Estrangeira": 9.1, "Matemática": 9.5, "História": 4.5, "Geografia": 7.2, "Educação Física": 6.8, "Artes": 5.9, "Ciências Naturais": 4.2 } },
        { id: 68, nome: "Fernanda Pereira", turma: "9º B", xp: 6153, nivel: 7, notas: { "Língua Portuguesa": 6.2, "Língua Estrangeira": 9.2, "Matemática": 4.9, "História": 8.6, "Geografia": 5.4, "Educação Física": 4.8, "Artes": 4.4, "Ciências Naturais": 9.0 } },
        { id: 69, nome: "Sofia Silva", turma: "8º B", xp: 11657, nivel: 12, notas: { "Língua Portuguesa": 5.5, "Língua Estrangeira": 7.8, "Matemática": 5.7, "História": 9.7, "Geografia": 7.2, "Educação Física": 8.0, "Artes": 6.1, "Ciências Naturais": 9.9 } },
        { id: 70, nome: "Larissa Lima", turma: "8º B", xp: 14356, nivel: 15, notas: { "Língua Portuguesa": 4.5, "Língua Estrangeira": 6.5, "Matemática": 6.1, "História": 6.9, "Geografia": 8.0, "Educação Física": 5.5, "Artes": 5.3, "Ciências Naturais": 5.7 } },
        { id: 71, nome: "Quiteria Ferreira", turma: "8º B", xp: 14501, nivel: 15, notas: { "Língua Portuguesa": 4.9, "Língua Estrangeira": 4.1, "Matemática": 4.1, "História": 8.2, "Geografia": 9.8, "Educação Física": 9.3, "Artes": 8.5, "Ciências Naturais": 8.2 } },
        { id: 72, nome: "Bruno Souza", turma: "7º A", xp: 962, nivel: 1, notas: { "Língua Portuguesa": 4.4, "Língua Estrangeira": 6.6, "Matemática": 5.7, "História": 4.5, "Geografia": 5.3, "Educação Física": 6.5, "Artes": 9.8, "Ciências Naturais": 5.6 } },
        { id: 73, nome: "Sofia Oliveira", turma: "9º B", xp: 10976, nivel: 11, notas: { "Língua Portuguesa": 5.6, "Língua Estrangeira": 6.1, "Matemática": 4.1, "História": 9.7, "Geografia": 9.6, "Educação Física": 5.4, "Artes": 6.8, "Ciências Naturais": 6.5 } },
        { id: 74, nome: "Julia Gomes", turma: "9º B", xp: 9728, nivel: 10, notas: { "Língua Portuguesa": 9.7, "Língua Estrangeira": 4.9, "Matemática": 9.9, "História": 4.9, "Geografia": 5.0, "Educação Física": 9.3, "Artes": 8.3, "Ciências Naturais": 9.6 } },
        { id: 75, nome: "Rafael Souza", turma: "7º A", xp: 9227, nivel: 10, notas: { "Língua Portuguesa": 9.0, "Língua Estrangeira": 8.0, "Matemática": 7.5, "História": 4.3, "Geografia": 8.0, "Educação Física": 9.6, "Artes": 6.0, "Ciências Naturais": 9.8 } },
        { id: 76, nome: "Rafael Silva", turma: "8º B", xp: 1019, nivel: 2, notas: { "Língua Portuguesa": 6.0, "Língua Estrangeira": 4.1, "Matemática": 4.3, "História": 5.2, "Geografia": 8.6, "Educação Física": 6.4, "Artes": 4.5, "Ciências Naturais": 7.6 } },
        { id: 77, nome: "Mateus Gomes", turma: "8º B", xp: 8996, nivel: 9, notas: { "Língua Portuguesa": 9.9, "Língua Estrangeira": 4.8, "Matemática": 5.4, "História": 9.6, "Geografia": 9.2, "Educação Física": 4.9, "Artes": 7.9, "Ciências Naturais": 7.4 } },
        { id: 78, nome: "Caio Lima", turma: "8º B", xp: 13530, nivel: 14, notas: { "Língua Portuguesa": 7.2, "Língua Estrangeira": 7.2, "Matemática": 9.5, "História": 4.4, "Geografia": 5.6, "Educação Física": 7.7, "Artes": 9.9, "Ciências Naturais": 5.6 } },
        { id: 79, nome: "Quiteria Ferreira", turma: "8º A", xp: 9443, nivel: 10, notas: { "Língua Portuguesa": 9.2, "Língua Estrangeira": 8.2, "Matemática": 8.0, "História": 7.9, "Geografia": 5.9, "Educação Física": 6.4, "Artes": 5.6, "Ciências Naturais": 8.4 } },
        { id: 80, nome: "Davi Alves", turma: "7º A", xp: 3941, nivel: 4, notas: { "Língua Portuguesa": 4.6, "Língua Estrangeira": 7.1, "Matemática": 9.9, "História": 9.7, "Geografia": 9.7, "Educação Física": 6.5, "Artes": 7.2, "Ciências Naturais": 8.9 } },
        { id: 81, nome: "Kevin Alves", turma: "7º A", xp: 14753, nivel: 15, notas: { "Língua Portuguesa": 4.7, "Língua Estrangeira": 9.3, "Matemática": 8.7, "História": 6.4, "Geografia": 4.7, "Educação Física": 9.5, "Artes": 9.2, "Ciências Naturais": 6.8 } },
        { id: 82, nome: "Igor Lima", turma: "9º A", xp: 748, nivel: 1, notas: { "Língua Portuguesa": 9.6, "Língua Estrangeira": 5.1, "Matemática": 9.4, "História": 7.8, "Geografia": 9.1, "Educação Física": 9.9, "Artes": 5.1, "Ciências Naturais": 5.3 } },
        { id: 83, nome: "Quiteria Santos", turma: "7º A", xp: 1308, nivel: 2, notas: { "Língua Portuguesa": 8.5, "Língua Estrangeira": 8.0, "Matemática": 6.7, "História": 9.3, "Geografia": 7.5, "Educação Física": 9.4, "Artes": 4.5, "Ciências Naturais": 7.9 } },
        { id: 84, nome: "Gabriel Gomes", turma: "8º B", xp: 533, nivel: 1, notas: { "Língua Portuguesa": 9.4, "Língua Estrangeira": 9.4, "Matemática": 8.9, "História": 5.3, "Geografia": 4.4, "Educação Física": 4.9, "Artes": 7.0, "Ciências Naturais": 6.5 } },
        { id: 85, nome: "Otávio Alves", turma: "7º A", xp: 12750, nivel: 13, notas: { "Língua Portuguesa": 4.0, "Língua Estrangeira": 5.2, "Matemática": 5.7, "História": 10.0, "Geografia": 5.7, "Educação Física": 6.6, "Artes": 5.1, "Ciências Naturais": 9.8 } },
        { id: 86, nome: "Elena Pereira", turma: "9º A", xp: 12576, nivel: 13, notas: { "Língua Portuguesa": 9.4, "Língua Estrangeira": 5.1, "Matemática": 4.7, "História": 8.1, "Geografia": 6.5, "Educação Física": 6.4, "Artes": 8.8, "Ciências Naturais": 8.7 } },
        { id: 87, nome: "Rafael Rodrigues", turma: "7º A", xp: 10835, nivel: 11, notas: { "Língua Portuguesa": 4.6, "Língua Estrangeira": 5.7, "Matemática": 7.1, "História": 8.4, "Geografia": 6.8, "Educação Física": 9.7, "Artes": 6.3, "Ciências Naturais": 8.5 } },
        { id: 88, nome: "Tiago Santos", turma: "8º A", xp: 11395, nivel: 12, notas: { "Língua Portuguesa": 5.6, "Língua Estrangeira": 5.9, "Matemática": 5.0, "História": 9.4, "Geografia": 6.5, "Educação Física": 6.4, "Artes": 8.8, "Ciências Naturais": 4.2 } },
        { id: 89, nome: "Davi Pereira", turma: "8º A", xp: 10377, nivel: 11, notas: { "Língua Portuguesa": 7.3, "Língua Estrangeira": 4.3, "Matemática": 9.5, "História": 9.5, "Geografia": 5.1, "Educação Física": 7.1, "Artes": 4.4, "Ciências Naturais": 4.1 } },
        { id: 90, nome: "Sofia Ferreira", turma: "8º A", xp: 5570, nivel: 6, notas: { "Língua Portuguesa": 9.0, "Língua Estrangeira": 8.0, "Matemática": 8.5, "História": 4.4, "Geografia": 4.9, "Educação Física": 9.9, "Artes": 6.8, "Ciências Naturais": 5.0 } },
        { id: 91, nome: "Kevin Pereira", turma: "8º A", xp: 929, nivel: 1, notas: { "Língua Portuguesa": 8.1, "Língua Estrangeira": 4.9, "Matemática": 5.0, "História": 7.1, "Geografia": 4.7, "Educação Física": 9.5, "Artes": 7.9, "Ciências Naturais": 8.5 } },
        { id: 92, nome: "Alice Souza", turma: "9º A", xp: 7845, nivel: 8, notas: { "Língua Portuguesa": 6.2, "Língua Estrangeira": 9.3, "Matemática": 8.1, "História": 8.4, "Geografia": 5.7, "Educação Física": 6.9, "Artes": 6.3, "Ciências Naturais": 8.7 } },
        { id: 93, nome: "Otávio Rodrigues", turma: "8º A", xp: 1692, nivel: 2, notas: { "Língua Portuguesa": 9.2, "Língua Estrangeira": 9.3, "Matemática": 6.9, "História": 6.4, "Geografia": 5.5, "Educação Física": 8.3, "Artes": 6.6, "Ciências Naturais": 4.5 } },
        { id: 94, nome: "Julia Ferreira", turma: "8º A", xp: 665, nivel: 1, notas: { "Língua Portuguesa": 7.7, "Língua Estrangeira": 5.5, "Matemática": 4.0, "História": 6.4, "Geografia": 6.7, "Educação Física": 9.9, "Artes": 4.8, "Ciências Naturais": 4.7 } },
        { id: 95, nome: "Kevin Pereira", turma: "9º B", xp: 10259, nivel: 11, notas: { "Língua Portuguesa": 8.2, "Língua Estrangeira": 4.1, "Matemática": 8.3, "História": 4.5, "Geografia": 6.9, "Educação Física": 5.1, "Artes": 6.3, "Ciências Naturais": 4.7 } },
        { id: 96, nome: "Paula Gomes", turma: "9º A", xp: 3569, nivel: 4, notas: { "Língua Portuguesa": 8.4, "Língua Estrangeira": 9.7, "Matemática": 4.2, "História": 5.9, "Geografia": 5.6, "Educação Física": 7.7, "Artes": 7.4, "Ciências Naturais": 5.0 } },
        { id: 97, nome: "Igor Santos", turma: "9º B", xp: 1789, nivel: 2, notas: { "Língua Portuguesa": 9.7, "Língua Estrangeira": 4.5, "Matemática": 6.6, "História": 8.5, "Geografia": 7.7, "Educação Física": 5.1, "Artes": 9.5, "Ciências Naturais": 4.7 } },
        { id: 98, nome: "Larissa Santos", turma: "9º B", xp: 8150, nivel: 9, notas: { "Língua Portuguesa": 5.3, "Língua Estrangeira": 5.7, "Matemática": 8.6, "História": 8.8, "Geografia": 4.8, "Educação Física": 8.8, "Artes": 6.8, "Ciências Naturais": 7.2 } },
        { id: 99, nome: "Bruno Silva", turma: "9º B", xp: 6323, nivel: 7, notas: { "Língua Portuguesa": 6.6, "Língua Estrangeira": 6.7, "Matemática": 5.3, "História": 9.4, "Geografia": 5.1, "Educação Física": 9.6, "Artes": 4.8, "Ciências Naturais": 6.4 } },
        { id: 100, nome: "Davi Lima", turma: "8º B", xp: 7516, nivel: 8, notas: { "Língua Portuguesa": 6.9, "Língua Estrangeira": 8.7, "Matemática": 5.4, "História": 4.8, "Geografia": 7.9, "Educação Física": 4.1, "Artes": 6.7, "Ciências Naturais": 10.0 } },
        { id: 101, nome: "Igor Rodrigues", turma: "9º B", xp: 1064, nivel: 2, notas: { "Língua Portuguesa": 6.6, "Língua Estrangeira": 8.9, "Matemática": 6.2, "História": 6.5, "Geografia": 9.6, "Educação Física": 7.0, "Artes": 9.9, "Ciências Naturais": 7.6 } },
        { id: 102, nome: "Rafael Alves", turma: "9º B", xp: 10849, nivel: 11, notas: { "Língua Portuguesa": 5.4, "Língua Estrangeira": 6.7, "Matemática": 7.0, "História": 9.1, "Geografia": 8.5, "Educação Física": 9.6, "Artes": 5.6, "Ciências Naturais": 6.7 } },
        { id: 103, nome: "Mateus Santos", turma: "9º A", xp: 1058, nivel: 2, notas: { "Língua Portuguesa": 4.3, "Língua Estrangeira": 7.9, "Matemática": 4.8, "História": 9.4, "Geografia": 7.5, "Educação Física": 6.0, "Artes": 6.6, "Ciências Naturais": 7.9 } },
        { id: 104, nome: "Otávio Souza", turma: "8º B", xp: 3505, nivel: 4, notas: { "Língua Portuguesa": 7.3, "Língua Estrangeira": 7.4, "Matemática": 5.3, "História": 6.1, "Geografia": 9.1, "Educação Física": 6.9, "Artes": 7.1, "Ciências Naturais": 4.3 } },
        { id: 105, nome: "Fernanda Silva", turma: "9º B", xp: 7015, nivel: 8, notas: { "Língua Portuguesa": 5.5, "Língua Estrangeira": 7.0, "Matemática": 5.8, "História": 7.2, "Geografia": 8.8, "Educação Física": 4.4, "Artes": 7.2, "Ciências Naturais": 7.6 } },
        { id: 106, nome: "Sofia Santos", turma: "9º A", xp: 784, nivel: 1, notas: { "Língua Portuguesa": 7.5, "Língua Estrangeira": 8.5, "Matemática": 6.5, "História": 7.2, "Geografia": 5.3, "Educação Física": 9.6, "Artes": 4.9, "Ciências Naturais": 4.1 } },
        { id: 107, nome: "Davi Gomes", turma: "9º A", xp: 13388, nivel: 14, notas: { "Língua Portuguesa": 5.2, "Língua Estrangeira": 4.8, "Matemática": 5.7, "História": 6.1, "Geografia": 7.6, "Educação Física": 4.6, "Artes": 5.4, "Ciências Naturais": 6.3 } },
        { id: 108, nome: "Quiteria Alves", turma: "7º A", xp: 8906, nivel: 9, notas: { "Língua Portuguesa": 6.0, "Língua Estrangeira": 8.8, "Matemática": 7.0, "História": 8.2, "Geografia": 7.7, "Educação Física": 6.3, "Artes": 6.3, "Ciências Naturais": 5.3 } },
        { id: 109, nome: "Hanna Ferreira", turma: "7º A", xp: 5974, nivel: 6, notas: { "Língua Portuguesa": 7.9, "Língua Estrangeira": 5.7, "Matemática": 9.5, "História": 7.2, "Geografia": 6.9, "Educação Física": 9.0, "Artes": 5.8, "Ciências Naturais": 7.5 } },
        { id: 110, nome: "Otávio Lima", turma: "8º B", xp: 8259, nivel: 9, notas: { "Língua Portuguesa": 8.5, "Língua Estrangeira": 7.0, "Matemática": 6.7, "História": 6.1, "Geografia": 5.0, "Educação Física": 4.8, "Artes": 7.2, "Ciências Naturais": 4.4 } },
        { id: 111, nome: "Otávio Silva", turma: "8º B", xp: 4676, nivel: 5, notas: { "Língua Portuguesa": 7.9, "Língua Estrangeira": 5.8, "Matemática": 8.2, "História": 4.6, "Geografia": 7.2, "Educação Física": 5.0, "Artes": 6.8, "Ciências Naturais": 8.3 } },
        { id: 112, nome: "Elena Souza", turma: "9º A", xp: 1719, nivel: 2, notas: { "Língua Portuguesa": 4.4, "Língua Estrangeira": 7.6, "Matemática": 9.0, "História": 7.2, "Geografia": 8.3, "Educação Física": 5.5, "Artes": 7.0, "Ciências Naturais": 5.4 } },
        { id: 113, nome: "Caio Oliveira", turma: "8º B", xp: 1423, nivel: 2, notas: { "Língua Portuguesa": 8.0, "Língua Estrangeira": 8.5, "Matemática": 10.0, "História": 5.8, "Geografia": 7.7, "Educação Física": 5.1, "Artes": 8.2, "Ciências Naturais": 4.5 } },
        { id: 114, nome: "Julia Silva", turma: "9º A", xp: 3169, nivel: 4, notas: { "Língua Portuguesa": 5.5, "Língua Estrangeira": 8.1, "Matemática": 6.3, "História": 6.4, "Geografia": 5.9, "Educação Física": 8.5, "Artes": 4.8, "Ciências Naturais": 4.1 } },
        { id: 115, nome: "Alice Souza", turma: "8º A", xp: 13721, nivel: 14, notas: { "Língua Portuguesa": 7.9, "Língua Estrangeira": 9.5, "Matemática": 5.9, "História": 9.1, "Geografia": 9.5, "Educação Física": 6.0, "Artes": 6.2, "Ciências Naturais": 4.6 } },
        { id: 116, nome: "Kevin Alves", turma: "7º A", xp: 14263, nivel: 15, notas: { "Língua Portuguesa": 7.7, "Língua Estrangeira": 9.5, "Matemática": 6.7, "História": 9.9, "Geografia": 4.6, "Educação Física": 8.9, "Artes": 7.2, "Ciências Naturais": 6.2 } },
        { id: 117, nome: "Nadia Rodrigues", turma: "8º B", xp: 5953, nivel: 6, notas: { "Língua Portuguesa": 7.4, "Língua Estrangeira": 7.3, "Matemática": 9.0, "História": 7.9, "Geografia": 5.9, "Educação Física": 9.2, "Artes": 6.7, "Ciências Naturais": 8.7 } },
        { id: 118, nome: "Igor Rodrigues", turma: "8º A", xp: 608, nivel: 1, notas: { "Língua Portuguesa": 8.7, "Língua Estrangeira": 4.6, "Matemática": 8.0, "História": 9.6, "Geografia": 4.2, "Educação Física": 9.6, "Artes": 7.6, "Ciências Naturais": 9.2 } },
        { id: 119, nome: "Paula Oliveira", turma: "7º A", xp: 5715, nivel: 6, notas: { "Língua Portuguesa": 5.3, "Língua Estrangeira": 8.4, "Matemática": 10.0, "História": 5.8, "Geografia": 5.1, "Educação Física": 5.2, "Artes": 5.2, "Ciências Naturais": 4.9 } },
        { id: 120, nome: "Igor Rodrigues", turma: "9º A", xp: 14180, nivel: 15, notas: { "Língua Portuguesa": 4.6, "Língua Estrangeira": 7.6, "Matemática": 6.0, "História": 6.0, "Geografia": 6.1, "Educação Física": 8.1, "Artes": 6.4, "Ciências Naturais": 6.0 } },
        { id: 121, nome: "Nadia Alves", turma: "9º A", xp: 131, nivel: 1, notas: { "Língua Portuguesa": 8.5, "Língua Estrangeira": 9.3, "Matemática": 9.8, "História": 5.0, "Geografia": 6.2, "Educação Física": 5.9, "Artes": 9.7, "Ciências Naturais": 4.1 } },
        { id: 122, nome: "Gabriel Rodrigues", turma: "9º A", xp: 5243, nivel: 6, notas: { "Língua Portuguesa": 4.7, "Língua Estrangeira": 4.7, "Matemática": 9.9, "História": 7.5, "Geografia": 4.8, "Educação Física": 6.9, "Artes": 9.2, "Ciências Naturais": 9.8 } },
        { id: 123, nome: "Alice Pereira", turma: "9º B", xp: 10840, nivel: 11, notas: { "Língua Portuguesa": 5.3, "Língua Estrangeira": 5.3, "Matemática": 6.0, "História": 8.4, "Geografia": 6.9, "Educação Física": 6.6, "Artes": 5.0, "Ciências Naturais": 6.1 } },
        { id: 124, nome: "Alice Ferreira", turma: "7º A", xp: 10916, nivel: 11, notas: { "Língua Portuguesa": 6.8, "Língua Estrangeira": 4.2, "Matemática": 6.6, "História": 6.3, "Geografia": 5.7, "Educação Física": 4.1, "Artes": 5.9, "Ciências Naturais": 7.9 } },
        { id: 125, nome: "Caio Souza", turma: "7º A", xp: 1923, nivel: 2, notas: { "Língua Portuguesa": 5.6, "Língua Estrangeira": 7.5, "Matemática": 7.5, "História": 9.1, "Geografia": 9.3, "Educação Física": 7.5, "Artes": 7.0, "Ciências Naturais": 5.3 } },
        { id: 126, nome: "Igor Rodrigues", turma: "9º A", xp: 9698, nivel: 10, notas: { "Língua Portuguesa": 9.7, "Língua Estrangeira": 4.6, "Matemática": 7.4, "História": 9.5, "Geografia": 9.4, "Educação Física": 4.3, "Artes": 9.8, "Ciências Naturais": 4.2 } },
        { id: 127, nome: "Davi Santos", turma: "9º A", xp: 7635, nivel: 8, notas: { "Língua Portuguesa": 9.3, "Língua Estrangeira": 9.2, "Matemática": 8.3, "História": 7.6, "Geografia": 8.6, "Educação Física": 9.9, "Artes": 8.9, "Ciências Naturais": 7.8 } },
        { id: 128, nome: "Sofia Souza", turma: "7º A", xp: 5787, nivel: 6, notas: { "Língua Portuguesa": 9.6, "Língua Estrangeira": 6.0, "Matemática": 4.5, "História": 9.8, "Geografia": 9.1, "Educação Física": 8.0, "Artes": 6.6, "Ciências Naturais": 4.4 } },
        { id: 129, nome: "Rafael Oliveira", turma: "8º A", xp: 9949, nivel: 10, notas: { "Língua Portuguesa": 5.4, "Língua Estrangeira": 5.5, "Matemática": 9.0, "História": 10.0, "Geografia": 7.2, "Educação Física": 7.2, "Artes": 6.0, "Ciências Naturais": 4.2 } },
        { id: 130, nome: "Kevin Lima", turma: "9º A", xp: 4110, nivel: 5, notas: { "Língua Portuguesa": 9.3, "Língua Estrangeira": 8.7, "Matemática": 5.4, "História": 9.9, "Geografia": 4.7, "Educação Física": 4.5, "Artes": 6.2, "Ciências Naturais": 7.5 } },
        { id: 131, nome: "Mateus Gomes", turma: "9º B", xp: 14510, nivel: 15, notas: { "Língua Portuguesa": 7.2, "Língua Estrangeira": 8.9, "Matemática": 9.0, "História": 4.0, "Geografia": 6.8, "Educação Física": 5.0, "Artes": 6.9, "Ciências Naturais": 8.7 } },
        { id: 132, nome: "Rafael Oliveira", turma: "7º A", xp: 1873, nivel: 2, notas: { "Língua Portuguesa": 9.0, "Língua Estrangeira": 6.0, "Matemática": 9.5, "História": 9.9, "Geografia": 8.8, "Educação Física": 5.1, "Artes": 5.7, "Ciências Naturais": 5.2 } },
        { id: 133, nome: "Davi Oliveira", turma: "9º A", xp: 13907, nivel: 14, notas: { "Língua Portuguesa": 4.7, "Língua Estrangeira": 9.2, "Matemática": 7.0, "História": 8.7, "Geografia": 5.3, "Educação Física": 5.7, "Artes": 9.8, "Ciências Naturais": 5.2 } },
        { id: 134, nome: "Paula Ferreira", turma: "8º A", xp: 7713, nivel: 8, notas: { "Língua Portuguesa": 7.5, "Língua Estrangeira": 5.4, "Matemática": 6.5, "História": 7.1, "Geografia": 5.9, "Educação Física": 9.4, "Artes": 9.6, "Ciências Naturais": 5.6 } },
        { id: 135, nome: "Bruno Pereira", turma: "9º B", xp: 601, nivel: 1, notas: { "Língua Portuguesa": 7.2, "Língua Estrangeira": 5.4, "Matemática": 10.0, "História": 4.8, "Geografia": 6.2, "Educação Física": 4.8, "Artes": 9.9, "Ciências Naturais": 5.3 } },
        { id: 136, nome: "Gabriel Santos", turma: "9º A", xp: 4844, nivel: 5, notas: { "Língua Portuguesa": 7.4, "Língua Estrangeira": 9.3, "Matemática": 9.1, "História": 6.8, "Geografia": 9.5, "Educação Física": 5.6, "Artes": 4.9, "Ciências Naturais": 7.8 } },
        { id: 137, nome: "Caio Oliveira", turma: "9º A", xp: 11473, nivel: 12, notas: { "Língua Portuguesa": 4.9, "Língua Estrangeira": 6.0, "Matemática": 8.4, "História": 4.8, "Geografia": 7.7, "Educação Física": 6.6, "Artes": 6.0, "Ciências Naturais": 9.0 } },
        { id: 138, nome: "Caio Lima", turma: "9º B", xp: 12933, nivel: 13, notas: { "Língua Portuguesa": 8.3, "Língua Estrangeira": 7.6, "Matemática": 4.7, "História": 4.1, "Geografia": 7.7, "Educação Física": 4.9, "Artes": 5.3, "Ciências Naturais": 9.6 } },
        { id: 139, nome: "Paula Santos", turma: "7º A", xp: 2167, nivel: 3, notas: { "Língua Portuguesa": 6.6, "Língua Estrangeira": 4.7, "Matemática": 7.1, "História": 8.0, "Geografia": 5.2, "Educação Física": 8.8, "Artes": 8.9, "Ciências Naturais": 4.4 } },
        { id: 140, nome: "Davi Silva", turma: "8º B", xp: 1576, nivel: 2, notas: { "Língua Portuguesa": 10.0, "Língua Estrangeira": 9.7, "Matemática": 4.0, "História": 7.5, "Geografia": 4.6, "Educação Física": 9.8, "Artes": 9.1, "Ciências Naturais": 5.6 } },
        { id: 141, nome: "Nadia Ferreira", turma: "8º A", xp: 6073, nivel: 7, notas: { "Língua Portuguesa": 4.7, "Língua Estrangeira": 8.0, "Matemática": 6.9, "História": 5.9, "Geografia": 6.1, "Educação Física": 6.9, "Artes": 8.1, "Ciências Naturais": 5.7 } },
        { id: 142, nome: "Tiago Rodrigues", turma: "8º A", xp: 1873, nivel: 2, notas: { "Língua Portuguesa": 4.4, "Língua Estrangeira": 8.9, "Matemática": 8.6, "História": 4.1, "Geografia": 4.3, "Educação Física": 7.3, "Artes": 8.1, "Ciências Naturais": 9.7 } },
        { id: 143, nome: "Larissa Gomes", turma: "9º B", xp: 3492, nivel: 4, notas: { "Língua Portuguesa": 4.7, "Língua Estrangeira": 5.4, "Matemática": 6.4, "História": 5.2, "Geografia": 6.2, "Educação Física": 9.1, "Artes": 9.5, "Ciências Naturais": 6.7 } },
        { id: 144, nome: "Gabriel Pereira", turma: "8º B", xp: 13200, nivel: 14, notas: { "Língua Portuguesa": 4.9, "Língua Estrangeira": 4.5, "Matemática": 7.2, "História": 4.2, "Geografia": 5.5, "Educação Física": 9.9, "Artes": 6.2, "Ciências Naturais": 9.6 } },
        { id: 145, nome: "Rafael Silva", turma: "7º A", xp: 14348, nivel: 15, notas: { "Língua Portuguesa": 9.1, "Língua Estrangeira": 8.4, "Matemática": 7.1, "História": 6.9, "Geografia": 5.5, "Educação Física": 9.2, "Artes": 6.9, "Ciências Naturais": 7.6 } },
        { id: 146, nome: "Paula Gomes", turma: "9º A", xp: 2955, nivel: 3, notas: { "Língua Portuguesa": 6.9, "Língua Estrangeira": 6.2, "Matemática": 9.3, "História": 8.1, "Geografia": 9.6, "Educação Física": 5.5, "Artes": 9.2, "Ciências Naturais": 4.2 } },
        { id: 147, nome: "Elena Alves", turma: "9º A", xp: 1593, nivel: 2, notas: { "Língua Portuguesa": 8.0, "Língua Estrangeira": 5.7, "Matemática": 8.3, "História": 9.3, "Geografia": 5.0, "Educação Física": 5.4, "Artes": 6.5, "Ciências Naturais": 8.8 } },
        { id: 148, nome: "Paula Rodrigues", turma: "7º A", xp: 2239, nivel: 3, notas: { "Língua Portuguesa": 5.0, "Língua Estrangeira": 9.0, "Matemática": 6.0, "História": 6.2, "Geografia": 9.7, "Educação Física": 7.6, "Artes": 5.6, "Ciências Naturais": 6.8 } },
        { id: 149, nome: "Igor Alves", turma: "9º A", xp: 822, nivel: 1, notas: { "Língua Portuguesa": 4.3, "Língua Estrangeira": 6.4, "Matemática": 9.7, "História": 5.2, "Geografia": 7.6, "Educação Física": 7.6, "Artes": 4.7, "Ciências Naturais": 8.2 } },
        { id: 150, nome: "Hanna Alves", turma: "7º A", xp: 503, nivel: 1, notas: { "Língua Portuguesa": 5.1, "Língua Estrangeira": 4.2, "Matemática": 6.6, "História": 9.5, "Geografia": 5.0, "Educação Física": 5.6, "Artes": 6.6, "Ciências Naturais": 6.6 } }
    ],

    init: function () {
        console.log("👨‍🏫 [Teacher] Módulo carregado.");

        // 1. Verificação Imediata (Caso já esteja logado)
        this.verificarPermissao();

        // 2. [NOVO] Listener Inteligente
        // Escuta quando o login acontece para mostrar o botão automaticamente
        window.addEventListener('auth-change', (e) => {
            console.log("👨‍🏫 [Teacher] Detectou login/logout.");
            this.verificarPermissao();
        });
    },

    // 1. CARGA REAL DO FIREBASE
    carregarDadosReais: async function (turma = "Todas") {
    try {
        let query = firebase.firestore().collection('users');
        if (turma !== "Todas") query = query.where('turma', '==', turma);

        const snapshot = await query.get();
        
        // DEBUG: Veja o que está vindo do banco no console do navegador (F12)
        if (!snapshot.empty) {
            console.log("🔍 [DEBUG] Estrutura do primeiro aluno:", snapshot.docs[0].data());
        }

        this.mockStudents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        this.applyFilters();
    } catch (error) {
        console.error("❌ Erro ao buscar dados:", error);
    }
},

    // 2. FILTRAGEM E ATUALIZAÇÃO DA VIEW
    applyFilters: function () {
        const selectTurma = document.getElementById('filter-turma');
        const selectDisc = document.getElementById('filter-disciplina');

        // Atualiza o estado interno com os valores dos seletores
        if (selectTurma) this.state.filterTurma = selectTurma.value;
        if (selectDisc) this.state.filterDisciplina = selectDisc.value;

        const turma = this.state.filterTurma;
        const disciplina = this.state.filterDisciplina;

        // Filtra a lista local (mockStudents que agora contém dados do Firebase)
        let filtrados = this.mockStudents || [];
        if (turma !== "Todas") {
            filtrados = filtrados.filter(s => s && s.turma === turma);
        }

        const tbody = document.getElementById('teacher-table-body');
        
        // SEGURANÇA: Delegamos a criação das linhas para a VIEW
        // A View deve conter a proteção do .substring()
        if (tbody && window.views && views._generateStudentRows) {
            tbody.innerHTML = views._generateStudentRows(filtrados, disciplina);
        }

        this.updateStats(filtrados, disciplina);
    },

    /**
     * Atualiza os cards de estatísticas baseando-se no filtro atual
     */
    updateStats: function (data = this.mockStudents, disciplina = this.state.filterDisciplina) {
        // Se a disciplina vier indefinida por algum motivo, garante um fallback
        const discAlvo = disciplina || this.state.filterDisciplina || "Matemática";
        
        const total = data.length;
        
        // Calcula a soma das notas apenas da disciplina selecionada
        const soma = data.reduce((acc, curr) => {
            const nota = (curr.notas && curr.notas[discAlvo]) ? parseFloat(curr.notas[discAlvo]) : 0;
            return acc + nota;
        }, 0);

        const media = total > 0 ? (soma / total).toFixed(1) : "0.0";

        // Atualiza os elementos na tela
        this._setStat('stat-alunos', total);
        this._setStat('stat-media', media);
        
        const mediaEl = document.getElementById('stat-media');
        if (mediaEl) {
            mediaEl.classList.remove('text-green-500', 'text-yellow-500', 'text-red-500');
            const numMedia = parseFloat(media);
            if (numMedia >= 7) mediaEl.classList.add('text-green-500');
            else if (numMedia >= 5) mediaEl.classList.add('text-yellow-500');
            else mediaEl.classList.add('text-red-500');
        }
    },

    /**
     * Renderização protegida para não apagar o Header
     */
    openDashboard: function () {
        app.state.currentView = 'teacher_dashboard';
        const container = document.getElementById('main-container');

        // IMPORTANTE: Nunca use document.body.innerHTML aqui.
        if (container && views.renderTeacherDashboard) {
            // Primeiro renderiza a "casca" do painel
            container.innerHTML = views.renderTeacherDashboard(this.mockStudents);
            
            // Depois sincroniza os dados (pode ser mock ou Firebase)
            this.carregarDadosReais("Todas");
        }
    },

    state: {
        filterTurma: "Todas",
        filterDisciplina: "Matemática"
    },

    /**
     * Verifica se o usuário atual é um Professor
     */
    verificarPermissao: function () {
        // Tenta pegar do App State primeiro, se falhar tenta do Auth direto
        const user = app.state.userProgress || (window.auth ? window.auth.user : null);

        // Se não tem usuário ou não tem campo serie, esconde
        if (!user || (!user.serie && !user.role)) {
            this.removeButton();
            return;
        }

        // Normaliza para minúsculas e remove espaços
        const serieNormalizada = (user.serie || "").toLowerCase().trim();
        const roleNormalizada = (user.role || "").toLowerCase().trim();

        // Regra de Ouro: Quem é professor?
        const isProfessor = serieNormalizada === "professor" || roleNormalizada === "admin" || roleNormalizada === "professor";

        if (isProfessor) {
            this.renderButton();
            // Evita logs repetidos desnecessários
            if (!this._logShown) {
                console.log("👨‍🏫 [Teacher] Modo Professor Ativado para:", user.nome || user.email);
                this._logShown = true;
            }
        } else {
            this.removeButton();
            this._logShown = false;
        }
    },

    renderButton: function () {
        const headerRight = document.querySelector('header > div:last-child');

        // Evita duplicar o botão se ele já existe
        if (document.getElementById('btn-teacher')) return;

        const btn = document.createElement('button');
        btn.id = "btn-teacher";
        btn.className = "text-gray-400 hover:text-brand-blue dark:text-gray-300 dark:hover:text-white transition-all p-2 rounded-xl active:scale-95 animate-fade-in";
        btn.innerHTML = '<i class="fas fa-chalkboard-teacher text-xl"></i>';
        btn.title = "Painel do Professor";
        btn.onclick = () => {
            // Feedback visual ao clicar
            if (window.ui && ui.fx) ui.fx.playSuccess();
            this.openDashboard();
        };

        // Insere ANTES do botão de configurações (primeiro da direita)
        if (headerRight) {
            headerRight.insertBefore(btn, headerRight.firstChild);
        }
    },

    removeButton: function () {
        const btn = document.getElementById('btn-teacher');
        if (btn) btn.remove();
    },

    // Helper privado para atualizar texto de elemento com segurança
    _setStat: function (id, value) {
        const el = document.getElementById(id);
        if (el) el.innerText = value;
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