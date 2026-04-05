"use strict";

// Module: out-build/vs/workbench/services/agent/browser/agentPrewarmService.js
// Offset: 28535246 (bundle byte offset)
// Size: 3852 bytes
rt();
Jk();
KKe();
Er();
Wt();
jr();
Nyi = xi("agentPrewarmService");
ylu = 30000;
OAa = class extends at {
  constructor(e) {
    super();
    this.logService = e;
  }
  isExpired(e) {
    return Date.now() - e.createdAt > ylu;
  }
  getActivePrewarmKeyHash() {
    if (!!this._activePrewarm && !this.isExpired(this._activePrewarm)) {
      return this._activePrewarm.prewarmKeyHash;
    }
  }
  cancelAndAbortStream(e, t) {
    const i = new SF({
      action: {
        case: "cancelAction",
        value: new nFc()
      }
    });
    const r = new U6o({
      message: {
        case: "conversationAction",
        value: i
      }
    });
    e.write(r).catch(() => {
      this.logService.debug("[Prewarm] Failed to write cancel message, stream may already be closed");
    }).finally(() => {
      t.abort("prewarm_cancelled");
    });
  }
  storePrewarm(e) {
    this.logService.debug("[Prewarm] storePrewarm called", e.composerId, e.generationUUID, "keyHash:", e.prewarmKeyHash, "hasExisting:", !!this._activePrewarm);
    if (this._activePrewarm) {
      if (this._activePrewarm.composerId === e.composerId && this._activePrewarm.prewarmKeyHash === e.prewarmKeyHash && !this.isExpired(this._activePrewarm)) {
        this.logService.debug("[Prewarm] Valid prewarm already exists with same key, discarding new one", e.composerId);
        const t = {
          composerId: e.composerId,
          requestId: e.generationUUID,
          abortReason: "duplicate_prewarm_same_key"
        };
        this.logService.info("[Prewarm] Aborting prewarm stream", t);
        this.cancelAndAbortStream(e.requestStream, e.abortController);
        return;
      }
      this.logService.debug("[Prewarm] Replacing existing prewarm (key changed or expired)");
      this.invalidatePrewarm("replaced_by_new_prewarm");
    }
    this._activePrewarm = e;
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle);
    }
    this._timeoutHandle = setTimeout(() => {
      this.logService.debug("[Prewarm] Timeout reached, invalidating");
      this.invalidatePrewarm("timeout");
    }, ylu);
    this.logService.info("[Prewarm] Stored", e.composerId, "requestId:", e.generationUUID);
  }
  consumePrewarm(e, t) {
    this.logService.debug("[Prewarm] consumePrewarm called", e, "hasActive:", !!this._activePrewarm);
    if (!this._activePrewarm) {
      this.logService.debug("[Prewarm] No active prewarm to consume");
      return;
    }
    if (this._activePrewarm.composerId !== e) {
      this.logService.debug("[Prewarm] Composer mismatch", e, "!=", this._activePrewarm.composerId);
      return;
    }
    if (this.isExpired(this._activePrewarm)) {
      this.logService.debug("[Prewarm] Expired, ageMs:", Date.now() - this._activePrewarm.createdAt);
      this.invalidatePrewarm("expired");
      return;
    }
    if (t && this._activePrewarm.prewarmKeyHash !== t) {
      this.logService.debug("[Prewarm] Key hash mismatch", "stored:", this._activePrewarm.prewarmKeyHash, "current:", t);
      this.invalidatePrewarm("key-mismatch");
      return;
    }
    const i = this._activePrewarm;
    this._activePrewarm = undefined;
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle);
      this._timeoutHandle = undefined;
    }
    const r = Date.now() - i.createdAt;
    this.logService.info("[Prewarm] Consumed", e, "requestId:", i.generationUUID, "ageMs:", r);
    return i;
  }
  hasValidPrewarm(e, t) {
    return !!this._activePrewarm && this._activePrewarm.composerId === e && (t === undefined || this._activePrewarm.prewarmKeyHash === t) && !this.isExpired(this._activePrewarm);
  }
  invalidatePrewarm(e) {
    if (!this._activePrewarm) {
      return;
    }
    this.logService.info("[Prewarm] Invalidated", this._activePrewarm.composerId, "reason:", e, "requestId:", this._activePrewarm.generationUUID);
    if (this._activePrewarm.rootSpanCtx) {
      this._activePrewarm.rootSpanCtx.setAttribute("prewarm.invalidationReason", e ?? "unknown");
      this._activePrewarm.rootSpanCtx.end();
    }
    const t = {
      composerId: this._activePrewarm.composerId,
      requestId: this._activePrewarm.generationUUID,
      abortReason: e ?? "unknown"
    };
    this.logService.info("[Prewarm] Aborting prewarm stream", t);
    this.cancelAndAbortStream(this._activePrewarm.requestStream, this._activePrewarm.abortController);
    this._activePrewarm = undefined;
    if (this._timeoutHandle) {
      clearTimeout(this._timeoutHandle);
      this._timeoutHandle = undefined;
    }
  }
  dispose() {
    this.invalidatePrewarm("dispose");
    super.dispose();
  }
};
OAa = __decorate([__param(0, Rr)], OAa);
Vi(Nyi, OAa, 1);
