"use strict";

// Module: out-build/external/sentry/core/utils/exports.js
// Offset: 197205 (bundle byte offset)
// Size: 1173 bytes
Ae({
    "out-build/external/sentry/core/utils/exports.js"() {
        "use strict";
    }
});

function E_c(n, e = false) {
    return !e && (!n || !!n.startsWith("/") || !!n.match(/^[A-Z]:/) || !!n.startsWith(".") || !!n.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && n !== undefined && !n.includes("node_modules/");
}
