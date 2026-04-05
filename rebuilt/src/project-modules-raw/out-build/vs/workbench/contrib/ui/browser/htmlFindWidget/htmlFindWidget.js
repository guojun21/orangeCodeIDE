// Module: out-build/vs/workbench/contrib/ui/browser/htmlFindWidget/htmlFindWidget.js
// Offset: 34146773 (bundle byte offset)
// Size: 3337 bytes

si(), pl(), Id(), ka(), UEt(), q7f=new Sn("htmlFindWidgetFocused", !1), lBa=class extends Grt{
  constructor(e, t, i, r, s){
    super({
      showCommonFindToggles:!0,checkImeCompletionState:e.checkImeCompletionState,enableSash:!0,showResultCount:!0,initialWidth:419
    }, t, i, r, s), this._delegate=e, this._findWidgetFocused=q7f.bindTo(i), this._register(e.hasFindResult(o=>{
      this.updateButtons(o),this.focusFindBox()
    })), this._register(e.onDidStopFind(()=>{
      this.updateButtons(!1)
    }))
  }
  async _getResultCount(){
    return this._delegate.getResultCount()
  }
  find(e){
    const t=this.inputValue;
    t&&(this._delegate.find(t, e), this.updateResultCount())
  }
  hide(e=!0){
    super.hide(e), this._delegate.stopFind(!0), this._delegate.focus()
  }
  _onInputChanged(){
    const e=this.inputValue;
    return e?this._delegate.updateFind(e, {
      isRegex:this._getRegexValue(),isCaseSensitive:this._getCaseSensitiveValue(),isWholeWord:this._getWholeWordValue()
    }):this._delegate.stopFind(!1), !1
  }
  _onFocusTrackerFocus(){
    this._findWidgetFocused.set(!0)
  }
  _onFocusTrackerBlur(){
    this._findWidgetFocused.reset()
  }
  _onFindInputFocusTrackerFocus(){
    
  }
  _onFindInputFocusTrackerBlur(){
    
  }
  findFirst(){
    const e=this.inputValue;
    e&&this._delegate.find(e, !1)
  }
  getSearchString(){
    return this.inputValue
  }
  getSearchOptions(){
    return{
      isRegex:this._getRegexValue(),isCaseSensitive:this._getCaseSensitiveValue(),isWholeWord:this._getWholeWordValue()
    }
  }
}, lBa=__decorate([__param(1, sy), __param(2, wi), __param(3, Kc), __param(4, mo)], lBa)
}
});
function Vpy(n, e, t){
  if(!e||!n)return[];
  let i;
  t.isRegex?i=e:i=UI(e), t.isWholeWord&&(i=`\\b${i}\\b`);
  const r=t.isCaseSensitive?"g":"gi";
  let s;
  try{
    s=new RegExp(i, r)
  }
  catch{
    return[]
  }
  const o=[];
  let a, l=0;
  for(;
  (a=s.exec(n))!==null;
  ){
    const u=a[0];
    o.push({
      matchIndex:l,matchText:u,matchLength:u.length,start:a.index,end:a.index+u.length
    }), l++, u.length===0&&s.lastIndex++
  }
  return o
}
function Kpy(n){
  const e=n.parentElement;
  if(!e)return!1;
  try{
    const s=As(e).getComputedStyle(e);
    if(s.display==="none"||s.visibility==="hidden")return!1
  }
  catch{
    
  }
  if(e.getRootNode()instanceof ShadowRoot?null:e.closest("input, textarea, .monaco-editor, .simple-find-part, .html-find-widget-container"))return!1;
  const r=e.tagName.toLowerCase();
  return!(r==="script"||r==="style")
}
function J7f(n, e, t, i){
  const r=document.createTreeWalker(n, NodeFilter.SHOW_ALL, {
    acceptNode(o){
      if(o.nodeType===Node.ELEMENT_NODE)return NodeFilter.FILTER_ACCEPT;
      if(o.nodeType===Node.TEXT_NODE){
        const a=o;
        return t.has(a)||!Kpy(a)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT
      }
      return NodeFilter.FILTER_SKIP
    }
  });
  let s;
  for(;
  s=r.nextNode();
  )if(s.nodeType===Node.TEXT_NODE){
    const o=s, a=o.textContent??"";
    a.length>0&&!t.has(o)&&(t.add(o), e.push({
      node:o,start:i.value.length,end:i.value.length+a.length
    }), i.value+=a)
  }
  else if(s.nodeType===Node.ELEMENT_NODE){
    const o=s;
    o.shadowRoot&&J7f(o.shadowRoot, e, t, i)
  }
}
function Ypy(n, e){
  const t=[], i={
    value:""
  }, r=new Set, s=[];
  if(e){
    const o=n.querySelectorAll(e);
    o.length>0?s.push(...Array.from(o)):s.push(n)
  }
  else s.push(n);
  for(const o of s)J7f(o, t, r, i);
  return{
    text:i.value, textNodes:t
  }
}
function Zpy(n, e){
  const{
    start:t, end:i
  }
  =n;
  let r=null, s=0, o=null, a=0;
  for(const{
    node:l, start:u, end:d
  }
  of e)if(t>=u&&t<d&&(r=l, s=t-u), i>u&&i<=d){
    o=l, a=i-u;
    break
  }
  if(!r||!o)return null;
  try{
    const l=document.createRange();
    return l.setStart(r, s), l.setEnd(o, a), l
  }
  catch{
    return null
  }
}
var G7f=