"use strict";

// Module: out-build/vs/base/common/observableDisposable.js
// Offset: 31058363 (bundle byte offset)
// Size: 452 bytes
yn();
rt();
T1t = class extends at {
  constructor() {
    super(...arguments);
    this._onDispose = this._register(new Qe());
    this._disposed = false;
  }
  onDispose(n) {
    if (this.disposed) {
      n();
      return this;
    } else {
      this._register(this._onDispose.event(n));
      return this;
    }
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    if (!this.disposed) {
      this._disposed = true;
      this._onDispose.fire();
      super.dispose();
    }
  }
  assertNotDisposed(n) {
    Ogu(this, n);
  }
};
