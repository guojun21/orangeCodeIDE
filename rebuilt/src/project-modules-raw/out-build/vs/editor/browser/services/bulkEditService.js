// Module: out-build/vs/editor/browser/services/bulkEditService.js
// Offset: 2402965 (bundle byte offset)
// Size: 1118 bytes

Wt(), Yn(), Js(), rL=xi("IWorkspaceEditService"), G3n=class{
  constructor(n){
    this.metadata=n
  }
  static convert(n){
    return n.edits.map(e=>{
      if(WR.is(e))return WR.lift(e);
      if(QR.is(e))return QR.lift(e);
      throw new Error("Unsupported edit")
    })
  }
}, WR=class lWa extends G3n{
  static is(e){
    return e instanceof lWa?!0:$g(e)&&je.isUri(e.resource)&&$g(e.textEdit)
  }
  static lift(e){
    return e instanceof lWa?e:new lWa(e.resource, e.textEdit, e.versionId, e.metadata)
  }
  constructor(e, t, i=void 0, r){
    super(r), this.resource=e, this.textEdit=t, this.versionId=i
  }
}, QR=class uWa extends G3n{
  static is(e){
    return e instanceof uWa?!0:$g(e)&&(!!e.newResource||!!e.oldResource)
  }
  static lift(e){
    return e instanceof uWa?e:new uWa(e.oldResource, e.newResource, e.options, e.metadata)
  }
  constructor(e, t, i={
    
  }, r){
    super(r), this.oldResource=e, this.newResource=t, this.options=i
  }
}
}
});
async function RSh(n){
  const e=n.get(NA.uriList);
  if(!e)return[];
  const t=await e.asString(), i=[];
  for(const r of YSe.parse(t))try{
    i.push({
      uri:je.parse(r),originalText:r
    })
  }
  catch{
    
  }
  return i
}
var K5o, K3t, _Bc, W3n, PSh, wKe, Y5o, CBc, SBc=