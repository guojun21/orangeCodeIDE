// Module: out-build/vs/base/browser/domStylesheets.js
// Offset: 521964 (bundle byte offset)
// Size: 526 bytes

rt(), ri(), iu(), y4t=new Map, woh=class{
  constructor(){
    this._currentCssStyle="", this._styleSheet=void 0
  }
  setStyle(n){
    n!==this._currentCssStyle&&(this._currentCssStyle=n, this._styleSheet?this._styleSheet.innerText=n:this._styleSheet=wC(bi.document.head, e=>e.innerText=n))
  }
  dispose(){
    this._styleSheet&&(this._styleSheet.remove(), this._styleSheet=void 0)
  }
}, tFo=null
}
});
function miA(n){
  const e=new Ut, t=e.add(boh());
  return e.add(Oc(i=>{
    t.setStyle(n.read(i))
  })), e
}
var piA=