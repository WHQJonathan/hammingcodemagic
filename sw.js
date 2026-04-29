const CACHE_NAME = 'magic-cache-v1';
// 將你要快取的檔案列在這裡
const urlsToCache =[
  './',
  './index.html',
  './manifest.json',
  './photo1.png', './photo2.png', './photo3.png', './photo4.png', 
  './photo5.png', './photo6.png', './photo7.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});