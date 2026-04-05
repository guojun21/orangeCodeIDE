"use strict";

// Module: out-build/vs/base/common/diff/diff.js
// Offset: 24825922 (bundle byte offset)
// Size: 11622 bytes
_0A();
iw();
FGl = class {
  constructor(n) {
    this.source = n;
  }
  getElements() {
    const n = this.source;
    const e = new Int32Array(n.length);
    for (let t = 0, i = n.length; t < i; t++) {
      e[t] = n.charCodeAt(t);
    }
    return e;
  }
};
rCt = class {
  static Assert(n, e) {
    if (!n) {
      throw new Error(e);
    }
  }
};
sCt = class {
  static Copy(n, e, t, i, r) {
    for (let s = 0; s < r; s++) {
      t[i + s] = n[e + s];
    }
  }
  static Copy2(n, e, t, i, r) {
    for (let s = 0; s < r; s++) {
      t[i + s] = n[e + s];
    }
  }
};
(function (n) {
  n[n.MaxDifferencesHistory = 1447] = "MaxDifferencesHistory";
})(Opg ||= {});
OGl = class {
  constructor() {
    this.m_changes = [];
    this.m_originalStart = 1073741824;
    this.m_modifiedStart = 1073741824;
    this.m_originalCount = 0;
    this.m_modifiedCount = 0;
  }
  MarkNextChange() {
    if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
      this.m_changes.push(new GUe(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount));
    }
    this.m_originalCount = 0;
    this.m_modifiedCount = 0;
    this.m_originalStart = 1073741824;
    this.m_modifiedStart = 1073741824;
  }
  AddOriginalElement(n, e) {
    this.m_originalStart = Math.min(this.m_originalStart, n);
    this.m_modifiedStart = Math.min(this.m_modifiedStart, e);
    this.m_originalCount++;
  }
  AddModifiedElement(n, e) {
    this.m_originalStart = Math.min(this.m_originalStart, n);
    this.m_modifiedStart = Math.min(this.m_modifiedStart, e);
    this.m_modifiedCount++;
  }
  getChanges() {
    if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
      this.MarkNextChange();
    }
    return this.m_changes;
  }
  getReverseChanges() {
    if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
      this.MarkNextChange();
    }
    this.m_changes.reverse();
    return this.m_changes;
  }
};
Dun = class fSn {
  constructor(e, t, i = null) {
    this.ContinueProcessingPredicate = i;
    this._originalSequence = e;
    this._modifiedSequence = t;
    const [r, s, o] = fSn._getElements(e);
    const [a, l, u] = fSn._getElements(t);
    this._hasStrings = o && u;
    this._originalStringElements = r;
    this._originalElementsOrHash = s;
    this._modifiedStringElements = a;
    this._modifiedElementsOrHash = l;
    this.m_forwardHistory = [];
    this.m_reverseHistory = [];
  }
  static _isStringArray(e) {
    return e.length > 0 && typeof e[0] == "string";
  }
  static _getElements(e) {
    const t = e.getElements();
    if (fSn._isStringArray(t)) {
      const i = new Int32Array(t.length);
      for (let r = 0, s = t.length; r < s; r++) {
        i[r] = E2o(t[r], 0);
      }
      return [t, i, true];
    }
    if (t instanceof Int32Array) {
      return [[], t, false];
    } else {
      return [[], new Int32Array(t), false];
    }
  }
  ElementsAreEqual(e, t) {
    if (this._originalElementsOrHash[e] !== this._modifiedElementsOrHash[t]) {
      return false;
    } else if (this._hasStrings) {
      return this._originalStringElements[e] === this._modifiedStringElements[t];
    } else {
      return true;
    }
  }
  ElementsAreStrictEqual(e, t) {
    if (!this.ElementsAreEqual(e, t)) {
      return false;
    }
    const i = fSn._getStrictElement(this._originalSequence, e);
    const r = fSn._getStrictElement(this._modifiedSequence, t);
    return i === r;
  }
  static _getStrictElement(e, t) {
    if (typeof e.getStrictElement == "function") {
      return e.getStrictElement(t);
    } else {
      return null;
    }
  }
  OriginalElementsAreEqual(e, t) {
    if (this._originalElementsOrHash[e] !== this._originalElementsOrHash[t]) {
      return false;
    } else if (this._hasStrings) {
      return this._originalStringElements[e] === this._originalStringElements[t];
    } else {
      return true;
    }
  }
  ModifiedElementsAreEqual(e, t) {
    if (this._modifiedElementsOrHash[e] !== this._modifiedElementsOrHash[t]) {
      return false;
    } else if (this._hasStrings) {
      return this._modifiedStringElements[e] === this._modifiedStringElements[t];
    } else {
      return true;
    }
  }
  ComputeDiff(e) {
    return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, e);
  }
  _ComputeDiff(e, t, i, r, s) {
    const o = [false];
    let a = this.ComputeDiffRecursive(e, t, i, r, o);
    if (s) {
      a = this.PrettifyChanges(a);
    }
    return {
      quitEarly: o[0],
      changes: a
    };
  }
  ComputeDiffRecursive(e, t, i, r, s) {
    for (s[0] = false; e <= t && i <= r && this.ElementsAreEqual(e, i);) {
      e++;
      i++;
    }
    while (t >= e && r >= i && this.ElementsAreEqual(t, r)) {
      t--;
      r--;
    }
    if (e > t || i > r) {
      let m;
      if (i <= r) {
        rCt.Assert(e === t + 1, "originalStart should only be one more than originalEnd");
        m = [new GUe(e, 0, i, r - i + 1)];
      } else if (e <= t) {
        rCt.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd");
        m = [new GUe(e, t - e + 1, i, 0)];
      } else {
        rCt.Assert(e === t + 1, "originalStart should only be one more than originalEnd");
        rCt.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd");
        m = [];
      }
      return m;
    }
    const o = [0];
    const a = [0];
    const l = this.ComputeRecursionPoint(e, t, i, r, o, a, s);
    const u = o[0];
    const d = a[0];
    if (l !== null) {
      return l;
    }
    if (!s[0]) {
      const m = this.ComputeDiffRecursive(e, u, i, d, s);
      let p = [];
      if (s[0]) {
        p = [new GUe(u + 1, t - (u + 1) + 1, d + 1, r - (d + 1) + 1)];
      } else {
        p = this.ComputeDiffRecursive(u + 1, t, d + 1, r, s);
      }
      return this.ConcatenateChanges(m, p);
    }
    return [new GUe(e, t - e + 1, i, r - i + 1)];
  }
  WALKTRACE(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x) {
    let I = null;
    let B = null;
    let R = new OGl();
    let N = t;
    let M = i;
    let O = g[0] - w[0] - r;
    let $ = -1073741824;
    let H = this.m_forwardHistory.length - 1;
    do {
      const W = O + e;
      if (W === N || W < M && u[W - 1] < u[W + 1]) {
        m = u[W + 1];
        f = m - O - r;
        if (m < $) {
          R.MarkNextChange();
        }
        $ = m;
        R.AddModifiedElement(m + 1, f);
        O = W + 1 - e;
      } else {
        m = u[W - 1] + 1;
        f = m - O - r;
        if (m < $) {
          R.MarkNextChange();
        }
        $ = m - 1;
        R.AddOriginalElement(m, f + 1);
        O = W - 1 - e;
      }
      if (H >= 0) {
        u = this.m_forwardHistory[H];
        e = u[0];
        N = 1;
        M = u.length - 1;
      }
    } while (--H >= -1);
    I = R.getReverseChanges();
    if (x[0]) {
      let W = g[0] + 1;
      let z = w[0] + 1;
      if (I !== null && I.length > 0) {
        const Y = I[I.length - 1];
        W = Math.max(W, Y.getOriginalEnd());
        z = Math.max(z, Y.getModifiedEnd());
      }
      B = [new GUe(W, p - W + 1, z, A - z + 1)];
    } else {
      R = new OGl();
      N = o;
      M = a;
      O = g[0] - w[0] - l;
      $ = 1073741824;
      H = C ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
      do {
        const W = O + s;
        if (W === N || W < M && d[W - 1] >= d[W + 1]) {
          m = d[W + 1] - 1;
          f = m - O - l;
          if (m > $) {
            R.MarkNextChange();
          }
          $ = m + 1;
          R.AddOriginalElement(m + 1, f + 1);
          O = W + 1 - s;
        } else {
          m = d[W - 1];
          f = m - O - l;
          if (m > $) {
            R.MarkNextChange();
          }
          $ = m;
          R.AddModifiedElement(m + 1, f + 1);
          O = W - 1 - s;
        }
        if (H >= 0) {
          d = this.m_reverseHistory[H];
          s = d[0];
          N = 1;
          M = d.length - 1;
        }
      } while (--H >= -1);
      B = R.getChanges();
    }
    return this.ConcatenateChanges(I, B);
  }
  ComputeRecursionPoint(e, t, i, r, s, o, a) {
    let l = 0;
    let u = 0;
    let d = 0;
    let m = 0;
    let p = 0;
    let g = 0;
    e--;
    i--;
    s[0] = 0;
    o[0] = 0;
    this.m_forwardHistory = [];
    this.m_reverseHistory = [];
    const f = t - e + (r - i);
    const A = f + 1;
    const w = new Int32Array(A);
    const C = new Int32Array(A);
    const x = r - i;
    const I = t - e;
    const B = e - i;
    const R = t - r;
    const M = (I - x) % 2 === 0;
    w[x] = e;
    C[I] = t;
    a[0] = false;
    for (let O = 1; O <= f / 2 + 1; O++) {
      let $ = 0;
      let H = 0;
      d = this.ClipDiagonalBound(x - O, O, x, A);
      m = this.ClipDiagonalBound(x + O, O, x, A);
      for (let z = d; z <= m; z += 2) {
        if (z === d || z < m && w[z - 1] < w[z + 1]) {
          l = w[z + 1];
        } else {
          l = w[z - 1] + 1;
        }
        u = l - (z - x) - B;
        const Y = l;
        while (l < t && u < r && this.ElementsAreEqual(l + 1, u + 1)) {
          l++;
          u++;
        }
        w[z] = l;
        if (l + u > $ + H) {
          $ = l;
          H = u;
        }
        if (!M && Math.abs(z - I) <= O - 1 && l >= C[z]) {
          s[0] = l;
          o[0] = u;
          if (Y <= C[z] && O <= 1448) {
            return this.WALKTRACE(x, d, m, B, I, p, g, R, w, C, l, t, s, u, r, o, M, a);
          } else {
            return null;
          }
        }
      }
      const W = ($ - e + (H - i) - O) / 2;
      if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate($, W)) {
        a[0] = true;
        s[0] = $;
        o[0] = H;
        if (W > 0 && O <= 1448) {
          return this.WALKTRACE(x, d, m, B, I, p, g, R, w, C, l, t, s, u, r, o, M, a);
        } else {
          e++;
          i++;
          return [new GUe(e, t - e + 1, i, r - i + 1)];
        }
      }
      p = this.ClipDiagonalBound(I - O, O, I, A);
      g = this.ClipDiagonalBound(I + O, O, I, A);
      for (let z = p; z <= g; z += 2) {
        if (z === p || z < g && C[z - 1] >= C[z + 1]) {
          l = C[z + 1] - 1;
        } else {
          l = C[z - 1];
        }
        u = l - (z - I) - R;
        const Y = l;
        while (l > e && u > i && this.ElementsAreEqual(l, u)) {
          l--;
          u--;
        }
        C[z] = l;
        if (M && Math.abs(z - x) <= O && l <= w[z]) {
          s[0] = l;
          o[0] = u;
          if (Y >= w[z] && O <= 1448) {
            return this.WALKTRACE(x, d, m, B, I, p, g, R, w, C, l, t, s, u, r, o, M, a);
          } else {
            return null;
          }
        }
      }
      if (O <= 1447) {
        let z = new Int32Array(m - d + 2);
        z[0] = x - d + 1;
        sCt.Copy2(w, d, z, 1, m - d + 1);
        this.m_forwardHistory.push(z);
        z = new Int32Array(g - p + 2);
        z[0] = I - p + 1;
        sCt.Copy2(C, p, z, 1, g - p + 1);
        this.m_reverseHistory.push(z);
      }
    }
    return this.WALKTRACE(x, d, m, B, I, p, g, R, w, C, l, t, s, u, r, o, M, a);
  }
  PrettifyChanges(e) {
    for (let t = 0; t < e.length; t++) {
      const i = e[t];
      const r = t < e.length - 1 ? e[t + 1].originalStart : this._originalElementsOrHash.length;
      const s = t < e.length - 1 ? e[t + 1].modifiedStart : this._modifiedElementsOrHash.length;
      const o = i.originalLength > 0;
      const a = i.modifiedLength > 0;
      while (i.originalStart + i.originalLength < r && i.modifiedStart + i.modifiedLength < s && (!o || this.OriginalElementsAreEqual(i.originalStart, i.originalStart + i.originalLength)) && (!a || this.ModifiedElementsAreEqual(i.modifiedStart, i.modifiedStart + i.modifiedLength))) {
        const u = this.ElementsAreStrictEqual(i.originalStart, i.modifiedStart);
        if (this.ElementsAreStrictEqual(i.originalStart + i.originalLength, i.modifiedStart + i.modifiedLength) && !u) {
          break;
        }
        i.originalStart++;
        i.modifiedStart++;
      }
      const l = [null];
      if (t < e.length - 1 && this.ChangesOverlap(e[t], e[t + 1], l)) {
        e[t] = l[0];
        e.splice(t + 1, 1);
        t--;
        continue;
      }
    }
    for (let t = e.length - 1; t >= 0; t--) {
      const i = e[t];
      let r = 0;
      let s = 0;
      if (t > 0) {
        const m = e[t - 1];
        r = m.originalStart + m.originalLength;
        s = m.modifiedStart + m.modifiedLength;
      }
      const o = i.originalLength > 0;
      const a = i.modifiedLength > 0;
      let l = 0;
      let u = this._boundaryScore(i.originalStart, i.originalLength, i.modifiedStart, i.modifiedLength);
      for (let m = 1;; m++) {
        const p = i.originalStart - m;
        const g = i.modifiedStart - m;
        if (p < r || g < s || o && !this.OriginalElementsAreEqual(p, p + i.originalLength) || a && !this.ModifiedElementsAreEqual(g, g + i.modifiedLength)) {
          break;
        }
        const A = (p === r && g === s ? 5 : 0) + this._boundaryScore(p, i.originalLength, g, i.modifiedLength);
        if (A > u) {
          u = A;
          l = m;
        }
      }
      i.originalStart -= l;
      i.modifiedStart -= l;
      const d = [null];
      if (t > 0 && this.ChangesOverlap(e[t - 1], e[t], d)) {
        e[t - 1] = d[0];
        e.splice(t, 1);
        t++;
        continue;
      }
    }
    if (this._hasStrings) {
      for (let t = 1, i = e.length; t < i; t++) {
        const r = e[t - 1];
        const s = e[t];
        const o = s.originalStart - r.originalStart - r.originalLength;
        const a = r.originalStart;
        const l = s.originalStart + s.originalLength;
        const u = l - a;
        const d = r.modifiedStart;
        const m = s.modifiedStart + s.modifiedLength;
        const p = m - d;
        if (o < 5 && u < 20 && p < 20) {
          const g = this._findBetterContiguousSequence(a, u, d, p, o);
          if (g) {
            const [f, A] = g;
            if (f !== r.originalStart + r.originalLength || A !== r.modifiedStart + r.modifiedLength) {
              r.originalLength = f - r.originalStart;
              r.modifiedLength = A - r.modifiedStart;
              s.originalStart = f + o;
              s.modifiedStart = A + o;
              s.originalLength = l - s.originalStart;
              s.modifiedLength = m - s.modifiedStart;
            }
          }
        }
      }
    }
    return e;
  }
  _findBetterContiguousSequence(e, t, i, r, s) {
    if (t < s || r < s) {
      return null;
    }
    const o = e + t - s + 1;
    const a = i + r - s + 1;
    let l = 0;
    let u = 0;
    let d = 0;
    for (let m = e; m < o; m++) {
      for (let p = i; p < a; p++) {
        const g = this._contiguousSequenceScore(m, p, s);
        if (g > 0 && g > l) {
          l = g;
          u = m;
          d = p;
        }
      }
    }
    if (l > 0) {
      return [u, d];
    } else {
      return null;
    }
  }
  _contiguousSequenceScore(e, t, i) {
    let r = 0;
    for (let s = 0; s < i; s++) {
      if (!this.ElementsAreEqual(e + s, t + s)) {
        return 0;
      }
      r += this._originalStringElements[e + s].length;
    }
    return r;
  }
  _OriginalIsBoundary(e) {
    if (e <= 0 || e >= this._originalElementsOrHash.length - 1) {
      return true;
    } else {
      return this._hasStrings && /^\s*$/.test(this._originalStringElements[e]);
    }
  }
  _OriginalRegionIsBoundary(e, t) {
    if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) {
      return true;
    }
    if (t > 0) {
      const i = e + t;
      if (this._OriginalIsBoundary(i - 1) || this._OriginalIsBoundary(i)) {
        return true;
      }
    }
    return false;
  }
  _ModifiedIsBoundary(e) {
    if (e <= 0 || e >= this._modifiedElementsOrHash.length - 1) {
      return true;
    } else {
      return this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e]);
    }
  }
  _ModifiedRegionIsBoundary(e, t) {
    if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) {
      return true;
    }
    if (t > 0) {
      const i = e + t;
      if (this._ModifiedIsBoundary(i - 1) || this._ModifiedIsBoundary(i)) {
        return true;
      }
    }
    return false;
  }
  _boundaryScore(e, t, i, r) {
    const s = this._OriginalRegionIsBoundary(e, t) ? 1 : 0;
    const o = this._ModifiedRegionIsBoundary(i, r) ? 1 : 0;
    return s + o;
  }
  ConcatenateChanges(e, t) {
    const i = [];
    if (e.length === 0 || t.length === 0) {
      if (t.length > 0) {
        return t;
      } else {
        return e;
      }
    }
    if (this.ChangesOverlap(e[e.length - 1], t[0], i)) {
      const r = new Array(e.length + t.length - 1);
      sCt.Copy(e, 0, r, 0, e.length - 1);
      r[e.length - 1] = i[0];
      sCt.Copy(t, 1, r, e.length, t.length - 1);
      return r;
    } else {
      const r = new Array(e.length + t.length);
      sCt.Copy(e, 0, r, 0, e.length);
      sCt.Copy(t, 0, r, e.length, t.length);
      return r;
    }
  }
  ChangesOverlap(e, t, i) {
    rCt.Assert(e.originalStart <= t.originalStart, "Left change is not less than or equal to right change");
    rCt.Assert(e.modifiedStart <= t.modifiedStart, "Left change is not less than or equal to right change");
    if (e.originalStart + e.originalLength >= t.originalStart || e.modifiedStart + e.modifiedLength >= t.modifiedStart) {
      const r = e.originalStart;
      let s = e.originalLength;
      const o = e.modifiedStart;
      let a = e.modifiedLength;
      if (e.originalStart + e.originalLength >= t.originalStart) {
        s = t.originalStart + t.originalLength - e.originalStart;
      }
      if (e.modifiedStart + e.modifiedLength >= t.modifiedStart) {
        a = t.modifiedStart + t.modifiedLength - e.modifiedStart;
      }
      i[0] = new GUe(r, s, o, a);
      return true;
    } else {
      i[0] = null;
      return false;
    }
  }
  ClipDiagonalBound(e, t, i, r) {
    if (e >= 0 && e < r) {
      return e;
    }
    const s = i;
    const o = r - i - 1;
    const a = t % 2 === 0;
    if (e < 0) {
      const l = s % 2 === 0;
      if (a === l) {
        return 0;
      } else {
        return 1;
      }
    } else {
      const l = o % 2 === 0;
      if (a === l) {
        return r - 1;
      } else {
        return r - 2;
      }
    }
  }
};
S0A = new Uint32Array(65536);
