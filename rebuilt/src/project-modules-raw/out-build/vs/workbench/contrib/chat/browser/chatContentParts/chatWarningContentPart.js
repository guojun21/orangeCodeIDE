// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatWarningContentPart.js
// Offset: 32852019 (bundle byte offset)
// Size: 2158 bytes

ri(), bS(), qi(), rt(), xS(), nwu=Ct, iwu=class extends at{
  constructor(n, e, t){
    super(), this.domNode=nwu(".chat-notification-widget");
    let i, r;
    switch(n){
      case Mnt.Warning:i=Be.warning,r=".chat-warning-codicon";
      break;
      case Mnt.Error:i=Be.error,r=".chat-error-codicon";
      break;
      case Mnt.Info:i=Be.info,r=".chat-info-codicon";
      break
    }
    this.domNode.appendChild(nwu(r, void 0, tL(i)));
    const s=this._register(t.render(e));
    this.domNode.appendChild(s.element)
  }
  hasSameContent(n){
    return n.kind==="warning"
  }
}
}
});
async function auy(n, e, t, i, r, s, o){
  const a=je.parse(e), l=a.authority.split("."), u=l.slice(l.length-2).join("."), d="*."+u, m=[];
  if(m.push({
    type:"item", label:_(12599, null, e), id:"trust", toTrust:e, picked:!0
  }), l.length===4&&l.every(f=>Number.isInteger(+f)||Number.isInteger(+f.split(":")[0]))){
    if(a.authority.includes(":")){
      const f=a.authority.split(":")[0];
      m.push({
        type:"item",label:_(12600,null,f),toTrust:f+":*",id:"trust"
      })
    }
  }
  else m.push({
    type:"item", label:_(12601, null, u), toTrust:d, id:"trust"
  });
  m.push({
    type:"item", label:_(12602, null), toTrust:"*", id:"trust"
  }), m.push({
    type:"item", label:_(12603, null), id:"manage"
  });
  const g=await i.pick(m, {
    activeItem:m[0]
  });
  if(g&&g.id)switch(g.id){
    case"manage":return await s.openEditor({
      resource:rwu.with({
        fragment:t.toString()
      }),languageId:"jsonc",options:{
        pinned:!0
      }
    }), n;
    case"trust":{
      const f=g.toTrust;
      if(n.indexOf(f)===-1)return r9f(r,f),[...n,f]
    }
  }
  return[]
}
async function cuy(n){
  const{
    defaultTrustedDomains:e, trustedDomains:t
  }
  =Mxa(n);
  return{
    defaultTrustedDomains:e, trustedDomains:t
  }
}
function r9f(n, e){
  let t=[];
  try{
    const i=n.get(s2e, -1);
    if(i){
      const r=JSON.parse(i);
      Array.isArray(r)&&(t=r)
    }
  }
  catch(i){
    console.warn("[trustedDomains] Failed to parse trusted domains from storage:", i)
  }
  t.includes(e)||(n.remove(Fxa, -1), n.store(s2e, JSON.stringify([...t, e]), -1, 0))
}
function Mxa(n){
  const e=n.get(Hi), t=n.get(za), i=n.get(dO), r=[...t.linkProtectionTrustedDomains??[], ...i.options?.additionalTrustedDomains??[]];
  let s=[];
  try{
    const o=e.get(s2e, -1);
    o&&(s=JSON.parse(o))
  }
  catch{
    
  }
  return{
    defaultTrustedDomains:r, trustedDomains:s
  }
}
var rwu, s2e, Fxa, Oxa, PSi=