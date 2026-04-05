"use strict";

// Module: out-build/vs/platform/dnd/browser/dnd.js
// Offset: 2401054 (bundle byte offset)
// Size: 1735 bytes
dz();
iu();
Vs();
vr();
Ql();
cu();
UB();
zr();
_r();
Yn();
Ht();
ru();
yhA();
H3n();
ns();
Wt();
Fc();
Ws();
nM = {
  EDITORS: "CodeEditors",
  FILES: "CodeFiles",
  SYMBOLS: "application/vnd.code.symbols",
  MARKERS: "application/vnd.code.diagnostics"
};
ISh = class {
  constructor() {
    this._contributions = new Map();
  }
  register(n) {
    if (this._contributions.has(n.dataFormatKey)) {
      throw new Error(`A drag and drop contributiont with key '${n.dataFormatKey}' was already registered.`);
    }
    this._contributions.set(n.dataFormatKey, n);
  }
  getAll() {
    return this._contributions.values();
  }
};
V3t = {
  DragAndDropContribution: "workbench.contributions.dragAndDrop"
};
Di.add(V3t.DragAndDropContribution, new ISh());
GB = class qad {
  static {
    this.INSTANCE = new qad();
  }
  constructor() {}
  static getInstance() {
    return qad.INSTANCE;
  }
  hasData(e) {
    return e && e === this.proto;
  }
  clearData(e) {
    if (this.hasData(e)) {
      this.proto = undefined;
      this.data = undefined;
    }
  }
  getData(e) {
    if (this.hasData(e)) {
      return this.data;
    }
  }
  setData(e, t) {
    if (t) {
      this.data = e;
      this.proto = t;
    }
  }
};
