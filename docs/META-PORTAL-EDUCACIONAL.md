# Meta: portal educacional para a Educação Básica

## Resultado pretendido

Semear corretamente a Plataforma com conteúdos especializados para a Educação Básica: explicações, trilhas de teoria, atividades, banco de questões, provas e arenas. Cada recurso deve estar adequado à etapa, ligado aos objetivos de aprendizagem, ter procedência registrada e funcionar no portal.

Esta meta cobre o portal geral, não apenas Matemática. Matemática do 6º ano será o primeiro lote de validação, aproveitando o acervo já fornecido; o padrão validado será expandido às demais séries e áreas. Esta proposta estabelece a execução e a medição; não declara o acervo completo nem inicia tarefas automáticas em segundo plano.

## Escopo curricular

| Etapa | Organização e critérios |
| --- | --- |
| Educação Infantil | Direitos de aprendizagem, campos de experiências e objetivos por grupos etários. Experiências mediadas por adultos; não transpor provas e competição escolar automaticamente para bebês e crianças pequenas. Conferir os códigos EI atuais do projeto antes de publicar. |
| Ensino Fundamental, anos iniciais | Progressão do 1º ao 5º ano, alfabetização e letramentos, componentes e habilidades da etapa, com linguagem e atividades adequadas. |
| Ensino Fundamental, anos finais | Progressão do 6º ao 9º ano em todos os componentes aplicáveis, incluindo pré-requisitos e recomposição de aprendizagem. |
| Ensino Médio | Áreas, competências e habilidades da etapa; distribuição por série identificada como escolha curricular da rede/projeto quando não determinada pela BNCC. |

Ensino Superior fica fora desta meta. Astronomia, Geologia, Redação e outros recortes do portal devem ser identificados como organização editorial ou aprofundamento quando não constituírem um componente curricular próprio da base. Lacunas na lista atual de componentes devem ser mapeadas antes de chamar a cobertura de geral.

## Unidade de entrega

Uma unidade só fica concluída quando os seguintes recursos estiverem conectados e validados:

1. **Mapa curricular:** etapa, série ou grupo etário, componente/campo, unidade temática, objetos de conhecimento, objetivos, habilidades aplicáveis e pré-requisitos. Justificar conteúdos complementares sem código próprio; nunca inventar códigos.
2. **Trilha de teoria:** sequência compreensível, objetivos observáveis, explicações autorais, vocabulário, exemplos resolvidos, erros comuns, representações acessíveis, prática orientada e retomadas.
3. **Questões:** identificadores estáveis, vínculo com aula e objetivo/habilidade, dificuldade justificada, enunciado completo, alternativas plausíveis, resposta e resolução; rubrica para respostas abertas. Revisar ambiguidades e respostas equivalentes.
4. **Provas:** matriz explícita de habilidades e distribuição de itens, instruções, pontuação, critérios de correção, gabarito comentado e devolutiva. Definir formas distintas ou itens reservados para evitar que apenas memorizar o treino resolva a avaliação.
5. **Arenas:** seleção correta por componente, nível e unidade, disponibilidade mínima de itens e feedback educativo. Quando faltar conteúdo, informar a indisponibilidade; não preencher com questões de outra série ou disciplina.
6. **Procedência e revisão:** fonte, página/seção, versão, autoria e situação de uso do material; revisão pedagógica identificada e validação técnica. Disponibilidade de um PDF não significa autorização para republicá-lo integralmente.

Os PDFs enviados serão referências para análise e produção. BNCC e currículos serão confrontados com os conteúdos; livros e materiais do estudante/professor apoiarão a progressão, exemplos e revisão. Não transformar páginas inteiras em cópias no portal nem tratar um código BNCC preenchido como prova de alinhamento.

## Diagnóstico inicial verificável

Base inspecionada: commit `c51b9aeb86df06a2365c36dbf3a7bc1f85b019d2`, em 29/10/2026. Os números abaixo abrangem os níveis atuais declarados em `data/base/componentes.json`; tópicos sob nomes legados de série ficam fora dessas contagens e são denunciados separadamente.

| Indicador estrutural | Resultado |
| --- | ---: |
| Tópicos nas chaves de nível atuais | 516 |
| Tópicos sem HTML teórico preenchido | 240 |
| Aulas canônicas sem habilidades BNCC registradas | 516 |
| Aulas canônicas sem atividades | 516 |
| Aulas canônicas sem fontes registradas | 516 |
| Aulas canônicas sem `metadados.revisado === true` | 516 |
| Teorias com marcadores textuais de imagens não implementadas | 47 |
| Questões de arena com nível e tema compatíveis com o cadastro atual | 0 |
| Chaves legadas de nível nos currículos | 104 |
| Pares componente/nível declarados sem chave correspondente no currículo | 96 |

Isso é um inventário estrutural, não um laudo de qualidade nem percentual de cobertura de toda a Educação Básica. Os 516 tópicos não são um denominador curricular completo. As questões legadas existentes não são contadas como utilizáveis pelos filtros atuais.

### Bloqueios prioritários

- `content/mat/mat6_content.js` inclui uma aula intitulada Probabilidade cujo texto apresenta probabilidade condicional e distribuição binomial. Exige revisão de adequação à série e aos objetivos antes da expansão.
- `arena/mat_arena.js` registra um array vazio.
- `js/arena.js` permite fallback por unidade sem preservar série e componente, além de fallback genérico por disciplina. É necessário impedir mistura indevida e testar explicitamente essa seleção.
- Arquivos gerados citam `tools/gerar.js` e a origem `data/componentes`, ausentes nesta base. Recuperar ou reconstruir a fonte canônica e a geração reprodutível antes de semear arquivos derivados em massa. Não sobrescrever manualmente arquivos rotulados como gerados.
- Há nomes de componente e níveis legados que divergem de `data/base`. Consolidar o contrato preservando o mapa de IDs e o progresso existente.

## Ordem de execução e saídas

| Marco | Trabalho | Evidência de conclusão |
| --- | --- | --- |
| M0 — diagnóstico | Inventariar a base e registrar lacunas técnicas e pedagógicas. | Auditoria reproduzível, diagnóstico e plano nesta proposta; revisão pedagógica integral ainda pendente. |
| M1 — estrutura confiável | Recuperar fonte canônica/gerador; formalizar esquemas de aulas, questões e provas; normalizar níveis e componentes; corrigir seleção da arena. | Geração idempotente, testes de vínculo e seleção, IDs preservados, nenhum fallback entre séries ou matérias. |
| M2 — matriz de cobertura | Catalogar fontes por etapa, área e série; confrontar habilidades, conteúdos existentes e ausentes. | Matriz com habilidade/objetivo → aulas → atividades → provas/arenas, fonte e estado de revisão; denominadores explícitos. |
| M3 — lote piloto | Completar uma unidade de Matemática do 6º ano em todas as camadas, incluindo teoria, questões, prova e arena. | Revisão conceitual e teste do fluxo real com o mesmo conjunto de IDs; a unidade atende à definição de entrega acima. |
| M4 — expansão | Completar Matemática do 6º ao 9º ano; expandir por componente e etapa conforme a matriz. | Lotes revisáveis com contagens de cobertura por etapa e componente, pendências explicitadas. |
| M5 — consolidação | Completar as demais etapas, adequar acessibilidade e experiência à idade, verificar navegação, matemática renderizada, imagens e uso offline. | Fluxos testados por perfil, fontes e revisão registradas; publicação apenas de lotes aprovados. |

O piloto não reduz o objetivo geral. A ordem pode ser ajustada segundo as lacunas da matriz; não criar milhares de variações superficiais para aumentar contagens.

## Critérios para considerar a meta cumprida

- Todas as etapas e os componentes aplicáveis estão representados e identificados corretamente; conteúdos complementares estão sinalizados.
- Toda habilidade/objetivo do escopo tem evidência de trabalho e avaliação ou de observação adequada à etapa. Revisão pedagógica confirma a correspondência, além da validação do código.
- Não há conteúdo publicado vazio, imagens prometidas sem recurso real, respostas incorretas conhecidas ou pré-requisitos quebrados.
- Provas e arenas respeitam a seleção curricular e fornecem devolutiva; experiência da Educação Infantil é própria da etapa.
- Cada lote tem fonte rastreável, revisão pedagógica e verificação técnica; pendências impedem tratá-lo como concluído.
- O pipeline gera os arquivos de distribuição a partir de fontes versionadas, valida vínculos e não quebra progresso já salvo.

## Como acompanhar agora

Requer Node.js, sem dependências externas:

```sh
node tools/auditar-conteudos.cjs
node tools/auditar-conteudos.cjs --json
node tools/auditar-conteudos.cjs --strict
node --test tests/auditar-conteudos.test.cjs
```

O modo normal inventaria sem falhar por pendências existentes. `--strict` retorna código 1 quando encontra lacunas estruturais; a base inicial deve falhar. `--json` detalha componente, nível e problema. A ferramenta não avalia correção científica, validade dos códigos BNCC, licenças, qualidade dos distratores, acessibilidade ou cobertura pedagógica integral. Essas verificações pertencem aos próximos marcos.
