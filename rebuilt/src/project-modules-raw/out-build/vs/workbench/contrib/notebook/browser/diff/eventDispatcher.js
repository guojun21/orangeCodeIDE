// Module: out-build/vs/workbench/contrib/notebook/browser/diff/eventDispatcher.js
// Offset: 33529267 (bundle byte offset)
// Size: 826 bytes

yn(), rt(), (function(n){
  n[n.LayoutChanged=1]="LayoutChanged", n[n.CellLayoutChanged=2]="CellLayoutChanged"
})(xEt||(xEt={
  
})), p6f=class{
  constructor(n, e){
    this.source=n, this.value=e, this.type=xEt.LayoutChanged
  }
}, D_u=class extends at{
  constructor(){
    super(...arguments), this._onDidChangeLayout=this._register(new Qe), this.onDidChangeLayout=this._onDidChangeLayout.event, this._onDidChangeCellLayout=this._register(new Qe), this.onDidChangeCellLayout=this._onDidChangeCellLayout.event
  }
  emit(n){
    for(let e=0, t=n.length;
    e<t;
    e++){
      const i=n[e];
      switch(i.type){
        case xEt.LayoutChanged:this._onDidChangeLayout.fire(i);
        break;
        case xEt.CellLayoutChanged:this._onDidChangeCellLayout.fire(i);
        break
      }
    }
  }
}
}
}), s1, hwe, Fbn, hIa, R_u, g6f, Obn, P_u, f6f, Ubn, mIa, Drt, Brt, Rrt=