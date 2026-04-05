// Module: out-build/vs/editor/contrib/dropOrPasteInto/browser/defaultProviders.js
// Offset: 2404083 (bundle byte offset)
// Size: 3463 bytes

Vs(), ZSe(), QY(), rt(), hF(), zr(), Yr(), Yn(), Tg(), Cm(), Ht(), ps(), K5o=class{
  constructor(n){
    this.copyMimeTypes=[], this.kind=n, this.providedDropEditKinds=[this.kind], this.providedPasteEditKinds=[this.kind]
  }
  async provideDocumentPasteEdits(n, e, t, i, r){
    const s=await this.getEdit(t, r);
    if(s)return{
      edits:[{
        insertText:s.insertText,title:s.title,kind:s.kind,handledMimeType:s.handledMimeType,yieldTo:s.yieldTo
      }
      ],dispose(){
        
      }
    }
  }
  async provideDocumentDropEdits(n, e, t, i){
    const r=await this.getEdit(t, i);
    if(r)return{
      edits:[{
        insertText:r.insertText,title:r.title,kind:r.kind,handledMimeType:r.handledMimeType,yieldTo:r.yieldTo
      }
      ],dispose(){
        
      }
    }
  }
}, K3t=class UGb extends K5o{
  static{
    this.id="text"
  }
  constructor(){
    super(p0.Empty.append("text", "plain")), this.id=UGb.id, this.dropMimeTypes=[NA.text], this.pasteMimeTypes=[NA.text]
  }
  async getEdit(e, t){
    const i=e.get(NA.text);
    if(!i||e.has(NA.uriList))return;
    const r=await i.asString();
    return{
      handledMimeType:NA.text,title:_(1064,null),insertText:r,kind:this.kind
    }
  }
}, _Bc=class extends K5o{
  constructor(){
    super(p0.Empty.append("uri", "path", "absolute")), this.dropMimeTypes=[NA.uriList], this.pasteMimeTypes=[NA.uriList]
  }
  async getEdit(n, e){
    const t=await RSh(n);
    if(!t.length||e.isCancellationRequested)return;
    let i=0;
    const r=t.map(({
      uri:o,originalText:a
    })=>o.scheme===_n.file?o.fsPath:(i++, a)).join(" ");
    let s;
    return i>0?s=t.length>1?_(1065, null):_(1066, null):s=t.length>1?_(1067, null):_(1068, null), {
      handledMimeType:NA.uriList,insertText:r,title:s,kind:this.kind
    }
  }
}, W3n=class extends K5o{
  constructor(e){
    super(p0.Empty.append("uri", "path", "relative")), this._workspaceContextService=e, this.dropMimeTypes=[NA.uriList], this.pasteMimeTypes=[NA.uriList]
  }
  async getEdit(e, t){
    const i=await RSh(e);
    if(!i.length||t.isCancellationRequested)return;
    const r=lh(i.map(({
      uri:s
    })=>{
      const o=this._workspaceContextService.getWorkspaceFolder(s);
      return o?eN(o.uri,s):void 0
    }));
    if(r.length)return{
      handledMimeType:NA.uriList,insertText:r.join(" "),title:i.length>1?_(1069,null):_(1070,null),kind:this.kind
    }
  }
}, W3n=__decorate([__param(0, Lr)], W3n), PSh=class{
  constructor(){
    this.kind=new p0("html"), this.providedPasteEditKinds=[this.kind], this.copyMimeTypes=[], this.pasteMimeTypes=["text/html"], this._yieldTo=[{
      mimeType:NA.text
    }
    ]
  }
  async provideDocumentPasteEdits(n, e, t, i, r){
    if(i.triggerKind!==vOn.PasteAs&&!i.only?.contains(this.kind))return;
    const o=await t.get("text/html")?.asString();
    if(!(!o||r.isCancellationRequested))return{
      dispose(){
        
      },edits:[{
        insertText:o,yieldTo:this._yieldTo,title:_(1071,null),kind:this.kind
      }
      ]
    }
  }
}, wKe={
  scheme:"*", hasAccessToAllModels:!0
}, Y5o=class extends at{
  constructor(e, t){
    super(), this._register(e.documentDropEditProvider.register(wKe, new K3t)), this._register(e.documentDropEditProvider.register(wKe, new _Bc)), this._register(e.documentDropEditProvider.register(wKe, new W3n(t)))
  }
}, Y5o=__decorate([__param(0, $u), __param(1, Lr)], Y5o), CBc=class extends at{
  constructor(e, t){
    super(), this._register(e.documentPasteEditProvider.register(wKe, new K3t)), this._register(e.documentPasteEditProvider.register(wKe, new _Bc)), this._register(e.documentPasteEditProvider.register(wKe, new W3n(t))), this._register(e.documentPasteEditProvider.register(wKe, new PSh))
  }
}, CBc=__decorate([__param(0, $u), __param(1, Lr)], CBc)
}
});
function LSh(n, e){
  const t=[...n];
  for(;
  t.length>0;
  ){
    const i=t.shift();
    if(!e(i))break;
    t.unshift(...i.children)
  }
}
var NSh, MSh, _bt, gz, kBc, Zoe, Q3n, FSh, kRe, j3n, Z5o, Ute, Vde=