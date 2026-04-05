// Module: out-build/vs/editor/contrib/colorPicker/browser/color.js
// Offset: 4201512 (bundle byte offset)
// Size: 748 bytes

Po(), _s(), hd(), Cm(), _5c(), Ei(), AJh=class{
  constructor(){
    
  }
  async compute(n, e, t, i){
    const r=await n.provideDocumentColors(e, t);
    if(Array.isArray(r))for(const s of r)i.push({
      colorInfo:s,provider:n
    });
    return Array.isArray(r)
  }
}, yJh=class{
  constructor(){
    
  }
  async compute(n, e, t, i){
    const r=await n.provideDocumentColors(e, t);
    if(Array.isArray(r))for(const s of r)i.push({
      range:s.range,color:[s.color.red,s.color.green,s.color.blue,s.color.alpha]
    });
    return Array.isArray(r)
  }
}, wJh=class{
  constructor(n){
    this.colorInfo=n
  }
  async compute(n, e, t, i){
    const r=await n.provideColorPresentations(e, this.colorInfo, Cs.None);
    return Array.isArray(r)&&i.push(...r), Array.isArray(r)
  }
}
}
}), S5c, k5c, iPe, _Jh, Pvt=