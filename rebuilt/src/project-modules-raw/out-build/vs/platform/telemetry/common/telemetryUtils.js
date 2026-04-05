// Module: out-build/vs/platform/telemetry/common/telemetryUtils.js
// Offset: 28245382 (bundle byte offset)
// Size: 2760 bytes

np(), Js(), Ht(), zAe(), gef(), Pa(), X$e=class{
  constructor(n){
    this.value=n, this.isTrustedTelemetryValue=!0
  }
}, vef=class{
  constructor(){
    this.telemetryLevel=0, this.sessionId="someValue.sessionId", this.machineId="someValue.machineId", this.macMachineId="someValue.macMachineId", this.sqmId="someValue.sqmId", this.devDeviceId="someValue.devDeviceId", this.firstSessionDate="someValue.firstSessionDate", this.sendErrorTelemetry=!1
  }
  registerAuthId(){
    
  }
  publicLog(){
    
  }
  publicLog2(){
    
  }
  publicLogError(){
    
  }
  publicLogError2(){
    
  }
  publicLogCapture(){
    
  }
  setExperimentProperty(){
    
  }
}, Aef=new vef, tpn="telemetry", Bva={
  id:tpn, name:_(2259, null)
}, yef=new Set(["ssh-remote", "dev-container", "attached-container", "wsl", "tunnel", "codespaces", "amlext"])
}
});
function ic(n, e){
  return n.uuid&&e.uuid?n.uuid===e.uuid:n.id===e.id?!0:Tbe(n.id, e.id)===0
}
function xau(n){
  const e=Eef.exec(n);
  return e&&e[1]?[XAi(e[1]), e[2]]:[XAi(n), void 0]
}
function xce(n, e){
  return`${n}.${e}`
}
function XAi(n){
  return n.toLowerCase()
}
function CU(n, e){
  return XAi(xce(n??LQl, e))
}
function wef(n, e){
  const t=[], i=r=>{
    for(const s of t)if(s.some(o=>ic(e(o), e(r))))return s;
    return null
  };
  for(const r of n){
    const s=i(r);
    s?s.push(r):t.push([r])
  }
  return t
}
function _ef(n){
  return{
    id:n.identifier.id, name:n.manifest.name, galleryId:null, publisherId:n.publisherId, publisherName:n.manifest.publisher, publisherDisplayName:n.publisherDisplayName, dependencies:n.manifest.extensionDependencies&&n.manifest.extensionDependencies.length>0
  }
}
function Rva(n){
  return{
    id:new X$e(n.identifier.id), name:new X$e(n.name), extensionVersion:n.version, galleryId:n.identifier.uuid, publisherId:n.publisherId, publisherName:n.publisher, publisherDisplayName:n.publisherDisplayName, isPreReleaseVersion:n.properties.isPreReleaseVersion, dependencies:!!(n.properties.dependencies&&n.properties.dependencies.length>0), isSigned:n.isSigned, ...n.telemetryData
  }
}
function Pva(n, e){
  const t=[], i=e.manifest.extensionDependencies?.slice(0)??[];
  for(;
  i.length;
  ){
    const r=i.shift();
    if(r&&t.every(s=>!ic(s.identifier, {
      id:r
    }))){
      const s=n.filter(o=>ic(o.identifier,{
        id:r
      }));
      s.length===1&&(t.push(s[0]),i.push(...s[0].manifest.extensionDependencies?.slice(0)??[]))
    }
  }
  return t
}
async function J9A(n, e){
  if(!xv)return!1;
  let t;
  try{
    t=(await n.readFile(je.file("/etc/os-release"))).value.toString()
  }
  catch{
    try{
      t=(await n.readFile(je.file("/usr/lib/os-release"))).value.toString()
    }
    catch(r){
      e.debug("Error while getting the os-release file.",ov(r))
    }
  }
  return!!t&&(t.match(/^ID=([^\u001b\r\n]*)/m)||[])[1]==="alpine"
}
async function Cef(n, e){
  const t=await J9A(n, e), i=vJg(t?"alpine":kH, r2o);
  return e.debug("ComputeTargetPlatform:", i), i
}
function Tau(n, e){
  return e.some(t=>Qo(t)?Tbe(n.id.split(".")[0], t)===0:ic(n, t))
}
var Sef, kef, Eef, xef, Xk=