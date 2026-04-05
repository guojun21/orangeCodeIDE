// Module: out-build/vs/workbench/contrib/chat/common/annotations.js
// Offset: 28323850 (bundle byte offset)
// Size: 566 bytes

tg(), Yr(), Yn(), Nme(), scu="http://_vscodecontentref_"
}
});
function ocu(n, e){
  const t=Array.from(n.matchAll(new RegExp(btf+xV`|\p{sc=Han}|=+|\++|-+|[^\s\|\p{sc=Han}|=|\+|\-]+`, "gu"))), i=t.slice(0, e), r=e>=t.length?n.length:i.length?i.at(-1).index+i.at(-1)[0].length:0, s=n.substring(0, r);
  return{
    value:s, returnedWordCount:i.length===0?s.length?1:0:i.length, isFullString:r>=n.length, totalWordCount:t.length
  }
}
function acu(n){
  return ocu(n, Number.MAX_SAFE_INTEGER).returnedWordCount
}
var xV, btf, Ayi=