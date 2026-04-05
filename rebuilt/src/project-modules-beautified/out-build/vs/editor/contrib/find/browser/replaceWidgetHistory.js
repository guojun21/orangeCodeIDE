"use strict";

// Module: out-build/vs/editor/contrib/find/browser/replaceWidgetHistory.js
// Offset: 25197043 (bundle byte offset)
// Size: 1593 bytes
yn();
kr();
Dla = class {
  static {
    Jet = this;
  }
  static {
    this.FIND_HISTORY_KEY = "workbench.replace.history";
  }
  static {
    this._instance = null;
  }
  static getOrCreate(e) {
    Jet._instance ||= new Jet(e);
    return Jet._instance;
  }
  constructor(e) {
    this.storageService = e;
    this.inMemoryValues = new Set();
    this._onDidChangeEmitter = new Qe();
    this.onDidChange = this._onDidChangeEmitter.event;
    this.load();
  }
  delete(e) {
    const t = this.inMemoryValues.delete(e);
    this.save();
    return t;
  }
  add(e) {
    this.inMemoryValues.add(e);
    this.save();
    return this;
  }
  has(e) {
    return this.inMemoryValues.has(e);
  }
  clear() {
    this.inMemoryValues.clear();
    this.save();
  }
  forEach(e, t) {
    this.load();
    return this.inMemoryValues.forEach(e);
  }
  replace(e) {
    this.inMemoryValues = new Set(e);
    this.save();
  }
  load() {
    let e;
    const t = this.storageService.get(Jet.FIND_HISTORY_KEY, 1);
    if (t) {
      try {
        e = JSON.parse(t);
      } catch {}
    }
    this.inMemoryValues = new Set(e || []);
  }
  save() {
    const e = [];
    this.inMemoryValues.forEach(t => e.push(t));
    return new Promise(t => {
      this.storageService.store(Jet.FIND_HISTORY_KEY, JSON.stringify(e), 1, 0);
      this._onDidChangeEmitter.fire(e);
      t();
    });
  }
};
Dla = Jet = __decorate([__param(0, Hi)], Dla);
