"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookEditorToolbar.js
// Offset: 33382662 (bundle byte offset)
// Size: 12124 bytes
ri();
h0();
zI();
wRe();
nl();
yn();
rt();
dg();
dr();
Ei();
pl();
Wt();
ka();
AN();
ph();
Y8f();
hki();
ss();
fit();
vr();
vT();
Id();
(function (n) {
  n[n.Always = 0] = "Always";
  n[n.Never = 1] = "Never";
  n[n.Dynamic = 2] = "Dynamic";
})(dwe ||= {});
VTa = 21;
X8f = 21;
p2e = 8;
e6f = class {
  constructor(n, e, t, i) {
    this.notebookEditor = n;
    this.editorToolbar = e;
    this.goToMenu = t;
    this.instantiationService = i;
  }
  actionProvider(n, e) {
    if (n.id === uwe) {
      return this.instantiationService.createInstance(xrt, n, this.notebookEditor, e);
    }
    if (n instanceof Ub) {
      return this.instantiationService.createInstance(DTa, n, {
        hoverDelegate: e.hoverDelegate
      });
    }
    if (n instanceof h2 && n.item.submenu.id === st.NotebookCellExecuteGoTo.id) {
      return this.instantiationService.createInstance(EEt, n, {
        hoverDelegate: e.hoverDelegate
      }, true, {
        getActions: () => this.goToMenu.getActions().find(([t]) => t === "navigation/execute")?.[1] ?? []
      }, this.actionProvider.bind(this));
    }
  }
  calculateActions(n) {
    const e = this.editorToolbar.primaryActions;
    const t = this.editorToolbar.secondaryActions;
    const i = Z8f(e, t, n);
    return {
      primaryActions: i.primaryActions.map(r => r.action),
      secondaryActions: i.secondaryActions
    };
  }
};
t6f = class {
  constructor(n, e, t, i) {
    this.notebookEditor = n;
    this.editorToolbar = e;
    this.goToMenu = t;
    this.instantiationService = i;
  }
  actionProvider(n, e) {
    if (n.id === uwe) {
      return this.instantiationService.createInstance(xrt, n, this.notebookEditor, e);
    }
    if (n instanceof Ub) {
      return this.instantiationService.createInstance(f2, n, {
        hoverDelegate: e.hoverDelegate
      });
    }
    if (n instanceof h2) {
      if (n.item.submenu.id === st.NotebookCellExecuteGoTo.id) {
        return this.instantiationService.createInstance(EEt, n, {
          hoverDelegate: e.hoverDelegate
        }, false, {
          getActions: () => this.goToMenu.getActions().find(([t]) => t === "navigation/execute")?.[1] ?? []
        }, this.actionProvider.bind(this));
      } else {
        return this.instantiationService.createInstance(CRe, n, {
          hoverDelegate: e.hoverDelegate
        });
      }
    }
  }
  calculateActions(n) {
    const e = this.editorToolbar.primaryActions;
    const t = this.editorToolbar.secondaryActions;
    const i = Z8f(e, t, n);
    return {
      primaryActions: i.primaryActions.map(r => r.action),
      secondaryActions: i.secondaryActions
    };
  }
};
n6f = class {
  constructor(n, e, t, i) {
    this.notebookEditor = n;
    this.editorToolbar = e;
    this.goToMenu = t;
    this.instantiationService = i;
  }
  actionProvider(n, e) {
    if (n.id === uwe) {
      return this.instantiationService.createInstance(xrt, n, this.notebookEditor, e);
    }
    const t = this.editorToolbar.primaryActions.find(i => i.action.id === n.id);
    if (!t || t.renderLabel) {
      if (n instanceof Ub) {
        return this.instantiationService.createInstance(DTa, n, {
          hoverDelegate: e.hoverDelegate
        });
      } else if (n instanceof h2 && n.item.submenu.id === st.NotebookCellExecuteGoTo.id) {
        return this.instantiationService.createInstance(EEt, n, {
          hoverDelegate: e.hoverDelegate
        }, true, {
          getActions: () => this.goToMenu.getActions().find(([i]) => i === "navigation/execute")?.[1] ?? []
        }, this.actionProvider.bind(this));
      } else {
        return undefined;
      }
    } else if (n instanceof Ub) {
      return this.instantiationService.createInstance(f2, n, {
        hoverDelegate: e.hoverDelegate
      });
    } else if (n instanceof h2) {
      if (n.item.submenu.id === st.NotebookCellExecuteGoTo.id) {
        return this.instantiationService.createInstance(EEt, n, {
          hoverDelegate: e.hoverDelegate
        }, false, {
          getActions: () => this.goToMenu.getActions().find(([i]) => i === "navigation/execute")?.[1] ?? []
        }, this.actionProvider.bind(this));
      } else {
        return this.instantiationService.createInstance(CRe, n, {
          hoverDelegate: e.hoverDelegate
        });
      }
    } else {
      return undefined;
    }
  }
  calculateActions(n) {
    const e = this.editorToolbar.primaryActions;
    const t = this.editorToolbar.secondaryActions;
    const i = Fdy(e, t, n);
    return {
      primaryActions: i.primaryActions.map(r => r.action),
      secondaryActions: i.secondaryActions
    };
  }
};
KTa = class extends at {
  get primaryActions() {
    return this._primaryActions;
  }
  get secondaryActions() {
    return this._secondaryActions;
  }
  set visible(e) {
    if (this._visible !== e) {
      this._visible = e;
      this._onDidChangeVisibility.fire(e);
    }
  }
  get useGlobalToolbar() {
    return this._useGlobalToolbar;
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m) {
    super();
    this.notebookEditor = e;
    this.contextKeyService = t;
    this.notebookOptions = i;
    this.domNode = r;
    this.instantiationService = s;
    this.configurationService = o;
    this.contextMenuService = a;
    this.menuService = l;
    this.editorService = u;
    this.keybindingService = d;
    this.experimentService = m;
    this._useGlobalToolbar = false;
    this._renderLabel = dwe.Always;
    this._visible = false;
    this._onDidChangeVisibility = this._register(new Qe());
    this.onDidChangeVisibility = this._onDidChangeVisibility.event;
    this._dimension = null;
    this._primaryActions = [];
    this._secondaryActions = [];
    this._buildBody();
    this._register(In.debounce(this.editorService.onDidActiveEditorChange, (p, g) => p, 200)(this._updatePerEditorChange, this));
    this._registerNotebookActionsToolbar();
    this._register(ei(this.domNode, ir.CONTEXT_MENU, p => {
      const g = new yy(As(this.domNode), p);
      this.contextMenuService.showContextMenu({
        menuId: st.NotebookToolbarContext,
        getAnchor: () => g
      });
    }));
  }
  _buildBody() {
    this._notebookTopLeftToolbarContainer = document.createElement("div");
    this._notebookTopLeftToolbarContainer.classList.add("notebook-toolbar-left");
    this._leftToolbarScrollable = new vF(this._notebookTopLeftToolbarContainer, {
      vertical: 2,
      horizontal: 3,
      horizontalScrollbarSize: 3,
      useShadows: false,
      scrollYToX: true
    });
    this._register(this._leftToolbarScrollable);
    Rt(this.domNode, this._leftToolbarScrollable.getDomNode());
    this._notebookTopRightToolbarContainer = document.createElement("div");
    this._notebookTopRightToolbarContainer.classList.add("notebook-toolbar-right");
    Rt(this.domNode, this._notebookTopRightToolbarContainer);
  }
  _updatePerEditorChange() {
    if (this.editorService.activeEditorPane?.getId() === lCt && this.editorService.activeEditorPane.getControl() === this.notebookEditor) {
      this._showNotebookActionsinEditorToolbar();
      return;
    }
  }
  _registerNotebookActionsToolbar() {
    this._notebookGlobalActionsMenu = this._register(this.menuService.createMenu(this.notebookEditor.creationOptions.menuIds.notebookToolbar, this.contextKeyService));
    this._executeGoToActionsMenu = this._register(this.menuService.createMenu(st.NotebookCellExecuteGoTo, this.contextKeyService));
    this._useGlobalToolbar = this.notebookOptions.getDisplayOptions().globalToolbar;
    this._renderLabel = this._convertConfiguration(this.configurationService.getValue(yo.globalToolbarShowLabel));
    this._updateStrategy();
    const e = {
      ui: true,
      notebookEditor: this.notebookEditor,
      source: "notebookToolbar"
    };
    const t = (a, l) => {
      if (a.id === uwe) {
        return this.instantiationService.createInstance(xrt, a, this.notebookEditor, l);
      }
      if (this._renderLabel !== dwe.Never) {
        const u = this._primaryActions.find(d => d.action.id === a.id);
        if (u && u.renderLabel) {
          if (a instanceof Ub) {
            return this.instantiationService.createInstance(DTa, a, {
              hoverDelegate: l.hoverDelegate
            });
          } else {
            return undefined;
          }
        } else if (a instanceof Ub) {
          return this.instantiationService.createInstance(f2, a, {
            hoverDelegate: l.hoverDelegate
          });
        } else {
          return undefined;
        }
      } else if (a instanceof Ub) {
        return this.instantiationService.createInstance(f2, a, {
          hoverDelegate: l.hoverDelegate
        });
      } else {
        return undefined;
      }
    };
    const i = this._register(this.instantiationService.createInstance(Yoe, "element", {
      instantHover: true
    }, {}));
    i.setInstantHoverTimeLimit(600);
    const r = {
      hiddenItemStrategy: 1,
      resetMenu: st.NotebookToolbar,
      actionViewItemProvider: (a, l) => this._strategy.actionProvider(a, l),
      getKeyBinding: a => this.keybindingService.lookupKeybinding(a.id),
      renderDropdownAsChildElement: true,
      hoverDelegate: i
    };
    this._notebookLeftToolbar = this.instantiationService.createInstance(KI, this._notebookTopLeftToolbarContainer, r);
    this._register(this._notebookLeftToolbar);
    this._notebookLeftToolbar.context = e;
    this._notebookRightToolbar = new ave(this._notebookTopRightToolbarContainer, this.contextMenuService, {
      getKeyBinding: a => this.keybindingService.lookupKeybinding(a.id),
      actionViewItemProvider: t,
      renderDropdownAsChildElement: true,
      hoverDelegate: i
    });
    this._register(this._notebookRightToolbar);
    this._notebookRightToolbar.context = e;
    this._showNotebookActionsinEditorToolbar();
    let s = false;
    let o;
    this._register(this._notebookGlobalActionsMenu.onDidChange(() => {
      if (s) {
        o = () => this._showNotebookActionsinEditorToolbar();
        return;
      }
      if (this.notebookEditor.isVisible) {
        this._showNotebookActionsinEditorToolbar();
      }
    }));
    this._register(this._notebookLeftToolbar.onDidChangeDropdownVisibility(a => {
      s = a;
      if (o && !a) {
        setTimeout(() => {
          o?.();
        }, 0);
        o = undefined;
      }
    }));
    this._register(this.notebookOptions.onDidChangeOptions(a => {
      if (a.globalToolbar !== undefined) {
        this._useGlobalToolbar = this.notebookOptions.getDisplayOptions().globalToolbar;
        this._showNotebookActionsinEditorToolbar();
      }
    }));
    this._register(this.configurationService.onDidChangeConfiguration(a => {
      if (a.affectsConfiguration(yo.globalToolbarShowLabel)) {
        this._renderLabel = this._convertConfiguration(this.configurationService.getValue(yo.globalToolbarShowLabel));
        this._updateStrategy();
        this._notebookLeftToolbar.getElement().remove();
        this._notebookLeftToolbar.dispose();
        this._notebookLeftToolbar = this.instantiationService.createInstance(KI, this._notebookTopLeftToolbarContainer, r);
        this._register(this._notebookLeftToolbar);
        this._notebookLeftToolbar.context = e;
        this._showNotebookActionsinEditorToolbar();
        return;
      }
    }));
    if (this.experimentService) {
      this.experimentService.getTreatment("nbtoolbarineditor").then(a => {
        if (a !== undefined && this._useGlobalToolbar !== a) {
          this._useGlobalToolbar = a;
          this._showNotebookActionsinEditorToolbar();
        }
      });
    }
  }
  _updateStrategy() {
    switch (this._renderLabel) {
      case dwe.Always:
        this._strategy = new e6f(this.notebookEditor, this, this._executeGoToActionsMenu, this.instantiationService);
        break;
      case dwe.Never:
        this._strategy = new t6f(this.notebookEditor, this, this._executeGoToActionsMenu, this.instantiationService);
        break;
      case dwe.Dynamic:
        this._strategy = new n6f(this.notebookEditor, this, this._executeGoToActionsMenu, this.instantiationService);
        break;
    }
  }
  _convertConfiguration(e) {
    switch (e) {
      case true:
        return dwe.Always;
      case false:
        return dwe.Never;
      case "always":
        return dwe.Always;
      case "never":
        return dwe.Never;
      case "dynamic":
        return dwe.Dynamic;
    }
  }
  _showNotebookActionsinEditorToolbar() {
    if (!this.notebookEditor.hasModel()) {
      this._deferredActionUpdate?.dispose();
      this._deferredActionUpdate = undefined;
      this.visible = false;
      return;
    }
    if (!this._deferredActionUpdate) {
      if (this._useGlobalToolbar) {
        this._deferredActionUpdate = nC(async () => {
          await this._setNotebookActions();
          this.visible = true;
          this._deferredActionUpdate?.dispose();
          this._deferredActionUpdate = undefined;
        }, 50);
      } else {
        this.domNode.style.display = "none";
        this._deferredActionUpdate = undefined;
        this.visible = false;
      }
    }
  }
  async _setNotebookActions() {
    const e = this._notebookGlobalActionsMenu.getActions({
      shouldForwardArgs: true,
      renderShortTitle: true
    });
    this.domNode.style.display = "flex";
    const t = e.filter(a => /^navigation/.test(a[0]));
    const i = [];
    t.sort((a, l) => a[0] === "navigation" ? 1 : l[0] === "navigation" ? -1 : 0).forEach((a, l) => {
      i.push(...a[1]);
      if (l < t.length - 1) {
        i.push(new id());
      }
    });
    const r = e.find(a => /^status/.test(a[0]));
    const s = r ? r[1] : [];
    const o = e.filter(a => !/^navigation/.test(a[0]) && !/^status/.test(a[0])).reduce((a, l) => {
      a.push(...l[1]);
      return a;
    }, []);
    this._notebookLeftToolbar.setActions([], []);
    this._primaryActions = i.map(a => ({
      action: a,
      size: a instanceof id ? 1 : 0,
      renderLabel: true,
      visible: true
    }));
    this._notebookLeftToolbar.setActions(i, o);
    this._secondaryActions = o;
    this._notebookRightToolbar.setActions(s, []);
    this._secondaryActions = o;
    if (this._dimension && this._dimension.width >= 0 && this._dimension.height >= 0) {
      this._cacheItemSizes(this._notebookLeftToolbar);
    }
    this._computeSizes();
  }
  _cacheItemSizes(e) {
    for (let t = 0; t < e.getItemsLength(); t++) {
      const i = e.getItemAction(t);
      if (i && i.id !== "toolbar.toggle.more") {
        const r = this._primaryActions.find(s => s.action.id === i.id);
        if (r) {
          r.size = e.getItemWidth(t);
        }
      }
    }
  }
  _computeSizes() {
    const e = this._notebookLeftToolbar;
    const t = this._notebookRightToolbar;
    if (e && t && this._dimension && this._dimension.height >= 0 && this._dimension.width >= 0) {
      if (this._primaryActions.length === 0 && e.getItemsLength() !== this._primaryActions.length) {
        this._cacheItemSizes(this._notebookLeftToolbar);
      }
      if (this._primaryActions.length === 0) {
        return;
      }
      const i = (t.getItemsLength() ? t.getItemWidth(0) : 0) + p2e;
      const r = this._dimension.width - i - (p2e + X8f) - p2e - p2e;
      const s = this._strategy.calculateActions(r);
      this._notebookLeftToolbar.setActions(s.primaryActions, s.secondaryActions);
    }
  }
  layout(e) {
    this._dimension = e;
    if (this._useGlobalToolbar) {
      this.domNode.style.display = "flex";
    } else {
      this.domNode.style.display = "none";
    }
    this._computeSizes();
  }
  dispose() {
    this._notebookLeftToolbar.context = undefined;
    this._notebookRightToolbar.context = undefined;
    this._notebookLeftToolbar.dispose();
    this._notebookRightToolbar.dispose();
    this._notebookLeftToolbar = null;
    this._notebookRightToolbar = null;
    this._deferredActionUpdate?.dispose();
    this._deferredActionUpdate = undefined;
    super.dispose();
  }
};
KTa = __decorate([__param(4, ln), __param(5, Fn), __param(6, kc), __param(7, xd), __param(8, yi), __param(9, mo), __param(10, xqe)], KTa);
