// urlsToCache will be modified by a post build script
var urlsToCache = ['/Barticle/assets/barticle-0bc42cf76cc754eb84ad8f7149403272.css', '/Barticle/assets/barticle-c7d3e99b4e27426156b5a2be8042e934.js', '/Barticle/assets/vendor-5ea4b43c5bdd2261bcc3f6937cce2ecc.css', '/Barticle/assets/vendor-8ef3d164c76f6bc2c2df6243f5768c59.js', '/Barticle/crossdomain.xml', '/Barticle/index.html', '/Barticle'];

this.addEventListener('fetch', function (event) {
  console.log('hi hi hi:', event, urlsToCache);
});
