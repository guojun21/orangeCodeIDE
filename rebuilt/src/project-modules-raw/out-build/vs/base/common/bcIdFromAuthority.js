// Module: out-build/vs/base/common/bcIdFromAuthority.js
// Offset: 25025491 (bundle byte offset)
// Size: 430 bytes

Ae({
  "out-build/vs/base/common/bcIdFromAuthority.js"(){
    "use strict"
  }
});
function jfg(n){
  const e=n;
  return typeof e?.resolve=="function"&&typeof e?.isResolved=="function"
}
function hCA(n, e, t){
  return e?.documentVersion===t?.documentVersion&&n.extUri.isEqual(e?.original, t?.original)&&n.extUri.isEqual(e?.modified, t?.modified)&&cg(e?.changes, t?.changes, (i, r)=>i[0]===r[0]&&i[1]===r[1]&&i[2]===r[2]&&i[3]===r[3])
}
var X4, jUe, rR, zfg, Vfg, wI=