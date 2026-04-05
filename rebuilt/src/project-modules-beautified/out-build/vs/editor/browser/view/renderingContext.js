"use strict";

// Module: out-build/vs/editor/browser/view/renderingContext.js
// Offset: 1475081 (bundle byte offset)
// Size: 2400 bytes
yvh = class {
  constructor(n, e) {
    this._restrictedRenderingContextBrand = undefined;
    this._viewLayout = n;
    this.viewportData = e;
    this.scrollWidth = this._viewLayout.getScrollWidth();
    this.scrollHeight = this._viewLayout.getScrollHeight();
    this.visibleRange = this.viewportData.visibleRange;
    this.bigNumbersDelta = this.viewportData.bigNumbersDelta;
    const t = this._viewLayout.getCurrentViewport();
    this.scrollTop = t.top;
    this.scrollLeft = t.left;
    this.viewportWidth = t.width;
    this.viewportHeight = t.height;
  }
  getScrolledTopFromAbsoluteTop(n) {
    return n - this.scrollTop;
  }
  getVerticalOffsetForLineNumber(n, e) {
    return this._viewLayout.getVerticalOffsetForLineNumber(n, e);
  }
  getVerticalOffsetAfterLineNumber(n, e) {
    return this._viewLayout.getVerticalOffsetAfterLineNumber(n, e);
  }
  getDecorationsInViewport() {
    return this.viewportData.getDecorationsInViewport();
  }
};
wvh = class extends yvh {
  constructor(n, e, t, i) {
    super(n, e);
    this._renderingContextBrand = undefined;
    this._viewLines = t;
    this._viewLinesGpu = i;
  }
  linesVisibleRangesForRange(n, e) {
    const t = this._viewLines.linesVisibleRangesForRange(n, e);
    if (!this._viewLinesGpu) {
      return t ?? null;
    }
    const i = this._viewLinesGpu.linesVisibleRangesForRange(n, e);
    if (t) {
      if (i) {
        return t.concat(i).sort((r, s) => r.lineNumber - s.lineNumber);
      } else {
        return t;
      }
    } else {
      return i;
    }
  }
  visibleRangeForPosition(n) {
    return this._viewLines.visibleRangeForPosition(n) ?? this._viewLinesGpu?.visibleRangeForPosition(n) ?? null;
  }
};
fTc = class {
  static firstLine(n) {
    if (!n) {
      return null;
    }
    let e = null;
    for (const t of n) {
      if (!e || t.lineNumber < e.lineNumber) {
        e = t;
      }
    }
    return e;
  }
  static lastLine(n) {
    if (!n) {
      return null;
    }
    let e = null;
    for (const t of n) {
      if (!e || t.lineNumber > e.lineNumber) {
        e = t;
      }
    }
    return e;
  }
  constructor(n, e, t, i) {
    this.outsideRenderedLine = n;
    this.lineNumber = e;
    this.ranges = t;
    this.continuesOnNextLine = i;
  }
};
e3o = class pGb {
  static from(e) {
    const t = new Array(e.length);
    for (let i = 0, r = e.length; i < r; i++) {
      const s = e[i];
      t[i] = new pGb(s.left, s.width);
    }
    return t;
  }
  constructor(e, t) {
    this._horizontalRangeBrand = undefined;
    this.left = Math.round(e);
    this.width = Math.round(t);
  }
  toString() {
    return `[${this.left},${this.width}]`;
  }
};
h9e = class {
  constructor(n, e) {
    this._floatHorizontalRangeBrand = undefined;
    this.left = n;
    this.width = e;
  }
  toString() {
    return `[${this.left},${this.width}]`;
  }
  static compare(n, e) {
    return n.left - e.left;
  }
};
bTc = class {
  constructor(n, e) {
    this.outsideRenderedLine = n;
    this.originalLeft = e;
    this.left = Math.round(this.originalLeft);
  }
};
t3o = class {
  constructor(n, e) {
    this.outsideRenderedLine = n;
    this.ranges = e;
  }
};
