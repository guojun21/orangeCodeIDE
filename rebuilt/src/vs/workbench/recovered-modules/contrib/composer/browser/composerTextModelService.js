// Deep recovered from recovered/candidate-source-deep-promoted/cursor-modules/vs/workbench/contrib/composer/browser/composerTextModelService.js
// Cluster: composer-core-names
// webcrackUsed: true
// lockedRenames: 1
// llmRenamesAccepted: 0
// llmEnabled: false
"use strict";
"use strict";

rt();
td();
Er();
Wt();
ps();
gye();
composerTextModelServiceToken = xi("composerTextModelService");
ComposerTextModelService = class extends at {
  constructor(e, t) {
    super();
    this._textModelService = e;
    this._workspaceContextService = t;
  }
  async createModelReference(e, t, i) {
    const r = this.getURIForComposer(e, t);
    return this._textModelService.createModelReference(r, i);
  }
  registerTextModelContentProvider(e, t) {
    return this._textModelService.registerTextModelContentProvider(e, t);
  }
  getURIForComposer(e, t) {
    return TSt(e, t, this._workspaceContextService);
  }
  dispose() {
    super.dispose();
  }
};
ComposerTextModelService = __decorate([__param(0, El), __param(1, Lr)], ComposerTextModelService);
Vi(composerTextModelServiceToken, ComposerTextModelService, 1);
