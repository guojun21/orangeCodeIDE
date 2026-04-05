// Module: out-build/external/sentry/core/utils/exports.js
// Offset: 197205 (bundle byte offset)
// Size: 1173 bytes

Ae({
  "out-build/external/sentry/core/utils/exports.js"(){
    "use strict"
  }
});
function E_c(n, e=!1){
  return!(e||n&&!n.startsWith("/")&&!n.match(/^[A-Z]:/)&&!n.startsWith(".")&&!n.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))&&n!==void 0&&!n.includes("node_modules/")
}
function mth(n){
  const e=/^\s*[-]{
    4, 
  }
  $/, t=/at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/, i=/at (?:async )?(.+?) \(data:(.*?), /;
  return r=>{
    const s=r.match(i);
    if(s)return{
      filename:`<data:${s[2]}>`,function:s[1]
    };
    const o=r.match(t);
    if(o){
      let a,l,u,d,m;
      if(o[1]){
        u=o[1];
        let f=u.lastIndexOf(".");
        if(u[f-1]==="."&&f--,f>0){
          a=u.slice(0,f),l=u.slice(f+1);
          const A=a.indexOf(".Module");
          A>0&&(u=u.slice(A+1),a=a.slice(0,A))
        }
        d=void 0
      }
      l&&(d=a,m=l),l==="<anonymous>"&&(m=void 0,u=void 0),u===void 0&&(m=m||M$,u=d?`${d}.${m}`:m);
      let p=o[2]?.startsWith("file://")?o[2].slice(7):o[2];
      const g=o[5]==="native";
      return p?.match(/\/[A-Z]:/)&&(p=p.slice(1)),!p&&o[5]&&!g&&(p=o[5]),{
        filename:p?decodeURI(p):void 0,module:n?n(p):void 0,function:u,lineno:gth(o[3]),colno:gth(o[4]),in_app:E_c(p||"",g)
      }
    }
    if(r.match(e))return{
      filename:r
    }
  }
}
function pth(n){
  return[90, mth(n)]
}
function gth(n){
  return parseInt(n||"", 10)||void 0
}
var fth=