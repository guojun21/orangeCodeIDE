// Module: out-build/vs/base/browser/ui/list/splice.js
// Offset: 1956149 (bundle byte offset)
// Size: 962 bytes

Lwh=class{
  constructor(n){
    this.spliceables=n
  }
  splice(n, e, t){
    this.spliceables.forEach(i=>i.splice(n, e, t))
  }
}
}
});
function duA(n){
  const e=huA(n);
  if(e&&e.length>0)return new Uint32Array(e)
}
function huA(n){
  if(Mte=0, gRe(n, E3o, 4352), Mte>0||(gRe(n, x3o, 4449), Mte>0)||(gRe(n, T3o, 4520), Mte>0)||(gRe(n, zVe, 12593), Mte))return y9e.subarray(0, Mte);
  if(n>=44032&&n<=55203){
    const e=n-44032, t=e%588, i=Math.floor(e/588), r=Math.floor(t/28), s=t%28-1;
    if(i<E3o.length?gRe(i, E3o, 0):4352+i-12593<zVe.length&&gRe(4352+i, zVe, 12593), r<x3o.length?gRe(r, x3o, 0):4449+r-12593<zVe.length&&gRe(4449+r-12593, zVe, 12593), s>=0&&(s<T3o.length?gRe(s, T3o, 0):4520+s-12593<zVe.length&&gRe(4520+s-12593, zVe, 12593)), Mte>0)return y9e.subarray(0, Mte)
  }
}
function gRe(n, e, t){
  n>=t&&n<t+e.length&&muA(e[n-t])
}
function muA(n){
  n!==0&&(y9e[Mte++]=n&255, n>>8&&(y9e[Mte++]=n>>8&255), n>>16&&(y9e[Mte++]=n>>16&255))
}
var Mte, y9e, Nwh, Mwh, Fwh, E3o, x3o, T3o, zVe, puA=