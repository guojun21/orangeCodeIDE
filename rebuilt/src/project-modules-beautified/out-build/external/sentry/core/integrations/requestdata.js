"use strict";

// Module: out-build/external/sentry/core/integrations/requestdata.js
// Offset: 117803 (bundle byte offset)
// Size: 684 bytes
sW();
MVv();
$Vv();
CZd = {
    cookies: true,
    data: true,
    headers: true,
    query_string: true,
    url: true
};
SZd = "RequestData";
kZd = (n = {}) => {
    const e = {
        ...CZd,
        ...n.include
    };
    return {
        name: SZd,
        processEvent(t, i, r) {
            const {
                sdkProcessingMetadata: s = {}
            } = t;
            const {
                normalizedRequest: o,
                ipAddress: a
            } = s;
            const l = {
                ...e,
                ip: e.ip ?? r.getOptions().sendDefaultPii
            };
            if (o) {
                qVv(t, o, {
                    ipAddress: a
                }, l);
            }
            return t;
        }
    };
};
EZd = kZd;
