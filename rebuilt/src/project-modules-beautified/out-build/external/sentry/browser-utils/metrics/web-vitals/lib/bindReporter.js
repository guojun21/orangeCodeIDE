"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/bindReporter.js
// Offset: 201600 (bundle byte offset)
// Size: 314 bytes
yth = (n, e) => n > e[1] ? "poor" : n > e[0] ? "needs-improvement" : "good";
hFt = (n, e, t, i) => {
  let r;
  let s;
  return o => {
    if (e.value >= 0 && (o || i)) {
      s = e.value - (r ?? 0);
      if (s || r === undefined) {
        r = e.value;
        e.delta = s;
        e.rating = yth(e.value, t);
        n(e);
      }
    }
  };
};
