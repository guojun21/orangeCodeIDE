// Module: out-build/vs/workbench/common/contributions.js
// Offset: 26882917 (bundle byte offset)
// Size: 5772 bytes

Wt(), Op(), Ws(), vr(), O4(), jr(), qg(), cu(), rt(), LFg(), eu(), (function(n){
  n.Workbench="workbench.contributions.kind"
})(nh||(nh={
  
})), (function(n){
  n[n.BlockStartup=1]="BlockStartup", n[n.BlockRestore=2]="BlockRestore", n[n.AfterRestored=3]="AfterRestored", n[n.Eventually=4]="Eventually"
})(FFg||(FFg={
  
})), $hn=class kWa extends at{
  constructor(){
    super(...arguments), this.isGlass=!1, this.contributionsByPhase=new Map, this.contributionsByEditor=new Map, this.contributionsById=new Map, this.instancesById=new Map, this.instanceDisposables=this._register(new Ut), this.timingsByPhase=new Map, this.pendingRestoredContributions=new wy, this.whenRestored=this.pendingRestoredContributions.p
  }
  static{
    this.INSTANCE=new kWa
  }
  static{
    this.BLOCK_BEFORE_RESTORE_WARN_THRESHOLD=20
  }
  static{
    this.BLOCK_AFTER_RESTORE_WARN_THRESHOLD=100
  }
  get timings(){
    return this.timingsByPhase
  }
  registerWorkbenchContribution2(e, t, i, r){
    const s={
      id:e,ctor:t,disableInGlass:r?.disableInGlass
    };
    this.instantiationService&&this.lifecycleService&&this.logService&&this.environmentService&&this.editorPaneService&&(typeof i=="number"&&this.lifecycleService.phase>=i||typeof e=="string"&&NFg(i)&&this.editorPaneService.didInstantiateEditorPane(i.editorTypeId))?this.safeCreateContribution(this.instantiationService, this.logService, this.environmentService, s, typeof i=="number"?MFg(i):this.lifecycleService.phase):(typeof i=="number"&&Xpt(this.contributionsByPhase, MFg(i), []).push(s), typeof e=="string"&&(this.contributionsById.has(e)?console.error(`IWorkbenchContributionsRegistry#registerWorkbenchContribution(): Can't register multiple contributions with same id '${e}'`):this.contributionsById.set(e, s), NFg(i)&&Xpt(this.contributionsByEditor, i.editorTypeId, []).push(s)))
  }
  registerWorkbenchContribution(e, t, i){
    this.registerWorkbenchContribution2(void 0, e, f2A(t), i)
  }
  getWorkbenchContribution(e){
    if(this.instancesById.has(e))return this.instancesById.get(e);
    const t=this.instantiationService, i=this.lifecycleService, r=this.logService, s=this.environmentService;
    if(!t||!i||!r||!s)throw new Error(`IWorkbenchContributionsRegistry#getContribution('${e}'): cannot be called before registry started`);
    const o=this.contributionsById.get(e);
    if(!o)throw new Error(`IWorkbenchContributionsRegistry#getContribution('${e}'): contribution with that identifier is unknown.`);
    i.phase<3&&r.warn(`IWorkbenchContributionsRegistry#getContribution('${e}'): contribution instantiated before LifecyclePhase.Restored!`), this.safeCreateContribution(t, r, s, o, i.phase);
    const a=this.instancesById.get(e);
    if(!a)throw new Error(`IWorkbenchContributionsRegistry#getContribution('${e}'): failed to create contribution.`);
    return a
  }
  start(e){
    const t=this.instantiationService=e.get(ln), i=this.lifecycleService=e.get(ap), r=this.logService=e.get(Rr), s=this.environmentService=e.get(lg), o=this.editorPaneService=e.get(Inu);
    this.isGlass=!!e.get(Cc).isGlass, this._register(i.onDidShutdown(()=>{
      this.instanceDisposables.clear()
    }));
    for(const a of[1, 2, 3, 4])this.instantiateByPhase(t, i, r, s, a);
    for(const a of this.contributionsByEditor.keys())o.didInstantiateEditorPane(a)&&this.onEditor(a, t, i, r, s);
    this._register(o.onWillInstantiateEditorPane(a=>this.onEditor(a.typeId, t, i, r, s)))
  }
  onEditor(e, t, i, r, s){
    const o=this.contributionsByEditor.get(e);
    if(o){
      this.contributionsByEditor.delete(e);
      for(const a of o)this.safeCreateContribution(t,r,s,a,i.phase)
    }
  }
  instantiateByPhase(e, t, i, r, s){
    t.phase>=s?this.doInstantiateByPhase(e, i, r, s):t.when(s).then(()=>this.doInstantiateByPhase(e, i, r, s))
  }
  async doInstantiateByPhase(e, t, i, r){
    const s=this.contributionsByPhase.get(r);
    if(s)switch(this.contributionsByPhase.delete(r), r){
      case 1:case 2:{
        Yh(`code/willCreateWorkbenchContributions/${r}`);
        for(const o of s)this.safeCreateContribution(e,t,i,o,r);
        Yh(`code/didCreateWorkbenchContributions/${r}`);
        break
      }
      case 3:case 4:{
        r===4&&await this.pendingRestoredContributions.p,this.doInstantiateWhenIdle(s,e,t,i,r);
        break
      }
    }
  }
  doInstantiateWhenIdle(e, t, i, r, s){
    Yh(`code/willCreateWorkbenchContributions/${s}`);
    let o=0;
    const a=s===4?3e3:500, l=u=>{
      for(;
      o<e.length;
      ){
        const d=e[o++];
        if(this.safeCreateContribution(t,i,r,d,s),u.timeRemaining()<1){
          Mze(l,a);
          break
        }
      }
      o===e.length&&(Yh(`code/didCreateWorkbenchContributions/${s}`),s===3&&this.pendingRestoredContributions.complete())
    };
    Mze(l, a)
  }
  safeCreateContribution(e, t, i, r, s){
    if(typeof r.id=="string"&&this.instancesById.has(r.id)||r.disableInGlass&&this.isGlass)return;
    const o=Date.now();
    try{
      typeof r.id=="string"&&Yh(`code/willCreateWorkbenchContribution/${s}/${r.id}`);
      const a=e.createInstance(r.ctor);
      typeof r.id=="string"&&(this.instancesById.set(r.id,a),this.contributionsById.delete(r.id)),Ste(a)&&this.instanceDisposables.add(a)
    }
    catch(a){
      t.error(`Unable to create workbench contribution '${r.id??r.ctor.name}'.`,a)
    }
    finally{
      typeof r.id=="string"&&Yh(`code/didCreateWorkbenchContribution/${s}/${r.id}`)
    }
    if(typeof r.id=="string"||!i.isBuilt){
      const a=Date.now()-o;
      if(a>(s<3?kWa.BLOCK_BEFORE_RESTORE_WARN_THRESHOLD:kWa.BLOCK_AFTER_RESTORE_WARN_THRESHOLD)&&t.warn(`Creation of workbench contribution '${r.id??r.ctor.name}' took ${a}ms.`),typeof r.id=="string"){
        let l=this.timingsByPhase.get(s);
        l||(l=[],this.timingsByPhase.set(s,l)),l.push([r.id,a])
      }
    }
  }
}, Hc=$hn.INSTANCE.registerWorkbenchContribution2.bind($hn.INSTANCE), Zbi=$hn.INSTANCE.getWorkbenchContribution.bind($hn.INSTANCE), Di.add(nh.Workbench, $hn.INSTANCE)
}
});
function Lga(n, e){
  let t=class{
    constructor(r){
      this._store=new Ut;
      const s=new Ut;
      this._store.add(s);
      let o;
      if(r.checkFeatureGate(e)){
        const a=Dt(n);
        s.add(a),o=a
      }
      this._store.add(r.onDidChangeGates(a=>{
        if(a.changedGates?.has(e)&&(o&&s.delete(o),o=void 0,r.checkFeatureGate(e))){
          const l=Dt(n);
          s.add(l),o=l
        }
      }))
    }
    dispose(){
      this._store.dispose()
    }
  };
  t=__decorate([__param(0, Tl)], t), Hc(n.ID, t, 1)
}
var Dnu=