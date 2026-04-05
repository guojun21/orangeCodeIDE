// Module: out-build/vs/editor/contrib/inlineCompletions/browser/utils.js
// Offset: 25292083 (bundle byte offset)
// Size: 734 bytes

Vs(), _s(), Uc(), AF(), tl(), vIc(), ts(), EW(), JAg=[], GAg=class{
  constructor(n, e){
    if(this.startColumn=n, this.endColumnExclusive=e, n>e)throw new _m(`startColumn ${n} cannot be after endColumnExclusive ${e}`)
  }
  toRange(n){
    return new Zt(n, this.startColumn, n, this.endColumnExclusive)
  }
  equals(n){
    return this.startColumn===n.startColumn&&this.endColumnExclusive===n.endColumnExclusive
  }
}, WAg=class{
  constructor(n){
    this._contextKeyService=n
  }
  bind(n, e){
    return eM(n, this._contextKeyService, e instanceof Function?e:t=>e.read(t))
  }
}
}
});
function mSA(n, e, t, i){
  return n===i?e+t:t*(-Math.pow(2, -10*n/i)+1)+e
}
function pSA(n, e, t, i){
  return t*((n=n/i-1)*n*n+1)+e
}
var zQl, QAg, jAg, gSA=