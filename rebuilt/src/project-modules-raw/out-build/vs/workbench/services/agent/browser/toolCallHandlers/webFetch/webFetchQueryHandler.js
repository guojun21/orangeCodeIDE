// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/webFetch/webFetchQueryHandler.js
// Offset: 30624821 (bundle byte offset)
// Size: 2168 bytes

$Vl(), Dd(), ghn(), Uv(), Vg(), xkf=class{
  constructor(n){
    this.context=n
  }
  getToolFormer(){
    const e=this.context.composerDataHandle.data.capabilities.find(t=>t.type===ko.TOOL_FORMER);
    if(!e)throw new Error("ToolFormer not found");
    return e
  }
  async handleWebFetchRequest(n){
    const e=this.getToolFormer(), t=this.context.instantiationService.invokeFunction(u=>u.get(ku)), i=n.args?.url??"", r=n.args?.toolCallId;
    if(!r)return new htt({
      result:{
        case:"rejected",value:new Lfi({
          reason:"Missing toolCallId"
        })
      }
    });
    const s=new WKe({
      url:i
    }), o=JSON.stringify({
      url:i
    }), a=e.getOrCreateBubbleId({
      toolCallId:r,toolIndex:0,modelCallId:r,toolCallType:an.WEB_FETCH,params:{
        case:"webFetchParams",value:s
      },rawArgs:o,name:"web_fetch"
    });
    return e.setBubbleData(a, {
      tool:an.WEB_FETCH,toolCallId:r,name:"web_fetch",rawArgs:o,params:s
    }), n.skipApproval?(e.acceptToolCall(r), new htt({
      result:{
        case:"approved",value:new Jdn
      }
    })):this.shouldAutoApproveWebFetch(i, t, e)?(e.acceptToolCall(r), new htt({
      result:{
        case:"approved",value:new Jdn
      }
    })):(e.setBubbleData(a, {
      additionalData:{
        reviewData:{
          status:DA.REQUESTED,selectedOption:cV.RUN,isShowingInput:!1,highlightedOption:void 0
        }
      }
    }), this.context.trackTrajectoryStopped?.({
      composerId:this.context.composerDataHandle.data.composerId,invocationID:this.context.generationUUID,toolCallId:r,stop_category:"needs_user_approval",stop_source:"other",reason_code:"web_fetch.needs_approval"
    }), new Promise(u=>{
      const d=e.addPendingDecision(a,an.WEB_FETCH,r,m=>{
        d(),u(new htt({
          result:m?{
            case:"approved",value:new Jdn
          }
          :{
            case:"rejected",value:new Lfi({
              reason:"User chose to skip"
            })
          }
        }))
      },!0)
    }))
  }
  shouldAutoApproveWebFetch(n, e, t){
    if(t.shouldAutoRun_runEverythingMode())return!0;
    if(t.shouldAutoRun_eitherUseAllowlistOrRunEverythingMode()){
      const i=e.applicationUserPersistentStorage?.composerState?.webFetchDomainAllowlist??[];
      if(i.length===0)return!1;
      let r;
      try{
        r=new URL(n.startsWith("http")?n:`https://${n}`).hostname
      }
      catch{
        return!1
      }
      return i.some(s=>{
        if(s==="*")return!0;
        if(s.startsWith("*.")){
          const o=s.slice(2);
          return r===o||r.endsWith("."+o)
        }
        return s===r
      })
    }
    return!1
  }
}
}
}), _ny=