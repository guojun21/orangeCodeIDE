// Module: out-build/vs/workbench/common/reasonedAbortController.js
// Offset: 28534165 (bundle byte offset)
// Size: 1081 bytes

_s(), gif=class extends AbortController{
  constructor(n, e, t=1, i){
    super(), this._logKey=n, this._structuredLogger=e, this._samplingRate=t, this._metadata=i, this.signal.addEventListener("abort", ()=>this._logAbortEvent())
  }
  abort(n){
    this.signal.aborted||(this._reason=n, super.abort(n))
  }
  getReason(){
    return this._reason
  }
  _logAbortEvent(){
    if(Math.random()>=this._samplingRate)return;
    const n={
      reason:this._reason||"unknown",...this._metadata||{
        
      }
    };
    this._structuredLogger.info(this._logKey, "abort_controller_aborted", n)
  }
}, fif=class{
  constructor(n){
    this._structuredLogger=n
  }
  create(n, e, t=1){
    const i=typeof t=="number"&&t>=0&&t<=1?t:1;
    return new gif(n, this._structuredLogger, i, e)
  }
}, bif=AbortController, vif=class extends bif{
  abort(n){
    if(QeA()){
      const e=new Error().stack??"";
      V_c.some(t=>e.includes(t))&&console.trace("[AbortController.abort]",n)
    }
    super.abort(n)
  }
}, globalThis.AbortController=vif
}
});
function Aif(n){
  return`${n.modelName}-${n.maxMode}-${n.mode}-${n.bestOfNGroupId??""}-${n.editingBubbleId??""}`
}
var Nyi, ylu, OAa, wlu=