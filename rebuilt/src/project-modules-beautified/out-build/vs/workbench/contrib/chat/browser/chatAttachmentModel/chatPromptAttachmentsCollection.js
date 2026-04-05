"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatAttachmentModel/chatPromptAttachmentsCollection.js
// Offset: 31095595 (bundle byte offset)
// Size: 2754 bytes
yn();
Ssy();
B1t();
rt();
Wt();
Ei();
PSa = (n, e) => {
  const {
    uri: t,
    isPromptFile: i
  } = n;
  let r = `${t}`;
  if (i) {
    let s = "vscode.prompt.instructions";
    if (e) {
      s += ".root";
    }
    r = `${s}__${r}`;
  }
  return {
    id: r,
    name: t.fsPath,
    value: t,
    isSelection: false,
    enabled: true,
    isFile: true
  };
};
LSa = class extends at {
  get references() {
    const e = [];
    for (const t of this.attachments.values()) {
      e.push(...t.references);
    }
    return e;
  }
  get chatAttachments() {
    const e = [];
    const t = [...this.attachments.values()];
    for (const i of t) {
      const {
        reference: r
      } = i;
      e.push(...r.allValidReferences.map(s => PSa(s, false)));
      e.push(PSa(r, true));
    }
    return e;
  }
  async allSettled() {
    const e = [...this.attachments.values()];
    await Promise.allSettled(e.map(t => t.allSettled));
  }
  onUpdate(e) {
    this._register(this._onUpdate.event(e));
    return this;
  }
  onAdd(e) {
    this._register(this._onAdd.event(e));
    return this;
  }
  constructor(e, t) {
    super();
    this.initService = e;
    this.configService = t;
    this.attachments = this._register(new mp());
    this._onUpdate = this._register(new Qe());
    this._onAdd = this._register(new Qe());
    this._onUpdate.fire = this._onUpdate.fire.bind(this._onUpdate);
  }
  add(e) {
    if (this.attachments.has(e.path)) {
      return this;
    }
    const t = this.initService.createInstance(RSa, e).onUpdate(this._onUpdate.fire).onDispose(() => {
      this.attachments.deleteAndLeak(e.path);
      this._onUpdate.fire();
    });
    this.attachments.set(e.path, t);
    t.resolve();
    this._onAdd.fire(t);
    this._onUpdate.fire();
    return this;
  }
  remove(e) {
    if (this.attachments.has(e.path)) {
      this.attachments.deleteAndDispose(e.path);
      return this;
    } else {
      return this;
    }
  }
  get featureEnabled() {
    return Fce.enabled(this.configService);
  }
};
LSa = __decorate([__param(0, ln), __param(1, Fn)], LSa);
