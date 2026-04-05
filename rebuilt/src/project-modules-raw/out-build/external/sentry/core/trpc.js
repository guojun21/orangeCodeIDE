// Module: out-build/external/sentry/core/trpc.js
// Offset: 138760 (bundle byte offset)
// Size: 394 bytes

aT(), bte(), y6(), rW(), xpt(), Wj(), Nwc={
  mechanism:{
    handled:!1, type:"auto.rpc.trpc.middleware"
  }
}
}
});
function Opt(n, e, t){
  try{
    if(!sm())return;
    const r=HP();
    r?.isRecording()&&r.setStatus({
      code:nE,message:"internal_error"
    }), Sw(n, {
      mechanism:{
        type:"auto.ai.mcp_server",handled:!1,data:{
          error_type:e||"handler_execution",...t
        }
      }
    })
  }
  catch{
    
  }
}
var lXd=