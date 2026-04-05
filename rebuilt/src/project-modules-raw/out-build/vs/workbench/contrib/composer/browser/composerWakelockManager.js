// Module: out-build/vs/workbench/contrib/composer/browser/composerWakelockManager.js
// Offset: 30430522 (bundle byte offset)
// Size: 1625 bytes

Ti(), $Sf=class{
  constructor(n, e, t){
    this._composerHandle=n, this._powerMainService=e, this._logService=t, this._disposed=!1, this._pendingOp=Promise.resolve(), this._composerHandle.data.hasBlockingPendingActions||this._acquire("agent-loop"), this._setupReactiveWatch()
  }
  _acquire(n){
    this._pendingOp=this._pendingOp.then(async()=>{
      if(!this._disposed)try{
        const e=await this._powerMainService.startWakelock(n);
        if(this._disposed){
          await this._powerMainService.stopWakelock(e);
          return
        }
        this._wakelockId=e,this._logService.info(`[ComposerWakelockManager] Acquired wakelock id=${e} reason="${n}" composerId=${this._composerHandle.composerId}`)
      }
      catch(e){
        this._logService.warn(`[ComposerWakelockManager] Failed to acquire wakelock: ${e}`)
      }
    })
  }
  _release(n){
    this._pendingOp=this._pendingOp.then(async()=>{
      const e=this._wakelockId;
      if(e!==void 0){
        this._wakelockId=void 0;
        try{
          await this._powerMainService.stopWakelock(e),this._logService.info(`[ComposerWakelockManager] Released wakelock id=${e} reason="${n}" composerId=${this._composerHandle.composerId}`)
        }
        catch(t){
          this._logService.warn(`[ComposerWakelockManager] Failed to release wakelock id=${e}: ${t}`)
        }
      }
    })
  }
  _setupReactiveWatch(){
    this._disposeReactive=iI(n=>(An(Bf(()=>this._composerHandle.data.hasBlockingPendingActions, (e, t)=>{
      this._disposed||(e&&!t?this._release("user-approval-requested"):!e&&t&&this._acquire("agent-loop-resumed"))
    }, {
      defer:!0
    })), n))
  }
  dispose(){
    this._disposed||(this._disposed=!0, this._disposeReactive?.(), this._disposeReactive=void 0, this._release("generation-ended"))
  }
}
}
}), GEe, Xkt=