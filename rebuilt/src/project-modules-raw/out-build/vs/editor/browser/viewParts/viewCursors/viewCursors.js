// Module: out-build/vs/editor/browser/viewParts/viewCursors/viewCursors.js
// Offset: 1739544 (bundle byte offset)
// Size: 6427 bytes

glA(), sI(), vr(), j$(), flA(), pk(), az(), Io(), qI(), ri(), pyh=class Pad extends yW{
  static{
    this.BLINK_INTERVAL=500
  }
  constructor(e){
    super(e);
    const t=this._context.configuration.options;
    this._readOnly=t.get(96), this._cursorBlinking=t.get(26), this._cursorStyle=t.get(147), this._cursorSmoothCaretAnimation=t.get(27), this._experimentalEditContextEnabled=t.get(157), this._selectionIsEmpty=!0, this._isComposingInput=!1, this._isVisible=!1, this._primaryCursor=new rIc(this._context, g9e.Single), this._secondaryCursors=[], this._renderData=[], this._domNode=mw(document.createElement("div")), this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true"), this._updateDomClassName(), this._domNode.appendChild(this._primaryCursor.getDomNode()), this._startCursorBlinkAnimation=new O$, this._cursorFlatBlinkInterval=new D5e, this._blinkingEnabled=!1, this._editorHasFocus=!1, this._updateBlinking()
  }
  dispose(){
    super.dispose(), this._startCursorBlinkAnimation.dispose(), this._cursorFlatBlinkInterval.dispose()
  }
  getDomNode(){
    return this._domNode
  }
  onCompositionStart(e){
    return this._isComposingInput=!0, this._updateBlinking(), !0
  }
  onCompositionEnd(e){
    return this._isComposingInput=!1, this._updateBlinking(), !0
  }
  onConfigurationChanged(e){
    const t=this._context.configuration.options;
    this._readOnly=t.get(96), this._cursorBlinking=t.get(26), this._cursorStyle=t.get(147), this._cursorSmoothCaretAnimation=t.get(27), this._experimentalEditContextEnabled=t.get(157), this._updateBlinking(), this._updateDomClassName(), this._primaryCursor.onConfigurationChanged(e);
    for(let i=0, r=this._secondaryCursors.length;
    i<r;
    i++)this._secondaryCursors[i].onConfigurationChanged(e);
    return!0
  }
  _onCursorPositionChanged(e, t, i){
    const r=this._secondaryCursors.length!==t.length||this._cursorSmoothCaretAnimation==="explicit"&&i!==3;
    if(this._primaryCursor.setPlurality(t.length?g9e.MultiPrimary:g9e.Single), this._primaryCursor.onCursorPositionChanged(e, r), this._updateBlinking(), this._secondaryCursors.length<t.length){
      const s=t.length-this._secondaryCursors.length;
      for(let o=0;
      o<s;
      o++){
        const a=new rIc(this._context,g9e.MultiSecondary);
        this._domNode.domNode.insertBefore(a.getDomNode().domNode,this._primaryCursor.getDomNode().domNode.nextSibling),this._secondaryCursors.push(a)
      }
    }
    else if(this._secondaryCursors.length>t.length){
      const s=this._secondaryCursors.length-t.length;
      for(let o=0;
      o<s;
      o++)this._domNode.removeChild(this._secondaryCursors[0].getDomNode()),this._secondaryCursors.splice(0,1)
    }
    for(let s=0;
    s<t.length;
    s++)this._secondaryCursors[s].onCursorPositionChanged(t[s], r)
  }
  onCursorStateChanged(e){
    const t=[];
    for(let r=0, s=e.selections.length;
    r<s;
    r++)t[r]=e.selections[r].getPosition();
    this._onCursorPositionChanged(t[0], t.slice(1), e.reason);
    const i=e.selections[0].isEmpty();
    return this._selectionIsEmpty!==i&&(this._selectionIsEmpty=i, this._updateDomClassName()), !0
  }
  onDecorationsChanged(e){
    return!0
  }
  onFlushed(e){
    return!0
  }
  onFocusChanged(e){
    return this._editorHasFocus=e.isFocused, this._updateBlinking(), !1
  }
  onLinesChanged(e){
    return!0
  }
  onLinesDeleted(e){
    return!0
  }
  onLinesInserted(e){
    return!0
  }
  onScrollChanged(e){
    return!0
  }
  onTokensChanged(e){
    const t=i=>{
      for(let r=0,s=e.ranges.length;
      r<s;
      r++)if(e.ranges[r].fromLineNumber<=i.lineNumber&&i.lineNumber<=e.ranges[r].toLineNumber)return!0;
      return!1
    };
    if(t(this._primaryCursor.getPosition()))return!0;
    for(const i of this._secondaryCursors)if(t(i.getPosition()))return!0;
    return!1
  }
  onZonesChanged(e){
    return!0
  }
  _getCursorBlinking(){
    return this._isComposingInput&&!this._experimentalEditContextEnabled||!this._editorHasFocus||this._cursorBlinking===0?0:this._readOnly?5:this._cursorBlinking
  }
  _updateBlinking(){
    this._startCursorBlinkAnimation.cancel(), this._cursorFlatBlinkInterval.cancel();
    const e=this._getCursorBlinking(), t=e===0, i=e===5;
    t?this._hide():this._show(), this._blinkingEnabled=!1, this._updateDomClassName(), !t&&!i&&(e===1?this._cursorFlatBlinkInterval.cancelAndSet(()=>{
      this._isVisible?this._hide():this._show()
    }, Pad.BLINK_INTERVAL, As(this._domNode.domNode)):this._startCursorBlinkAnimation.setIfNotSet(()=>{
      this._blinkingEnabled=!0,this._updateDomClassName()
    }, Pad.BLINK_INTERVAL))
  }
  _updateDomClassName(){
    this._domNode.setClassName(this._getClassName())
  }
  _getClassName(){
    let e="cursors-layer";
    switch(this._selectionIsEmpty||(e+=" has-selection"), this._cursorStyle){
      case hT.Line:e+=" cursor-line-style";
      break;
      case hT.Block:e+=" cursor-block-style";
      break;
      case hT.Underline:e+=" cursor-underline-style";
      break;
      case hT.LineThin:e+=" cursor-line-thin-style";
      break;
      case hT.BlockOutline:e+=" cursor-block-outline-style";
      break;
      case hT.UnderlineThin:e+=" cursor-underline-thin-style";
      break;
      default:e+=" cursor-line-style"
    }
    if(this._blinkingEnabled)switch(this._getCursorBlinking()){
      case 1:e+=" cursor-blink";
      break;
      case 2:e+=" cursor-smooth";
      break;
      case 3:e+=" cursor-phase";
      break;
      case 4:e+=" cursor-expand";
      break;
      case 5:e+=" cursor-solid";
      break;
      default:e+=" cursor-solid"
    }
    else e+=" cursor-solid";
    return(this._cursorSmoothCaretAnimation==="on"||this._cursorSmoothCaretAnimation==="explicit")&&(e+=" cursor-smooth-caret-animation"), e
  }
  _show(){
    this._primaryCursor.show();
    for(let e=0, t=this._secondaryCursors.length;
    e<t;
    e++)this._secondaryCursors[e].show();
    this._isVisible=!0
  }
  _hide(){
    this._primaryCursor.hide();
    for(let e=0, t=this._secondaryCursors.length;
    e<t;
    e++)this._secondaryCursors[e].hide();
    this._isVisible=!1
  }
  prepareRender(e){
    this._primaryCursor.prepareRender(e);
    for(let t=0, i=this._secondaryCursors.length;
    t<i;
    t++)this._secondaryCursors[t].prepareRender(e)
  }
  render(e){
    const t=[];
    let i=0;
    const r=this._primaryCursor.render(e);
    r&&(t[i++]=r);
    for(let s=0, o=this._secondaryCursors.length;
    s<o;
    s++){
      const a=this._secondaryCursors[s].render(e);
      a&&(t[i++]=a)
    }
    this._renderData=t
  }
  getLastRenderData(){
    return this._renderData
  }
}, HI((n, e)=>{
  const t=[{
    class:".cursor", foreground:COt, background:X4o
  }, {
    class:".cursor-primary", foreground:dEc, background:mmh
  }, {
    class:".cursor-secondary", foreground:hEc, background:pmh
  }
  ];
  for(const i of t){
    const r=n.getColor(i.foreground);
    if(r){
      let s=n.getColor(i.background);
      s||(s=r.opposite()),e.addRule(`.monaco-editor .cursors-layer ${i.class} { background-color: ${r}; border-color: ${r}; color: ${s}; }`),Poe(n.type)&&e.addRule(`.monaco-editor .cursors-layer.has-selection ${i.class} { border-left: 1px solid ${s}; border-right: 1px solid ${s}; }`)
    }
  }
})
}
});
function vlA(n, e){
  try{
    return n(e)
  }
  catch(t){
    Gc(t)
  }
}
var g3o, gyh, AlA=