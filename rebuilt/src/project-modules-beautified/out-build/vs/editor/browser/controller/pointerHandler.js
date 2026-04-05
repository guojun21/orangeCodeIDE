"use strict";

// Module: out-build/vs/editor/browser/controller/pointerHandler.js
// Offset: 1591132 (bundle byte offset)
// Size: 3194 bytes
TBe();
ri();
Dx();
iu();
rt();
_r();
xcA();
XOt();
aAh();
cAh = class extends c3o {
  constructor(n, e, t) {
    super(n, e, t);
    this._register(E1.addTarget(this.viewHelper.linesContentDomNode));
    this._register(ei(this.viewHelper.linesContentDomNode, MA.Tap, r => this.onTap(r)));
    this._register(ei(this.viewHelper.linesContentDomNode, MA.Change, r => this.onChange(r)));
    this._register(ei(this.viewHelper.linesContentDomNode, MA.Contextmenu, r => this._onContextMenu(new mRe(r, false, this.viewHelper.viewDomNode), false)));
    this._lastPointerType = "mouse";
    this._register(ei(this.viewHelper.linesContentDomNode, "pointerdown", r => {
      const s = r.pointerType;
      if (s === "mouse") {
        this._lastPointerType = "mouse";
        return;
      } else if (s === "touch") {
        this._lastPointerType = "touch";
      } else {
        this._lastPointerType = "pen";
      }
    }));
    const i = new fvh(this.viewHelper.viewDomNode);
    this._register(i.onPointerMove(this.viewHelper.viewDomNode, r => this._onMouseMove(r)));
    this._register(i.onPointerUp(this.viewHelper.viewDomNode, r => this._onMouseUp(r)));
    this._register(i.onPointerLeave(this.viewHelper.viewDomNode, r => this._onMouseLeave(r)));
    this._register(i.onPointerDown(this.viewHelper.viewDomNode, (r, s) => this._onMouseDown(r, s)));
  }
  onTap(n) {
    if (!!n.initialTarget && !!this.viewHelper.linesContentDomNode.contains(n.initialTarget)) {
      n.preventDefault();
      this.viewHelper.focusTextArea();
      this._dispatchGesture(n, false);
    }
  }
  onChange(n) {
    if (this._lastPointerType === "touch") {
      this._context.viewModel.viewLayout.deltaScrollNow(-n.translationX, -n.translationY);
    }
    if (this._lastPointerType === "pen") {
      this._dispatchGesture(n, true);
    }
  }
  _dispatchGesture(n, e) {
    const t = this._createMouseTarget(new mRe(n, false, this.viewHelper.viewDomNode), false);
    if (t.position) {
      this.viewController.dispatchMouse({
        position: t.position,
        mouseColumn: t.position.column,
        startedOnLineNumbers: false,
        revealType: 1,
        mouseDownCount: n.tapCount,
        inSelectionMode: e,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        shiftKey: false,
        leftButton: false,
        middleButton: false,
        onInjectedText: t.type === 6 && t.detail.injectedText !== null
      });
    }
  }
  _onMouseDown(n, e) {
    if (n.browserEvent.pointerType !== "touch") {
      super._onMouseDown(n, e);
    }
  }
};
lAh = class extends c3o {
  constructor(n, e, t) {
    super(n, e, t);
    this._register(E1.addTarget(this.viewHelper.linesContentDomNode));
    this._register(ei(this.viewHelper.linesContentDomNode, MA.Tap, i => this.onTap(i)));
    this._register(ei(this.viewHelper.linesContentDomNode, MA.Change, i => this.onChange(i)));
    this._register(ei(this.viewHelper.linesContentDomNode, MA.Contextmenu, i => this._onContextMenu(new mRe(i, false, this.viewHelper.viewDomNode), false)));
  }
  onTap(n) {
    n.preventDefault();
    this.viewHelper.focusTextArea();
    const e = this._createMouseTarget(new mRe(n, false, this.viewHelper.viewDomNode), false);
    if (e.position) {
      const t = document.createEvent("CustomEvent");
      t.initEvent(u3o.Tap, false, true);
      this.viewHelper.dispatchTextAreaEvent(t);
      this.viewController.moveTo(e.position, 1);
    }
  }
  onChange(n) {
    this._context.viewModel.viewLayout.deltaScrollNow(-n.translationX, -n.translationY);
  }
};
uAh = class extends at {
  constructor(n, e, t) {
    super();
    if ((ZL || D0c && k0c) && cW.pointerEvents) {
      this.handler = this._register(new cAh(n, e, t));
    } else if (bi.TouchEvent) {
      this.handler = this._register(new lAh(n, e, t));
    } else {
      this.handler = this._register(new c3o(n, e, t));
    }
  }
  getTargetAtClientPoint(n, e) {
    return this.handler.getTargetAtClientPoint(n, e);
  }
};
