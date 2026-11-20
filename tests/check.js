// Проверка содержания: node tests/check.js
// Ищет то, что легко сломать руками: пропуск не там, верный ответ повторяется среди неверных, нет перевода и т. п.
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const win = {};
['a1', 'a2', 'b1', 'b2', 'reading'].forEach((f) => vm.runInNewContext(fs.readFileSync(path.join(root, 'js/content', f + '.js'), 'utf8'), { window: win }));
const errs = [], warn = [];
const E = (m) => errs.push(m), W = (m) => warn.push(m);
const seenWords = {};
let lessons = 0, words = 0, drills = 0;
for (const lv of ['a1', 'a2', 'b1', 'b2']) {
  const ls = win.COURSE[lv] || [];
  if (ls.length !== 6) E(`${lv}: уроков ${ls.length}, а не 6`);
  ls.forEach((l) => {
    lessons++;
    const at = (m) => `${l.id}: ${m}`;
    if (!l.id.startsWith(lv + '-')) E(at('id не от уровня'));
    ['icon', 'title', 'topic'].forEach((k) => !l[k] && E(at('нет ' + k)));
    if (l.words.length !== 8) E(at(`слов ${l.words.length}`));
    l.words.forEach((w) => {
      words++;
      if (w.length < 4 || w.slice(0, 4).some((x) => !x)) E(at('слово без примера/перевода: ' + w[0]));
      if (!w[4]) W(at('нет подсказки к ' + w[0]));
      const k = w[0].toLowerCase();
      if (seenWords[k]) E(at(`слово «${w[0]}» уже есть в ${seenWords[k]}`)); else seenWords[k] = l.id;
    });
    const r = l.rule;
    if (!r || !r.title || !r.text.length || !r.table.length || r.ex.length < 3 || r.mist.length !== 3) E(at('правило неполное'));
    if (r.head) r.table.forEach((row) => row.length !== r.head.length && E(at('в таблице другое число столбцов: ' + row[0])));
    if (l.drills.length !== 8) E(at(`заданий ${l.drills.length}`));
    l.drills.forEach((d) => {
      drills++;
      if ((d[0].match(/___/g) || []).length !== 1) E(at('пропуск ___ не один: ' + d[0]));
      if (d[1].length < 2 || new Set(d[1]).size !== d[1].length) E(at('варианты повторяются: ' + d[0]));
      if (!d[2] || !d[3]) E(at('нет перевода или пояснения: ' + d[0]));
    });
    if (l.order.length !== 3) E(at('сборка фраз не 3'));
    l.order.forEach((o) => { if (o[0].split(/\s+/).length > 10) W(at('длинная фраза для сборки: ' + o[0])); if (!/[.?!]$/.test(o[0])) W(at('без точки: ' + o[0])); });
    if (l.dialog.length < 4) E(at('диалог короче 4 реплик'));
    if (new Set(l.dialog.map((d) => d[0])).size !== 2) E(at('в диалоге не два участника'));
  });
}
(win.READING || []).forEach((t) => {
  const at = (m) => `${t.id}: ${m}`;
  if (!['a1', 'a2', 'b1', 'b2'].includes(t.level)) E(at('уровень'));
  t.text.forEach((p) => (!p[0] || !p[1]) && E(at('пустое предложение')));
  const en = t.text.map((p) => p[1]).join(' ').toLowerCase();
  t.gloss.forEach((g) => !new RegExp('\\b' + g[0].toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b').test(en) && E(at('слова из словарика нет в тексте: ' + g[0])));
  t.q.forEach((q) => { if (!'vpc'.includes(q[0])) E(at('вид вопроса')); if (new Set(q[2]).size !== q[2].length) E(at('варианты повторяются: ' + q[1])); });
});
const P = win.PLACEMENT || [];
['a1', 'a2', 'b1', 'b2'].forEach((lv) => P.filter((p) => p[0] === lv).length !== 3 && E('тест уровня: у ' + lv + ' не 3 вопроса'));
P.forEach((p) => (p[1].match(/___/g) || []).length !== 1 && E('тест уровня: пропуск: ' + p[1]));

console.log(`Уроков ${lessons}, слов ${words}, заданий ${drills}, текстов ${(win.READING || []).length}, тест уровня ${P.length}`);
warn.forEach((w) => console.log('  ! ' + w));
if (errs.length) { errs.forEach((e) => console.log('  ✗ ' + e)); process.exit(1); }
console.log('✓ содержание в порядке');
