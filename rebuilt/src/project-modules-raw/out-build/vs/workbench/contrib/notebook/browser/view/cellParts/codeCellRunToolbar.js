// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/codeCellRunToolbar.js
// Offset: 33303038 (bundle byte offset)
// Size: 2032 bytes

wRe(), nl(), rt(), Qh(), Ht(), Snt(), dg(), dr(), Av(), pl(), Wt(), ka(), LQ(), R8f(), i1(), NTa=class extends JV{
  constructor(e, t, i, r, s, o, a, l, u, d){
    super(), this.notebookEditor=e, this.contextKeyService=t, this.cellContainer=i, this.runButtonContainer=r, this.keybindingService=l, this.contextMenuService=u, this.instantiationService=d, this.primaryMenu=this._register(a.createMenu(s, t)), this.secondaryMenu=this._register(a.createMenu(o, t)), this.createRunCellToolbar(r, i, t);
    const m=()=>{
      const g=this.getCellToolbarActions(this.primaryMenu).primary[0];
      this.toolbar.setActions(g?[g]:[])
    };
    m(), this._register(this.primaryMenu.onDidChange(m)), this._register(this.secondaryMenu.onDidChange(m)), this._register(this.notebookEditor.notebookOptions.onDidChangeOptions(m))
  }
  didRenderCell(e){
    if(this.cellDisposables.add(B8f(this.notebookEditor, e, this.runButtonContainer)), this.notebookEditor.hasModel()){
      const t={
        ui:!0,cell:e,notebookEditor:this.notebookEditor,$mid:13
      };
      this.toolbar.context=t
    }
  }
  getCellToolbarActions(e){
    return tM(e.getActions({
      shouldForwardArgs:!0
    }), t=>/^inline/.test(t))
  }
  createRunCellToolbar(e, t, i){
    const r=this._register(new Ut), s=this._register(new Hs("notebook.moreRunActions", _(9488, null), "codicon-chevron-down", !0)), o=l=>this.keybindingService.lookupKeybinding(l.id, a), a=this._register(wdy(i));
    this.toolbar=this._register(new ave(e, this.contextMenuService, {
      getKeyBinding:o,actionViewItemProvider:(l,u)=>{
        r.clear();
        const d=this.getCellToolbarActions(this.primaryMenu).primary[0];
        if(!(d instanceof Ub))return;
        const m=this.getCellToolbarActions(this.secondaryMenu).secondary;
        if(!m.length)return;
        const p=this.instantiationService.createInstance(Iye,d,s,m,"notebook-cell-run-toolbar",{
          ...u,getKeyBinding:o
        });
        return r.add(p.onDidChangeDropdownVisibility(g=>{
          t.classList.toggle("cell-run-toolbar-dropdown-active",g)
        })),p
      },renderDropdownAsChildElement:!0
    }))
  }
}, NTa=__decorate([__param(6, xd), __param(7, mo), __param(8, kc), __param(9, ln)], NTa)
}
}), o_u, Cdy=