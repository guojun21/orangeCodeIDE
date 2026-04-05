"use strict";

// Module: out-build/vs/workbench/services/ai/browser/networkAccessNotificationService.js
// Offset: 33790420 (bundle byte offset)
// Size: 1505 bytes
rt();
Wt();
Er();
f$e();
jr();
b0u = xi("networkAccessNotificationService");
YIa = 300000;
ZIa = class extends at {
  constructor(e, t) {
    super();
    this.composerNotificationService = e;
    this.logService = t;
    this.composerSuggestionShown = new Map();
  }
  suggestNetworkAccess(e) {
    if (this.lastDismissalTime) {
      const t = Date.now() - this.lastDismissalTime;
      if (t < YIa) {
        const i = Math.ceil((YIa - t) / 60000);
        this.logService.trace(`[NetworkAccessNotification] In cooldown period, ${i} minutes remaining`);
        return;
      }
      this.lastDismissalTime = undefined;
    }
    if (this.composerSuggestionShown.has(e)) {
      this.logService.trace(`[NetworkAccessNotification] Already shown suggestion for composer ${e}`);
      return;
    }
    this.composerSuggestionShown.set(e, true);
    this.composerNotificationService.showNotification({
      type: _S.NetworkAccess,
      composerId: e
    });
    this.logService.trace(`[NetworkAccessNotification] Showing network access suggestion for composer ${e}`);
  }
  dismissSuggestion() {
    this.lastDismissalTime = Date.now();
    this.logService.trace(`[NetworkAccessNotification] Dismissed, cooldown active for ${YIa / 60000} minutes`);
    const e = this.composerNotificationService.getCurrentNotification();
    if (e && e.type === _S.NetworkAccess) {
      this.composerNotificationService.dismissNotification();
    }
  }
  clearSuggestion() {
    this.composerNotificationService.clearNotification(_S.NetworkAccess);
  }
  hasShownSuggestion(e) {
    return this.composerSuggestionShown.has(e);
  }
};
ZIa = __decorate([__param(0, g$e), __param(1, Rr)], ZIa);
Vi(b0u, ZIa, 1);
