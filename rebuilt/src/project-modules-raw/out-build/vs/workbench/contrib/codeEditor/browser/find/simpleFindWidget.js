// Module: out-build/vs/workbench/contrib/codeEditor/browser/find/simpleFindWidget.js
// Offset: 34098093 (bundle byte offset)
// Size: 9559 bytes

Apy(), Ht(), ri(), $4(), vr(), wla(), Tla(), WAe(), Pm(), Io(), oa(), odn(), Ew(), $b(), jSe(), Nl(), Nqf=_(5760, null), Mqf=_(5761, null), Fqf=_(5762, null), Oqf=_(5763, null), Uqf=_(5764, null), h1i=310, $qf=73, Grt=class extends HR{
  constructor(n, e, t, i, r){
    super(), this._keybindingService=r, this._isVisible=!1, this._foundMatch=!1, this._width=0, this.state=this._register(new pgi), this._matchesLimit=n.matchesLimit??Number.MAX_SAFE_INTEGER, this._findInput=this._register(new rdn(null, e, {
      label:Nqf,placeholder:Mqf,validation:a=>{
        if(a.length===0||!this._findInput.getRegex())return null;
        try{
          return new RegExp(a),null
        }
        catch(l){
          return this._foundMatch=!1,this.updateButtons(this._foundMatch),{
            content:l.message
          }
        }
      },showCommonFindToggles:n.showCommonFindToggles,appendCaseSensitiveLabel:n.appendCaseSensitiveActionId?this._getKeybinding(n.appendCaseSensitiveActionId):void 0,appendRegexLabel:n.appendRegexActionId?this._getKeybinding(n.appendRegexActionId):void 0,appendWholeWordsLabel:n.appendWholeWordsActionId?this._getKeybinding(n.appendWholeWordsActionId):void 0,showHistoryHint:()=>qet(r),inputBoxStyles:g2,toggleStyles:KH
    }, t)), this._updateHistoryDelayer=this._register(new Nv(500)), this._register(this._findInput.onInput(async a=>{
      (!n.checkImeCompletionState||!this._findInput.isImeSessionInProgress)&&(this._foundMatch=this._onInputChanged(),n.showResultCount&&await this.updateResultCount(),this.updateButtons(this._foundMatch),this.focusFindBox(),this._delayedUpdateHistory())
    })), this._findInput.setRegex(!!this.state.isRegex), this._findInput.setCaseSensitive(!!this.state.matchCase), this._findInput.setWholeWords(!!this.state.wholeWord), this._register(this._findInput.onDidOptionChange(()=>{
      this.state.change({
        isRegex:this._findInput.getRegex(),wholeWord:this._findInput.getWholeWords(),matchCase:this._findInput.getCaseSensitive()
      },!0)
    })), this._register(this.state.onFindReplaceStateChange(()=>{
      this._findInput.setRegex(this.state.isRegex),this._findInput.setWholeWords(this.state.wholeWord),this._findInput.setCaseSensitive(this.state.matchCase),this.findFirst()
    })), this.prevBtn=this._register(new WZ({
      label:Fqf+(n.previousMatchActionId?this._getKeybinding(n.previousMatchActionId):""),icon:Sla,onTrigger:()=>{
        this.find(!0)
      }
    }, i)), this.nextBtn=this._register(new WZ({
      label:Oqf+(n.nextMatchActionId?this._getKeybinding(n.nextMatchActionId):""),icon:kla,onTrigger:()=>{
        this.find(!1)
      }
    }, i));
    const s=this._register(new WZ({
      label:Uqf+(n.closeWidgetActionId?this._getKeybinding(n.closeWidgetActionId):""),icon:E9e,onTrigger:()=>{
        this.hide()
      }
    }, i));
    this._innerDomNode=document.createElement("div"), this._innerDomNode.classList.add("simple-find-part"), this._innerDomNode.appendChild(this._findInput.domNode), this._innerDomNode.appendChild(this.prevBtn.domNode), this._innerDomNode.appendChild(this.nextBtn.domNode), this._innerDomNode.appendChild(s.domNode), this._domNode=document.createElement("div"), this._domNode.classList.add("simple-find-part-wrapper"), this._domNode.appendChild(this._innerDomNode), this.onkeyup(this._innerDomNode, a=>{
      if(a.equals(9)){
        this.hide(),a.preventDefault();
        return
      }
    }), this._focusTracker=this._register(CC(this._innerDomNode)), this._register(this._focusTracker.onDidFocus(this._onFocusTrackerFocus.bind(this))), this._register(this._focusTracker.onDidBlur(this._onFocusTrackerBlur.bind(this))), this._findInputFocusTracker=this._register(CC(this._findInput.domNode)), this._register(this._findInputFocusTracker.onDidFocus(this._onFindInputFocusTrackerFocus.bind(this))), this._register(this._findInputFocusTracker.onDidBlur(this._onFindInputFocusTrackerBlur.bind(this))), this._register(ei(this._innerDomNode, "click", a=>{
      a.stopPropagation()
    })), n?.showResultCount&&(this._domNode.classList.add("result-count"), this._matchesCount=document.createElement("div"), this._matchesCount.className="matchesCount", this._findInput.domNode.insertAdjacentElement("afterend", this._matchesCount), this._register(this._findInput.onDidChange(async()=>{
      await this.updateResultCount()
    })), this._register(this._findInput.onDidOptionChange(async()=>{
      this._foundMatch=this._onInputChanged(),await this.updateResultCount(),this.focusFindBox(),this._delayedUpdateHistory()
    })));
    let o=n?.initialWidth;
    if(o&&(o=o<h1i?h1i:o, this._domNode.style.width=`${o}px`), n?.enableSash){
      const a=o??h1i;
      let l=a;
      const u=this._register(new Qde(this._innerDomNode,this,{
        orientation:0,size:1
      }));
      this._register(u.onDidStart(()=>{
        l=parseFloat(w4t(this._domNode).width)
      })),this._register(u.onDidChange(d=>{
        const m=l+d.startX-d.currentX;
        m<a||(this._domNode.style.width=`${m}px`)
      })),this._register(u.onDidReset(d=>{
        parseFloat(w4t(this._domNode).width)===a?this._domNode.style.width="100%":this._domNode.style.width=`${a}px`
      }))
    }
  }
  getVerticalSashLeft(n){
    return 0
  }
  get inputValue(){
    return this._findInput.getValue()
  }
  get focusTracker(){
    return this._focusTracker
  }
  _getKeybinding(n){
    const e=this._keybindingService?.lookupKeybinding(n);
    return e?` (${e.getLabel()})`:""
  }
  dispose(){
    super.dispose(), this._domNode?.remove()
  }
  isVisible(){
    return this._isVisible
  }
  getDomNode(){
    return this._domNode
  }
  getFindInputDomNode(){
    return this._findInput.domNode
  }
  reveal(n, e=!0){
    if(n&&this._findInput.setValue(n), this._isVisible){
      this._findInput.select();
      return
    }
    this._isVisible=!0, this.updateResultCount(), this.layout(), setTimeout(()=>{
      this._innerDomNode.classList.toggle("suppress-transition",!e),this._innerDomNode.classList.add("visible","visible-transition"),this._innerDomNode.setAttribute("aria-hidden","false"),this._findInput.select(),e||setTimeout(()=>{
        this._innerDomNode.classList.remove("suppress-transition")
      },0)
    }, 0)
  }
  show(n){
    n&&!this._isVisible&&this._findInput.setValue(n), this._isVisible=!0, this.layout(), setTimeout(()=>{
      this._innerDomNode.classList.add("visible","visible-transition"),this._innerDomNode.setAttribute("aria-hidden","false")
    }, 0)
  }
  hide(n=!0){
    this._isVisible&&(this._innerDomNode.classList.toggle("suppress-transition", !n), this._innerDomNode.classList.remove("visible-transition"), this._innerDomNode.setAttribute("aria-hidden", "true"), setTimeout(()=>{
      this._isVisible=!1,this.updateButtons(this._foundMatch),this._innerDomNode.classList.remove("visible","suppress-transition")
    }, n?200:0))
  }
  layout(n=this._width){
    if(this._width=n, !!this._isVisible&&this._matchesCount){
      let e=!1;
      h1i+$qf+28>=n&&(e=!0),this._innerDomNode.classList.toggle("reduced-find-widget",e)
    }
  }
  _delayedUpdateHistory(){
    this._updateHistoryDelayer.trigger(this._updateHistory.bind(this))
  }
  _updateHistory(){
    this._findInput.inputBox.addToHistory()
  }
  _getRegexValue(){
    return this._findInput.getRegex()
  }
  _getWholeWordValue(){
    return this._findInput.getWholeWords()
  }
  _getCaseSensitiveValue(){
    return this._findInput.getCaseSensitive()
  }
  updateButtons(n){
    const e=this.inputValue.length>0;
    this.prevBtn.setEnabled(this._isVisible&&e&&n), this.nextBtn.setEnabled(this._isVisible&&e&&n)
  }
  focusFindBox(){
    this.nextBtn.focus(), this._findInput.inputBox.focus()
  }
  async updateResultCount(){
    if(!this._matchesCount){
      this.updateButtons(this._foundMatch);
      return
    }
    const n=await this._getResultCount();
    this._matchesCount.innerText="";
    const e=this.inputValue.length>0&&n?.resultCount===0;
    this._matchesCount.classList.toggle("no-results", e);
    let t="";
    if(n?.resultCount){
      let i=String(n.resultCount);
      n.resultCount>=this._matchesLimit&&(i+="+");
      let r=String(n.resultIndex+1);
      r==="0"&&(r="?"),t=B4(Ela,r,i)
    }
    else t=SCt;
    Ex(this._announceSearchResults(t, this.inputValue)), this._matchesCount.appendChild(document.createTextNode(t)), this._foundMatch=!!n&&n.resultCount>0, this.updateButtons(this._foundMatch)
  }
  changeState(n){
    this.state.change(n, !1)
  }
  _announceSearchResults(n, e){
    return e?n===SCt?e===""?_(5766, null, n):_(5767, null, n, e):_(5768, null, n, e):_(5765, null)
  }
}, qqf=Rn("simpleFindWidget.sashBorder", {
  dark:"#454545", light:"#C8C8C8", hcDark:"#6FC3DF", hcLight:"#0F4A85"
}, _(5769, null)), HI((n, e)=>{
  const t=n.getColor(qqf);
  e.addRule(`.monaco-workbench .simple-find-part .monaco-sash { background-color: ${t}; border-color: ${t} }`)
})
}
});
function xCu(n){
  const e=wr();
  let t, i;
  return Ic(()=>{
    if(!(!t||i)){
      try{
        const r=e.instantiationService.invokeFunction(d=>d.get(sy)),s=e.instantiationService.invokeFunction(d=>d.get(wi)),o=e.instantiationService.invokeFunction(d=>d.get(Kc)),a=e.instantiationService.invokeFunction(d=>d.get(mo));
        i=new Gqf(r,s,o,a,n.mountedEditors,n.multiDiffRef),t.appendChild(i.getDomNode()),n.onWidgetCreated(i);
        const u=e.instantiationService.invokeFunction(d=>d.get(fr)).onDidExecuteCommand(d=>{
          if(d.commandId==="actions.find"&&i){
            let m;
            for(const[p,{
              editor:g
            }
            ]of n.mountedEditors)if(g.hasTextFocus()){
              const f=g.getSelection();
              if(f&&!f.isEmpty()){
                const A=g.getModel();
                A&&f.startLineNumber===f.endLineNumber&&(m=A.getValueInRange(f))
              }
              break
            }
            i.isVisible()?m?(i.updateSearchString(m),setTimeout(()=>{
              i?.selectAllText()
            },0)):setTimeout(()=>{
              i?.focusFindBox(),i?.selectAllText()
            },0):(i.show(m),setTimeout(()=>{
              i?.focusFindBox(),m&&i?.selectAllText()
            },0))
          }
          else if(d.commandId==="editor.action.nextMatchFindAction"&&i){
            const m=document.activeElement,p=n.containerRef();
            if(!p||!p.contains(m))return;
            i.isVisible()||(i.show(),setTimeout(()=>{
              i?.focusFindBox()
            },0)),i.find(!1)
          }
          else if(d.commandId==="editor.action.previousMatchFindAction"&&i){
            const m=document.activeElement,p=n.containerRef();
            if(!p||!p.contains(m))return;
            i.isVisible()||(i.show(),setTimeout(()=>{
              i?.focusFindBox()
            },0)),i.find(!0)
          }
        });
        Ai(()=>{
          u.dispose()
        })
      }
      catch(r){
        console.error("[ReviewChangesPane] Failed to initialize find widget:",r)
      }
      Ai(()=>{
        i&&(i.dispose(),i=void 0)
      })
    }
  }), (()=>{
    var r=Hqf();
    return Bs(s=>{
      t=s,n.ref?.(s)
    }, r), r
  })()
}
var Hqf, Jqf, Gqf, TCu=