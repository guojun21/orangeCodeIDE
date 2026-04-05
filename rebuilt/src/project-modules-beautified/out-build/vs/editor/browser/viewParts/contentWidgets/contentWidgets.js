"use strict";

// Module: out-build/vs/editor/browser/viewParts/contentWidgets/contentWidgets.js
// Offset: 1614264 (bundle byte offset)
// Size: 9453 bytes
ri();
sI();
j$();
vAh = class extends yW {
  constructor(n, e) {
    super(n);
    this._viewDomNode = e;
    this._widgets = {};
    this.domNode = mw(document.createElement("div"));
    tve.write(this.domNode, 1);
    this.domNode.setClassName("contentWidgets");
    this.domNode.setPosition("absolute");
    this.domNode.setTop(0);
    this.overflowingContentWidgetsDomNode = mw(document.createElement("div"));
    tve.write(this.overflowingContentWidgetsDomNode, 2);
    this.overflowingContentWidgetsDomNode.setClassName("overflowingContentWidgets");
  }
  dispose() {
    super.dispose();
    this._widgets = {};
  }
  onConfigurationChanged(n) {
    const e = Object.keys(this._widgets);
    for (const t of e) {
      this._widgets[t].onConfigurationChanged(n);
    }
    return true;
  }
  onDecorationsChanged(n) {
    return true;
  }
  onFlushed(n) {
    return true;
  }
  onLineMappingChanged(n) {
    this._updateAnchorsViewPositions();
    return true;
  }
  onLinesChanged(n) {
    this._updateAnchorsViewPositions();
    return true;
  }
  onLinesDeleted(n) {
    this._updateAnchorsViewPositions();
    return true;
  }
  onLinesInserted(n) {
    this._updateAnchorsViewPositions();
    return true;
  }
  onScrollChanged(n) {
    return true;
  }
  onZonesChanged(n) {
    return true;
  }
  _updateAnchorsViewPositions() {
    const n = Object.keys(this._widgets);
    for (const e of n) {
      this._widgets[e].updateAnchorViewPosition();
    }
  }
  addWidget(n) {
    const e = new AAh(this._context, this._viewDomNode, n);
    this._widgets[e.id] = e;
    if (e.allowEditorOverflow) {
      this.overflowingContentWidgetsDomNode.appendChild(e.domNode);
    } else {
      this.domNode.appendChild(e.domNode);
    }
    this.setShouldRender();
  }
  setWidgetPosition(n, e, t, i, r) {
    this._widgets[n.getId()].setPosition(e, t, i, r);
    this.setShouldRender();
  }
  removeWidget(n) {
    const e = n.getId();
    if (this._widgets.hasOwnProperty(e)) {
      const t = this._widgets[e];
      delete this._widgets[e];
      const i = t.domNode.domNode;
      i.remove();
      i.removeAttribute("monaco-visible-content-widget");
      this.setShouldRender();
    }
  }
  shouldSuppressMouseDownOnWidget(n) {
    if (this._widgets.hasOwnProperty(n)) {
      return this._widgets[n].suppressMouseDown;
    } else {
      return false;
    }
  }
  onBeforeRender(n) {
    const e = Object.keys(this._widgets);
    for (const t of e) {
      this._widgets[t].onBeforeRender(n);
    }
  }
  prepareRender(n) {
    const e = Object.keys(this._widgets);
    for (const t of e) {
      this._widgets[t].prepareRender(n);
    }
  }
  render(n) {
    const e = Object.keys(this._widgets);
    for (const t of e) {
      this._widgets[t].render(n);
    }
  }
};
AAh = class {
  constructor(n, e, t) {
    this._primaryAnchor = new r3t(null, null);
    this._secondaryAnchor = new r3t(null, null);
    this._context = n;
    this._viewDomNode = e;
    this._actual = t;
    this.domNode = mw(this._actual.getDomNode());
    this.id = this._actual.getId();
    this.allowEditorOverflow = this._actual.allowEditorOverflow || false;
    this.suppressMouseDown = this._actual.suppressMouseDown || false;
    const i = this._context.configuration.options;
    const r = i.get(151);
    this._fixedOverflowWidgets = i.get(44);
    this._contentWidth = r.contentWidth;
    this._contentLeft = r.contentLeft;
    this._lineHeight = i.get(68);
    this._affinity = null;
    this._preference = [];
    this._cachedDomNodeOffsetWidth = -1;
    this._cachedDomNodeOffsetHeight = -1;
    this._maxWidth = this._getMaxWidth();
    this._isVisible = false;
    this._renderData = null;
    this.domNode.setPosition(this._fixedOverflowWidgets && this.allowEditorOverflow ? "fixed" : "absolute");
    this.domNode.setDisplay("none");
    this.domNode.setVisibility("hidden");
    this.domNode.setAttribute("widgetId", this.id);
    this.domNode.setMaxWidth(this._maxWidth);
  }
  onConfigurationChanged(n) {
    const e = this._context.configuration.options;
    this._lineHeight = e.get(68);
    if (n.hasChanged(151)) {
      const t = e.get(151);
      this._contentLeft = t.contentLeft;
      this._contentWidth = t.contentWidth;
      this._maxWidth = this._getMaxWidth();
    }
  }
  updateAnchorViewPosition() {
    this._setPosition(this._affinity, this._primaryAnchor.modelPosition, this._secondaryAnchor.modelPosition);
  }
  _setPosition(n, e, t) {
    this._affinity = n;
    this._primaryAnchor = i(e, this._context.viewModel, this._affinity);
    this._secondaryAnchor = i(t, this._context.viewModel, this._affinity);
    function i(r, s, o) {
      if (!r) {
        return new r3t(null, null);
      }
      const a = s.model.validatePosition(r);
      if (s.coordinatesConverter.modelPositionIsVisible(a)) {
        const l = s.coordinatesConverter.convertModelPositionToViewPosition(a, o ?? undefined);
        return new r3t(r, l);
      }
      return new r3t(r, null);
    }
  }
  _getMaxWidth() {
    const n = this.domNode.domNode.ownerDocument;
    const e = n.defaultView;
    if (this.allowEditorOverflow) {
      return e?.innerWidth || n.documentElement.offsetWidth || n.body.offsetWidth;
    } else {
      return this._contentWidth;
    }
  }
  setPosition(n, e, t, i) {
    this._setPosition(i, n, e);
    this._preference = t;
    if (this._primaryAnchor.viewPosition && this._preference && this._preference.length > 0) {
      this.domNode.setDisplay("block");
    } else {
      this.domNode.setDisplay("none");
    }
    this._cachedDomNodeOffsetWidth = -1;
    this._cachedDomNodeOffsetHeight = -1;
  }
  _layoutBoxInViewport(n, e, t, i) {
    const r = n.top;
    const s = r;
    const o = n.top + n.height;
    const a = i.viewportHeight - o;
    const l = r - t;
    const u = s >= t;
    const d = o;
    const m = a >= t;
    let p = n.left;
    if (p + e > i.scrollLeft + i.viewportWidth) {
      p = i.scrollLeft + i.viewportWidth - e;
    }
    if (p < i.scrollLeft) {
      p = i.scrollLeft;
    }
    return {
      fitsAbove: u,
      aboveTop: l,
      fitsBelow: m,
      belowTop: d,
      left: p
    };
  }
  _layoutHorizontalSegmentInPage(n, e, t, i) {
    const o = Math.max(15, e.left - i);
    const a = Math.min(e.left + e.width + i, n.width - 15);
    const u = this._viewDomNode.domNode.ownerDocument.defaultView;
    let d = e.left + t - (u?.scrollX ?? 0);
    if (d + i > a) {
      const m = d - (a - i);
      d -= m;
      t -= m;
    }
    if (d < o) {
      const m = d - o;
      d -= m;
      t -= m;
    }
    return [t, d];
  }
  _layoutBoxInPage(n, e, t, i) {
    const r = n.top - t;
    const s = n.top + n.height;
    const o = qS(this._viewDomNode.domNode);
    const a = this._viewDomNode.domNode.ownerDocument;
    const l = a.defaultView;
    const u = o.top + r - (l?.scrollY ?? 0);
    const d = o.top + s - (l?.scrollY ?? 0);
    const m = DY(a.body);
    const [p, g] = this._layoutHorizontalSegmentInPage(m, o, n.left - i.scrollLeft + this._contentLeft, e);
    const f = 22;
    const A = 22;
    const w = u >= f;
    const C = d + t <= m.height - A;
    if (this._fixedOverflowWidgets) {
      return {
        fitsAbove: w,
        aboveTop: Math.max(u, f),
        fitsBelow: C,
        belowTop: d,
        left: g
      };
    } else {
      return {
        fitsAbove: w,
        aboveTop: r,
        fitsBelow: C,
        belowTop: s,
        left: p
      };
    }
  }
  _prepareRenderWidgetAtExactPositionOverflowing(n) {
    return new s3t(n.top, n.left + this._contentLeft);
  }
  _getAnchorsCoordinates(n) {
    const e = r(this._primaryAnchor.viewPosition, this._affinity, this._lineHeight);
    const t = this._secondaryAnchor.viewPosition?.lineNumber === this._primaryAnchor.viewPosition?.lineNumber ? this._secondaryAnchor.viewPosition : null;
    const i = r(t, this._affinity, this._lineHeight);
    return {
      primary: e,
      secondary: i
    };
    function r(s, o, a) {
      if (!s) {
        return null;
      }
      const l = n.visibleRangeForPosition(s);
      if (!l) {
        return null;
      }
      const u = s.column === 1 && o === 3 ? 0 : l.left;
      const d = n.getVerticalOffsetForLineNumber(s.lineNumber) - n.scrollTop;
      return new OTc(d, u, a);
    }
  }
  _reduceAnchorCoordinates(n, e, t) {
    if (!e) {
      return n;
    }
    const i = this._context.configuration.options.get(52);
    let r = e.left;
    if (r < n.left) {
      r = Math.max(r, n.left - t + i.typicalFullwidthCharacterWidth);
    } else {
      r = Math.min(r, n.left + t - i.typicalFullwidthCharacterWidth);
    }
    return new OTc(n.top, r, n.height);
  }
  _prepareRenderWidget(n) {
    if (!this._preference || this._preference.length === 0) {
      return null;
    }
    const {
      primary: e,
      secondary: t
    } = this._getAnchorsCoordinates(n);
    if (!e) {
      return {
        kind: "offViewport",
        preserveFocus: this.domNode.domNode.contains(this.domNode.domNode.ownerDocument.activeElement)
      };
    }
    if (this._cachedDomNodeOffsetWidth === -1 || this._cachedDomNodeOffsetHeight === -1) {
      let s = null;
      if (typeof this._actual.beforeRender == "function") {
        s = FTc(this._actual.beforeRender, this._actual);
      }
      if (s) {
        this._cachedDomNodeOffsetWidth = s.width;
        this._cachedDomNodeOffsetHeight = s.height;
      } else {
        const a = this.domNode.domNode.getBoundingClientRect();
        this._cachedDomNodeOffsetWidth = Math.round(a.width);
        this._cachedDomNodeOffsetHeight = Math.round(a.height);
      }
    }
    const i = this._reduceAnchorCoordinates(e, t, this._cachedDomNodeOffsetWidth);
    let r;
    if (this.allowEditorOverflow) {
      r = this._layoutBoxInPage(i, this._cachedDomNodeOffsetWidth, this._cachedDomNodeOffsetHeight, n);
    } else {
      r = this._layoutBoxInViewport(i, this._cachedDomNodeOffsetWidth, this._cachedDomNodeOffsetHeight, n);
    }
    for (let s = 1; s <= 2; s++) {
      for (const o of this._preference) {
        if (o === 1) {
          if (!r) {
            return null;
          }
          if (s === 2 || r.fitsAbove) {
            return {
              kind: "inViewport",
              coordinate: new s3t(r.aboveTop, r.left),
              position: 1
            };
          }
        } else if (o === 2) {
          if (!r) {
            return null;
          }
          if (s === 2 || r.fitsBelow) {
            return {
              kind: "inViewport",
              coordinate: new s3t(r.belowTop, r.left),
              position: 2
            };
          }
        } else if (this.allowEditorOverflow) {
          return {
            kind: "inViewport",
            coordinate: this._prepareRenderWidgetAtExactPositionOverflowing(new s3t(i.top, i.left)),
            position: 0
          };
        } else {
          return {
            kind: "inViewport",
            coordinate: new s3t(i.top, i.left),
            position: 0
          };
        }
      }
    }
    return null;
  }
  onBeforeRender(n) {
    if (!!this._primaryAnchor.viewPosition && !!this._preference && !(this._primaryAnchor.viewPosition.lineNumber < n.startLineNumber) && !(this._primaryAnchor.viewPosition.lineNumber > n.endLineNumber)) {
      this.domNode.setMaxWidth(this._maxWidth);
    }
  }
  prepareRender(n) {
    this._renderData = this._prepareRenderWidget(n);
  }
  render(n) {
    if (!this._renderData || this._renderData.kind === "offViewport") {
      if (this._isVisible) {
        this.domNode.removeAttribute("monaco-visible-content-widget");
        this._isVisible = false;
        if (this._renderData?.kind === "offViewport" && this._renderData.preserveFocus) {
          this.domNode.setTop(-1000);
        } else {
          this.domNode.setVisibility("hidden");
        }
      }
      if (typeof this._actual.afterRender == "function") {
        FTc(this._actual.afterRender, this._actual, null, null);
      }
      return;
    }
    if (this.allowEditorOverflow) {
      this.domNode.setTop(this._renderData.coordinate.top);
      this.domNode.setLeft(this._renderData.coordinate.left);
    } else {
      this.domNode.setTop(this._renderData.coordinate.top + n.scrollTop - n.bigNumbersDelta);
      this.domNode.setLeft(this._renderData.coordinate.left);
    }
    if (!this._isVisible) {
      this.domNode.setVisibility("inherit");
      this.domNode.setAttribute("monaco-visible-content-widget", "true");
      this._isVisible = true;
    }
    if (typeof this._actual.afterRender == "function") {
      FTc(this._actual.afterRender, this._actual, this._renderData.position, this._renderData.coordinate);
    }
  }
};
r3t = class {
  constructor(n, e) {
    this.modelPosition = n;
    this.viewPosition = e;
  }
};
s3t = class {
  constructor(n, e) {
    this.top = n;
    this.left = e;
    this._coordinateBrand = undefined;
  }
};
OTc = class {
  constructor(n, e, t) {
    this.top = n;
    this.left = e;
    this.height = t;
    this._anchorCoordinateBrand = undefined;
  }
};
