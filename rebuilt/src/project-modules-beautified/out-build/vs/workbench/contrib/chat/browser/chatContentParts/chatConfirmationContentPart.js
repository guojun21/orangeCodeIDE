"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatConfirmationContentPart.js
// Offset: 32730700 (bundle byte offset)
// Size: 1399 bytes
yn();
rt();
Ht();
Wt();
xS();
Wq();
kk();
n5f();
dxa = class extends at {
  constructor(e, t, i, r, s) {
    super();
    this.instantiationService = i;
    this.chatService = r;
    this._onDidChangeHeight = this._register(new Qe());
    this.onDidChangeHeight = this._onDidChangeHeight.event;
    const o = t.element;
    const a = e.buttons ? e.buttons.map(u => ({
      label: u,
      data: e.data
    })) : [{
      label: _(5212, null),
      data: e.data
    }, {
      label: _(5213, null),
      data: e.data,
      isSecondary: true
    }];
    const l = this._register(this.instantiationService.createInstance(mSi, e.title, e.message, a));
    l.setShowButtons(!e.isUsed);
    this._register(l.onDidChangeHeight(() => this._onDidChangeHeight.fire()));
    this._register(l.onDidClick(async u => {
      if (rA(o)) {
        const d = `${u.label}: "${e.title}"`;
        const m = u.isSecondary ? {
          rejectedConfirmationData: [u.data]
        } : {
          acceptedConfirmationData: [u.data]
        };
        m.agentId = o.agent?.id;
        m.slashCommand = o.slashCommand?.name;
        m.confirmation = u.label;
        const p = s.getWidgetBySessionId(o.sessionId);
        m.userSelectedModelId = p?.input.currentLanguageModel;
        m.mode = p?.input.currentMode;
        if (await this.chatService.sendRequest(o.sessionId, d, m)) {
          e.isUsed = true;
          l.setShowButtons(false);
          this._onDidChangeHeight.fire();
        }
      }
    }));
    this.domNode = l.domNode;
  }
  hasSameContent(e) {
    return e.kind === "confirmation";
  }
  addDisposable(e) {
    this._register(e);
  }
};
dxa = __decorate([__param(2, ln), __param(3, ES), __param(4, M1)], dxa);
