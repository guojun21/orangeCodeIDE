// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/exclamationMark.js
// Offset: 31067436 (bundle byte offset)
// Size: 407 bytes

MV(), ts(), tl(), Sit=class Ecd extends NU{
  static{
    this.symbol="!"
  }
  get text(){
    return Ecd.symbol
  }
  static newOnLine(e, t){
    const{
      range:i
    }
    =e, r=new ar(i.startLineNumber, t), s=new ar(i.startLineNumber, t+this.symbol.length);
    return new Ecd(Zt.fromPositions(r, s))
  }
  toString(){
    return`exclamation-mark${this.range}`
  }
}
}
}), Qgn, e0i, t0i=