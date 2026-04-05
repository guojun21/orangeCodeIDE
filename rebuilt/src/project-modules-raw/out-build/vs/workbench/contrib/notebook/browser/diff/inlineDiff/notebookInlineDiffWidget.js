// Module: out-build/vs/workbench/contrib/notebook/browser/diff/inlineDiff/notebookInlineDiffWidget.js
// Offset: 33659818 (bundle byte offset)
// Size: 2157 bytes

ri(), rt(), Cu(), dr(), Wt(), Lhy(), PU(), LU(), LIa=class extends at{
  get editorWidget(){
    return this.widget.value
  }
  constructor(e, t, i, r, s, o, a){
    super(), this.rootElement=e, this.groupId=t, this.window=i, this.options=r, this.dimension=s, this.instantiationService=o, this.widgetService=a, this.widget={
      value:void 0
    }
  }
  async show(e, t, i, r){
    this.widget.value||this.createNotebookWidget(e, this.groupId, this.rootElement), this.dimension&&this.widget.value?.layout(this.dimension, this.rootElement, this.position), t&&(await this.widget.value?.setOptions({
      ...r
    }), this.widget.value?.notebookOptions.previousModelToCompare.set(i, void 0), await this.widget.value.setModel(t, r?.viewState))
  }
  hide(){
    this.widget.value&&(this.widget.value.notebookOptions.previousModelToCompare.set(void 0, void 0), this.widget.value.onWillHide())
  }
  setLayout(e, t){
    this.dimension=e, this.position=t
  }
  createNotebookWidget(e, t, i){
    const r=Agn.getSomeEditorContributions([jbn.ID]), s={
      notebookToolbar:st.NotebookToolbar,cellTitleToolbar:st.NotebookCellTitle,cellDeleteToolbar:st.NotebookCellDelete,cellInsertToolbar:st.NotebookCellBetween,cellTopInsertToolbar:st.NotebookCellListTop,cellExecuteToolbar:st.NotebookCellExecute,cellExecutePrimary:void 0
    }, o=["editor.contrib.review", "editor.contrib.floatingClickMenu", "editor.contrib.dirtydiff", "editor.contrib.testingOutputPeek", "editor.contrib.testingDecorations", "store.contrib.stickyScrollController", "editor.contrib.findController", "editor.contrib.emptyTextEditorHint"], a=SC.getEditorContributions().filter(l=>o.indexOf(l.id)===-1);
    this.widget=this.instantiationService.invokeFunction(this.widgetService.retrieveWidget, t, e, {
      contributions:r,menuIds:s,cellEditorContributions:a,options:this.options
    }, this.dimension, this.window), this.rootElement&&this.widget.value.getDomNode()&&(this.rootElement.setAttribute("aria-flowto", this.widget.value.getDomNode().id||""), rFo(this.widget.value.getDomNode(), this.rootElement))
  }
  dispose(){
    super.dispose(), this.widget.value&&this.widget.value.dispose()
  }
}, LIa=__decorate([__param(5, ln), __param(6, pO)], LIa)
}
}), Jki, $6f, q6f, m5, NIa=