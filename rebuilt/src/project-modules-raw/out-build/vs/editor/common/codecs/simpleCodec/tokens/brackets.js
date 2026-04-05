// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/brackets.js
// Offset: 31067843 (bundle byte offset)
// Size: 677 bytes

MV(), ts(), tl(), Qgn=class xcd extends NU{
  static{
    this.symbol="["
  }
  get text(){
    return xcd.symbol
  }
  static newOnLine(e, t){
    const{
      range:i
    }
    =e, r=new ar(i.startLineNumber, t), s=new ar(i.startLineNumber, t+this.symbol.length);
    return new xcd(Zt.fromPositions(r, s))
  }
  toString(){
    return`left-bracket${this.range}`
  }
}, e0i=class Tcd extends NU{
  static{
    this.symbol="]"
  }
  get text(){
    return Tcd.symbol
  }
  static newOnLine(e, t){
    const{
      range:i
    }
    =e, r=new ar(i.startLineNumber, t), s=new ar(i.startLineNumber, t+this.symbol.length);
    return new Tcd(Zt.fromPositions(r, s))
  }
  toString(){
    return`right-bracket${this.range}`
  }
}
}
}), D1t, n0i, CSa=