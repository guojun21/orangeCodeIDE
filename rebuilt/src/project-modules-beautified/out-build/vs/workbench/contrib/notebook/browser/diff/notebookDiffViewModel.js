"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/diff/notebookDiffViewModel.js
// Offset: 33629899 (bundle byte offset)
// Size: 9169 bytes
yn();
rt();
zr();
DEt();
Prt();
Rrt();
ph();
vr();
_Ia();
j_u = class extends at {
  get items() {
    return this._items;
  }
  get value() {
    return this.diffEditorItems.filter(n => n.type !== "placeholder").filter(n => this._includeUnchanged ? true : n instanceof Jbn || n instanceof BEt || n instanceof REt ? n.type !== "unchanged" || n.containerType !== "unchanged" : true).filter(n => n instanceof REt ? !this.hideOutput : true).filter(n => n instanceof BEt ? !this.ignoreMetadata : true);
  }
  get hasUnchangedCells() {
    return this._hasUnchangedCells === true;
  }
  get includeUnchanged() {
    return this._includeUnchanged === true;
  }
  set includeUnchanged(n) {
    this._includeUnchanged = n;
    this._onDidChange.fire();
  }
  constructor(n, e, t, i, r, s, o, a) {
    super();
    this.model = n;
    this.notebookEditorWorkerService = e;
    this.configurationService = t;
    this.eventDispatcher = i;
    this.notebookService = r;
    this.diffEditorHeightCalculator = s;
    this.fontInfo = o;
    this.excludeUnchangedPlaceholder = a;
    this.placeholderAndRelatedCells = new Map();
    this._items = [];
    this._onDidChangeItems = this._register(new Qe());
    this.onDidChangeItems = this._onDidChangeItems.event;
    this.disposables = this._register(new Ut());
    this._onDidChange = this._register(new Qe());
    this.diffEditorItems = [];
    this.onDidChange = this._onDidChange.event;
    this.originalCellViewModels = [];
    this.hideOutput = this.model.modified.notebook.transientOptions.transientOutputs || this.configurationService.getValue("notebook.diff.ignoreOutputs");
    this.ignoreMetadata = this.configurationService.getValue("notebook.diff.ignoreMetadata");
    this._register(this.configurationService.onDidChangeConfiguration(l => {
      let u = false;
      let d = false;
      if (l.affectsConfiguration("notebook.diff.ignoreMetadata")) {
        const m = this.configurationService.getValue("notebook.diff.ignoreMetadata");
        if (m !== undefined && this.ignoreMetadata !== m) {
          this.ignoreMetadata = m;
          u = true;
          d = true;
        }
      }
      if (l.affectsConfiguration("notebook.diff.ignoreOutputs")) {
        const m = this.configurationService.getValue("notebook.diff.ignoreOutputs");
        if (m !== undefined && this.hideOutput !== (m || this.model.modified.notebook.transientOptions.transientOutputs)) {
          this.hideOutput = m || !!this.model.modified.notebook.transientOptions.transientOutputs;
          u = true;
        }
      }
      if (d) {
        this.toggleNotebookMetadata();
      }
      if (u) {
        this._onDidChange.fire();
      }
    }));
  }
  dispose() {
    this.clear();
    super.dispose();
  }
  clear() {
    this.disposables.clear();
    Bo(Array.from(this.placeholderAndRelatedCells.keys()));
    this.placeholderAndRelatedCells.clear();
    Bo(this.originalCellViewModels);
    this.originalCellViewModels = [];
    Bo(this._items);
    this._items.splice(0, this._items.length);
  }
  async computeDiff(n) {
    const e = await WP(this.notebookEditorWorkerService.computeDiff(this.model.original.resource, this.model.modified.resource), n);
    if (!e || n.isCancellationRequested) {
      return;
    }
    Shy(this.model.original.notebook, this.model.modified.notebook, e.cellsDiff);
    const {
      cellDiffInfo: t,
      firstChangeIndex: i
    } = wIa(this.model.original.notebook, this.model.modified.notebook, e);
    if (!khy(t, this.originalCellViewModels, this.model)) {
      await WP(this.updateViewModels(t, e.metadataChanged, i), n);
      if (n.isCancellationRequested) {
        return;
      }
      this.updateDiffEditorItems();
    }
  }
  toggleNotebookMetadata() {
    if (this.notebookMetadataViewModel) {
      if (this.ignoreMetadata) {
        if (this._items.length && this._items[0] === this.notebookMetadataViewModel) {
          this._items.splice(0, 1);
          this._onDidChangeItems.fire({
            start: 0,
            deleteCount: 1,
            elements: []
          });
        }
      } else if (!this._items.length || this._items[0] !== this.notebookMetadataViewModel) {
        this._items.splice(0, 0, this.notebookMetadataViewModel);
        this._onDidChangeItems.fire({
          start: 0,
          deleteCount: 0,
          elements: [this.notebookMetadataViewModel]
        });
      }
    }
  }
  updateDiffEditorItems() {
    this.diffEditorItems = [];
    const n = this.model.original.resource;
    const e = this.model.modified.resource;
    this._hasUnchangedCells = false;
    this.items.forEach(t => {
      switch (t.type) {
        case "delete":
          {
            this.diffEditorItems.push(new Jbn(t.original.uri, undefined, t.type, t.type));
            const i = Dg.generateCellPropertyUri(n, t.original.handle, _n.vscodeNotebookCellMetadata);
            this.diffEditorItems.push(new BEt(i, undefined, t.type, t.type));
            const r = Dg.generateCellPropertyUri(n, t.original.handle, _n.vscodeNotebookCellOutput);
            this.diffEditorItems.push(new REt(r, undefined, t.type, t.type));
            break;
          }
        case "insert":
          {
            this.diffEditorItems.push(new Jbn(undefined, t.modified.uri, t.type, t.type));
            const i = Dg.generateCellPropertyUri(e, t.modified.handle, _n.vscodeNotebookCellMetadata);
            this.diffEditorItems.push(new BEt(undefined, i, t.type, t.type));
            const r = Dg.generateCellPropertyUri(e, t.modified.handle, _n.vscodeNotebookCellOutput);
            this.diffEditorItems.push(new REt(undefined, r, t.type, t.type));
            break;
          }
        case "modified":
          {
            const i = t.checkIfInputModified() ? t.type : "unchanged";
            const r = t.checkIfInputModified() || t.checkMetadataIfModified() || t.checkIfOutputsModified() ? t.type : "unchanged";
            this.diffEditorItems.push(new Jbn(t.original.uri, t.modified.uri, i, r));
            const s = Dg.generateCellPropertyUri(n, t.original.handle, _n.vscodeNotebookCellMetadata);
            const o = Dg.generateCellPropertyUri(e, t.modified.handle, _n.vscodeNotebookCellMetadata);
            this.diffEditorItems.push(new BEt(s, o, t.checkMetadataIfModified() ? t.type : "unchanged", r));
            const a = Dg.generateCellPropertyUri(n, t.original.handle, _n.vscodeNotebookCellOutput);
            const l = Dg.generateCellPropertyUri(e, t.modified.handle, _n.vscodeNotebookCellOutput);
            this.diffEditorItems.push(new REt(a, l, t.checkIfOutputsModified() ? t.type : "unchanged", r));
            break;
          }
        case "unchanged":
          {
            this._hasUnchangedCells = true;
            this.diffEditorItems.push(new Jbn(t.original.uri, t.modified.uri, t.type, t.type));
            const i = Dg.generateCellPropertyUri(n, t.original.handle, _n.vscodeNotebookCellMetadata);
            const r = Dg.generateCellPropertyUri(e, t.modified.handle, _n.vscodeNotebookCellMetadata);
            this.diffEditorItems.push(new BEt(i, r, t.type, t.type));
            const s = Dg.generateCellPropertyUri(n, t.original.handle, _n.vscodeNotebookCellOutput);
            const o = Dg.generateCellPropertyUri(e, t.modified.handle, _n.vscodeNotebookCellOutput);
            this.diffEditorItems.push(new REt(s, o, t.type, t.type));
            break;
          }
      }
    });
    this._onDidChange.fire();
  }
  async updateViewModels(n, e, t) {
    const i = await this.createDiffViewModels(n, e);
    const r = this._items.length;
    this.clear();
    this._items.splice(0, r);
    let s;
    this.originalCellViewModels = i;
    i.forEach((o, a) => {
      if (o.type === "unchanged" && !this.excludeUnchangedPlaceholder) {
        if (!s) {
          o.displayIconToHideUnmodifiedCells = true;
          s = new w6f(o.mainDocumentTextModel, o.editorEventDispatcher, o.initData);
          this._items.push(s);
          const u = s;
          this.disposables.add(u.onUnfoldHiddenCells(() => {
            const d = this.placeholderAndRelatedCells.get(u);
            if (!Array.isArray(d)) {
              return;
            }
            const m = this._items.indexOf(u);
            this._items.splice(m, 1, ...d);
            this._onDidChangeItems.fire({
              start: m,
              deleteCount: 1,
              elements: d
            });
          }));
          this.disposables.add(o.onHideUnchangedCells(() => {
            const d = this.placeholderAndRelatedCells.get(u);
            if (!Array.isArray(d)) {
              return;
            }
            const m = this._items.indexOf(o);
            this._items.splice(m, d.length, u);
            this._onDidChangeItems.fire({
              start: m,
              deleteCount: d.length,
              elements: [u]
            });
          }));
        }
        const l = this.placeholderAndRelatedCells.get(s) || [];
        l.push(o);
        this.placeholderAndRelatedCells.set(s, l);
        s.hiddenCells.push(o);
      } else {
        s = undefined;
        this._items.push(o);
      }
    });
    this._onDidChangeItems.fire({
      start: 0,
      deleteCount: r,
      elements: this._items,
      firstChangeIndex: t
    });
  }
  async createDiffViewModels(n, e) {
    const t = this.model.original.notebook;
    const i = this.model.modified.notebook;
    const r = {
      metadataStatusHeight: this.configurationService.getValue("notebook.diff.ignoreMetadata") ? 0 : 25,
      outputStatusHeight: this.configurationService.getValue("notebook.diff.ignoreOutputs") || i.transientOptions.transientOutputs ? 0 : 25,
      fontInfo: this.fontInfo
    };
    const s = [];
    this.notebookMetadataViewModel = this._register(new M_u(this.model.original.notebook, this.model.modified.notebook, e ? "modifiedMetadata" : "unchangedMetadata", this.eventDispatcher, r, this.notebookService, this.diffEditorHeightCalculator));
    if (!this.ignoreMetadata) {
      if (e) {
        await this.notebookMetadataViewModel.computeHeights();
      }
      s.push(this.notebookMetadataViewModel);
    }
    (await Promise.all(n.map(async a => {
      switch (a.type) {
        case "delete":
          return new O_u(t, i, t.cells[a.originalCellIndex], undefined, "delete", this.eventDispatcher, r, this.notebookService, this.configurationService, this.diffEditorHeightCalculator, a.originalCellIndex);
        case "insert":
          return new O_u(i, t, undefined, i.cells[a.modifiedCellIndex], "insert", this.eventDispatcher, r, this.notebookService, this.configurationService, this.diffEditorHeightCalculator, a.modifiedCellIndex);
        case "modified":
          {
            const l = new mwe(this.model.modified.notebook, this.model.original.notebook, t.cells[a.originalCellIndex], i.cells[a.modifiedCellIndex], "modified", this.eventDispatcher, r, this.notebookService, this.configurationService, a.originalCellIndex, this.diffEditorHeightCalculator);
            await l.computeEditorHeights();
            return l;
          }
        case "unchanged":
          return new mwe(this.model.modified.notebook, this.model.original.notebook, t.cells[a.originalCellIndex], i.cells[a.modifiedCellIndex], "unchanged", this.eventDispatcher, r, this.notebookService, this.configurationService, a.originalCellIndex, this.diffEditorHeightCalculator);
      }
    }))).forEach(a => s.push(a));
    return s;
  }
};
CIa = class extends Nrt {
  constructor(n, e, t, i, r, s, o) {
    super(n, e, t, o);
    this.type = i;
    this.containerType = r;
    this.kind = s;
  }
};
Jbn = class extends CIa {
  constructor(n, e, t, i) {
    super(n, e, e || n, t, i, "Cell", {
      [Drt.key]: "Cell",
      [Brt.key]: t
    });
  }
};
BEt = class extends CIa {
  constructor(n, e, t, i) {
    super(n, e, e || n, t, i, "Metadata", {
      [Drt.key]: "Metadata",
      [Brt.key]: t
    });
  }
};
REt = class extends CIa {
  constructor(n, e, t, i) {
    super(n, e, e || n, t, i, "Output", {
      [Drt.key]: "Output",
      [Brt.key]: t
    });
  }
};
