// Module: out-build/vs/workbench/contrib/notebook/browser/diff/inlineDiff/notebookInsertedCellDecorator.js
// Offset: 33653735 (bundle byte offset)
// Size: 781 bytes

rt(), Sb(), pwe(), Y_u=class extends at{
  constructor(n){
    super(), this.notebookEditor=n, this.decorators=this._register(new Ut)
  }
  apply(n){
    const e=this.notebookEditor.textModel;
    if(!e)return;
    const t=n.filter(r=>r.type==="insert").map(r=>e.cells[r.modifiedCellIndex]), i=this.notebookEditor.deltaCellDecorations([], t.map(r=>({
      handle:r.handle,options:{
        className:"nb-insertHighlight",outputClassName:"nb-insertHighlight",overviewRuler:{
          color:Qbn,modelRanges:[],includeOutput:!0,position:HU.Full
        }
      }
    })));
    this.clear(), this.decorators.add($i(()=>{
      this.notebookEditor.isDisposed||this.notebookEditor.deltaCellDecorations(i,[])
    }))
  }
  clear(){
    this.decorators.clear()
  }
}
}
}), U6f, RIa, PIa, Phy=