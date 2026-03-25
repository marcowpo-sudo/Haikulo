// Nome della cache per questa versione dell'app
const CACHE_NAME = 'haikulo-v5.0';

// File statici essenziali da memorizzare immediatamente (App Shell)
const staticAssets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png'
];

// 1. Installazione: memorizza i file statici
self.addEventListener('install', async event => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(staticAssets);
});

// 2. Attivazione: pulisce le vecchie cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// 3. Recupero (Fetch): strategia Cache-First (Offline/Velocità)
// Gestisce anche i font esterni di Google
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Per i font Google: Stale-While-Revalidate (mostra vecchia cache, aggiorna sotto)
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        const fetchPromise = fetch(request).then(networkResponse => {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, networkResponse.clone());
          });
          return networkResponse;
        });
        return cachedResponse || fetchPromise;
      })
    );
  } else {
    // Per i file dell'app: Cache-First
    event.respondWith(
      caches.match(request).then(cachedResponse => {
        return cachedResponse || fetch(request);
      })
    );
  }
});