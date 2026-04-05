"use strict";

// Module: out-build/vs/workbench/contrib/files/browser/editors/textFileSaveErrorHandler.js
// Offset: 31264761 (bundle byte offset)
// Size: 6882 bytes
Ht();
mk();
Yr();
nl();
Yn();
Ff();
Wt();
rt();
td();
cu();
Xq();
si();
gD();
vfn();
UMe();
So();
Fc();
kr();
Rl();
yn();
ss();
_r();
zr();
P_();
Nu();
iw();
fQ();
ibu = "saveConflictResolutionContext";
Dka = "conflictResolution";
Bka = "learnMoreDirtyWriteError";
rbu = _(7740, null);
k0i = class extends at {
  static {
    this.ID = "workbench.contrib.textFileSaveErrorHandler";
  }
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this.notificationService = e;
    this.textFileService = t;
    this.editorService = r;
    this.instantiationService = o;
    this.storageService = a;
    this.prettyDialogService = l;
    this.messages = new fu();
    this.activeConflictResolutionResource = undefined;
    this.conflictResolutionContext = new Sn(ibu, false, true).bindTo(i);
    const u = this._register(o.createInstance(S1t));
    this._register(s.registerTextModelContentProvider(Dka, u));
    this.textFileService.files.saveErrorHandler = this;
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.textFileService.files.onDidSave(e => this.onFileSavedOrReverted(e.model.resource)));
    this._register(this.textFileService.files.onDidRevert(e => this.onFileSavedOrReverted(e.resource)));
    this._register(this.editorService.onDidActiveEditorChange(() => this.onActiveEditorChanged()));
  }
  onActiveEditorChanged() {
    let e = false;
    let t;
    const i = this.editorService.activeEditor;
    if (i instanceof kE && i.original.resource?.scheme === Dka) {
      e = true;
      t = i.modified.resource;
    }
    this.conflictResolutionContext.set(e);
    this.activeConflictResolutionResource = t;
  }
  onFileSavedOrReverted(e) {
    const t = this.messages.get(e);
    if (t) {
      t.close();
      this.messages.delete(e);
    }
  }
  onSaveError(e, t, i) {
    const r = e;
    const s = t.resource;
    let o;
    const a = [];
    const l = [];
    if (r.fileOperationResult === 3) {
      if (this.activeConflictResolutionResource && Zc(this.activeConflictResolutionResource, t.resource)) {
        if (this.storageService.getBoolean(Bka, -1)) {
          return;
        }
        o = rbu;
        a.push(this.instantiationService.createInstance(E0i));
        l.push(this.instantiationService.createInstance(Pka));
      } else {
        o = _(7741, null, ca(s));
        a.push(this.instantiationService.createInstance(Lka, t));
        a.push(this.instantiationService.createInstance(kBf, t, i));
        l.push(this.instantiationService.createInstance(Mka));
      }
    } else {
      const u = r.fileOperationResult === 5;
      const d = u && r.options?.unlock;
      const m = r.fileOperationResult === 6;
      const p = s.scheme === _n.file;
      if (p && (m || d)) {
        a.push(this.instantiationService.createInstance(wBf, t, i, !!d));
      } else if (u) {
        a.push(this.instantiationService.createInstance(SBf, t, i));
      } else {
        a.push(this.instantiationService.createInstance(_Bf, t, i));
      }
      a.push(this.instantiationService.createInstance(Nka, t));
      a.push(this.instantiationService.createInstance(CBf, t));
      if (u) {
        if (d && p) {
          o = _(Sc ? 7742 : 7743, null, ca(s));
        } else {
          o = _(7744, null, ca(s));
        }
      } else if (p && m) {
        o = _(Sc ? 7745 : 7746, null, ca(s));
      } else {
        o = _(7747, null, ca(s), Jw(e, false));
      }
    }
    if (i.showPrettyDialogOnError) {
      const u = a.length > 0 ? {
        id: a[0].id,
        label: a[0].label
      } : undefined;
      const d = a.slice(1).map(p => ({
        id: p.id,
        label: p.label,
        type: "secondary"
      }));
      const m = {
        id: "cancel",
        label: "Cancel"
      };
      this.prettyDialogService.openDialog({
        title: "Save Error",
        message: o,
        primaryButton: u,
        extraButtons: d,
        cancelButton: m
      }).then(async p => {
        const g = a.find(f => f.id === p);
        if (g) {
          await g.run();
        }
        Bo(a);
        Bo(l);
      });
    } else {
      const u = {
        primary: a,
        secondary: l
      };
      const d = this.notificationService.notify({
        id: `${VC(t.resource.toString())}`,
        severity: Rs.Error,
        message: o,
        actions: u
      });
      In.once(d.onDidClose)(() => {
        Bo(a);
        Bo(l);
      });
      this.messages.set(t.resource, d);
    }
  }
  dispose() {
    super.dispose();
    this.messages.clear();
  }
};
k0i = __decorate([__param(0, ms), __param(1, Gg), __param(2, wi), __param(3, yi), __param(4, El), __param(5, ln), __param(6, Hi), __param(7, JF)], k0i);
Rka = [];
E0i = class extends Hs {
  constructor(e) {
    super("workbench.files.action.resolveConflictLearnMore", _(7748, null));
    this.openerService = e;
  }
  async run() {
    await this.openerService.open(je.parse("https://go.microsoft.com/fwlink/?linkid=868264"));
  }
};
E0i = __decorate([__param(0, Ja)], E0i);
Pka = class extends Hs {
  constructor(e) {
    super("workbench.files.action.resolveConflictLearnMoreDoNotShowAgain", _(7749, null));
    this.storageService = e;
  }
  async run(e) {
    this.storageService.store(Bka, true, -1, 0);
    e.dispose();
  }
};
Pka = __decorate([__param(0, Hi)], Pka);
Lka = class extends Hs {
  constructor(e, t, i, r, s) {
    super("workbench.files.action.resolveConflict", _(7750, null));
    this.model = e;
    this.editorService = t;
    this.notificationService = i;
    this.instantiationService = r;
    this.productService = s;
  }
  async run() {
    if (!this.model.isDisposed()) {
      const e = this.model.resource;
      const t = ca(e);
      const i = _(7751, null, t, t, this.productService.nameLong);
      await S1t.open(e, Dka, i, this.editorService, {
        pinned: true
      });
      const r = {
        primary: [this.instantiationService.createInstance(E0i)]
      };
      const s = this.notificationService.notify({
        id: `${VC(e.toString())}`,
        severity: Rs.Info,
        message: rbu,
        actions: r,
        neverShowAgain: {
          id: Bka,
          isSecondary: true
        }
      });
      In.once(s.onDidClose)(() => Bo(r.primary));
      Rka.push(s);
    }
  }
};
Lka = __decorate([__param(1, yi), __param(2, ms), __param(3, ln), __param(4, za)], Lka);
wBf = class extends Hs {
  constructor(n, e, t) {
    super("workbench.files.action.saveModelElevated", _(t ? Sc ? 7752 : 7753 : Sc ? 7754 : 7755, null));
    this.model = n;
    this.options = e;
    this.triedToUnlock = t;
  }
  async run() {
    if (!this.model.isDisposed()) {
      await this.model.save({
        ...this.options,
        writeElevated: true,
        writeUnlock: this.triedToUnlock,
        reason: 1
      });
    }
  }
};
_Bf = class extends Hs {
  constructor(n, e) {
    super("workbench.files.action.saveModel", _(7756, null));
    this.model = n;
    this.options = e;
  }
  async run() {
    if (!this.model.isDisposed()) {
      await this.model.save({
        ...this.options,
        reason: 1
      });
    }
  }
};
CBf = class extends Hs {
  constructor(n) {
    super("workbench.files.action.revertModel", _(7757, null));
    this.model = n;
  }
  async run() {
    if (!this.model.isDisposed()) {
      await this.model.revert();
    }
  }
};
Nka = class extends Hs {
  constructor(e, t) {
    super("workbench.files.action.saveModelAs", nfu.value);
    this.model = e;
    this.editorService = t;
  }
  async run() {
    if (!this.model.isDisposed()) {
      const e = this.findEditor();
      if (e) {
        await this.editorService.save(e, {
          saveAs: true,
          reason: 1
        });
      }
    }
  }
  findEditor() {
    let e;
    const t = this.editorService.findEditors(this.model.resource, {
      supportSideBySide: op.PRIMARY
    });
    for (const i of t) {
      if (i.editor instanceof Kme) {
        e = i;
        break;
      } else {
        e ||= i;
      }
    }
    return e;
  }
};
Nka = __decorate([__param(1, yi)], Nka);
SBf = class extends Hs {
  constructor(n, e) {
    super("workbench.files.action.unlock", _(7758, null));
    this.model = n;
    this.options = e;
  }
  async run() {
    if (!this.model.isDisposed()) {
      await this.model.save({
        ...this.options,
        writeUnlock: true,
        reason: 1
      });
    }
  }
};
kBf = class extends Hs {
  constructor(n, e) {
    super("workbench.files.action.saveIgnoreModifiedSince", _(7759, null));
    this.model = n;
    this.options = e;
  }
  async run() {
    if (!this.model.isDisposed()) {
      await this.model.save({
        ...this.options,
        ignoreModifiedSince: true,
        reason: 1
      });
    }
  }
};
Mka = class extends Hs {
  constructor(e) {
    super("workbench.files.action.configureSaveConflict", _(7760, null));
    this.preferencesService = e;
  }
  async run() {
    this.preferencesService.openSettings({
      query: "files.saveConflictResolution"
    });
  }
};
Mka = __decorate([__param(0, tb)], Mka);
EBf = (n, e) => yBf(n, e, true);
xBf = (n, e) => yBf(n, e, false);
