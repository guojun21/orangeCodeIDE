// Module: out-build/vs/editor/contrib/inlineCompletions/browser/view/inlineEdits/theme.js
// Offset: 25493301 (bundle byte offset)
// Size: 4024 bytes

_s(), Mbe(), Ht(), Nl(), XP(), _dn(), Sdn=Rn("inlineEdit.originalBackground", rl(R6, .2), _(1367, null), !0), Bjl=Rn("inlineEdit.modifiedBackground", rl(_9, .3), _(1368, null), !0), nkA=Rn("inlineEdit.originalChangedLineBackground", rl(R6, .8), _(1369, null), !0), rwg=Rn("inlineEdit.originalChangedTextBackground", rl(R6, .8), _(1370, null), !0), swg=Rn("inlineEdit.modifiedChangedLineBackground", {
  light:rl(O4n, .7), dark:rl(O4n, .7), hcDark:O4n, hcLight:O4n
}, _(1371, null), !0), owg=Rn("inlineEdit.modifiedChangedTextBackground", rl(_9, .7), _(1372, null), !0), awg=Rn("inlineEdit.gutterIndicator.primaryForeground", Roe, _(1373, null)), ICt=Rn("inlineEdit.gutterIndicator.primaryBorder", LY, _(1374, null)), cwg=Rn("inlineEdit.gutterIndicator.primaryBackground", {
  light:rl(ICt, .5), dark:rl(ICt, .4), hcDark:rl(ICt, .4), hcLight:rl(ICt, .5)
}, _(1375, null)), lwg=Rn("inlineEdit.gutterIndicator.secondaryForeground", M4o, _(1376, null)), Rjl=Rn("inlineEdit.gutterIndicator.secondaryBorder", pft, _(1377, null)), uwg=Rn("inlineEdit.gutterIndicator.secondaryBackground", Rjl, _(1378, null)), dwg=Rn("inlineEdit.gutterIndicator.successfulForeground", Roe, _(1379, null)), Pjl=Rn("inlineEdit.gutterIndicator.successfulBorder", LY, _(1380, null)), hwg=Rn("inlineEdit.gutterIndicator.successfulBackground", Pjl, _(1381, null)), mwg=Rn("inlineEdit.gutterIndicator.background", {
  hcDark:rl("tab.inactiveBackground", .5), hcLight:rl("tab.inactiveBackground", .5), dark:rl("tab.inactiveBackground", .5), light:"#5f5f5f18"
}, _(1382, null)), kdn=Rn("inlineEdit.originalBorder", {
  light:R6, dark:R6, hcDark:R6, hcLight:R6
}, _(1383, null)), Edn=Rn("inlineEdit.modifiedBorder", {
  light:gF(_9, .6), dark:_9, hcDark:_9, hcLight:_9
}, _(1384, null)), pwg=Rn("inlineEdit.tabWillAcceptModifiedBorder", {
  light:gF(Edn, 0), dark:gF(Edn, 0), hcDark:gF(Edn, 0), hcLight:gF(Edn, 0)
}, _(1385, null)), gwg=Rn("inlineEdit.tabWillAcceptOriginalBorder", {
  light:gF(kdn, 0), dark:gF(kdn, 0), hcDark:gF(kdn, 0), hcLight:gF(kdn, 0)
}, _(1386, null))
}
});
function iua(n, e, t){
  n.layoutInfo.read(t), n.value.read(t);
  const i=n.model.read(t);
  if(!i)return 0;
  let r=0;
  n.scrollTop.read(t);
  for(let o=e.startLineNumber;
  o<e.endLineNumberExclusive;
  o++){
    const a=i.getLineMaxColumn(o);
    let l=n.editor.getOffsetForColumn(o, a);
    if(l===-1){
      const u=n.editor.getOption(52).typicalHalfwidthCharacterWidth;
      l=a*u
    }
    r=Math.max(r, l)
  }
  const s=e.mapToLineArray(o=>i.getLineContent(o));
  return r<5&&s.some(o=>o.length>0)&&i.uri.scheme!=="file"&&console.error("unexpected width"), r
}
function ikA(n, e, t){
  return n.layoutInfo.read(t), n.value.read(t), n.model.read(t)?(n.scrollTop.read(t), n.editor.getOffsetForColumn(e.lineNumber, e.column)):0
}
function Ljl(n, e, t, i){
  const r=i.getModel();
  if(!r)return{
    prefixTrim:0, prefixLeftOffset:0
  };
  const s=n.map(m=>m.isSingleLine()?m.startColumn-1:0), o=e.mapToLineArray(m=>$Oo(r.getLineContent(m))), a=t.filter(m=>m!=="").map(m=>$Oo(m)), l=Math.min(...s, ...o, ...a);
  let u;
  if(r.getLineIndentColumn(e.startLineNumber)>=l+1)u=i.getOffsetForColumn(e.startLineNumber, l+1);
  else if(t.length>0)u=fwg(t[0].slice(0, l), i, r);
  else return{
    prefixTrim:0, prefixLeftOffset:0
  };
  return{
    prefixTrim:l, prefixLeftOffset:u
  }
}
function fwg(n, e, t){
  const i=e.getOption(52).typicalHalfwidthCharacterWidth, r=t.getOptions().tabSize*i, s=n.split("	").length-1;
  return(n.length-s)*i+s*r
}
function rkA(n, e){
  const t=[];
  for(const i of n){
    const r=e.mapRange(i.modifiedRange);
    t.push(new zH(i.originalRange, r))
  }
  return t
}
function Njl(...n){
  return n.filter(e=>typeof e=="string").join(" ")
}
function skA(n, e){
  return new Zt(e.lineNumber, e.column+n.start, e.lineNumber, e.column+n.endExclusive)
}
function okA(n, e){
  const t=Zv(n), i=[], r=Cnh(e.mapToLineArray(s=>RtA(t[s-1])), p9);
  return e.forEach(s=>{
    i.push(new cI(skA(new dm(0, r), new ar(s, 1)), ""))
  }), new Fte(i)
}
function Ket(n){
  const e=C5e(void 0, (t, i)=>n.read(t)||i);
  return uF({
    debugName:()=>`${n.debugName}.mapOutFalsy`
  }, t=>{
    if(e.read(t), !!n.read(t))return e
  })
}
function Yet(n){
  return{
    left:Ro(e=>n(e).left), top:Ro(e=>n(e).top), width:Ro(e=>n(e).right-n(e).left), height:Ro(e=>n(e).bottom-n(e).top)
  }
}
var akA, rua, t$e=