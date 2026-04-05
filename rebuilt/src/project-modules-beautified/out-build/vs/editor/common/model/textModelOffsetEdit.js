"use strict";

// Module: out-build/vs/editor/common/model/textModelOffsetEdit.js
// Offset: 25313429 (bundle byte offset)
// Size: 1470 bytes
nI();
ts();
Y1e();
$I();
Qet = class {
  constructor() {}
  static asEditOperations(n, e) {
    const t = [];
    for (const i of n.edits) {
      const r = Zt.fromPositions(e.getPositionAt(i.replaceRange.start), e.getPositionAt(i.replaceRange.start + i.replaceRange.length));
      t.push(zb.replace(r, i.newText));
    }
    return t;
  }
  static fromContentChanges(n) {
    const e = n.map(i => new E2(dm.ofStartAndLength(i.rangeOffset, i.rangeLength), i.text));
    e.reverse();
    return new Vae(e);
  }
  static fromLineRangeMapping(n, e, t) {
    const i = [];
    for (const r of t) {
      for (const s of r.innerChanges ?? []) {
        const o = e.getValueInRange(s.modifiedRange);
        const a = n.getOffsetAt(s.originalRange.getStartPosition());
        const l = n.getOffsetAt(s.originalRange.getEndPosition());
        const u = new dm(a, l);
        i.push(new E2(u, o));
      }
    }
    return new Vae(i);
  }
};
