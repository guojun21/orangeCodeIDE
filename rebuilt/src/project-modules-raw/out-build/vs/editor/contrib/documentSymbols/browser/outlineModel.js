// Module: out-build/vs/editor/contrib/documentSymbols/browser/outlineModel.js
// Offset: 24982643 (bundle byte offset)
// Size: 6020 bytes

Vs(), Po(), _s(), Ef(), cu(), oa(), tl(), ts(), xve(), Wt(), Er(), hd(), rt(), Cm(), qAe=class rcd{
  remove(){
    this.parent?.children.delete(this.id)
  }
  static findId(e, t){
    let i;
    typeof e=="string"?i=`${t.id}/${e}`:(i=`${t.id}/${e.name}`, t.children.get(i)!==void 0&&(i=`${t.id}/${e.name}_${e.range.startLineNumber}_${e.range.startColumn}`));
    let r=i;
    for(let s=0;
    t.children.get(r)!==void 0;
    s++)r=`${i}_${s}`;
    return r
  }
  static getElementById(e, t){
    if(!e)return;
    const i=voe(e, t.id);
    if(i===e.length)return t;
    if(!(i<t.id.length))for(const[, r]of t.children){
      const s=rcd.getElementById(e,r);
      if(s)return s
    }
  }
  static size(e){
    let t=1;
    for(const[, i]of e.children)t+=rcd.size(i);
    return t
  }
  static empty(e){
    return e.children.size===0
  }
}, G9=class extends qAe{
  constructor(n, e, t){
    super(), this.id=n, this.parent=e, this.symbol=t, this.children=new Map
  }
  getAllSymbols(n){
    const e=[];
    e.push(this.symbol);
    for(const[, t]of this.children)e.push(...t.getAllSymbols(n));
    return e
  }
}, GZ=class extends qAe{
  constructor(n, e, t, i){
    super(), this.id=n, this.parent=e, this.label=t, this.order=i, this.children=new Map
  }
  getAllSymbols(n){
    const e=[];
    for(const[, t]of this.children)e.push(...t.getAllSymbols(n));
    return e
  }
  getItemEnclosingPosition(n, e=!1){
    return n?this._getItemEnclosingPosition(n, this.children, e):void 0
  }
  _getItemEnclosingPosition(n, e, t){
    for(const[, i]of e)if(!(!i.symbol.range||!Zt.containsPosition(i.symbol.range, n)))return t?i:this._getItemEnclosingPosition(n, i.children, t)||i
  }
  updateMarker(n){
    for(const[, e]of this.children)this._updateMarker(n, e)
  }
  _updateMarker(n, e){
    e.marker=void 0;
    const t=s5e(n, e.symbol.range, Zt.compareRangesUsingStarts);
    let i;
    t<0?(i=~t, i>0&&Zt.areIntersecting(n[i-1], e.symbol.range)&&(i-=1)):i=t;
    const r=[];
    let s;
    for(;
    i<n.length&&Zt.areIntersecting(e.symbol.range, n[i]);
    i++){
      const o=n[i];
      r.push(o),n[i]=void 0,(!s||o.severity>s)&&(s=o.severity)
    }
    for(const[, o]of e.children)this._updateMarker(r, o);
    s&&(e.marker={
      count:r.length,topSev:s
    }), Ypt(n)
  }
}, J1e=class Uat extends qAe{
  static create(e, t, i){
    const r=new Wc(i), s=new Uat(t.uri), o=e.ordered(t), a=o.map((u, d)=>{
      const m=qAe.findId(`provider_${d}`,s),p=new GZ(m,s,u.displayName??"Unknown Outline Provider",d);
      return Promise.resolve(u.provideDocumentSymbols(t,r.token)).then(g=>{
        for(const f of g||[])Uat._makeOutlineElement(f,p);
        return p
      },g=>(JE(g),p)).then(g=>{
        qAe.empty(g)?g.remove():s._groups.set(m,g)
      })
    }), l=e.onDidChange(()=>{
      const u=e.ordered(t);
      cg(u,o)||r.cancel()
    });
    return Promise.all(a).then(()=>r.token.isCancellationRequested&&!i.isCancellationRequested?Uat.create(e, t, i):s._compact()).finally(()=>{
      r.dispose(),l.dispose(),r.dispose()
    })
  }
  static _makeOutlineElement(e, t){
    const i=qAe.findId(e, t), r=new G9(i, t, e);
    if(e.children)for(const s of e.children)Uat._makeOutlineElement(s, r);
    t.children.set(r.id, r)
  }
  static get(e){
    for(;
    e;
    ){
      if(e instanceof Uat)return e;
      e=e.parent
    }
  }
  constructor(e){
    super(), this.uri=e, this.id="root", this.parent=void 0, this._groups=new Map, this.children=new Map, this.id="root", this.parent=void 0
  }
  _compact(){
    let e=0;
    for(const[t, i]of this._groups)i.children.size===0?this._groups.delete(t):e+=1;
    if(e!==1)this.children=this._groups;
    else{
      const t=bl.first(this._groups.values());
      for(const[,i]of t.children)i.parent=this,this.children.set(i.id,i)
    }
    return this
  }
  merge(e){
    return this.uri.toString()!==e.uri.toString()||this._groups.size!==e._groups.size?!1:(this._groups=e._groups, this.children=e.children, !0)
  }
  getAllSymbols(e){
    const t=[];
    for(const[, i]of this._groups)t.push(...i.getAllSymbols(e));
    return t
  }
  getGlobalItemEnclosingPosition(e){
    let t;
    for(const[, i]of this._groups)if(t=i.getItemEnclosingPosition(e, !0), t)break;
    return t
  }
  getItemEnclosingPosition(e, t){
    let i;
    if(t){
      let s=t.parent;
      for(;
      s&&!i;
      )s instanceof GZ&&(i=s),s=s.parent
    }
    let r;
    for(const[, s]of this._groups)if(r=s.getItemEnclosingPosition(e), r&&(!i||i===s))break;
    return r
  }
  getItemById(e){
    return qAe.getElementById(e, this)
  }
  updateMarker(e){
    e.sort(Zt.compareRangesUsingStarts);
    for(const[, t]of this._groups)t.updateMarker(e.slice(0))
  }
  getTopLevelSymbols(){
    const e=[];
    for(const t of this.children.values())t instanceof G9?e.push(t.symbol):e.push(...bl.map(t.children.values(), i=>i.symbol));
    return e.sort((t, i)=>Zt.compareRangesUsingStarts(t.range, i.range))
  }
  asListOfDocumentSymbols(){
    const e=this.getTopLevelSymbols(), t=[];
    return Uat._flattenDocumentSymbols(t, e, ""), t.sort((i, r)=>ar.compare(Zt.getStartPosition(i.range), Zt.getStartPosition(r.range))||ar.compare(Zt.getEndPosition(r.range), Zt.getEndPosition(i.range)))
  }
  static _flattenDocumentSymbols(e, t, i){
    for(const r of t)e.push({
      kind:r.kind,tags:r.tags,name:r.name,detail:r.detail,containerName:r.containerName||i,range:r.range,selectionRange:r.selectionRange,children:void 0
    }), r.children&&Uat._flattenDocumentSymbols(e, r.children, r.name)
  }
}, Gne=xi("IOutlineModelService"), qca=class{
  constructor(e, t, i){
    this._languageFeaturesService=e, this._disposables=new Ut, this._cache=new Fb(15, .7), this._debounceInformation=t.for(e.documentSymbolProvider, "DocumentSymbols", {
      min:350
    }), this._disposables.add(i.onModelRemoved(r=>{
      this._cache.delete(r.id)
    }))
  }
  dispose(){
    this._disposables.dispose()
  }
  async getOrCreate(e, t){
    const i=this._languageFeaturesService.documentSymbolProvider, r=i.ordered(e);
    let s=this._cache.get(e.id);
    if(!s||s.versionId!==e.getVersionId()||!cg(s.provider, r)){
      const a=new Wc;
      s={
        versionId:e.getVersionId(),provider:r,promiseCnt:0,source:a,promise:J1e.create(i,e,a.token),model:void 0
      },this._cache.set(e.id,s);
      const l=Date.now();
      s.promise.then(u=>{
        s.model=u,this._debounceInformation.update(e,Date.now()-l)
      }).catch(u=>{
        this._cache.delete(e.id)
      })
    }
    if(s.model)return s.model;
    s.promiseCnt+=1;
    const o=t.onCancellationRequested(()=>{
      --s.promiseCnt===0&&(s.source.cancel(),this._cache.delete(e.id))
    });
    try{
      return await s.promise
    }
    finally{
      o.dispose()
    }
  }
  getDebounceValue(e){
    return this._debounceInformation.get(e)
  }
  getCachedModels(){
    return bl.filter(bl.map(this._cache.values(), e=>e.model), e=>e!==void 0)
  }
}, qca=__decorate([__param(0, $u), __param(1, ene), __param(2, Il)], qca), Vi(Gne, qca, 1)
}
}), Hgg, Jgg, pWl, HAe, gWl, Hca, Qae, Ggg, Opi=