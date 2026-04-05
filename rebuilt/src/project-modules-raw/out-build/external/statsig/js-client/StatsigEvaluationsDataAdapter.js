// Module: out-build/external/statsig/js-client/StatsigEvaluationsDataAdapter.js
// Offset: 26717111 (bundle byte offset)
// Size: 1055 bytes

Rtt(), iFg(), fnu=class extends y2g{
  constructor(){
    super("EvaluationsDataAdapter", "evaluations"), this._network=null, this._options=null
  }
  attach(n, e, t){
    super.attach(n, e, t), t!==null&&t instanceof sga?this._network=t:this._network=new sga(e??{
      
    })
  }
  getDataAsync(n, e, t){
    return this._getDataAsyncImpl(n, Jbi(e, this._options), t)
  }
  prefetchData(n, e){
    return this._prefetchDataImpl(n, e)
  }
  setData(n){
    const e=bSt(n, "has_updates", "data");
    e&&"user"in e?super.setData(n, e.user):CI.error("StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy.")
  }
  setDataLegacy(n, e){
    super.setData(n, e)
  }
  async _fetchFromNetwork(n, e, t, i){
    return await this._network?.fetchEvaluations(this._getSdkKey(), n, t?.priority, e, i)??null
  }
  _getCacheKey(n){
    const e=Mpa(this._getSdkKey(), n, this._options?.customUserCacheKeyFunc);
    return`${Z2g}.${this._cacheSuffix}.${e}`
  }
  _isCachedResultValidFor204(n, e){
    return n.fullUserHash!=null&&n.fullUserHash===nga(e)
  }
}
}
}), bnu, r2A=