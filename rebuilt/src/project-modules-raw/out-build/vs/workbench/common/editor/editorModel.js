// Module: out-build/vs/workbench/common/editor/editorModel.js
// Offset: 31132385 (bundle byte offset)
// Size: 431 bytes

yn(), rt(), Uce=class extends at{
  constructor(){
    super(...arguments), this._onWillDispose=this._register(new Qe), this.onWillDispose=this._onWillDispose.event, this.resolved=!1
  }
  async resolve(){
    this.resolved=!0
  }
  isResolved(){
    return this.resolved
  }
  isDisposed(){
    return this._store.isDisposed
  }
  dispose(){
    this._onWillDispose.fire(), super.dispose()
  }
}
}
}), zme, GSa, oDf, aDf, $Me=