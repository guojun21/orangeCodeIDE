"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/collapsedCellOutput.js
// Offset: 33305683 (bundle byte offset)
// Size: 852 bytes
ri();
qi();
Jr();
Ht();
ka();
Sb();
LQ();
a_u = Ct;
MTa = class extends JV {
  constructor(e, t, i) {
    super();
    this.notebookEditor = e;
    const r = Rt(t, a_u("span.expandOutputPlaceholder"));
    r.textContent = _(9489, null);
    const s = Rt(t, a_u("span.expandOutputIcon"));
    s.classList.add(...Qt.asClassNameArray(Be.more));
    const o = i.lookupKeybinding(t0u);
    if (o) {
      r.title = _(9490, null, o.getLabel());
      t.title = _(9491, null, o.getLabel());
    }
    Ng(t);
    this._register(ei(s, ir.CLICK, () => this.expand()));
    this._register(ei(t, ir.DBLCLICK, () => this.expand()));
  }
  expand() {
    if (!!this.currentCell && !!this.currentCell && !(this.notebookEditor.textModel.cells.indexOf(this.currentCell.model) < 0)) {
      this.currentCell.isOutputCollapsed = !this.currentCell.isOutputCollapsed;
    }
  }
};
MTa = __decorate([__param(2, mo)], MTa);
