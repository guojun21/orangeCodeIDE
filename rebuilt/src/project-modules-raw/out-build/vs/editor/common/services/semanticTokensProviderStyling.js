// Module: out-build/vs/editor/common/services/semanticTokensProviderStyling.js
// Offset: 25583197 (bundle byte offset)
// Size: 4518 bytes

tVe(), Io(), jr(), LkA(), Ku(), (function(n){
  n[n.NO_STYLING=2147483647]="NO_STYLING"
})(Wwg||(Wwg={
  
})), jgi=!1, wua=class{
  constructor(e, t, i, r){
    this._legend=e, this._themeService=t, this._languageService=i, this._logService=r, this._hasWarnedOverlappingTokens=!1, this._hasWarnedInvalidLengthTokens=!1, this._hasWarnedInvalidEditStart=!1, this._hashTable=new zwg
  }
  getMetadata(e, t, i){
    const r=this._languageService.languageIdCodec.encodeLanguageId(i), s=this._hashTable.get(e, t, r);
    let o;
    if(s)o=s.metadata, jgi&&this._logService.getLevel()===Ju.Trace&&this._logService.trace(`SemanticTokensProviderStyling [CACHED] ${e} / ${t}: foreground ${pF.getForeground(o)}, fontStyle ${pF.getFontStyle(o).toString(2)}`);
    else{
      let a=this._legend.tokenTypes[e];
      const l=[];
      if(a){
        let u=t;
        for(let m=0;
        u>0&&m<this._legend.tokenModifiers.length;
        m++)u&1&&l.push(this._legend.tokenModifiers[m]),u=u>>1;
        jgi&&u>0&&this._logService.getLevel()===Ju.Trace&&(this._logService.trace(`SemanticTokensProviderStyling: unknown token modifier index: ${t.toString(2)} for legend: ${JSON.stringify(this._legend.tokenModifiers)}`),l.push("not-in-legend"));
        const d=this._themeService.getColorTheme().getTokenStyleMetadata(a,l,i);
        if(typeof d>"u")o=2147483647;
        else{
          if(o=0,typeof d.italic<"u"){
            const m=(d.italic?1:0)<<11;
            o|=m|1
          }
          if(typeof d.bold<"u"){
            const m=(d.bold?2:0)<<11;
            o|=m|2
          }
          if(typeof d.underline<"u"){
            const m=(d.underline?4:0)<<11;
            o|=m|4
          }
          if(typeof d.strikethrough<"u"){
            const m=(d.strikethrough?8:0)<<11;
            o|=m|8
          }
          if(d.foreground){
            const m=d.foreground<<15;
            o|=m|16
          }
          o===0&&(o=2147483647)
        }
      }
      else jgi&&this._logService.getLevel()===Ju.Trace&&this._logService.trace(`SemanticTokensProviderStyling: unknown token type index: ${e} for legend: ${JSON.stringify(this._legend.tokenTypes)}`),o=2147483647,a="not-in-legend";
      this._hashTable.add(e,t,r,o),jgi&&this._logService.getLevel()===Ju.Trace&&this._logService.trace(`SemanticTokensProviderStyling ${e} (${a}) / ${t} (${l.join(" ")}): foreground ${pF.getForeground(o)}, fontStyle ${pF.getFontStyle(o).toString(2)}`)
    }
    return o
  }
  warnOverlappingSemanticTokens(e, t){
    this._hasWarnedOverlappingTokens||(this._hasWarnedOverlappingTokens=!0, this._logService.warn(`Overlapping semantic tokens detected at lineNumber ${e}, column ${t}`))
  }
  warnInvalidLengthSemanticTokens(e, t){
    this._hasWarnedInvalidLengthTokens||(this._hasWarnedInvalidLengthTokens=!0, this._logService.warn(`Semantic token with invalid length detected at lineNumber ${e}, column ${t}`))
  }
  warnInvalidEditStart(e, t, i, r, s){
    this._hasWarnedInvalidEditStart||(this._hasWarnedInvalidEditStart=!0, this._logService.warn(`Invalid semantic tokens edit detected (previousResultId: ${e}, resultId: ${t}) at edit #${i}: The provided start offset ${r} is outside the previous data (length ${s}).`))
  }
}, wua=__decorate([__param(1, bo), __param(2, Jl), __param(3, Rr)], wua), (function(n){
  n[n.DesiredTokensPerArea=400]="DesiredTokensPerArea", n[n.DesiredMaxAreas=1024]="DesiredMaxAreas"
})(Qwg||(Qwg={
  
})), jwg=class{
  constructor(n, e, t, i){
    this.tokenTypeIndex=n, this.tokenModifierSet=e, this.languageId=t, this.metadata=i, this.next=null
  }
}, zwg=class HDt{
  static{
    this._SIZES=[3, 7, 13, 31, 61, 127, 251, 509, 1021, 2039, 4093, 8191, 16381, 32749, 65521, 131071, 262139, 524287, 1048573, 2097143]
  }
  constructor(){
    this._elementsCount=0, this._currentLengthIndex=0, this._currentLength=HDt._SIZES[this._currentLengthIndex], this._growCount=Math.round(this._currentLengthIndex+1<HDt._SIZES.length?2/3*this._currentLength:0), this._elements=[], HDt._nullOutEntries(this._elements, this._currentLength)
  }
  static _nullOutEntries(e, t){
    for(let i=0;
    i<t;
    i++)e[i]=null
  }
  _hash2(e, t){
    return(e<<5)-e+t|0
  }
  _hashFunc(e, t, i){
    return this._hash2(this._hash2(e, t), i)%this._currentLength
  }
  get(e, t, i){
    const r=this._hashFunc(e, t, i);
    let s=this._elements[r];
    for(;
    s;
    ){
      if(s.tokenTypeIndex===e&&s.tokenModifierSet===t&&s.languageId===i)return s;
      s=s.next
    }
    return null
  }
  add(e, t, i, r){
    if(this._elementsCount++, this._growCount!==0&&this._elementsCount>=this._growCount){
      const s=this._elements;
      this._currentLengthIndex++,this._currentLength=HDt._SIZES[this._currentLengthIndex],this._growCount=Math.round(this._currentLengthIndex+1<HDt._SIZES.length?2/3*this._currentLength:0),this._elements=[],HDt._nullOutEntries(this._elements,this._currentLength);
      for(const o of s){
        let a=o;
        for(;
        a;
        ){
          const l=a.next;
          a.next=null,this._add(a),a=l
        }
      }
    }
    this._add(new jwg(e, t, i, r))
  }
  _add(e){
    const t=this._hashFunc(e.tokenTypeIndex, e.tokenModifierSet, e.languageId);
    e.next=this._elements[t], this._elements[t]=e
  }
}
}
}), zgi, Hjl=