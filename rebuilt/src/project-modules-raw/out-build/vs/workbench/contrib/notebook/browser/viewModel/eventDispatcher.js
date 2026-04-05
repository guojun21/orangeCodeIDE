// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/eventDispatcher.js
// Offset: 33333177 (bundle byte offset)
// Size: 760 bytes

yn(), rt(), G0a(), U8f=class extends at{
  constructor(){
    super(...arguments), this._onDidChangeLayout=this._register(new Qe), this.onDidChangeLayout=this._onDidChangeLayout.event, this._onDidChangeMetadata=this._register(new Qe), this.onDidChangeMetadata=this._onDidChangeMetadata.event, this._onDidChangeCellState=this._register(new Qe), this.onDidChangeCellState=this._onDidChangeCellState.event
  }
  emit(n){
    for(let e=0, t=n.length;
    e<t;
    e++){
      const i=n[e];
      switch(i.type){
        case dit.LayoutChanged:this._onDidChangeLayout.fire(i);
        break;
        case dit.MetadataChanged:this._onDidChangeMetadata.fire(i);
        break;
        case dit.CellStateChanged:this._onDidChangeCellState.fire(i);
        break
      }
    }
  }
}
}
}), m_u, $8f=