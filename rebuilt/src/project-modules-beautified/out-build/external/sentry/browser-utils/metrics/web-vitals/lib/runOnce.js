"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/runOnce.js
// Offset: 203992 (bundle byte offset)
// Size: 170 bytes
gMo = n => {
    let e = false;
    return () => {
        if (!e) {
            n();
            e = true;
        }
    };
};
