"use strict";

// Module: out-build/external/sentry/core/utils/ipAddress.js
// Offset: 105648 (bundle byte offset)
// Size: 271 bytes
Ae({
    "out-build/external/sentry/core/utils/ipAddress.js"() {
        "use strict";
    }
});

function fwc(n, e, t = [e], i = "npm") {
    const r = n._metadata || {};
    r.sdk ||= {
        name: `sentry.javascript.${e}`,
        packages: t.map(s => ({
            name: `${i}:@sentry/${s}`,
            version: cSe
        })),
        version: cSe
    };
    n._metadata = r;
}
