"use strict";

// Module: out-build/vs/platform/reactivestorage/browser/solidEventsWrapper.js
// Offset: 2376035 (bundle byte offset)
// Size: 630 bytes
Ti();
yn();
j_ = class {
  constructor(n) {
    this._value = n;
    this.emitter = new Qe();
    this.muteEventsCounter = 0;
    this.shouldEmit = false;
    this.event = this.emitter.event;
  }
  get value() {
    return this._value;
  }
  change(n) {
    this._value = n;
    if (this.muteEventsCounter === 0) {
      this.emitter.fire(n);
      this.shouldEmit = false;
    } else {
      this.shouldEmit = true;
    }
  }
  dispose() {
    this.emitter.dispose();
  }
  nonReactive() {
    return this._value;
  }
  muteEvents() {
    ++this.muteEventsCounter;
  }
  unmuteEvents() {
    --this.muteEventsCounter;
    if (this.muteEventsCounter === 0 && this.shouldEmit) {
      this.emitter.fire(this._value);
      this.shouldEmit = false;
    }
  }
};
