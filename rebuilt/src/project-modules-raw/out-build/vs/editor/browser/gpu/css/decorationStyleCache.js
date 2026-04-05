// Module: out-build/vs/editor/browser/gpu/css/decorationStyleCache.js
// Offset: 1788486 (bundle byte offset)
// Size: 608 bytes

cu(), Nyh=class{
  constructor(){
    this._nextId=1, this._cacheById=new Map, this._cacheByStyle=new H2n
  }
  getOrCreateEntry(n, e, t){
    if(n===void 0&&e===void 0&&t===void 0)return 0;
    const i=this._cacheByStyle.get(n??0, e?1:0, t===void 0?"":t.toFixed(2));
    if(i)return i.id;
    const r=this._nextId++, s={
      id:r,color:n,bold:e,opacity:t
    };
    return this._cacheById.set(r, s), this._cacheByStyle.set(s, n??0, e?1:0, t===void 0?"":t.toFixed(2)), r
  }
  getStyleSet(n){
    if(n!==0)return this._cacheById.get(n)
  }
}
}
});
function Myh(n, e){
  return!!Fyh.includes(n)
}
var uz, JH, Fyh, ZOn=