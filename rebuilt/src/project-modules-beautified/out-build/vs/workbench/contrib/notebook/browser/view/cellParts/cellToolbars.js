"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellToolbars.js
// Offset: 33263323 (bundle byte offset)
// Size: 5910 bytes
ri();
wRe();
vr();
yn();
dg();
dr();
si();
pl();
Wt();
ka();
hki();
LQ();
R8f();
vT();
mb();
pki = class extends gwu {
  constructor(e, t, i, r, s, o, a) {
    super();
    this._notebookEditor = e;
    this._bottomCellToolbarContainer = i;
    this.instantiationService = r;
    this.contextMenuService = s;
    this.contextKeyService = o;
    this.menuService = a;
  }
  _initialize() {
    if (this._betweenCellToolbar) {
      return this._betweenCellToolbar;
    }
    const e = this._register(new ave(this._bottomCellToolbarContainer, this.contextMenuService, {
      actionViewItemProvider: (r, s) => {
        if (r instanceof Ub) {
          if (this._notebookEditor.notebookOptions.getDisplayOptions().insertToolbarAlignment === "center") {
            return this.instantiationService.createInstance(Tbn, r, {
              hoverDelegate: s.hoverDelegate
            });
          } else {
            return this.instantiationService.createInstance(f2, r, {
              hoverDelegate: s.hoverDelegate
            });
          }
        }
      }
    }));
    this._betweenCellToolbar = e;
    const t = this._register(this.menuService.createMenu(this._notebookEditor.creationOptions.menuIds.cellInsertToolbar, this.contextKeyService));
    const i = () => {
      const r = mki(t);
      e.setActions(r.primary, r.secondary);
    };
    this._register(t.onDidChange(() => i()));
    this._register(this._notebookEditor.notebookOptions.onDidChangeOptions(r => {
      if (r.insertToolbarAlignment) {
        i();
      }
    }));
    i();
    return e;
  }
  didRenderCell(e) {
    const t = this._initialize();
    if (this._notebookEditor.hasModel()) {
      t.context = {
        ui: true,
        cell: e,
        notebookEditor: this._notebookEditor,
        source: "insertToolbar",
        $mid: 13
      };
    }
    this.updateInternalLayoutNow(e);
  }
  updateInternalLayoutNow(e) {
    const t = e.layoutInfo.bottomToolbarOffset;
    this._bottomCellToolbarContainer.style.transform = `translateY(${t}px)`;
  }
};
pki = __decorate([__param(3, ln), __param(4, kc), __param(5, wi), __param(6, xd)], pki);
gki = class extends gwu {
  get hasActions() {
    if (this._model) {
      return this._model.actions.primary.length + this._model.actions.secondary.length + this._model.deleteActions.primary.length + this._model.deleteActions.secondary.length > 0;
    } else {
      return false;
    }
  }
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this.toolbarContainer = e;
    this._rootClassDelegate = t;
    this.toolbarId = i;
    this.deleteToolbarId = r;
    this._notebookEditor = s;
    this.contextKeyService = o;
    this.menuService = a;
    this.instantiationService = l;
    this._onDidUpdateActions = this._register(new Qe());
    this.onDidUpdateActions = this._onDidUpdateActions.event;
  }
  _initializeModel() {
    if (this._model) {
      return this._model;
    }
    const e = this._register(this.menuService.createMenu(this.toolbarId, this.contextKeyService));
    const t = this._register(this.menuService.createMenu(this.deleteToolbarId, this.contextKeyService));
    const i = mki(e);
    const r = mki(t);
    this._model = {
      titleMenu: e,
      actions: i,
      deleteMenu: t,
      deleteActions: r
    };
    return this._model;
  }
  _initialize(e, t) {
    if (this._view) {
      return this._view;
    }
    const i = this._register(F6());
    const r = this._register(this.instantiationService.createInstance(KI, this.toolbarContainer, {
      actionViewItemProvider: (o, a) => GR(this.instantiationService, o, a),
      renderDropdownAsChildElement: true,
      hoverDelegate: i
    }));
    const s = this._register(this.instantiationService.invokeFunction(o => gdy(o, this.toolbarContainer, i, "cell-delete-toolbar")));
    if (e.deleteActions.primary.length !== 0 || e.deleteActions.secondary.length !== 0) {
      s.setActions(e.deleteActions.primary, e.deleteActions.secondary);
    }
    this.setupChangeListeners(r, e.titleMenu, e.actions);
    this.setupChangeListeners(s, e.deleteMenu, e.deleteActions);
    this._view = {
      toolbar: r,
      deleteToolbar: s
    };
    return this._view;
  }
  prepareRenderCell(e) {
    this._initializeModel();
  }
  didRenderCell(e) {
    const t = this._initializeModel();
    const i = this._initialize(t, e);
    this.cellDisposables.add(B8f(this._notebookEditor, e, this.toolbarContainer, {
      extraOffset: 4,
      min: -14
    }));
    if (this._notebookEditor.hasModel()) {
      const r = {
        ui: true,
        cell: e,
        notebookEditor: this._notebookEditor,
        source: "cellToolbar",
        $mid: 13
      };
      this.updateContext(i, r);
    }
  }
  updateContext(e, t) {
    e.toolbar.context = t;
    e.deleteToolbar.context = t;
  }
  setupChangeListeners(e, t, i) {
    let r = false;
    let s;
    this.updateActions(e, i);
    this._register(t.onDidChange(() => {
      if (r) {
        const a = mki(t);
        s = () => this.updateActions(e, a);
        return;
      }
      const o = mki(t);
      this.updateActions(e, o);
    }));
    this._rootClassDelegate.toggle("cell-toolbar-dropdown-active", false);
    this._register(e.onDidChangeDropdownVisibility(o => {
      r = o;
      this._rootClassDelegate.toggle("cell-toolbar-dropdown-active", o);
      if (s && !o) {
        nC(() => {
          s?.();
        }, 0, this._store);
        s = undefined;
      }
    }));
  }
  updateActions(e, t) {
    const i = UR(e.getElement());
    e.setActions(t.primary, t.secondary);
    if (i) {
      this._notebookEditor.focus();
    }
    if (t.primary.length || t.secondary.length) {
      this._rootClassDelegate.toggle("cell-has-toolbar-actions", true);
      this._onDidUpdateActions.fire();
    } else {
      this._rootClassDelegate.toggle("cell-has-toolbar-actions", false);
      this._onDidUpdateActions.fire();
    }
  }
};
gki = __decorate([__param(5, wi), __param(6, xd), __param(7, ln)], gki);
