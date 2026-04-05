"use strict";

// Module: out-build/vs/editor/contrib/zoneWidget/browser/zoneWidget.js
// Offset: 24752150 (bundle byte offset)
// Size: 8770 bytes
ri();
KC();
jSe();
xf();
_3t();
rt();
np();
o0A();
ts();
bv();
TGl = new Xr(new Sa(0, 122, 204));
dpg = {
  showArrow: true,
  showFrame: true,
  className: "",
  frameColor: TGl,
  arrowColor: TGl,
  keepEditorSelection: false,
  moveToLineWhenShown: true
};
hpg = "vs.editor.contrib.zoneWidget";
mpg = class {
  constructor(n, e, t, i, r, s, o, a) {
    this.id = "";
    this.domNode = n;
    this.afterLineNumber = e;
    this.afterColumn = t;
    this.heightInLines = i;
    this.showInHiddenAreas = o;
    this.ordinal = a;
    this._onDomNodeTop = r;
    this._onComputedHeight = s;
  }
  onDomNodeTop(n) {
    this._onDomNodeTop(n);
  }
  onComputedHeight(n) {
    this._onComputedHeight(n);
  }
};
ppg = class {
  constructor(n, e) {
    this._id = n;
    this._domNode = e;
  }
  getId() {
    return this._id;
  }
  getDomNode() {
    return this._domNode;
  }
  getPosition() {
    return null;
  }
};
gpg = class BWb {
  static {
    this._IdGenerator = new G3o(".arrow-decoration-");
  }
  constructor(e) {
    this._editor = e;
    this._ruleName = BWb._IdGenerator.nextId();
    this._color = null;
    this._height = -1;
    this._decorations = this._editor.createDecorationsCollection();
  }
  dispose() {
    this.hide();
    k5e(this._ruleName);
  }
  set color(e) {
    if (this._color !== e) {
      this._color = e;
      this._updateStyle();
    }
  }
  set height(e) {
    if (this._height !== e) {
      this._height = e;
      this._updateStyle();
    }
  }
  _updateStyle() {
    k5e(this._ruleName);
    uW(`.monaco-editor ${this._ruleName}`, `border-style: solid; border-color: transparent; border-bottom-color: ${this._color}; border-width: ${this._height}px; bottom: -${this._height}px !important; margin-left: -${this._height}px; `);
  }
  show(e) {
    if (e.column === 1) {
      e = {
        lineNumber: e.lineNumber,
        column: 2
      };
    }
    this._decorations.set([{
      range: Zt.fromPositions(e),
      options: {
        description: "zone-widget-arrow",
        className: this._ruleName,
        stickiness: 1
      }
    }]);
  }
  hide() {
    this._decorations.clear();
  }
};
nCt = class {
  constructor(n, e = {}) {
    this._arrow = null;
    this._overlayWidget = null;
    this._resizeSash = null;
    this._isSashResizeHeight = false;
    this._viewZone = null;
    this._disposables = new Ut();
    this.container = null;
    this._isShowing = false;
    this.editor = n;
    this._positionMarkerId = this.editor.createDecorationsCollection();
    this.options = mh(e);
    f3(this.options, dpg, false);
    this.domNode = document.createElement("div");
    if (!this.options.isAccessible) {
      this.domNode.setAttribute("aria-hidden", "true");
      this.domNode.setAttribute("role", "presentation");
    }
    this._disposables.add(this.editor.onDidLayoutChange(t => {
      const i = this._getWidth(t);
      this.domNode.style.width = i + "px";
      this.domNode.style.left = this._getLeft(t) + "px";
      this._onWidth(i);
    }));
  }
  dispose() {
    if (this._overlayWidget) {
      this.editor.removeOverlayWidget(this._overlayWidget);
      this._overlayWidget = null;
    }
    if (this._viewZone) {
      this.editor.changeViewZones(n => {
        if (this._viewZone) {
          n.removeZone(this._viewZone.id);
        }
        this._viewZone = null;
      });
    }
    this._positionMarkerId.clear();
    this._disposables.dispose();
  }
  create() {
    this.domNode.classList.add("zone-widget");
    if (this.options.className) {
      this.domNode.classList.add(this.options.className);
    }
    this.container = document.createElement("div");
    this.container.classList.add("zone-widget-container");
    this.domNode.appendChild(this.container);
    if (this.options.showArrow) {
      this._arrow = new gpg(this.editor);
      this._disposables.add(this._arrow);
    }
    this._fillContainer(this.container);
    this._initSash();
    this._applyStyles();
  }
  style(n) {
    if (n.frameColor) {
      this.options.frameColor = n.frameColor;
    }
    if (n.arrowColor) {
      this.options.arrowColor = n.arrowColor;
    }
    this._applyStyles();
  }
  _applyStyles() {
    if (this.container && this.options.frameColor) {
      const n = this.options.frameColor.toString();
      this.container.style.borderTopColor = n;
      this.container.style.borderBottomColor = n;
    }
    if (this._arrow && this.options.arrowColor) {
      const n = this.options.arrowColor.toString();
      this._arrow.color = n;
    }
  }
  _getWidth(n) {
    return n.width - n.minimap.minimapWidth - n.verticalScrollbarWidth;
  }
  _getLeft(n) {
    if (n.minimap.minimapWidth > 0 && n.minimap.minimapLeft === 0) {
      return n.minimap.minimapWidth;
    } else {
      return 0;
    }
  }
  _onViewZoneTop(n) {
    this.domNode.style.top = n + "px";
  }
  _onViewZoneHeight(n) {
    this.domNode.style.height = `${n}px`;
    if (this.container) {
      const e = n - this._decoratingElementsHeight();
      this.container.style.height = `${e}px`;
      const t = this.editor.getLayoutInfo();
      this._doLayout(e, this._getWidth(t));
    }
    this._resizeSash?.layout();
  }
  get position() {
    const n = this._positionMarkerId.getRange(0);
    if (n) {
      return n.getStartPosition();
    }
  }
  hasFocus() {
    return this.domNode.contains(_C());
  }
  show(n, e) {
    const t = Zt.isIRange(n) ? Zt.lift(n) : Zt.fromPositions(n);
    this._isShowing = true;
    this._showImpl(t, e);
    this._isShowing = false;
    this._positionMarkerId.set([{
      range: t,
      options: Zh.EMPTY
    }]);
  }
  updatePositionAndHeight(n, e) {
    if (this._viewZone) {
      n = Zt.isIRange(n) ? Zt.getStartPosition(n) : n;
      this._viewZone.afterLineNumber = n.lineNumber;
      this._viewZone.afterColumn = n.column;
      this._viewZone.heightInLines = e ?? this._viewZone.heightInLines;
      this.editor.changeViewZones(t => {
        t.layoutZone(this._viewZone.id);
      });
      this._positionMarkerId.set([{
        range: Zt.isIRange(n) ? n : Zt.fromPositions(n),
        options: Zh.EMPTY
      }]);
      this._updateSashEnablement();
    }
  }
  hide() {
    if (this._viewZone) {
      this.editor.changeViewZones(n => {
        if (this._viewZone) {
          n.removeZone(this._viewZone.id);
        }
      });
      this._viewZone = null;
    }
    if (this._overlayWidget) {
      this.editor.removeOverlayWidget(this._overlayWidget);
      this._overlayWidget = null;
    }
    this._arrow?.hide();
    this._positionMarkerId.clear();
    this._isSashResizeHeight = false;
  }
  _decoratingElementsHeight() {
    const n = this.editor.getOption(68);
    let e = 0;
    if (this.options.showArrow) {
      const t = Math.round(n / 3);
      e += t * 2;
    }
    if (this.options.showFrame) {
      const t = Math.round(n / 9);
      e += t * 2;
    }
    return e;
  }
  _getMaximumHeightInLines() {
    return Math.max(12, this.editor.getLayoutInfo().height / this.editor.getOption(68) * 0.8);
  }
  _showImpl(n, e) {
    const t = n.getStartPosition();
    const i = this.editor.getLayoutInfo();
    const r = this._getWidth(i);
    this.domNode.style.width = `${r}px`;
    this.domNode.style.left = this._getLeft(i) + "px";
    const s = document.createElement("div");
    s.style.overflow = "hidden";
    const o = this.editor.getOption(68);
    const a = this._getMaximumHeightInLines();
    if (a !== undefined) {
      e = Math.min(e, a);
    }
    let l = 0;
    let u = 0;
    if (this._arrow && this.options.showArrow) {
      l = Math.round(o / 3);
      this._arrow.height = l;
      this._arrow.show(t);
    }
    if (this.options.showFrame) {
      u = Math.round(o / 9);
    }
    this.editor.changeViewZones(p => {
      if (this._viewZone) {
        p.removeZone(this._viewZone.id);
      }
      if (this._overlayWidget) {
        this.editor.removeOverlayWidget(this._overlayWidget);
        this._overlayWidget = null;
      }
      this.domNode.style.top = "-1000px";
      this._viewZone = new mpg(s, t.lineNumber, t.column, e, g => this._onViewZoneTop(g), g => this._onViewZoneHeight(g), this.options.showInHiddenAreas, this.options.ordinal);
      this._viewZone.id = p.addZone(this._viewZone);
      this._overlayWidget = new ppg(hpg + this._viewZone.id, this.domNode);
      this.editor.addOverlayWidget(this._overlayWidget);
    });
    this._updateSashEnablement();
    if (this.container && this.options.showFrame) {
      const p = this.options.frameWidth ? this.options.frameWidth : u;
      this.container.style.borderTopWidth = p + "px";
      this.container.style.borderBottomWidth = p + "px";
    }
    const d = e * o - this._decoratingElementsHeight();
    if (this.container) {
      this.container.style.top = l + "px";
      this.container.style.height = d + "px";
      this.container.style.overflow = "hidden";
    }
    this._doLayout(d, r);
    if (!this.options.keepEditorSelection) {
      this.editor.setSelection(n);
    }
    const m = this.editor.getModel();
    if (m && this.options.moveToLineWhenShown) {
      const p = m.validateRange(new Zt(n.startLineNumber, 1, n.endLineNumber + 1, 1));
      this.revealRange(p, p.startLineNumber === m.getLineCount());
    }
  }
  revealRange(n, e) {
    if (e) {
      this.editor.revealLineNearTop(n.endLineNumber, 0);
    } else {
      this.editor.revealRange(n, 0);
    }
  }
  setCssClass(n, e) {
    if (this.container) {
      if (e) {
        this.container.classList.remove(e);
      }
      this.container.classList.add(n);
    }
  }
  _onWidth(n) {}
  _doLayout(n, e) {}
  _relayout(n, e) {
    const t = this._getMaximumHeightInLines();
    const i = e && t !== undefined ? Math.min(t, n) : n;
    if (this._viewZone && this._viewZone.heightInLines !== i) {
      this.editor.changeViewZones(r => {
        if (this._viewZone) {
          this._viewZone.heightInLines = i;
          r.layoutZone(this._viewZone.id);
        }
      });
      this._updateSashEnablement();
    }
  }
  _initSash() {
    if (this._resizeSash) {
      return;
    }
    this._resizeSash = this._disposables.add(new Qde(this.domNode, this, {
      orientation: 1
    }));
    if (!this.options.isResizeable) {
      this._resizeSash.state = 0;
    }
    let n;
    this._disposables.add(this._resizeSash.onDidStart(e => {
      if (this._viewZone) {
        n = {
          startY: e.startY,
          heightInLines: this._viewZone.heightInLines,
          ...this._getResizeBounds()
        };
      }
    }));
    this._disposables.add(this._resizeSash.onDidEnd(() => {
      n = undefined;
    }));
    this._disposables.add(this._resizeSash.onDidChange(e => {
      if (n) {
        const t = (e.currentY - n.startY) / this.editor.getOption(68);
        const i = t < 0 ? Math.ceil(t) : Math.floor(t);
        const r = n.heightInLines + i;
        if (r > n.minLines && r < n.maxLines) {
          this._isSashResizeHeight = true;
          this._relayout(r);
        }
      }
    }));
  }
  _updateSashEnablement() {
    if (this._resizeSash) {
      const {
        minLines: n,
        maxLines: e
      } = this._getResizeBounds();
      this._resizeSash.state = n === e ? 0 : 3;
    }
  }
  get _usesResizeHeight() {
    return this._isSashResizeHeight;
  }
  _getResizeBounds() {
    return {
      minLines: 5,
      maxLines: 35
    };
  }
  getHorizontalSashLeft() {
    return 0;
  }
  getHorizontalSashTop() {
    return (this.domNode.style.height === null ? 0 : parseInt(this.domNode.style.height)) - this._decoratingElementsHeight() / 2;
  }
  getHorizontalSashWidth() {
    const n = this.editor.getLayoutInfo();
    return n.width - n.minimap.minimapWidth;
  }
};
