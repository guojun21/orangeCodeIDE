// Module: out-build/vs/editor/common/viewModel/minimapTokensColorTracker.js
// Offset: 1377918 (bundle byte offset)
// Size: 1446 bytes

yn(), rt(), Rbh(), Tg(), Kxc=class cGb extends at{
  static{
    this._INSTANCE=null
  }
  static getInstance(){
    return this._INSTANCE||(this._INSTANCE=Cte(new cGb)), this._INSTANCE
  }
  constructor(){
    super(), this._onDidChange=new Qe, this.onDidChange=this._onDidChange.event, this._updateColorMap(), this._register(pT.onDidChange(e=>{
      e.changedColorMap&&this._updateColorMap()
    }))
  }
  _updateColorMap(){
    const e=pT.getColorMap();
    if(!e){
      this._colors=[OVe.Empty],this._backgroundIsLight=!0;
      return
    }
    this._colors=[OVe.Empty];
    for(let i=1;
    i<e.length;
    i++){
      const r=e[i].rgba;
      this._colors[i]=new OVe(r.r,r.g,r.b,Math.round(r.a*255))
    }
    const t=e[2].getRelativeLuminance();
    this._backgroundIsLight=t>=.5, this._onDidChange.fire(void 0)
  }
  getColor(e){
    return(e<1||e>=this._colors.length)&&(e=2), this._colors[e]
  }
  backgroundIsLight(){
    return this._backgroundIsLight
  }
}
}
});
function Yxc(n, e){
  return!(e.options.hideInCommentTokens&&Zxc(n, e)||e.options.hideInStringTokens&&Xxc(n, e))
}
function Zxc(n, e){
  return Lbh(n, e.range, t=>t===1)
}
function Xxc(n, e){
  return Lbh(n, e.range, t=>t===2)
}
function Lbh(n, e, t){
  for(let i=e.startLineNumber;
  i<=e.endLineNumber;
  i++){
    const r=n.tokenization.getLineTokens(i), s=i===e.startLineNumber, o=i===e.endLineNumber;
    let a=s?r.findTokenIndexAtOffset(e.startColumn-1):0;
    for(;
    a<r.getCount()&&!(o&&r.getStartOffset(a)>e.endColumn-1);
    ){
      if(!t(r.getStandardTokenType(a)))return!1;
      a++
    }
  }
  return!0
}
var Nbh, Mbh=