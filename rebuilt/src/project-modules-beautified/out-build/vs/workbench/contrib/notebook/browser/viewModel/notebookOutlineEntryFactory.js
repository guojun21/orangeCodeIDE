"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/notebookOutlineEntryFactory.js
// Offset: 25023664 (bundle byte offset)
// Size: 1827 bytes
y3();
eV();
Ht();
Ifg();
lCA();
ph();
uD();
Wt();
td();
(function (n) {
  n[n.NonHeaderOutlineLevel = 7] = "NonHeaderOutlineLevel";
})(Qfg ||= {});
LWl = xi("INotebookOutlineEntryFactory");
Kca = class {
  constructor(e, t, i) {
    this.executionStateService = e;
    this.outlineModelService = t;
    this.textModelService = i;
    this.cellOutlineEntryCache = {};
    this.cachedMarkdownOutlineEntries = new WeakMap();
  }
  getOutlineEntries(e, t) {
    const i = [];
    const r = e.cellKind === zd.Markup;
    let s = dCA(e);
    let o = false;
    if (r) {
      const a = e.getText().substring(0, 10000);
      const l = this.cachedMarkdownOutlineEntries.get(e);
      const u = l?.alternativeId === e.getAlternativeId() ? l.headers : Array.from(uCA(a));
      this.cachedMarkdownOutlineEntries.set(e, {
        alternativeId: e.getAlternativeId(),
        headers: u
      });
      for (const {
        depth: d,
        text: m
      } of u) {
        o = true;
        i.push(new Kpi(t++, d, e, m, false, false));
      }
      if (!o) {
        s = lbt({
          value: s
        });
      }
    }
    if (!o) {
      const a = !r && this.executionStateService.getCellExecution(e.uri);
      let l = s.trim();
      if (!r) {
        const u = this.cellOutlineEntryCache[e.id];
        if (u) {
          i.push(new Kpi(t++, 7, e, l, !!a, a ? a.isPaused : false));
          u.forEach(d => {
            i.push(new Kpi(t++, d.level, e, d.name, false, false, d.range, d.kind));
          });
        }
      }
      if (i.length === 0) {
        if (l.length === 0) {
          l = _(9501, null);
        }
        i.push(new Kpi(t++, 7, e, l, !!a, a ? a.isPaused : false));
      }
    }
    return i;
  }
  async cacheSymbols(e, t) {
    if (e.cellKind === zd.Markup) {
      return;
    }
    const i = await this.textModelService.createModelReference(e.uri);
    try {
      const r = i.object.textEditorModel;
      const s = await this.outlineModelService.getOrCreate(r, t);
      const o = PWl(s.getTopLevelSymbols(), 8);
      this.cellOutlineEntryCache[e.id] = o;
    } finally {
      i.dispose();
    }
  }
};
Kca = __decorate([__param(0, pE), __param(1, Gne), __param(2, El)], Kca);
