// Module: out-build/vs/platform/extensionManagement/common/implicitActivationEvents.js
// Offset: 30150474 (bundle byte offset)
// Size: 2345 bytes

_s(), HA(), RCf=class{
  constructor(){
    this._generators=new Map, this._cache=new WeakMap
  }
  register(n, e){
    this._generators.set(n, e)
  }
  readActivationEvents(n){
    return this._cache.has(n)||this._cache.set(n, this._readActivationEvents(n)), this._cache.get(n)
  }
  createActivationEventsMap(n){
    const e=Object.create(null);
    for(const t of n){
      const i=this.readActivationEvents(t);
      i.length>0&&(e[$h.toKey(t.identifier)]=i)
    }
    return e
  }
  _readActivationEvents(n){
    if(typeof n.main>"u"&&typeof n.browser>"u")return[];
    const e=Array.isArray(n.activationEvents)?n.activationEvents.slice(0):[];
    for(let t=0;
    t<e.length;
    t++)e[t]==="onUri"&&(e[t]=`onUri:${$h.toKey(n.identifier)}`);
    if(!n.contributes)return e;
    for(const t in n.contributes){
      const i=this._generators.get(t);
      if(!i)continue;
      const r=n.contributes[t],s=Array.isArray(r)?r:[r];
      try{
        i(s,e)
      }
      catch(o){
        Gc(o)
      }
    }
    return e
  }
}, Ukt=new RCf
}
});
function PCf(n){
  const e=new MF;
  for(const t of n)e.set(t.identifier, t);
  return e
}
function g8(n, e){
  return(e==="control"||e==="cursor"||e==="cursorNoDeps")&&!n.isBuiltin||!n.enabledApiProposals?!1:n.enabledApiProposals.includes(e)
}
function xey(n, e){
  if(!g8(n, e))throw new Error(`Extension '${n.identifier.value}' CANNOT use API proposal: ${e}.
Its package.json#enabledApiProposals-property declares: ${n.enabledApiProposals?.join(", ")??"[]"} but NOT ${e}.
 The missing proposal MUST be added and you must start in extension development mode or use the following command line switch: --enable-proposed-api ${n.identifier.value}. Note that the cursor and control proposals are only available for built-in extensions`)
}
function fMe(n){
  return{
    type:n.isBuiltin?0:1, isBuiltin:n.isBuiltin||n.isUserBuiltin, identifier:{
      id:CU(n.publisher,n.name),uuid:n.uuid
    }, manifest:n, location:n.extensionLocation, targetPlatform:n.targetPlatform, validations:[], isValid:!0, preRelease:n.preRelease, publisherDisplayName:n.publisherDisplayName
  }
}
function Vnt(n, e){
  const t=xce(n.manifest.publisher, n.manifest.name);
  return{
    id:t, identifier:new $h(t), isBuiltin:n.type===0, isUserBuiltin:n.type===1&&n.isBuiltin, isUnderDevelopment:!!e, extensionLocation:n.location, uuid:n.identifier.uuid, targetPlatform:n.targetPlatform, publisherDisplayName:n.publisherDisplayName, preRelease:n.preRelease, ...n.manifest
  }
}
var Tey, Uhu, su, LCf, $kt, NCf, MCf, FCf, _u=