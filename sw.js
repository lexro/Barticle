/* global caches */
// some stuff based on http://www.html5rocks.com/en/tutorials/service-worker/introduction/

// urlsToCache will be modified by a post build script
var urlsToCache = ['/Barticle/assets/barticle-490ca1aba299d1ed63125f22f0adebbe.js', '/Barticle/assets/barticle-53fdc8793ba32e824c05ddbd7cec86ca.css', '/Barticle/assets/vendor-61f7630a69b63b3d7351c2db45b5cf92.css', '/Barticle/assets/vendor-e8ea13569088fcaca55f275dd9ca3220.js', '/Barticle/crossdomain.xml', '/Barticle/images/foggy-golden-gate.jpeg', '/Barticle/index.html', '/Barticle'];
var thirdPartyUrlsToCache = ['https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V', 'https://api.bart.gov/api/route.aspx?cmd=routeinfo&route=all&key=MW9S-E7SL-26DU-VV8V', 'https://fonts.googleapis.com/css?family=Roboto:400'];
var CACHE_NAME = 'barticle-cache-v5';

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
  var url = event.request.url;

  if (_shouldHijack(url)) {
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          if (response) {
            return response;
          }

          var fetchRequest = event.request.clone();

          return fetch(fetchRequest).then(
            function (response) {
              if (!_shouldCache(response, url)) {
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
    }
});

function _shouldHijack (url) {
  var isBlank = url === 'about:blank';

  if (isBlank) {
    return false;
  }

  return true;
}

// cache bart responses
function _shouldCache (response, url) {
  var isBart = url.indexOf('https://api.bart.gov') !== -1;
  var isLiveReload = url.indexOf('livereload') !== -1;

  return  !isBart && !isLiveReload && !response || response.status !== 200 || response.type !== 'basic';
}
