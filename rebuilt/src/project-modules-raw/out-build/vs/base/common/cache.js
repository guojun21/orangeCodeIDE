// Module: out-build/vs/base/common/cache.js
// Offset: 332398 (bundle byte offset)
// Size: 946 bytes

Po(), o2o=class{
  constructor(n){
    this.task=n, this.result=null
  }
  get(){
    if(this.result)return this.result;
    const n=new Wc, e=this.task(n.token);
    return this.result={
      promise:e,dispose:()=>{
        this.result=null,n.cancel(),n.dispose()
      }
    }, this.result
  }
}, H0c=class{
  constructor(n, e){
    this.lastCache=void 0, this.lastArgKey=void 0, typeof n=="function"?(this._fn=n, this._computeKey=qih):(this._fn=e, this._computeKey=n.getCacheKey)
  }
  get(n){
    const e=this._computeKey(n);
    return this.lastArgKey!==e&&(this.lastArgKey=e, this.lastCache=this._fn(n)), this.lastCache
  }
}, $Ft=class{
  get cachedValues(){
    return this._map
  }
  constructor(n, e){
    this._map=new Map, this._map2=new Map, typeof n=="function"?(this._fn=n, this._computeKey=qih):(this._fn=e, this._computeKey=n.getCacheKey)
  }
  get(n){
    const e=this._computeKey(n);
    if(this._map2.has(e))return this._map2.get(e);
    const t=this._fn(n);
    return this._map.set(n, t), this._map2.set(e, t), t
  }
}
}
}), Ob, L0=