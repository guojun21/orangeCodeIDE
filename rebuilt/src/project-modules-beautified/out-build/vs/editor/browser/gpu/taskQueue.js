"use strict";

// Module: out-build/vs/editor/browser/gpu/taskQueue.js
// Offset: 1763463 (bundle byte offset)
// Size: 1315 bytes
ri();
rt();
aIc = class extends at {
  constructor() {
    super();
    this._tasks = [];
    this._i = 0;
    this._register($i(() => this.clear()));
  }
  enqueue(n) {
    this._tasks.push(n);
    this._start();
  }
  flush() {
    while (this._i < this._tasks.length) {
      if (!this._tasks[this._i]()) {
        this._i++;
      }
    }
    this.clear();
  }
  clear() {
    if (this._idleCallback) {
      this._cancelCallback(this._idleCallback);
      this._idleCallback = undefined;
    }
    this._i = 0;
    this._tasks.length = 0;
  }
  _start() {
    this._idleCallback ||= this._requestCallback(this._process.bind(this));
  }
  _process(n) {
    this._idleCallback = undefined;
    let e = 0;
    let t = 0;
    let i = n.timeRemaining();
    let r = 0;
    while (this._i < this._tasks.length) {
      e = Date.now();
      if (!this._tasks[this._i]()) {
        this._i++;
      }
      e = Math.max(1, Date.now() - e);
      t = Math.max(e, t);
      r = n.timeRemaining();
      if (t * 1.5 > r) {
        if (i - e < -20) {
          console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(i - e))}ms`);
        }
        this._start();
        return;
      }
      i = r;
    }
    this.clear();
  }
};
_yh = class extends aIc {
  _requestCallback(n) {
    return $c().setTimeout(() => n(this._createDeadline(16)));
  }
  _cancelCallback(n) {
    $c().clearTimeout(n);
  }
  _createDeadline(n) {
    const e = Date.now() + n;
    return {
      timeRemaining: () => Math.max(0, e - Date.now())
    };
  }
};
Cyh = class extends aIc {
  _requestCallback(n) {
    return $c().requestIdleCallback(n);
  }
  _cancelCallback(n) {
    $c().cancelIdleCallback(n);
  }
};
Syh = "requestIdleCallback" in $c() ? Cyh : _yh;
