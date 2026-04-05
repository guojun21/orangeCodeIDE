// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/colorizedBracketPairsDecorationProvider.js
// Offset: 1107201 (bundle byte offset)
// Size: 1984 bytes

yn(), rt(), ts(), az(), Io(), Mph=class extends at{
  constructor(n){
    super(), this.textModel=n, this.colorProvider=new $Ec, this.onDidChangeEmitter=new Qe, this.onDidChange=this.onDidChangeEmitter.event, this.colorizationOptions=n.getOptions().bracketPairColorizationOptions, this._register(n.bracketPairs.onDidChange(e=>{
      this.onDidChangeEmitter.fire()
    }))
  }
  handleDidChangeOptions(n){
    this.colorizationOptions=this.textModel.getOptions().bracketPairColorizationOptions
  }
  getDecorationsInRange(n, e, t, i){
    return i?[]:e===void 0?[]:this.colorizationOptions.enabled?this.textModel.bracketPairs.getBracketsInRange(n, !0).map(s=>({
      id:`bracket${s.range.toString()}-${s.nestingLevel}`,options:{
        description:"BracketPairColorization",inlineClassName:this.colorProvider.getInlineClassName(s,this.colorizationOptions.independentColorPoolPerBracketType)
      },ownerId:0,range:s.range
    })).toArray():[]
  }
  getAllDecorations(n, e){
    return n===void 0?[]:this.colorizationOptions.enabled?this.getDecorationsInRange(new Zt(1, 1, this.textModel.getLineCount(), 1), n, e):[]
  }
}, $Ec=class{
  constructor(){
    this.unexpectedClosingBracketClassName="unexpected-closing-bracket"
  }
  getInlineClassName(n, e){
    return n.isInvalid?this.unexpectedClosingBracketClassName:this.getInlineClassNameOfLevel(e?n.nestingLevelOfEqualBracketType:n.nestingLevel)
  }
  getInlineClassNameOfLevel(n){
    return`bracket-highlighting-${n%30}`
  }
}, HI((n, e)=>{
  const t=[bEc, vEc, AEc, yEc, wEc, _Ec], i=new $Ec;
  e.addRule(`.monaco-editor .${i.unexpectedClosingBracketClassName} { color: ${n.getColor(Mmh)}; }`);
  const r=t.map(s=>n.getColor(s)).filter(s=>!!s).filter(s=>!s.isTransparent());
  for(let s=0;
  s<30;
  s++){
    const o=r[s%r.length];
    e.addRule(`.monaco-editor .${i.getInlineClassNameOfLevel(s)} { color: ${o}; }`)
  }
})
}
});
function hOo(n){
  return n.replace(/\n/g, "\\n").replace(/\r/g, "\\r")
}
function UoA(n, e){
  return n===null||n.length===0?e:new Fph(n, e).compress()
}
var BSe, Fph, Oph=