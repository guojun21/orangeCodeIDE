// Module: out-build/external/sentry/core/integrations/zoderrors.js
// Offset: 130575 (bundle byte offset)
// Size: 476 bytes

sW(), h9(), mBe(), XZd=10, eXd="ZodErrors", tXd=((n={
  
})=>{
  const e=n.limit??XZd;
  return{
    name:eXd, processEvent(t, i){
      return pKv(e,n.saveZodIssuesAsAttachment,t,i)
    }
  }
}), WNo=tXd
}
});
function fKv(n){
  const e=WLo(n);
  if(e)return e.filter(t=>!!t.filename&&(t.lineno??t.colno)!=null).map(t=>t.module_metadata?Object.keys(t.module_metadata).filter(i=>i.startsWith(Iwc)).map(i=>i.slice(Iwc.length)):[])
}
var QNo, Iwc, bKv=