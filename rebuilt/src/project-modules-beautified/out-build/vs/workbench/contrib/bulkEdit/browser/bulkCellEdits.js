"use strict";

// Module: out-build/vs/workbench/contrib/bulkEdit/browser/bulkCellEdits.js
// Offset: 30821554 (bundle byte offset)
// Size: 1821 bytes
Vs();
oa();
Js();
Yn();
YI();
Sb();
ph();
lce();
ss();
Mce = class xWa extends G3n {
  static is(e) {
    if (e instanceof xWa) {
      return true;
    } else {
      return je.isUri(e.resource) && $g(e.cellEdit);
    }
  }
  static lift(e) {
    if (e instanceof xWa) {
      return e;
    } else {
      return new xWa(e.resource, e.cellEdit, e.notebookVersionId, e.metadata);
    }
  }
  constructor(e, t, i = undefined, r) {
    super(r);
    this.resource = e;
    this.cellEdit = t;
    this.notebookVersionId = i;
  }
};
Q0a = class {
  constructor(e, t, i, r, s, o, a) {
    this._undoRedoGroup = e;
    this._progress = i;
    this._token = r;
    this._edits = s;
    this._editorService = o;
    this._notebookModelService = a;
    this._edits = this._edits.map(l => {
      if (l.resource.scheme === Dg.scheme) {
        const u = Dg.parse(l.resource)?.notebook;
        if (!u) {
          throw new Error(`Invalid notebook URI: ${l.resource}`);
        }
        return new Mce(u, l.cellEdit, l.notebookVersionId, l.metadata);
      } else {
        return l;
      }
    });
  }
  async apply() {
    const e = [];
    const t = yte(this._edits, (i, r) => R4(i.resource.toString(), r.resource.toString()));
    for (const i of t) {
      if (this._token.isCancellationRequested) {
        break;
      }
      const [r] = i;
      const s = await this._notebookModelService.resolve(r.resource);
      if (typeof r.notebookVersionId == "number" && s.object.notebook.versionId !== r.notebookVersionId) {
        s.dispose();
        throw new Error(`Notebook '${r.resource}' has changed in the meantime`);
      }
      const o = i.map(d => d.cellEdit);
      const a = !s.object.isReadonly();
      const l = sA(this._editorService.activeEditorPane);
      const u = l?.textModel?.uri.toString() === s.object.notebook.uri.toString() ? {
        kind: Wy.Index,
        focus: l.getFocus(),
        selections: l.getSelections()
      } : undefined;
      s.object.notebook.applyEdits(o, true, u, () => {}, this._undoRedoGroup, a);
      s.dispose();
      this._progress.report(undefined);
      e.push(r.resource);
    }
    return e;
  }
};
Q0a = __decorate([__param(5, yi), __param(6, Lq)], Q0a);
