"use strict";

// Module: out-build/external/sentry/core/integrations/moduleMetadata.js
// Offset: 114563 (bundle byte offset)
// Size: 748 bytes
sW();
_Zd();
lde();
ONo = () => ({
    name: "ModuleMetadata",
    setup(n) {
        n.on("beforeEnvelope", e => {
            bBe(e, (t, i) => {
                if (i === "event") {
                    const r = Array.isArray(t) ? t[1] : undefined;
                    if (r) {
                        wZd(r);
                        t[1] = r;
                    }
                }
            });
        });
        n.on("applyFrameMetadata", e => {
            if (e.type) {
                return;
            }
            const t = n.getOptions().stackParser;
            yZd(t, e);
        });
    }
});
