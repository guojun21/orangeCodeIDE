"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/onHidden.js
// Offset: 207995 (bundle byte offset)
// Size: 294 bytes
AY();
yMo = n => {
  const e = t => {
    if (t.type === "pagehide" || zC.document?.visibilityState === "hidden") {
      n(t);
    }
  };
  if (zC.document) {
    addEventListener("visibilitychange", e, true);
    addEventListener("pagehide", e, true);
  }
};
