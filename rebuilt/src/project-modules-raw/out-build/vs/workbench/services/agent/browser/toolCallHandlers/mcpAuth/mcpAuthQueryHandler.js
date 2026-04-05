// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/mcpAuth/mcpAuthQueryHandler.js
// Offset: 30627108 (bundle byte offset)
// Size: 3101 bytes

rkt(), Bha(), Uv(), Vg(), Iie(), Fc(), Yn(), Tkf=class{
  constructor(n){
    this.context=n, this.handledToolCalls=new Set
  }
  getToolFormer(){
    const e=this.context.composerDataHandle.data.capabilities.find(t=>t.type===ko.TOOL_FORMER);
    if(!e)throw new Error("ToolFormer not found");
    return e
  }
  getMcpService(){
    return this.context.instantiationService.invokeFunction(n=>n.get(IU))
  }
  getOpenerService(){
    return this.context.instantiationService.invokeFunction(n=>n.get(Ja))
  }
  async handleMcpAuthRequest(n){
    const e=this.getMcpService(), t=n.args?.serverIdentifier, i=n.args?.toolCallId;
    if(!t||!i)return new nye({
      result:{
        case:"rejected",value:new d$e({
          reason:"Missing serverIdentifier or toolCallId"
        })
      }
    });
    const r=this.getToolFormer(), o=e.statusCache()[t];
    if(!o)return new nye({
      result:{
        case:"rejected",value:new d$e({
          reason:`MCP server '${t}' not found`
        })
      }
    });
    if(this.handledToolCalls.has(i))return new nye({
      result:{
        case:"rejected",value:new d$e({
          reason:"MCP auth already handled"
        })
      }
    });
    this.handledToolCalls.add(i);
    const a=new Vbt({
      serverIdentifier:t
    }), l=JSON.stringify({
      serverIdentifier:t
    }), u=r.getOrCreateBubbleId({
      toolCallId:i,toolIndex:0,modelCallId:i,toolCallType:an.MCP_AUTH,params:{
        case:"mcpAuthParams",value:a
      },rawArgs:l,name:"mcp_auth"
    });
    if(r.setBubbleData(u, {
      tool:an.MCP_AUTH,toolCallId:i,name:"mcp_auth",rawArgs:l,params:a,additionalData:{
        alreadyAuthenticated:!1
      }
    }), o.type==="connected")return r.setBubbleData(u, {
      userDecision:"accepted",status:"completed",additionalData:{
        alreadyAuthenticated:!0
      }
    }), this.handledToolCalls.delete(i), new nye({
      result:{
        case:"approved",value:new Nfi
      }
    });
    const d=r.getBubbleData(u);
    if(d?.userDecision!==void 0)return this.handledToolCalls.delete(i), d.userDecision==="accepted"?this.performAuth(t, u, r):new nye({
      result:{
        case:"rejected",value:new d$e({
          reason:"User rejected MCP authentication"
        })
      }
    });
    const m=this.context.composerDataHandle.data.composerId;
    return this.context.trackTrajectoryStopped?.({
      composerId:m,invocationID:this.context.generationUUID,toolCallId:i,stop_category:"needs_user_approval",stop_source:"other",reason_code:"mcp.needs_approval"
    }), new Promise(p=>{
      const g=r.addPendingDecision(u,an.MCP_AUTH,i,f=>{
        if(g(),this.handledToolCalls.delete(i),f)p(this.performAuth(t,u,r));
        else{
          const C=r.getBubbleData(u)?.additionalData?.skipReason==="timeout"?"User skipped MCP authentication (timeout)":"User skipped MCP authentication";
          p(new nye({
            result:{
              case:"rejected",value:new d$e({
                reason:C
              })
            }
          }))
        }
      },!0)
    })
  }
  async performAuth(n, e, t){
    const i=this.getMcpService(), r=this.createAuthFlowClient(e, i, t);
    return zOA({
      serverIdentifier:n,client:r,abortSignal:this.context.conversationActionManager.signal
    })
  }
  createAuthFlowClient(n, e, t){
    return{
      getStatus:i=>e.statusCache()[i],reloadClient:async i=>{
        await e.reloadClient(i)
      },onDidChangeServerStatus:i=>e.onDidChangeServerStatus(({
        identifier:r,status:s
      })=>{
        i({
          identifier:r,status:s
        })
      }),openAuthorizationUrl:async i=>{
        await this.getOpenerService().open(je.parse(i))
      },hasUserRejectedAuth:()=>t.getBubbleData(n)?.userDecision==="rejected"
    }
  }
}
}
}), Sny=