# Plataforma — portal educacional

Portal de teoria, atividades, questões comentadas, provas e arenas para a Educação Básica. A ordem atual está em `data/base/ordem-servico.json`.

## Matemática: todos os anos do escopo com conteúdo para testes

O conteúdo de **EF01–EF09 e EM01–EM03** está implementado em todas as camadas, como **piloto**, com homologação docente e uso real pendentes. Não representa certificação de aprendizagem nem encerramento das pendências.

| Ano | Sequências/aulas | Unidades/provas | Treino | Itens próprios de prova |
| --- | ---: | ---: | ---: | ---: |
| EF01 | 26 | 9 | 26 | 45 |
| EF02 | 31 | 11 | 31 | 55 |
| EF03 | 24 | 10 | 24 | 28 |
| EF04 | 20 | 11 | 20 | 32 |
| EF05 | 22 | 11 | 22 | 28 |
| EF06 | 67 | 14 | 94 | 75 |
| EF07 | 36 | 13 | 40 | 65 |
| EF08 | 29 | 8 | 29 | 40 |
| EF09 | 34 | 9 | 34 | 45 |
| EM01 | 27 | 11 | 27 | 28 |
| EM02 | 24 | 7 | 24 | 24 |
| EM03 | 30 | 10 | 30 | 30 |

As aulas reúnem conceitos, exemplos, aplicações comentadas, tarefas de produção, respostas orientadoras e critérios. Sequências amplas podem ocupar mais de um encontro; pesquisas e projetos exigem tempo adicional e execução real. Há leitura mediada e registros por fala, objetos ou desenhos nos anos iniciais. Os portfólios distinguem a produção prática da nota objetiva.

As **247 habilidades de Matemática do Fundamental** e as **43 habilidades da etapa do Ensino Médio** têm evidências planejadas. No EM, a distribuição por série é proposta do projeto, pois os códigos EM13 se referem à etapa; consultar `data/componentes/mat/cobertura_EM.json`. Não se exige repetição idêntica das 43 habilidades em cada série.

Os IDs antes disponíveis no percurso foram preservados. Os destinos de subtópicos reorganizados estão em `integracoes_<nivel>.json`. A granularidade dessas integrações deve ser conferida na homologação docente. Complementos estão identificados e não bloqueiam a progressão; as provas principais não exigem os complementos avulsos. Função modular, complexos e polinômios, binômio de Newton e geometria analítica adicional têm unidades e avaliações próprias, opcionais.

## Avaliação e pendências

Treino e prova usam bancos separados e seleção por componente, nível, unidade e finalidade. O treino usa até cinco itens disponíveis da própria unidade; as provas seguem seus planos explícitos e têm quantidade variável conforme a unidade. A correção objetiva aparece ao final. A nota usa o total efetivo e não substitui observação das produções.

As tarefas incluem construções, medições, pesquisas, programação, análise de fontes e modelagem. A presença de enunciado e rubrica não comprova que o estudante executou a tarefa. Cada produção precisa de registros reais e devolutiva docente.

Permanecem pendentes: aplicação em turma e homologação docente; revisão visual e acessibilidade em navegador; autenticação, persistência Firebase e cache em ambiente real. Não há lote homologado como concluído. Programas Python de apoio são exemplos executáveis; a interface não oferece um interpretador embutido.

## Acervo e fontes

Foram recuperadas 517 aulas e oito árvores de `componentes.zip`. Materiais dos demais componentes continuam como rascunhos ou planejamento; existência do arquivo não indica conclusão. Há 69 PDFs enviados catalogados e uma referência cartográfica pública complementar do USGS. PDFs não são redistribuídos no repositório. As referências por aula registram documentos e páginas; explicações, exemplos, questões e recursos incorporados são autorais.

O Manual Compacto é referência conceitual, sem transferir automaticamente sua linguagem aos anos iniciais. A BNCC delimita habilidades e objetivos. O confronto integral e a normalização dos demais componentes ainda têm lacunas registradas.

## Organização

| Local | Conteúdo |
| --- | --- |
| `data/base` | Níveis, componentes, fontes, inventário, matriz e ordem de serviço |
| `data/bncc` | Habilidades por componente |
| `data/componentes` | Árvores, aulas, questões, provas e evidências |
| `data/esquemas` | Contratos de dados |
| `curriculum` | Navegação por códigos e IDs estáveis |
| `content` | Aulas carregadas por componente e série |
| `arena` | Bancos de questões e provas |
| `js` | Interface, registro, atividades e motores |

A fonte JSON e o respectivo arquivo de consumo do navegador devem permanecer sincronizados. Níveis usam EF01–EF09, EM01–EM03 e, na Educação Infantil, EI01–EI03. O legado EI04 não é convertido silenciosamente. Educação Infantil exige experiência própria; a expansão de Língua Portuguesa e Ciências segue pendente. Próxima autoria: unidade piloto de Língua Portuguesa EF06.

## Execução local

Sirva a raiz por HTTP, por exemplo `python -m http.server 8000`, e abra `http://localhost:8000`. A interface usa JavaScript, CSS/Tailwind, MathJax e Firebase. Autenticação e persistência dependem da configuração e regras do Firebase. Cache de conteúdos visitados não significa instalação de todo o acervo.

## Língua Portuguesa: unidade piloto EF06

Língua, Texto e Contexto: quatro aulas curriculares, um apoio complementar opcional, dez atividades, quatro questões de treino e quatro itens próprios de prova. Portfólio de comparação jornalística, relação entre gêneros, variação linguística e revisão escrita com apresentação oral. EF06LP01, EF06LP02, EF69LP55 e EF69LP56 têm tarefas explícitas; não há alegação de cobertura integral do ano. O apoio de comunicação não recebe vínculo BNCC artificial nem bloqueia o percurso. O placeholder foi removido. Demais unidades seguem em planejamento. Homologação docente, aplicação, revisão visual/acessibilidade e Firebase/cache reais permanecem pendentes.

## Ampliação de Português EF06: Morfologia

Cinco aulas, dez atividades, cinco questões de treino e cinco itens próprios de prova, com portfólio. EF06LP03, EF67LP34 e EF67LP35 têm tarefas específicas; criação de palavras foi realocada para EF67LP35. Acumulado: dez aulas (uma complementar), vinte atividades e nove itens em cada banco, em duas unidades. Demais unidades continuam pendentes, assim como homologação docente, revisão visual/acessibilidade e Firebase/cache reais.
