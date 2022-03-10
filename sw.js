var CACHE_NAME = 'cache-v1';

var staticAssets = ['./', './index.html', './main.js'];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(staticAssets);
    })
  );
});
