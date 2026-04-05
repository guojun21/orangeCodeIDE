"use strict";

// Module: out-build/vs/editor/common/cursor/cursorMoveCommands.js
// Offset: 721911 (bundle byte offset)
// Size: 13764 bytes
Js();
Eoe();
Lkc();
VFo();
tl();
ts();
y9 = class {
  static addCursorDown(n, e, t) {
    const i = [];
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s];
      i[r++] = new s_(a.modelState, a.viewState);
      if (t) {
        i[r++] = s_.fromModelState(tN.translateDown(n.cursorConfig, n.model, a.modelState));
      } else {
        i[r++] = s_.fromViewState(tN.translateDown(n.cursorConfig, n, a.viewState));
      }
    }
    return i;
  }
  static addCursorUp(n, e, t) {
    const i = [];
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s];
      i[r++] = new s_(a.modelState, a.viewState);
      if (t) {
        i[r++] = s_.fromModelState(tN.translateUp(n.cursorConfig, n.model, a.modelState));
      } else {
        i[r++] = s_.fromViewState(tN.translateUp(n.cursorConfig, n, a.viewState));
      }
    }
    return i;
  }
  static moveToBeginningOfLine(n, e, t) {
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      i[r] = this._moveToLineStart(n, o, t);
    }
    return i;
  }
  static _moveToLineStart(n, e, t) {
    const i = e.viewState.position.column;
    const r = e.modelState.position.column;
    const s = i === r;
    const o = e.viewState.position.lineNumber;
    const a = n.getLineFirstNonWhitespaceColumn(o);
    if (!s && i !== a) {
      return this._moveToLineStartByView(n, e, t);
    } else {
      return this._moveToLineStartByModel(n, e, t);
    }
  }
  static _moveToLineStartByView(n, e, t) {
    return s_.fromViewState(tN.moveToBeginningOfLine(n.cursorConfig, n, e.viewState, t));
  }
  static _moveToLineStartByModel(n, e, t) {
    return s_.fromModelState(tN.moveToBeginningOfLine(n.cursorConfig, n.model, e.modelState, t));
  }
  static moveToEndOfLine(n, e, t, i) {
    const r = [];
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s];
      r[s] = this._moveToLineEnd(n, a, t, i);
    }
    return r;
  }
  static _moveToLineEnd(n, e, t, i) {
    const r = e.viewState.position;
    const s = n.getLineMaxColumn(r.lineNumber);
    const o = r.column === s;
    const a = e.modelState.position;
    const l = n.model.getLineMaxColumn(a.lineNumber);
    const u = s - r.column === l - a.column;
    if (o || u) {
      return this._moveToLineEndByModel(n, e, t, i);
    } else {
      return this._moveToLineEndByView(n, e, t, i);
    }
  }
  static _moveToLineEndByView(n, e, t, i) {
    return s_.fromViewState(tN.moveToEndOfLine(n.cursorConfig, n, e.viewState, t, i));
  }
  static _moveToLineEndByModel(n, e, t, i) {
    return s_.fromModelState(tN.moveToEndOfLine(n.cursorConfig, n.model, e.modelState, t, i));
  }
  static expandLineSelection(n, e) {
    const t = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const s = e[i];
      const o = s.modelState.selection.startLineNumber;
      const a = n.model.getLineCount();
      let l = s.modelState.selection.endLineNumber;
      let u;
      if (l === a) {
        u = n.model.getLineMaxColumn(a);
      } else {
        l++;
        u = 1;
      }
      t[i] = s_.fromModelState(new hW(new Zt(o, 1, o, 1), 0, 0, new ar(l, u), 0));
    }
    return t;
  }
  static moveToBeginningOfBuffer(n, e, t) {
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      i[r] = s_.fromModelState(tN.moveToBeginningOfBuffer(n.cursorConfig, n.model, o.modelState, t));
    }
    return i;
  }
  static moveToEndOfBuffer(n, e, t) {
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      i[r] = s_.fromModelState(tN.moveToEndOfBuffer(n.cursorConfig, n.model, o.modelState, t));
    }
    return i;
  }
  static selectAll(n, e) {
    const t = n.model.getLineCount();
    const i = n.model.getLineMaxColumn(t);
    return s_.fromModelState(new hW(new Zt(1, 1, 1, 1), 0, 0, new ar(t, i), 0));
  }
  static line(n, e, t, i, r) {
    const s = n.model.validatePosition(i);
    const o = r ? n.coordinatesConverter.validateViewPosition(new ar(r.lineNumber, r.column), s) : n.coordinatesConverter.convertModelPositionToViewPosition(s);
    if (!t) {
      const l = n.model.getLineCount();
      let u = s.lineNumber + 1;
      let d = 1;
      if (u > l) {
        u = l;
        d = n.model.getLineMaxColumn(u);
      }
      return s_.fromModelState(new hW(new Zt(s.lineNumber, 1, u, d), 2, 0, new ar(u, d), 0));
    }
    const a = e.modelState.selectionStart.getStartPosition().lineNumber;
    if (s.lineNumber < a) {
      return s_.fromViewState(e.viewState.move(true, o.lineNumber, 1, 0));
    }
    if (s.lineNumber > a) {
      const l = n.getLineCount();
      let u = o.lineNumber + 1;
      let d = 1;
      if (u > l) {
        u = l;
        d = n.getLineMaxColumn(u);
      }
      return s_.fromViewState(e.viewState.move(true, u, d, 0));
    } else {
      const l = e.modelState.selectionStart.getEndPosition();
      return s_.fromModelState(e.modelState.move(true, l.lineNumber, l.column, 0));
    }
  }
  static word(n, e, t, i) {
    const r = n.model.validatePosition(i);
    return s_.fromModelState(B6.word(n.cursorConfig, n.model, e.modelState, t, r));
  }
  static cancelSelection(n, e) {
    if (!e.modelState.hasSelection()) {
      return new s_(e.modelState, e.viewState);
    }
    const t = e.viewState.position.lineNumber;
    const i = e.viewState.position.column;
    return s_.fromViewState(new hW(new Zt(t, i, t, i), 0, 0, new ar(t, i), 0));
  }
  static moveTo(n, e, t, i, r) {
    if (t) {
      if (e.modelState.selectionStartKind === 1) {
        return this.word(n, e, t, i);
      }
      if (e.modelState.selectionStartKind === 2) {
        return this.line(n, e, t, i, r);
      }
    }
    const s = n.model.validatePosition(i);
    const o = r ? n.coordinatesConverter.validateViewPosition(new ar(r.lineNumber, r.column), s) : n.coordinatesConverter.convertModelPositionToViewPosition(s);
    return s_.fromViewState(e.viewState.move(t, o.lineNumber, o.column, 0));
  }
  static simpleMove(n, e, t, i, r, s) {
    switch (t) {
      case 0:
        if (s === 4) {
          return this._moveHalfLineLeft(n, e, i);
        } else {
          return this._moveLeft(n, e, i, r);
        }
      case 1:
        if (s === 4) {
          return this._moveHalfLineRight(n, e, i);
        } else {
          return this._moveRight(n, e, i, r);
        }
      case 2:
        if (s === 2) {
          return this._moveUpByViewLines(n, e, i, r);
        } else {
          return this._moveUpByModelLines(n, e, i, r);
        }
      case 3:
        if (s === 2) {
          return this._moveDownByViewLines(n, e, i, r);
        } else {
          return this._moveDownByModelLines(n, e, i, r);
        }
      case 4:
        if (s === 2) {
          return e.map(o => s_.fromViewState(tN.moveToPrevBlankLine(n.cursorConfig, n, o.viewState, i)));
        } else {
          return e.map(o => s_.fromModelState(tN.moveToPrevBlankLine(n.cursorConfig, n.model, o.modelState, i)));
        }
      case 5:
        if (s === 2) {
          return e.map(o => s_.fromViewState(tN.moveToNextBlankLine(n.cursorConfig, n, o.viewState, i)));
        } else {
          return e.map(o => s_.fromModelState(tN.moveToNextBlankLine(n.cursorConfig, n.model, o.modelState, i)));
        }
      case 6:
        return this._moveToViewMinColumn(n, e, i);
      case 7:
        return this._moveToViewFirstNonWhitespaceColumn(n, e, i);
      case 8:
        return this._moveToViewCenterColumn(n, e, i);
      case 9:
        return this._moveToViewMaxColumn(n, e, i);
      case 10:
        return this._moveToViewLastNonWhitespaceColumn(n, e, i);
      default:
        return null;
    }
  }
  static viewportMove(n, e, t, i, r) {
    const s = n.getCompletelyVisibleViewRange();
    const o = n.coordinatesConverter.convertViewRangeToModelRange(s);
    switch (t) {
      case 11:
        {
          const a = this._firstLineNumberInRange(n.model, o, r);
          const l = n.model.getLineFirstNonWhitespaceColumn(a);
          return [this._moveToModelPosition(n, e[0], i, a, l)];
        }
      case 13:
        {
          const a = this._lastLineNumberInRange(n.model, o, r);
          const l = n.model.getLineFirstNonWhitespaceColumn(a);
          return [this._moveToModelPosition(n, e[0], i, a, l)];
        }
      case 12:
        {
          const a = Math.round((o.startLineNumber + o.endLineNumber) / 2);
          const l = n.model.getLineFirstNonWhitespaceColumn(a);
          return [this._moveToModelPosition(n, e[0], i, a, l)];
        }
      case 14:
        {
          const a = [];
          for (let l = 0, u = e.length; l < u; l++) {
            const d = e[l];
            a[l] = this.findPositionInViewportIfOutside(n, d, s, i);
          }
          return a;
        }
      default:
        return null;
    }
  }
  static findPositionInViewportIfOutside(n, e, t, i) {
    const r = e.viewState.position.lineNumber;
    if (t.startLineNumber <= r && r <= t.endLineNumber - 1) {
      return new s_(e.modelState, e.viewState);
    }
    {
      let s;
      if (r > t.endLineNumber - 1) {
        s = t.endLineNumber - 1;
      } else if (r < t.startLineNumber) {
        s = t.startLineNumber;
      } else {
        s = r;
      }
      const o = tN.vertical(n.cursorConfig, n, r, e.viewState.position.column, e.viewState.leftoverVisibleColumns, s, false);
      return s_.fromViewState(e.viewState.move(i, o.lineNumber, o.column, o.leftoverVisibleColumns));
    }
  }
  static _firstLineNumberInRange(n, e, t) {
    let i = e.startLineNumber;
    if (e.startColumn !== n.getLineMinColumn(i)) {
      i++;
    }
    return Math.min(e.endLineNumber, i + t - 1);
  }
  static _lastLineNumberInRange(n, e, t) {
    let i = e.startLineNumber;
    if (e.startColumn !== n.getLineMinColumn(i)) {
      i++;
    }
    return Math.max(i, e.endLineNumber - t + 1);
  }
  static _moveLeft(n, e, t, i) {
    return e.map(r => s_.fromViewState(tN.moveLeft(n.cursorConfig, n, r.viewState, t, i)));
  }
  static _moveHalfLineLeft(n, e, t) {
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      const a = o.viewState.position.lineNumber;
      const l = Math.round(n.getLineLength(a) / 2);
      i[r] = s_.fromViewState(tN.moveLeft(n.cursorConfig, n, o.viewState, t, l));
    }
    return i;
  }
  static _moveRight(n, e, t, i) {
    return e.map(r => s_.fromViewState(tN.moveRight(n.cursorConfig, n, r.viewState, t, i)));
  }
  static _moveHalfLineRight(n, e, t) {
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      const a = o.viewState.position.lineNumber;
      const l = Math.round(n.getLineLength(a) / 2);
      i[r] = s_.fromViewState(tN.moveRight(n.cursorConfig, n, o.viewState, t, l));
    }
    return i;
  }
  static _moveDownByViewLines(n, e, t, i) {
    const r = [];
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s];
      r[s] = s_.fromViewState(tN.moveDown(n.cursorConfig, n, a.viewState, t, i));
    }
    return r;
  }
  static _moveDownByModelLines(n, e, t, i) {
    const r = [];
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s];
      r[s] = s_.fromModelState(tN.moveDown(n.cursorConfig, n.model, a.modelState, t, i));
    }
    return r;
  }
  static _moveUpByViewLines(n, e, t, i) {
    const r = [];
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s];
      r[s] = s_.fromViewState(tN.moveUp(n.cursorConfig, n, a.viewState, t, i));
    }
    return r;
  }
  static _moveUpByModelLines(n, e, t, i) {
    const r = [];
    for (let s = 0, o = e.length; s < o; s++) {
      const a = e[s];
      r[s] = s_.fromModelState(tN.moveUp(n.cursorConfig, n.model, a.modelState, t, i));
    }
    return r;
  }
  static _moveToViewPosition(n, e, t, i, r) {
    return s_.fromViewState(e.viewState.move(t, i, r, 0));
  }
  static _moveToModelPosition(n, e, t, i, r) {
    return s_.fromModelState(e.modelState.move(t, i, r, 0));
  }
  static _moveToViewMinColumn(n, e, t) {
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      const a = o.viewState.position.lineNumber;
      const l = n.getLineMinColumn(a);
      i[r] = this._moveToViewPosition(n, o, t, a, l);
    }
    return i;
  }
  static _moveToViewFirstNonWhitespaceColumn(n, e, t) {
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      const a = o.viewState.position.lineNumber;
      const l = n.getLineFirstNonWhitespaceColumn(a);
      i[r] = this._moveToViewPosition(n, o, t, a, l);
    }
    return i;
  }
  static _moveToViewCenterColumn(n, e, t) {
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      const a = o.viewState.position.lineNumber;
      const l = Math.round((n.getLineMaxColumn(a) + n.getLineMinColumn(a)) / 2);
      i[r] = this._moveToViewPosition(n, o, t, a, l);
    }
    return i;
  }
  static _moveToViewMaxColumn(n, e, t) {
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      const a = o.viewState.position.lineNumber;
      const l = n.getLineMaxColumn(a);
      i[r] = this._moveToViewPosition(n, o, t, a, l);
    }
    return i;
  }
  static _moveToViewLastNonWhitespaceColumn(n, e, t) {
    const i = [];
    for (let r = 0, s = e.length; r < s; r++) {
      const o = e[r];
      const a = o.viewState.position.lineNumber;
      const l = n.getLineLastNonWhitespaceColumn(a);
      i[r] = this._moveToViewPosition(n, o, t, a, l);
    }
    return i;
  }
};
(function (n) {
  const e = function (s) {
    if (!$g(s)) {
      return false;
    }
    const o = s;
    return !!Qo(o.to) && (!!Df(o.select) || !!uT(o.select)) && (!!Df(o.by) || !!Qo(o.by)) && (!!Df(o.value) || !!_1(o.value));
  };
  n.metadata = {
    description: "Move cursor to a logical position in the view",
    args: [{
      name: "Cursor move argument object",
      description: `Property-value pairs that can be passed through this argument:
					* 'to': A mandatory logical position value providing where to move the cursor.
						\`\`\`
						'left', 'right', 'up', 'down', 'prevBlankLine', 'nextBlankLine',
						'wrappedLineStart', 'wrappedLineEnd', 'wrappedLineColumnCenter'
						'wrappedLineFirstNonWhitespaceCharacter', 'wrappedLineLastNonWhitespaceCharacter'
						'viewPortTop', 'viewPortCenter', 'viewPortBottom', 'viewPortIfOutside'
						\`\`\`
					* 'by': Unit to move. Default is computed based on 'to' value.
						\`\`\`
						'line', 'wrappedLine', 'character', 'halfLine'
						\`\`\`
					* 'value': Number of units to move. Default is '1'.
					* 'select': If 'true' makes the selection. Default is 'false'.
				`,
      constraint: e,
      schema: {
        type: "object",
        required: ["to"],
        properties: {
          to: {
            type: "string",
            enum: ["left", "right", "up", "down", "prevBlankLine", "nextBlankLine", "wrappedLineStart", "wrappedLineEnd", "wrappedLineColumnCenter", "wrappedLineFirstNonWhitespaceCharacter", "wrappedLineLastNonWhitespaceCharacter", "viewPortTop", "viewPortCenter", "viewPortBottom", "viewPortIfOutside"]
          },
          by: {
            type: "string",
            enum: ["line", "wrappedLine", "character", "halfLine"]
          },
          value: {
            type: "number",
            default: 1
          },
          select: {
            type: "boolean",
            default: false
          }
        }
      }
    }]
  };
  n.RawDirection = {
    Left: "left",
    Right: "right",
    Up: "up",
    Down: "down",
    PrevBlankLine: "prevBlankLine",
    NextBlankLine: "nextBlankLine",
    WrappedLineStart: "wrappedLineStart",
    WrappedLineFirstNonWhitespaceCharacter: "wrappedLineFirstNonWhitespaceCharacter",
    WrappedLineColumnCenter: "wrappedLineColumnCenter",
    WrappedLineEnd: "wrappedLineEnd",
    WrappedLineLastNonWhitespaceCharacter: "wrappedLineLastNonWhitespaceCharacter",
    ViewPortTop: "viewPortTop",
    ViewPortCenter: "viewPortCenter",
    ViewPortBottom: "viewPortBottom",
    ViewPortIfOutside: "viewPortIfOutside"
  };
  n.RawUnit = {
    Line: "line",
    WrappedLine: "wrappedLine",
    Character: "character",
    HalfLine: "halfLine"
  };
  function t(s) {
    if (!s.to) {
      return null;
    }
    let o;
    switch (s.to) {
      case n.RawDirection.Left:
        o = 0;
        break;
      case n.RawDirection.Right:
        o = 1;
        break;
      case n.RawDirection.Up:
        o = 2;
        break;
      case n.RawDirection.Down:
        o = 3;
        break;
      case n.RawDirection.PrevBlankLine:
        o = 4;
        break;
      case n.RawDirection.NextBlankLine:
        o = 5;
        break;
      case n.RawDirection.WrappedLineStart:
        o = 6;
        break;
      case n.RawDirection.WrappedLineFirstNonWhitespaceCharacter:
        o = 7;
        break;
      case n.RawDirection.WrappedLineColumnCenter:
        o = 8;
        break;
      case n.RawDirection.WrappedLineEnd:
        o = 9;
        break;
      case n.RawDirection.WrappedLineLastNonWhitespaceCharacter:
        o = 10;
        break;
      case n.RawDirection.ViewPortTop:
        o = 11;
        break;
      case n.RawDirection.ViewPortBottom:
        o = 13;
        break;
      case n.RawDirection.ViewPortCenter:
        o = 12;
        break;
      case n.RawDirection.ViewPortIfOutside:
        o = 14;
        break;
      default:
        return null;
    }
    let a = 0;
    switch (s.by) {
      case n.RawUnit.Line:
        a = 1;
        break;
      case n.RawUnit.WrappedLine:
        a = 2;
        break;
      case n.RawUnit.Character:
        a = 3;
        break;
      case n.RawUnit.HalfLine:
        a = 4;
        break;
    }
    return {
      direction: o,
      unit: a,
      select: !!s.select,
      value: s.value || 1
    };
  }
  n.parse = t;
  let i;
  (function (s) {
    s[s.Left = 0] = "Left";
    s[s.Right = 1] = "Right";
    s[s.Up = 2] = "Up";
    s[s.Down = 3] = "Down";
    s[s.PrevBlankLine = 4] = "PrevBlankLine";
    s[s.NextBlankLine = 5] = "NextBlankLine";
    s[s.WrappedLineStart = 6] = "WrappedLineStart";
    s[s.WrappedLineFirstNonWhitespaceCharacter = 7] = "WrappedLineFirstNonWhitespaceCharacter";
    s[s.WrappedLineColumnCenter = 8] = "WrappedLineColumnCenter";
    s[s.WrappedLineEnd = 9] = "WrappedLineEnd";
    s[s.WrappedLineLastNonWhitespaceCharacter = 10] = "WrappedLineLastNonWhitespaceCharacter";
    s[s.ViewPortTop = 11] = "ViewPortTop";
    s[s.ViewPortCenter = 12] = "ViewPortCenter";
    s[s.ViewPortBottom = 13] = "ViewPortBottom";
    s[s.ViewPortIfOutside = 14] = "ViewPortIfOutside";
  })(i = n.Direction ||= {});
  let r;
  (function (s) {
    s[s.None = 0] = "None";
    s[s.Line = 1] = "Line";
    s[s.WrappedLine = 2] = "WrappedLine";
    s[s.Character = 3] = "Character";
    s[s.HalfLine = 4] = "HalfLine";
  })(r = n.Unit ||= {});
})(KFo ||= {});
