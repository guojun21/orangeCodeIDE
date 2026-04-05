// Module: out-build/vs/platform/instantiation/common/extensions.js
// Offset: 752098 (bundle byte offset)
// Size: 615 bytes

Mf(), Wkc=[], Qkc=new Set, (function(n){
  n[n.Eager=0]="Eager", n[n.Delayed=1]="Delayed", n[n.Lazy=2]="Lazy"
})(Qch||(Qch={
  
})), (function(n){
  n[n.Workspace=0]="Workspace", n[n.Window=1]="Window"
})(jch||(jch={
  
}))
}
});
function SrA(n){
  const e=QD(n), t=Vch[e.toLowerCase()];
  return t!==void 0?t:q4t(n)
}
function q4t(n){
  const e=QD(n);
  return i4o[e.toLowerCase()]
}
function krA(n){
  for(const e in i4o)if(i4o[e]===n)return e
}
function zch(n, e){
  const t=Kch.exec(n);
  return t?`${t[1].toLowerCase()}/${t[2].toLowerCase()}${t[3]??""}`:e?void 0:n
}
var NA, Vch, i4o, Kch, hF=