// Module: out-build/vs/platform/localAgentRepository/common/localAgentRepository.js
// Offset: 28167181 (bundle byte offset)
// Size: 541 bytes

zr(), ps(), PXg()
}
});
function cva(n){
  try{
    return new URL(n).pathname.slice(1).replace(/\.git$/, "")
  }
  catch{
    return n.split("/").slice(-2).join("/").replace(/\.git$/, "")||n
  }
}
function ckt(n){
  if(oE(n))return ca(n.uri);
  if(zD(n)){
    const e=ca(n.configPath);
    return e.endsWith(yVe)?e.slice(0, -yVe.length):e
  }
  return"Home"
}
function AV(n){
  if(!n)return!1;
  let e;
  return oE(n)?e=n.uri:zD(n)&&(e=n.configPath), !e||e.scheme!==_n.vscodeRemote?!1:!!J3(e.authority)
}
var lva=