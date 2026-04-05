// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/animation.js
// Offset: 25292817 (bundle byte offset)
// Size: 1398 bytes

ri(), Uc(), zQl=class ZWb{
  static const(e){
    return new ZWb(e, e, 0)
  }
  constructor(e, t, i, r=mSA){
    this.startValue=e, this.endValue=t, this.durationMs=i, this._interpolationFunction=r, this.startTimeMs=Date.now(), e===t&&(this.durationMs=0)
  }
  isFinished(){
    return Date.now()>=this.startTimeMs+this.durationMs
  }
  getValue(){
    const e=Date.now()-this.startTimeMs;
    return e>=this.durationMs?this.endValue:this._interpolationFunction(e, this.startValue, this.endValue-this.startValue, this.durationMs)
  }
}, QAg=class XWb{
  static const(e){
    return new XWb(zQl.const(e))
  }
  constructor(e){
    this._value=Ua(this, e)
  }
  setAnimation(e, t){
    this._value.set(e, t)
  }
  changeAnimation(e, t){
    const i=e(this._value.get());
    this._value.set(i, t)
  }
  getValue(e){
    const t=this._value.read(e);
    return t.isFinished()||jAg.instance.invalidateOnNextAnimationFrame(e), t.getValue()
  }
}, jAg=class eQb{
  constructor(){
    this._counter=IY(this), this._isScheduled=!1
  }
  static{
    this.instance=new eQb
  }
  invalidateOnNextAnimationFrame(e){
    this._counter.read(e), this._isScheduled||(this._isScheduled=!0, $c().requestAnimationFrame(()=>{
      this._isScheduled=!1,this._update()
    }))
  }
  _update(){
    this._counter.trigger(void 0)
  }
}
}
});
function zAg(n, e){
  return cg(n, e, VAg)
}
function VAg(n, e){
  return n===e?!0:!n||!e?!1:n instanceof fdn&&e instanceof fdn||n instanceof Mla&&e instanceof Mla?n.equals(e):!1
}
var fdn, Igi, Mla, Fla=