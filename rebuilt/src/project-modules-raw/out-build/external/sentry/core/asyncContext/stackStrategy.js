// Module: out-build/external/sentry/core/asyncContext/stackStrategy.js
// Offset: 32755 (bundle byte offset)
// Size: 887 bytes

AKd(), LMn(), h9(), gbe(), wKd=class{
  constructor(n, e){
    let t;
    n?t=n:t=new dSe;
    let i;
    e?i=e:i=new dSe, this._stack=[{
      scope:t
    }
    ], this._isolationScope=i
  }
  withScope(n){
    const e=this._pushScope();
    let t;
    try{
      t=n(e)
    }
    catch(i){
      throw this._popScope(),i
    }
    return Zje(t)?t.then(i=>(this._popScope(), i), i=>{
      throw this._popScope(),i
    }):(this._popScope(), t)
  }
  getClient(){
    return this.getStackTop().client
  }
  getScope(){
    return this.getStackTop().scope
  }
  getIsolationScope(){
    return this._isolationScope
  }
  getStackTop(){
    return this._stack[this._stack.length-1]
  }
  _pushScope(){
    const n=this.getScope().clone();
    return this._stack.push({
      client:this.getClient(),scope:n
    }), n
  }
  _popScope(){
    return this._stack.length<=1?!1:!!this._stack.pop()
  }
}
}
});
function Ijv(n){
  const e=lSe(), t=M2t(e);
  t.acs=n
}
function nze(n){
  const e=M2t(n);
  return e.acs?e.acs:xjv()
}
var NMn=