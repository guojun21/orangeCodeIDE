"use strict";

// Module: out-build/external/sentry/core/integrations/zoderrors.js
// Offset: 130575 (bundle byte offset)
// Size: 476 bytes
sW();
h9();
mBe();
XZd = 10;
eXd = "ZodErrors";
tXd = (n = {}) => {
    const e = n.limit ?? XZd;
    return {
        name: eXd,
        processEvent(t, i) {
            return pKv(e, n.saveZodIssuesAsAttachment, t, i);
        }
    };
};
WNo = tXd;
