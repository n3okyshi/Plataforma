/**
 * ============================================================================
 * REGISTRY.JS - SISTEMA DE REGISTRO (BLINDADO)
 * ============================================================================
 */

(function () {
  console.log("[Registry] Inicializando sistema de registros...");

  // Garante que os objetos globais existam
  window.PLATAFORMA_CURRICULO = window.PLATAFORMA_CURRICULO || {};
  window.PLATAFORMA_TEORIA = window.PLATAFORMA_TEORIA || {};
  window.PLATAFORMA_QUESTOES = window.PLATAFORMA_QUESTOES || [];

  // FUNÇÃO DE REGISTRO INTELIGENTE
  window.registrarCurriculo = (disciplina, dados) => {
    // Cenário 1: Chegaram dados reais (do arquivo de currículo)
    if (dados) {
        window.PLATAFORMA_CURRICULO[disciplina] = dados;
        console.log(`[Registry] Currículo carregado: ${disciplina}`);
    } 
    // Cenário 2: É apenas uma inicialização (do próprio registry)
    else {
        // Só cria um objeto vazio se AINDA NÃO existir
        if (!window.PLATAFORMA_CURRICULO[disciplina]) {
            window.PLATAFORMA_CURRICULO[disciplina] = {};
        }
    }
  };

  window.registrarTeoria = (novosConteudos) => {
    Object.assign(window.PLATAFORMA_TEORIA, novosConteudos);
  };

  window.registrarQuestoes = (novasQuestoes) => {
    if(Array.isArray(novasQuestoes)) {
        window.PLATAFORMA_QUESTOES.push(...novasQuestoes);
    }
  };

  // ========================================================================
  // INICIALIZAÇÃO DOS NOMES (RESERVA DE ESPAÇO)
  // ========================================================================

  // LINGUAGENS
  window.registrarCurriculo("Língua Portuguesa");
  window.registrarCurriculo("Inglês");
  window.registrarCurriculo("Artes");
  window.registrarCurriculo("Educação Física");

  // EXATAS
  window.registrarCurriculo("Matemática");
  window.registrarCurriculo("Física");
  window.registrarCurriculo("Química");
  window.registrarCurriculo("Astronomia");

  // NATUREZA
  window.registrarCurriculo("Ciências Naturais");
  window.registrarCurriculo("Biologia");
  window.registrarCurriculo("Geologia");

  // HUMANAS
  window.registrarCurriculo("História");
  window.registrarCurriculo("Geografia");
  window.registrarCurriculo("Filosofia");
  window.registrarCurriculo("Sociologia");
  
  // EXTRA
  window.registrarCurriculo("Redação");
  window.registrarCurriculo("Ensino Superior");

})();