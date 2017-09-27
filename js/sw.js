/**
 * Created by Jose Kim on 9/27/2017.
 */

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '../css/app.css',
    '../js/app.js'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            }, function (err) {
                console.log('Failed to install coz', err)
            })
    );
});
