"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatCollections.js
// Offset: 32525703 (bundle byte offset)
// Size: 621 bytes
rt();
wCi = class extends at {
    get inUse() {
        return this._inUse;
    }
    constructor(n) {
        super();
        this._itemFactory = n;
        this.pool = [];
        this._inUse = new Set();
    }
    get() {
        if (this.pool.length > 0) {
            const e = this.pool.pop();
            this._inUse.add(e);
            return e;
        }
        const n = this._register(this._itemFactory());
        this._inUse.add(n);
        return n;
    }
    release(n) {
        this._inUse.delete(n);
        this.pool.push(n);
    }
};
