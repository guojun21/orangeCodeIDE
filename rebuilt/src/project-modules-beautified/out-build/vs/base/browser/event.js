"use strict";

// Module: out-build/vs/base/browser/event.js
// Offset: 1573887 (bundle byte offset)
// Size: 717 bytes
yn();
Hg = class {
  get event() {
    return this.emitter.event;
  }
  constructor(n, e, t) {
    const i = r => this.emitter.fire(r);
    this.emitter = new Qe({
      onWillAddFirstListener: () => n.addEventListener(e, i, t),
      onDidRemoveLastListener: () => n.removeEventListener(e, i, t)
    });
  }
  dispose() {
    this.emitter.dispose();
  }
};
