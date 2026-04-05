// Module: out-build/vs/workbench/services/ai/browser/utils.js
// Offset: 28035311 (bundle byte offset)
// Size: 1440 bytes

qp(), Tme(), zr(), Hl(), Rou=n=>n.range?new WB({
  relativeWorkspacePath:n.relativeWorkspacePath, contents:n.contents, range:{
    startPosition:{
      line:Of(n.range.startLineNumber),column:Of(n.range.startColumn)
    }, endPosition:{
      line:Of(n.range.endLineNumber),column:Of(n.range.endColumn)
    }
  }
}):new WB({
  relativeWorkspacePath:n.relativeWorkspacePath, contents:n.contents
})
}
});
function UOA(n, e){
  return`${n??"no-team"}|${e??"no-workspace"}`
}
function Pou(n, e){
  const t=[], i=new Set, r=o=>Array.isArray(o.sources)&&o.sources.length>0?o.sources:[], s=o=>{
    const a=r(o);
    return a.includes("project")?"project":a.includes("team")?"team":(a.includes("user"), "user")
  };
  for(const o of n){
    const a=new iO(o.plugin), l=sM(a);
    if(i.has(l.id))continue;
    i.add(l.id);
    let u=s(o);
    const d=new Set(r(o));
    if(u!=="team"&&e.size>0){
      const m=a.name??l.displayName,p=a.marketplace?.name;
      (e.has(m)||p&&e.has(`${p}/${m}`))&&(u="project",d.add("project"))
    }
    t.push({
      plugin:l,source:u,sources:Array.from(d)
    })
  }
  return t
}
async function $OA(n){
  const t=[...(await n.listMarketplacePlugins({
    
  })).plugins].map(sM);
  try{
    const i=await n.listMarketplaces({
      
    }), r=await Promise.all(i.marketplaces.map(async o=>[...(await n.listMarketplacePlugins({
      marketplaceId:o.id
    })).plugins].map(sM))), s=new Map;
    for(const o of t)s.set(o.id, o);
    for(const o of r)for(const a of o)s.set(a.id, a);
    return Array.from(s.values())
  }
  catch{
    return t
  }
}
var uie, $mn, oYg, Jba, Ime=