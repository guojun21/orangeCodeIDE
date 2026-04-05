"use strict";

// Module: out-build/vs/editor/browser/gpu/objectCollectionBuffer.js
// Offset: 1778178 (bundle byte offset)
// Size: 2743 bytes
yn();
rt();
l2();
TlA();
Iyh = class extends at {
  get bufferUsedSize() {
    return this.viewUsedSize * Float32Array.BYTES_PER_ELEMENT;
  }
  get viewUsedSize() {
    return this._entries.size * this._entrySize;
  }
  get entryCount() {
    return this._entries.size;
  }
  get dirtyTracker() {
    return this._dirtyTracker;
  }
  constructor(n, e) {
    super();
    this.propertySpecs = n;
    this.capacity = e;
    this._dirtyTracker = new Tyh();
    this._propertySpecsMap = new Map();
    this._entries = new WD();
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._onDidChangeBuffer = this._register(new Qe());
    this.onDidChangeBuffer = this._onDidChangeBuffer.event;
    this.view = new Float32Array(e * n.length);
    this.buffer = this.view.buffer;
    this._entrySize = n.length;
    for (let t = 0; t < n.length; t++) {
      const i = {
        offset: t,
        ...n[t]
      };
      this._propertySpecsMap.set(i.name, i);
    }
    this._register($i(() => Bo(this._entries)));
  }
  createEntry(n) {
    if (this._entries.size === this.capacity) {
      this._expandBuffer();
      this._onDidChangeBuffer.fire();
    }
    const e = new Dyh(this.view, this._propertySpecsMap, this._dirtyTracker, this._entries.size, n);
    const t = this._entries.push(e);
    const i = [];
    i.push(In.forward(e.onDidChange, this._onDidChange));
    i.push(e.onWillDispose(() => {
      const r = e.i;
      t();
      this.view.set(this.view.subarray(r * this._entrySize + 2, this._entries.size * this._entrySize + 2), r * this._entrySize);
      for (const s of this._entries) {
        if (s.i > r) {
          s.i--;
        }
      }
      this._dirtyTracker.flag(r, (this._entries.size - r) * this._entrySize);
      Bo(i);
    }));
    return e;
  }
  _expandBuffer() {
    this.capacity *= 2;
    const n = new Float32Array(this.capacity * this._entrySize);
    n.set(this.view);
    this.view = n;
    this.buffer = this.view.buffer;
  }
};
Dyh = class extends at {
  constructor(n, e, t, i, r) {
    super();
    this._view = n;
    this._propertySpecsMap = e;
    this._dirtyTracker = t;
    this.i = i;
    this._onDidChange = this._register(new Qe());
    this.onDidChange = this._onDidChange.event;
    this._onWillDispose = this._register(new Qe());
    this.onWillDispose = this._onWillDispose.event;
    for (const s of this._propertySpecsMap.values()) {
      this._view[this.i * this._propertySpecsMap.size + s.offset] = r[s.name];
    }
    this._dirtyTracker.flag(this.i * this._propertySpecsMap.size, this._propertySpecsMap.size);
  }
  dispose() {
    this._onWillDispose.fire();
    super.dispose();
  }
  set(n, e) {
    const t = this.i * this._propertySpecsMap.size + this._propertySpecsMap.get(n).offset;
    this._view[this._dirtyTracker.flag(t)] = e;
    this._onDidChange.fire();
  }
  get(n) {
    return this._view[this.i * this._propertySpecsMap.size + this._propertySpecsMap.get(n).offset];
  }
  setRaw(n) {
    if (n.length !== this._propertySpecsMap.size) {
      throw new Error(`Data length ${n.length} does not match the number of properties in the collection (${this._propertySpecsMap.size})`);
    }
    this._view.set(n, this.i * this._propertySpecsMap.size);
    this._dirtyTracker.flag(this.i * this._propertySpecsMap.size, this._propertySpecsMap.size);
  }
};
