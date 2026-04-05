// Module: out-build/vs/workbench/contrib/appLayout/browser/agentLayoutService.js
// Offset: 27464319 (bundle byte offset)
// Size: 1049 bytes

Wt(), sP=xi("agentLayoutService")
}
});
function qHg(n){
  return typeof n.parentId=="number"
}
function Xiu(n){
  return!!n.workspaceUri
}
function I2A(n){
  return!!n.folderUri
}
function D2A(n){
  return!!n.fileUri
}
function R$e(n){
  const e=Nq(n), t=n.getValue("window.menuBarVisibility");
  return t==="default"||e&&t==="compact"||Fs&&kw?"classic":t
}
function P$e(n, e){
  return!0
}
function Nq(n, e){
  return e||(e=vfa(n)), e==="native"
}
function vfa(n){
  if(Eu)return"custom";
  const e=n.getValue("window");
  if(e){
    if(Fs&&e.nativeTabs===!0||Fs&&e.nativeFullScreen===!1)return"native";
    const r=e.titleBarStyle;
    if(r==="native"||r==="custom")return r
  }
  return"custom"
}
function Afa(n){
  if(Eu||Fs||vfa(n)==="native")return"native";
  const t=n.getValue("window")?.controlsStyle;
  return t==="custom"||t==="hidden"?t:"native"
}
function yfa(n){
  if(Eu||Nq(n))return!1;
  if(!Fs){
    const e=Afa(n);
    if(e==="custom"||e==="hidden")return!1
  }
  return!0
}
function B2A(n=0){
  return Math.pow(1.2, n)
}
var Tvi, HHg, JHg, GHg, eru, tru, wfa, bU=