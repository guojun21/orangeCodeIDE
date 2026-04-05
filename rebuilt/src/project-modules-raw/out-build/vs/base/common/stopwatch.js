// Module: out-build/vs/base/common/stopwatch.js
// Offset: 266846 (bundle byte offset)
// Size: 879 bytes

Znh=globalThis.performance&&typeof globalThis.performance.now=="function", J_=class XHb{
  static create(e){
    return new XHb(e)
  }
  constructor(e){
    this._now=Znh&&e===!1?Date.now:globalThis.performance.now.bind(globalThis.performance), this._startTime=this._now(), this._stopTime=-1
  }
  stop(){
    this._stopTime=this._now()
  }
  reset(){
    this._startTime=this._now(), this._stopTime=-1
  }
  elapsed(){
    return this._stopTime!==-1?this._stopTime-this._startTime:this._now()-this._startTime
  }
}
}
});
function ltA(n, e, t){
  const i=new mp;
  let r=new Set(n());
  for(const o of r)i.set(o, t(o));
  const s=new Ut;
  return s.add(e(()=>{
    const o=n(), a=_Ft(r, o);
    for(const l of a.removed)i.deleteAndDispose(l);
    for(const l of a.added)i.set(l, t(l));
    r=new Set(o)
  })), s.add(i), s
}
var l0c, Xnh, In, OMo, u0c, eih, UMo, tih, nih, iih, Q2n, rih, d0c, Qe, sih, h0c, j2n, zj, $Mo, oih, foe, qMo, LFt, CH, aih, cih, yn=