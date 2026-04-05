"use strict";

// Module: out-build/vs/workbench/services/untitled/common/untitledTextEditorService.js
// Offset: 31173988 (bundle byte offset)
// Size: 6311 bytes
Yn();
Wt();
_fu();
Ei();
yn();
cu();
zr();
rt();
Er();
Pit = xi("untitledTextEditorService");
eka = class extends at {
  static {
    Cfu = this;
  }
  static {
    this.UNTITLED_WITHOUT_ASSOCIATED_RESOURCE_REGEX = /Untitled-\d+/;
  }
  constructor(e, t) {
    super();
    this.instantiationService = e;
    this.configurationService = t;
    this._onDidSave = this._register(new Qe());
    this.onDidSave = this._onDidSave.event;
    this._onDidChangeDirty = this._register(new Qe());
    this.onDidChangeDirty = this._onDidChangeDirty.event;
    this._onDidChangeEncoding = this._register(new Qe());
    this.onDidChangeEncoding = this._onDidChangeEncoding.event;
    this._onDidCreate = this._register(new Qe());
    this.onDidCreate = this._onDidCreate.event;
    this._onWillDispose = this._register(new Qe());
    this.onWillDispose = this._onWillDispose.event;
    this._onDidChangeLabel = this._register(new Qe());
    this.onDidChangeLabel = this._onDidChangeLabel.event;
    this.mapResourceToModel = new fu();
  }
  get(e) {
    return this.mapResourceToModel.get(e);
  }
  getValue(e) {
    return this.get(e)?.textEditorModel?.getValue();
  }
  async resolve(e) {
    const t = this.doCreateOrGet(e);
    await t.resolve();
    return t;
  }
  create(e) {
    return this.doCreateOrGet(e);
  }
  doCreateOrGet(e = Object.create(null)) {
    const t = this.massageOptions(e);
    if (t.untitledResource && this.mapResourceToModel.has(t.untitledResource)) {
      return this.mapResourceToModel.get(t.untitledResource);
    } else {
      return this.doCreate(t);
    }
  }
  massageOptions(e) {
    const t = Object.create(null);
    if (e.associatedResource) {
      t.untitledResource = je.from({
        scheme: _n.untitled,
        authority: e.associatedResource.authority,
        fragment: e.associatedResource.fragment,
        path: e.associatedResource.path,
        query: e.associatedResource.query
      });
      t.associatedResource = e.associatedResource;
    } else if (e.untitledResource?.scheme === _n.untitled) {
      t.untitledResource = e.untitledResource;
    }
    if (e.languageId) {
      t.languageId = e.languageId;
    } else if (!t.associatedResource) {
      const i = this.configurationService.getValue();
      if (i.files?.defaultLanguage) {
        t.languageId = i.files.defaultLanguage;
      }
    }
    t.encoding = e.encoding;
    t.initialValue = e.initialValue;
    return t;
  }
  doCreate(e) {
    let t = e.untitledResource;
    if (!t) {
      let r = 1;
      do {
        t = je.from({
          scheme: _n.untitled,
          path: `Untitled-${r}`
        });
        r++;
      } while (this.mapResourceToModel.has(t));
    }
    const i = this._register(this.instantiationService.createInstance(lfn, t, !!e.associatedResource, e.initialValue, e.languageId, e.encoding));
    this.registerModel(i);
    return i;
  }
  registerModel(e) {
    const t = new Ut();
    t.add(e.onDidChangeDirty(() => this._onDidChangeDirty.fire(e)));
    t.add(e.onDidChangeName(() => this._onDidChangeLabel.fire(e)));
    t.add(e.onDidChangeEncoding(() => this._onDidChangeEncoding.fire(e)));
    t.add(e.onWillDispose(() => this._onWillDispose.fire(e)));
    In.once(e.onWillDispose)(() => {
      this.mapResourceToModel.delete(e.resource);
      t.dispose();
    });
    this.mapResourceToModel.set(e.resource, e);
    this._onDidCreate.fire(e);
    if (e.isDirty()) {
      this._onDidChangeDirty.fire(e);
    }
  }
  isUntitledWithAssociatedResource(e) {
    return e.scheme === _n.untitled && e.path.length > 1 && !Cfu.UNTITLED_WITHOUT_ASSOCIATED_RESOURCE_REGEX.test(e.path);
  }
  canDispose(e) {
    if (e.isDisposed()) {
      return true;
    } else {
      return this.doCanDispose(e);
    }
  }
  async doCanDispose(e) {
    if (e.isDirty()) {
      await In.toPromise(e.onDidChangeDirty);
      return this.canDispose(e);
    } else {
      return true;
    }
  }
  notifyDidSave(e, t) {
    this._onDidSave.fire({
      source: e,
      target: t
    });
  }
};
eka = Cfu = __decorate([__param(0, ln), __param(1, Fn)], eka);
Vi(Pit, eka, 1);
