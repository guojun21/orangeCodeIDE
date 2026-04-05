"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/getCLS.js
// Offset: 205610 (bundle byte offset)
// Size: 596 bytes
AY();
S2n();
k2n();
T_c();
JXv();
fFt();
I_c();
GXv();
Tth = [0.1, 0.25];
Ith = (n, e = {}) => {
  xth(gMo(() => {
    const t = gFt("CLS", 0);
    let i;
    const r = x_c(e, _th);
    const s = a => {
      for (const l of a) {
        r._processEntry(l);
      }
      if (r._sessionValue > t.value) {
        t.value = r._sessionValue;
        t.entries = r._sessionEntries;
        i();
      }
    };
    const o = Qpt("layout-shift", s);
    if (o) {
      i = hFt(n, t, Tth, e.reportAllChanges);
      zC.document?.addEventListener("visibilitychange", () => {
        if (zC.document?.visibilityState === "hidden") {
          s(o.takeRecords());
          i(true);
        }
      });
      zC?.setTimeout?.(i);
    }
  }));
};
