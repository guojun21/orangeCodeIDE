// Module: out-build/vs/editor/contrib/suggest/browser/suggestWidgetDetails.js
// Offset: 25383823 (bundle byte offset)
// Size: 9591 bytes

ri(), zI(), qi(), Jr(), yn(), tg(), rt(), oN(), eUn(), Ht(), Wt(), Jla=class{
  constructor(e, t){
    this._editor=e, this._onDidClose=new Qe, this.onDidClose=this._onDidClose.event, this._onDidChangeContents=new Qe, this.onDidChangeContents=this._onDidChangeContents.event, this._disposables=new Ut, this._renderDisposeable=new Ut, this._borderWidth=1, this._size=new Lu(330, 0), this.domNode=Ct(".suggest-details"), this.domNode.classList.add("no-docs"), this._markdownRenderer=t.createInstance(sL, {
      editor:e
    }), this._body=Ct(".body"), this._scrollbar=new vF(this._body, {
      alwaysConsumeMouseWheel:!0
    }), Rt(this.domNode, this._scrollbar.getDomNode()), this._disposables.add(this._scrollbar), this._header=Rt(this._body, Ct(".header")), this._close=Rt(this._header, Ct("span"+Qt.asCSSSelector(Be.close))), this._close.title=_(1630, null), this._close.role="button", this._close.tabIndex=-1, this._type=Rt(this._header, Ct("p.type")), this._docs=Rt(this._body, Ct("p.docs")), this._configureFont(), this._disposables.add(this._editor.onDidChangeConfiguration(i=>{
      i.hasChanged(52)&&this._configureFont()
    }))
  }
  dispose(){
    this._disposables.dispose(), this._renderDisposeable.dispose()
  }
  _configureFont(){
    const e=this._editor.getOptions(), t=e.get(52), i=t.getMassagedFontFamily(), r=e.get(124)||t.fontSize, s=e.get(125)||t.lineHeight, o=t.fontWeight, a=`${r}px`, l=`${s}px`;
    this.domNode.style.fontSize=a, this.domNode.style.lineHeight=`${s/r}`, this.domNode.style.fontWeight=o, this.domNode.style.fontFeatureSettings=t.fontFeatureSettings, this._type.style.fontFamily=i, this._close.style.height=l, this._close.style.width=l
  }
  getLayoutInfo(){
    const e=this._editor.getOption(125)||this._editor.getOption(52).lineHeight, t=this._borderWidth, i=t*2;
    return{
      lineHeight:e,borderWidth:t,borderHeight:i,verticalPadding:22,horizontalPadding:14
    }
  }
  renderLoading(){
    this._type.textContent=_(1631, null), this._docs.textContent="", this.domNode.classList.remove("no-docs", "no-type"), this.layout(this.size.width, this.getLayoutInfo().lineHeight*2), this._onDidChangeContents.fire(this)
  }
  renderItem(e, t){
    this._renderDisposeable.clear();
    let{
      detail:i,documentation:r
    }
    =e.completion;
    if(t){
      let s="";
      s+=`score: ${e.score[0]}
`,s+=`prefix: ${e.word??"(no prefix)"}
`,s+=`word: ${e.completion.filterText?e.completion.filterText+" (filterText)":e.textLabel}
`,s+=`distance: ${e.distance} (localityBonus-setting)
`,s+=`index: ${e.idx}, based on ${e.completion.sortText&&`sortText: "${e.completion.sortText}"`||"label"}
`,s+=`commit_chars: ${e.completion.commitCharacters?.join("")}
`,r=new _c().appendCodeblock("empty",s),i=`Provider: ${e.provider._debugDisplayName}`
    }
    if(!t&&!mjl(e)){
      this.clearContents();
      return
    }
    if(this.domNode.classList.remove("no-docs", "no-type"), i){
      const s=i.length>1e5?`${i.substr(0,1e5)}\u2026`:i;
      this._type.textContent=s,this._type.title=s,gv(this._type),this._type.classList.toggle("auto-wrap",!/\r?\n^\s+/gmi.test(s))
    }
    else th(this._type), this._type.title="", Ng(this._type), this.domNode.classList.add("no-type");
    if(th(this._docs), typeof r=="string")this._docs.classList.remove("markdown-docs"), this._docs.textContent=r;
    else if(r){
      this._docs.classList.add("markdown-docs"),th(this._docs);
      const s=this._markdownRenderer.render(r,{
        asyncRenderCallback:()=>{
          this.layout(this._size.width,this._type.clientHeight+this._docs.clientHeight),this._onDidChangeContents.fire(this)
        }
      });
      this._docs.appendChild(s.element),this._renderDisposeable.add(s)
    }
    this.domNode.classList.toggle("detail-and-doc", !!i&&!!r), this.domNode.style.userSelect="text", this.domNode.tabIndex=-1, this._close.onmousedown=s=>{
      s.preventDefault(),s.stopPropagation()
    }, this._close.onclick=s=>{
      s.preventDefault(),s.stopPropagation(),this._onDidClose.fire()
    }, this._body.scrollTop=0, this.layout(this._size.width, this._type.clientHeight+this._docs.clientHeight), this._onDidChangeContents.fire(this)
  }
  clearContents(){
    this.domNode.classList.add("no-docs"), this._type.textContent="", this._docs.textContent=""
  }
  get isEmpty(){
    return this.domNode.classList.contains("no-docs")
  }
  get size(){
    return this._size
  }
  layout(e, t){
    const i=new Lu(e, t);
    Lu.equals(i, this._size)||(this._size=i, Jgt(this.domNode, e, t)), this._scrollbar.scanDomNode()
  }
  scrollDown(e=8){
    this._body.scrollTop+=e
  }
  scrollUp(e=8){
    this._body.scrollTop-=e
  }
  scrollTop(){
    this._body.scrollTop=0
  }
  scrollBottom(){
    this._body.scrollTop=this._body.scrollHeight
  }
  pageDown(){
    this.scrollDown(80)
  }
  pageUp(){
    this.scrollUp(80)
  }
  set borderWidth(e){
    this._borderWidth=e
  }
  get borderWidth(){
    return this._borderWidth
  }
  focus(){
    this.domNode.focus()
  }
}, Jla=__decorate([__param(1, ln)], Jla), Dyg=class{
  constructor(n, e){
    this.widget=n, this._editor=e, this.allowEditorOverflow=!0, this._disposables=new Ut, this._added=!1, this._preferAlignAtTop=!0, this._resizable=new G9t, this._resizable.domNode.classList.add("suggest-details-container"), this._resizable.domNode.appendChild(n.domNode), this._resizable.enableSashes(!1, !0, !0, !1);
    let t, i, r=0, s=0;
    this._disposables.add(this._resizable.onDidWillResize(()=>{
      t=this._topLeft,i=this._resizable.size
    })), this._disposables.add(this._resizable.onDidResize(o=>{
      if(t&&i){
        this.widget.layout(o.dimension.width,o.dimension.height);
        let a=!1;
        o.west&&(s=i.width-o.dimension.width,a=!0),o.north&&(r=i.height-o.dimension.height,a=!0),a&&this._applyTopLeft({
          top:t.top+r,left:t.left+s
        })
      }
      o.done&&(t=void 0,i=void 0,r=0,s=0,this._userSize=o.dimension)
    })), this._disposables.add(this.widget.onDidChangeContents(()=>{
      this._anchorBox&&this._placeAtAnchor(this._anchorBox,this._userSize??this.widget.size,this._preferAlignAtTop)
    }))
  }
  dispose(){
    this._resizable.dispose(), this._disposables.dispose(), this.hide()
  }
  getId(){
    return"suggest.details"
  }
  getDomNode(){
    return this._resizable.domNode
  }
  getPosition(){
    return this._topLeft?{
      preference:this._topLeft
    }
    :null
  }
  show(){
    this._added||(this._editor.addOverlayWidget(this), this._added=!0)
  }
  hide(n=!1){
    this._resizable.clearSashHoverState(), this._added&&(this._editor.removeOverlayWidget(this), this._added=!1, this._anchorBox=void 0, this._topLeft=void 0), n&&(this._userSize=void 0, this.widget.clearContents())
  }
  placeAtAnchor(n, e){
    const t=n.getBoundingClientRect();
    this._anchorBox=t, this._preferAlignAtTop=e, this._placeAtAnchor(this._anchorBox, this._userSize??this.widget.size, e)
  }
  _placeAtAnchor(n, e, t){
    const i=DY(this.getDomNode().ownerDocument.body), r=this.widget.getLayoutInfo(), s=new Lu(220, 2*r.lineHeight), o=n.top, a=(function(){
      const B=i.width-(n.left+n.width+r.borderWidth+r.horizontalPadding),R=-r.borderWidth+n.left+n.width,N=new Lu(B,i.height-n.top-r.borderHeight-r.verticalPadding),M=N.with(void 0,n.top+n.height-r.borderHeight-r.verticalPadding);
      return{
        top:o,left:R,fit:B-e.width,maxSizeTop:N,maxSizeBottom:M,minSize:s.with(Math.min(B,s.width))
      }
    })(), l=(function(){
      const B=n.left-r.borderWidth-r.horizontalPadding,R=Math.max(r.horizontalPadding,n.left-e.width-r.borderWidth),N=new Lu(B,i.height-n.top-r.borderHeight-r.verticalPadding),M=N.with(void 0,n.top+n.height-r.borderHeight-r.verticalPadding);
      return{
        top:o,left:R,fit:B-e.width,maxSizeTop:N,maxSizeBottom:M,minSize:s.with(Math.min(B,s.width))
      }
    })(), u=(function(){
      const B=n.left,R=-r.borderWidth+n.top+n.height,N=new Lu(n.width-r.borderHeight,i.height-n.top-n.height-r.verticalPadding);
      return{
        top:R,left:B,fit:N.height-e.height,maxSizeBottom:N,maxSizeTop:N,minSize:s.with(N.width)
      }
    })(), d=[a, l, u], m=d.find(B=>B.fit>=0)??d.sort((B, R)=>R.fit-B.fit)[0], p=n.top+n.height-r.borderHeight;
    let g, f=e.height;
    const A=Math.max(m.maxSizeTop.height, m.maxSizeBottom.height);
    f>A&&(f=A);
    let w;
    t?f<=m.maxSizeTop.height?(g=!0, w=m.maxSizeTop):(g=!1, w=m.maxSizeBottom):f<=m.maxSizeBottom.height?(g=!1, w=m.maxSizeBottom):(g=!0, w=m.maxSizeTop);
    let{
      top:C,left:x
    }
    =m;
    !g&&f>n.height&&(C=p-f);
    const I=this._editor.getDomNode();
    if(I){
      const B=I.getBoundingClientRect();
      C-=B.top,x-=B.left
    }
    this._applyTopLeft({
      left:x,top:C
    }), this._resizable.enableSashes(!g, m===a, g, m!==a), this._resizable.minSize=m.minSize, this._resizable.maxSize=w, this._resizable.layout(f, Math.min(w.width, e.width)), this.widget.layout(this._resizable.size.width, this._resizable.size.height)
  }
  _applyTopLeft(n){
    this._topLeft=n, this._editor.layoutOverlayWidget(this)
  }
}
}
});
function yS(n, e, t, i, r){
  if(i===xg.PULL_REQUEST)return["codicon-git-pull-request", "predefined-file-icon"];
  if(Qt.isThemeIcon(r))return[`codicon-${r.id}`, "predefined-file-icon"];
  if(je.isUri(r))return[];
  const s=i===xg.ROOT_FOLDER?["rootfolder-icon"]:i===xg.FOLDER?["folder-icon"]:["file-icon"];
  if(t){
    let o;
    if(t.scheme===_n.data)o=Nze.parseMetaData(t).get(Nze.META_DATA_LABEL);
    else{
      const a=t.path.match(Ryg);
      a?(o=Adn(a[2].toLowerCase()),a[1]&&s.push(`${Adn(a[1].toLowerCase())}-name-dir-icon`)):o=Adn(t.authority.toLowerCase())
    }
    if(i===xg.ROOT_FOLDER)s.push(`${o}-root-name-folder-icon`);
    else if(i===xg.FOLDER)s.push(`${o}-name-folder-icon`);
    else{
      if(o){
        if(s.push(`${o}-name-file-icon`),s.push("name-file-icon"),o.length<=255){
          const l=o.split(".");
          for(let u=1;
          u<l.length;
          u++)s.push(`${l.slice(u).join(".")}-ext-file-icon`)
        }
        s.push("ext-file-icon")
      }
      let a=HSA(n,e,t);
      a&&a.startsWith("worktree-")&&(a=a.substring(9)),a&&s.push(`${Adn(a)}-lang-file-icon`)
    }
  }
  return t&&JSA(t)&&s.push("plan-file-icon"), s
}
function vdn(n){
  return["file-icon", `${Adn(n)}-lang-file-icon`]
}
function HSA(n, e, t){
  if(!t)return null;
  let i=null;
  if(t.scheme===_n.data){
    const s=Nze.parseMetaData(t).get(Nze.META_DATA_MIME);
    s&&(i=e.getLanguageIdByMimeType(s))
  }
  else{
    if(t.scheme===_n.aiChat)return"cursor-ai";
    {
      const r=n.getModel(t);
      r&&(i=r.getLanguageId())
    }
  }
  return i&&i!==o_?i:e.guessLanguageIdByFilepathOrFirstLine(t)
}
function Adn(n){
  return n.replace(/[\s]/g, "/")
}
function JSA(n){
  return!!(n.scheme===_n.cursorPlan||n.path.toLowerCase().endsWith(".plan.md"))
}
var Ryg, oR=