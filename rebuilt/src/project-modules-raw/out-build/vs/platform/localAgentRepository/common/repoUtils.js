// Module: out-build/vs/platform/localAgentRepository/common/repoUtils.js
// Offset: 28166549 (bundle byte offset)
// Size: 632 bytes

Ae({
  "out-build/vs/platform/localAgentRepository/common/repoUtils.js"(){
    "use strict"
  }
});
function LXg(n){
  if(n.scheme==="vscode-remote"&&n.authority.startsWith("ssh-remote+")){
    const e=n.path, t=n.authority.slice(11);
    try{
      const i=JSON.parse(t);
      if(i.hostName)return`[${i.hostName}] ${e}`
    }
    catch{
      
    }
    return`[SSH] ${e}`
  }
  return n.fsPath
}
function h9A(n){
  if(oE(n))return LXg(n.uri);
  if(zD(n))return LXg(n.configPath)
}
function m9A(n){
  if(oE(n))return n.uri.path||n.uri.fsPath;
  if(zD(n))return n.configPath.path||n.configPath.fsPath
}
function HAi(n){
  let e;
  if(oE(n)?e=n.uri:zD(n)&&(e=n.configPath), e&&e.scheme===_n.vscodeRemote)return e.authority
}
var Sce=