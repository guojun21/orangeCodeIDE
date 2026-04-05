"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/cellSelectionCollection.js
// Offset: 33346796 (bundle byte offset)
// Size: 866 bytes
yn();
rt();
q8f = class extends at {
  constructor() {
    super(...arguments);
    this._onDidChangeSelection = this._register(new Qe());
    this._primary = null;
    this._selections = [];
  }
  get onDidChangeSelection() {
    return this._onDidChangeSelection.event;
  }
  get selections() {
    return this._selections;
  }
  get focus() {
    return this._primary ?? {
      start: 0,
      end: 0
    };
  }
  setState(n, e, t, i) {
    const r = n !== this._primary || !Idy(this._selections, e);
    this._primary = n;
    this._selections = e;
    if (r || t) {
      this._onDidChangeSelection.fire(i);
    }
  }
  setSelections(n, e, t) {
    this.setState(this._primary, n, e, t);
  }
};
