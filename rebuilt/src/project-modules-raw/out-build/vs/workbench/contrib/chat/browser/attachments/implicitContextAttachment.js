// Module: out-build/vs/workbench/contrib/chat/browser/attachments/implicitContextAttachment.js
// Offset: 31047057 (bundle byte offset)
// Size: 2440 bytes

ri(), h0(), fk(), mb(), qi(), rt(), Yr(), Yn(), Ku(), hd(), Ht(), dg(), dr(), si(), pl(), ns(), Id(), Pd(), Mm(), sSa=class extends at{
  constructor(e, t, i, r, s, o, a, l, u, d){
    super(), this.attachment=e, this.resourceLabels=t, this.contextKeyService=i, this.contextMenuService=r, this.hoverService=s, this.labelService=o, this.menuService=a, this.fileService=l, this.languageService=u, this.modelService=d, this.renderDisposables=this._register(new Ut), this.domNode=Ct(".chat-attached-context-attachment.show-file-icons.implicit"), this.render()
  }
  render(){
    th(this.domNode), this.renderDisposables.clear(), this.domNode.classList.toggle("disabled", !this.attachment.enabled);
    const e=this.resourceLabels.create(this.domNode, {
      supportIcons:!0
    }), t=je.isUri(this.attachment.value)?this.attachment.value:this.attachment.value.uri, i=je.isUri(this.attachment.value)||!this.attachment.isSelection?void 0:this.attachment.value.range, r=ca(t), s=Td(t), o=`${r} ${s}`, a=i?_(5153, null, o, i.startLineNumber, i.endLineNumber):_(5154, null, o), l=this.labelService.getUriLabel(t, {
      relative:!0
    }), u=_(5155, null), d=_(5156, null), p=`${u+(this.attachment.enabled?"":` (${
      d
    })`)}
${l}`;
    e.setFile(t, {
      fileKind:xg.FILE,hidePath:!0,range:i,title:p
    }), this.domNode.ariaLabel=a, this.domNode.tabIndex=0;
    const g=Rt(this.domNode, Ct("span.chat-implicit-hint", void 0, "Current file"));
    this._register(this.hoverService.setupManagedHover(Sm("element"), g, p));
    const f=this.attachment.enabled?_(5157, null):_(5158, null), A=this.renderDisposables.add(new pw(this.domNode, {
      supportIcons:!0,title:f
    }));
    A.icon=this.attachment.enabled?Be.eye:Be.eyeClosed, this.renderDisposables.add(A.onDidClick(x=>{
      x.stopPropagation(),this.attachment.enabled=!this.attachment.enabled
    }));
    const w=this.renderDisposables.add(this.contextKeyService.createScoped(this.domNode));
    this.renderDisposables.add(new Ep(w, this.fileService, this.languageService, this.modelService)).set(t), this.renderDisposables.add(ei(this.domNode, ir.CONTEXT_MENU, async x=>{
      const I=new yy(As(x),x);
      zu.stop(x,!0),this.contextMenuService.showContextMenu({
        contextKeyService:w,getAnchor:()=>I,getActions:()=>{
          const B=this.menuService.getMenuActions(st.ChatInputResourceAttachmentContext,w,{
            arg:t
          });
          return YH(B)
        }
      })
    }))
  }
}, sSa=__decorate([__param(2, wi), __param(3, kc), __param(4, Kc), __param(5, Ol), __param(6, xd), __param(7, Gr), __param(8, Jl), __param(9, Il)], sSa)
}
}), OMe, oSa, aSa, Pgu, cSa, Lqe, lIf, Yye=