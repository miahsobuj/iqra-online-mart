/* Iqra Online Mart — Service Worker */
const CACHE_NAME = "iqra-mart-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./product.html",
  "./checkout.html",
  "./account.html",
  "./blog.html",
  "./contact.html",
  "./admin.html",
  "./admin-login.html",
  "./styles.css",
  "./script.js",
  "./manifest.json"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : null)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
