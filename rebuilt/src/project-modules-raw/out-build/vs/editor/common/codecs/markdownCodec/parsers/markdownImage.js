// Module: out-build/vs/editor/common/codecs/markdownCodec/parsers/markdownImage.js
// Offset: 31075728 (bundle byte offset)
// Size: 943 bytes

fSa(), hsy(), t0i(), SSa(), wIf(), zgu=class extends Fqe{
  constructor(n){
    super([n])
  }
  get tokens(){
    const n=this.markdownLinkParser?.tokens??[];
    return[...this.currentTokens, ...n]
  }
  accept(n){
    if(!this.markdownLinkParser)return n instanceof Qgn?(this.markdownLinkParser=new jgu(n), {
      result:"success",nextParser:this,wasTokenConsumed:!0
    }):{
      result:"failure",wasTokenConsumed:!1
    };
    const e=this.markdownLinkParser.accept(n), {
      result:t,wasTokenConsumed:i
    }
    =e;
    if(t==="success"){
      const{
        nextParser:r
      }
      =e;
      if(r instanceof Cit){
        this.isConsumed=!0;
        const s=this.currentTokens[0];
        return{
          result:t,wasTokenConsumed:i,nextParser:new bIf(s.range.startLineNumber,s.range.startColumn,`${s.text}${r.caption}`,r.reference)
        }
      }
      return this.markdownLinkParser=r,{
        result:t,wasTokenConsumed:i,nextParser:this
      }
    }
    return this.isConsumed=!0, e
  }
}, __decorate([i0i], zgu.prototype, "accept", null)
}
}), Oqe, _If=