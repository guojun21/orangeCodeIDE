"use strict";

// Module: out-build/vs/editor/common/viewModel/modelLineProjection.js
// Offset: 1382747 (bundle byte offset)
// Size: 5414 bytes
LH();
tl();
Tft();
Lte();
Obh = class {
    constructor(n, e) {
        this._projectionData = n;
        this._isVisible = e;
    }
    isVisible() {
        return this._isVisible;
    }
    setVisible(n) {
        this._isVisible = n;
        return this;
    }
    getProjectionData() {
        return this._projectionData;
    }
    getViewLineCount() {
        if (this._isVisible) {
            return this._projectionData.getOutputLineCount();
        } else {
            return 0;
        }
    }
    getViewLineContent(n, e, t) {
        this._assertVisible();
        const i = t > 0 ? this._projectionData.breakOffsets[t - 1] : 0;
        const r = this._projectionData.breakOffsets[t];
        let s;
        if (this._projectionData.injectionOffsets !== null) {
            const o = this._projectionData.injectionOffsets.map((l, u) => new o9e(0, 0, l + 1, this._projectionData.injectionOptions[u], this._projectionData.injectionOptions[u].order ?? 0));
            o.sort((l, u) => l.column === u.column ? l.order - u.order : l.column - u.column);
            s = o9e.applyInjectedText(n.getLineContent(e), o).substring(i, r);
        } else {
            s = n.getValueInRange({
                startLineNumber: e,
                startColumn: i + 1,
                endLineNumber: e,
                endColumn: r + 1
            });
        }
        if (t > 0) {
            s = Fbh(this._projectionData.wrappedTextIndentLength) + s;
        }
        return s;
    }
    getViewLineLength(n, e, t) {
        this._assertVisible();
        return this._projectionData.getLineLength(t);
    }
    getViewLineMinColumn(n, e, t) {
        this._assertVisible();
        return this._projectionData.getMinOutputOffset(t) + 1;
    }
    getViewLineMaxColumn(n, e, t) {
        this._assertVisible();
        return this._projectionData.getMaxOutputOffset(t) + 1;
    }
    getViewLineData(n, e, t) {
        const i = new Array();
        this.getViewLinesData(n, e, t, 1, 0, [true], i);
        return i[0];
    }
    getViewLinesData(n, e, t, i, r, s, o) {
        this._assertVisible();
        const a = this._projectionData;
        const l = a.injectionOffsets;
        const u = a.injectionOptions;
        let d = null;
        if (l) {
            d = [];
            let p = 0;
            let g = 0;
            for (let f = 0; f < a.getOutputLineCount(); f++) {
                const A = new Array();
                d[f] = A;
                const w = f > 0 ? a.breakOffsets[f - 1] : 0;
                const C = a.breakOffsets[f];
                while (g < l.length) {
                    const x = u[g].content.length;
                    const I = l[g] + p;
                    const B = I + x;
                    if (I > C) {
                        break;
                    }
                    if (w < B) {
                        const R = u[g];
                        if (R.inlineClassName) {
                            const N = f > 0 ? a.wrappedTextIndentLength : 0;
                            const M = N + Math.max(I - w, 0);
                            const O = N + Math.min(B - w, C - w);
                            if (M !== O) {
                                A.push(new Tbh(M, O, R.inlineClassName, R.inlineClassNameAffectsLetterSpacing));
                            }
                        }
                    }
                    if (B <= C) {
                        p += x;
                        g++;
                    } else {
                        break;
                    }
                }
            }
        }
        let m;
        if (l) {
            const p = l.map((f, A) => A).sort((f, A) => {
                const w = l[f];
                const C = l[A];
                if (w === C) {
                    const x = u[f].order ?? 0;
                    const I = u[A].order ?? 0;
                    return x - I;
                }
                return w - C;
            });
            const g = [];
            for (const f of p) {
                const A = l[f];
                const w = u[f].tokens;
                if (w) {
                    w.forEach((C, x) => {
                        g.push({
                            offset: A,
                            text: C.substring(u[f].content),
                            tokenMetadata: x.metadata
                        });
                    });
                } else {
                    g.push({
                        offset: A,
                        text: u[f].content,
                        tokenMetadata: OB.defaultTokenMetadata
                    });
                }
            }
            m = n.tokenization.getLineTokens(e).withInserted(g);
        } else {
            m = n.tokenization.getLineTokens(e);
        }
        for (let p = t; p < t + i; p++) {
            const g = r + p - t;
            if (!s[g]) {
                o[g] = null;
                continue;
            }
            o[g] = this._getViewLineData(m, d ? d[p] : null, p);
        }
    }
    _getViewLineData(n, e, t) {
        this._assertVisible();
        const i = this._projectionData;
        const r = t > 0 ? i.wrappedTextIndentLength : 0;
        const s = t > 0 ? i.breakOffsets[t - 1] : 0;
        const o = i.breakOffsets[t];
        const a = n.sliceAndInflate(s, o, r);
        let l = a.getLineContent();
        if (t > 0) {
            l = Fbh(i.wrappedTextIndentLength) + l;
        }
        const u = this._projectionData.getMinOutputOffset(t) + 1;
        const d = l.length + 1;
        const m = t + 1 < this.getViewLineCount();
        const p = t === 0 ? 0 : i.breakOffsetsVisibleColumn[t - 1];
        return new VOo(l, m, u, d, p, a, e);
    }
    getModelColumnOfViewPosition(n, e) {
        this._assertVisible();
        return this._projectionData.translateToInputOffset(n, e - 1) + 1;
    }
    getViewPositionOfModelPosition(n, e, t = 2) {
        this._assertVisible();
        return this._projectionData.translateToOutputPosition(e - 1, t).toPosition(n);
    }
    getViewLineNumberOfModelPosition(n, e) {
        this._assertVisible();
        const t = this._projectionData.translateToOutputPosition(e - 1);
        return n + t.outputLineIndex;
    }
    normalizePosition(n, e, t) {
        const i = e.lineNumber - n;
        return this._projectionData.normalizeOutputPosition(n, e.column - 1, t).toPosition(i);
    }
    getInjectedTextAt(n, e) {
        return this._projectionData.getInjectedText(n, e - 1);
    }
    _assertVisible() {
        if (!this._isVisible) {
            throw new Error("Not supported");
        }
    }
};
tTc = class lGb {
    static {
        this.INSTANCE = new lGb();
    }
    constructor() {}
    isVisible() {
        return true;
    }
    setVisible(e) {
        if (e) {
            return this;
        } else {
            return nTc.INSTANCE;
        }
    }
    getProjectionData() {
        return null;
    }
    getViewLineCount() {
        return 1;
    }
    getViewLineContent(e, t, i) {
        return e.getLineContent(t);
    }
    getViewLineLength(e, t, i) {
        return e.getLineLength(t);
    }
    getViewLineMinColumn(e, t, i) {
        return e.getLineMinColumn(t);
    }
    getViewLineMaxColumn(e, t, i) {
        return e.getLineMaxColumn(t);
    }
    getViewLineData(e, t, i) {
        const r = e.tokenization.getLineTokens(t);
        const s = r.getLineContent();
        return new VOo(s, false, 1, s.length + 1, 0, r.inflate(), null);
    }
    getViewLinesData(e, t, i, r, s, o, a) {
        if (!o[s]) {
            a[s] = null;
            return;
        }
        a[s] = this.getViewLineData(e, t, 0);
    }
    getModelColumnOfViewPosition(e, t) {
        return t;
    }
    getViewPositionOfModelPosition(e, t) {
        return new ar(e, t);
    }
    getViewLineNumberOfModelPosition(e, t) {
        return e;
    }
    normalizePosition(e, t, i) {
        return t;
    }
    getInjectedTextAt(e, t) {
        return null;
    }
};
nTc = class uGb {
    static {
        this.INSTANCE = new uGb();
    }
    constructor() {}
    isVisible() {
        return false;
    }
    setVisible(e) {
        if (e) {
            return tTc.INSTANCE;
        } else {
            return this;
        }
    }
    getProjectionData() {
        return null;
    }
    getViewLineCount() {
        return 0;
    }
    getViewLineContent(e, t, i) {
        throw new Error("Not supported");
    }
    getViewLineLength(e, t, i) {
        throw new Error("Not supported");
    }
    getViewLineMinColumn(e, t, i) {
        throw new Error("Not supported");
    }
    getViewLineMaxColumn(e, t, i) {
        throw new Error("Not supported");
    }
    getViewLineData(e, t, i) {
        throw new Error("Not supported");
    }
    getViewLinesData(e, t, i, r, s, o, a) {
        throw new Error("Not supported");
    }
    getModelColumnOfViewPosition(e, t) {
        throw new Error("Not supported");
    }
    getViewPositionOfModelPosition(e, t) {
        throw new Error("Not supported");
    }
    getViewLineNumberOfModelPosition(e, t) {
        throw new Error("Not supported");
    }
    normalizePosition(e, t, i) {
        throw new Error("Not supported");
    }
    getInjectedTextAt(e, t) {
        throw new Error("Not supported");
    }
};
YOo = [""];
