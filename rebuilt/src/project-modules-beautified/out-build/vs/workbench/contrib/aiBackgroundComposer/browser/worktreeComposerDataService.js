"use strict";

// Module: out-build/vs/workbench/contrib/aiBackgroundComposer/browser/worktreeComposerDataService.js
// Offset: 33808330 (bundle byte offset)
// Size: 1491 bytes
Wt();
rt();
Er();
kr();
ps();
gT();
vNe();
I0u = xi("worktreeComposerDataService");
Kki = "worktrees.cachedBranchSelectionMode";
lDa = class extends at {
  constructor(e, t) {
    super();
    this.storageService = e;
    this.workspaceContextService = t;
    const i = this.storageService.get(Kki, 1, rP.DEFAULT);
    [this.data, this.setData] = v3({
      branchSelectionMode: i
    });
    this._register(this.storageService.onDidChangeValue(1, Kki, this._register(new Ut()))(r => {
      const s = this.storageService.get(Kki, 1, rP.DEFAULT);
      this.setData("branchSelectionMode", s);
    }));
  }
  getBranchSelectionMode() {
    return this.data.branchSelectionMode;
  }
  setBranchSelectionMode(e) {
    this.setData("branchSelectionMode", e);
    this.storageService.store(Kki, e, 1, 1);
  }
};
lDa = __decorate([__param(0, Hi), __param(1, Lr)], lDa);
Vi(I0u, lDa, 2);
