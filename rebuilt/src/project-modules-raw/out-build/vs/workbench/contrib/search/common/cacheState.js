// Module: out-build/vs/workbench/contrib/search/common/cacheState.js
// Offset: 28194368 (bundle byte offset)
// Size: 1644 bytes

_3t(), np(), (function(n){
  n[n.Created=1]="Created", n[n.Loading=2]="Loading", n[n.Loaded=3]="Loaded", n[n.Errored=4]="Errored", n[n.Disposed=5]="Disposed"
})(xEe||(xEe={
  
})), eef=class{
  get cacheKey(){
    return this.loadingPhase===xEe.Loaded||!this.previousCacheState?this._cacheKey:this.previousCacheState.cacheKey
  }
  get isLoaded(){
    const n=this.loadingPhase===xEe.Loaded;
    return n||!this.previousCacheState?n:this.previousCacheState.isLoaded
  }
  get isUpdating(){
    const n=this.loadingPhase===xEe.Loading;
    return n||!this.previousCacheState?n:this.previousCacheState.isUpdating
  }
  constructor(n, e, t, i){
    if(this.cacheQuery=n, this.loadFn=e, this.disposeFn=t, this.previousCacheState=i, this._cacheKey=w3t.nextId(), this.query=this.cacheQuery(this._cacheKey), this.loadingPhase=xEe.Created, this.previousCacheState){
      const r=Object.assign({
        
      },this.query,{
        cacheKey:null
      }),s=Object.assign({
        
      },this.previousCacheState.query,{
        cacheKey:null
      });
      fv(r,s)||(this.previousCacheState.dispose(),this.previousCacheState=void 0)
    }
  }
  load(){
    return this.isUpdating?this:(this.loadingPhase=xEe.Loading, this.loadPromise=(async()=>{
      try{
        await this.loadFn(this.query),this.loadingPhase=xEe.Loaded,this.previousCacheState&&(this.previousCacheState.dispose(),this.previousCacheState=void 0)
      }
      catch(n){
        throw this.loadingPhase=xEe.Errored,n
      }
    })(), this)
  }
  dispose(){
    this.loadPromise?(async()=>{
      try{
        await this.loadPromise
      }
      catch{
        
      }
      this.loadingPhase=xEe.Disposed,this.disposeFn(this._cacheKey)
    })():this.loadingPhase=xEe.Disposed, this.previousCacheState&&(this.previousCacheState.dispose(), this.previousCacheState=void 0)
  }
}
}
}), ek, tef, nef, e5=