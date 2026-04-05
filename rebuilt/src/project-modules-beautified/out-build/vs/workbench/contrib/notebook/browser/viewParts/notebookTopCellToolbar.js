"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookTopCellToolbar.js
// Offset: 33402159 (bundle byte offset)
// Size: 2800 bytes
ri();
rt();
vT();
dr();
pl();
Wt();
hki();
XTa = class extends at {
  constructor(e, t, i, r, s) {
    super();
    this.notebookEditor = e;
    this.notebookOptions = t;
    this.instantiationService = i;
    this.contextMenuService = r;
    this.menuService = s;
    this.viewZone = this._register(new uo());
    this._modelDisposables = this._register(new Ut());
    this.topCellToolbarContainer = Ct("div");
    this.topCellToolbar = Ct(".cell-list-top-cell-toolbar-container");
    this.topCellToolbarContainer.appendChild(this.topCellToolbar);
    this._register(this.notebookEditor.onDidAttachViewModel(() => {
      this.updateTopToolbar();
    }));
    this._register(this.notebookOptions.onDidChangeOptions(o => {
      if (o.insertToolbarAlignment || o.insertToolbarPosition || o.cellToolbarLocation) {
        this.updateTopToolbar();
      }
    }));
  }
  updateTopToolbar() {
    const e = this.notebookOptions.getLayoutConfiguration();
    this.viewZone.value = new Ut();
    if (e.insertToolbarPosition === "hidden" || e.insertToolbarPosition === "notebookToolbar") {
      const t = this.notebookOptions.computeTopInsertToolbarHeight(this.notebookEditor.textModel?.viewType);
      if (t !== 0) {
        this.notebookEditor.changeViewZones(i => {
          const r = i.addZone({
            afterModelPosition: 0,
            heightInPx: t,
            domNode: Ct("div")
          });
          i.layoutZone(r);
          this.viewZone.value?.add({
            dispose: () => {
              if (!this.notebookEditor.isDisposed) {
                this.notebookEditor.changeViewZones(s => {
                  s.removeZone(r);
                });
              }
            }
          });
        });
      }
      return;
    }
    this.notebookEditor.changeViewZones(t => {
      const i = this.notebookOptions.computeTopInsertToolbarHeight(this.notebookEditor.textModel?.viewType);
      const r = t.addZone({
        afterModelPosition: 0,
        heightInPx: i,
        domNode: this.topCellToolbarContainer
      });
      t.layoutZone(r);
      this.viewZone.value?.add({
        dispose: () => {
          if (!this.notebookEditor.isDisposed) {
            this.notebookEditor.changeViewZones(o => {
              o.removeZone(r);
            });
          }
        }
      });
      th(this.topCellToolbar);
      const s = this.instantiationService.createInstance(nL, this.topCellToolbar, this.notebookEditor.creationOptions.menuIds.cellTopInsertToolbar, {
        actionViewItemProvider: (o, a) => {
          if (o instanceof Ub) {
            return this.instantiationService.createInstance(Tbn, o, {
              hoverDelegate: a.hoverDelegate
            });
          }
        },
        menuOptions: {
          shouldForwardArgs: true
        },
        toolbarOptions: {
          primaryGroup: o => /^inline/.test(o)
        },
        hiddenItemStrategy: 0
      });
      if (this.notebookEditor.hasModel()) {
        s.context = {
          notebookEditor: this.notebookEditor
        };
      }
      this.viewZone.value?.add(s);
      this.viewZone.value?.add(this.notebookEditor.onDidChangeModel(() => {
        this._modelDisposables.clear();
        if (this.notebookEditor.hasModel()) {
          this._modelDisposables.add(this.notebookEditor.onDidChangeViewCells(() => {
            this.updateClass();
          }));
          this.updateClass();
        }
      }));
      this.updateClass();
    });
  }
  updateClass() {
    if (this.notebookEditor.hasModel() && this.notebookEditor.getLength() === 0) {
      this.topCellToolbar.classList.add("emptyNotebook");
    } else {
      this.topCellToolbar.classList.remove("emptyNotebook");
    }
  }
};
XTa = __decorate([__param(2, ln), __param(3, kc), __param(4, xd)], XTa);
