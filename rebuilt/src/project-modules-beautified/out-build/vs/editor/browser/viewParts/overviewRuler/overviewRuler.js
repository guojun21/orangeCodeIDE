"use strict";

// Module: out-build/vs/editor/browser/viewParts/overviewRuler/overviewRuler.js
// Offset: 1723996 (bundle byte offset)
// Size: 2599 bytes
sI();
oyh();
Gft();
ayh = class extends qVe {
  constructor(n, e) {
    super();
    this._context = n;
    const t = this._context.configuration.options;
    this._domNode = mw(document.createElement("canvas"));
    this._domNode.setClassName(e);
    this._domNode.setPosition("absolute");
    this._domNode.setLayerHinting(true);
    this._domNode.setContain("strict");
    this._zoneManager = new syh(i => this._context.viewLayout.getVerticalOffsetForLineNumber(i));
    this._zoneManager.setDOMWidth(0);
    this._zoneManager.setDOMHeight(0);
    this._zoneManager.setOuterHeight(this._context.viewLayout.getScrollHeight());
    this._zoneManager.setLineHeight(t.get(68));
    this._zoneManager.setPixelRatio(t.get(149));
    this._context.addEventHandler(this);
  }
  dispose() {
    this._context.removeEventHandler(this);
    super.dispose();
  }
  onConfigurationChanged(n) {
    const e = this._context.configuration.options;
    if (n.hasChanged(68)) {
      this._zoneManager.setLineHeight(e.get(68));
      this._render();
    }
    if (n.hasChanged(149)) {
      this._zoneManager.setPixelRatio(e.get(149));
      this._domNode.setWidth(this._zoneManager.getDOMWidth());
      this._domNode.setHeight(this._zoneManager.getDOMHeight());
      this._domNode.domNode.width = this._zoneManager.getCanvasWidth();
      this._domNode.domNode.height = this._zoneManager.getCanvasHeight();
      this._render();
    }
    return true;
  }
  onFlushed(n) {
    this._render();
    return true;
  }
  onScrollChanged(n) {
    if (n.scrollHeightChanged) {
      this._zoneManager.setOuterHeight(n.scrollHeight);
      this._render();
    }
    return true;
  }
  onZonesChanged(n) {
    this._render();
    return true;
  }
  getDomNode() {
    return this._domNode.domNode;
  }
  setLayout(n) {
    this._domNode.setTop(n.top);
    this._domNode.setRight(n.right);
    let e = false;
    e = this._zoneManager.setDOMWidth(n.width) || e;
    e = this._zoneManager.setDOMHeight(n.height) || e;
    if (e) {
      this._domNode.setWidth(this._zoneManager.getDOMWidth());
      this._domNode.setHeight(this._zoneManager.getDOMHeight());
      this._domNode.domNode.width = this._zoneManager.getCanvasWidth();
      this._domNode.domNode.height = this._zoneManager.getCanvasHeight();
      this._render();
    }
  }
  setZones(n) {
    this._zoneManager.setZones(n);
    this._render();
  }
  _render() {
    if (this._zoneManager.getOuterHeight() === 0) {
      return false;
    }
    const n = this._zoneManager.getCanvasWidth();
    const e = this._zoneManager.getCanvasHeight();
    const t = this._zoneManager.resolveColorZones();
    const i = this._zoneManager.getId2Color();
    const r = this._domNode.domNode.getContext("2d");
    r.clearRect(0, 0, n, e);
    if (t.length > 0) {
      this._renderOneLane(r, t, i, n);
    }
    return true;
  }
  _renderOneLane(n, e, t, i) {
    let r = 0;
    let s = 0;
    let o = 0;
    for (const a of e) {
      const l = a.colorId;
      const u = a.from;
      const d = a.to;
      if (l !== r) {
        n.fillRect(0, s, i, o - s);
        r = l;
        n.fillStyle = t[r];
        s = u;
        o = d;
      } else if (o >= u) {
        o = Math.max(o, d);
      } else {
        n.fillRect(0, s, i, o - s);
        s = u;
        o = d;
      }
    }
    n.fillRect(0, s, i, o - s);
  }
};
