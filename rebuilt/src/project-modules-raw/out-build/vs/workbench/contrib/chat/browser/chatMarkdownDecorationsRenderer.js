// Module: out-build/vs/workbench/contrib/chat/browser/chatMarkdownDecorationsRenderer.js
// Offset: 32740477 (bundle byte offset)
// Size: 4441 bytes

ri(), fk(), mb(), mk(), L0(), rt(), Yn(), hs(), Id(), Wt(), ka(), Pd(), jr(), XP(), iAa(), hR(), hxa(), EV(), xS(), wie(), kk(), Iyu(), mxa(), o5f(), Oly(), pxa="http://_vscodedecoration_", fSi="http://_chatagent_", Ryu="http://_chatslash_", bSi=class{
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    this.keybindingService=e, this.logService=t, this.chatAgentService=i, this.instantiationService=r, this.hoverService=s, this.chatService=o, this.chatWidgetService=a, this.commandService=l, this.labelService=u, this.toolsService=d, this.chatMarkdownAnchorService=m
  }
  convertParsedRequestToMarkdown(e){
    let t="";
    for(const i of e.parts)i instanceof Aie?t+=i.text:i instanceof wQ?t+=this.instantiationService.invokeFunction(r=>a5f(i.agent, !1, r)):t+=this.genericDecorationToMarkdown(i);
    return t
  }
  genericDecorationToMarkdown(e){
    const t=e instanceof dpn&&e.data instanceof je?e.data:void 0, r={
      title:t?this.labelService.getUriLabel(t,{
        relative:!0
      }):e instanceof Fnt?e.slashCommand.detail:e instanceof Lye?e.command.description:e instanceof nqe?this.toolsService.getTool(e.toolId)?.userDescription:""
    };
    return`[${e.text}](${pxa}?${encodeURIComponent(JSON.stringify(r))})`
  }
  walkTreeAndAnnotateReferenceLinks(e, t){
    const i=new Ut;
    return t.querySelectorAll("a").forEach(r=>{
      const s=r.getAttribute("data-href");
      if(s)if(s.startsWith(fSi)){
        let o;
        try{
          o=JSON.parse(decodeURIComponent(s.slice(fSi.length+1)))
        }
        catch(a){
          this.logService.error("Invalid chat widget render data JSON",Jw(a))
        }
        o&&r.parentElement.replaceChild(this.renderAgentWidget(o,i),r)
      }
      else if(s.startsWith(Ryu)){
        let o;
        try{
          o=JSON.parse(decodeURIComponent(s.slice(fSi.length+1)))
        }
        catch(a){
          this.logService.error("Invalid chat slash command render data JSON",Jw(a))
        }
        o&&r.parentElement.replaceChild(this.renderSlashCommandWidget(r.textContent,o,i),r)
      }
      else if(s.startsWith(pxa)){
        let o;
        try{
          o=JSON.parse(decodeURIComponent(s.slice(pxa.length+1)))
        }
        catch{
          
        }
        r.parentElement.replaceChild(this.renderResourceWidget(r.textContent,o,i),r)
      }
      else s.startsWith(scu)?this.renderFileWidget(e,s,r,i):s.startsWith("command:")&&this.injectKeybindingHint(r,s,this.keybindingService)
    }), i
  }
  renderAgentWidget(e, t){
    const i=`${Jq}${e.name}`;
    let r;
    if(e.isClickable){
      r=Ct("span.chat-agent-widget");
      const a=t.add(new pw(r,{
        buttonBackground:zo(rbn),buttonForeground:zo(sbn),buttonHoverBackground:void 0
      }));
      a.label=i,t.add(a.onDidClick(()=>{
        const l=this.chatAgentService.getAgent(e.agentId),u=this.chatWidgetService.lastFocusedWidget;
        !u||!l||this.chatService.sendRequest(u.viewModel.sessionId,l.metadata.sampleRequest??"",{
          location:u.location,agentId:l.id,userSelectedModelId:u.input.currentLanguageModel,mode:u.input.currentMode
        })
      }))
    }
    else r=this.renderResourceWidget(i, void 0, t);
    const s=this.chatAgentService.getAgent(e.agentId), o=new Ob(()=>t.add(this.instantiationService.createInstance(ibn)));
    return t.add(this.hoverService.setupManagedHover(Sm("element"), r, ()=>(o.value.setAgent(e.agentId), o.value.domNode), s&&Tyu(()=>s, this.commandService))), r
  }
  renderSlashCommandWidget(e, t, i){
    const r=Ct("span.chat-agent-widget.chat-command-widget"), s=this.chatAgentService.getAgent(t.agentId), o=i.add(new pw(r, {
      buttonBackground:zo(rbn),buttonForeground:zo(sbn),buttonHoverBackground:void 0
    }));
    return o.label=e, i.add(o.onDidClick(()=>{
      const a=this.chatWidgetService.lastFocusedWidget;
      if(!a||!s)return;
      const l=s.slashCommands.find(u=>u.name===t.command);
      this.chatService.sendRequest(a.viewModel.sessionId,l?.sampleRequest??"",{
        location:a.location,agentId:s.id,slashCommand:t.command,userSelectedModelId:a.input.currentLanguageModel,mode:a.input.currentMode
      })
    })), r
  }
  renderFileWidget(e, t, i, r){
    const s=je.parse(t), o=e.inlineReferences?.[s.path.slice(1)];
    if(!o){
      this.logService.error("Invalid chat widget render data JSON");
      return
    }
    const a=r.add(this.instantiationService.createInstance(gSi, i, o));
    r.add(this.chatMarkdownAnchorService.register(a))
  }
  renderResourceWidget(e, t, i){
    const r=Ct("span.chat-resource-widget"), s=Ct("span", void 0, e);
    return t?.title&&i.add(this.hoverService.setupManagedHover(Sm("element"), r, t.title)), r.appendChild(s), r
  }
  injectKeybindingHint(e, t, i){
    const r=t.match(/command:([^\)]+)/)?.[1];
    if(r){
      const s=i.lookupKeybinding(r);
      if(s){
        const o=s.getLabel();
        o&&(e.textContent=`${e.textContent} (${o})`)
      }
    }
  }
}, bSi=__decorate([__param(0, mo), __param(1, Rr), __param(2, EI), __param(3, ln), __param(4, Kc), __param(5, ES), __param(6, M1), __param(7, fr), __param(8, Ol), __param(9, yie), __param(10, fEt)], bSi)
}
}), $ly=