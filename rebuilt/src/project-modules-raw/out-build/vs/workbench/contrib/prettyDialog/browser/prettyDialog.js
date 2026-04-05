// Module: out-build/vs/workbench/contrib/prettyDialog/browser/prettyDialog.js
// Offset: 28031602 (bundle byte offset)
// Size: 1037 bytes

Wt(), JF=xi("prettyDialogService")
}
});
async function X3(n, e){
  return await new Promise((i, r)=>{
    if(e?.aborted){
      r(e.reason??new Error("Aborted"));
      return
    }
    let s=!1;
    const o=()=>{
      s||(s=!0,l.dispose(),e&&e.removeEventListener("abort",a))
    }, a=()=>{
      o(),r(e.reason??new Error("Aborted"))
    };
    e&&e.addEventListener("abort", a);
    const l=n.onChange(d=>{
      d.state==="fulfilled"?(o(),i(d.value)):d.state==="rejected"&&(o(),r(d.error))
    }), u=n.getState();
    u.state==="fulfilled"?(o(), i(u.value)):u.state==="rejected"&&(o(), r(u.error))
  })
}
function NOA(n, e){
  const t=new wye;
  let i;
  const r=o=>{
    switch(o.state){
      case"pending":i=void 0,t.clear();
      break;
      case"fulfilled":try{
        const a=e(o.value,i);
        i=a,t.set(a)
      }
      catch(a){
        i=void 0,t.error(a instanceof Error?a:new Error(String(a)))
      }
      break;
      case"rejected":i=void 0,t.error(o.error);
      break;
      default:{
        const a=o;
        throw new Error(`Unhandled state: ${a}`)
      }
    }
  };
  r(n.getState());
  const s=n.onChange(r);
  return{
    observable:t, dispose:()=>s.dispose()
  }
}
var wye, fnt=