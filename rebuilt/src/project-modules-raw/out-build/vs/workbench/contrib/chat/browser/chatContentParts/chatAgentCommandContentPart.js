// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatAgentCommandContentPart.js
// Offset: 32725094 (bundle byte offset)
// Size: 956 bytes

rt(), Id(), EV(), qi(), Ht(), fk(), Bc(), cxa=class extends at{
  constructor(e, t, i){
    super(), this._hoverService=i, this.domNode=document.createElement("span"), this.domNode.classList.add("chat-agent-command"), this.domNode.setAttribute("aria-label", e.name), this.domNode.setAttribute("role", "button");
    const r=Wr(), s=document.createElement("span");
    this.domNode.appendChild(s), s.innerText=EU+e.name, this._store.add(this._hoverService.setupDelayedHover(s, {
      content:e.description,appearance:{
        showPointer:!0
      }
    }, {
      groupId:r
    }));
    const o=_(5195, null, EU, e.name), a=new pw(this.domNode, {
      ariaLabel:o
    });
    a.icon=Be.close, this._store.add(a.onDidClick(()=>t())), this._store.add(a), this._store.add(this._hoverService.setupDelayedHover(a.element, {
      content:o,appearance:{
        showPointer:!0
      }
    }, {
      groupId:r
    }))
  }
  hasSameContent(e, t, i){
    return!1
  }
}, cxa=__decorate([__param(2, Kc)], cxa)
}
}), lxa, Dly=