"use strict";

// Module: out-build/vs/workbench/services/ai/browser/composerNotificationService.js
// Offset: 26610512 (bundle byte offset)
// Size: 4127 bytes
yn();
Er();
Wt();
Ud();
htu();
g$e = xi("composerNotificationService");
(function (n) {
  n.MCP = "mcp";
  n.NetworkAccess = "network_access";
  n.GitHubAuth = "github_auth";
  n.ModeNudge = "mode_nudge";
  n.NoInlineDiffsSuggestion = "no_inline_diffs_suggestion";
  n.PluginSuggestion = "plugin_suggestion";
})(_S ||= {});
xNe = {
  INFO: 300,
  ACTION: 600,
  WARN: 900
};
UNg = 1000;
Cpa = class {
  constructor(e) {
    this.analyticsService = e;
    this._onAcceptNotification = new Qe();
    this.onAcceptNotification = this._onAcceptNotification.event;
    [this.notification_reactive, this.setNotification] = lt();
  }
  hasHigherOrEqualPriority(e, t) {
    if (e === undefined) {
      return true;
    } else if (t === undefined) {
      return false;
    } else {
      return e >= t;
    }
  }
  showNotification(e) {
    if (this.pendingNotification === undefined || !!this.hasHigherOrEqualPriority(e.priority, this.pendingNotification.priority)) {
      this.pendingNotification = e;
      if (this.debounceTimeout !== undefined) {
        clearTimeout(this.debounceTimeout);
      }
      this.debounceTimeout = setTimeout(() => {
        this.flushPendingNotification();
      }, UNg);
    }
  }
  flushPendingNotification() {
    this.debounceTimeout = undefined;
    const e = this.pendingNotification;
    this.pendingNotification = undefined;
    if (e === undefined) {
      return;
    }
    const t = this.notification_reactive();
    if (t === undefined || !!this.hasHigherOrEqualPriority(e.priority, t.priority)) {
      this.setNotification(e);
    }
  }
  dismissNotification() {
    const e = this.notification_reactive();
    if (e && e.type !== _S.PluginSuggestion) {
      this.analyticsService.trackEvent("composer_notification.dismissed", {
        type: e.type
      });
    }
    this.clearPendingState();
    this.setNotification(undefined);
  }
  clearNotification(e) {
    this.clearPendingState(e);
    const t = this.notification_reactive();
    if (e === undefined || t?.type === e) {
      this.setNotification(undefined);
    }
  }
  clearPendingState(e) {
    if (e === undefined || this.pendingNotification?.type === e) {
      if (this.debounceTimeout !== undefined) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = undefined;
      }
      this.pendingNotification = undefined;
    }
  }
  getCurrentNotification() {
    return this.notification_reactive();
  }
  acceptNotification() {
    if (this.notification_reactive() !== undefined) {
      this._onAcceptNotification.fire();
    }
  }
};
Cpa = __decorate([__param(0, uh)], Cpa);
Vi(g$e, Cpa, 1);
