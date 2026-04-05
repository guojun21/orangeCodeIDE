"use strict";

// Module: out-build/vs/base/common/cancellation.js
// Offset: 318619 (bundle byte offset)
// Size: 1469 bytes
yn();
U0c = Object.freeze(function (n, e) {
  const t = setTimeout(n.bind(e), 0);
  return {
    dispose() {
      clearTimeout(t);
    }
  };
});
(function (n) {
  function e(t) {
    if (t === n.None || t === n.Cancelled || t instanceof tFn) {
      return true;
    } else if (!t || typeof t != "object") {
      return false;
    } else {
      return typeof t.isCancellationRequested == "boolean" && typeof t.onCancellationRequested == "function";
    }
  }
  n.isCancellationToken = e;
  n.None = Object.freeze({
    isCancellationRequested: false,
    onCancellationRequested: In.None
  });
  n.Cancelled = Object.freeze({
    isCancellationRequested: true,
    onCancellationRequested: U0c
  });
})(Cs ||= {});
tFn = class {
  constructor() {
    this._isCancelled = false;
    this._emitter = null;
  }
  cancel() {
    if (!this._isCancelled) {
      this._isCancelled = true;
      if (this._emitter) {
        this._emitter.fire(undefined);
        this.dispose();
      }
    }
  }
  get isCancellationRequested() {
    return this._isCancelled;
  }
  get onCancellationRequested() {
    if (this._isCancelled) {
      return U0c;
    } else {
      this._emitter ||= new Qe();
      return this._emitter.event;
    }
  }
  dispose() {
    if (this._emitter) {
      this._emitter.dispose();
      this._emitter = null;
    }
  }
};
Wc = class {
  constructor(n) {
    this._token = undefined;
    this._parentListener = undefined;
    this._parentListener = n && n.onCancellationRequested(this.cancel, this);
  }
  get token() {
    this._token ||= new tFn();
    return this._token;
  }
  cancel() {
    if (this._token) {
      if (this._token instanceof tFn) {
        this._token.cancel();
      }
    } else {
      this._token = Cs.Cancelled;
    }
  }
  dispose(n = false) {
    if (n) {
      this.cancel();
    }
    this._parentListener?.dispose();
    if (this._token) {
      if (this._token instanceof tFn) {
        this._token.dispose();
      }
    } else {
      this._token = Cs.None;
    }
  }
};
