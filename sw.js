/* Работа без интернета: свои файлы — из кэша, шрифт — кэшируется при первой загрузке.
   Поменял набор файлов или их содержимое — подними номер CACHE. */
const CACHE = 'stupeni-v1';
const FILES = ['./', 'index.html', 'css/app.css', 'js/app.js', 'js/content/a1.js', 'js/content/a2.js', 'js/content/b1.js',
  'js/content/b2.js', 'js/content/reading.js', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(
  caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  const own = u.origin === location.origin;
  const font = /fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if (!own && !font) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: own }).then((hit) => {
    if (hit) return hit;
    return fetch(e.request).then((res) => {
      if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
      return res;
    }).catch(() => (own && e.request.mode === 'navigate' ? caches.match('index.html') : undefined));
  }));
});
