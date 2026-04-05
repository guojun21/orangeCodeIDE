// Module: out-build/vs/editor/contrib/find/browser/findWidget.js
// Offset: 25171263 (bundle byte offset)
// Size: 24614 bytes

ri(), Ew(), _q(), jSe(), $4(), vr(), qi(), _s(), rt(), _r(), oa(), LCA(), ts(), YUe(), Ht(), WAe(), odn(), Nl(), Pm(), Io(), Jr(), qI(), Js(), $b(), mb(), hQl=us("find-collapsed", Be.chevronRight, _(1094, null)), mQl=us("find-expanded", Be.chevronDown, _(1095, null)), pQl=us("find-selection", Be.selection, _(1096, null)), gQl=us("find-replace", Be.replace, _(1097, null)), fQl=us("find-replace-all", Be.replaceAll, _(1098, null)), Sla=us("find-previous-match", Be.arrowUp, _(1099, null)), kla=us("find-next-match", Be.arrowDown, _(1100, null)), Avg=_(1101, null), yvg=_(1102, null), wvg=_(1103, null), _vg=_(1104, null), Cvg=_(1105, null), Svg=_(1106, null), kvg=_(1107, null), Evg=_(1108, null), xvg=_(1109, null), Tvg=_(1110, null), Ivg=_(1111, null), Dvg=_(1112, null), Bvg=_(1113, null, mNe), Ela=_(1114, null), SCt=_(1115, null), V1e=419, Rvg=275, Pvg=Rvg-54, adn=69, Lvg=33, bQl="ctrlEnterReplaceAll.windows.donotask", vQl=Fs?256:2048, xla=class{
  constructor(n){
    this.afterLineNumber=n, this.heightInPx=Lvg, this.suppressMouseDown=!1, this.domNode=document.createElement("div"), this.domNode.className="dock-find-viewzone"
  }
}, Nvg=class KWb extends HR{
  static{
    this.ID="editor.contrib.findWidget"
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g){
    super(), this._hoverService=d, this._findWidgetSearchHistory=m, this._replaceWidgetHistory=p, this._onWidgetHeightChanged=g, this._cachedHeight=null, this._revealTimeouts=[], this._codeEditor=e, this._controller=t, this._state=i, this._contextViewProvider=r, this._keybindingService=s, this._contextKeyService=o, this._storageService=l, this._notificationService=u, this._ctrlEnterReplaceAllWarningPrompted=!!l.getBoolean(bQl, 0), this._isVisible=!1, this._isReplaceVisible=!1, this._ignoreChangeEvent=!1, this._updateHistoryDelayer=new Nv(500), this._register($i(()=>this._updateHistoryDelayer.cancel())), this._register(this._state.onFindReplaceStateChange(f=>this._onStateChanged(f))), this._buildDomNode(), this._updateButtons(), this._tryUpdateWidgetWidth(), this._findInput.inputBox.layout(), this._register(this._codeEditor.onDidChangeConfiguration(f=>{
      if(f.hasChanged(96)&&(this._codeEditor.getOption(96)&&this._state.change({
        isReplaceRevealed:!1
      },!1),this._updateButtons()),f.hasChanged(151)&&this._tryUpdateWidgetWidth(),f.hasChanged(2)&&this.updateAccessibilitySupport(),f.hasChanged(43)){
        const A=this._codeEditor.getOption(43).loop;
        this._state.change({
          loop:A
        },!1);
        const w=this._codeEditor.getOption(43).addExtraSpaceOnTop;
        w&&!this._viewZone&&(this._viewZone=new xla(0),this._showViewZone()),!w&&this._viewZone&&this._removeViewZone()
      }
    })), this.updateAccessibilitySupport(), this._register(this._codeEditor.onDidChangeCursorSelection(()=>{
      this._isVisible&&this._updateToggleSelectionFindButton()
    })), this._register(this._codeEditor.onDidFocusEditorWidget(async()=>{
      if(this._isVisible){
        const f=await this._controller.getGlobalBufferTerm();
        f&&f!==this._state.searchString&&(this._state.change({
          searchString:f
        },!1),this._findInput.select())
      }
    })), this._findInputFocused=hgi.bindTo(o), this._findFocusTracker=this._register(CC(this._findInput.inputBox.inputElement)), this._register(this._findFocusTracker.onDidFocus(()=>{
      this._findInputFocused.set(!0),this._updateSearchScope()
    })), this._register(this._findFocusTracker.onDidBlur(()=>{
      this._findInputFocused.set(!1)
    })), this._replaceInputFocused=Ala.bindTo(o), this._replaceFocusTracker=this._register(CC(this._replaceInput.inputBox.inputElement)), this._register(this._replaceFocusTracker.onDidFocus(()=>{
      this._replaceInputFocused.set(!0),this._updateSearchScope()
    })), this._register(this._replaceFocusTracker.onDidBlur(()=>{
      this._replaceInputFocused.set(!1)
    })), this._codeEditor.addOverlayWidget(this), this._codeEditor.getOption(43).addExtraSpaceOnTop&&(this._viewZone=new xla(0)), this._register(this._codeEditor.onDidChangeModel(()=>{
      this._isVisible&&(this._viewZoneId=void 0)
    })), this._register(this._codeEditor.onDidScrollChange(f=>{
      if(f.scrollTopChanged){
        this._layoutViewZone();
        return
      }
      setTimeout(()=>{
        this._layoutViewZone()
      },0)
    }))
  }
  getId(){
    return KWb.ID
  }
  getDomNode(){
    return this._domNode
  }
  getPosition(){
    return this._isVisible?{
      preference:0
    }
    :null
  }
  _onStateChanged(e){
    if(e.searchString){
      try{
        this._ignoreChangeEvent=!0,this._findInput.setValue(this._state.searchString)
      }
      finally{
        this._ignoreChangeEvent=!1
      }
      this._updateButtons()
    }
    if(e.replaceString&&(this._replaceInput.inputBox.value=this._state.replaceString), e.isRevealed&&(this._state.isRevealed?this._reveal():this._hide(!0)), e.isReplaceRevealed&&(this._state.isReplaceRevealed?!this._codeEditor.getOption(96)&&!this._isReplaceVisible&&(this._isReplaceVisible=!0, this._replaceInput.width=jP(this._findInput.domNode), this._updateButtons(), this._replaceInput.inputBox.layout()):this._isReplaceVisible&&(this._isReplaceVisible=!1, this._updateButtons())), (e.isRevealed||e.isReplaceRevealed)&&(this._state.isRevealed||this._state.isReplaceRevealed)&&this._tryUpdateHeight()&&this._showViewZone(), e.isRegex&&this._findInput.setRegex(this._state.isRegex), e.wholeWord&&this._findInput.setWholeWords(this._state.wholeWord), e.matchCase&&this._findInput.setCaseSensitive(this._state.matchCase), e.preserveCase&&this._replaceInput.setPreserveCase(this._state.preserveCase), e.searchScope&&(this._state.searchScope?this._toggleSelectionFind.checked=!0:this._toggleSelectionFind.checked=!1, this._updateToggleSelectionFindButton()), e.searchString||e.matchesCount||e.matchesPosition){
      const t=this._state.searchString.length>0&&this._state.matchesCount===0;
      this._domNode.classList.toggle("no-results",t),this._updateMatchesCount(),this._updateButtons()
    }
    (e.searchString||e.currentMatch)&&this._layoutViewZone(), e.updateHistory&&this._delayedUpdateHistory(), e.loop&&this._updateButtons()
  }
  _delayedUpdateHistory(){
    this._updateHistoryDelayer.trigger(this._updateHistory.bind(this)).then(void 0, Gc)
  }
  _updateHistory(){
    this._state.searchString&&this._findInput.inputBox.addToHistory(), this._state.replaceString&&this._replaceInput.inputBox.addToHistory()
  }
  _updateMatchesCount(){
    this._matchesCount.style.minWidth=adn+"px", this._state.matchesCount>=mNe?this._matchesCount.title=Bvg:this._matchesCount.title="", this._matchesCount.firstChild?.remove();
    let e;
    if(this._state.matchesCount>0){
      let t=String(this._state.matchesCount);
      this._state.matchesCount>=mNe&&(t+="+");
      let i=String(this._state.matchesPosition);
      i==="0"&&(i="?"),e=B4(Ela,i,t)
    }
    else e=SCt;
    this._matchesCount.appendChild(document.createTextNode(e)), W_(this._getAriaLabel(e, this._state.currentMatch, this._state.searchString)), adn=Math.max(adn, this._matchesCount.clientWidth)
  }
  _getAriaLabel(e, t, i){
    if(e===SCt)return i===""?_(1116, null, e):_(1117, null, e, i);
    if(t){
      const r=_(1118,null,e,i,t.startLineNumber+":"+t.startColumn),s=this._codeEditor.getModel();
      return s&&t.startLineNumber<=s.getLineCount()&&t.startLineNumber>=1?`${s.getLineContent(t.startLineNumber)}, ${r}`:r
    }
    return _(1119, null, e, i)
  }
  _updateToggleSelectionFindButton(){
    const e=this._codeEditor.getSelection(), t=e?e.startLineNumber!==e.endLineNumber||e.startColumn!==e.endColumn:!1, i=this._toggleSelectionFind.checked;
    this._isVisible&&(i||t)?this._toggleSelectionFind.enable():this._toggleSelectionFind.disable()
  }
  _updateButtons(){
    this._findInput.setEnabled(this._isVisible), this._replaceInput.setEnabled(this._isVisible&&this._isReplaceVisible), this._updateToggleSelectionFindButton(), this._closeBtn.setEnabled(this._isVisible);
    const e=this._state.searchString.length>0, t=!!this._state.matchesCount;
    this._prevBtn.setEnabled(this._isVisible&&e&&t&&this._state.canNavigateBack()), this._nextBtn.setEnabled(this._isVisible&&e&&t&&this._state.canNavigateForward()), this._replaceBtn.setEnabled(this._isVisible&&this._isReplaceVisible&&e), this._replaceAllBtn.setEnabled(this._isVisible&&this._isReplaceVisible&&e), this._domNode.classList.toggle("replaceToggled", this._isReplaceVisible), this._toggleReplaceBtn.setExpanded(this._isReplaceVisible);
    const i=!this._codeEditor.getOption(96);
    this._toggleReplaceBtn.setEnabled(this._isVisible&&i)
  }
  _reveal(){
    if(this._revealTimeouts.forEach(e=>{
      clearTimeout(e)
    }), this._revealTimeouts=[], !this._isVisible){
      this._isVisible=!0;
      const e=this._codeEditor.getSelection();
      switch(this._codeEditor.getOption(43).autoFindInSelection){
        case"always":this._toggleSelectionFind.checked=!0;
        break;
        case"never":this._toggleSelectionFind.checked=!1;
        break;
        case"multiline":{
          const i=!!e&&e.startLineNumber!==e.endLineNumber;
          this._toggleSelectionFind.checked=i;
          break
        }
        default:break
      }
      this._tryUpdateWidgetWidth(),this._updateButtons(),this._revealTimeouts.push(setTimeout(()=>{
        this._domNode.classList.add("visible"),this._domNode.setAttribute("aria-hidden","false")
      },0)),this._revealTimeouts.push(setTimeout(()=>{
        this._findInput.validate()
      },200)),this._codeEditor.layoutOverlayWidget(this);
      let t=!0;
      if(this._codeEditor.getOption(43).seedSearchStringFromSelection&&e){
        const i=this._codeEditor.getDomNode();
        if(i){
          const r=qS(i),s=this._codeEditor.getScrolledVisiblePosition(e.getStartPosition()),o=r.left+(s?s.left:0),a=s?s.top:0;
          if(this._viewZone&&a<this._viewZone.heightInPx){
            e.endLineNumber>e.startLineNumber&&(t=!1);
            const l=x5e(this._domNode).left;
            o>l&&(t=!1);
            const u=this._codeEditor.getScrolledVisiblePosition(e.getEndPosition());
            r.left+(u?u.left:0)>l&&(t=!1)
          }
        }
      }
      this._showViewZone(t)
    }
  }
  _hide(e){
    this._revealTimeouts.forEach(t=>{
      clearTimeout(t)
    }), this._revealTimeouts=[], this._isVisible&&(this._isVisible=!1, this._updateButtons(), this._domNode.classList.remove("visible"), this._domNode.setAttribute("aria-hidden", "true"), this._findInput.clearMessage(), e&&this._codeEditor.focus(), this._codeEditor.layoutOverlayWidget(this), this._removeViewZone())
  }
  _layoutViewZone(e){
    if(!this._codeEditor.getOption(43).addExtraSpaceOnTop){
      this._removeViewZone();
      return
    }
    if(!this._isVisible)return;
    const i=this._viewZone;
    this._viewZoneId!==void 0||!i||this._codeEditor.changeViewZones(r=>{
      i.heightInPx=this.getHeight(),this._viewZoneId=r.addZone(i),this._codeEditor.setScrollTop(e||this._codeEditor.getScrollTop()+i.heightInPx)
    })
  }
  _showViewZone(e=!0){
    if(!this._isVisible||!this._codeEditor.getOption(43).addExtraSpaceOnTop)return;
    this._viewZone===void 0&&(this._viewZone=new xla(0));
    const i=this._viewZone;
    this._codeEditor.changeViewZones(r=>{
      if(this._viewZoneId!==void 0){
        const s=this.getHeight();
        if(s===i.heightInPx)return;
        const o=s-i.heightInPx;
        i.heightInPx=s,r.layoutZone(this._viewZoneId),e&&this._codeEditor.setScrollTop(this._codeEditor.getScrollTop()+o);
        return
      }
      else{
        let s=this.getHeight();
        if(s-=this._codeEditor.getOption(88).top,s<=0)return;
        i.heightInPx=s,this._viewZoneId=r.addZone(i),e&&this._codeEditor.setScrollTop(this._codeEditor.getScrollTop()+s)
      }
    })
  }
  _removeViewZone(){
    this._codeEditor.changeViewZones(e=>{
      this._viewZoneId!==void 0&&(e.removeZone(this._viewZoneId),this._viewZoneId=void 0,this._viewZone&&(this._codeEditor.setScrollTop(this._codeEditor.getScrollTop()-this._viewZone.heightInPx),this._viewZone=void 0))
    })
  }
  _tryUpdateWidgetWidth(){
    if(!this._isVisible||!this._domNode.isConnected)return;
    const e=this._codeEditor.getLayoutInfo();
    if(e.contentWidth<=0){
      this._domNode.classList.add("hiddenEditor");
      return
    }
    else this._domNode.classList.contains("hiddenEditor")&&this._domNode.classList.remove("hiddenEditor");
    const i=e.width, r=e.minimap.minimapWidth;
    let s=!1, o=!1, a=!1;
    if(this._resized&&jP(this._domNode)>V1e){
      this._domNode.style.maxWidth=`${i-28-r-15}px`,this._replaceInput.width=jP(this._findInput.domNode);
      return
    }
    if(V1e+28+r>=i&&(o=!0), V1e+28+r-adn>=i&&(a=!0), V1e+28+r-adn>=i+50&&(s=!0), this._domNode.classList.toggle("collapsed-find-widget", s), this._domNode.classList.toggle("narrow-find-widget", a), this._domNode.classList.toggle("reduced-find-widget", o), !a&&!s&&(this._domNode.style.maxWidth=`${i-28-r-15}px`), this._findInput.layout({
      collapsedFindWidget:s,narrowFindWidget:a,reducedFindWidget:o
    }), this._resized){
      const l=this._findInput.inputBox.element.clientWidth;
      l>0&&(this._replaceInput.width=l)
    }
    else this._isReplaceVisible&&(this._replaceInput.width=jP(this._findInput.domNode))
  }
  getHeight(){
    let e=0;
    return e+=4, e+=this._findInput.inputBox.height+2, this._isReplaceVisible&&(e+=4, e+=this._replaceInput.inputBox.height+2), e+=4, e
  }
  _tryUpdateHeight(){
    const e=this.getHeight();
    return this._cachedHeight!==null&&this._cachedHeight===e?!1:(this._cachedHeight=e, this._domNode.style.height=`${e}px`, this._onWidgetHeightChanged(e), !0)
  }
  focusFindInput(){
    this._findInput.select(), this._findInput.focus()
  }
  focusFindInputWithoutSelecting(){
    this._findInput.focus()
  }
  isActive(){
    return this._domNode.contains(As(this._domNode).document.activeElement)
  }
  focusReplaceInput(){
    this._replaceInput.select(), this._replaceInput.focus()
  }
  highlightFindOptions(){
    this._findInput.highlightFindOptions()
  }
  _updateSearchScope(){
    if(this._codeEditor.hasModel()&&this._toggleSelectionFind.checked){
      const e=this._codeEditor.getSelections();
      e.map(t=>{
        t.endColumn===1&&t.endLineNumber>t.startLineNumber&&(t=t.setEndPosition(t.endLineNumber-1,this._codeEditor.getModel().getLineMaxColumn(t.endLineNumber-1)));
        const i=this._state.currentMatch;
        return t.startLineNumber!==t.endLineNumber&&!Zt.equalsRange(t,i)?t:null
      }).filter(t=>!!t),e.length&&this._state.change({
        searchScope:e
      },!0)
    }
  }
  _onFindInputMouseDown(e){
    e.middleButton&&e.stopPropagation()
  }
  _onFindInputKeyDown(e){
    if(e.equals(vQl|3))if(this._keybindingService.dispatchEvent(e, e.target)){
      e.preventDefault();
      return
    }
    else{
      this._findInput.inputBox.insertAtCursor(`
`),e.preventDefault();
      return
    }
    if(e.equals(2)){
      this._isReplaceVisible?this._replaceInput.focus():this._findInput.focusOnCaseSensitive(),e.preventDefault();
      return
    }
    if(e.equals(2066)){
      this._codeEditor.focus(),e.preventDefault();
      return
    }
    if(e.equals(16))return bvg(e, this._findInput.getValue(), this._findInput.domNode.querySelector("textarea"));
    if(e.equals(18))return vvg(e, this._findInput.getValue(), this._findInput.domNode.querySelector("textarea"))
  }
  _onReplaceInputKeyDown(e){
    if(e.equals(vQl|3))if(this._keybindingService.dispatchEvent(e, e.target)){
      e.preventDefault();
      return
    }
    else{
      Sc&&kw&&!this._ctrlEnterReplaceAllWarningPrompted&&(this._notificationService.info(_(1120,null)),this._ctrlEnterReplaceAllWarningPrompted=!0,this._storageService.store(bQl,!0,0,0)),this._replaceInput.inputBox.insertAtCursor(`
`),e.preventDefault();
      return
    }
    if(e.equals(2)){
      this._findInput.focusOnCaseSensitive(),e.preventDefault();
      return
    }
    if(e.equals(1026)){
      this._findInput.focus(),e.preventDefault();
      return
    }
    if(e.equals(2066)){
      this._codeEditor.focus(),e.preventDefault();
      return
    }
    if(e.equals(16))return bvg(e, this._replaceInput.inputBox.value, this._replaceInput.inputBox.element.querySelector("textarea"));
    if(e.equals(18))return vvg(e, this._replaceInput.inputBox.value, this._replaceInput.inputBox.element.querySelector("textarea"))
  }
  getVerticalSashLeft(e){
    return 0
  }
  _keybindingLabelFor(e){
    const t=this._keybindingService.lookupKeybinding(e);
    return t?` (${t.getLabel()})`:""
  }
  _buildDomNode(){
    const i=this._codeEditor.getOption(43).history, r=this._codeEditor.getOption(43).replaceHistory;
    this._findInput=this._register(new rdn(null, this._contextViewProvider, {
      width:Pvg,label:yvg,placeholder:wvg,appendCaseSensitiveLabel:this._keybindingLabelFor(bE.ToggleCaseSensitiveCommand),appendWholeWordsLabel:this._keybindingLabelFor(bE.ToggleWholeWordCommand),appendRegexLabel:this._keybindingLabelFor(bE.ToggleRegexCommand),validation:p=>{
        if(p.length===0||!this._findInput.getRegex())return null;
        try{
          return new RegExp(p,"gu"),null
        }
        catch(g){
          return{
            content:g.message
          }
        }
      },flexibleHeight:!0,flexibleWidth:!0,flexibleMaxHeight:118,showCommonFindToggles:!0,showHistoryHint:()=>qet(this._keybindingService),inputBoxStyles:g2,toggleStyles:KH,history:i==="workspace"?this._findWidgetSearchHistory:new Set([])
    }, this._contextKeyService)), this._findInput.setRegex(!!this._state.isRegex), this._findInput.setCaseSensitive(!!this._state.matchCase), this._findInput.setWholeWords(!!this._state.wholeWord), this._register(this._findInput.onKeyDown(p=>this._onFindInputKeyDown(p))), this._register(this._findInput.inputBox.onDidChange(()=>{
      this._ignoreChangeEvent||this._state.change({
        searchString:this._findInput.getValue()
      },!0)
    })), this._register(this._findInput.onDidOptionChange(()=>{
      this._state.change({
        isRegex:this._findInput.getRegex(),wholeWord:this._findInput.getWholeWords(),matchCase:this._findInput.getCaseSensitive()
      },!0)
    })), this._register(this._findInput.onCaseSensitiveKeyDown(p=>{
      p.equals(1026)&&this._isReplaceVisible&&(this._replaceInput.focus(),p.preventDefault())
    })), this._register(this._findInput.onRegexKeyDown(p=>{
      p.equals(2)&&this._isReplaceVisible&&(this._replaceInput.focusOnPreserve(),p.preventDefault())
    })), this._register(this._findInput.inputBox.onDidHeightChange(p=>{
      this._tryUpdateHeight()&&this._showViewZone()
    })), xv&&this._register(this._findInput.onMouseDown(p=>this._onFindInputMouseDown(p))), this._matchesCount=document.createElement("div"), this._matchesCount.className="matchesCount", this._updateMatchesCount();
    const s=this._register(F6());
    this._prevBtn=this._register(new WZ({
      label:_vg+this._keybindingLabelFor(bE.PreviousMatchFindAction),icon:Sla,hoverDelegate:s,onTrigger:()=>{
        ed(this._codeEditor.getAction(bE.PreviousMatchFindAction)).run().then(void 0,Gc)
      }
    }, this._hoverService)), this._nextBtn=this._register(new WZ({
      label:Cvg+this._keybindingLabelFor(bE.NextMatchFindAction),icon:kla,hoverDelegate:s,onTrigger:()=>{
        ed(this._codeEditor.getAction(bE.NextMatchFindAction)).run().then(void 0,Gc)
      }
    }, this._hoverService));
    const o=document.createElement("div");
    o.className="find-part", o.appendChild(this._findInput.domNode);
    const a=document.createElement("div");
    a.className="find-actions", o.appendChild(a), a.appendChild(this._matchesCount), a.appendChild(this._prevBtn.domNode), a.appendChild(this._nextBtn.domNode), this._toggleSelectionFind=this._register(new H3({
      icon:pQl,title:Svg+this._keybindingLabelFor(bE.ToggleSearchScopeCommand),isChecked:!1,hoverDelegate:s,inputActiveOptionBackground:zo(uVe),inputActiveOptionBorder:zo(lVe),inputActiveOptionForeground:zo(hft)
    })), this._register(this._toggleSelectionFind.onChange(()=>{
      if(this._toggleSelectionFind.checked){
        if(this._codeEditor.hasModel()){
          let p=this._codeEditor.getSelections();
          p=p.map(g=>(g.endColumn===1&&g.endLineNumber>g.startLineNumber&&(g=g.setEndPosition(g.endLineNumber-1,this._codeEditor.getModel().getLineMaxColumn(g.endLineNumber-1))),g.isEmpty()?null:g)).filter(g=>!!g),p.length&&this._state.change({
            searchScope:p
          },!0)
        }
      }
      else this._state.change({
        searchScope:null
      },!0)
    })), a.appendChild(this._toggleSelectionFind.domNode), this._closeBtn=this._register(new WZ({
      label:kvg+this._keybindingLabelFor(bE.CloseFindWidgetCommand),icon:E9e,hoverDelegate:s,onTrigger:()=>{
        this._state.change({
          isRevealed:!1,searchScope:null
        },!1)
      },onKeyDown:p=>{
        p.equals(2)&&this._isReplaceVisible&&(this._replaceBtn.isEnabled()?this._replaceBtn.focus():this._codeEditor.focus(),p.preventDefault())
      }
    }, this._hoverService)), this._replaceInput=this._register(new sdn(null, void 0, {
      label:Evg,placeholder:xvg,appendPreserveCaseLabel:this._keybindingLabelFor(bE.TogglePreserveCaseCommand),history:r==="workspace"?this._replaceWidgetHistory:new Set([]),flexibleHeight:!0,flexibleWidth:!0,flexibleMaxHeight:118,showHistoryHint:()=>qet(this._keybindingService),inputBoxStyles:g2,toggleStyles:KH
    }, this._contextKeyService, !0)), this._replaceInput.setPreserveCase(!!this._state.preserveCase), this._register(this._replaceInput.onKeyDown(p=>this._onReplaceInputKeyDown(p))), this._register(this._replaceInput.inputBox.onDidChange(()=>{
      this._state.change({
        replaceString:this._replaceInput.inputBox.value
      },!1)
    })), this._register(this._replaceInput.inputBox.onDidHeightChange(p=>{
      this._isReplaceVisible&&this._tryUpdateHeight()&&this._showViewZone()
    })), this._register(this._replaceInput.onDidOptionChange(()=>{
      this._state.change({
        preserveCase:this._replaceInput.getPreserveCase()
      },!0)
    })), this._register(this._replaceInput.onPreserveCaseKeyDown(p=>{
      p.equals(2)&&(this._prevBtn.isEnabled()?this._prevBtn.focus():this._nextBtn.isEnabled()?this._nextBtn.focus():this._toggleSelectionFind.enabled?this._toggleSelectionFind.focus():this._closeBtn.isEnabled()&&this._closeBtn.focus(),p.preventDefault())
    }));
    const l=this._register(F6());
    this._replaceBtn=this._register(new WZ({
      label:Tvg+this._keybindingLabelFor(bE.ReplaceOneAction),icon:gQl,hoverDelegate:l,onTrigger:()=>{
        this._controller.replace()
      },onKeyDown:p=>{
        p.equals(1026)&&(this._closeBtn.focus(),p.preventDefault())
      }
    }, this._hoverService)), this._replaceAllBtn=this._register(new WZ({
      label:Ivg+this._keybindingLabelFor(bE.ReplaceAllAction),icon:fQl,hoverDelegate:l,onTrigger:()=>{
        this._controller.replaceAll()
      }
    }, this._hoverService));
    const u=document.createElement("div");
    u.className="replace-part", u.appendChild(this._replaceInput.domNode);
    const d=document.createElement("div");
    d.className="replace-actions", u.appendChild(d), d.appendChild(this._replaceBtn.domNode), d.appendChild(this._replaceAllBtn.domNode), this._toggleReplaceBtn=this._register(new WZ({
      label:Dvg,className:"codicon toggle left",onTrigger:()=>{
        this._state.change({
          isReplaceRevealed:!this._isReplaceVisible
        },!1),this._isReplaceVisible&&(this._replaceInput.width=jP(this._findInput.domNode),this._replaceInput.inputBox.layout()),this._showViewZone()
      }
    }, this._hoverService)), this._toggleReplaceBtn.setExpanded(this._isReplaceVisible), this._domNode=document.createElement("div"), this._domNode.className="editor-widget find-widget", this._domNode.setAttribute("aria-hidden", "true"), this._domNode.ariaLabel=Avg, this._domNode.role="dialog", this._domNode.style.width=`${V1e}px`, this._domNode.appendChild(this._toggleReplaceBtn.domNode), this._domNode.appendChild(o), this._domNode.appendChild(this._closeBtn.domNode), this._domNode.appendChild(u), this._resizeSash=this._register(new Qde(this._domNode, this, {
      orientation:0,size:2
    })), this._resized=!1;
    let m=V1e;
    this._register(this._resizeSash.onDidStart(()=>{
      m=jP(this._domNode)
    })), this._register(this._resizeSash.onDidChange(p=>{
      this._resized=!0;
      const g=m+p.startX-p.currentX;
      if(g<V1e)return;
      const f=parseFloat(w4t(this._domNode).maxWidth)||0;
      g>f||(this._domNode.style.width=`${g}px`,this._isReplaceVisible&&(this._replaceInput.width=jP(this._findInput.domNode)),this._findInput.inputBox.layout(),this._tryUpdateHeight())
    })), this._register(this._resizeSash.onDidReset(()=>{
      const p=jP(this._domNode);
      if(p<V1e)return;
      let g=V1e;
      if(!this._resized||p===V1e){
        const f=this._codeEditor.getLayoutInfo();
        g=f.width-28-f.minimap.minimapWidth-15,this._resized=!0
      }
      this._domNode.style.width=`${g}px`,this._isReplaceVisible&&(this._replaceInput.width=jP(this._findInput.domNode)),this._findInput.inputBox.layout()
    }))
  }
  updateAccessibilitySupport(){
    const e=this._codeEditor.getOption(2);
    this._findInput.setFocusInputOnOptionClick(e!==2)
  }
  getViewState(){
    let e=!1;
    return this._viewZone&&this._viewZoneId&&(e=this._viewZone.heightInPx>this._codeEditor.getScrollTop()), {
      widgetViewZoneVisible:e,scrollTop:this._codeEditor.getScrollTop()
    }
  }
  setViewState(e){
    e&&e.widgetViewZoneVisible&&this._layoutViewZone(e.scrollTop)
  }
}, WZ=class extends HR{
  constructor(n, e){
    super(), this._opts=n;
    let t="button";
    this._opts.className&&(t=t+" "+this._opts.className), this._opts.icon&&(t=t+" "+Qt.asClassName(this._opts.icon)), this._domNode=document.createElement("div"), this._domNode.tabIndex=0, this._domNode.className=t, this._domNode.setAttribute("role", "button"), this._domNode.setAttribute("aria-label", this._opts.label), this._register(e.setupManagedHover(n.hoverDelegate??Sm("element"), this._domNode, this._opts.label)), this.onclick(this._domNode, i=>{
      this._opts.onTrigger(),i.preventDefault()
    }), this.onkeydown(this._domNode, i=>{
      if(i.equals(10)||i.equals(3)){
        this._opts.onTrigger(),i.preventDefault();
        return
      }
      this._opts.onKeyDown?.(i)
    })
  }
  get domNode(){
    return this._domNode
  }
  isEnabled(){
    return this._domNode.tabIndex>=0
  }
  focus(){
    this._domNode.focus()
  }
  setEnabled(n){
    this._domNode.classList.toggle("disabled", !n), this._domNode.setAttribute("aria-disabled", String(!n)), this._domNode.tabIndex=n?0:-1
  }
  setExpanded(n){
    this._domNode.setAttribute("aria-expanded", String(!!n)), n?(this._domNode.classList.remove(...Qt.asClassNameArray(hQl)), this._domNode.classList.add(...Qt.asClassNameArray(mQl))):(this._domNode.classList.remove(...Qt.asClassNameArray(mQl)), this._domNode.classList.add(...Qt.asClassNameArray(hQl)))
  }
}, HI((n, e)=>{
  const t=n.getColor(J5e);
  t&&e.addRule(`.monaco-editor .findMatch { border: 1px ${Poe(n.type)?"dotted":"solid"} ${t}; box-sizing: border-box; }`);
  const i=n.getColor(yuh);
  i&&e.addRule(`.monaco-editor .findScope { border: 1px ${Poe(n.type)?"dashed":"solid"} ${i}; }`);
  const r=n.getColor(Du);
  r&&e.addRule(`.monaco-editor .find-widget { border: 1px solid ${r}; }`);
  const s=n.getColor(buh);
  s&&e.addRule(`.monaco-editor .findMatchInline { color: ${s}; }`);
  const o=n.getColor(vuh);
  o&&e.addRule(`.monaco-editor .currentFindMatchInline { color: ${o}; }`)
})
}
}), Het, Ila, MCA=