/* global caches */

// urlsToCache will be modified by a post build script
var urlsToCache = ['/Barticle/assets/barticle-0bc42cf76cc754eb84ad8f7149403272.css', '/Barticle/assets/barticle-2ffbd46ed0633de6566d6ab2a4cc3378.js', '/Barticle/assets/vendor-469ae94e605e88fc1f8a1ea008cb0c59.js', '/Barticle/assets/vendor-fdf65018cf42c9b78fabee913b19426d.css', '/Barticle/crossdomain.xml', '/Barticle/index.html', '/Barticle'];
var CACHE_NAME = 'barticle-cache-v2';

this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('activate', function (event) {
  console.log('activate');
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName.startsWith('barticle-') && cacheName !== CACHE_NAME;
        })
        .map(function (cacheName) {
          console.log('delete:', cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
});

this.addEventListener('fetch', function (event) {
  console.log('fetch:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          console.log('hit');
          return response;
        }

        return fetch(event.request).then(
          function (response) {
            if (!_shouldCache) {
              console.log('should not cache');
              return response;
            }
            console.log('open cache to cache');
            caches.open(CACHE_NAME)
              .then(function (cache) {
                console.log('cache response:', event.request.url);
                cache.put(event.request, response.clone());
              });

            return response;
          }
        );
      })
    );
});

function _shouldCache (response, url) {
  var isBart = url.indexOf('https://api.bart.gov') !== -1;
  var isLiveReload = url.indexOf('livereload') !== -1;
  return  !isBart && !isLiveReload && !response || response.status !== 200 || response.type !== 'basic';
}
