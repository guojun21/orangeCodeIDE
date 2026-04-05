// Module: out-build/vs/base/common/diff/diffChange.js
// Offset: 24825492 (bundle byte offset)
// Size: 430 bytes

GUe=class{
  constructor(n, e, t, i){
    this.originalStart=n, this.originalLength=e, this.modifiedStart=t, this.modifiedLength=i
  }
  getOriginalEnd(){
    return this.originalStart+this.originalLength
  }
  getModifiedEnd(){
    return this.modifiedStart+this.modifiedLength
  }
}
}
});
function C0A(n, e, t){
  return new Dun(new FGl(n), new FGl(e)).ComputeDiff(t).changes
}
var FGl, rCt, sCt, Opg, OGl, Dun, S0A, Cpi=