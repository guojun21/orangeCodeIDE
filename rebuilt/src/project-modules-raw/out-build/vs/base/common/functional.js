// Module: out-build/vs/base/common/functional.js
// Offset: 236732 (bundle byte offset)
// Size: 1067 bytes

Ae({
  "out-build/vs/base/common/functional.js"(){
    "use strict"
  }
});
function Cbe(n, e, t=n.length-1){
  const i=K_c(n, e, t);
  if(i!==-1)return n[i]
}
function K_c(n, e, t=n.length-1){
  for(let i=t;
  i>=0;
  i--){
    const r=n[i];
    if(e(r))return i
  }
  return-1
}
function EFt(n, e){
  const t=xFt(n, e);
  return t===-1?void 0:n[t]
}
function xFt(n, e, t=0, i=n.length){
  let r=t, s=i;
  for(;
  r<s;
  ){
    const o=Math.floor((r+s)/2);
    e(n[o])?r=o+1:s=o
  }
  return r-1
}
function jeA(n, e){
  const t=Sbe(n, e);
  return t===n.length?void 0:n[t]
}
function Sbe(n, e, t=0, i=n.length){
  let r=t, s=i;
  for(;
  r<s;
  ){
    const o=Math.floor((r+s)/2);
    e(n[o])?s=o:r=o+1
  }
  return r
}
function Y_c(n, e){
  if(n.length===0)return;
  let t=n[0];
  for(let i=1;
  i<n.length;
  i++){
    const r=n[i];
    e(r, t)>0&&(t=r)
  }
  return t
}
function _nh(n, e){
  if(n.length===0)return;
  let t=n[0];
  for(let i=1;
  i<n.length;
  i++){
    const r=n[i];
    e(r, t)>=0&&(t=r)
  }
  return t
}
function Cnh(n, e){
  return Y_c(n, (t, i)=>-e(t, i))
}
function zeA(n, e){
  if(n.length===0)return-1;
  let t=0;
  for(let i=1;
  i<n.length;
  i++){
    const r=n[i];
    e(r, n[t])>0&&(t=i)
  }
  return t
}
function TFt(n, e){
  for(const t of n){
    const i=e(t);
    if(i!==void 0)return i
  }
}
var Z_c, GD=