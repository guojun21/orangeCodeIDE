// Module: out-build/vs/editor/common/codecs/simpleCodec/simpleDecoder.js
// Offset: 31079431 (bundle byte offset)
// Size: 832 bytes

Ugu(), _If(), gIf(), Jgu(), mIf(), psy(), Ggu(), pIf(), ySa(), _Sa(), wSa(), fsy(), t0i(), pSa(), vIf(), CSa(), EIf=Object.freeze([ASa, vSa, X_i, Z_i, Qgn, e0i, D1t, n0i, s0i, xSa, Wgn, Ggn, Oqe, Sit]), xIf=Object.freeze([ASa.symbol, vSa.symbol, X_i.symbol, Z_i.symbol, Qgn.symbol, e0i.symbol, D1t.symbol, n0i.symbol, s0i.symbol, xSa.symbol, Wgn.symbol, Ggn.symbol, Oqe.symbol, Sit.symbol]), TIf=class extends V_i{
  constructor(n){
    super(new kIf(n))
  }
  onStreamData(n){
    if(n instanceof I1t||n instanceof Mqe){
      this._onData.fire(n);
      return
    }
    let e=0;
    for(;
    e<n.text.length;
    ){
      const t=e+1,i=EIf.find(s=>s.symbol===n.text[e]);
      if(i){
        this._onData.fire(i.newOnLine(n,t)),e++;
        continue
      }
      let r="";
      for(;
      e<n.text.length&&!xIf.includes(n.text[e]);
      )r+=n.text[e],e++;
      this._onData.fire(CIf.newOnLine(r,n,t))
    }
  }
}
}
}), IIf, vsy=