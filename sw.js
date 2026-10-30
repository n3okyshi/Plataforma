/**
 * SERVICE WORKER (PWA) - MATHLINGO v3.25
 * Estratégia: Stale-While-Revalidate para Assets + Network-First para APIs
 */

const CACHE_NAME = 'mathlingo-v3.25-static';
const DATA_CACHE_NAME = 'mathlingo-v3.25-data';

const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',

  // --- CSS TOKENS & DESIGN SYSTEM ---
  './css/variables.css',
  './css/base.css',
  './css/layout.css',
  './css/components.css',
  './css/style.css',

  // --- JS INFRAESTRUTURA & ESTADO REATIVO ---
  './js/loader.js',
  './js/config.js',
  './js/reactive.js',
  './js/firebase-service.js',
  './js/registry.js',
  './js/gerado.js',
  './js/hash-matricula.js',
  './js/pratica.js',
  './js/fila-resultados.js',

  // --- JS MÓDULOS PRINCIPAIS ---
  './js/app.js',
  './js/ui.js',
  './js/game.js',
  './js/audio.js',
  './js/auth.js',
  './js/arena.js',
  './js/teacher.js',

  // --- JS VIEWS ---
  './js/views/core.js',
  './js/views/auth.js',
  './js/views/home.js',
  './js/views/map.js',
  './js/views/lesson.js',
  './js/views/arena.js',
  './js/views/profile.js',
  './js/views/teacher.js',

  // --- EXTERNOS ---
  './js/tailwind_cdn.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
];

// INSTALAÇÃO
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Pre-caching offline pages');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
  self.skipWaiting();
});

// ATIVAÇÃO
self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Ativando e limpando caches antigos...');
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
          console.log('[ServiceWorker] Removendo cache antigo', key);
          return caches.delete(key);
        }
      }));
    })
  );
  self.clients.claim();
});

// INTERCEPTAÇÃO DE REDE (FETCH)
// Falha 7: só mesma origem (ou CDN explicitamente permitido), só GET e nunca
// cachear resposta opaca. Backend/Auth passam direto.
const ORIGENS_PERMITIDAS = [
  'https://cdnjs.cloudflare.com',
  'https://cdn.jsdelivr.net'
];

self.addEventListener('fetch', (evt) => {
  const request = evt.request;

  // Métodos que mudam estado nunca são servidos pelo cache.
  if (request.method !== 'GET') return;

  let url;
  try {
    url = new URL(request.url);
  } catch (erro) {
    return; // URL inválida: deixa o navegador resolver
  }

  // Backend/Firebase: sempre direto (dados e tokens nunca entram no cache).
  if (/firestore|googleapis|identitytoolkit|securetoken|firebaseio/.test(url.hostname)) {
    return;
  }

  // Handlers de autenticação do próprio app carregam token/redirect.
  if (/\/(?:__\/)?auth\//.test(url.pathname)) return;

  const mesmaOrigem = url.origin === self.location.origin;
  if (!mesmaOrigem && ORIGENS_PERMITIDAS.indexOf(url.origin) === -1) {
    return; // cross-origin fora da allowlist: o SW nem participa
  }

  if (request.mode === 'navigate') {
    evt.respondWith(
      fetch(request).catch(() => {
        return caches.match('./index.html');
      })
    );
    return;
  }

  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(request).then((response) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            const cacheavel = networkResponse &&
              networkResponse.status === 200 &&
              networkResponse.type === 'basic' &&
              new URL(networkResponse.url).origin === self.location.origin;
            if (cacheavel) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => undefined);

        return response || fetchPromise;
      });
    })
  );
});
