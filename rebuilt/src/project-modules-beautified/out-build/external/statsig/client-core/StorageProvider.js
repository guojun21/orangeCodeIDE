"use strict";

// Module: out-build/external/statsig/client-core/StorageProvider.js
// Offset: 26677784 (bundle byte offset)
// Size: 1043 bytes
eie();
fSt();
Nhn = {};
Wpa = {
  isReady: () => true,
  isReadyResolver: () => null,
  getProviderName: () => "InMemory",
  getItem: n => Nhn[n] ? Nhn[n] : null,
  setItem: (n, e) => {
    Nhn[n] = e;
  },
  removeItem: n => {
    delete Nhn[n];
  },
  getAllKeys: () => Object.keys(Nhn)
};
$tu = null;
try {
  const n = gSt();
  if (n && n.localStorage && typeof n.localStorage.getItem == "function") {
    $tu = {
      isReady: () => true,
      isReadyResolver: () => null,
      getProviderName: () => "LocalStorage",
      getItem: e => n.localStorage.getItem(e),
      setItem: (e, t) => n.localStorage.setItem(e, t),
      removeItem: e => n.localStorage.removeItem(e),
      getAllKeys: () => Object.keys(n.localStorage)
    };
  }
} catch {
  CI.warn("Failed to setup localStorageProvider.");
}
Qpa = $tu ?? Wpa;
hEe = Qpa;
j3 = {
  isReady: () => hEe.isReady(),
  isReadyResolver: () => hEe.isReadyResolver(),
  getProviderName: () => hEe.getProviderName(),
  getItem: n => i2g(() => hEe.getItem(n)),
  setItem: (n, e) => i2g(() => hEe.setItem(n, e)),
  removeItem: n => hEe.removeItem(n),
  getAllKeys: () => hEe.getAllKeys(),
  _setProvider: n => {
    Qpa = n;
    hEe = n;
  },
  _setDisabled: n => {
    if (n) {
      hEe = Wpa;
    } else {
      hEe = Qpa;
    }
  }
};
