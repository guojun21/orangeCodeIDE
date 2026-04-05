// Module: out-build/vs/platform/reactivestorage/browser/stateMigrations.js
// Offset: 4151862 (bundle byte offset)
// Size: 801 bytes

(function(n){
  n[n.array=0]="array"
})(lae||(lae={
  
}))
}
});
function uvA(n){
  dvA(n), hvA(n)
}
function dvA(n){
  let e;
  try{
    const t=n.get(Hi), i=t.get("cursor/approvedProjectMcpServers", 1);
    if(!i)return;
    const r=JSON.parse(i);
    if(!Array.isArray(r))return;
    e=hm(t, "approvedProjectMcpServers");
    const s=e.get()||[], o=[...new Set([...s, ...r])];
    e.set(o, void 0), t.remove("cursor/approvedProjectMcpServers", 1)
  }
  catch{
    
  }
  finally{
    e?.dispose()
  }
}
function hvA(n){
  let e;
  try{
    const t=n.get(Hi), i=t.get("cursor/defaultAppLayout", -1);
    if(!i)return;
    i===N0.Agent&&(e=hm(t, "unifiedAppLayout"), e.get()!==N0.Agent&&e.set(N0.Agent, void 0)), t.remove("cursor/defaultAppLayout", -1), t.remove("cursor/hasSetInitialAppLayout", -1)
  }
  catch{
    
  }
  finally{
    e?.dispose()
  }
}
var mvA=