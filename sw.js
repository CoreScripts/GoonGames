const CACHE_NAME = 'goongames-v1';

// We don't need to cache much, just enough to satisfy the PWA requirements
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(['./', './index.html']))
  );
});

// This "Fetch" handler is what makes the phone trust the app
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
