// Module: out-build/vs/editor/common/codecs/simpleCodec/tokens/tab.js
// Offset: 31064581 (bundle byte offset)
// Size: 378 bytes

MV(), ts(), tl(), vSa=class wcd extends NU{
  static{
    this.symbol="	"
  }
  get text(){
    return wcd.symbol
  }
  static newOnLine(e, t){
    const{
      range:i
    }
    =e, r=new ar(i.startLineNumber, t), s=new ar(i.startLineNumber, t+this.symbol.length);
    return new wcd(Zt.fromPositions(r, s))
  }
  toString(){
    return`tab${this.range}`
  }
}
}
}), ASa, pIf=