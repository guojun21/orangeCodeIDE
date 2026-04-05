// Module: out-build/vs/editor/common/codecs/markdownCodec/parsers/markdownLink.js
// Offset: 31074263 (bundle byte offset)
// Size: 1465 bytes

fSa(), ySa(), Lv(), Jgu(), Ggu(), wSa(), t0i(), SSa(), vIf(), Qgu=[I1t, Mqe, X_i, Z_i].map(n=>n.symbol), jgu=class extends Fqe{
  constructor(n){
    super([n])
  }
  accept(n){
    return Qgu.includes(n.text)?{
      result:"failure",wasTokenConsumed:!1
    }
    :n instanceof e0i?{
      result:"success",nextParser:new AIf([...this.tokens,n]),wasTokenConsumed:!0
    }
    :(this.currentTokens.push(n), {
      result:"success",nextParser:this,wasTokenConsumed:!0
    })
  }
}, AIf=class extends Fqe{
  accept(n){
    return n instanceof s0i?{
      result:"success",wasTokenConsumed:!0,nextParser:new yIf([...this.tokens],n)
    }
    :{
      result:"failure",wasTokenConsumed:!1
    }
  }
}, yIf=class extends Fqe{
  constructor(n, e){
    super([e]), this.captionTokens=n, this.openParensCount=1
  }
  get tokens(){
    return[...this.captionTokens, ...this.currentTokens]
  }
  accept(n){
    if(n instanceof s0i&&(this.openParensCount+=1), n instanceof xSa&&(this.openParensCount-=1, Qb(this.openParensCount>=0, `Unexpected right parenthesis token encountered: '${n}'.`), this.openParensCount===0)){
      const{
        startLineNumber:e,startColumn:t
      }
      =this.captionTokens[0].range,i=this.captionTokens.map(s=>s.text).join("");
      this.currentTokens.push(n);
      const r=this.currentTokens.map(s=>s.text).join("");
      return{
        result:"success",wasTokenConsumed:!0,nextParser:new Cit(e,t,i,r)
      }
    }
    return Qgu.includes(n.text)?{
      result:"failure",wasTokenConsumed:!1
    }
    :(this.currentTokens.push(n), {
      result:"success",nextParser:this,wasTokenConsumed:!0
    })
  }
}
}
}), zgu, msy=