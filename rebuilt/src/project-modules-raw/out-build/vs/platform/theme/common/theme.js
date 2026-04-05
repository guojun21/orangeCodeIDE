// Module: out-build/vs/platform/theme/common/theme.js
// Offset: 906096 (bundle byte offset)
// Size: 571 bytes

(function(n){
  n.DARK="dark", n.LIGHT="light", n.HIGH_CONTRAST_DARK="hcDark", n.HIGH_CONTRAST_LIGHT="hcLight"
})(Fv||(Fv={
  
})), (function(n){
  n.VS="vs", n.VS_DARK="vs-dark", n.HC_BLACK="hc-black", n.HC_LIGHT="hc-light"
})(iN||(iN={
  
}))
}
});
function kC(n){
  return{
    id:n
  }
}
function Q4n(n){
  switch(n){
    case Fv.DARK:return iN.VS_DARK;
    case Fv.HIGH_CONTRAST_DARK:return iN.HC_BLACK;
    case Fv.HIGH_CONTRAST_LIGHT:return iN.HC_LIGHT;
    default:return iN.VS
  }
}
function HI(n){
  return q1c.onColorThemeChange(n)
}
var bo, $1c, mVe, j4n, Rdh, q1c, NH, Io=