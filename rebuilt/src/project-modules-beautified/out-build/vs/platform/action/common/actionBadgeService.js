"use strict";

// Module: out-build/vs/platform/action/common/actionBadgeService.js
// Offset: 2297995 (bundle byte offset)
// Size: 717 bytes
yn();
Er();
Wt();
cve = xi("actionBadgeService");
HCh = class {
  constructor() {
    this._onDidChangeBadge = new Qe();
    this.onDidChangeBadge = this._onDidChangeBadge.event;
    this._badgesByActionId = new Map();
  }
  setBadge(n, e) {
    if (e) {
      this._badgesByActionId.set(n, e);
    } else {
      this._badgesByActionId.delete(n);
    }
    this._onDidChangeBadge.fire({
      actionId: n,
      badge: e
    });
  }
  getBadge(n) {
    return this._badgesByActionId.get(n);
  }
  clearBadge(n) {
    this._badgesByActionId.delete(n);
    this._onDidChangeBadge.fire({
      actionId: n,
      badge: undefined
    });
  }
};
Vi(cve, HCh, 0);
