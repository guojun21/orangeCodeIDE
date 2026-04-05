"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/editorGroupView.js
// Offset: 32384866 (bundle byte offset)
// Size: 30321 bytes
ri();
h0();
Dx();
Ov();
IMe();
Vs();
vr();
ml();
yn();
iw();
rt();
zr();
_r();
Yr();
Yn();
R_i();
Ht();
dg();
dr();
Ei();
si();
pl();
ru();
wI();
ns();
Wt();
E_();
ka();
jr();
Xg();
kr();
Pa();
l8();
$b();
Nl();
Io();
_d();
Mm();
Nu();
Xq();
Qka();
Zq();
ky();
Q0();
m8();
of();
AD();
ss();
Wu();
N1();
wm();
k_i();
exe();
zoy();
Voy();
hB();
Yoy();
Xcy();
ely();
KMe = trt = class extends NH {
  static createNew(e, t, i, r, s, o) {
    return s.createInstance(trt, null, e, t, i, r, o);
  }
  static createFromSerialized(e, t, i, r, s, o, a) {
    return o.createInstance(trt, e, t, i, r, s, a);
  }
  static createCopy(e, t, i, r, s, o, a) {
    return o.createInstance(trt, e, t, i, r, s, a);
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R, N, M, O, $, H) {
    super(u);
    this.editorPartsView = t;
    this.groupsView = i;
    this.groupsLabel = r;
    this._index = s;
    this.instantiationService = a;
    this.contextKeyService = l;
    this.telemetryService = d;
    this.keybindingService = m;
    this.menuService = p;
    this.contextMenuService = g;
    this.fileDialogService = f;
    this.editorService = A;
    this.filesConfigurationService = w;
    this.uriIdentityService = C;
    this.logService = x;
    this.editorResolverService = I;
    this.hostService = B;
    this.dialogService = R;
    this.fileService = N;
    this.experimentService = M;
    this.configurationService = O;
    this.appLayoutService = $;
    this.storageService = H;
    this._onDidFocus = this._register(new Qe());
    this.onDidFocus = this._onDidFocus.event;
    this._onWillDispose = this._register(new Qe());
    this.onWillDispose = this._onWillDispose.event;
    this._onDidModelChange = this._register(new Qe());
    this.onDidModelChange = this._onDidModelChange.event;
    this._onDidActiveEditorChange = this._register(new Qe());
    this.onDidActiveEditorChange = this._onDidActiveEditorChange.event;
    this._onDidOpenEditorFail = this._register(new Qe());
    this.onDidOpenEditorFail = this._onDidOpenEditorFail.event;
    this._onWillCloseEditor = this._register(new Qe());
    this.onWillCloseEditor = this._onWillCloseEditor.event;
    this._onDidCloseEditor = this._register(new Qe());
    this.onDidCloseEditor = this._onDidCloseEditor.event;
    this._onWillMoveEditor = this._register(new Qe());
    this.onWillMoveEditor = this._onWillMoveEditor.event;
    this._onWillOpenEditor = this._register(new Qe());
    this.onWillOpenEditor = this._onWillOpenEditor.event;
    this.suppressNextTransientClearOnFocus = false;
    this.disposedEditorsWorker = this._register(new ZFt(z => this.handleDisposedEditors(z), 0));
    this.mapEditorToPendingConfirmation = new Map();
    this.containerToolBarMenuDisposable = this._register(new uo());
    this.whenRestoredPromise = new wy();
    this.whenRestored = this.whenRestoredPromise.p;
    this._disposed = false;
    this.element = Ct("div");
    this._onDidChange = this._register(new CH());
    this.onDidChange = this._onDidChange.event;
    if (e instanceof trt) {
      this.model = this._register(e.model.clone());
    } else if (Gka(e)) {
      this.model = this._register(a.createInstance(N0i, e));
    } else {
      this.model = this._register(a.createInstance(N0i, undefined));
    }
    this.scopedContextKeyService = this._register(this.contextKeyService.createScoped(this.element));
    this.element.classList.add(...lh(["editor-group-container", this.model.isLocked ? "locked" : undefined]));
    this.registerContainerListeners();
    this.createContainerToolbar();
    this.createContainerContextMenu();
    this._register(this.instantiationService.createInstance(Yka, this.element));
    this._register(this.instantiationService.createInstance(jka, this.element, this));
    this.progressBar = this._register(new qye(this.element, VSe));
    this.progressBar.hide();
    this.scopedInstantiationService = this._register(this.instantiationService.createChild(new EA([wi, this.scopedContextKeyService], [p2, this._register(new Tpu(this.progressBar, this))])));
    this.resourceContext = this._register(this.scopedInstantiationService.createInstance(Ep));
    this.handleGroupContextKeys();
    this.titleContainer = Ct(".title");
    this.element.appendChild(this.titleContainer);
    this.titleControl = this._register(this.scopedInstantiationService.createInstance(Q1a, this.titleContainer, this.editorPartsView, this.groupsView, this, this.model));
    this.editorContainer = Ct(".editor-container");
    this.element.appendChild(this.editorContainer);
    this.editorPane = this._register(this.scopedInstantiationService.createInstance(t1a, this.element, this.editorContainer, this));
    this._onDidChange.input = this.editorPane.onDidChangeSizeConstraints;
    this.doTrackFocus();
    this.updateTitleContainer();
    this.updateContainer();
    this.updateStyles();
    (this.restoreEditors(e, o) ?? Promise.resolve()).finally(() => {
      this.whenRestoredPromise.complete();
    });
    this.registerListeners();
  }
  handleGroupContextKeys() {
    const e = this.editorPartsView.bind(ipn, this);
    const t = this.editorPartsView.bind(Uva, this);
    const i = this.editorPartsView.bind(Fau, this);
    const r = this.editorPartsView.bind(ryi, this);
    const s = this.editorPartsView.bind(PEe, this);
    const o = this.editorPartsView.bind($au, this);
    const a = this.editorPartsView.bind(Dye, this);
    const l = pkt.bindTo(this.scopedContextKeyService);
    const u = qau.bindTo(this.scopedContextKeyService);
    const d = Hau.bindTo(this.scopedContextKeyService);
    const m = this.editorPartsView.bind(ow, this);
    const p = this.editorPartsView.bind(Nef, this);
    const g = this.editorPartsView.bind(Uau, this);
    const f = this.editorPartsView.bind(Oau, this);
    const A = this.editorPartsView.bind($va, this);
    const w = this.editorPartsView.bind(Hva, this);
    const C = this.editorPartsView.bind(AQ, this);
    const x = this.editorPartsView.bind(Dnt, this);
    const I = this.editorPartsView.bind(Int, this);
    const B = this.editorPartsView.bind(qva, this);
    const R = this.editorPartsView.bind(fie, this);
    const N = this._register(new uo());
    const M = () => {
      N.clear();
      this.scopedContextKeyService.bufferChangeEvents(() => {
        const $ = this.activeEditor;
        const H = this.activeEditorPane;
        this.resourceContext.set(gp.getOriginalUri($, {
          supportSideBySide: op.PRIMARY
        }));
        Pef(x, $, this.editorResolverService);
        if ($) {
          I.set($.hasCapability(32));
          B.set($.resource?.scheme === _n.reviewChanges || $.resource?.scheme === _n.reviewPr);
          R.set($.typeId === O1.ID);
          e.set($.isDirty() && !$.isSaving());
          N.value = $.onDidChangeDirty(() => {
            e.set($.isDirty() && !$.isSaving());
          });
        } else {
          I.set(false);
          B.set(false);
          R.set(false);
          e.set(false);
        }
        if (H) {
          m.set(H.getId());
          g.set(!H.input.hasCapability(4));
          p.set(!!H.input.isReadonly());
          const W = gp.getOriginalUri(H.input, {
            supportSideBySide: op.PRIMARY
          });
          const z = gp.getOriginalUri(H.input, {
            supportSideBySide: op.SECONDARY
          });
          A.set(H.input instanceof kE && !H.input.original.isReadonly() && !!W && (this.fileService.hasProvider(W) || W.scheme === _n.untitled) && !!z && (this.fileService.hasProvider(z) || z.scheme === _n.untitled));
          f.set(!!W && this.fileService.hasProvider(W) && !this.fileService.hasCapability(W, 2048));
          const Y = H?.getId() === tla;
          C.set(Y);
          w.set(Y);
        } else {
          m.reset();
          g.reset();
          p.reset();
          A.reset();
          f.reset();
        }
      });
    };
    const O = $ => {
      switch ($.kind) {
        case 3:
          a.set(this.isLocked);
          break;
        case 8:
          i.set(this.model.isFirst(this.model.activeEditor));
          r.set(this.model.isLast(this.model.activeEditor));
          t.set(this.model.activeEditor ? this.model.isPinned(this.model.activeEditor) : false);
          s.set(this.model.activeEditor ? this.model.isSticky(this.model.activeEditor) : false);
          break;
        case 6:
          t.set(this.model.activeEditor ? this.model.isPinned(this.model.activeEditor) : false);
          s.set(this.model.activeEditor ? this.model.isSticky(this.model.activeEditor) : false);
        case 5:
        case 7:
          i.set(this.model.isFirst(this.model.activeEditor));
          r.set(this.model.isLast(this.model.activeEditor));
          break;
        case 11:
          if ($.editor && $.editor === this.model.activeEditor) {
            t.set(this.model.isPinned(this.model.activeEditor));
          }
          break;
        case 13:
          if ($.editor && $.editor === this.model.activeEditor) {
            s.set(this.model.isSticky(this.model.activeEditor));
          }
          break;
        case 4:
          l.set(this.model.selectedEditors.length > 1);
          u.set(this.model.selectedEditors.length === 2);
          d.set(this.model.selectedEditors.every(H => H.resource && (this.fileService.hasProvider(H.resource) || H.resource.scheme === _n.untitled)));
          break;
      }
      o.set(this.count);
    };
    this._register(this.onDidModelChange($ => O($)));
    this._register(this.onDidActiveEditorChange(() => M()));
    M();
    O({
      kind: 8
    });
    O({
      kind: 3
    });
  }
  registerContainerListeners() {
    this._register(ei(this.element, ir.DBLCLICK, e => {
      if (this.isEmpty) {
        zu.stop(e);
      }
    }));
    this._register(ei(this.element, ir.AUXCLICK, e => {
      if (this.isEmpty && e.button === 1) {
        zu.stop(e, true);
        this.groupsView.removeGroup(this);
      }
    }));
  }
  createContainerToolbar() {
    const e = Ct(".editor-group-container-toolbar");
    this.element.appendChild(e);
    const t = this._register(new Gf(e, {
      ariaLabel: _(3726, null),
      highlightToggledItems: true
    }));
    const i = this._register(this.menuService.createMenu(st.EmptyEditorGroup, this.scopedContextKeyService));
    const r = () => {
      this.containerToolBarMenuDisposable.value = $i(() => t.clear());
      const s = tM(i.getActions({
        arg: {
          groupId: this.id
        },
        shouldForwardArgs: true
      }), "navigation");
      for (const o of [...s.primary, ...s.secondary]) {
        const a = this.keybindingService.lookupKeybinding(o.id);
        t.push(o, {
          icon: true,
          label: false,
          keybinding: a?.getLabel()
        });
      }
    };
    r();
    this._register(i.onDidChange(r));
  }
  createContainerContextMenu() {
    this._register(ei(this.element, ir.CONTEXT_MENU, e => this.onShowContainerContextMenu(e)));
    this._register(ei(this.element, MA.Contextmenu, () => this.onShowContainerContextMenu()));
  }
  onShowContainerContextMenu(e) {
    if (!this.isEmpty) {
      return;
    }
    let t = this.element;
    if (e) {
      t = new yy(As(this.element), e);
    }
    this.contextMenuService.showContextMenu({
      menuId: st.EmptyEditorGroupContext,
      contextKeyService: this.contextKeyService,
      getAnchor: () => t,
      onHide: () => this.focus()
    });
  }
  doTrackFocus() {
    const e = this._register(CC(this.element));
    this._register(e.onDidFocus(() => {
      if (this.isEmpty) {
        this._onDidFocus.fire();
      }
    }));
    const t = i => {
      let r;
      if (I6(i)) {
        if (i.button !== 0 || Fs && i.ctrlKey) {
          return;
        }
        r = i.target;
      } else {
        r = i.initialTarget;
      }
      if (!_oe(r, "monaco-action-bar", this.titleContainer) && !_oe(r, "monaco-breadcrumb-item", this.titleContainer)) {
        setTimeout(() => {
          this.focus();
        });
      }
    };
    this._register(ei(this.titleContainer, ir.MOUSE_DOWN, i => t(i)));
    this._register(ei(this.titleContainer, MA.Tap, i => t(i)));
    this._register(this.editorPane.onDidFocus(() => {
      this._onDidFocus.fire();
    }));
  }
  updateContainer() {
    if (this.isEmpty) {
      this.tryScheduleAutoCloseEmptyGroup();
      this.element.classList.add("empty");
      this.element.tabIndex = 0;
      this.element.setAttribute("aria-label", _(3727, null, this.ariaLabel));
    } else {
      this.element.classList.remove("empty");
      this.element.removeAttribute("tabIndex");
      this.element.removeAttribute("aria-label");
    }
    this.updateStyles();
  }
  shouldAutoCloseEmptyGroup() {
    return !!this.isEmpty && !this.active && !(this.groupsView.groups.length <= 1) && !!this.groupsView.partOptions.closeEmptyGroups && !!Bh(this.storageService) && !!this.model.hasHadEditors;
  }
  tryScheduleAutoCloseEmptyGroup() {
    if (this.shouldAutoCloseEmptyGroup()) {
      Promise.resolve().then(() => {
        if (!this.disposed && !!this.shouldAutoCloseEmptyGroup()) {
          this.groupsView.removeGroup(this);
        }
      });
      return true;
    } else {
      return false;
    }
  }
  updateTitleContainer() {
    this.titleContainer.classList.toggle("tabs", this.groupsView.partOptions.showTabs === "multiple");
    this.titleContainer.classList.toggle("show-file-icons", this.groupsView.partOptions.showIcons);
  }
  updateComposerEditorContainer() {
    const e = this.editors.some(i => i.typeId === h3);
    const t = this.element.classList.contains("has-composer-editor");
    this.element.classList.toggle("has-composer-editor", e);
    if (t !== e) {
      this.relayout();
    }
  }
  restoreEditors(e, t) {
    if (this.count === 0) {
      return;
    }
    let i;
    if (e instanceof trt) {
      i = eDf(e);
    } else {
      i = Object.create(null);
    }
    const r = this.model.activeEditor;
    if (!r) {
      return;
    }
    i.pinned = this.model.isPinned(r);
    i.sticky = this.model.isSticky(r);
    i.preserveFocus = true;
    const s = {
      preserveWindowOrder: true,
      skipTitleUpdate: true
    };
    const o = _C();
    const a = this.doShowEditor(r, {
      active: true,
      isNew: false
    }, i, s).then(() => {
      if (this.groupsView.activeGroup === this && o && zP(o) && !t?.preserveFocus) {
        this.focus();
      }
    });
    this.titleControl.openEditors(this.editors);
    this.updateComposerEditorContainer();
    return a;
  }
  registerListeners() {
    this._register(this.model.onDidModelChange(e => this.onDidGroupModelChange(e)));
    this._register(this.groupsView.onDidChangeEditorPartOptions(e => this.onDidChangeEditorPartOptions(e)));
    this._register(this.groupsView.onDidVisibilityChange(e => this.onDidVisibilityChange(e)));
    this._register(this.onDidFocus(() => this.onDidGainFocus()));
    this._register(this.configurationService.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration("cursor.enable_agent_window_ide_unification_setting")) {
        this.tryScheduleAutoCloseEmptyGroup();
      }
    }));
  }
  onDidGroupModelChange(e) {
    this._onDidModelChange.fire(e);
    switch (e.kind) {
      case 3:
        this.element.classList.toggle("locked", this.isLocked);
        break;
      case 4:
        this.onDidChangeEditorSelection();
        break;
      case 5:
      case 6:
      case 7:
        this.updateComposerEditorContainer();
        break;
    }
    if (e.editor) {
      switch (e.kind) {
        case 5:
          if (Poy(e)) {
            this.onDidOpenEditor(e.editor, e.editorIndex);
          }
          break;
        case 6:
          if (Noy(e)) {
            this.handleOnDidCloseEditor(e.editor, e.editorIndex, e.context, e.sticky);
          }
          break;
        case 15:
          this.onWillDisposeEditor(e.editor);
          break;
        case 14:
          this.onDidChangeEditorDirty(e.editor);
          break;
        case 12:
          this.onDidChangeEditorTransient(e.editor);
          break;
        case 9:
          this.onDidChangeEditorLabel(e.editor);
          break;
      }
    }
  }
  onDidOpenEditor(e, t) {
    this.telemetryService.publicLog("editorOpened", this.toEditorTelemetryDescriptor(e));
    this.updateContainer();
  }
  handleOnDidCloseEditor(e, t, i, r) {
    this._onWillCloseEditor.fire({
      groupId: this.id,
      editor: e,
      context: i,
      index: t,
      sticky: r
    });
    const s = [e];
    if (e instanceof O1) {
      s.push(e.primary, e.secondary);
    }
    for (const o of s) {
      if (this.canDispose(o)) {
        o.dispose();
      }
    }
    this.updateContainer();
    this._onDidCloseEditor.fire({
      groupId: this.id,
      editor: e,
      context: i,
      index: t,
      sticky: r
    });
  }
  canDispose(e) {
    for (const t of this.editorPartsView.groups) {
      if (t instanceof trt && t.model.contains(e, {
        strictEquals: true,
        supportSideBySide: op.ANY
      })) {
        return false;
      }
    }
    return true;
  }
  toResourceTelemetryDescriptor(e) {
    if (!e) {
      return;
    }
    const t = e ? e.scheme === _n.file ? e.fsPath : e.path : undefined;
    if (!t) {
      return;
    }
    let i = hk(e);
    const r = i.indexOf("?");
    i = r !== -1 ? i.substr(0, r) : i;
    return {
      mimeType: new X$e(Qpu(e).join(", ")),
      scheme: e.scheme,
      ext: i,
      path: VC(t)
    };
  }
  toEditorTelemetryDescriptor(e) {
    const t = e.getTelemetryDescriptor();
    const i = gp.getOriginalUri(e, {
      supportSideBySide: op.BOTH
    });
    if (je.isUri(i)) {
      t.resource = this.toResourceTelemetryDescriptor(i);
      return t;
    } else {
      if (i) {
        if (i.primary) {
          t.resource = this.toResourceTelemetryDescriptor(i.primary);
        }
        if (i.secondary) {
          t.resourceSecondary = this.toResourceTelemetryDescriptor(i.secondary);
        }
      }
      return t;
    }
  }
  onWillDisposeEditor(e) {
    this.disposedEditorsWorker.work(e);
  }
  handleDisposedEditors(e) {
    let t;
    const i = [];
    for (const r of e) {
      const s = this.model.findEditor(r);
      if (!s) {
        continue;
      }
      const o = s[0];
      if (o.isDisposed()) {
        if (this.model.isActive(o)) {
          t = o;
        } else {
          i.push(o);
        }
      }
    }
    for (const r of i) {
      this.doCloseEditor(r, true);
    }
    if (t) {
      this.doCloseEditor(t, true);
    }
  }
  onDidChangeEditorPartOptions(e) {
    this.updateTitleContainer();
    this.titleControl.updateOptions(e.oldPartOptions, e.newPartOptions);
    if (e.oldPartOptions.showTabs !== e.newPartOptions.showTabs || e.oldPartOptions.tabHeight !== e.newPartOptions.tabHeight || e.oldPartOptions.showTabs === "multiple" && e.oldPartOptions.pinnedTabsOnSeparateRow !== e.newPartOptions.pinnedTabsOnSeparateRow) {
      this.relayout();
      if (this.model.activeEditor) {
        this.titleControl.openEditors(this.model.getEditors(1));
      }
    }
    this.updateStyles();
    if (e.oldPartOptions.enablePreview && !e.newPartOptions.enablePreview && this.model.previewEditor) {
      this.pinEditor(this.model.previewEditor);
    }
    if (e.oldPartOptions.closeEmptyGroups !== e.newPartOptions.closeEmptyGroups) {
      this.tryScheduleAutoCloseEmptyGroup();
    }
  }
  onDidChangeEditorDirty(e) {
    this.pinEditor(e);
    this.titleControl.updateEditorDirty(e);
  }
  onDidChangeEditorTransient(e) {
    if (!this.model.isTransient(e) && !this.groupsView.partOptions.enablePreview) {
      this.pinEditor(e);
    }
  }
  onDidChangeEditorLabel(e) {
    this.titleControl.updateEditorLabel(e);
  }
  onDidChangeEditorSelection() {
    this.titleControl.updateEditorSelections();
  }
  onDidVisibilityChange(e) {
    this.editorPane.setVisible(e);
  }
  onDidGainFocus() {
    if (this.activeEditor) {
      this.model.setTransient(this.activeEditor, false);
    }
  }
  get index() {
    return this._index;
  }
  get label() {
    if (this.groupsLabel) {
      return _(3728, null, this.groupsLabel, this._index + 1);
    } else {
      return _(3729, null, this._index + 1);
    }
  }
  get ariaLabel() {
    if (this.groupsLabel) {
      return _(3730, null, this.groupsLabel, this._index + 1);
    } else {
      return _(3731, null, this._index + 1);
    }
  }
  get disposed() {
    return this._disposed;
  }
  get isEmpty() {
    return this.count === 0;
  }
  get titleHeight() {
    return this.titleControl.getHeight();
  }
  get leftActionsContainer() {
    return this.titleControl.leftActionsContainer;
  }
  notifyIndexChanged(e) {
    if (this._index !== e) {
      this._index = e;
      this.model.setIndex(e);
    }
  }
  notifyLabelChanged(e) {
    if (this.groupsLabel !== e) {
      this.groupsLabel = e;
      this.model.setLabel(e);
    }
  }
  setActive(e) {
    this.active = e;
    if (!e && this.activeEditor && this.selectedEditors.length > 1) {
      this.setSelection(this.activeEditor, []);
    }
    this.element.classList.toggle("active", e);
    this.element.classList.toggle("inactive", !e);
    this.titleControl.setActive(e);
    this.updateStyles();
    this.model.setActive(undefined);
    if (!e) {
      this.tryScheduleAutoCloseEmptyGroup();
    }
  }
  get id() {
    return this.model.id;
  }
  get windowId() {
    return this.groupsView.windowId;
  }
  get editors() {
    return this.model.getEditors(1);
  }
  get count() {
    return this.model.count;
  }
  get stickyCount() {
    return this.model.stickyCount;
  }
  get activeEditorPane() {
    if (this.editorPane) {
      return this.editorPane.activeEditorPane ?? undefined;
    } else {
      return undefined;
    }
  }
  get activeEditor() {
    return this.model.activeEditor;
  }
  get selectedEditors() {
    return this.model.selectedEditors;
  }
  get previewEditor() {
    return this.model.previewEditor;
  }
  isPinned(e) {
    return this.model.isPinned(e);
  }
  isSticky(e) {
    return this.model.isSticky(e);
  }
  isSelected(e) {
    return this.model.isSelected(e);
  }
  isTransient(e) {
    return this.model.isTransient(e);
  }
  isActive(e) {
    return this.model.isActive(e);
  }
  async setSelection(e, t) {
    if (this.isActive(e)) {
      this.model.setSelection(e, t);
    } else {
      await this.openEditor(e, {
        activation: X4.ACTIVATE
      }, {
        inactiveSelection: t
      });
    }
  }
  contains(e, t) {
    return this.model.contains(e, t);
  }
  getEditors(e, t) {
    return this.model.getEditors(e, t);
  }
  findEditors(e, t) {
    const i = this.uriIdentityService.asCanonicalUri(e);
    return this.getEditors(1).filter(r => {
      if (r.resource && Zc(r.resource, i)) {
        return true;
      }
      if (t?.supportSideBySide === op.PRIMARY || t?.supportSideBySide === op.ANY) {
        const s = gp.getCanonicalUri(r, {
          supportSideBySide: op.PRIMARY
        });
        if (s && Zc(s, i)) {
          return true;
        }
      }
      if (t?.supportSideBySide === op.SECONDARY || t?.supportSideBySide === op.ANY) {
        const s = gp.getCanonicalUri(r, {
          supportSideBySide: op.SECONDARY
        });
        if (s && Zc(s, i)) {
          return true;
        }
      }
      return false;
    });
  }
  getEditorByIndex(e) {
    return this.model.getEditorByIndex(e);
  }
  getIndexOfEditor(e) {
    return this.model.indexOf(e);
  }
  isFirst(e) {
    return this.model.isFirst(e);
  }
  isLast(e) {
    return this.model.isLast(e);
  }
  focus() {
    if (this.activeEditorPane) {
      this.activeEditorPane.focus();
    } else {
      this.element.focus();
    }
    this._onDidFocus.fire();
  }
  pinEditor(e = this.activeEditor || undefined) {
    if (e && !this.model.isPinned(e)) {
      const t = this.model.pin(e);
      if (t) {
        this.titleControl.pinEditor(t);
      }
    }
  }
  stickEditor(e = this.activeEditor || undefined) {
    this.doStickEditor(e, true);
  }
  unstickEditor(e = this.activeEditor || undefined) {
    this.doStickEditor(e, false);
  }
  doStickEditor(e, t) {
    if (e && this.model.isSticky(e) !== t) {
      const i = this.getIndexOfEditor(e);
      const r = t ? this.model.stick(e) : this.model.unstick(e);
      if (!r) {
        return;
      }
      const s = this.getIndexOfEditor(r);
      if (s !== i) {
        this.titleControl.moveEditor(r, i, s, true);
      }
      if (t) {
        this.titleControl.stickEditor(r);
      } else {
        this.titleControl.unstickEditor(r);
      }
    }
  }
  async openEditor(e, t, i) {
    return this.doOpenEditor(e, t, {
      ...i,
      supportSideBySide: op.BOTH
    });
  }
  async doOpenEditor(e, t, i) {
    if (!e || e.isDisposed()) {
      return;
    }
    this._onWillOpenEditor.fire({
      editor: e,
      groupId: this.id
    });
    const r = t?.sticky || !this.groupsView.partOptions.enablePreview && !t?.transient || e.isDirty() || (t?.pinned ?? typeof t?.index == "number") || typeof t?.index == "number" && this.model.isSticky(t.index) || e.hasCapability(512);
    const s = {
      index: t ? t.index : undefined,
      pinned: r,
      sticky: t?.sticky || typeof t?.index == "number" && this.model.isSticky(t.index),
      transient: !!t?.transient,
      inactiveSelection: i?.inactiveSelection,
      active: this.count === 0 || !t || !t.inactive,
      supportSideBySide: i?.supportSideBySide
    };
    if (!s.active && !s.pinned && this.model.activeEditor && !this.model.isPinned(this.model.activeEditor)) {
      s.active = true;
    }
    let o = false;
    let a = false;
    if (t?.silentOpen) {
      o = false;
      a = false;
    } else if (t?.activation === X4.ACTIVATE) {
      o = true;
    } else if (t?.activation === X4.RESTORE) {
      a = true;
    } else if (t?.activation === X4.PRESERVE) {
      o = false;
      a = false;
    } else if (s.active) {
      o = !t || !t.preserveFocus;
      a = !o;
    }
    if (typeof s.index == "number") {
      const m = this.model.indexOf(e);
      if (m !== -1 && m !== s.index) {
        this.doMoveEditorInsideGroup(e, s);
      }
    }
    const {
      editor: l,
      isNew: u
    } = this.model.openEditor(e, s);
    if (u && this.count === 1 && this.editorPartsView.groups.length > 1 && l.editorId && this.groupsView.partOptions.autoLockGroups?.has(l.editorId)) {
      this.lock(true);
    }
    const d = this.doShowEditor(l, {
      active: !!s.active,
      isNew: u
    }, t, i);
    if (o) {
      this.groupsView.activateGroup(this);
    } else if (a) {
      this.groupsView.restoreGroup(this);
    }
    return d;
  }
  doShowEditor(e, t, i, r) {
    let s;
    if (t.active) {
      s = (async () => {
        const {
          pane: o,
          changed: a,
          cancelled: l,
          error: u
        } = await this.editorPane.openEditor(e, i, r, {
          newInGroup: t.isNew
        });
        if (!l) {
          if (a) {
            this._onDidActiveEditorChange.fire({
              editor: e
            });
          }
          if (u) {
            this._onDidOpenEditorFail.fire(e);
          }
          if (!o && this.activeEditor === e) {
            this.doCloseEditor(e, i?.preserveFocus, {
              fromError: true
            });
          }
          return o;
        }
      })();
    } else {
      s = Promise.resolve(undefined);
    }
    if (!r?.skipTitleUpdate) {
      this.titleControl.openEditor(e, r);
    }
    return s;
  }
  async openEditors(e) {
    const t = lh(e).filter(({
      editor: a
    }) => !a.isDisposed());
    const i = t.at(0);
    if (!i) {
      return;
    }
    const r = {
      supportSideBySide: op.BOTH
    };
    await this.doOpenEditor(i.editor, i.options, r);
    const s = t.slice(1);
    const o = this.getIndexOfEditor(i.editor) + 1;
    await ib.settled(s.map(({
      editor: a,
      options: l
    }, u) => this.doOpenEditor(a, {
      ...l,
      inactive: true,
      pinned: true,
      index: o + u
    }, {
      ...r,
      skipTitleUpdate: true
    })));
    this.titleControl.openEditors(s.map(({
      editor: a
    }) => a));
    return this.editorPane.activeEditorPane ?? undefined;
  }
  moveEditors(e, t) {
    const i = {
      skipTitleUpdate: this !== t
    };
    let r = false;
    const s = new Set();
    for (const {
      editor: o,
      options: a
    } of e) {
      if (this.moveEditor(o, t, a, i)) {
        s.add(o);
      } else {
        r = true;
      }
    }
    if (i.skipTitleUpdate) {
      t.titleControl.openEditors(Array.from(s));
      this.titleControl.closeEditors(Array.from(s));
    }
    return !r;
  }
  moveEditor(e, t, i, r) {
    if (this === t) {
      this.doMoveEditorInsideGroup(e, i);
      return true;
    } else {
      return this.doMoveOrCopyEditorAcrossGroups(e, t, i, {
        ...r,
        keepCopy: false
      });
    }
  }
  doMoveEditorInsideGroup(e, t) {
    const i = t ? t.index : undefined;
    if (typeof i != "number") {
      return;
    }
    const r = this.model.indexOf(e);
    const s = this.model.getEditorByIndex(r);
    if (s) {
      if (r !== i) {
        const o = this.model.stickyCount;
        this.model.moveEditor(s, i);
        this.model.pin(s);
        this.titleControl.moveEditor(s, r, i, o !== this.model.stickyCount);
        this.titleControl.pinEditor(s);
      }
      if (t?.sticky) {
        this.stickEditor(s);
      }
    }
  }
  doMoveOrCopyEditorAcrossGroups(e, t, i, r) {
    const s = r?.keepCopy;
    if (!s || e.hasCapability(8)) {
      const a = e.canMove(this.id, t.id);
      if (typeof a == "string") {
        this.dialogService.error(a, _(3732, null));
        return false;
      }
    }
    const o = eDf(this, e, {
      ...i,
      pinned: true,
      sticky: i?.sticky ?? (!s && this.model.isSticky(e))
    });
    if (!s) {
      this._onWillMoveEditor.fire({
        groupId: this.id,
        editor: e,
        target: t.id
      });
    }
    t.doOpenEditor(s ? e.copy() : e, o, r);
    if (!s) {
      this.doCloseEditor(e, true, {
        ...r,
        context: iV.MOVE
      });
    }
    return true;
  }
  copyEditors(e, t) {
    const i = {
      skipTitleUpdate: this !== t
    };
    for (const {
      editor: r,
      options: s
    } of e) {
      this.copyEditor(r, t, s, i);
    }
    if (i.skipTitleUpdate) {
      const r = e.map(({
        editor: s
      }) => s);
      t.titleControl.openEditors(r);
    }
  }
  copyEditor(e, t, i, r) {
    if (this === t) {
      this.doMoveEditorInsideGroup(e, i);
    } else {
      this.doMoveOrCopyEditorAcrossGroups(e, t, i, {
        ...r,
        keepCopy: true
      });
    }
  }
  async closeEditor(e = this.activeEditor || undefined, t) {
    return this.doCloseEditorWithConfirmationHandling(e, t);
  }
  async doCloseEditorWithConfirmationHandling(e = this.activeEditor || undefined, t, i) {
    if (!e || (await this.handleCloseConfirmation([e]))) {
      return false;
    } else {
      this.doCloseEditor(e, t?.preserveFocus, i);
      return true;
    }
  }
  doCloseEditor(e, t = this.groupsView.activeGroup !== this, i) {
    if (!i?.skipTitleUpdate) {
      this.titleControl.beforeCloseEditor(e);
    }
    if (this.model.isActive(e)) {
      this.doCloseActiveEditor(t, i);
    } else {
      this.doCloseInactiveEditor(e, i);
    }
    if (!i?.skipTitleUpdate) {
      this.titleControl.closeEditor(e);
    }
  }
  doCloseActiveEditor(e = this.groupsView.activeGroup !== this, t) {
    const i = this.activeEditor;
    const r = !e && this.shouldRestoreFocus(this.element);
    const s = this.groupsView.partOptions.closeEmptyGroups;
    if (s && this.active && this.count === 1) {
      const l = this.groupsView.getGroups(1)[1];
      if (l) {
        if (r) {
          l.focus();
        } else {
          this.groupsView.activateGroup(l, true);
        }
      }
    }
    if (i) {
      this.model.closeEditor(i, t?.context);
    }
    const o = this.model.activeEditor;
    if (o) {
      let a;
      if (e && this.groupsView.activeGroup !== this) {
        a = X4.PRESERVE;
      }
      const l = {
        preserveFocus: e,
        activation: a,
        ignoreError: t?.fromError
      };
      const u = {
        preserveWindowOrder: true
      };
      this.doOpenEditor(o, l, u);
    } else {
      if (i) {
        this.editorPane.closeEditor(i);
      }
      if (r && !s) {
        this.focus();
      }
      this._onDidActiveEditorChange.fire({
        editor: undefined
      });
      if (s) {
        this.groupsView.removeGroup(this, e);
      }
    }
  }
  shouldRestoreFocus(e) {
    const t = _C();
    if (t === e.ownerDocument.body) {
      return true;
    } else {
      return HS(t, e);
    }
  }
  doCloseInactiveEditor(e, t) {
    this.model.closeEditor(e, t?.context);
  }
  async handleCloseConfirmation(e, t = false) {
    if (!e.length) {
      return false;
    }
    const i = e.shift();
    let r = this.mapEditorToPendingConfirmation.get(i);
    if (!r) {
      if (t) {
        i.revert(this.id);
        r = Promise.resolve(false);
      } else {
        r = this.doHandleCloseConfirmation(i);
        this.mapEditorToPendingConfirmation.set(i, r);
      }
    }
    let s;
    try {
      s = await r;
    } finally {
      this.mapEditorToPendingConfirmation.delete(i);
    }
    return s || this.handleCloseConfirmation(e);
  }
  async doHandleCloseConfirmation(e, t, i = false) {
    if (!this.shouldConfirmClose(e) || e instanceof O1 && this.model.contains(e.primary) || this.editorPartsView.groups.some(a => {
      if (a === this) {
        return false;
      }
      const l = a;
      return !!l.contains(e, {
        supportSideBySide: op.BOTH
      }) || !!(e instanceof O1) && !!l.contains(e.primary);
    })) {
      return false;
    }
    let r = 2;
    let s = 1;
    let o = false;
    if (!e.hasCapability(4) && !t?.skipAutoSave && !e.closeHandler) {
      if (this.filesConfigurationService.getAutoSaveMode(e).mode === 3) {
        o = true;
        r = 0;
        s = 3;
      } else if (kw && (Sc || xv) && this.filesConfigurationService.getAutoSaveMode(e).mode === 4) {
        o = true;
        r = 0;
        s = 4;
      }
    }
    if (!o) {
      if (!this.activeEditor || !this.activeEditor.matches(e)) {
        await this.doOpenEditor(e);
      }
      await this.hostService.focus(As(this.element));
      if (typeof e.closeHandler?.confirm == "function") {
        r = await e.closeHandler.confirm([{
          editor: e,
          groupId: this.id
        }]);
      } else {
        let a;
        if (e instanceof O1) {
          a = e.primary.getName();
        } else {
          a = e.getName();
        }
        r = await this.fileDialogService.showSaveConfirm([a]);
      }
    }
    if (!e.closeHandler && !this.shouldConfirmClose(e)) {
      return r === 2;
    }
    switch (r) {
      case 0:
        if (!(await e.save(this.id, {
          reason: s
        })) && o) {
          return this.doHandleCloseConfirmation(e, {
            skipAutoSave: true
          });
        } else {
          return e.isDirty();
        }
      case 1:
        try {
          await e.revert(this.id);
          return e.isDirty();
        } catch (a) {
          this.logService.error(a);
          await e.revert(this.id, {
            soft: true
          });
          return e.isDirty();
        }
      case 2:
        return true;
    }
  }
  shouldConfirmClose(e) {
    if (e.closeHandler) {
      return e.closeHandler.showConfirm();
    } else {
      return e.isDirty() && !e.isSaving();
    }
  }
  async closeEditors(e, t) {
    if (this.isEmpty) {
      return true;
    }
    const i = this.doGetEditorsToClose(e);
    if (await this.handleCloseConfirmation(i.slice(0))) {
      return false;
    } else {
      this.doCloseEditors(i, t);
      return true;
    }
  }
  doGetEditorsToClose(e) {
    if (Array.isArray(e)) {
      return e;
    }
    const t = e;
    const i = typeof t.direction == "number";
    let r = this.model.getEditors(i ? 1 : 0, t);
    if (t.savedOnly) {
      r = r.filter(s => !s.isDirty() || s.isSaving());
    } else if (i && t.except) {
      r = t.direction === 0 ? r.slice(0, this.model.indexOf(t.except, r)) : r.slice(this.model.indexOf(t.except, r) + 1);
    } else if (t.except) {
      r = r.filter(s => t.except && !s.matches(t.except));
    }
    return r;
  }
  doCloseEditors(e, t) {
    let i = false;
    for (const r of e) {
      if (this.isActive(r)) {
        i = true;
      } else {
        this.doCloseInactiveEditor(r);
      }
    }
    if (i) {
      this.doCloseActiveEditor(t?.preserveFocus);
    }
    if (e.length) {
      this.titleControl.closeEditors(e);
    }
  }
  async closeAllEditors(e, t = false) {
    if (this.isEmpty) {
      if (this.groupsView.partOptions.closeEmptyGroups) {
        this.groupsView.removeGroup(this);
      }
      return true;
    }
    let i = this.model.getEditors(0, e);
    if (e?.excludeConfirming) {
      i = i.filter(s => !this.shouldConfirmClose(s));
    }
    if (await this.handleCloseConfirmation(i, t)) {
      return false;
    } else {
      this.doCloseAllEditors(e);
      return true;
    }
  }
  doCloseAllEditors(e) {
    let t = this.model.getEditors(1, e);
    if (e?.excludeConfirming) {
      t = t.filter(r => !this.shouldConfirmClose(r));
    }
    const i = [];
    for (const r of t) {
      if (!this.isActive(r)) {
        this.doCloseInactiveEditor(r);
      }
      i.push(r);
    }
    if (this.activeEditor && i.includes(this.activeEditor)) {
      this.doCloseActiveEditor();
    }
    if (i.length) {
      this.titleControl.closeEditors(i);
    }
  }
  async replaceEditors(e) {
    let t;
    const i = [];
    for (let {
      editor: r,
      replacement: s,
      forceReplaceDirty: o,
      options: a
    } of e) {
      const l = this.getIndexOfEditor(r);
      if (l >= 0) {
        const u = this.isActive(r);
        if (a) {
          a.index = l;
        } else {
          a = {
            index: l
          };
        }
        a.inactive = !u;
        a.pinned = a.pinned ?? true;
        const d = {
          editor: r,
          replacement: s,
          forceReplaceDirty: o,
          options: a
        };
        if (u) {
          t = d;
        } else {
          i.push(d);
        }
      }
    }
    for (const {
      editor: r,
      replacement: s,
      forceReplaceDirty: o,
      options: a
    } of i) {
      await this.doOpenEditor(s, a);
      if (!r.matches(s)) {
        let l = false;
        if (o) {
          this.doCloseEditor(r, true, {
            context: iV.REPLACE
          });
          l = true;
        } else {
          l = await this.doCloseEditorWithConfirmationHandling(r, {
            preserveFocus: true
          }, {
            context: iV.REPLACE
          });
        }
        if (!l) {
          return;
        }
      }
    }
    if (t) {
      const r = this.doOpenEditor(t.replacement, t.options);
      if (!t.editor.matches(t.replacement)) {
        if (t.forceReplaceDirty) {
          this.doCloseEditor(t.editor, true, {
            context: iV.REPLACE
          });
        } else {
          await this.doCloseEditorWithConfirmationHandling(t.editor, {
            preserveFocus: true
          }, {
            context: iV.REPLACE
          });
        }
      }
      await r;
    }
  }
  get isLocked() {
    return this.model.isLocked;
  }
  lock(e) {
    this.model.lock(e);
  }
  createEditorActions(e) {
    let t = {
      primary: [],
      secondary: []
    };
    let i;
    const r = this.activeEditorPane;
    if (r instanceof fD) {
      const s = r.scopedContextKeyService ?? this.scopedContextKeyService;
      const o = e.add(this.menuService.createMenu(st.EditorTitle, s, {
        emitEventsForSubmenuChanges: true,
        eventDebounceDelay: 0
      }));
      i = o.onDidChange;
      const a = (l, u) => u === "navigation" && l.actions.length <= 1;
      t = tM(o.getActions({
        arg: this.resourceContext.get(),
        shouldForwardArgs: true
      }), "navigation", a);
    } else {
      const s = e.add(new Qe());
      i = s.event;
      e.add(this.onDidActiveEditorChange(() => s.fire()));
    }
    return {
      actions: t,
      onDidChange: i
    };
  }
  updateStyles() {
    const e = this.isEmpty;
    if (e) {
      this.element.style.backgroundColor = this.getColor(T1f) || "";
    } else {
      this.element.style.backgroundColor = "";
    }
    const t = this.getColor(B1f) || this.getColor(Du);
    if (!e && t) {
      this.titleContainer.classList.add("title-border-bottom");
      this.titleContainer.style.setProperty("--title-border-bottom-color", t);
    } else {
      this.titleContainer.classList.remove("title-border-bottom");
      this.titleContainer.style.removeProperty("--title-border-bottom-color");
    }
    const {
      showTabs: i
    } = this.groupsView.partOptions;
    this.titleContainer.style.backgroundColor = this.getColor(i === "multiple" ? Lmu : D1f) || "";
    if (this.editorContainer) {
      this.editorContainer.style.backgroundColor = this.getColor(Wm) || "";
    }
  }
  get minimumWidth() {
    return this.editorPane.minimumWidth;
  }
  get minimumHeight() {
    return this.editorPane.minimumHeight;
  }
  get maximumWidth() {
    return this.editorPane.maximumWidth;
  }
  get maximumHeight() {
    return this.editorPane.maximumHeight;
  }
  get preferredWidth() {
    if (this.groupsView.groupOnlyContainsComposerEditors && this.groupsView.groupOnlyContainsComposerEditors(this)) {
      return lun;
    }
  }
  get preferredHeight() {}
  get proportionalLayout() {
    if (this.groupsView.groupOnlyContainsComposerEditors && this.groupsView.groupOnlyContainsComposerEditors(this)) {
      return false;
    } else if (this.lastLayout) {
      return this.lastLayout.width !== this.minimumWidth && this.lastLayout.height !== this.minimumHeight;
    } else {
      return true;
    }
  }
  layout(e, t, i, r) {
    this.lastLayout = {
      width: e,
      height: t,
      top: i,
      left: r
    };
    this.element.classList.toggle("max-height-478px", t <= 478);
    const s = this.titleControl.layout({
      container: new Lu(e, t),
      available: new Lu(e, t - this.editorPane.minimumHeight)
    });
    this.progressBar.getContainer().style.top = `${Math.max(this.titleHeight.offset - 2, 0)}px`;
    const o = Math.max(0, t - s.height);
    this.editorContainer.style.height = `${o}px`;
    this.editorPane.layout({
      width: e,
      height: o,
      top: i + s.height,
      left: r
    });
  }
  relayout() {
    if (this.lastLayout) {
      const {
        width: e,
        height: t,
        top: i,
        left: r
      } = this.lastLayout;
      this.layout(e, t, i, r);
    }
  }
  setBoundarySashes(e) {
    this.editorPane.setBoundarySashes(e);
  }
  toJSON() {
    return this.model.serialize();
  }
  dispose() {
    this._disposed = true;
    this._onWillDispose.fire();
    super.dispose();
  }
};
KMe = trt = __decorate([__param(6, ln), __param(7, wi), __param(8, bo), __param(9, ea), __param(10, mo), __param(11, xd), __param(12, kc), __param(13, oy), __param(14, yi), __param(15, IC), __param(16, xl), __param(17, Rr), __param(18, vD), __param(19, wd), __param(20, Ml), __param(21, Gr), __param(22, Tl), __param(23, Fn), __param(24, xM), __param(25, Hi)], KMe);
