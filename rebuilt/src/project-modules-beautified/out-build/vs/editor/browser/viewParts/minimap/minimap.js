"use strict";

// Module: out-build/vs/editor/browser/viewParts/minimap/minimap.js
// Offset: 1679567 (bundle byte offset)
// Size: 31038 bytes
ZcA();
ri();
sI();
ZOt();
rt();
_r();
oa();
LTc();
j$();
pk();
ts();
Rbh();
Pbh();
Lte();
Nl();
db();
Dx();
tlA();
wH();
cu();
Zft();
QAh = 140;
jAh = 2;
KTc = class XGa {
  constructor(e, t, i) {
    const r = e.options;
    const s = r.get(149);
    const o = r.get(151);
    const a = o.minimap;
    const l = r.get(52);
    const u = r.get(74);
    this.renderMinimap = a.renderMinimap;
    this.size = u.size;
    this.minimapHeightIsEditorHeight = a.minimapHeightIsEditorHeight;
    this.scrollBeyondLastLine = r.get(110);
    this.paddingTop = r.get(88).top;
    this.paddingBottom = r.get(88).bottom;
    this.showSlider = u.showSlider;
    this.autohide = u.autohide;
    this.pixelRatio = s;
    this.typicalHalfwidthCharacterWidth = l.typicalHalfwidthCharacterWidth;
    this.lineHeight = r.get(68);
    this.minimapLeft = a.minimapLeft;
    this.minimapWidth = a.minimapWidth;
    this.minimapHeight = o.height;
    this.canvasInnerWidth = a.minimapCanvasInnerWidth;
    this.canvasInnerHeight = a.minimapCanvasInnerHeight;
    this.canvasOuterWidth = a.minimapCanvasOuterWidth;
    this.canvasOuterHeight = a.minimapCanvasOuterHeight;
    this.isSampling = a.minimapIsSampling;
    this.editorHeight = o.height;
    this.fontScale = a.minimapScale;
    this.minimapLineHeight = a.minimapLineHeight;
    this.minimapCharWidth = this.fontScale * 1;
    this.sectionHeaderFontFamily = c3t;
    this.sectionHeaderFontSize = u.sectionHeaderFontSize * s;
    this.sectionHeaderLetterSpacing = u.sectionHeaderLetterSpacing;
    this.sectionHeaderFontColor = XGa._getSectionHeaderColor(t, i.getColor(1));
    this.charRenderer = _6(() => GAh.create(this.fontScale, l.fontFamily));
    this.defaultBackgroundColor = i.getColor(2);
    this.backgroundColor = XGa._getMinimapBackground(t, this.defaultBackgroundColor);
    this.foregroundAlpha = XGa._getMinimapForegroundOpacity(t);
  }
  static _getMinimapBackground(e, t) {
    const i = e.getColor(Muh);
    if (i) {
      return new OVe(i.rgba.r, i.rgba.g, i.rgba.b, Math.round(i.rgba.a * 255));
    } else {
      return t;
    }
  }
  static _getMinimapForegroundOpacity(e) {
    const t = e.getColor(Fuh);
    if (t) {
      return OVe._clamp(Math.round(t.rgba.a * 255));
    } else {
      return 255;
    }
  }
  static _getSectionHeaderColor(e, t) {
    const i = e.getColor(jE);
    if (i) {
      return new OVe(i.rgba.r, i.rgba.g, i.rgba.b, Math.round(i.rgba.a * 255));
    } else {
      return t;
    }
  }
  equals(e) {
    return this.renderMinimap === e.renderMinimap && this.size === e.size && this.minimapHeightIsEditorHeight === e.minimapHeightIsEditorHeight && this.scrollBeyondLastLine === e.scrollBeyondLastLine && this.paddingTop === e.paddingTop && this.paddingBottom === e.paddingBottom && this.showSlider === e.showSlider && this.autohide === e.autohide && this.pixelRatio === e.pixelRatio && this.typicalHalfwidthCharacterWidth === e.typicalHalfwidthCharacterWidth && this.lineHeight === e.lineHeight && this.minimapLeft === e.minimapLeft && this.minimapWidth === e.minimapWidth && this.minimapHeight === e.minimapHeight && this.canvasInnerWidth === e.canvasInnerWidth && this.canvasInnerHeight === e.canvasInnerHeight && this.canvasOuterWidth === e.canvasOuterWidth && this.canvasOuterHeight === e.canvasOuterHeight && this.isSampling === e.isSampling && this.editorHeight === e.editorHeight && this.fontScale === e.fontScale && this.minimapLineHeight === e.minimapLineHeight && this.minimapCharWidth === e.minimapCharWidth && this.sectionHeaderFontSize === e.sectionHeaderFontSize && this.sectionHeaderLetterSpacing === e.sectionHeaderLetterSpacing && this.defaultBackgroundColor && this.defaultBackgroundColor.equals(e.defaultBackgroundColor) && this.backgroundColor && this.backgroundColor.equals(e.backgroundColor) && this.foregroundAlpha === e.foregroundAlpha;
  }
};
zAh = class eWa {
  constructor(e, t, i, r, s, o, a, l, u) {
    this.scrollTop = e;
    this.scrollHeight = t;
    this.sliderNeeded = i;
    this._computedSliderRatio = r;
    this.sliderTop = s;
    this.sliderHeight = o;
    this.topPaddingLineCount = a;
    this.startLineNumber = l;
    this.endLineNumber = u;
  }
  getDesiredScrollTopFromDelta(e) {
    return Math.round(this.scrollTop + e / this._computedSliderRatio);
  }
  getDesiredScrollTopFromTouchLocation(e) {
    return Math.round((e - this.sliderHeight / 2) / this._computedSliderRatio);
  }
  intersectWithViewport(e) {
    const t = Math.max(this.startLineNumber, e.startLineNumber);
    const i = Math.min(this.endLineNumber, e.endLineNumber);
    if (t > i) {
      return null;
    } else {
      return [t, i];
    }
  }
  getYForLineNumber(e, t) {
    return +(e - this.startLineNumber + this.topPaddingLineCount) * t;
  }
  static create(e, t, i, r, s, o, a, l, u, d, m) {
    const p = e.pixelRatio;
    const g = e.minimapLineHeight;
    const f = Math.floor(e.canvasInnerHeight / g);
    const A = e.lineHeight;
    if (e.minimapHeightIsEditorHeight) {
      let N = l * e.lineHeight + e.paddingTop + e.paddingBottom;
      if (e.scrollBeyondLastLine) {
        N += Math.max(0, s - e.lineHeight - e.paddingBottom);
      }
      const M = Math.max(1, Math.floor(s * s / N));
      const O = Math.max(0, e.minimapHeight - M);
      const $ = O / (d - s);
      const H = u * $;
      const W = O > 0;
      const z = Math.floor(e.canvasInnerHeight / e.minimapLineHeight);
      const Y = Math.floor(e.paddingTop / e.lineHeight);
      return new eWa(u, d, W, $, H, M, Y, 1, Math.min(a, z));
    }
    let w;
    if (o && i !== a) {
      const N = i - t + 1;
      w = Math.floor(N * g / p);
    } else {
      const N = s / A;
      w = Math.floor(N * g / p);
    }
    const C = Math.floor(e.paddingTop / A);
    let x = Math.floor(e.paddingBottom / A);
    if (e.scrollBeyondLastLine) {
      const N = s / A;
      x = Math.max(x, N - 1);
    }
    let I;
    if (x > 0) {
      const N = s / A;
      I = (C + a + x - N - 1) * g / p;
    } else {
      I = Math.max(0, (C + a) * g / p - w);
    }
    I = Math.min(e.minimapHeight - w, I);
    const B = I / (d - s);
    const R = u * B;
    if (f >= C + a + x) {
      const N = I > 0;
      return new eWa(u, d, N, B, R, w, C, 1, a);
    } else {
      let N;
      if (t > 1) {
        N = t + C;
      } else {
        N = Math.max(1, u / A);
      }
      let M;
      let O = Math.max(1, Math.floor(N - R * p / g));
      if (O < C) {
        M = C - O + 1;
        O = 1;
      } else {
        M = 0;
        O = Math.max(1, O - C);
      }
      if (m && m.scrollHeight === d) {
        if (m.scrollTop > u) {
          O = Math.min(O, m.startLineNumber);
          M = Math.max(M, m.topPaddingLineCount);
        }
        if (m.scrollTop < u) {
          O = Math.max(O, m.startLineNumber);
          M = Math.min(M, m.topPaddingLineCount);
        }
      }
      const $ = Math.min(a, O - M + f - 1);
      const H = (u - r) / A;
      let W;
      if (u >= e.paddingTop) {
        W = (t - O + M + H) * g / p;
      } else {
        W = u / e.paddingTop * (M + H) * g / p;
      }
      return new eWa(u, d, true, B, W, w, M, O, $);
    }
  }
};
YTc = class wGb {
  static {
    this.INVALID = new wGb(-1);
  }
  constructor(e) {
    this.dy = e;
  }
  onContentChanged() {
    this.dy = -1;
  }
  onTokensChanged() {
    this.dy = -1;
  }
};
ZTc = class {
  constructor(n, e, t) {
    this.renderedLayout = n;
    this._imageData = e;
    this._renderedLines = new RTc({
      createLine: () => YTc.INVALID
    });
    this._renderedLines._set(n.startLineNumber, t);
  }
  linesEquals(n) {
    if (!this.scrollEquals(n)) {
      return false;
    }
    const t = this._renderedLines._get().lines;
    for (let i = 0, r = t.length; i < r; i++) {
      if (t[i].dy === -1) {
        return false;
      }
    }
    return true;
  }
  scrollEquals(n) {
    return this.renderedLayout.startLineNumber === n.startLineNumber && this.renderedLayout.endLineNumber === n.endLineNumber;
  }
  _get() {
    const n = this._renderedLines._get();
    return {
      imageData: this._imageData,
      rendLineNumberStart: n.rendLineNumberStart,
      lines: n.lines
    };
  }
  onLinesChanged(n, e) {
    return this._renderedLines.onLinesChanged(n, e);
  }
  onLinesDeleted(n, e) {
    this._renderedLines.onLinesDeleted(n, e);
  }
  onLinesInserted(n, e) {
    this._renderedLines.onLinesInserted(n, e);
  }
  onTokensChanged(n) {
    return this._renderedLines.onTokensChanged(n);
  }
};
VAh = class _Gb {
  constructor(e, t, i, r) {
    this._backgroundFillData = _Gb._createBackgroundFillData(t, i, r);
    this._buffers = [e.createImageData(t, i), e.createImageData(t, i)];
    this._lastUsedBuffer = 0;
  }
  getBuffer() {
    this._lastUsedBuffer = 1 - this._lastUsedBuffer;
    const e = this._buffers[this._lastUsedBuffer];
    e.data.set(this._backgroundFillData);
    return e;
  }
  static _createBackgroundFillData(e, t, i) {
    const r = i.r;
    const s = i.g;
    const o = i.b;
    const a = i.a;
    const l = new Uint8ClampedArray(e * t * 4);
    let u = 0;
    for (let d = 0; d < t; d++) {
      for (let m = 0; m < e; m++) {
        l[u] = r;
        l[u + 1] = s;
        l[u + 2] = o;
        l[u + 3] = a;
        u += 4;
      }
    }
    return l;
  }
};
XTc = class Rad {
  static compute(e, t, i) {
    if (e.renderMinimap === 0 || !e.isSampling) {
      return [null, []];
    }
    const {
      minimapLineCount: r
    } = lEc.computeContainedMinimapLineCount({
      viewLineCount: t,
      scrollBeyondLastLine: e.scrollBeyondLastLine,
      paddingTop: e.paddingTop,
      paddingBottom: e.paddingBottom,
      height: e.editorHeight,
      lineHeight: e.lineHeight,
      pixelRatio: e.pixelRatio
    });
    const s = t / r;
    const o = s / 2;
    if (!i || i.minimapLines.length === 0) {
      const w = [];
      w[0] = 1;
      if (r > 1) {
        for (let C = 0, x = r - 1; C < x; C++) {
          w[C] = Math.round(C * s + o);
        }
        w[r - 1] = t;
      }
      return [new Rad(s, w), []];
    }
    const a = i.minimapLines;
    const l = a.length;
    const u = [];
    let d = 0;
    let m = 0;
    let p = 1;
    const g = 10;
    let f = [];
    let A = null;
    for (let w = 0; w < r; w++) {
      const C = Math.max(p, Math.round(w * s));
      const x = Math.max(C, Math.round((w + 1) * s));
      while (d < l && a[d] < C) {
        if (f.length < g) {
          const B = d + 1 + m;
          if (A && A.type === "deleted" && A._oldIndex === d - 1) {
            A.deleteToLineNumber++;
          } else {
            A = {
              type: "deleted",
              _oldIndex: d,
              deleteFromLineNumber: B,
              deleteToLineNumber: B
            };
            f.push(A);
          }
          m--;
        }
        d++;
      }
      let I;
      if (d < l && a[d] <= x) {
        I = a[d];
        d++;
      } else {
        if (w === 0) {
          I = 1;
        } else if (w + 1 === r) {
          I = t;
        } else {
          I = Math.round(w * s + o);
        }
        if (f.length < g) {
          const B = d + 1 + m;
          if (A && A.type === "inserted" && A._i === w - 1) {
            A.insertToLineNumber++;
          } else {
            A = {
              type: "inserted",
              _i: w,
              insertFromLineNumber: B,
              insertToLineNumber: B
            };
            f.push(A);
          }
          m++;
        }
      }
      u[w] = I;
      p = I;
    }
    if (f.length < g) {
      while (d < l) {
        const w = d + 1 + m;
        if (A && A.type === "deleted" && A._oldIndex === d - 1) {
          A.deleteToLineNumber++;
        } else {
          A = {
            type: "deleted",
            _oldIndex: d,
            deleteFromLineNumber: w,
            deleteToLineNumber: w
          };
          f.push(A);
        }
        m--;
        d++;
      }
    } else {
      f = [{
        type: "flush"
      }];
    }
    return [new Rad(s, u), f];
  }
  constructor(e, t) {
    this.samplingRatio = e;
    this.minimapLines = t;
  }
  modelLineToMinimapLine(e) {
    return Math.min(this.minimapLines.length, Math.max(1, Math.round(e / this.samplingRatio)));
  }
  modelLineRangeToMinimapLineRange(e, t) {
    let i = this.modelLineToMinimapLine(e) - 1;
    while (i > 0 && this.minimapLines[i - 1] >= e) {
      i--;
    }
    let r = this.modelLineToMinimapLine(t) - 1;
    while (r + 1 < this.minimapLines.length && this.minimapLines[r + 1] <= t) {
      r++;
    }
    if (i === r) {
      const s = this.minimapLines[i];
      if (s < e || s > t) {
        return null;
      }
    }
    return [i + 1, r + 1];
  }
  decorationLineRangeToMinimapLineRange(e, t) {
    let i = this.modelLineToMinimapLine(e);
    let r = this.modelLineToMinimapLine(t);
    if (e !== t && r === i) {
      if (r === this.minimapLines.length) {
        if (i > 1) {
          i--;
        }
      } else {
        r++;
      }
    }
    return [i, r];
  }
  onLinesDeleted(e) {
    const t = e.toLineNumber - e.fromLineNumber + 1;
    let i = this.minimapLines.length;
    let r = 0;
    for (let s = this.minimapLines.length - 1; s >= 0 && !(this.minimapLines[s] < e.fromLineNumber); s--) {
      if (this.minimapLines[s] <= e.toLineNumber) {
        this.minimapLines[s] = Math.max(1, e.fromLineNumber - 1);
        i = Math.min(i, s);
        r = Math.max(r, s);
      } else {
        this.minimapLines[s] -= t;
      }
    }
    return [i, r];
  }
  onLinesInserted(e) {
    const t = e.toLineNumber - e.fromLineNumber + 1;
    for (let i = this.minimapLines.length - 1; i >= 0 && !(this.minimapLines[i] < e.fromLineNumber); i--) {
      this.minimapLines[i] += t;
    }
  }
};
KAh = class extends yW {
  constructor(n) {
    super(n);
    this._sectionHeaderCache = new Fb(10, 1.5);
    this.tokensColorTracker = Kxc.getInstance();
    this._selections = [];
    this._minimapSelections = null;
    this.options = new KTc(this._context.configuration, this._context.theme, this.tokensColorTracker);
    const [e] = XTc.compute(this.options, this._context.viewModel.getLineCount(), null);
    this._samplingState = e;
    this._shouldCheckSampling = false;
    this._actual = new YAh(n.theme, this);
  }
  dispose() {
    this._actual.dispose();
    super.dispose();
  }
  getDomNode() {
    return this._actual.getDomNode();
  }
  _onOptionsMaybeChanged() {
    const n = new KTc(this._context.configuration, this._context.theme, this.tokensColorTracker);
    if (this.options.equals(n)) {
      return false;
    } else {
      this.options = n;
      this._recreateLineSampling();
      this._actual.onDidChangeOptions();
      return true;
    }
  }
  onConfigurationChanged(n) {
    return this._onOptionsMaybeChanged();
  }
  onCursorStateChanged(n) {
    this._selections = n.selections;
    this._minimapSelections = null;
    return this._actual.onSelectionChanged();
  }
  onDecorationsChanged(n) {
    if (n.affectsMinimap) {
      return this._actual.onDecorationsChanged();
    } else {
      return false;
    }
  }
  onFlushed(n) {
    if (this._samplingState) {
      this._shouldCheckSampling = true;
    }
    return this._actual.onFlushed();
  }
  onLinesChanged(n) {
    if (this._samplingState) {
      const e = this._samplingState.modelLineRangeToMinimapLineRange(n.fromLineNumber, n.fromLineNumber + n.count - 1);
      if (e) {
        return this._actual.onLinesChanged(e[0], e[1] - e[0] + 1);
      } else {
        return false;
      }
    } else {
      return this._actual.onLinesChanged(n.fromLineNumber, n.count);
    }
  }
  onLinesDeleted(n) {
    if (this._samplingState) {
      const [e, t] = this._samplingState.onLinesDeleted(n);
      if (e <= t) {
        this._actual.onLinesChanged(e + 1, t - e + 1);
      }
      this._shouldCheckSampling = true;
      return true;
    } else {
      return this._actual.onLinesDeleted(n.fromLineNumber, n.toLineNumber);
    }
  }
  onLinesInserted(n) {
    if (this._samplingState) {
      this._samplingState.onLinesInserted(n);
      this._shouldCheckSampling = true;
      return true;
    } else {
      return this._actual.onLinesInserted(n.fromLineNumber, n.toLineNumber);
    }
  }
  onScrollChanged(n) {
    return this._actual.onScrollChanged();
  }
  onThemeChanged(n) {
    this._actual.onThemeChanged();
    this._onOptionsMaybeChanged();
    return true;
  }
  onTokensChanged(n) {
    if (this._samplingState) {
      const e = [];
      for (const t of n.ranges) {
        const i = this._samplingState.modelLineRangeToMinimapLineRange(t.fromLineNumber, t.toLineNumber);
        if (i) {
          e.push({
            fromLineNumber: i[0],
            toLineNumber: i[1]
          });
        }
      }
      if (e.length) {
        return this._actual.onTokensChanged(e);
      } else {
        return false;
      }
    } else {
      return this._actual.onTokensChanged(n.ranges);
    }
  }
  onTokensColorsChanged(n) {
    this._onOptionsMaybeChanged();
    return this._actual.onTokensColorsChanged();
  }
  onZonesChanged(n) {
    return this._actual.onZonesChanged();
  }
  prepareRender(n) {
    if (this._shouldCheckSampling) {
      this._shouldCheckSampling = false;
      this._recreateLineSampling();
    }
  }
  render(n) {
    let e = n.visibleRange.startLineNumber;
    let t = n.visibleRange.endLineNumber;
    if (this._samplingState) {
      e = this._samplingState.modelLineToMinimapLine(e);
      t = this._samplingState.modelLineToMinimapLine(t);
    }
    const i = {
      viewportContainsWhitespaceGaps: n.viewportData.whitespaceViewportData.length > 0,
      scrollWidth: n.scrollWidth,
      scrollHeight: n.scrollHeight,
      viewportStartLineNumber: e,
      viewportEndLineNumber: t,
      viewportStartLineNumberVerticalOffset: n.getVerticalOffsetForLineNumber(e),
      scrollTop: n.scrollTop,
      scrollLeft: n.scrollLeft,
      viewportWidth: n.viewportWidth,
      viewportHeight: n.viewportHeight
    };
    this._actual.render(i);
  }
  _recreateLineSampling() {
    this._minimapSelections = null;
    const n = !!this._samplingState;
    const [e, t] = XTc.compute(this.options, this._context.viewModel.getLineCount(), this._samplingState);
    this._samplingState = e;
    if (n && this._samplingState) {
      for (const i of t) {
        switch (i.type) {
          case "deleted":
            this._actual.onLinesDeleted(i.deleteFromLineNumber, i.deleteToLineNumber);
            break;
          case "inserted":
            this._actual.onLinesInserted(i.insertFromLineNumber, i.insertToLineNumber);
            break;
          case "flush":
            this._actual.onFlushed();
            break;
        }
      }
    }
  }
  getLineCount() {
    if (this._samplingState) {
      return this._samplingState.minimapLines.length;
    } else {
      return this._context.viewModel.getLineCount();
    }
  }
  getRealLineCount() {
    return this._context.viewModel.getLineCount();
  }
  getLineContent(n) {
    if (this._samplingState) {
      return this._context.viewModel.getLineContent(this._samplingState.minimapLines[n - 1]);
    } else {
      return this._context.viewModel.getLineContent(n);
    }
  }
  getLineMaxColumn(n) {
    if (this._samplingState) {
      return this._context.viewModel.getLineMaxColumn(this._samplingState.minimapLines[n - 1]);
    } else {
      return this._context.viewModel.getLineMaxColumn(n);
    }
  }
  getMinimapLinesRenderingData(n, e, t) {
    if (this._samplingState) {
      const i = [];
      for (let r = 0, s = e - n + 1; r < s; r++) {
        if (t[r]) {
          i[r] = this._context.viewModel.getViewLineData(this._samplingState.minimapLines[n + r - 1]);
        } else {
          i[r] = null;
        }
      }
      return i;
    }
    return this._context.viewModel.getMinimapLinesRenderingData(n, e, t).data;
  }
  getSelections() {
    if (this._minimapSelections === null) {
      if (this._samplingState) {
        this._minimapSelections = [];
        for (const n of this._selections) {
          const [e, t] = this._samplingState.decorationLineRangeToMinimapLineRange(n.startLineNumber, n.endLineNumber);
          this._minimapSelections.push(new Vl(e, n.startColumn, t, n.endColumn));
        }
      } else {
        this._minimapSelections = this._selections;
      }
    }
    return this._minimapSelections;
  }
  getMinimapDecorationsInViewport(n, e) {
    return this._getMinimapDecorationsInViewport(n, e).filter(t => !t.options.minimap?.sectionHeaderStyle);
  }
  getSectionHeaderDecorationsInViewport(n, e) {
    const t = this.options.sectionHeaderFontSize / this.options.minimapLineHeight;
    n = Math.floor(Math.max(1, n - t));
    return this._getMinimapDecorationsInViewport(n, e).filter(i => !!i.options.minimap?.sectionHeaderStyle);
  }
  _getMinimapDecorationsInViewport(n, e) {
    let t;
    if (this._samplingState) {
      const r = this._samplingState.minimapLines[n - 1];
      const s = this._samplingState.minimapLines[e - 1];
      t = new Zt(r, 1, s, this._context.viewModel.getLineMaxColumn(s));
    } else {
      t = new Zt(n, 1, e, this._context.viewModel.getLineMaxColumn(e));
    }
    const i = this._context.viewModel.getMinimapDecorationsInRange(t);
    if (this._samplingState) {
      const r = [];
      for (const s of i) {
        if (!s.options.minimap) {
          continue;
        }
        const o = s.range;
        const a = this._samplingState.modelLineToMinimapLine(o.startLineNumber);
        const l = this._samplingState.modelLineToMinimapLine(o.endLineNumber);
        r.push(new Vxc(new Zt(a, o.startColumn, l, o.endColumn), s.options));
      }
      return r;
    }
    return i;
  }
  getSectionHeaderText(n, e) {
    const t = n.options.minimap?.sectionHeaderText;
    if (!t) {
      return null;
    }
    const i = this._sectionHeaderCache.get(t);
    if (i) {
      return i;
    }
    const r = e(t);
    this._sectionHeaderCache.set(t, r);
    return r;
  }
  getOptions() {
    return this._context.viewModel.model.getOptions();
  }
  revealLineNumber(n) {
    if (this._samplingState) {
      n = this._samplingState.minimapLines[n - 1];
    }
    this._context.viewModel.revealRange("mouse", false, new Zt(n, 1, n, 1), 1, 0);
  }
  setScrollTop(n) {
    this._context.viewModel.viewLayout.setScrollPosition({
      scrollTop: n
    }, 1);
  }
};
YAh = class gNi extends at {
  constructor(e, t) {
    super();
    this._renderDecorations = false;
    this._gestureInProgress = false;
    this._theme = e;
    this._model = t;
    this._lastRenderData = null;
    this._buffers = null;
    this._selectionColor = this._theme.getColor(k1c);
    this._domNode = mw(document.createElement("div"));
    tve.write(this._domNode, 9);
    this._domNode.setClassName(this._getMinimapDomNodeClassName());
    this._domNode.setPosition("absolute");
    this._domNode.setAttribute("role", "presentation");
    this._domNode.setAttribute("aria-hidden", "true");
    this._shadow = mw(document.createElement("div"));
    this._shadow.setClassName("minimap-shadow-hidden");
    this._domNode.appendChild(this._shadow);
    this._canvas = mw(document.createElement("canvas"));
    this._canvas.setPosition("absolute");
    this._canvas.setLeft(0);
    this._domNode.appendChild(this._canvas);
    this._decorationsCanvas = mw(document.createElement("canvas"));
    this._decorationsCanvas.setPosition("absolute");
    this._decorationsCanvas.setClassName("minimap-decorations-layer");
    this._decorationsCanvas.setLeft(0);
    this._domNode.appendChild(this._decorationsCanvas);
    this._slider = mw(document.createElement("div"));
    this._slider.setPosition("absolute");
    this._slider.setClassName("minimap-slider");
    this._slider.setLayerHinting(true);
    this._slider.setContain("strict");
    this._domNode.appendChild(this._slider);
    this._sliderHorizontal = mw(document.createElement("div"));
    this._sliderHorizontal.setPosition("absolute");
    this._sliderHorizontal.setClassName("minimap-slider-horizontal");
    this._slider.appendChild(this._sliderHorizontal);
    this._applyLayout();
    this._pointerDownListener = _f(this._domNode.domNode, ir.POINTER_DOWN, i => {
      i.preventDefault();
      if (this._model.options.renderMinimap === 0 || !this._lastRenderData) {
        return;
      }
      if (this._model.options.size !== "proportional") {
        if (i.button === 0 && this._lastRenderData) {
          const u = qS(this._slider.domNode);
          const d = u.top + u.height / 2;
          this._startSliderDragging(i, d, this._lastRenderData.renderedLayout);
        }
        return;
      }
      const s = this._model.options.minimapLineHeight;
      const o = this._model.options.canvasInnerHeight / this._model.options.canvasOuterHeight * i.offsetY;
      let l = Math.floor(o / s) + this._lastRenderData.renderedLayout.startLineNumber - this._lastRenderData.renderedLayout.topPaddingLineCount;
      l = Math.min(l, this._model.getLineCount());
      this._model.revealLineNumber(l);
    });
    this._sliderPointerMoveMonitor = new Jft();
    this._sliderPointerDownListener = _f(this._slider.domNode, ir.POINTER_DOWN, i => {
      i.preventDefault();
      i.stopPropagation();
      if (i.button === 0 && this._lastRenderData) {
        this._startSliderDragging(i, i.pageY, this._lastRenderData.renderedLayout);
      }
    });
    this._gestureDisposable = E1.addTarget(this._domNode.domNode);
    this._sliderTouchStartListener = ei(this._domNode.domNode, MA.Start, i => {
      i.preventDefault();
      i.stopPropagation();
      if (this._lastRenderData) {
        this._slider.toggleClassName("active", true);
        this._gestureInProgress = true;
        this.scrollDueToTouchEvent(i);
      }
    }, {
      passive: false
    });
    this._sliderTouchMoveListener = ei(this._domNode.domNode, MA.Change, i => {
      i.preventDefault();
      i.stopPropagation();
      if (this._lastRenderData && this._gestureInProgress) {
        this.scrollDueToTouchEvent(i);
      }
    }, {
      passive: false
    });
    this._sliderTouchEndListener = _f(this._domNode.domNode, MA.End, i => {
      i.preventDefault();
      i.stopPropagation();
      this._gestureInProgress = false;
      this._slider.toggleClassName("active", false);
    });
  }
  _startSliderDragging(e, t, i) {
    if (!e.target || !(e.target instanceof Element)) {
      return;
    }
    const r = e.pageX;
    this._slider.toggleClassName("active", true);
    const s = (o, a) => {
      const l = qS(this._domNode.domNode);
      const u = Math.min(Math.abs(a - r), Math.abs(a - l.left), Math.abs(a - l.left - l.width));
      if (Sc && u > QAh) {
        this._model.setScrollTop(i.scrollTop);
        return;
      }
      const d = o - t;
      this._model.setScrollTop(i.getDesiredScrollTopFromDelta(d));
    };
    if (e.pageY !== t) {
      s(e.pageY, r);
    }
    this._sliderPointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, o => s(o.pageY, o.pageX), () => {
      this._slider.toggleClassName("active", false);
    });
  }
  scrollDueToTouchEvent(e) {
    const t = this._domNode.domNode.getBoundingClientRect().top;
    const i = this._lastRenderData.renderedLayout.getDesiredScrollTopFromTouchLocation(e.pageY - t);
    this._model.setScrollTop(i);
  }
  dispose() {
    this._pointerDownListener.dispose();
    this._sliderPointerMoveMonitor.dispose();
    this._sliderPointerDownListener.dispose();
    this._gestureDisposable.dispose();
    this._sliderTouchStartListener.dispose();
    this._sliderTouchMoveListener.dispose();
    this._sliderTouchEndListener.dispose();
    super.dispose();
  }
  _getMinimapDomNodeClassName() {
    const e = ["minimap"];
    if (this._model.options.showSlider === "always") {
      e.push("slider-always");
    } else {
      e.push("slider-mouseover");
    }
    if (this._model.options.autohide) {
      e.push("autohide");
    }
    return e.join(" ");
  }
  getDomNode() {
    return this._domNode;
  }
  _applyLayout() {
    this._domNode.setLeft(this._model.options.minimapLeft);
    this._domNode.setWidth(this._model.options.minimapWidth);
    this._domNode.setHeight(this._model.options.minimapHeight);
    this._shadow.setHeight(this._model.options.minimapHeight);
    this._canvas.setWidth(this._model.options.canvasOuterWidth);
    this._canvas.setHeight(this._model.options.canvasOuterHeight);
    this._canvas.domNode.width = this._model.options.canvasInnerWidth;
    this._canvas.domNode.height = this._model.options.canvasInnerHeight;
    this._decorationsCanvas.setWidth(this._model.options.canvasOuterWidth);
    this._decorationsCanvas.setHeight(this._model.options.canvasOuterHeight);
    this._decorationsCanvas.domNode.width = this._model.options.canvasInnerWidth;
    this._decorationsCanvas.domNode.height = this._model.options.canvasInnerHeight;
    this._slider.setWidth(this._model.options.minimapWidth);
  }
  _getBuffer() {
    if (!this._buffers) {
      if (this._model.options.canvasInnerWidth > 0 && this._model.options.canvasInnerHeight > 0) {
        this._buffers = new VAh(this._canvas.domNode.getContext("2d"), this._model.options.canvasInnerWidth, this._model.options.canvasInnerHeight, this._model.options.backgroundColor);
      }
    }
    if (this._buffers) {
      return this._buffers.getBuffer();
    } else {
      return null;
    }
  }
  onDidChangeOptions() {
    this._lastRenderData = null;
    this._buffers = null;
    this._applyLayout();
    this._domNode.setClassName(this._getMinimapDomNodeClassName());
  }
  onSelectionChanged() {
    this._renderDecorations = true;
    return true;
  }
  onDecorationsChanged() {
    this._renderDecorations = true;
    return true;
  }
  onFlushed() {
    this._lastRenderData = null;
    return true;
  }
  onLinesChanged(e, t) {
    if (this._lastRenderData) {
      return this._lastRenderData.onLinesChanged(e, t);
    } else {
      return false;
    }
  }
  onLinesDeleted(e, t) {
    this._lastRenderData?.onLinesDeleted(e, t);
    return true;
  }
  onLinesInserted(e, t) {
    this._lastRenderData?.onLinesInserted(e, t);
    return true;
  }
  onScrollChanged() {
    this._renderDecorations = true;
    return true;
  }
  onThemeChanged() {
    this._selectionColor = this._theme.getColor(k1c);
    this._renderDecorations = true;
    return true;
  }
  onTokensChanged(e) {
    if (this._lastRenderData) {
      return this._lastRenderData.onTokensChanged(e);
    } else {
      return false;
    }
  }
  onTokensColorsChanged() {
    this._lastRenderData = null;
    this._buffers = null;
    return true;
  }
  onZonesChanged() {
    this._lastRenderData = null;
    return true;
  }
  render(e) {
    if (this._model.options.renderMinimap === 0) {
      this._shadow.setClassName("minimap-shadow-hidden");
      this._sliderHorizontal.setWidth(0);
      this._sliderHorizontal.setHeight(0);
      return;
    }
    if (e.scrollLeft + e.viewportWidth >= e.scrollWidth) {
      this._shadow.setClassName("minimap-shadow-hidden");
    } else {
      this._shadow.setClassName("minimap-shadow-visible");
    }
    const i = zAh.create(this._model.options, e.viewportStartLineNumber, e.viewportEndLineNumber, e.viewportStartLineNumberVerticalOffset, e.viewportHeight, e.viewportContainsWhitespaceGaps, this._model.getLineCount(), this._model.getRealLineCount(), e.scrollTop, e.scrollHeight, this._lastRenderData ? this._lastRenderData.renderedLayout : null);
    this._slider.setDisplay(i.sliderNeeded ? "block" : "none");
    this._slider.setTop(i.sliderTop);
    this._slider.setHeight(i.sliderHeight);
    this._sliderHorizontal.setLeft(0);
    this._sliderHorizontal.setWidth(this._model.options.minimapWidth);
    this._sliderHorizontal.setTop(0);
    this._sliderHorizontal.setHeight(i.sliderHeight);
    this.renderDecorations(i);
    this._lastRenderData = this.renderLines(i);
  }
  renderDecorations(e) {
    if (this._renderDecorations) {
      this._renderDecorations = false;
      const t = this._model.getSelections();
      t.sort(Zt.compareRangesUsingStarts);
      const i = this._model.getMinimapDecorationsInViewport(e.startLineNumber, e.endLineNumber);
      i.sort((p, g) => (p.options.zIndex || 0) - (g.options.zIndex || 0));
      const {
        canvasInnerWidth: r,
        canvasInnerHeight: s
      } = this._model.options;
      const o = this._model.options.minimapLineHeight;
      const a = this._model.options.minimapCharWidth;
      const l = this._model.getOptions().tabSize;
      const u = this._decorationsCanvas.domNode.getContext("2d");
      u.clearRect(0, 0, r, s);
      const d = new eIc(e.startLineNumber, e.endLineNumber, false);
      this._renderSelectionLineHighlights(u, t, d, e, o);
      this._renderDecorationsLineHighlights(u, i, d, e, o);
      const m = new eIc(e.startLineNumber, e.endLineNumber, null);
      this._renderSelectionsHighlights(u, t, m, e, o, l, a, r);
      this._renderDecorationsHighlights(u, i, m, e, o, l, a, r);
      this._renderSectionHeaders(e);
    }
  }
  _renderSelectionLineHighlights(e, t, i, r, s) {
    if (!this._selectionColor || this._selectionColor.isTransparent()) {
      return;
    }
    e.fillStyle = this._selectionColor.transparent(0.5).toString();
    let o = 0;
    let a = 0;
    for (const l of t) {
      const u = r.intersectWithViewport(l);
      if (!u) {
        continue;
      }
      const [d, m] = u;
      for (let f = d; f <= m; f++) {
        i.set(f, true);
      }
      const p = r.getYForLineNumber(d, s);
      const g = r.getYForLineNumber(m, s);
      if (!(a >= p)) {
        if (a > o) {
          e.fillRect(ISe, o, e.canvas.width, a - o);
        }
        o = p;
      }
      a = g;
    }
    if (a > o) {
      e.fillRect(ISe, o, e.canvas.width, a - o);
    }
  }
  _renderDecorationsLineHighlights(e, t, i, r, s) {
    const o = new Map();
    for (let a = t.length - 1; a >= 0; a--) {
      const l = t[a];
      const u = l.options.minimap;
      if (!u || u.position !== 1) {
        continue;
      }
      const d = r.intersectWithViewport(l.range);
      if (!d) {
        continue;
      }
      const [m, p] = d;
      const g = u.getColor(this._theme.value);
      if (!g || g.isTransparent()) {
        continue;
      }
      let f = o.get(g.toString());
      if (!f) {
        f = g.transparent(0.5).toString();
        o.set(g.toString(), f);
      }
      e.fillStyle = f;
      for (let A = m; A <= p; A++) {
        if (i.has(A)) {
          continue;
        }
        i.set(A, true);
        const w = r.getYForLineNumber(m, s);
        e.fillRect(ISe, w, e.canvas.width, s);
      }
    }
  }
  _renderSelectionsHighlights(e, t, i, r, s, o, a, l) {
    if (!!this._selectionColor && !this._selectionColor.isTransparent()) {
      for (const u of t) {
        const d = r.intersectWithViewport(u);
        if (!d) {
          continue;
        }
        const [m, p] = d;
        for (let g = m; g <= p; g++) {
          this.renderDecorationOnLine(e, i, u, this._selectionColor, r, g, s, s, o, a, l);
        }
      }
    }
  }
  _renderDecorationsHighlights(e, t, i, r, s, o, a, l) {
    for (const u of t) {
      const d = u.options.minimap;
      if (!d) {
        continue;
      }
      const m = r.intersectWithViewport(u.range);
      if (!m) {
        continue;
      }
      const [p, g] = m;
      const f = d.getColor(this._theme.value);
      if (!!f && !f.isTransparent()) {
        for (let A = p; A <= g; A++) {
          switch (d.position) {
            case 1:
              this.renderDecorationOnLine(e, i, u.range, f, r, A, s, s, o, a, l);
              continue;
            case 2:
              {
                const w = r.getYForLineNumber(A, s);
                this.renderDecoration(e, f, 2, w, jAh, s);
                continue;
              }
          }
        }
      }
    }
  }
  renderDecorationOnLine(e, t, i, r, s, o, a, l, u, d, m) {
    const p = s.getYForLineNumber(o, l);
    if (p + a < 0 || p > this._model.options.canvasInnerHeight) {
      return;
    }
    const {
      startLineNumber: g,
      endLineNumber: f
    } = i;
    const A = g === o ? i.startColumn : 1;
    const w = f === o ? i.endColumn : this._model.getLineMaxColumn(o);
    const C = this.getXOffsetForPosition(t, o, A, u, d, m);
    const x = this.getXOffsetForPosition(t, o, w, u, d, m);
    this.renderDecoration(e, r, C, p, x - C, a);
  }
  getXOffsetForPosition(e, t, i, r, s, o) {
    if (i === 1) {
      return ISe;
    }
    if ((i - 1) * s >= o) {
      return o;
    }
    let l = e.get(t);
    if (!l) {
      const u = this._model.getLineContent(t);
      l = [ISe];
      let d = ISe;
      for (let m = 1; m < u.length + 1; m++) {
        const p = u.charCodeAt(m - 1);
        const g = p === 9 ? r * s : Ize(p) ? s * 2 : s;
        const f = d + g;
        if (f >= o) {
          l[m] = o;
          break;
        }
        l[m] = f;
        d = f;
      }
      e.set(t, l);
    }
    if (i - 1 < l.length) {
      return l[i - 1];
    } else {
      return o;
    }
  }
  renderDecoration(e, t, i, r, s, o) {
    e.fillStyle = t && t.toString() || "";
    e.fillRect(i, r, s, o);
  }
  _renderSectionHeaders(e) {
    const t = this._model.options.minimapLineHeight;
    const i = this._model.options.sectionHeaderFontSize;
    const r = this._model.options.sectionHeaderLetterSpacing;
    const s = i * 1.5;
    const {
      canvasInnerWidth: o
    } = this._model.options;
    const a = this._model.options.backgroundColor;
    const l = `rgb(${a.r} ${a.g} ${a.b} / .7)`;
    const u = this._model.options.sectionHeaderFontColor;
    const d = `rgb(${u.r} ${u.g} ${u.b})`;
    const m = d;
    const p = this._decorationsCanvas.domNode.getContext("2d");
    p.letterSpacing = r + "px";
    p.font = "500 " + i + "px " + this._model.options.sectionHeaderFontFamily;
    p.strokeStyle = m;
    p.lineWidth = 0.2;
    const g = this._model.getSectionHeaderDecorationsInViewport(e.startLineNumber, e.endLineNumber);
    g.sort((A, w) => A.range.startLineNumber - w.range.startLineNumber);
    const f = gNi._fitSectionHeader.bind(null, p, o - ISe);
    for (const A of g) {
      const w = e.getYForLineNumber(A.range.startLineNumber, t) + i;
      const C = w - i;
      const x = C + 2;
      const I = this._model.getSectionHeaderText(A, f);
      gNi._renderSectionLabel(p, I, A.options.minimap?.sectionHeaderStyle === 2, l, d, o, C, s, w, x);
    }
  }
  static _fitSectionHeader(e, t, i) {
    if (!i) {
      return i;
    }
    const r = "…";
    const s = e.measureText(i).width;
    const o = e.measureText(r).width;
    if (s <= t || s <= o) {
      return i;
    }
    const a = i.length;
    const l = s / i.length;
    const u = Math.floor((t - o) / l) - 1;
    let d = Math.ceil(u / 2);
    while (d > 0 && /\s/.test(i[d - 1])) {
      --d;
    }
    return i.substring(0, d) + r + i.substring(a - (u - d));
  }
  static _renderSectionLabel(e, t, i, r, s, o, a, l, u, d) {
    if (t) {
      e.fillStyle = r;
      e.fillRect(0, a, o, l);
      e.fillStyle = s;
      e.fillText(t, ISe, u);
    }
    if (i) {
      e.beginPath();
      e.moveTo(0, d);
      e.lineTo(o, d);
      e.closePath();
      e.stroke();
    }
  }
  renderLines(e) {
    const t = e.startLineNumber;
    const i = e.endLineNumber;
    const r = this._model.options.minimapLineHeight;
    if (this._lastRenderData && this._lastRenderData.linesEquals(e)) {
      const X = this._lastRenderData._get();
      return new ZTc(e, X.imageData, X.lines);
    }
    const s = this._getBuffer();
    if (!s) {
      return null;
    }
    const [o, a, l] = gNi._renderUntouchedLines(s, e.topPaddingLineCount, t, i, r, this._lastRenderData);
    const u = this._model.getMinimapLinesRenderingData(t, i, l);
    const d = this._model.getOptions().tabSize;
    const m = this._model.options.defaultBackgroundColor;
    const p = this._model.options.backgroundColor;
    const g = this._model.options.foregroundAlpha;
    const f = this._model.tokensColorTracker;
    const A = f.backgroundIsLight();
    const w = this._model.options.renderMinimap;
    const C = this._model.options.charRenderer();
    const x = this._model.options.fontScale;
    const I = this._model.options.minimapCharWidth;
    const R = (w === 1 ? 2 : 3) * x;
    const N = r > R ? Math.floor((r - R) / 2) : 0;
    const M = p.a / 255;
    const O = new OVe(Math.round((p.r - m.r) * M + m.r), Math.round((p.g - m.g) * M + m.g), Math.round((p.b - m.b) * M + m.b), 255);
    let $ = e.topPaddingLineCount * r;
    const H = [];
    for (let X = 0, ee = i - t + 1; X < ee; X++) {
      if (l[X]) {
        gNi._renderLine(s, O, p.a, A, w, I, f, g, C, $, N, d, u[X], x, r);
      }
      H[X] = new YTc($);
      $ += r;
    }
    const W = o === -1 ? 0 : o;
    const Y = (a === -1 ? s.height : a) - W;
    this._canvas.domNode.getContext("2d").putImageData(s, 0, 0, 0, W, s.width, Y);
    return new ZTc(e, s, H);
  }
  static _renderUntouchedLines(e, t, i, r, s, o) {
    const a = [];
    if (!o) {
      for (let $ = 0, H = r - i + 1; $ < H; $++) {
        a[$] = true;
      }
      return [-1, -1, a];
    }
    const l = o._get();
    const u = l.imageData.data;
    const d = l.rendLineNumberStart;
    const m = l.lines;
    const p = m.length;
    const g = e.width;
    const f = e.data;
    const A = (r - i + 1) * s * g * 4;
    let w = -1;
    let C = -1;
    let x = -1;
    let I = -1;
    let B = -1;
    let R = -1;
    let N = t * s;
    for (let $ = i; $ <= r; $++) {
      const H = $ - i;
      const W = $ - d;
      const z = W >= 0 && W < p ? m[W].dy : -1;
      if (z === -1) {
        a[H] = true;
        N += s;
        continue;
      }
      const Y = z * g * 4;
      const j = (z + s) * g * 4;
      const X = N * g * 4;
      const ee = (N + s) * g * 4;
      if (I === Y && R === X) {
        I = j;
        R = ee;
      } else {
        if (x !== -1) {
          f.set(u.subarray(x, I), B);
          if (w === -1 && x === 0 && x === B) {
            w = I;
          }
          if (C === -1 && I === A && x === B) {
            C = x;
          }
        }
        x = Y;
        I = j;
        B = X;
        R = ee;
      }
      a[H] = false;
      N += s;
    }
    if (x !== -1) {
      f.set(u.subarray(x, I), B);
      if (w === -1 && x === 0 && x === B) {
        w = I;
      }
      if (C === -1 && I === A && x === B) {
        C = x;
      }
    }
    const M = w === -1 ? -1 : w / (g * 4);
    const O = C === -1 ? -1 : C / (g * 4);
    return [M, O, a];
  }
  static _renderLine(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A) {
    const w = g.content;
    const C = g.tokens;
    const x = e.width - o;
    const I = A === 1;
    let B = ISe;
    let R = 0;
    let N = 0;
    for (let M = 0, O = C.getCount(); M < O; M++) {
      const $ = C.getEndOffset(M);
      const H = C.getForeground(M);
      const W = a.getColor(H);
      for (; R < $; R++) {
        if (B > x) {
          return;
        }
        const z = w.charCodeAt(R);
        if (z === 9) {
          const Y = p - (R + N) % p;
          N += Y - 1;
          B += Y * o;
        } else if (z === 32) {
          B += o;
        } else {
          const Y = Ize(z) ? 2 : 1;
          for (let j = 0; j < Y; j++) {
            if (s === 2) {
              u.blockRenderChar(e, B, d + m, W, l, t, i, I);
            } else {
              u.renderChar(e, B, d + m, z, W, l, t, i, f, r, I);
            }
            B += o;
            if (B > x) {
              return;
            }
          }
        }
      }
    }
  }
};
eIc = class {
  constructor(n, e, t) {
    this._startLineNumber = n;
    this._endLineNumber = e;
    this._defaultValue = t;
    this._values = [];
    for (let i = 0, r = this._endLineNumber - this._startLineNumber + 1; i < r; i++) {
      this._values[i] = t;
    }
  }
  has(n) {
    return this.get(n) !== this._defaultValue;
  }
  set(n, e) {
    if (!(n < this._startLineNumber) && !(n > this._endLineNumber)) {
      this._values[n - this._startLineNumber] = e;
    }
  }
  get(n) {
    if (n < this._startLineNumber || n > this._endLineNumber) {
      return this._defaultValue;
    } else {
      return this._values[n - this._startLineNumber];
    }
  }
};
