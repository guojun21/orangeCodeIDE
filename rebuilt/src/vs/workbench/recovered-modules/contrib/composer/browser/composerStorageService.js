// Deep recovered from recovered/candidate-source-deep-promoted/cursor-modules/vs/workbench/contrib/composer/browser/composerStorageService.js
// Cluster: composer-core-names
// webcrackUsed: true
// lockedRenames: 1
// llmRenamesAccepted: 0
// llmEnabled: false
"use strict";
"use strict";

rt();
Er();
Wt();
Tw();
rf();
kr();
composerStorageServiceToken = xi("composerStorageService");
ComposerStorageService = class extends at {
  update(e) {
    this.state.change({
      ...this.state.value,
      ...e
    });
  }
  updateDataHandleTracker(e) {
    this.dataHandleTracker.change(e);
  }
  constructor(e) {
    super();
    this.storageService = e;
    this.state = this._register(new j_({}));
    this.dataHandleTracker = this._register(new j_({
      handleHistory: [],
      activeHandles: {}
    }));
    this.enableDataHandleDebugging = this._register(hm(this.storageService, "enableDataHandleDebugging"));
    this.visualizeLoadedHandles = this._register(hm(this.storageService, "visualizeLoadedHandles"));
  }
};
ComposerStorageService = __decorate([__param(0, Hi)], ComposerStorageService);
Vi(composerStorageServiceToken, ComposerStorageService, 0);
