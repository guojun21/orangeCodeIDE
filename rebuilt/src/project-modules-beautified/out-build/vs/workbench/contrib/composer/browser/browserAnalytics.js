"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/browserAnalytics.js
// Offset: 32290591 (bundle byte offset)
// Size: 308 bytes
Ae({
    "out-build/vs/workbench/contrib/composer/browser/browserAnalytics.js"() {
        "use strict";
    }
});

function aOf(n, e) {
    let t = n.getLastUrl();
    const i = e.getView(n.browserId);
    if (i) {
        const r = i.getURL();
        if (r) {
            t = r;
        }
    }
    return t;
}

function Wcy(n) {
    return n.typeId === e0.TypeID;
}
