"use strict";

// Module: out-build/external/sentry/core/integrations/third-party-errors-filter.js
// Offset: 131051 (bundle byte offset)
// Size: 1237 bytes
sW();
_Zd();
lde();
bpt();
QNo = n => ({
    name: "ThirdPartyErrorsFilter",
    setup(e) {
        e.on("beforeEnvelope", t => {
            bBe(t, (i, r) => {
                if (r === "event") {
                    const s = Array.isArray(i) ? i[1] : undefined;
                    if (s) {
                        wZd(s);
                        i[1] = s;
                    }
                }
            });
        });
        e.on("applyFrameMetadata", t => {
            if (t.type) {
                return;
            }
            const i = e.getOptions().stackParser;
            yZd(i, t);
        });
    },
    processEvent(e) {
        const t = fKv(e);
        if (t) {
            const i = n.behaviour === "drop-error-if-contains-third-party-frames" || n.behaviour === "apply-tag-if-contains-third-party-frames" ? "some" : "every";
            if (t[i](s => !s.some(o => n.filterKeys.includes(o)))) {
                if (n.behaviour === "drop-error-if-contains-third-party-frames" || n.behaviour === "drop-error-if-exclusively-contains-third-party-frames") {
                    return null;
                }
                e.tags = {
                    ...e.tags,
                    third_party_code: true
                };
            }
        }
        return e;
    }
});
Iwc = "_sentryBundlerPluginAppKey:";
