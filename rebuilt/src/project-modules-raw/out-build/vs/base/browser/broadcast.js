// Module: out-build/vs/base/browser/broadcast.js
// Offset: 31346314 (bundle byte offset)
// Size: 3652 bytes

iu(), _s(), yn(), rt(), aLf=class extends at{
  constructor(n){
    if(super(), this.channelName=n, this._onDidReceiveData=this._register(new Qe), this.onDidReceiveData=this._onDidReceiveData.event, "BroadcastChannel"in bi)try{
      this.broadcastChannel=new BroadcastChannel(n);
      const e=t=>{
        this._onDidReceiveData.fire(t.data)
      };
      this.broadcastChannel.addEventListener("message",e),this._register($i(()=>{
        this.broadcastChannel&&(this.broadcastChannel.removeEventListener("message",e),this.broadcastChannel.close())
      }))
    }
    catch(e){
      console.warn("Error while creating broadcast channel. Falling back to localStorage.",ov(e))
    }
    this.broadcastChannel||(this.channelName=`BroadcastDataChannel.${n}`, this.createBroadcastChannel())
  }
  createBroadcastChannel(){
    const n=e=>{
      e.key===this.channelName&&e.newValue&&this._onDidReceiveData.fire(JSON.parse(e.newValue))
    };
    bi.addEventListener("storage", n), this._register($i(()=>bi.removeEventListener("storage", n)))
  }
  postData(n){
    this.broadcastChannel?this.broadcastChannel.postMessage(n):(localStorage.removeItem(this.channelName), localStorage.setItem(this.channelName, JSON.stringify(n)))
  }
}
}
});
async function cLf(n){
  const e=[], t=NA.uriList.toLowerCase();
  if(n.has(t))try{
    const i=await n.get(t)?.asString(), r=JSON.stringify(YSe.parse(i??""));
    e.push(...ESh(r))
  }
  catch{
    
  }
  return e
}
function Yme(n, e, t, i){
  if(e.length===0||!t.dataTransfer)return;
  const r=n.get(Gg), s=n.get(yi), o=n.get(Gr), a=n.get(Ol), l=lh(e.map(g=>je.isUri(g)?{
    resource:g
  }
  :UWl(g)?je.isUri(g.editor.resource)?{
    resource:g.editor.resource
  }
  :void 0:{
    ...g, resource:g.selection?b2(g.resource, g.selection):g.resource
  })), u=l.filter(({
    resource:g
  })=>o.hasProvider(g));
  if(!i?.disableStandardTransfer){
    const g=Sc?`\r
`:`
`;
    t.dataTransfer.setData(fT.TEXT, u.map(({
      resource:A
    })=>a.getUriLabel(A, {
      noPrefix:!0
    })).join(g));
    const f=u.find(({
      isDirectory:A
    })=>!A);
    if(f){
      const A=og.uriToFileUri(f.resource);
      A.scheme===_n.file&&t.dataTransfer.setData(fT.DOWNLOAD_URL,[NA.binary,ca(f.resource),A.toString()].join(":"))
    }
  }
  const d=u.filter(({
    isDirectory:g
  })=>!g);
  d.length&&t.dataTransfer.setData(fT.RESOURCES, JSON.stringify(d.map(({
    resource:g
  })=>g.toString())));
  const m=Di.as(V3t.DragAndDropContribution).getAll();
  for(const g of m)g.setData(l, t);
  const p=[];
  for(const g of e){
    let f;
    if(UWl(g)){
      const A=g.editor.toUntyped({
        preserveViewState:g.groupId
      });
      A&&(f={
        ...A,resource:gp.getCanonicalUri(A)
      })
    }
    else if(je.isUri(g)){
      const{
        selection:A,uri:w
      }
      =J3n(g);
      f={
        resource:w,options:A?{
          selection:A
        }
        :void 0
      }
    }
    else g.isDirectory||(f={
      resource:g.resource,options:{
        selection:g.selection
      }
    });
    if(f){
      {
        const A=f.resource;
        if(A){
          const w=r.files.get(A);
          w&&(typeof f.languageId!="string"&&(f.languageId=w.getLanguageId()),typeof f.encoding!="string"&&(f.encoding=w.getEncoding()),typeof f.contents!="string"&&w.isDirty()&&!w.textEditorModel.isTooLargeForHeapOperation()&&(f.contents=w.textEditorModel.getValue())),f.options?.viewState||(f.options={
            ...f.options,viewState:(()=>{
              for(const C of s.visibleEditorPanes)if(Zc(C.input.resource,A)){
                const x=C.getViewState();
                if(x)return x
              }
            })()
          })
        }
      }
      p.push(f)
    }
  }
  if(p.length){
    t.dataTransfer.setData(nM.EDITORS, G1c(p));
    const g=[];
    for(const f of p)f.resource?g.push(f.options?.selection?b2(f.resource, f.options.selection):f.resource):nV(f)?f.modified.resource&&g.push(f.modified.resource):j1e(f)?f.primary.resource&&g.push(f.primary.resource):JAe(f)&&g.push(f.result.resource);
    i?.disableStandardTransfer||t.dataTransfer.setData(NA.uriList, YSe.create(g.slice(0, 1))), t.dataTransfer.setData(fT.INTERNAL_URI_LIST, YSe.create(g))
  }
}
function $1t(n, e, t){
  n&&(n.dropEffect=t?e:"none")
}
function lLf(){
  return hLf.isDraggedOver
}
var RT, VF, $it, uLf, Zme, ixe, QMe, _fn, dLf, hLf, A8=