"use strict";

// Module: out-build/vs/base/common/idGenerator.js
// Offset: 2039994 (bundle byte offset)
// Size: 2304 bytes
G3o = class {
    constructor(n) {
        this._prefix = n;
        this._lastId = 0;
    }
    nextId() {
        return this._prefix + ++this._lastId;
    }
};
w3t = new G3o("id#");
