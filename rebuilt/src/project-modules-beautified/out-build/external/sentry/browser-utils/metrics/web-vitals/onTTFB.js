"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/onTTFB.js
// Offset: 210111 (bundle byte offset)
// Size: 1613 bytes
AY();
S2n();
pFt();
mMo();
k2n();
bMo();
Hth = [800, 1800];
wMo = n => {
  if (zC.document?.prerendering) {
    x2n(() => wMo(n));
  } else if (zC.document?.readyState !== "complete") {
    addEventListener("load", () => wMo(n), true);
  } else {
    setTimeout(n);
  }
};
Jth = (n, e = {}) => {
  const t = gFt("TTFB");
  const i = hFt(n, t, Hth, e.reportAllChanges);
  wMo(() => {
    const r = mFt();
    if (r) {
      t.value = Math.max(r.responseStart - Wpt(), 0);
      t.entries = [r];
      i(true);
    }
  });
};
