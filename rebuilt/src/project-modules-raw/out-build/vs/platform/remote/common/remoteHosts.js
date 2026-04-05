// Module: out-build/vs/platform/remote/common/remoteHosts.js
// Offset: 25253934 (bundle byte offset)
// Size: 737 bytes

zr()
}
});
function Agi(n){
  if(typeof n=="object"&&n!==null&&n.supported!==!0)return n.description
}
function ygi(n){
  return pNe(n)
}
function pNe(n){
  return n.contributes&&n.contributes.localizations?n.contributes.localizations.length>0:!1
}
function SAg(n){
  return n.contributes&&n.contributes.authentication?n.contributes.authentication.length>0:!1
}
function PQl(n, e){
  if(e){
    const t=`onResolveRemoteAuthority:${QZ(e)}`;
    return!!n.activationEvents?.includes(t)
  }
  return!1
}
function KCA(n){
  return n.map(e=>{
    const[t, i]=e.split("@");
    return{
      proposalName:t,version:i?parseInt(i):void 0
    }
  })
}
function YCA(n){
  return n.map(e=>e.split("@")[0])
}
var kAg, EAg, LQl, xAg, mdn, TAg, IAg, $h, zae, MF, DAg, HA=