// Module: out-build/vs/editor/contrib/hover/browser/markdownHoverParticipant.js
// Offset: 24717318 (bundle byte offset)
// Size: 9710 bytes

ri(), Vs(), Po(), tg(), rt(), oN(), u$o(), ts(), Ku(), mhe(), Ht(), Ei(), Fc(), Cm(), Tg(), Pm(), qi(), Jr(), _s(), ka(), W9t(), Id(), vr(), iGh(), hs(), rGh(), of(), J0(), Ud(), Pa(), _r(), wet(), wet(), Dd(), vr(), ml(), PAe=Ct, Omg=us("hover-increase-verbosity", Be.add, _(1275, null)), Umg=us("hover-decrease-verbosity", Be.remove, _(1276, null)), cme=class{
  constructor(n, e, t, i, r, s=void 0){
    this.owner=n, this.range=e, this.contents=t, this.isBeforeContent=i, this.ordinal=r, this.source=s
  }
  isValidForHoverAnchor(n){
    return n.type===1&&this.range.startColumn<=n.range.startColumn&&this.range.endColumn>=n.range.endColumn
  }
}, bGl=class{
  constructor(n, e, t){
    this.hover=n, this.hoverProvider=e, this.hoverPosition=t
  }
  supportsVerbosityAction(n){
    switch(n){
      case b3.Increase:return this.hover.canIncreaseVerbosity??!1;
      case b3.Decrease:return this.hover.canDecreaseVerbosity??!1
    }
  }
}, wun=class{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p){
    this._editor=e, this._languageService=t, this._openerService=i, this._configurationService=r, this._languageFeaturesService=s, this._keybindingService=o, this._hoverService=a, this._commandService=l, this._composerService=u, this._analyticsService=d, this._telemetryService=m, this._reactiveStorageService=p, this.hoverOrdinal=3
  }
  createLoadingMessage(e){
    return new cme(this, e.range, [new _c().appendText(_(1277, null))], !1, 2e3)
  }
  computeSync(e, t){
    if(!this._editor.hasModel()||e.type!==1)return[];
    if(this._editor.isChatCodeblock===!0)return[];
    const i=this._editor.getModel(), r=e.range.startLineNumber, s=i.getLineMaxColumn(r), o=[];
    let a=1e3;
    const l=i.getLineLength(r), u=i.getLanguageIdAtPosition(e.range.startLineNumber, e.range.startColumn), d=this._editor.getOption(122), m=this._configurationService.getValue("editor.maxTokenizationLineLength", {
      overrideIdentifier:u
    });
    let p=!1;
    d>=0&&l>d&&e.range.startColumn>=d&&(p=!0, o.push(new cme(this, e.range, [{
      value:_(1278,null)
    }
    ], !1, a++))), !p&&typeof m=="number"&&l>=m&&o.push(new cme(this, e.range, [{
      value:_(1279,null)
    }
    ], !1, a++));
    let g=!1;
    for(const f of t){
      const A=f.range.startLineNumber===r?f.range.startColumn:1,w=f.range.endLineNumber===r?f.range.endColumn:s,C=f.options.hoverMessage;
      if(!C||y3t(C))continue;
      f.options.beforeContentClassName&&(g=!0);
      const x=new Zt(e.range.startLineNumber,A,e.range.startLineNumber,w);
      o.push(new cme(this,x,aW(C),g,a++))
    }
    return o
  }
  computeAsync(e, t, i, r){
    if(!this._editor.hasModel()||e.type!==1||this._editor.isChatCodeblock===!0)return IH.EMPTY;
    const s=this._editor.getModel(), o=this._languageFeaturesService.hoverProvider;
    return o.has(s)?this._getMarkdownHovers(o, s, e, r):IH.EMPTY
  }
  _getMarkdownHovers(e, t, i, r){
    if(this._editor.isChatCodeblock===!0)return IH.EMPTY;
    const s=i.range.getStartPosition();
    return F5c(e, t, s, r).filter(l=>!y3t(l.hover.contents)).map(l=>{
      const u=l.hover.range?Zt.lift(l.hover.range):i.range,d=new bGl(l.hover,l.provider,s);
      return new cme(this,u,l.hover.contents,!1,l.ordinal,d)
    })
  }
  renderHoverParts(e, t){
    return this._renderedHoverParts=new $mg(t, e.fragment, this, this._editor, this._languageService, this._openerService, this._commandService, this._keybindingService, this._hoverService, this._configurationService, this._composerService, this._analyticsService, this._telemetryService, this._languageFeaturesService, this._reactiveStorageService, e.onContentsChanged), this._renderedHoverParts
  }
  handleScroll(e){
    this._renderedHoverParts?.handleScroll(e)
  }
  getAccessibleContent(e){
    return this._renderedHoverParts?.getAccessibleContent(e)??""
  }
  doesMarkdownHoverAtIndexSupportVerbosityAction(e, t){
    return this._renderedHoverParts?.doesMarkdownHoverAtIndexSupportVerbosityAction(e, t)??!1
  }
  updateMarkdownHoverVerbosityLevel(e, t){
    return Promise.resolve(this._renderedHoverParts?.updateMarkdownHoverPartVerbosityLevel(e, t))
  }
}, wun=__decorate([__param(1, Jl), __param(2, Ja), __param(3, Fn), __param(4, $u), __param(5, mo), __param(6, Kc), __param(7, fr), __param(8, ag), __param(9, uh), __param(10, ea), __param(11, ku)], wun), mpi=class{
  constructor(n, e, t, i){
    this.hoverPart=n, this.hoverElement=e, this.disposables=t, this.actionsContainer=i
  }
  get hoverAccessibleContent(){
    return this.hoverElement.innerText.trim()
  }
  dispose(){
    this.disposables.dispose()
  }
}, $mg=class{
  constructor(n, e, t, i, r, s, o, a, l, u, d, m, p, g, f, A){
    this._hoverParticipant=t, this._editor=i, this._languageService=r, this._openerService=s, this._commandService=o, this._keybindingService=a, this._hoverService=l, this._configurationService=u, this._composerService=d, this._analyticsService=m, this._telemetryService=p, this._languageFeaturesService=g, this._reactiveStorageService=f, this._onFinishedRendering=A, this._ongoingHoverOperations=new Map, this._disposables=new Ut, this.renderedHoverParts=this._renderHoverParts(n, e, this._onFinishedRendering), this._disposables.add($i(()=>{
      this.renderedHoverParts.forEach(w=>{
        w.dispose()
      }),this._ongoingHoverOperations.forEach(w=>{
        w.tokenSource.dispose(!0)
      })
    }))
  }
  _renderHoverParts(n, e, t){
    return n.sort(JP(i=>i.ordinal, p9)), n.map(i=>{
      const r=this._renderHoverPart(i,t);
      return e.appendChild(r.hoverElement),r
    })
  }
  _renderHoverPart(n, e){
    const t=this._renderMarkdownHover(n, e), i=t.hoverElement, r=n.source, s=new Ut;
    if(s.add(t), !r)return new mpi(n, i, s);
    const o=r.supportsVerbosityAction(b3.Increase), a=r.supportsVerbosityAction(b3.Decrease);
    if(!o&&!a)return new mpi(n, i, s);
    const l=PAe("div.verbosity-actions");
    i.prepend(l);
    const u=PAe("div.verbosity-actions-inner");
    return l.append(u), s.add(this._renderHoverExpansionAction(u, b3.Increase, o)), s.add(this._renderHoverExpansionAction(u, b3.Decrease, a)), new mpi(n, i, s, u)
  }
  _renderMarkdownHover(n, e){
    const t=document.createElement("div"), i=PAe("div.hover-row");
    t.appendChild(i), i.tabIndex=0;
    const r=Mmg(this._editor, n, this._languageService, this._openerService, e);
    return i.appendChild(r.hoverElement), this._configurationService.getValue(XCc)&&!1&&this._checkDefinitionsAndAddButton(t, n, e), {
      hoverPart:n,hoverElement:t,dispose:()=>{
        r.dispose()
      }
    }
  }
  async _checkDefinitionsAndAddButton(n, e, t){
    const i=this._editor.getModel();
    if(!i)return;
    const r=await this._getFirstNDefinitionsAtLocation(this._editor, 3, e.range.getStartPosition(), this._languageFeaturesService);
    if(r.length>0){
      const s=PAe("div.fix-buttons-container");
      n.appendChild(s);
      const o=PAe("div.fix-buttons-row");
      s.appendChild(o);
      const a=_$o("Add to Composer",!0,this._composerService,this._analyticsService,this._telemetryService,"",i.uri.toString(),e.range,!0,this._editor);
      o.appendChild(a);
      const l="Chat",u=(p,g,f,A,w,C)=>{
        const x=new Hu(()=>{
          p.textContent=A,p.style.opacity="0.5",p.style.pointerEvents="none"
        },500);
        return async I=>{
          I.preventDefault(),I.stopPropagation();
          const R=I.ctrlKey||I.metaKey?f:g;
          x.schedule();
          try{
            await this._commandService.executeCommand(R,{
              locationLinks:r,positionOverride:e.range.getStartPosition(),uri:i.uri
            },C?"chat":void 0)
          }
          finally{
            x.cancel(),p.textContent=w,p.style.opacity="1",p.style.pointerEvents="auto"
          }
        }
      };
      a.onclick=u(a,N1e,hun,`Adding to ${l}...`,`Add to ${l}`,!1);
      const d=PAe("div.fix-buttons-hint"),m=Fs?"\u2318":"Ctrl";
      d.textContent=`${m}+click to add to new tab`,s.appendChild(d),t()
    }
  }
  async _getFirstNDefinitionsAtLocation(n, e, t, i){
    const r=n.getModel();
    return r===null||t===null?[]:(await RAe(()=>F1e(i.definitionProvider, r, t, !1, Cs.None))).slice(0, e)
  }
  _renderHoverExpansionAction(n, e, t){
    const i=new Ut, r=e===b3.Increase, s=Rt(n, PAe(Qt.asCSSSelector(r?Omg:Umg)));
    s.tabIndex=0;
    const o=new Yoe("mouse", void 0, {
      target:n,position:{
        hoverPosition:0
      }
    }, this._configurationService, this._hoverService);
    if(i.add(this._hoverService.setupManagedHover(o, s, Fmg(this._keybindingService, e))), !t)return s.classList.add("disabled"), i;
    s.classList.add("enabled");
    const a=()=>this._commandService.executeCommand(e===b3.Increase?Lvt:Nvt, {
      focus:!0
    });
    return i.add(new R5c(s, a)), i.add(new P5c(s, a, [3, 10])), i
  }
  handleScroll(n){
    this.renderedHoverParts.forEach(e=>{
      const t=e.actionsContainer;
      if(!t)return;
      const i=e.hoverElement,s=n.scrollTop+n.height,o=i.offsetTop,a=i.clientHeight,l=o+a,u=22;
      let d;
      l<=s||o>=s?d=a-u:d=s-o-u,t.style.top=`${d}px`
    })
  }
  async updateMarkdownHoverPartVerbosityLevel(n, e){
    const t=this._editor.getModel();
    if(!t)return;
    const i=this._getRenderedHoverPartAtIndex(e), r=i?.hoverPart.source;
    if(!i||!r?.supportsVerbosityAction(n))return;
    const s=await this._fetchHover(r, t, n);
    if(!s)return;
    const o=new bGl(s, r.hoverProvider, r.hoverPosition), a=i.hoverPart, l=new cme(this._hoverParticipant, a.range, s.contents, a.isBeforeContent, a.ordinal, o), u=this._updateRenderedHoverPart(e, l);
    if(u)return{
      hoverPart:l,hoverElement:u.hoverElement
    }
  }
  getAccessibleContent(n){
    const e=this.renderedHoverParts.findIndex(s=>s.hoverPart===n);
    if(e===-1)return;
    const t=this._getRenderedHoverPartAtIndex(e);
    return t?t.hoverElement.innerText.replace(/[^\S\n\r]+/gu, " "):void 0
  }
  doesMarkdownHoverAtIndexSupportVerbosityAction(n, e){
    const t=this._getRenderedHoverPartAtIndex(n), i=t?.hoverPart.source;
    return!(!t||!i?.supportsVerbosityAction(e))
  }
  async _fetchHover(n, e, t){
    let i=t===b3.Increase?1:-1;
    const r=n.hoverProvider, s=this._ongoingHoverOperations.get(r);
    s&&(s.tokenSource.cancel(), i+=s.verbosityDelta);
    const o=new Wc;
    this._ongoingHoverOperations.set(r, {
      verbosityDelta:i,tokenSource:o
    });
    const a={
      verbosityRequest:{
        verbosityDelta:i,previousHover:n.hover
      }
    };
    let l;
    try{
      l=await Promise.resolve(r.provideHover(e,n.hoverPosition,o.token,a))
    }
    catch(u){
      JE(u)
    }
    return o.dispose(), this._ongoingHoverOperations.delete(r), l
  }
  _updateRenderedHoverPart(n, e){
    if(n>=this.renderedHoverParts.length||n<0)return;
    const t=this._renderHoverPart(e, this._onFinishedRendering), i=this.renderedHoverParts[n], r=i.hoverElement, s=t.hoverElement, o=Array.from(s.children);
    r.replaceChildren(...o);
    const a=new mpi(e, r, t.disposables, t.actionsContainer);
    return i.dispose(), this.renderedHoverParts[n]=a, a
  }
  _getRenderedHoverPartAtIndex(n){
    return this.renderedHoverParts[n]
  }
  dispose(){
    this._disposables.dispose()
  }
}
}
}), _et=