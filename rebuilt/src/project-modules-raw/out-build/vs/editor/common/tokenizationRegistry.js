// Module: out-build/vs/editor/common/tokenizationRegistry.js
// Offset: 1185393 (bundle byte offset)
// Size: 2253 bytes

yn(), rt(), txc=class{
  constructor(){
    this._tokenizationSupports=new Map, this._factories=new Map, this._onDidChange=new Qe, this.onDidChange=this._onDidChange.event, this._colorMap=null
  }
  handleChange(n){
    this._onDidChange.fire({
      changedLanguages:n,changedColorMap:!1
    })
  }
  register(n, e){
    return this._tokenizationSupports.set(n, e), this.handleChange([n]), $i(()=>{
      this._tokenizationSupports.get(n)===e&&(this._tokenizationSupports.delete(n),this.handleChange([n]))
    })
  }
  get(n){
    return this._tokenizationSupports.get(n)||null
  }
  registerFactory(n, e){
    this._factories.get(n)?.dispose();
    const t=new vgh(this, n, e);
    this._factories.set(n, t);
    const i=new WeakRef(t);
    return $i(()=>{
      const r=this._factories.get(n),s=i.deref();
      !r||!s||r!==s||(this._factories.delete(n),r.dispose())
    })
  }
  async getOrCreate(n){
    const e=this.get(n);
    if(e)return e;
    const t=this._factories.get(n);
    return!t||t.isResolved?null:(await t.resolve(), this.get(n))
  }
  isResolved(n){
    if(this.get(n))return!0;
    const t=this._factories.get(n);
    return!!(!t||t.isResolved)
  }
  setColorMap(n){
    this._colorMap=n, this._onDidChange.fire({
      changedLanguages:Array.from(this._tokenizationSupports.keys()),changedColorMap:!0
    })
  }
  getColorMap(){
    return this._colorMap
  }
  getDefaultBackground(){
    return this._colorMap&&this._colorMap.length>2?this._colorMap[2]:null
  }
}, vgh=class extends at{
  get isResolved(){
    return this._isResolved
  }
  constructor(n, e, t){
    super(), this._registry=n, this._languageId=e, this._factory=t, this._isDisposed=!1, this._resolvePromise=null, this._isResolved=!1
  }
  dispose(){
    this._isDisposed=!0, super.dispose()
  }
  async resolve(){
    return this._resolvePromise||(this._resolvePromise=this._create()), this._resolvePromise
  }
  async _create(){
    const n=await this._factory.tokenizationSupport;
    this._isResolved=!0, n&&!this._isDisposed&&this._register(this._registry.register(this._languageId, n))
  }
}
}
});
function saA(n){
  return n&&je.isUri(n.uri)&&Zt.isIRange(n.range)&&(Zt.isIRange(n.originSelectionRange)||Zt.isIRange(n.targetSelectionRange))
}
function Agh(n){
  return n&&je.isUri(n.uri)&&Zt.isIRange(n.range)
}
function ygh(n, e){
  return _(883, null, n, nxc[e])
}
var wgh, vOo, b3, _gh, Eft, Cgh, Sgh, kgh, Egh, Ybe, xgh, Tgh, vOn, cRe, LOt, Igh, nxc, Dgh, $oe, Zbe, qY, ixc, AOn, AOo, Q$, AW, yOo, NOt, Bgh, wOo, rxc, pT, RSe, xft, sxc, Tg=