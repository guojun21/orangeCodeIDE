"use strict";

// Module: out-build/vs/base/browser/cssValue.js
// Offset: 1955960 (bundle byte offset)
// Size: 189 bytes
zr();
sve = class {
    constructor() {
        this._parts = [];
    }
    push(...n) {
        this._parts.push(...n);
    }
    join(n = `
`) {
        return this._parts.join(n);
    }
};
