// Module: out-build/vs/editor/browser/controller/editContext/clipboardUtils.js
// Offset: 1574604 (bundle byte offset)
// Size: 838 bytes

_r(), hF(), n3t=class vGb{
  static{
    this.INSTANCE=new vGb
  }
  constructor(){
    this._lastState=null
  }
  set(e, t){
    this._lastState={
      lastCopiedValue:e,data:t
    }
  }
  get(e){
    return this._lastState&&this._lastState.lastCopiedValue===e?this._lastState.data:(this._lastState=null, null)
  }
}, l3o={
  forceCopyWithSyntaxHighlighting:!1
}, i3t={
  getTextData(n){
    const e=n.getData(NA.text);
    let t=null;
    const i=n.getData("vscode-editor-data");
    if(typeof i=="string")try{
      t=JSON.parse(i),t.version!==1&&(t=null)
    }
    catch{
      
    }
    return e.length===0&&t===null&&n.files.length>0?[Array.prototype.slice.call(n.files, 0).map(s=>s.name).join(`
`), null]:[e, t]
  }, setTextData(n, e, t, i){
    n.setData(NA.text, e), typeof t=="string"&&n.setData("text/html", t), n.setData("vscode-editor-data", JSON.stringify(i))
  }
}
}
}), Qoe, _W, rAh=