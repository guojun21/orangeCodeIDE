// Module: out-build/vs/workbench/contrib/webview/browser/webviewWindowDragMonitor.js
// Offset: 33118448 (bundle byte offset)
// Size: 1066 bytes

ri(), rt(), aTa=class extends at{
  constructor(n, e){
    super();
    const t=()=>{
      e()?.windowDidDragStart()
    }, i=()=>{
      e()?.windowDidDragEnd()
    };
    this._register(ei(n, ir.DRAG_START, ()=>{
      t()
    })), this._register(ei(n, ir.DRAG_END, i)), this._register(ei(n, ir.MOUSE_MOVE, r=>{
      r.buttons===0&&i()
    })), this._register(ei(n, ir.DRAG, r=>{
      r.shiftKey?i():t()
    })), this._register(ei(n, ir.DRAG_OVER, r=>{
      r.shiftKey?i():t()
    }))
  }
}
}
});
function cTa(n, e){
  return n.scheme===_n.http||n.scheme===_n.https?n:(e&&e.authority&&e.isRemote&&n.scheme===_n.file&&(n=je.from({
    scheme:_n.vscodeRemote, authority:e.authority, path:n.path
  })), je.from({
    scheme:_n.https, authority:`${n.scheme}+${$uy(n.authority)}.${Iwu}`, path:n.path, fragment:n.fragment, query:n.query
  }))
}
function $uy(n){
  return n.replace(/./g, e=>{
    const t=e.charCodeAt(0);
    return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57?e:"-"+t.toString(16).padStart(4, "0")
  })
}
function quy(n){
  return n.replace(/-([0-9a-f]{
    4
  })/g, (e, t)=>String.fromCharCode(parseInt(t, 16)))
}
var Twu, Iwu, ybn, eki=