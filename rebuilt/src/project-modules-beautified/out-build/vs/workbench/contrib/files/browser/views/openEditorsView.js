"use strict";

// Module: out-build/vs/workbench/contrib/files/browser/views/openEditorsView.js
// Offset: 32415187 (bundle byte offset)
// Size: 17740 bytes
_oy();
Ht();
vr();
nl();
ri();
pl();
Wt();
od();
Ei();
ka();
Nu();
Tka();
gD();
L0i();
si();
Io();
Nl();
Rf();
zF();
Ov();
Pa();
rt();
dr();
UMe();
Mm();
sN();
A8();
nk();
dz();
U0();
ZVe();
lP();
N1();
jh();
Fc();
unt();
qi();
hs();
zr();
Yr();
iu();
SAu();
Id();
ns();
fCi = Ct;
iwe = class extends BT {
  static {
    gCi = this;
  }
  static {
    this.DEFAULT_VISIBLE_OPEN_EDITORS = 9;
  }
  static {
    this.DEFAULT_MIN_VISIBLE_OPEN_EDITORS = 0;
  }
  static {
    this.ID = "workbench.explorer.openEditorsView";
  }
  static {
    this.NAME = dt(8105, "Open Editors");
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A) {
    super(e, a, r, o, l, i, t, f, u, m);
    this.editorGroupService = s;
    this.telemetryService = d;
    this.workingCopyService = p;
    this.filesConfigurationService = g;
    this.fileService = A;
    this.needsRefresh = false;
    this.elements = [];
    this.blockFocusActiveEditorTracking = false;
    this.structuralRefreshDelay = 0;
    this.sortOrder = o.getValue("explorer.openEditors.sortOrder");
    this.registerUpdateEvents();
    this._register(this.configurationService.onDidChangeConfiguration(w => this.onConfigurationChange(w)));
    this._register(this.workingCopyService.onDidChangeDirty(w => this.updateDirtyIndicator(w)));
  }
  registerUpdateEvents() {
    const e = () => {
      if (!this.isBodyVisible() || !this.list) {
        this.needsRefresh = true;
        return;
      }
      this.listRefreshScheduler?.schedule(this.structuralRefreshDelay);
    };
    const t = this._register(new mp());
    const i = r => {
      const s = r.onDidModelChange(o => {
        if (this.listRefreshScheduler?.isScheduled()) {
          return;
        }
        if (!this.isBodyVisible() || !this.list) {
          this.needsRefresh = true;
          return;
        }
        const a = this.getIndex(r, o.editor);
        switch (o.kind) {
          case 8:
            this.focusActiveEditor();
            break;
          case 1:
          case 2:
            if (a >= 0) {
              this.list.splice(a, 1, [r]);
            }
            break;
          case 14:
          case 13:
          case 10:
          case 11:
          case 9:
            this.list.splice(a, 1, [new N2(o.editor, r)]);
            this.focusActiveEditor();
            break;
          case 5:
          case 7:
          case 6:
            e();
            break;
        }
      });
      t.set(r.id, s);
    };
    this.editorGroupService.groups.forEach(r => i(r));
    this._register(this.editorGroupService.onDidAddGroup(r => {
      i(r);
      e();
    }));
    this._register(this.editorGroupService.onDidMoveGroup(() => e()));
    this._register(this.editorGroupService.onDidChangeActiveGroup(() => this.focusActiveEditor()));
    this._register(this.editorGroupService.onDidRemoveGroup(r => {
      t.deleteAndDispose(r.id);
      e();
    }));
  }
  renderHeaderTitle(e) {
    super.renderHeaderTitle(e, this.title);
    const t = Rt(e, fCi(".open-editors-dirty-count-container"));
    this.dirtyCountElement = Rt(t, fCi(".dirty-count.monaco-count-badge.long"));
    this.dirtyCountElement.style.backgroundColor = zo(Bte);
    this.dirtyCountElement.style.color = zo(ESe);
    this.dirtyCountElement.style.border = `1px solid ${zo(Du)}`;
    this.updateDirtyIndicator();
  }
  renderBody(e) {
    super.renderBody(e);
    e.classList.add("open-editors");
    e.classList.add("show-file-icons");
    const t = new j1a();
    if (this.list) {
      this.list.dispose();
    }
    if (this.listLabels) {
      this.listLabels.clear();
    }
    this.dnd = new xAu(this.sortOrder, this.instantiationService, this.editorGroupService);
    this.listLabels = this.instantiationService.createInstance(c5, {
      onDidChangeVisibility: this.onDidChangeBodyVisibility
    });
    this.list = this.instantiationService.createInstance(tQ, "OpenEditors", e, t, [new kAu(this.keybindingService, this.instantiationService), new EAu(this.listLabels, this.instantiationService, this.keybindingService, this.configurationService)], {
      identityProvider: {
        getId: s => s instanceof N2 ? s.getId() : s.id.toString()
      },
      dnd: this.dnd,
      overrideStyles: this.getLocationBasedColors().listOverrideStyles,
      accessibilityProvider: new SOf()
    });
    this._register(this.list);
    this._register(this.listLabels);
    let i = [];
    this.listRefreshScheduler = this._register(new Hu(() => {
      if (!this.list) {
        return;
      }
      i = Bo(i);
      const s = this.list.length;
      const o = this.getElements();
      this.list.splice(0, this.list.length, o);
      this.focusActiveEditor();
      if (s !== this.list.length) {
        this.updateSize();
      }
      this.needsRefresh = false;
      if (this.sortOrder === "alphabetical" || this.sortOrder === "fullPath") {
        o.forEach(a => {
          if (a instanceof N2) {
            i.push(a.editor.onDidChangeLabel(() => this.listRefreshScheduler?.schedule()));
          }
        });
      }
    }, this.structuralRefreshDelay));
    this.updateSize();
    this.handleContextKeys();
    this._register(this.list.onContextMenu(s => this.onListContextMenu(s)));
    this._register(this.list.onMouseMiddleClick(s => {
      if (s && s.element instanceof N2) {
        if ($Wl(s.element.group, s.element.editor, zUe.MOUSE, this.editorGroupService.partOptions)) {
          return;
        }
        s.element.group.closeEditor(s.element.editor, {
          preserveFocus: true
        });
      }
    }));
    this._register(this.list.onDidOpen(s => {
      const o = s.element;
      if (o) {
        if (o instanceof N2) {
          if (I6(s.browserEvent) && s.browserEvent.button === 1) {
            return;
          }
          this.withActiveEditorFocusTrackingDisabled(() => {
            this.openEditor(o, {
              preserveFocus: s.editorOptions.preserveFocus,
              pinned: s.editorOptions.pinned,
              sideBySide: s.sideBySide
            });
          });
        } else {
          this.withActiveEditorFocusTrackingDisabled(() => {
            this.editorGroupService.activateGroup(o);
            if (!s.editorOptions.preserveFocus) {
              o.focus();
            }
          });
        }
      } else {
        return;
      }
    }));
    this.listRefreshScheduler.schedule(0);
    this._register(this.onDidChangeBodyVisibility(s => {
      if (s && this.needsRefresh) {
        this.listRefreshScheduler?.schedule(0);
      }
    }));
    const r = this.viewDescriptorService.getViewContainerModel(this.viewDescriptorService.getViewContainerByViewId(this.id));
    this._register(r.onDidChangeAllViewDescriptors(() => {
      this.updateSize();
    }));
  }
  handleContextKeys() {
    if (!this.list) {
      return;
    }
    xTf.bindTo(this.list.contextKeyService);
    QCa.bindTo(this.list.contextKeyService);
    const e = Eit.bindTo(this.contextKeyService);
    const t = d0i.bindTo(this.contextKeyService);
    const i = USa.bindTo(this.contextKeyService);
    const r = ofu.bindTo(this.contextKeyService);
    const s = this.instantiationService.createInstance(Ep);
    this._register(s);
    this._register(this.list.onDidChangeFocus(o => {
      s.reset();
      e.reset();
      t.reset();
      i.reset();
      const a = o.elements.length ? o.elements[0] : undefined;
      if (a instanceof N2) {
        const l = a.getResource();
        t.set(a.editor.isDirty() && !a.editor.isSaving());
        i.set(!!a.editor.isReadonly());
        s.set(l ?? null);
      } else if (a) {
        e.set(true);
      }
    }));
    this._register(this.list.onDidChangeSelection(o => {
      const a = o.elements.every(l => {
        if (l instanceof N2) {
          const u = l.getResource();
          return u && (u.scheme === _n.untitled || this.fileService.hasProvider(u));
        }
        return false;
      });
      r.set(a);
    }));
  }
  focus() {
    super.focus();
    this.list?.domFocus();
  }
  layoutBody(e, t) {
    super.layoutBody(e, t);
    this.list?.layout(e, t);
  }
  get showGroups() {
    return this.editorGroupService.groups.length > 1;
  }
  getElements() {
    this.elements = [];
    this.editorGroupService.getGroups(2).forEach(e => {
      if (this.showGroups) {
        this.elements.push(e);
      }
      let t = e.editors.map(i => new N2(i, e));
      if (this.sortOrder === "alphabetical") {
        t = t.sort((i, r) => Pru(i.editor.getName(), r.editor.getName()));
      } else if (this.sortOrder === "fullPath") {
        t = t.sort((i, r) => {
          const s = i.editor.resource;
          const o = r.editor.resource;
          if (s === undefined && o === undefined) {
            return Pru(i.editor.getName(), r.editor.getName());
          }
          if (s === undefined) {
            return -1;
          }
          if (o === undefined) {
            return 1;
          }
          {
            const a = s.scheme;
            const l = o.scheme;
            if (a !== _n.file && l !== _n.file) {
              return ySe.compare(s, o);
            } else if (a !== _n.file) {
              return -1;
            } else if (l !== _n.file) {
              return 1;
            } else {
              return ySe.compare(s, o);
            }
          }
        });
      }
      this.elements.push(...t);
    });
    return this.elements;
  }
  getIndex(e, t) {
    if (t) {
      return this.elements.findIndex(i => i instanceof N2 && i.editor === t && i.group.id === e.id);
    } else {
      return this.elements.findIndex(i => !(i instanceof N2) && i.id === e.id);
    }
  }
  openEditor(e, t) {
    if (e) {
      this.telemetryService.publicLog2("workbenchActionExecuted", {
        id: "workbench.files.openFile",
        from: "openEditors"
      });
      if (!t.sideBySide || !t.preserveFocus) {
        this.editorGroupService.activateGroup(e.group);
      }
      (t.sideBySide ? this.editorGroupService.sideGroup : e.group).openEditor(e.editor, t);
    }
  }
  onListContextMenu(e) {
    if (!e.element) {
      return;
    }
    const t = e.element;
    this.contextMenuService.showContextMenu({
      menuId: st.OpenEditorsContext,
      menuActionOptions: {
        shouldForwardArgs: true,
        arg: t instanceof N2 ? gp.getOriginalUri(t.editor) : {}
      },
      contextKeyService: this.list?.contextKeyService,
      getAnchor: () => e.anchor,
      getActionsContext: () => t instanceof N2 ? {
        groupId: t.groupId,
        editorIndex: t.group.getIndexOfEditor(t.editor)
      } : {
        groupId: t.id
      }
    });
  }
  withActiveEditorFocusTrackingDisabled(e) {
    this.blockFocusActiveEditorTracking = true;
    try {
      e();
    } finally {
      this.blockFocusActiveEditorTracking = false;
    }
  }
  focusActiveEditor() {
    if (!!this.list && !this.blockFocusActiveEditorTracking) {
      if (this.list.length && this.editorGroupService.activeGroup) {
        const e = this.getIndex(this.editorGroupService.activeGroup, this.editorGroupService.activeGroup.activeEditor);
        if (e >= 0) {
          try {
            this.list.setFocus([e]);
            this.list.setSelection([e]);
            this.list.reveal(e);
          } catch {}
          return;
        }
      }
      this.list.setFocus([]);
      this.list.setSelection([]);
    }
  }
  onConfigurationChange(e) {
    if (e.affectsConfiguration("explorer.openEditors")) {
      this.updateSize();
    }
    if (e.affectsConfiguration("explorer.decorations") || e.affectsConfiguration("explorer.openEditors.sortOrder")) {
      this.sortOrder = this.configurationService.getValue("explorer.openEditors.sortOrder");
      if (this.dnd) {
        this.dnd.sortOrder = this.sortOrder;
      }
      this.listRefreshScheduler?.schedule();
    }
  }
  updateSize() {
    this.minimumBodySize = this.orientation === 0 ? this.getMinExpandedBodySize() : 170;
    this.maximumBodySize = this.orientation === 0 ? this.getMaxExpandedBodySize() : Number.POSITIVE_INFINITY;
  }
  updateDirtyIndicator(e) {
    if (e && e.isDirty() && !(e.capabilities & 2) && this.filesConfigurationService.hasShortAutoSaveDelay(e.resource)) {
      return;
    }
    const t = this.workingCopyService.dirtyCount;
    if (t === 0) {
      this.dirtyCountElement.classList.add("hidden");
    } else {
      this.dirtyCountElement.textContent = _(8102, null, t);
      this.dirtyCountElement.classList.remove("hidden");
    }
  }
  get elementCount() {
    return this.editorGroupService.groups.map(e => e.count).reduce((e, t) => e + t, this.showGroups ? this.editorGroupService.groups.length : 0);
  }
  getMaxExpandedBodySize() {
    let e = this.configurationService.getValue("explorer.openEditors.minVisible");
    if (typeof e != "number") {
      e = gCi.DEFAULT_MIN_VISIBLE_OPEN_EDITORS;
    }
    if (this.viewDescriptorService.getViewContainerModel(this.viewDescriptorService.getViewContainerByViewId(this.id)).visibleViewDescriptors.length <= 1) {
      return Number.POSITIVE_INFINITY;
    } else {
      return Math.max(this.elementCount, e) * j1a.ITEM_HEIGHT;
    }
  }
  getMinExpandedBodySize() {
    let e = this.configurationService.getValue("explorer.openEditors.visible");
    if (typeof e != "number") {
      e = gCi.DEFAULT_VISIBLE_OPEN_EDITORS;
    }
    return this.computeMinExpandedBodySize(e);
  }
  computeMinExpandedBodySize(e = gCi.DEFAULT_VISIBLE_OPEN_EDITORS) {
    return Math.min(Math.max(e, 1), this.elementCount) * j1a.ITEM_HEIGHT;
  }
  setStructuralRefreshDelay(e) {
    this.structuralRefreshDelay = e;
  }
  getOptimalWidth() {
    if (!this.list) {
      return super.getOptimalWidth();
    }
    const e = this.list.getHTMLElement();
    const t = [].slice.call(e.querySelectorAll(".open-editor > a"));
    return jSc(e, t);
  }
};
iwe = gCi = __decorate([__param(1, ln), __param(2, fp), __param(3, kc), __param(4, da), __param(5, Fn), __param(6, mo), __param(7, wi), __param(8, bo), __param(9, ea), __param(10, Kc), __param(11, cB), __param(12, IC), __param(13, Ja), __param(14, Gr)], iwe);
COf = class extends jD {
  async run(n) {
    if (this.editor) {
      return super.run(n, {
        groupId: this.editor.groupId,
        editorIndex: this.editor.group.getIndexOfEditor(this.editor.editor)
      });
    }
  }
};
j1a = class tzb {
  static {
    this.ITEM_HEIGHT = 22;
  }
  getHeight(e) {
    return tzb.ITEM_HEIGHT;
  }
  getTemplateId(e) {
    if (e instanceof N2) {
      return EAu.ID;
    } else {
      return kAu.ID;
    }
  }
};
kAu = class nzb {
  static {
    this.ID = "editorgroup";
  }
  constructor(e, t) {
    this.keybindingService = e;
    this.instantiationService = t;
  }
  get templateId() {
    return nzb.ID;
  }
  renderTemplate(e) {
    const t = Object.create(null);
    t.root = Rt(e, fCi(".editor-group"));
    t.name = Rt(t.root, fCi("span.name"));
    t.actionBar = new Gf(e);
    const i = this.instantiationService.createInstance(Eka, Eka.ID, Eka.LABEL);
    const r = this.keybindingService.lookupKeybinding(i.id);
    t.actionBar.push(i, {
      icon: true,
      label: false,
      keybinding: r ? r.getLabel() : undefined
    });
    const s = this.instantiationService.createInstance(gfn, gfn.ID, gfn.LABEL);
    const o = this.keybindingService.lookupKeybinding(s.id);
    t.actionBar.push(s, {
      icon: true,
      label: false,
      keybinding: o ? o.getLabel() : undefined
    });
    return t;
  }
  renderElement(e, t, i) {
    i.editorGroup = e;
    i.name.textContent = e.label;
    i.actionBar.context = {
      groupId: e.id
    };
  }
  disposeTemplate(e) {
    e.actionBar.dispose();
  }
};
EAu = class izb {
  static {
    this.ID = "openeditor";
  }
  constructor(e, t, i, r) {
    this.labels = e;
    this.instantiationService = t;
    this.keybindingService = i;
    this.configurationService = r;
    this.closeEditorAction = this.instantiationService.createInstance(yfn, yfn.ID, yfn.LABEL);
    this.unpinEditorAction = this.instantiationService.createInstance(Yqe, Yqe.ID, Yqe.LABEL);
  }
  get templateId() {
    return izb.ID;
  }
  renderTemplate(e) {
    const t = Object.create(null);
    t.container = e;
    t.actionRunner = new COf();
    t.actionBar = new Gf(e, {
      actionRunner: t.actionRunner
    });
    t.root = this.labels.create(e);
    return t;
  }
  renderElement(e, t, i) {
    const r = e.editor;
    i.actionRunner.editor = e;
    i.container.classList.toggle("dirty", r.isDirty() && !r.isSaving());
    i.container.classList.toggle("sticky", e.isSticky());
    i.root.setResource({
      resource: gp.getOriginalUri(r, {
        supportSideBySide: op.BOTH
      }),
      name: r.getName(),
      description: r.getDescription(1)
    }, {
      italic: e.isPreview(),
      extraClasses: ["open-editor"].concat(e.editor.getLabelExtraClasses()),
      fileDecorations: this.configurationService.getValue().explorer.decorations,
      title: r.getTitle(2),
      icon: r.getIcon()
    });
    const s = e.isSticky() ? this.unpinEditorAction : this.closeEditorAction;
    if (!i.actionBar.hasAction(s)) {
      if (!i.actionBar.isEmpty()) {
        i.actionBar.clear();
      }
      i.actionBar.push(s, {
        icon: true,
        label: false,
        keybinding: this.keybindingService.lookupKeybinding(s.id)?.getLabel()
      });
    }
  }
  disposeTemplate(e) {
    e.actionBar.dispose();
    e.root.dispose();
    e.actionRunner.dispose();
  }
};
xAu = class {
  set sortOrder(n) {
    this._sortOrder = n;
  }
  constructor(n, e, t) {
    this.instantiationService = e;
    this.editorGroupService = t;
    this._sortOrder = n;
  }
  get dropHandler() {
    return this.instantiationService.createInstance($it, {
      allowWorkspaceOpen: false
    });
  }
  getDragURI(n) {
    if (n instanceof N2) {
      const e = n.getResource();
      if (e) {
        return e.toString();
      }
    }
    return null;
  }
  getDragLabel(n) {
    if (n.length > 1) {
      return String(n.length);
    }
    const e = n[0];
    if (e instanceof N2) {
      return e.editor.getName();
    } else {
      return e.label;
    }
  }
  onDragStart(n, e) {
    const t = n.elements;
    const i = [];
    if (t) {
      for (const r of t) {
        if (r instanceof N2) {
          i.push(r);
        }
      }
    }
    if (i.length) {
      this.instantiationService.invokeFunction(Yme, i, e);
    }
  }
  onDragOver(n, e, t, i, r) {
    if (n instanceof f3t && !k9(r, fT.FILES, nM.FILES)) {
      return false;
    }
    if (this._sortOrder !== "editorOrder") {
      if (n instanceof ove) {
        return false;
      } else {
        return {
          accept: true,
          effect: {
            type: 1
          },
          feedback: [-1]
        };
      }
    }
    let s;
    switch (i) {
      case 0:
      case 1:
        s = t === 0 && e instanceof KMe ? "drop-target-after" : "drop-target-before";
        break;
      case 2:
      case 3:
        s = "drop-target-after";
        break;
    }
    return {
      accept: true,
      effect: {
        type: 1,
        position: s
      },
      feedback: [t]
    };
  }
  drop(n, e, t, i, r) {
    let s = e instanceof N2 ? e.group : e || this.editorGroupService.groups[this.editorGroupService.count - 1];
    let o = e instanceof N2 ? e.group.getIndexOfEditor(e.editor) : 0;
    switch (i) {
      case 0:
      case 1:
        if (e instanceof KMe && s.index !== 0) {
          s = this.editorGroupService.groups[s.index - 1];
          o = s.count;
        }
        break;
      case 3:
      case 2:
        if (e instanceof N2) {
          o++;
        }
        break;
    }
    if (n instanceof ove) {
      for (const a of n.elements) {
        const l = a.group.getIndexOfEditor(a.editor);
        if (a.group === s && l < o) {
          o--;
        }
        a.group.moveEditor(a.editor, s, {
          index: o,
          preserveFocus: true
        });
        o++;
      }
      this.editorGroupService.activateGroup(s);
    } else {
      this.dropHandler.handleDrop(r, bi, () => s, () => s.focus(), {
        index: o
      });
    }
  }
  dispose() {}
};
__decorate([cl], xAu.prototype, "dropHandler", null);
SOf = class {
  getWidgetAriaLabel() {
    return _(8103, null);
  }
  getAriaLabel(n) {
    if (n instanceof N2) {
      return `${n.editor.getName()}, ${n.editor.getDescription()}`;
    } else {
      return n.ariaLabel;
    }
  }
};
kOf = "workbench.action.toggleEditorGroupLayout";
Dt(class extends rn {
  constructor() {
    super({
      id: "workbench.action.toggleEditorGroupLayout",
      title: dt(8106, "Toggle Vertical/Horizontal Editor Layout"),
      f1: true,
      keybinding: {
        primary: 1557,
        mac: {
          primary: 2581
        },
        weight: 200
      },
      icon: Be.editorLayout,
      menu: {
        id: st.ViewTitle,
        group: "navigation",
        when: Ee.and(Ee.equals("view", iwe.ID), yQ),
        order: 10
      }
    });
  }
  async run(n) {
    const e = n.get(da);
    const t = e.orientation === 1 ? 0 : 1;
    e.setGroupOrientation(t);
    e.activeGroup.focus();
  }
});
or.appendMenuItem(st.MenubarLayoutMenu, {
  group: "5_flip",
  command: {
    id: kOf,
    title: {
      ...dt(8107, "Flip Layout"),
      mnemonicTitle: _(8104, null)
    }
  },
  order: 1
});
Dt(class extends rn {
  constructor() {
    super({
      id: "workbench.action.files.saveAll",
      title: HIf,
      f1: true,
      icon: Be.saveAll,
      menu: {
        id: st.ViewTitle,
        group: "navigation",
        when: Ee.equals("view", iwe.ID),
        order: 20
      }
    });
  }
  async run(n) {
    await n.get(fr).executeCommand(OSa);
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "openEditors.closeAll",
      title: Jka.LABEL,
      f1: false,
      icon: Be.closeAll,
      menu: {
        id: st.ViewTitle,
        group: "navigation",
        when: Ee.equals("view", iwe.ID),
        order: 30
      }
    });
  }
  async run(n) {
    const e = n.get(ln);
    const t = new Jka();
    await e.invokeFunction(i => t.run(i));
  }
});
Dt(class extends rn {
  constructor() {
    super({
      id: "openEditors.newUntitledFile",
      title: dt(8108, "New Untitled Text File"),
      f1: false,
      icon: Be.newFile,
      menu: {
        id: st.ViewTitle,
        group: "navigation",
        when: Ee.equals("view", iwe.ID),
        order: 5
      }
    });
  }
  async run(n) {
    await n.get(fr).executeCommand(xit);
  }
});
