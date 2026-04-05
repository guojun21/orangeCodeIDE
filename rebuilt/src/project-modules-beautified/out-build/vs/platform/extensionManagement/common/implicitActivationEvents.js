"use strict";

// Module: out-build/vs/platform/extensionManagement/common/implicitActivationEvents.js
// Offset: 30150474 (bundle byte offset)
// Size: 2345 bytes
_s();
HA();
RCf = class {
  constructor() {
    this._generators = new Map();
    this._cache = new WeakMap();
  }
  register(n, e) {
    this._generators.set(n, e);
  }
  readActivationEvents(n) {
    if (!this._cache.has(n)) {
      this._cache.set(n, this._readActivationEvents(n));
    }
    return this._cache.get(n);
  }
  createActivationEventsMap(n) {
    const e = Object.create(null);
    for (const t of n) {
      const i = this.readActivationEvents(t);
      if (i.length > 0) {
        e[$h.toKey(t.identifier)] = i;
      }
    }
    return e;
  }
  _readActivationEvents(n) {
    if (typeof n.main === "undefined" && typeof n.browser === "undefined") {
      return [];
    }
    const e = Array.isArray(n.activationEvents) ? n.activationEvents.slice(0) : [];
    for (let t = 0; t < e.length; t++) {
      if (e[t] === "onUri") {
        e[t] = `onUri:${$h.toKey(n.identifier)}`;
      }
    }
    if (!n.contributes) {
      return e;
    }
    for (const t in n.contributes) {
      const i = this._generators.get(t);
      if (!i) {
        continue;
      }
      const r = n.contributes[t];
      const s = Array.isArray(r) ? r : [r];
      try {
        i(s, e);
      } catch (o) {
        Gc(o);
      }
    }
    return e;
  }
};
Ukt = new RCf();
