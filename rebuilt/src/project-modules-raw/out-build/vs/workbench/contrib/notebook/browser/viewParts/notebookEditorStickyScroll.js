// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookEditorStickyScroll.js
// Offset: 33436226 (bundle byte offset)
// Size: 6865 bytes

ri(), Dx(), Po(), h0(), yn(), rt(), dr(), pl(), ph(), vr(), Jr(), DQl(), FTa(), Wt(), S_u(), E_u=class Ezb extends at{
  constructor(e, t, i, r, s){
    super(), this.element=e, this.foldingIcon=t, this.header=i, this.entry=r, this.notebookEditor=s, this._register(ei(this.header, ir.CLICK||MA.Tap, ()=>{
      this.focusCell()
    })), this._register(ei(this.foldingIcon.domNode, ir.CLICK||MA.Tap, ()=>{
      if(this.entry.cell.cellKind===zd.Markup){
        const o=this.entry.cell.foldingState;
        this.toggleFoldRange(o)
      }
    }))
  }
  toggleFoldRange(e){
    const t=this.notebookEditor.getContribution(m2e.id), i=this.entry.index, r=this.entry.level, s=e===2?1:2;
    t.setFoldingStateDown(i, s, r), this.focusCell()
  }
  focusCell(){
    this.notebookEditor.focusNotebookCell(this.entry.cell, "container");
    const e=this.notebookEditor.getAbsoluteTopOfElement(this.entry.cell), t=Ezb.getParentCount(this.entry);
    this.notebookEditor.setScrollTop(e-(t+1.1)*22)
  }
  static getParentCount(e){
    let t=0;
    for(;
    e.parent;
    )t++, e=e.parent;
    return t
  }
}, s6f=class{
  constructor(n, e){
    this.isCollapsed=n, this.dimension=e, this.domNode=document.createElement("div"), this.domNode.style.width=`${e}px`, this.domNode.style.height=`${e}px`, this.domNode.className=Qt.asClassName(n?hdn:ddn)
  }
  setVisible(n){
    this.domNode.style.cursor=n?"pointer":"default", this.domNode.style.opacity=n?"1":"0"
  }
}, kX=k_u=class extends at{
  getDomNode(){
    return this.domNode
  }
  getCurrentStickyHeight(){
    let e=0;
    return this.currentStickyLines.forEach(t=>{
      t.rendered&&(e+=22)
    }), e
  }
  setCurrentStickyLines(e){
    this.currentStickyLines=e
  }
  compareStickyLineMaps(e, t){
    if(e.size!==t.size)return!1;
    for(const[i, r]of e){
      const s=t.get(i);
      if(!s||r.rendered!==s.rendered)return!1
    }
    return!0
  }
  constructor(e, t, i, r, s, o){
    super(), this.domNode=e, this.notebookEditor=t, this.notebookCellList=i, this.layoutFn=r, this._contextMenuService=s, this.instantiationService=o, this._disposables=new Ut, this.currentStickyLines=new Map, this._onDidChangeNotebookStickyScroll=this._register(new Qe), this.onDidChangeNotebookStickyScroll=this._onDidChangeNotebookStickyScroll.event, this._layoutDisposableStore=this._register(new Ut), this.notebookEditor.notebookOptions.getDisplayOptions().stickyScrollEnabled&&this.init().catch(console.error), this._register(this.notebookEditor.notebookOptions.onDidChangeOptions(a=>{
      (a.stickyScrollEnabled||a.stickyScrollMode)&&this.updateConfig(a)
    })), this._register(ei(this.domNode, ir.CONTEXT_MENU, async a=>{
      this.onContextMenu(a)
    }))
  }
  onContextMenu(e){
    const t=new yy(As(this.domNode), e), i=t.target.parentElement, r=Array.from(this.currentStickyLines.values()).find(o=>o.line.element.contains(i))?.line.entry;
    if(!r)return;
    const s={
      outlineEntry:r,notebookEditor:this.notebookEditor
    };
    this._contextMenuService.showContextMenu({
      menuId:st.NotebookStickyScrollContext,getAnchor:()=>t,menuActionOptions:{
        shouldForwardArgs:!0,arg:s
      }
    })
  }
  updateConfig(e){
    e.stickyScrollEnabled?this.notebookEditor.notebookOptions.getDisplayOptions().stickyScrollEnabled?this.init().catch(console.error):(this._disposables.clear(), this.notebookCellOutlineReference?.dispose(), this.disposeCurrentStickyLines(), th(this.domNode), this.updateDisplay()):e.stickyScrollMode&&this.notebookEditor.notebookOptions.getDisplayOptions().stickyScrollEnabled&&this.notebookCellOutlineReference?.object&&this.updateContent(Eki(this.notebookEditor, this.notebookCellList, this.notebookCellOutlineReference?.object?.entries, this.getCurrentStickyHeight()))
  }
  async init(){
    const{
      object:e
    }
    =this.notebookCellOutlineReference=this.instantiationService.invokeFunction(i=>i.get(oIa).getOrCreate(this.notebookEditor));
    this._register(this.notebookCellOutlineReference), await e.computeFullSymbols(Cs.None);
    const t=Eki(this.notebookEditor, this.notebookCellList, e.entries, this.getCurrentStickyHeight());
    this.updateContent(t), this._disposables.add(e.onDidChange(()=>{
      const i=Eki(this.notebookEditor,this.notebookCellList,e.entries,this.getCurrentStickyHeight());
      this.compareStickyLineMaps(i,this.currentStickyLines)?this.disposeStickyLineMap(i):this.updateContent(i)
    })), this._disposables.add(this.notebookEditor.onDidAttachViewModel(async()=>{
      await e.computeFullSymbols(Cs.None);
      const i=Eki(this.notebookEditor,this.notebookCellList,e.entries,this.getCurrentStickyHeight());
      this.updateContent(i)
    })), this._disposables.add(this.notebookEditor.onDidScroll(()=>{
      const i=new Nv(100);
      i.trigger(()=>{
        i.dispose();
        const r=Eki(this.notebookEditor,this.notebookCellList,e.entries,this.getCurrentStickyHeight());
        this.compareStickyLineMaps(r,this.currentStickyLines)?this.disposeStickyLineMap(r):this.updateContent(r)
      })
    }))
  }
  disposeStickyLineMap(e){
    e.forEach(t=>{
      t.line&&t.line.dispose()
    })
  }
  static getVisibleOutlineEntry(e, t){
    let i=0, r=t.length-1;
    for(;
    i<=r;
    ){
      const s=Math.floor((i+r)/2);
      if(t[s].index===e){
        const o=t[s],a=[];
        return o.asFlatList(a),a.find(l=>l.index===e)
      }
      else t[s].index<e?i=s+1:r=s-1
    }
    if(r>=0){
      const s=t[r],o=[];
      return s.asFlatList(o),o.find(a=>a.index===e)
    }
  }
  updateContent(e){
    th(this.domNode), this.disposeCurrentStickyLines(), this.renderStickyLines(e, this.domNode);
    const t=this.getCurrentStickyHeight();
    this.setCurrentStickyLines(e);
    const i=this.getCurrentStickyHeight()-t;
    if(i!==0){
      this._onDidChangeNotebookStickyScroll.fire(i);
      const r=this._layoutDisposableStore.add(r_(As(this.getDomNode()),()=>{
        this.layoutFn(i),this.updateDisplay(),this._layoutDisposableStore.delete(r)
      }))
    }
    else this.updateDisplay()
  }
  updateDisplay(){
    this.getCurrentStickyHeight()>0?this.domNode.style.display="block":this.domNode.style.display="none"
  }
  static computeStickyHeight(e){
    let t=0;
    for(e.cell.cellKind===zd.Markup&&e.level<7&&(t+=22);
    e.parent;
    )t+=22, e=e.parent;
    return t
  }
  static checkCollapsedStickyLines(e, t, i){
    let r=e;
    const s=new Map, o=[];
    for(;
    r;
    ){
      if(r.level>=7){
        r=r.parent;
        continue
      }
      const a=k_u.createStickyElement(r,i);
      s.set(r,{
        line:a,rendered:!1
      }),o.unshift(a),r=r.parent
    }
    for(let a=0;
    a<o.length&&!(a>=t);
    a++)s.set(o[a].entry, {
      line:o[a],rendered:!0
    });
    return s
  }
  renderStickyLines(e, t){
    const i=Array.from(e.entries()).reverse();
    for(const[, r]of i)r.rendered&&t.append(r.line.element)
  }
  static createStickyElement(e, t){
    const i=document.createElement("div");
    i.classList.add("notebook-sticky-scroll-element"), t.notebookOptions.getLayoutConfiguration().stickyScrollMode==="indented"&&(i.style.paddingLeft=E_u.getParentCount(e)*10+"px");
    let s=!1;
    e.cell.cellKind===zd.Markup&&(s=e.cell.foldingState===2);
    const o=new s6f(s, 16);
    o.domNode.classList.add("notebook-sticky-scroll-folding-icon"), o.setVisible(!0);
    const a=document.createElement("div");
    return a.classList.add("notebook-sticky-scroll-header"), a.innerText=e.label, i.append(o.domNode, a), new E_u(i, o, a, e, t)
  }
  disposeCurrentStickyLines(){
    this.currentStickyLines.forEach(e=>{
      e.line.dispose()
    })
  }
  dispose(){
    this._disposables.dispose(), this.disposeCurrentStickyLines(), this.notebookCellOutlineReference?.dispose(), super.dispose()
  }
}, kX=k_u=__decorate([__param(4, kc), __param(5, ln)], kX)
}
}), qU, Irt=