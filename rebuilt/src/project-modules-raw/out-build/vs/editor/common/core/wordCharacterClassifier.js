// Module: out-build/vs/editor/common/core/wordCharacterClassifier.js
// Offset: 709919 (bundle byte offset)
// Size: 1270 bytes

A9(), cu(), U4t(), (function(n){
  n[n.Regular=0]="Regular", n[n.Whitespace=1]="Whitespace", n[n.WordSeparator=2]="WordSeparator"
})(kch||(kch={
  
})), Ech=class extends m4n{
  constructor(n, e){
    super(0), this._segmenter=null, this._cachedLine=null, this._cachedSegments=[], this.intlSegmenterLocales=e, this.intlSegmenterLocales.length>0?this._segmenter=F4t.Segmenter(this.intlSegmenterLocales, {
      granularity:"word"
    }):this._segmenter=null;
    for(let t=0, i=n.length;
    t<i;
    t++)this.set(n.charCodeAt(t), 2);
    this.set(32, 1), this.set(9, 1)
  }
  findPrevIntlWordBeforeOrAtOffset(n, e){
    let t=null;
    for(const i of this._getIntlSegmenterWordsOnLine(n)){
      if(i.index>e)break;
      t=i
    }
    return t
  }
  findNextIntlWordAtOrAfterOffset(n, e){
    for(const t of this._getIntlSegmenterWordsOnLine(n))if(!(t.index<e))return t;
    return null
  }
  _getIntlSegmenterWordsOnLine(n){
    return this._segmenter?this._cachedLine===n?this._cachedSegments:(this._cachedLine=n, this._cachedSegments=this._filterWordSegments(this._segmenter.segment(n)), this._cachedSegments):[]
  }
  _filterWordSegments(n){
    const e=[];
    for(const t of n)this._isWordLike(t)&&e.push(t);
    return e
  }
  _isWordLike(n){
    return!!n.isWordLike
  }
}, Okc=new Fb(10)
}
});
function zFo(n){
  return n.filter(e=>!!e)
}
var xch, Tch, B6, f4n, VFo=