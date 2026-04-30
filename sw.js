const CACHE_NAME = 'goongames-v1';
const ASSETS = [
  './',
  './index.html',
  './games.js',
  './droplet.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
