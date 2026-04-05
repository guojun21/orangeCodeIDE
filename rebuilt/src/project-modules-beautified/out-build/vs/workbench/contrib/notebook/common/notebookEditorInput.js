"use strict";

// Module: out-build/vs/workbench/contrib/notebook/common/notebookEditorInput.js
// Offset: 30776732 (bundle byte offset)
// Size: 5802 bytes
iR();
Nu();
z0();
Yr();
ru();
lce();
ph();
Pd();
zr();
ns();
d1f();
_s();
Ql();
N1();
_u();
Ht();
ss();
sw();
Dce();
Gx = class extends n_i {
  static {
    i_i = this;
  }
  static getOrCreate(e, t, i, r, s = {}) {
    const o = e.createInstance(i_i, t, i, r, s);
    if (i) {
      o.setPreferredResource(i);
    }
    return o;
  }
  static {
    this.ID = "workbench.input.notebook";
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f) {
    super(e, t, l, u, d, g, f);
    this.viewType = i;
    this.options = r;
    this._notebookService = s;
    this._notebookModelResolverService = o;
    this._fileDialogService = a;
    this.editorModelReference = null;
    this._defaultDirtyState = false;
    this._defaultDirtyState = !!r.startDirty;
    this._sideLoadedListener = s.onDidAddNotebookDocument(A => {
      if (A.viewType === this.viewType && A.uri.toString() === this.resource.toString()) {
        this.resolve().catch(Gc);
      }
    });
    this._register(m.onWillStop(A => {
      if (!A.auto && !this.isDirty()) {
        return;
      }
      const w = A.auto ? _(9522, null, this.getName()) : _(9523, null, this.getName());
      A.veto((async () => {
        const C = p.findEditors(this);
        if (A.auto) {
          return true;
        } else {
          return !(C.length > 0) || !(await p.save(C[0])).success;
        }
      })(), w);
    }));
  }
  dispose() {
    this._sideLoadedListener.dispose();
    this.editorModelReference?.dispose();
    this.editorModelReference = null;
    super.dispose();
  }
  get typeId() {
    return i_i.ID;
  }
  get editorId() {
    return this.viewType;
  }
  get capabilities() {
    let e = 0;
    if (this.resource.scheme === _n.untitled) {
      e |= 4;
    }
    if (this.editorModelReference) {
      if (this.editorModelReference.object.isReadonly()) {
        e |= 2;
      }
    } else if (this.filesConfigurationService.isReadonly(this.resource)) {
      e |= 2;
    }
    if (!(e & 2)) {
      e |= 128;
    }
    return e;
  }
  getDescription(e = 1) {
    if (!this.hasCapability(4) || this.editorModelReference?.object.hasAssociatedFilePath()) {
      return super.getDescription(e);
    }
  }
  isReadonly() {
    if (this.editorModelReference) {
      return this.editorModelReference.object.isReadonly();
    } else {
      return this.filesConfigurationService.isReadonly(this.resource);
    }
  }
  isDirty() {
    if (this.editorModelReference) {
      return this.editorModelReference.object.isDirty();
    } else {
      return this._defaultDirtyState;
    }
  }
  isSaving() {
    const e = this.editorModelReference?.object;
    if (!e || !e.isDirty() || e.hasErrorState || this.hasCapability(4)) {
      return false;
    } else {
      return this.filesConfigurationService.hasShortAutoSaveDelay(this);
    }
  }
  async save(e, t) {
    if (this.editorModelReference) {
      if (this.hasCapability(4)) {
        return this.saveAs(e, t);
      } else {
        await this.editorModelReference.object.save(t);
        return this;
      }
    }
  }
  async saveAs(e, t) {
    if (!this.editorModelReference) {
      return;
    }
    const i = this._notebookService.getContributedNotebookType(this.viewType);
    if (!i) {
      return;
    }
    const r = this.hasCapability(4) ? await this._suggestName(i, this.labelService.getUriBasenameLabel(this.resource)) : this.editorModelReference.object.resource;
    let s;
    if (this.editorModelReference.object.hasAssociatedFilePath()) {
      s = r;
    } else {
      s = await this._fileDialogService.pickFileToSave(r, t?.availableFileSystems);
      if (!s) {
        return;
      }
    }
    if (!i.matches(s)) {
      const o = i.selectors.map(a => typeof a == "string" ? a : Pet(a) ? `${a} (base ${a.base})` : a.exclude ? `${a.include} (exclude: ${a.exclude})` : `${a.include}`).join(", ");
      throw new Error(`File name ${s} is not supported by ${i.providerDisplayName}.

Please make sure the file name matches following patterns:
${o}`);
    }
    return await this.editorModelReference.object.saveAs(s);
  }
  async _suggestName(e, t) {
    const i = e.selectors[0];
    let r = i && typeof i == "string" ? i : undefined;
    if (!r && i) {
      const s = i.include;
      if (typeof s == "string") {
        r = s;
      }
    }
    if (r) {
      const s = /^\*\.([A-Za-z_-]*)$/.exec(r);
      if (s && s.length > 1) {
        const o = s[1];
        if (!t.endsWith(o)) {
          return Wo(await this._fileDialogService.defaultFilePath(), t + "." + o);
        }
      }
    }
    return Wo(await this._fileDialogService.defaultFilePath(), t);
  }
  async rename(e, t) {
    if (this.editorModelReference) {
      return {
        editor: {
          resource: t
        },
        options: {
          override: this.viewType
        }
      };
    }
  }
  async revert(e, t) {
    if (this.editorModelReference && this.editorModelReference.object.isDirty()) {
      await this.editorModelReference.object.revert(t);
    }
  }
  async resolve(e, t) {
    if (!(await this._notebookService.canResolve(this.viewType))) {
      return null;
    }
    t?.mark("extensionActivated");
    this._sideLoadedListener.dispose();
    if (this.editorModelReference) {
      this.editorModelReference.object.load({
        limits: this.ensureLimits(e)
      });
    } else {
      const i = !!(this.capabilities & 512);
      const r = await this._notebookModelResolverService.resolve(this.resource, this.viewType, {
        limits: this.ensureLimits(e),
        scratchpad: i,
        viewType: this.editorId
      });
      if (this.editorModelReference) {
        r.dispose();
        return this.editorModelReference.object;
      }
      this.editorModelReference = r;
      if (this.isDisposed()) {
        this.editorModelReference.dispose();
        this.editorModelReference = null;
        return null;
      }
      this._register(this.editorModelReference.object.onDidChangeDirty(() => this._onDidChangeDirty.fire()));
      this._register(this.editorModelReference.object.onDidChangeReadonly(() => this._onDidChangeCapabilities.fire()));
      this._register(this.editorModelReference.object.onDidRevertUntitled(() => this.dispose()));
      if (this.editorModelReference.object.isDirty()) {
        this._onDidChangeDirty.fire();
      }
    }
    if (this.options._backupId) {
      const i = await this._notebookService.withNotebookDataProvider(this.editorModelReference.object.notebook.viewType);
      if (!(i instanceof M$e)) {
        throw new Error("CANNOT open file notebook with this provider");
      }
      const r = await i.serializer.dataToNotebook(Ms.fromString(JSON.stringify({
        __webview_backup: this.options._backupId
      })));
      this.editorModelReference.object.notebook.applyEdits([{
        editType: 1,
        index: 0,
        count: this.editorModelReference.object.notebook.length,
        cells: r.cells
      }], true, undefined, () => {}, undefined, false);
      if (this.options._workingCopy) {
        this.options._backupId = undefined;
        this.options._workingCopy = undefined;
        this.options.startDirty = undefined;
      }
    }
    return this.editorModelReference.object;
  }
  toUntyped() {
    return {
      resource: this.resource,
      options: {
        override: this.viewType
      }
    };
  }
  matches(e) {
    if (super.matches(e)) {
      return true;
    } else if (e instanceof i_i) {
      return this.viewType === e.viewType && Zc(this.resource, e.resource);
    } else if (xq(e) && e.resource.scheme === Dg.scheme) {
      return Zc(this.resource, Dg.parse(e.resource)?.notebook);
    } else {
      return false;
    }
  }
};
Gx = i_i = __decorate([__param(4, JA), __param(5, Lq), __param(6, oy), __param(7, Ol), __param(8, Gr), __param(9, IC), __param(10, su), __param(11, yi), __param(12, uy), __param(13, _ie)], Gx);
