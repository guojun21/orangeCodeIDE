// Module: out-build/vs/editor/common/viewModel/viewContext.js
// Offset: 1758626 (bundle byte offset)
// Size: 862 bytes

ClA(), Ayh=class{
  constructor(n, e, t){
    this.configuration=n, this.theme=new vyh(e), this.viewModel=t, this.viewLayout=t.viewLayout
  }
  addEventHandler(n){
    this.viewModel.addViewEventHandler(n)
  }
  removeEventHandler(n){
    this.viewModel.removeViewEventHandler(n)
  }
}
}
});
function Xft(n){
  if(!n)throw new Error(`Value "${n}" cannot be null`);
  return n
}
function yyh(n, e, t){
  let i=new e.ResizeObserver(r=>{
    const s=r.find(l=>l.target===n);
    if(!s)return;
    if(!("devicePixelContentBoxSize"in s)){
      i?.disconnect(),i=void 0;
      return
    }
    const o=s.devicePixelContentBoxSize[0].inlineSize, a=s.devicePixelContentBoxSize[0].blockSize;
    o>0&&a>0&&t(o, a)
  });
  try{
    i.observe(n, {
      box:["device-pixel-content-box"]
    })
  }
  catch{
    throw i.disconnect(), i=void 0, new _m("Could not observe device pixel dimensions")
  }
  return $i(()=>i?.disconnect())
}
var QVe, f9e=