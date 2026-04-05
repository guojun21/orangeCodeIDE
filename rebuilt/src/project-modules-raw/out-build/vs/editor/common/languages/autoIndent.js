// Module: out-build/vs/editor/common/languages/autoIndent.js
// Offset: 805541 (bundle byte offset)
// Size: 1354 bytes

oa(), Xze(), r1c()
}
});
function a1c(n, e){
  return n===" "?e===5||e===6?6:5:4
}
function p4o(n, e){
  return Blh(n)&&!Blh(e)?!0:n===5?!1:Dlh(n)!==Dlh(e)
}
function Dlh(n){
  return n===6||n===5?"space":n
}
function Blh(n){
  return n===4||n===5||n===6
}
function Rlh(n, e, t, i, r){
  if(n.autoClosingOvertype==="never"||!n.autoClosingPairs.autoClosingPairsCloseSingleChar.has(r))return!1;
  for(let s=0, o=t.length;
  s<o;
  s++){
    const a=t[s];
    if(!a.isEmpty())return!1;
    const l=a.getPosition(), u=e.getLineContent(l.lineNumber);
    if(u.charAt(l.column-1)!==r)return!1;
    const m=Kze(r);
    if((l.column>2?u.charCodeAt(l.column-2):0)===92&&m)return!1;
    if(n.autoClosingOvertype==="auto"){
      let g=!1;
      for(let f=0,A=i.length;
      f<A;
      f++){
        const w=i[f];
        if(l.lineNumber===w.startLineNumber&&l.column===w.startColumn){
          g=!0;
          break
        }
      }
      if(!g)return!1
    }
  }
  return!0
}
function rft(n, e, t){
  return t?new d4n(n, e, !0):new D6(n, e, !0)
}
function g4o(n, e, t){
  return t=t||1, xoe.shiftIndent(e, e.length+t, n.tabSize, n.indentSize, n.insertSpaces)
}
function x4n(n, e, t){
  return t=t||1, xoe.unshiftIndent(e, e.length+t, n.tabSize, n.indentSize, n.insertSpaces)
}
function Plh(n, e){
  return Kze(e)?n.autoSurround==="quotes"||n.autoSurround==="languageDefined":n.autoSurround==="brackets"||n.autoSurround==="languageDefined"
}
var Llh, Nlh, Mlh, f4o, c1c, Flh, Olh, Ulh, T4n, $lh, qlh, Hlh, Jlh, b4o, Glh, Wlh, v4o=