"use strict";

// Module: out-build/vs/base/common/codecs/baseDecoder.js
// Offset: 31058815 (bundle byte offset)
// Size: 3141 bytes
Lv();
yn();
vr();
dsy();
Jgn();
V_i = class ojb extends T1t {
  constructor(e) {
    super();
    this.stream = e;
    this._ended = false;
    this._onData = this._register(new Qe());
    this._onEnd = this._register(new Qe());
    this._onError = this._register(new Qe());
    this._listeners = new Map();
    this.started = false;
    this.settledPromise = new wy();
    this.tryOnStreamData = this.tryOnStreamData.bind(this);
    this.onStreamError = this.onStreamError.bind(this);
    this.onStreamEnd = this.onStreamEnd.bind(this);
  }
  get settled() {
    Qb(this.started, ["Cannot get `settled` promise of a stream that has not been started.", "Please call `start()` first."].join(" "));
    return this.settledPromise.p;
  }
  start() {
    Qb(!this._ended, "Cannot start stream that has already ended.");
    Qb(!this.disposed, "Cannot start stream that has already disposed.");
    if (this.started) {
      return this;
    } else {
      this.started = true;
      this.stream.on("data", this.tryOnStreamData);
      this.stream.on("error", this.onStreamError);
      this.stream.on("end", this.onStreamEnd);
      if (this.stream instanceof ojb) {
        this.stream.start();
      }
      return this;
    }
  }
  get ended() {
    return this._ended;
  }
  tryOnStreamData(e) {
    try {
      this.onStreamData(e);
    } catch (t) {
      this.onStreamError(t);
    }
  }
  on(e, t) {
    if (e === "data") {
      return this.onData(t);
    }
    if (e === "error") {
      return this.onError(t);
    }
    if (e === "end") {
      return this.onEnd(t);
    }
    throw new Error(`Invalid event name: ${e}`);
  }
  onData(e) {
    Qb(!this.ended, "Cannot subscribe to the `data` event because the decoder stream has already ended.");
    let t = this._listeners.get("data");
    if (!t) {
      t = new Map();
      this._listeners.set("data", t);
    }
    t.set(e, this._onData.event(e));
  }
  onError(e) {
    Qb(!this.ended, "Cannot subscribe to the `error` event because the decoder stream has already ended.");
    let t = this._listeners.get("error");
    if (!t) {
      t = new Map();
      this._listeners.set("error", t);
    }
    t.set(e, this._onError.event(e));
  }
  onEnd(e) {
    Qb(!this.ended, "Cannot subscribe to the `end` event because the decoder stream has already ended.");
    let t = this._listeners.get("end");
    if (!t) {
      t = new Map();
      this._listeners.set("end", t);
    }
    t.set(e, this._onEnd.event(e));
  }
  removeAllListeners() {
    this.stream.removeListener("data", this.tryOnStreamData);
    this.stream.removeListener("error", this.onStreamError);
    this.stream.removeListener("end", this.onStreamEnd);
    for (const [e, t] of this._listeners.entries()) {
      this._listeners.delete(e);
      for (const [i, r] of t) {
        r.dispose();
        t.delete(i);
      }
    }
  }
  pause() {
    this.stream.pause();
  }
  resume() {
    Qb(!this.ended, "Cannot resume the stream because it has already ended.");
    this.stream.resume();
  }
  destroy() {
    this.dispose();
  }
  removeListener(e, t) {
    for (const [i, r] of this._listeners.entries()) {
      if (i === e) {
        for (const [s, o] of r) {
          if (s === t) {
            o.dispose();
            r.delete(s);
          }
        }
      }
    }
  }
  onStreamEnd() {
    if (!this._ended) {
      this._ended = true;
      this._onEnd.fire();
      this.settledPromise.complete();
    }
  }
  onStreamError(e) {
    this._onError.fire(e);
  }
  async consumeAll() {
    Qb(!this._ended, "Cannot consume all messages of the stream that has already ended.");
    const e = [];
    for await (const t of this) {
      if (t === null) {
        break;
      }
      e.push(t);
    }
    return e;
  }
  [Symbol.asyncIterator]() {
    Qb(!this._ended, "Cannot iterate on messages of the stream that has already ended.");
    return this._register(new hIf(this))[Symbol.asyncIterator]();
  }
  dispose() {
    if (!this.disposed) {
      this.onStreamEnd();
      this.stream.destroy();
      this.removeAllListeners();
      super.dispose();
    }
  }
};
