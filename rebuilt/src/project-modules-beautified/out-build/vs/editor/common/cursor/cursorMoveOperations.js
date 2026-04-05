"use strict";

// Module: out-build/vs/editor/common/cursor/cursorMoveOperations.js
// Offset: 698197 (bundle byte offset)
// Size: 5346 bytes
oa();
koe();
tl();
ts();
wch();
Eoe();
GFo = class {
  constructor(n, e, t) {
    this._cursorPositionBrand = undefined;
    this.lineNumber = n;
    this.column = e;
    this.leftoverVisibleColumns = t;
  }
};
tN = class tee {
  static leftPosition(e, t) {
    if (t.column > e.getLineMinColumn(t.lineNumber)) {
      return t.delta(undefined, -Jih(e.getLineContent(t.lineNumber), t.column - 1));
    }
    if (t.lineNumber > 1) {
      const i = t.lineNumber - 1;
      return new ar(i, e.getLineMaxColumn(i));
    } else {
      return t;
    }
  }
  static leftPositionAtomicSoftTabs(e, t, i) {
    if (t.column <= e.getLineIndentColumn(t.lineNumber)) {
      const r = e.getLineMinColumn(t.lineNumber);
      const s = e.getLineContent(t.lineNumber);
      const o = JFo.atomicPosition(s, t.column - 1, i, 0);
      if (o !== -1 && o + 1 >= r) {
        return new ar(t.lineNumber, o + 1);
      }
    }
    return this.leftPosition(e, t);
  }
  static left(e, t, i) {
    const r = e.stickyTabStops ? tee.leftPositionAtomicSoftTabs(t, i, e.tabSize) : tee.leftPosition(t, i);
    return new GFo(r.lineNumber, r.column, 0);
  }
  static moveLeft(e, t, i, r, s) {
    let o;
    let a;
    if (i.hasSelection() && !r) {
      o = i.selection.startLineNumber;
      a = i.selection.startColumn;
    } else {
      const l = i.position.delta(undefined, -(s - 1));
      const u = t.normalizePosition(tee.clipPositionColumn(l, t), 0);
      const d = tee.left(e, t, u);
      o = d.lineNumber;
      a = d.column;
    }
    return i.move(r, o, a, 0);
  }
  static clipPositionColumn(e, t) {
    return new ar(e.lineNumber, tee.clipRange(e.column, t.getLineMinColumn(e.lineNumber), t.getLineMaxColumn(e.lineNumber)));
  }
  static clipRange(e, t, i) {
    if (e < t) {
      return t;
    } else if (e > i) {
      return i;
    } else {
      return e;
    }
  }
  static rightPosition(e, t, i) {
    if (i < e.getLineMaxColumn(t)) {
      i = i + G0c(e.getLineContent(t), i - 1);
    } else if (t < e.getLineCount()) {
      t = t + 1;
      i = e.getLineMinColumn(t);
    }
    return new ar(t, i);
  }
  static rightPositionAtomicSoftTabs(e, t, i, r, s) {
    if (i < e.getLineIndentColumn(t)) {
      const o = e.getLineContent(t);
      const a = JFo.atomicPosition(o, i - 1, r, 1);
      if (a !== -1) {
        return new ar(t, a + 1);
      }
    }
    return this.rightPosition(e, t, i);
  }
  static right(e, t, i) {
    const r = e.stickyTabStops ? tee.rightPositionAtomicSoftTabs(t, i.lineNumber, i.column, e.tabSize, e.indentSize) : tee.rightPosition(t, i.lineNumber, i.column);
    return new GFo(r.lineNumber, r.column, 0);
  }
  static moveRight(e, t, i, r, s) {
    let o;
    let a;
    if (i.hasSelection() && !r) {
      o = i.selection.endLineNumber;
      a = i.selection.endColumn;
    } else {
      const l = i.position.delta(undefined, s - 1);
      const u = t.normalizePosition(tee.clipPositionColumn(l, t), 1);
      const d = tee.right(e, t, u);
      o = d.lineNumber;
      a = d.column;
    }
    return i.move(r, o, a, 0);
  }
  static vertical(e, t, i, r, s, o, a, l) {
    const u = ZP.visibleColumnFromColumn(t.getLineContent(i), r, e.tabSize) + s;
    const d = t.getLineCount();
    const m = i === 1 && r === 1;
    const p = i === d && r === t.getLineMaxColumn(i);
    const g = o < i ? m : p;
    i = o;
    if (i < 1) {
      i = 1;
      if (a) {
        r = t.getLineMinColumn(i);
      } else {
        r = Math.min(t.getLineMaxColumn(i), r);
      }
    } else if (i > d) {
      i = d;
      if (a) {
        r = t.getLineMaxColumn(i);
      } else {
        r = Math.min(t.getLineMaxColumn(i), r);
      }
    } else {
      r = e.columnFromVisibleColumn(t, i, u);
    }
    if (g) {
      s = 0;
    } else {
      s = u - ZP.visibleColumnFromColumn(t.getLineContent(i), r, e.tabSize);
    }
    if (l !== undefined) {
      const f = new ar(i, r);
      const A = t.normalizePosition(f, l);
      s = s + (r - A.column);
      i = A.lineNumber;
      r = A.column;
    }
    return new GFo(i, r, s);
  }
  static down(e, t, i, r, s, o, a) {
    return this.vertical(e, t, i, r, s, i + o, a, 4);
  }
  static moveDown(e, t, i, r, s) {
    let o;
    let a;
    if (i.hasSelection() && !r) {
      o = i.selection.endLineNumber;
      a = i.selection.endColumn;
    } else {
      o = i.position.lineNumber;
      a = i.position.column;
    }
    let l = 0;
    let u;
    do {
      u = tee.down(e, t, o + l, a, i.leftoverVisibleColumns, s, true);
      if (t.normalizePosition(new ar(u.lineNumber, u.column), 2).lineNumber > o) {
        break;
      }
    } while (l++ < 10 && o + l < t.getLineCount());
    return i.move(r, u.lineNumber, u.column, u.leftoverVisibleColumns);
  }
  static translateDown(e, t, i) {
    const r = i.selection;
    const s = tee.down(e, t, r.selectionStartLineNumber, r.selectionStartColumn, i.selectionStartLeftoverVisibleColumns, 1, false);
    const o = tee.down(e, t, r.positionLineNumber, r.positionColumn, i.leftoverVisibleColumns, 1, false);
    return new hW(new Zt(s.lineNumber, s.column, s.lineNumber, s.column), 0, s.leftoverVisibleColumns, new ar(o.lineNumber, o.column), o.leftoverVisibleColumns);
  }
  static up(e, t, i, r, s, o, a) {
    return this.vertical(e, t, i, r, s, i - o, a, 3);
  }
  static moveUp(e, t, i, r, s) {
    let o;
    let a;
    if (i.hasSelection() && !r) {
      o = i.selection.startLineNumber;
      a = i.selection.startColumn;
    } else {
      o = i.position.lineNumber;
      a = i.position.column;
    }
    const l = tee.up(e, t, o, a, i.leftoverVisibleColumns, s, true);
    return i.move(r, l.lineNumber, l.column, l.leftoverVisibleColumns);
  }
  static translateUp(e, t, i) {
    const r = i.selection;
    const s = tee.up(e, t, r.selectionStartLineNumber, r.selectionStartColumn, i.selectionStartLeftoverVisibleColumns, 1, false);
    const o = tee.up(e, t, r.positionLineNumber, r.positionColumn, i.leftoverVisibleColumns, 1, false);
    return new hW(new Zt(s.lineNumber, s.column, s.lineNumber, s.column), 0, s.leftoverVisibleColumns, new ar(o.lineNumber, o.column), o.leftoverVisibleColumns);
  }
  static _isBlankLine(e, t) {
    return e.getLineFirstNonWhitespaceColumn(t) === 0;
  }
  static moveToPrevBlankLine(e, t, i, r) {
    let s = i.position.lineNumber;
    while (s > 1 && this._isBlankLine(t, s)) {
      s--;
    }
    while (s > 1 && !this._isBlankLine(t, s)) {
      s--;
    }
    return i.move(r, s, t.getLineMinColumn(s), 0);
  }
  static moveToNextBlankLine(e, t, i, r) {
    const s = t.getLineCount();
    let o = i.position.lineNumber;
    while (o < s && this._isBlankLine(t, o)) {
      o++;
    }
    while (o < s && !this._isBlankLine(t, o)) {
      o++;
    }
    return i.move(r, o, t.getLineMinColumn(o), 0);
  }
  static moveToBeginningOfLine(e, t, i, r) {
    const s = i.position.lineNumber;
    const o = t.getLineMinColumn(s);
    const a = t.getLineFirstNonWhitespaceColumn(s) || o;
    let l;
    if (i.position.column === a) {
      l = o;
    } else {
      l = a;
    }
    return i.move(r, s, l, 0);
  }
  static moveToEndOfLine(e, t, i, r, s) {
    const o = i.position.lineNumber;
    const a = t.getLineMaxColumn(o);
    return i.move(r, o, a, s ? 1073741824 - a : 0);
  }
  static moveToBeginningOfBuffer(e, t, i, r) {
    return i.move(r, 1, 1, 0);
  }
  static moveToEndOfBuffer(e, t, i, r) {
    const s = t.getLineCount();
    const o = t.getLineMaxColumn(s);
    return i.move(r, s, o, 0);
  }
};
