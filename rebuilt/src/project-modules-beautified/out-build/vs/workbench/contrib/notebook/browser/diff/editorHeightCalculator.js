"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/diff/editorHeightCalculator.js
// Offset: 33639068 (bundle byte offset)
// Size: 2597 bytes
x3n();
Hk();
td();
Ei();
dIa();
Prt();
Oki = class {
  constructor(e, t, i, r) {
    this.lineHeight = e;
    this.textModelResolverService = t;
    this.editorWorkerService = i;
    this.configurationService = r;
  }
  async diffAndComputeHeight(e, t) {
    const [i, r] = await Promise.all([this.textModelResolverService.createModelReference(e), this.textModelResolverService.createModelReference(t)]);
    try {
      const s = await this.editorWorkerService.computeDiff(e, t, {
        ignoreTrimWhitespace: true,
        maxComputationTimeMs: 0,
        computeMoves: false
      }, "advanced").then(x => x?.changes || []);
      const o = this.configurationService.getValue("diffEditor.hideUnchangedRegions.enabled");
      const a = this.configurationService.getValue("diffEditor.hideUnchangedRegions.minimumLineCount");
      const l = this.configurationService.getValue("diffEditor.hideUnchangedRegions.contextLineCount");
      const u = i.object.textEditorModel.getLineCount();
      const d = r.object.textEditorModel.getLineCount();
      const m = o ? M3t.fromDiffs(s, u, d, a ?? 3, l ?? 3) : [];
      const p = s.reduce((x, I) => I.original.isEmpty && !I.modified.isEmpty ? x + I.modified.length : !I.original.isEmpty && !I.modified.isEmpty && I.modified.length > I.original.length ? x + I.modified.length - I.original.length : x, 0);
      const g = i.object.textEditorModel.getLineCount();
      const f = m.reduce((x, I) => x + I.lineCount, 0);
      const w = m.length * A6f;
      const C = g + p - f;
      return C * this.lineHeight + g2e(C).top + g2e(C).bottom + w;
    } finally {
      i.dispose();
      r.dispose();
    }
  }
  computeHeightFromLines(e) {
    return e * this.lineHeight + g2e(e).top + g2e(e).bottom;
  }
};
Oki = __decorate([__param(1, El), __param(2, c_), __param(3, Fn)], Oki);
