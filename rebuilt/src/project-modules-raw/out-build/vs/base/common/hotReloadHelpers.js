// Module: out-build/vs/base/common/hotReloadHelpers.js
// Offset: 1933591 (bundle byte offset)
// Size: 375 bytes

SIc(), Uc(), kIc=new Map
}
});
function C9(n, e, t){
  return X2o({
    debugName:()=>`Configuration Key "${n}"`
  }, i=>t.onDidChangeConfiguration(r=>{
    r.affectsConfiguration(n)&&i(r)
  }), ()=>t.getValue(n)??e)
}
function eM(n, e, t){
  const i=n.bindTo(e);
  return _5e({
    debugName:()=>`Set Context Key "${n.key}"`
  }, r=>{
    i.set(t(r))
  })
}
var AF=