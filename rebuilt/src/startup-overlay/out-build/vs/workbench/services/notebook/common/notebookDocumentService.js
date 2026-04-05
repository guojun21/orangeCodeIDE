"use strict";

// Module: out-build/vs/workbench/services/notebook/common/notebookDocumentService.js
// Offset: 25004122 (bundle byte offset)
// Size: 2444 bytes
Ql();
cu();
zr();
Er();
Wt();
Jpi = xi("notebookDocumentService");
Gca = ["W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f"];
cfg = new RegExp(`^[${Gca.join("")}]+`);
CWl = 7;
lfg = class {
  constructor() {
    this._documents = new fu();
  }
  getNotebook(n) {
    if (n.scheme === _n.vscodeNotebookCell) {
      const e = wWl(n);
      if (e) {
        const t = this._documents.get(e.notebook);
        if (t) {
          return t;
        }
      }
    }
    if (n.scheme === _n.vscodeNotebookCellOutput) {
      const e = _Wl(n);
      if (e) {
        const t = this._documents.get(e.notebook);
        if (t) {
          return t;
        }
      }
    }
    return this._documents.get(n);
  }
  addNotebookDocument(n) {
    this._documents.set(n.uri, n);
  }
  removeNotebookDocument(n) {
    this._documents.delete(n.uri);
  }
};
Vi(Jpi, lfg, 1);
