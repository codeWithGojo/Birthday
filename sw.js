const CACHE_NAME = 'victory-twenty-v21';
const CORE_FILES = [
  './',
  './index.html',
  './birthday-editorial.css?v=21',
  './birthday-universe.css?v=21',
  './universe-sky.js?v=21',
  './universe-interactions.js?v=21',
  './birthday-controls.js?v=21',
  './birthday-opening.js?v=21',
  './birthday-opening.css?v=21',
  './birthday-phone.css?v=21',
  './birthday-reaction.js?v=21',
  './translations-ru.js?v=21',
  './assets/victory-qr.svg',
  './assets/victory-gift-card.png',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './victory.webp',
  './assets/media/amarachi-cake.webp',
  './assets/media/victory-vhs.webp',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.allSettled(CORE_FILES.map(file => cache.add(file))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key.startsWith('victory-twenty-') && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;
  if (event.request.headers.has('range') || requestUrl.pathname.endsWith('.mp4')) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if(!response.ok)return response;
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    }))
  );
});
