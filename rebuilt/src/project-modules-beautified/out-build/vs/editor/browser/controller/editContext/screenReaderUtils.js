"use strict";

// Module: out-build/vs/editor/browser/controller/editContext/screenReaderUtils.js
// Offset: 1823234 (bundle byte offset)
// Size: 1753 bytes
ts();
Ht();
bIc = class fNi {
  static _getPageOfLine(e, t) {
    return Math.floor((e - 1) / t);
  }
  static _getRangeForPage(e, t) {
    const i = e * t;
    const r = i + 1;
    const s = i + t;
    return new Zt(r, 1, s + 1, 1);
  }
  static fromEditorSelection(e, t, i, r) {
    const o = fNi._getPageOfLine(t.startLineNumber, i);
    const a = fNi._getRangeForPage(o, i);
    const l = fNi._getPageOfLine(t.endLineNumber, i);
    const u = fNi._getRangeForPage(l, i);
    let d = a.intersectRanges(new Zt(1, 1, t.startLineNumber, t.startColumn));
    if (r && e.getValueLengthInRange(d, 1) > 500) {
      const C = e.modifyPosition(d.getEndPosition(), -500);
      d = Zt.fromPositions(C, d.getEndPosition());
    }
    const m = e.getValueInRange(d, 1);
    const p = e.getLineCount();
    const g = e.getLineMaxColumn(p);
    let f = u.intersectRanges(new Zt(t.endLineNumber, t.endColumn, p, g));
    if (r && e.getValueLengthInRange(f, 1) > 500) {
      const C = e.modifyPosition(f.getStartPosition(), 500);
      f = Zt.fromPositions(f.getStartPosition(), C);
    }
    const A = e.getValueInRange(f, 1);
    let w;
    if (o === l || o + 1 === l) {
      w = e.getValueInRange(t, 1);
    } else {
      const C = a.intersectRanges(t);
      const x = u.intersectRanges(t);
      w = e.getValueInRange(C, 1) + "…" + e.getValueInRange(x, 1);
    }
    if (r && w.length > 1000) {
      w = w.substring(0, 500) + "…" + w.substring(w.length - 500, w.length);
    }
    return {
      value: m + w + A,
      selection: t,
      selectionStart: m.length,
      selectionEnd: m.length + w.length,
      startPositionWithinEditor: d.getStartPosition(),
      newlineCountBeforeSelection: d.endLineNumber - d.startLineNumber
    };
  }
};
