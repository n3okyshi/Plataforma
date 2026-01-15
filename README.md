<div align="center">

  <img src="https://img.icons8.com/fluency/96/owl.png" alt="logo" width="80" height="80" />
  
  # MathLingo: Ecossistema Educacional de Alta Performance
  
  **Uma solução Full-Stack PWA para educação gamificada, multidisciplinar e orientada a dados.**
  
  [Sobre](#-sobre-o-projeto) • [Funcionalidades](#-funcionalidades-detalhadas) • [Arquitetura](#-arquitetura-técnica) • [Professor](#-ecossistema-docente) • [Infraestrutura](#-infraestrutura-e-dados) • [Tecnologias](#-stack-tecnológica)

  ![Versão](https://img.shields.io/badge/Versão-0.0.2-green?style=for-the-badge)
  ![Licença](https://img.shields.io/badge/License-MIT-gray?style=for-the-badge)
  ![PWA](https://img.shields.io/badge/PWA-Ready-orange?style=for-the-badge)

</div>

---

## 📖 Sobre o Projeto

O **MathLingo** é muito mais que uma plataforma de estudos; é um **motor pedagógico** projetado para escalar. Criado sob a premissa de que a tecnologia não deve engessar o conteúdo, o sistema utiliza um modelo de **Desacoplamento de Conteúdo (Content Decoupling)**. Isso significa que a interface, a lógica de gamificação e os dados curriculares funcionam de forma independente, permitindo que novos anos letivos, disciplinas e cursos inteiros sejam adicionados apenas "registrando" novos arquivos, sem jamais tocar no núcleo (*core*) do software.

---

## ✨ Funcionalidades Detalhadas

### 🚀 Pipeline de Carregamento Assíncrono (Loader Turbo)
O MathLingo resolve o problema de latência em PWAs através de um sistema de carregamento inteligente:
- **Modularização Dinâmica:** O `loader.js` atua como um orquestrador que identifica o perfil do usuário (Ex: 1º Ano Ensino Médio) e solicita apenas os fragmentos de código necessários para aquela sessão.
- **Resiliência de Rede:** Implementa lógica de *retry* automático (até 3 tentativas) com intervalos de segurança, garantindo que o app carregue mesmo em redes 3G instáveis.
- **Gerenciamento de Cache:** Utiliza versionamento por query strings (`?v=0.0.2`) para invalidar caches obsoletos em atualizações críticas de conteúdo.

### 👨‍🏫 Ecossistema Docente (Analytics & Gestão)
O Dashboard do Professor foi blindado para lidar com dados reais e complexos:
- **Filtragem de Contexto Multidimensional:** Alternância instantânea entre turmas e matérias com atualização reativa de médias e estatísticas.
- **Tratamento de Exceções de Dados:** O sistema processa objetos NoSQL do Firebase com extrema cautela, utilizando lógica de prioridade para nomes (`fullname` > `nome` > `Estudante`) para evitar quebras de interface por dados incompletos.
- **Visão de Desempenho:** Cards de estatísticas colorizados dinamicamente baseados na média da turma e nível de engajamento (XP).

### 🎮 Gamificação e UX Adaptativa
- **Progressão Espiral:** As lições são organizadas em mapas visuais que respeitam o ritmo do aluno.
- **Feedback Sensorial:** Integração com a *Web Audio API* para sintetização de efeitos sonoros e *Canvas API* para animações de sucesso (confetes), reforçando positivamente o aprendizado.
- **Temas Dinâmicos:** Suporte profundo a Dark/Light Mode que afeta até mesmo a renderização de fórmulas complexas.

---

## 🏗️ Arquitetura Técnica

O MathLingo adota o paradigma **"No-Framework"**, utilizando Vanilla JavaScript para garantir um pacote final (*bundle*) extremamente leve e veloz.

### Fluxo de Ignição e Injeção
1. **Boot:** O `index.html` inicializa apenas o CSS base e o `loader.js`.
2. **Registry:** Os scripts de currículo registram a árvore de tópicos no objeto global `window.registry`.
3. **View Rendering:** O `app.js` detecta a rota atual e solicita à `views.js` o template correspondente.
4. **Content Injection:** Ao abrir uma lição, o conteúdo específico (HTML/LaTeX) é buscado no repositório de `js/content/` e injetado via `innerHTML` em containers protegidos.

### Automação via Python
Para manter a consistência em um projeto com centenas de arquivos, utilizamos scripts de automação:
- **Geração de Scaffold:** O script Python cria automaticamente a estrutura de pastas por disciplina e gera os arquivos `.js` com cabeçalhos de comentários padronizados.
- **Proteção Anti-Overwrite:** Sistema de segurança que impede a perda de conteúdo já preenchido durante rodadas de automação.

---

## 📊 Estrutura de Dados (NoSQL)

A persistência no Firebase Firestore segue um esquema de documentos flexíveis:
- **`users`**:
  - `fullname`: Identificador oficial do estudante.
  - `xp`: Contador inteiro de experiência (base para o sistema de Nível).
  - `turma`: String de agrupamento (Ex: "3º Ano A").
  - `notas`: Sub-objeto mapeado por disciplina para evitar múltiplas leituras.
  - `completedLessons`: Log de trilha para impedir o ganho de XP duplicado.

---

## 🧪 Abrangência Curricular (Ensino Médio)

A plataforma já está preparada com os *blueprints* curriculares para:
- **Matemática:** De Conjuntos e Funções a Matrizes e Educação Financeira.
- **Biologia:** Abrange Citologia, Ecologia, Genética, Evolução e Sistemas do Corpo Humano.
- **Física:** Mecânica de Newton, Termologia, Ondulatória, Eletromagnetismo e Física Moderna.
- **Química:** Modelos Atômicos, Tabela Periódica, Estequiometria, Gases e Química Orgânica.

---

## 🛠️ Stack Tecnológica

- **Core:** Vanilla JavaScript (ES6+).
- **Style:** Tailwind CSS (via CDN para desenvolvimento ágil).
- **Backend-as-a-Service:** Firebase (Auth, Firestore, Hosting).
- **Math Engine:** MathJax 3.0 para renderização de fórmulas científicas.
- **PWA Tools:** Service Workers, Web App Manifest e Cache API.

---

<div align="center">
  <sub>MathLingo — "Ensinando como o cérebro aprende."</sub>
  <br/>
  <sub>Desenvolvido com 💙 para a educação brasileira.</sub>
</div>