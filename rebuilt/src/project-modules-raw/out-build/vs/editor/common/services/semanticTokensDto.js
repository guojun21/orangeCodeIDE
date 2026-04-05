// Module: out-build/vs/editor/common/services/semanticTokensDto.js
// Offset: 25573614 (bundle byte offset)
// Size: 1148 bytes

Ql(), _r(), (function(n){
  n[n.Full=1]="Full", n[n.Delta=2]="Delta"
})(Pwg||(Pwg={
  
}))
}
});
function Aua(n){
  return n&&!!n.data
}
function Nwg(n){
  return n&&Array.isArray(n.edits)
}
function Mwg(n, e){
  return n.has(e)
}
function BkA(n, e){
  const t=n.orderedGroups(e);
  return t.length>0?t[0]:[]
}
async function Fwg(n, e, t, i, r){
  const s=BkA(n, e), o=await Promise.all(s.map(async a=>{
    let l, u=null;
    try{
      l=await a.provideDocumentSemanticTokens(e,a===t?i:null,r)
    }
    catch(d){
      u=d,l=null
    }
    return(!l||!Aua(l)&&!Nwg(l))&&(l=null), new Uwg(a, l, u)
  }));
  for(const a of o){
    if(a.error)throw a.error;
    if(a.tokens)return a
  }
  return o.length>0?o[0]:null
}
function RkA(n, e){
  const t=n.orderedGroups(e);
  return t.length>0?t[0]:null
}
function PkA(n, e){
  return n.has(e)
}
function Owg(n, e){
  const t=n.orderedGroups(e);
  return t.length>0?t[0]:[]
}
async function Ojl(n, e, t, i){
  const r=Owg(n, e), s=await Promise.all(r.map(async o=>{
    let a;
    try{
      a=await o.provideDocumentRangeSemanticTokens(e,t,i)
    }
    catch(l){
      JE(l),a=null
    }
    return(!a||!Aua(a))&&(a=null), new $wg(o, a)
  }));
  for(const o of s)if(o.tokens)return o;
  return s.length>0?s[0]:null
}
var Uwg, $wg, qwg=