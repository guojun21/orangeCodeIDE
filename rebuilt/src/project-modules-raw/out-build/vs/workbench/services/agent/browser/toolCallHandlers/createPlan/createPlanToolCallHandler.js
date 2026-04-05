// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/createPlan/createPlanToolCallHandler.js
// Offset: 30599602 (bundle byte offset)
// Size: 6980 bytes

Vg(), Uv(), $J(), oP(), qJ(), Wu(), vkf=class{
  constructor(n){
    this.context=n, this.pendingQueue=new Map
  }
  isMultiPlanEnabled(){
    return this.context.instantiationService.invokeFunction(e=>e.get(Tl)).checkFeatureGate("file_based_plan_edits")===!0
  }
  getToolFormer(){
    const e=this.context.composerDataHandle.data.capabilities.find(t=>t.type===ko.TOOL_FORMER);
    if(!e)throw new Error("ToolFormer not found");
    return e
  }
  convertTodoStatus(n){
    switch(n){
      case 1:return"pending";
      case 2:return"in_progress";
      case 3:return"completed";
      case 4:return"cancelled";
      default:return"pending"
    }
  }
  shouldAutoOpenPlanEditor(n){
    const e=this.context.instantiationService.invokeFunction(t=>t.get(rw));
    return e.isFocused(n)||e.isPrevBubbleFocused(n)
  }
  async handlePartialToolCall(n, e){
    const i=(this.pendingQueue.get(e)??Promise.resolve()).then(()=>this.handleToolCallStarted(n, e));
    this.pendingQueue.set(e, i);
    try{
      await i
    }
    finally{
      this.pendingQueue.get(e)===i&&this.pendingQueue.delete(e)
    }
  }
  async handleToolCallDelta(n, e, t){
    
  }
  async handleToolCallStarted(n, e){
    const t=n.tool.value, i=this.context.instantiationService.invokeFunction(C=>C.get(IV)), r=this.getToolFormer(), s=t.args, o=new JKe({
      plan:s?.plan,overview:s?.overview,todos:s?.todos?.map(C=>new QB({
        id:C.id,content:C.content,status:this.convertTodoStatus(C.status),dependencies:C.dependencies
      })),name:s?.name,isProject:s?.isProject,phases:s?.phases?.map(C=>({
        name:C.name,todos:C.todos?.map(x=>new QB({
          id:x.id,content:x.content,status:this.convertTodoStatus(x.status),dependencies:x.dependencies
        }))||[]
      }))
    }), a=r.getOrCreateBubbleId({
      toolCallId:e,toolIndex:0,modelCallId:"",toolCallType:an.CREATE_PLAN,name:"create_plan",params:{
        case:"createPlanParams",value:o
      },toolCall:n
    }), l=this.context.composerDataHandle.data.composerId, d=r.getBubbleData(a)?.additionalData, m=d?.hasOpenedEditor===!0, p=d?.planUri, g=s?.name, f=s?.plan||"", A=s?.overview||"", w=s?.todos?.map(C=>({
      id:C.id||"",content:C.content,status:"pending",dependencies:C.dependencies||[]
    }))||[];
    try{
      const C=this.isMultiPlanEnabled();
      if(p){
        if(f){
          const{
            parsePlanUriString:x
          }
          =await Promise.resolve().then(()=>(UF(),Spa)),I=x(p),B=s?.phases?.map(R=>({
            name:R.name,todos:R.todos?.map(N=>({
              id:N.id||"",content:N.content,status:"pending",dependencies:N.dependencies||[]
            }))||[]
          }));
          await i.updatePlanByUriDirty(I,g,A,w,f,l,s?.isProject,B)
        }
      }
      else if(g&&f){
        let x;
        if(C){
          const I=s?.phases?.map(B=>({
            name:B.name,todos:B.todos?.map(R=>({
              id:R.id||"",content:R.content,status:"pending",dependencies:R.dependencies||[]
            }))||[]
          }));
          x=await i.createPlanFile(l,g,A,w,f,s?.isProject,I)
        }
        else{
          const I=s?.phases?.map(B=>({
            name:B.name,todos:B.todos?.map(R=>({
              id:R.id||"",content:R.content,status:"pending",dependencies:R.dependencies||[]
            }))||[]
          }));
          x=await i.getOrCreatePlanFile(l,g,A,w,f,s?.isProject,I)
        }
        m||this.shouldAutoOpenPlanEditor(l)&&await i.openPlanInEditor(x,{
          stealFocus:!1,composerId:l
        }),r.setBubbleData(a,{
          params:o,additionalData:{
            planUri:x.toString(),hasOpenedEditor:!0
          }
        })
      }
    }
    catch(C){
      console.error("[CreatePlanToolCallHandler] Failed to create/update plan file during streaming:",C)
    }
  }
  async handleToolCallCompleted(n, e){
    const t=n.tool.value, i=this.context.instantiationService.invokeFunction(f=>f.get(IV)), r=await Promise.resolve().then(()=>(Ud(), Rmg)), s=this.context.instantiationService.invokeFunction(f=>f.get(r.IAnalyticsService)), o=this.context.instantiationService.invokeFunction(f=>f.get(WEe)), a=this.getToolFormer(), l=a.getBubbleIdByToolCallId(e);
    if(!l)throw new Error(`Bubble not found for tool call id ${e}`);
    const u=this.context.composerDataHandle, d=u.data.composerId, m=u.data;
    if(!m)throw new Error(`Composer not found for composer id ${d}`);
    const p=t.args;
    if(!p||!p.plan)throw new Error(`Plan args not found for tool call id ${e}`);
    const g=new JKe({
      plan:p?.plan,overview:p?.overview,todos:p?.todos?.map(f=>new QB({
        id:f.id,content:f.content,status:this.convertTodoStatus(f.status),dependencies:f.dependencies
      })),name:p?.name,isProject:p?.isProject,phases:p?.phases?.map(f=>({
        name:f.name,todos:f.todos?.map(A=>new QB({
          id:A.id,content:A.content,status:this.convertTodoStatus(A.status),dependencies:A.dependencies
        }))||[]
      }))
    });
    if(t.result?.result?.case==="success"){
      const A=a.getBubbleData(l)?.additionalData,w=A?.hasOpenedEditor===!0,C=A?.planUri;
      let x=C??t.result?.planUri;
      if(C){
        const R=p.name||void 0,N=p.overview||"",M=p.todos?.map($=>({
          id:$.id||"",content:$.content,status:"pending",dependencies:$.dependencies||[]
        }))||[],O=p?.phases?.map($=>({
          name:$.name,todos:$.todos?.map(H=>({
            id:H.id||"",content:H.content,status:"pending",dependencies:H.dependencies||[]
          }))||[]
        }));
        try{
          const{
            parsePlanUriString:$
          }
          =await Promise.resolve().then(()=>(UF(),Spa)),H=$(C);
          await i.updatePlanByUriDirty(H,R,N,M,p.plan,d,p?.isProject,O),await i.savePlanModel(H)
        }
        catch($){
          console.error("[CreatePlanToolCallHandler] Failed to update plan file:",$)
        }
      }
      else{
        const R=p.name||void 0,N=p.overview||"",M=p.todos?.map(O=>({
          id:O.id||"",content:O.content,status:"pending",dependencies:O.dependencies||[]
        }))||[];
        try{
          const O=this.isMultiPlanEnabled();
          let $;
          const H=p?.phases?.map(W=>({
            name:W.name,todos:W.todos?.map(z=>({
              id:z.id||"",content:z.content,status:"pending",dependencies:z.dependencies||[]
            }))||[]
          }));
          O?$=await i.createPlanFile(d,R||i.getPlanTitle(p.plan),N,M,p.plan,p?.isProject,H):$=await i.getOrCreatePlanFile(d,R,N,M,p.plan,p?.isProject,H),x=$.toString(),w||this.shouldAutoOpenPlanEditor(d)&&await i.openPlanInEditor($,{
            stealFocus:!1,composerId:d
          })
        }
        catch(O){
          console.error("[CreatePlanToolCallHandler] Failed to create plan file:",O)
        }
      }
      a.setBubbleData(l,{
        params:g,additionalData:{
          planUri:x,hasOpenedEditor:!0
        }
      }),s.trackEvent("composer.plan_mode.plan_created",{
        iteration_number:1,model:m.modelConfig?.modelName||"unknown",composerId:d,invocationID:m?.latestChatGenerationUUID
      });
      const I=o.getPlanReviewModelForBubble(u,l);
      if(I){
        try{
          s.trackEvent("composer.agent_trajectory_stopped",{
            composerId:d,invocationID:m?.latestChatGenerationUUID,toolCallId:e,stop_category:"needs_user_approval",stop_source:"other",reason_code:"plan.needs_approval"
          })
        }
        catch{
          
        }
        I.setStatus(DA.REQUESTED)
      }
      const B=new jbt({
        result:{
          case:"rejected",value:{
            
          }
        }
      });
      a.handleToolResult(new VR({
        tool:an.CREATE_PLAN,toolCallId:e,result:{
          case:"createPlanResult",value:B
        }
      }),e,!0)
    }
    else if(t.result?.result?.case==="error"){
      const f=t.result.result.value,C=a.getBubbleData(l)?.additionalData?.planUri;
      if(C)try{
        const{
          parsePlanUriString:x
        }
        =await Promise.resolve().then(()=>(UF(),Spa)),I=x(C);
        i.discardPlanModel(I)
      }
      catch(x){
        console.error("[CreatePlanToolCallHandler] Failed to discard streamed plan model after error:",x)
      }
      a.setBubbleData(l,{
        status:"error",additionalData:{
          status:"error"
        }
      }),a.handleToolResult(new VR({
        tool:an.CREATE_PLAN,toolCallId:e,error:{
          clientVisibleErrorMessage:"Plan creation failed",modelVisibleErrorMessage:`Plan creation failed: ${f.error}`,actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk:f.error
        }
      }),e,!0)
    }
  }
}
}
}), Akf, dny=