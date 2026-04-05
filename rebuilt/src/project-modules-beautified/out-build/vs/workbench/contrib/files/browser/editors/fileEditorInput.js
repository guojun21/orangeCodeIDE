"use strict";

// Module: out-build/vs/workbench/contrib/files/browser/editors/fileEditorInput.js
// Offset: 31258416 (bundle byte offset)
// Size: 6345 bytes
Nu();
jqe();
tbu();
ns();
Ff();
Wt();
rt();
td();
gD();
Pd();
N1();
ss();
Yr();
yn();
zr();
bv();
_g();
sw();
Dce();
(function (n) {
  n[n.None = 0] = "None";
  n[n.Text = 1] = "Text";
  n[n.Binary = 2] = "Binary";
})(ABf ||= {});
Kme = nbu = class extends nwe {
  get typeId() {
    return C1t;
  }
  get editorId() {
    return G0.id;
  }
  get capabilities() {
    let e = 32;
    if (this.model) {
      if (this.model.isReadonly()) {
        e |= 2;
      }
    } else if (this.fileService.hasProvider(this.resource)) {
      if (this.filesConfigurationService.isReadonly(this.resource)) {
        e |= 2;
      }
    } else {
      e |= 4;
    }
    if (!(e & 2)) {
      e |= 128;
    }
    return e;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C) {
    super(e, t, f, u, m, p, g, w, C);
    this.instantiationService = l;
    this.textModelService = d;
    this.pathService = A;
    this.forceOpenAs = 0;
    this.model = undefined;
    this.cachedTextFileModelReference = undefined;
    this.modelListeners = this._register(new Ut());
    this.model = this.textFileService.files.get(e);
    if (i) {
      this.setPreferredName(i);
    }
    if (r) {
      this.setPreferredDescription(r);
    }
    if (s) {
      this.setPreferredEncoding(s);
    }
    if (o) {
      this.setPreferredLanguageId(o);
    }
    if (typeof a == "string") {
      this.setPreferredContents(a);
    }
    this._register(this.textFileService.files.onDidCreate(x => this.onDidCreateTextFileModel(x)));
    if (this.model) {
      this.registerModelListeners(this.model);
    }
  }
  onDidCreateTextFileModel(e) {
    if (Zc(e.resource, this.resource)) {
      this.model = e;
      this.registerModelListeners(e);
    }
  }
  registerModelListeners(e) {
    this.modelListeners.clear();
    this.modelListeners.add(e.onDidChangeDirty(() => this._onDidChangeDirty.fire()));
    this.modelListeners.add(e.onDidChangeReadonly(() => this._onDidChangeCapabilities.fire()));
    this.modelListeners.add(e.onDidSaveError(() => this._onDidChangeDirty.fire()));
    this.modelListeners.add(In.once(e.onWillDispose)(() => {
      this.modelListeners.clear();
      this.model = undefined;
    }));
  }
  getName() {
    return this.preferredName || super.getName();
  }
  setPreferredName(e) {
    if (this.allowLabelOverride() && this.preferredName !== e) {
      this.preferredName = e;
      this._onDidChangeLabel.fire();
    }
  }
  allowLabelOverride() {
    return this.resource.scheme !== this.pathService.defaultUriScheme && this.resource.scheme !== _n.vscodeUserData && this.resource.scheme !== _n.file && this.resource.scheme !== _n.vscodeRemote;
  }
  getPreferredName() {
    return this.preferredName;
  }
  isReadonly() {
    if (this.model) {
      return this.model.isReadonly();
    } else {
      return this.filesConfigurationService.isReadonly(this.resource);
    }
  }
  getDescription(e) {
    return this.preferredDescription || super.getDescription(e);
  }
  setPreferredDescription(e) {
    if (this.allowLabelOverride() && this.preferredDescription !== e) {
      this.preferredDescription = e;
      this._onDidChangeLabel.fire();
    }
  }
  getPreferredDescription() {
    return this.preferredDescription;
  }
  getTitle(e) {
    let t = super.getTitle(e);
    const i = this.getPreferredTitle();
    if (i) {
      t = `${i} (${t})`;
    }
    return t;
  }
  getPreferredTitle() {
    if (this.preferredName && this.preferredDescription) {
      return `${this.preferredName} ${this.preferredDescription}`;
    }
    if (this.preferredName || this.preferredDescription) {
      return this.preferredName ?? this.preferredDescription;
    }
  }
  getEncoding() {
    if (this.model) {
      return this.model.getEncoding();
    } else {
      return this.preferredEncoding;
    }
  }
  getPreferredEncoding() {
    return this.preferredEncoding;
  }
  async setEncoding(e, t) {
    this.setPreferredEncoding(e);
    return this.model?.setEncoding(e, t);
  }
  setPreferredEncoding(e) {
    this.preferredEncoding = e;
    this.setForceOpenAsText();
  }
  getLanguageId() {
    if (this.model) {
      return this.model.getLanguageId();
    } else {
      return this.preferredLanguageId;
    }
  }
  getPreferredLanguageId() {
    return this.preferredLanguageId;
  }
  setLanguageId(e, t) {
    this.setPreferredLanguageId(e);
    this.model?.setLanguageId(e, t);
  }
  setPreferredLanguageId(e) {
    this.preferredLanguageId = e;
    this.setForceOpenAsText();
  }
  setPreferredContents(e) {
    this.preferredContents = e;
    this.setForceOpenAsText();
  }
  setForceOpenAsText() {
    this.forceOpenAs = 1;
  }
  setForceOpenAsBinary() {
    this.forceOpenAs = 2;
  }
  isDirty() {
    return !!this.model?.isDirty();
  }
  isSaving() {
    if (this.model?.hasState(0) || this.model?.hasState(3) || this.model?.hasState(5)) {
      return false;
    } else if (this.filesConfigurationService.hasShortAutoSaveDelay(this)) {
      return true;
    } else {
      return super.isSaving();
    }
  }
  prefersEditorPane(e) {
    if (this.forceOpenAs === 2) {
      return e.find(t => t.typeId === pgu);
    } else {
      return e.find(t => t.typeId === _1t);
    }
  }
  resolve(e) {
    if (this.forceOpenAs === 2) {
      return this.doResolveAsBinary();
    } else {
      return this.doResolveAsText(e);
    }
  }
  async doResolveAsText(e) {
    try {
      const t = this.preferredContents;
      this.preferredContents = undefined;
      await this.textFileService.files.resolve(this.resource, {
        languageId: this.preferredLanguageId,
        encoding: this.preferredEncoding,
        contents: typeof t == "string" ? JOt(t) : undefined,
        reload: {
          async: true
        },
        allowBinary: this.forceOpenAs === 1,
        reason: 1,
        limits: this.ensureLimits(e)
      });
      this.cachedTextFileModelReference ||= await this.textModelService.createModelReference(this.resource);
      const i = this.cachedTextFileModelReference.object;
      if (this.isDisposed()) {
        this.disposeModelReference();
      }
      return i;
    } catch (t) {
      if (t.textFileOperationResult === 0) {
        return this.doResolveAsBinary();
      }
      throw t;
    }
  }
  async doResolveAsBinary() {
    const e = this.instantiationService.createInstance(bfn, this.preferredResource, this.getName());
    await e.resolve();
    return e;
  }
  isResolved() {
    return !!this.model;
  }
  async rename(e, t) {
    return {
      editor: {
        resource: t,
        encoding: this.getEncoding(),
        options: {
          viewState: Hun(this, e, this.editorService)
        }
      }
    };
  }
  toUntyped(e) {
    const t = {
      resource: this.preferredResource,
      forceFile: true,
      options: {
        override: this.editorId
      }
    };
    if (typeof e?.preserveViewState == "number") {
      t.encoding = this.getEncoding();
      t.languageId = this.getLanguageId();
      t.contents = (() => {
        const i = this.textFileService.files.get(this.resource);
        if (i?.isDirty() && !i.textEditorModel.isTooLargeForHeapOperation()) {
          return i.textEditorModel.getValue();
        }
      })();
      t.options = {
        ...t.options,
        viewState: Hun(this, e.preserveViewState, this.editorService)
      };
    }
    return t;
  }
  matches(e) {
    if (this === e) {
      return true;
    } else if (e instanceof nbu) {
      return Zc(e.resource, this.resource);
    } else if (xq(e)) {
      return super.matches(e);
    } else {
      return false;
    }
  }
  dispose() {
    this.model = undefined;
    this.disposeModelReference();
    super.dispose();
  }
  disposeModelReference() {
    Bo(this.cachedTextFileModelReference);
    this.cachedTextFileModelReference = undefined;
  }
};
Kme = nbu = __decorate([__param(7, ln), __param(8, Gg), __param(9, El), __param(10, Ol), __param(11, Gr), __param(12, IC), __param(13, yi), __param(14, kp), __param(15, uy), __param(16, _ie)], Kme);
