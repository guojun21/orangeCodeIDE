// Module: out-build/vs/editor/browser/services/diffChangeSourceRegistry.js
// Offset: 33925622 (bundle byte offset)
// Size: 3173 bytes

yn(), rt(), Uc(), Er(), td(), Ei(), jr(), So(), sie(), _M(), Emy(), Wu(), Ud(), SSt(), qwi(), Mga(), Rnu(), xmy(), Pa(), Ff(), F$e(), rce(), VD(), ns(), z0(), Zk(), Rb(), mce(), NDa=class extends at{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f, A, w, C, x, I, B, R){
    if(super(), this._sources=new Map, this._sourceDisposables=new Map, this._onDidChange=this._register(new Qe), this.onDidChange=this._onDidChange.event, this.descriptorsObservable=tp(this, this._onDidChange.event, ()=>this.getDescriptors()), e.checkFeatureGate("inline_diffs_v2_adapter")){
      const M=new C$f(u,i,r,o,w,a,l,d,I,A,g,f,e,C,x,B,R),O=this.registerSource(M);
      this._register(M),this._register(O)
    }
    else{
      const M=new w$f(t,g),O=this.registerSource(M);
      this._register(M),this._register(O)
    }
  }
  registerSource(e){
    if(this._sources.has(e.sourceId))throw new Error(`Source with id '${e.sourceId}' is already registered`);
    this._sources.set(e.sourceId, e);
    const t=e.onDidChange(()=>{
      this._onDidChange.fire()
    });
    return this._sourceDisposables.set(e.sourceId, t), this._onDidChange.fire(), $i(()=>this.unregisterSource(e.sourceId))
  }
  unregisterSource(e){
    const t=this._sourceDisposables.get(e);
    t&&(t.dispose(), this._sourceDisposables.delete(e)), this._sources.delete(e)&&this._onDidChange.fire()
  }
  getSources(){
    return Array.from(this._sources.values())
  }
  getSourceById(e){
    return this._sources.get(e)
  }
  getDescriptors(){
    const e=[];
    for(const t of this._sources.values())e.push(...t.getDescriptors());
    return e
  }
  getDescriptorsForUri(e){
    const t=[];
    for(const i of this._sources.values())t.push(...i.getDescriptorsForUri(e));
    return t
  }
  getDescriptorById(e){
    for(const t of this._sources.values()){
      const i=t.getDescriptorById(e);
      if(i)return{
        descriptor:i,source:t
      }
    }
  }
  getBaselineTextLines(e){
    for(const t of this._sources.values())if(t.canHandle(e)&&t.getBaselineTextLines)return t.getBaselineTextLines(e)
  }
  getRecentDiffDescriptors(e){
    const t=[];
    for(const i of this._sources.values())t.push(...i.getRecentDiffDescriptors(e));
    return t
  }
  accept(e, t){
    const i=this._findSourceForId(e);
    return i?i.accept(e, t):Promise.resolve()
  }
  reject(e, t, i){
    const r=this._findSourceForId(e);
    return r?r.reject(e, t, i):Promise.resolve()
  }
  acceptChange(e, t){
    const i=this._findSourceForId(e);
    return i?i.acceptChange(e, t):!0
  }
  rejectChange(e, t){
    const i=this._findSourceForId(e);
    return i?i.rejectChange(e, t):!0
  }
  cancel(e){
    const t=this._findSourceForId(e);
    t&&t.cancel(e)
  }
  notifyChange(){
    this._onDidChange.fire()
  }
  isLegacyInlineDiffsUsed(){
    return!this._sources.has("patchGraphSourceAdapter3")
  }
  _findSourceForId(e){
    for(const t of this._sources.values())if(t.canHandle(e))return t
  }
  dispose(){
    for(const e of this._sourceDisposables.values())e.dispose();
    this._sourceDisposables.clear(), this._sources.clear(), super.dispose()
  }
}, NDa=__decorate([__param(0, Tl), __param(1, fL), __param(2, $tt), __param(3, El), __param(4, Fn), __param(5, Rr), __param(6, ea), __param(7, uh), __param(8, tgn), __param(9, Gg), __param(10, ms), __param(11, qhn), __param(12, CEe), __param(13, tie), __param(14, Xbi), __param(15, qB), __param(16, JA), __param(17, BA), __param(18, Gr), __param(19, wg), __param(20, I2)], NDa), Vi(K3, NDa, 1)
}
});
function Imy(){
  return yb(Y0u)
}
var hvn, MDa, mvn, S$f, FDa, l1i, k$f, ODa, UDa, pvn, gvn, Y0u, k7e=