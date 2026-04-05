"use strict";

// Module: out-build/vs/editor/common/viewLayout/viewLineRenderer.js
// Offset: 1490256 (bundle byte offset)
// Size: 4995 bytes
Ht();
oa();
kSe();
HVe();
acA();
(function(n) {
    n[n.None = 0] = "None";
    n[n.Boundary = 1] = "Boundary";
    n[n.Selection = 2] = "Selection";
    n[n.Trailing = 3] = "Trailing";
    n[n.All = 4] = "All";
})(Evh ||= {});
ATc = class {
    constructor(n, e) {
        this.startOffset = n;
        this.endOffset = e;
    }
    equals(n) {
        return this.startOffset === n.startOffset && this.endOffset === n.endOffset;
    }
};
JVe = class {
    constructor(n, e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x) {
        this.useMonospaceOptimizations = n;
        this.canUseHalfwidthRightwardsArrow = e;
        this.lineContent = t;
        this.continuesWithWrappedLine = i;
        this.isBasicASCII = r;
        this.containsRTL = s;
        this.fauxIndentLength = o;
        this.lineTokens = a;
        this.lineDecorations = l.sort(lz.compare);
        this.tabSize = u;
        this.startVisibleColumn = d;
        this.spaceWidth = m;
        this.stopRenderingLineAfter = f;
        this.renderWhitespace = A === "all" ? 4 : A === "boundary" ? 1 : A === "selection" ? 2 : A === "trailing" ? 3 : 0;
        this.renderControlCharacters = w;
        this.fontLigatures = C;
        this.selectionsOnLine = x && x.sort((R, N) => R.startOffset < N.startOffset ? -1 : 1);
        const I = Math.abs(g - m);
        const B = Math.abs(p - m);
        if (I < B) {
            this.renderSpaceWidth = g;
            this.renderSpaceCharCode = 11825;
        } else {
            this.renderSpaceWidth = p;
            this.renderSpaceCharCode = 183;
        }
    }
    sameSelection(n) {
        if (this.selectionsOnLine === null) {
            return n === null;
        }
        if (n === null || n.length !== this.selectionsOnLine.length) {
            return false;
        }
        for (let e = 0; e < this.selectionsOnLine.length; e++) {
            if (!this.selectionsOnLine[e].equals(n[e])) {
                return false;
            }
        }
        return true;
    }
    equals(n) {
        return this.useMonospaceOptimizations === n.useMonospaceOptimizations && this.canUseHalfwidthRightwardsArrow === n.canUseHalfwidthRightwardsArrow && this.lineContent === n.lineContent && this.continuesWithWrappedLine === n.continuesWithWrappedLine && this.isBasicASCII === n.isBasicASCII && this.containsRTL === n.containsRTL && this.fauxIndentLength === n.fauxIndentLength && this.tabSize === n.tabSize && this.startVisibleColumn === n.startVisibleColumn && this.spaceWidth === n.spaceWidth && this.renderSpaceWidth === n.renderSpaceWidth && this.renderSpaceCharCode === n.renderSpaceCharCode && this.stopRenderingLineAfter === n.stopRenderingLineAfter && this.renderWhitespace === n.renderWhitespace && this.renderControlCharacters === n.renderControlCharacters && this.fontLigatures === n.fontLigatures && lz.equalsArr(this.lineDecorations, n.lineDecorations) && this.lineTokens.equals(n.lineTokens) && this.sameSelection(n.selectionsOnLine);
    }
};
(function(n) {
    n[n.PART_INDEX_MASK = 4294901760] = "PART_INDEX_MASK";
    n[n.CHAR_INDEX_MASK = 65535] = "CHAR_INDEX_MASK";
    n[n.CHAR_INDEX_OFFSET = 0] = "CHAR_INDEX_OFFSET";
    n[n.PART_INDEX_OFFSET = 16] = "PART_INDEX_OFFSET";
})(xvh ||= {});
yTc = class {
    constructor(n, e) {
        this.partIndex = n;
        this.charIndex = e;
    }
};
n3o = class vJe {
    static getPartIndex(e) {
        return (e & 4294901760) >>> 16;
    }
    static getCharIndex(e) {
        return (e & 65535) >>> 0;
    }
    constructor(e, t) {
        this.length = e;
        this._data = new Uint32Array(this.length);
        this._horizontalOffset = new Uint32Array(this.length);
    }
    setColumnInfo(e, t, i, r) {
        const s = (t << 16 | i << 0) >>> 0;
        this._data[e - 1] = s;
        this._horizontalOffset[e - 1] = r;
    }
    getHorizontalOffset(e) {
        if (this._horizontalOffset.length === 0) {
            return 0;
        } else {
            return this._horizontalOffset[e - 1];
        }
    }
    charOffsetToPartData(e) {
        if (this.length === 0) {
            return 0;
        } else if (e < 0) {
            return this._data[0];
        } else if (e >= this.length) {
            return this._data[this.length - 1];
        } else {
            return this._data[e];
        }
    }
    getDomPosition(e) {
        const t = this.charOffsetToPartData(e - 1);
        const i = vJe.getPartIndex(t);
        const r = vJe.getCharIndex(t);
        return new yTc(i, r);
    }
    getColumn(e, t) {
        return this.partDataToCharOffset(e.partIndex, t, e.charIndex) + 1;
    }
    partDataToCharOffset(e, t, i) {
        if (this.length === 0) {
            return 0;
        }
        const r = (e << 16 | i << 0) >>> 0;
        let s = 0;
        let o = this.length - 1;
        while (s + 1 < o) {
            const A = s + o >>> 1;
            const w = this._data[A];
            if (w === r) {
                return A;
            }
            if (w > r) {
                o = A;
            } else {
                s = A;
            }
        }
        if (s === o) {
            return s;
        }
        const a = this._data[s];
        const l = this._data[o];
        if (a === r) {
            return s;
        }
        if (l === r) {
            return o;
        }
        const u = vJe.getPartIndex(a);
        const d = vJe.getCharIndex(a);
        const m = vJe.getPartIndex(l);
        let p;
        if (u !== m) {
            p = t;
        } else {
            p = vJe.getCharIndex(l);
        }
        const g = i - d;
        const f = p - i;
        if (g <= f) {
            return s;
        } else {
            return o;
        }
    }
    inflate() {
        const e = [];
        for (let t = 0; t < this.length; t++) {
            const i = this._data[t];
            const r = vJe.getPartIndex(i);
            const s = vJe.getCharIndex(i);
            const o = this._horizontalOffset[t];
            e.push([r, s, o]);
        }
        return e;
    }
};
(function(n) {
    n[n.None = 0] = "None";
    n[n.Before = 1] = "Before";
    n[n.After = 2] = "After";
})(Tvh ||= {});
i3o = class {
    constructor(n, e, t) {
        this._renderLineOutputBrand = undefined;
        this.characterMapping = n;
        this.containsRTL = e;
        this.containsForeignElements = t;
    }
};
Ivh = class {
    constructor(n, e, t, i) {
        this.characterMapping = n;
        this.html = e;
        this.containsRTL = t;
        this.containsForeignElements = i;
    }
};
Dvh = class {
    constructor(n, e, t, i, r, s, o, a, l, u, d, m, p, g, f, A) {
        this.fontIsMonospace = n;
        this.canUseHalfwidthRightwardsArrow = e;
        this.lineContent = t;
        this.len = i;
        this.isOverflowing = r;
        this.overflowingCharCount = s;
        this.parts = o;
        this.containsForeignElements = a;
        this.fauxIndentLength = l;
        this.tabSize = u;
        this.startVisibleColumn = d;
        this.containsRTL = m;
        this.spaceWidth = p;
        this.renderSpaceCharCode = g;
        this.renderWhitespace = f;
        this.renderControlCharacters = A;
    }
};
(function(n) {
    n[n.LongToken = 50] = "LongToken";
})(Bvh ||= {});
