"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/editorPane.js
// Offset: 31116145 (bundle byte offset)
// Size: 3789 bytes
iDf();
Nu();
cu();
Yn();
yn();
Js();
exe();
Yr();
d2();
rt();
ri();
fD = class BWa extends dfu {
  static {
    this.EDITOR_MEMENTOS = new Map();
  }
  get minimumWidth() {
    return Zye.width;
  }
  get maximumWidth() {
    return R1t.width;
  }
  get minimumHeight() {
    return Zye.height;
  }
  get maximumHeight() {
    return R1t.height;
  }
  get input() {
    return this._input;
  }
  get options() {
    return this._options;
  }
  get window() {
    return Coe(this.group.windowId, true).window;
  }
  get scopedContextKeyService() {}
  constructor(e, t, i, r, s) {
    super(e, i, r, s);
    this.group = t;
    this.onDidChangeSizeConstraints = In.None;
    this._onDidChangeControl = this._register(new Qe());
    this.onDidChangeControl = this._onDidChangeControl.event;
  }
  create(e) {
    super.create(e);
    this.createEditor(e);
  }
  async setInput(e, t, i, r) {
    this._input = e;
    this._options = t;
  }
  clearInput() {
    this._input = undefined;
    this._options = undefined;
  }
  setOptions(e) {
    this._options = e;
  }
  setVisible(e) {
    super.setVisible(e);
    this.setEditorVisible(e);
  }
  setEditorVisible(e) {}
  setBoundarySashes(e) {}
  getEditorMemento(e, t, i, r = 10) {
    const s = `${this.getId()}${i}`;
    let o = BWa.EDITOR_MEMENTOS.get(s);
    if (!o) {
      o = this._register(new rDf(this.getId(), i, this.getMemento(1, 1), r, e, t));
      BWa.EDITOR_MEMENTOS.set(s, o);
    }
    return o;
  }
  getViewState() {}
  saveState() {
    for (const [, e] of BWa.EDITOR_MEMENTOS) {
      if (e.id === this.getId()) {
        e.saveState();
      }
    }
    super.saveState();
  }
  dispose() {
    this._input = undefined;
    this._options = undefined;
    super.dispose();
  }
};
rDf = class RWa extends at {
  static {
    this.SHARED_EDITOR_STATE = -1;
  }
  constructor(e, t, i, r, s, o) {
    super();
    this.id = e;
    this.key = t;
    this.memento = i;
    this.limit = r;
    this.editorGroupService = s;
    this.configurationService = o;
    this.cleanedUp = false;
    this.shareEditorState = false;
    this.updateConfiguration(undefined);
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.configurationService.onDidChangeConfiguration(e => this.updateConfiguration(e)));
  }
  updateConfiguration(e) {
    if (!e || e.affectsConfiguration(undefined, "workbench.editor.sharedViewState")) {
      this.shareEditorState = this.configurationService.getValue(undefined, "workbench.editor.sharedViewState") === true;
    }
  }
  saveEditorState(e, t, i) {
    const r = this.doGetResource(t);
    if (!r || !e) {
      return;
    }
    const s = this.doLoad();
    let o = s.get(r.toString());
    if (!o) {
      o = Object.create(null);
      s.set(r.toString(), o);
    }
    o[e.id] = i;
    if (this.shareEditorState) {
      o[RWa.SHARED_EDITOR_STATE] = i;
    }
    if (D_(t)) {
      this.clearEditorStateOnDispose(r, t);
    }
  }
  loadEditorState(e, t) {
    const i = this.doGetResource(t);
    if (!i || !e) {
      return;
    }
    const s = this.doLoad().get(i.toString());
    if (s) {
      const o = s[e.id];
      if (o) {
        return o;
      }
      if (this.shareEditorState) {
        return s[RWa.SHARED_EDITOR_STATE];
      }
    }
  }
  clearEditorState(e, t) {
    if (D_(e)) {
      this.editorDisposables?.delete(e);
    }
    const i = this.doGetResource(e);
    if (i) {
      const r = this.doLoad();
      if (t) {
        const s = r.get(i.toString());
        if (s) {
          delete s[t.id];
          if (xbe(s)) {
            r.delete(i.toString());
          }
        }
      } else {
        r.delete(i.toString());
      }
    }
  }
  clearEditorStateOnDispose(e, t) {
    this.editorDisposables ||= new Map();
    if (!this.editorDisposables.has(t)) {
      this.editorDisposables.set(t, In.once(t.onWillDispose)(() => {
        this.clearEditorState(e);
        this.editorDisposables?.delete(t);
      }));
    }
  }
  moveEditorState(e, t, i) {
    const r = this.doLoad();
    const s = [...r.keys()];
    for (const o of s) {
      const a = je.parse(o);
      if (!i.isEqualOrParent(a, e)) {
        continue;
      }
      let l;
      if (Zc(e, a)) {
        l = t;
      } else {
        const d = nCc(a.path, e.path);
        l = Wo(t, a.path.substr(d + e.path.length + 1));
      }
      const u = r.get(o, 0);
      if (u) {
        r.delete(o);
        r.set(l.toString(), u);
      }
    }
  }
  doGetResource(e) {
    if (D_(e)) {
      return e.resource;
    } else {
      return e;
    }
  }
  doLoad() {
    if (!this.cache) {
      this.cache = new Fb(this.limit);
      const e = this.memento[this.key];
      if (Array.isArray(e)) {
        this.cache.fromJSON(e);
      }
    }
    return this.cache;
  }
  saveState() {
    const e = this.doLoad();
    if (!this.cleanedUp) {
      this.cleanUp();
      this.cleanedUp = true;
    }
    this.memento[this.key] = e.toJSON();
  }
  cleanUp() {
    const e = this.doLoad();
    const t = [...e.entries()];
    for (const [i, r] of t) {
      for (const s of Object.keys(r)) {
        const o = Number(s);
        if ((o !== RWa.SHARED_EDITOR_STATE || !this.shareEditorState) && !this.editorGroupService.getGroup(o)) {
          delete r[o];
          if (xbe(r)) {
            e.delete(i);
          }
        }
      }
    }
  }
};
