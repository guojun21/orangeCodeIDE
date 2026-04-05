// Module: out-build/external/sentry/core/fetch.js
// Offset: 137874 (bundle byte offset)
// Size: 886 bytes

aT(), y6(), rW(), fNo(), Q2t(), j2t(), h9(), iW(), bwc(), RNo()
}
});
function PKv(n){
  typeof n=="object"&&n!==null&&"ok"in n&&!n.ok&&"error"in n&&Sw(n.error, Nwc)
}
function LKv(n={
  
}){
  return async function(e){
    const{
      path:t,type:i,next:r,rawInput:s,getRawInput:o
    }
    =e, l=sm()?.getOptions(), u={
      procedure_path:t,procedure_type:i
    };
    if(tW(u, "__sentry_override_normalization_depth__", 1+(l?.normalizeDepth??5)), (n.attachRpcInput!==void 0?n.attachRpcInput:l?.sendDefaultPii)&&(s!==void 0&&(u.input=jj(s)), o!==void 0&&typeof o=="function"))try{
      const d=await o();
      u.input=jj(d)
    }
    catch{
      
    }
    return G2t(d=>(d.setContext("trpc", u), mSe({
      name:`trpc/${t}`,op:"rpc.server",attributes:{
        [c2]:"route",[w1]:"auto.rpc.trpc"
      },forceTransaction:!!n.forceTransaction
    }, async m=>{
      try{
        const p=await r();
        return PKv(p),m.end(),p
      }
      catch(p){
        throw Sw(p,Nwc),m.end(),p
      }
    })))
  }
}
var Nwc, NKv=