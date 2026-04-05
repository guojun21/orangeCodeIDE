"use strict";

// Module: out-build/external/statsig/client-core/SDKType.js
// Offset: 26690554 (bundle byte offset)
// Size: 1007 bytes
Xtu = {};
Gbi = {
  _get: n => (Xtu[n] ?? "js-mono") + (iga ?? ""),
  _setClientType(n, e) {
    Xtu[n] = e;
  },
  _setBindingType(n) {
    if (!iga || iga === "-react") {
      iga = "-" + n;
    }
  }
};
