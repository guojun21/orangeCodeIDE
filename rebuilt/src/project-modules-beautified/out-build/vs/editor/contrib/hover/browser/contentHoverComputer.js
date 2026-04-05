"use strict";

// Module: out-build/vs/editor/contrib/hover/browser/contentHoverComputer.js
// Offset: 4238162 (bundle byte offset)
// Size: 1147 bytes
Vs();
vr();
ZJh = class Gad {
    constructor(e, t) {
        this._editor = e;
        this._participants = t;
    }
    static _getLineDecorations(e, t) {
        if (t.type !== 1 && !t.supportsMarkerHover) {
            return [];
        }
        const i = e.getModel();
        const r = t.range.startLineNumber;
        if (r > i.getLineCount()) {
            return [];
        }
        const s = i.getLineMaxColumn(r);
        return e.getLineDecorations(r).filter(o => {
            if (o.options.isWholeLine) {
                return true;
            }
            const a = o.range.startLineNumber === r ? o.range.startColumn : 1;
            const l = o.range.endLineNumber === r ? o.range.endColumn : s;
            if (o.options.showIfCollapsed) {
                if (a > t.range.startColumn + 1 || t.range.endColumn - 1 > l) {
                    return false;
                }
            } else if (a > t.range.startColumn || t.range.endColumn > l) {
                return false;
            }
            return true;
        });
    }
    computeAsync(e, t) {
        const i = e.anchor;
        if (!this._editor.hasModel() || !i) {
            return IH.EMPTY;
        }
        const r = Gad._getLineDecorations(this._editor, i);
        return IH.merge(this._participants.map(s => s.computeAsync ? s.computeAsync(i, r, e.source, t) : IH.EMPTY));
    }
    computeSync(e) {
        if (!this._editor.hasModel()) {
            return [];
        }
        const t = e.anchor;
        const i = Gad._getLineDecorations(this._editor, t);
        let r = [];
        for (const s of this._participants) {
            r = r.concat(s.computeSync(t, i, e.source));
        }
        return lh(r);
    }
};
