"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/languageModels.js
// Offset: 30986770 (bundle byte offset)
// Size: 4067 bytes
yn();
Ef();
rt();
oa();
Ht();
si();
HA();
Wt();
jr();
_u();
xI();
_E();
(function (n) {
  n[n.System = 0] = "System";
  n[n.User = 1] = "User";
  n[n.Assistant = 2] = "Assistant";
})(bTf ||= {});
(function (n) {
  n.PNG = "image/png";
  n.JPEG = "image/jpeg";
  n.GIF = "image/gif";
  n.WEBP = "image/webp";
  n.BMP = "image/bmp";
})(vTf ||= {});
(function (n) {
  n.Low = "low";
  n.High = "high";
})(ATf ||= {});
Pgn = xi("ILanguageModelsService");
Ypu = {
  type: "object",
  properties: {
    vendor: {
      type: "string",
      description: _(5643, null)
    }
  }
};
yTf = K0.registerExtensionPoint({
  extensionPoint: "languageModels",
  jsonSchema: {
    description: _(5644, null),
    oneOf: [Ypu, {
      type: "array",
      items: Ypu
    }]
  },
  activationEventsGenerator: (n, e) => {
    for (const t of n) {
      e.push(`onLanguageModelChat:${t.vendor}`);
    }
  }
});
UCa = class {
  constructor(e, t, i) {
    this._extensionService = e;
    this._logService = t;
    this._contextKeyService = i;
    this._store = new Ut();
    this._providers = new Map();
    this._vendors = new Set();
    this._onDidChangeProviders = this._store.add(new Qe());
    this.onDidChangeLanguageModels = this._onDidChangeProviders.event;
    this._hasUserSelectableModels = qa.languageModelsAreUserSelectable.bindTo(this._contextKeyService);
    this._store.add(yTf.setHandler(r => {
      this._vendors.clear();
      for (const o of r) {
        if (!g8(o.description, "chatProvider")) {
          o.collector.error(_(5645, null));
          continue;
        }
        for (const a of bl.wrap(o.value)) {
          if (this._vendors.has(a.vendor)) {
            o.collector.error(_(5646, null, a.vendor));
            continue;
          }
          if (E6(a.vendor)) {
            o.collector.error(_(5647, null));
            continue;
          }
          if (a.vendor.trim() !== a.vendor) {
            o.collector.error(_(5648, null));
            continue;
          }
          this._vendors.add(a.vendor);
        }
      }
      const s = [];
      for (const [o, a] of this._providers) {
        if (!this._vendors.has(a.metadata.vendor)) {
          this._providers.delete(o);
          s.push(o);
        }
      }
      if (s.length > 0) {
        this._onDidChangeProviders.fire({
          removed: s
        });
      }
    }));
  }
  dispose() {
    this._store.dispose();
    this._providers.clear();
  }
  getLanguageModelIds() {
    return Array.from(this._providers.keys());
  }
  lookupLanguageModel(e) {
    return this._providers.get(e)?.metadata;
  }
  async selectLanguageModels(e) {
    if (e.vendor) {
      await this._extensionService.activateByEvent(`onLanguageModelChat:${e.vendor}}`);
    } else {
      const i = Array.from(this._vendors).map(r => this._extensionService.activateByEvent(`onLanguageModelChat:${r}`));
      await Promise.all(i);
    }
    const t = [];
    for (const [i, r] of this._providers) {
      if ((e.vendor === undefined || r.metadata.vendor === e.vendor) && (e.family === undefined || r.metadata.family === e.family) && (e.version === undefined || r.metadata.version === e.version) && (e.id === undefined || r.metadata.id === e.id) && (!r.metadata.targetExtensions || r.metadata.targetExtensions.some(s => $h.equals(s, e.extension)))) {
        t.push(i);
      }
    }
    this._logService.trace("[LM] selected language models", e, t);
    return t;
  }
  registerLanguageModelChat(e, t) {
    this._logService.trace("[LM] registering language model chat", e, t.metadata);
    if (!this._vendors.has(t.metadata.vendor)) {
      throw new Error(`Chat response provider uses UNKNOWN vendor ${t.metadata.vendor}.`);
    }
    if (this._providers.has(e)) {
      throw new Error(`Chat response provider with identifier ${e} is already registered.`);
    }
    this._providers.set(e, t);
    this._onDidChangeProviders.fire({
      added: [{
        identifier: e,
        metadata: t.metadata
      }]
    });
    this.updateUserSelectableModelsContext();
    return $i(() => {
      this.updateUserSelectableModelsContext();
      if (this._providers.delete(e)) {
        this._onDidChangeProviders.fire({
          removed: [e]
        });
        this._logService.trace("[LM] UNregistered language model chat", e, t.metadata);
      }
    });
  }
  updateUserSelectableModelsContext() {
    const e = Array.from(this._providers.values()).some(i => i.metadata.isUserSelectable && !i.metadata.isDefault);
    const t = Array.from(this._providers.values()).some(i => i.metadata.isDefault);
    this._hasUserSelectableModels.set(e && t);
  }
  async sendChatRequest(e, t, i, r, s) {
    const o = this._providers.get(e);
    if (!o) {
      throw new Error(`Chat response provider with identifier ${e} is not registered.`);
    }
    return o.sendChatRequest(i, t, r, s);
  }
  computeTokenLength(e, t, i) {
    const r = this._providers.get(e);
    if (!r) {
      throw new Error(`Chat response provider with identifier ${e} is not registered.`);
    }
    return r.provideTokenCount(t, i);
  }
};
UCa = __decorate([__param(0, su), __param(1, Rr), __param(2, wi)], UCa);
