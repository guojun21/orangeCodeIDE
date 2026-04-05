"use strict";

// Module: out-build/vs/editor/common/core/range.js
// Offset: 673831 (bundle byte offset)
// Size: 7568 bytes
tl();
Zt = class r4 {
  constructor(e, t, i, r) {
    let s;
    let o;
    let a;
    let l;
    if (e == null || typeof e == "number" || Number.isNaN(e)) {
      s = e;
      o = t;
      a = i;
      l = r;
    } else if ("startLineNumber" in e && "startColumn" in e) {
      s = e.startLineNumber;
      o = e.startColumn;
      a = e.endLineNumber;
      l = e.endColumn;
    } else {
      s = e.startLineNumber;
      o = 1;
      a = e.endLineNumberExclusive;
      l = 1;
    }
    if (s > a || s === a && o > l) {
      this.startLineNumber = a;
      this.startColumn = l;
      this.endLineNumber = s;
      this.endColumn = o;
    } else {
      this.startLineNumber = s;
      this.startColumn = o;
      this.endLineNumber = a;
      this.endColumn = l;
    }
  }
  asIRange() {
    return {
      startLineNumber: this.startLineNumber,
      startColumn: this.startColumn,
      endLineNumber: this.endLineNumber,
      endColumn: this.endColumn
    };
  }
  isEmpty() {
    return r4.isEmpty(this);
  }
  static isEmpty(e) {
    return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn;
  }
  containsPosition(e) {
    return r4.containsPosition(this, e);
  }
  static containsPosition(e, t) {
    return !(t.lineNumber < e.startLineNumber) && !(t.lineNumber > e.endLineNumber) && (t.lineNumber !== e.startLineNumber || !(t.column < e.startColumn)) && (t.lineNumber !== e.endLineNumber || !(t.column > e.endColumn));
  }
  static strictContainsPosition(e, t) {
    return !(t.lineNumber < e.startLineNumber) && !(t.lineNumber > e.endLineNumber) && (t.lineNumber !== e.startLineNumber || !(t.column <= e.startColumn)) && (t.lineNumber !== e.endLineNumber || !(t.column >= e.endColumn));
  }
  containsRange(e) {
    return r4.containsRange(this, e);
  }
  static containsRange(e, t) {
    return !(t.startLineNumber < e.startLineNumber) && !(t.endLineNumber < e.startLineNumber) && !(t.startLineNumber > e.endLineNumber) && !(t.endLineNumber > e.endLineNumber) && (t.startLineNumber !== e.startLineNumber || !(t.startColumn < e.startColumn)) && (t.endLineNumber !== e.endLineNumber || !(t.endColumn > e.endColumn));
  }
  strictContainsRange(e) {
    return r4.strictContainsRange(this, e);
  }
  static strictContainsRange(e, t) {
    return !(t.startLineNumber < e.startLineNumber) && !(t.endLineNumber < e.startLineNumber) && !(t.startLineNumber > e.endLineNumber) && !(t.endLineNumber > e.endLineNumber) && (t.startLineNumber !== e.startLineNumber || !(t.startColumn <= e.startColumn)) && (t.endLineNumber !== e.endLineNumber || !(t.endColumn >= e.endColumn));
  }
  plusRange(e) {
    return r4.plusRange(this, e);
  }
  static getRangeAbove(e, t) {
    const i = Math.max(e.startLineNumber - t, 1);
    const r = e.startLineNumber;
    return new r4(i, e.startColumn, r, e.startColumn);
  }
  static getRangeOnBelow(e, t, i) {
    const r = e.endLineNumber;
    const s = Math.min(e.endLineNumber + t, i);
    return new r4(r, e.endColumn, s, e.endColumn);
  }
  static getExtendedRange(e, t, i) {
    const r = Math.max(e.startLineNumber - t, 0);
    const s = Math.min(e.endLineNumber + t, i);
    return new r4(r, e.startColumn, s, e.endColumn);
  }
  static plusRange(e, t) {
    let i;
    let r;
    let s;
    let o;
    if (t.startLineNumber < e.startLineNumber) {
      i = t.startLineNumber;
      r = t.startColumn;
    } else if (t.startLineNumber === e.startLineNumber) {
      i = t.startLineNumber;
      r = Math.min(t.startColumn, e.startColumn);
    } else {
      i = e.startLineNumber;
      r = e.startColumn;
    }
    if (t.endLineNumber > e.endLineNumber) {
      s = t.endLineNumber;
      o = t.endColumn;
    } else if (t.endLineNumber === e.endLineNumber) {
      s = t.endLineNumber;
      o = Math.max(t.endColumn, e.endColumn);
    } else {
      s = e.endLineNumber;
      o = e.endColumn;
    }
    return new r4(i, r, s, o);
  }
  intersectRanges(e) {
    return r4.intersectRanges(this, e);
  }
  static intersectRanges(e, t) {
    let i = e.startLineNumber;
    let r = e.startColumn;
    let s = e.endLineNumber;
    let o = e.endColumn;
    const a = t.startLineNumber;
    const l = t.startColumn;
    const u = t.endLineNumber;
    const d = t.endColumn;
    if (i < a) {
      i = a;
      r = l;
    } else if (i === a) {
      r = Math.max(r, l);
    }
    if (s > u) {
      s = u;
      o = d;
    } else if (s === u) {
      o = Math.min(o, d);
    }
    if (i > s || i === s && r > o) {
      return null;
    } else {
      return new r4(i, r, s, o);
    }
  }
  static inverseEditRange(e, t) {
    return {
      startLineNumber: e.startLineNumber,
      startColumn: e.startColumn,
      endLineNumber: e.startLineNumber + t.split(`
`).length - 1,
      endColumn: t.lastIndexOf(`
`) === -1 ? e.startColumn + t.length : t.length - t.lastIndexOf(`
`)
    };
  }
  whereIs(e) {
    if (e.endLineNumber < this.startLineNumber || e.endLineNumber === this.startLineNumber && e.endColumn <= this.startColumn) {
      return "before";
    } else if (e.startLineNumber > this.endLineNumber || e.startLineNumber === this.endLineNumber && e.startColumn >= this.endColumn) {
      return "after";
    } else {
      return "overlapping";
    }
  }
  static rangeAfterEdit(e, t) {
    const i = r4.lift(e).whereIs(t.range);
    switch (i) {
      case "overlapping":
        throw new Error("Range is overlapping. The range after edit is ambiguous.");
      case "after":
        return e;
      case "before":
        {
          const r = t.text.split(`
`).length - 1 - (t.range.endLineNumber - t.range.startLineNumber);
          if (t.range.endLineNumber < e.startLineNumber) {
            return {
              startLineNumber: e.startLineNumber + r,
              startColumn: e.startColumn,
              endLineNumber: e.endLineNumber + r,
              endColumn: e.endColumn
            };
          }
          {
            const s = t.text.lastIndexOf(`
`) === -1 ? t.text.length : t.text.length - t.text.lastIndexOf(`
`) - 1;
            const o = t.range.startLineNumber === t.range.endLineNumber ? t.range.endColumn - t.range.startColumn : t.range.endColumn - 1;
            const a = s - o;
            return {
              startLineNumber: e.startLineNumber + r,
              startColumn: e.startColumn + a,
              endLineNumber: e.endLineNumber + r,
              endColumn: e.startLineNumber === e.endLineNumber ? e.endColumn + a : e.endColumn
            };
          }
        }
      default:
        {
          const r = i;
          return e;
        }
    }
  }
  equalsRange(e) {
    return r4.equalsRange(this, e);
  }
  static equalsRange(e, t) {
    if (!e && !t) {
      return true;
    } else {
      return !!e && !!t && e.startLineNumber === t.startLineNumber && e.startColumn === t.startColumn && e.endLineNumber === t.endLineNumber && e.endColumn === t.endColumn;
    }
  }
  getEndPosition() {
    return r4.getEndPosition(this);
  }
  static getEndPosition(e) {
    return new ar(e.endLineNumber, e.endColumn);
  }
  getStartPosition() {
    return r4.getStartPosition(this);
  }
  static getStartPosition(e) {
    return new ar(e.startLineNumber, e.startColumn);
  }
  toString() {
    return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
  }
  setEndPosition(e, t) {
    return new r4(this.startLineNumber, this.startColumn, e, t);
  }
  setStartPosition(e, t) {
    return new r4(e, t, this.endLineNumber, this.endColumn);
  }
  collapseToStart() {
    return r4.collapseToStart(this);
  }
  static collapseToStart(e) {
    return new r4(e.startLineNumber, e.startColumn, e.startLineNumber, e.startColumn);
  }
  collapseToEnd() {
    return r4.collapseToEnd(this);
  }
  static collapseToEnd(e) {
    return new r4(e.endLineNumber, e.endColumn, e.endLineNumber, e.endColumn);
  }
  delta(e) {
    return new r4(this.startLineNumber + e, this.startColumn, this.endLineNumber + e, this.endColumn);
  }
  isSingleLine() {
    return this.startLineNumber === this.endLineNumber;
  }
  static fromPositions(e, t = e) {
    return new r4(e.lineNumber, e.column, t.lineNumber, t.column);
  }
  static lift(e) {
    if (e) {
      return new r4(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn);
    } else {
      return null;
    }
  }
  static isIRange(e) {
    return e && typeof e.startLineNumber == "number" && typeof e.startColumn == "number" && typeof e.endLineNumber == "number" && typeof e.endColumn == "number";
  }
  static areIntersectingOrTouching(e, t) {
    return !(e.endLineNumber < t.startLineNumber) && (e.endLineNumber !== t.startLineNumber || !(e.endColumn < t.startColumn)) && !(t.endLineNumber < e.startLineNumber) && (t.endLineNumber !== e.startLineNumber || !(t.endColumn < e.startColumn));
  }
  static areIntersecting(e, t) {
    return !(e.endLineNumber < t.startLineNumber) && (e.endLineNumber !== t.startLineNumber || !(e.endColumn <= t.startColumn)) && !(t.endLineNumber < e.startLineNumber) && (t.endLineNumber !== e.startLineNumber || !(t.endColumn <= e.startColumn));
  }
  static areOnlyIntersecting(e, t) {
    return !(e.endLineNumber < t.startLineNumber - 1) && (e.endLineNumber !== t.startLineNumber || !(e.endColumn < t.startColumn - 1)) && !(t.endLineNumber < e.startLineNumber - 1) && (t.endLineNumber !== e.startLineNumber || !(t.endColumn < e.startColumn - 1));
  }
  static compareRangesUsingStarts(e, t) {
    if (e && t) {
      const s = e.startLineNumber | 0;
      const o = t.startLineNumber | 0;
      if (s === o) {
        const a = e.startColumn | 0;
        const l = t.startColumn | 0;
        if (a === l) {
          const u = e.endLineNumber | 0;
          const d = t.endLineNumber | 0;
          if (u === d) {
            const m = e.endColumn | 0;
            const p = t.endColumn | 0;
            return m - p;
          }
          return u - d;
        }
        return a - l;
      }
      return s - o;
    }
    return (e ? 1 : 0) - (t ? 1 : 0);
  }
  static compareRangesUsingEnds(e, t) {
    if (e.endLineNumber === t.endLineNumber) {
      if (e.endColumn === t.endColumn) {
        if (e.startLineNumber === t.startLineNumber) {
          return e.startColumn - t.startColumn;
        } else {
          return e.startLineNumber - t.startLineNumber;
        }
      } else {
        return e.endColumn - t.endColumn;
      }
    } else {
      return e.endLineNumber - t.endLineNumber;
    }
  }
  static spansMultipleLines(e) {
    return e.endLineNumber > e.startLineNumber;
  }
  toJSON() {
    return this;
  }
};
