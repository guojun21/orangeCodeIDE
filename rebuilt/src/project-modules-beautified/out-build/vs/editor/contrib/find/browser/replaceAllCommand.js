"use strict";

// Module: out-build/vs/editor/contrib/find/browser/replaceAllCommand.js
// Offset: 25141265 (bundle byte offset)
// Size: 1472 bytes
ts();
Xbg = class {
  constructor(n, e, t) {
    this._editorSelection = n;
    this._ranges = e;
    this._replaceStrings = t;
    this._trackedEditorSelectionId = null;
  }
  getEditOperations(n, e) {
    if (this._ranges.length > 0) {
      const t = [];
      for (let s = 0; s < this._ranges.length; s++) {
        t.push({
          range: this._ranges[s],
          text: this._replaceStrings[s]
        });
      }
      t.sort((s, o) => Zt.compareRangesUsingStarts(s.range, o.range));
      const i = [];
      let r = t[0];
      for (let s = 1; s < t.length; s++) {
        if (r.range.endLineNumber === t[s].range.startLineNumber && r.range.endColumn === t[s].range.startColumn) {
          r.range = r.range.plusRange(t[s].range);
          r.text = r.text + t[s].text;
        } else {
          i.push(r);
          r = t[s];
        }
      }
      i.push(r);
      for (const s of i) {
        e.addEditOperation(s.range, s.text);
      }
    }
    this._trackedEditorSelectionId = e.trackSelection(this._editorSelection);
  }
  computeCursorState(n, e) {
    return e.getTrackedSelection(this._trackedEditorSelectionId);
  }
};
