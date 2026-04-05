// Module: out-build/external/sentry/core/integrations/mcp-server/spans.js
// Offset: 150603 (bundle byte offset)
// Size: 1285 bytes

aT(), y6(), rW(), gYv(), cFt(), GXd(), FXd()
}
});
function yYv(n){
  n.onmessage&&LB(n, "onmessage", e=>function(t, i){
    if(GKv(t)){
      if(t.method==="initialize")try{
        const s=aYv(t);
        tYv(this,s)
      }
      catch{
        
      }
      const r=MB().clone();
      return G2t(r,()=>{
        const s=vYv(t,this,i),o=pSe(s);
        return YKv(this,t.id,o,t.method),Tpt(o,()=>e.call(this,t,i))
      })
    }
    return OXd(t)?fYv(t, this, i, ()=>e.call(this, t, i)):e.call(this, t, i)
  })
}
function wYv(n){
  n.send&&LB(n, "send", e=>async function(...t){
    const[i]=t;
    if(OXd(i))return bYv(i, this, ()=>e.call(this, ...t));
    if(WKv(i)&&i.id!==null&&i.id!==void 0){
      if(i.error&&SYv(i.error),ABe(i.result)&&(i.result.protocolVersion||i.result.serverInfo))try{
        const r=cYv(i.result);
        nYv(this,r)
      }
      catch{
        
      }
      ZKv(this,i.id,i.result)
    }
    return e.call(this, ...t)
  })
}
function _Yv(n){
  n.onclose&&LB(n, "onclose", e=>function(...t){
    return XKv(this), oYv(this), e.call(this, ...t)
  })
}
function CYv(n){
  n.onerror&&LB(n, "onerror", e=>function(t){
    return kYv(t), e.call(this, t)
  })
}
function SYv(n){
  try{
    if(n&&typeof n=="object"&&"code"in n&&"message"in n){
      const e=n;
      if(e.code===-32603||e.code>=-32099&&e.code<=-32e3){
        const i=new Error(e.message);
        i.name=`JsonRpcError_${e.code}`,Opt(i,"protocol")
      }
    }
  }
  catch{
    
  }
}
function kYv(n){
  try{
    Opt(n, "transport")
  }
  catch{
    
  }
}
var EYv=