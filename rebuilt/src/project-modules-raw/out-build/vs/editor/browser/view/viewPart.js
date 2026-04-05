// Module: out-build/vs/editor/browser/view/viewPart.js
// Offset: 1473993 (bundle byte offset)
// Size: 1088 bytes

Gft(), yW=class extends qVe{
  constructor(n){
    super(), this._context=n, this._context.addEventHandler(this)
  }
  dispose(){
    this._context.removeEventHandler(this), super.dispose()
  }
}, (function(n){
  n[n.None=0]="None", n[n.ContentWidgets=1]="ContentWidgets", n[n.OverflowingContentWidgets=2]="OverflowingContentWidgets", n[n.OverflowGuard=3]="OverflowGuard", n[n.OverlayWidgets=4]="OverlayWidgets", n[n.OverflowingOverlayWidgets=5]="OverflowingOverlayWidgets", n[n.ScrollableElement=6]="ScrollableElement", n[n.TextArea=7]="TextArea", n[n.ViewLines=8]="ViewLines", n[n.Minimap=9]="Minimap", n[n.ViewLinesGpu=10]="ViewLinesGpu"
})(Avh||(Avh={
  
})), tve=class{
  static write(n, e){
    n.setAttribute("data-mprt", String(e))
  }
  static read(n){
    const e=n.getAttribute("data-mprt");
    return e===null?0:parseInt(e, 10)
  }
  static collect(n, e){
    const t=[];
    let i=0;
    for(;
    n&&n!==n.ownerDocument.body&&n!==e;
    )n.nodeType===n.ELEMENT_NODE&&(t[i++]=this.read(n)), n=n.parentElement;
    const r=new Uint8Array(i);
    for(let s=0;
    s<i;
    s++)r[s]=t[i-s-1];
    return r
  }
}
}
}), yvh, wvh, fTc, e3o, h9e, bTc, t3o, e3t=