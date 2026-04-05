// Module: out-build/vs/editor/browser/gpu/contentSegmenter.js
// Offset: 1793016 (bundle byte offset)
// Size: 583 bytes

A9(), Oyh=class{
  constructor(n){
    this._content=n.content
  }
  getSegmentAtIndex(n){
    return this._content[n]
  }
  getSegmentData(n){
    
  }
}, Uyh=class{
  constructor(n){
    this._segments=[];
    const e=n.content, t=F4t.Segmenter(void 0, {
      granularity:"grapheme"
    }), i=Array.from(t.segment(e));
    let r=0;
    for(let s=0;
    s<e.length;
    s++){
      const o=i[r];
      if(!o)break;
      if(o.index!==s){
        this._segments.push(void 0);
        continue
      }
      r++,this._segments.push(o)
    }
  }
  getSegmentAtIndex(n){
    return this._segments[n]?.segment
  }
  getSegmentData(n){
    return this._segments[n]
  }
}
}
}), mIc, $yh=