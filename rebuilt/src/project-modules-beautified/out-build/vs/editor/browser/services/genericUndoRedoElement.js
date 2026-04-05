"use strict";

// Module: out-build/vs/editor/browser/services/genericUndoRedoElement.js
// Offset: 27525482 (bundle byte offset)
// Size: 5093 bytes
pce = class {
  get type() {
    return 0;
  }
  constructor(n, e, t, i, r) {
    this.label = n;
    this.code = e;
    this.resource = t;
    this.undos = [];
    this.redos = [];
    this.confirmBeforeUndo = false;
    this.undos.push(i);
    this.redos.push(r);
  }
  async undo() {
    for (let n = this.undos.length - 1; n >= 0; n--) {
      const e = this.undos[n];
      const t = e();
      if (t instanceof Promise) {
        await t;
      }
    }
  }
  async redo() {
    for (let n = 0; n < this.redos.length; n++) {
      const e = this.redos[n];
      const t = e();
      if (t instanceof Promise) {
        await t;
      }
    }
  }
  rebase(n, e, t, i, r, s, o, a) {}
};
