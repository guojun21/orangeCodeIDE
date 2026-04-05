// Module: out-build/vs/editor/common/codecs/linesCodec/linesDecoder.js
// Offset: 31077930 (bundle byte offset)
// Size: 1501 bytes

gsy(), ts(), ySa(), Lv(), wSa(), Ql(), Js(), pSa(), kIf=class extends V_i{
  constructor(){
    super(...arguments), this.buffer=Ms.alloc(0)
  }
  onStreamData(n){
    this.buffer=Ms.concat([this.buffer, n]), this.processData(!1)
  }
  processData(n){
    for(;
    this.buffer.byteLength>0;
    ){
      const e=this.lastEmittedLine?this.lastEmittedLine.range.startLineNumber+1:1,t=this.findEndOfLineTokens(e),i=t[0];
      if(!i){
        n&&this.emitLine(e,this.buffer.slice(0));
        break
      }
      this.emitLine(e,this.buffer.slice(0,i.range.startColumn-1)),egt(this.lastEmittedLine,"No last emitted line found.");
      let r=this.lastEmittedLine.range.endColumn;
      for(const s of t){
        const o=r+s.byte.byteLength;
        this._onData.fire(s.withRange({
          startColumn:r,endColumn:o
        })),this.buffer=this.buffer.slice(s.byte.byteLength),r=o
      }
    }
    n&&Qb(this.buffer.byteLength===0, "Expected the input data buffer to be empty when the stream ends.")
  }
  findEndOfLineTokens(n){
    const e=[], t=this.buffer.indexOf(I1t.byte), i=this.buffer.indexOf(Mqe.byte);
    return t>=0&&(t<i||i===-1)?(e.push(new I1t(new Zt(n, t+1, n, t+1+I1t.byte.byteLength))), i===t+1&&e.push(new Mqe(new Zt(n, i+1, n, i+1+Mqe.byte.byteLength))), this.buffer.byteLength>t+1?e:[]):(i>=0&&e.push(new Mqe(new Zt(n, i+1, n, i+1+Mqe.byte.byteLength))), e)
  }
  emitLine(n, e){
    const t=new SIf(n, e.toString());
    this._onData.fire(t), this.lastEmittedLine=t, this.buffer=this.buffer.slice(e.byteLength)
  }
  onStreamEnd(){
    this.buffer.byteLength>0&&this.processData(!0), super.onStreamEnd()
  }
}
}
}), EIf, xIf, TIf, bsy=