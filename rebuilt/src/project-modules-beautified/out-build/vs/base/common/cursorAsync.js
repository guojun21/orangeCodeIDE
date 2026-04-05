"use strict";

// Module: out-build/vs/base/common/cursorAsync.js
// Offset: 27923486 (bundle byte offset)
// Size: 1463 bytes
Pmn = class {
  getCount() {
    return this.counter;
  }
  constructor(n, e) {
    this.max = n;
    this.counter = 0;
    this.waiting = [];
    this.abortSignal = e ?? new AbortController().signal;
  }
  async withSemaphore(n, e) {
    await this.acquire();
    const t = Date.now();
    try {
      if (this.abortSignal.aborted) {
        return Promise.reject("Aborted");
      } else {
        return await n();
      }
    } finally {
      this.release();
      if (e) {
        e(Date.now() - t);
      }
    }
  }
  async withRetrySemaphore(n, e, t = 3) {
    if (this.abortSignal.aborted) {
      return Promise.reject("Aborted");
    }
    for (let i = 1; i < t; i++) {
      try {
        return await this.withSemaphore(n, e);
      } catch {
        await new Promise(s => setTimeout(s, i * 200));
      }
    }
    return await this.withSemaphore(n);
  }
  take() {
    if (this.waiting.length > 0 && this.counter < this.max) {
      this.counter++;
      const n = this.waiting.shift();
      if (n) {
        n.resolve();
      }
    }
  }
  acquire() {
    if (this.counter < this.max) {
      this.counter++;
      return new Promise(n => {
        n();
      });
    } else {
      return new Promise((n, e) => {
        this.waiting.push({
          resolve: n,
          err: e
        });
      });
    }
  }
  release() {
    this.counter--;
    this.take();
  }
  purge() {
    const n = this.waiting.length;
    for (let e = 0; e < n; e++) {
      this.waiting[e].err("Task has been purged.");
    }
    this.counter = 0;
    this.waiting = [];
    return n;
  }
};
Iba = class extends Pmn {
  constructor() {
    super(1);
  }
};
