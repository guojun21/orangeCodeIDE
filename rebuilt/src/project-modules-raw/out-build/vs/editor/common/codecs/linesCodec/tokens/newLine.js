// Module: out-build/vs/editor/common/codecs/linesCodec/tokens/newLine.js
// Offset: 31065723 (bundle byte offset)
// Size: 460 bytes

MV(), Ql(), ts(), tl(), Mqe=class Eto extends NU{
  static{
    this.symbol=`
`
  }
  static{
    this.byte=Ms.fromString(Eto.symbol)
  }
  get text(){
    return Eto.symbol
  }
  get byte(){
    return Eto.byte
  }
  static newOnLine(e, t){
    const{
      range:i
    }
    =e, r=new ar(i.startLineNumber, t), s=new ar(i.startLineNumber, t+this.symbol.length);
    return new Eto(Zt.fromPositions(r, s))
  }
  toString(){
    return`newline${this.range}`
  }
}
}
}), Z_i, Jgu=