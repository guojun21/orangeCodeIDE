// Module: out-build/vs/base/browser/domImpl/domObservable.js
// Offset: 522490 (bundle byte offset)
// Size: 813 bytes

rt(), Uc(), KC()
}
});
function _oh(n, e){
  Uoh(n)?n.setAttribute("class", e):n.className=e
}
function Coh(n, e, t){
  if(Hgt(n)){
    t(n.read(e));
    return
  }
  if(Array.isArray(n)){
    for(const i of n)Coh(i, e, t);
    return
  }
  t(n)
}
function Soh(n, e){
  let t="";
  return Coh(n, e, i=>{
    i&&(t.length===0?t=i:t+=" "+i)
  }), t
}
function koh(n){
  return Hgt(n)?!0:Array.isArray(n)?n.some(e=>koh(e)):!1
}
function Eoh(n){
  return typeof n=="number"?n+"px":n
}
function xoh(n){
  return Hgt(n)?!0:Array.isArray(n)?n.some(e=>xoh(e)):!1
}
function Toh(n, e, t){
  t==null?n.removeAttribute(JSc(e)):n.setAttribute(JSc(e), String(t))
}
function JSc(n){
  return n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}
function Hgt(n){
  return n&&typeof n=="object"&&n.read!==void 0&&n.reportChanges!==void 0
}
var Mv, Ioh, Doh, Boh, giA=