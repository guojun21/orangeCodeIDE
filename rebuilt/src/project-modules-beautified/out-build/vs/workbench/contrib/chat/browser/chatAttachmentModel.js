"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/chatAttachmentModel.js
// Offset: 31098439 (bundle byte offset)
// Size: 2075 bytes
Yn();
yn();
Yr();
rt();
Wt();
UIf();
ns();
zgn();
ru();
Ht();
NSa = class extends at {
  constructor(e, t, i) {
    super();
    this.initService = e;
    this.fileService = t;
    this.dialogService = i;
    this._attachments = new Map();
    this._onDidChangeContext = this._register(new Qe());
    this.onDidChangeContext = this._onDidChangeContext.event;
    this.promptInstructions = this._register(this.initService.createInstance(LSa)).onUpdate(() => {
      this._onDidChangeContext.fire();
    });
  }
  get attachments() {
    return Array.from(this._attachments.values());
  }
  get size() {
    return this._attachments.size;
  }
  get fileAttachments() {
    return this.attachments.reduce((e, t) => {
      if (t.isFile && je.isUri(t.value)) {
        e.push(t.value);
      }
      return e;
    }, []);
  }
  getAttachmentIDs() {
    return new Set(this._attachments.keys());
  }
  clear() {
    this._attachments.clear();
    this._onDidChangeContext.fire();
  }
  delete(...e) {
    for (const t of e) {
      this._attachments.delete(t);
    }
    this._onDidChangeContext.fire();
  }
  async addFile(e, t) {
    if (/\.(png|jpe?g|gif|bmp|webp)$/i.test(e.path)) {
      this.addContext(await this.asImageVariableEntry(e));
      return;
    }
    this.addContext(this.asVariableEntry(e, t));
  }
  addFolder(e) {
    this.addContext({
      value: e,
      id: e.toString(),
      name: ca(e),
      isFile: false,
      isDirectory: true
    });
  }
  asVariableEntry(e, t) {
    return {
      value: t ? {
        uri: e,
        range: t
      } : e,
      id: e.toString() + (t?.toString() ?? ""),
      name: ca(e),
      isFile: true
    };
  }
  async asImageVariableEntry(e) {
    const t = ca(e);
    const i = await this.fileService.readFile(e);
    if (i.size > 31457280) {
      this.dialogService.error(_(5183, null), _(5184, null, t));
      throw new Error("Image is too large");
    }
    const r = await kit(i.value.buffer);
    return {
      id: e.toString(),
      name: t,
      fullName: e.path,
      value: r,
      isImage: true,
      isFile: false,
      references: [{
        reference: e,
        kind: "reference"
      }]
    };
  }
  addContext(...e) {
    let t = false;
    for (const i of e) {
      if (!this._attachments.has(i.id)) {
        this._attachments.set(i.id, i);
        t = true;
      }
    }
    if (t) {
      this._onDidChangeContext.fire();
    }
  }
  clearAndSetContext(...e) {
    this.clear();
    this.addContext(...e);
  }
};
NSa = __decorate([__param(0, ln), __param(1, Gr), __param(2, Ml)], NSa);
