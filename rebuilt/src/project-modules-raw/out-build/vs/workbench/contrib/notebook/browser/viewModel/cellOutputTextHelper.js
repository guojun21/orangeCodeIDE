// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/cellOutputTextHelper.js
// Offset: 33269233 (bundle byte offset)
// Size: 664 bytes

ph(), n_u=new TextDecoder, BTa=["text/latex", "text/html", "application/vnd.code.notebook.error", "application/vnd.code.notebook.stdout", "application/x.notebook.stdout", "application/x.notebook.stream", "application/vnd.code.notebook.stderr", "application/x.notebook.stderr", "text/plain", "text/markdown", "application/json"]
}
});
function i_u(n, e){
  const t=e.getViewModel();
  if(t){
    const i=t.viewCells.filter(r=>r.cellKind===zd.Code);
    for(const r of i){
      const s=r.outputsViewModels.find(o=>o.model.outputId===n||o.model.alternativeOutputId===n);
      if(s)return s
    }
  }
}
var r_u, N8f, s_u=