// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsImpl.js
// Offset: 1095434 (bundle byte offset)
// Size: 11767 bytes

Vs(), yn(), rt(), ts(), u4n(), e4o(), NoA(), Nph=class extends at{
  get canBuildAST(){
    return this.textModel.getValueLength()<=5e6
  }
  constructor(n, e){
    super(), this.textModel=n, this.languageConfigurationService=e, this.bracketPairsTree=this._register(new uo), this.onDidChangeEmitter=new Qe, this.onDidChange=this.onDidChangeEmitter.event, this.bracketsRequested=!1
  }
  handleLanguageConfigurationServiceChange(n){
    (!n.languageId||this.bracketPairsTree.value?.object.didLanguageChange(n.languageId))&&(this.bracketPairsTree.clear(), this.updateBracketPairsTree())
  }
  handleDidChangeOptions(n){
    this.bracketPairsTree.clear(), this.updateBracketPairsTree()
  }
  handleDidChangeLanguage(n){
    this.bracketPairsTree.clear(), this.updateBracketPairsTree()
  }
  handleDidChangeContent(n){
    this.bracketPairsTree.value?.object.handleContentChanged(n)
  }
  handleDidChangeBackgroundTokenizationState(){
    this.bracketPairsTree.value?.object.handleDidChangeBackgroundTokenizationState()
  }
  handleDidChangeTokens(n){
    this.bracketPairsTree.value?.object.handleDidChangeTokens(n)
  }
  updateBracketPairsTree(){
    if(this.bracketsRequested&&this.canBuildAST){
      if(!this.bracketPairsTree.value){
        const n=new Ut;
        this.bracketPairsTree.value=MoA(n.add(new Pph(this.textModel,e=>this.languageConfigurationService.getLanguageConfiguration(e))),n),n.add(this.bracketPairsTree.value.object.onDidChange(e=>this.onDidChangeEmitter.fire(e))),this.onDidChangeEmitter.fire()
      }
    }
    else this.bracketPairsTree.value&&(this.bracketPairsTree.clear(), this.onDidChangeEmitter.fire())
  }
  getBracketPairsInRange(n){
    return this.bracketsRequested=!0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getBracketPairsInRange(n, !1)||DFt.empty
  }
  getBracketPairsInRangeWithMinIndentation(n){
    return this.bracketsRequested=!0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getBracketPairsInRange(n, !0)||DFt.empty
  }
  getBracketsInRange(n, e=!1){
    return this.bracketsRequested=!0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getBracketsInRange(n, e)||DFt.empty
  }
  findMatchingBracketUp(n, e, t){
    const i=this.textModel.validatePosition(e), r=this.textModel.getLanguageIdAtPosition(i.lineNumber, i.column);
    if(this.canBuildAST){
      const s=this.languageConfigurationService.getLanguageConfiguration(r).bracketsNew.getClosingBracketInfo(n);
      if(!s)return null;
      const o=this.getBracketPairsInRange(Zt.fromPositions(e,e)).findLast(a=>s.closes(a.openingBracketInfo));
      return o?o.openingBracketRange:null
    }
    else{
      const s=n.toLowerCase(),o=this.languageConfigurationService.getLanguageConfiguration(r).brackets;
      if(!o)return null;
      const a=o.textIsBracket[s];
      return a?dOo(this._findMatchingBracketUp(a,i,UEc(t))):null
    }
  }
  matchBracket(n, e){
    if(this.canBuildAST){
      const t=this.getBracketPairsInRange(Zt.fromPositions(n,n)).filter(i=>i.closingBracketRange!==void 0&&(i.openingBracketRange.containsPosition(n)||i.closingBracketRange.containsPosition(n))).findLastMaxBy(JP(i=>i.openingBracketRange.containsPosition(n)?i.openingBracketRange:i.closingBracketRange,Zt.compareRangesUsingStarts));
      return t?[t.openingBracketRange,t.closingBracketRange]:null
    }
    else{
      const t=UEc(e);
      return this._matchBracket(this.textModel.validatePosition(n),t)
    }
  }
  _establishBracketSearchOffsets(n, e, t, i){
    const r=e.getCount(), s=e.getLanguageId(i);
    let o=Math.max(0, n.column-1-t.maxBracketLength);
    for(let l=i-1;
    l>=0;
    l--){
      const u=e.getEndOffset(l);
      if(u<=o)break;
      if(GBe(e.getStandardTokenType(l))||e.getLanguageId(l)!==s){
        o=u;
        break
      }
    }
    let a=Math.min(e.getLineContent().length, n.column-1+t.maxBracketLength);
    for(let l=i+1;
    l<r;
    l++){
      const u=e.getStartOffset(l);
      if(u>=a)break;
      if(GBe(e.getStandardTokenType(l))||e.getLanguageId(l)!==s){
        a=u;
        break
      }
    }
    return{
      searchStartOffset:o,searchEndOffset:a
    }
  }
  _matchBracket(n, e){
    const t=n.lineNumber, i=this.textModel.tokenization.getLineTokens(t), r=this.textModel.getLineContent(t), s=i.findTokenIndexAtOffset(n.column-1);
    if(s<0)return null;
    const o=this.languageConfigurationService.getLanguageConfiguration(i.getLanguageId(s)).brackets;
    if(o&&!GBe(i.getStandardTokenType(s))){
      let{
        searchStartOffset:a,searchEndOffset:l
      }
      =this._establishBracketSearchOffsets(n,i,o,s),u=null;
      for(;
      ;
      ){
        const d=Ede.findNextBracketInRange(o.forwardRegex,t,r,a,l);
        if(!d)break;
        if(d.startColumn<=n.column&&n.column<=d.endColumn){
          const m=r.substring(d.startColumn-1,d.endColumn-1).toLowerCase(),p=this._matchFoundBracket(d,o.textIsBracket[m],o.textIsOpenBracket[m],e);
          if(p){
            if(p instanceof DVe)return null;
            u=p
          }
        }
        a=d.endColumn-1
      }
      if(u)return u
    }
    if(s>0&&i.getStartOffset(s)===n.column-1){
      const a=s-1,l=this.languageConfigurationService.getLanguageConfiguration(i.getLanguageId(a)).brackets;
      if(l&&!GBe(i.getStandardTokenType(a))){
        const{
          searchStartOffset:u,searchEndOffset:d
        }
        =this._establishBracketSearchOffsets(n,i,l,a),m=Ede.findPrevBracketInRange(l.reversedRegex,t,r,u,d);
        if(m&&m.startColumn<=n.column&&n.column<=m.endColumn){
          const p=r.substring(m.startColumn-1,m.endColumn-1).toLowerCase(),g=this._matchFoundBracket(m,l.textIsBracket[p],l.textIsOpenBracket[p],e);
          if(g)return g instanceof DVe?null:g
        }
      }
    }
    return null
  }
  _matchFoundBracket(n, e, t, i){
    if(!e)return null;
    const r=t?this._findMatchingBracketDown(e, n.getEndPosition(), i):this._findMatchingBracketUp(e, n.getStartPosition(), i);
    return r?r instanceof DVe?r:[n, r]:null
  }
  _findMatchingBracketUp(n, e, t){
    const i=n.languageId, r=n.reversedRegex;
    let s=-1, o=0;
    const a=(l, u, d, m)=>{
      for(;
      ;
      ){
        if(t&&++o%100===0&&!t())return DVe.INSTANCE;
        const p=Ede.findPrevBracketInRange(r,l,u,d,m);
        if(!p)break;
        const g=u.substring(p.startColumn-1,p.endColumn-1).toLowerCase();
        if(n.isOpen(g)?s++:n.isClose(g)&&s--,s===0)return p;
        m=p.startColumn-1
      }
      return null
    };
    for(let l=e.lineNumber;
    l>=1;
    l--){
      const u=this.textModel.tokenization.getLineTokens(l),d=u.getCount(),m=this.textModel.getLineContent(l);
      let p=d-1,g=m.length,f=m.length;
      l===e.lineNumber&&(p=u.findTokenIndexAtOffset(e.column-1),g=e.column-1,f=e.column-1);
      let A=!0;
      for(;
      p>=0;
      p--){
        const w=u.getLanguageId(p)===i&&!GBe(u.getStandardTokenType(p));
        if(w)A?g=u.getStartOffset(p):(g=u.getStartOffset(p),f=u.getEndOffset(p));
        else if(A&&g!==f){
          const C=a(l,m,g,f);
          if(C)return C
        }
        A=w
      }
      if(A&&g!==f){
        const w=a(l,m,g,f);
        if(w)return w
      }
    }
    return null
  }
  _findMatchingBracketDown(n, e, t){
    const i=n.languageId, r=n.forwardRegex;
    let s=1, o=0;
    const a=(u, d, m, p)=>{
      for(;
      ;
      ){
        if(t&&++o%100===0&&!t())return DVe.INSTANCE;
        const g=Ede.findNextBracketInRange(r,u,d,m,p);
        if(!g)break;
        const f=d.substring(g.startColumn-1,g.endColumn-1).toLowerCase();
        if(n.isOpen(f)?s++:n.isClose(f)&&s--,s===0)return g;
        m=g.endColumn-1
      }
      return null
    }, l=this.textModel.getLineCount();
    for(let u=e.lineNumber;
    u<=l;
    u++){
      const d=this.textModel.tokenization.getLineTokens(u),m=d.getCount(),p=this.textModel.getLineContent(u);
      let g=0,f=0,A=0;
      u===e.lineNumber&&(g=d.findTokenIndexAtOffset(e.column-1),f=e.column-1,A=e.column-1);
      let w=!0;
      for(;
      g<m;
      g++){
        const C=d.getLanguageId(g)===i&&!GBe(d.getStandardTokenType(g));
        if(C)w||(f=d.getStartOffset(g)),A=d.getEndOffset(g);
        else if(w&&f!==A){
          const x=a(u,p,f,A);
          if(x)return x
        }
        w=C
      }
      if(w&&f!==A){
        const C=a(u,p,f,A);
        if(C)return C
      }
    }
    return null
  }
  findPrevBracket(n){
    const e=this.textModel.validatePosition(n);
    if(this.canBuildAST)return this.bracketsRequested=!0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getFirstBracketBefore(e)||null;
    let t=null, i=null, r=null;
    for(let s=e.lineNumber;
    s>=1;
    s--){
      const o=this.textModel.tokenization.getLineTokens(s),a=o.getCount(),l=this.textModel.getLineContent(s);
      let u=a-1,d=l.length,m=l.length;
      if(s===e.lineNumber){
        u=o.findTokenIndexAtOffset(e.column-1),d=e.column-1,m=e.column-1;
        const g=o.getLanguageId(u);
        t!==g&&(t=g,i=this.languageConfigurationService.getLanguageConfiguration(t).brackets,r=this.languageConfigurationService.getLanguageConfiguration(t).bracketsNew)
      }
      let p=!0;
      for(;
      u>=0;
      u--){
        const g=o.getLanguageId(u);
        if(t!==g){
          if(i&&r&&p&&d!==m){
            const A=Ede.findPrevBracketInRange(i.reversedRegex,s,l,d,m);
            if(A)return this._toFoundBracket(r,A);
            p=!1
          }
          t=g,i=this.languageConfigurationService.getLanguageConfiguration(t).brackets,r=this.languageConfigurationService.getLanguageConfiguration(t).bracketsNew
        }
        const f=!!i&&!GBe(o.getStandardTokenType(u));
        if(f)p?d=o.getStartOffset(u):(d=o.getStartOffset(u),m=o.getEndOffset(u));
        else if(r&&i&&p&&d!==m){
          const A=Ede.findPrevBracketInRange(i.reversedRegex,s,l,d,m);
          if(A)return this._toFoundBracket(r,A)
        }
        p=f
      }
      if(r&&i&&p&&d!==m){
        const g=Ede.findPrevBracketInRange(i.reversedRegex,s,l,d,m);
        if(g)return this._toFoundBracket(r,g)
      }
    }
    return null
  }
  findNextBracket(n){
    const e=this.textModel.validatePosition(n);
    if(this.canBuildAST)return this.bracketsRequested=!0, this.updateBracketPairsTree(), this.bracketPairsTree.value?.object.getFirstBracketAfter(e)||null;
    const t=this.textModel.getLineCount();
    let i=null, r=null, s=null;
    for(let o=e.lineNumber;
    o<=t;
    o++){
      const a=this.textModel.tokenization.getLineTokens(o),l=a.getCount(),u=this.textModel.getLineContent(o);
      let d=0,m=0,p=0;
      if(o===e.lineNumber){
        d=a.findTokenIndexAtOffset(e.column-1),m=e.column-1,p=e.column-1;
        const f=a.getLanguageId(d);
        i!==f&&(i=f,r=this.languageConfigurationService.getLanguageConfiguration(i).brackets,s=this.languageConfigurationService.getLanguageConfiguration(i).bracketsNew)
      }
      let g=!0;
      for(;
      d<l;
      d++){
        const f=a.getLanguageId(d);
        if(i!==f){
          if(s&&r&&g&&m!==p){
            const w=Ede.findNextBracketInRange(r.forwardRegex,o,u,m,p);
            if(w)return this._toFoundBracket(s,w);
            g=!1
          }
          i=f,r=this.languageConfigurationService.getLanguageConfiguration(i).brackets,s=this.languageConfigurationService.getLanguageConfiguration(i).bracketsNew
        }
        const A=!!r&&!GBe(a.getStandardTokenType(d));
        if(A)g||(m=a.getStartOffset(d)),p=a.getEndOffset(d);
        else if(s&&r&&g&&m!==p){
          const w=Ede.findNextBracketInRange(r.forwardRegex,o,u,m,p);
          if(w)return this._toFoundBracket(s,w)
        }
        g=A
      }
      if(s&&r&&g&&m!==p){
        const f=Ede.findNextBracketInRange(r.forwardRegex,o,u,m,p);
        if(f)return this._toFoundBracket(s,f)
      }
    }
    return null
  }
  findEnclosingBrackets(n, e){
    const t=this.textModel.validatePosition(n);
    if(this.canBuildAST){
      const p=Zt.fromPositions(t),g=this.getBracketPairsInRange(Zt.fromPositions(t,t)).findLast(f=>f.closingBracketRange!==void 0&&f.range.strictContainsRange(p));
      return g?[g.openingBracketRange,g.closingBracketRange]:null
    }
    const i=UEc(e), r=this.textModel.getLineCount(), s=new Map;
    let o=[];
    const a=(p, g)=>{
      if(!s.has(p)){
        const f=[];
        for(let A=0,w=g?g.brackets.length:0;
        A<w;
        A++)f[A]=0;
        s.set(p,f)
      }
      o=s.get(p)
    };
    let l=0;
    const u=(p, g, f, A, w)=>{
      for(;
      ;
      ){
        if(i&&++l%100===0&&!i())return DVe.INSTANCE;
        const C=Ede.findNextBracketInRange(p.forwardRegex,g,f,A,w);
        if(!C)break;
        const x=f.substring(C.startColumn-1,C.endColumn-1).toLowerCase(),I=p.textIsBracket[x];
        if(I&&(I.isOpen(x)?o[I.index]++:I.isClose(x)&&o[I.index]--,o[I.index]===-1))return this._matchFoundBracket(C,I,!1,i);
        A=C.endColumn-1
      }
      return null
    };
    let d=null, m=null;
    for(let p=t.lineNumber;
    p<=r;
    p++){
      const g=this.textModel.tokenization.getLineTokens(p),f=g.getCount(),A=this.textModel.getLineContent(p);
      let w=0,C=0,x=0;
      if(p===t.lineNumber){
        w=g.findTokenIndexAtOffset(t.column-1),C=t.column-1,x=t.column-1;
        const B=g.getLanguageId(w);
        d!==B&&(d=B,m=this.languageConfigurationService.getLanguageConfiguration(d).brackets,a(d,m))
      }
      let I=!0;
      for(;
      w<f;
      w++){
        const B=g.getLanguageId(w);
        if(d!==B){
          if(m&&I&&C!==x){
            const N=u(m,p,A,C,x);
            if(N)return dOo(N);
            I=!1
          }
          d=B,m=this.languageConfigurationService.getLanguageConfiguration(d).brackets,a(d,m)
        }
        const R=!!m&&!GBe(g.getStandardTokenType(w));
        if(R)I||(C=g.getStartOffset(w)),x=g.getEndOffset(w);
        else if(m&&I&&C!==x){
          const N=u(m,p,A,C,x);
          if(N)return dOo(N)
        }
        I=R
      }
      if(m&&I&&C!==x){
        const B=u(m,p,A,C,x);
        if(B)return dOo(B)
      }
    }
    return null
  }
  _toFoundBracket(n, e){
    if(!e)return null;
    let t=this.textModel.getValueInRange(e);
    t=t.toLowerCase();
    const i=n.getBracketInfo(t);
    return i?{
      range:e,bracketInfo:i
    }
    :null
  }
}, DVe=class zJb{
  static{
    this.INSTANCE=new zJb
  }
  constructor(){
    this._searchCanceledBrand=void 0
  }
}
}
}), Mph, $Ec, OoA=