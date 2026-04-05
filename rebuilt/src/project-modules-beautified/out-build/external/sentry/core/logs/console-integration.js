"use strict";

// Module: out-build/external/sentry/core/logs/console-integration.js
// Offset: 153885 (bundle byte offset)
// Size: 1140 bytes
aT();
ZT();
UNo();
sW();
y6();
US();
i2n();
VXd();
KXd = "ConsoleLogs";
zwc = {
    [w1]: "auto.log.console"
};
YXd = (n = {}) => {
    const e = n.levels || F2t;
    return {
        name: KXd,
        setup(t) {
            const {
                enableLogs: i,
                normalizeDepth: r = 3,
                normalizeMaxBreadth: s = 1000
            } = t.getOptions();
            if (!i) {
                if (Lg) {
                    Jo.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
                }
                return;
            }
            sFt(({
                args: o,
                level: a
            }) => {
                if (sm() !== t || !e.includes(a)) {
                    return;
                }
                const l = o[0];
                const u = o.slice(1);
                if (a === "assert") {
                    if (!l) {
                        const g = u.length > 0 ? `Assertion failed: ${jwc(u, r, s)}` : "Assertion failed";
                        X2t({
                            level: "error",
                            message: g,
                            attributes: zwc
                        });
                    }
                    return;
                }
                const d = a === "log";
                const m = o.length > 1 && typeof o[0] == "string" && !OYv(o[0]);
                const p = {
                    ...zwc,
                    ...(m ? UYv(l, u) : {})
                };
                X2t({
                    level: d ? "info" : a,
                    message: jwc(o, r, s),
                    severityNumber: d ? 10 : undefined,
                    attributes: p
                });
            });
        }
    };
};
eMo = YXd;
