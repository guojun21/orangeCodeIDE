"use strict";

// Module: out-build/vs/editor/common/diff/legacyLinesDiffComputer.js
// Offset: 25305161 (bundle byte offset)
// Size: 8120 bytes
Cpi();
L3t();
WY();
oa();
ts();
Lv();
Ix();
nyg = 3;
iyg = class {
  computeDiff(n, e, t) {
    const r = new ZQl(n, e, {
      maxComputationTime: t.maxComputationTimeMs,
      shouldIgnoreTrimWhitespace: t.ignoreTrimWhitespace,
      shouldComputeCharChanges: true,
      shouldMakePrettyDiff: true,
      shouldPostProcessCharChanges: true
    }).computeDiff();
    const s = [];
    let o = null;
    for (const a of r.changes) {
      let l;
      if (a.originalEndLineNumber === 0) {
        l = new rh(a.originalStartLineNumber + 1, a.originalStartLineNumber + 1);
      } else {
        l = new rh(a.originalStartLineNumber, a.originalEndLineNumber + 1);
      }
      let u;
      if (a.modifiedEndLineNumber === 0) {
        u = new rh(a.modifiedStartLineNumber + 1, a.modifiedStartLineNumber + 1);
      } else {
        u = new rh(a.modifiedStartLineNumber, a.modifiedEndLineNumber + 1);
      }
      let d = new _3(l, u, a.charChanges?.map(m => new zH(new Zt(m.originalStartLineNumber, m.originalStartColumn, m.originalEndLineNumber, m.originalEndColumn), new Zt(m.modifiedStartLineNumber, m.modifiedStartColumn, m.modifiedEndLineNumber, m.modifiedEndColumn))));
      if (o && (o.modified.endLineNumberExclusive === d.modified.startLineNumber || o.original.endLineNumberExclusive === d.original.startLineNumber)) {
        d = new _3(o.original.join(d.original), o.modified.join(d.modified), o.innerChanges && d.innerChanges ? o.innerChanges.concat(d.innerChanges) : undefined);
        s.pop();
      }
      s.push(d);
      o = d;
    }
    _te(() => SBe(s, (a, l) => l.original.startLineNumber - a.original.endLineNumberExclusive === l.modified.startLineNumber - a.modified.endLineNumberExclusive && a.original.endLineNumberExclusive < l.original.startLineNumber && a.modified.endLineNumberExclusive < l.modified.startLineNumber));
    return new Voe(s, [], r.quitEarly);
  }
};
YQl = class {
  constructor(n) {
    const e = [];
    const t = [];
    for (let i = 0, r = n.length; i < r; i++) {
      e[i] = VQl(n[i], 1);
      t[i] = KQl(n[i], 1);
    }
    this.lines = n;
    this._startColumns = e;
    this._endColumns = t;
  }
  getElements() {
    const n = [];
    for (let e = 0, t = this.lines.length; e < t; e++) {
      n[e] = this.lines[e].substring(this._startColumns[e] - 1, this._endColumns[e] - 1);
    }
    return n;
  }
  getStrictElement(n) {
    return this.lines[n];
  }
  getStartLineNumber(n) {
    return n + 1;
  }
  getEndLineNumber(n) {
    return n + 1;
  }
  createCharSequence(n, e, t) {
    const i = [];
    const r = [];
    const s = [];
    let o = 0;
    for (let a = e; a <= t; a++) {
      const l = this.lines[a];
      const u = n ? this._startColumns[a] : 1;
      const d = n ? this._endColumns[a] : l.length + 1;
      for (let m = u; m < d; m++) {
        i[o] = l.charCodeAt(m - 1);
        r[o] = a + 1;
        s[o] = m;
        o++;
      }
      if (!n && a < t) {
        i[o] = 10;
        r[o] = a + 1;
        s[o] = l.length + 1;
        o++;
      }
    }
    return new ryg(i, r, s);
  }
};
ryg = class {
  constructor(n, e, t) {
    this._charCodes = n;
    this._lineNumbers = e;
    this._columns = t;
  }
  toString() {
    return "[" + this._charCodes.map((n, e) => `${n === 10 ? "\\n" : String.fromCharCode(n)}-(${this._lineNumbers[e]},${this._columns[e]})`).join(", ") + "]";
  }
  _assertIndex(n, e) {
    if (n < 0 || n >= e.length) {
      throw new Error("Illegal index");
    }
  }
  getElements() {
    return this._charCodes;
  }
  getStartLineNumber(n) {
    if (n > 0 && n === this._lineNumbers.length) {
      return this.getEndLineNumber(n - 1);
    } else {
      this._assertIndex(n, this._lineNumbers);
      return this._lineNumbers[n];
    }
  }
  getEndLineNumber(n) {
    if (n === -1) {
      return this.getStartLineNumber(n + 1);
    } else {
      this._assertIndex(n, this._lineNumbers);
      if (this._charCodes[n] === 10) {
        return this._lineNumbers[n] + 1;
      } else {
        return this._lineNumbers[n];
      }
    }
  }
  getStartColumn(n) {
    if (n > 0 && n === this._columns.length) {
      return this.getEndColumn(n - 1);
    } else {
      this._assertIndex(n, this._columns);
      return this._columns[n];
    }
  }
  getEndColumn(n) {
    if (n === -1) {
      return this.getStartColumn(n + 1);
    } else {
      this._assertIndex(n, this._columns);
      if (this._charCodes[n] === 10) {
        return 1;
      } else {
        return this._columns[n] + 1;
      }
    }
  }
};
Rgi = class tQb {
  constructor(e, t, i, r, s, o, a, l) {
    this.originalStartLineNumber = e;
    this.originalStartColumn = t;
    this.originalEndLineNumber = i;
    this.originalEndColumn = r;
    this.modifiedStartLineNumber = s;
    this.modifiedStartColumn = o;
    this.modifiedEndLineNumber = a;
    this.modifiedEndColumn = l;
  }
  static createFromDiffChange(e, t, i) {
    const r = t.getStartLineNumber(e.originalStart);
    const s = t.getStartColumn(e.originalStart);
    const o = t.getEndLineNumber(e.originalStart + e.originalLength - 1);
    const a = t.getEndColumn(e.originalStart + e.originalLength - 1);
    const l = i.getStartLineNumber(e.modifiedStart);
    const u = i.getStartColumn(e.modifiedStart);
    const d = i.getEndLineNumber(e.modifiedStart + e.modifiedLength - 1);
    const m = i.getEndColumn(e.modifiedStart + e.modifiedLength - 1);
    return new tQb(r, s, o, a, l, u, d, m);
  }
};
Ola = class nQb {
  constructor(e, t, i, r, s) {
    this.originalStartLineNumber = e;
    this.originalEndLineNumber = t;
    this.modifiedStartLineNumber = i;
    this.modifiedEndLineNumber = r;
    this.charChanges = s;
  }
  static createFromDiffResult(e, t, i, r, s, o, a) {
    let l;
    let u;
    let d;
    let m;
    let p;
    if (t.originalLength === 0) {
      l = i.getStartLineNumber(t.originalStart) - 1;
      u = 0;
    } else {
      l = i.getStartLineNumber(t.originalStart);
      u = i.getEndLineNumber(t.originalStart + t.originalLength - 1);
    }
    if (t.modifiedLength === 0) {
      d = r.getStartLineNumber(t.modifiedStart) - 1;
      m = 0;
    } else {
      d = r.getStartLineNumber(t.modifiedStart);
      m = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1);
    }
    if (o && t.originalLength > 0 && t.originalLength < 20 && t.modifiedLength > 0 && t.modifiedLength < 20 && s()) {
      const g = i.createCharSequence(e, t.originalStart, t.originalStart + t.originalLength - 1);
      const f = r.createCharSequence(e, t.modifiedStart, t.modifiedStart + t.modifiedLength - 1);
      if (g.getElements().length > 0 && f.getElements().length > 0) {
        let A = eyg(g, f, s, true).changes;
        if (a) {
          A = wSA(A);
        }
        p = [];
        for (let w = 0, C = A.length; w < C; w++) {
          p.push(Rgi.createFromDiffChange(A[w], g, f));
        }
      }
    }
    return new nQb(l, u, d, m, p);
  }
};
ZQl = class {
  constructor(n, e, t) {
    this.shouldComputeCharChanges = t.shouldComputeCharChanges;
    this.shouldPostProcessCharChanges = t.shouldPostProcessCharChanges;
    this.shouldIgnoreTrimWhitespace = t.shouldIgnoreTrimWhitespace;
    this.shouldMakePrettyDiff = t.shouldMakePrettyDiff;
    this.originalLines = n;
    this.modifiedLines = e;
    this.original = new YQl(n);
    this.modified = new YQl(e);
    this.continueLineDiff = tyg(t.maxComputationTime);
    this.continueCharDiff = tyg(t.maxComputationTime === 0 ? 0 : Math.min(t.maxComputationTime, 5000));
  }
  computeDiff() {
    if (this.original.lines.length === 1 && this.original.lines[0].length === 0) {
      if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) {
        return {
          quitEarly: false,
          changes: []
        };
      } else {
        return {
          quitEarly: false,
          changes: [{
            originalStartLineNumber: 1,
            originalEndLineNumber: 1,
            modifiedStartLineNumber: 1,
            modifiedEndLineNumber: this.modified.lines.length,
            charChanges: undefined
          }]
        };
      }
    }
    if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) {
      return {
        quitEarly: false,
        changes: [{
          originalStartLineNumber: 1,
          originalEndLineNumber: this.original.lines.length,
          modifiedStartLineNumber: 1,
          modifiedEndLineNumber: 1,
          charChanges: undefined
        }]
      };
    }
    const n = eyg(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff);
    const e = n.changes;
    const t = n.quitEarly;
    if (this.shouldIgnoreTrimWhitespace) {
      const o = [];
      for (let a = 0, l = e.length; a < l; a++) {
        o.push(Ola.createFromDiffResult(this.shouldIgnoreTrimWhitespace, e[a], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
      }
      return {
        quitEarly: t,
        changes: o
      };
    }
    const i = [];
    let r = 0;
    let s = 0;
    for (let o = -1, a = e.length; o < a; o++) {
      const l = o + 1 < a ? e[o + 1] : null;
      const u = l ? l.originalStart : this.originalLines.length;
      const d = l ? l.modifiedStart : this.modifiedLines.length;
      while (r < u && s < d) {
        const m = this.originalLines[r];
        const p = this.modifiedLines[s];
        if (m !== p) {
          {
            let g = VQl(m, 1);
            let f = VQl(p, 1);
            while (g > 1 && f > 1) {
              const A = m.charCodeAt(g - 2);
              const w = p.charCodeAt(f - 2);
              if (A !== w) {
                break;
              }
              g--;
              f--;
            }
            if (g > 1 || f > 1) {
              this._pushTrimWhitespaceCharChange(i, r + 1, 1, g, s + 1, 1, f);
            }
          }
          {
            let g = KQl(m, 1);
            let f = KQl(p, 1);
            const A = m.length + 1;
            const w = p.length + 1;
            while (g < A && f < w) {
              const C = m.charCodeAt(g - 1);
              const x = m.charCodeAt(f - 1);
              if (C !== x) {
                break;
              }
              g++;
              f++;
            }
            if (g < A || f < w) {
              this._pushTrimWhitespaceCharChange(i, r + 1, g, A, s + 1, f, w);
            }
          }
        }
        r++;
        s++;
      }
      if (l) {
        i.push(Ola.createFromDiffResult(this.shouldIgnoreTrimWhitespace, l, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
        r += l.originalLength;
        s += l.modifiedLength;
      }
    }
    return {
      quitEarly: t,
      changes: i
    };
  }
  _pushTrimWhitespaceCharChange(n, e, t, i, r, s, o) {
    if (this._mergeTrimWhitespaceCharChange(n, e, t, i, r, s, o)) {
      return;
    }
    let a;
    if (this.shouldComputeCharChanges) {
      a = [new Rgi(e, t, e, i, r, s, r, o)];
    }
    n.push(new Ola(e, e, r, r, a));
  }
  _mergeTrimWhitespaceCharChange(n, e, t, i, r, s, o) {
    const a = n.length;
    if (a === 0) {
      return false;
    }
    const l = n[a - 1];
    if (l.originalEndLineNumber === 0 || l.modifiedEndLineNumber === 0) {
      return false;
    } else if (l.originalEndLineNumber === e && l.modifiedEndLineNumber === r) {
      if (this.shouldComputeCharChanges && l.charChanges) {
        l.charChanges.push(new Rgi(e, t, e, i, r, s, r, o));
      }
      return true;
    } else if (l.originalEndLineNumber + 1 === e && l.modifiedEndLineNumber + 1 === r) {
      l.originalEndLineNumber = e;
      l.modifiedEndLineNumber = r;
      if (this.shouldComputeCharChanges && l.charChanges) {
        l.charChanges.push(new Rgi(e, t, e, i, r, s, r, o));
      }
      return true;
    } else {
      return false;
    }
  }
};
