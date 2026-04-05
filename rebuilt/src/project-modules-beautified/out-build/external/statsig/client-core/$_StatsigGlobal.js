"use strict";

// Module: out-build/external/statsig/client-core/$_StatsigGlobal.js
// Offset: 26671069 (bundle byte offset)
// Size: 987 bytes
eie();
xtt = () => {
  try {
    if (typeof __STATSIG__ !== "undefined") {
      return __STATSIG__;
    } else {
      return Bhn;
    }
  } catch {
    return Bhn;
  }
};
Etu = n => xtt()[n];
JMg = n => {
  const e = xtt();
  if (n) {
    return e.instances && e.instances[n];
  } else {
    if (e.instances && Object.keys(e.instances).length > 1) {
      CI.warn("Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.");
    }
    return e.firstInstance;
  }
};
pSt = "__STATSIG__";
xtu = typeof window !== "undefined" ? window : {};
Ttu = typeof global !== "undefined" ? global : {};
Itu = typeof globalThis !== "undefined" ? globalThis : {};
Bhn = xtu[pSt] ?? Ttu[pSt] ?? Itu[pSt] ?? {
  instance: JMg
};
xtu[pSt] = Bhn;
Ttu[pSt] = Bhn;
Itu[pSt] = Bhn;
