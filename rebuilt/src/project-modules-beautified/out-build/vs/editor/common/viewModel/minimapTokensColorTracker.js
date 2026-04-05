"use strict";

// Module: out-build/vs/editor/common/viewModel/minimapTokensColorTracker.js
// Offset: 1377918 (bundle byte offset)
// Size: 1446 bytes
yn();
rt();
Rbh();
Tg();
Kxc = class cGb extends at {
  static {
    this._INSTANCE = null;
  }
  static getInstance() {
    this._INSTANCE ||= Cte(new cGb());
    return this._INSTANCE;
  }
  constructor() {
    super();
    this._onDidChange = new Qe();
    this.onDidChange = this._onDidChange.event;
    this._updateColorMap();
    this._register(pT.onDidChange(e => {
      if (e.changedColorMap) {
        this._updateColorMap();
      }
    }));
  }
  _updateColorMap() {
    const e = pT.getColorMap();
    if (!e) {
      this._colors = [OVe.Empty];
      this._backgroundIsLight = true;
      return;
    }
    this._colors = [OVe.Empty];
    for (let i = 1; i < e.length; i++) {
      const r = e[i].rgba;
      this._colors[i] = new OVe(r.r, r.g, r.b, Math.round(r.a * 255));
    }
    const t = e[2].getRelativeLuminance();
    this._backgroundIsLight = t >= 0.5;
    this._onDidChange.fire(undefined);
  }
  getColor(e) {
    if (e < 1 || e >= this._colors.length) {
      e = 2;
    }
    return this._colors[e];
  }
  backgroundIsLight() {
    return this._backgroundIsLight;
  }
};
