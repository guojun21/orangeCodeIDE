"use strict";

// Module: out-build/vs/editor/common/commands/surroundSelectionCommand.js
// Offset: 799676 (bundle byte offset)
// Size: 5865 bytes
ts();
db();
Elh = class {
  constructor(n, e, t) {
    this._range = n;
    this._charBeforeSelection = e;
    this._charAfterSelection = t;
  }
  getEditOperations(n, e) {
    e.addTrackedEditOperation(new Zt(this._range.startLineNumber, this._range.startColumn, this._range.startLineNumber, this._range.startColumn), this._charBeforeSelection);
    e.addTrackedEditOperation(new Zt(this._range.endLineNumber, this._range.endColumn, this._range.endLineNumber, this._range.endColumn), this._charAfterSelection);
  }
  computeCursorState(n, e) {
    const t = e.getInverseEditOperations();
    const i = t[0].range;
    const r = t[1].range;
    return new Vl(i.endLineNumber, i.endColumn, r.endLineNumber, r.endColumn - this._charAfterSelection.length);
  }
};
xlh = class {
  constructor(n, e, t) {
    this._position = n;
    this._text = e;
    this._charAfter = t;
  }
  getEditOperations(n, e) {
    e.addTrackedEditOperation(new Zt(this._position.lineNumber, this._position.column, this._position.lineNumber, this._position.column), this._text + this._charAfter);
  }
  computeCursorState(n, e) {
    const i = e.getInverseEditOperations()[0].range;
    return new Vl(i.endLineNumber, i.startColumn, i.endLineNumber, i.endColumn - this._charAfter.length);
  }
};
