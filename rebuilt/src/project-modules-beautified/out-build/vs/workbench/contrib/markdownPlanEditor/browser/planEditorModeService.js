"use strict";

// Module: out-build/vs/workbench/contrib/markdownPlanEditor/browser/planEditorModeService.js
// Offset: 33868334 (bundle byte offset)
// Size: 1618 bytes
rt();
Yn();
Wt();
Er();
ns();
Dd();
ss();
od();
Nu();
r1i();
yn();
s1i = xi("planEditorModeService");
hpe = {
  RICH: "rich",
  RAW: "raw"
};
EDa = class extends at {
  constructor(e, t, i, r) {
    super();
    this._fileService = e;
    this._reactiveStorageService = t;
    this._editorService = i;
    this._editorGroupsService = r;
    this._onDidModeChange = this._register(new Qe());
    this.onDidModeChange = this._onDidModeChange.event;
    this._cleanupStalePreferences();
  }
  get _preferences() {
    return this._reactiveStorageService.applicationUserPersistentStorage.planEditorModePreferences || {};
  }
  _setPreferences(e) {
    this._reactiveStorageService.setApplicationUserPersistentStorage("planEditorModePreferences", e);
  }
  getMode(e) {
    return this._preferences[e.toString()] ?? hpe.RICH;
  }
  setMode(e, t) {
    const i = e.toString();
    if (this._preferences[i] !== t) {
      this._setPreferences({
        ...this._preferences,
        [i]: t
      });
      this._onDidModeChange.fire({
        uri: e,
        mode: t
      });
    }
  }
  async switchEditorMode(e, t) {
    this.setMode(e, t);
    const i = this._editorGroupsService.activeGroup;
    const r = this._editorService.activeEditor;
    if (!r) {
      return;
    }
    const s = t === hpe.RAW ? G0.id : jV.EditorID;
    await this._editorService.replaceEditors([{
      editor: r,
      replacement: {
        resource: e,
        options: {
          override: s
        }
      }
    }], i);
  }
  async _cleanupStalePreferences() {
    const e = this._preferences;
    if (Object.keys(e).length === 0) {
      return;
    }
    const t = {};
    let i = false;
    await Promise.all(Object.entries(e).map(async ([r, s]) => {
      try {
        const o = je.parse(r);
        if (await this._fileService.exists(o)) {
          t[r] = s;
        } else {
          i = true;
        }
      } catch {
        i = true;
      }
    }));
    if (i) {
      this._setPreferences(t);
    }
  }
};
EDa = __decorate([__param(0, Gr), __param(1, ku), __param(2, yi), __param(3, da)], EDa);
Vi(s1i, EDa, 1);
