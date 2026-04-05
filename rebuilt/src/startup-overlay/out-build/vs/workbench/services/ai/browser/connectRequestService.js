"use strict";

// Module: out-build/vs/workbench/services/ai/browser/connectRequestService.js
// Offset: 27503436 (bundle byte offset)
// Size: 2061 bytes
yn();
rt();
Er();
Wt();
vE();
uJg = 30000;
Nvi = 100;
lmn = xi("aiConnectRequestService");
Rfa = class extends at {
  constructor(e) {
    super();
    this.structuredLogService = e;
    this._onDidChangeTransport = this._register(new Qe());
    this.onDidChangeTransport = this._onDidChangeTransport.event;
    this._authReady = false;
    this._authHasToken = false;
  }
  registerConnectTransportProvider(e) {
    this._provider = e;
    this._transportRegisteredTime = Date.now();
    this._onDidChangeTransport.fire();
  }
  signalAuthReady(e) {
    this._authReady = true;
    this._authHasToken = e;
    this._authReadyTime = Date.now();
    const t = this._transportRegisteredTime !== undefined && this._authReadyTime > this._transportRegisteredTime;
    const i = {
      isReady: true,
      hasToken: e,
      raceConditionPrevented: t,
      waitedMs: this._transportRegisteredTime ? this._authReadyTime - this._transportRegisteredTime : undefined
    };
    if (t) {
      this.structuredLogService.info("auth", "Auth ready signal received - race condition would have been prevented", {
        subkey: "auth_ready_race_prevented",
        hasToken: String(e),
        waitedMs: String(i.waitedMs ?? 0)
      });
    }
  }
  async waitForAuthReady() {
    if (this._authReady) {
      return {
        isReady: true,
        hasToken: this._authHasToken,
        waitedMs: 0
      };
    }
    const e = Date.now();
    let t = 0;
    const i = uJg / Nvi;
    while (!this._authReady && t < i) {
      await new Promise(s => setTimeout(s, Nvi));
      t++;
    }
    const r = Date.now() - e;
    if (this._authReady) {
      if (r > Nvi) {
        this.structuredLogService.info("auth", "Race condition prevented by waiting for auth ready", {
          subkey: "race_condition_prevented_main_thread",
          waitedMs: String(r),
          pollCount: String(t),
          hasToken: String(this._authHasToken)
        });
      }
      return {
        isReady: true,
        hasToken: this._authHasToken,
        waitedMs: r,
        raceConditionPrevented: r > Nvi
      };
    } else {
      this.structuredLogService.warn("auth", "Timeout waiting for auth ready signal", {
        subkey: "auth_ready_timeout",
        waitedMs: String(r),
        pollCount: String(t)
      });
      return {
        isReady: false,
        hasToken: false,
        waitedMs: r
      };
    }
  }
  async transport() {
    let e = 0;
    const t = 480;
    while (!this._provider) {
      if (e >= t) {
        throw new Error("No Connect transport provider registered.");
      }
      await new Promise(i => setTimeout(i, 250));
      e++;
    }
    return this._provider;
  }
};
Rfa = __decorate([__param(0, Kk)], Rfa);
Vi(lmn, Rfa, 1, 1);
