// Module: out-build/vs/base/common/performance.js
// Offset: 908848 (bundle byte offset)
// Size: 688 bytes

J1c=jsA(globalThis), Yh=J1c.mark, Pdh=J1c.getMarks
}
});
function G1c(n){
  return JSON.stringify(n, zsA)
}
function gW(n){
  let e=JSON.parse(n);
  return e=XT(e), e
}
function zsA(n, e){
  return e instanceof RegExp?{
    $mid:2, source:e.source, flags:e.flags
  }
  :e
}
function XT(n, e=0){
  if(!n||e>200)return n;
  if(typeof n=="object"){
    switch(n.$mid){
      case 1:return je.revive(n);
      case 2:return new RegExp(n.source,n.flags);
      case 17:return new Date(n.source)
    }
    if(n instanceof Ms||n instanceof Uint8Array)return n;
    if(Array.isArray(n))for(let t=0;
    t<n.length;
    ++t)n[t]=XT(n[t], e+1);
    else for(const t in n)Object.hasOwnProperty.call(n, t)&&(n[t]=XT(n[t], e+1))
  }
  return n
}
var UB=