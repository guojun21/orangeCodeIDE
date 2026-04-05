// Module: out-build/vs/editor/common/codecs/markdownCodec/parsers/markdownComment.js
// Offset: 31080737 (bundle byte offset)
// Size: 1930 bytes

ts(), _If(), Vs(), Lv(), vsy(), _Sa(), CSa(), SSa(), Vgu=class extends Fqe{
  constructor(n){
    super([n])
  }
  accept(n){
    const e=this.currentTokens[this.currentTokens.length-1];
    if(n instanceof Sit&&e instanceof D1t)return this.currentTokens.push(n), {
      result:"success",nextParser:this,wasTokenConsumed:!0
    };
    if(n instanceof Oqe){
      if(this.currentTokens.push(n),e instanceof Sit)return{
        result:"success",nextParser:this,wasTokenConsumed:!0
      };
      if(e instanceof Oqe){
        const t=this.currentTokens[0],i=this.currentTokens[1],r=this.currentTokens[2],s=this.currentTokens[3];
        return Qb(t instanceof D1t,`The first token must be a '<', got '${t}'.`),Qb(i instanceof Sit,`The second token must be a '!', got '${i}'.`),Qb(r instanceof Oqe,`The third token must be a '-', got '${r}'.`),Qb(s instanceof Oqe,`The fourth token must be a '-', got '${s}'.`),this.isConsumed=!0,{
          result:"success",nextParser:new TSa([t,i,r,s]),wasTokenConsumed:!0
        }
      }
    }
    return this.isConsumed=!0, {
      result:"failure",wasTokenConsumed:!1
    }
  }
}, __decorate([i0i], Vgu.prototype, "accept", null), TSa=class extends Fqe{
  constructor(n){
    super(n)
  }
  accept(n){
    return n instanceof n0i&&this.endsWithDashes?(this.currentTokens.push(n), {
      result:"success",nextParser:this.asMarkdownComment(),wasTokenConsumed:!0
    }):(this.currentTokens.push(n), {
      result:"success",nextParser:this,wasTokenConsumed:!0
    })
  }
  asMarkdownComment(){
    this.isConsumed=!0;
    const n=this.currentTokens.map(Zpt("text")).join("");
    return new IIf(this.range, n)
  }
  get range(){
    const n=this.currentTokens[0], e=this.currentTokens[this.currentTokens.length-1];
    return new Zt(n.range.startLineNumber, n.range.startColumn, e.range.endLineNumber, e.range.endColumn)
  }
  get endsWithDashes(){
    return!(!(this.currentTokens[this.currentTokens.length-1]instanceof Oqe)||!(this.currentTokens[this.currentTokens.length-2]instanceof Oqe))
  }
}, __decorate([i0i], TSa.prototype, "accept", null)
}
}), DIf, ysy=