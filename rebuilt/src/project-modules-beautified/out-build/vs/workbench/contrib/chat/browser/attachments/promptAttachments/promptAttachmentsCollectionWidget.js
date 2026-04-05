"use strict";

// Module: out-build/vs/workbench/contrib/chat/browser/attachments/promptAttachments/promptAttachmentsCollectionWidget.js
// Offset: 31052580 (bundle byte offset)
// Size: 1675 bytes
yn();
csy();
rt();
jr();
Wt();
uSa = class extends at {
  onAttachmentsCountChange(e) {
    this._register(this._onAttachmentsCountChange.event(e));
    return this;
  }
  get references() {
    return this.model.references;
  }
  get chatAttachments() {
    return this.model.chatAttachments;
  }
  get empty() {
    return this.children.length === 0;
  }
  constructor(e, t, i, r) {
    super();
    this.model = e;
    this.resourceLabels = t;
    this.initService = i;
    this.logService = r;
    this.children = [];
    this._onAttachmentsCountChange = this._register(new Qe());
    this.render = this.render.bind(this);
    this.model.onAdd(s => {
      const o = this.initService.createInstance(lSa, s, this.resourceLabels);
      o.onDispose(this.handleAttachmentDispose.bind(this, o));
      this.children.push(o);
      if (this.parentNode) {
        this.parentNode.appendChild(o.domNode);
      }
      this._onAttachmentsCountChange.fire();
    });
  }
  handleAttachmentDispose(e) {
    const t = `[onChildDispose] Widget for instructions attachment '${e.uri.path}'`;
    let i = false;
    this.children = this.children.filter(r => r === e ? (i && this.logService.warn(`${t} is present in the children references list multiple times.`), i = true, false) : true);
    if (!i) {
      this.logService.warn(`${t} was disposed, but was not found in the child references.`);
    }
    if (!this.parentNode) {
      this.logService.warn(`${t} no parent node reference found.`);
    }
    this.parentNode?.removeChild(e.domNode);
    this._onAttachmentsCountChange.fire();
    return this;
  }
  render(e) {
    this.parentNode = e;
    for (const t of this.children) {
      this.parentNode.appendChild(t.domNode);
    }
    return this;
  }
  dispose() {
    for (const e of this.children) {
      e.dispose();
    }
    super.dispose();
  }
};
uSa = __decorate([__param(2, ln), __param(3, Rr)], uSa);
