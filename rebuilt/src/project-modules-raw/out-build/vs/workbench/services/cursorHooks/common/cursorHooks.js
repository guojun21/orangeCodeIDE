// Module: out-build/vs/workbench/services/cursorHooks/common/cursorHooks.js
// Offset: 30363404 (bundle byte offset)
// Size: 1065 bytes

Wt(), lX=xi("cursorHooksService"), Znt=class extends Error{
  constructor(n, e){
    const t=e?`File reading was blocked by a security hook: ${e}`:`File reading was blocked by a security hook: ${n}. Do not attempt to work around this restriction using alternative methods or commands.`;
    super(t), this.name="FileReadBlockedByHookError", this.filePath=n, this.userMessage=e
  }
}
}
});
async function smu(n, e, t){
  const i=[], r=new Set;
  if(e)for(const s of e)s.name&&!r.has(s.name)&&(r.add(s.name), i.push({
    type:"rule", file_path:s.name
  }));
  try{
    const s=n.length>0?await t.getRulesForFiles(n):[];
    for(const o of s)o.filename&&!r.has(o.filename)&&(r.add(o.filename), i.push({
      type:"rule",file_path:o.filename
    }))
  }
  catch(s){
    console.error("[hooks] error fetching auto-attached rules", s)
  }
  try{
    const s=await t.getGlobalRules();
    for(const o of s)o.filename&&!r.has(o.filename)&&(r.add(o.filename), i.push({
      type:"rule",file_path:o.filename
    }))
  }
  catch(s){
    console.error("[hooks] error fetching global rules", s)
  }
  return i
}
var omu=