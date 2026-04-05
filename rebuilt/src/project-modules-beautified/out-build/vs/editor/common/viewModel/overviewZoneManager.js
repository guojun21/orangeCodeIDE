"use strict";

// Module: out-build/vs/editor/common/viewModel/overviewZoneManager.js
// Offset: 1721299 (bundle byte offset)
// Size: 2697 bytes
(function (n) {
  n[n.MINIMUM_HEIGHT = 4] = "MINIMUM_HEIGHT";
})(ryh ||= {});
tIc = class {
  constructor(n, e, t) {
    this._colorZoneBrand = undefined;
    this.from = n | 0;
    this.to = e | 0;
    this.colorId = t | 0;
  }
  static compare(n, e) {
    if (n.colorId === e.colorId) {
      if (n.from === e.from) {
        return n.to - e.to;
      } else {
        return n.from - e.from;
      }
    } else {
      return n.colorId - e.colorId;
    }
  }
};
nIc = class {
  constructor(n, e, t, i) {
    this._overviewRulerZoneBrand = undefined;
    this.startLineNumber = n;
    this.endLineNumber = e;
    this.heightInLines = t;
    this.color = i;
    this._colorZone = null;
  }
  static compare(n, e) {
    if (n.color === e.color) {
      if (n.startLineNumber === e.startLineNumber) {
        if (n.heightInLines === e.heightInLines) {
          return n.endLineNumber - e.endLineNumber;
        } else {
          return n.heightInLines - e.heightInLines;
        }
      } else {
        return n.startLineNumber - e.startLineNumber;
      }
    } else if (n.color < e.color) {
      return -1;
    } else {
      return 1;
    }
  }
  setColorZone(n) {
    this._colorZone = n;
  }
  getColorZones() {
    return this._colorZone;
  }
};
syh = class {
  constructor(n) {
    this._getVerticalOffsetForLine = n;
    this._zones = [];
    this._colorZonesInvalid = false;
    this._lineHeight = 0;
    this._domWidth = 0;
    this._domHeight = 0;
    this._outerHeight = 0;
    this._pixelRatio = 1;
    this._lastAssignedId = 0;
    this._color2Id = Object.create(null);
    this._id2Color = [];
  }
  getId2Color() {
    return this._id2Color;
  }
  setZones(n) {
    this._zones = n;
    this._zones.sort(nIc.compare);
  }
  setLineHeight(n) {
    if (this._lineHeight === n) {
      return false;
    } else {
      this._lineHeight = n;
      this._colorZonesInvalid = true;
      return true;
    }
  }
  setPixelRatio(n) {
    this._pixelRatio = n;
    this._colorZonesInvalid = true;
  }
  getDOMWidth() {
    return this._domWidth;
  }
  getCanvasWidth() {
    return this._domWidth * this._pixelRatio;
  }
  setDOMWidth(n) {
    if (this._domWidth === n) {
      return false;
    } else {
      this._domWidth = n;
      this._colorZonesInvalid = true;
      return true;
    }
  }
  getDOMHeight() {
    return this._domHeight;
  }
  getCanvasHeight() {
    return this._domHeight * this._pixelRatio;
  }
  setDOMHeight(n) {
    if (this._domHeight === n) {
      return false;
    } else {
      this._domHeight = n;
      this._colorZonesInvalid = true;
      return true;
    }
  }
  getOuterHeight() {
    return this._outerHeight;
  }
  setOuterHeight(n) {
    if (this._outerHeight === n) {
      return false;
    } else {
      this._outerHeight = n;
      this._colorZonesInvalid = true;
      return true;
    }
  }
  resolveColorZones() {
    const n = this._colorZonesInvalid;
    const e = Math.floor(this._lineHeight);
    const t = Math.floor(this.getCanvasHeight());
    const i = Math.floor(this._outerHeight);
    const r = t / i;
    const s = Math.floor(this._pixelRatio * 4 / 2);
    const o = [];
    for (let a = 0, l = this._zones.length; a < l; a++) {
      const u = this._zones[a];
      if (!n) {
        const I = u.getColorZones();
        if (I) {
          o.push(I);
          continue;
        }
      }
      const d = this._getVerticalOffsetForLine(u.startLineNumber);
      const m = u.heightInLines === 0 ? this._getVerticalOffsetForLine(u.endLineNumber) + e : d + u.heightInLines * e;
      const p = Math.floor(r * d);
      const g = Math.floor(r * m);
      let f = Math.floor((p + g) / 2);
      let A = g - f;
      if (A < s) {
        A = s;
      }
      if (f - A < 0) {
        f = A;
      }
      if (f + A > t) {
        f = t - A;
      }
      const w = u.color;
      let C = this._color2Id[w];
      if (!C) {
        C = ++this._lastAssignedId;
        this._color2Id[w] = C;
        this._id2Color[C] = w;
      }
      const x = new tIc(f - A, f + A, C);
      u.setColorZone(x);
      o.push(x);
    }
    this._colorZonesInvalid = false;
    o.sort(tIc.compare);
    return o;
  }
};
