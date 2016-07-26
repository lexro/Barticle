/* global caches */
// some stuff based on http://www.html5rocks.com/en/tutorials/service-worker/introduction/

// urlsToCache will be modified by a post build script
var urlsToCache = ['/Barticle/assets/barticle-0bc42cf76cc754eb84ad8f7149403272.css', '/Barticle/assets/barticle-1ddafbf70d56db667aaae7349699eba9.js', '/Barticle/assets/vendor-5a4b16c03779cfeddfe2d998b43682a8.js', '/Barticle/assets/vendor-fdf65018cf42c9b78fabee913b19426d.css', '/Barticle/crossdomain.xml', '/Barticle/index.html', '/Barticle'];
var thirdPartyUrlsToCache = ['https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V', 'https://api.bart.gov/api/route.aspx?cmd=routeinfo&route=all&key=MW9S-E7SL-26DU-VV8V', 'https://fonts.googleapis.com/css?family=Roboto:400'];
var CACHE_NAME = 'barticle-cache-v1';

// precache this stuff
this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        var urls = urlsToCache.concat(thirdPartyUrlsToCache);
        return cache.addAll(urls);
      })
  );
});

// delete other barticle caches
this.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName.startsWith('barticle-') && cacheName !== CACHE_NAME;
        })
        .map(function (cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

// hijack requests and cache them
this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function (response) {
            if (!_shouldCache) {
              return response;
            }

            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

// cache bart responses
function _shouldCache (response, url) {
  var isBart = url.indexOf('https://api.bart.gov') !== -1;
  var isLiveReload = url.indexOf('livereload') !== -1;

  return  !isBart && !isLiveReload && !response || response.status !== 200 || response.type !== 'basic';
}
