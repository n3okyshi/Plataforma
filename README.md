<div align="center">

  <img src="https://img.icons8.com/fluency/96/owl.png" alt="logo" width="80" height="80" />
  
  # MathLingo: Plataforma Didática Modular
  
  **Aprenda Matemática, Ciências e Computação de forma gamificada.**
  
  [Funcionalidades](#-funcionalidades) • [Arquitetura](#-arquitetura) • [Tecnologias](#-tecnologias) • [Instalação](#-instalação)

  ![Status](https://img.shields.io/badge/Status-Versão_0.0.1-green)
  ![Tech](https://img.shields.io/badge/Tech-Vanilla_JS_|_Tailwind-blue)
  ![License](https://img.shields.io/badge/License-MIT-gray)

</div>

---

## 📖 Sobre o Projeto

**MathLingo** é uma Aplicação Web Progressiva (PWA) de código aberto focada no ensino adaptativo. Ao contrário de plataformas rígidas, o MathLingo utiliza uma **arquitetura de registros** que permite misturar, na mesma interface, conteúdos do Ensino Fundamental (ex: tabuada) com conteúdos de Nível Superior (ex: Cálculo Diferencial e Integral).

O sistema oferece uma experiência imersiva com temas escuros/claros, sons sintetizados em tempo real e persistência de dados na nuvem.

---

## ✨ Funcionalidades Principais

### 🚀 Navegação Híbrida Inteligente
O sistema detecta automaticamente o tipo de conteúdo e adapta a navegação:
- **Modo Escolar:** Navegação direta por Anos (1º ao 9º Ano, Ensino Médio).
- **Modo Universitário:** Navegação profunda em 4 camadas (**Área > Curso > Disciplina > Conteúdo**), permitindo organizar grades curriculares complexas como Engenharia ou Ciência da Computação.

### 👤 Perfil e Gamificação
- **Sistema de XP:** Ganhe experiência ao completar lições e acertar questões na Arena.
- **Identidade:** Login via Google ou E-mail com foto de perfil e edição de dados acadêmicos (Matrícula, Turma, Curso).
- **Modo Convidado:** Permite testar a plataforma sem criar conta (dados salvos no navegador).

### 🎨 Interface Adaptativa
- **Dark Mode Real:** Todo o sistema (inclusive gráficos e fórmulas matemáticas) se adapta a temas claros e escuros.
- **Design System Modular:** Cada disciplina possui sua própria identidade visual (cores, ícones e gradientes) definida em um único arquivo de configuração.

---

## 🏗️ Arquitetura Técnica

O projeto segue o padrão **MVC simplificado (Model-View-Controller)** sem frameworks pesados (como React ou Vue), garantindo performance máxima e facilidade de edição.

### Estrutura de Arquivos
- **`js/registry.js`**: O coração do sistema. Funciona como um "cartório" onde novos módulos de conteúdo se registram.
- **`js/app.js`**: O cérebro. Gerencia o estado global, roteamento e lógica de progressão.
- **`js/views.js`**: A camada visual. Gera HTML dinâmico baseado em Template Strings e Tailwind CSS.
- **`js/auth.js`**: Camada de segurança e sincronização com Firebase Firestore.

### Fluxo de Dados
1. O HTML carrega o `core`.
2. Os arquivos de `curriculum/` injetam a estrutura dos menus.
3. Os arquivos de `content/` injetam o HTML das aulas.
4. O `app.js` cruza esses dados com o perfil do usuário para gerar a interface.

---

## 🛠️ Tecnologias

- **Front-end:** HTML5, JavaScript (ES6+), Tailwind CSS (via CDN).
- **Ícones:** FontAwesome 6 (via CDN).
- **Matemática:** MathJax 3 (para renderizar LaTeX).
- **Back-end (BaaS):** Google Firebase (Auth & Firestore).
- **Áudio:** Web Audio API (Sintetizador nativo, sem arquivos mp3 pesados).

---

<div align="center"> <sub>Desenvolvido com 💙 para a Educação.</sub> </div>