/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-afac4cd2'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "showcase-db.json",
    "revision": "2f2be45422619257e932ad07a3ca2f4a"
  }, {
    "url": "registerSW.js",
    "revision": "89efb1813cd6f697bf6e0eef0dba2cb8"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "b4e4f0c87dde141e9d11b37ce8a91fc7"
  }, {
    "url": "pwa-512x512.png",
    "revision": "137fd8a80dbdc7fea5ddf9261a9f447d"
  }, {
    "url": "pwa-192x192.png",
    "revision": "72baadc5fceda433facca881a1c07e3b"
  }, {
    "url": "iran-insurance-logo.png",
    "revision": "cfda9124ce5b7442b6fbc357b58d5379"
  }, {
    "url": "index.html",
    "revision": "4d0886cb0d2666363a297eae547095b1"
  }, {
    "url": "icon.svg",
    "revision": "e7c4f65ac946459a0331893d1f02e6e3"
  }, {
    "url": "favicon.ico",
    "revision": "0714ed54ffdcfd451c76bdaf82312a0d"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "dc9b27ca4f4a11f1faab056318f56c1a"
  }, {
    "url": "404.html",
    "revision": "4d0886cb0d2666363a297eae547095b1"
  }, {
    "url": "assets/vendor-xlsx-CO49p58s.js",
    "revision": null
  }, {
    "url": "assets/vendor-react-ebShZHyu.js",
    "revision": null
  }, {
    "url": "assets/vendor-icons-D9784UaZ.js",
    "revision": null
  }, {
    "url": "assets/rolldown-runtime-4tVxZq34.js",
    "revision": null
  }, {
    "url": "assets/index-CRt7R4HD.css",
    "revision": null
  }, {
    "url": "assets/index-BP4BZ6ko.js",
    "revision": null
  }, {
    "url": "assets/SvgCharts-C_FlV2Xg.js",
    "revision": null
  }, {
    "url": "assets/SettingsPage-DDQI-yiw.js",
    "revision": null
  }, {
    "url": "assets/ReportsPage-CAZTIqhJ.js",
    "revision": null
  }, {
    "url": "assets/RenewalsPage-BjWt8VRj.js",
    "revision": null
  }, {
    "url": "assets/RemindersPage-DDEjX4mA.js",
    "revision": null
  }, {
    "url": "assets/PolicyWizardModal-CqGsGaQZ.js",
    "revision": null
  }, {
    "url": "assets/PoliciesPage-C7Sl7skG.js",
    "revision": null
  }, {
    "url": "assets/NotificationsPage-CDXuiFDV.js",
    "revision": null
  }, {
    "url": "assets/InstallmentsPage-D7QNu-kf.js",
    "revision": null
  }, {
    "url": "assets/DashboardPage-beI_tiOa.js",
    "revision": null
  }, {
    "url": "assets/CustomersPage-Dr8dyGsa.js",
    "revision": null
  }, {
    "url": "assets/BulkImportPage-0ieNp4Ac.js",
    "revision": null
  }, {
    "url": "apple-touch-icon.png",
    "revision": "dc9b27ca4f4a11f1faab056318f56c1a"
  }, {
    "url": "favicon.ico",
    "revision": "0714ed54ffdcfd451c76bdaf82312a0d"
  }, {
    "url": "icon.svg",
    "revision": "e7c4f65ac946459a0331893d1f02e6e3"
  }, {
    "url": "iran-insurance-logo.png",
    "revision": "cfda9124ce5b7442b6fbc357b58d5379"
  }, {
    "url": "pwa-192x192.png",
    "revision": "72baadc5fceda433facca881a1c07e3b"
  }, {
    "url": "pwa-512x512.png",
    "revision": "137fd8a80dbdc7fea5ddf9261a9f447d"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "b4e4f0c87dde141e9d11b37ce8a91fc7"
  }, {
    "url": "showcase-db.json",
    "revision": "2f2be45422619257e932ad07a3ca2f4a"
  }, {
    "url": "manifest.webmanifest",
    "revision": "6b338a79b496d97b2984cd591ab421bf"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    denylist: [/^\/api\//]
  }));
  workbox.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "gstatic-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
