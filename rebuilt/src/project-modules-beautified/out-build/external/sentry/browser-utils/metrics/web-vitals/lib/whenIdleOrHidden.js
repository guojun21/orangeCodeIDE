"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/whenIdleOrHidden.js
// Offset: 208289 (bundle byte offset)
// Size: 262 bytes
AY();
N_c();
I_c();
M_c = n => {
    const e = zC.requestIdleCallback || zC.setTimeout;
    if (zC.document?.visibilityState === "hidden") {
        n();
    } else {
        n = gMo(n);
        e(n);
        yMo(n);
    }
};
