// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatCollections.js
// Offset: 32525703 (bundle byte offset)
// Size: 621 bytes

rt(), wCi=class extends at{
  get inUse(){
    return this._inUse
  }
  constructor(n){
    super(), this._itemFactory=n, this.pool=[], this._inUse=new Set
  }
  get(){
    if(this.pool.length>0){
      const e=this.pool.pop();
      return this._inUse.add(e),e
    }
    const n=this._register(this._itemFactory());
    return this._inUse.add(n), n
  }
  release(n){
    this._inUse.delete(n), this.pool.push(n)
  }
}
}
});
function _Ci(n){
  if(n.kind==="warning")return null;
  const{
    reference:e
  }
  =n;
  return typeof e=="string"||"variableName"in e?null:je.isUri(e)?e:e.uri
}
var ZAu, Hfn, Jfn, vEa, CCi, jOf, SCi, kCi=