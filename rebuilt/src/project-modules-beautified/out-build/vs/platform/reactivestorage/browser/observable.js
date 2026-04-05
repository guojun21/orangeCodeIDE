"use strict";

// Module: out-build/vs/platform/reactivestorage/browser/observable.js
// Offset: 4152822 (bundle byte offset)
// Size: 2980 bytes
Nbe();
rt();
w5e();
y5e();
kr();
YUo = class extends Gze {
  constructor(e, t, i, r) {
    super(new N4(undefined, `storage/${e.key}`, undefined), o(), Xj);
    this.opts = e;
    this.storageScope = t;
    this.storageTarget = i;
    this.storageService = r;
    this._store = new Ut();
    this._settingValue = false;
    const s = this._store.add(new Ut());
    this._store.add(r.onDidChangeValue(t, e.key, s)(a => {
      if (!this._settingValue) {
        this.set(o(), undefined);
      }
    }));
    function o() {
      const a = r.get(e.key, t);
      if (a !== undefined) {
        try {
          return e.fromStorage(a);
        } catch {}
      }
      return e.defaultValue;
    }
  }
  _setValue(e) {
    try {
      this._settingValue = true;
      super._setValue(e);
      this.storageService.store(this.opts.key, this.opts.toStorage(e), this.storageScope, this.storageTarget);
    } finally {
      this._settingValue = false;
    }
  }
  dispose() {
    this._store.dispose();
  }
};
YUo = __decorate([__param(3, Hi)], YUo);
