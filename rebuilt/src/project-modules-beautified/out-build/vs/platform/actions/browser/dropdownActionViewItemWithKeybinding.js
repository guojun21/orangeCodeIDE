"use strict";

// Module: out-build/vs/platform/actions/browser/dropdownActionViewItemWithKeybinding.js
// Offset: 30897271 (bundle byte offset)
// Size: 505 bytes
jde();
Ht();
si();
ka();
D_i = class extends VH {
  constructor(e, t, i, r = Object.create(null), s, o) {
    super(e, t, i, r);
    this.keybindingService = s;
    this.contextKeyService = o;
  }
  getTooltip() {
    const e = this.keybindingService.lookupKeybinding(this.action.id, this.contextKeyService);
    const t = e && e.getLabel();
    const i = this.action.tooltip ?? this.action.label;
    if (t) {
      return _(1783, null, i, t);
    } else {
      return i;
    }
  }
};
D_i = __decorate([__param(4, mo), __param(5, wi)], D_i);
