// Module: out-build/vs/editor/common/services/treeViewsDnd.js
// Offset: 25131262 (bundle byte offset)
// Size: 387 bytes

Zbg=class{
  constructor(){
    this._dragOperations=new Map
  }
  removeDragOperationTransfer(n){
    if(n&&this._dragOperations.has(n)){
      const e=this._dragOperations.get(n);
      return this._dragOperations.delete(n),e
    }
  }
  addDragOperationTransfer(n, e){
    this._dragOperations.set(n, e)
  }
}, hme=class{
  constructor(n){
    this.identifier=n
  }
}
}
}), Zun, Xun=