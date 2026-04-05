// Module: out-build/vs/editor/browser/gpu/bufferDirtyTracker.js
// Offset: 1777577 (bundle byte offset)
// Size: 601 bytes

Tyh=class{
  get dataOffset(){
    return this._startIndex
  }
  get dirtySize(){
    if(!(this._startIndex===void 0||this._endIndex===void 0))return this._endIndex-this._startIndex+1
  }
  get isDirty(){
    return this._startIndex!==void 0
  }
  flag(n, e=1){
    return this._flag(n), e>1&&this._flag(n+e-1), n
  }
  _flag(n){
    (this._startIndex===void 0||n<this._startIndex)&&(this._startIndex=n), (this._endIndex===void 0||n>this._endIndex)&&(this._endIndex=n)
  }
  clear(){
    this._startIndex=void 0, this._endIndex=void 0
  }
}
}
});
function IlA(n, e){
  return new Iyh(n, e)
}
var Iyh, Dyh, DlA=