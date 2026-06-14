const CACHE_NAME = 'shrimptime-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/menu/index.html',
  '/styles.css',
  '/menu/menu.css',
  '/app.js',
  '/manifest.json',
  '/assets/icons/favicon.png',
  '/assets/icons/favicon.svg',
  '/assets/images/logo.png',
  '/assets/images/hero-bg.jpg',
  '/assets/images/crevettes-12.webp'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      const fetchPromise = fetch(e.request).then((networkResponse) => {
        if (networkResponse.ok) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return networkResponse;
      }).catch(() => {
        // Silent catch for network request failures
      });
      return cachedResponse || fetchPromise;
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});
