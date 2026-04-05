// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/edit/editToolCallHandler.js
// Offset: 30545615 (bundle byte offset)
// Size: 3676 bytes

t8(), Vg(), Uv(), ps(), cp(), gye(), J0(), kr(), zSf=class{
  constructor(n){
    this.context=n
  }
  getToolFormer(){
    const e=this.context.composerDataHandle.data.capabilities.find(t=>t.type===ko.TOOL_FORMER);
    if(!e)throw new Error("ToolFormer not found");
    return e
  }
  async handlePartialToolCall(n, e){
    await this.handleToolCallStarted(n, e)
  }
  async handleToolCallDelta(n, e, t){
    const i=e.streamContentDelta;
    if(!i)return;
    const r=this.getToolFormer();
    let s=r.getBubbleIdByToolCallId(t);
    if(!s){
      const l=!!this.context.composerDataHandle.data.createdFromBackgroundAgent?.bcId;
      s=r.getOrCreateBubbleId({
        toolCallId:t,toolIndex:0,modelCallId:"",toolCallType:an.EDIT_FILE_V2,name:"edit_file_v2",params:{
          case:"editFileV2Params",value:new ihe({
            relativeWorkspacePath:void 0,noCodeblock:!0,streamingContent:i,cloudAgentEdit:l
          })
        }
      });
      return
    }
    const o=r.getBubbleData(s), a=o?.params?.streamingContent??"";
    r.setBubbleData(s, {
      params:new ihe({
        ...o?.params,streamingContent:a+i
      })
    })
  }
  async handleToolCallStarted(n, e){
    const t=n.tool.value, i=this.getToolFormer(), r=i.getBubbleIdByToolCallId(e), s=t.args?.path;
    if(r){
      if(s){
        const a=i.getBubbleData(r);
        i.setBubbleData(r,{
          params:new ihe({
            ...a?.params,relativeWorkspacePath:s
          })
        })
      }
      return
    }
    if(!s)return;
    const o=!!this.context.composerDataHandle.data.createdFromBackgroundAgent?.bcId;
    i.getOrCreateBubbleId({
      toolCallId:e,toolIndex:0,modelCallId:"",toolCallType:an.EDIT_FILE_V2,name:"edit_file_v2",params:{
        case:"editFileV2Params",value:new ihe({
          relativeWorkspacePath:s,noCodeblock:!0,streamingContent:t.args?.streamContent,cloudAgentEdit:o
        })
      },toolCall:n
    })
  }
  async handleToolCallCompleted(n, e){
    const t=n.tool.value, i=this.context.instantiationService.invokeFunction(g=>g.get(Lr)), r=this.getToolFormer(), s=this.context.instantiationService.invokeFunction(g=>g.get(Oa));
    let o=r.getBubbleIdByToolCallId(e);
    if(!o&&(await this.handleToolCallStarted(n, e), o=r.getBubbleIdByToolCallId(e), !o))return;
    const a=x$e(t.args?.path||"", i, this.context.composerDataHandle.data);
    if(!a)return;
    let l, u;
    const d=t.result?.result?.case;
    if(d==="success"){
      const g=t.result.result.value,f=g.beforeFullFileContent,A=g.afterFullFileContent;
      l=f,u=A;
      const w=a.toString(),C=this.context.instantiationService.invokeFunction(B=>B.get(Hi));
      let x;
      if(f!==void 0){
        const B=tce.serialize(f);
        x=`composer.content.${sQ(await aye(B))}`,await C.cursorDiskKVGet(x)===void 0&&await C.cursorDiskKVSet(x,f)
      }
      let I;
      if(A!==void 0){
        const B=tce.serialize(A);
        I=`composer.content.${sQ(await aye(B))}`,await C.cursorDiskKVGet(I)===void 0&&await C.cursorDiskKVSet(I,A)
      }
      f===void 0&&s.updateComposerDataSetStore(this.context.composerDataHandle,B=>B("newlyCreatedFiles",R=>[...R.filter(N=>N.uri.toString()!==w),{
        uri:a
      }
      ])),r.setBubbleData(o,{
        status:"completed",result:new MRe({
          beforeContentId:x,afterContentId:I
        })
      })
    }
    else{
      let g,f="error";
      switch(d){
        case"fileNotFound":g=`File not found: ${t.result.result.value.path}`;
        break;
        case"readPermissionDenied":g=`Read permission denied: ${t.result.result.value.path}`;
        break;
        case"writePermissionDenied":g=`Write permission denied: ${t.result.result.value.path}`;
        break;
        case"rejected":g=`Edit rejected: ${t.result.result.value.reason}`,f="cancelled";
        break;
        case"error":g=t.result.result.value.error||"Unknown error";
        break
      }
      g&&r.setBubbleData(o,{
        status:f,error:new ske({
          clientVisibleErrorMessage:g,modelVisibleErrorMessage:g
        })
      })
    }
    const m=this.context.instantiationService.invokeFunction(g=>g.get(ag)), p=s.getLastHumanBubbleId(this.context.composerDataHandle)??"";
    m.handleAiEditToolCallFinished({
      composerId:this.context.composerDataHandle.data.composerId,humanBubbleId:p,uri:a,beforeContent:l,afterContent:u
    })
  }
}
}
}), Dty=