"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatEditorInput.js
// Offset: 28338184 (bundle byte offset)
// Size: 3260 bytes
Po();
qi();
yn();
rt();
zr();
Yn();
Ht();
Pm();
xT();
xS();
SS();
ru();
Ice();
wtf = us("chat-editor-label-icon", Be.commentDiscussion, _(5336, null));
NEe = class extends XS {
  static {
    rqe = this;
  }
  static {
    this.countsInUse = new Set();
  }
  static {
    this.TypeID = "workbench.input.chatSession";
  }
  static {
    this.EditorID = "workbench.editor.chatSession";
  }
  static getNewEditorUri() {
    const e = Math.floor(Math.random() * 1000000000);
    return hAa.generate(e);
  }
  static getNextCount() {
    let e = 0;
    while (rqe.countsInUse.has(e)) {
      e++;
    }
    return e;
  }
  constructor(e, t, i, r) {
    super();
    this.resource = e;
    this.options = t;
    this.chatService = i;
    this.dialogService = r;
    this.closeHandler = this;
    if (typeof hAa.parse(e)?.handle != "number") {
      throw new Error("Invalid chat URI");
    }
    this.sessionId = t.target && "sessionId" in t.target ? t.target.sessionId : undefined;
    this.inputCount = rqe.getNextCount();
    rqe.countsInUse.add(this.inputCount);
    this._register($i(() => rqe.countsInUse.delete(this.inputCount)));
  }
  showConfirm() {
    if (this.model?.editingSession) {
      return Etf(this.model.editingSession);
    } else {
      return false;
    }
  }
  async confirm(e) {
    if (!this.model?.editingSession) {
      return 0;
    }
    const t = _(5337, null);
    const i = _(5338, null);
    if (await ktf(this.model.editingSession, this.dialogService, {
      titleOverride: t,
      messageOverride: i
    })) {
      return 0;
    } else {
      return 2;
    }
  }
  get editorId() {
    return rqe.EditorID;
  }
  get capabilities() {
    return super.capabilities | 8;
  }
  matches(e) {
    return e instanceof rqe && e.resource.toString() === this.resource.toString();
  }
  get typeId() {
    return rqe.TypeID;
  }
  getName() {
    return this.model?.title || _(5339, null) + (this.inputCount > 0 ? ` ${this.inputCount + 1}` : "");
  }
  getIcon() {
    return wtf;
  }
  async resolve() {
    if (typeof this.sessionId == "string") {
      this.model = (await this.chatService.getOrRestoreSession(this.sessionId)) ?? this.chatService.startSession(zh.Panel, Cs.None);
    } else if (this.options.target) {
      if ("data" in this.options.target) {
        this.model = this.chatService.loadSessionFromContent(this.options.target.data);
      }
    } else {
      this.model = this.chatService.startSession(zh.Panel, Cs.None);
    }
    if (this.model) {
      this.sessionId = this.model.sessionId;
      this._register(this.model.onDidChange(() => this._onDidChangeLabel.fire()));
      return this._register(new _tf(this.model));
    } else {
      return null;
    }
  }
  dispose() {
    super.dispose();
    if (this.sessionId) {
      this.chatService.clearSession(this.sessionId);
    }
  }
};
NEe = rqe = __decorate([__param(2, ES), __param(3, Ml)], NEe);
_tf = class extends at {
  constructor(n) {
    super();
    this.model = n;
    this._onWillDispose = this._register(new Qe());
    this.onWillDispose = this._onWillDispose.event;
    this._isDisposed = false;
    this._isResolved = false;
  }
  async resolve() {
    this._isResolved = true;
  }
  isResolved() {
    return this._isResolved;
  }
  isDisposed() {
    return this._isDisposed;
  }
  dispose() {
    super.dispose();
    this._isDisposed = true;
  }
};
(function (n) {
  n.scheme = _n.vscodeChatSesssion;
  function e(i) {
    return je.from({
      scheme: n.scheme,
      path: `chat-${i}`
    });
  }
  n.generate = e;
  function t(i) {
    if (i.scheme !== n.scheme) {
      return;
    }
    const s = i.path.match(/chat-(\d+)/)?.[1];
    if (typeof s != "string") {
      return;
    }
    const o = parseInt(s);
    if (!isNaN(o)) {
      return {
        handle: o
      };
    }
  }
  n.parse = t;
})(hAa ||= {});
Ctf = class {
  canSerialize(n) {
    return n instanceof NEe && typeof n.sessionId == "string";
  }
  serialize(n) {
    if (!this.canSerialize(n)) {
      return;
    }
    const e = {
      options: n.options,
      sessionId: n.sessionId,
      resource: n.resource
    };
    return JSON.stringify(e);
  }
  deserialize(n, e) {
    try {
      const t = JSON.parse(e);
      const i = je.revive(t.resource);
      return n.createInstance(NEe, i, {
        ...t.options,
        target: {
          sessionId: t.sessionId
        }
      });
    } catch {
      return;
    }
  }
};
