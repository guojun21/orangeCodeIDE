// Module: out-build/vs/editor/common/core/textModelDefaults.js
// Offset: 967213 (bundle byte offset)
// Size: 2385 bytes

J$={
  tabSize:4, indentSize:4, insertSpaces:!0, detectIndentation:!0, trimAutoWhitespace:!0, largeFileOptimizations:!0, bracketPairColorizationOptions:{
    enabled:!0, independentColorPoolPerBracketType:!1
  }
}
}
});
function V4o(n, e){
  if(typeof n!="object"||typeof e!="object"||!n||!e)return new nOn(e, n!==e);
  if(Array.isArray(n)||Array.isArray(e)){
    const i=Array.isArray(n)&&Array.isArray(e)&&cg(n, e);
    return new nOn(e, !i)
  }
  let t=!1;
  for(const i in e)if(e.hasOwnProperty(i)){
    const r=V4o(n[i], e[i]);
    r.didChange&&(n[i]=r.newValue, t=!0)
  }
  return new nOn(n, t)
}
function sp(n, e){
  return typeof n>"u"?e:n==="false"?!1:!!n
}
function Aft(n, e, t, i){
  if(typeof n>"u")return e;
  let r=parseInt(n, 10);
  return isNaN(r)?e:(r=Math.max(t, r), r=Math.min(i, r), r|0)
}
function soA(n, e, t, i){
  if(typeof n>"u")return e;
  const r=Pde.float(n, e);
  return Pde.clamp(r, t, i)
}
function WI(n, e, t, i){
  return typeof n!="string"?e:i&&n in i?i[n]:t.indexOf(n)===-1?e:n
}
function ooA(n){
  switch(n){
    case"none":return 0;
    case"keep":return 1;
    case"brackets":return 2;
    case"advanced":return 3;
    case"full":return 4
  }
}
function ghh(n){
  switch(n){
    case"blink":return 1;
    case"smooth":return 2;
    case"phase":return 3;
    case"expand":return 4;
    case"solid":return 5;
    case"hidden":return 0
  }
}
function aoA(n){
  switch(n){
    case hT.Line:return"line";
    case hT.Block:return"block";
    case hT.Underline:return"underline";
    case hT.LineThin:return"line-thin";
    case hT.BlockOutline:return"block-outline";
    case hT.UnderlineThin:return"underline-thin"
  }
}
function aEc(n){
  switch(n){
    case"line":return hT.Line;
    case"block":return hT.Block;
    case"underline":return hT.Underline;
    case"line-thin":return hT.LineThin;
    case"block-outline":return hT.BlockOutline;
    case"underline-thin":return hT.UnderlineThin
  }
}
function coA(n){
  return n==="ctrlCmd"?Fs?"metaKey":"ctrlKey":"altKey"
}
function K4o(n){
  const e=n.get(103);
  return e==="editable"?n.get(96):e!=="on"
}
function fhh(n, e){
  if(typeof n!="string")return e;
  switch(n){
    case"hidden":return 2;
    case"visible":return 3;
    default:return 1
  }
}
function wOt(n, e, t){
  const i=t.indexOf(n);
  return i===-1?e:t[i]
}
function hu(n){
  return CVe[n.id]=n, n
}
var bhh, ISe, vhh, cEc, eI, nOn, _Ve, yft, hw, aE, Pde, OY, QI, _Ot, Ahh, yhh, whh, hT, _hh, Chh, Shh, Y5e, Y4o, khh, Ehh, xhh, Thh, Ihh, Dhh, Bhh, Rhh, lEc, Phh, Foe, Lhh, Nhh, Mhh, Fhh, Ohh, Uhh, $hh, qhh, Hhh, Jhh, Ghh, Whh, Qhh, jhh, zhh, Vhh, Rte, sz, Khh, Yhh, Zhh, Xhh, emh, tmh, nmh, imh, rmh, smh, omh, amh, cmh, lmh, umh, jI, CVe, dmh, oz, pk=