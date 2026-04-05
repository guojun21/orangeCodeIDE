// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/askQuestion/askQuestionToolCallHandler.js
// Offset: 30608388 (bundle byte offset)
// Size: 3853 bytes

Uv(), Vg(), _mu=class{
  constructor(n){
    this.context=n
  }
  getToolFormer(){
    const e=this.context.composerDataHandle.data.capabilities.find(t=>t.type===ko.TOOL_FORMER);
    if(!e)throw new Error("ToolFormer not found");
    return e
  }
  async handlePartialToolCall(n, e){
    const t=n.tool.value, i=this.getToolFormer();
    if(t.args){
      const r=t.args,s=r?.title||"",o=r?.questions||[];
      let a=i.getBubbleIdByToolCallId(e);
      a||(a=i.getOrCreateBubbleId({
        toolCallId:e,toolIndex:0,modelCallId:"",toolCallType:an.ASK_QUESTION,name:"ask_question",params:void 0,toolCall:n
      }));
      const l=i.getBubbleData(a),d=l?.params?.questions?.length??0,m=Math.max(0,Math.min(d,o.length));
      for(let C=m;
      C<o.length;
      C++){
        const x=o.slice(0,C+1),I=new oke({
          title:s,questions:x.map(B=>({
            id:B.id,prompt:B.prompt,allowMultiple:B.allowMultiple??!1,options:B.options.map(R=>({
              id:R.id,label:R.label
            }))
          }))
        });
        i.setBubbleData(a,{
          params:I
        })
      }
      const p=r?.runAsync??!1,f=l?.params?.runAsync??!1,A=p||f,w=new oke({
        title:s,questions:o.map(C=>({
          id:C.id,prompt:C.prompt,allowMultiple:C.allowMultiple??!1,options:C.options.map(x=>({
            id:x.id,label:x.label
          }))
        })),runAsync:A
      });
      i.setBubbleData(a,{
        params:w
      })
    }
    else i.getOrCreateBubbleId({
      toolCallId:e,toolIndex:0,modelCallId:"",toolCallType:an.ASK_QUESTION,name:"ask_question",params:void 0,toolCall:n
    })
  }
  async handleToolCallDelta(n, e, t){
    
  }
  async handleToolCallStarted(n, e){
    const t=n.tool.value, i=this.getToolFormer(), r=t.args, s=r?.title||"", o=r?.questions||[], a=r?.runAsync??!1, l=r?.asyncOriginalToolCallId, u=new oke({
      title:s,questions:o.map(p=>({
        id:p.id,prompt:p.prompt,allowMultiple:p.allowMultiple??!1,options:p.options.map(g=>({
          id:g.id,label:g.label
        }))
      })),runAsync:a
    }), d=i.getOrCreateBubbleId({
      toolCallId:e,toolIndex:0,modelCallId:"",toolCallType:an.ASK_QUESTION,name:"ask_question",params:{
        case:"askQuestionParams",value:u
      },toolCall:n
    });
    if(t.result&&t.result.result.case!==void 0&&t.result.result.case!=="async"&&t.result){
      const{
        AskQuestionResult:p,AskQuestionResult_Answer:g
      }
      =await Promise.resolve().then(()=>(Vg(),hPc));
      let f;
      if(t.result.result.case==="success"&&(f=new p({
        answers:t.result.result.value.answers.map(A=>new g({
          questionId:A.questionId,selectedOptionIds:A.selectedOptionIds,freeformText:A.freeformText
        }))
      })),i.setBubbleData(d,{
        params:u,result:f,additionalData:{
          status:"submitted"
        }
      }),l){
        const A=i.getBubbleIdByToolCallId(l);
        if(A){
          const w=i.getBubbleData(A);
          i.setBubbleData(A,{
            additionalData:{
              ...w?.additionalData,answerBubbleId:d
            }
          })
        }
      }
      return
    }
    i.setBubbleData(d, {
      params:u
    })
  }
  async handleToolCallCompleted(n, e){
    const t=n.tool.value, i=this.getToolFormer(), r=i.getBubbleIdByToolCallId(e);
    if(!r)return;
    const s=t.result?.result;
    if(s?.case===void 0)return;
    let o, a="submitted";
    switch(s.case){
      case"success":{
        o=new zY({
          answers:s.value.answers.map(l=>({
            questionId:l.questionId,selectedOptionIds:l.selectedOptionIds,freeformText:l.freeformText
          }))
        });
        break
      }
      case"async":{
        o=new zY({
          isAsync:!0
        }),a="pending";
        break
      }
      case"rejected":{
        o=new zY({
          answers:[]
        }),a="cancelled";
        break
      }
      case"error":{
        i.setBubbleData(r,{
          status:"error",additionalData:{
            status:"error"
          }
        });
        return
      }
      default:return s
    }
    i.setBubbleData(r, {
      status:"completed",result:o,additionalData:{
        status:a
      }
    })
  }
}
}
});
function ykf(n){
  const e=n.toLowerCase().trim();
  return e==="other"||e.startsWith("other:")||e.startsWith("other -")||e.startsWith("other (")
}
function agn(n){
  return n.filter(e=>!ykf(e.label))
}
function Cmu(n, e, t){
  const i=n.includes(e);
  return t?i?n.filter(r=>r!==e):[...n, e]:i?[]:[e]
}
function zwi(n, e){
  return n.every(t=>(e[t.id]?.length??0)>0)
}
function A0a(n, e){
  const t=n.findIndex(i=>(e[i.id]?.length??0)===0);
  return t>=0?t:0
}
function Vwi(n, e, t){
  const i=n.findIndex(s=>s.id===e);
  let r=n.findIndex((s, o)=>o<=i?!1:(t[s.id]?.length??0)===0);
  return r<0&&(r=n.findIndex((s, o)=>o>=i?!1:(t[s.id]?.length??0)===0)), r
}
var UJ, wkf=