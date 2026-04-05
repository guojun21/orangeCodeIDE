// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/parentheses.js
// Offset: 31073567 (bundle byte offset)
// Size: 696 bytes

MV(), ts(), tl(), s0i=class Bcd extends NU{
  static{
    this.symbol="("
  }
  get text(){
    return Bcd.symbol
  }
  static newOnLine(e, t){
    const{
      range:i
    }
    =e, r=new ar(i.startLineNumber, t), s=new ar(i.startLineNumber, t+this.symbol.length);
    return new Bcd(Zt.fromPositions(r, s))
  }
  toString(){
    return`left-parenthesis${this.range}`
  }
}, xSa=class Rcd extends NU{
  static{
    this.symbol=")"
  }
  get text(){
    return Rcd.symbol
  }
  static newOnLine(e, t){
    const{
      range:i
    }
    =e, r=new ar(i.startLineNumber, t), s=new ar(i.startLineNumber, t+this.symbol.length);
    return new Rcd(Zt.fromPositions(r, s))
  }
  toString(){
    return`right-parenthesis${this.range}`
  }
}
}
}), Qgu, jgu, AIf, yIf, wIf=