// Module: out-build/vs/workbench/contrib/chat/browser/chatAttachmentModel/chatPromptAttachmentsCollection.js
// Offset: 31095595 (bundle byte offset)
// Size: 2754 bytes

yn(), Ssy(), B1t(), rt(), Wt(), Ei(), PSa=(n, e)=>{
  const{
    uri:t, isPromptFile:i
  }
  =n;
  let r=`${t}`;
  if(i){
    let s="vscode.prompt.instructions";
    e&&(s+=".root"), r=`${s}__${r}`
  }
  return{
    id:r, name:t.fsPath, value:t, isSelection:!1, enabled:!0, isFile:!0
  }
}, LSa=class extends at{
  get references(){
    const e=[];
    for(const t of this.attachments.values())e.push(...t.references);
    return e
  }
  get chatAttachments(){
    const e=[], t=[...this.attachments.values()];
    for(const i of t){
      const{
        reference:r
      }
      =i;
      e.push(...r.allValidReferences.map(s=>PSa(s,!1))),e.push(PSa(r,!0))
    }
    return e
  }
  async allSettled(){
    const e=[...this.attachments.values()];
    await Promise.allSettled(e.map(t=>t.allSettled))
  }
  onUpdate(e){
    return this._register(this._onUpdate.event(e)), this
  }
  onAdd(e){
    return this._register(this._onAdd.event(e)), this
  }
  constructor(e, t){
    super(), this.initService=e, this.configService=t, this.attachments=this._register(new mp), this._onUpdate=this._register(new Qe), this._onAdd=this._register(new Qe), this._onUpdate.fire=this._onUpdate.fire.bind(this._onUpdate)
  }
  add(e){
    if(this.attachments.has(e.path))return this;
    const t=this.initService.createInstance(RSa, e).onUpdate(this._onUpdate.fire).onDispose(()=>{
      this.attachments.deleteAndLeak(e.path),this._onUpdate.fire()
    });
    return this.attachments.set(e.path, t), t.resolve(), this._onAdd.fire(t), this._onUpdate.fire(), this
  }
  remove(e){
    return this.attachments.has(e.path)?(this.attachments.deleteAndDispose(e.path), this):this
  }
  get featureEnabled(){
    return Fce.enabled(this.configService)
  }
}, LSa=__decorate([__param(0, ln), __param(1, Fn)], LSa)
}
});
async function kit(n){
  typeof n=="string"&&(n=ksy(n));
  const e=new Blob([n]), t=new Image, i=URL.createObjectURL(e);
  return t.src=i, new Promise((r, s)=>{
    t.onload=()=>{
      URL.revokeObjectURL(i);
      let{
        width:o,height:a
      }
      =t;
      if(o<=768||a<=768){
        r(n);
        return
      }
      if(o>1024||a>1024){
        const m=1024/Math.max(o,a);
        o=Math.round(o*m),a=Math.round(a*m)
      }
      const l=768/Math.min(o,a);
      o=Math.round(o*l),a=Math.round(a*l);
      const u=document.createElement("canvas");
      u.width=o,u.height=a;
      const d=u.getContext("2d");
      d?(d.drawImage(t,0,0,o,a),u.toBlob(m=>{
        if(m){
          const p=new FileReader;
          p.onload=()=>{
            r(new Uint8Array(p.result))
          },p.onerror=g=>s(g),p.readAsArrayBuffer(m)
        }
        else s(new Error("Failed to create blob from canvas"))
      },"image/png")):s(new Error("Failed to get canvas context"))
    }, t.onerror=o=>{
      URL.revokeObjectURL(i),s(o)
    }
  })
}
function ksy(n){
  const e=n.includes(",")?n.split(",")[1]:n;
  return xsy(e)?Uint8Array.from(atob(e), t=>t.charCodeAt(0)):new TextEncoder().encode(n)
}
function Esy(n){
  try{
    return new TextDecoder().decode(n)
  }
  catch{
    return""
  }
}
function xsy(n){
  return/^[A-Za-z0-9+/]*={
    0, 2
  }
  $/.test(n)&&(()=>{
    try{
      return atob(n),!0
    }
    catch{
      return!1
    }
  })()
}
var zgn=