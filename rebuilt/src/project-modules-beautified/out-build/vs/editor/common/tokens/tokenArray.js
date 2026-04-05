"use strict";

// Module: out-build/vs/editor/common/tokens/tokenArray.js
// Offset: 785256 (bundle byte offset)
// Size: 1356 bytes
$I();
LH();
C4n = class WGa {
    static fromLineTokens(e) {
        const t = [];
        for (let i = 0; i < e.getCount(); i++) {
            t.push(new c4o(e.getEndOffset(i) - e.getStartOffset(i), e.getMetadata(i)));
        }
        return WGa.create(t);
    }
    static create(e) {
        return new WGa(e);
    }
    constructor(e) {
        this._tokenInfo = e;
    }
    toLineTokens(e, t) {
        return OB.createFromTextAndMetadata(this.map((i, r) => ({
            text: i.substring(e),
            metadata: r.metadata
        })), t);
    }
    forEach(e) {
        let t = 0;
        for (const i of this._tokenInfo) {
            const r = new dm(t, t + i.length);
            e(r, i);
            t += i.length;
        }
    }
    map(e) {
        const t = [];
        let i = 0;
        for (const r of this._tokenInfo) {
            const s = new dm(i, i + r.length);
            t.push(e(s, r));
            i += r.length;
        }
        return t;
    }
    slice(e) {
        const t = [];
        let i = 0;
        for (const r of this._tokenInfo) {
            const s = i;
            const o = s + r.length;
            if (o > e.start) {
                if (s >= e.endExclusive) {
                    break;
                }
                const a = Math.max(0, e.start - s);
                const l = Math.max(0, o - e.endExclusive);
                t.push(new c4o(r.length - a - l, r.metadata));
            }
            i += r.length;
        }
        return WGa.create(t);
    }
};
c4o = class {
    constructor(n, e) {
        this.length = n;
        this.metadata = e;
    }
};
Slh = class {
    constructor() {
        this._tokens = [];
    }
    add(n, e) {
        this._tokens.push(new c4o(n, e));
    }
    build() {
        return C4n.create(this._tokens);
    }
};
