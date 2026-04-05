// Module: out-build/vs/workbench/contrib/notebook/browser/viewModel/cellSelectionCollection.js
// Offset: 33346796 (bundle byte offset)
// Size: 866 bytes

yn(), rt(), q8f=class extends at{
  constructor(){
    super(...arguments), this._onDidChangeSelection=this._register(new Qe), this._primary=null, this._selections=[]
  }
  get onDidChangeSelection(){
    return this._onDidChangeSelection.event
  }
  get selections(){
    return this._selections
  }
  get focus(){
    return this._primary??{
      start:0,end:0
    }
  }
  setState(n, e, t, i){
    const r=n!==this._primary||!Idy(this._selections, e);
    this._primary=n, this._selections=e, (r||t)&&this._onDidChangeSelection.fire(i)
  }
  setSelections(n, e, t){
    this.setState(this._primary, n, e, t)
  }
}
}
});
function Bdy(n){
  return n instanceof Zh?n:Zh.createDynamic(n)
}
function H8f(n, e, t, i){
  return t.cellKind===zd.Code?n.createInstance(jJ, e.viewType, t, e.layoutInfo, i):n.createInstance(GV, e.viewType, t, e.layoutInfo, e, i)
}
var J8f, G8f, p_u, JTa, GTa, Rdy=