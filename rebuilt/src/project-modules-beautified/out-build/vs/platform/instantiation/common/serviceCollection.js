"use strict";

// Module: out-build/vs/platform/instantiation/common/serviceCollection.js
// Offset: 857192 (bundle byte offset)
// Size: 322 bytes
EA = class {
    constructor(...n) {
        this._entries = new Map();
        for (const [e, t] of n) {
            this.set(e, t);
        }
    }
    set(n, e) {
        const t = this._entries.get(n);
        this._entries.set(n, e);
        return t;
    }
    has(n) {
        return this._entries.has(n);
    }
    get(n) {
        return this._entries.get(n);
    }
};
