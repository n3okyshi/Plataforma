# Estrutura de planejamento da Educação Básica

Arquivo existente não significa conteúdo autorado ou validação pedagógica.

## Onde trabalhar

- `inventario.json`: totais, verificações e limites.
- `catalogo.json`: tópicos e arquivos; `estruturaNova` distingue rascunhos de arquivos preservados.
- `ciencias-328.json`: os 328 tópicos de Ciências ainda sem autoria, com arquivo individual.
- `matriz.json`: componentes, campos, áreas e anos; inglês inicial e componentes editoriais sinalizados.
- `referencias-curriculares.json`: códigos, descrições, fontes e faixas; vínculo estrutural não é alinhamento homologado.
- `lacunas.json`: vínculos a conferir, acesso restrito de Computação e dependências locais.
- `fila-autoria.json`: Ciências primeiro; Português por último.

Aulas novas ficam em `data/componentes/<componente>/rascunhos/aulas/`; planos das seis camadas em `rascunhos/unidades/`. O campo `planejamento.unidade` liga cada aula ao plano. Os esquemas são `aula-rascunho.schema.json` e `planejamento-unidade.schema.json`.

## Conteúdo e publicação

Rascunhos têm teoria e atividades vazias de propósito, estado `rascunho` e `publicacao.permitida: false`. Não são importados por `content/`, `curriculum/` ou `arena/`. O Registry bloqueia rascunhos explícitos em ambas as ordens de importação e remove teoria/currículo dos IDs bloqueados. Não altere a permissão para simular conclusão.

Antes da promoção: examine referências e conteúdo existente; confronte todas as dimensões dos objetivos; escreva teoria, exemplos, recursos reais e atividades; produza itens com respostas conferidas e avaliação de produções; confira fontes, pré-requisitos e seleção; realize revisões e verificações. Depois prepare promoção explícita para caminhos canônicos/chunks. Preserve IDs e informe limites de homologação. Planos que referenciam aulas existentes não autorizam reescrita automática delas.

Na Educação Infantil, use campos de experiências, interações, brincadeiras, registros e devolutiva. Prova objetiva e arena são `nao_aplicavel`. Objetivos compartilhados mantêm código e abrangência; a progressão anual ainda exige decisões pedagógicas.

## Limites

Computação tem eixos e espaços de planejamento, mas os códigos não foram transcritos: abertura integral das fontes oficiais retornou captcha/403. Não há códigos inventados. EI e Ensino Religioso foram extraídos do PDF BNCC consultado, com páginas e revisão integral da transcrição ainda indicada. Demais códigos vêm da base local e exigem confronto oficial/semântico.

Matriz da rede, modalidades, parte diversificada e itinerários não foram fornecidos. A estrutura não certifica completude de currículos locais. Conteúdos canônicos anteriores foram preservados, inclusive legados ainda em revisão.
