// Module: out-build/vs/base/browser/pixelRatio.js
// Offset: 1443488 (bundle byte offset)
// Size: 1636 bytes

ri(), yn(), rt(), Zbh=class extends at{
  constructor(n){
    super(), this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._listener=()=>this._handleChange(n, !0), this._mediaQueryList=null, this._handleChange(n, !1)
  }
  _handleChange(n, e){
    this._mediaQueryList?.removeEventListener("change", this._listener), this._mediaQueryList=n.matchMedia(`(resolution: ${n.devicePixelRatio}dppx)`), this._mediaQueryList.addEventListener("change", this._listener), e&&this._onDidChange.fire()
  }
}, Xbh=class extends at{
  get value(){
    return this._value
  }
  constructor(n){
    super(), this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this._value=this._getPixelRatio(n);
    const e=this._register(new Zbh(n));
    this._register(e.onDidChange(()=>{
      this._value=this._getPixelRatio(n),this._onDidChange.fire(this._value)
    }))
  }
  _getPixelRatio(n){
    const e=document.createElement("canvas").getContext("2d"), t=n.devicePixelRatio||1, i=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;
    return t/i
  }
}, evh=class{
  constructor(){
    this.mapWindowIdToPixelRatioMonitor=new Map
  }
  _getOrCreatePixelRatioMonitor(n){
    const e=RH(n);
    let t=this.mapWindowIdToPixelRatioMonitor.get(e);
    return t||(t=Cte(new Xbh(n)), this.mapWindowIdToPixelRatioMonitor.set(e, t), Cte(In.once(Voh)(({
      vscodeWindowId:i
    })=>{
      i===e&&(t?.dispose(),this.mapWindowIdToPixelRatioMonitor.delete(e))
    }))), t
  }
  getInstance(n){
    return this._getOrCreatePixelRatioMonitor(n)
  }
}, M6=new evh
}
});
function XaA(n, e, t){
  new ivh(e, t).read(n)
}
var tvh, nvh, ivh, ecA=