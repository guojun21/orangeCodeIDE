"use strict";

// Module: out-build/vs/editor/contrib/suggest/browser/wordDistance.js
// Offset: 25365479 (bundle byte offset)
// Size: 962 bytes
Vs();
ts();
_yg();
ljl = class qat {
  static {
    this.None = new class extends qat {
      distance() {
        return 0;
      }
    }();
  }
  static async create(e, t) {
    if (!t.getOption(123).localityBonus || !t.hasModel()) {
      return qat.None;
    }
    const i = t.getModel();
    const r = t.getPosition();
    if (!e.canComputeWordRanges(i.uri)) {
      return qat.None;
    }
    const [s] = await new cjl().provideSelectionRanges(i, [r]);
    if (s.length === 0) {
      return qat.None;
    }
    const o = await e.computeWordRanges(i.uri, s[0].range);
    if (!o) {
      return qat.None;
    }
    const a = i.getWordUntilPosition(r);
    delete o[a.word];
    return new class extends qat {
      distance(l, u) {
        if (!r.equals(t.getPosition())) {
          return 0;
        }
        if (u.kind === 17) {
          return 2097152;
        }
        const d = typeof u.label == "string" ? u.label : u.label.label;
        const m = o[d];
        if (PMo(m)) {
          return 2097152;
        }
        const p = s5e(m, Zt.fromPositions(l), Zt.compareRangesUsingStarts);
        const g = p >= 0 ? m[p] : m[Math.max(0, ~p - 1)];
        let f = s.length;
        for (const A of s) {
          if (!Zt.containsRange(A.range, g)) {
            break;
          }
          f -= 1;
        }
        return f;
      }
    }();
  }
};
