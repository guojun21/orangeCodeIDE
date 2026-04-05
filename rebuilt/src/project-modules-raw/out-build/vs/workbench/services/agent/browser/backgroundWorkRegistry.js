// Module: out-build/vs/workbench/services/agent/browser/backgroundWorkRegistry.js
// Offset: 30552244 (bundle byte offset)
// Size: 2323 bytes

VNe(), yn(), rt(), Er(), Wt(), Tw(), ogn=xi("backgroundWorkService"), KSf=class extends at{
  constructor(){
    super(...arguments), this._shellWorkById=new Map, this._subagentWorkById=new Map, this._pendingCompletionsByComposerId=new Map, this._onDidEnqueueCompletion=this._register(new Qe), this.onDidEnqueueCompletion=this._onDidEnqueueCompletion.event, this.backgroundWorkItems=this._register(new j_([]))
  }
  _publish(){
    this.backgroundWorkItems.change([...this._subagentWorkById.values(), ...this._shellWorkById.values()])
  }
  getComposerBackgroundWork(n){
    return this.backgroundWorkItems.value.filter(e=>e.composerId===n)
  }
  enqueueCompletion(n){
    const e=this._pendingCompletionsByComposerId.get(n.composerId)??[];
    e.push(n), this._pendingCompletionsByComposerId.set(n.composerId, e), this._onDidEnqueueCompletion.fire({
      composerId:n.composerId
    })
  }
  hasPendingCompletions(n){
    const e=this._pendingCompletionsByComposerId.get(n);
    return e!==void 0&&e.length>0
  }
  drainCompletions(n){
    const e=this._pendingCompletionsByComposerId.get(n);
    return!e||e.length===0?[]:(this._pendingCompletionsByComposerId.delete(n), [...e])
  }
  replaceShellWorkSnapshot(n){
    this._shellWorkById.clear();
    for(const e of n)e.kind==="shell"&&this._shellWorkById.set(e.id, e);
    this._publish()
  }
  upsertShellWork(n){
    n.kind==="shell"&&(this._shellWorkById.set(n.id, n), this._publish())
  }
  clearShellWork(n){
    this._shellWorkById.delete(n)&&this._publish()
  }
  async openBackgroundShell(n){
    return this._shellOpener?.(n)??!1
  }
  upsertSubagentWork(n){
    n.kind==="subagent"&&(this._subagentWorkById.set(n.id, n), this._publish())
  }
  clearSubagentWork(n){
    this._subagentWorkById.delete(n)&&this._publish()
  }
  async killBackgroundWork(n){
    switch(n.kind){
      case"shell":{
        const e=await this._shellKiller?.(n.id);
        return e&&this.clearShellWork(n.id),e??!1
      }
      case"subagent":{
        const e=await this._subagentKiller?.(n.id);
        return e&&this.clearSubagentWork(n.id),e??!1
      }
      default:return Pty(n.kind)
    }
  }
  registerShellKiller(n){
    return this._shellKiller=n, $i(()=>{
      this._shellKiller===n&&(this._shellKiller=void 0)
    })
  }
  registerShellOpener(n){
    return this._shellOpener=n, $i(()=>{
      this._shellOpener===n&&(this._shellOpener=void 0)
    })
  }
  registerSubagentKiller(n){
    return this._subagentKiller=n, $i(()=>{
      this._subagentKiller===n&&(this._subagentKiller=void 0)
    })
  }
}, Vi(ogn, KSf, 1)
}
}), YSf=