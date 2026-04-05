// Module: out-build/vs/base/common/severity.js
// Offset: 857514 (bundle byte offset)
// Size: 734 bytes

oa(), (function(n){
  n[n.Ignore=0]="Ignore", n[n.Info=1]="Info", n[n.Warning=2]="Warning", n[n.Error=3]="Error", n[n.AI=4]="AI", n[n.Success=5]="Success"
})(I4n||(I4n={
  
})), (function(n){
  const e="error", t="warning", i="warn", r="info", s="ignore", o="success";
  function a(u){
    return u?k_(e, u)?n.Error:k_(t, u)||k_(i, u)?n.Warning:k_(r, u)?n.Info:k_(o, u)?n.Success:n.Ignore:n.Ignore
  }
  n.fromValue=a;
  function l(u){
    switch(u){
      case n.Error:return e;
      case n.Warning:return t;
      case n.Info:return r;
      case n.Success:return o;
      default:return s
    }
  }
  n.toString=l
})(I4n||(I4n={
  
})), Ha=I4n
}
});
function _4o(n){
  if(n){
    const e=n;
    return typeof e.id=="string"&&typeof e.label=="string"
  }
  return!1
}
var Rs, ms, k1, Toe, YC, C4o, Ylh, So=