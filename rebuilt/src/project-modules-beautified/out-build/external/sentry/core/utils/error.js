"use strict";

// Module: out-build/external/sentry/core/utils/error.js
// Offset: 192772 (bundle byte offset)
// Size: 1244 bytes
A_c = class extends Error {
    constructor(n, e = "warn") {
        super(n);
        this.message = n;
        this.logLevel = e;
    }
};
