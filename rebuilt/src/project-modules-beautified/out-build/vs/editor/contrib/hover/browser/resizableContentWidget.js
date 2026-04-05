"use strict";

// Module: out-build/vs/editor/contrib/hover/browser/resizableContentWidget.js
// Offset: 4223939 (bundle byte offset)
// Size: 1772 bytes
eUn();
rt();
tl();
ri();
QJh = 30;
jJh = 24;
zJh = class extends at {
  constructor(n, e = new Lu(10, 10)) {
    super();
    this._editor = n;
    this.allowEditorOverflow = true;
    this.suppressMouseDown = false;
    this._resizableNode = this._register(new G9t());
    this._contentPosition = null;
    this._isResizing = false;
    this._resizableNode.domNode.style.position = "absolute";
    this._resizableNode.minSize = Lu.lift(e);
    this._resizableNode.layout(e.height, e.width);
    this._resizableNode.enableSashes(true, true, true, true);
    this._register(this._resizableNode.onDidResize(t => {
      this._resize(new Lu(t.dimension.width, t.dimension.height));
      if (t.done) {
        this._isResizing = false;
      }
    }));
    this._register(this._resizableNode.onDidWillResize(() => {
      this._isResizing = true;
    }));
  }
  get isResizing() {
    return this._isResizing;
  }
  getDomNode() {
    return this._resizableNode.domNode;
  }
  getPosition() {
    return this._contentPosition;
  }
  get position() {
    if (this._contentPosition?.position) {
      return ar.lift(this._contentPosition.position);
    } else {
      return undefined;
    }
  }
  _availableVerticalSpaceAbove(n) {
    const e = this._editor.getDomNode();
    const t = this._editor.getScrolledVisiblePosition(n);
    if (!e || !t) {
      return undefined;
    } else {
      return qS(e).top + t.top - QJh;
    }
  }
  _availableVerticalSpaceBelow(n) {
    const e = this._editor.getDomNode();
    const t = this._editor.getScrolledVisiblePosition(n);
    if (!e || !t) {
      return;
    }
    const i = qS(e);
    const r = DY(e.ownerDocument.body);
    const s = i.top + t.top + t.height;
    return r.height - s - jJh;
  }
  _findPositionPreference(n, e) {
    const t = Math.min(this._availableVerticalSpaceBelow(e) ?? Infinity, n);
    const i = Math.min(this._availableVerticalSpaceAbove(e) ?? Infinity, n);
    const r = Math.min(Math.max(i, t), n);
    const s = Math.min(n, r);
    let o;
    if (this._editor.getOption(62).above) {
      o = s <= i ? 1 : 2;
    } else {
      o = s <= t ? 2 : 1;
    }
    if (o === 1) {
      this._resizableNode.enableSashes(true, true, false, false);
    } else {
      this._resizableNode.enableSashes(false, true, true, false);
    }
    return o;
  }
  _resize(n) {
    this._resizableNode.layout(n.height, n.width);
  }
};
