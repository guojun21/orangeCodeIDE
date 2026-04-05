// Module: out-build/vs/workbench/contrib/chat/browser/chatAttachmentModel.js
// Offset: 31098439 (bundle byte offset)
// Size: 2075 bytes

Yn(), yn(), Yr(), rt(), Wt(), UIf(), ns(), zgn(), ru(), Ht(), NSa=class extends at{
  constructor(e, t, i){
    super(), this.initService=e, this.fileService=t, this.dialogService=i, this._attachments=new Map, this._onDidChangeContext=this._register(new Qe), this.onDidChangeContext=this._onDidChangeContext.event, this.promptInstructions=this._register(this.initService.createInstance(LSa)).onUpdate(()=>{
      this._onDidChangeContext.fire()
    })
  }
  get attachments(){
    return Array.from(this._attachments.values())
  }
  get size(){
    return this._attachments.size
  }
  get fileAttachments(){
    return this.attachments.reduce((e, t)=>(t.isFile&&je.isUri(t.value)&&e.push(t.value), e), [])
  }
  getAttachmentIDs(){
    return new Set(this._attachments.keys())
  }
  clear(){
    this._attachments.clear(), this._onDidChangeContext.fire()
  }
  delete(...e){
    for(const t of e)this._attachments.delete(t);
    this._onDidChangeContext.fire()
  }
  async addFile(e, t){
    if(/\.(png|jpe?g|gif|bmp|webp)$/i.test(e.path)){
      this.addContext(await this.asImageVariableEntry(e));
      return
    }
    this.addContext(this.asVariableEntry(e, t))
  }
  addFolder(e){
    this.addContext({
      value:e,id:e.toString(),name:ca(e),isFile:!1,isDirectory:!0
    })
  }
  asVariableEntry(e, t){
    return{
      value:t?{
        uri:e,range:t
      }
      :e,id:e.toString()+(t?.toString()??""),name:ca(e),isFile:!0
    }
  }
  async asImageVariableEntry(e){
    const t=ca(e), i=await this.fileService.readFile(e);
    if(i.size>30*1024*1024)throw this.dialogService.error(_(5183, null), _(5184, null, t)), new Error("Image is too large");
    const r=await kit(i.value.buffer);
    return{
      id:e.toString(),name:t,fullName:e.path,value:r,isImage:!0,isFile:!1,references:[{
        reference:e,kind:"reference"
      }
      ]
    }
  }
  addContext(...e){
    let t=!1;
    for(const i of e)this._attachments.has(i.id)||(this._attachments.set(i.id, i), t=!0);
    t&&this._onDidChangeContext.fire()
  }
  clearAndSetContext(...e){
    this.clear(), this.addContext(...e)
  }
}, NSa=__decorate([__param(0, ln), __param(1, Gr), __param(2, Ml)], NSa)
}
}), Vgn, l0i, Ygu, Zgu, Xgu, efu, tfu, MSa, Kgn, Ygn, FSa, nfu, Zgn, ifu, rfu, qIf, OSa, HIf, u0i, sfu, Eit, d0i, USa, ofu, $Sa, afu, JIf, GIf, WIf, QIf, jIf, xit, cfu, zIf, VIf, UMe=