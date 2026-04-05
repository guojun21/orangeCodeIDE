"use strict";

// Module: out-build/vs/editor/common/tokenizationRegistry.js
// Offset: 1185393 (bundle byte offset)
// Size: 2253 bytes
yn();
rt();
txc = class {
  constructor() {
    this._tokenizationSupports = new Map();
    this._factories = new Map();
    this._onDidChange = new Qe();
    this.onDidChange = this._onDidChange.event;
    this._colorMap = null;
  }
  handleChange(n) {
    this._onDidChange.fire({
      changedLanguages: n,
      changedColorMap: false
    });
  }
  register(n, e) {
    this._tokenizationSupports.set(n, e);
    this.handleChange([n]);
    return $i(() => {
      if (this._tokenizationSupports.get(n) === e) {
        this._tokenizationSupports.delete(n);
        this.handleChange([n]);
      }
    });
  }
  get(n) {
    return this._tokenizationSupports.get(n) || null;
  }
  registerFactory(n, e) {
    this._factories.get(n)?.dispose();
    const t = new vgh(this, n, e);
    this._factories.set(n, t);
    const i = new WeakRef(t);
    return $i(() => {
      const r = this._factories.get(n);
      const s = i.deref();
      if (!!r && !!s && r === s) {
        this._factories.delete(n);
        r.dispose();
      }
    });
  }
  async getOrCreate(n) {
    const e = this.get(n);
    if (e) {
      return e;
    }
    const t = this._factories.get(n);
    if (!t || t.isResolved) {
      return null;
    } else {
      await t.resolve();
      return this.get(n);
    }
  }
  isResolved(n) {
    if (this.get(n)) {
      return true;
    }
    const t = this._factories.get(n);
    return !t || !!t.isResolved;
  }
  setColorMap(n) {
    this._colorMap = n;
    this._onDidChange.fire({
      changedLanguages: Array.from(this._tokenizationSupports.keys()),
      changedColorMap: true
    });
  }
  getColorMap() {
    return this._colorMap;
  }
  getDefaultBackground() {
    if (this._colorMap && this._colorMap.length > 2) {
      return this._colorMap[2];
    } else {
      return null;
    }
  }
};
vgh = class extends at {
  get isResolved() {
    return this._isResolved;
  }
  constructor(n, e, t) {
    super();
    this._registry = n;
    this._languageId = e;
    this._factory = t;
    this._isDisposed = false;
    this._resolvePromise = null;
    this._isResolved = false;
  }
  dispose() {
    this._isDisposed = true;
    super.dispose();
  }
  async resolve() {
    this._resolvePromise ||= this._create();
    return this._resolvePromise;
  }
  async _create() {
    const n = await this._factory.tokenizationSupport;
    this._isResolved = true;
    if (n && !this._isDisposed) {
      this._register(this._registry.register(this._languageId, n));
    }
  }
};
