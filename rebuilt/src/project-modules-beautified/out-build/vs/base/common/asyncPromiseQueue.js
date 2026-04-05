"use strict";

// Module: out-build/vs/base/common/asyncPromiseQueue.js
// Offset: 30432147 (bundle byte offset)
// Size: 1152 bytes
GEe = class {
  constructor(n) {
    this.timeoutMs = n;
    this.queue = [];
    this.resolve = undefined;
    this.reject = undefined;
    this._end = false;
    this.e = undefined;
    this.basicPromise = new Promise((e, t) => {
      this.resolve = e;
      this.reject = t;
    });
  }
  get size() {
    return this.queue.length;
  }
  push(n) {
    this.queue.push(n);
    if (this.resolve) {
      this.resolve();
    }
  }
  end() {
    if (this.resolve) {
      this.resolve();
    }
    this._end = true;
  }
  error(n) {
    if (this.reject) {
      this.reject(n);
    }
    this.e = n;
  }
  resetPromise() {
    const n = this;
    this.basicPromise = new Promise((e, t) => {
      this.resolve = e;
      this.reject = t;
    }).catch(e => {
      n.e = e;
    });
  }
  [Symbol.asyncIterator]() {
    const n = this.timeoutMs;
    return {
      next: async () => {
        try {
          if (this.e !== undefined) {
            throw this.e;
          }
          if (this.queue.length > 0) {
            return {
              done: false,
              value: this.queue.shift()
            };
          }
          if (this._end) {
            return {
              done: true,
              value: undefined
            };
          }
          let e = false;
          if (n === undefined) {
            await this.basicPromise;
          } else {
            e = await Promise.race([this.basicPromise.then(() => false), new Promise(t => setTimeout(() => t(true), n))]);
          }
          if (this.e !== undefined) {
            throw this.e;
          }
          if (this.queue.length > 0) {
            return {
              done: false,
              value: this.queue.shift()
            };
          }
          if (e || this._end) {
            return {
              done: true,
              value: undefined
            };
          }
          throw new Error("AsyncIterPushable: should not be here");
        } finally {
          this.resetPromise();
        }
      }
    };
  }
};
