// Module: out-build/vs/base/common/hierarchicalKind.js
// Offset: 2374922 (bundle byte offset)
// Size: 1113 bytes

p0=class JCn{
  static{
    this.sep="."
  }
  static{
    this.None=new JCn("@@none@@")
  }
  static{
    this.Empty=new JCn("")
  }
  constructor(e){
    this.value=e
  }
  equals(e){
    return this.value===e.value
  }
  contains(e){
    return this.equals(e)||this.value===""||e.value.startsWith(this.value+JCn.sep)
  }
  intersects(e){
    return this.contains(e)||e.contains(this)
  }
  append(...e){
    return new JCn((this.value?[this.value, ...e]:e).join(JCn.sep))
  }
}
}
});
function bSh(n){
  return"value"in n?n.value:n.nonReactive()
}
function Tv(n){
  if(!a9e())throw new Error("solidObserver called outside of reactive scope. This will cause memory leaks. Call within a SolidJS component or runWithOwner.");
  const[e, t]=lt(bSh(n));
  return An(()=>{
    const i=n.event(r=>{
      t(()=>r)
    });
    Ai(()=>i.dispose())
  }), e
}
function U3n(n, e){
  if(!a9e())throw new Error("createDynamicPropAccessor called outside of reactive scope. This will cause memory leaks. Call within a SolidJS component or runWithOwner.");
  const[t, i]=lt(e);
  return An(()=>{
    const r=n();
    if(!r){
      i(()=>e);
      return
    }
    i(()=>bSh(r));
    const s=r.event(o=>{
      i(()=>o)
    });
    Ai(()=>s.dispose())
  }), t
}
var j_, Tw=