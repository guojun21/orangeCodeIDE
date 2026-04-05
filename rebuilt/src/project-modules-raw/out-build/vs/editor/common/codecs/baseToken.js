// Module: out-build/vs/editor/common/codecs/baseToken.js
// Offset: 31056998 (bundle byte offset)
// Size: 480 bytes

ts(), NU=class{
  constructor(n){
    this._range=n
  }
  get range(){
    return this._range
  }
  sameRange(n){
    return this.range.equalsRange(n)
  }
  equals(n){
    return n instanceof this.constructor?this.sameRange(n.range):!1
  }
  withRange(n){
    return this._range=new Zt(n.startLineNumber??this.range.startLineNumber, n.startColumn??this.range.startColumn, n.endLineNumber??this.range.endLineNumber, n.endColumn??this.range.endColumn), this
  }
}
}
}), Fgu, dIf=