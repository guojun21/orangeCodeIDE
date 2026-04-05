// Module: out-build/vs/workbench/contrib/aiBackgroundComposer/browser/backgroundComposerEventService.js
// Offset: 30373356 (bundle byte offset)
// Size: 1122 bytes

Wt(), rt(), Er(), yn(), zkt=xi("backgroundComposerEventService"), fSf=class extends at{
  constructor(){
    super(...arguments), this._onDidBcStatusChangeEmitter=this._register(new Qe), this.onDidBcStatusChange=this._onDidBcStatusChangeEmitter.event, this._onDidRequestPauseEmitter=this._register(new Qe), this.onDidRequestPause=this._onDidRequestPauseEmitter.event, this._onDidRequestOptimizedDiffDetailsEmitter=this._register(new Qe), this.onDidRequestOptimizedDiffDetails=this._onDidRequestOptimizedDiffDetailsEmitter.event, this._onDidResolveOptimizedDiffDetailsEmitter=this._register(new Qe), this.onDidResolveOptimizedDiffDetails=this._onDidResolveOptimizedDiffDetailsEmitter.event
  }
  fireDidBcStatusChange(n){
    this._onDidBcStatusChangeEmitter.fire(n)
  }
  fireDidRequestPause(n){
    this._onDidRequestPauseEmitter.fire(n)
  }
  fireDidRequestOptimizedDiffDetails(n){
    this._onDidRequestOptimizedDiffDetailsEmitter.fire(n)
  }
  fireDidResolveOptimizedDiffDetails(n){
    this._onDidResolveOptimizedDiffDetailsEmitter.fire(n)
  }
}, Vi(zkt, fSf, 2)
}
}), eit, tit=