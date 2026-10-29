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

O estado do material é **piloto**, com aplicação em turma, conferência visual no navegador, persistência Firebase e homologação docente pendentes. As demais séries e disciplinas permanecem em desenvolvimento, seguindo a ordem de serviço. Os IDs anteriores foram preservados.

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

Os PDFs são referenciados por nome e página em [fontes](data/base/fontes.json), sem redistribuição dos arquivos no repositório. Há 69 referências catalogadas. O PDF BNCC de 600 páginas contém Educação Infantil, Ensino Fundamental e Ensino Médio. As aulas EF06 têm referências com páginas impressas e páginas do PDF identificadas; os vínculos recuperados das outras séries continuam pendentes de conferência.

## Contratos e estados

Níveis usam códigos como `EF06` e `EM01`; nomes exibidos vêm de `data/base/niveis.json`. As três faixas da Educação Infantil são `EI01`, `EI02` e `EI03`. A classificação legada `EI04` não tem correspondência automática com um grupo BNCC.

Aulas usam IDs estáveis no formato `componente.nivel.unidade.aula`. Os estados são `rascunho`, `piloto` e `publicado`. Objetivos, blocos de teoria, atividades, habilidades, pré-requisitos e fontes ficam no JSON da aula. A matriz registra cobertura parcial ou planejamento; não certifica domínio de uma habilidade inteira por associação de código.

O lote mantém seus JSONs e os arquivos de consumo do navegador sincronizados. Ao editar uma aula ou questão, atualize também o respectivo arquivo usado pelo navegador; não existem etapas de construção externas obrigatórias.

Treino e prova têm itens separados. A arena filtra componente, nível, unidade e finalidade. Quando faltam itens, informa a indisponibilidade. No treino, a explicação aparece após cada resposta; na prova, a correção fica para o final. O mapa libera apenas aulas em estado piloto ou publicado e com texto; os demais rascunhos continuam preservados na base.

## Execução local

Sirva a raiz por HTTP, por exemplo:

```sh
python -m http.server 8000
```

Abra `http://localhost:8000`. A interface usa JavaScript sem framework, CSS/Tailwind, MathJax e Firebase. Autenticação e persistência dependem da configuração e das regras do projeto Firebase. Conteúdos visitados podem ser armazenados pelo service worker; isso não significa que todo o acervo seja instalado de uma só vez.
