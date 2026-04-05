// Module: out-build/external/sentry/core/api.js
// Offset: 75790 (bundle byte offset)
// Size: 1352 bytes

hSe(), gYd="7"
}
});
function _zv(n){
  const e={
    
  };
  return n.forEach(t=>{
    const{
      name:i
    }
    =t, r=e[i];
    r&&!r.isDefaultInstance&&t.isDefaultInstance||(e[i]=t)
  }), Object.values(e)
}
function Wyc(n){
  const e=n.defaultIntegrations||[], t=n.integrations;
  e.forEach(r=>{
    r.isDefaultInstance=!0
  });
  let i;
  if(Array.isArray(t))i=[...e, ...t];
  else if(typeof t=="function"){
    const r=t(e);
    i=Array.isArray(r)?r:[r]
  }
  else i=e;
  return _zv(i)
}
function Czv(n, e){
  const t={
    
  };
  return e.forEach(i=>{
    i&&bYd(n, i, t)
  }), t
}
function fYd(n, e){
  for(const t of e)t?.afterAllSetup&&t.afterAllSetup(n)
}
function bYd(n, e, t){
  if(t[e.name]){
    Lg&&Jo.log(`Integration skipped because it was already installed: ${e.name}`);
    return
  }
  if(t[e.name]=e, Qyc.indexOf(e.name)===-1&&typeof e.setupOnce=="function"&&(e.setupOnce(), Qyc.push(e.name)), e.setup&&typeof e.setup=="function"&&e.setup(n), typeof e.preprocessEvent=="function"){
    const i=e.preprocessEvent.bind(e);
    n.on("preprocessEvent", (r, s)=>i(r, s, n))
  }
  if(typeof e.processEvent=="function"){
    const i=e.processEvent.bind(e), r=Object.assign((s, o)=>i(s, o, n), {
      id:e.name
    });
    n.addEventProcessor(r)
  }
  Lg&&Jo.log(`Integration installed: ${e.name}`)
}
function Z2t(n){
  const e=sm();
  if(!e){
    Lg&&Jo.warn(`Cannot add integration "${n.name}" because no SDK Client is available.`);
    return
  }
  e.addIntegration(n)
}
function Szv(n){
  return n
}
var Qyc, sW=