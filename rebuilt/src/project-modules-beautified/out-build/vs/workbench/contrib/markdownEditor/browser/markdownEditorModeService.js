"use strict";

// Module: out-build/vs/workbench/contrib/markdownEditor/browser/markdownEditorModeService.js
// Offset: 33857827 (bundle byte offset)
// Size: 1748 bytes
rt();
Yn();
Wt();
Er();
ns();
kr();
rf();
ss();
od();
Nu();
SDa();
yn();
Wu();
cvn = xi("markdownEditorModeService");
tle = {
  RICH: "rich",
  RAW: "raw"
};
kDa = class extends at {
  constructor(e, t, i, r, s) {
    super();
    this._fileService = e;
    this._storageService = t;
    this._editorService = i;
    this._editorGroupsService = r;
    this._experimentService = s;
    this._onDidModeChange = this._register(new Qe());
    this.onDidModeChange = this._onDidModeChange.event;
    this._preferencesObservable = this._register(hm(this._storageService, "markdownEditorModePreferences"));
    this._cleanupStalePreferences();
  }
  get _preferences() {
    return this._preferencesObservable.get();
  }
  _setPreferences(e) {
    this._preferencesObservable.set(e, undefined);
  }
  getMode(e) {
    const t = this._preferences[e.toString()];
    return t || (this._experimentService.checkFeatureGate("wysiwyg_markdown_default") ? tle.RICH : tle.RAW);
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
    const s = t === tle.RAW ? G0.id : ele.EditorID;
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
kDa = __decorate([__param(0, Gr), __param(1, Hi), __param(2, yi), __param(3, da), __param(4, Tl)], kDa);
Vi(cvn, kDa, 1);
