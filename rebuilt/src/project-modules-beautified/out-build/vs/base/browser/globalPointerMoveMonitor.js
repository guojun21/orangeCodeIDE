"use strict";

// Module: out-build/vs/base/browser/globalPointerMoveMonitor.js
// Offset: 1467001 (bundle byte offset)
// Size: 1271 bytes
ri();
rt();
Jft = class {
  constructor() {
    this._hooks = new Ut();
    this._pointerMoveCallback = null;
    this._onStopCallback = null;
  }
  dispose() {
    this.stopMonitoring(false);
    this._hooks.dispose();
  }
  stopMonitoring(n, e) {
    if (!this.isMonitoring()) {
      return;
    }
    this._hooks.clear();
    this._pointerMoveCallback = null;
    const t = this._onStopCallback;
    this._onStopCallback = null;
    if (n && t) {
      t(e);
    }
  }
  isMonitoring() {
    return !!this._pointerMoveCallback;
  }
  startMonitoring(n, e, t, i, r) {
    if (this.isMonitoring()) {
      this.stopMonitoring(false);
    }
    this._pointerMoveCallback = i;
    this._onStopCallback = r;
    let s = n;
    try {
      n.setPointerCapture(e);
      this._hooks.add($i(() => {
        try {
          n.releasePointerCapture(e);
        } catch {}
      }));
    } catch {
      s = As(n);
    }
    this._hooks.add(ei(s, ir.POINTER_MOVE, o => {
      if (o.buttons !== t) {
        this.stopMonitoring(true);
        return;
      }
      o.preventDefault();
      this._pointerMoveCallback(o);
    }));
    this._hooks.add(ei(s, ir.POINTER_UP, o => this.stopMonitoring(true)));
  }
};
