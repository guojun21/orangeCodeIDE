"use strict";

// Module: out-build/vs/workbench/browser/quickaccess.js
// Offset: 28200722 (bundle byte offset)
// Size: 1349 bytes
Ht();
si();
ka();
Kl();
rt();
lv();
od();
ss();
dau = "inQuickOpen";
ief = new Sn(dau, false, _(4065, null));
kce = Ee.has(dau);
hau = "inFilesPicker";
mau = Ee.and(kce, Ee.has(hau));
Vmn = class extends at {
  constructor(e, t) {
    super();
    this.editorService = e;
    this.editorGroupsService = t;
    this._editorViewState = undefined;
    this.openedTransientEditors = new Set();
  }
  set() {
    if (this._editorViewState) {
      return;
    }
    const e = this.editorService.activeEditorPane;
    if (e) {
      this._editorViewState = {
        group: e.group,
        editor: e.input,
        state: r0A(e.getControl())?.saveViewState() ?? undefined
      };
    }
  }
  async openTransientEditor(e, t) {
    e.options = {
      ...e.options,
      transient: true
    };
    const i = await this.editorService.openEditor(e, t);
    if (i?.input && i.input !== this._editorViewState?.editor && i.group.isTransient(i.input)) {
      this.openedTransientEditors.add(i.input);
    }
    return i;
  }
  async restore() {
    if (this._editorViewState) {
      for (const e of this.openedTransientEditors) {
        if (!e.isDirty()) {
          for (const t of this.editorGroupsService.groups) {
            if (t.isTransient(e)) {
              await t.closeEditor(e, {
                preserveFocus: true
              });
            }
          }
        }
      }
      await this._editorViewState.group.openEditor(this._editorViewState.editor, {
        viewState: this._editorViewState.state,
        preserveFocus: true
      });
      this.reset();
    }
  }
  reset() {
    this._editorViewState = undefined;
    this.openedTransientEditors.clear();
  }
  dispose() {
    super.dispose();
    this.reset();
  }
};
Vmn = __decorate([__param(0, yi), __param(1, da)], Vmn);
