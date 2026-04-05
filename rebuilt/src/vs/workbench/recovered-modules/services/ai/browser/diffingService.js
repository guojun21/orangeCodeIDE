"use strict";

// Module: out-build/vs/workbench/services/ai/browser/diffingService.js
// Offset: 33698562 (bundle byte offset)
// Size: 516 bytes
rt();
Er();
Wt();
Kbn = xi("diffingService");
V6f = class extends at {
  constructor() {
    super();
    this._diffingProvider = undefined;
  }
  async wordDiff(n, e) {
    if (this._diffingProvider) {
      return this._diffingProvider.wordDiff(n, e);
    } else {
      console.error("No diffing provider registered");
      return {
        changes: [{
          value: e,
          added: true
        }, {
          value: n,
          removed: true
        }]
      };
    }
  }
  registerDiffingProvider(n) {
    this._diffingProvider = n;
  }
  unregisterDiffingProvider() {
    this._diffingProvider = undefined;
  }
};
Vi(Kbn, V6f, 1);
