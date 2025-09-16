// Service Worker for aggressive caching and performance optimization
const CACHE_NAME = 'gixi-ai-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/assets/logo.webp',
  '/favicon.ico',
  '/manifest.json',
  '/_next/static/css/',
  '/_next/static/js/',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Precaching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== STATIC_CACHE && 
                     cacheName !== DYNAMIC_CACHE;
            })
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (url.origin !== location.origin) return;

  // Cache strategy: Stale-while-revalidate for assets
  if (request.url.includes('/_next/static/') || 
      request.url.includes('/assets/') ||
      request.url.endsWith('.webp') ||
      request.url.endsWith('.svg') ||
      request.url.endsWith('.png') ||
      request.url.endsWith('.jpg')) {
    
    event.respondWith(
      caches.open(STATIC_CACHE)
        .then((cache) => {
          return cache.match(request)
            .then((response) => {
              const fetchPromise = fetch(request)
                .then((networkResponse) => {
                  cache.put(request, networkResponse.clone());
                  return networkResponse;
                });
              return response || fetchPromise;
            });
        })
    );
    return;
  }

  // Network first for HTML pages
  if (request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone and cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(request)
            .then((response) => {
              return response || caches.match('/');
            });
        })
    );
    return;
  }

  // Cache first for API requests
  if (request.url.includes('/api/')) {
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            // Serve from cache and update in background
            fetch(request)
              .then((networkResponse) => {
                if (networkResponse.status === 200) {
                  caches.open(DYNAMIC_CACHE)
                    .then((cache) => cache.put(request, networkResponse.clone()));
                }
              });
            return response;
          }
          
          // Network fallback
          return fetch(request)
            .then((networkResponse) => {
              if (networkResponse.status === 200) {
                const responseClone = networkResponse.clone();
                caches.open(DYNAMIC_CACHE)
                  .then((cache) => cache.put(request, responseClone));
              }
              return networkResponse;
            });
        })
    );
    return;
  }
});

// Background sync for offline functionality
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      console.log('Background sync triggered')
    );
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/assets/logo.webp',
      badge: '/assets/logo.webp',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey || 1
      },
      actions: [
        {
          action: 'explore', 
          title: 'Explore',
          icon: '/assets/icons/checkmark.png'
        },
        {
          action: 'close', 
          title: 'Close',
          icon: '/assets/icons/xmark.png'
        },
      ]
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
