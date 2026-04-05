// Module: out-build/vs/base/common/observableInternal/logging/debugger/utils.js
// Offset: 512193 (bundle byte offset)
// Size: 310 bytes

poh=class{
  constructor(){
    this._timeout=void 0
  }
  throttle(n, e){
    this._timeout===void 0&&(this._timeout=setTimeout(()=>{
      this._timeout=void 0,n()
    }, e))
  }
  dispose(){
    this._timeout!==void 0&&clearTimeout(this._timeout)
  }
}
}
}), goh, ciA=