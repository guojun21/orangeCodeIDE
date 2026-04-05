"use strict";

// Module: out-build/vs/workbench/contrib/notebook/browser/diff/inlineDiff/notebookInlineDiffWidget.js
// Offset: 33659818 (bundle byte offset)
// Size: 2157 bytes
ri();
rt();
Cu();
dr();
Wt();
Lhy();
PU();
LU();
LIa = class extends at {
  get editorWidget() {
    return this.widget.value;
  }
  constructor(e, t, i, r, s, o, a) {
    super();
    this.rootElement = e;
    this.groupId = t;
    this.window = i;
    this.options = r;
    this.dimension = s;
    this.instantiationService = o;
    this.widgetService = a;
    this.widget = {
      value: undefined
    };
  }
  async show(e, t, i, r) {
    if (!this.widget.value) {
      this.createNotebookWidget(e, this.groupId, this.rootElement);
    }
    if (this.dimension) {
      this.widget.value?.layout(this.dimension, this.rootElement, this.position);
    }
    if (t) {
      await this.widget.value?.setOptions({
        ...r
      });
      this.widget.value?.notebookOptions.previousModelToCompare.set(i, undefined);
      await this.widget.value.setModel(t, r?.viewState);
    }
  }
  hide() {
    if (this.widget.value) {
      this.widget.value.notebookOptions.previousModelToCompare.set(undefined, undefined);
      this.widget.value.onWillHide();
    }
  }
  setLayout(e, t) {
    this.dimension = e;
    this.position = t;
  }
  createNotebookWidget(e, t, i) {
    const r = Agn.getSomeEditorContributions([jbn.ID]);
    const s = {
      notebookToolbar: st.NotebookToolbar,
      cellTitleToolbar: st.NotebookCellTitle,
      cellDeleteToolbar: st.NotebookCellDelete,
      cellInsertToolbar: st.NotebookCellBetween,
      cellTopInsertToolbar: st.NotebookCellListTop,
      cellExecuteToolbar: st.NotebookCellExecute,
      cellExecutePrimary: undefined
    };
    const o = ["editor.contrib.review", "editor.contrib.floatingClickMenu", "editor.contrib.dirtydiff", "editor.contrib.testingOutputPeek", "editor.contrib.testingDecorations", "store.contrib.stickyScrollController", "editor.contrib.findController", "editor.contrib.emptyTextEditorHint"];
    const a = SC.getEditorContributions().filter(l => o.indexOf(l.id) === -1);
    this.widget = this.instantiationService.invokeFunction(this.widgetService.retrieveWidget, t, e, {
      contributions: r,
      menuIds: s,
      cellEditorContributions: a,
      options: this.options
    }, this.dimension, this.window);
    if (this.rootElement && this.widget.value.getDomNode()) {
      this.rootElement.setAttribute("aria-flowto", this.widget.value.getDomNode().id || "");
      rFo(this.widget.value.getDomNode(), this.rootElement);
    }
  }
  dispose() {
    super.dispose();
    if (this.widget.value) {
      this.widget.value.dispose();
    }
  }
};
LIa = __decorate([__param(5, ln), __param(6, pO)], LIa);
