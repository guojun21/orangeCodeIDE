"use strict";

// Module: out-build/vs/base/browser/pixelRatio.js
// Offset: 1443488 (bundle byte offset)
// Size: 1636 bytes
ri();
yn();
rt();
Zbh = class extends at {
  constructor(n) {
    super();
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._listener = () => this._handleChange(n, true);
    this._mediaQueryList = null;
    this._handleChange(n, false);
  }
  _handleChange(n, e) {
    this._mediaQueryList?.removeEventListener("change", this._listener);
    this._mediaQueryList = n.matchMedia(`(resolution: ${n.devicePixelRatio}dppx)`);
    this._mediaQueryList.addEventListener("change", this._listener);
    if (e) {
      this._onDidChange.fire();
    }
  }
};
Xbh = class extends at {
  get value() {
    return this._value;
  }
  constructor(n) {
    super();
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._value = this._getPixelRatio(n);
    const e = this._register(new Zbh(n));
    this._register(e.onDidChange(() => {
      this._value = this._getPixelRatio(n);
      this._onDidChange.fire(this._value);
    }));
  }
  _getPixelRatio(n) {
    const e = document.createElement("canvas").getContext("2d");
    const t = n.devicePixelRatio || 1;
    const i = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1;
    return t / i;
  }
};
evh = class {
  constructor() {
    this.mapWindowIdToPixelRatioMonitor = new Map();
  }
  _getOrCreatePixelRatioMonitor(n) {
    const e = RH(n);
    let t = this.mapWindowIdToPixelRatioMonitor.get(e);
    if (!t) {
      t = Cte(new Xbh(n));
      this.mapWindowIdToPixelRatioMonitor.set(e, t);
      Cte(In.once(Voh)(({
        vscodeWindowId: i
      }) => {
        if (i === e) {
          t?.dispose();
          this.mapWindowIdToPixelRatioMonitor.delete(e);
        }
      }));
    }
    return t;
  }
  getInstance(n) {
    return this._getOrCreatePixelRatioMonitor(n);
  }
};
M6 = new evh();
