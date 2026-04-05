// Module: out-build/vs/base/browser/event.js
// Offset: 1573887 (bundle byte offset)
// Size: 717 bytes

yn(), Hg=class{
  get event(){
    return this.emitter.event
  }
  constructor(n, e, t){
    const i=r=>this.emitter.fire(r);
    this.emitter=new Qe({
      onWillAddFirstListener:()=>n.addEventListener(e,i,t),onDidRemoveLastListener:()=>n.removeEventListener(e,i,t)
    })
  }
  dispose(){
    this.emitter.dispose()
  }
}
}
});
function iAh(n, e, t, i){
  const r=n.getPlainTextToCopy(e, t, Sc), s=n.model.getEOL(), o=t&&e.length===1&&e[0].isEmpty(), a=Array.isArray(r)?r:null, l=Array.isArray(r)?r.join(s):r;
  let u, d=null;
  if(l3o.forceCopyWithSyntaxHighlighting||i&&l.length<65536){
    const p=n.getRichTextToCopy(e, t);
    p&&(u=p.html, d=p.mode)
  }
  return{
    isFromEmptySelection:o, multicursorText:a, text:l, html:u, mode:d
  }
}
var n3t, l3o, i3t, VOn=