// Module: out-build/external/sentry/core/utils/debug-logger.js
// Offset: 13748 (bundle byte offset)
// Size: 1269 bytes

gbe(), ZT(), c3(), F2t=["debug", "info", "warn", "error", "log", "assert", "trace"], XVd="Sentry Logger ", O2t={
  
}, Jo={
  enable:sjv, disable:ojv, isEnabled:ZVd, log:ajv, warn:cjv, error:ljv
}
}
});
function JLo(...n){
  const e=n.sort((t, i)=>t[0]-i[0]).map(t=>t[1]);
  return(t, i=0, r=0)=>{
    const s=[], o=t.split(`
`);
    for(let a=i;
    a<o.length;
    a++){
      let l=o[a];
      l.length>1024&&(l=l.slice(0,1024));
      const u=xAc.test(l)?l.replace(xAc,"$1"):l;
      if(!u.match(/\S*Error: /)){
        for(const d of e){
          const m=d(u);
          if(m){
            s.push(m);
            break
          }
        }
        if(s.length>=EAc+r)break
      }
    }
    return kAc(s.slice(r))
  }
}
function SAc(n){
  return Array.isArray(n)?JLo(...n):n
}
function kAc(n){
  if(!n.length)return[];
  const e=Array.from(n);
  return/sentryWrapped/.test(GLo(e).function||"")&&e.pop(), e.reverse(), TAc.test(GLo(e).function||"")&&(e.pop(), TAc.test(GLo(e).function||"")&&e.pop()), e.slice(0, EAc).map(t=>({
    ...t, filename:t.filename||GLo(e).filename, function:t.function||M$
  }))
}
function GLo(n){
  return n[n.length-1]||{
    
  }
}
function fY(n){
  try{
    return!n||typeof n!="function"?QLo:n.name||QLo
  }
  catch{
    return QLo
  }
}
function WLo(n){
  const e=n.exception;
  if(e){
    const t=[];
    try{
      return e.values.forEach(i=>{
        i.stacktrace.frames&&t.push(...i.stacktrace.frames)
      }),t
    }
    catch{
      return
    }
  }
}
var EAc, M$, xAc, TAc, QLo, bpt=