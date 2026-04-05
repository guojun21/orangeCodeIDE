"use strict";

// Module: out-build/external/statsig/client-core/SafeJs.js
// Offset: 26674902 (bundle byte offset)
// Size: 757 bytes
gSt = () => typeof window !== "undefined" ? window : null;
Upa = () => gSt()?.document ?? null;
Ubi = () => {
    if (Upa() !== null) {
        return false;
    }
    const n = typeof process !== "undefined" && process.versions != null && process.versions.node != null;
    return typeof EdgeRuntime == "string" || n;
};
$pa = (n, e) => {
    const t = gSt();
    if (typeof t?.addEventListener == "function") {
        t.addEventListener(n, e);
    }
};
VMg = (n, e) => {
    const t = Upa();
    if (typeof t?.addEventListener == "function") {
        t.addEventListener(n, e);
    }
};
KMg = () => {
    try {
        return gSt()?.location.href.split(/[?#]/)[0];
    } catch {
        return;
    }
};
YMg = () => {
    const n = gSt();
    if (n && "onpagehide" in n) {
        return "pagehide";
    } else {
        return "beforeunload";
    }
};
