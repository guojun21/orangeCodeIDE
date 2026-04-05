"use strict";

// Module: out-build/vs/editor/common/tokens/contiguousMultilineTokensBuilder.js
// Offset: 1201849 (bundle byte offset)
// Size: 1313 bytes
Ql();
caA();
MOt = class {
    static deserialize(n) {
        let e = 0;
        const t = CY(n, e);
        e += 4;
        const i = [];
        for (let r = 0; r < t; r++) {
            e = lxc.deserialize(n, e, i);
        }
        return i;
    }
    constructor() {
        this._tokens = [];
    }
    add(n, e) {
        if (this._tokens.length > 0) {
            const t = this._tokens[this._tokens.length - 1];
            if (t.endLineNumber + 1 === n) {
                t.appendLineTokens(e);
                return;
            }
        }
        this._tokens.push(new lxc(n, [e]));
    }
    finalize() {
        return this._tokens;
    }
    serialize() {
        const n = this._serializeSize();
        const e = new Uint8Array(n);
        this._serialize(e);
        return e;
    }
    _serializeSize() {
        let n = 0;
        n += 4;
        for (let e = 0; e < this._tokens.length; e++) {
            n += this._tokens[e].serializeSize();
        }
        return n;
    }
    _serialize(n) {
        let e = 0;
        SY(n, this._tokens.length, e);
        e += 4;
        for (let t = 0; t < this._tokens.length; t++) {
            e = this._tokens[t].serialize(n, e);
        }
    }
};
