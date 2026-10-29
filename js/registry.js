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
  // §5.2: aulas canônicas completas (JSON íntegro), por id. A teoria acima
  // continua sendo só o HTML pré-renderizado para o renderer da lição.
  window.PLATAFORMA_AULAS = window.PLATAFORMA_AULAS || {};
  window.PLATAFORMA_PROVAS = window.PLATAFORMA_PROVAS || {};
  window.registrarProvas = (provas) => {
    if (provas && typeof provas === 'object' && !Array.isArray(provas)) Object.assign(window.PLATAFORMA_PROVAS, provas);
  };

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

  /**
   * Registra aulas canônicas completas (§5.2). Os chunks gerados por
   * Os arquivos de conteúdo chamam `registrarAula({ "<id>": { ...aula } })`; a guarda
   * `typeof window.registrarAula === 'function'` da R17 existe para este
   * momento — a partir daqui elas passam a ser lidas por Registry.getAula.
   */
  window.registrarAula = (novasAulas) => {
    if (!novasAulas || typeof novasAulas !== 'object' || Array.isArray(novasAulas)) {
        console.error("⚠️ [Registry] Erro ao registrar aulas: esperava um objeto { id: aula }.");
        return;
    }
    let total = 0;
    Object.keys(novasAulas).forEach((id) => {
        const aula = novasAulas[id];
        if (!aula || typeof aula !== 'object') return;
        // O id do mapa é a chave canônica; o campo interno serve de conferência.
        window.PLATAFORMA_AULAS[id] = aula;
        total += 1;
    });
    console.log(`🎓 [Registry] +${total} aula(s) canônica(s) registrada(s).`);
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

      // Aula canônica completa (§5.2): atividades, vocabulário, metadados...
      // Retorna null quando o chunk não foi carregado (legado seguro).
      getAula: function(aulaId) {
          if (typeof aulaId !== 'string' || !aulaId) return null;
          return window.PLATAFORMA_AULAS[aulaId] || null;
      },

      // Retorna questões filtradas por NÍVEL (código, ex.: "EF06") e Tema
      getProva: function(nivel, tema, unidade) {
          return Object.values(window.PLATAFORMA_PROVAS).find(p =>
              p.nivel === nivel && p.tema === tema && p.unidade === unidade
              && ['piloto', 'publicado'].includes(p.estado)) || null;
      },
      getQuestoes: function(nivel, tema, unidade, tipo = 'treino') {
          return window.PLATAFORMA_QUESTOES.filter(q => {
              if (!q || !Array.isArray(q.opcoes) || q.opcoes.length < 2
                  || !Number.isInteger(q.correta) || q.correta < 0 || q.correta >= q.opcoes.length) return false;
              return q.nivel === nivel && q.tema === tema && q.tipo === tipo
                  && ['piloto', 'publicado'].includes(q.estado)
                  && (!unidade || q.unidade === unidade)
                  && typeof q.explicacao === 'string' && q.explicacao.trim().length > 0;
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
      "Língua Portuguesa", "Língua Inglesa", "Arte", "Educação Física", "Redação",
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
