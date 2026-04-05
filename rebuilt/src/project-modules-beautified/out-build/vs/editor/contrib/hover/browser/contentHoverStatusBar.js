"use strict";

// Module: out-build/vs/editor/contrib/hover/browser/contentHoverStatusBar.js
// Offset: 4239768 (bundle byte offset)
// Size: 1339 bytes
ri();
W9t();
rt();
ka();
Id();
mb();
M5c = Ct;
nUn = class extends at {
  get hasContent() {
    return this._hasContent;
  }
  constructor(e, t) {
    super();
    this._keybindingService = e;
    this._hoverService = t;
    this.actions = [];
    this._hasContent = false;
    this.hoverElement = M5c("div.hover-row.status-bar");
    this.hoverElement.tabIndex = 0;
    this.actionsElement = Rt(this.hoverElement, M5c("div.actions"));
  }
  addAction(e) {
    const t = this._keybindingService.lookupKeybinding(e.commandId);
    const i = t ? t.getLabel() : null;
    this._hasContent = true;
    const r = this._register(y$o.render(this.actionsElement, e, i));
    this._register(this._hoverService.setupManagedHover(Sm("element"), r.actionContainer, r.actionRenderedLabel));
    this.actions.push(r);
    return r;
  }
  append(e) {
    const t = Rt(this.actionsElement, e);
    this._hasContent = true;
    return t;
  }
};
nUn = __decorate([__param(0, mo), __param(1, Kc)], nUn);
