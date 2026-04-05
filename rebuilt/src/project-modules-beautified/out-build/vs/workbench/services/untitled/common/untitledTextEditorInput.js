"use strict";

// Module: out-build/vs/workbench/services/untitled/common/untitledTextEditorInput.js
// Offset: 32534517 (bundle byte offset)
// Size: 4638 bytes
Nu();
jqe();
Ff();
Pd();
ss();
ns();
Yr();
eu();
_g();
N1();
td();
rt();
sw();
Dce();
WJ = class extends nwe {
  static {
    AEa = this;
  }
  static {
    this.ID = "workbench.editors.untitledEditorInput";
  }
  get typeId() {
    return AEa.ID;
  }
  get editorId() {
    return G0.id;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super(e.resource, undefined, r, t, i, s, l, d, m);
    this.model = e;
    this.environmentService = o;
    this.pathService = a;
    this.textModelService = u;
    this.modelResolve = undefined;
    this.modelDisposables = this._register(new Ut());
    this.cachedUntitledTextEditorModelReference = undefined;
    this.registerModelListeners(e);
    this._register(this.textFileService.untitled.onDidCreate(p => this.onDidCreateUntitledModel(p)));
  }
  registerModelListeners(e) {
    this.modelDisposables.clear();
    this.modelDisposables.add(e.onDidChangeDirty(() => this._onDidChangeDirty.fire()));
    this.modelDisposables.add(e.onDidChangeName(() => this._onDidChangeLabel.fire()));
    this.modelDisposables.add(e.onDidRevert(() => this.dispose()));
  }
  onDidCreateUntitledModel(e) {
    if (Zc(e.resource, this.model.resource) && e !== this.model) {
      this.model = e;
      this.registerModelListeners(e);
    }
  }
  getName() {
    return this.model.name;
  }
  getDescription(e = 1) {
    if (!this.model.hasAssociatedFilePath) {
      const t = this.resource.path;
      if (t !== this.getName()) {
        return t;
      } else {
        return undefined;
      }
    }
    return super.getDescription(e);
  }
  getTitle(e) {
    if (!this.model.hasAssociatedFilePath) {
      const t = this.getName();
      const i = this.getDescription();
      if (i && i !== t) {
        return `${t} \u2022 ${i}`;
      } else {
        return t;
      }
    }
    return super.getTitle(e);
  }
  isDirty() {
    return this.model.isDirty();
  }
  getEncoding() {
    return this.model.getEncoding();
  }
  setEncoding(e, t) {
    return this.model.setEncoding(e);
  }
  get hasLanguageSetExplicitly() {
    return this.model.hasLanguageSetExplicitly;
  }
  get hasAssociatedFilePath() {
    return this.model.hasAssociatedFilePath;
  }
  setLanguageId(e, t) {
    this.model.setLanguageId(e, t);
  }
  getLanguageId() {
    return this.model.getLanguageId();
  }
  async resolve() {
    this.modelResolve ||= (async () => {
      this.cachedUntitledTextEditorModelReference = await this.textModelService.createModelReference(this.resource);
    })();
    await this.modelResolve;
    if (this.isDisposed()) {
      this.disposeModelReference();
    }
    return this.model;
  }
  toUntyped(e) {
    const t = {
      resource: this.model.hasAssociatedFilePath ? P4(this.model.resource, this.environmentService.remoteAuthority, this.pathService.defaultUriScheme) : this.resource,
      forceUntitled: true,
      options: {
        override: this.editorId
      }
    };
    if (typeof e?.preserveViewState == "number") {
      t.encoding = this.getEncoding();
      t.languageId = this.getLanguageId();
      t.contents = this.model.isModified() ? this.model.textEditorModel?.getValue() : undefined;
      t.options.viewState = Hun(this, e.preserveViewState, this.editorService);
      if (typeof t.contents == "string" && !this.model.hasAssociatedFilePath && !e.preserveResource) {
        t.resource = undefined;
      }
    }
    return t;
  }
  matches(e) {
    if (this === e) {
      return true;
    } else if (e instanceof AEa) {
      return Zc(e.resource, this.resource);
    } else if (OWl(e)) {
      return super.matches(e);
    } else {
      return false;
    }
  }
  dispose() {
    this.modelResolve = undefined;
    this.disposeModelReference();
    super.dispose();
  }
  disposeModelReference() {
    Bo(this.cachedUntitledTextEditorModelReference);
    this.cachedUntitledTextEditorModelReference = undefined;
  }
};
WJ = AEa = __decorate([__param(1, Gg), __param(2, Ol), __param(3, yi), __param(4, Gr), __param(5, Cc), __param(6, kp), __param(7, IC), __param(8, El), __param(9, uy), __param(10, _ie)], WJ);
