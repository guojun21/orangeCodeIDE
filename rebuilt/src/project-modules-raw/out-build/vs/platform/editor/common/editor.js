// Module: out-build/vs/platform/editor/common/editor.js
// Offset: 25025921 (bundle byte offset)
// Size: 883 bytes

Vs(), (function(n){
  n[n.ACTIVATE=1]="ACTIVATE", n[n.RESTORE=2]="RESTORE", n[n.PRESERVE=3]="PRESERVE"
})(X4||(X4={
  
})), (function(n){
  n[n.PICK=0]="PICK", n[n.EXCLUSIVE_ONLY=1]="EXCLUSIVE_ONLY"
})(jUe||(jUe={
  
})), (function(n){
  n[n.API=0]="API", n[n.USER=1]="USER"
})(rR||(rR={
  
})), (function(n){
  n[n.Center=0]="Center", n[n.CenterIfOutsideViewport=1]="CenterIfOutsideViewport", n[n.NearTop=2]="NearTop", n[n.NearTopIfOutsideViewport=3]="NearTopIfOutsideViewport"
})(zfg||(zfg={
  
})), (function(n){
  n.PROGRAMMATIC="api", n.NAVIGATION="code.navigation", n.JUMP="code.jump"
})(Vfg||(Vfg={
  
}))
}
});
function mCA(n){
  return n?.typeId===Kfg||n?.editorId===Yfg
}
function pCA(n){
  return mCA(n?.activeEditor)
}
function hCt(n, e){
  return n.find(t=>t?t.id!==e&&!pCA(t):!1)
}
function mCt(n){
  const e=n.filter(t=>!!t);
  if(e.length!==0)return hCt(e)??e[0]
}
var Kfg, Yfg, MWl=