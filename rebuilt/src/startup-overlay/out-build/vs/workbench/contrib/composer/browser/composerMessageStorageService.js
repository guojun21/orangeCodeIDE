"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/composerMessageStorageService.js
// Offset: 26813730 (bundle byte offset)
// Size: 5176 bytes
t8();
sC();
Wt();
rt();
Ql();
ml();
Er();
kr();
VA();
M4();
KS();
vhn();
fE();
hD();
of();
Jk();
KZ();
vE();
mD();
qp();
cv();
Ht();
Wu();
uFg = 1;
dFg = false;
Mtt = dFg ? console.log : () => {};
Ftt = xi("composerMessageStorageService");
DNe = "bubbleId";
pEe = class extends at {
  constructor(e, t, i, r, s) {
    super();
    this._storageService = e;
    this._structuredLogService = t;
    this._metricsService = i;
    this._aiServerConfigService = r;
    this._experimentService = s;
  }
  async storeMessage(e, t) {
    const i = performance.now();
    if (!e) {
      throw new Error("[composer] composerId is undefined");
    }
    const r = t.bubbleId;
    const s = nMg(t);
    const o = performance.now();
    const a = Ibi(s);
    const l = performance.now() - o;
    const u = performance.now();
    await this._storageService.cursorDiskKVSet(`${DNe}:${e}:${r}`, a);
    const d = performance.now() - u;
    const m = performance.now() - i;
    const p = this._aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? false;
    const g = {
      "metrics.version": uFg.toString(),
      "user.dev": p.toString()
    };
    this._metricsService.distribution({
      stat: "renderer.composer.message_storage.store_message.total_ms",
      value: m,
      tags: g
    });
    this._metricsService.distribution({
      stat: "renderer.composer.message_storage.store_message.stringify_ms",
      value: l,
      tags: g
    });
    this._metricsService.distribution({
      stat: "renderer.composer.message_storage.store_message.kv_set_ms",
      value: d,
      tags: g
    });
    return r;
  }
  async updateMessage(e, t, i) {
    if (!t || !e) {
      throw new Error("[composer] messageId or composerId is undefined" + JSON.stringify({
        messageId: t,
        composerId: e
      }));
    }
    Mtt("[composer] updating message", `${DNe}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
    const r = await this.retrieveMessage(e, t);
    if (r) {
      i(r);
      const s = nMg(r);
      await this._storageService.cursorDiskKVSet(`${DNe}:${e}:${t}`, Ibi(s));
    } else {
      console.error("[composer] No message found for id", t);
    }
  }
  async retrieveMessage(e, t) {
    if (!t || !e) {
      throw new Error("[composer] messageId or composerId is undefined" + JSON.stringify({
        messageId: t,
        composerId: e
      }));
    }
    Mtt("[composer] retrieving message", `${DNe}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
    const i = await this._storageService.cursorDiskKVGet(`${DNe}:${e}:${t}`);
    if (!i) {
      return;
    }
    const r = JSON.parse(i);
    const s = Epa(r);
    s.conversationState = await lFg(this._storageService, this._structuredLogService, e, t, r.conversationState);
    if (!s.serviceStatusUpdate || !Kmi(s.serviceStatusUpdate.message)) {
      Mtt("[composer] retrieved message", {
        message: s
      });
      return s;
    }
  }
  async retrieveMessagesBatch(e, t) {
    return (await this.retrieveMessagesBatchInternal(e, t)).messages;
  }
  async retrieveMessagesBatchInternal(e, t) {
    const i = new Map();
    let r = false;
    for (let s = 0; s < t.length; s += qze) {
      const a = t.slice(s, s + qze).map(u => `${DNe}:${e}:${u}`);
      const l = await this._storageService.cursorDiskKVGetBatch(a);
      for (const [u, d] of l) {
        const m = u.split(":").pop();
        const p = JSON.parse(d);
        const g = Epa(p);
        try {
          g.conversationState = await lFg(this._storageService, this._structuredLogService, e, m, p.conversationState);
        } catch (f) {
          r = true;
          g.conversationState = new vk();
          Sw(f, {
            tags: {
              client_error_type: "composer_corruption",
              force_upload: "forced"
            },
            extra: {
              composerId: e,
              messageId: m
            }
          });
        }
        if (!g.serviceStatusUpdate || !Kmi(g.serviceStatusUpdate.message)) {
          i.set(m, g);
        }
      }
    }
    return {
      messages: i,
      hasCorruptedCheckpoints: r
    };
  }
  async deleteMessage(e, t) {
    if (!t || !e) {
      throw new Error("[composer] messageId or composerId is undefined" + JSON.stringify({
        messageId: t,
        composerId: e
      }));
    }
    Mtt("[composer] deleting message", `${DNe}:${e.slice(0, 4)}:${t.slice(0, 4)}`);
    await this._storageService.cursorDiskKVSet(`${DNe}:${e}:${t}`, undefined);
  }
  async clearComposerMessages(e) {
    if (!e) {
      throw new Error("[composer] composerId is undefined");
    }
    Mtt("[composer] clearing all messages for composer", e);
    return this._storageService.cursorDiskKVClearPrefix(`${DNe}:${e}:`).catch(t => {
      console.error(`[composer] Error clearing messages for composer ${e}:`, t);
    });
  }
  async getInitialMessages(e, t) {
    Mtt("[composer] calculating initial messages to load for composer", e);
    const i = QNg(t);
    const s = this._experimentService.checkFeatureGate("stricter_in_memory_virtualization") ? l2A(t) : (() => {
      const d = mNA(i);
      const m = i.length - d;
      return i.slice(m).flatMap(p => p.flatMap(g => g.messages.map(f => f.bubbleId)));
    })();
    Mtt("[composer] loading exactly", s.length, "messages");
    const o = await this.retrieveMessagesBatchInternal(e, s);
    const a = o.hasCorruptedCheckpoints;
    return {
      messages: s.map(d => o.messages.get(d)).filter(d => d !== undefined).filter(d => !d.errorDetails?.error?.details?.buttons?.some(p => p.action?.case === "reloadWindow")),
      hasCorruptedCheckpoints: a
    };
  }
};
__decorate([Gs("ComposerMessageStorageService.storeMessage")], pEe.prototype, "storeMessage", null);
__decorate([Gs("ComposerMessageStorageService.updateMessage")], pEe.prototype, "updateMessage", null);
__decorate([Gs("ComposerMessageStorageService.retrieveMessage")], pEe.prototype, "retrieveMessage", null);
__decorate([Gs("ComposerMessageStorageService.retrieveMessagesBatch")], pEe.prototype, "retrieveMessagesBatch", null);
__decorate([Gs("ComposerMessageStorageService.deleteMessage")], pEe.prototype, "deleteMessage", null);
__decorate([Gs("ComposerMessageStorageService.clearComposerMessages")], pEe.prototype, "clearComposerMessages", null);
__decorate([Gs("ComposerMessageStorageService.getInitialMessages")], pEe.prototype, "getInitialMessages", null);
pEe = __decorate([__param(0, Hi), __param(1, Kk), __param(2, R1), __param(3, Vk), __param(4, Tl)], pEe);
Vi(Ftt, pEe, 1);
