"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellFocus.js
// Offset: 33247802 (bundle byte offset)
// Size: 407 bytes
ri();
LQ();
Xwu = class extends JV {
  constructor(n, e, t) {
    super();
    this._register(ei(n, ir.FOCUS, () => {
      if (this.currentCell) {
        t.focusElement(this.currentCell);
      }
    }, true));
    if (e) {
      this._register(ei(e, ir.FOCUS, () => {
        if (this.currentCell && this.currentCell.outputsViewModels.length) {
          t.focusNotebookCell(this.currentCell, "output");
        }
      }));
    }
  }
};
