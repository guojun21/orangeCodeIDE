"use strict";

// Module: out-build/vs/editor/browser/config/fontMeasurements.js
// Offset: 1450026 (bundle byte offset)
// Size: 4408 bytes
ri();
Nte();
yn();
rt();
ecA();
pk();
MSe();
rvh = class extends at {
  constructor() {
    super(...arguments);
    this._cache = new Map();
    this._evictUntrustedReadingsTimeout = -1;
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
  }
  dispose() {
    if (this._evictUntrustedReadingsTimeout !== -1) {
      clearTimeout(this._evictUntrustedReadingsTimeout);
      this._evictUntrustedReadingsTimeout = -1;
    }
    super.dispose();
  }
  clearAllFontInfos() {
    this._cache.clear();
    this._onDidChange.fire();
  }
  _ensureCache(n) {
    const e = RH(n);
    let t = this._cache.get(e);
    if (!t) {
      t = new svh();
      this._cache.set(e, t);
    }
    return t;
  }
  _writeToCache(n, e, t) {
    this._ensureCache(n).put(e, t);
    if (!t.isTrusted && this._evictUntrustedReadingsTimeout === -1) {
      this._evictUntrustedReadingsTimeout = n.setTimeout(() => {
        this._evictUntrustedReadingsTimeout = -1;
        this._evictUntrustedReadings(n);
      }, 5000);
    }
  }
  _evictUntrustedReadings(n) {
    const e = this._ensureCache(n);
    const t = e.getValues();
    let i = false;
    for (const r of t) {
      if (!r.isTrusted) {
        i = true;
        e.remove(r);
      }
    }
    if (i) {
      this._onDidChange.fire();
    }
  }
  serializeFontInfo(n) {
    return this._ensureCache(n).getValues().filter(t => t.isTrusted);
  }
  restoreFontInfo(n, e) {
    for (const t of e) {
      if (t.version !== uTc) {
        continue;
      }
      const i = new XOo(t, false);
      this._writeToCache(n, i, i);
    }
  }
  readFontInfo(n, e) {
    const t = this._ensureCache(n);
    if (!t.has(e)) {
      let i = this._actualReadFontInfo(n, e);
      if (i.typicalHalfwidthCharacterWidth <= 2 || i.typicalFullwidthCharacterWidth <= 2 || i.spaceWidth <= 2 || i.maxDigitWidth <= 2) {
        i = new XOo({
          pixelRatio: M6.getInstance(n).value,
          fontFamily: i.fontFamily,
          fontWeight: i.fontWeight,
          fontSize: i.fontSize,
          fontFeatureSettings: i.fontFeatureSettings,
          fontVariationSettings: i.fontVariationSettings,
          lineHeight: i.lineHeight,
          letterSpacing: i.letterSpacing,
          isMonospace: i.isMonospace,
          typicalHalfwidthCharacterWidth: Math.max(i.typicalHalfwidthCharacterWidth, 5),
          typicalFullwidthCharacterWidth: Math.max(i.typicalFullwidthCharacterWidth, 5),
          canUseHalfwidthRightwardsArrow: i.canUseHalfwidthRightwardsArrow,
          spaceWidth: Math.max(i.spaceWidth, 5),
          middotWidth: Math.max(i.middotWidth, 5),
          wsmiddotWidth: Math.max(i.wsmiddotWidth, 5),
          maxDigitWidth: Math.max(i.maxDigitWidth, 5)
        }, false);
      }
      this._writeToCache(n, e, i);
    }
    return t.get(e);
  }
  _createRequest(n, e, t, i) {
    const r = new nvh(n, e);
    t.push(r);
    i?.push(r);
    return r;
  }
  _actualReadFontInfo(n, e) {
    const t = [];
    const i = [];
    const r = this._createRequest("n", 0, t, i);
    const s = this._createRequest("ｍ", 0, t, null);
    const o = this._createRequest(" ", 0, t, i);
    const a = this._createRequest("0", 0, t, i);
    const l = this._createRequest("1", 0, t, i);
    const u = this._createRequest("2", 0, t, i);
    const d = this._createRequest("3", 0, t, i);
    const m = this._createRequest("4", 0, t, i);
    const p = this._createRequest("5", 0, t, i);
    const g = this._createRequest("6", 0, t, i);
    const f = this._createRequest("7", 0, t, i);
    const A = this._createRequest("8", 0, t, i);
    const w = this._createRequest("9", 0, t, i);
    const C = this._createRequest("→", 0, t, i);
    const x = this._createRequest("￫", 0, t, null);
    const I = this._createRequest("·", 0, t, i);
    const B = this._createRequest("⸱", 0, t, null);
    const R = "|/-_ilm%";
    for (let H = 0, W = R.length; H < W; H++) {
      this._createRequest(R.charAt(H), 0, t, i);
      this._createRequest(R.charAt(H), 1, t, i);
      this._createRequest(R.charAt(H), 2, t, i);
    }
    XaA(n, e, t);
    const N = Math.max(a.width, l.width, u.width, d.width, m.width, p.width, g.width, f.width, A.width, w.width);
    let M = e.fontFeatureSettings === Y5e.OFF;
    const O = i[0].width;
    for (let H = 1, W = i.length; M && H < W; H++) {
      const z = O - i[H].width;
      if (z < -0.001 || z > 0.001) {
        M = false;
        break;
      }
    }
    let $ = true;
    if (M && x.width !== O) {
      $ = false;
    }
    if (x.width > C.width) {
      $ = false;
    }
    return new XOo({
      pixelRatio: M6.getInstance(n).value,
      fontFamily: e.fontFamily,
      fontWeight: e.fontWeight,
      fontSize: e.fontSize,
      fontFeatureSettings: e.fontFeatureSettings,
      fontVariationSettings: e.fontVariationSettings,
      lineHeight: e.lineHeight,
      letterSpacing: e.letterSpacing,
      isMonospace: M,
      typicalHalfwidthCharacterWidth: r.width,
      typicalFullwidthCharacterWidth: s.width,
      canUseHalfwidthRightwardsArrow: $,
      spaceWidth: o.width,
      middotWidth: I.width,
      wsmiddotWidth: B.width,
      maxDigitWidth: N
    }, true);
  }
};
svh = class {
  constructor() {
    this._keys = Object.create(null);
    this._values = Object.create(null);
  }
  has(n) {
    const e = n.getId();
    return !!this._values[e];
  }
  get(n) {
    const e = n.getId();
    return this._values[e];
  }
  put(n, e) {
    const t = n.getId();
    this._keys[t] = n;
    this._values[t] = e;
  }
  remove(n) {
    const e = n.getId();
    delete this._keys[e];
    delete this._values[e];
  }
  getValues() {
    return Object.keys(this._keys).map(n => this._values[n]);
  }
};
FSe = new rvh();
