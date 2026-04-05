"use strict";

// Module: out-build/vs/editor/contrib/colorPicker/browser/colorPickerParts/colorPickerBody.js
// Offset: 24732410 (bundle byte offset)
// Size: 1854 bytes
_et();
ri();
xf();
rt();
K_A();
Y_A();
Z_A();
Wmg = Ct;
Qmg = class extends at {
  constructor(n, e, t, i) {
    super();
    this.model = e;
    this.pixelRatio = t;
    this._insertButton = null;
    this._domNode = Wmg(".colorpicker-body");
    Rt(n, this._domNode);
    this._saturationBox = new qmg(this._domNode, this.model, this.pixelRatio);
    this._register(this._saturationBox);
    this._register(this._saturationBox.onDidChange(this.onDidSaturationValueChange, this));
    this._register(this._saturationBox.onColorFlushed(this.flushColor, this));
    this._opacityStrip = new Jmg(this._domNode, this.model, i);
    this._register(this._opacityStrip);
    this._register(this._opacityStrip.onDidChange(this.onDidOpacityChange, this));
    this._register(this._opacityStrip.onColorFlushed(this.flushColor, this));
    this._hueStrip = new Gmg(this._domNode, this.model, i);
    this._register(this._hueStrip);
    this._register(this._hueStrip.onDidChange(this.onDidHueChange, this));
    this._register(this._hueStrip.onColorFlushed(this.flushColor, this));
    if (i === "standalone") {
      this._insertButton = this._register(new Hmg(this._domNode));
      this._domNode.classList.add("standalone-colorpicker");
    }
  }
  flushColor() {
    this.model.flushColor();
  }
  onDidSaturationValueChange({
    s: n,
    v: e
  }) {
    const t = this.model.color.hsva;
    this.model.color = new Xr(new $5e(t.h, n, e, t.a));
  }
  onDidOpacityChange(n) {
    const e = this.model.color.hsva;
    this.model.color = new Xr(new $5e(e.h, e.s, e.v, n));
  }
  onDidHueChange(n) {
    const e = this.model.color.hsva;
    const t = (1 - n) * 360;
    this.model.color = new Xr(new $5e(t === 360 ? 0 : t, e.s, e.v, e.a));
  }
  get domNode() {
    return this._domNode;
  }
  get saturationBox() {
    return this._saturationBox;
  }
  get opacityStrip() {
    return this._opacityStrip;
  }
  get hueStrip() {
    return this._hueStrip;
  }
  get enterButton() {
    return this._insertButton;
  }
  layout() {
    this._saturationBox.layout();
    this._opacityStrip.layout();
    this._hueStrip.layout();
  }
};
