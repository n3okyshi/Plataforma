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

## Português EF06: Classes Gramaticais

Sete aulas adicionais e quatorze atividades. Núcleo curricular: substantivos, adjetivos, pronomes em coesão e verbos/modos; quatro questões de treino e quatro itens próprios de prova. Bloco opcional separado: artigos/numerais, advérbio/preposição/conjunção e interjeição, com três questões de treino, três itens próprios de prova e portfólio próprios. Recorte de EF06LP04, EF06LP05 e EF06LP12, sem afirmar conclusão integral dessas habilidades. Acumulado: dezessete aulas, trinta e quatro atividades, dezesseis questões de treino e dezesseis itens de prova em quatro avaliações (uma complementar). Homologação docente, uso real, visual/acessibilidade e Firebase/cache continuam pendentes.

## Português EF06: Sintaxe da Oração

Seis aulas e doze atividades adicionais; seis questões de treino e seis itens próprios de prova, com portfólio. O treino sorteia até cinco itens da unidade; a prova utiliza os seis itens previstos. Trabalha frases/orações/períodos, períodos simples/compostos, sintagmas, coordenação sem conectivo e concordância nominal/verbal. Inclui relato com rascunho, versão revisada e justificativas. Acumulado: vinte e três aulas, quarenta e seis atividades, vinte e duas questões de treino e vinte e dois itens de prova em cinco avaliações (uma complementar). Vínculos EF06LP06–EF06LP11 são recortes com evidências planejadas; revisão docente e uso real continuam pendentes.

## Português EF06: Ortografia e Pontuação

Cinco aulas, dez atividades, cinco questões de treino e cinco itens próprios de prova, com portfólio de escrita/revisão. Parônimas e homônimas passam a EF67LP32 pelo uso ortográfico em contexto, sem vínculo artificial com EF06LP03. EF67LP33 tem produção pontuada e comparação de sentidos. Regras de acentuação e hífen são apresentadas em recorte explícito. Total de Português: 28 aulas, 56 atividades e 27 itens por banco, com seis avaliações (uma complementar). Inventário atualizado; restam 33 entradas planejadas de EF06 sem autoria. Homologação docente, visual/acessibilidade e Firebase/cache reais permanecem pendentes.

## Português EF06: Leitura e Gêneros

Sete aulas, quatorze atividades, sete questões de treino e sete itens próprios de prova, com portfólio. Hiperlinks internos reais e textos fictícios identificados. Publicação e comparação real exigem registros. Acumulado: 35 aulas, 70 atividades, 34 itens por banco e sete avaliações (uma complementar). Restam 26 entradas planejadas de EF06 sem autoria. Homologação docente, aplicação, visual/acessibilidade e Firebase/cache reais continuam pendentes.

## Português EF06: Mídia e Produção de Textos

Doze aulas e vinte e quatro atividades adicionais, com doze itens por banco, duas provas e portfólios. Ilustrações autorais incorporadas para enquadramento, publicidade e humor. Notícias apuradas, gravações e apresentações exigem entregas reais; roteiros e modelos não comprovam execução. Acumulado: 47 aulas, 94 atividades, 46 itens por banco e nove avaliações (uma complementar). Restam 14 entradas planejadas de EF06. Demais anos e Ciências seguem pendentes de autoria. Homologação docente, visual/acessibilidade e Firebase/cache reais continuam pendentes.

## Português EF06: árvore planejada preenchida, auditoria curricular aberta

Oralidade, Literatura e Cidadania acrescentam 14 aulas e 28 atividades. Oito aulas adicionais tratam as lacunas EF67, totalizando 22 aulas novas, 44 atividades, 22 itens por banco e quatro provas com portfólios. Textos literários e normas simuladas estão incorporados e identificados. Acumulado: 69 aulas (quatro complementares), 138 atividades, 69 questões de treino, 69 itens próprios de prova e treze avaliações (uma complementar). A árvore original não tem mais aulas sem autoria; isso não é cobertura integral da BNCC: 47 de 106 códigos aplicáveis da base ainda não têm aula autoral vinculada. Lacunas explicitadas em data/base/lacunas-portugues-EF06.json; códigos vinculados também exigem revisão semântica das dimensões e gêneros. Produções, observações e percursos leitores precisam de execução real. Homologação docente, visual/acessibilidade e Firebase/cache permanecem pendentes.

## Ciências: primeiro núcleo EF01–EF03 para testes

24 sequências, 48 atividades, 24 questões de treino e 24 itens próprios de prova em nove eixos/unidades com portfólios. As seis habilidades de EF01, oito de EF02 e dez de EF03 têm evidências planejadas. Sequências amplas podem exigir vários encontros; observações e investigações não são comprovadas pelo item objetivo. Preserva 24 IDs e registra sua realocação nos eixos. Outros tópicos recuperados permanecem planejamento, identificados em data/base/status-ciencias.json; nenhum ano é tratado como integralmente homologado. A navegação usa o nome canônico Ciências Naturais, da área Ciências da Natureza. Português permanece preservado e passa ao fim da expansão. BNCC consultada nas páginas PDF 335, 337 e 339; o Manual Compacto foi localizado/catalogado, sem atribuir páginas conceituais que não foram lidas a este lote. Homologação docente, visual/acessibilidade e Firebase/cache reais pendentes.

## Ciências: núcleo EF04–EF05

24 sequências adicionais, 48 atividades, 24 itens em cada banco e seis provas com portfólios. As 11 habilidades de EF04 e 13 de EF05 têm evidências planejadas em recortes. Total de Ciências: 48 sequências, 96 atividades, 48 questões de treino, 48 itens próprios de prova e 15 avaliações. Preserva 24 IDs planejados e todos os lotes publicados. Lua exige registros por pelo menos dois meses; execução permanece pendente até completar o período. Cardápio e casos nutricionais são educativos, sem prescrição/diagnóstico individual. Demais tópicos recuperados e dimensões curriculares continuam em revisão/autoria, listados no inventário. Fontes: BNCC páginas PDF 341/343, trechos consultados do Manual Compacto e fontes oficiais de saúde. Homologação docente, visual/acessibilidade e Firebase/cache reais permanecem pendentes.

## Ciências: núcleo EF06–EF07

30 sequências adicionais, 60 atividades, 30 itens em cada banco e seis provas com portfólios. As 14 habilidades de EF06 e 16 de EF07 têm evidências planejadas em recortes. Esquemas autorais de célula e níveis de organização incorporados. Acumulado: 78 sequências, 156 atividades, 78 questões de treino, 78 itens próprios de prova e 21 avaliações. Fontes e limites de consulta registrados por aula; modelos, dados simulados e observação real são distinguidos. Preserva 30 IDs planejados e todos os lotes anteriores. Tópicos restantes e dimensões completas das habilidades continuam em revisão/autoria; não equivale à conclusão integral de cada ano. Homologação docente, visual/acessibilidade e Firebase/cache reais permanecem pendentes.
