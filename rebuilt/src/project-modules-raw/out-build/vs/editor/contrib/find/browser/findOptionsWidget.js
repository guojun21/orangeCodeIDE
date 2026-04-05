// Module: out-build/vs/editor/contrib/find/browser/findOptionsWidget.js
// Offset: 25156775 (bundle byte offset)
// Size: 2901 bytes

ri(), RCA(), Dpg(), $4(), vr(), YUe(), Nl(), mb(), dvg=class VWb extends HR{
  static{
    this.ID="editor.contrib.findOptionsWidget"
  }
  constructor(e, t, i){
    super(), this._hideSoon=this._register(new Hu(()=>this._hide(), 2e3)), this._isVisible=!1, this._editor=e, this._state=t, this._keybindingService=i, this._domNode=document.createElement("div"), this._domNode.className="findOptionsWidget", this._domNode.style.display="none", this._domNode.style.top="10px", this._domNode.style.zIndex="12", this._domNode.setAttribute("role", "presentation"), this._domNode.setAttribute("aria-hidden", "true");
    const r={
      inputActiveOptionBorder:zo(lVe),inputActiveOptionForeground:zo(hft),inputActiveOptionBackground:zo(uVe)
    }, s=this._register(F6());
    this.caseSensitive=this._register(new LGl({
      appendTitle:this._keybindingLabelFor(bE.ToggleCaseSensitiveCommand),isChecked:this._state.matchCase,hoverDelegate:s,...r
    })), this._domNode.appendChild(this.caseSensitive.domNode), this._register(this.caseSensitive.onChange(()=>{
      this._state.change({
        matchCase:this.caseSensitive.checked
      },!1)
    })), this.wholeWords=this._register(new NGl({
      appendTitle:this._keybindingLabelFor(bE.ToggleWholeWordCommand),isChecked:this._state.wholeWord,hoverDelegate:s,...r
    })), this._domNode.appendChild(this.wholeWords.domNode), this._register(this.wholeWords.onChange(()=>{
      this._state.change({
        wholeWord:this.wholeWords.checked
      },!1)
    })), this.regex=this._register(new MGl({
      appendTitle:this._keybindingLabelFor(bE.ToggleRegexCommand),isChecked:this._state.isRegex,hoverDelegate:s,...r
    })), this._domNode.appendChild(this.regex.domNode), this._register(this.regex.onChange(()=>{
      this._state.change({
        isRegex:this.regex.checked
      },!1)
    })), this._editor.addOverlayWidget(this), this._register(this._state.onFindReplaceStateChange(o=>{
      let a=!1;
      o.isRegex&&(this.regex.checked=this._state.isRegex,a=!0),o.wholeWord&&(this.wholeWords.checked=this._state.wholeWord,a=!0),o.matchCase&&(this.caseSensitive.checked=this._state.matchCase,a=!0),!this._state.isRevealed&&a&&this._revealTemporarily()
    })), this._register(ei(this._domNode, ir.MOUSE_LEAVE, o=>this._onMouseLeave())), this._register(ei(this._domNode, "mouseover", o=>this._onMouseOver()))
  }
  _keybindingLabelFor(e){
    const t=this._keybindingService.lookupKeybinding(e);
    return t?` (${t.getLabel()})`:""
  }
  dispose(){
    this._editor.removeOverlayWidget(this), super.dispose()
  }
  getId(){
    return VWb.ID
  }
  getDomNode(){
    return this._domNode
  }
  getPosition(){
    return{
      preference:0
    }
  }
  highlightFindOptions(){
    this._revealTemporarily()
  }
  _revealTemporarily(){
    this._show(), this._hideSoon.schedule()
  }
  _onMouseLeave(){
    this._hideSoon.schedule()
  }
  _onMouseOver(){
    this._hideSoon.cancel()
  }
  _show(){
    this._isVisible||(this._isVisible=!0, this._domNode.style.display="block")
  }
  _hide(){
    this._isVisible&&(this._isVisible=!1, this._domNode.style.display="none")
  }
}
}
});
function yla(n, e){
  return n===1?!0:n===2?!1:e
}
var hvg, pgi, wla=