"use strict";

// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/beforeEditPositionMapper.js
// Offset: 1064375 (bundle byte offset)
// Size: 2103 bytes
ts();
X5e();
TVe = class qJb {
  static fromModelContentChanges(e) {
    return e.map(i => {
      const r = Zt.lift(i.range);
      return new qJb(xOt(r.getStartPosition()), xOt(r.getEndPosition()), ToA(i.text));
    }).reverse();
  }
  constructor(e, t, i) {
    this.startOffset = e;
    this.endOffset = t;
    this.newLength = i;
  }
  toString() {
    return `[${Lde(this.startOffset)}...${Lde(this.endOffset)}) -> ${Lde(this.newLength)}`;
  }
};
mph = class {
  constructor(n) {
    this.nextEditIdx = 0;
    this.deltaOldToNewLineCount = 0;
    this.deltaOldToNewColumnCount = 0;
    this.deltaLineIdxInOld = -1;
    this.edits = n.map(e => pph.from(e));
  }
  getOffsetBeforeChange(n) {
    this.adjustNextEdit(n);
    return this.translateCurToOld(n);
  }
  getDistanceToNextChange(n) {
    this.adjustNextEdit(n);
    const e = this.edits[this.nextEditIdx];
    const t = e ? this.translateOldToCur(e.offsetObj) : null;
    if (t === null) {
      return null;
    } else {
      return aOn(n, t);
    }
  }
  translateOldToCur(n) {
    if (n.lineCount === this.deltaLineIdxInOld) {
      return ZN(n.lineCount + this.deltaOldToNewLineCount, n.columnCount + this.deltaOldToNewColumnCount);
    } else {
      return ZN(n.lineCount + this.deltaOldToNewLineCount, n.columnCount);
    }
  }
  translateCurToOld(n) {
    const e = Lde(n);
    if (e.lineCount - this.deltaOldToNewLineCount === this.deltaLineIdxInOld) {
      return ZN(e.lineCount - this.deltaOldToNewLineCount, e.columnCount - this.deltaOldToNewColumnCount);
    } else {
      return ZN(e.lineCount - this.deltaOldToNewLineCount, e.columnCount);
    }
  }
  adjustNextEdit(n) {
    while (this.nextEditIdx < this.edits.length) {
      const e = this.edits[this.nextEditIdx];
      const t = this.translateOldToCur(e.endOffsetAfterObj);
      if (EOt(t, n)) {
        this.nextEditIdx++;
        const i = Lde(t);
        const r = Lde(this.translateOldToCur(e.endOffsetBeforeObj));
        const s = i.lineCount - r.lineCount;
        this.deltaOldToNewLineCount += s;
        const o = this.deltaLineIdxInOld === e.endOffsetBeforeObj.lineCount ? this.deltaOldToNewColumnCount : 0;
        const a = i.columnCount - r.columnCount;
        this.deltaOldToNewColumnCount = o + a;
        this.deltaLineIdxInOld = e.endOffsetBeforeObj.lineCount;
      } else {
        break;
      }
    }
  }
};
pph = class HJb {
  static from(e) {
    return new HJb(e.startOffset, e.endOffset, e.newLength);
  }
  constructor(e, t, i) {
    this.endOffsetBeforeObj = Lde(t);
    this.endOffsetAfterObj = Lde($B(e, i));
    this.offsetObj = Lde(e);
  }
};
