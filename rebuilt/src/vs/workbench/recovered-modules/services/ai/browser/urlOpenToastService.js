"use strict";

// Module: out-build/vs/workbench/services/ai/browser/urlOpenToastService.js
// Offset: 33871714 (bundle byte offset)
// Size: 766 bytes
nl();
rt();
Wt();
Er();
So();
rf();
kr();
Ht();
IDa = xi("urlOpenToastService");
DDa = class extends at {
  static {
    q0u = this;
  }
  static {
    this.NEVER_SHOW_AGAIN_ID = "urlOpenToast.neverShowAgainv1";
  }
  constructor(e, t) {
    super();
    this._notificationService = e;
    this._storageService = t;
  }
  showUrlOpenToast(e) {
    this._notificationService.notify({
      severity: Rs.Info,
      message: _(13658, null, e),
      actions: {
        primary: [Sh({
          id: "urlOpenToast.dontOpen",
          label: _(13659, null),
          run: () => {
            const t = hm(this._storageService, "autoOpenLocalhostUrls");
            t.set(false, undefined);
            t.dispose();
          }
        })]
      },
      neverShowAgain: {
        id: q0u.NEVER_SHOW_AGAIN_ID,
        scope: Toe.APPLICATION,
        isSecondary: false
      }
    });
  }
};
DDa = q0u = __decorate([__param(0, ms), __param(1, Hi)], DDa);
Vi(IDa, DDa, 1);
