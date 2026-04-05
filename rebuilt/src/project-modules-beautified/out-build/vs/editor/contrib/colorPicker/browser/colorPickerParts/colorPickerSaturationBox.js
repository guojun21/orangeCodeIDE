"use strict";

// Module: out-build/vs/editor/contrib/colorPicker/browser/colorPickerParts/colorPickerSaturationBox.js
// Offset: 24727116 (bundle byte offset)
// Size: 2613 bytes
_et();
ri();
ZOt();
xf();
yn();
rt();
vGl = Ct;
qmg = class extends at {
  constructor(n, e, t) {
    super();
    this.model = e;
    this.pixelRatio = t;
    this._onDidChange = new Qe();
    this.onDidChange = this._onDidChange.event;
    this._onColorFlushed = new Qe();
    this.onColorFlushed = this._onColorFlushed.event;
    this._domNode = vGl(".saturation-wrap");
    Rt(n, this._domNode);
    this._canvas = document.createElement("canvas");
    this._canvas.className = "saturation-box";
    Rt(this._domNode, this._canvas);
    this.selection = vGl(".saturation-selection");
    Rt(this._domNode, this.selection);
    this.layout();
    this._register(ei(this._domNode, ir.POINTER_DOWN, i => this.onPointerDown(i)));
    this._register(this.model.onDidChangeColor(this.onDidChangeColor, this));
    this.monitor = null;
  }
  get domNode() {
    return this._domNode;
  }
  get canvas() {
    return this._canvas;
  }
  onPointerDown(n) {
    if (!n.target || !(n.target instanceof Element)) {
      return;
    }
    this.monitor = this._register(new Jft());
    const e = qS(this._domNode);
    if (n.target !== this.selection) {
      this.onDidChangePosition(n.offsetX, n.offsetY);
    }
    this.monitor.startMonitoring(n.target, n.pointerId, n.buttons, i => this.onDidChangePosition(i.pageX - e.left, i.pageY - e.top), () => null);
    const t = ei(n.target.ownerDocument, ir.POINTER_UP, () => {
      this._onColorFlushed.fire();
      t.dispose();
      if (this.monitor) {
        this.monitor.stopMonitoring(true);
        this.monitor = null;
      }
    }, true);
  }
  onDidChangePosition(n, e) {
    const t = Math.max(0, Math.min(1, n / this.width));
    const i = Math.max(0, Math.min(1, 1 - e / this.height));
    this.paintSelection(t, i);
    this._onDidChange.fire({
      s: t,
      v: i
    });
  }
  layout() {
    this.width = this._domNode.offsetWidth;
    this.height = this._domNode.offsetHeight;
    this._canvas.width = this.width * this.pixelRatio;
    this._canvas.height = this.height * this.pixelRatio;
    this.paint();
    const n = this.model.color.hsva;
    this.paintSelection(n.s, n.v);
  }
  paint() {
    const n = this.model.color.hsva;
    const e = new Xr(new $5e(n.h, 1, 1, 1));
    const t = this._canvas.getContext("2d");
    const i = t.createLinearGradient(0, 0, this._canvas.width, 0);
    i.addColorStop(0, "rgba(255, 255, 255, 1)");
    i.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
    i.addColorStop(1, "rgba(255, 255, 255, 0)");
    const r = t.createLinearGradient(0, 0, 0, this._canvas.height);
    r.addColorStop(0, "rgba(0, 0, 0, 0)");
    r.addColorStop(1, "rgba(0, 0, 0, 1)");
    t.rect(0, 0, this._canvas.width, this._canvas.height);
    t.fillStyle = Xr.Format.CSS.format(e);
    t.fill();
    t.fillStyle = i;
    t.fill();
    t.fillStyle = r;
    t.fill();
  }
  paintSelection(n, e) {
    this.selection.style.left = `${n * this.width}px`;
    this.selection.style.top = `${this.height - e * this.height}px`;
  }
  onDidChangeColor(n) {
    if (this.monitor && this.monitor.isMonitoring()) {
      return;
    }
    this.paint();
    const e = n.hsva;
    this.paintSelection(e.s, e.v);
  }
};
