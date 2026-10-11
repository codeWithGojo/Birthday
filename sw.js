const CACHE_NAME = 'victory-twenty-v29';
const CORE_FILES = [
  './',
  './index.html',
  './birthday-editorial.css?v=29',
  './birthday-universe.css?v=29',
  './universe-sky.js?v=29',
  './universe-interactions.js?v=29',
  './birthday-controls.js?v=29',
  './birthday-opening.js?v=29',
  './birthday-opening.css?v=29',
  './birthday-phone.css?v=29',
  './birthday-newspaper.css?v=29',
  './birthday-newspaper.js?v=29',
  './assets/media/amarachi-birthday-post-en.jpg',
  './assets/media/amarachi-birthday-post-ru.jpg',
  './assets/fonts/birthday-blackletter.woff',
  './assets/fonts/birthday-script.woff',
  './birthday-reaction.js?v=29',
  './translations-ru.js?v=29',
  './assets/victory-qr.svg',
  './assets/victory-gift-card.png',
  './manifest.webmanifest?v=29',
  './favicon.ico?v=29',
  './icon-32.png?v=29',
  './icon-180.png?v=29',
  './icon.svg?v=29',
  './icon-192.png?v=29',
  './icon-512.png?v=29',
  './victory.webp',
  './assets/media/amarachi-cake.webp',
  './assets/media/victory-vhs.webp',
  './assets/media/victory-closeup.webp',
  './assets/media/victory-green-filter.webp',
  './assets/media/victory-silly-face.webp',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.allSettled(CORE_FILES.map(file => cache.add(new Request(file, {cache: 'reload'})))))
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


