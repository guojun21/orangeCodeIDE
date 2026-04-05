// Module: out-build/vs/workbench/services/agentData/common/displayHelpers.js
// Offset: 28167722 (bundle byte offset)
// Size: 376 bytes

W9(), zr(), Yr(), ps()
}
});
function p9A(n, e=1e3){
  let t, i, r=!1;
  return{
    schedule(s){
      i=s,r=!0,t===void 0&&(t=setTimeout(()=>{
        t=void 0,r&&(r=!1,n(i))
      },e))
    }, flush(){
      t!==void 0&&(clearTimeout(t),t=void 0),r&&(r=!1,n(i))
    }, dispose(){
      t!==void 0&&(clearTimeout(t),t=void 0),r=!1
    }
  }
}
var Yb, uva, NXg, JAi, _U=