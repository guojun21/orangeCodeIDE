// Module: out-build/vs/workbench/services/workingCopy/common/workingCopyService.js
// Offset: 28190511 (bundle byte offset)
// Size: 3857 bytes

Wt(), Er(), yn(), Yn(), rt(), cu(), _s(), cB=xi("workingCopyService"), ZXg=class extends Error{
  constructor(n, e){
    super(n), this.name="WorkingCopyLeakError", this.stack=e
  }
}, XXg=class MSn extends at{
  constructor(){
    super(...arguments), this._onDidRegister=this._register(new Qe), this.onDidRegister=this._onDidRegister.event, this._onDidUnregister=this._register(new Qe), this.onDidUnregister=this._onDidUnregister.event, this._onDidChangeDirty=this._register(new Qe), this.onDidChangeDirty=this._onDidChangeDirty.event, this._onDidChangeContent=this._register(new Qe), this.onDidChangeContent=this._onDidChangeContent.event, this._onDidSave=this._register(new Qe), this.onDidSave=this._onDidSave.event, this._workingCopies=new Set, this.mapResourceToWorkingCopies=new fu, this.mapWorkingCopyToListeners=this._register(new mp), this.mapLeakToCounter=new Map
  }
  get workingCopies(){
    return Array.from(this._workingCopies.values())
  }
  registerWorkingCopy(e){
    let t=this.mapResourceToWorkingCopies.get(e.resource);
    if(t?.has(e.typeId))throw new Error(`Cannot register more than one working copy with the same resource ${e.resource.toString()} and type ${e.typeId}.`);
    this._workingCopies.add(e), t||(t=new Map, this.mapResourceToWorkingCopies.set(e.resource, t)), t.set(e.typeId, e);
    const i=new Ut;
    i.add(e.onDidChangeContent(()=>this._onDidChangeContent.fire(e))), i.add(e.onDidChangeDirty(()=>this._onDidChangeDirty.fire(e))), i.add(e.onDidSave(s=>this._onDidSave.fire({
      workingCopy:e,...s
    }))), this.mapWorkingCopyToListeners.set(e, i), this._onDidRegister.fire(e), e.isDirty()&&this._onDidChangeDirty.fire(e);
    const r=this.trackLeaks(e);
    return $i(()=>{
      r&&this.untrackLeaks(r),this.unregisterWorkingCopy(e),this._onDidUnregister.fire(e)
    })
  }
  unregisterWorkingCopy(e){
    this._workingCopies.delete(e);
    const t=this.mapResourceToWorkingCopies.get(e.resource);
    t?.delete(e.typeId)&&t.size===0&&this.mapResourceToWorkingCopies.delete(e.resource), e.isDirty()&&this._onDidChangeDirty.fire(e), this.mapWorkingCopyToListeners.deleteAndDispose(e)
  }
  has(e){
    return je.isUri(e)?this.mapResourceToWorkingCopies.has(e):this.mapResourceToWorkingCopies.get(e.resource)?.has(e.typeId)??!1
  }
  get(e){
    return this.mapResourceToWorkingCopies.get(e.resource)?.get(e.typeId)
  }
  getAll(e){
    const t=this.mapResourceToWorkingCopies.get(e);
    if(t)return Array.from(t.values())
  }
  static{
    this.LEAK_TRACKING_THRESHOLD=256
  }
  static{
    this.LEAK_REPORTING_THRESHOLD=2*MSn.LEAK_TRACKING_THRESHOLD
  }
  static{
    this.LEAK_REPORTED=!1
  }
  trackLeaks(e){
    if(MSn.LEAK_REPORTED||this._workingCopies.size<MSn.LEAK_TRACKING_THRESHOLD)return;
    const t=`${e.resource.scheme}#${e.typeId||"<no typeId>"}
${new Error().stack?.split(`
`).slice(2).join(`
`)??""}`, i=(this.mapLeakToCounter.get(t)??0)+1;
    if(this.mapLeakToCounter.set(t, i), this._workingCopies.size>MSn.LEAK_REPORTING_THRESHOLD){
      MSn.LEAK_REPORTED=!0;
      const[r,s]=Array.from(this.mapLeakToCounter.entries()).reduce(([a,l],[u,d])=>d>l?[u,d]:[a,l]),o=`Potential working copy LEAK detected, having ${this._workingCopies.size} working copies already. Most frequent owner (${s})`;
      Gc(new ZXg(o,r))
    }
    return t
  }
  untrackLeaks(e){
    const t=(this.mapLeakToCounter.get(e)??1)-1;
    this.mapLeakToCounter.set(e, t), t===0&&this.mapLeakToCounter.delete(e)
  }
  get hasDirty(){
    for(const e of this._workingCopies)if(e.isDirty())return!0;
    return!1
  }
  get dirtyCount(){
    let e=0;
    for(const t of this._workingCopies)t.isDirty()&&e++;
    return e
  }
  get dirtyWorkingCopies(){
    return this.workingCopies.filter(e=>e.isDirty())
  }
  get modifiedCount(){
    let e=0;
    for(const t of this._workingCopies)t.isModified()&&e++;
    return e
  }
  get modifiedWorkingCopies(){
    return this.workingCopies.filter(e=>e.isModified())
  }
  isDirty(e, t){
    const i=this.mapResourceToWorkingCopies.get(e);
    if(i){
      if(typeof t=="string")return i.get(t)?.isDirty()??!1;
      for(const[,r]of i)if(r.isDirty())return!0
    }
    return!1
  }
}, Vi(cB, XXg, 1)
}
}), xEe, eef, B9A=