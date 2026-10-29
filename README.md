# Plataforma — portal educacional

Portal de conteúdos para a Educação Básica, com trilhas de teoria, prática, questões comentadas, provas e arenas. O trabalho segue a ordem registrada em [ordem de serviço](data/base/ordem-servico.json).

## Situação do acervo

Foram recuperadas 517 aulas em JSON e oito árvores curriculares de `componentes.zip`. A recuperação preserva o material como rascunho ou planejamento: a existência do arquivo não indica que a aula foi concluída. As correspondências propostas nas outras séries e componentes ainda precisam de revisão conceitual e de adequação à etapa.

A versão integral de **Matemática · 6º ano (EF06)** está disponível como lote para testes:

- **67 aulas em 14 unidades**, com objetivos, explicações, exemplos resolvidos, erros comuns e atividades de investigação ou construção.
- **137 atividades** de aplicação e produção, com gabaritos e rubricas.
- **94 questões de treino** e **14 provas com 75 itens próprios**, separados do treino.
- Etapas práticas para as treze unidades acrescentadas, com avaliação docente e autoavaliação orientada; sua realização não é substituída pela nota objetiva.
- As **34 habilidades EF06MA01–EF06MA34** têm vínculos com aulas e tarefas em [cobertura EF06](data/componentes/mat/cobertura_EF06.json). A presença dos recursos não certifica domínio do estudante.
- “A ideia de função” e “Principais corpos redondos” estão sinalizados como complementos opcionais e não bloqueiam a progressão principal.

O lote de **Matemática · 7º ao 9º ano** também está disponível para testes:

| Ano | Aulas | Unidades/provas | Habilidades | Atividades | Treino | Itens de prova |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 7º | 36 | 13 | 37 | 72 | 40 | 65 |
| 8º | 29 | 8 | 27 | 58 | 29 | 40 |
| 9º | 34 | 9 | 23 | 68 | 34 | 45 |

As 30 provas têm cinco itens próprios e portfólios com tarefas, respostas esperadas, critérios e referências às atividades de origem. A devolutiva do portfólio é docente, por produção. Os 76 IDs que já existiam no percurso desses anos foram preservados. Subtópicos do planejamento foram integrados em aulas completas; os destinos constam nos arquivos `integracoes_EF07.json`, `integracoes_EF08.json` e `integracoes_EF09.json` em `data/componentes/mat`.

As 87 habilidades têm evidências planejadas nos arquivos de cobertura de cada ano. Inequações do 7º ano e a retomada de conjuntos do 8º estão sinalizadas como complementos opcionais. Conteúdo disponível não comprova aprendizagem.

O estado do material é **piloto**, com aplicação em turma, conferência visual no navegador, persistência Firebase e homologação docente pendentes. As demais séries e disciplinas permanecem em desenvolvimento, seguindo a ordem de serviço. A ordem ampliada inclui EF01–EF05 antes do Ensino Médio; após os lotes EF01–EF02, a autoria segue por EF03–EF05.

## Ampliação para os anos iniciais

O lote **Matemática · 1º ano (EF01)** contém 26 aulas em nove unidades, 52 atividades, 26 questões de treino e nove provas com 45 itens próprios. As 22 habilidades têm evidências planejadas em `data/componentes/mat/cobertura_EF01.json`. Cada prova inclui um portfólio de produções com critérios específicos, observação docente e possibilidade de revisão.

A proposta prevê leitura mediada e respostas por fala, gestos, objetos ou desenhos, com ajuda de um adulto para o registro digital. Não exige velocidade nem escrita autônoma para demonstrar conhecimentos matemáticos. As atividades incluem contagem até cem, agrupamentos e padrões, localização com referências, formas, comparação de grandezas, calendário, valores monetários, situações de acaso e pesquisa real de até trinta participantes. Ilustrações, calendário, tabela e gráfico estão incorporados às aulas. O Manual Compacto é referência conceitual, sem transferência de sua linguagem para a alfabetização matemática.

Os doze IDs anteriores do percurso EF01 foram preservados. Os seis subtópicos integrados em aulas completas têm destinos registrados em `integracoes_EF01.json`. O inventário registra EF03–EF05 como planejamento a completar; a ampliação de Língua Portuguesa e Ciências também está na ordem de serviço. Os lotes EF06–EF09 permanecem preservados.

O EF01 está em **piloto para testes**, com aplicação em turma, revisão visual e de acessibilidade, Firebase e homologação docente pendentes. A nota objetiva é apenas uma devolutiva parcial; a observação das produções é indispensável.

O lote **Matemática · 2º ano (EF02)** acrescenta 31 aulas em onze unidades, 62 atividades, 31 questões de treino e onze provas com 55 itens próprios. As 23 habilidades têm evidências planejadas em `cobertura_EF02.json`; cada prova inclui portfólio prático e critérios específicos por produção. Leitura mediada, manipulação e estratégias pessoais fazem parte da proposta.

Inclui números até a ordem das centenas e contagem até mil, adição e subtração com compreensão dos reagrupamentos, grupos iguais por 2, 3, 4 e 5, dobro e partilhas, padrões, formas e percursos, medições, calendário e relógio digital, equivalência monetária e pesquisa real de até trinta participantes. A rede de cubo é um complemento opcional, sem associação artificial a uma habilidade obrigatória de planificação. Recursos como reta numérica, figuras, rede, planta, calendário, tabela e gráfico estão incorporados.

Os nove IDs anteriores do percurso EF02 foram preservados; sete subtópicos foram integrados em aulas completas, com destinos registrados em `integracoes_EF02.json`. O lote segue **piloto**, pendente de aplicação em turma, homologação docente, revisão visual e acessibilidade e conferência do Firebase. A ordem de serviço está consolidada nas quinze etapas atuais. Próximo lote: Matemática EF03.

## Organização

| Local | Conteúdo |
| --- | --- |
| `data/base` | Níveis, componentes, fontes, inventário, matriz de cobertura e ordem de serviço |
| `data/bncc` | Habilidades da base curricular por componente |
| `data/componentes` | Árvores de planejamento, aulas, questões e provas em JSON |
| `data/esquemas` | Contratos de dados de aula, atividade, questão e prova |
| `curriculum` | Currículos usados na navegação, com códigos de nível e IDs de aula |
| `content` | Conteúdo carregado sob demanda por componente e série |
| `arena` | Questões e provas disponíveis para os motores de interação |
| `js` | Navegação, registro, atividades, gamificação e interface |

Os PDFs são referenciados por nome e página em [fontes](data/base/fontes.json), sem redistribuição dos arquivos no repositório. Há 69 referências catalogadas. O PDF BNCC de 600 páginas contém Educação Infantil, Ensino Fundamental e Ensino Médio. As aulas EF01–EF02 e EF06–EF09 têm referências com páginas impressas e páginas do PDF identificadas; os vínculos recuperados das demais séries continuam pendentes de conferência.

## Contratos e estados

Níveis usam códigos como `EF06` e `EM01`; nomes exibidos vêm de `data/base/niveis.json`. As três faixas da Educação Infantil são `EI01`, `EI02` e `EI03`. A classificação legada `EI04` não tem correspondência automática com um grupo BNCC.

Aulas usam IDs estáveis no formato `componente.nivel.unidade.aula`. Os estados são `rascunho`, `piloto` e `publicado`. Objetivos, blocos de teoria, atividades, habilidades, pré-requisitos e fontes ficam no JSON da aula. A matriz registra cobertura parcial ou planejamento; não certifica domínio de uma habilidade inteira por associação de código.

O lote mantém seus JSONs e os arquivos de consumo do navegador sincronizados. Ao editar uma aula ou questão, atualize também o respectivo arquivo usado pelo navegador; não existem etapas de construção externas obrigatórias.

Treino e prova têm itens separados. A arena filtra componente, nível, unidade e finalidade. Cada treino de unidade usa até cinco itens disponíveis, sem completar a seleção com outro ano, unidade ou componente. Um banco vazio permanece indisponível. As provas usam exatamente os IDs previstos em seu plano. No treino, a explicação aparece após cada resposta; na prova, a correção fica para o final. O mapa libera apenas aulas em estado piloto ou publicado e com texto; os demais rascunhos continuam preservados na base.

## Execução local

Sirva a raiz por HTTP, por exemplo:

```sh
python -m http.server 8000
```

Abra `http://localhost:8000`. A interface usa JavaScript sem framework, CSS/Tailwind, MathJax e Firebase. Autenticação e persistência dependem da configuração e das regras do projeto Firebase. Conteúdos visitados podem ser armazenados pelo service worker; isso não significa que todo o acervo seja instalado de uma só vez.
