// Module: out-build/vs/base/common/cancellation.js
// Offset: 318619 (bundle byte offset)
// Size: 1469 bytes

yn(), U0c=Object.freeze(function(n, e){
  const t=setTimeout(n.bind(e), 0);
  return{
    dispose(){
      clearTimeout(t)
    }
  }
}), (function(n){
  function e(t){
    return t===n.None||t===n.Cancelled||t instanceof tFn?!0:!t||typeof t!="object"?!1:typeof t.isCancellationRequested=="boolean"&&typeof t.onCancellationRequested=="function"
  }
  n.isCancellationToken=e, n.None=Object.freeze({
    isCancellationRequested:!1, onCancellationRequested:In.None
  }), n.Cancelled=Object.freeze({
    isCancellationRequested:!0, onCancellationRequested:U0c
  })
})(Cs||(Cs={
  
})), tFn=class{
  constructor(){
    this._isCancelled=!1, this._emitter=null
  }
  cancel(){
    this._isCancelled||(this._isCancelled=!0, this._emitter&&(this._emitter.fire(void 0), this.dispose()))
  }
  get isCancellationRequested(){
    return this._isCancelled
  }
  get onCancellationRequested(){
    return this._isCancelled?U0c:(this._emitter||(this._emitter=new Qe), this._emitter.event)
  }
  dispose(){
    this._emitter&&(this._emitter.dispose(), this._emitter=null)
  }
}, Wc=class{
  constructor(n){
    this._token=void 0, this._parentListener=void 0, this._parentListener=n&&n.onCancellationRequested(this.cancel, this)
  }
  get token(){
    return this._token||(this._token=new tFn), this._token
  }
  cancel(){
    this._token?this._token instanceof tFn&&this._token.cancel():this._token=Cs.Cancelled
  }
  dispose(n=!1){
    n&&this.cancel(), this._parentListener?.dispose(), this._token?this._token instanceof tFn&&this._token.dispose():this._token=Cs.None
  }
}
}
}), ugt, i2o, UFt, u2, h5e, r2o, S6=