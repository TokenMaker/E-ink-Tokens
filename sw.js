const CACHE_NAME = 'mtg-link-v1';
const urlsToCache = [
  './',
  './index.html',
  './token-icon.svg',
  './global-icon.svg',
  './cmdr-icon.svg',
  './setting-icon.svg',
  './Battery_Full.svg',
  './Battery_half.svg',
  './Battery_Empty.svg',
  './Battery_Charging.svg',
  './Wi-Fi_On.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});