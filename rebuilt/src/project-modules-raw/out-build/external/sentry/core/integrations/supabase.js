// Module: out-build/external/sentry/core/integrations/supabase.js
// Offset: 127936 (bundle byte offset)
// Size: 2639 bytes

Awc(), ZT(), bte(), sW(), y6(), rW(), US(), h9(), loe(), zZd=["reauthenticate", "signInAnonymously", "signInWithOAuth", "signInWithIdToken", "signInWithOtp", "signInWithPassword", "signInWithSSO", "signOut", "signUp", "verifyOtp"], VZd=["createUser", "deleteUser", "listUsers", "getUserById", "updateUserById", "inviteUserByEmail"], KZd={
  eq:"eq", neq:"neq", gt:"gt", gte:"gte", lt:"lt", lte:"lte", like:"like", "like(all)":"likeAllOf", "like(any)":"likeAnyOf", ilike:"ilike", "ilike(all)":"ilikeAllOf", "ilike(any)":"ilikeAnyOf", is:"is", in:"in", cs:"contains", cd:"containedBy", sr:"rangeGt", nxl:"rangeGte", sl:"rangeLt", nxr:"rangeLte", adj:"rangeAdjacent", ov:"overlaps", fts:"", plfts:"plain", phfts:"phrase", wfts:"websearch", not:"not"
}, Twc=["select", "insert", "upsert", "update", "delete"], c2n=n=>{
  if(!n){
    Lg&&Jo.warn("Supabase integration was not installed because no Supabase client was provided.");
    return
  }
  const e=n.constructor===Function?n:n.constructor;
  oKv(e), sKv(n)
}, YZd="Supabase", ZZd=(n=>({
  setupOnce(){
    c2n(n)
  }, name:YZd
})), GNo=n=>ZZd(n.supabaseClient)
}
});
function uKv(n){
  return uSe(n)&&n.name==="ZodError"&&Array.isArray(n.issues)
}
function dKv(n){
  return{
    ...n, path:"path"in n&&Array.isArray(n.path)?n.path.join("."):void 0, keys:"keys"in n?JSON.stringify(n.keys):void 0, unionErrors:"unionErrors"in n?JSON.stringify(n.unionErrors):void 0
  }
}
function hKv(n){
  return n.map(e=>typeof e=="number"?"<array>":e).join(".")
}
function mKv(n){
  const e=new Set;
  for(const i of n.issues){
    const r=hKv(i.path);
    r.length>0&&e.add(r)
  }
  const t=Array.from(e);
  if(t.length===0){
    let i="variable";
    if(n.issues.length>0){
      const r=n.issues[0];
      r!==void 0&&"expected"in r&&typeof r.expected=="string"&&(i=r.expected)
    }
    return`Failed to validate ${i}`
  }
  return`Failed to validate keys: ${BMn(t.join(", "),100)}`
}
function pKv(n, e=!1, t, i){
  if(!t.exception?.values||!i.originalException||!uKv(i.originalException)||i.originalException.issues.length===0)return t;
  try{
    const s=(e?i.originalException.issues:i.originalException.issues.slice(0, n)).map(dKv);
    return e&&(Array.isArray(i.attachments)||(i.attachments=[]), i.attachments.push({
      filename:"zod_issues.json",data:JSON.stringify({
        issues:s
      })
    })), {
      ...t,exception:{
        ...t.exception,values:[{
          ...t.exception.values[0],value:mKv(i.originalException)
        },...t.exception.values.slice(1)]
      },extra:{
        ...t.extra,"zoderror.issues":s.slice(0,n)
      }
    }
  }
  catch(r){
    return{
      ...t,extra:{
        ...t.extra,"zoderrors sentry integration parse error":{
          message:"an exception was thrown while processing ZodError within applyZodErrorsToEvent()",error:r instanceof Error?`${r.name}: ${r.message}
${r.stack}`:"unknown"
        }
      }
    }
  }
}
var XZd, eXd, tXd, WNo, gKv=