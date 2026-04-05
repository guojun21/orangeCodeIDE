"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/whenActivated.js
// Offset: 204956 (bundle byte offset)
// Size: 210 bytes
AY();
x2n = n => {
    if (zC.document?.prerendering) {
        addEventListener("prerenderingchange", () => n(), true);
    } else {
        n();
    }
};
