"use strict";

// Module: out-build/vs/workbench/services/agentData/common/reactive.js
// Offset: 28168098 (bundle byte offset)
// Size: 7110 bytes
Yb = class {
  constructor(n) {
    this._listeners = new Set();
    this._value = n;
  }
  get value() {
    return this._value;
  }
  set(n) {
    this._value = n;
    for (const e of this._listeners) {
      e(n);
    }
  }
  onChange(n) {
    this._listeners.add(n);
    return {
      dispose: () => this._listeners.delete(n)
    };
  }
};
uva = class {
  constructor(n, e) {
    this.sources = n;
    this.derive = e;
    this._listeners = new Set();
    this._value = this._compute();
    this._subscriptions = n.map(t => t.onChange(() => {
      this._value = this._compute();
      for (const i of this._listeners) {
        i(this._value);
      }
    }));
  }
  get value() {
    return this._value;
  }
  onChange(n) {
    this._listeners.add(n);
    return {
      dispose: () => this._listeners.delete(n)
    };
  }
  dispose() {
    for (const n of this._subscriptions) {
      n.dispose();
    }
    this._listeners.clear();
  }
  _compute() {
    const n = this.sources.map(e => e.value);
    return this.derive(...n);
  }
};
NXg = class {
  constructor(n) {
    this.sources = n;
    this._listeners = new Set();
    this._value = this._compute();
    this._subscriptions = n.map(e => e.onChange(() => {
      this._value = this._compute();
      for (const t of this._listeners) {
        t(this._value);
      }
    }));
  }
  get value() {
    return this._value;
  }
  onChange(n) {
    this._listeners.add(n);
    return {
      dispose: () => this._listeners.delete(n)
    };
  }
  dispose() {
    for (const n of this._subscriptions) {
      n.dispose();
    }
    this._listeners.clear();
  }
  _compute() {
    return this.sources.flatMap(n => n.value);
  }
};
JAi = class {
  constructor(n, e) {
    this._options = {
      load: e.load,
      save: e.save,
      serialize: e.serialize ?? (r => r),
      deserialize: e.deserialize ?? (r => r)
    };
    const t = e.debounceSave ?? (r => p9A(r));
    this._debouncedSave = t(this._options.save);
    let i = n;
    try {
      const r = this._options.load();
      if (r !== undefined) {
        i = this._options.deserialize(r);
      }
    } catch {}
    this._inner = new Yb(i);
  }
  get value() {
    return this._inner.value;
  }
  set(n) {
    this._inner.set(n);
    try {
      this._debouncedSave.schedule(this._options.serialize(n));
    } catch {}
  }
  flush() {
    this._debouncedSave.flush();
  }
  onChange(n) {
    return this._inner.onChange(n);
  }
};
