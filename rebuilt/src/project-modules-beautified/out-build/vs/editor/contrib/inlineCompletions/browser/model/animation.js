"use strict";

// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/animation.js
// Offset: 25292817 (bundle byte offset)
// Size: 1398 bytes
ri();
Uc();
zQl = class ZWb {
  static const(e) {
    return new ZWb(e, e, 0);
  }
  constructor(e, t, i, r = mSA) {
    this.startValue = e;
    this.endValue = t;
    this.durationMs = i;
    this._interpolationFunction = r;
    this.startTimeMs = Date.now();
    if (e === t) {
      this.durationMs = 0;
    }
  }
  isFinished() {
    return Date.now() >= this.startTimeMs + this.durationMs;
  }
  getValue() {
    const e = Date.now() - this.startTimeMs;
    if (e >= this.durationMs) {
      return this.endValue;
    } else {
      return this._interpolationFunction(e, this.startValue, this.endValue - this.startValue, this.durationMs);
    }
  }
};
QAg = class XWb {
  static const(e) {
    return new XWb(zQl.const(e));
  }
  constructor(e) {
    this._value = Ua(this, e);
  }
  setAnimation(e, t) {
    this._value.set(e, t);
  }
  changeAnimation(e, t) {
    const i = e(this._value.get());
    this._value.set(i, t);
  }
  getValue(e) {
    const t = this._value.read(e);
    if (!t.isFinished()) {
      jAg.instance.invalidateOnNextAnimationFrame(e);
    }
    return t.getValue();
  }
};
jAg = class eQb {
  constructor() {
    this._counter = IY(this);
    this._isScheduled = false;
  }
  static {
    this.instance = new eQb();
  }
  invalidateOnNextAnimationFrame(e) {
    this._counter.read(e);
    if (!this._isScheduled) {
      this._isScheduled = true;
      $c().requestAnimationFrame(() => {
        this._isScheduled = false;
        this._update();
      });
    }
  }
  _update() {
    this._counter.trigger(undefined);
  }
};
