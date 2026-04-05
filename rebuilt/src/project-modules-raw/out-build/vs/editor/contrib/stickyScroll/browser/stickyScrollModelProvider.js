// Module: out-build/vs/editor/contrib/stickyScroll/browser/stickyScrollModelProvider.js
// Offset: 25471148 (bundle byte offset)
// Size: 5754 bytes

rt(), Cm(), eV(), vr(), jAe(), Jca(), xQl(), QE(), _s(), nwg(), Ef(), Wt(), (function(n){
  n.OUTLINE_MODEL="outlineModel", n.FOLDING_PROVIDER_MODEL="foldingProviderModel", n.INDENTATION_MODEL="indentationModel"
})(Hgi||(Hgi={
  
})), (function(n){
  n[n.VALID=0]="VALID", n[n.INVALID=1]="INVALID", n[n.CANCELED=2]="CANCELED"
})(Vet||(Vet={
  
})), Yla=class extends at{
  constructor(e, t, i, r){
    switch(super(), this._editor=e, this._modelProviders=[], this._modelPromise=null, this._updateScheduler=this._register(new Nv(300)), this._updateOperation=this._register(new Ut), this._editor.getOption(120).defaultModel){
      case Hgi.OUTLINE_MODEL:this._modelProviders.push(new Zla(this._editor,r));
      case Hgi.FOLDING_PROVIDER_MODEL:this._modelProviders.push(new eua(this._editor,t,r));
      case Hgi.INDENTATION_MODEL:this._modelProviders.push(new Xla(this._editor,i));
      break
    }
  }
  dispose(){
    this._modelProviders.forEach(e=>e.dispose()), this._updateOperation.clear(), this._cancelModelPromise(), super.dispose()
  }
  _cancelModelPromise(){
    this._modelPromise&&(this._modelPromise.cancel(), this._modelPromise=null)
  }
  async update(e){
    return this._updateOperation.clear(), this._updateOperation.add({
      dispose:()=>{
        this._cancelModelPromise(),this._updateScheduler.cancel()
      }
    }), this._cancelModelPromise(), await this._updateScheduler.trigger(async()=>{
      for(const t of this._modelProviders){
        const{
          statusPromise:i,modelPromise:r
        }
        =t.computeStickyModel(e);
        this._modelPromise=r;
        const s=await i;
        if(this._modelPromise!==r)return null;
        switch(s){
          case Vet.CANCELED:return this._updateOperation.clear(),null;
          case Vet.VALID:return t.stickyModel
        }
      }
      return null
    }).catch(t=>(Gc(t), null))
  }
}, Yla=__decorate([__param(2, ln), __param(3, $u)], Yla), xjl=class extends at{
  constructor(n){
    super(), this._editor=n, this._stickyModel=null
  }
  get stickyModel(){
    return this._stickyModel
  }
  _invalid(){
    return this._stickyModel=null, Vet.INVALID
  }
  computeStickyModel(n){
    if(n.isCancellationRequested||!this.isProviderValid())return{
      statusPromise:this._invalid(),modelPromise:null
    };
    const e=dw(t=>this.createModelFromProvider(t));
    return{
      statusPromise:e.then(t=>this.isModelValid(t)?n.isCancellationRequested?Vet.CANCELED:(this._stickyModel=this.createStickyModel(n,t),Vet.VALID):this._invalid()).then(void 0,t=>(Gc(t),Vet.CANCELED)),modelPromise:e
    }
  }
  isModelValid(n){
    return!0
  }
  isProviderValid(){
    return!0
  }
}, Zla=class extends xjl{
  constructor(e, t){
    super(e), this._languageFeaturesService=t
  }
  createModelFromProvider(e){
    return J1e.create(this._languageFeaturesService.documentSymbolProvider, this._editor.getModel(), e)
  }
  createStickyModel(e, t){
    const{
      stickyOutlineElement:i,providerID:r
    }
    =this._stickyModelFromOutlineModel(t, this._stickyModel?.outlineProviderId), s=this._editor.getModel();
    return new Ejl(s.uri, s.getVersionId(), i, r)
  }
  isModelValid(e){
    return e&&e.children.size>0
  }
  _stickyModelFromOutlineModel(e, t){
    let i;
    if(bl.first(e.children.values())instanceof GZ){
      const a=bl.find(e.children.values(),l=>l.id===t);
      if(a)i=a.children;
      else{
        let l="",u=-1,d;
        for(const[m,p]of e.children.entries()){
          const g=this._findSumOfRangesOfGroup(p);
          g>u&&(d=p,u=g,l=p.id)
        }
        t=l,i=d.children
      }
    }
    else i=e.children;
    const r=[], s=Array.from(i.values()).sort((a, l)=>{
      const u=new Cdn(a.symbol.range.startLineNumber,a.symbol.range.endLineNumber),d=new Cdn(l.symbol.range.startLineNumber,l.symbol.range.endLineNumber);
      return this._comparator(u,d)
    });
    for(const a of s)r.push(this._stickyModelFromOutlineElement(a, a.symbol.selectionRange.startLineNumber));
    return{
      stickyOutlineElement:new qgi(void 0,r,void 0),providerID:t
    }
  }
  _stickyModelFromOutlineElement(e, t){
    const i=[];
    for(const s of e.children.values())if(s.symbol.selectionRange.startLineNumber!==s.symbol.range.endLineNumber)if(s.symbol.selectionRange.startLineNumber!==t)i.push(this._stickyModelFromOutlineElement(s, s.symbol.selectionRange.startLineNumber));
    else for(const o of s.children.values())i.push(this._stickyModelFromOutlineElement(o, s.symbol.selectionRange.startLineNumber));
    i.sort((s, o)=>this._comparator(s.range, o.range));
    const r=new Cdn(e.symbol.selectionRange.startLineNumber, e.symbol.range.endLineNumber);
    return new qgi(r, i, void 0)
  }
  _comparator(e, t){
    return e.startLineNumber!==t.startLineNumber?e.startLineNumber-t.startLineNumber:t.endLineNumber-e.endLineNumber
  }
  _findSumOfRangesOfGroup(e){
    let t=0;
    for(const i of e.children.values())t+=this._findSumOfRangesOfGroup(i);
    return e instanceof G9?t+e.symbol.range.endLineNumber-e.symbol.selectionRange.startLineNumber:t
  }
}, Zla=__decorate([__param(1, $u)], Zla), Tjl=class extends xjl{
  constructor(n){
    super(n), this._foldingLimitReporter=this._register(new BQl(n))
  }
  createStickyModel(n, e){
    const t=this._fromFoldingRegions(e), i=this._editor.getModel();
    return new Ejl(i.uri, i.getVersionId(), t, void 0)
  }
  isModelValid(n){
    return n!==null
  }
  _fromFoldingRegions(n){
    const e=n.length, t=[], i=new qgi(void 0, [], void 0);
    for(let r=0;
    r<e;
    r++){
      const s=n.getParentIndex(r);
      let o;
      s!==-1?o=t[s]:o=i;
      const a=new qgi(new Cdn(n.getStartLineNumber(r),n.getEndLineNumber(r)+1),[],o);
      o.children.push(a),t.push(a)
    }
    return i
  }
}, Xla=class extends Tjl{
  constructor(e, t){
    super(e), this._languageConfigurationService=t, this.provider=this._register(new fgi(e.getModel(), this._languageConfigurationService, this._foldingLimitReporter))
  }
  async createModelFromProvider(e){
    return this.provider.compute(e)
  }
}, Xla=__decorate([__param(1, JS)], Xla), eua=class extends Tjl{
  constructor(e, t, i){
    super(e), this._languageFeaturesService=i;
    const r=AJ.getFoldingRangeProviders(this._languageFeaturesService, e.getModel());
    r.length>0&&(this.provider=this._register(new Upi(e.getModel(), r, t, this._foldingLimitReporter, void 0)))
  }
  isProviderValid(){
    return this.provider!==void 0
  }
  async createModelFromProvider(e){
    return this.provider?.compute(e)??null
  }
}, eua=__decorate([__param(2, $u)], eua)
}
}), iwg, tua, tkA=