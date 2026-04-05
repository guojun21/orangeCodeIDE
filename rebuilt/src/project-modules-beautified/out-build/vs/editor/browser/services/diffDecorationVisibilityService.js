"use strict";

// Module: out-build/vs/editor/browser/services/diffDecorationVisibilityService.js
// Offset: 27535250 (bundle byte offset)
// Size: 1995 bytes
yn();
rt();
Er();
Wt();
rf();
kr();
Ud();
eu();
CEe = xi("diffDecorationVisibilityService");
Ofa = class extends at {
  constructor(e, t, i) {
    super();
    this.storageService = e;
    this.analyticsService = t;
    this.workbenchEnvironmentService = i;
    this._onDidChangeGlobal = this._register(new Qe());
    this.onDidChangeGlobal = this._onDidChangeGlobal.event;
    this._noInlineDiffsProp = hm(this.storageService, "noInlineDiffs");
    this._register(this._noInlineDiffsProp);
    this._noInlineDiffsProp.recomputeInitiallyAndOnChange(this._store, () => {
      this._fireChangeEvent();
    });
  }
  _fireChangeEvent() {
    this._onDidChangeGlobal.fire({
      noInlineDiffs: this.getNoInlineDiffsSetting()
    });
  }
  shouldHideInlineDiffs() {
    if (this.workbenchEnvironmentService.isGlass === true) {
      return true;
    }
    const e = this._noInlineDiffsProp.get();
    if (e !== null) {
      return e;
    } else {
      return false;
    }
  }
  getNoInlineDiffsSetting() {
    const e = this._noInlineDiffsProp.get();
    if (e !== null) {
      return e;
    } else {
      return false;
    }
  }
  setNoInlineDiffsSetting(e) {
    this.analyticsService.trackEvent("ide_settings.setting_changed", {
      settingId: "no_inline_diffs",
      section: "applying_changes",
      value: String(e)
    });
    this._noInlineDiffsProp.set(e, undefined);
  }
};
Ofa = __decorate([__param(0, Hi), __param(1, uh), __param(2, Cc)], Ofa);
Vi(CEe, Ofa, 1);
