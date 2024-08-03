'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c9a2b759ed2ec32e8dbee4454fe4eb1b",
"assets/AssetManifest.bin.json": "0d73c3dea697955c2b92367a02b1e7b8",
"assets/AssetManifest.json": "a35e1e34822de4e4fb483b83434d2c39",
"assets/assets/1.png": "7271fdb09230ac7c1fbb7e17e1e2398e",
"assets/assets/10.png": "9007dbb8aba676baad4518f057f43301",
"assets/assets/11.png": "ca8ab74662e1da5a7c6817ec0897f9a5",
"assets/assets/12.png": "a5ebf92c776c4875030a5b7f1f3e98e1",
"assets/assets/13.png": "d33b9ec3f6379bf1de86388d39f4ee0c",
"assets/assets/14.png": "270f944558ec6fb1e0e7e33a2ad28693",
"assets/assets/2.png": "ba1b865455217b429703a4adbdb1c9fe",
"assets/assets/3.png": "87e715888428327e77b7f81d6720ba1b",
"assets/assets/4.png": "f1ab443595aa70541beca2a423dbcd37",
"assets/assets/5.png": "0b26182b44009560f8a96c299258ab59",
"assets/assets/6.png": "128907c81b6c7bc4ef606717f3b0174e",
"assets/assets/7.png": "a604cdf9a9fb0a14e7ea005139f6e6ed",
"assets/assets/8.png": "62ecd7805c0494093d67232bb6acb80b",
"assets/assets/9.png": "7f92cacfede120e5788aea79215b159e",
"assets/assets/app.json": "ada5cbbe628a7911c85048a2c162dd01",
"assets/assets/AssetManifest.bin": "3f2835e5ac24f4d1f16d598846110b59",
"assets/assets/AssetManifest.bin.json": "8b4b8ce11509b2f4381f982bda17250e",
"assets/assets/AssetManifest.json": "860f008904e46170795e8d6e27f0d59a",
"assets/assets/bird.json": "ada5cbbe628a7911c85048a2c162dd01",
"assets/assets/close.png": "33272cdd9c5292cbe8dc68fdf39c0819",
"assets/assets/code.png": "890cff6858c025338affecceb3c4d0e9",
"assets/assets/dart.png": "c39bbd28d9f329be1d9db74733b8da88",
"assets/assets/dart.svg": "522e3ffb68f06e1226efa2d9a3cb78d7",
"assets/assets/email.png": "6df3e380eefe62a6da00cd8e683ae33f",
"assets/assets/figma.png": "477504263ec168b17e3b914078ce47b8",
"assets/assets/firebase.png": "d8b7f0cb2618bedb9e64bcb1cb101f48",
"assets/assets/firebase.svg": "4f73967451955b6c90bbd6ab086e7ada",
"assets/assets/flutter.png": "8e347be7c267fe58660112de28c8bafa",
"assets/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/github.png": "28875f1528d467befe18437f83926855",
"assets/assets/google-calendar.png": "c1378bb190ea0e64c9b76ed47c0c956a",
"assets/assets/hive.png": "d97327e735dc2bd73a7debf5eb81c008",
"assets/assets/hive.svg": "f75ae51c80b0de66fcb91ce441af3869",
"assets/assets/jira.png": "273c4ef086b36292c1cd9a1edd8aba5c",
"assets/assets/linkedin%2520(1).png": "53de2ac008d71b38b8912aa73073cfc4",
"assets/assets/NOTICES": "3af8f60a10de95c2cdce2d25fe84c6fd",
"assets/assets/notion.png": "9f79a2714ea125f209fd9e460ba6493d",
"assets/assets/restAPI.png": "9bc0207cb39142f234e022b1be5c6e97",
"assets/assets/splash.json": "7eed0f68676c339fe175a5c357c17682",
"assets/assets/sql.png": "7df319c1d22e85b0f0ad89faa94d8073",
"assets/assets/vscode&android.png": "0733937326ac0b1d9faee1f3adee02be",
"assets/assets/Xd.png": "5cc219ec74496860cee34959aa1d52f5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0850ba61708be6c79d056890a1a20f0c",
"assets/NOTICES": "3af8f60a10de95c2cdce2d25fe84c6fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ac2ac948e76f346fe3d2d1020ac76636",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1f3354a5ede8d8272ff33b73eeb49d3f",
"/": "1f3354a5ede8d8272ff33b73eeb49d3f",
"main.dart.js": "a69ee2664b96dffca1d0b9f75b9d164a",
"manifest.json": "fe9bfaaa90e28fe71dbc1e63399c30d2",
"version.json": "a92331627b7259d96bbc450fad4d5f4f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
