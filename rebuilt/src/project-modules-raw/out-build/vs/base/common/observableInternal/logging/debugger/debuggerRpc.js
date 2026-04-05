// Module: out-build/vs/base/common/observableInternal/logging/debugger/debuggerRpc.js
// Offset: 511434 (bundle byte offset)
// Size: 759 bytes

niA()
}
});
function doh(n, e){
  const t=n.split(`
`);
  let i=-1;
  for(const r of t.slice(1)){
    if(i++, e&&e.test(r))continue;
    const s=oiA(r);
    if(s)return s
  }
}
function oiA(n){
  const e=n.match(/\((.*):(\d+):(\d+)\)/);
  if(e)return{
    fileName:e[1], line:parseInt(e[2]), column:parseInt(e[3]), id:n
  };
  const t=n.match(/at ([^\(\)]*):(\d+):(\d+)/);
  if(t)return{
    fileName:t[1], line:parseInt(t[2]), column:parseInt(t[3]), id:n
  }
}
function hoh(n, e){
  for(const t in e)n[t]&&typeof n[t]=="object"&&e[t]&&typeof e[t]=="object"?hoh(n[t], e[t]):n[t]=e[t]
}
function moh(n, e){
  for(const t in e)e[t]===null?delete n[t]:n[t]&&typeof n[t]=="object"&&e[t]&&typeof e[t]=="object"?moh(n[t], e[t]):n[t]=e[t]
}
var poh, aiA=