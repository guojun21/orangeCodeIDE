// Module: out-build/vs/editor/contrib/hover/browser/hoverOperation.js
// Offset: 4216750 (bundle byte offset)
// Size: 3304 bytes

vr(), _s(), yn(), rt(), (function(n){
  n[n.Idle=0]="Idle", n[n.FirstWait=1]="FirstWait", n[n.SecondWait=2]="SecondWait", n[n.WaitingForAsync=3]="WaitingForAsync", n[n.WaitingForAsyncShowingLoading=4]="WaitingForAsyncShowingLoading"
})(qJh||(qJh={
  
})), (function(n){
  n[n.Delayed=0]="Delayed", n[n.Immediate=1]="Immediate"
})(HJh||(HJh={
  
})), (function(n){
  n[n.Mouse=0]="Mouse", n[n.Click=1]="Click", n[n.Keyboard=2]="Keyboard"
})(JJh||(JJh={
  
})), GJh=class{
  constructor(n, e, t, i){
    this.value=n, this.isComplete=e, this.hasLoadingMessage=t, this.options=i
  }
}, B5c=class extends at{
  constructor(n, e){
    super(), this._editor=n, this._computer=e, this._onResult=this._register(new Qe), this.onResult=this._onResult.event, this._asyncComputationScheduler=this._register(new v$o(t=>this._triggerAsyncComputation(t), 0)), this._syncComputationScheduler=this._register(new v$o(t=>this._triggerSyncComputation(t), 0)), this._loadingMessageScheduler=this._register(new v$o(t=>this._triggerLoadingMessage(t), 0)), this._state=0, this._asyncIterable=null, this._asyncIterableDone=!1, this._result=[]
  }
  dispose(){
    this._asyncIterable&&(this._asyncIterable.cancel(), this._asyncIterable=null), this._options=void 0, super.dispose()
  }
  get _hoverTime(){
    return this._editor.getOption(62).delay
  }
  get _firstWaitTime(){
    return this._hoverTime/2
  }
  get _secondWaitTime(){
    return this._hoverTime-this._firstWaitTime
  }
  get _loadingMessageTime(){
    return 3*this._hoverTime
  }
  _setState(n, e){
    this._options=e, this._state=n, this._fireResult(e)
  }
  _triggerAsyncComputation(n){
    this._setState(2, n), this._syncComputationScheduler.schedule(n, this._secondWaitTime), this._computer.computeAsync?(this._asyncIterableDone=!1, this._asyncIterable=vnA(e=>this._computer.computeAsync(n, e)), (async()=>{
      try{
        for await(const e of this._asyncIterable)e&&(this._result.push(e),this._fireResult(n));
        this._asyncIterableDone=!0,(this._state===3||this._state===4)&&this._setState(0,n)
      }
      catch(e){
        Gc(e)
      }
    })()):this._asyncIterableDone=!0
  }
  _triggerSyncComputation(n){
    this._computer.computeSync&&(this._result=this._result.concat(this._computer.computeSync(n))), this._setState(this._asyncIterableDone?0:3, n)
  }
  _triggerLoadingMessage(n){
    this._state===3&&this._setState(4, n)
  }
  _fireResult(n){
    if(this._state===1||this._state===2)return;
    const e=this._state===0, t=this._state===4;
    this._onResult.fire(new GJh(this._result.slice(0), e, t, n))
  }
  start(n, e){
    if(n===0)this._state===0&&(this._setState(1, e), this._asyncComputationScheduler.schedule(e, this._firstWaitTime), this._loadingMessageScheduler.schedule(e, this._loadingMessageTime));
    else switch(this._state){
      case 0:this._triggerAsyncComputation(e),this._syncComputationScheduler.cancel(),this._triggerSyncComputation(e);
      break;
      case 2:this._syncComputationScheduler.cancel(),this._triggerSyncComputation(e);
      break
    }
  }
  cancel(){
    this._asyncComputationScheduler.cancel(), this._syncComputationScheduler.cancel(), this._loadingMessageScheduler.cancel(), this._asyncIterable&&(this._asyncIterable.cancel(), this._asyncIterable=null), this._result=[], this._options=void 0, this._state=0
  }
  get options(){
    return this._options
  }
}, v$o=class extends at{
  constructor(n, e){
    super(), this._scheduler=this._register(new Hu(()=>n(this._options), e))
  }
  schedule(n, e){
    this._options=n, this._scheduler.schedule(e)
  }
  cancel(){
    this._scheduler.cancel()
  }
}
}
}), G9t, eUn=