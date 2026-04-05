"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/diff/inlineDiff/notebookDeletedCellDecorator.js
// Offset: 33648727 (bundle byte offset)
// Size: 5008 bytes
ive();
rt();
oa();
Ku();
LSe();
Prt();
Sb();
ri();
vT();
Wt();
E_();
si();
pwe();
M6f = nve("notebookRenderer", {
  createHTML: n => n
});
Hki = class extends at {
  constructor(e, t, i, r) {
    super();
    this._notebookEditor = e;
    this.toolbar = t;
    this.languageService = i;
    this.instantiationService = r;
    this.zoneRemover = this._register(new Ut());
    this.createdViewZones = new Map();
    this.deletedCellInfos = new Map();
  }
  getTop(e) {
    const t = this.deletedCellInfos.get(e);
    if (!t) {
      return;
    }
    if (t.previousIndex === -1) {
      return 0;
    }
    const i = this._notebookEditor.getCellsInRange({
      start: t.previousIndex,
      end: t.previousIndex + 1
    });
    if (!i.length) {
      return this._notebookEditor.getLayoutInfo().height + t.offset;
    }
    const r = i[0];
    const s = this._notebookEditor.getHeightOfElement(r);
    return this._notebookEditor.getAbsoluteTopOfElement(r) + s + t.offset;
  }
  reveal(e) {
    const t = this.getTop(e);
    if (typeof t == "number") {
      this._notebookEditor.focusContainer();
      this._notebookEditor.revealOffsetInCenterIfOutsideViewport(t);
      const i = this.deletedCellInfos.get(e);
      if (i) {
        const r = i.previousIndex === -1 ? 0 : i.previousIndex;
        this._notebookEditor.setFocus({
          start: r,
          end: r
        });
        this._notebookEditor.setSelections([{
          start: r,
          end: r
        }]);
      }
    }
  }
  apply(e, t) {
    this.clear();
    let i = -1;
    const r = {
      cells: [],
      index: 0
    };
    e.forEach(s => {
      if (s.type === "delete") {
        const o = t.cells[s.originalCellIndex];
        if (o) {
          r.cells.push({
            cell: o,
            originalIndex: s.originalCellIndex,
            previousIndex: i
          });
          r.index = i;
        }
      } else {
        if (r.cells.length) {
          this._createWidget(r.index + 1, r.cells);
          r.cells.length = 0;
        }
        i = s.modifiedCellIndex;
      }
    });
    if (r.cells.length) {
      this._createWidget(r.index + 1, r.cells);
    }
  }
  clear() {
    this.deletedCellInfos.clear();
    this.zoneRemover.clear();
  }
  _createWidget(e, t) {
    this._createWidgetImpl(e, t);
  }
  async _createWidgetImpl(e, t) {
    const i = document.createElement("div");
    const r = [];
    const s = await Promise.all(t.map(async a => {
      const l = new BIa(this._notebookEditor, this.toolbar, a.cell.getValue(), a.cell.language, i, a.originalIndex, this.languageService, this.instantiationService);
      r.push(l);
      const u = await l.render();
      this.deletedCellInfos.set(a.originalIndex, {
        height: u,
        previousIndex: a.previousIndex,
        offset: 0
      });
      return u;
    }));
    Array.from(this.deletedCellInfos.keys()).sort((a, l) => a - l).forEach(a => {
      const l = this.deletedCellInfos.get(a - 1);
      if (l) {
        const u = this.deletedCellInfos.get(a);
        if (u) {
          u.offset = l.height + l.offset;
        }
      }
    });
    const o = s.reduce((a, l) => a + l, 0);
    this._notebookEditor.changeViewZones(a => {
      const l = {
        afterModelPosition: e,
        heightInPx: o + 4,
        domNode: i
      };
      const u = a.addZone(l);
      a.layoutZone(u);
      this.createdViewZones.set(e, u);
      const d = this._notebookEditor.deltaCellDecorations([], [{
        viewZoneId: u,
        options: {
          overviewRuler: {
            color: qki,
            position: HU.Center
          }
        }
      }]);
      this.zoneRemover.add($i(() => {
        if (this.createdViewZones.get(e) === u) {
          this.createdViewZones.delete(e);
        }
        if (!this._notebookEditor.isDisposed) {
          this._notebookEditor.changeViewZones(m => {
            m.removeZone(u);
            Bo(r);
          });
          this._notebookEditor.deltaCellDecorations(d, []);
        }
      }));
    });
  }
};
Hki = __decorate([__param(2, Jl), __param(3, ln)], Hki);
BIa = class extends at {
  constructor(e, t, i, r, s, o, a, l) {
    super();
    this._notebookEditor = e;
    this._toolbarOptions = t;
    this.code = i;
    this.language = r;
    this._originalIndex = o;
    this.languageService = a;
    this.instantiationService = l;
    this.container = Rt(s, document.createElement("div"));
    this._register($i(() => {
      s.removeChild(this.container);
    }));
  }
  async render() {
    const e = this.code;
    const t = this.language;
    const i = await Oft(this.languageService, e, t);
    const r = this._notebookEditor.getBaseCellEditorOptions(t).value;
    const s = "--notebook-editor-font-family";
    const o = "--notebook-editor-font-size";
    const a = "--notebook-editor-font-weight";
    const u = this._notebookEditor.codeEditors.map(B => B[1]).find(B => B)?.getOptions().get(151);
    const d = `font-family: var(${s});font-weight: var(${a});font-size: var(${o});${r.lineHeight}` ? `line-height: ${r.lineHeight}px;` : "" + u?.contentLeft ? `margin-left: ${u}px;` : "white-space: pre;";
    const m = this.container;
    m.classList.add("code-cell-row");
    if (this._toolbarOptions) {
      const B = document.createElement("div");
      B.className = this._toolbarOptions?.className;
      m.appendChild(B);
      const N = this._register(this.instantiationService.createChild(new EA([wi, this._notebookEditor.scopedContextKeyService]))).createInstance(nL, B, this._toolbarOptions.menuId, {
        telemetrySource: this._toolbarOptions.telemetrySource,
        hiddenItemStrategy: -1,
        toolbarOptions: {
          primaryGroup: () => true
        },
        menuOptions: {
          renderShortTitle: true,
          arg: this._toolbarOptions.argFactory(this._originalIndex)
        }
      });
      this._store.add(N);
      B.style.position = "absolute";
      B.style.right = "40px";
      B.style.zIndex = "10";
      B.classList.add("hover");
    }
    const p = Rt(m, Ct(".cell-inner-container"));
    p.style.position = "relative";
    const g = Rt(p, Ct(".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-left"));
    const f = Rt(p, Ct(".cell.code"));
    Rt(g, Ct("div.execution-count-label"));
    const A = Rt(f, Ct(".cell-editor-part"));
    let w = Rt(A, Ct(".cell-editor-container"));
    w = Rt(w, Ct(".code", {
      style: d
    }));
    if (r.fontFamily) {
      w.style.setProperty(s, r.fontFamily);
    }
    if (r.fontSize) {
      w.style.setProperty(o, `${r.fontSize}px`);
    }
    if (r.fontWeight) {
      w.style.setProperty(a, r.fontWeight);
    }
    w.innerHTML = M6f?.createHTML(i) || i;
    return Zv(e).length * (r.lineHeight || y6f) + 12 + 12 + 16 + 16;
  }
};
BIa = __decorate([__param(6, Jl), __param(7, ln)], BIa);
