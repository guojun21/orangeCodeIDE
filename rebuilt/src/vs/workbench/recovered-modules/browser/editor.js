"use strict";

// Module: out-build/vs/workbench/browser/editor.js
// Offset: 31145361 (bundle byte offset)
// Size: 1693 bytes
Ht();
Nu();
Ws();
rt();
vr();
ss();
_d();
lP();
zr();
Ef();
yn();
oC = class JSn {
  static {
    this.instantiatedEditorPanes = new Set();
  }
  static didInstantiateEditorPane(e) {
    return JSn.instantiatedEditorPanes.has(e);
  }
  static {
    this._onWillInstantiateEditorPane = new Qe();
  }
  static {
    this.onWillInstantiateEditorPane = JSn._onWillInstantiateEditorPane.event;
  }
  static create(e, t, i) {
    return new JSn(e, t, i);
  }
  constructor(e, t, i) {
    this.ctor = e;
    this.typeId = t;
    this.name = i;
  }
  instantiate(e, t) {
    JSn._onWillInstantiateEditorPane.fire({
      typeId: this.typeId
    });
    const i = e.createInstance(this.ctor, t);
    JSn.instantiatedEditorPanes.add(this.typeId);
    return i;
  }
  describes(e) {
    return e.getId() === this.typeId;
  }
};
dDf = class {
  constructor() {
    this.mapEditorPanesToEditors = new Map();
  }
  registerEditorPane(n, e) {
    this.mapEditorPanesToEditors.set(n, e);
    return $i(() => {
      this.mapEditorPanesToEditors.delete(n);
    });
  }
  getEditorPane(n) {
    const e = this.findEditorPaneDescriptors(n);
    if (e.length !== 0) {
      if (e.length === 1) {
        return e[0];
      } else {
        return n.prefersEditorPane(e);
      }
    }
  }
  findEditorPaneDescriptors(n, e) {
    const t = [];
    for (const i of this.mapEditorPanesToEditors.keys()) {
      const r = this.mapEditorPanesToEditors.get(i) || [];
      for (const s of r) {
        const o = s.ctor;
        if (!e && n.constructor === o) {
          t.push(i);
          break;
        } else if (e && n instanceof o) {
          t.push(i);
          break;
        }
      }
    }
    if (!e && t.length === 0) {
      return this.findEditorPaneDescriptors(n, true);
    } else {
      return t;
    }
  }
  getEditorPaneByType(n) {
    return bl.find(this.mapEditorPanesToEditors.keys(), e => e.typeId === n);
  }
  getEditorPanes() {
    return Array.from(this.mapEditorPanesToEditors.keys());
  }
  getEditors() {
    const n = [];
    for (const e of this.mapEditorPanesToEditors.keys()) {
      const t = this.mapEditorPanesToEditors.get(e);
      if (t) {
        n.push(...t.map(i => i.ctor));
      }
    }
    return n;
  }
};
Di.add(Jp.EditorPane, new dDf());
