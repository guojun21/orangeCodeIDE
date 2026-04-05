// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/collapsedCellInput.js
// Offset: 33305070 (bundle byte offset)
// Size: 613 bytes

ri(), LQ(), o_u=class extends JV{
  constructor(n, e){
    super(), this.notebookEditor=n, this._register(ei(e, ir.DBLCLICK, t=>{
      !this.currentCell||!this.notebookEditor.hasModel()||(this.currentCell.isInputCollapsed?this.currentCell.isInputCollapsed=!1:this.currentCell.isOutputCollapsed=!1)
    })), this._register(ei(e, ir.CLICK, t=>{
      if(!this.currentCell||!this.notebookEditor.hasModel())return;
      const i=t.target;
      i&&i.classList&&i.classList.contains("expandInputIcon")&&(this.currentCell.isInputCollapsed=!1)
    }))
  }
}
}
}), a_u, MTa, Sdy=