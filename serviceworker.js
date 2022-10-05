const cacheName = 'cache-students';

// When the browser reads this for the 1st time, it caches all the files mentioned in the list //

self.addEventListener('install', function(event) {
 event.waitUntil(
    caches.open(cacheName).then(function(cache) {
        return cache.addAll(['/students-example/', '/students-example/index.html', '/students-example/morten.png', '/students-example/nina.png', '/students-example/olivoa.png']);
        })
    );
});

// If the user requests a ressource (file, HTMl, image, JavaScript, etc...) then look for it online. If NOT available online, get the file from the cache
self.addEventListener('fetch', function(event) {
 event.respondWith(
    fetch(event.request).catch(() =>
        caches.open(cacheName).then(cache => cache.match(event.request))
        )
    );
});