// Module: out-build/vs/workbench/contrib/chat/browser/chatDragAndDrop.js
// Offset: 32544077 (bundle byte offset)
// Size: 7525 bytes

dz(), ri(), bS(), Vs(), Po(), qi(), ZSe(), hF(), Yr(), Yn(), Tg(), td(), Ht(), ru(), sN(), ns(), jr(), ay(), Io(), bCa(), Nu(), ss(), _u(), l7e(), Nme(), kk(), XOf(), zgn(), (function(n){
  n[n.FILE_INTERNAL=0]="FILE_INTERNAL", n[n.FILE_EXTERNAL=1]="FILE_EXTERNAL", n[n.FOLDER=2]="FOLDER", n[n.IMAGE=3]="IMAGE", n[n.SYMBOL=4]="SYMBOL", n[n.HTML=5]="HTML", n[n.MARKER=6]="MARKER"
})(CX||(CX={
  
})), _Ea=class extends NH{
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(i), this.attachmentModel=e, this.styles=t, this.extensionService=r, this.fileService=s, this.editorService=o, this.dialogService=a, this.textModelService=l, this.webContentExtractorService=u, this.chatWidgetService=d, this.logService=m, this.overlays=new Map, this.overlayTextBackground="", this.currentActiveTarget=void 0, this.updateStyles()
  }
  addOverlay(e, t){
    this.removeOverlay(e);
    const{
      overlay:i,disposable:r
    }
    =this.createOverlay(e, t);
    this.overlays.set(e, {
      overlay:i,disposable:r
    })
  }
  removeOverlay(e){
    this.currentActiveTarget===e&&(this.currentActiveTarget=void 0);
    const t=this.overlays.get(e);
    t&&(t.overlay.remove(), t.disposable.dispose(), this.overlays.delete(e))
  }
  createOverlay(e, t){
    const i=document.createElement("div");
    i.classList.add("chat-dnd-overlay"), this.updateOverlayStyles(i), t.appendChild(i);
    const r=new PH(e, {
      onDragOver:s=>{
        s.stopPropagation(),s.preventDefault(),e!==this.currentActiveTarget&&(this.currentActiveTarget&&this.setOverlay(this.currentActiveTarget,void 0),this.currentActiveTarget=e,this.onDragEnter(s,e))
      },onDragLeave:s=>{
        e===this.currentActiveTarget&&(this.currentActiveTarget=void 0),this.onDragLeave(s,e)
      },onDrop:s=>{
        s.stopPropagation(),s.preventDefault(),e===this.currentActiveTarget&&(this.currentActiveTarget=void 0,this.onDrop(s,e))
      }
    });
    return{
      overlay:i,disposable:r
    }
  }
  onDragEnter(e, t){
    const i=this.guessDropType(e);
    this.updateDropFeedback(e, t, i)
  }
  onDragLeave(e, t){
    this.updateDropFeedback(e, t, void 0)
  }
  onDrop(e, t){
    this.updateDropFeedback(e, t, void 0), this.drop(e)
  }
  async drop(e){
    const t=await this.getAttachContext(e);
    t.length!==0&&this.attachmentModel.addContext(...t)
  }
  updateDropFeedback(e, t, i){
    const r=i!==void 0;
    e.dataTransfer&&(e.dataTransfer.dropEffect=r?"copy":"none"), this.setOverlay(t, i)
  }
  guessDropType(e){
    if(this.isImageDnd(e))return this.extensionService.extensions.some(t=>g8(t, "chatReferenceBinaryData"))?CX.IMAGE:void 0;
    if(k9(e, "text/html"))return CX.HTML;
    if(k9(e, nM.SYMBOLS))return CX.SYMBOL;
    if(k9(e, nM.MARKERS))return CX.MARKER;
    if(k9(e, fT.FILES))return CX.FILE_EXTERNAL;
    if(k9(e, fT.INTERNAL_URI_LIST))return CX.FILE_INTERNAL;
    if(k9(e, NA.uriList, nM.FILES, fT.RESOURCES))return CX.FOLDER
  }
  isDragEventSupported(e){
    return this.guessDropType(e)!==void 0
  }
  getDropTypeName(e){
    switch(e){
      case CX.FILE_INTERNAL:return _(5247,null);
      case CX.FILE_EXTERNAL:return _(5248,null);
      case CX.FOLDER:return _(5249,null);
      case CX.IMAGE:return _(5250,null);
      case CX.SYMBOL:return _(5251,null);
      case CX.MARKER:return _(5252,null);
      case CX.HTML:return _(5253,null)
    }
  }
  isImageDnd(e){
    if(k9(e, "image"))return!0;
    if(k9(e, fT.FILES)){
      const t=e.dataTransfer?.files;
      if(t&&t.length>0)return t[0].type.startsWith("image/");
      const i=e.dataTransfer?.items;
      if(i&&i.length>0)return i[0].type.startsWith("image/")
    }
    return!1
  }
  async getAttachContext(e){
    if(!this.isDragEventSupported(e))return[];
    const t=khA(e);
    if(t)return this.resolveMarkerAttachContext(t);
    if(k9(e, nM.SYMBOLS)){
      const r=ShA(e);
      return this.resolveSymbolsAttachContext(r)
    }
    const i=ABc(e);
    return i.length===0&&!k9(e, fT.INTERNAL_URI_LIST)&&k9(e, NA.uriList)&&(k9(e, NA.html)||k9(e, NA.text))?this.resolveHTMLAttachContext(e):lh(await Promise.all(i.map(r=>this.resolveAttachContext(r))))
  }
  async resolveAttachContext(e){
    const t=await yly(e, this.fileService, this.dialogService);
    return t?this.extensionService.extensions.some(i=>g8(i, "chatReferenceBinaryData"))?t:void 0:await this.getEditorAttachContext(e)
  }
  async getEditorAttachContext(e){
    if(OWl(e))return await this.resolveUntitledAttachContext(e);
    if(!e.resource)return;
    let t;
    try{
      t=await this.fileService.stat(e.resource)
    }
    catch{
      return
    }
    if(!(!t.isDirectory&&!t.isFile))return await XAu(e.resource, t.isDirectory, this.textModelService)
  }
  async resolveUntitledAttachContext(e){
    if(e.resource)return await XAu(e.resource, !1, this.textModelService);
    const t=this.editorService.editors.filter(i=>i instanceof WJ);
    for(const i of t)if((await i.resolve()).textEditorModel?.getValue()===e.contents)return await XAu(i.resource, !1, this.textModelService)
  }
  resolveSymbolsAttachContext(e){
    return e.map(t=>{
      const i=je.file(t.fsPath);
      return{
        kind:"symbol",id:wly(i,t.range),value:{
          uri:i,range:t.range
        },symbolKind:t.kind,fullName:`$(${$oe.toIcon(t.kind).id}) ${t.name}`,name:t.name
      }
    })
  }
  async downloadImageAsUint8Array(e){
    try{
      const i=await this.webContentExtractorService.readImage(je.parse(e),Cs.None);
      if(i)return i.buffer
    }
    catch(i){
      this.logService.warn("Fetch failed:",i)
    }
    const t=this.chatWidgetService.lastFocusedWidget?.inputEditor.getSelection();
    t&&this.chatWidgetService.lastFocusedWidget&&this.chatWidgetService.lastFocusedWidget.inputEditor.executeEdits("chatInsertUrl", [{
      range:t,text:e
    }
    ]), this.logService.warn(`Image URLs must end in .jpg, .png, .gif, .webp, or .bmp. Failed to fetch image from this URL: ${e}`)
  }
  async resolveHTMLAttachContext(e){
    const t=_(5254, null);
    let i=t;
    for(let a=2;
    this.attachmentModel.attachments.some(l=>l.name===i);
    a++)i=`${t} ${a}`;
    const r=await this.extractImageFromFile(e);
    if(r)return[await this.createImageVariable(await kit(r), i)];
    const s=await this.extractImageFromUrl(e), o=[];
    if(s){
      for(const a of s)if(/^data:image\/[a-z]+;
      base64,/.test(a))o.push(await this.createImageVariable(await kit(a),i,je.parse(a)));
      else if(/^https?:\/\/.+/.test(a)){
        const l=await this.downloadImageAsUint8Array(a);
        l&&o.push(await this.createImageVariable(await kit(l),i,je.parse(a),a))
      }
    }
    return o
  }
  async createImageVariable(e, t, i, r){
    return{
      id:r||await zOf(e),name:t,value:e,isImage:!0,isFile:!1,isDirectory:!1,references:i?[{
        reference:i,kind:"reference"
      }
      ]:[]
    }
  }
  resolveMarkerAttachContext(e){
    return e.map(t=>{
      let i;
      return"severity"in t?i=wkt.fromMarker(t):i={
        filterUri:je.revive(t.uri),filterSeverity:Gl.Warning
      },wkt.toEntry(i)
    })
  }
  setOverlay(e, t){
    this.overlayText?.remove(), this.overlayText=void 0;
    const{
      overlay:i
    }
    =this.overlays.get(e);
    if(t!==void 0){
      const s=a_(`$(${Be.attach.id}) ${this.getOverlayText(t)}`).map(o=>typeof o=="string"?Ct("span.overlay-text",void 0,o):o);
      this.overlayText=Ct("span.attach-context-overlay-text",void 0,...s),this.overlayText.style.backgroundColor=this.overlayTextBackground,i.appendChild(this.overlayText)
    }
    i.classList.toggle("visible", t!==void 0)
  }
  getOverlayText(e){
    const t=this.getDropTypeName(e);
    return _(5255, null, t)
  }
  updateOverlayStyles(e){
    e.style.backgroundColor=this.getColor(this.styles.overlayBackground)||"", e.style.color=this.getColor(this.styles.listForeground)||""
  }
  updateStyles(){
    this.overlays.forEach(e=>this.updateOverlayStyles(e.overlay)), this.overlayTextBackground=this.getColor(this.styles.listBackground)||""
  }
  async extractImageFromFile(e){
    const t=e.dataTransfer?.files;
    if(t&&t.length>0){
      const i=t[0];
      if(i.type.startsWith("image/"))try{
        const r=await i.arrayBuffer();
        return new Uint8Array(r)
      }
      catch(r){
        this.logService.error("Error reading file:",r);
        return
      }
    }
  }
  async extractImageFromUrl(e){
    const t=e.dataTransfer?.getData("text/uri-list");
    if(t)try{
      const i=YSe.parse(t);
      if(i.length>0)return i
    }
    catch(i){
      this.logService.error("Error parsing URI list:",i);
      return
    }
  }
}, _Ea=__decorate([__param(2, bo), __param(3, su), __param(4, Gr), __param(5, yi), __param(6, Ml), __param(7, El), __param(8, fCa), __param(9, M1), __param(10, Rr)], _Ea)
}
}), e3f, CEa, Cly=