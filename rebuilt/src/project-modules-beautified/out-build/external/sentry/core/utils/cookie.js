"use strict";

// Module: out-build/external/sentry/core/utils/cookie.js
// Offset: 115311 (bundle byte offset)
// Size: 1691 bytes
Ae({
    "out-build/external/sentry/core/utils/cookie.js"() {
        "use strict";
    }
});

function FVv(n) {
    return Swc.map(r => {
        const s = n[r];
        const o = Array.isArray(s) ? s.join(";") : s;
        if (r === "Forwarded") {
            return OVv(o);
        } else {
            return o?.split(",").map(a => a.trim());
        }
    }).reduce((r, s) => s ? r.concat(s) : r, []).find(r => r !== null && UVv(r)) || null;
}

function OVv(n) {
    if (!n) {
        return null;
    }
    for (const e of n.split(";")) {
        if (e.startsWith("for=")) {
            return e.slice(4);
        }
    }
    return null;
}
