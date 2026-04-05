// Module: out-build/vs/editor/contrib/inlineCompletions/browser/model/inlineEdit.js
// Offset: 25334808 (bundle byte offset)
// Size: 878 bytes

fyg=class{
  constructor(n, e, t){
    this.edit=n, this.commands=e, this.inlineCompletion=t
  }
  get range(){
    return this.edit.range
  }
  get text(){
    return this.edit.text
  }
  equals(n){
    return this.edit.equals(n.edit)&&this.inlineCompletion===n.inlineCompletion
  }
}
}
});
function sjl(n, e, t){
  if(e.length===1)return[];
  const i=e[0], r=e.slice(1), s=t.range.getStartPosition(), o=t.range.getEndPosition(), a=n.getValueInRange(Zt.fromPositions(i, o)), l=qAg(i, s);
  if(l.lineNumber<1)return Gc(new _m(`positionWithinTextEdit line number should be bigger than 0.
			Invalid subtraction between ${i.toString()} and ${s.toString()}`)), [];
  const u=dSA(t.text, l);
  return r.map(d=>{
    const m=uSA(qAg(d, s), o), p=n.getValueInRange(Zt.fromPositions(d, m)), g=voe(a, p), f=Zt.fromPositions(d, d.delta(0, g));
    return new cI(f, u)
  })
}
var $la, e$e, byg, LSA=