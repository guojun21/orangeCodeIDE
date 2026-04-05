// Module: out-build/vs/base/common/errors.js
// Offset: 234627 (bundle byte offset)
// Size: 2105 bytes

wnh=class{
  constructor(){
    this.listeners=[], this.unexpectedErrorHandler=function(n){
      setTimeout(()=>{
        throw n.stack?cT.isErrorNoTelemetry(n)?new cT(n.message+`

`+n.stack):new Error(n.message+`

`+n.stack):n
      },0)
    }
  }
  addListener(n){
    return this.listeners.push(n), ()=>{
      this._removeListener(n)
    }
  }
  emit(n){
    this.listeners.forEach(e=>{
      e(n)
    })
  }
  _removeListener(n){
    this.listeners.splice(this.listeners.indexOf(n), 1)
  }
  setUnexpectedErrorHandler(n){
    this.unexpectedErrorHandler=n
  }
  getUnexpectedErrorHandler(){
    return this.unexpectedErrorHandler
  }
  onUnexpectedError(n){
    this.unexpectedErrorHandler(n), this.emit(n)
  }
  onUnexpectedExternalError(n){
    this.unexpectedErrorHandler(n)
  }
}, Kpt=new wnh, F2n="Canceled", vf=class extends Error{
  constructor(){
    if(super(F2n), this.name=this.message, DMo&&typeof console<"u"){
      const n=new Error().stack??"";
      V_c.some(e=>n.includes(e))&&console.trace("[DebugCancellation] CancellationError created")
    }
  }
}, O2n=class extends Error{
  constructor(n){
    super("NotSupported"), n&&(this.message=n)
  }
}, cT=class Xod extends Error{
  constructor(e){
    super(e), this.name="CodeExpectedError"
  }
  static fromError(e){
    if(e instanceof Xod)return e;
    const t=new Xod;
    return t.message=e.message, t.stack=e.stack, t
  }
  static isErrorNoTelemetry(e){
    return e.name==="CodeExpectedError"
  }
}, _m=class VHb extends Error{
  constructor(e){
    super(e||"An unexpected bug occurred."), Object.setPrototypeOf(this, VHb.prototype)
  }
}, V_c=["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "ComposerToolFormerMessage", "QuickAgentConversation", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"], DMo=!1
}
});
function _6(n, e){
  const t=this;
  let i=!1, r;
  return function(){
    if(i)return r;
    if(i=!0, e)try{
      r=n.apply(t,arguments)
    }
    finally{
      e()
    }
    else r=n.apply(t, arguments);
    return r
  }
}
var wH=