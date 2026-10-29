'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const auditor = path.resolve(__dirname, '../tools/auditar-conteudos.cjs');

function fixture(t, { legado = false, vazio = false } = {}) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'plataforma-auditoria-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (p, text) => {
    fs.mkdirSync(path.dirname(path.join(root, p)), { recursive: true });
    fs.writeFileSync(path.join(root, p), text);
  };
  write('data/base/componentes.json', JSON.stringify({ mat: { nome: 'Matemática', etapas: ['EF06'] } }));
  write('data/base/niveis.json', JSON.stringify({ EF06: {} }));
  write('curriculum/mat_curriculum.js', `registrarCurriculo('Matemática', ${JSON.stringify({
    [legado ? '6º Ano EF' : 'EF06']: { Números: [{ id: 'mat.ef06.contagem', titulo: 'Contagem' }] }
  })});`);
  write('content/mat/mat6_content.js', `registrarTeoria({'mat.ef06.contagem': ${JSON.stringify(vazio ? '' : '<p>Contagem</p>')}});
    registrarAula({'mat.ef06.contagem': ${JSON.stringify({
      id: 'mat.ef06.contagem', componente: 'mat', nivel: 'EF06',
      bncc: vazio ? [] : ['EF06MA01'], atividades: vazio ? [] : [{ id: 'a1' }],
      fontes: vazio ? [] : ['BNCC'], metadados: { revisado: !vazio }
    })}});`);
  write('arena/mat_arena.js', `registrarQuestoes(${JSON.stringify(vazio ? [] : [{
    id: 'q1', nivel: 'EF06', tema: 'Matemática', unidade: 'Números',
    pergunta: 'Quanto é 2 + 2?', opcoes: ['3', '4'], correta: 1, explicacao: '2 + 2 = 4.'
  }])});`);
  return spawnSync(process.execPath, [auditor, '--root', root, '--json', '--strict'], { encoding: 'utf8' });
}

test('cadastro estruturalmente completo passa e devolve JSON legível', t => {
  const run = fixture(t);
  assert.equal(run.status, 0, run.stderr);
  const report = JSON.parse(run.stdout);
  assert.equal(report.totais.topicos, 1);
  assert.equal(report.totais.questoesArena, 1);
  assert.deepEqual(report.problemas, []);
});
test('arquivos existentes e registros vazios não passam como conteúdo completo', t => {
  const run = fixture(t, { vazio: true });
  assert.equal(run.status, 1, run.stderr);
  const report = JSON.parse(run.stdout);
  assert.equal(report.totais.semTeoria, 1);
  assert.equal(report.totais.semBncc, 1);
  assert.equal(report.totais.semAtividades, 1);
  assert.equal(report.totais.questoesArena, 0);
});
test('nome de série legado é denunciado em vez de produzir cobertura fictícia', t => {
  const run = fixture(t, { legado: true });
  assert.equal(run.status, 1, run.stderr);
  const report = JSON.parse(run.stdout);
  assert.equal(report.porCodigo.nivel_legado, 1);
  assert.equal(report.porCodigo.curriculo_nivel_ausente, 1);
  assert.equal(report.totais.topicos, 0);
});
