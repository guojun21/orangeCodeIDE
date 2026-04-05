"use strict";

// Module: out-build/external/statsig/client-core/StableID.js
// Offset: 26686336 (bundle byte offset)
// Size: 784 bytes
Fpa();
eie();
fSt();
Btt();
ztu();
Fhn = {};
ega = {};
Ktu = {};
TNe = {
  cookiesEnabled: false,
  randomID: Math.random().toString(36),
  get: n => {
    if (Ktu[n]) {
      return null;
    }
    if (Fhn[n] != null) {
      return Fhn[n];
    }
    let e = null;
    e = iMA(n);
    if (e != null) {
      Fhn[n] = e;
      Vtu(e, n);
      return e;
    } else {
      e = nMA(n);
      if (e == null) {
        e = Xpa();
      }
      Vtu(e, n);
      g2g(e, n);
      Fhn[n] = e;
      return e;
    }
  },
  setOverride: (n, e) => {
    Fhn[e] = n;
    Vtu(n, e);
    g2g(n, e);
  },
  _setCookiesEnabled: (n, e) => {
    ega[n] = e;
  },
  _setDisabled: (n, e) => {
    Ktu[n] = e;
  }
};
