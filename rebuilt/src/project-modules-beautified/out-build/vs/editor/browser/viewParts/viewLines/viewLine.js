"use strict";

// Module: out-build/vs/editor/browser/viewParts/viewLines/viewLine.js
// Offset: 1495251 (bundle byte offset)
// Size: 10553 bytes
Ay();
sI();
_r();
ocA();
e3t();
HVe();
Qft();
qI();
pk();
Rvh = function() {
    if (kw) {
        return true;
    } else {
        return !xv && !u3 && !kte;
    }
}();
jft = true;
GVe = class gGb {
    static {
        this.CLASS_NAME = "view-line";
    }
    constructor(e, t) {
        this._viewGpuContext = e;
        this._options = t;
        this._isMaybeInvalid = true;
        this._renderedViewLine = null;
    }
    getDomNode() {
        if (this._renderedViewLine && this._renderedViewLine.domNode) {
            return this._renderedViewLine.domNode.domNode;
        } else {
            return null;
        }
    }
    setDomNode(e) {
        if (this._renderedViewLine) {
            this._renderedViewLine.domNode = mw(e);
        } else {
            throw new Error("I have no rendered view line to set the dom node to...");
        }
    }
    onContentChanged() {
        this._isMaybeInvalid = true;
    }
    onTokensChanged() {
        this._isMaybeInvalid = true;
    }
    onDecorationsChanged() {
        this._isMaybeInvalid = true;
    }
    onOptionsChanged(e) {
        this._isMaybeInvalid = true;
        this._options = e;
    }
    onSelectionChanged() {
        if (Poe(this._options.themeType) || this._options.renderWhitespace === "selection") {
            this._isMaybeInvalid = true;
            return true;
        } else {
            return false;
        }
    }
    renderLine(e, t, i, r, s) {
        if (this._options.useGpu && this._viewGpuContext?.canRender(this._options, r, e)) {
            this._renderedViewLine?.domNode?.domNode.remove();
            this._renderedViewLine = null;
            return false;
        }
        if (this._isMaybeInvalid === false) {
            return false;
        }
        this._isMaybeInvalid = false;
        const o = r.getViewLineRenderingData(e);
        const a = this._options;
        const l = lz.filter(o.inlineDecorations, e, o.minColumn, o.maxColumn);
        let u = null;
        if (Poe(a.themeType) || this._options.renderWhitespace === "selection") {
            const g = r.selections;
            for (const f of g) {
                if (f.endLineNumber < e || f.startLineNumber > e) {
                    continue;
                }
                const A = f.startLineNumber === e ? f.startColumn : o.minColumn;
                const w = f.endLineNumber === e ? f.endColumn : o.maxColumn;
                if (A < w) {
                    if (Poe(a.themeType)) {
                        l.push(new lz(A, w, "inline-selected-text", 0));
                    }
                    if (this._options.renderWhitespace === "selection") {
                        u ||= [];
                        u.push(new ATc(A - 1, w - 1));
                    }
                }
            }
        }
        const d = new JVe(a.useMonospaceOptimizations, a.canUseHalfwidthRightwardsArrow, o.content, o.continuesWithWrappedLine, o.isBasicASCII, o.containsRTL, o.minColumn - 1, o.tokens, l, o.tabSize, o.startVisibleColumn, a.spaceWidth, a.middotWidth, a.wsmiddotWidth, a.stopRenderingLineAfter, a.renderWhitespace, a.renderControlCharacters, a.fontLigatures !== Y5e.OFF, u);
        if (this._renderedViewLine && this._renderedViewLine.input.equals(d)) {
            return false;
        }
        s.appendString("<div style=\"top:");
        s.appendString(String(t));
        s.appendString("px;height:");
        s.appendString(String(i));
        s.appendString("px;\" class=\"");
        s.appendString(gGb.CLASS_NAME);
        s.appendString("\">");
        const m = Wft(d, s);
        s.appendString("</div>");
        let p = null;
        if (jft && Rvh && o.isBasicASCII && a.useMonospaceOptimizations && m.containsForeignElements === 0) {
            p = new QOn(this._renderedViewLine ? this._renderedViewLine.domNode : null, d, m.characterMapping);
        }
        p ||= CTc(this._renderedViewLine ? this._renderedViewLine.domNode : null, d, m.characterMapping, m.containsRTL, m.containsForeignElements);
        this._renderedViewLine = p;
        return true;
    }
    layoutLine(e, t, i) {
        if (this._renderedViewLine && this._renderedViewLine.domNode) {
            this._renderedViewLine.domNode.setTop(t);
            this._renderedViewLine.domNode.setHeight(i);
        }
    }
    getWidth(e) {
        if (this._renderedViewLine) {
            return this._renderedViewLine.getWidth(e);
        } else {
            return 0;
        }
    }
    getWidthIsFast() {
        if (this._renderedViewLine) {
            return this._renderedViewLine.getWidthIsFast();
        } else {
            return true;
        }
    }
    needsMonospaceFontCheck() {
        if (this._renderedViewLine) {
            return this._renderedViewLine instanceof QOn;
        } else {
            return false;
        }
    }
    monospaceAssumptionsAreValid() {
        if (this._renderedViewLine && this._renderedViewLine instanceof QOn) {
            return this._renderedViewLine.monospaceAssumptionsAreValid();
        } else {
            return jft;
        }
    }
    onMonospaceAssumptionsInvalidated() {
        if (this._renderedViewLine && this._renderedViewLine instanceof QOn) {
            this._renderedViewLine = this._renderedViewLine.toSlowRenderedLine();
        }
    }
    getVisibleRangesForRange(e, t, i, r) {
        if (!this._renderedViewLine) {
            return null;
        }
        t = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, t));
        i = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, i));
        const s = this._renderedViewLine.input.stopRenderingLineAfter;
        if (s !== -1 && t > s + 1 && i > s + 1) {
            return new t3o(true, [new h9e(this.getWidth(r), 0)]);
        }
        if (s !== -1 && t > s + 1) {
            t = s + 1;
        }
        if (s !== -1 && i > s + 1) {
            i = s + 1;
        }
        const o = this._renderedViewLine.getVisibleRangesForRange(e, t, i, r);
        if (o && o.length > 0) {
            return new t3o(false, o);
        } else {
            return null;
        }
    }
    getColumnOfNodeOffset(e, t) {
        if (this._renderedViewLine) {
            return this._renderedViewLine.getColumnOfNodeOffset(e, t);
        } else {
            return 1;
        }
    }
};
(function(n) {
    n[n.MaxMonospaceDistance = 300] = "MaxMonospaceDistance";
})(Pvh ||= {});
QOn = class {
    constructor(n, e, t) {
        this._cachedWidth = -1;
        this.domNode = n;
        this.input = e;
        const i = Math.floor(e.lineContent.length / 300);
        if (i > 0) {
            this._keyColumnPixelOffsetCache = new Float32Array(i);
            for (let r = 0; r < i; r++) {
                this._keyColumnPixelOffsetCache[r] = -1;
            }
        } else {
            this._keyColumnPixelOffsetCache = null;
        }
        this._characterMapping = t;
        this._charWidth = e.spaceWidth;
    }
    getWidth(n) {
        if (!this.domNode || this.input.lineContent.length < 300) {
            const e = this._characterMapping.getHorizontalOffset(this._characterMapping.length);
            return Math.round(this._charWidth * e);
        }
        if (this._cachedWidth === -1) {
            this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth;
            n?.markDidDomLayout();
        }
        return this._cachedWidth;
    }
    getWidthIsFast() {
        return this.input.lineContent.length < 300 || this._cachedWidth !== -1;
    }
    monospaceAssumptionsAreValid() {
        if (!this.domNode) {
            return jft;
        }
        if (this.input.lineContent.length < 300) {
            const n = this.getWidth(null);
            const e = this.domNode.domNode.firstChild.offsetWidth;
            if (Math.abs(n - e) >= 2) {
                console.warn("monospace assumptions have been violated, therefore disabling monospace optimizations!");
                jft = false;
            }
        }
        return jft;
    }
    toSlowRenderedLine() {
        return CTc(this.domNode, this.input, this._characterMapping, false, 0);
    }
    getVisibleRangesForRange(n, e, t, i) {
        const r = this._getColumnPixelOffset(n, e, i);
        const s = this._getColumnPixelOffset(n, t, i);
        return [new h9e(r, s - r)];
    }
    _getColumnPixelOffset(n, e, t) {
        if (e <= 300) {
            const l = this._characterMapping.getHorizontalOffset(e);
            return this._charWidth * l;
        }
        const i = Math.floor((e - 1) / 300) - 1;
        const r = (i + 1) * 300 + 1;
        let s = -1;
        if (this._keyColumnPixelOffsetCache) {
            s = this._keyColumnPixelOffsetCache[i];
            if (s === -1) {
                s = this._actualReadPixelOffset(n, r, t);
                this._keyColumnPixelOffsetCache[i] = s;
            }
        }
        if (s === -1) {
            const l = this._characterMapping.getHorizontalOffset(e);
            return this._charWidth * l;
        }
        const o = this._characterMapping.getHorizontalOffset(r);
        const a = this._characterMapping.getHorizontalOffset(e);
        return s + this._charWidth * (a - o);
    }
    _getReadingTarget(n) {
        return n.domNode.firstChild;
    }
    _actualReadPixelOffset(n, e, t) {
        if (!this.domNode) {
            return -1;
        }
        const i = this._characterMapping.getDomPosition(e);
        const r = WOn.readHorizontalRanges(this._getReadingTarget(this.domNode), i.partIndex, i.charIndex, i.partIndex, i.charIndex, t);
        if (!r || r.length === 0) {
            return -1;
        } else {
            return r[0].left;
        }
    }
    getColumnOfNodeOffset(n, e) {
        return wTc(this._characterMapping, n, e);
    }
};
_Tc = class {
    constructor(n, e, t, i, r) {
        this.domNode = n;
        this.input = e;
        this._characterMapping = t;
        this._isWhitespaceOnly = /^\s*$/.test(e.lineContent);
        this._containsForeignElements = r;
        this._cachedWidth = -1;
        this._pixelOffsetCache = null;
        if (!i || this._characterMapping.length === 0) {
            this._pixelOffsetCache = new Float32Array(Math.max(2, this._characterMapping.length + 1));
            for (let s = 0, o = this._characterMapping.length; s <= o; s++) {
                this._pixelOffsetCache[s] = -1;
            }
        }
    }
    _getReadingTarget(n) {
        return n.domNode.firstChild;
    }
    getWidth(n) {
        if (this.domNode) {
            if (this._cachedWidth === -1) {
                this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth;
                n?.markDidDomLayout();
            }
            return this._cachedWidth;
        } else {
            return 0;
        }
    }
    getWidthIsFast() {
        return this._cachedWidth !== -1;
    }
    getVisibleRangesForRange(n, e, t, i) {
        if (!this.domNode) {
            return null;
        }
        if (this._pixelOffsetCache !== null) {
            const r = this._readPixelOffset(this.domNode, n, e, i);
            if (r === -1) {
                return null;
            }
            const s = this._readPixelOffset(this.domNode, n, t, i);
            if (s === -1) {
                return null;
            } else {
                return [new h9e(r, s - r)];
            }
        }
        return this._readVisibleRangesForRange(this.domNode, n, e, t, i);
    }
    _readVisibleRangesForRange(n, e, t, i, r) {
        if (t === i) {
            const s = this._readPixelOffset(n, e, t, r);
            if (s === -1) {
                return null;
            } else {
                return [new h9e(s, 0)];
            }
        } else {
            return this._readRawVisibleRangesForRange(n, t, i, r);
        }
    }
    _readPixelOffset(n, e, t, i) {
        if (this._characterMapping.length === 0) {
            if (this._containsForeignElements === 0 || this._containsForeignElements === 2) {
                return 0;
            }
            if (this._containsForeignElements === 1) {
                return this.getWidth(i);
            }
            const r = this._getReadingTarget(n);
            if (r.firstChild) {
                i.markDidDomLayout();
                return r.firstChild.offsetWidth;
            } else {
                return 0;
            }
        }
        if (this._pixelOffsetCache !== null) {
            const r = this._pixelOffsetCache[t];
            if (r !== -1) {
                return r;
            }
            const s = this._actualReadPixelOffset(n, e, t, i);
            this._pixelOffsetCache[t] = s;
            return s;
        }
        return this._actualReadPixelOffset(n, e, t, i);
    }
    _actualReadPixelOffset(n, e, t, i) {
        if (this._characterMapping.length === 0) {
            const a = WOn.readHorizontalRanges(this._getReadingTarget(n), 0, 0, 0, 0, i);
            if (!a || a.length === 0) {
                return -1;
            } else {
                return a[0].left;
            }
        }
        if (t === this._characterMapping.length && this._isWhitespaceOnly && this._containsForeignElements === 0) {
            return this.getWidth(i);
        }
        const r = this._characterMapping.getDomPosition(t);
        const s = WOn.readHorizontalRanges(this._getReadingTarget(n), r.partIndex, r.charIndex, r.partIndex, r.charIndex, i);
        if (!s || s.length === 0) {
            return -1;
        }
        const o = s[0].left;
        if (this.input.isBasicASCII) {
            const a = this._characterMapping.getHorizontalOffset(t);
            const l = Math.round(this.input.spaceWidth * a);
            if (Math.abs(l - o) <= 1) {
                return l;
            }
        }
        return o;
    }
    _readRawVisibleRangesForRange(n, e, t, i) {
        if (e === 1 && t === this._characterMapping.length) {
            return [new h9e(0, this.getWidth(i))];
        }
        const r = this._characterMapping.getDomPosition(e);
        const s = this._characterMapping.getDomPosition(t);
        return WOn.readHorizontalRanges(this._getReadingTarget(n), r.partIndex, r.charIndex, s.partIndex, s.charIndex, i);
    }
    getColumnOfNodeOffset(n, e) {
        return wTc(this._characterMapping, n, e);
    }
};
Lvh = class extends _Tc {
    _readVisibleRangesForRange(n, e, t, i, r) {
        const s = super._readVisibleRangesForRange(n, e, t, i, r);
        if (!s || s.length === 0 || t === i || t === 1 && i === this._characterMapping.length) {
            return s;
        }
        if (!this.input.containsRTL) {
            const o = this._readPixelOffset(n, e, i, r);
            if (o !== -1) {
                const a = s[s.length - 1];
                if (a.left < o) {
                    a.width = o - a.left;
                }
            }
        }
        return s;
    }
};
CTc = function() {
    if (wze) {
        return vcA;
    } else {
        return AcA;
    }
}();
