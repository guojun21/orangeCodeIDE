"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/getNavigationEntry.js
// Offset: 202099 (bundle byte offset)
// Size: 268 bytes
AY();
mFt = (n = true) => {
    const e = zC.performance?.getEntriesByType?.("navigation")[0];
    if (!n || e && e.responseStart > 0 && e.responseStart < performance.now()) {
        return e;
    }
};
