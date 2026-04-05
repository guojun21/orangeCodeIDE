"use strict";

// Module: out-build/vs/editor/common/cursor/cursorColumnSelection.js
// Offset: 692506 (bundle byte offset)
// Size: 2050 bytes
Eoe();
tl();
ts();
N4t = class TJb {
  static columnSelect(e, t, i, r, s, o) {
    const a = Math.abs(s - i) + 1;
    const l = i > s;
    const u = r > o;
    const d = r < o;
    const m = [];
    for (let p = 0; p < a; p++) {
      const g = i + (l ? -p : p);
      const f = e.columnFromVisibleColumn(t, g, r);
      const A = e.columnFromVisibleColumn(t, g, o);
      const w = e.visibleColumnFromColumn(t, new ar(g, f));
      const C = e.visibleColumnFromColumn(t, new ar(g, A));
      if ((!d || !(w > o) && !(C < r)) && (!u || !(C > r) && !(w < o))) {
        m.push(new hW(new Zt(g, f, g, f), 0, 0, new ar(g, A), 0));
      }
    }
    if (m.length === 0) {
      for (let p = 0; p < a; p++) {
        const g = i + (l ? -p : p);
        const f = t.getLineMaxColumn(g);
        m.push(new hW(new Zt(g, f, g, f), 0, 0, new ar(g, f), 0));
      }
    }
    return {
      viewStates: m,
      reversed: l,
      fromLineNumber: i,
      fromVisualColumn: r,
      toLineNumber: s,
      toVisualColumn: o
    };
  }
  static columnSelectLeft(e, t, i) {
    let r = i.toViewVisualColumn;
    if (r > 0) {
      r--;
    }
    return TJb.columnSelect(e, t, i.fromViewLineNumber, i.fromViewVisualColumn, i.toViewLineNumber, r);
  }
  static columnSelectRight(e, t, i) {
    let r = 0;
    const s = Math.min(i.fromViewLineNumber, i.toViewLineNumber);
    const o = Math.max(i.fromViewLineNumber, i.toViewLineNumber);
    for (let l = s; l <= o; l++) {
      const u = t.getLineMaxColumn(l);
      const d = e.visibleColumnFromColumn(t, new ar(l, u));
      r = Math.max(r, d);
    }
    let a = i.toViewVisualColumn;
    if (a < r) {
      a++;
    }
    return this.columnSelect(e, t, i.fromViewLineNumber, i.fromViewVisualColumn, i.toViewLineNumber, a);
  }
  static columnSelectUp(e, t, i, r) {
    const s = r ? e.pageSize : 1;
    const o = Math.max(1, i.toViewLineNumber - s);
    return this.columnSelect(e, t, i.fromViewLineNumber, i.fromViewVisualColumn, o, i.toViewVisualColumn);
  }
  static columnSelectDown(e, t, i, r) {
    const s = r ? e.pageSize : 1;
    const o = Math.min(t.getLineCount(), i.toViewLineNumber + s);
    return this.columnSelect(e, t, i.fromViewLineNumber, i.fromViewVisualColumn, o, i.toViewVisualColumn);
  }
};
