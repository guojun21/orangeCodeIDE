// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/switchMode/switchModeQueryHandler.js
// Offset: 30619037 (bundle byte offset)
// Size: 3966 bytes

EVl(), Uv(), Vg(), Dd(), cp(), vN(), Ud(), kkf=class{
  constructor(n){
    this.context=n, this.handledToolCalls=new Set
  }
  getToolFormer(){
    const e=this.context.composerDataHandle.data.capabilities.find(t=>t.type===ko.TOOL_FORMER);
    if(!e)throw new Error("ToolFormer not found");
    return e
  }
  getComposerDataService(){
    return this.context.instantiationService.invokeFunction(n=>n.get(Oa))
  }
  getComposerModesService(){
    return this.context.instantiationService.invokeFunction(n=>n.get(DT))
  }
  getReactiveStorageService(){
    return this.context.instantiationService.invokeFunction(n=>n.get(ku))
  }
  getAnalyticsService(){
    return this.context.instantiationService.invokeFunction(n=>n.get(uh))
  }
  async handleSwitchModeRequest(n){
    const e=this.getToolFormer(), t=this.getComposerModesService(), i=this.getReactiveStorageService(), r=this.getAnalyticsService(), s=this.getComposerDataService(), o=this.context.composerDataHandle.data.composerId, a=n.args?.toolCallId;
    if(!a)return new rEe({
      result:{
        case:"rejected",value:new dtt({
          reason:"Missing toolCallId"
        })
      }
    });
    const l=n.args?.targetModeId??"", u=t.getComposerUnifiedMode(o)||"agent", d=n.args?.explanation, m=new GKe({
      fromModeId:u,toModeId:l,explanation:d
    }), p=JSON.stringify({
      fromModeId:u,toModeId:l,explanation:d
    }), g=e.getOrCreateBubbleId({
      toolCallId:a,toolIndex:0,modelCallId:a,toolCallType:an.SWITCH_MODE,params:{
        case:"switchModeParams",value:m
      },rawArgs:p,name:"switch_mode"
    });
    e.setBubbleData(g, {
      tool:an.SWITCH_MODE,toolCallId:a,name:"switch_mode",rawArgs:p,params:m
    });
    const f=e.getBubbleData(g);
    if(f?.userDecision!==void 0)return f.userDecision==="accepted"?this.performModeSwitch(o, u, l, !0, !1):new rEe({
      result:{
        case:"rejected",value:new dtt({
          reason:"User rejected the mode switch"
        })
      }
    });
    if(u===l)return e.setBubbleData(g, {
      userDecision:"accepted"
    }), new rEe({
      result:{
        case:"approved",value:new Rfi
      }
    });
    if(this.handledToolCalls.has(a))return new rEe({
      result:{
        case:"rejected",value:new dtt({
          reason:"Mode switch already handled"
        })
      }
    });
    this.handledToolCalls.add(a);
    const A=`${u}->${l}`;
    if((i.applicationUserPersistentStorage?.composerState?.autoRejectedModeTransitions||[]).includes(A)){
      g&&e.setBubbleData(g,{
        userDecision:"rejected"
      });
      const B=s.getComposerData(this.context.composerDataHandle);
      return r.trackEvent("switch_mode_invoked",{
        fromModeId:u,toModeId:l,accepted:!1,model:B?.modelConfig?.modelName
      }),this.handledToolCalls.delete(a),new rEe({
        result:{
          case:"rejected",value:new dtt({
            reason:`Mode switch from ${u} to ${l} is disabled by user preference`
          })
        }
      })
    }
    return(i.applicationUserPersistentStorage?.composerState?.autoApprovedModeTransitions||[]).includes(A)?(g&&e.setBubbleData(g, {
      userDecision:"accepted"
    }), this.handledToolCalls.delete(a), this.performModeSwitch(o, u, l, !0, !0)):(this.context.trackTrajectoryStopped?.({
      composerId:o,invocationID:this.context.generationUUID,toolCallId:a,stop_category:"needs_user_approval",stop_source:"other",reason_code:"switch_mode.needs_approval"
    }), new Promise(B=>{
      const R=e.addPendingDecision(g,an.SWITCH_MODE,a,N=>{
        if(R(),this.handledToolCalls.delete(a),N)B(this.performModeSwitch(o,u,l,!0,!1));
        else{
          const M=s.getComposerData(this.context.composerDataHandle);
          r.trackEvent("switch_mode_invoked",{
            fromModeId:u,toModeId:l,accepted:!1,model:M?.modelConfig?.modelName
          }),B(new rEe({
            result:{
              case:"rejected",value:new dtt({
                reason:"User rejected the mode switch"
              })
            }
          }))
        }
      },!0)
    }))
  }
  performModeSwitch(n, e, t, i, r){
    const s=this.getComposerModesService(), o=this.getComposerDataService(), a=this.getAnalyticsService(), l=o.getComposerData(this.context.composerDataHandle);
    return a.trackEvent("switch_mode_invoked", {
      fromModeId:e,toModeId:t,accepted:!0,model:l?.modelConfig?.modelName
    }), t==="plan"&&a.trackEvent("composer.plan_mode.entry_point", {
      entrypoint:"switch_mode_tool",model:l?.modelConfig?.modelName||"unknown"
    }), s.setComposerUnifiedMode(this.context.composerDataHandle, t), new rEe({
      result:{
        case:"approved",value:new Rfi
      }
    })
  }
}
}
}), vny=