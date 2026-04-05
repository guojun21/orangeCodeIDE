// Module: out-build/external/sentry/core/integrations/mcp-server/resultExtraction.js
// Offset: 143955 (bundle byte offset)
// Size: 711 bytes

cFt(), YNo()
}
});
function UXd(n){
  let e=ZNo.get(n);
  return e||(e=new Map, ZNo.set(n, e)), e
}
function YKv(n, e, t, i){
  UXd(n).set(e, {
    span:t, method:i, startTime:Date.now()
  })
}
function ZKv(n, e, t){
  const i=UXd(n), r=i.get(e);
  if(r){
    const{
      span:s,method:o
    }
    =r;
    if(o==="tools/call"){
      const a=zKv(t),u=!!sm()?.getOptions().sendDefaultPii,d=KNo(a,u);
      s.setAttributes(d)
    }
    else if(o==="prompts/get"){
      const a=VKv(t),u=!!sm()?.getOptions().sendDefaultPii,d=KNo(a,u);
      s.setAttributes(d)
    }
    s.end(), i.delete(e)
  }
}
function XKv(n){
  const e=ZNo.get(n);
  if(e){
    for(const[, t]of e)t.span.setStatus({
      code:nE,message:"cancelled"
    }), t.span.end();
    e.clear()
  }
}
var ZNo, eYv=