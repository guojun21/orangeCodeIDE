// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatCommandContentPart.js
// Offset: 32727227 (bundle byte offset)
// Size: 645 bytes

ri(), fk(), rt(), Ht(), hs(), $b(), Wq(), t5f=Ct, uxa=class extends at{
  constructor(e, t, i){
    super(), this.commandService=i, this.domNode=t5f(".chat-command-button");
    const r=!rA(t.element)||!t.element.isStale, s=r?e.command.tooltip:_(5211, null), o=this._register(new pw(this.domNode, {
      ...lE,supportIcons:!0,title:s
    }));
    o.label=e.command.title, o.enabled=r, this._register(o.onDidClick(()=>this.commandService.executeCommand(e.command.id, ...e.command.arguments??[])))
  }
  hasSameContent(e){
    return e.kind==="command"
  }
}, uxa=__decorate([__param(2, fr)], uxa)
}
}), Rly=