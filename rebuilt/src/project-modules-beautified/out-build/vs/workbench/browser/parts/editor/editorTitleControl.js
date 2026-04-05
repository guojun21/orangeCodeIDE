"use strict";

// Module: out-build/vs/workbench/browser/parts/editor/editorTitleControl.js
// Offset: 32379218 (bundle byte offset)
// Size: 5554 bytes
ri();
rt();
Ei();
Wt();
Uc();
rf();
kr();
Io();
Nu();
ky();
Q0();
rie();
zp();
Hit();
XLf();
nay();
yOf();
Kcy();
Ycy();
Zcy();
Q1a = class extends NH {
  get breadcrumbsControl() {
    return this.breadcrumbsControlFactory?.control;
  }
  get leftActionsContainer() {
    return this.editorTabsControl.leftActionsContainer;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super(l);
    this.parent = e;
    this.editorPartsView = t;
    this.groupsView = i;
    this.groupView = r;
    this.model = s;
    this.storageService = o;
    this.instantiationService = a;
    this.layoutService = u;
    this.configurationService = d;
    this.agentLayoutService = m;
    this.editorTabsControlDisposable = this._register(new Ut());
    this.breadcrumbsControlDisposables = this._register(new Ut());
    this.editorTabsControl = this.createEditorTabsControl();
    this.breadcrumbsControlFactory = this.createBreadcrumbsControl();
    this._register(this.layoutService.onDidChangePartVisibility(() => {
      if (this.groupView.element.classList.contains("has-composer-editor")) {
        this.groupView.relayout();
      }
    }));
    const p = this._register(hm(o, "unifiedAppLayout"));
    const g = this._register(hm(o, "defaultLayoutMode"));
    Ro(A => {
      const w = p.read(A);
      const C = g.read(A);
      return {
        unifiedAppLayout: w,
        defaultLayoutMode: C
      };
    }).recomputeInitiallyAndOnChange(this._store, ({
      defaultLayoutMode: A
    }) => {
      if (!this.agentLayoutService.isTogglingUnificationMode(false) && A !== "sync") {
        return;
      }
      if (this.groupView.element.classList.contains("has-composer-editor")) {
        this.groupView.relayout();
      }
    });
  }
  shouldForceTitleBar() {
    if (Bh(this.storageService)) {
      return {
        force: true,
        show: true
      };
    } else {
      return {
        force: false
      };
    }
  }
  createEditorTabsControl() {
    let e;
    switch (this.groupsView.partOptions.showTabs) {
      case "none":
        e = _Of;
        break;
      case "single":
        e = W1a;
        break;
      case "multiple":
      default:
        e = this.groupsView.partOptions.pinnedTabsOnSeparateRow ? G1a : Ufn;
        break;
    }
    const t = this.instantiationService.createInstance(e, this.parent, this.editorPartsView, this.groupsView, this.groupView, this.model);
    return this.editorTabsControlDisposable.add(t);
  }
  createBreadcrumbsControl() {
    if (this.groupsView.partOptions.showTabs === "single") {
      return;
    }
    this.breadcrumbsContainer = Ct(".breadcrumbs-below-tabs");
    this.parent.appendChild(this.breadcrumbsContainer);
    const e = this.breadcrumbsControlDisposables.add(this.instantiationService.createInstance(Q0i, this.breadcrumbsContainer, this.groupView, {
      showFileIcons: true,
      showSymbolIcons: true,
      showDecorationColors: false,
      showPlaceholder: true,
      dragEditor: false
    }));
    const t = () => {
      const i = e.control?.isHidden() !== false;
      this.breadcrumbsContainer.style.display = i ? "none" : "";
    };
    t();
    this.breadcrumbsControlDisposables.add(e.onDidVisibilityChange(t));
    this.breadcrumbsControlDisposables.add(e.onDidEnablementChange(t));
    this.breadcrumbsControlDisposables.add(e.onDidEnablementChange(() => this.groupView.relayout()));
    this.breadcrumbsControlDisposables.add(e.onDidVisibilityChange(() => this.groupView.relayout()));
    return e;
  }
  updateBreadcrumbsBorder() {
    const e = this.groupView.activeEditor;
    const t = e ? gp.getOriginalUri(e, {
      supportSideBySide: op.PRIMARY
    }) : undefined;
    const i = t ? jMe(t) : false;
    const r = this.getColor(Pmu);
    const s = this.parent.querySelector(".tabs-and-actions-container .tabs-border-bottom");
    if (s) {
      if (i && r) {
        s.style.borderBottom = `1px solid ${r}`;
      } else {
        s.style.borderBottom = "";
      }
    }
    if (this.breadcrumbsContainer) {
      if (i && r) {
        this.breadcrumbsContainer.style.borderLeft = `1px solid ${r}`;
      } else {
        this.breadcrumbsContainer.style.borderLeft = "";
      }
    }
    const o = this.parent.parentElement?.querySelector(".editor-container");
    if (o) {
      if (i && r) {
        o.style.borderLeft = `1px solid ${r}`;
      } else {
        o.style.borderLeft = "";
      }
    }
  }
  openEditor(e, t) {
    const i = this.editorTabsControl.openEditor(e, t);
    this.handleOpenedEditors(i);
    this.updateBreadcrumbsBorder();
  }
  openEditors(e) {
    const t = this.editorTabsControl.openEditors(e);
    this.handleOpenedEditors(t);
  }
  handleOpenedEditors(e) {
    if (e) {
      this.breadcrumbsControl?.update();
    } else {
      this.breadcrumbsControl?.revealLast();
    }
  }
  beforeCloseEditor(e) {
    return this.editorTabsControl.beforeCloseEditor(e);
  }
  closeEditor(e) {
    this.editorTabsControl.closeEditor(e);
    this.handleClosedEditors();
  }
  closeEditors(e) {
    this.editorTabsControl.closeEditors(e);
    this.handleClosedEditors();
  }
  handleClosedEditors() {
    if (!this.groupView.activeEditor) {
      this.breadcrumbsControl?.update();
    }
  }
  moveEditor(e, t, i, r) {
    return this.editorTabsControl.moveEditor(e, t, i, r);
  }
  pinEditor(e) {
    return this.editorTabsControl.pinEditor(e);
  }
  stickEditor(e) {
    return this.editorTabsControl.stickEditor(e);
  }
  unstickEditor(e) {
    return this.editorTabsControl.unstickEditor(e);
  }
  setActive(e) {
    this.editorTabsControl.setActive(e);
    this.updateBreadcrumbsBorder();
  }
  updateEditorSelections() {
    this.editorTabsControl.updateEditorSelections();
  }
  updateEditorLabel(e) {
    return this.editorTabsControl.updateEditorLabel(e);
  }
  updateEditorDirty(e) {
    return this.editorTabsControl.updateEditorDirty(e);
  }
  updateOptions(e, t) {
    if (e.showTabs !== t.showTabs || t.showTabs !== "single" && e.pinnedTabsOnSeparateRow !== t.pinnedTabsOnSeparateRow) {
      this.editorTabsControlDisposable.clear();
      this.breadcrumbsControlDisposables.clear();
      th(this.parent);
      this.editorTabsControl = this.createEditorTabsControl();
      this.breadcrumbsControlFactory = this.createBreadcrumbsControl();
    } else {
      this.editorTabsControl.updateOptions(e, t);
    }
  }
  layout(e) {
    const t = this.shouldForceTitleBar();
    if (t.force && !t.show) {
      return new Lu(e.container.width, 0);
    }
    const i = this.editorTabsControl.layout(e);
    let r;
    if (this.breadcrumbsControl?.isHidden() === false) {
      r = new Lu(e.container.width, wL.HEIGHT);
      this.breadcrumbsControl.layout(r);
    }
    return new Lu(e.container.width, i.height + (r ? r.height : 0));
  }
  getHeight() {
    const e = this.shouldForceTitleBar();
    if (e.force && !e.show) {
      return {
        total: 0,
        offset: 0
      };
    }
    const t = this.editorTabsControl.getHeight();
    const i = this.breadcrumbsControl?.isHidden() === false ? wL.HEIGHT : 0;
    return {
      total: t + i,
      offset: t
    };
  }
};
Q1a = __decorate([__param(5, Hi), __param(6, ln), __param(7, bo), __param(8, Vu), __param(9, Fn), __param(10, sP)], Q1a);
