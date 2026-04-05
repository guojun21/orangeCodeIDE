// Module: out-build/vs/editor/common/editorAction.js
// Offset: 1048366 (bundle byte offset)
// Size: 440 bytes

Vmh=class{
  constructor(n, e, t, i, r, s, o){
    this.id=n, this.label=e, this.alias=t, this.metadata=i, this._precondition=r, this._run=s, this._contextKeyService=o
  }
  isSupported(){
    return this._contextKeyService.contextMatchesRules(this._precondition)
  }
  run(n){
    return this.isSupported()?this._run(n):Promise.resolve(void 0)
  }
}
}
});
function CEc(n){
  return n&&typeof n.id=="string"
}
var Kmh, SVe, Ymh, kVe=