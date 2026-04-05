// Module: out-build/vs/workbench/contrib/chat/common/promptSyntax/codecs/parsers/promptVariableParser.js
// Offset: 31069786 (bundle byte offset)
// Size: 2613 bytes

Vs(), Lv(), ts(), Hgu(), mIf(), Ugu(), pIf(), gIf(), ySa(), Jgu(), Ggu(), wSa(), _Sa(), t0i(), CSa(), SSa(), r0i=[ASa, vSa, Mqe, I1t, X_i, Z_i].map(n=>n.symbol), Wgu=[Ggn, Wgn, Sit, D1t, n0i, Qgn, e0i].map(n=>n.symbol), kSa=class extends Fqe{
  constructor(n){
    super([n])
  }
  accept(n){
    if(r0i.includes(n.text))try{
      return{
        result:"success",nextParser:this.asPromptVariable(),wasTokenConsumed:!1
      }
    }
    catch{
      return{
        result:"failure",wasTokenConsumed:!1
      }
    }
    finally{
      this.isConsumed=!0
    }
    return n instanceof Wgn?(this.isConsumed=!0, this.currentTokens.length<=1?{
      result:"failure",wasTokenConsumed:!1
    }
    :{
      result:"success",nextParser:new ESa([...this.currentTokens,n]),wasTokenConsumed:!0
    }):Wgu.includes(n.text)?(this.isConsumed=!0, {
      result:"failure",wasTokenConsumed:!1
    }):(this.currentTokens.push(n), {
      result:"success",nextParser:this,wasTokenConsumed:!0
    })
  }
  asPromptVariable(){
    Qb(this.currentTokens.length>1, "Cannot create a prompt variable out of incomplete token sequence.");
    const n=this.currentTokens[0], e=this.currentTokens[this.currentTokens.length-1], i=this.currentTokens.slice(1).map(Zpt("text")).join("");
    return new qgu(new Zt(n.range.startLineNumber, n.range.startColumn, e.range.endLineNumber, e.range.endColumn), i)
  }
}, __decorate([i0i], kSa.prototype, "accept", null), ESa=class extends Fqe{
  constructor(n){
    const e=n[0], t=n[n.length-1];
    Qb(n.length>2, `Tokens list must contain at least 3 items, got '${n.length}'.`), Qb(e instanceof Ggn, `The first token must be a '#', got '${e} '.`), Qb(t instanceof Wgn, `The last token must be a ':', got '${t} '.`), super([...n])
  }
  accept(n){
    if(r0i.includes(n.text)){
      this.isConsumed=!0;
      const e=this.currentTokens[0],t=this.currentTokens[this.currentTokens.length-1],i=this.currentTokens.slice(1,this.startTokensCount-1),r=this.currentTokens.slice(this.startTokensCount),s=new Zt(e.range.startLineNumber,e.range.startColumn,t.range.endLineNumber,t.range.endColumn),o=i.map(Zpt("text")).join(""),a=r.map(Zpt("text")).join("");
      return{
        result:"success",nextParser:new Y_i(s,o,a),wasTokenConsumed:!1
      }
    }
    return this.currentTokens.push(n), {
      result:"success",nextParser:this,wasTokenConsumed:!0
    }
  }
  asPromptVariableWithData(){
    const n=this.currentTokens.slice(1, this.startTokensCount-1), e=this.currentTokens.slice(this.startTokensCount), t=n.map(Zpt("text")).join(""), i=e.map(Zpt("text")).join(""), r=this.currentTokens[0], s=this.currentTokens[this.currentTokens.length-1];
    return new Y_i(new Zt(r.range.startLineNumber, r.range.startColumn, s.range.endLineNumber, s.range.endColumn), t, i)
  }
}, __decorate([i0i], ESa.prototype, "accept", null)
}
}), bIf, hsy=