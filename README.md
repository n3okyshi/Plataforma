# Plataforma — portal educacional

Portal de conteúdos para a Educação Básica, com trilhas de teoria, prática, questões comentadas, provas e arenas. O trabalho segue a ordem registrada em [ordem de serviço](data/base/ordem-servico.json).

## Situação do acervo

Foram recuperadas 517 aulas em JSON e oito árvores curriculares de `componentes.zip`. A recuperação preserva o material como rascunho ou planejamento: a existência do arquivo não indica que a aula foi concluída. As correspondências BNCC propostas precisam de revisão conceitual e de adequação à etapa.

O primeiro lote para uso experimental é **Matemática · EF06 · Números naturais e sistemas de numeração**:

- Três aulas com explicações, exemplos, vocabulário e pré-requisitos.
- Nove atividades: múltipla escolha, resposta numérica e discursiva com rubrica.
- Quinze questões autorais de treino.
- Prova com dez itens próprios, matriz e correção comentada ao final.
- Vínculos com EF06MA01/EF06MA02 limitados ao recorte de naturais. A parte de racionais decimais finitos será aprofundada em Decimais.

As demais unidades e disciplinas continuam em desenvolvimento. Os IDs existentes foram preservados para manter os vínculos com o progresso.

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

Os PDFs são referenciados por nome e página em [fontes](data/base/fontes.json), sem redistribuição dos arquivos no repositório. Há 69 referências catalogadas. O PDF BNCC de 600 páginas contém Educação Infantil, Ensino Fundamental e Ensino Médio. Páginas das árvores recuperadas ainda precisam de conferência; as páginas do piloto foram consultadas diretamente.

## Contratos e estados

Níveis usam códigos como `EF06` e `EM01`; nomes exibidos vêm de `data/base/niveis.json`. As três faixas da Educação Infantil são `EI01`, `EI02` e `EI03`. A classificação legada `EI04` não tem correspondência automática com um grupo BNCC.

Aulas usam IDs estáveis no formato `componente.nivel.unidade.aula`. Os estados são `rascunho`, `piloto` e `publicado`. Objetivos, blocos de teoria, atividades, habilidades, pré-requisitos e fontes ficam no JSON da aula. A matriz registra cobertura parcial ou planejamento; não certifica domínio de uma habilidade inteira por associação de código.

O piloto mantém seus JSONs e os arquivos de consumo do navegador sincronizados. Ao editar uma aula ou questão, atualize também o respectivo arquivo usado pelo navegador; não existem etapas de construção externas obrigatórias.

Treino e prova têm itens separados. A arena filtra componente, nível, unidade e finalidade. Quando faltam itens, informa a indisponibilidade. No treino, a explicação aparece após cada resposta; na prova, a correção fica para o final. O mapa libera apenas aulas em estado piloto ou publicado e com texto; os demais rascunhos continuam preservados na base.

## Execução local

Sirva a raiz por HTTP, por exemplo:

```sh
python -m http.server 8000
```

Abra `http://localhost:8000`. A interface usa JavaScript sem framework, CSS/Tailwind, MathJax e Firebase. Autenticação e persistência dependem da configuração e das regras do projeto Firebase. Conteúdos visitados podem ser armazenados pelo service worker; isso não significa que todo o acervo seja instalado de uma só vez.
