"use strict";

// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/parser.js
// Offset: 1086130 (bundle byte offset)
// Size: 2877 bytes
cOo();
iOo();
TOt();
X5e();
PoA();
LoA();
xph = class {
    get nodesConstructed() {
        return this._itemsConstructed;
    }
    get nodesReused() {
        return this._itemsFromCache;
    }
    constructor(n, e, t, i) {
        this.tokenizer = n;
        this.createImmutableLists = i;
        this._itemsConstructed = 0;
        this._itemsFromCache = 0;
        if (t && i) {
            throw new Error("Not supported");
        }
        this.oldNodeReader = t ? new Eph(t) : undefined;
        this.positionMapper = new mph(e);
    }
    parseDocument() {
        this._itemsConstructed = 0;
        this._itemsFromCache = 0;
        let n = this.parseList(Ooe.getEmpty(), 0);
        n ||= DSe.getEmpty();
        return n;
    }
    parseList(n, e) {
        const t = [];
        while (true) {
            let r = this.tryReadChildFromCache(n);
            if (!r) {
                const s = this.tokenizer.peek();
                if (!s || s.kind === 0 && oOn(s.length) || s.kind === 2 && s.bracketIds.intersects(n)) {
                    break;
                }
                r = this.parseChild(n, e + 1);
            }
            if (r.kind !== 4 || r.childrenLength !== 0) {
                t.push(r);
            }
        }
        if (this.oldNodeReader) {
            return DoA(t);
        } else {
            return Sph(t, this.createImmutableLists);
        }
    }
    tryReadChildFromCache(n) {
        if (this.oldNodeReader) {
            const e = this.positionMapper.getDistanceToNextChange(this.tokenizer.offset);
            if (e === null || !oOn(e)) {
                const t = this.oldNodeReader.readLongestNodeAt(this.positionMapper.getOffsetBeforeChange(this.tokenizer.offset), i => e !== null && !kOt(i.length, e) ? false : i.canBeReused(n));
                if (t) {
                    this._itemsFromCache++;
                    this.tokenizer.skip(t.length);
                    return t;
                }
            }
        }
    }
    parseChild(n, e) {
        this._itemsConstructed++;
        const t = this.tokenizer.read();
        switch (t.kind) {
            case 2:
                return new vph(t.bracketIds, t.length);
            case 0:
                return t.astNode;
            case 1: {
                if (e > 300) {
                    return new IVe(t.length);
                }
                const i = n.merge(t.bracketIds);
                const r = this.parseList(i, e + 1);
                const s = this.tokenizer.peek();
                if (s && s.kind === 2 && (s.bracketId === t.bracketId || s.bracketIds.intersects(t.bracketIds))) {
                    this.tokenizer.read();
                    return TEc.create(t.astNode, r, s.astNode);
                } else {
                    return TEc.create(t.astNode, r, null);
                }
            }
            default:
                throw new Error("unexpected");
        }
    }
};
