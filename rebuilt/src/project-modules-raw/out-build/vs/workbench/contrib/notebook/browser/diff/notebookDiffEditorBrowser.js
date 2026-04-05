// Module: out-build/vs/workbench/contrib/notebook/browser/diff/notebookDiffEditorBrowser.js
// Offset: 33530093 (bundle byte offset)
// Size: 988 bytes

si(), Ht(), (function(n){
  n[n.Original=0]="Original", n[n.Modified=1]="Modified"
})(s1||(s1={
  
})), hwe=16, Fbn=new Sn("notebook.diffEditor.cell.inputChanged", !1), hIa=new Sn("notebook.diffEditor.metadataChanged", !1), R_u="notebook.diffEditor.cell.ignoreWhitespace", g6f=new Sn(R_u, !1), Obn=new Sn("notebook.diffEditor.cell.property.changed", !1), P_u=new Sn("notebook.diffEditor.cell.property.expanded", !1), f6f=new Sn("notebook.diffEditor.allCollapsed", void 0, _(9279, null)), Ubn=new Sn("notebook.diffEditor.hasUnchangedCells", void 0, _(9280, null)), mIa=new Sn("notebook.diffEditor.unchangedCellsAreHidden", void 0, _(9281, null)), Drt=new Sn("notebook.diffEditor.item.kind", void 0, _(9282, null)), Brt=new Sn("notebook.diffEditor.item.state", void 0, _(9283, null))
}
});
function L_u(n, e){
  let t={
    
  };
  if(n){
    const r=new Set([...Object.keys(e)]);
    for(const s of r)n[s]||(t[s]=e[s])
  }
  else t=e;
  return wmn(t, {
    
  })
}
var N_u, b6f=