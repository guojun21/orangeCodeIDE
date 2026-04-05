// Module: out-build/vs/workbench/services/agent/browser/agentTranslationUtils.js
// Offset: 30338742 (bundle byte offset)
// Size: 12710 bytes

t8(), P5n(), u5t(), Iie(), Tme(), kr(), Vg(), a5t(), Mbt(), jY(), qp()
}
});
function tmu(n){
  return Array.from(n).map(e=>e.toString(16).padStart(2, "0")).join("")
}
async function jey(n){
  const e=`${tmu(n)}:user-message`, t=await nmu;
  return await X1c(e, t)
}
async function zey(n, e, t){
  const i=`${tmu(n)}:${tmu(e)}:${t}`, r=await nmu;
  return await X1c(i, r)
}
async function sSf(n, e){
  const t=[], i=TC(), r=new oQ(qha), s=new oQ(h$e);
  for(const o of n.turns){
    t.push(o);
    try{
      const a=await e.getBlob(i,o),l=r.deserialize(a);
      if(l.turn.case==="agentConversationTurn"){
        const u=l.turn.value;
        if(u.userMessage&&u.userMessage.length>0){
          t.push(u.userMessage);
          try{
            const d=await e.getBlob(i,u.userMessage),m=s.deserialize(d);
            Vey(m.selectedContext,t)
          }
          catch{
            
          }
        }
        for(const d of u.steps)t.push(d)
      }
      else if(l.turn.case==="shellConversationTurn"){
        const u=l.turn.value;
        u.shellCommand&&u.shellCommand.length>0&&t.push(u.shellCommand),u.shellOutput&&u.shellOutput.length>0&&t.push(u.shellOutput)
      }
    }
    catch{
      
    }
  }
  return t
}
function Vey(n, e){
  if(n){
    if(n.selectedImages)for(const t of n.selectedImages)t.dataOrBlobId?.case==="blobId"?e.push(t.dataOrBlobId.value):t.dataOrBlobId?.case==="blobIdWithData"&&e.push(t.dataOrBlobId.value.blobId);
    if(n.extraContextEntries)for(const t of n.extraContextEntries)t.dataOrBlobId?.case==="blobId"&&e.push(t.dataOrBlobId.value);
    if(n.selectedPullRequests)for(const t of n.selectedPullRequests)t.blobId&&t.blobId.length>0&&e.push(t.blobId);
    if(n.gitPrDiffSelections)for(const t of n.gitPrDiffSelections)t.blobId&&t.blobId.length>0&&e.push(t.blobId);
    n.invocationContext?.data?.case==="blobId"&&e.push(n.invocationContext.data.value)
  }
}
async function Key(n, e, t, i){
  const r={
    
  };
  if(e.selectedImages&&e.selectedImages.length>0){
    r.images=[];
    for(const o of e.selectedImages){
      let a;
      switch(o.dataOrBlobId?.case){
        case"data":a=o.dataOrBlobId.value;
        break;
        case"blobId":a=await t.getBlob(n,o.dataOrBlobId.value);
        break;
        case"blobIdWithData":a=o.dataOrBlobId.value.data,(!a||a.length===0)&&(a=await t.getBlob(n,o.dataOrBlobId.value.blobId));
        break;
        default:a=void 0;
        break
      }
      a&&r.images.push({
        uuid:o.uuid,dimension:o.dimension?{
          width:o.dimension.width,height:o.dimension.height
        }
        :void 0,data:a
      })
    }
    r.images.length===0&&(r.images=void 0)
  }
  const s=[];
  if(e.files&&e.files.length>0)for(const o of e.files){
    const a=o.content.split(`
`), l=new dqe({
      relativeWorkspacePath:o.relativePath||o.path,lines:a,intent:1
    });
    s.push(l)
  }
  if(e.codeSelections&&e.codeSelections.length>0)for(const o of e.codeSelections){
    const a=o.content.split(`
`), l=new dqe({
      relativeWorkspacePath:o.relativePath||o.path,lines:a,startLineNumber:o.range?.start?.line??1,intent:6
    });
    s.push(l)
  }
  if(e.terminals&&e.terminals.length>0)for(const o of e.terminals){
    const a=o.content.split(`
`), l=new dqe({
      relativeWorkspacePath:o.path||"",lines:a,intent:9
    });
    s.push(l)
  }
  if(e.terminalSelections&&e.terminalSelections.length>0)for(const o of e.terminalSelections){
    const a=o.content.split(`
`), l=new dqe({
      relativeWorkspacePath:o.path||"",lines:a,startLineNumber:o.range?.start?.line??1,intent:9
    });
    s.push(l)
  }
  return s.length>0&&(r.attachedCodeChunks=s), e.folders&&e.folders.length>0&&(r.attachedFolders=e.folders.map(o=>o.relativePath||o.path)), e.externalLinks&&e.externalLinks.length>0&&(r.externalLinks=e.externalLinks.map(o=>({
    url:o.url, uuid:o.uuid
  }))), e.cursorRules&&e.cursorRules.length>0&&(r.cursorRules=e.cursorRules.map(o=>({
    name:o.rule?.fullPath||"", description:"", body:o.rule?.content, isFromGlob:!1, environments:o.rule?.environments??[], disabledEnvironments:o.rule?.disabledEnvironments??[]
  }))), e.gitDiffFromBranchToMain&&i.warn("composer", "Loading git diff from branch to main from conversation state is not yet supported"), r
}
function Yey(n){
  switch(n){
    case 1:return"pending";
    case 2:return"in_progress";
    case 3:return"completed";
    case 4:return"cancelled";
    case 0:default:return"pending"
  }
}
async function Zey(n){
  const{
    conversationState:e, blobStore:t, ctx:i
  }
  =n;
  if(!e.todos||e.todos.length===0)return[];
  const r=new oQ(c$e), s=[];
  for(const o of e.todos)try{
    const a=await t.getBlob(i, o), l=r.deserialize(a);
    s.push({
      id:l.id,content:l.content,status:Yey(l.status),dependencies:l.dependencies
    })
  }
  catch{
    
  }
  return s
}
function Xey(n){
  const{
    existingConversationMap:e, existingConversationHeaders:t
  }
  =n, i=new Map;
  for(const r of t){
    const s=r.serverBubbleId;
    if(s===void 0||s.length===0)continue;
    const o=e[r.bubbleId];
    o&&i.set(s, o)
  }
  return i
}
function ety(n){
  const{
    kickoffMessageId:e, existingConversationMap:t, existingConversationHeaders:i
  }
  =n;
  if(e===void 0){
    const d=i.filter(g=>t[g.bubbleId]?.type===1&&!g.serverBubbleId);
    if(d.length===0)return{
      baseConversationMap:{
        
      },baseConversationHeaders:[],hasLocalKickoffUserBubble:!1
    };
    const m={
      
    };
    for(const g of d){
      const f=t[g.bubbleId];
      f&&(m[g.bubbleId]=f)
    }
    const p=d.map(g=>({
      bubbleId:g.bubbleId,type:g.type,serverBubbleId:g.serverBubbleId
    }));
    return{
      baseConversationMap:m,baseConversationHeaders:p,hasLocalKickoffUserBubble:!0
    }
  }
  const s=t[e]?.type===1||i.some(d=>t[d.bubbleId]?.type!==1?!1:d.bubbleId===e||d.serverBubbleId===e), o=i.findIndex(d=>d.bubbleId===e||d.serverBubbleId===e);
  if(o===-1)return{
    baseConversationMap:{
      ...t
    }, baseConversationHeaders:i.slice(), hasLocalKickoffUserBubble:s
  };
  const a=s?o+1:o, l=i.slice(0, a), u={
    
  };
  for(const d of l){
    const m=t[d.bubbleId];
    m&&(u[d.bubbleId]=m)
  }
  return{
    baseConversationMap:u, baseConversationHeaders:l, hasLocalKickoffUserBubble:s
  }
}
function tty(n, e){
  return n.serverBubbleId===e?n:n.serverBubbleId===void 0||n.serverBubbleId.length===0?{
    ...n, serverBubbleId:e
  }
  :n
}
async function Zpn(n, e){
  const{
    conversationState:t, blobStore:i, instantiationService:r, selectedContextService:s, structuredLogService:o, signal:a, turnIndices:l, maxTurns:u, kickoffMessageId:d, existingConversationMap:m={
      
    }, existingConversationHeaders:p=[], shouldSetServerBubbleId:g=!0, enableLazyStepLoading:f=!1, onlyLastStepForCompletedTurns:A=!1
  }
  =n, w=e??TC(), C=()=>{
    a?.throwIfAborted()
  };
  C(), t.plan&&o.warn("composer", "Loading plans from conversation state is not yet supported");
  const x=await Zey({
    conversationState:t, blobStore:i, ctx:w
  }), I=Xey({
    existingConversationMap:m, existingConversationHeaders:p
  }), {
    baseConversationHeaders:B, baseConversationMap:R, hasLocalKickoffUserBubble:N
  }
  =ety({
    kickoffMessageId:d, existingConversationMap:m, existingConversationHeaders:p
  }), M=new oQ(qha), O=new oQ($fi), $=new oQ(h$e), H=new Map, W=new Map, z=[];
  try{
    const Y=t.turns.length, j=Array.from({
      length:Y
    }, (Le, We)=>We);
    let X=l&&l.length>0?l.filter(Le=>Le>=0&&Le<Y):j;
    u!==void 0&&u>=0&&X.length>u&&(X=X.slice(Math.max(0, X.length-u)));
    const ee=X, re=await Promise.all(X.map(Le=>i.getBlob(w, t.turns[Le])));
    C();
    const ne=new Map;
    for(let Le=0;
    Le<re.length;
    Le++)ne.set(X[Le], M.deserialize(re[Le]));
    const pe=[], le=new Map, he=X[X.length-1], be=new Set;
    for(const Le of ee){
      C();
      const We=ne.get(Le);
      if(!We||We.turn.case!=="agentConversationTurn")continue;
      const tt=We.turn.value,it=t.turns[Le],bt=A&&Le!==he;
      bt&&be.add(Le),tt.userMessage&&tt.userMessage.length>0&&pe.push({
        turnIndex:Le,type:"user",blobId:tt.userMessage
      });
      const Nt=tt.steps.length-1,ft=64,_t=new Array(tt.steps.length);
      for(let sn=0;
      sn<tt.steps.length;
      sn+=ft){
        C();
        const Vt=tt.steps.slice(sn,sn+ft),Ft=await Promise.all(Vt.map((Xt,bn)=>zey(it,Xt,sn+bn)));
        for(let Xt=0;
        Xt<Ft.length;
        Xt++)_t[sn+Xt]=Ft[Xt]
      }
      const It=[];
      for(let sn=0;
      sn<tt.steps.length;
      sn++){
        const Vt=tt.steps[sn],Ft=_t[sn],Xt=`${Le}:${sn}`;
        le.set(Xt,Ft),!(bt&&sn!==Nt)&&(I.has(Ft)||(f?It.push({
          j:sn,stepBlobId:Vt,stepServerBubbleId:Ft
        }):pe.push({
          turnIndex:Le,type:"step",stepIndex:sn,blobId:Vt
        })))
      }
      if(f&&It.length>0){
        const sn=await Promise.all(It.map(Vt=>i.hasBlob(Vt.stepBlobId)));
        for(let Vt=0;
        Vt<It.length;
        Vt++){
          const Ft=It[Vt];
          sn[Vt]&&pe.push({
            turnIndex:Le,type:"step",stepIndex:Ft.j,blobId:Ft.stepBlobId
          })
        }
      }
    }
    const fe=128, ke=new Array(pe.length);
    let Se=0;
    const Fe=Array.from({
      length:Math.min(fe,pe.length)
    }, ()=>(async()=>{
      for(;
      Se<pe.length;
      ){
        C();
        const Le=Se;
        Se+=1;
        const We=pe[Le];
        ke[Le]=await i.getBlob(w,We.blobId)
      }
    })());
    await Promise.all(Fe), C();
    const De=new Map, Pe=new Map;
    for(let Le=0;
    Le<pe.length;
    Le++){
      const We=pe[Le],tt=ke[Le];
      if(We.type==="user")De.set(We.turnIndex,tt);
      else{
        let it=Pe.get(We.turnIndex);
        it||(it=new Map,Pe.set(We.turnIndex,it)),it.set(We.stepIndex,tt)
      }
    }
    let Ne=d===void 0;
    for(const Le of ee){
      C();
      const We=t.turns[Le],tt=ne.get(Le);
      if(!tt)continue;
      const it=t.turnTimings?.[Le]?.durationMs,bt=it!==void 0?Number(it):void 0;
      if(tt.turn.case==="shellConversationTurn")throw new Error("[AgentResponseAdapter] Shell conversation turns not yet supported");
      if(tt.turn.case!=="agentConversationTurn")continue;
      const Nt=tt.turn.value;
      let ft,_t,It;
      if(Nt.userMessage&&Nt.userMessage.length>0)try{
        const bn=De.get(Le);
        ft=$.deserialize(bn);
        const St=ft.messageId?.trim()??"";
        _t=St.length>0?St:void 0
      }
      catch(bn){
        throw new Error(`[AgentResponseAdapter] Error deserializing user message: ${bn}`)
      }
      const sn=d!==void 0&&_t!==void 0&&_t===d;
      if(d!==void 0&&Ne!==!0)if(sn)Ne=!0;
      else continue;
      const Vt=ft!==void 0&&!(d!==void 0&&sn&&N);
      if(Vt&&(It=_t??await jey(We)),Vt&&It!==void 0&&I.get(It)===void 0&&!H.has(It)){
        const St=ft.selectedContext?await Key(w,ft.selectedContext,i,o):{
          
        },Bt={
          ...h_(),type:1,serverBubbleId:g?It:void 0,text:ft.text,richText:ft.richText,isSimulatedMsg:ft.isSimulatedMsg,simulatedMsgReason:ft.simulatedMsgReason,...St
        };
        if(_t?Bt.bubbleId=_t:sn&&d!==void 0&&(Bt.bubbleId=d),Object.keys(St).length>0){
          const Jt=await s.getContextObjectFromPopulatedConversationMessage(Bt);
          Bt.context=Jt
        }
        H.set(It,Bt)
      }
      const Ft=[],Xt=Pe.get(Le)??new Map;
      for(let bn=0;
      bn<Nt.steps.length;
      bn++){
        const St=`${Le}:${bn}`,Bt=le.get(St);
        if(I.has(Bt)){
          if(f){
            const Mt=I.get(Bt);
            Mt.isPlaceholder&&W.set(Mt.bubbleId,{
              blobId:Nt.steps[bn],stepServerBubbleId:Bt
            })
          }
          Ft.push(Bt);
          continue
        }
        if(H.has(Bt)){
          Ft.push(Bt);
          continue
        }
        const Jt=Xt.get(bn);
        if(!Jt){
          if(!f&&!be.has(Le))throw new Error(`[populateConversationFromState] Missing step blob for turn ${Le} step ${bn}`);
          const Mt=Wr(),Pt={
            ...h_(),type:2,text:"",bubbleId:Mt,serverBubbleId:g?Bt:void 0,isPlaceholder:!0
          };
          W.set(Mt,{
            blobId:Nt.steps[bn],stepServerBubbleId:Bt
          }),H.set(Bt,Pt),Ft.push(Bt);
          continue
        }
        const Ot=O.deserialize(Jt),cn=await oSf({
          step:Ot,stepServerBubbleId:Bt,shouldSetServerBubbleId:g,instantiationService:r,structuredLogService:o
        });
        cn!==void 0&&(H.set(Bt,cn),Ft.push(Bt))
      }
      z.push({
        includeUserMessage:Vt,userServerBubbleId:It,stepServerBubbleIds:Ft,turnDurationMs:bt!==void 0&&bt>0?bt:void 0
      })
    }
    const Oe=B.slice(), Ge={
      ...R
    };
    for(const Le of z){
      if(Le.includeUserMessage&&Le.userServerBubbleId!==void 0){
        const tt=Le.userServerBubbleId,it=I.get(tt),bt=H.get(tt),Nt=it??bt;
        if(Nt){
          const ft=g?tty(Nt,tt):Nt;
          Ge[ft.bubbleId]=ft,Oe.push({
            bubbleId:ft.bubbleId,type:ft.type,serverBubbleId:g?ft.serverBubbleId:void 0
          })
        }
      }
      for(const tt of Le.stepServerBubbleIds){
        const it=I.get(tt)??H.get(tt);
        if(!it)throw new Error(`[populateConversationFromState] Missing bubble for serverBubbleId ${tt}`);
        Ge[it.bubbleId]=it,Oe.push({
          bubbleId:it.bubbleId,type:it.type,serverBubbleId:g?it.serverBubbleId:void 0
        })
      }
      const We=Le.stepServerBubbleIds[Le.stepServerBubbleIds.length-1];
      if(Le.turnDurationMs!==void 0&&We){
        const tt=I.get(We)??H.get(We);
        tt&&(Ge[tt.bubbleId]={
          ...tt,stepDurationMs:Le.turnDurationMs,turnDurationMs:Le.turnDurationMs
        })
      }
    }
    return{
      conversationMap:Ge,conversationHeaders:Oe,todos:x,resolvePlaceholder:async Le=>{
        const We=W.get(Le);
        if(!We)return;
        const tt=await i.getBlob(w,We.blobId),it=O.deserialize(tt),bt=await oSf({
          step:it,stepServerBubbleId:We.stepServerBubbleId,shouldSetServerBubbleId:g,instantiationService:r,structuredLogService:o
        });
        return bt&&(bt.bubbleId=Le,bt.isPlaceholder=!1,W.delete(Le)),bt
      }
    }
  }
  finally{
    
  }
}
async function oSf(n){
  const{
    step:e, stepServerBubbleId:t, shouldSetServerBubbleId:i, instantiationService:r, structuredLogService:s
  }
  =n;
  switch(e.message.case){
    case"assistantMessage":{
      const o=e.message.value;
      return{
        ...h_(),type:2,text:o.text,bubbleId:Wr(),serverBubbleId:i?t:void 0
      }
    }
    case"thinkingMessage":{
      const o=e.message.value,a={
        ...h_(),type:2,text:"",bubbleId:Wr(),serverBubbleId:i?t:void 0,capabilityType:30,thinking:new xpn({
          text:o.text,isLastThinkingChunk:!0
        })
      };
      return o.durationMs>0&&(a.thinkingDurationMs=o.durationMs),a
    }
    case"toolCall":{
      const o=e.message.value,a=Wr();
      try{
        const l=await nty(a,o,r);
        if(l)return{
          ...l,serverBubbleId:i?t:void 0
        };
        s.warn("composer","Skipping unsupported tool call during conversation state hydration",{
          toolCase:o.tool.case??"unknown"
        });
        return
      }
      catch(l){
        s.warn("composer","Skipping tool call during conversation state hydration",{
          toolCase:o.tool.case??"unknown",error:l instanceof Error?l.message:String(l)
        });
        return
      }
    }
    default:return
  }
}
async function nty(n, e, t){
  let i;
  try{
    i=await Z_a(e, n, t)
  }
  catch(r){
    if(r instanceof Error&&r.message.includes("Unsupported tool type"))return;
    throw r
  }
  return{
    ...h_(), codeBlocks:[], type:2, text:"", capabilityType:15, toolFormerData:i
  }
}
var aSf, nmu, Iwi=