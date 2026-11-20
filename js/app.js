/* Ступени — английский каждый день.
   Без сборки и зависимостей. Прогресс хранится только на устройстве (localStorage). */
(function () {
  'use strict';

  /* ---------- содержание ---------- */
  const C = window.COURSE || {};
  const READING = window.READING || [];
  const PLACEMENT = window.PLACEMENT || [];
  const LEVELS = [
    { id: 'a1', name: 'A1', title: 'Начинающий', desc: 'Знаю алфавит и пару слов — начинаю почти с нуля.' },
    { id: 'a2', name: 'A2', title: 'Элементарный', desc: 'Могу представиться и рассказать о себе простыми фразами.' },
    { id: 'b1', name: 'B1', title: 'Средний', desc: 'Понимаю простые тексты, могу поговорить на бытовые темы.' },
    { id: 'b2', name: 'B2', title: 'Выше среднего', desc: 'Говорю на многие темы, хочу звучать увереннее и естественнее.' }
  ];
  const LV = Object.fromEntries(LEVELS.map((l) => [l.id, l]));
  const LES = {}, ALL = [];
  LEVELS.forEach((lv) => (C[lv.id] || []).forEach((l, i) => { l.level = lv.id; l.n = i + 1; LES[l.id] = l; ALL.push(l); }));
  const lessonsOf = (lv) => ALL.filter((l) => l.level === lv);
  const READ = Object.fromEntries(READING.map((r) => [r.id, r]));

  const STEPS = [
    { name: 'Слова', min: 5, icon: 'cards', text: 'Послушайте 8 новых слов, повторите их вслух и прочитайте подсказку — она помогает запомнить.' },
    { name: 'Правило', min: 7, icon: 'layers', text: 'Короткое правило простыми словами, примеры и три частые ошибки.' },
    { name: 'Практика', min: 8, icon: 'target', text: 'Закрепим: выберите ответ, соберите фразу, напишите слово.' },
    { name: 'Аудирование', min: 5, icon: 'vol', text: 'Послушайте диалог. Потом — вопросы на слух и короткий диктант.' },
    { name: 'Произношение', min: 3, icon: 'mic', text: 'Повторите фразы вслух. Если браузер даст доступ к микрофону, он проверит, насколько похоже.' },
    { name: 'Мини-тест', min: 2, icon: 'trophy', text: '5 вопросов без подсказок. Ответы покажем в конце.' }
  ];

  /* ---------- значки ---------- */
  const ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
    cards: '<rect x="3" y="7" width="13" height="14" rx="2.5"/><path d="M8 3h10.5A2.5 2.5 0 0 1 21 5.5V17"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    chart: '<path d="M3 21h18"/><path d="M6 17v-5M11 17V6M16 17v-8M21 17v-3"/>',
    gear: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2.2"/><circle cx="9" cy="17" r="2.2"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    vol: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    fire: '<path d="M12 22c4.2 0 7-2.9 7-6.8 0-3.6-2.4-5.9-4-8.2-.4 1.9-1.4 3-2.8 3.3C12.6 7 11.5 4 8.6 2c.2 3.8-3.6 6.3-3.6 11.6C5 18.5 8 22 12 22z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    play: '<path d="M7 4.5v15l12.5-7.5z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
    text: '<path d="M4 6h16M4 12h16M4 18h10"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
    repeat: '<path d="M17 2l3 3-3 3"/><path d="M3 11V9a4 4 0 0 1 4-4h13"/><path d="M7 22l-3-3 3-3"/><path d="M21 13v2a4 4 0 0 1-4 4H4"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
    upload: '<path d="M12 21V9M7 14l5-5 5 5M4 3h16"/>',
    chev: '<path d="m9 6 6 6-6 6"/>'
  };
  const ic = (n, c = '') => `<svg class="ic ${c}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ''}</svg>`;

  /* ---------- мелочи ---------- */
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const plural = (n, a, b, c) => { const m = n % 10, k = n % 100; return m === 1 && k !== 11 ? a : m >= 2 && m <= 4 && (k < 10 || k >= 20) ? b : c; };
  const DAY = 864e5;
  const sod = (t = Date.now()) => { const d = new Date(t); d.setHours(0, 0, 0, 0); return d.getTime(); };
  const dk = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const MON = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  const WD = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  const fdate = (t) => { const d = new Date(t); return d.getDate() + ' ' + MON[d.getMonth()]; };
  const hash = (s) => { let h = 0; for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) | 0; return Math.abs(h); };

  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  };

  /* ---------- состояние ---------- */
  const KEY = 'stupeni.v1', RKEY = 'stupeni.run.v1';
  const DEF = () => ({ v: 1, onboarded: false, level: 'a1', goal: 20, accent: 'en-US', rate: 0.9, theme: 'auto',
    lessons: {}, cards: {}, days: {}, wrong: {}, tests: [], reads: {}, mist: {}, xp: 0 });
  let S = Object.assign(DEF(), store.get(KEY) || {});
  let R = store.get(RKEY);           // текущее занятие (урок, тест…) — переживает перезапуск
  let CS = null;                     // повторение карточек
  const UI = { cl: null, pl: null, ob: 0, obLv: null, rd: {}, from: '' };
  const save = () => store.set(KEY, S);
  const saveRun = () => (R ? store.set(RKEY, R) : store.del(RKEY));
  const today = () => (S.days[dk()] = S.days[dk()] || { sec: 0, xp: 0, ok: 0, bad: 0, cards: 0, les: 0 });
  const gain = (n) => { today().xp += n; S.xp += n; if (R && !R.fin) R.xp = (R.xp || 0) + n; };

  /* ---------- сравнение ответов ---------- */
  const CONTR = [[/\bi'm\b/g, 'i am'], [/\bwon't\b/g, 'will not'], [/\bcan't\b/g, 'can not'], [/\bcannot\b/g, 'can not'],
    [/n't\b/g, ' not'], [/'re\b/g, ' are'], [/'ve\b/g, ' have'], [/'ll\b/g, ' will'], [/'d\b/g, ' would'],
    [/\b(he|she|it|that|what|there|who|where|here)'s\b/g, '$1 is'], [/\blet's\b/g, 'let us']];
  function norm(s) {
    s = String(s || '').toLowerCase().replace(/[’‘`]/g, "'").replace(/[“”"«»]/g, ' ');
    CONTR.forEach(([r, v]) => (s = s.replace(r, v)));
    return s.replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function lev(a, b) {
    const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    let p = Array.from({ length: n + 1 }, (_, i) => i);
    for (let i = 1; i <= m; i++) { const c = [i]; for (let j = 1; j <= n; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); p = c; }
    return p[n];
  }
  // 2 — верно, 1 — верно с опечаткой, 0 — неверно
  function checkText(inp, ans) {
    const a = norm(inp), b = norm(ans); if (!a) return 0; if (a === b) return 2;
    return b.length >= 4 && lev(a, b) <= Math.max(1, Math.floor(b.length / 12)) ? 1 : 0;
  }
  function overlap(heard, target) {
    const pool = norm(heard).split(' '), t = norm(target).split(' ').filter(Boolean); let hit = 0;
    t.forEach((w) => { const i = pool.indexOf(w); if (i >= 0) { hit++; pool.splice(i, 1); } });
    return t.length ? hit / t.length : 0;
  }

  /* ---------- озвучка и микрофон ---------- */
  const TTS = 'speechSynthesis' in window;
  let voices = [];
  const loadVoices = () => { try { voices = speechSynthesis.getVoices() || []; } catch (e) {} };
  if (TTS) { loadVoices(); try { speechSynthesis.onvoiceschanged = loadVoices; } catch (e) {} }
  function enVoices() {
    const want = S.accent.toLowerCase();
    const en = voices.filter((v) => /^en/i.test(v.lang));
    const ex = en.filter((v) => v.lang.replace('_', '-').toLowerCase() === want);
    const sc = (v) => (/natural|neural|google|online|premium|enhanced/i.test(v.name) ? 2 : 0);
    return (ex.length ? ex : en).slice().sort((a, b) => sc(b) - sc(a));
  }
  let dlgPlay = 0;
  function say(text, o = {}) {
    if (!TTS) { if (!o.quiet) toast('Озвучка недоступна в этом браузере'); return; }
    try {
      if (!o.keep) { dlgPlay++; speechSynthesis.cancel(); }
      const u = new SpeechSynthesisUtterance(text);
      u.lang = S.accent; const vs = enVoices(); const v = vs[o.voice || 0] || vs[0]; if (v) u.voice = v;
      u.rate = o.slow ? 0.6 : S.rate; if (o.voice) u.pitch = 0.9;
      if (o.end) { u.onend = o.end; u.onerror = o.end; }
      speechSynthesis.speak(u);
    } catch (e) {}
  }
  function playDialog() {
    const L = LES[R.sc[R.i].l]; const names = [...new Set(L.dialog.map((d) => d[0]))];
    say('', { quiet: true }); const my = dlgPlay;
    let i = 0;
    const step = () => {
      document.querySelectorAll('.bub.play').forEach((b) => b.classList.remove('play'));
      if (my !== dlgPlay || i >= L.dialog.length) return;
      const d = L.dialog[i]; const el = document.querySelector(`.bub[data-line="${i}"]`);
      if (el) { el.classList.add('play'); el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
      i++; say(d[1], { keep: true, voice: names.indexOf(d[0]) % 2, end: () => setTimeout(step, 250) });
    };
    step();
  }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function micErr(e) {
    return ({ 'not-allowed': 'Нет доступа к микрофону. Разрешите его в настройках браузера.', 'service-not-allowed': 'Нет доступа к микрофону.',
      network: 'Для распознавания речи этому браузеру нужен интернет.', 'no-speech': 'Ничего не услышали — попробуйте ещё раз, чуть громче.',
      'audio-capture': 'Микрофон не найден.' })[e] || 'Не получилось распознать. Попробуйте ещё раз.';
  }
  function listen(target) {
    if (!SR) return;
    const st = R.st;
    try {
      const rec = new SR(); rec.lang = S.accent; rec.interimResults = false; rec.maxAlternatives = 5;
      st.mic = 'on'; render();
      rec.onresult = (e) => {
        const alts = [...e.results[0]].map((a) => a.transcript); let best = 0, heard = alts[0] || '';
        alts.forEach((a) => { const p = overlap(a, target); if (p > best) { best = p; heard = a; } });
        st.mic = 'done'; st.heard = heard; st.pct = Math.round(best * 100);
        if (best >= 0.75 && !st.counted) { st.counted = 1; gain(2); today().ok++; }
        saveRun(); render();
      };
      rec.onerror = (e) => { st.mic = 'err'; st.err = e.error; render(); };
      rec.onend = () => { if (st.mic === 'on') { st.mic = 'err'; st.err = 'no-speech'; render(); } };
      rec.start();
    } catch (e) { st.mic = 'err'; st.err = ''; render(); }
  }
  const sayBtn = (t, slow, cls = '') => `<button class="say ${cls}${slow ? ' slow' : ''}" data-a="say" data-t="${esc(t)}"${slow ? ' data-slow="1"' : ''} aria-label="${slow ? 'Медленно' : 'Послушать'}">${slow ? '<span class="tt">0.6×</span>' : ic('vol')}</button>`;
  const bigSay = (t) => `<button class="say-big" data-a="say" data-t="${esc(t)}" aria-label="Послушать">${ic('vol')}</button><button class="say slow" data-a="say" data-t="${esc(t)}" data-slow="1" aria-label="Медленно"><span class="tt">0.6×</span></button>`;

  /* ---------- карточки ---------- */
  const INT = [0, 1, 3, 7, 14, 30, 60, 120];
  function addCard(w, l, fromLesson) {
    const k = w[0].toLowerCase().trim(); if (!k || S.cards[k]) return false;
    S.cards[k] = { en: w[0], ru: w[1], ex: w[2] || '', exr: w[3] || '', tip: w[4] || '', l, box: fromLesson ? 1 : 0,
      due: fromLesson ? sod() + DAY : Date.now(), n: 0, lap: 0, add: Date.now() };
    return true;
  }
  const dueCards = () => Object.keys(S.cards).filter((k) => S.cards[k].due <= Date.now());
  const cardStat = (c) => (c.box >= 4 ? 'known' : c.n === 0 ? 'new' : 'learn');
  function nextBox(c, g) { return g === 0 ? 1 : g === 1 ? Math.max(1, c.box) : Math.min(7, c.box + (g === 3 ? 2 : 1)); }
  function ivlTxt(c, g) {
    if (g === 0) return 'сейчас';
    const d = g === 1 ? Math.max(1, Math.round(INT[nextBox(c, g)] / 2)) : INT[nextBox(c, g)];
    return d >= 30 ? Math.round(d / 30) + ' мес' : d + ' д';
  }
  function grade(k, g) {
    const c = S.cards[k]; if (!c) return;
    c.n++;
    if (g === 0) { c.box = 1; c.lap++; c.due = Date.now(); }
    else if (g === 1) { c.box = nextBox(c, 1); c.due = sod() + DAY * Math.max(1, Math.round(INT[c.box] / 2)); }
    else { c.box = nextBox(c, g); c.due = sod() + DAY * INT[c.box]; }
  }

  /* ---------- построение занятий ---------- */
  const fill = (q, a) => q.replace('___', a);
  function qDrill(L, i, test) {
    const d = L.drills[i];
    return { t: 'choice', kick: 'Вставьте пропуск', q: d[0], sub: d[2], opts: shuffle(d[1]), a: d[1][0], why: d[3], full: fill(d[0], d[1][0]), ref: L.id + '|' + i, test: !!test };
  }
  function qWord(w, pool, test, mode) {
    const others = pool.filter((x) => x[0] !== w[0]);
    if (mode === 'ru-en') return { t: 'choice', kick: 'Как это по-английски?', q: w[1], opts: shuffle([w[0], ...pick(others, 3).map((x) => x[0])]), a: w[0], why: w[2], full: w[2], test: !!test };
    if (mode === 'audio') return { t: 'choice', kick: 'Что значит это слово?', hide: true, audio: w[0], q: w[0], opts: shuffle([w[1], ...pick(others, 3).map((x) => x[1])]), a: w[1], why: w[0] + ' — ' + w[1], test: !!test };
    return { t: 'choice', kick: 'Что значит это слово?', q: w[0], opts: shuffle([w[1], ...pick(others, 3).map((x) => x[1])]), a: w[1], why: w[2] + ' — ' + w[3], full: w[2], test: !!test };
  }
  const tokens = (en) => en.replace(/[.?!]+$/, '').replace(/,/g, '').split(/\s+/);
  const qOrder = (o) => ({ t: 'order', ru: o[1], a: o[0], tiles: shuffle(tokens(o[0])), full: o[0] });

  function buildLesson(L) {
    const sc = [], W = L.words;
    const sec = (n) => sc.push({ t: 'sec', n, text: STEPS[n - 1].text });
    sc.push({ t: 'intro', l: L.id });
    sec(1);
    W.forEach((w, k) => sc.push({ t: 'word', w, k: k + 1 }));
    pick(W, 4).forEach((w, k) => sc.push(qWord(w, W, false, k % 2 ? 'ru-en' : 'en-ru')));
    sec(2);
    sc.push({ t: 'rule', l: L.id }, { t: 'mist', l: L.id });
    sec(3);
    L.drills.forEach((d, i) => sc.push(qDrill(L, i)));
    L.order.forEach((o) => sc.push(qOrder(o)));
    pick(W, 3).forEach((w) => sc.push({ t: 'type', q: w[1], a: w[0], why: w[2], full: w[2] }));
    sec(4);
    sc.push({ t: 'dialog', l: L.id });
    const lines = L.dialog.map((d) => d[1]);
    pick(L.dialog, 2).forEach((d, k) => {
      if (k === 0) sc.push({ t: 'choice', kick: 'Что вы услышали?', hide: true, audio: d[1], q: d[1], opts: shuffle([d[1], ...pick(lines.filter((x) => x !== d[1]), 2)]), a: d[1], why: d[2] });
      else sc.push({ t: 'choice', kick: 'Что это значит?', hide: true, audio: d[1], q: d[1], opts: shuffle([d[2], ...pick(L.dialog.filter((x) => x !== d), 2).map((x) => x[2])]), a: d[2], why: d[1] });
    });
    const dict = L.rule.ex.slice().sort((a, b) => a[0].length - b[0].length)[0];
    sc.push({ t: 'type', dict: true, audio: dict[0], a: dict[0], why: dict[1], full: dict[0] });
    sec(5);
    pick(L.rule.ex, 3).forEach((e, k) => sc.push({ t: 'speak', en: e[0], ru: e[1], k: k + 1 }));
    sec(6);
    const tq = pick(L.drills.map((d, i) => i), 3).map((i) => qDrill(L, i, true));
    pick(W, 2).forEach((w, k) => tq.push(qWord(w, W, true, k ? 'audio' : 'ru-en')));
    shuffle(tq).forEach((q) => sc.push(q));
    sc.push({ t: 'result' });
    return sc;
  }
  function newRun(kind, ref, title, sc) { return { kind, ref, title, sc, i: 0, st: {}, ok: 0, bad: 0, test: [], xp: 0, sec: 0, t0: Date.now() }; }
  function startRun(run) {
    const go2 = () => { R = run; saveRun(); go('#run'); };
    if (R && !R.fin && R.kind === 'lesson' && !(run.kind === 'lesson' && run.ref === R.ref) && R.i > 1) {
      confirmSheet('Начать заново?', `Сейчас открыт урок «${R.title}». Если начать другое занятие, его прогресс сбросится.`, 'Начать', go2);
    } else go2();
  }
  function startLesson(id, fresh) {
    const L = LES[id]; if (!L) return;
    if (!fresh && R && R.kind === 'lesson' && R.ref === id && !R.fin) { go('#run'); return; }
    startRun(newRun('lesson', id, L.title, buildLesson(L)));
  }
  function startRule(id) {
    const L = LES[id];
    const sc = [...shuffle(L.drills.map((d, i) => qDrill(L, i))), ...L.order.map(qOrder), { t: 'result' }];
    startRun(newRun('rule', id, L.rule.title, sc));
  }
  function startWrong() {
    const keys = Object.keys(S.wrong).filter((k) => LES[k.split('|')[0]]);
    if (!keys.length) { toast('Ошибок нет — так держать!'); return; }
    const sc = pick(keys, 12).map((k) => { const [l, i] = k.split('|'); return qDrill(LES[l], +i); });
    sc.push({ t: 'result' });
    startRun(newRun('wrong', '', 'Работа над ошибками', sc));
  }
  function weekPool() {
    const wk = Date.now() - 7 * DAY;
    let ls = ALL.filter((l) => S.lessons[l.id] && S.lessons[l.id].last >= wk);
    if (!ls.length) ls = ALL.filter((l) => S.lessons[l.id]);
    return ls;
  }
  function startWeek() {
    const ls = weekPool();
    if (!ls.length) { toast('Сначала пройдите хотя бы один урок'); return; }
    const drills = [], words = [];
    ls.forEach((l) => { l.drills.forEach((d, i) => drills.push([l, i])); l.words.forEach((w) => words.push([l, w])); });
    const qs = pick(drills, 6).map(([l, i]) => qDrill(l, i, true));
    pick(words, 10 - qs.length).forEach(([l, w], k) => qs.push(qWord(w, l.words, true, ['en-ru', 'ru-en', 'audio'][k % 3])));
    const sc = shuffle(qs).map((q, k) => Object.assign(q, { n: k + 1 }));
    sc.unshift({ t: 'tintro', title: 'Тест недели', text: `10 вопросов по ${ls.length === 1 ? 'уроку' : 'урокам'}: ${ls.map((l) => '«' + l.title + '»').join(', ')}. Подсказок нет — ответы и разбор покажем в конце.` });
    sc.push({ t: 'result' });
    startRun(newRun('week', '', 'Тест недели', sc));
  }
  function startPlace() {
    const sc = PLACEMENT.map((p, k) => ({ t: 'choice', kick: 'Вопрос ' + (k + 1) + ' из ' + PLACEMENT.length, q: p[1], opts: shuffle(p[2]), a: p[2][0], full: fill(p[1], p[2][0]), lv: p[0], test: true }));
    sc.unshift({ t: 'tintro', title: 'Тест уровня', text: '12 коротких вопросов — от простых к сложным. Не угадывайте: если не знаете, выберите любой ответ и идите дальше. Займёт около трёх минут.' });
    sc.push({ t: 'result' });
    startRun(newRun('place', '', 'Тест уровня', sc));
  }
  function startRead(id) {
    const T = READ[id]; const tag = { v: 'Лексика', p: 'Фразы', c: 'Понимание' };
    const sc = T.q.map((q, k) => ({ t: 'choice', kick: tag[q[0]] + ' · ' + (k + 1) + ' из ' + T.q.length, q: q[1], opts: shuffle(q[2]), a: q[2][0], why: q[3], test: true }));
    sc.push({ t: 'result' });
    startRun(newRun('read', id, T.title, sc));
  }

  /* ---------- ход занятия ---------- */
  function advance() {
    if (!R) return;
    if (R.i < R.sc.length - 1) { R.i++; R.st = {}; }
    if (R.sc[R.i].t === 'result') finalize();
    saveRun(); render(); window.scrollTo(0, 0);
  }
  const PRAISE = ['Верно!', 'Отлично!', 'Так держать!', 'Точно!', 'Здорово!', 'Молодец!'];
  function answer(ok, extra = {}) {
    const s = R.sc[R.i]; const st = R.st;
    Object.assign(st, extra, { done: true, ok, praise: PRAISE[(Math.random() * PRAISE.length) | 0] });
    const d = today();
    if (ok) { d.ok++; if (!s.retry) R.ok++; gain(2); } else { d.bad++; if (!s.retry) R.bad++; }
    if (s.ref) {
      const lid = s.ref.split('|')[0];
      if (!ok) { S.wrong[s.ref] = { n: ((S.wrong[s.ref] || {}).n || 0) + 1, t: Date.now() }; S.mist[lid] = (S.mist[lid] || 0) + 1; }
      else if (R.kind === 'wrong' || s.retry) delete S.wrong[s.ref];
    }
    if (!ok && !s.test && !s.retry) {
      const c = Object.assign({}, s, { retry: true });
      if (c.opts) c.opts = shuffle(c.opts); if (c.tiles) c.tiles = shuffle(c.tiles);
      let j = R.i + 1; while (j < R.sc.length && !['sec', 'result'].includes(R.sc[j].t)) j++;
      R.sc.splice(j, 0, c);
    }
    buzz(ok);
    save(); saveRun(); render();
  }
  const buzz = (ok) => { try { navigator.vibrate && navigator.vibrate(ok ? 12 : [25, 40, 25]); } catch (e) {} };
  function testPick(i) {
    const s = R.sc[R.i]; R.st.sel = i; saveRun(); render();
  }
  function testNext() {
    const s = R.sc[R.i]; const i = R.st.sel; if (i == null) return;
    const ok = s.opts[i] === s.a;
    R.test.push({ q: s.hide ? '🔊 ' + s.audio : s.q, kick: s.kick, your: s.opts[i], a: s.a, ok, why: s.why || '', lv: s.lv || '' });
    const d = today(); if (ok) { d.ok++; gain(2); } else d.bad++;
    if (s.ref) {
      const lid = s.ref.split('|')[0];
      if (!ok) { S.wrong[s.ref] = { n: ((S.wrong[s.ref] || {}).n || 0) + 1, t: Date.now() }; S.mist[lid] = (S.mist[lid] || 0) + 1; }
    }
    save(); advance();
  }
  function finalize() {
    if (R.fin) return; R.fin = true;
    const tOk = R.test.filter((x) => x.ok).length, tN = R.test.length;
    R.pct = tN ? Math.round((tOk / tN) * 100) : (R.ok + R.bad ? Math.round((R.ok / (R.ok + R.bad)) * 100) : 100);
    if (R.kind === 'lesson') {
      const L = LES[R.ref];
      const stars = R.pct >= 90 ? 3 : R.pct >= 60 ? 2 : 1;
      const o = S.lessons[L.id] || { n: 0, best: 0, stars: 0 };
      o.done = o.done || Date.now(); o.last = Date.now(); o.n++; o.best = Math.max(o.best, R.pct); o.stars = Math.max(o.stars, stars);
      S.lessons[L.id] = o; R.stars = stars;
      R.added = L.words.filter((w) => addCard(w, L.id, true)).length;
      today().les++; gain(20);
    } else if (R.kind === 'week') { S.tests.push({ t: Date.now(), ok: tOk, n: tN }); gain(15); }
    else if (R.kind === 'read') { const o = S.reads[R.ref] || {}; S.reads[R.ref] = { t: Date.now(), ok: Math.max(o.ok || 0, tOk), n: tN }; gain(10); }
    else if (R.kind === 'place') {
      let p = 0; for (const lv of LEVELS) { const q = R.test.filter((x) => x.lv === lv.id); if (q.filter((x) => x.ok).length >= 2) p++; else break; }
      R.sugg = LEVELS[Math.min(p, 3)].id;
    } else gain(5);
    save();
  }
  function exitRun() {
    if (!R || R.fin || R.kind !== 'lesson') { const back = R && R.fin ? R : null; R = null; saveRun(); goBackFrom(back); return; }
    confirmSheet('Выйти из урока?', 'Прогресс сохранится — продолжить можно с того же места.', 'Выйти', () => { go('#lesson/' + R.ref); });
  }
  function goBackFrom(run) {
    if (run && run.kind === 'place' && !S.onboarded) { go('#onboard'); return; }
    if (run && run.kind === 'lesson') { go('#course'); return; }
    if (run && run.kind === 'read') { go('#read/' + run.ref); return; }
    if (run && run.kind === 'rule') { go('#rule/' + run.ref); return; }
    go(S.onboarded ? (UI.from || '#practice') : '#onboard');
  }

  /* ---------- экраны занятия ---------- */
  const foot = (html) => `<div class="run-foot">${html}</div>`;
  const nextBtn = (t = 'Дальше') => foot(`<button class="btn pri lg block" data-a="next">${t}</button>`);
  const blankQ = (s, filled) => esc(s.q).replace('___', `<span class="blank${filled ? ' on' : ''}">${filled ? esc(s.a) : '&nbsp;'}</span>`);

  function fb(s) {
    const st = R.st; const ok = st.ok;
    const head = ok ? (st.typo ? 'Верно, но с опечаткой' : st.praise) : 'Не совсем';
    const full = s.full ? `<div class="fb-full">${sayBtn(s.full, false, 'sm')}<span>${esc(s.full)}</span></div>` : '';
    return `<div class="fb ${ok ? 'ok' : 'bad'}" role="status"><div class="fb-h">${ic(ok ? 'check' : 'x')}${esc(head)}</div>
      ${!ok || st.typo ? `<div class="fb-a">Правильно: <b>${esc(s.a)}</b></div>` : ''}
      ${!ok && st.your ? `<div class="fb-your">Ваш ответ: ${esc(st.your)}</div>` : ''}
      ${full}${s.why ? `<div class="fb-why">${esc(s.why)}</div>` : ''}
      <button class="btn lg block ${ok ? 'okb' : 'badb'}" data-a="next">Дальше</button></div>`;
  }
  const SC = {
    intro(s) {
      const L = LES[s.l];
      return `<div class="center-col"><div class="big-emoji">${L.icon}</div>
        <div class="kicker">Урок ${L.n} · ${LV[L.level].name}</div><h1 class="q-title">${esc(L.title)}</h1><p class="muted">${esc(L.topic)}</p>
        <ol class="steps">${STEPS.map((st, i) => `<li><span class="st-n">${i + 1}</span><span class="st-t">${st.name}</span><span class="st-m">${st.min} мин</span></li>`).join('')}</ol>
        <p class="hint">Звук лучше включить: в уроке много озвученных слов и фраз.</p></div>` + nextBtn('Начать');
    },
    tintro(s) {
      return `<div class="center-col"><div class="sec-ic">${ic('trophy')}</div><h1 class="q-title">${esc(s.title)}</h1><p class="muted">${esc(s.text)}</p></div>` + nextBtn('Начать');
    },
    sec(s) {
      const st = STEPS[s.n - 1];
      return `<div class="center-col"><div class="sec-ic">${ic(st.icon)}</div><div class="kicker">Шаг ${s.n} из 6 · ~${st.min} мин</div>
        <h1 class="q-title">${st.name}</h1><p class="muted">${esc(s.text)}</p></div>` + nextBtn('Поехали');
    },
    word(s) {
      const w = s.w;
      return `<div class="word-card"><div class="kicker">Новое слово · ${s.k} из 8</div>
        <div class="word-en">${esc(w[0])}</div><div class="say-row">${sayBtn(w[0])}${sayBtn(w[0], true)}</div>
        <div class="word-ru">${esc(w[1])}</div>
        <div class="ex-box"><div class="ex-line">${sayBtn(w[2], false, 'sm')}<div><div class="ex-en">${esc(w[2])}</div><div class="ex-ru">${esc(w[3])}</div></div></div></div>
        ${w[4] ? `<div class="tip"><span>💡</span><span>${esc(w[4])}</span></div>` : ''}</div>` + nextBtn('Запомнил(а)');
    },
    choice(s) {
      const st = R.st, done = st.done;
      const head = s.hide ? `<div class="listen">${bigSay(s.audio)}</div>` : `<h2 class="q-title">${blankQ(s, done && !s.test)}</h2>`;
      const opts = s.opts.map((o, i) => {
        let c = '';
        if (s.test) { if (st.sel === i) c = 'sel'; }
        else if (done) c = o === s.a ? 'ok' : st.sel === i ? 'bad' : 'dim';
        return `<button class="opt ${c}" data-a="pick" data-i="${i}"${done && !s.test ? ' disabled' : ''}><span class="opt-k">${i + 1}</span><span class="opt-t">${esc(o)}</span></button>`;
      }).join('');
      const last = s.test && R.sc[R.i + 1] && R.sc[R.i + 1].t === 'result';
      return `<div class="q"><div class="kicker">${esc(s.kick || '')}${s.retry ? ' · ещё раз' : ''}</div>${head}${s.sub ? `<p class="q-sub">${esc(s.sub)}</p>` : ''}<div class="opts">${opts}</div></div>` +
        (s.test ? foot(`<button class="btn pri lg block" data-a="testNext"${st.sel == null ? ' disabled' : ''}>${last ? 'Завершить' : 'Дальше'}</button>`) : done ? fb(s) : '');
    },
    order(s) {
      const st = R.st; st.placed = st.placed || []; const done = st.done;
      return `<div class="q"><div class="kicker">Соберите фразу${s.retry ? ' · ещё раз' : ''}</div><h2 class="q-title">${esc(s.ru)}</h2>
        <div class="slot ${done ? (st.ok ? 'ok' : 'bad') : ''}">${st.placed.map((ti, k) => `<button class="wt" data-a="unplace" data-k="${k}"${done ? ' disabled' : ''}>${esc(s.tiles[ti])}</button>`).join('') || '<span class="slot-ph">Нажимайте на слова по порядку</span>'}</div>
        <div class="pool">${s.tiles.map((w, ti) => `<button class="wt${st.placed.includes(ti) ? ' used' : ''}" data-a="tile" data-ti="${ti}"${done || st.placed.includes(ti) ? ' disabled' : ''}>${esc(w)}</button>`).join('')}</div></div>` +
        (done ? fb(s) : foot(`<button class="btn ghost" data-a="clearOrder"${st.placed.length ? '' : ' disabled'}>Сбросить</button><button class="btn pri lg grow" data-a="checkOrder"${st.placed.length ? '' : ' disabled'}>Проверить</button>`));
    },
    type(s) {
      const st = R.st, done = st.done;
      const head = s.dict
        ? `<div class="kicker">Диктант${s.retry ? ' · ещё раз' : ''}</div><div class="listen">${bigSay(s.audio)}</div><p class="q-sub center">Напишите по-английски, что услышали</p>`
        : `<div class="kicker">Напишите по-английски${s.retry ? ' · ещё раз' : ''}</div><h2 class="q-title">${esc(s.q)}</h2>`;
      return `<div class="q">${head}<input id="ans" class="inp${done ? (st.ok ? ' ok' : ' bad') : ''}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="Ваш ответ" value="${esc(st.typed || '')}"${done ? ' disabled' : ''}></div>` +
        (done ? fb(s) : foot(`<button class="btn ghost" data-a="idk">Не знаю</button><button class="btn pri lg grow" data-a="checkType">Проверить</button>`));
    },
    dialog(s) {
      const L = LES[s.l]; const names = [...new Set(L.dialog.map((d) => d[0]))];
      return `<div class="q"><div class="kicker">Диалог</div><h2 class="q-title">Послушайте разговор</h2>
        <div class="dlg-ctl"><button class="btn pri" data-a="playDlg">${ic('play')}Слушать всё</button><button class="btn soft" data-a="tr">${R.st.tr ? 'Скрыть перевод' : 'Перевод'}</button></div>
        <div class="dlg">${L.dialog.map((d, i) => { const v = names.indexOf(d[0]) % 2; return `<button class="bub ${v ? 'r' : 'l'}" data-line="${i}" data-a="say" data-t="${esc(d[1])}" data-v="${v}"><span class="bub-n">${esc(d[0])}</span><span class="bub-en">${esc(d[1])}</span>${R.st.tr ? `<span class="bub-ru">${esc(d[2])}</span>` : ''}</button>`; }).join('')}</div>
        <p class="hint center">Нажмите на реплику, чтобы послушать её отдельно.</p></div>` + nextBtn();
    },
    rule(s) { return `<div class="q">${ruleHTML(LES[s.l])}</div>` + nextBtn('Понятно'); },
    mist(s) {
      return `<div class="q"><div class="kicker">Правило</div><h2 class="q-title">Три частые ошибки</h2><p class="muted">Их делают почти все, кто учит английский. Посмотрите — и не попадайтесь.</p>${mistHTML(LES[s.l])}</div>` + nextBtn();
    },
    speak(s) {
      const st = R.st; let res = '';
      if (st.mic === 'on') res = `<div class="mic-st on">Слушаю… говорите</div>`;
      else if (st.mic === 'done') res = `<div class="mic-st ${st.pct >= 75 ? 'ok' : 'bad'}"><b>${st.pct >= 75 ? 'Отлично! ' : 'Почти! '}Совпало ${st.pct}%</b><div>Услышали: «${esc(st.heard)}»</div>${st.pct < 75 ? '<div class="hint">Послушайте образец ещё раз и попробуйте снова.</div>' : ''}</div>`;
      else if (st.mic === 'err') res = `<div class="mic-st bad">${esc(micErr(st.err))}</div>`;
      return `<div class="q center-col"><div class="kicker">Скажите вслух · ${s.k} из 3</div><h2 class="q-title en">${esc(s.en)}</h2><p class="q-sub">${esc(s.ru)}</p>
        <div class="say-row">${sayBtn(s.en)}${sayBtn(s.en, true)}</div>
        ${SR ? `<button class="mic${st.mic === 'on' ? ' on' : ''}" data-a="mic" aria-label="Говорить">${ic('mic')}</button><p class="hint">Сначала послушайте, потом нажмите на микрофон и повторите</p>`
          : `<p class="hint">Послушайте и повторите фразу вслух 2–3 раза, стараясь попасть в интонацию. (Проверка произношения работает в Chrome.)</p>`}
        ${res}</div>` + (st.mic === 'done' || !SR ? nextBtn('Дальше') : foot('<button class="btn soft lg block" data-a="next">Пропустить</button>'));
    },
    result() { return resultHTML(); }
  };

  function reviewList(items) {
    return `<div class="rv">${items.map((x, k) => `<div class="rv-i ${x.ok ? 'ok' : 'bad'}"><div class="rv-m">${ic(x.ok ? 'check' : 'x')}</div><div class="rv-b">
      <div class="rv-q">${k + 1}. ${esc(x.q).replace('___', '…')}</div>
      ${x.ok ? `<div class="rv-a">${esc(x.a)}</div>` : `<div class="rv-y">Ваш ответ: <s>${esc(x.your)}</s></div><div class="rv-a">Правильно: <b>${esc(x.a)}</b></div>`}
      ${!x.ok && x.why ? `<div class="rv-w">${esc(x.why)}</div>` : ''}</div></div>`).join('')}</div>`;
  }
  function resultHTML() {
    const tOk = R.test.filter((x) => x.ok).length, tN = R.test.length;
    const mins = Math.max(1, Math.round((R.sec || 0) / 60));
    const statRow = (items) => `<div class="res-stats">${items.map(([v, t]) => `<div><b>${v}</b><span>${t}</span></div>`).join('')}</div>`;
    const confetti = `<div class="confetti" aria-hidden="true">${Array.from({ length: 18 }, (_, i) => `<i style="--x:${(i * 37) % 100}%;--d:${(i % 6) * 0.12}s;--c:${i % 3}"></i>`).join('')}</div>`;
    if (R.kind === 'place') {
      const sg = LV[R.sugg];
      return `<div class="center-col">${confetti}<div class="kicker">Тест уровня</div><h1 class="q-title">Рекомендуем: ${sg.name}</h1><p class="muted">${sg.title}. ${esc(sg.desc)}</p>
        <div class="lvl-break">${LEVELS.map((l) => { const q = R.test.filter((x) => x.lv === l.id); const ok = q.filter((x) => x.ok).length; return `<div class="lb" data-lvl="${l.id}"><b>${l.name}</b><span>${ok} из ${q.length}</span><div class="bar"><i style="width:${q.length ? (ok / q.length) * 100 : 0}%"></i></div></div>`; }).join('')}</div>
        <details class="rv-wrap"><summary>Разбор ответов</summary>${reviewList(R.test)}</details></div>` +
        foot(`<button class="btn ghost" data-a="placeOther">Выбрать другой</button><button class="btn pri lg grow" data-a="placeOk">Начать с ${sg.name}</button>`);
    }
    if (R.kind === 'lesson') {
      const L = LES[R.ref]; const nx = lessonsOf(L.level)[L.n] || null;
      return `<div class="center-col">${confetti}<div class="stars">${[1, 2, 3].map((i) => `<span class="${i <= R.stars ? 'on' : ''}">${ic('star')}</span>`).join('')}</div>
        <h1 class="q-title">Урок пройден!</h1><p class="muted">«${esc(L.title)}» — ${esc(L.topic)}</p>
        ${statRow([[tOk + '/' + tN, 'тест'], [(R.ok + R.bad ? Math.round((R.ok / (R.ok + R.bad)) * 100) : 100) + '%', 'точность'], ['+' + (R.xp || 0), 'очков'], [mins + ' мин', 'занятие']])}
        <div class="note">${R.added ? `${R.added} ${plural(R.added, 'новое слово добавлено', 'новых слова добавлены', 'новых слов добавлены')} в карточки — повторим завтра.` : 'Слова этого урока уже есть в ваших карточках.'}</div>
        ${tN ? `<details class="rv-wrap" open><summary>Ответы мини-теста</summary>${reviewList(R.test)}</details>` : ''}</div>` +
        foot(`<button class="btn ghost" data-a="runDone">К урокам</button>${nx ? `<button class="btn pri lg grow" data-a="nextLesson" data-id="${nx.id}">Следующий урок</button>` : `<button class="btn pri lg grow" data-a="runDone">Готово</button>`}`);
    }
    if (R.kind === 'week' || R.kind === 'read') {
      const pct = tN ? Math.round((tOk / tN) * 100) : 0;
      const msg = pct >= 90 ? 'Блестяще!' : pct >= 70 ? 'Хороший результат!' : pct >= 50 ? 'Неплохо — есть над чем поработать' : 'Стоит повторить материал';
      return `<div class="center-col">${pct >= 70 ? confetti : ''}<div class="score-ring">${ring(pct / 100, tOk + '/' + tN, 'верно', 120)}</div>
        <h1 class="q-title">${msg}</h1><p class="muted">${R.kind === 'week' ? 'Тест недели' : '«' + esc(R.title) + '» — вопросы к тексту'}</p>
        <h3 class="h-sub left">Ответы</h3>${reviewList(R.test)}</div>` +
        foot(`${R.kind === 'week' && tOk < tN ? '<button class="btn ghost" data-a="goWrong">Работа над ошибками</button>' : ''}<button class="btn pri lg grow" data-a="runDone">Готово</button>`);
    }
    const acc = R.ok + R.bad ? Math.round((R.ok / (R.ok + R.bad)) * 100) : 100;
    return `<div class="center-col">${acc >= 70 ? confetti : ''}<div class="score-ring">${ring(acc / 100, acc + '%', 'с первого раза', 120)}</div>
      <h1 class="q-title">${acc >= 80 ? 'Отлично потренировались!' : 'Тренировка завершена'}</h1><p class="muted">${esc(R.title)}</p>
      ${statRow([[R.ok, 'верно сразу'], [R.bad, 'с ошибкой'], ['+' + (R.xp || 0), 'очков']])}</div>` +
      foot(`<button class="btn pri lg block" data-a="runDone">Готово</button>`);
  }

  function ruleHTML(L) {
    const r = L.rule;
    return `<div class="rule"><div class="kicker">Правило · ${LV[L.level].name}</div><h2 class="q-title">${esc(r.title)}</h2>${r.text.map((p) => `<p>${p}</p>`).join('')}
      <div class="tbl-wrap"><table class="rtab">${r.head ? `<thead><tr>${r.head.map((x) => `<th>${esc(x)}</th>`).join('')}</tr></thead>` : ''}<tbody>${r.table.map((row) => `<tr>${row.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
      ${r.note ? `<div class="note">${r.note}</div>` : ''}
      <h3 class="h-sub">Примеры</h3><div class="exl">${r.ex.map((e) => `<div class="ex-line">${sayBtn(e[0], false, 'sm')}<div><div class="ex-en">${esc(e[0])}</div><div class="ex-ru">${esc(e[1])}</div></div></div>`).join('')}</div></div>`;
  }
  function mistHTML(L) {
    return `<div class="mist-list">${L.rule.mist.map((m, i) => `<div class="mist"><div class="mist-n">${i + 1}</div><div class="mist-b">
      <div class="mist-bad">${ic('x')}<s>${esc(m[0])}</s></div><div class="mist-good">${ic('check')}<span>${esc(m[1])}</span></div><div class="mist-why">${esc(m[2])}</div></div></div>`).join('')}</div>`;
  }

  /* ---------- статистика ---------- */
  const active = (k) => { const x = S.days[k]; return !!(x && (x.sec >= 60 || x.xp > 0)); };
  function streak() {
    const d = new Date(); let n = 0;
    if (!active(dk(d))) d.setDate(d.getDate() - 1);
    while (active(dk(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function bestStreak() {
    const ks = Object.keys(S.days).filter(active).sort(); let best = 0, cur = 0, prev = null;
    ks.forEach((k) => { const t = new Date(k + 'T12:00:00').getTime(); cur = prev && Math.round((t - prev) / DAY) === 1 ? cur + 1 : 1; best = Math.max(best, cur); prev = t; });
    return best;
  }
  const minsOf = (k) => Math.floor(((S.days[k] || {}).sec || 0) / 60);
  function nextLesson(lv) {
    const order = [lv, ...LEVELS.map((l) => l.id).filter((x) => x !== lv)];
    for (const id of order) { const l = lessonsOf(id).find((x) => !S.lessons[x.id]); if (l) return l; }
    return null;
  }
  function ring(p, big, small, size = 96) {
    const r = 42, c = 2 * Math.PI * r, v = Math.max(0, Math.min(1, p));
    return `<svg class="ring" viewBox="0 0 100 100" width="${size}" height="${size}" role="img" aria-label="${esc(big + ' ' + small)}">
      <circle cx="50" cy="50" r="${r}" class="ring-bg"/><circle cx="50" cy="50" r="${r}" class="ring-fg" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - v)}" transform="rotate(-90 50 50)"/>
      <text x="50" y="${small ? 50 : 56}" class="ring-big">${esc(big)}</text>${small ? `<text x="50" y="66" class="ring-small">${esc(small)}</text>` : ''}</svg>`;
  }

  /* ---------- главные экраны ---------- */
  function topBar(title, o = {}) {
    const st = streak();
    if (o.back) return `<div class="tb"><a class="icb" href="${o.back}" aria-label="Назад">${ic('back')}</a><div class="tb-t">${esc(title)}</div><div class="tb-r">${o.right || ''}</div></div>`;
    return `<div class="tb"><div class="tb-brand">${o.brand ? `<span class="logo">${logo()}</span>` : ''}<span class="tb-t big">${esc(title)}</span></div>
      <div class="tb-r"><a class="chip-st${st ? ' on' : ''}" href="#stats" aria-label="Серия дней">${ic('fire')}<b>${st}</b></a><a class="icb" href="#settings" aria-label="Настройки">${ic('gear')}</a></div></div>`;
  }
  const logo = () => `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="url(#lg)"/><path d="M8 23h5v-5h5v-5h6" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--lv)"/><stop offset="1" stop-color="var(--lv2)"/></linearGradient></defs></svg>`;

  function vHome() {
    const d = today(), min = Math.floor(d.sec / 60), goal = S.goal;
    const due = dueCards().length, wrongN = Object.keys(S.wrong).length;
    const run = R && R.kind === 'lesson' && !R.fin ? R : null;
    const nx = nextLesson(S.level);
    const hr = new Date().getHours();
    const hi = hr < 5 ? 'Доброй ночи' : hr < 12 ? 'Доброе утро' : hr < 18 ? 'Добрый день' : 'Добрый вечер';
    let lessonCard;
    if (run) {
      const L = LES[run.ref]; const p = Math.round((run.i / (run.sc.length - 1)) * 100);
      lessonCard = `<a class="hero" href="#run" data-lvl="${L.level}"><div class="hero-k">Продолжить урок · ${LV[L.level].name}</div><div class="hero-t">${L.icon} ${esc(L.title)}</div><div class="hero-s">${esc(L.topic)}</div>
        <div class="hero-bar"><i style="width:${p}%"></i></div><div class="hero-f"><span>Пройдено ${p}%</span><span class="hero-go">Продолжить ${ic('arrow')}</span></div></a>`;
    } else if (nx) {
      lessonCard = `<a class="hero" href="#lesson/${nx.id}" data-lvl="${nx.level}"><div class="hero-k">Урок ${nx.n} · ${LV[nx.level].name} · ${LV[nx.level].title}</div><div class="hero-t">${nx.icon} ${esc(nx.title)}</div><div class="hero-s">${esc(nx.topic)}</div>
        <div class="hero-f"><span>${ic('clock')} 30 минут · 6 шагов</span><span class="hero-go">Начать ${ic('arrow')}</span></div></a>`;
    } else {
      lessonCard = `<div class="hero"><div class="hero-t">🏆 Все уроки пройдены!</div><div class="hero-s">Повторяйте карточки, проходите тест недели и читайте тексты — так знания не уйдут.</div></div>`;
    }
    // неделя
    const now = new Date(); const wd = (now.getDay() + 6) % 7; const mon = new Date(now); mon.setDate(now.getDate() - wd);
    const week = Array.from({ length: 7 }, (_, i) => { const x = new Date(mon); x.setDate(mon.getDate() + i); const k = dk(x); const m = minsOf(k); return { k, m, wd: WD[x.getDay()], fut: x > now && k !== dk() , cur: k === dk() }; });
    const lvWords = lessonsOf(S.level).flatMap((l) => l.words);
    const wod = lvWords.length ? lvWords[hash(dk()) % lvWords.length] : null;
    const wkLs = weekPool();
    return {
      top: topBar('Ступени', { brand: 1 }),
      html: `<div class="hello"><div class="hello-t">${hi}!</div><div class="muted">${new Date().getDate()} ${MON[new Date().getMonth()]}, ${['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'][new Date().getDay()]}</div></div>
        <div class="card goal">${ring(min / goal, String(min), 'из ' + goal + ' мин')}<div class="goal-b"><div class="goal-t">${min >= goal ? 'Цель на сегодня выполнена 🎉' : 'Цель на сегодня'}</div>
          <div class="muted sm">${min >= goal ? 'Можно остановиться — или повторить карточки.' : `Ещё ${goal - min} ${plural(goal - min, 'минута', 'минуты', 'минут')} занятий`}</div>
          <div class="wk">${week.map((x) => `<div class="wk-d${x.cur ? ' cur' : ''}"><i class="${x.m >= goal ? 'full' : x.m > 0 || active(x.k) ? 'part' : ''}${x.fut ? ' fut' : ''}"></i><span>${x.wd}</span></div>`).join('')}</div></div></div>
        ${lessonCard}
        <div class="tiles">
          <a class="tile" href="#cards"><span class="tile-ic c1">${ic('cards')}</span><span class="tile-n">${due}</span><span class="tile-t">${due ? 'карточек повторить' : 'карточки — всё повторено'}</span></a>
          <a class="tile" href="#" data-a="goWrong"><span class="tile-ic c2">${ic('repeat')}</span><span class="tile-n">${wrongN}</span><span class="tile-t">${wrongN ? 'ошибок разобрать' : 'ошибок нет'}</span></a>
          <a class="tile" href="#" data-a="goWeek"><span class="tile-ic c3">${ic('trophy')}</span><span class="tile-n">${wkLs.length ? '10' : '—'}</span><span class="tile-t">${wkLs.length ? 'вопросов — тест недели' : 'тест недели после урока'}</span></a>
          <a class="tile" href="#practice"><span class="tile-ic c4">${ic('text')}</span><span class="tile-n">${READING.length}</span><span class="tile-t">текстов для перевода</span></a>
        </div>
        ${wod ? `<div class="card wod"><div class="kicker">Слово дня</div><div class="wod-r"><div><div class="wod-en">${esc(wod[0])}</div><div class="muted">${esc(wod[1])}</div></div>${sayBtn(wod[0])}</div><div class="ex-en sm">${esc(wod[2])}</div></div>` : ''}`
    };
  }

  function vCourse() {
    const cl = UI.cl || S.level; const ls = lessonsOf(cl); const done = ls.filter((l) => S.lessons[l.id]).length;
    const cur = ls.find((l) => !S.lessons[l.id]);
    const reads = READING.filter((r) => r.level === cl);
    return {
      top: topBar('Уроки'), lvl: cl,
      html: `<div class="seg lv-seg">${LEVELS.map((l) => `<button class="${l.id === cl ? 'on' : ''}" data-a="cl" data-lv="${l.id}" data-lvl="${l.id}"><b>${l.name}</b><span>${lessonsOf(l.id).filter((x) => S.lessons[x.id]).length}/${lessonsOf(l.id).length}</span></button>`).join('')}</div>
        <div class="card lvl-card"><div><div class="lvl-n">${LV[cl].name} · ${LV[cl].title}</div><div class="muted sm">${esc(LV[cl].desc)}</div></div>
          <div class="bar"><i style="width:${ls.length ? (done / ls.length) * 100 : 0}%"></i></div><div class="muted sm">Пройдено ${done} из ${ls.length} уроков${cl === S.level ? ' · ваш уровень' : ` · <a href="#" data-a="setLevel" data-lv="${cl}">сделать моим уровнем</a>`}</div></div>
        <div class="path">${ls.map((l) => { const o = S.lessons[l.id]; const isCur = l === cur; const inRun = R && !R.fin && R.kind === 'lesson' && R.ref === l.id;
          return `<a class="pn${o ? ' done' : ''}${isCur ? ' cur' : ''}" href="#lesson/${l.id}"><span class="pn-dot">${o ? ic('check') : l.n}</span><span class="pn-b"><span class="pn-t">${l.icon} ${esc(l.title)}</span><span class="pn-s">${esc(l.topic)}</span>
            ${o ? `<span class="pn-stars">${[1, 2, 3].map((i) => `<i class="${i <= o.stars ? 'on' : ''}">${ic('star')}</i>`).join('')}<em>${o.best}%</em></span>` : inRun ? '<span class="pn-tag">в процессе</span>' : isCur ? '<span class="pn-tag">следующий</span>' : ''}</span>${ic('chev', 'pn-ch')}</a>`; }).join('')}</div>
        ${reads.length ? `<h3 class="h-sec">Тексты уровня ${LV[cl].name}</h3><div class="list">${reads.map(readRow).join('')}</div>` : ''}`
    };
  }

  function vLesson(id) {
    const L = LES[id]; if (!L) return vCourse();
    const o = S.lessons[id]; const inRun = R && !R.fin && R.kind === 'lesson' && R.ref === id;
    const p = inRun ? Math.round((R.i / (R.sc.length - 1)) * 100) : 0;
    return {
      top: topBar(LV[L.level].name + ' · Урок ' + L.n, { back: '#course' }), lvl: L.level,
      html: `<div class="hero static" data-lvl="${L.level}"><div class="big-emoji sm">${L.icon}</div><div class="hero-t">${esc(L.title)}</div><div class="hero-s">${esc(L.topic)}</div>
          ${o ? `<div class="hero-f"><span>Пройден ${o.n} ${plural(o.n, 'раз', 'раза', 'раз')} · лучший тест ${o.best}%</span><span>${'★'.repeat(o.stars)}${'☆'.repeat(3 - o.stars)}</span></div>` : `<div class="hero-f"><span>${ic('clock')} ~30 минут</span><span>6 шагов</span></div>`}</div>
        <div class="card"><ol class="steps">${STEPS.map((st, i) => `<li><span class="st-n">${ic(st.icon)}</span><span class="st-t">${st.name}</span><span class="st-m">${st.min} мин</span></li>`).join('')}</ol></div>
        <h3 class="h-sec">Слова урока</h3><div class="chips">${L.words.map((w) => `<button class="chip" data-a="say" data-t="${esc(w[0])}">${esc(w[0])}<small>${esc(w[1].split(/[;(]/)[0])}</small></button>`).join('')}</div>
        <h3 class="h-sec">Правило</h3><a class="row card" href="#rule/${id}"><span class="row-ic">${ic('layers')}</span><span class="row-main"><span class="row-t">${esc(L.rule.title)}</span><span class="row-s">Объяснение, примеры и частые ошибки</span></span>${ic('chev')}</a>
        <div class="sticky-cta">${inRun ? `<button class="btn ghost" data-a="lessonFresh" data-id="${id}">Заново</button><button class="btn pri lg grow" data-a="lesson" data-id="${id}">Продолжить · ${p}%</button>`
          : `<button class="btn pri lg block" data-a="lesson" data-id="${id}">${o ? 'Пройти ещё раз' : 'Начать урок'}</button>`}</div>`
    };
  }

  function readRow(r) {
    const o = S.reads[r.id];
    return `<a class="row card" href="#read/${r.id}" data-lvl="${r.level}"><span class="row-ic emo">${r.icon}</span><span class="row-main"><span class="row-t">${esc(r.title)}</span><span class="row-s">${LV[r.level].name} · ${r.text.length} ${plural(r.text.length, 'предложение', 'предложения', 'предложений')}${o ? ` · вопросы: ${o.ok}/${o.n}` : ''}</span></span>${o ? `<span class="badge ok">${ic('check')}</span>` : ''}${ic('chev')}</a>`;
  }

  function vPractice() {
    const pl = UI.pl || S.level; const wrongN = Object.keys(S.wrong).length; const wk = weekPool();
    const last = S.tests[S.tests.length - 1];
    const lvR = READING.filter((r) => r.level === pl), other = READING.filter((r) => r.level !== pl);
    return {
      top: topBar('Практика'), lvl: pl,
      html: `<div class="list">
          <a class="row card" href="#" data-a="goWrong"><span class="row-ic t2">${ic('repeat')}</span><span class="row-main"><span class="row-t">Работа над ошибками</span><span class="row-s">${wrongN ? `${wrongN} ${plural(wrongN, 'задание', 'задания', 'заданий')}, где вы ошиблись` : 'Пока ошибок нет'}</span></span>${wrongN ? `<span class="badge">${wrongN}</span>` : ''}${ic('chev')}</a>
          <a class="row card" href="#" data-a="goWeek"><span class="row-ic t3">${ic('trophy')}</span><span class="row-main"><span class="row-t">Тест недели</span><span class="row-s">${wk.length ? `10 вопросов по пройденному${last ? ` · прошлый раз ${last.ok}/${last.n}` : ''}` : 'Откроется после первого урока'}</span></span>${ic('chev')}</a>
          <a class="row card" href="#" data-a="place"><span class="row-ic t4">${ic('compass')}</span><span class="row-main"><span class="row-t">Тест уровня</span><span class="row-s">12 вопросов — подскажет, с какого уровня начать</span></span>${ic('chev')}</a></div>
        <h3 class="h-sec">Перевод и вопросы <span class="tag">тестовый режим</span></h3>
        <p class="muted sm">Переведите русский текст на английский сами, сверьтесь с переводом, а потом ответьте на вопросы по словам, фразам и смыслу.</p>
        <div class="list">${[...lvR, ...other].map(readRow).join('')}</div>
        <h3 class="h-sec">Грамматика</h3>
        <div class="seg lv-seg sm">${LEVELS.map((l) => `<button class="${l.id === pl ? 'on' : ''}" data-a="pl" data-lv="${l.id}" data-lvl="${l.id}"><b>${l.name}</b></button>`).join('')}</div>
        <div class="list">${lessonsOf(pl).map((l) => { const m = S.mist[l.id] || 0; return `<a class="row card" href="#rule/${l.id}"><span class="row-ic emo">${l.icon}</span><span class="row-main"><span class="row-t">${esc(l.rule.title)}</span><span class="row-s">Урок ${l.n}${m ? ` · ошибок: ${m}` : ''}</span></span>${S.lessons[l.id] ? `<span class="badge ok">${ic('check')}</span>` : ''}${ic('chev')}</a>`; }).join('')}</div>`
    };
  }

  function vRule(id) {
    const L = LES[id]; if (!L) return vPractice();
    return {
      top: topBar('Грамматика', { back: UI.from && UI.from !== '#rule/' + id ? UI.from : '#practice' }), lvl: L.level,
      html: `<div class="card">${ruleHTML(L)}</div><h3 class="h-sec">Три частые ошибки</h3>${mistHTML(L)}
        <div class="sticky-cta"><a class="btn ghost" href="#lesson/${id}">Урок</a><button class="btn pri lg grow" data-a="rule" data-id="${id}">Тренировать · ${L.drills.length + L.order.length} заданий</button></div>`
    };
  }

  function vRead(id) {
    const T = READ[id]; if (!T) return vPractice();
    const st = (UI.rd[id] = UI.rd[id] || { tab: 1, open: {}, mine: {} });
    const glossRe = new RegExp('\\b(' + T.gloss.map((g) => g[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).sort((a, b) => b.length - a.length).join('|') + ')\\b', 'gi');
    const markEn = (s) => esc(s).replace(glossRe, (m) => { const g = T.gloss.find((x) => x[0].toLowerCase() === m.toLowerCase()); return `<button class="gl" data-a="gl" data-t="${esc(g ? g[1] : '')}">${m}</button>`; });
    let body = '';
    if (st.tab === 1) {
      body = `<p class="muted sm">Переведите каждое предложение на английский — вслух, в уме или письменно. Потом нажмите «Сверить».</p>
        <div class="list">${T.text.map((p, i) => { const open = st.open[i]; const mine = st.mine[i] || ''; const sim = open && mine ? Math.round(overlap(mine, p[1]) * 100) : null;
          return `<div class="card tr-i${open ? ' open' : ''}"><div class="tr-ru"><span class="tr-n">${i + 1}</span>${esc(p[0])}</div>
            <div class="tr-row"><input class="inp sm" data-mine="${i}" placeholder="Ваш перевод — по желанию" value="${esc(mine)}" autocomplete="off" autocapitalize="off" spellcheck="false"${open ? ' disabled' : ''}>
            ${open ? '' : `<button class="btn soft" data-a="trOpen" data-i="${i}">Сверить</button>`}</div>
            ${open ? `<div class="tr-en">${sayBtn(p[1], false, 'sm')}<span>${esc(p[1])}</span></div>${sim != null ? `<div class="tr-sim ${sim >= 70 ? 'ok' : ''}">Совпало слов: ${sim}%${sim >= 70 ? ' — отлично!' : ' — сравните с образцом'}</div>` : ''}` : ''}</div>`; }).join('')}</div>
        <div class="sticky-cta"><button class="btn ghost" data-a="trAll">Показать всё</button><button class="btn pri lg grow" data-a="rdTab" data-n="2">К тексту ${ic('arrow')}</button></div>`;
    } else if (st.tab === 2) {
      body = `<div class="card read-txt"><div class="dlg-ctl"><button class="btn pri" data-a="readAll" data-id="${id}">${ic('play')}Слушать текст</button></div>
          <p>${T.text.map((p) => markEn(p[1])).join(' ')}</p><p class="hint">Подчёркнутые слова — из словарика: нажмите, чтобы увидеть перевод.</p></div>
        <h3 class="h-sec">Словарик</h3><div class="list">${T.gloss.map((g) => `<div class="row card"><span class="row-main"><span class="row-t">${esc(g[0])}</span><span class="row-s">${esc(g[1])}</span></span>${sayBtn(g[0], false, 'sm')}</div>`).join('')}</div>
        <div class="sticky-cta"><button class="btn pri lg block" data-a="readQ" data-id="${id}">Ответить на вопросы · ${T.q.length}</button></div>`;
    }
    return {
      top: topBar(T.title, { back: '#practice' }), lvl: T.level,
      html: `<div class="read-head"><span class="big-emoji sm">${T.icon}</span><div><div class="kicker">${LV[T.level].name} · тестовый режим</div><div class="lvl-n">${esc(T.title)}</div></div></div>
        <div class="seg"><button class="${st.tab === 1 ? 'on' : ''}" data-a="rdTab" data-n="1">1. Перевод</button><button class="${st.tab === 2 ? 'on' : ''}" data-a="rdTab" data-n="2">2. Текст</button><button data-a="readQ" data-id="${id}">3. Вопросы</button></div>${body}`
    };
  }

  function vCards() {
    const keys = Object.keys(S.cards); const due = dueCards().length;
    const cnt = { new: 0, learn: 0, known: 0 }; keys.forEach((k) => cnt[cardStat(S.cards[k])]++);
    const tomorrow = keys.filter((k) => S.cards[k].due > Date.now() && S.cards[k].due < sod() + 2 * DAY).length;
    const list = keys.map((k) => S.cards[k]).sort((a, b) => (b.add || 0) - (a.add || 0));
    const stName = { new: 'новое', learn: 'изучаю', known: 'выучено' };
    return {
      top: topBar('Карточки'),
      html: `<div class="card deck">
          ${due ? `<div class="deck-n">${due}</div><div class="deck-t">${plural(due, 'карточка ждёт', 'карточки ждут', 'карточек ждут')} повторения</div><button class="btn pri lg block" data-a="review">Повторить</button>`
          : keys.length ? `<div class="deck-n">✓</div><div class="deck-t">На сегодня всё повторено</div><div class="muted sm">${tomorrow ? `Завтра — ${tomorrow} ${plural(tomorrow, 'карточка', 'карточки', 'карточек')}` : 'Следующие карточки — позже'}</div><button class="btn soft block" data-a="reviewExtra">Потренироваться ещё</button>`
          : `<div class="deck-n">🃏</div><div class="deck-t">Карточек пока нет</div><div class="muted sm">Слова попадут сюда после первого урока. Или добавьте своё слово.</div>`}</div>
        ${keys.length ? `<div class="dist" role="img" aria-label="Новые ${cnt.new}, изучаю ${cnt.learn}, выучено ${cnt.known}">${['new', 'learn', 'known'].map((s) => cnt[s] ? `<i class="d-${s}" style="flex:${cnt[s]}"></i>` : '').join('')}</div>
          <div class="legend"><span><i class="d-new"></i>Новые ${cnt.new}</span><span><i class="d-learn"></i>Изучаю ${cnt.learn}</span><span><i class="d-known"></i>Выучено ${cnt.known}</span></div>` : ''}
        <p class="muted sm">Повторение по расписанию: помните слово — оно вернётся через 1, 3, 7, 14, 30 дней. Забыли — покажем снова сегодня.</p>
        <div class="srch">${ic('search')}<input id="cq" placeholder="Найти слово" autocomplete="off" autocapitalize="off"></div>
        <button class="btn soft block" data-a="addWord">${ic('plus')}Добавить своё слово</button>
        <div class="list" id="clist">${list.map((c) => `<div class="row card wrow" data-q="${esc((c.en + ' ' + c.ru).toLowerCase())}"><span class="dot d-${cardStat(c)}" title="${stName[cardStat(c)]}"></span><span class="row-main"><span class="row-t">${esc(c.en)}</span><span class="row-s">${esc(c.ru)}</span></span>
          ${sayBtn(c.en, false, 'sm')}${c.l === 'my' ? `<button class="icb sm" data-a="delWord" data-k="${esc(c.en.toLowerCase())}" aria-label="Удалить">${ic('trash')}</button>` : ''}</div>`).join('')}</div>`
    };
  }

  function startReview(extra) {
    const all = Object.keys(S.cards);
    const keys = extra ? pick(all, 15) : shuffle(dueCards()).slice(0, 30);
    if (!keys.length) { toast('Нет карточек для повторения'); return; }
    CS = { q: keys, rev: keys.map((k) => S.cards[k].box >= 2 && Math.random() < 0.4), i: 0, flip: false, extra: !!extra, done: 0, ok: 0, again: {} };
    go('#review');
  }
  function vReview() {
    if (!CS) return { redirect: '#cards' };
    const tot = CS.q.length;
    if (CS.i >= tot) {
      return { imm: 1, html: `<div class="run"><div class="run-top"><a class="icb" href="#cards">${ic('x')}</a><div class="prog"><i style="width:100%"></i></div></div><div class="run-body"><div class="center-col">
        <div class="score-ring">${ring(CS.done ? CS.ok / CS.done : 1, String(CS.done), plural(CS.done, 'карточка', 'карточки', 'карточек'), 120)}</div><h1 class="q-title">Повторение завершено</h1>
        <p class="muted">С первого раза вспомнили ${CS.ok} из ${CS.done}. ${CS.extra ? 'Это была тренировка — расписание не менялось.' : 'Следующий показ каждой карточки уже запланирован.'}</p></div></div>
        ${foot('<a class="btn pri lg block" href="#cards">Готово</a>')}</div>` };
    }
    const k = CS.q[CS.i], c = S.cards[k], rev = CS.rev[CS.i];
    if (!c) { CS.i++; return vReview(); }
    const front = rev ? `<div class="fc-k">Как по-английски?</div><div class="fc-w ru">${esc(c.ru)}</div>` : `<div class="fc-k">Что значит?</div><div class="fc-w">${esc(c.en)}</div><div class="say-row">${sayBtn(c.en)}</div>`;
    const back = `<div class="fc-w">${esc(c.en)}</div><div class="say-row">${sayBtn(c.en)}${sayBtn(c.en, true)}</div><div class="fc-ru">${esc(c.ru)}</div>
      ${c.ex ? `<div class="ex-box"><div class="ex-en">${esc(c.ex)}</div><div class="ex-ru">${esc(c.exr)}</div></div>` : ''}${c.tip ? `<div class="tip"><span>💡</span><span>${esc(c.tip)}</span></div>` : ''}`;
    const G = [['Не помню', 'g0'], ['Трудно', 'g1'], ['Помню', 'g2'], ['Легко', 'g3']];
    return {
      imm: 1,
      html: `<div class="run"><div class="run-top"><a class="icb" href="#cards" aria-label="Закрыть">${ic('x')}</a><div class="prog"><i style="width:${(CS.i / tot) * 100}%"></i></div><span class="run-n">${CS.i + 1}/${tot}</span></div>
        <div class="run-body"><div class="flip${CS.flip ? ' on' : ''}" data-a="flip"><div class="face front">${front}<div class="fc-hint">Нажмите, чтобы перевернуть</div></div><div class="face back">${back}</div></div></div>
        ${foot(CS.flip ? `<div class="grades">${G.map(([t, cl], g) => `<button class="gbtn ${cl}" data-a="grade" data-g="${g}"><b>${t}</b><small>${CS.extra ? '&nbsp;' : ivlTxt(c, g)}</small></button>`).join('')}</div>`
          : '<button class="btn pri lg block" data-a="flip">Показать ответ</button>')}</div>`
    };
  }

  function vStats() {
    const ks = Object.keys(S.days);
    const totMin = Math.round(ks.reduce((a, k) => a + (S.days[k].sec || 0), 0) / 60);
    const ok = ks.reduce((a, k) => a + (S.days[k].ok || 0), 0), bad = ks.reduce((a, k) => a + (S.days[k].bad || 0), 0);
    const acc = ok + bad ? Math.round((ok / (ok + bad)) * 100) : 0;
    const cards = Object.values(S.cards); const known = cards.filter((c) => c.box >= 4).length;
    const lDone = Object.keys(S.lessons).filter((id) => LES[id]).length;
    // 14 дней
    const days = Array.from({ length: 14 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() - 13 + i); return { d, k: dk(d), m: minsOf(dk(d)) }; });
    const maxM = Math.max(S.goal, ...days.map((x) => x.m)) * 1.15;
    const W = 340, H = 150, pb = 22, pt = 8, bw = 14, gap = (W - 14 * bw) / 14;
    const y = (m) => H - pb - ((H - pb - pt) * m) / maxM;
    const bars = days.map((x, i) => { const cx = gap / 2 + i * (bw + gap); const top = y(x.m); const hgt = H - pb - top; const tip = `${WD[x.d.getDay()]}, ${fdate(x.d)}: ${x.m} мин`;
      return `<g class="bar-g" data-tip="${tip}"><rect x="${cx - gap / 2}" y="${pt}" width="${bw + gap}" height="${H - pb - pt}" fill="transparent"/>${x.m ? `<path d="M${cx},${H - pb} V${top + 4} q0,-4 4,-4 h${bw - 8} q4,0 4,4 V${H - pb} z" class="bm${x.m >= S.goal ? ' full' : ''}"/>` : `<rect x="${cx}" y="${H - pb - 2}" width="${bw}" height="2" rx="1" class="b0"/>`}
        ${i % 2 === 1 || i === 13 ? `<text x="${cx + bw / 2}" y="${H - 6}" class="ax">${x.d.getDate()}</text>` : ''}</g>`; }).join('');
    const gy = y(S.goal);
    const chart = `<svg viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="Минуты занятий за 14 дней"><line x1="0" x2="${W}" y1="${H - pb}" y2="${H - pb}" class="axl"/><line x1="0" x2="${W}" y1="${gy}" y2="${gy}" class="goal-l"/><text x="${W - 2}" y="${gy - 4}" class="ax end">цель ${S.goal}</text>${bars}</svg>`;
    // тепловая карта 18 недель
    const WK = 18; const end = new Date(); const wd = (end.getDay() + 6) % 7; const start = new Date(end); start.setDate(end.getDate() - wd - (WK - 1) * 7);
    let cells = '';
    for (let w = 0; w < WK; w++) for (let d = 0; d < 7; d++) {
      const x = new Date(start); x.setDate(start.getDate() + w * 7 + d); if (x > end) continue;
      const m = minsOf(dk(x)); const lvl = m === 0 ? (active(dk(x)) ? 1 : 0) : m < 10 ? 1 : m < 20 ? 2 : m < 30 ? 3 : 4;
      cells += `<rect x="${w * 18}" y="${d * 18}" width="15" height="15" rx="4" class="hm h${lvl}" data-tip="${WD[x.getDay()]}, ${fdate(x)}: ${m} мин"/>`;
    }
    const heat = `<svg viewBox="0 0 ${WK * 18} ${7 * 18}" class="heat" role="img" aria-label="Активность по дням">${cells}</svg>`;
    const hard = Object.keys(S.mist).filter((id) => LES[id]).sort((a, b) => S.mist[b] - S.mist[a]).slice(0, 3);
    const tests = S.tests.slice(-6).reverse();
    return {
      top: topBar('Прогресс'),
      html: `<div class="stat-grid">
          <div class="card st"><span class="st-ic fire">${ic('fire')}</span><b>${streak()}</b><span>${plural(streak(), 'день', 'дня', 'дней')} подряд</span><small>рекорд ${bestStreak()}</small></div>
          <div class="card st"><span class="st-ic">${ic('clock')}</span><b>${totMin}</b><span>${plural(totMin, 'минута', 'минуты', 'минут')} всего</span><small>сегодня ${minsOf(dk())}</small></div>
          <div class="card st"><span class="st-ic">${ic('cards')}</span><b>${known}</b><span>слов выучено</span><small>в карточках ${cards.length}</small></div>
          <div class="card st"><span class="st-ic">${ic('target')}</span><b>${acc}%</b><span>точность ответов</span><small>${ok + bad} ${plural(ok + bad, 'ответ', 'ответа', 'ответов')}</small></div>
        </div>
        <div class="card"><div class="c-h"><b>Минуты за 2 недели</b><span class="muted sm tipout" id="tip1">Нажмите на столбик</span></div>${chart}</div>
        <div class="card"><div class="c-h"><b>Активность</b><span class="muted sm tipout" id="tip2">${S.xp} ${plural(S.xp, 'очко', 'очка', 'очков')} за всё время</span></div>${heat}
          <div class="legend"><span>меньше</span>${[0, 1, 2, 3, 4].map((l) => `<i class="hm-l h${l}"></i>`).join('')}<span>30+ мин</span></div></div>
        <div class="card"><div class="c-h"><b>Уроки по уровням</b><span class="muted sm">${lDone} из ${ALL.length}</span></div>
          ${LEVELS.map((l) => { const ls = lessonsOf(l.id); const n = ls.filter((x) => S.lessons[x.id]).length; return `<div class="lp" data-lvl="${l.id}"><b>${l.name}</b><div class="bar"><i style="width:${ls.length ? (n / ls.length) * 100 : 0}%"></i></div><span>${n}/${ls.length}</span></div>`; }).join('')}</div>
        ${hard.length ? `<h3 class="h-sec">Трудные темы</h3><div class="list">${hard.map((id) => `<a class="row card" href="#rule/${id}"><span class="row-ic emo">${LES[id].icon}</span><span class="row-main"><span class="row-t">${esc(LES[id].rule.title)}</span><span class="row-s">${S.mist[id]} ${plural(S.mist[id], 'ошибка', 'ошибки', 'ошибок')} · нажмите, чтобы повторить</span></span>${ic('chev')}</a>`).join('')}</div>` : ''}
        ${tests.length ? `<h3 class="h-sec">Тесты недели</h3><div class="list">${tests.map((t) => `<div class="row card"><span class="row-main"><span class="row-t">${fdate(t.t)}</span></span><span class="tbar"><i style="width:${(t.ok / t.n) * 100}%"></i></span><b>${t.ok}/${t.n}</b></div>`).join('')}</div>` : ''}`
    };
  }

  function vSettings() {
    const g = (t, body) => `<h3 class="h-sec">${t}</h3><div class="card sgroup">${body}</div>`;
    return {
      top: topBar('Настройки', { back: '#home' }),
      html: g('Обучение', `<div class="srow"><span>Уровень</span><div class="seg sm">${LEVELS.map((l) => `<button class="${S.level === l.id ? 'on' : ''}" data-a="setLevel" data-lv="${l.id}">${l.name}</button>`).join('')}</div></div>
          <div class="srow"><span>Цель в день</span><div class="seg sm">${[10, 20, 30, 45].map((m) => `<button class="${S.goal === m ? 'on' : ''}" data-a="setGoal" data-m="${m}">${m}</button>`).join('')}</div></div>
          <a class="srow link" href="#" data-a="place"><span>Пройти тест уровня</span>${ic('chev')}</a>`) +
        g('Озвучка', `<div class="srow"><span>Произношение</span><div class="seg sm"><button class="${S.accent === 'en-US' ? 'on' : ''}" data-a="setAccent" data-v="en-US">🇺🇸 США</button><button class="${S.accent === 'en-GB' ? 'on' : ''}" data-a="setAccent" data-v="en-GB">🇬🇧 Британия</button></div></div>
          <div class="srow col"><span>Скорость речи: <b id="rateV">${S.rate.toFixed(2).replace(/0$/, '')}×</b></span><input type="range" id="rate" min="0.6" max="1.2" step="0.05" value="${S.rate}"></div>
          <a class="srow link" href="#" data-a="say" data-t="Hello! Nice to meet you. How are you today?"><span>Проверить голос</span>${ic('vol')}</a>
          ${TTS ? '' : '<p class="muted sm">Этот браузер не умеет озвучивать текст.</p>'}`) +
        g('Оформление', `<div class="srow"><span>Тема</span><div class="seg sm">${[['auto', 'Авто'], ['light', 'Светлая'], ['dark', 'Тёмная']].map(([v, t]) => `<button class="${S.theme === v ? 'on' : ''}" data-a="setTheme" data-v="${v}">${t}</button>`).join('')}</div></div>`) +
        g('Данные', `<p class="muted sm">Прогресс хранится только на этом устройстве. Чтобы перенести его на другое, сохраните файл и загрузите там.</p>
          <a class="srow link" href="#" data-a="export"><span>Сохранить прогресс в файл</span>${ic('download')}</a>
          <label class="srow link"><span>Загрузить из файла</span>${ic('upload')}<input type="file" id="imp" accept="application/json,.json" hidden></label>
          <a class="srow link danger" href="#" data-a="reset"><span>Сбросить весь прогресс</span>${ic('trash')}</a>`) +
        `<p class="muted sm center">Ступени · ${ALL.length} уроков · ${ALL.length * 8} слов · ${READING.length} текстов</p>`
    };
  }

  function vOnboard() {
    if (UI.ob === 0) {
      return { imm: 1, html: `<div class="ob"><div class="ob-logo">${logo()}</div><h1 class="ob-t">Английский по ступенькам</h1><p class="muted">Каждый день — небольшой шаг. Через месяц — заметный результат.</p>
        <div class="ob-list"><div>${ic('book')}<span><b>Уроки по 30 минут</b>слова, правило, практика, аудирование, произношение и тест</span></div>
        <div>${ic('cards')}<span><b>Карточки с повторением</b>слова возвращаются ровно тогда, когда начинают забываться</span></div>
        <div>${ic('chart')}<span><b>Прогресс и серия дней</b>статистика, трудные темы и тест недели</span></div></div>
        <p class="hint">Работает без интернета. Всё хранится только на этом устройстве.</p></div>${foot('<button class="btn pri lg block" data-a="ob" data-n="1">Начать</button>')}` };
    }
    if (UI.ob === 1) {
      const sel = UI.obLv || S.level;
      return { imm: 1, html: `<div class="ob"><div class="kicker">Шаг 1 из 2</div><h1 class="ob-t">Какой у вас уровень?</h1>
        <div class="lv-pick">${LEVELS.map((l) => `<button class="lvp${l.id === sel ? ' on' : ''}" data-a="obLv" data-lv="${l.id}" data-lvl="${l.id}"><b>${l.name}</b><span><b>${l.title}</b>${esc(l.desc)}</span></button>`).join('')}</div>
        <button class="btn soft block" data-a="place">${ic('compass')}Не знаю — пройти тест (3 минуты)</button></div>
        ${foot(`<button class="btn ghost" data-a="ob" data-n="0">Назад</button><button class="btn pri lg grow" data-a="obNext">Дальше</button>`)}` };
    }
    return { imm: 1, html: `<div class="ob"><div class="kicker">Шаг 2 из 2</div><h1 class="ob-t">Сколько минут в день?</h1><p class="muted">Регулярность важнее длительности. Цель можно поменять в настройках.</p>
      <div class="goal-pick">${[[10, 'Легко', 'пара карточек и упражнений'], [20, 'Хорошо', 'стабильный темп'], [30, 'Полный урок', 'рекомендуем'], [45, 'Интенсив', 'урок + повторение']].map(([m, t, s]) => `<button class="gp${S.goal === m ? ' on' : ''}" data-a="obGoal" data-m="${m}"><b>${m}</b><span>мин</span><em>${t}</em><small>${s}</small></button>`).join('')}</div></div>
      ${foot(`<button class="btn ghost" data-a="ob" data-n="1">Назад</button><button class="btn pri lg grow" data-a="obDone">Готово</button>`)}` };
  }

  function vRun() {
    if (!R) return { redirect: '#home' };
    const s = R.sc[R.i];
    const pct = R.sc.length > 1 ? (R.i / (R.sc.length - 1)) * 100 : 0;
    let lab = '';
    if (R.kind === 'lesson') { let n = 0; for (let j = R.i; j >= 0; j--) if (R.sc[j].t === 'sec') { n = R.sc[j].n; break; } lab = n ? `${n}/6 · ${STEPS[n - 1].name}` : ''; }
    else { const qs = R.sc.filter((x) => x.t !== 'result' && x.t !== 'tintro'); const k = qs.indexOf(s); lab = k >= 0 ? `${k + 1}/${qs.length}` : ''; }
    const lvl = R.kind === 'lesson' || R.kind === 'rule' ? LES[R.ref].level : R.kind === 'read' ? READ[R.ref].level : null;
    return {
      imm: 1, lvl,
      html: `<div class="run t-${s.t}"><div class="run-top"><button class="icb" data-a="runExit" aria-label="Закрыть">${ic('x')}</button><div class="prog"><i style="width:${pct}%"></i></div><span class="run-n">${lab}</span></div>
        <div class="run-body">${(SC[s.t] || (() => ''))(s)}</div></div>`
    };
  }

  /* ---------- отрисовка ---------- */
  function route() { const h = decodeURIComponent(location.hash.slice(1)) || 'home'; const i = h.indexOf('/'); return i < 0 ? { name: h, arg: '' } : { name: h.slice(0, i), arg: h.slice(i + 1) }; }
  const go = (h) => { if (location.hash === h) render(); else location.hash = h; };
  const TABS = [['home', 'Главная', 'home'], ['course', 'Уроки', 'book'], ['cards', 'Карточки', 'cards'], ['practice', 'Практика', 'target'], ['stats', 'Прогресс', 'chart']];
  const VIEWS = { home: vHome, course: vCourse, lesson: vLesson, cards: vCards, review: vReview, practice: vPractice, rule: vRule, read: vRead, stats: vStats, settings: vSettings, onboard: vOnboard, run: vRun };
  let lastRoute = '', lastTab = 'home';
  function render() {
    const r = route();
    if (!S.onboarded && r.name !== 'onboard' && !(r.name === 'run' && R && R.kind === 'place')) { location.replace('#onboard'); return; }
    const out = (VIEWS[r.name] || vHome)(r.arg);
    if (out.redirect) { location.replace(out.redirect); return; }
    const key = r.name + '/' + r.arg;
    if (key !== lastRoute) { if (TTS && r.name !== 'run') { try { dlgPlay++; speechSynthesis.cancel(); } catch (e) {} } }
    document.documentElement.dataset.lvl = out.lvl || S.level;
    document.body.classList.toggle('imm', !!out.imm);
    $('#top').innerHTML = out.imm ? '' : out.top || '';
    const view = $('#view');
    view.innerHTML = out.html;
    if (key !== lastRoute) { view.classList.remove('v-in'); void view.offsetWidth; view.classList.add('v-in'); if (r.name !== 'run') window.scrollTo(0, 0); }
    const tab = TABS.find((t) => t[0] === r.name) ? r.name : ['lesson'].includes(r.name) ? 'course' : ['rule', 'read'].includes(r.name) ? 'practice' : r.name === 'settings' ? 'home' : lastTab;
    lastTab = tab;
    const due = dueCards().length;
    $('#nav').innerHTML = out.imm ? '' : TABS.map(([id, t, icn]) => `<a href="#${id}" class="${id === tab ? 'on' : ''}">${ic(icn)}<span>${t}</span>${id === 'cards' && due ? `<em>${due > 99 ? '99+' : due}</em>` : ''}</a>`).join('');
    if (['home', 'course', 'cards', 'practice', 'stats'].includes(r.name)) UI.from = '#' + r.name;
    lastRoute = key;
    afterRender(r);
  }
  function afterRender(r) {
    if (r.name === 'run' && R) {
      const s = R.sc[R.i];
      if (!R.st.auto) {
        const t = s.t === 'word' ? s.w[0] : (s.hide || s.dict) && !R.st.done ? s.audio : null;
        if (t) { R.st.auto = 1; setTimeout(() => say(t, { quiet: true }), 250); }
      }
      if (s.t === 'type' && !R.st.done) { const i = $('#ans'); if (i && matchMedia('(pointer:fine)').matches) i.focus(); }
      const fbEl = document.querySelector('.fb'); if (fbEl) fbEl.scrollIntoView({ block: 'nearest' });
    }
    if (r.name === 'review' && CS && CS.i < CS.q.length) {
      const k = CS.q[CS.i]; const c = S.cards[k];
      if (c && CS.auto !== CS.i + ':' + CS.flip && (!CS.rev[CS.i] || CS.flip)) { CS.auto = CS.i + ':' + CS.flip; if (!CS.flip || CS.rev[CS.i]) setTimeout(() => say(c.en, { quiet: true }), 200); }
    }
  }

  /* ---------- действия ---------- */
  let SH_OK = null;
  function sheet(html) { const el = $('#sheet'); el.innerHTML = `<div class="sh-bg" data-a="shClose"></div><div class="sh" role="dialog">${html}</div>`; el.classList.add('on'); }
  function shClose() { const el = $('#sheet'); el.classList.remove('on'); el.innerHTML = ''; SH_OK = null; }
  function confirmSheet(title, text, okText, fn, danger) {
    sheet(`<h3>${esc(title)}</h3><p class="muted">${esc(text)}</p><div class="sh-btns"><button class="btn ghost" data-a="shClose">Отмена</button><button class="btn ${danger ? 'danger' : 'pri'} grow" data-a="shOk">${esc(okText)}</button></div>`);
    SH_OK = fn;
  }
  let toastT = 0;
  function toast(t) { const el = $('#toast'); el.textContent = t; el.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('on'), 2600); }
  function applyTheme() {
    const h = document.documentElement; if (S.theme === 'auto') delete h.dataset.theme; else h.dataset.theme = S.theme;
    const dark = S.theme === 'dark' || (S.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
    const m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = dark ? '#0f1118' : '#f3f4fa';
  }

  const A = {
    next: () => advance(),
    say: (d) => say(d.t, { slow: !!d.slow, voice: +d.v || 0 }),
    pick: (d) => {
      const s = R.sc[R.i]; const i = +d.i;
      if (s.test) { testPick(i); return; }
      if (R.st.done) return;
      R.st.sel = i; answer(s.opts[i] === s.a, { your: s.opts[i] });
    },
    testNext: () => testNext(),
    tile: (d) => { R.st.placed = R.st.placed || []; R.st.placed.push(+d.ti); render(); },
    unplace: (d) => { R.st.placed.splice(+d.k, 1); render(); },
    clearOrder: () => { R.st.placed = []; render(); },
    checkOrder: () => { const s = R.sc[R.i]; const got = R.st.placed.map((i) => s.tiles[i]).join(' '); answer(norm(got) === norm(s.a), { your: got }); },
    checkType: () => {
      const s = R.sc[R.i]; const v = ($('#ans') || {}).value || ''; R.st.typed = v;
      if (!v.trim()) { toast('Напишите ответ или нажмите «Не знаю»'); return; }
      const r = checkText(v, s.a); answer(r > 0, { your: v, typo: r === 1 });
    },
    idk: () => { const s = R.sc[R.i]; answer(false, { your: '' }); },
    playDlg: () => playDialog(),
    tr: () => { R.st.tr = !R.st.tr; render(); },
    mic: () => { const s = R.sc[R.i]; if (R.st.mic === 'on') return; listen(s.en); },
    runExit: () => exitRun(),
    runDone: () => { const back = R; R = null; saveRun(); goBackFrom(back); },
    nextLesson: (d) => { R = null; saveRun(); go('#lesson/' + d.id); },
    goWrong: () => startWrong(),
    goWeek: () => startWeek(),
    place: () => { UI.from = location.hash; startPlace(); },
    placeOk: () => { S.level = R.sugg; UI.cl = UI.pl = null; save(); R = null; saveRun(); if (!S.onboarded) { UI.ob = 2; go('#onboard'); } else { toast('Уровень: ' + LV[S.level].name); go('#home'); } },
    placeOther: () => { UI.obLv = R.sugg; R = null; saveRun(); if (!S.onboarded) { UI.ob = 1; go('#onboard'); } else go('#settings'); },
    lesson: (d) => startLesson(d.id),
    lessonFresh: (d) => confirmSheet('Начать урок заново?', 'Текущий прогресс этого урока сбросится.', 'Заново', () => { R = null; startLesson(d.id, true); }),
    rule: (d) => startRule(d.id),
    cl: (d) => { UI.cl = d.lv; render(); },
    pl: (d) => { UI.pl = d.lv; render(); },
    setLevel: (d) => { S.level = d.lv; UI.cl = UI.pl = null; save(); toast('Ваш уровень: ' + LV[d.lv].name); render(); },
    setGoal: (d) => { S.goal = +d.m; save(); render(); },
    setAccent: (d) => { S.accent = d.v; save(); render(); say('Hello! How are you?', { quiet: true }); },
    setTheme: (d) => { S.theme = d.v; save(); applyTheme(); render(); },
    review: () => startReview(false),
    reviewExtra: () => startReview(true),
    flip: () => { if (!CS) return; CS.flip = !CS.flip; render(); },
    grade: (d) => {
      const g = +d.g; const k = CS.q[CS.i];
      if (!CS.again[k]) { CS.done++; if (g >= 2) CS.ok++; }
      if (!CS.extra) grade(k, g);
      today().cards++; gain(1);
      if (g === 0 && (CS.again[k] || 0) < 2) { CS.again[k] = (CS.again[k] || 0) + 1; CS.q.push(k); CS.rev.push(false); }
      CS.i++; CS.flip = false; save(); render();
    },
    addWord: () => {
      sheet(`<h3>Своё слово</h3><div class="form"><label>Слово по-английски<input class="inp" id="nw-en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="например, journey"></label>
        <label>Перевод<input class="inp" id="nw-ru" autocomplete="off" placeholder="путешествие"></label>
        <label>Пример (по желанию)<input class="inp" id="nw-ex" autocomplete="off" autocapitalize="off" placeholder="The journey was long."></label></div>
        <div class="sh-btns"><button class="btn ghost" data-a="shClose">Отмена</button><button class="btn pri grow" data-a="saveWord">Добавить</button></div>`);
      setTimeout(() => { const i = $('#nw-en'); if (i) i.focus(); }, 50);
    },
    saveWord: () => {
      const en = $('#nw-en').value.trim(), ru = $('#nw-ru').value.trim(), ex = $('#nw-ex').value.trim();
      if (!en || !ru) { toast('Нужны слово и перевод'); return; }
      if (!addCard([en, ru, ex, '', ''], 'my', false)) { toast('Такое слово уже есть'); return; }
      save(); shClose(); toast('Слово добавлено — повторим сегодня'); render();
    },
    delWord: (d) => confirmSheet('Удалить слово?', `«${S.cards[d.k] ? S.cards[d.k].en : ''}» исчезнет из карточек.`, 'Удалить', () => { delete S.cards[d.k]; save(); render(); }, true),
    rdTab: (d) => { const id = route().arg; UI.rd[id].tab = +d.n; render(); },
    trOpen: (d) => { const id = route().arg; const st = UI.rd[id]; const inp = document.querySelector(`[data-mine="${d.i}"]`); if (inp) st.mine[d.i] = inp.value; st.open[d.i] = 1; render(); },
    trAll: () => { const id = route().arg; const st = UI.rd[id]; document.querySelectorAll('[data-mine]').forEach((i) => (st.mine[i.dataset.mine] = i.value)); READ[id].text.forEach((_, i) => (st.open[i] = 1)); render(); },
    readAll: (d) => { const T = READ[d.id]; say(T.text.map((p) => p[1]).join(' ')); },
    readQ: (d) => startRead(d.id),
    gl: (d, el) => { toast(el.textContent + ' — ' + d.t); },
    ob: (d) => { UI.ob = +d.n; render(); },
    obLv: (d) => { UI.obLv = d.lv; render(); },
    obNext: () => { S.level = UI.obLv || S.level; save(); UI.ob = 2; render(); },
    obGoal: (d) => { S.goal = +d.m; save(); render(); },
    obDone: () => { S.onboarded = true; save(); UI.ob = 0; go('#home'); },
    export: () => {
      const blob = new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'stupeni-' + dk() + '.json'; document.body.appendChild(a); a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); toast('Файл сохранён');
    },
    reset: () => confirmSheet('Сбросить прогресс?', 'Уроки, карточки, статистика и настройки удалятся с этого устройства. Отменить нельзя.', 'Сбросить', () => { S = DEF(); R = null; CS = null; save(); saveRun(); UI.ob = 0; go('#onboard'); }, true),
    shClose: () => shClose(),
    shOk: () => { const f = SH_OK; shClose(); if (f) f(); }
  };
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-a]');
    if (!el || el.disabled) return;
    const fn = A[el.dataset.a]; if (!fn) return;
    e.preventDefault(); fn(el.dataset, el, e);
  });
  document.addEventListener('input', (e) => {
    const t = e.target;
    if (t.id === 'ans' && R) R.st.typed = t.value;
    if (t.id === 'cq') { const q = t.value.trim().toLowerCase(); document.querySelectorAll('#clist .wrow').forEach((r) => (r.hidden = q && !r.dataset.q.includes(q))); }
    if (t.dataset.mine != null) { const st = UI.rd[route().arg]; if (st) st.mine[t.dataset.mine] = t.value; }
    if (t.id === 'rate') { S.rate = +t.value; $('#rateV').textContent = S.rate.toFixed(2).replace(/0$/, '') + '×'; save(); }
  });
  document.addEventListener('change', (e) => {
    if (e.target.id === 'rate') say('This is how fast I speak.', { quiet: true });
    if (e.target.id === 'imp' && e.target.files[0]) {
      const fr = new FileReader();
      fr.onload = () => {
        try { const o = JSON.parse(fr.result); if (!o || o.v !== 1 || typeof o.cards !== 'object') throw 0; S = Object.assign(DEF(), o); save(); applyTheme(); toast('Прогресс загружен'); render(); }
        catch (x) { toast('Это не файл прогресса «Ступеней»'); }
      };
      fr.readAsText(e.target.files[0]);
    }
  });
  // подсказки на графиках: наведение и нажатие
  const tipAt = (e) => { const g = e.target.closest('[data-tip]'); if (!g) return; const out = g.closest('.card') && g.closest('.card').querySelector('.tipout'); if (out) out.textContent = g.dataset.tip; };
  document.addEventListener('pointerover', tipAt); document.addEventListener('pointerdown', tipAt);
  document.addEventListener('keydown', (e) => {
    if ($('#sheet').classList.contains('on')) { if (e.key === 'Escape') shClose(); return; }
    const r = route().name;
    if (r === 'run' && R) {
      const s = R.sc[R.i];
      if (e.key === 'Enter') {
        e.preventDefault();
        if (R.st.done && !s.test) return advance();
        if (s.t === 'type') return A.checkType();
        if (s.t === 'order' && (R.st.placed || []).length) return A.checkOrder();
        if (s.test) { if (R.st.sel != null) testNext(); return; }
        if (!['choice', 'order', 'type'].includes(s.t)) return advance();
      }
      if (/^[1-4]$/.test(e.key) && s.t === 'choice' && document.activeElement.tagName !== 'INPUT') { const i = +e.key - 1; if (s.opts[i] != null) A.pick({ i }); }
      if (e.key === 'Escape') exitRun();
    }
    if (r === 'review' && CS && CS.i < CS.q.length) {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); if (!CS.flip) A.flip(); }
      if (CS.flip && /^[1-4]$/.test(e.key)) A.grade({ g: +e.key - 1 });
    }
  });

  /* ---------- время занятий ---------- */
  let lastAct = Date.now();
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach((ev) => addEventListener(ev, () => (lastAct = Date.now()), { passive: true, capture: true }));
  const STUDY = ['run', 'review', 'rule', 'read', 'lesson', 'cards'];
  setInterval(() => {
    if (document.visibilityState !== 'visible' || Date.now() - lastAct > 90000) return;
    const r = route().name; if (!STUDY.includes(r)) return;
    today().sec += 5; if (r === 'run' && R && !R.fin) { R.sec = (R.sec || 0) + 5; saveRun(); }
    save();
  }, 5000);
  addEventListener('hashchange', render);
  matchMedia('(prefers-color-scheme: dark)').addEventListener && matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

  // ошибки — в атрибут страницы (для проверок) и в консоль
  addEventListener('error', (e) => { document.body.dataset.err = (document.body.dataset.err || '') + (e.message || 'error') + '; '; });

  applyTheme();
  render();
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register('sw.js').catch(() => {});
  window.__stupeni = { get S() { return S; }, get R() { return R; }, A, render, LES, ALL, buildLesson, checkText, norm };
})();
