"use strict";

// Module: out-build/vs/editor/common/commands/replaceCommand.js
// Offset: 694556 (bundle byte offset)
// Size: 2544 bytes
tl();
ts();
db();
D6 = class {
  constructor(n, e, t = false) {
    this._range = n;
    this._text = e;
    this.insertsAutoWhitespace = t;
  }
  getEditOperations(n, e) {
    e.addTrackedEditOperation(this._range, this._text);
  }
  computeCursorState(n, e) {
    const i = e.getInverseEditOperations()[0].range;
    return Vl.fromPositions(i.getEndPosition());
  }
};
qFo = class {
  constructor(n, e, t = false) {
    this._range = n;
    this._text = e;
    this.insertsAutoWhitespace = t;
  }
  getEditOperations(n, e) {
    const t = this._range.getStartPosition();
    const i = this._range.getEndPosition();
    const r = i.lineNumber;
    const s = this._text.length + (this._range.isEmpty() ? 0 : -1);
    let o = bch(n, i, s);
    if (o.lineNumber > r) {
      o = new ar(r, n.getLineMaxColumn(r));
    }
    const a = Zt.fromPositions(t, o);
    e.addTrackedEditOperation(a, this._text);
  }
  computeCursorState(n, e) {
    const i = e.getInverseEditOperations()[0].range;
    return Vl.fromPositions(i.getEndPosition());
  }
};
vch = class {
  constructor(n, e) {
    this._range = n;
    this._text = e;
  }
  getEditOperations(n, e) {
    e.addTrackedEditOperation(this._range, this._text);
  }
  computeCursorState(n, e) {
    const i = e.getInverseEditOperations()[0].range;
    return Vl.fromRange(i, 0);
  }
};
d4n = class {
  constructor(n, e, t = false) {
    this._range = n;
    this._text = e;
    this.insertsAutoWhitespace = t;
  }
  getEditOperations(n, e) {
    e.addTrackedEditOperation(this._range, this._text);
  }
  computeCursorState(n, e) {
    const i = e.getInverseEditOperations()[0].range;
    return Vl.fromPositions(i.getStartPosition());
  }
};
h4n = class {
  constructor(n, e, t, i, r = false) {
    this._range = n;
    this._text = e;
    this._columnDeltaOffset = i;
    this._lineNumberDeltaOffset = t;
    this.insertsAutoWhitespace = r;
  }
  getEditOperations(n, e) {
    e.addTrackedEditOperation(this._range, this._text);
  }
  computeCursorState(n, e) {
    const i = e.getInverseEditOperations()[0].range;
    return Vl.fromPositions(i.getEndPosition().delta(this._lineNumberDeltaOffset, this._columnDeltaOffset));
  }
};
Ach = class {
  constructor(n) {
    this._range = n;
  }
  getEditOperations(n, e) {
    const t = n.getValueInRange(this._range);
    const i = this._range.getEndPosition();
    const r = i.lineNumber;
    let s = bch(n, i, t.length);
    if (s.lineNumber > r) {
      s = new ar(r, n.getLineMaxColumn(r));
    }
    const o = Zt.fromPositions(i, s);
    e.addTrackedEditOperation(o, "");
  }
  computeCursorState(n, e) {
    const i = e.getInverseEditOperations()[0].range;
    return Vl.fromPositions(i.getEndPosition());
  }
};
HFo = class {
  constructor(n, e, t, i = false) {
    this._range = n;
    this._text = e;
    this._initialSelection = t;
    this._forceMoveMarkers = i;
    this._selectionId = null;
  }
  getEditOperations(n, e) {
    e.addTrackedEditOperation(this._range, this._text, this._forceMoveMarkers);
    this._selectionId = e.trackSelection(this._initialSelection);
  }
  computeCursorState(n, e) {
    return e.getTrackedSelection(this._selectionId);
  }
};
