"use strict";

// Module: out-build/vs/editor/browser/services/inlineDiffUndoRedoElement.js
// Offset: 27530810 (bundle byte offset)
// Size: 4318 bytes
XZ = class {
  get type() {
    return 0;
  }
  constructor(n, e, t, i, r, s, o = false) {
    this.label = n;
    this.code = e;
    this.diffId = t;
    this.resource = i;
    this.skipIntermediateSteps = o;
    this.undos = [];
    this.redos = [];
    this.confirmBeforeUndo = false;
    this.undos.push(r);
    this.redos.push(s);
  }
  push(n, e) {
    if (this.skipIntermediateSteps && e) {
      this.redos.push(...n.redos);
    } else if (!this.skipIntermediateSteps) {
      this.undos.push(...n.undos);
      this.redos.push(...n.redos);
    }
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
  rebase() {}
  toString() {
    return `InlineDiffUndoRedoElement: ${this.label}`;
  }
};
