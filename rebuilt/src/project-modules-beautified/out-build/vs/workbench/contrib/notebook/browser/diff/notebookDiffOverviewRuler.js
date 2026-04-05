"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/diff/notebookDiffOverviewRuler.js
// Offset: 33622443 (bundle byte offset)
// Size: 4150 bytes
ri();
sI();
Nte();
xf();
rt();
Nl();
Io();
I6f = 20;
yIa = class extends NH {
  constructor(e, t, i, r) {
    super(r);
    this.notebookEditor = e;
    this.width = t;
    this._diffElementViewModels = [];
    this._lanes = 2;
    this._insertColor = null;
    this._removeColor = null;
    this._insertColorHex = null;
    this._removeColorHex = null;
    this._disposables = this._register(new Ut());
    this._renderAnimationFrame = null;
    this._domNode = mw(document.createElement("canvas"));
    this._domNode.setPosition("relative");
    this._domNode.setLayerHinting(true);
    this._domNode.setContain("strict");
    i.appendChild(this._domNode.domNode);
    this._overviewViewportDomElement = mw(document.createElement("div"));
    this._overviewViewportDomElement.setClassName("diffViewport");
    this._overviewViewportDomElement.setPosition("absolute");
    this._overviewViewportDomElement.setWidth(t);
    i.appendChild(this._overviewViewportDomElement.domNode);
    this._register(M6.getInstance(As(this._domNode.domNode)).onDidChange(() => {
      this._scheduleRender();
    }));
    this._register(this.themeService.onDidColorThemeChange(s => {
      if (this.applyColors(s)) {
        this._scheduleRender();
      }
    }));
    this.applyColors(this.themeService.getColorTheme());
    this._register(this.notebookEditor.onDidScroll(() => {
      this._renderOverviewViewport();
    }));
    this._register(_f(i, ir.POINTER_DOWN, s => {
      this.notebookEditor.delegateVerticalScrollbarPointerDown(s);
    }));
  }
  applyColors(e) {
    const t = e.getColor(b1c) || (e.getColor(_9) || M4n).transparent(2);
    const i = e.getColor(v1c) || (e.getColor(R6) || F4n).transparent(2);
    const r = !t.equals(this._insertColor) || !i.equals(this._removeColor);
    this._insertColor = t;
    this._removeColor = i;
    if (this._insertColor) {
      this._insertColorHex = Xr.Format.CSS.formatHexA(this._insertColor);
    }
    if (this._removeColor) {
      this._removeColorHex = Xr.Format.CSS.formatHexA(this._removeColor);
    }
    return r;
  }
  layout() {
    this._layoutNow();
  }
  updateViewModels(e, t) {
    this._disposables.clear();
    this._diffElementViewModels = e;
    if (t) {
      this._disposables.add(t.onDidChangeLayout(() => {
        this._scheduleRender();
      }));
      this._disposables.add(t.onDidChangeCellLayout(() => {
        this._scheduleRender();
      }));
    }
    this._scheduleRender();
  }
  _scheduleRender() {
    if (this._renderAnimationFrame === null) {
      this._renderAnimationFrame = I5e(As(this._domNode.domNode), this._onRenderScheduled.bind(this), 16);
    }
  }
  _onRenderScheduled() {
    this._renderAnimationFrame = null;
    this._layoutNow();
  }
  _layoutNow() {
    const t = this.notebookEditor.getLayoutInfo().height;
    const i = this._diffElementViewModels.map(o => o.totalHeight).reduce((o, a) => o + a, 0);
    const r = M6.getInstance(As(this._domNode.domNode)).value;
    this._domNode.setWidth(this.width);
    this._domNode.setHeight(t);
    this._domNode.domNode.width = this.width * r;
    this._domNode.domNode.height = t * r;
    const s = this._domNode.domNode.getContext("2d");
    s.clearRect(0, 0, this.width * r, t * r);
    this._renderCanvas(s, this.width * r, t * r, i * r, r);
    this._renderOverviewViewport();
  }
  _renderOverviewViewport() {
    const e = this._computeOverviewViewport();
    if (e) {
      this._overviewViewportDomElement.setTop(e.top);
      this._overviewViewportDomElement.setHeight(e.height);
    } else {
      this._overviewViewportDomElement.setTop(0);
      this._overviewViewportDomElement.setHeight(0);
    }
  }
  _computeOverviewViewport() {
    const e = this.notebookEditor.getLayoutInfo();
    if (!e) {
      return null;
    }
    const t = this.notebookEditor.getScrollTop();
    const i = this.notebookEditor.getScrollHeight();
    const r = Math.max(0, e.height);
    const s = Math.max(0, r - 0);
    const o = e.height;
    const a = Math.round(Math.max(I6f, Math.floor(o * s / i)));
    const l = (s - a) / (i - o);
    const u = Math.round(t * l);
    return {
      height: a,
      top: u
    };
  }
  _renderCanvas(e, t, i, r, s) {
    if (!this._insertColorHex || !this._removeColorHex) {
      return;
    }
    const o = t / this._lanes;
    let a = 0;
    for (let l = 0; l < this._diffElementViewModels.length; l++) {
      const u = this._diffElementViewModels[l];
      const d = Math.round(u.totalHeight / r * s * i);
      switch (u.type) {
        case "insert":
          e.fillStyle = this._insertColorHex;
          e.fillRect(o, a, o, d);
          break;
        case "delete":
          e.fillStyle = this._removeColorHex;
          e.fillRect(0, a, o, d);
          break;
        case "unchanged":
        case "unchangedMetadata":
          break;
        case "modified":
        case "modifiedMetadata":
          e.fillStyle = this._removeColorHex;
          e.fillRect(0, a, o, d);
          e.fillStyle = this._insertColorHex;
          e.fillRect(o, a, o, d);
          break;
      }
      a += d;
    }
  }
  dispose() {
    if (this._renderAnimationFrame !== null) {
      this._renderAnimationFrame.dispose();
      this._renderAnimationFrame = null;
    }
    super.dispose();
  }
};
yIa = __decorate([__param(3, bo)], yIa);
