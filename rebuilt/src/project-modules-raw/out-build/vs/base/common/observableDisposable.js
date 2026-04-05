// Module: out-build/vs/base/common/observableDisposable.js
// Offset: 31058363 (bundle byte offset)
// Size: 452 bytes

yn(), rt(), T1t=class extends at{
  constructor(){
    super(...arguments), this._onDispose=this._register(new Qe), this._disposed=!1
  }
  onDispose(n){
    return this.disposed?(n(), this):(this._register(this._onDispose.event(n)), this)
  }
  get disposed(){
    return this._disposed
  }
  dispose(){
    this.disposed||(this._disposed=!0, this._onDispose.fire(), super.dispose())
  }
  assertNotDisposed(n){
    Ogu(this, n)
  }
}
}
}), V_i, pSa=