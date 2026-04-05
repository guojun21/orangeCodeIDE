"use strict";

// Module: out-build/vs/workbench/services/agent/browser/agentProviderService.js
// Offset: 28539098 (bundle byte offset)
// Size: 908 bytes
rt();
fnt();
Er();
Wt();
jr();
UAa = xi("agentProviderService");
$Aa = class extends at {
  constructor(e) {
    super();
    this._logService = e;
    this._handlerOv = new wye();
    this._logService.debug("[AgentProviderService] Initialized");
  }
  registerHandler(e) {
    this._logService.debug("[AgentProviderService] Handler registered");
    const t = this._handlerOv.set(e);
    return $i(() => {
      t.dispose();
      this._logService.debug("[AgentProviderService] Handler unregistered");
    });
  }
  async createAgent(e, t) {
    this._logService.debug("[AgentProviderService] createAgent called", {
      sessionId: e,
      options: t
    });
    const i = await X3(this._handlerOv);
    this._logService.debug("[AgentProviderService] Got handler, creating agent");
    return i.createAgent(e, t);
  }
};
$Aa = __decorate([__param(0, Rr)], $Aa);
Vi(UAa, $Aa, 1);
