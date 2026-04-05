// Module: out-build/vs/workbench/contrib/chat/browser/chatFollowups.js
// Offset: 32551602 (bundle byte offset)
// Size: 1066 bytes

ri(), fk(), tg(), rt(), Ht(), hR(), EV(), e3f=Ct, CEa=class extends at{
  constructor(e, t, i, r, s, o){
    super(), this.location=i, this.options=r, this.clickHandler=s, this.chatAgentService=o;
    const a=Rt(e, e3f(".interactive-session-followups"));
    t.forEach(l=>this.renderFollowup(a, l))
  }
  renderFollowup(e, t){
    if(!this.chatAgentService.getDefaultAgent(this.location))return;
    const i=mtf(this.chatAgentService, this.location, "", t.agentId, t.subCommand);
    if(i===void 0)return;
    const r=t.kind==="reply"?t.title||t.message:t.title, s=t.kind==="reply"?t.message:t.title, o=(i+("tooltip"in t&&t.tooltip||s)).trim(), a=this._register(new pw(e, {
      ...this.options,title:o
    }));
    t.kind==="reply"?a.element.classList.add("interactive-followup-reply"):t.kind==="command"&&a.element.classList.add("interactive-followup-command"), a.element.ariaLabel=_(5340, null, r), a.label=new _c(r), this._register(a.onDidClick(()=>this.clickHandler(t)))
  }
}, CEa=__decorate([__param(5, EI)], CEa)
}
});
function t3f(n){
  return(e, t, i)=>new SEa(n, e, t, i)
}
var SEa, n3f=