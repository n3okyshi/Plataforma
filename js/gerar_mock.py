import random
import json

def gerar_mock_alunos(quantidade):
    nomes = ["Alice", "Bruno", "Caio", "Davi", "Elena", "Fernanda", "Gabriel", "Hanna", "Igor", "Julia", 
             "Kevin", "Larissa", "Mateus", "Nadia", "Otávio", "Paula", "Quiteria", "Rafael", "Sofia", "Tiago"]
    sobrenomes = ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves", "Pereira", "Lima", "Gomes"]
    
    turmas = ["6º A","7º A", "8º A", "8º B", "9º A", "9º B"]
    
    disciplinas = ["Língua Portuguesa", "Língua Estrangeira", "Matemática", "História", "Geografia", "Educação Física", "Artes", "Ciências Naturais"]

    lista_alunos = []

    for i in range(1, quantidade + 1):
        # Gera nome completo aleatório
        nome_completo = f"{random.choice(nomes)} {random.choice(sobrenomes)} {random.choice(sobrenomes)}"
        
        # Define XP e calcula nível (simulando 1000 XP por nível)
        xp_aleatorio = random.randint(100, 15000)
        nivel_calculado = (xp_aleatorio // 1000) + 1
        
        # Gera notas aleatórias (entre 1.0 e 10.0) para todas as disciplinas
        notas_aluno = {disc: round(random.uniform(1.0, 10.0), 1) for disc in disciplinas}

        aluno = {
            "id": i,
            "nome": nome_completo,
            "turma": random.choice(turmas),
            "xp": xp_aleatorio,
            "nivel": nivel_calculado,
            "notas": notas_aluno
        }
        lista_alunos.append(aluno)

    return lista_alunos

# --- Execução ---
n = int(input("Quantos alunos deseja gerar? "))
resultado = gerar_mock_alunos(n)

# Exibe no formato JSON para copiar e colar no seu arquivo JS
print("\n--- COPIE O CONTEÚDO ABAIXO ---\n")
print(json.dumps(resultado, indent=4, ensure_ascii=False))
