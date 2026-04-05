"use strict";

// Module: out-build/vs/base/browser/ui/scrollbar/scrollbarArrow.js
// Offset: 1533047 (bundle byte offset)
// Size: 1897 bytes
ZOt();
$4();
vr();
Jr();
ri();
Kft = 11;
Jvh = class extends HR {
  constructor(n) {
    super();
    this._onActivate = n.onActivate;
    this.bgDomNode = document.createElement("div");
    this.bgDomNode.className = "arrow-background";
    this.bgDomNode.style.position = "absolute";
    this.bgDomNode.style.width = n.bgWidth + "px";
    this.bgDomNode.style.height = n.bgHeight + "px";
    if (typeof n.top !== "undefined") {
      this.bgDomNode.style.top = "0px";
    }
    if (typeof n.left !== "undefined") {
      this.bgDomNode.style.left = "0px";
    }
    if (typeof n.bottom !== "undefined") {
      this.bgDomNode.style.bottom = "0px";
    }
    if (typeof n.right !== "undefined") {
      this.bgDomNode.style.right = "0px";
    }
    this.domNode = document.createElement("div");
    this.domNode.className = n.className;
    this.domNode.classList.add(...Qt.asClassNameArray(n.icon));
    this.domNode.style.position = "absolute";
    this.domNode.style.width = Kft + "px";
    this.domNode.style.height = Kft + "px";
    if (typeof n.top !== "undefined") {
      this.domNode.style.top = n.top + "px";
    }
    if (typeof n.left !== "undefined") {
      this.domNode.style.left = n.left + "px";
    }
    if (typeof n.bottom !== "undefined") {
      this.domNode.style.bottom = n.bottom + "px";
    }
    if (typeof n.right !== "undefined") {
      this.domNode.style.right = n.right + "px";
    }
    this._pointerMoveMonitor = this._register(new Jft());
    this._register(_f(this.bgDomNode, ir.POINTER_DOWN, e => this._arrowPointerDown(e)));
    this._register(_f(this.domNode, ir.POINTER_DOWN, e => this._arrowPointerDown(e)));
    this._pointerdownRepeatTimer = this._register(new D5e());
    this._pointerdownScheduleRepeatTimer = this._register(new O$());
  }
  _arrowPointerDown(n) {
    if (!n.target || !(n.target instanceof Element)) {
      return;
    }
    const e = () => {
      this._pointerdownRepeatTimer.cancelAndSet(() => this._onActivate(), 1000 / 24, As(n));
    };
    this._onActivate();
    this._pointerdownRepeatTimer.cancel();
    this._pointerdownScheduleRepeatTimer.cancelAndSet(e, 200);
    this._pointerMoveMonitor.startMonitoring(n.target, n.pointerId, n.buttons, t => {}, () => {
      this._pointerdownRepeatTimer.cancel();
      this._pointerdownScheduleRepeatTimer.cancel();
    });
    n.preventDefault();
  }
};
