// Module: out-build/vs/editor/common/core/characterClassifier.js
// Offset: 709066 (bundle byte offset)
// Size: 853 bytes

jFo(), m4n=class DJb{
  constructor(e){
    const t=QFo(e);
    this._defaultValue=t, this._asciiMap=DJb._createAsciiMap(t), this._map=new Map
  }
  static _createAsciiMap(e){
    const t=new Uint8Array(256);
    return t.fill(e), t
  }
  set(e, t){
    const i=QFo(t);
    e>=0&&e<256?this._asciiMap[e]=i:this._map.set(e, i)
  }
  get(e){
    return e>=0&&e<256?this._asciiMap[e]:this._map.get(e)||this._defaultValue
  }
  clear(){
    this._asciiMap.fill(this._defaultValue), this._map.clear()
  }
}, (function(n){
  n[n.False=0]="False", n[n.True=1]="True"
})(Sch||(Sch={
  
})), p4n=class{
  constructor(){
    this._actual=new m4n(0)
  }
  add(n){
    this._actual.set(n, 1)
  }
  has(n){
    return this._actual.get(n)===1
  }
  clear(){
    return this._actual.clear()
  }
}
}
});
function kde(n, e){
  const t=`${n}/${e.join(",")}`;
  let i=Okc.get(t);
  return i||(i=new Ech(n, e), Okc.set(t, i)), i
}
var kch, Ech, Okc, g4n=