// Module: out-build/vs/workbench/services/agent/browser/toolCallHandlers/askQuestion/questionnaireUtils.js
// Offset: 30612241 (bundle byte offset)
// Size: 1544 bytes

UJ="__freeform_other__"
}
});
function _kf(n, e){
  yqe.set(n, e)
}
function pny(n){
  const e=yqe.get(n);
  return e&&e.answers.some(i=>i.selectedOptionIds.length>0||i.freeformText&&i.freeformText.trim().length>0)?e:null
}
function gny(n){
  yqe.delete(n)
}
async function y0a(n, e, t, i, r, s, o){
  const a=e.questions??[];
  if(!a.every(p=>(t[p.id]?.length??0)>0))return!1;
  const u=a.map(p=>{
    const g=t[p.id]??[], f=g.includes(UJ), A=g.filter(x=>x!==UJ), w=f?o?.[p.id]?.trim()??"":"", C=f&&w.length===0?"Other":w;
    return new j8o({
      questionId:p.id,selectedOptionIds:A,freeformText:C
    })
  }), d=new zY({
    answers:u
  });
  if((e.runAsync??!1)&&s){
    const p=new Q5t({
      title:e.title??"",questions:e.questions.map(A=>({
        id:A.id,prompt:A.prompt,allowMultiple:A.allowMultiple??!1,options:A.options.map(w=>({
          id:w.id,label:w.label
        }))
      }))??[],runAsync:!1
    }), g=new cke;
    d.answers&&d.answers.length>0&&(g.result={
      case:"success",value:new d8n({
        answers:d.answers.map(A=>new g6o({
          questionId:A.questionId,selectedOptionIds:A.selectedOptionIds,freeformText:A.freeformText
        }))
      })
    });
    const f=new SF({
      action:{
        case:"asyncAskQuestionCompletionAction",value:new rFc({
          originalToolCallId:n,originalArgs:p,result:g
        })
      }
    });
    await s.submitConversationAction(f), i.setBubbleData(r, {
      additionalData:{
        status:"submitted",currentSelections:t,freeformTexts:o
      }
    })
  }
  else _kf(n, d), i.setBubbleData(r, {
    additionalData:{
      status:"submitted",currentSelections:t,freeformTexts:o
    }, result:d
  }), i.acceptToolCall(n);
  return!0
}
var Ckf, yqe, Smu, fny=