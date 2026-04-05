// Module: out-build/vs/editor/common/diff/linesDiffComputer.js
// Offset: 2175394 (bundle byte offset)
// Size: 316 bytes

Voe=class{
  constructor(n, e, t){
    this.changes=n, this.moves=e, this.hitTimeout=t
  }
}, LDc=class DGb{
  constructor(e, t){
    this.lineRangeMapping=e, this.changes=t
  }
  flip(){
    return new DGb(this.lineRangeMapping.flip(), this.changes.map(e=>e.flip()))
  }
}
}
}), eCh, RdA=