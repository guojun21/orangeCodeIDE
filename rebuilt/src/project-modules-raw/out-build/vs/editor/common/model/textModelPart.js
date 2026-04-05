// Module: out-build/vs/editor/common/model/textModelPart.js
// Offset: 1119831 (bundle byte offset)
// Size: 449 bytes

rt(), HEc=class extends at{
  constructor(){
    super(...arguments), this._isDisposed=!1
  }
  dispose(){
    super.dispose(), this._isDisposed=!0
  }
  assertNotDisposed(){
    if(this._isDisposed)throw new Error("TextModelPart is disposed!")
  }
}
}
});
function mOo(n, e){
  let t=0, i=0;
  const r=n.length;
  for(;
  i<r;
  ){
    const s=n.charCodeAt(i);
    if(s===32)t++;
    else if(s===9)t=t-t%e+e;
    else break;
    i++
  }
  return i===r?-1:t
}
var JEc=