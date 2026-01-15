import os

def gerar_estrutura_final():
    # Mapeamento: 'sigla': ['Nome Completo', 'fundamental? (True/False)']
    config_disciplinas = {
        "art": ["Arte", True],
        "ast": ["Astronomia", False],
        "bio": ["Biologia", False],
        "cna": ["Ciências Naturais", True],
        "edf": ["Educação Física", True],
        "fil": ["Filosofia", False],
        "fis": ["Física", False],
        "gea": ["Geografia", True],
        "geo": ["Geologia", False],
        "his": ["História", True],
        "lie": ["Língua Inglesa", True],
        "lip": ["Língua Portuguesa", True],
        "mat": ["Matemática", True],
        "qui": ["Química", False],
        "soc": ["Sociologia", False]
    }

    fund_series = [str(i) for i in range(1, 10)]
    medio_series = ["1em", "2em", "3em"]

    # Pergunta sobre sobreescrita
    overwrite = input("Deseja sobreescrever arquivos já existentes? (S/N): ").strip().upper()
    can_overwrite = (overwrite == 'S')

    base_path = "js/content"
    if not os.path.exists(base_path): os.makedirs(base_path)

    print("\n🚀 Gerando estrutura padronizada...")

    criados = 0
    poupados = 0

    for sigla, info in config_disciplinas.items():
        nome, tem_fundamental = info
        folder_path = os.path.join(base_path, sigla)
        if not os.path.exists(folder_path): os.makedirs(folder_path)

        series = (fund_series + medio_series) if tem_fundamental else medio_series

        for serie in series:
            # Nome do arquivo (sempre minúsculo)
            file_name = f"{sigla}{serie}_content.js".lower()
            file_path = os.path.join(folder_path, file_name)

            # Lógica para descrição do comentário
            if "em" in serie:
                desc_serie = f"{serie[0]}º ano do ensino médio"
            else:
                desc_serie = f"{serie}º ano do ensino fundamental"

            # Proteção contra sobreescrita
            if os.path.exists(file_path) and not can_overwrite:
                print(f"⚠️  {file_name} já existe, não sobreescrever.")
                poupados += 1
                continue

            # Template com as suas novas especificações
            template = f"""/**
 * {file_name}
 * Conteúdo teórico das aulas de {nome} para o {desc_serie}.
 */

window.registrarTeoria({{
    // ============================================
    // {desc_serie.upper()}
    // ============================================


}});"""
            
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(template)
            criados += 1

    print(f"\n✅ Concluído! Criados: {criados} | Protegidos: {poupados}")

if __name__ == "__main__":
    gerar_estrutura_final()
