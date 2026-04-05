"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/web-vitals/lib/getVisibilityWatcher.js
// Offset: 204162 (bundle byte offset)
// Size: 794 bytes
AY();
pFt();
bFt = -1;
Cth = () => zC.document?.visibilityState === "hidden" && !zC.document?.prerendering ? 0 : Infinity;
E2n = n => {
    if (zC.document.visibilityState === "hidden" && bFt > -1) {
        bFt = n.type === "visibilitychange" ? n.timeStamp : 0;
        kth();
    }
};
Sth = () => {
    addEventListener("visibilitychange", E2n, true);
    addEventListener("prerenderingchange", E2n, true);
};
kth = () => {
    removeEventListener("visibilitychange", E2n, true);
    removeEventListener("prerenderingchange", E2n, true);
};
fMo = () => {
    if (zC.document && bFt < 0) {
        const n = Wpt();
        bFt = (zC.document.prerendering ? undefined : globalThis.performance.getEntriesByType("visibility-state").filter(t => t.name === "hidden" && t.startTime > n)[0]?.startTime) ?? Cth();
        Sth();
    }
    return {
        get firstHiddenTime() {
            return bFt;
        }
    };
};
