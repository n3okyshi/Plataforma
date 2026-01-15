/**
 * ============================================================================
 * REGISTRY.JS - SISTEMA DE REGISTRO E ESTADO GLOBAL (BLINDADO v2)
 * ============================================================================
 */

(function () {
  console.log("🗄️ [Registry] Inicializando banco de dados em memória...");

  // Garante que os objetos globais existam (Mantendo compatibilidade legado)
  window.PLATAFORMA_CURRICULO = window.PLATAFORMA_CURRICULO || {};
  window.PLATAFORMA_TEORIA = window.PLATAFORMA_TEORIA || {};
  window.PLATAFORMA_QUESTOES = window.PLATAFORMA_QUESTOES || [];

  // ========================================================================
  // 1. FUNÇÕES DE REGISTRO (ESCRITA) - AGORA COM VALIDAÇÃO
  // ========================================================================

  window.registrarCurriculo = (disciplina, dados) => {
    // Cenário 1: Chegaram dados reais
    if (dados) {
        if (typeof dados === 'object') {
            window.PLATAFORMA_CURRICULO[disciplina] = dados;
            // [MELHORIA] Log mais informativo contando unidades
            const qtdUnidades = Object.keys(dados).length;
            console.log(`📚 [Registry] Currículo carregado: ${disciplina} (${qtdUnidades} níveis)`);
        } else {
            console.warn(`⚠️ [Registry] Tentativa de registrar currículo inválido para: ${disciplina}`);
        }
    } 
    // Cenário 2: Inicialização (Reserva de espaço)
    else {
        if (!window.PLATAFORMA_CURRICULO[disciplina]) {
            window.PLATAFORMA_CURRICULO[disciplina] = {};
        }
    }
  };

  window.registrarTeoria = (novosConteudos) => {
    if (novosConteudos && typeof novosConteudos === 'object') {
        Object.assign(window.PLATAFORMA_TEORIA, novosConteudos);
        // [MELHORIA] Feedback de quantidade
        console.log(`📝 [Registry] +${Object.keys(novosConteudos).length} Lições teóricas registradas.`);
    } else {
        console.error("⚠️ [Registry] Erro ao registrar teoria: Formato inválido.");
    }
  };

  window.registrarQuestoes = (novasQuestoes) => {
    if(Array.isArray(novasQuestoes)) {
        window.PLATAFORMA_QUESTOES.push(...novasQuestoes);
        // [MELHORIA] Feedback de quantidade
        console.log(`❓ [Registry] +${novasQuestoes.length} Questões adicionadas ao banco.`);
    } else {
        console.error("⚠️ [Registry] Erro ao registrar questões: Esperava uma Array.");
    }
  };

  // ========================================================================
  // 2. [NOVO] API DE ACESSO SEGURO (LEITURA)
  // Use window.Registry.get... ao invés de acessar as variáveis brutas
  // ========================================================================
  
  window.Registry = {
      // Retorna o currículo de uma matéria ou um objeto vazio (evita crash)
      getCurriculo: function(disciplina) {
          return window.PLATAFORMA_CURRICULO[disciplina] || {};
      },

      // Busca o HTML de uma aula específica
      getTeoria: function(topicoId) {
          return window.PLATAFORMA_TEORIA[topicoId] || null;
      },

      // Retorna questões filtradas por Ano/Disciplina e Tema
      getQuestoes: function(ano, tema) {
          return window.PLATAFORMA_QUESTOES.filter(q => {
              // Normalização para evitar erros de Case Sensitive
              const matchAno = q.ano && q.ano.toLowerCase() === ano.toLowerCase();
              // Se tema for passado, filtra também, senão traz todas do ano
              const matchTema = tema ? (q.tema && q.tema.toLowerCase() === tema.toLowerCase()) : true;
              return matchAno && matchTema;
          });
      },

      // Ferramenta de Diagnóstico (Digite Registry.status() no console)
      status: function() {
          console.group("📊 Status do Registry");
          console.log("Matérias Registradas:", Object.keys(window.PLATAFORMA_CURRICULO).length);
          console.log("Total de Aulas (HTML):", Object.keys(window.PLATAFORMA_TEORIA).length);
          console.log("Total de Questões:", window.PLATAFORMA_QUESTOES.length);
          console.table(Object.keys(window.PLATAFORMA_CURRICULO).map(k => ({
              Materia: k, 
              Niveis: Object.keys(window.PLATAFORMA_CURRICULO[k]).length 
          })));
          console.groupEnd();
      }
  };

  // ========================================================================
  // 3. INICIALIZAÇÃO DOS NOMES (RESERVA DE ESPAÇO)
  // ========================================================================

  const materiasPadrao = [
      // LINGUAGENS
      "Língua Portuguesa", "Inglês", "Artes", "Educação Física", "Redação",
      // EXATAS
      "Matemática", "Física", "Química", "Astronomia",
      // NATUREZA
      "Ciências Naturais", "Biologia", "Geologia",
      // HUMANAS
      "História", "Geografia", "Filosofia", "Sociologia",
      // ESPECIAIS
      "Ensino Superior"
  ];

  materiasPadrao.forEach(m => window.registrarCurriculo(m));

})();