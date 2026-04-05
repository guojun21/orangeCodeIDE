// Module: out-build/vs/editor/contrib/hover/browser/contentHoverRendered.js
// Offset: 25105506 (bundle byte offset)
// Size: 6745 bytes

mhe(), rt(), eGh(), ka(), bv(), tl(), ts(), ri(), ppi(), ipg(), Ht(), jbg(), _s(), Id(), hla=nQl=class extends at{
  constructor(e, t, i, r, s, o){
    super();
    const a=t.hoverParts;
    this._renderedHoverParts=this._register(new mla(e, i, a, r, s, o));
    const l=t.options, u=l.anchor, {
      showAtPosition:d,showAtSecondaryPosition:m
    }
    =nQl.computeHoverPositions(e, u.range, a);
    this.shouldAppearBeforeContent=a.some(p=>p.isBeforeContent), this.showAtPosition=d, this.showAtSecondaryPosition=m, this.initialMousePosX=u.initialMousePosX, this.initialMousePosY=u.initialMousePosY, this.shouldFocus=l.shouldFocus, this.source=l.source
  }
  get domNode(){
    return this._renderedHoverParts.domNode
  }
  get domNodeHasChildren(){
    return this._renderedHoverParts.domNodeHasChildren
  }
  get focusedHoverPartIndex(){
    return this._renderedHoverParts.focusedHoverPartIndex
  }
  get hoverPartsCount(){
    return this._renderedHoverParts.hoverPartsCount
  }
  focusHoverPartWithIndex(e){
    this._renderedHoverParts.focusHoverPartWithIndex(e)
  }
  getAccessibleWidgetContent(){
    return this._renderedHoverParts.getAccessibleContent()
  }
  getAccessibleWidgetContentAtIndex(e){
    return this._renderedHoverParts.getAccessibleHoverContentAtIndex(e)
  }
  async updateHoverVerbosityLevel(e, t, i){
    this._renderedHoverParts.updateHoverVerbosityLevel(e, t, i)
  }
  doesHoverAtIndexSupportVerbosityAction(e, t){
    return this._renderedHoverParts.doesHoverAtIndexSupportVerbosityAction(e, t)
  }
  isColorPickerVisible(){
    return this._renderedHoverParts.isColorPickerVisible()
  }
  static computeHoverPositions(e, t, i){
    let r=1;
    if(e.hasModel()){
      const d=e._getViewModel(),m=d.coordinatesConverter,p=m.convertModelRangeToViewRange(t),g=d.getLineMinColumn(p.startLineNumber),f=new ar(p.startLineNumber,g);
      r=m.convertViewPositionToModelPosition(f).column
    }
    const s=t.startLineNumber;
    let o=t.startColumn, a;
    for(const d of i){
      const m=d.range,p=m.startLineNumber===s,g=m.endLineNumber===s;
      if(p&&g){
        const A=m.startColumn,w=Math.min(o,A);
        o=Math.max(w,r)
      }
      d.forceShowAtRange&&(a=m)
    }
    let l, u;
    if(a){
      const d=a.getStartPosition();
      l=d,u=d
    }
    else l=t.getStartPosition(), u=new ar(s, o);
    return{
      showAtPosition:l,showAtSecondaryPosition:u
    }
  }
}, hla=nQl=__decorate([__param(4, mo), __param(5, Kc)], hla), zbg=class{
  constructor(n, e){
    this._statusBar=e, n.appendChild(this._statusBar.hoverElement)
  }
  get hoverElement(){
    return this._statusBar.hoverElement
  }
  get actions(){
    return this._statusBar.actions
  }
  dispose(){
    this._statusBar.dispose()
  }
}, mla=class extends at{
  static{
    iQl=this
  }
  static{
    this._DECORATION_OPTIONS=Zh.register({
      description:"content-hover-highlight",className:"hoverHighlight"
    })
  }
  constructor(e, t, i, r, s, o){
    super(), this._renderedParts=[], this._focusedHoverPartIndex=-1, this._context=r, this._fragment=document.createDocumentFragment(), this._register(this._renderParts(t, i, r, s, o)), this._register(this._registerListenersOnRenderedParts()), this._register(this._createEditorDecorations(e, i)), this._updateMarkdownAndColorParticipantInfo(t)
  }
  _createEditorDecorations(e, t){
    if(t.length===0)return at.None;
    let i=t[0].range;
    for(const s of t){
      const o=s.range;
      i=Zt.plusRange(i,o)
    }
    const r=e.createDecorationsCollection();
    return r.set([{
      range:i,options:iQl._DECORATION_OPTIONS
    }
    ]), $i(()=>{
      r.clear()
    })
  }
  _renderParts(e, t, i, r, s){
    const o=new nUn(r, s), a={
      fragment:this._fragment,statusBar:o,...i
    }, l=new Ut;
    l.add(o);
    for(const d of e){
      const m=this._renderHoverPartsForParticipant(t,d,a);
      l.add(m);
      for(const p of m.renderedHoverParts)this._renderedParts.push({
        type:"hoverPart",participant:d,hoverPart:p.hoverPart,hoverElement:p.hoverElement
      })
    }
    const u=this._renderStatusBar(this._fragment, o);
    return u&&(l.add(u), this._renderedParts.push({
      type:"statusBar",hoverElement:u.hoverElement,actions:u.actions
    })), l
  }
  _renderHoverPartsForParticipant(e, t, i){
    const r=e.filter(o=>o.owner===t);
    return r.length>0?t.renderHoverParts(i, r):new nPe([])
  }
  _renderStatusBar(e, t){
    if(t.hasContent)return new zbg(e, t)
  }
  _registerListenersOnRenderedParts(){
    const e=new Ut;
    return this._renderedParts.forEach((t, i)=>{
      const r=t.hoverElement;
      r.tabIndex=0,e.add(ei(r,ir.FOCUS_IN,s=>{
        s.stopPropagation(),this._focusedHoverPartIndex=i
      })),e.add(ei(r,ir.FOCUS_OUT,s=>{
        s.stopPropagation(),this._focusedHoverPartIndex=-1
      }))
    }), e
  }
  _updateMarkdownAndColorParticipantInfo(e){
    const t=e.find(i=>i instanceof wun&&!(i instanceof cgi));
    t&&(this._markdownHoverParticipant=t), this._colorHoverParticipant=e.find(i=>i instanceof bpi)
  }
  focusHoverPartWithIndex(e){
    e<0||e>=this._renderedParts.length||this._renderedParts[e].hoverElement.focus()
  }
  getAccessibleContent(){
    const e=[];
    for(let t=0;
    t<this._renderedParts.length;
    t++)e.push(this.getAccessibleHoverContentAtIndex(t));
    return e.join(`

`)
  }
  getAccessibleHoverContentAtIndex(e){
    const t=this._renderedParts[e];
    if(!t)return"";
    if(t.type==="statusBar"){
      const i=[_(1244,null)];
      for(const r of t.actions){
        const s=r.actionKeybindingLabel;
        s?i.push(_(1245,null,r.actionLabel,s)):i.push(_(1246,null,r.actionLabel))
      }
      return i.join(`
`)
    }
    return t.participant.getAccessibleContent(t.hoverPart)
  }
  async updateHoverVerbosityLevel(e, t, i){
    if(!this._markdownHoverParticipant)return;
    let r;
    t>=0?r={
      start:t,endExclusive:t+1
    }
    :r=this._findRangeOfMarkdownHoverParts(this._markdownHoverParticipant);
    for(let s=r.start;
    s<r.endExclusive;
    s++){
      const o=this._normalizedIndexToMarkdownHoverIndexRange(this._markdownHoverParticipant,s);
      if(o===void 0)continue;
      const a=await this._markdownHoverParticipant.updateMarkdownHoverVerbosityLevel(e,o);
      a&&(this._renderedParts[s]={
        type:"hoverPart",participant:this._markdownHoverParticipant,hoverPart:a.hoverPart,hoverElement:a.hoverElement
      })
    }
    i&&(t>=0?this.focusHoverPartWithIndex(t):this._context.focus()), this._context.onContentsChanged()
  }
  doesHoverAtIndexSupportVerbosityAction(e, t){
    if(!this._markdownHoverParticipant)return!1;
    const i=this._normalizedIndexToMarkdownHoverIndexRange(this._markdownHoverParticipant, e);
    return i===void 0?!1:this._markdownHoverParticipant.doesMarkdownHoverAtIndexSupportVerbosityAction(i, t)
  }
  isColorPickerVisible(){
    return this._colorHoverParticipant?.isColorPickerVisible()??!1
  }
  _normalizedIndexToMarkdownHoverIndexRange(e, t){
    const i=this._renderedParts[t];
    if(!i||i.type!=="hoverPart"||!(i.participant===e))return;
    const s=this._renderedParts.findIndex(o=>o.type==="hoverPart"&&o.participant===e);
    if(s===-1)throw new _m;
    return t-s
  }
  _findRangeOfMarkdownHoverParts(e){
    const t=this._renderedParts.slice(), i=t.findIndex(o=>o.type==="hoverPart"&&o.participant===e), r=t.reverse().findIndex(o=>o.type==="hoverPart"&&o.participant===e), s=r>=0?t.length-r:r;
    return{
      start:i,endExclusive:s+1
    }
  }
  get domNode(){
    return this._fragment
  }
  get domNodeHasChildren(){
    return this._fragment.hasChildNodes()
  }
  get focusedHoverPartIndex(){
    return this._focusedHoverPartIndex
  }
  get hoverPartsCount(){
    return this._renderedParts.length
  }
}, mla=iQl=__decorate([__param(4, mo), __param(5, Kc)], mla)
}
}), pla, DCA=