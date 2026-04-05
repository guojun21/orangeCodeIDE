"use strict";

// Module: out-build/external/sentry/core/integrations/functiontostring.js
// Offset: 109253 (bundle byte offset)
// Size: 2300 bytes
aT();
sW();
Wj();
oZd = "FunctionToString";
ywc = new WeakMap();
aZd = () => ({
    name: oZd,
    setupOnce() {
        sZd = Function.prototype.toString;
        try {
            Function.prototype.toString = function(...n) {
                const e = q2t(this);
                const t = ywc.has(sm()) && e !== undefined ? e : this;
                return sZd.apply(t, n);
            };
        } catch {}
    },
    setup(n) {
        ywc.set(n, true);
    }
});
Npt = aZd;
