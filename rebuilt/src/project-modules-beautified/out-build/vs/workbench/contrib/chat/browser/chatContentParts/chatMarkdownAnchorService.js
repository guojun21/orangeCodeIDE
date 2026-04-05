"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatMarkdownAnchorService.js
// Offset: 32732947 (bundle byte offset)
// Size: 1037 bytes
ri();
rt();
Wt();
fEt = xi("chatMarkdownAnchorService");
r5f = class extends at {
  constructor() {
    super(...arguments);
    this._widgets = [];
    this._lastFocusedWidget = undefined;
  }
  get lastFocusedAnchor() {
    return this._lastFocusedWidget;
  }
  setLastFocusedList(n) {
    this._lastFocusedWidget = n;
  }
  register(n) {
    if (this._widgets.some(t => t === n)) {
      throw new Error("Cannot register the same widget multiple times");
    }
    this._widgets.push(n);
    const e = n.getHTMLElement();
    if (zP(e)) {
      this.setLastFocusedList(n);
    }
    return H_(ei(e, "focus", () => this.setLastFocusedList(n)), $i(() => this._widgets.splice(this._widgets.indexOf(n), 1)), ei(e, "blur", () => {
      if (this._lastFocusedWidget === n) {
        this.setLastFocusedList(undefined);
      }
    }));
  }
};
