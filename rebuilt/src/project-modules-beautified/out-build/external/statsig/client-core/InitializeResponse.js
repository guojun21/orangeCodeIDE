"use strict";

// Module: out-build/external/statsig/client-core/InitializeResponse.js
// Offset: 26693344 (bundle byte offset)
// Size: 265 bytes
Ae({
    "out-build/external/statsig/client-core/InitializeResponse.js"() {
        "use strict";
    }
});

function hMA(n, e, t) {
    let i = `${n}|${e}`;
    if (!t) {
        return i;
    }
    for (const r of Object.keys(t)) {
        if (x2g.has(r)) {
            return;
        }
        if (E2g.has(r)) {
            i += `|${r}=true`;
        } else {
            i += `|${r}=${t[r]}`;
        }
    }
    return i;
}
