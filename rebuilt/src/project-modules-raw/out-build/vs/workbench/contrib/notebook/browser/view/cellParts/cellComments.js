// Module: out-build/vs/workbench/contrib/notebook/browser/view/cellParts/cellComments.js
// Offset: 33231088 (bundle byte offset)
// Size: 3071 bytes

Vs(), rt(), pk(), Ei(), si(), Wt(), Io(), cwe(), _8f(), LQ(), oki=class extends JV{
  constructor(e, t, i, r, s, o, a){
    super(), this.notebookEditor=e, this.container=t, this.contextKeyService=i, this.themeService=r, this.commentService=s, this.configurationService=o, this.instantiationService=a, this.container.classList.add("review-widget"), this._register(this._commentThreadWidgets=new mp), this._register(this.themeService.onDidColorThemeChange(this._applyTheme, this)), this._applyTheme()
  }
  async initialize(e){
    this.currentElement!==e&&(this.currentElement=e, await this._updateThread())
  }
  async _createCommentTheadWidget(e, t){
    const i=new Ut, r=this.instantiationService.createInstance(ski, this.container, this.notebookEditor, e, this.notebookEditor.textModel.uri, this.contextKeyService, this.instantiationService, t, void 0, void 0, {
      codeBlockFontFamily:this.configurationService.getValue("editor").fontFamily||jI.fontFamily
    }, void 0, {
      actionRunner:()=>{
        
      },collapse:async()=>!0
    });
    i.add(r), this._commentThreadWidgets.set(t.threadId, {
      widget:r,dispose:()=>i.dispose()
    });
    const s=this.notebookEditor.getLayoutInfo();
    await r.display(s.fontInfo.lineHeight, !0), this._applyTheme(), i.add(r.onDidResize(()=>{
      this.currentElement&&(this.currentElement.commentHeight=this._calculateCommentThreadHeight(r.getDimensions().height))
    }))
  }
  _bindListeners(){
    this.cellDisposables.add(this.commentService.onDidUpdateCommentThreads(async()=>this._updateThread()))
  }
  async _updateThread(){
    if(!this.currentElement)return;
    const e=await this._getCommentThreadsForCell(this.currentElement), t=new Set(this._commentThreadWidgets.keys()), i=this.currentElement.layoutInfo;
    this.container.style.top=`${i.commentOffset}px`;
    for(const r of e)if(r)for(const s of r.threads){
      t.delete(s.threadId);
      const o=this._commentThreadWidgets.get(s.threadId)?.widget;
      o?await o.updateCommentThread(s):await this._createCommentTheadWidget(r.uniqueOwner,s)
    }
    for(const r of t)this._commentThreadWidgets.deleteAndDispose(r);
    this._updateHeight()
  }
  _calculateCommentThreadHeight(e){
    const t=this.notebookEditor.getLayoutInfo(), i=Math.ceil(t.fontInfo.lineHeight*1.2), r=t.fontInfo.lineHeight, s=Math.round(r/3), o=Math.round(r/9)*2;
    return i+e+s+o+8
  }
  _updateHeight(){
    if(!this.currentElement)return;
    let e=0;
    for(const{
      widget:t
    }
    of this._commentThreadWidgets.values())e+=this._calculateCommentThreadHeight(t.getDimensions().height);
    this.currentElement.commentHeight=e
  }
  async _getCommentThreadsForCell(e){
    return this.notebookEditor.hasModel()?lh(await this.commentService.getNotebookComments(e.uri)):[]
  }
  _applyTheme(){
    const e=this.themeService.getColorTheme(), t=this.notebookEditor.getLayoutInfo().fontInfo;
    for(const{
      widget:i
    }
    of this._commentThreadWidgets.values())i.applyTheme(e, t)
  }
  didRenderCell(e){
    this.initialize(e), this._bindListeners()
  }
  prepareLayout(){
    this._updateHeight()
  }
  updateInternalLayoutNow(e){
    this.currentElement&&(this.container.style.top=`${e.layoutInfo.commentOffset}px`)
  }
}, oki=__decorate([__param(2, wi), __param(3, bo), __param(4, QV), __param(5, Fn), __param(6, ln)], oki)
}
}), Vwu, sdy=