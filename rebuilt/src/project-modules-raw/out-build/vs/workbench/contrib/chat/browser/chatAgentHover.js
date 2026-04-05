// Module: out-build/vs/workbench/contrib/chat/browser/chatAgentHover.js
// Offset: 32722664 (bundle byte offset)
// Size: 2430 bytes

ri(), bS(), Po(), qi(), yn(), rt(), zr(), Jr(), Yn(), Ht(), hR(), owe(), v0(), axa(), ibn=class extends at{
  constructor(e, t, i){
    super(), this.chatAgentService=e, this.extensionService=t, this.chatAgentNameService=i, this._onDidChangeContents=this._register(new Qe), this.onDidChangeContents=this._onDidChangeContents.event;
    const r=kl(".chat-agent-hover@root", [kl(".chat-agent-hover-header", [kl(".chat-agent-hover-icon@icon"), kl(".chat-agent-hover-details", [kl(".chat-agent-hover-name@name"), kl(".chat-agent-hover-extension", [kl(".chat-agent-hover-extension-name@extensionName"), kl(".chat-agent-hover-separator@separator"), kl(".chat-agent-hover-publisher@publisher")])])]), kl(".chat-agent-hover-warning@warning"), kl("span.chat-agent-hover-description@description")]);
    this.domNode=r.root, this.icon=r.icon, this.name=r.name, this.extensionName=r.extensionName, this.description=r.description, r.separator.textContent="|";
    const s=Ct("span.extension-verified-publisher", void 0, tL(gEt));
    this.publisherName=Ct("span.chat-agent-hover-publisher-name"), Rt(r.publisher, s, this.publisherName), r.warning.appendChild(tL(Be.warning)), r.warning.appendChild(Ct("span", void 0, _(5181, null)))
  }
  setAgent(e){
    const t=this.chatAgentService.getAgent(e);
    if(t.metadata.icon instanceof je){
      const s=Ct("img.icon");
      s.src=og.uriToBrowserUri(t.metadata.icon).toString(!0),this.icon.replaceChildren(Ct(".avatar",void 0,s))
    }
    else if(t.metadata.themeIcon){
      const s=Ct(Qt.asCSSSelector(t.metadata.themeIcon));
      this.icon.replaceChildren(Ct(".avatar.codicon-avatar",void 0,s))
    }
    this.domNode.classList.toggle("noExtensionName", !!t.isDynamic);
    const i=this.chatAgentNameService.getAgentNameRestriction(t);
    this.name.textContent=i?`@${t.name}`:dyi(t), this.extensionName.textContent=t.extensionDisplayName, this.publisherName.textContent=t.publisherDisplayName??t.extensionPublisherId;
    let r=t.description??"";
    if(r&&(r.match(/[\.\?\!] *$/)||(r+=".")), this.description.textContent=r, this.domNode.classList.toggle("allowedName", i), this.domNode.classList.toggle("verifiedPublisher", !1), !t.isDynamic){
      const s=this._register(new Wc);
      this.extensionService.getExtensions([{
        id:t.extensionId.value
      }
      ],s.token).then(o=>{
        s.dispose(),o[0]?.publisherDomain?.verified&&(this.domNode.classList.toggle("verifiedPublisher",!0),this._onDidChangeContents.fire())
      })
    }
  }
}, ibn=__decorate([__param(0, EI), __param(1, Em), __param(2, cpn)], ibn)
}
}), cxa, Ily=