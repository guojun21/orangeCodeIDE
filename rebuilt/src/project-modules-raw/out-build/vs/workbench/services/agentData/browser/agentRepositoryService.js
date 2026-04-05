// Module: out-build/vs/workbench/services/agentData/browser/agentRepositoryService.js
// Offset: 28165393 (bundle byte offset)
// Size: 1156 bytes

Wt(), nau=["plan", "chat"], Cce=xi("agentRepositoryService")
}
});
function BXg(n){
  const e=n.replace(/\/+$/, "").replace(/\.git$/i, "");
  return!e||e==="/"?"":e.startsWith("/")?e:`/${e}`
}
function RXg(n){
  if(/^[a-z][a-z0-9+.-]*:\/\//i.test(n))return n;
  const t=`https://${n}`;
  try{
    return new URL(t), t
  }
  catch{
    const i=n.match(/^([^@/\s]+@)?([^:/\s]+):(.+)$/);
    if(i){
      const r=i[1]??"",s=i[2],o=i[3];
      return`ssh://${r}${s}/${o}`
    }
    return t
  }
}
function cP(n){
  const e=n.trim();
  if(!e)return"";
  try{
    const t=RXg(e), i=new URL(t), r=BXg(i.pathname);
    return`${i.hostname}${r}`.toLowerCase()
  }
  catch{
    let t=e.replace(/^(?:https?|ssh|git):\/\//i, "");
    const i=t.indexOf("/"), r=i===-1?t:t.slice(0, i), s=i===-1?"":t.slice(i);
    return`${r.includes("@")?r.slice(r.lastIndexOf("@")+1):r}${s}`.replace(/\/+$/, "").replace(/\.git$/i, "").toLowerCase()
  }
}
function ava(n){
  const e=n.trim();
  if(!e)return"";
  try{
    const t=new URL(RXg(e)), i=t.protocol==="http:"||t.protocol==="https:"?t.protocol:"https:", r=t.host.toLowerCase(), s=BXg(t.pathname);
    return`${i}//${r}${s}`
  }
  catch{
    const t=cP(e);
    return t?`https://${t}`:""
  }
}
var PXg=