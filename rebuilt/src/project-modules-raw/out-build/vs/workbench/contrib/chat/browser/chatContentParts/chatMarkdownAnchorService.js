// Module: out-build/vs/workbench/contrib/chat/browser/chatContentParts/chatMarkdownAnchorService.js
// Offset: 32732947 (bundle byte offset)
// Size: 1037 bytes

ri(), rt(), Wt(), fEt=xi("chatMarkdownAnchorService"), r5f=class extends at{
  constructor(){
    super(...arguments), this._widgets=[], this._lastFocusedWidget=void 0
  }
  get lastFocusedAnchor(){
    return this._lastFocusedWidget
  }
  setLastFocusedList(n){
    this._lastFocusedWidget=n
  }
  register(n){
    if(this._widgets.some(t=>t===n))throw new Error("Cannot register the same widget multiple times");
    this._widgets.push(n);
    const e=n.getHTMLElement();
    return zP(e)&&this.setLastFocusedList(n), H_(ei(e, "focus", ()=>this.setLastFocusedList(n)), $i(()=>this._widgets.splice(this._widgets.indexOf(n), 1)), ei(e, "blur", ()=>{
      this._lastFocusedWidget===n&&this.setLastFocusedList(void 0)
    }))
  }
}
}
});
async function s5f(n, e){
  await n.openCodeEditor({
    resource:e.uri, options:{
      selection:{
        startColumn:e.range.startColumn,startLineNumber:e.range.startLineNumber
      }
    }
  }, null)
}
async function Dyu(n, e, t){
  const i=n.get(fl), r=n.get(fr);
  return await s5f(i, t), r.executeCommand(e)
}
var Byu, gSi, o5f=