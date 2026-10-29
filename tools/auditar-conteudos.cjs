#!/usr/bin/env node
'use strict';

// Auditoria estrutural de leitura. Não substitui revisão pedagógica.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const rootArg = process.argv.indexOf('--root');
if (rootArg !== -1 && (!process.argv[rootArg + 1] || process.argv[rootArg + 1].startsWith('--'))) {
  throw new Error('--root exige um diretório de projeto.');
}
const root = rootArg === -1 ? path.resolve(__dirname, '..') : path.resolve(process.argv[rootArg + 1]);
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const componentes = JSON.parse(read('data/base/componentes.json'));
const niveis = JSON.parse(read('data/base/niveis.json'));
const problemas = [];
const linhas = [];
const add = (arquivo, codigo, detalhe) => problemas.push({ arquivo, codigo, detalhe });
const cheio = v => typeof v === 'string' && v.trim().length > 0;

function executar(arquivo, registros) {
  if (!fs.existsSync(path.join(root, arquivo))) {
    add(arquivo, 'arquivo_ausente', 'Arquivo esperado pelo carregamento atual.');
    return;
  }
  const sandbox = { ...registros, console: { log() {}, warn() {}, error() {} } };
  sandbox.window = sandbox;
  try {
    vm.runInNewContext(read(arquivo), sandbox, { filename: arquivo, timeout: 2000 });
  } catch (err) {
    add(arquivo, 'falha_execucao', err.message);
  }
}

for (const [sigla, config] of Object.entries(componentes)) {
  if (!config.etapas.length) continue; // Ensino Superior fica fora da meta.
  let curriculo = {};
  const currPath = `curriculum/${sigla}_curriculum.js`;
  executar(currPath, { registrarCurriculo(nome, dados) {
    if (nome !== config.nome) add(currPath, 'nome_componente', `${nome} != ${config.nome}`);
    curriculo = dados || {};
  } });
  for (const nivel of Object.keys(curriculo)) {
    if (!niveis[nivel]) add(currPath, 'nivel_legado', nivel);
  }

  const questoes = [];
  const arenaPath = `arena/${sigla}_arena.js`;
  executar(arenaPath, { registrarQuestoes(qs) {
    if (Array.isArray(qs)) questoes.push(...qs);
    else add(arenaPath, 'questoes_formato', 'Esperava um array.');
  } });
  const idsQuestoes = new Set();
  for (const [i, q] of questoes.entries()) {
    if (!q || typeof q !== 'object') {
      add(arenaPath, 'questao_formato', String(i));
      continue;
    }
    const campos = ['id', 'nivel', 'tema', 'unidade', 'pergunta', 'explicacao'];
    const faltantes = campos.filter(c => !cheio(q[c]));
    if (faltantes.length) add(arenaPath, 'questao_campos', `${i}: ${faltantes.join(', ')}`);
    if (!config.etapas.includes(q.nivel)) add(arenaPath, 'questao_nivel', `${i}: ${q.nivel || q.ano}`);
    if (q.tema !== config.nome) add(arenaPath, 'questao_componente', `${i}: ${q.tema}`);
    if (!Array.isArray(q.opcoes) || q.opcoes.length < 2 || !q.opcoes.every(cheio)
        || !Number.isInteger(q.correta) || q.correta < 0 || q.correta >= q.opcoes.length) {
      add(arenaPath, 'questao_gabarito', String(i));
    }
    if (q.id && idsQuestoes.has(q.id)) add(arenaPath, 'questao_id_duplicado', q.id);
    idsQuestoes.add(q.id);
  }

  for (const nivel of config.etapas) {
    const sufixo = nivel.startsWith('EF') ? Number(nivel.slice(2)) : `${Number(nivel.slice(2))}em`;
    const arquivo = `content/${sigla}/${sigla}${sufixo}_content.js`;
    const teorias = {};
    const aulas = {};
    executar(arquivo, {
      registrarTeoria(dados) { Object.assign(teorias, dados); },
      registrarAula(dados) { Object.assign(aulas, dados); }
    });
    const unidades = curriculo[nivel] || {};
    if (!curriculo[nivel]) add(currPath, 'curriculo_nivel_ausente', nivel);
    const topicos = Object.values(unidades).flat().filter(t => t && typeof t === 'object');
    const ids = new Set(topicos.map(t => t.id));
    const stats = {
      componente: sigla, nivel, topicos: topicos.length,
      teorias: Object.keys(teorias).length, aulasCanonicas: Object.keys(aulas).length,
      semTeoria: 0, semAulaCanonica: 0, semBncc: 0, semAtividades: 0,
      semFontes: 0, naoRevisadas: 0, marcadoresImagem: 0,
      questoesArena: questoes.filter(q => q && q.nivel === nivel && q.tema === config.nome).length
    };
    for (const t of topicos) {
      if (!cheio(teorias[t.id])) stats.semTeoria++;
      const a = aulas[t.id];
      if (!a) { stats.semAulaCanonica++; continue; }
      if (!Array.isArray(a.bncc) || !a.bncc.length) stats.semBncc++;
      if (!Array.isArray(a.atividades) || !a.atividades.length) stats.semAtividades++;
      if (!Array.isArray(a.fontes) || !a.fontes.length) stats.semFontes++;
      if (a.metadados?.revisado !== true) stats.naoRevisadas++;
      if (a.nivel !== nivel || a.componente !== sigla || a.id !== t.id) {
        add(arquivo, 'identidade_aula', t.id);
      }
    }
    for (const [id, html] of Object.entries(teorias)) {
      if (!ids.has(id)) add(arquivo, 'teoria_fora_curriculo', id);
      if (/\[Image of[^\]]*\]/i.test(String(html))) {
        stats.marcadoresImagem++;
        add(arquivo, 'imagem_nao_implementada', id);
      }
    }
    linhas.push(stats);
  }
}

const totais = {};
for (const linha of linhas) {
  for (const [k, v] of Object.entries(linha)) {
    if (typeof v === 'number') totais[k] = (totais[k] || 0) + v;
  }
}
const porCodigo = {};
for (const p of problemas) porCodigo[p.codigo] = (porCodigo[p.codigo] || 0) + 1;
const relatorio = {
  escopo: 'Componentes e níveis declarados em data/base/componentes.json; apenas chunks por série usados pelo loader. Tópicos e lacunas são contados somente nas chaves de nível atuais, não nas chaves legadas denunciadas no relatório.',
  limites: 'Contagens estruturais não comprovam correção, cobertura BNCC, autoria ou qualidade pedagógica. Ausência de revisão é metadado, não laudo.',
  totais, porCodigo, linhas, problemas
};
if (process.argv.includes('--json')) console.log(JSON.stringify(relatorio, null, 2));
else {
  console.log(JSON.stringify({ totais, porCodigo }, null, 2));
  console.log('Detalhes: node tools/auditar-conteudos.cjs --json');
}
if (process.argv.includes('--strict') && (problemas.length || linhas.some(l =>
  l.topicos === 0 || l.semTeoria || l.semAulaCanonica || l.semBncc || l.semAtividades
  || l.semFontes || l.naoRevisadas || l.questoesArena === 0))) process.exitCode = 1;
