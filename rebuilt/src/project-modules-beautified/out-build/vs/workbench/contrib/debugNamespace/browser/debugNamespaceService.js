"use strict";

// Module: out-build/vs/workbench/contrib/debugNamespace/browser/debugNamespaceService.js
// Offset: 26859613 (bundle byte offset)
// Size: 974 bytes
Wt();
rt();
Er();
jr();
Ti();
yn();
mye = xi("devConsoleService");
xga = class extends at {
  constructor(e) {
    super();
    this.logService = e;
    this._onDidRegisterFunction = this._register(new Qe());
    this.onDidRegisterFunction = this._onDidRegisterFunction.event;
    this.debugFunctions = new Map();
  }
  register(e, t) {
    if (this.debugFunctions.has(e)) {
      this.logService.warn(`[Debug] Function '${e}' already registered, overwriting`);
    }
    const i = (...r) => sc(() => t(...r));
    this.debugFunctions.set(e, i);
    this._onDidRegisterFunction.fire({
      name: e,
      fn: i
    });
  }
  getDebugFunctions() {
    return this.debugFunctions;
  }
};
xga = __decorate([__param(0, Rr)], xga);
Vi(mye, xga, 1);
