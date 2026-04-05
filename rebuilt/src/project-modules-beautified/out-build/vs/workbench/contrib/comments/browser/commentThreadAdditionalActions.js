"use strict";

// Module: out-build/vs/workbench/contrib/comments/browser/commentThreadAdditionalActions.js
// Offset: 33217344 (bundle byte offset)
// Size: 1704 bytes
ri();
rt();
Nwu();
ka();
pl();
yTa = class extends at {
  constructor(e, t, i, r, s, o, a) {
    super();
    this._commentThread = t;
    this._contextKeyService = i;
    this._commentMenus = r;
    this._actionRunDelegate = s;
    this._keybindingService = o;
    this._contextMenuService = a;
    this._container = Rt(e, Ct(".comment-additional-actions"));
    Rt(this._container, Ct(".section-separator"));
    this._buttonBar = Rt(this._container, Ct(".button-bar"));
    this._createAdditionalActions(this._buttonBar);
  }
  _showMenu() {
    this._container?.classList.remove("hidden");
  }
  _hideMenu() {
    this._container?.classList.add("hidden");
  }
  _enableDisableMenu(e) {
    const t = e.getActions({
      shouldForwardArgs: true
    });
    for (const i of t) {
      const [, r] = i;
      for (const s of r) {
        if (s.enabled) {
          this._showMenu();
          return;
        }
        for (const o of s.actions ?? []) {
          if (o.enabled) {
            this._showMenu();
            return;
          }
        }
      }
    }
    this._hideMenu();
  }
  _createAdditionalActions(e) {
    const t = this._commentMenus.getCommentThreadAdditionalActions(this._contextKeyService);
    this._register(t);
    this._register(t.onDidChange(() => {
      this._commentFormActions.setActions(t, true);
      this._enableDisableMenu(t);
    }));
    this._commentFormActions = new Sbn(this._keybindingService, this._contextKeyService, this._contextMenuService, e, async i => {
      this._actionRunDelegate?.();
      i.run({
        thread: this._commentThread,
        $mid: 8
      });
    }, 4, true);
    this._register(this._commentFormActions);
    this._commentFormActions.setActions(t, true);
    this._enableDisableMenu(t);
  }
};
yTa = __decorate([__param(5, mo), __param(6, kc)], yTa);
