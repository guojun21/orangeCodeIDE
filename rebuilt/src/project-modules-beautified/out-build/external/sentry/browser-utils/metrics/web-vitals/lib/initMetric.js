"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/initMetric.js
// Offset: 202524 (bundle byte offset)
// Size: 460 bytes
AY();
HXv();
pFt();
mMo();
gFt = (n, e = -1) => {
  const t = mFt();
  let i = "navigate";
  if (t) {
    if (zC.document?.prerendering || Wpt() > 0) {
      i = "prerender";
    } else if (zC.document?.wasDiscarded) {
      i = "restore";
    } else if (t.type) {
      i = t.type.replace(/_/g, "-");
    }
  }
  return {
    name: n,
    value: e,
    rating: "good",
    delta: 0,
    entries: [],
    id: wth(),
    navigationType: i
  };
};
