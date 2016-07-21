if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);

    navigator.serviceWorker.addEventListener('controllerchange', function() {
      window.location.reload();
    });
  })
  .catch(function(err) {
    // registration failed
    console.log('ServiceWorker registration failed: ', err);
  });
} else {
  console.log('ServiceWorker not supported');
}
