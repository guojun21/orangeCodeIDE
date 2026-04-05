// Module: out-build/vs/base/common/observableInternal/commonFacade/cancellation.js
// Offset: 498465 (bundle byte offset)
// Size: 540 bytes

_s(), Po()
}
});
function FBe(n, e, t, i){
  return e||(e=r=>r!=null), new Promise((r, s)=>{
    let o=!0, a=!1;
    const l=n.map(d=>({
      isFinished:e(d),error:t?t(d):!1,state:d
    })), u=Oc(d=>{
      const{
        isFinished:m,error:p,state:g
      }
      =l.read(d);
      (m||p)&&(o?a=!0:u.dispose(),p?s(p===!0?g:p):r(g))
    });
    if(i){
      const d=i.onCancellationRequested(()=>{
        u.dispose(),d.dispose(),s(new vf)
      });
      if(i.isCancellationRequested){
        u.dispose(),d.dispose(),s(new vf);
        return
      }
    }
    o=!1, a&&u.dispose()
  })
}
var WnA=