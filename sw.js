/**
 * SERVICE WORKER (PWA) - VERSÃO FINAL CORRIGIDA
 * Estratégia: Stale-While-Revalidate para Assets + Network-First para APIs
 */

const CACHE_NAME = 'mathlingo-v1-static';
const DATA_CACHE_NAME = 'mathlingo-v1-data';

const FILES_TO_CACHE = [
  './',
  './index.html',
  './css/styles.css',
  
  // --- JS INFRAESTRUTURA ---
  './js/loader.js',
  './js/config.js',
  './js/registry.js',
  
  // --- JS MÓDULOS PRINCIPAIS (NOVOS) ---
  './js/app.js',
  './js/ui.js',    
  './js/game.js',  
  './js/audio.js',
  './js/auth.js',
  //'./js/chat.js',
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
self.addEventListener('fetch', (evt) => {
  // Ignora chamadas do Firebase/Google APIs (Deixa a rede cuidar)
  if (evt.request.url.includes('firestore') ||
      evt.request.url.includes('googleapis') ||
      evt.request.url.includes('auth')) {
    return;
  }

  // Se for navegação de página (HTML), tenta rede, se falhar, vai pro cache
  if (evt.request.mode === 'navigate') {
    evt.respondWith(
      fetch(evt.request).catch(() => {
        return caches.match('./index.html');
      })
    );
    return;
  }

  // Para outros arquivos (CSS, JS, Imagens): Stale-While-Revalidate
  // Retorna o cache rápido, mas busca na rede em segundo plano para atualizar o cache
  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request).then((response) => {
        const fetchPromise = fetch(evt.request)
          .then((networkResponse) => {
            // Se a resposta da rede for válida, atualiza o cache
            if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
              cache.put(evt.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => {
             // Se falhar rede e não tiver cache, falha silenciosamente (assets opcionais)
          });
        
        // Retorna o que tiver no cache primeiro, ou espera a rede se não tiver cache
        return response || fetchPromise;
      });
    })
  );
});