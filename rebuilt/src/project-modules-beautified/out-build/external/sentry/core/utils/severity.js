"use strict";

// Module: out-build/external/sentry/core/utils/severity.js
// Offset: 118706 (bundle byte offset)
// Size: 497 bytes
Ae({
    "out-build/external/sentry/core/utils/severity.js"() {
        "use strict";
    }
});

function WVv(n, e, t) {
    const i = {
        level: oFt(e),
        extra: {
            arguments: n
        }
    };
    AH(r => {
        r.addEventProcessor(a => {
            a.logger = "console";
            nW(a, {
                handled: t,
                type: "auto.core.capture_console"
            });
            return a;
        });
        if (e === "assert") {
            if (!n[0]) {
                const a = `Assertion failed: ${Xje(n.slice(1), " ") || "console.assert"}`;
                r.setExtra("arguments", n.slice(1));
                Bpt(a, i);
            }
            return;
        }
        const s = n.find(a => a instanceof Error);
        if (s) {
            Sw(s, i);
            return;
        }
        const o = Xje(n, " ");
        Bpt(o, i);
    });
}
