// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/colon.js
// Offset: 31065341 (bundle byte offset)
// Size: 382 bytes

MV(), ts(), tl(), Wgn=class Ccd extends NU{
  static{
    this.symbol=":"
  }
  get text(){
    return Ccd.symbol
  }
  static newOnLine(e, t){
    const{
      range:i
    }
    =e, r=new ar(i.startLineNumber, t), s=new ar(i.startLineNumber, t+this.symbol.length);
    return new Ccd(Zt.fromPositions(r, s))
  }
  toString(){
    return`colon${this.range}`
  }
}
}
}), Mqe, ySa=