// Module: out-build/vs/base/common/result.js
// Offset: 33815193 (bundle byte offset)
// Size: 355 bytes

N0u=class{
  constructor(){
    this.ok_=!1
  }
  ok(){
    return this.ok_
  }
  context(n){
    return this.ok_?this:Cxe(`${n}: ${this.err}`)
  }
}, ZUf=class extends N0u{
  constructor(n){
    super(), this.ok_=!0, this.v=n, this.err=void 0
  }
}, XUf=class extends N0u{
  constructor(n){
    super(), this.ok_=!1, this.err=n, this.v=void 0
  }
}
}
}), rvn, M0u, F0u=