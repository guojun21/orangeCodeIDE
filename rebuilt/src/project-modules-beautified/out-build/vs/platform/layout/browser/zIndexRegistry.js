"use strict";

// Module: out-build/vs/platform/layout/browser/zIndexRegistry.js
// Offset: 30784184 (bundle byte offset)
// Size: 2003 bytes
ri();
KC();
vr();
(function (n) {
  n[n.Base = 0] = "Base";
  n[n.Sash = 35] = "Sash";
  n[n.SuggestWidget = 40] = "SuggestWidget";
  n[n.Hover = 50] = "Hover";
  n[n.DragImage = 1000] = "DragImage";
  n[n.MenubarMenuItemsHolder = 2000] = "MenubarMenuItemsHolder";
  n[n.ContextView = 2500] = "ContextView";
  n[n.ModalDialog = 2600] = "ModalDialog";
  n[n.PaneDropOverlay = 10000] = "PaneDropOverlay";
})(TQ ||= {});
h1f = Object.keys(TQ).filter(n => !isNaN(Number(n))).map(n => Number(n)).sort((n, e) => e - n);
m1f = class {
  constructor() {
    this.styleSheet = wC();
    this.zIndexMap = new Map();
    this.scheduler = new Hu(() => this.updateStyleElement(), 200);
  }
  registerZIndex(n, e, t) {
    if (this.zIndexMap.get(t)) {
      throw new Error(`z-index with name ${t} has already been registered.`);
    }
    const i = n + e;
    if (iiy(i) !== n) {
      throw new Error(`Relative layer: ${n} + z-index: ${e} exceeds next layer ${i}.`);
    }
    this.zIndexMap.set(t, i);
    this.scheduler.schedule();
    return this.getVarName(t);
  }
  getVarName(n) {
    return `--z-index-${n}`;
  }
  updateStyleElement() {
    th(this.styleSheet);
    let n = "";
    this.zIndexMap.forEach((e, t) => {
      n += `${this.getVarName(t)}: ${e};
`;
    });
    uW(":root", n, this.styleSheet);
  }
};
p1f = new m1f();
