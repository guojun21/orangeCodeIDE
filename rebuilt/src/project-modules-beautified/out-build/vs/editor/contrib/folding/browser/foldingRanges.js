"use strict";

// Module: out-build/vs/editor/contrib/folding/browser/foldingRanges.js
// Offset: 24988663 (bundle byte offset)
// Size: 6045 bytes
(function (n) {
  n[n.provider = 0] = "provider";
  n[n.userDefined = 1] = "userDefined";
  n[n.recovered = 2] = "recovered";
})(Hgg ||= {});
Jgg = {
  0: " ",
  1: "u",
  2: "r"
};
pWl = 65535;
HAe = 16777215;
gWl = 4278190080;
Hca = class {
  constructor(n) {
    const e = Math.ceil(n / 32);
    this._states = new Uint32Array(e);
  }
  get(n) {
    const e = n / 32 | 0;
    const t = n % 32;
    return (this._states[e] & 1 << t) !== 0;
  }
  set(n, e) {
    const t = n / 32 | 0;
    const i = n % 32;
    const r = this._states[t];
    if (e) {
      this._states[t] = r | 1 << i;
    } else {
      this._states[t] = r & ~(1 << i);
    }
  }
};
Qae = class $Wb {
  constructor(e, t, i) {
    if (e.length !== t.length || e.length > pWl) {
      throw new Error("invalid startIndexes or endIndexes size");
    }
    this._startIndexes = e;
    this._endIndexes = t;
    this._collapseStates = new Hca(e.length);
    this._userDefinedStates = new Hca(e.length);
    this._recoveredStates = new Hca(e.length);
    this._types = i;
    this._parentsComputed = false;
  }
  ensureParentIndices() {
    if (!this._parentsComputed) {
      this._parentsComputed = true;
      const e = [];
      const t = (i, r) => {
        const s = e[e.length - 1];
        return this.getStartLineNumber(s) <= i && this.getEndLineNumber(s) >= r;
      };
      for (let i = 0, r = this._startIndexes.length; i < r; i++) {
        const s = this._startIndexes[i];
        const o = this._endIndexes[i];
        if (s > HAe || o > HAe) {
          throw new Error("startLineNumber or endLineNumber must not exceed " + HAe);
        }
        while (e.length > 0 && !t(s, o)) {
          e.pop();
        }
        const a = e.length > 0 ? e[e.length - 1] : -1;
        e.push(i);
        this._startIndexes[i] = s + ((a & 255) << 24);
        this._endIndexes[i] = o + ((a & 65280) << 16);
      }
    }
  }
  get length() {
    return this._startIndexes.length;
  }
  getStartLineNumber(e) {
    return this._startIndexes[e] & HAe;
  }
  getEndLineNumber(e) {
    return this._endIndexes[e] & HAe;
  }
  getType(e) {
    if (this._types) {
      return this._types[e];
    } else {
      return undefined;
    }
  }
  hasTypes() {
    return !!this._types;
  }
  isCollapsed(e) {
    return this._collapseStates.get(e);
  }
  setCollapsed(e, t) {
    this._collapseStates.set(e, t);
  }
  isUserDefined(e) {
    return this._userDefinedStates.get(e);
  }
  setUserDefined(e, t) {
    return this._userDefinedStates.set(e, t);
  }
  isRecovered(e) {
    return this._recoveredStates.get(e);
  }
  setRecovered(e, t) {
    return this._recoveredStates.set(e, t);
  }
  getSource(e) {
    if (this.isUserDefined(e)) {
      return 1;
    } else if (this.isRecovered(e)) {
      return 2;
    } else {
      return 0;
    }
  }
  setSource(e, t) {
    if (t === 1) {
      this.setUserDefined(e, true);
      this.setRecovered(e, false);
    } else if (t === 2) {
      this.setUserDefined(e, false);
      this.setRecovered(e, true);
    } else {
      this.setUserDefined(e, false);
      this.setRecovered(e, false);
    }
  }
  setCollapsedAllOfType(e, t) {
    let i = false;
    if (this._types) {
      for (let r = 0; r < this._types.length; r++) {
        if (this._types[r] === e) {
          this.setCollapsed(r, t);
          i = true;
        }
      }
    }
    return i;
  }
  toRegion(e) {
    return new Ggg(this, e);
  }
  getParentIndex(e) {
    this.ensureParentIndices();
    const t = ((this._startIndexes[e] & gWl) >>> 24) + ((this._endIndexes[e] & gWl) >>> 16);
    if (t === pWl) {
      return -1;
    } else {
      return t;
    }
  }
  contains(e, t) {
    return this.getStartLineNumber(e) <= t && this.getEndLineNumber(e) >= t;
  }
  findIndex(e) {
    let t = 0;
    let i = this._startIndexes.length;
    if (i === 0) {
      return -1;
    }
    while (t < i) {
      const r = Math.floor((t + i) / 2);
      if (e < this.getStartLineNumber(r)) {
        i = r;
      } else {
        t = r + 1;
      }
    }
    return t - 1;
  }
  findRange(e) {
    let t = this.findIndex(e);
    if (t >= 0) {
      if (this.getEndLineNumber(t) >= e) {
        return t;
      }
      for (t = this.getParentIndex(t); t !== -1;) {
        if (this.contains(t, e)) {
          return t;
        }
        t = this.getParentIndex(t);
      }
    }
    return -1;
  }
  toString() {
    const e = [];
    for (let t = 0; t < this.length; t++) {
      e[t] = `[${Jgg[this.getSource(t)]}${this.isCollapsed(t) ? "+" : "-"}] ${this.getStartLineNumber(t)}/${this.getEndLineNumber(t)}`;
    }
    return e.join(", ");
  }
  toFoldRange(e) {
    return {
      startLineNumber: this._startIndexes[e] & HAe,
      endLineNumber: this._endIndexes[e] & HAe,
      type: this._types ? this._types[e] : undefined,
      isCollapsed: this.isCollapsed(e),
      source: this.getSource(e)
    };
  }
  static fromFoldRanges(e) {
    const t = e.length;
    const i = new Uint32Array(t);
    const r = new Uint32Array(t);
    let s = [];
    let o = false;
    for (let l = 0; l < t; l++) {
      const u = e[l];
      i[l] = u.startLineNumber;
      r[l] = u.endLineNumber;
      s.push(u.type);
      if (u.type) {
        o = true;
      }
    }
    if (!o) {
      s = undefined;
    }
    const a = new $Wb(i, r, s);
    for (let l = 0; l < t; l++) {
      if (e[l].isCollapsed) {
        a.setCollapsed(l, true);
      }
      a.setSource(l, e[l].source);
    }
    return a;
  }
  static sanitizeAndMerge(e, t, i, r) {
    i = i ?? Number.MAX_VALUE;
    const s = (w, C) => Array.isArray(w) ? x => x < C ? w[x] : undefined : x => x < C ? w.toFoldRange(x) : undefined;
    const o = s(e, e.length);
    const a = s(t, t.length);
    let l = 0;
    let u = 0;
    let d = o(0);
    let m = a(0);
    const p = [];
    let g;
    let f = 0;
    const A = [];
    while (d || m) {
      let w;
      if (m && (!d || d.startLineNumber >= m.startLineNumber)) {
        if (d && d.startLineNumber === m.startLineNumber) {
          if (m.source === 1) {
            w = m;
          } else {
            w = d;
            w.isCollapsed = m.isCollapsed && (d.endLineNumber === m.endLineNumber || !r?.startsInside(d.startLineNumber + 1, d.endLineNumber + 1));
            w.source = 0;
          }
          d = o(++l);
        } else {
          w = m;
          if (m.isCollapsed && m.source === 0) {
            w.source = 2;
          }
        }
        m = a(++u);
      } else {
        let C = u;
        let x = m;
        while (true) {
          if (!x || x.startLineNumber > d.endLineNumber) {
            w = d;
            break;
          }
          if (x.source === 1 && x.endLineNumber > d.endLineNumber) {
            break;
          }
          x = a(++C);
        }
        d = o(++l);
      }
      if (w) {
        while (g && g.endLineNumber < w.startLineNumber) {
          g = p.pop();
        }
        if (w.endLineNumber > w.startLineNumber && w.startLineNumber > f && w.endLineNumber <= i && (!g || g.endLineNumber >= w.endLineNumber)) {
          A.push(w);
          f = w.startLineNumber;
          if (g) {
            p.push(g);
          }
          g = w;
        }
      }
    }
    return A;
  }
};
Ggg = class {
  constructor(n, e) {
    this.ranges = n;
    this.index = e;
  }
  get startLineNumber() {
    return this.ranges.getStartLineNumber(this.index);
  }
  get endLineNumber() {
    return this.ranges.getEndLineNumber(this.index);
  }
  get regionIndex() {
    return this.index;
  }
  get parentIndex() {
    return this.ranges.getParentIndex(this.index);
  }
  get isCollapsed() {
    return this.ranges.isCollapsed(this.index);
  }
  containedBy(n) {
    return n.startLineNumber <= this.startLineNumber && n.endLineNumber >= this.endLineNumber;
  }
  containsLine(n) {
    return this.startLineNumber <= n && n <= this.endLineNumber;
  }
  hidesLine(n) {
    return this.startLineNumber < n && n <= this.endLineNumber;
  }
};
