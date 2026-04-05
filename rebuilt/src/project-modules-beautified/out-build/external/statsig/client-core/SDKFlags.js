"use strict";

// Module: out-build/external/statsig/client-core/SDKFlags.js
// Offset: 26697599 (bundle byte offset)
// Size: 1142 bytes
rnu = {};
snu = {
    setFlags: (n, e) => {
        rnu[n] = e;
    },
    get: (n, e) => rnu[n]?.[e] ?? false
};
