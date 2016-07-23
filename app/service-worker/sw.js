// urlsToCache will be modified by a post build script
var urlsToCache = [];

this.addEventListener('fetch', function (event) {
  console.log('hi hi hi:', event, urlsToCache);
});
