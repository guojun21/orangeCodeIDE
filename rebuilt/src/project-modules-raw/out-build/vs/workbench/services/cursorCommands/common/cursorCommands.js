// Module: out-build/vs/workbench/services/cursorCommands/common/cursorCommands.js
// Offset: 28507790 (bundle byte offset)
// Size: 790 bytes

Wt(), hMe=xi("cursorCommandsService")
}
});
function $8A(n){
  if(n.configuration)return n.configuration.fsPath;
  if(n.folders.length>0)return n.folders[0].uri.fsPath
}
function llu(n){
  const e=$8A(n);
  return e?RIA(e):n.id
}
async function kie(n, e){
  const t=llu(n), i=await e.userHome();
  return je.joinPath(i, WKl, t)
}
async function q8A(n, e){
  const t=await kie(n, e);
  return je.joinPath(t, hlu)
}
function ulu(n){
  return je.joinPath(n, hlu)
}
async function dlu(n, e){
  const t=await kie(n, e);
  return je.joinPath(t, mlu)
}
function Ryi(n){
  return je.joinPath(n, mlu)
}
async function aqe(n, e){
  const t=await kie(n, e);
  return je.joinPath(t, BAa)
}
async function iif(n, e){
  const t=await kie(n, e);
  return je.joinPath(t, rif)
}
var hlu, mlu, BAa, rif, OJ=