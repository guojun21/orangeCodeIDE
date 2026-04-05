"use strict";

// Module: out-build/vs/platform/observable/common/observableMemento.js
// Offset: 32552668 (bundle byte offset)
// Size: 944 bytes
Nbe();
rt();
w5e();
y5e();
kr();
SEa = class extends Gze {
  constructor(e, t, i, r) {
    if (e.defaultValue && typeof e.defaultValue == "object") {
      e.toStorage ??= l => JSON.stringify(l);
      e.fromStorage ??= l => JSON.parse(l);
    }
    let s = e.defaultValue;
    const o = r.get(e.key, t);
    if (o !== undefined && e.fromStorage) {
      try {
        s = e.fromStorage(o);
      } catch {
        s = e.defaultValue;
      }
    }
    super(new N4(undefined, `storage/${e.key}`, undefined), s, Xj);
    this._store = new Ut();
    this._didChange = false;
    const a = r.onDidChangeValue(t, e.key, this._store);
    this._store.add(a(l => {
      if (l.external && l.key === e.key && !this._didChange) {
        this.set(e.defaultValue, undefined);
      }
    }));
    this._store.add(r.onWillSaveState(() => {
      if (this._didChange) {
        this._didChange = false;
        const l = this.get();
        if (e.toStorage) {
          r.store(e.key, e.toStorage(l), t, i);
        } else {
          r.store(e.key, String(l), t, i);
        }
      }
    }));
  }
  _setValue(e) {
    super._setValue(e);
    this._didChange = true;
  }
  dispose() {
    this._store.dispose();
  }
};
SEa = __decorate([__param(3, Hi)], SEa);
