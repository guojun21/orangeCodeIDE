// Module: out-build/vs/base/browser/ui/aria/aria.js
// Offset: 572041 (bundle byte offset)
// Size: 533 bytes

ri(), JiA(), dkc=2e4
}
});
function GiA(n, e, t){
  e[qbe.DI_TARGET]===e?e[qbe.DI_DEPENDENCIES].push({
    id:n, index:t
  }):(e[qbe.DI_DEPENDENCIES]=[{
    id:n, index:t
  }
  ], e[qbe.DI_TARGET]=e)
}
function xi(n){
  if(qbe.serviceIds.has(n))return qbe.serviceIds.get(n);
  const e=function(t, i, r){
    if(arguments.length!==3)throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    GiA(e, t, r)
  };
  return e.toString=()=>n, qbe.serviceIds.set(n, e), e
}
function SB_(n){
  return n
}
var qbe, ln, Wt=