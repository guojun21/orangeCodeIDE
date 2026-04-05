"use strict";

// Module: out-build/external/sentry/core/integrations/linkederrors.js
// Offset: 113563 (bundle byte offset)
// Size: 896 bytes
sW();
pZd();
owc();
gZd = "cause";
fZd = 5;
bZd = "LinkedErrors";
vZd = (n = {}) => {
    const e = n.limit || fZd;
    const t = n.key || gZd;
    return {
        name: bZd,
        preprocessEvent(i, r, s) {
            const o = s.getOptions();
            FNo(swc, o.stackParser, t, e, i, r);
        }
    };
};
AZd = vZd;
