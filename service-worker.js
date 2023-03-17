var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/bootstrap.min.css',

        './assets/js/bootstrap.min.js',

        './assets/js/jquery.min.js',

        './assets/js/popper.min.js',
        './assets/images/16.png',
        './assets/images/',
        './assets/images/20.png',
        './assets/images/29.png',
        './assets/images/32.png',
        './assets/images/40.png',
        './assets/images/48.png',
        './assets/images/50.png',
        './assets/images/55.png',
        './assets/images/57.png',
        './assets/images/58.png',
        './assets/images/60.png',
        './assets/images/64.png',
        './assets/images/66.png',
        './assets/images/72.png',
        './assets/images/76.png',
        './assets/images/80.png',
        './assets/images/87.png',
        './assets/images/88.png',
        './assets/images/92.png',
        './assets/images/100.png',
        './assets/images/102.png',
        './assets/images/114.png',
        './assets/images/128.png',
        './assets/images/144.png',
        './assets/images/152.png',
        './assets/images/167.png',
        './assets/images/172.png',
        './assets/images/180.png',
        './assets/images/196.png',
        './assets/images/216.png',
        './assets/images/256.png',
        './assets/images/512.png',
        './assets/images/1024.png',
        './assets/images/120.png',
        './assets/js/jquery.min.js',
        './assets/js/browser.min.js',
        './assets/js/breakpoints.min.js',
        './ssets/js/util.js',
        './assets/js/main.js',
      
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});