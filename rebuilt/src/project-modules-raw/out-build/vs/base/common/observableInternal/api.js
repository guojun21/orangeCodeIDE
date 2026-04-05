// Module: out-build/vs/base/common/observableInternal/api.js
// Offset: 488137 (bundle byte offset)
// Size: 1251 bytes

w5e(), y5e(), d4t(), OnA()
}
});
function Oc(n){
  return new g4t(new N4(void 0, void 0, n), n, void 0, void 0)
}
function _5e(n, e){
  return new g4t(new N4(n.owner, n.debugName, n.debugReferenceFn??e), e, void 0, void 0)
}
function p4t(n, e){
  return new g4t(new N4(n.owner, n.debugName, n.debugReferenceFn??e), e, n.createEmptyChangeSummary, n.handleChange)
}
function $nA(n, e){
  const t=new Ut, i=p4t({
    owner:n.owner, debugName:n.debugName, debugReferenceFn:n.debugReferenceFn??e, createEmptyChangeSummary:n.createEmptyChangeSummary, handleChange:n.handleChange
  }, (r, s)=>{
    t.clear(), e(r, s, t)
  });
  return $i(()=>{
    i.dispose(), t.dispose()
  })
}
function M0(n){
  const e=new Ut, t=_5e({
    owner:void 0, debugName:void 0, debugReferenceFn:n
  }, i=>{
    e.clear(), n(i, e)
  });
  return $i(()=>{
    t.dispose(), e.dispose()
  })
}
function qnA(n, e){
  let t;
  return _5e({
    debugReferenceFn:e
  }, i=>{
    const r=n.read(i), s=t;
    t=r, e({
      lastValue:s,newValue:r
    })
  })
}
function HnA(n, e, t=i=>i){
  const i=new Map;
  return _5e({
    debugReferenceFn:n
  }, r=>{
    const s=new Map, o=new Map(i);
    for(const a of n(r)){
      const l=t(a);
      i.has(l)?o.delete(l):(s.set(l,a),i.set(l,a))
    }
    for(const a of o.keys())i.delete(a);
    (s.size||o.size)&&e({
      addedValues:[...s.values()],removedValues:[...o.values()]
    })
  })
}
var eoh, g4t, GFn=