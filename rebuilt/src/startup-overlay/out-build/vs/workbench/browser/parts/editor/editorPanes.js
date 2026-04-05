"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/editorPanes.js
// Offset: 31408776 (bundle byte offset)
// Size: 6282 bytes
ri();
mk();
_s();
yn();
rt();
Vf();
Js();
Ht();
ru();
wI();
Wt();
jr();
Xg();
Ws();
EE();
Nu();
wm();
zp();
exe();
$Lf();
t1a = class extends at {
  get minimumWidth() {
    return this._activeEditorPane?.minimumWidth ?? Zye.width;
  }
  get minimumHeight() {
    return this._activeEditorPane?.minimumHeight ?? Zye.height;
  }
  get maximumWidth() {
    return this._activeEditorPane?.maximumWidth ?? R1t.width;
  }
  get maximumHeight() {
    return this._activeEditorPane?.maximumHeight ?? R1t.height;
  }
  get activeEditorPane() {
    return this._activeEditorPane;
  }
  constructor(e, t, i, r, s, o, a, l, u, d) {
    super();
    this.editorGroupParent = e;
    this.editorPanesParent = t;
    this.groupView = i;
    this.layoutService = r;
    this.instantiationService = s;
    this.workspaceTrustService = a;
    this.logService = l;
    this.dialogService = u;
    this.hostService = d;
    this._onDidFocus = this._register(new Qe());
    this.onDidFocus = this._onDidFocus.event;
    this._onDidChangeSizeConstraints = this._register(new Qe());
    this.onDidChangeSizeConstraints = this._onDidChangeSizeConstraints.event;
    this._activeEditorPane = null;
    this.editorPanes = [];
    this.mapEditorPaneToPendingSetInput = new Map();
    this.activeEditorPaneDisposables = this._register(new Ut());
    this.editorPanesRegistry = Di.as(Jp.EditorPane);
    this.editorOperation = this._register(new xIc(o));
    this.registerListeners();
  }
  registerListeners() {
    this._register(this.workspaceTrustService.onDidChangeTrust(() => this.onDidChangeWorkspaceTrust()));
  }
  onDidChangeWorkspaceTrust() {
    const e = this._activeEditorPane?.input;
    const t = this._activeEditorPane?.options;
    if (e?.hasCapability(16)) {
      this.groupView.openEditor(e, t);
    }
  }
  async openEditor(e, t, i, r = Object.create(null)) {
    try {
      return await this.doOpenEditor(this.getEditorPaneDescriptor(e), e, t, i, r);
    } catch (s) {
      if (t?.ignoreError) {
        return {
          error: s
        };
      } else {
        return this.doShowError(s, e, t, i, r);
      }
    }
  }
  async doShowError(e, t, i, r, s) {
    this.logService.error(e);
    let o = false;
    if (i?.source === rR.USER && (!jun(e) || e.allowDialog)) {
      o = await this.doShowErrorDialog(e, t);
    }
    if (o) {
      return {
        error: e
      };
    }
    const a = {
      ...i
    };
    if (!bf(e)) {
      a.error = e;
    }
    return {
      ...(await this.doOpenEditor(e1a.DESCRIPTOR, t, a, r, s)),
      error: e
    };
  }
  async doShowErrorDialog(e, t) {
    let i = Ha.Error;
    let r;
    let s = Jw(e);
    let o;
    if (jun(e)) {
      o = e.actions;
      i = e.forceSeverity ?? Ha.Error;
      if (e.forceMessage) {
        r = e.message;
        s = undefined;
      }
    }
    r ||= _(3743, null, t.getName());
    const a = [];
    if (o && o.length > 0) {
      for (const m of o) {
        a.push({
          label: m.label,
          run: () => m
        });
      }
    } else {
      a.push({
        label: _(3744, null),
        run: () => {}
      });
    }
    let l;
    if (a.length === 1) {
      l = {
        run: () => {
          u = true;
        }
      };
    }
    let u = false;
    const {
      result: d
    } = await this.dialogService.prompt({
      type: i,
      message: r,
      detail: s,
      buttons: a,
      cancelButton: l
    });
    if (d) {
      const m = d.run();
      if (m instanceof Promise) {
        m.catch(p => this.dialogService.error(Jw(p)));
      }
      u = true;
    }
    return u;
  }
  async doOpenEditor(e, t, i, r, s = Object.create(null)) {
    const o = this.doShowEditorPane(e);
    const a = _C();
    const {
      changed: l,
      cancelled: u
    } = await this.doSetInput(o, t, i, s);
    if (!u && !i?.silentOpen) {
      if ((!i || !i.preserveFocus) && this.shouldRestoreFocus(a)) {
        o.focus();
      } else if (!r?.preserveWindowOrder) {
        this.hostService.moveTop(Coe(this.groupView.windowId, true).window);
      }
    }
    return {
      pane: o,
      changed: l,
      cancelled: u
    };
  }
  shouldRestoreFocus(e) {
    if (!this.layoutService.isRestored() || !e) {
      return true;
    }
    const t = _C();
    return !t || t === e.ownerDocument.body || e === t || !dW(t) || !!HS(t, this.editorGroupParent);
  }
  getEditorPaneDescriptor(e) {
    if (e.hasCapability(16) && !this.workspaceTrustService.isWorkspaceTrusted()) {
      return Xka.DESCRIPTOR;
    } else {
      return ed(this.editorPanesRegistry.getEditorPane(e));
    }
  }
  doShowEditorPane(e) {
    if (this._activeEditorPane && e.describes(this._activeEditorPane)) {
      return this._activeEditorPane;
    }
    this.doHideActiveEditorPane();
    const t = this.doCreateEditorPane(e);
    this.doSetActiveEditorPane(t);
    const i = ed(t.getContainer());
    this.editorPanesParent.appendChild(i);
    gv(i);
    t.setVisible(true);
    if (this.pagePosition) {
      t.layout(new Lu(this.pagePosition.width, this.pagePosition.height), {
        top: this.pagePosition.top,
        left: this.pagePosition.left
      });
    }
    if (this.boundarySashes) {
      t.setBoundarySashes(this.boundarySashes);
    }
    return t;
  }
  doCreateEditorPane(e) {
    const t = this.doInstantiateEditorPane(e);
    if (!t.getContainer()) {
      const i = Ct(".editor-instance");
      this.editorPanesParent.appendChild(i);
      try {
        t.create(i);
      } catch (r) {
        i.remove();
        Ng(i);
        throw r;
      }
    }
    return t;
  }
  doInstantiateEditorPane(e) {
    const t = this.editorPanes.find(r => e.describes(r));
    if (t) {
      return t;
    }
    const i = this._register(e.instantiate(this.instantiationService, this.groupView));
    this.editorPanes.push(i);
    return i;
  }
  doSetActiveEditorPane(e) {
    this._activeEditorPane = e;
    this.activeEditorPaneDisposables.clear();
    if (e) {
      this.activeEditorPaneDisposables.add(e.onDidChangeSizeConstraints(t => this._onDidChangeSizeConstraints.fire(t)));
      this.activeEditorPaneDisposables.add(e.onDidFocus(() => this._onDidFocus.fire()));
    }
    this._onDidChangeSizeConstraints.fire(undefined);
  }
  async doSetInput(e, t, i, r) {
    let s = e.input?.matches(t);
    if (s && !i?.forceReload) {
      if (this.mapEditorPaneToPendingSetInput.has(e)) {
        await this.mapEditorPaneToPendingSetInput.get(e);
      }
      s = e.input?.matches(t);
      if (s) {
        e.setOptions(i);
      }
      return {
        changed: false,
        cancelled: !s
      };
    }
    const o = this.editorOperation.start(this.layoutService.isRestored() ? 800 : 3200);
    let a = false;
    try {
      e.clearInput();
      const l = e.setInput(t, i, r, o.token);
      this.mapEditorPaneToPendingSetInput.set(e, l);
      await l;
      if (!o.isCurrent()) {
        a = true;
      }
    } catch (l) {
      if (!o.isCurrent()) {
        a = true;
      } else {
        throw l;
      }
    } finally {
      if (o.isCurrent()) {
        this.mapEditorPaneToPendingSetInput.delete(e);
      }
      o.stop();
    }
    return {
      changed: !s,
      cancelled: a
    };
  }
  doHideActiveEditorPane() {
    if (!this._activeEditorPane) {
      return;
    }
    this.editorOperation.stop();
    this.safeRun(() => this._activeEditorPane?.clearInput());
    this.safeRun(() => this._activeEditorPane?.setVisible(false));
    this.mapEditorPaneToPendingSetInput.delete(this._activeEditorPane);
    const e = this._activeEditorPane.getContainer();
    if (e) {
      e.remove();
      Ng(e);
    }
    this.doSetActiveEditorPane(null);
  }
  closeEditor(e) {
    if (this._activeEditorPane?.input && e.matches(this._activeEditorPane.input)) {
      this.doHideActiveEditorPane();
    }
  }
  setVisible(e) {
    this.safeRun(() => this._activeEditorPane?.setVisible(e));
  }
  layout(e) {
    this.pagePosition = e;
    this.safeRun(() => this._activeEditorPane?.layout(new Lu(e.width, e.height), e));
  }
  setBoundarySashes(e) {
    this.boundarySashes = e;
    this.safeRun(() => this._activeEditorPane?.setBoundarySashes(e));
  }
  safeRun(e) {
    try {
      e();
    } catch (t) {
      this.logService.error(t);
    }
  }
};
t1a = __decorate([__param(3, Vu), __param(4, ln), __param(5, p2), __param(6, Wx), __param(7, Rr), __param(8, Ml), __param(9, wd)], t1a);
