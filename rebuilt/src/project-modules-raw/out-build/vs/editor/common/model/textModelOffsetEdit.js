// Module: out-build/vs/editor/common/model/textModelOffsetEdit.js
// Offset: 25313429 (bundle byte offset)
// Size: 1470 bytes

nI(), ts(), Y1e(), $I(), Qet=class{
  constructor(){
    
  }
  static asEditOperations(n, e){
    const t=[];
    for(const i of n.edits){
      const r=Zt.fromPositions(e.getPositionAt(i.replaceRange.start),e.getPositionAt(i.replaceRange.start+i.replaceRange.length));
      t.push(zb.replace(r,i.newText))
    }
    return t
  }
  static fromContentChanges(n){
    const e=n.map(i=>new E2(dm.ofStartAndLength(i.rangeOffset, i.rangeLength), i.text));
    return e.reverse(), new Vae(e)
  }
  static fromLineRangeMapping(n, e, t){
    const i=[];
    for(const r of t)for(const s of r.innerChanges??[]){
      const o=e.getValueInRange(s.modifiedRange),a=n.getOffsetAt(s.originalRange.getStartPosition()),l=n.getOffsetAt(s.originalRange.getEndPosition()),u=new dm(a,l);
      i.push(new E2(u,o))
    }
    return new Vae(i)
  }
}
}
});
function _SA(n, e){
  const t=new xEc, i=new PEc(t, u=>e.getLanguageConfiguration(u)), r=new BEc(new oyg([n]), i), s=MEc(r, [], void 0, !0);
  let o="";
  const a=n.getLineContent();
  function l(u, d){
    if(u.kind===2)if(l(u.openingBracket, d), d=$B(d, u.openingBracket.length), u.child&&(l(u.child, d), d=$B(d, u.child.length)), u.closingBracket)l(u.closingBracket, d), d=$B(d, u.closingBracket.length);
    else{
      const p=i.getSingleLanguageBracketTokens(u.openingBracket.languageId).findClosingTokenText(u.openingBracket.bracketIds);
      o+=p
    }
    else if(u.kind!==3){
      if(u.kind===0||u.kind===1)o+=a.substring(d,$B(d,u.length));
      else if(u.kind===4)for(const m of u.children)l(m,d),d=$B(d,m.length)
    }
  }
  return l(s, vW), o
}
var oyg, CSA=