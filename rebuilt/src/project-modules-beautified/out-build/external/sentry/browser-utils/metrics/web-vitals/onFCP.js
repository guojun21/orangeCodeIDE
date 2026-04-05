"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/onFCP.js
// Offset: 205166 (bundle byte offset)
// Size: 444 bytes
S2n();
pFt();
D_c();
k2n();
fFt();
bMo();
Eth = [1800, 3000];
xth = (n, e = {}) => {
  x2n(() => {
    const t = fMo();
    const i = gFt("FCP");
    let r;
    const o = Qpt("paint", a => {
      for (const l of a) {
        if (l.name === "first-contentful-paint") {
          o.disconnect();
          if (l.startTime < t.firstHiddenTime) {
            i.value = Math.max(l.startTime - Wpt(), 0);
            i.entries.push(l);
            r(true);
          }
        }
      }
    });
    if (o) {
      r = hFt(n, i, Eth, e.reportAllChanges);
    }
  });
};
