"use strict";

// Module: out-build/vs/editor/contrib/smartSelect/browser/wordSelections.js
// Offset: 32755975 (bundle byte offset)
// Size: 2618 bytes
oa();
ts();
d5f = class {
    constructor(n = true) {
        this.selectSubwords = n;
    }
    provideSelectionRanges(n, e) {
        const t = [];
        for (const i of e) {
            const r = [];
            t.push(r);
            if (this.selectSubwords) {
                this._addInWordRanges(r, n, i);
            }
            this._addWordRanges(r, n, i);
            this._addWhitespaceLine(r, n, i);
            r.push({
                range: n.getFullModelRange()
            });
        }
        return t;
    }
    _addInWordRanges(n, e, t) {
        const i = e.getWordAtPosition(t);
        if (!i) {
            return;
        }
        const {
            word: r,
            startColumn: s
        } = i;
        const o = t.column - s;
        let a = o;
        let l = o;
        let u = 0;
        for (; a >= 0; a--) {
            const d = r.charCodeAt(a);
            if (a !== o && (d === 95 || d === 45)) {
                break;
            }
            if (Eze(d) && Ibe(u)) {
                break;
            }
            u = d;
        }
        for (a += 1; l < r.length; l++) {
            const d = r.charCodeAt(l);
            if (Ibe(d) && Eze(u)) {
                break;
            }
            if (d === 95 || d === 45) {
                break;
            }
            u = d;
        }
        if (a < l) {
            n.push({
                range: new Zt(t.lineNumber, s + a, t.lineNumber, s + l)
            });
        }
    }
    _addWordRanges(n, e, t) {
        const i = e.getWordAtPosition(t);
        if (i) {
            n.push({
                range: new Zt(t.lineNumber, i.startColumn, t.lineNumber, i.endColumn)
            });
        }
    }
    _addWhitespaceLine(n, e, t) {
        if (e.getLineLength(t.lineNumber) > 0 && e.getLineFirstNonWhitespaceColumn(t.lineNumber) === 0 && e.getLineLastNonWhitespaceColumn(t.lineNumber) === 0) {
            n.push({
                range: new Zt(t.lineNumber, 1, t.lineNumber, e.getLineMaxColumn(t.lineNumber))
            });
        }
    }
};
