// Module: out-build/vs/workbench/contrib/chat/common/chatRequestParser.js
// Offset: 30873887 (bundle byte offset)
// Size: 3348 bytes

$I(), tl(), ts(), hR(), EV(), hCa(), x_i(), SS(), wie(), Ixf=/^@([\w_\-\.]+)(?=(\s|$|\b))/i, Dxf=/^#([\w_\-]+)(:\d+)?(?=(\s|$|\b))/i, Bxf=/\/([\w_\-]+)(?=(\s|$|\b))/i, m1t=class{
  constructor(e, t, i, r){
    this.agentService=e, this.variableService=t, this.slashCommandService=i, this.toolsService=r
  }
  parseChatRequest(e, t, i=zh.Panel, r){
    const s=[], o=this.variableService.getDynamicVariables(e);
    let a=1, l=1;
    for(let m=0;
    m<t.length;
    m++){
      const p=t.charAt(m-1),g=t.charAt(m);
      let f;
      if((p.match(/\s/)||m===0)&&(g===Sk?f=this.tryToParseVariable(t.slice(m),m,new ar(a,l),s):g===Jq?f=this.tryToParseAgent(t.slice(m),t,m,new ar(a,l),s,i,r):g===EU&&(f=this.tryToParseSlashCommand(t.slice(m),t,m,new ar(a,l),s,i,r)),f||(f=this.tryToParseDynamicVariable(t.slice(m),m,new ar(a,l),o))),f){
        if(m!==0){
          const A=s.at(-1),w=A?.range.endExclusive??0,C=A?.editorRange.endLineNumber??1,x=A?.editorRange.endColumn??1;
          s.push(new Aie(new dm(w,m),new Zt(C,x,a,l),t.slice(w,m)))
        }
        s.push(f)
      }
      g===`
`?(a++,l=1):l++
    }
    const u=s.at(-1), d=u?.range.endExclusive??0;
    return d<t.length&&s.push(new Aie(new dm(d, t.length), new Zt(u?.editorRange.endLineNumber??1, u?.editorRange.endColumn??1, a, l), t.slice(d, t.length))), {
      parts:s,text:t
    }
  }
  tryToParseAgent(e, t, i, r, s, o, a){
    const l=e.match(Ixf);
    if(!l||a?.mode!==void 0&&a.mode!==iA.Ask)return;
    const[u, d]=l, m=new dm(i, i+u.length), p=new Zt(r.lineNumber, r.column, r.lineNumber, r.column+u.length);
    let g=this.agentService.getAgentsByName(d);
    if(!g.length){
      const x=this.agentService.getAgentByFullyQualifiedId(d);
      x&&(g=[x])
    }
    const f=g.length>1&&a?.selectedAgent?a.selectedAgent:g.find(x=>x.locations.includes(o));
    if(!f||s.some(x=>x instanceof wQ)||s.some(x=>x instanceof Aie&&x.text.trim()!==""||!(x instanceof wQ)))return;
    const w=s.at(-1)?.range.endExclusive??0;
    if(t.slice(w, i).trim()==="")return new wQ(m, p, f)
  }
  tryToParseVariable(e, t, i, r){
    const s=e.match(Dxf);
    if(!s)return;
    const[o, a]=s, l=new dm(t, t+o.length), u=new Zt(i.lineNumber, i.column, i.lineNumber, i.column+o.length), d=this.toolsService.getToolByName(a);
    if(d&&d.canBeReferencedInPrompt)return new nqe(l, u, a, d.id, d.displayName, d.icon)
  }
  tryToParseSlashCommand(e, t, i, r, s, o, a){
    const l=e.match(Bxf);
    if(!l||s.some(f=>f instanceof Fnt))return;
    const[u, d]=l, m=new dm(i, i+u.length), p=new Zt(r.lineNumber, r.column, r.lineNumber, r.column+u.length), g=s.find(f=>f instanceof wQ);
    if(g){
      if(s.some(x=>x instanceof Aie&&x.text.trim()!==""||!(x instanceof wQ)&&!(x instanceof Aie)))return;
      const A=s.at(-1)?.range.endExclusive??0;
      if(t.slice(A,i).trim()!=="")return;
      const C=g.agent.slashCommands.find(x=>x.name===d);
      if(C)return new Lye(m,p,C)
    }
    else{
      const A=this.slashCommandService.getCommands(o,a?.mode??iA.Ask).find(w=>w.command===d);
      if(A)return new Fnt(m,p,A);
      {
        const C=this.agentService.getDefaultAgent(o,a?.mode)?.slashCommands.find(x=>x.name===d);
        if(C)return new Lye(m,p,C)
      }
    }
  }
  tryToParseDynamicVariable(e, t, i, r){
    const s=r.find(o=>o.range.startLineNumber===i.lineNumber&&o.range.startColumn===i.column);
    if(s){
      const o=s.range.endColumn-s.range.startColumn,a=e.substring(0,o),l=new dm(t,t+o);
      return new dpn(l,s.range,a,s.id,s.modelDescription,s.data,s.fullName,s.icon,s.isFile,s.isDirectory)
    }
  }
}, m1t=__decorate([__param(0, EI), __param(1, h1t), __param(2, Tgn), __param(3, yie)], m1t)
}
});
function Rxf(n, e){
  return e==="php"&&!n.trim().startsWith("<")?`<?php
${n}`:n
}
var T_i, Pxf=