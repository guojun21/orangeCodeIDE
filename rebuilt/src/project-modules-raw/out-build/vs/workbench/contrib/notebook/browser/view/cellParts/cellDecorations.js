// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellDecorations.js
// Offset: 33234159 (bundle byte offset)
// Size: 1507 bytes

ri(), LQ(), Vwu=class extends JV{
  constructor(n, e, t){
    super(), this.notebookEditor=n, this.rootContainer=e, this.decorationContainer=t
  }
  didRenderCell(n){
    const e=[];
    this.rootContainer.classList.forEach(i=>{
      /^nb\-.*$/.test(i)&&e.push(i)
    }), e.forEach(i=>{
      this.rootContainer.classList.remove(i)
    }), this.decorationContainer.innerText="";
    const t=()=>{
      this.decorationContainer.innerText="",n.getCellDecorations().filter(i=>i.topClassName!==void 0).forEach(i=>{
        this.decorationContainer.append(Ct(`.${i.topClassName}`))
      })
    };
    this.cellDisposables.add(n.onCellDecorationsChanged(i=>{
      (i.added.find(s=>s.topClassName)||i.removed.find(s=>s.topClassName))&&t()
    })), t(), this.registerDecorations()
  }
  registerDecorations(){
    this.currentCell&&(this.cellDisposables.add(this.currentCell.onCellDecorationsChanged(n=>{
      n.added.forEach(e=>{
        e.className&&this.currentCell&&this.rootContainer.classList.add(e.className)
      }),n.removed.forEach(e=>{
        e.className&&this.currentCell&&this.rootContainer.classList.remove(e.className)
      })
    })), this.currentCell.getCellDecorations().forEach(n=>{
      n.className&&this.currentCell&&(this.rootContainer.classList.add(n.className),this.notebookEditor.deltaCellContainerClassNames(this.currentCell.id,[n.className],[],this.currentCell.cellKind)),n.outputClassName&&this.currentCell&&this.notebookEditor.deltaCellContainerClassNames(this.currentCell.id,[n.outputClassName],[],this.currentCell.cellKind)
    }))
  }
}
}
}), C8f, S8f, ody=