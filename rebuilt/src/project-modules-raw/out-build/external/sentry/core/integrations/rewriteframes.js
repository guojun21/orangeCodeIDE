// Module: out-build/external/sentry/core/integrations/rewriteframes.js
// Offset: 123839 (bundle byte offset)
// Size: 4097 bytes

sW(), WZd(), c3(), QZd="RewriteFrames", xwc=(n={
  
})=>{
  const e=n.root, t=n.prefix||"app:///", i="window"in Ev&&!!Ev.window, r=n.iteratee||tKv({
    isBrowser:i, root:e, prefix:t
  });
  function s(a){
    try{
      return{
        ...a,exception:{
          ...a.exception,values:a.exception.values.map(l=>({
            ...l,...l.stacktrace&&{
              stacktrace:o(l.stacktrace)
            }
          }))
        }
      }
    }
    catch{
      return a
    }
  }
  function o(a){
    return{
      ...a,frames:a?.frames?.map(l=>r(l))
    }
  }
  return{
    name:QZd, processEvent(a){
      let l=a;
      return a.exception&&Array.isArray(a.exception.values)&&(l=s(l)),l
    }
  }
}
}
});
function HNo(n){
  try{
    n.__SENTRY_INSTRUMENTED__=!0
  }
  catch{
    
  }
}
function JNo(n){
  try{
    return n.__SENTRY_INSTRUMENTED__
  }
  catch{
    return!1
  }
}
function iKv(n, e={
  
}){
  switch(n){
    case"GET":return"select";
    case"POST":return e.Prefer?.includes("resolution=")?"upsert":"insert";
    case"PATCH":return"update";
    case"DELETE":return"delete";
    default:return"<unknown-op>"
  }
}
function rKv(n, e){
  if(e===""||e==="*")return"select(*)";
  if(n==="select")return`select(${e})`;
  if(n==="or"||n.endsWith(".or"))return`${n}${e}`;
  const[t, ...i]=e.split(".");
  let r;
  return t?.startsWith("fts")?r="textSearch":t?.startsWith("plfts")?r="textSearch[plain]":t?.startsWith("phfts")?r="textSearch[phrase]":t?.startsWith("wfts")?r="textSearch[websearch]":r=t&&KZd[t]||"filter", `${r}(${n}, ${i.join(".")})`
}
function jZd(n, e=!1){
  return new Proxy(n, {
    apply(t, i, r){
      return X3e({
        name:`auth ${e?"(admin) ":""}${n.name}`,attributes:{
          [w1]:"auto.db.supabase",[HE]:"db","db.system":"postgresql","db.operation":`auth.${e?"admin.":""}${n.name}`
        }
      },s=>Reflect.apply(t,i,r).then(o=>(o&&typeof o=="object"&&"error"in o&&o.error?(s.setStatus({
        code:nE
      }),Sw(o.error,{
        mechanism:{
          handled:!1,type:"auto.db.supabase.auth"
        }
      })):s.setStatus({
        code:qMn
      }),s.end(),o)).catch(o=>{
        throw s.setStatus({
          code:nE
        }),s.end(),Sw(o,{
          mechanism:{
            handled:!1,type:"auto.db.supabase.auth"
          }
        }),o
      }).then(...r))
    }
  })
}
function sKv(n){
  const e=n.auth;
  if(!(!e||JNo(n.auth))){
    for(const t of zZd){
      const i=e[t];
      i&&typeof n.auth[t]=="function"&&(n.auth[t]=jZd(i))
    }
    for(const t of VZd){
      const i=e.admin[t];
      i&&typeof n.auth.admin[t]=="function"&&(n.auth.admin[t]=jZd(i,!0))
    }
    HNo(n.auth)
  }
}
function oKv(n){
  JNo(n.prototype.from)||(n.prototype.from=new Proxy(n.prototype.from, {
    apply(e, t, i){
      const r=Reflect.apply(e,t,i),s=r.constructor;
      return cKv(s),r
    }
  }), HNo(n.prototype.from))
}
function aKv(n){
  JNo(n.prototype.then)||(n.prototype.then=new Proxy(n.prototype.then, {
    apply(e, t, i){
      const r=Twc,s=t,o=iKv(s.method,s.headers);
      if(!r.includes(o)||!s?.url?.pathname||typeof s.url.pathname!="string")return Reflect.apply(e,t,i);
      const a=s.url.pathname.split("/"),l=a.length>0?a[a.length-1]:"",u=[];
      for(const[g,f]of s.url.searchParams.entries())u.push(rKv(g,f));
      const d=Object.create(null);
      if(bY(s.body))for(const[g,f]of Object.entries(s.body))d[g]=f;
      const m=`${o==="select"?"":`${
        o
      }
      ${
        d?"(...) ":""
      }
      `}${u.join(" ")} from(${l})`,p={
        "db.table":l,"db.schema":s.schema,"db.url":s.url.origin,"db.sdk":s.headers["X-Client-Info"],"db.system":"postgresql","db.operation":o,[w1]:"auto.db.supabase",[HE]:"db"
      };
      return u.length&&(p["db.query"]=u),Object.keys(d).length&&(p["db.body"]=d),X3e({
        name:m,attributes:p
      },g=>Reflect.apply(e,t,[]).then(f=>{
        if(g&&(f&&typeof f=="object"&&"status"in f&&Spt(g,f.status||500),g.end()),f.error){
          const C=new Error(f.error.message);
          f.error.code&&(C.code=f.error.code),f.error.details&&(C.details=f.error.details);
          const x={
            
          };
          u.length&&(x.query=u),Object.keys(d).length&&(x.body=d),Sw(C,I=>(I.addEventProcessor(B=>(nW(B,{
            handled:!1,type:"auto.db.supabase.postgres"
          }),B)),I.setContext("supabase",x),I))
        }
        const A={
          type:"supabase",category:`db.${o}`,message:m
        },w={
          
        };
        return u.length&&(w.query=u),Object.keys(d).length&&(w.body=d),Object.keys(w).length&&(A.data=w),w6(A),f
      },f=>{
        throw g&&(Spt(g,500),g.end()),f
      }).then(...i))
    }
  }), HNo(n.prototype.then))
}
function cKv(n){
  for(const e of Twc)JNo(n.prototype[e])||(n.prototype[e]=new Proxy(n.prototype[e], {
    apply(t, i, r){
      const s=Reflect.apply(t,i,r),o=s.constructor;
      return Lg&&Jo.log(`Instrumenting ${e} operation's PostgRESTFilterBuilder`),aKv(o),s
    }
  }), HNo(n.prototype[e]))
}
var zZd, VZd, KZd, Twc, c2n, YZd, ZZd, GNo, lKv=