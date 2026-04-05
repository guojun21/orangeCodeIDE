// Module: out-build/vs/base/common/cppUtils/diff/word.js
// Offset: 33812884 (bundle byte offset)
// Size: 2097 bytes

D0u(), WUf(), B0u=/^[a-zA-Z\u{
  C0
}
-\u{
  FF
}
\u{
  D8
}
-\u{
  F6
}
\u{
  F8
}
-\u{
  2C6
}
\u{
  2C8
}
-\u{
  2D7
}
\u{
  2DE
}
-\u{
  2FF
}
\u{
  1E00
}
-\u{
  1EFF
}
]+$/u, R0u=/\S/, nvn=new uDa, nvn.equals=function(n, e){
  return this.options.ignoreCase&&(n=n.toLowerCase(), e=e.toLowerCase()), n===e||this.options.ignoreWhitespace&&!R0u.test(n)&&!R0u.test(e)
}, nvn.tokenize=function(n){
  let e=n.split(/([^\S\r\n]+|[()[\]{
    
  }
  '"\r\n]|\b)/);for(let t=0;t<e.length-1;t++)!e[t+1]&&e[t+2]&&B0u.test(e[t])&&B0u.test(e[t+2])&&(e[t]+=e[t+2],e.splice(t+1,2),t--);return e}}});function Amy(n,e,t){try{const{range:i,text:r}=e;if(i.startLineNumber>n.length+1||i.startLineNumber===n.length+1&&i.startColumn!==1)throw new Error("Start of the range is outside the file.");const{startLineNumber:s,startColumn:o,endLineNumber:a,endColumn:l}=i,d=(n[s-1]??"").substring(0,o-1),m=n[a-1]??"",p=l===1?m:m.substring(l-1);t?.noNeedToMakeSureLinesAreLines===!0?n.splice(s-1,a-s+1,d+r+p):n.splice(s-1,a-s+1,...(d+r+p).split(`
`))}catch(i){throw i}}function zUf(n,e){const t=n.split(`
`);return Amy(t,e,{noNeedToMakeSureLinesAreLines:!0}),t.join(`
`)}function P0u(n,e){if(e===void 0||e===0)return`${VUf(n,0)}`;if(e===1){const t=`${YUf}:1:`;return n.length>1e4?`${t}${VUf(n,0)}`:`${t}${n}`}else throw new Error("Unsupported hash version")}function VUf(n,e){e=KUf(149417,e);for(let t=0,i=n.length;t<i;t++)e=KUf(n.charCodeAt(t),e);return e}function KUf(n,e){return(e<<5)-e+n|0}function L0u(n,e,t){const i=[];let r="",s=!1;for(const u of n)if(u.added)s=!0,r+=u.value;else if(!u.removed)break;const o=s?r.split(`
`).length:0;let a=1,l=1;for(const u of n){const d=u.value.split(`
`),m=a+d.length-1,p=d.length>1?d[d.length-1].length+1:l+u.value.length;if(u.added===!0){const g={startLineNumber:a,startColumn:l,endLineNumber:m,endColumn:p};i.push({startLineNumber:g.startLineNumber+e.startLineNumber-1-(t==="pre-change"?o:0),startColumn:g.startColumn,endLineNumber:g.endLineNumber+e.startLineNumber-1-(t==="pre-change"?o:0),endColumn:g.endColumn}),l=p,a=m}u.removed!==!0&&(l=p,a=m)}return{greenRanges:i,redRanges:[]}}var YUf,Yki=