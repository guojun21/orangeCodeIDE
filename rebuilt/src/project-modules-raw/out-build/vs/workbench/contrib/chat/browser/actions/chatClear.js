// Module: out-build/vs/workbench/contrib/chat/browser/actions/chatClear.js
// Offset: 28341543 (bundle byte offset)
// Size: 693 bytes

Ckt(), ss()
}
});
async function c8A(n, e, t){
  return Etf(n)?ktf(n, t, {
    messageOverride:e
  }):!0
}
async function ktf(n, e, t){
  const i=_(4999, null), r=_(5e3, null), s=t?.messageOverride??i, o=t?.titleOverride??r, l=n.entries.get().filter(d=>d.state.get()===0), {
    result:u
  }
  =await e.prompt({
    title:o, message:s+" "+_(5001, null, l.length), type:"info", cancelButton:!0, buttons:[{
      label:_(5002,null),run:async()=>(await n.accept(),!0)
    }, {
      label:_(5003,null),run:async()=>(await n.reject(),!0)
    }
    ]
  });
  return!!u
}
function Etf(n){
  const e=n.entries.get();
  return e.length?!!e.filter(r=>r.state.get()===0).length:!1
}
var cO, xtf, bcu, vcu, Ttf, l8A, Acu, Ice=