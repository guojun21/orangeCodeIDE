"use strict";

// Module: out-build/vs/editor/common/core/cursorColumns.js
// Offset: 684890 (bundle byte offset)
// Size: 1415 bytes
oa();
ZP = class sNi {
  static _nextVisibleColumn(e, t, i) {
    if (e === 9) {
      return sNi.nextRenderTabStop(t, i);
    } else if (Ize(e) || W0c(e)) {
      return t + 2;
    } else {
      return t + 1;
    }
  }
  static visibleColumnFromColumn(e, t, i) {
    const r = Math.min(t - 1, e.length);
    const s = e.substring(0, r);
    const o = new HFt(s);
    let a = 0;
    while (!o.eol()) {
      const l = u2o(s, r, o.offset);
      o.nextGraphemeLength();
      a = this._nextVisibleColumn(l, a, i);
    }
    return a;
  }
  static toStatusbarColumn(e, t, i) {
    const r = e.substring(0, Math.min(t - 1, e.length));
    const s = new sFn(r);
    let o = 0;
    while (!s.eol()) {
      if (s.nextCodePoint() === 9) {
        o = sNi.nextRenderTabStop(o, i);
      } else {
        o = o + 1;
      }
    }
    return o + 1;
  }
  static columnFromVisibleColumn(e, t, i) {
    if (t <= 0) {
      return 1;
    }
    const r = e.length;
    const s = new HFt(e);
    let o = 0;
    let a = 1;
    while (!s.eol()) {
      const l = u2o(e, r, s.offset);
      s.nextGraphemeLength();
      const u = this._nextVisibleColumn(l, o, i);
      const d = s.offset + 1;
      if (u >= t) {
        const m = t - o;
        if (u - t < m) {
          return d;
        } else {
          return a;
        }
      }
      o = u;
      a = d;
    }
    return r + 1;
  }
  static nextRenderTabStop(e, t) {
    return e + t - e % t;
  }
  static nextIndentTabStop(e, t) {
    return sNi.nextRenderTabStop(e, t);
  }
  static prevRenderTabStop(e, t) {
    return Math.max(0, e - 1 - (e - 1) % t);
  }
  static prevIndentTabStop(e, t) {
    return sNi.prevRenderTabStop(e, t);
  }
};
