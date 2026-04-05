"use strict";

// Module: out-build/vs/workbench/contrib/files/browser/fileActions.js
// Offset: 31241210 (bundle byte offset)
// Size: 13629 bytes
Ht();
_r();
Hl();
Yr();
Yn();
mk();
nl();
rt();
gD();
ns();
Nu();
Kl();
Wt();
wm();
UMe();
td();
Ei();
Kf();
Ku();
hd();
hs();
si();
zr();
ru();
So();
ss();
l5();
Vs();
hfn();
_s();
ri();
N1();
lP();
vr();
Uie();
qi();
Jr();
Bp();
oa();
_d();
YI();
$ie();
HDf();
ET();
Wf();
_g();
dr();
Mm();
G_();
ip();
Ql();
sN();
pfn = "explorer.newFile";
jfu = dt(7894, "New File...");
C0i = "explorer.newFolder";
zfu = dt(7895, "New Folder...");
QDf = _(7814, null);
jDf = _(7815, null);
zDf = _(7816, null);
VDf = _(7817, null);
Vfu = new Sn("fileCopied", false);
Kfu = "explorer.download";
KDf = _(7818, null);
Yfu = "explorer.upload";
YDf = _(7819, null);
Zfu = "explorer.confirmDelete";
ZDf = 5000000;
XDf = class Fcd extends rn {
  static {
    this.ID = "workbench.files.action.compareFileWith";
  }
  static {
    this.LABEL = dt(7896, "Compare Active File With...");
  }
  constructor() {
    super({
      id: Fcd.ID,
      title: Fcd.LABEL,
      f1: true,
      category: Br.File,
      precondition: ow,
      metadata: {
        description: dt(7897, "Opens a picker to select a file to diff with the active editor.")
      }
    });
  }
  async run(e) {
    const t = e.get(yi);
    const i = e.get(El);
    const r = e.get(ha);
    const s = t.activeEditor;
    const o = gp.getOriginalUri(s);
    if (o && i.canHandleResource(o)) {
      const a = await r.quickAccess.pick("", {
        itemActivation: IW.SECOND
      });
      if (a?.length === 1) {
        const l = a[0].resource;
        if (je.isUri(l) && i.canHandleResource(l)) {
          t.openEditor({
            original: {
              resource: o
            },
            modified: {
              resource: l
            },
            options: {
              pinned: true
            }
          });
        }
      }
    }
  }
};
Xfu = class bjb extends rn {
  static {
    this.ID = "workbench.action.toggleAutoSave";
  }
  constructor() {
    super({
      id: bjb.ID,
      title: dt(7898, "Toggle Auto Save"),
      f1: true,
      category: Br.File,
      metadata: {
        description: dt(7899, "Toggle the ability to save files automatically after typing")
      }
    });
  }
  run(e) {
    return e.get(IC).toggleAutoSave();
  }
};
kka = class extends Hs {
  constructor(e, t, i, r, s) {
    super(e, t);
    this.commandService = i;
    this.notificationService = r;
    this.workingCopyService = s;
    this.lastDirtyState = this.workingCopyService.hasDirty;
    this.enabled = this.lastDirtyState;
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.workingCopyService.onDidChangeDirty(e => this.updateEnablement(e)));
  }
  updateEnablement(e) {
    const t = e.isDirty() || this.workingCopyService.hasDirty;
    if (this.lastDirtyState !== t) {
      this.enabled = t;
      this.lastDirtyState = this.enabled;
    }
  }
  async run(e) {
    try {
      await this.doRun(e);
    } catch (t) {
      JDf(this.notificationService, t);
    }
  }
};
kka = __decorate([__param(2, fr), __param(3, ms), __param(4, cB)], kka);
Eka = class extends kka {
  static {
    this.ID = "workbench.files.action.saveAllInGroup";
  }
  static {
    this.LABEL = _(7861, null);
  }
  get class() {
    return "explorer-action " + Qt.asClassName(Be.saveAll);
  }
  doRun(n) {
    return this.commandService.executeCommand(u0i, {}, n);
  }
};
gfn = class extends Hs {
  static {
    this.ID = "workbench.files.action.closeGroup";
  }
  static {
    this.LABEL = _(7862, null);
  }
  constructor(e, t, i) {
    super(e, t, Qt.asClassName(Be.closeAll));
    this.commandService = i;
  }
  run(e) {
    return this.commandService.executeCommand(oka, {}, e);
  }
};
gfn = __decorate([__param(2, fr)], gfn);
eBf = class Ocd extends rn {
  static {
    this.ID = "workbench.files.action.focusFilesExplorer";
  }
  static {
    this.LABEL = dt(7900, "Focus on Files Explorer");
  }
  constructor() {
    super({
      id: Ocd.ID,
      title: Ocd.LABEL,
      f1: true,
      category: Br.File,
      metadata: {
        description: dt(7901, "Moves focus to the file explorer view container.")
      }
    });
  }
  async run(e) {
    await e.get(b0).openPaneComposite(BQ, 0, true);
  }
};
tBf = class Ucd extends rn {
  static {
    this.ID = "workbench.files.action.showActiveFileInExplorer";
  }
  static {
    this.LABEL = dt(7902, "Reveal Active File in Explorer View");
  }
  constructor() {
    super({
      id: Ucd.ID,
      title: Ucd.LABEL,
      f1: true,
      category: Br.File,
      metadata: {
        description: dt(7903, "Reveals and selects the active file within the explorer view.")
      }
    });
  }
  async run(e) {
    const t = e.get(fr);
    const i = e.get(yi);
    const r = gp.getOriginalUri(i.activeEditor, {
      supportSideBySide: op.PRIMARY
    });
    if (r) {
      t.executeCommand(Vgn, r);
    }
  }
};
nBf = class $cd extends rn {
  static {
    this.ID = "workbench.action.files.showOpenedFileInNewWindow";
  }
  static {
    this.LABEL = dt(7904, "Open Active File in New Empty Workspace");
  }
  constructor() {
    super({
      id: $cd.ID,
      title: $cd.LABEL,
      f1: true,
      category: Br.File,
      precondition: npn,
      metadata: {
        description: dt(7905, "Opens the active file in a new window with no folders open.")
      }
    });
  }
  async run(e) {
    const t = e.get(yi);
    const i = e.get(wd);
    const r = e.get(Ml);
    const s = e.get(Gr);
    const o = gp.getOriginalUri(t.activeEditor, {
      supportSideBySide: op.PRIMARY
    });
    if (o) {
      if (s.hasProvider(o)) {
        i.openWindow([{
          fileUri: o
        }], {
          forceNewWindow: true
        });
      } else {
        r.error(_(7863, null));
      }
    }
  }
};
iBf = class qcd extends rn {
  static {
    this.ID = "workbench.files.action.compareNewUntitledTextFiles";
  }
  static {
    this.LABEL = dt(7906, "Compare New Untitled Text Files");
  }
  constructor() {
    super({
      id: qcd.ID,
      title: qcd.LABEL,
      f1: true,
      category: Br.File,
      metadata: {
        description: dt(7907, "Opens a new diff editor with two untitled files.")
      }
    });
  }
  async run(e) {
    await e.get(yi).openEditor({
      original: {
        resource: undefined
      },
      modified: {
        resource: undefined
      },
      options: {
        pinned: true
      }
    });
  }
};
rBf = class PWa extends rn {
  static {
    this.ID = "workbench.files.action.compareWithClipboard";
  }
  static {
    this.LABEL = dt(7908, "Compare Active File with Clipboard");
  }
  static {
    this.SCHEME_COUNTER = 0;
  }
  constructor() {
    super({
      id: PWa.ID,
      title: PWa.LABEL,
      f1: true,
      category: Br.File,
      keybinding: {
        primary: Ma(Gm, 33),
        mac: {
          primary: Ma(Np, 33)
        },
        weight: 200
      },
      metadata: {
        description: dt(7909, "Opens a new diff editor to compare the active file with the contents of the clipboard.")
      }
    });
  }
  async run(e) {
    const t = e.get(yi);
    const i = e.get(ln);
    const r = e.get(El);
    const s = e.get(Gr);
    const o = gp.getOriginalUri(t.activeEditor, {
      supportSideBySide: op.PRIMARY
    });
    const a = `clipboardCompare${PWa.SCHEME_COUNTER++}`;
    if (o && (s.hasProvider(o) || o.scheme === _n.untitled)) {
      if (!this.registrationDisposal) {
        const d = i.createInstance(xka);
        this.registrationDisposal = r.registerTextModelContentProvider(a, d);
      }
      const l = ca(o);
      const u = _(7869, null, l);
      await t.openEditor({
        original: {
          resource: o.with({
            scheme: a
          })
        },
        modified: {
          resource: o
        },
        label: u,
        options: {
          pinned: true
        }
      }).finally(() => {
        Bo(this.registrationDisposal);
        this.registrationDisposal = undefined;
      });
    }
  }
  dispose() {
    Bo(this.registrationDisposal);
    this.registrationDisposal = undefined;
  }
};
xka = class {
  constructor(e, t, i) {
    this.clipboardService = e;
    this.languageService = t;
    this.modelService = i;
  }
  async provideTextContent(e) {
    const t = await this.clipboardService.readText();
    return this.modelService.createModel(t, this.languageService.createByFilepathOrFirstLine(e), e);
  }
};
xka = __decorate([__param(0, jm), __param(1, Jl), __param(2, Il)], xka);
Ss.registerCommand({
  id: pfn,
  handler: async n => {
    await WDf(n, false);
  }
});
Ss.registerCommand({
  id: C0i,
  handler: async n => {
    await WDf(n, true);
  }
});
sBf = async n => {
  const e = n.get(DC);
  const t = n.get(ms);
  const i = n.get(Vp);
  const r = n.get(kp);
  const s = n.get(Fn);
  const o = e.getContext(false);
  const a = o.length > 0 ? o[0] : undefined;
  if (!a) {
    return;
  }
  const l = (await i.getEnvironment())?.os ?? cf;
  await e.setEditable(a, {
    validationMessage: u => Ska(r, a, u, l),
    onFinish: async (u, d) => {
      if (d) {
        const m = a.parent.resource;
        const p = Wo(m, u);
        if (a.resource.toString() !== p.toString()) {
          try {
            await e.applyBulkEdit([new QR(a.resource, p)], {
              confirmBeforeUndo: s.getValue().explorer.confirmUndo === "verbose",
              undoLabel: _(7873, null, a.name, u),
              progressLabel: _(7874, null, a.name, u)
            });
            await Cka(u, e);
          } catch (g) {
            t.error(g);
          }
        }
      }
      await e.setEditable(a, null);
    }
  });
};
oBf = async (n, e) => {
  const t = n.get(DC);
  const i = n.get(Gr);
  const r = n.get(ms);
  const s = n.get(Vp);
  const o = n.get(kp);
  const a = n.get(Fn);
  const l = n.get(yu);
  const u = n.get(yi);
  await l.openView(GJ, true);
  const d = t.getContext(false);
  const m = d.length > 0 ? d[0] : undefined;
  let p;
  if (m) {
    p = m.isDirectory ? m : m.parent || t.roots[0];
  } else {
    p = t.roots[0];
  }
  if (p.isReadonly) {
    r.error(_(7875, null));
    return;
  }
  const f = Wo(p.resource, "Untitled");
  try {
    await i.writeFile(f, Ms.fromString(e));
    await t.refresh();
    await t.select(f, true);
    await Af(150);
    const A = t.findClosest(f);
    if (A) {
      await u.openEditor({
        resource: f,
        options: {
          pinned: true,
          preserveFocus: true
        }
      });
      const w = (await s.getEnvironment())?.os ?? cf;
      await t.setEditable(A, {
        validationMessage: C => Ska(o, A, C, w),
        onFinish: async (C, x) => {
          if (x) {
            const I = A.parent.resource;
            const B = Wo(I, C);
            if (A.resource.toString() !== B.toString()) {
              try {
                await t.applyBulkEdit([new QR(A.resource, B)], {
                  confirmBeforeUndo: a.getValue().explorer.confirmUndo === "verbose",
                  undoLabel: _(7876, null, A.name, C),
                  progressLabel: _(7877, null, A.name, C)
                });
                await Cka(C, t);
              } catch (R) {
                r.error(R);
              }
            }
          }
          await t.setEditable(A, null);
        }
      });
    }
  } catch (A) {
    if (A.code === "EEXIST" || A.message?.includes("already exists")) {
      let w = 1;
      let C = f;
      while (true) {
        const x = `Untitled ${w}`;
        C = Wo(p.resource, x);
        try {
          await i.writeFile(C, Ms.fromString(e));
          await t.refresh();
          await t.select(C, true);
          await Af(150);
          const I = t.findClosest(C);
          if (I) {
            await u.openEditor({
              resource: C,
              options: {
                pinned: true,
                preserveFocus: true
              }
            });
            const B = (await s.getEnvironment())?.os ?? cf;
            await t.setEditable(I, {
              validationMessage: R => Ska(o, I, R, B),
              onFinish: async (R, N) => {
                if (N) {
                  const M = I.parent.resource;
                  const O = Wo(M, R);
                  if (I.resource.toString() !== O.toString()) {
                    try {
                      await t.applyBulkEdit([new QR(I.resource, O)], {
                        confirmBeforeUndo: a.getValue().explorer.confirmUndo === "verbose",
                        undoLabel: _(7878, null, I.name, R),
                        progressLabel: _(7879, null, I.name, R)
                      });
                      await Cka(R, t);
                    } catch ($) {
                      r.error($);
                    }
                  }
                }
                await t.setEditable(I, null);
              }
            });
          }
          break;
        } catch (I) {
          if (I.code === "EEXIST" || I.message?.includes("already exists")) {
            w++;
            continue;
          }
          throw I;
        }
      }
    } else {
      r.error(Jw(A, false));
    }
  }
};
Ss.registerCommand({
  id: "explorer.createFileFromPaste",
  handler: oBf
});
aBf = async n => {
  const t = n.get(DC).getContext(true).filter(i => !i.isRoot);
  if (t.length) {
    await Wfu(n.get(DC), n.get(t7), n.get(Ml), n.get(Fn), n.get(IC), t, true);
  }
};
ebu = async n => {
  const t = n.get(DC).getContext(true).filter(i => !i.isRoot);
  if (t.length) {
    await Wfu(n.get(DC), n.get(t7), n.get(Ml), n.get(Fn), n.get(IC), t, false);
  }
};
Oit = false;
cBf = async n => {
  const e = n.get(DC);
  const t = e.getContext(true);
  if (t.length > 0) {
    await e.setToCopy(t, false);
    Oit = false;
  }
};
lBf = async n => {
  const e = n.get(DC);
  const t = e.getContext(true);
  if (t.length > 0) {
    await e.setToCopy(t, true);
    Oit = true;
  }
};
uBf = async n => {
  const e = n.get(DC);
  const t = n.get(ms);
  const i = n.get(ln);
  const r = e.getContext(true);
  const s = r.length ? r : e.roots;
  const o = i.createInstance(_ka);
  try {
    await o.download(s);
  } catch (a) {
    t.error(a);
    throw a;
  }
};
Ss.registerCommand({
  id: Kfu,
  handler: uBf
});
dBf = async n => {
  const e = n.get(DC);
  const t = n.get(ms);
  const i = n.get(ln);
  const r = e.getContext(false);
  const s = r.length ? r[0] : e.roots[0];
  try {
    const o = await IiA();
    if (o) {
      await i.createInstance(_0i).upload(s, o);
    }
  } catch (o) {
    t.error(o);
    throw o;
  }
};
Ss.registerCommand({
  id: Yfu,
  handler: dBf
});
hBf = async (n, e) => {
  const t = n.get(jm);
  const i = n.get(DC);
  const r = n.get(Gr);
  const s = n.get(ms);
  const o = n.get(yi);
  const a = n.get(Fn);
  const l = n.get(xl);
  const u = n.get(Ml);
  const d = n.get(wd);
  const m = i.getContext(false);
  const g = e && e.length > 0 && a.getValue("explorer.confirmPasteNative");
  const f = await yoy(e, t, d);
  if (g && f.files.length >= 1) {
    const I = f.files.length > 1 ? _(7880, null, f.files.length) : _(7881, null, fd(f.type === "paths" ? f.files[0].fsPath : f.files[0].name));
    const B = f.files.length > 1 ? uve(f.files.map(N => {
      if (je.isUri(N)) {
        return N.fsPath;
      }
      if (f.type === "paths") {
        const M = XSe(N);
        if (M) {
          return M;
        }
      }
      return N.name;
    })) : undefined;
    const R = await u.confirm({
      message: I,
      detail: B,
      checkbox: {
        label: _(7882, null)
      },
      primaryButton: _(7883, null)
    });
    if (!R.confirmed) {
      return;
    }
    if (R.checkboxChecked === true) {
      await a.updateValue("explorer.confirmPasteNative", false);
    }
  }
  const A = m.length ? m[0] : i.roots[0];
  const w = a.getValue().explorer.incrementalNaming;
  if (i.getEditable()) {
    return;
  }
  try {
    let I = [];
    if (f.type === "paths") {
      const B = lh(await Promise.all(f.files.map(async R => {
        if (A.resource.toString() !== R.toString() && f9(A.resource, R)) {
          throw new Error(_(7884, null));
        }
        const N = await r.stat(R);
        let M;
        if (l.extUri.isEqual(A.resource, R)) {
          M = A.parent;
        } else {
          M = A.isDirectory ? A : A.parent;
        }
        const O = await Qfu(i, r, u, M, {
          resource: R,
          isDirectory: N.isDirectory,
          allowOverwrite: Oit || w === "disabled"
        }, w);
        if (O) {
          return {
            source: R,
            target: O
          };
        }
      })));
      if (B.length >= 1) {
        if (Oit) {
          const R = B.map(M => new QR(M.source, M.target, {
            overwrite: w === "disabled"
          }));
          const N = {
            confirmBeforeUndo: a.getValue().explorer.confirmUndo === "verbose",
            progressLabel: B.length > 1 ? _(7885, null, B.length) : _(7886, null, GP(B[0].target)),
            undoLabel: B.length > 1 ? _(7887, null, B.length) : _(7888, null, GP(B[0].target))
          };
          await i.applyBulkEdit(R, N);
        } else {
          const R = B.map(N => new QR(N.source, N.target, {
            copy: true,
            overwrite: w === "disabled"
          }));
          await x(B.map(N => N.target), R);
        }
      }
      I = B.map(R => R.target);
    } else {
      const B = lh(await Promise.all(f.files.map(async R => {
        const N = A.isDirectory ? A : A.parent;
        const M = await Qfu(i, r, u, N, {
          resource: R.name,
          isDirectory: false,
          allowOverwrite: Oit || w === "disabled"
        }, w);
        if (M) {
          return {
            target: M,
            edit: new QR(undefined, M, {
              overwrite: w === "disabled",
              contents: (async () => Ms.wrap(new Uint8Array(await R.arrayBuffer())))()
            })
          };
        }
      })));
      await x(B.map(R => R.target), B.map(R => R.edit));
      I = B.map(R => R.target);
    }
    if (I.length) {
      const B = I[0];
      await i.select(B);
      if (I.length === 1) {
        const R = i.findClosest(B);
        if (R && !R.isDirectory) {
          await o.openEditor({
            resource: R.resource,
            options: {
              pinned: true,
              preserveFocus: true
            }
          });
        }
      }
    }
  } catch (I) {
    JDf(s, new Error(_(7889, null, ov(I))));
  } finally {
    if (Oit) {
      await i.setToCopy([], false);
      Oit = false;
    }
  }
  async function x(I, B) {
    const R = a.getValue().explorer.confirmUndo;
    const N = {
      confirmBeforeUndo: R === "default" || R === "verbose",
      progressLabel: I.length > 1 ? _(7890, null, I.length) : _(7891, null, GP(I[0])),
      undoLabel: I.length > 1 ? _(7892, null, I.length) : _(7893, null, GP(I[0]))
    };
    await i.applyBulkEdit(B, N);
  }
};
mBf = async n => {
  const e = n.get(yi);
  const i = n.get(DC).getContext(true);
  await e.openEditors(i.filter(r => !r.isDirectory).map(r => ({
    resource: r.resource,
    options: {
      preserveFocus: true
    }
  })));
};
S0i = class extends rn {
  constructor(n, e, t) {
    super({
      id: n,
      title: e,
      f1: true,
      category: Br.File,
      precondition: Oau
    });
    this.newReadonlyState = t;
  }
  async run(n) {
    const e = n.get(yi);
    const t = n.get(IC);
    const i = gp.getOriginalUri(e.activeEditor, {
      supportSideBySide: op.PRIMARY
    });
    if (i) {
      await t.updateReadonly(i, this.newReadonlyState);
    }
  }
};
pBf = class Hcd extends S0i {
  static {
    this.ID = "workbench.action.files.setActiveEditorReadonlyInSession";
  }
  static {
    this.LABEL = dt(7910, "Set Active Editor Read-only in Session");
  }
  constructor() {
    super(Hcd.ID, Hcd.LABEL, true);
  }
};
gBf = class Jcd extends S0i {
  static {
    this.ID = "workbench.action.files.setActiveEditorWriteableInSession";
  }
  static {
    this.LABEL = dt(7911, "Set Active Editor Writeable in Session");
  }
  constructor() {
    super(Jcd.ID, Jcd.LABEL, false);
  }
};
fBf = class Gcd extends S0i {
  static {
    this.ID = "workbench.action.files.toggleActiveEditorReadonlyInSession";
  }
  static {
    this.LABEL = dt(7912, "Toggle Active Editor Read-only in Session");
  }
  constructor() {
    super(Gcd.ID, Gcd.LABEL, "toggle");
  }
};
bBf = class Wcd extends S0i {
  static {
    this.ID = "workbench.action.files.resetActiveEditorReadonlyInSession";
  }
  static {
    this.LABEL = dt(7913, "Reset Active Editor Read-only in Session");
  }
  constructor() {
    super(Wcd.ID, Wcd.LABEL, "reset");
  }
};
