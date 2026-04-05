"use strict";

// Module: out-build/vs/base/common/stream.js
// Offset: 402516 (bundle byte offset)
// Size: 4757 bytes
_s();
rt();
grh = class {
  constructor(n, e) {
    this.reducer = n;
    this.options = e;
    this.state = {
      flowing: false,
      ended: false,
      destroyed: false
    };
    this.buffer = {
      data: [],
      error: []
    };
    this.listeners = {
      data: [],
      error: [],
      end: []
    };
    this.pendingWritePromises = [];
  }
  pause() {
    if (!this.state.destroyed) {
      this.state.flowing = false;
    }
  }
  resume() {
    if (!this.state.destroyed && !this.state.flowing) {
      this.state.flowing = true;
      this.flowData();
      this.flowErrors();
      this.flowEnd();
    }
  }
  write(n) {
    if (!this.state.destroyed) {
      if (this.state.flowing) {
        this.emitData(n);
      } else {
        this.buffer.data.push(n);
        if (typeof this.options?.highWaterMark == "number" && this.buffer.data.length > this.options.highWaterMark) {
          return new Promise(e => this.pendingWritePromises.push(e));
        }
      }
    }
  }
  error(n) {
    if (!this.state.destroyed) {
      if (this.state.flowing) {
        this.emitError(n);
      } else {
        this.buffer.error.push(n);
      }
    }
  }
  end(n) {
    if (!this.state.destroyed) {
      if (typeof n !== "undefined") {
        this.write(n);
      }
      if (this.state.flowing) {
        this.emitEnd();
        this.destroy();
      } else {
        this.state.ended = true;
      }
    }
  }
  emitData(n) {
    this.listeners.data.slice(0).forEach(e => e(n));
  }
  emitError(n) {
    if (this.listeners.error.length === 0) {
      Gc(n);
    } else {
      this.listeners.error.slice(0).forEach(e => e(n));
    }
  }
  emitEnd() {
    this.listeners.end.slice(0).forEach(n => n());
  }
  on(n, e) {
    if (!this.state.destroyed) {
      switch (n) {
        case "data":
          this.listeners.data.push(e);
          this.resume();
          break;
        case "end":
          this.listeners.end.push(e);
          if (this.state.flowing && this.flowEnd()) {
            this.destroy();
          }
          break;
        case "error":
          this.listeners.error.push(e);
          if (this.state.flowing) {
            this.flowErrors();
          }
          break;
      }
    }
  }
  removeListener(n, e) {
    if (this.state.destroyed) {
      return;
    }
    let t;
    switch (n) {
      case "data":
        t = this.listeners.data;
        break;
      case "end":
        t = this.listeners.end;
        break;
      case "error":
        t = this.listeners.error;
        break;
    }
    if (t) {
      const i = t.indexOf(e);
      if (i >= 0) {
        t.splice(i, 1);
      }
    }
  }
  flowData() {
    if (this.buffer.data.length === 0) {
      return;
    }
    if (typeof this.reducer == "function") {
      const e = this.reducer(this.buffer.data);
      this.emitData(e);
    } else {
      for (const e of this.buffer.data) {
        this.emitData(e);
      }
    }
    this.buffer.data.length = 0;
    const n = [...this.pendingWritePromises];
    this.pendingWritePromises.length = 0;
    n.forEach(e => e());
  }
  flowErrors() {
    if (this.listeners.error.length > 0) {
      for (const n of this.buffer.error) {
        this.emitError(n);
      }
      this.buffer.error.length = 0;
    }
  }
  flowEnd() {
    if (this.state.ended) {
      this.emitEnd();
      return this.listeners.end.length > 0;
    } else {
      return false;
    }
  }
  destroy() {
    if (!this.state.destroyed) {
      this.state.destroyed = true;
      this.state.ended = true;
      this.buffer.data.length = 0;
      this.buffer.error.length = 0;
      this.listeners.data.length = 0;
      this.listeners.error.length = 0;
      this.listeners.end.length = 0;
      this.pendingWritePromises.length = 0;
    }
  }
};
