"use strict";

// Module: out-build/vs/workbench/common/editor/textResourceEditorInput.js
// Offset: 31255226 (bundle byte offset)
// Size: 2615 bytes
Nu();
d1f();
Ff();
ss();
ns();
Pd();
zr();
Yr();
td();
vBf();
bv();
N1();
sw();
Dce();
nwe = class extends n_i {
  constructor(e, t, i, r, s, o, a, l, u) {
    super(e, t, s, o, a, l, u);
    this.editorService = i;
    this.textFileService = r;
  }
  save(e, t) {
    if (this.resource.scheme !== _n.untitled && !this.fileService.hasProvider(this.resource)) {
      return this.saveAs(e, t);
    } else {
      return this.doSave(t, false, e);
    }
  }
  saveAs(e, t) {
    return this.doSave(t, true, e);
  }
  async doSave(e, t, i) {
    let r;
    if (t) {
      r = await this.textFileService.saveAs(this.resource, undefined, {
        ...e,
        suggestedTarget: this.preferredResource
      });
    } else {
      r = await this.textFileService.save(this.resource, e);
    }
    if (r) {
      return {
        resource: r
      };
    }
  }
  async revert(e, t) {
    await this.textFileService.revert(this.resource, t);
  }
};
nwe = __decorate([__param(2, yi), __param(3, Gg), __param(4, Ol), __param(5, Gr), __param(6, IC), __param(7, uy), __param(8, _ie)], nwe);
Qqe = class extends nwe {
  static {
    Ika = this;
  }
  static {
    this.ID = "workbench.editors.resourceEditorInput";
  }
  get typeId() {
    return Ika.ID;
  }
  get editorId() {
    return G0.id;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g) {
    super(e, undefined, l, a, d, u, m, p, g);
    this.name = t;
    this.description = i;
    this.preferredLanguageId = r;
    this.preferredContents = s;
    this.textModelService = o;
    this.cachedModel = undefined;
    this.modelReference = undefined;
  }
  getName() {
    return this.name || super.getName();
  }
  setName(e) {
    if (this.name !== e) {
      this.name = e;
      this._onDidChangeLabel.fire();
    }
  }
  getDescription() {
    return this.description;
  }
  setDescription(e) {
    if (this.description !== e) {
      this.description = e;
      this._onDidChangeLabel.fire();
    }
  }
  setLanguageId(e, t) {
    this.setPreferredLanguageId(e);
    this.cachedModel?.setLanguageId(e, t);
  }
  setPreferredLanguageId(e) {
    this.preferredLanguageId = e;
  }
  setPreferredContents(e) {
    this.preferredContents = e;
  }
  async resolve() {
    const e = this.preferredContents;
    const t = this.preferredLanguageId;
    this.preferredContents = undefined;
    this.preferredLanguageId = undefined;
    this.modelReference ||= this.textModelService.createModelReference(this.resource);
    const i = await this.modelReference;
    const r = i.object;
    if (!(r instanceof ffn)) {
      i.dispose();
      this.modelReference = undefined;
      throw new Error(`Unexpected model for TextResourceEditorInput: ${this.resource}`);
    }
    this.cachedModel = r;
    if (typeof e == "string" || typeof t == "string") {
      r.updateTextEditorModel(typeof e == "string" ? JOt(e) : undefined, t);
    }
    return r;
  }
  matches(e) {
    if (this === e) {
      return true;
    } else if (e instanceof Ika) {
      return Zc(e.resource, this.resource);
    } else if (xq(e)) {
      return super.matches(e);
    } else {
      return false;
    }
  }
  dispose() {
    if (this.modelReference) {
      this.modelReference.then(e => e.dispose());
      this.modelReference = undefined;
    }
    this.cachedModel = undefined;
    super.dispose();
  }
};
Qqe = Ika = __decorate([__param(5, El), __param(6, Gg), __param(7, yi), __param(8, Gr), __param(9, Ol), __param(10, IC), __param(11, uy), __param(12, _ie)], Qqe);
