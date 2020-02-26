// declaring the name of cash
const calcpwa = 'calculator-pwa-v1';
const assets = [
    "/",
    "/css/style.css",
    "/css/normalize.css",
    "js/main.js"
]

// attach eventListener to serviceworker itself
// this one should cache the assets
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(calcpwa).then(cache => {
            cache.addAll(assets)
        })
    )
} )

// this one should fetch the assets
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
