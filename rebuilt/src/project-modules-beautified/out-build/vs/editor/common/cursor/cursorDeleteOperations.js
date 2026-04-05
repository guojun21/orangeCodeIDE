"use strict";

// Module: out-build/vs/editor/common/cursor/cursorDeleteOperations.js
// Offset: 703543 (bundle byte offset)
// Size: 4475 bytes
oa();
M4t();
Eoe();
koe();
Lkc();
ts();
tl();
Xgt = class lad {
  static deleteRight(e, t, i, r) {
    const s = [];
    let o = e !== 3;
    for (let a = 0, l = r.length; a < l; a++) {
      const u = r[a];
      let d = u;
      if (d.isEmpty()) {
        const m = u.getPosition();
        const p = tN.right(t, i, m);
        d = new Zt(p.lineNumber, p.column, m.lineNumber, m.column);
      }
      if (d.isEmpty()) {
        s[a] = null;
        continue;
      }
      if (d.startLineNumber !== d.endLineNumber) {
        o = true;
      }
      s[a] = new D6(d, "");
    }
    return [o, s];
  }
  static isAutoClosingPairDelete(e, t, i, r, s, o, a) {
    if (t === "never" && i === "never" || e === "never") {
      return false;
    }
    for (let l = 0, u = o.length; l < u; l++) {
      const d = o[l];
      const m = d.getPosition();
      if (!d.isEmpty()) {
        return false;
      }
      const p = s.getLineContent(m.lineNumber);
      if (m.column < 2 || m.column >= p.length + 1) {
        return false;
      }
      const g = p.charAt(m.column - 2);
      const f = r.get(g);
      if (!f) {
        return false;
      }
      if (Kze(g)) {
        if (i === "never") {
          return false;
        }
      } else if (t === "never") {
        return false;
      }
      const A = p.charAt(m.column - 1);
      let w = false;
      for (const C of f) {
        if (C.open === g && C.close === A) {
          w = true;
        }
      }
      if (!w) {
        return false;
      }
      if (e === "auto") {
        let C = false;
        for (let x = 0, I = a.length; x < I; x++) {
          const B = a[x];
          if (m.lineNumber === B.startLineNumber && m.column === B.startColumn) {
            C = true;
            break;
          }
        }
        if (!C) {
          return false;
        }
      }
    }
    return true;
  }
  static _runAutoClosingPairDelete(e, t, i) {
    const r = [];
    for (let s = 0, o = i.length; s < o; s++) {
      const a = i[s].getPosition();
      const l = new Zt(a.lineNumber, a.column - 1, a.lineNumber, a.column + 1);
      r[s] = new D6(l, "");
    }
    return [true, r];
  }
  static deleteLeft(e, t, i, r, s) {
    if (this.isAutoClosingPairDelete(t.autoClosingDelete, t.autoClosingBrackets, t.autoClosingQuotes, t.autoClosingPairs.autoClosingPairsOpenByEnd, i, r, s)) {
      return this._runAutoClosingPairDelete(t, i, r);
    }
    const o = [];
    let a = e !== 2;
    for (let l = 0, u = r.length; l < u; l++) {
      const d = lad.getDeleteRange(r[l], i, t);
      if (d.isEmpty()) {
        o[l] = null;
        continue;
      }
      if (d.startLineNumber !== d.endLineNumber) {
        a = true;
      }
      o[l] = new D6(d, "");
    }
    return [a, o];
  }
  static getDeleteRange(e, t, i) {
    if (!e.isEmpty()) {
      return e;
    }
    const r = e.getPosition();
    if (i.useTabStops && r.column > 1) {
      const s = t.getLineContent(r.lineNumber);
      const o = TH(s);
      const a = o === -1 ? s.length + 1 : o + 1;
      if (r.column <= a) {
        const l = i.visibleColumnFromColumn(t, r);
        const u = ZP.prevIndentTabStop(l, i.indentSize);
        const d = i.columnFromVisibleColumn(t, r.lineNumber, u);
        return new Zt(r.lineNumber, d, r.lineNumber, r.column);
      }
    }
    return Zt.fromPositions(lad.getPositionAfterDeleteLeft(r, t), r);
  }
  static getPositionAfterDeleteLeft(e, t) {
    if (e.column > 1) {
      const i = HtA(e.column - 1, t.getLineContent(e.lineNumber));
      return e.with(undefined, i + 1);
    } else if (e.lineNumber > 1) {
      const i = e.lineNumber - 1;
      return new ar(i, t.getLineMaxColumn(i));
    } else {
      return e;
    }
  }
  static cut(e, t, i) {
    const r = [];
    let s = null;
    i.sort((o, a) => ar.compare(o.getStartPosition(), a.getEndPosition()));
    for (let o = 0, a = i.length; o < a; o++) {
      const l = i[o];
      if (l.isEmpty()) {
        if (e.emptySelectionClipboard) {
          const u = l.getPosition();
          let d;
          let m;
          let p;
          let g;
          if (u.lineNumber < t.getLineCount()) {
            d = u.lineNumber;
            m = 1;
            p = u.lineNumber + 1;
            g = 1;
          } else if (u.lineNumber > 1 && s?.endLineNumber !== u.lineNumber) {
            d = u.lineNumber - 1;
            m = t.getLineMaxColumn(u.lineNumber - 1);
            p = u.lineNumber;
            g = t.getLineMaxColumn(u.lineNumber);
          } else {
            d = u.lineNumber;
            m = 1;
            p = u.lineNumber;
            g = t.getLineMaxColumn(u.lineNumber);
          }
          const f = new Zt(d, m, p, g);
          s = f;
          if (f.isEmpty()) {
            r[o] = null;
          } else {
            r[o] = new D6(f, "");
          }
        } else {
          r[o] = null;
        }
      } else {
        r[o] = new D6(l, "");
      }
    }
    return new mW(0, r, {
      shouldPushStackElementBefore: true,
      shouldPushStackElementAfter: true
    });
  }
};
