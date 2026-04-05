// Module: out-build/vs/base/browser/ui/findinput/replaceInput.js
// Offset: 25164375 (bundle byte offset)
// Size: 4940 bytes

ri(), _q(), JZ(), $4(), qi(), yn(), Lpg(), Ht(), mb(), mvg=_(13, null), pvg=_(14, null), gvg=class extends H3{
  constructor(n){
    super({
      icon:Be.preserveCase,title:pvg+n.appendTitle,isChecked:n.isChecked,hoverDelegate:n.hoverDelegate??Sm("element"),inputActiveOptionBorder:n.inputActiveOptionBorder,inputActiveOptionForeground:n.inputActiveOptionForeground,inputActiveOptionBackground:n.inputActiveOptionBackground
    })
  }
}, fvg=class extends HR{
  static{
    this.OPTION_CHANGE="optionChange"
  }
  constructor(n, e, t, i){
    super(), this._showOptionButtons=t, this.fixFocusOnOptionClickEnabled=!0, this.cachedOptionsWidth=0, this._onDidOptionChange=this._register(new Qe), this.onDidOptionChange=this._onDidOptionChange.event, this._onKeyDown=this._register(new Qe), this.onKeyDown=this._onKeyDown.event, this._onMouseDown=this._register(new Qe), this.onMouseDown=this._onMouseDown.event, this._onInput=this._register(new Qe), this.onInput=this._onInput.event, this._onKeyUp=this._register(new Qe), this.onKeyUp=this._onKeyUp.event, this._onPreserveCaseKeyDown=this._register(new Qe), this.onPreserveCaseKeyDown=this._onPreserveCaseKeyDown.event, this._lastHighlightFindOptions=0, this.contextViewProvider=e, this.placeholder=i.placeholder||"", this.validation=i.validation, this.label=i.label||mvg;
    const r=i.appendPreserveCaseLabel||"", s=i.history||new Set([]), o=!!i.flexibleHeight, a=!!i.flexibleWidth, l=i.flexibleMaxHeight;
    this.domNode=document.createElement("div"), this.domNode.classList.add("monaco-findInput"), this.inputBox=this._register(new vca(this.domNode, this.contextViewProvider, {
      ariaLabel:this.label||"",placeholder:this.placeholder||"",validationOptions:{
        validation:this.validation
      },history:s,showHistoryHint:i.showHistoryHint,flexibleHeight:o,flexibleWidth:a,flexibleMaxHeight:l,inputBoxStyles:i.inputBoxStyles
    })), this.preserveCase=this._register(new gvg({
      appendTitle:r,isChecked:!1,...i.toggleStyles
    })), this._register(this.preserveCase.onChange(m=>{
      this._onDidOptionChange.fire(m),!m&&this.fixFocusOnOptionClickEnabled&&this.inputBox.focus(),this.validate()
    })), this._register(this.preserveCase.onKeyDown(m=>{
      this._onPreserveCaseKeyDown.fire(m)
    })), this._showOptionButtons?this.cachedOptionsWidth=this.preserveCase.width():this.cachedOptionsWidth=0;
    const u=[this.preserveCase.domNode];
    this.onkeydown(this.domNode, m=>{
      if(m.equals(15)||m.equals(17)||m.equals(9)){
        const p=u.indexOf(this.domNode.ownerDocument.activeElement);
        if(p>=0){
          let g=-1;
          m.equals(17)?g=(p+1)%u.length:m.equals(15)&&(p===0?g=u.length-1:g=p-1),m.equals(9)?(u[p].blur(),this.inputBox.focus()):g>=0&&u[g].focus(),zu.stop(m,!0)
        }
      }
    });
    const d=document.createElement("div");
    d.className="controls", d.style.display=this._showOptionButtons?"block":"none", d.appendChild(this.preserveCase.domNode), this.domNode.appendChild(d), n?.appendChild(this.domNode), this.onkeydown(this.inputBox.inputElement, m=>this._onKeyDown.fire(m)), this.onkeyup(this.inputBox.inputElement, m=>this._onKeyUp.fire(m)), this.oninput(this.inputBox.inputElement, m=>this._onInput.fire()), this.onmousedown(this.inputBox.inputElement, m=>this._onMouseDown.fire(m))
  }
  enable(){
    this.domNode.classList.remove("disabled"), this.inputBox.enable(), this.preserveCase.enable()
  }
  disable(){
    this.domNode.classList.add("disabled"), this.inputBox.disable(), this.preserveCase.disable()
  }
  setFocusInputOnOptionClick(n){
    this.fixFocusOnOptionClickEnabled=n
  }
  setEnabled(n){
    n?this.enable():this.disable()
  }
  clear(){
    this.clearValidation(), this.setValue(""), this.focus()
  }
  getValue(){
    return this.inputBox.value
  }
  setValue(n){
    this.inputBox.value!==n&&(this.inputBox.value=n)
  }
  onSearchSubmit(){
    this.inputBox.addToHistory()
  }
  applyStyles(){
    
  }
  select(){
    this.inputBox.select()
  }
  focus(){
    this.inputBox.focus()
  }
  getPreserveCase(){
    return this.preserveCase.checked
  }
  setPreserveCase(n){
    this.preserveCase.checked=n
  }
  focusOnPreserve(){
    this.preserveCase.focus()
  }
  highlightFindOptions(){
    this.domNode.classList.remove("highlight-"+this._lastHighlightFindOptions), this._lastHighlightFindOptions=1-this._lastHighlightFindOptions, this.domNode.classList.add("highlight-"+this._lastHighlightFindOptions)
  }
  validate(){
    this.inputBox?.validate()
  }
  showMessage(n){
    this.inputBox?.showMessage(n)
  }
  clearMessage(){
    this.inputBox?.hideMessage()
  }
  clearValidation(){
    this.inputBox?.hideMessage()
  }
  set width(n){
    this.inputBox.paddingRight=this.cachedOptionsWidth, this.domNode.style.width=n+"px"
  }
  dispose(){
    super.dispose()
  }
}
}
});
function CCt(n, e){
  if(ggi.includes(e))throw new Error("Cannot register the same widget multiple times");
  ggi.push(e);
  const t=new Ut, i=new Sn(Cla, !1).bindTo(n), r=new Sn(uQl, !0).bindTo(n), s=new Sn(dQl, !0).bindTo(n), o=()=>{
    i.set(!0), ndn=e
  }, a=()=>{
    i.set(!1), ndn===e&&(ndn=void 0)
  };
  return zP(e.element)&&o(), t.add(e.onDidFocus(()=>o())), t.add(e.onDidBlur(()=>a())), t.add($i(()=>{
    ggi.splice(ggi.indexOf(e), 1), a()
  })), {
    historyNavigationForwardsEnablement:r, historyNavigationBackwardsEnablement:s, dispose(){
      t.dispose()
    }
  }
}
var _la, Cla, uQl, dQl, ndn, ggi, idn, rdn, sdn, WAe=