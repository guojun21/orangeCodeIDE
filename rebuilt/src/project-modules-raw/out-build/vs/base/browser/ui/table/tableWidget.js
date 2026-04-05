// Module: out-build/vs/base/browser/ui/table/tableWidget.js
// Offset: 24788900 (bundle byte offset)
// Size: 6139 bytes

ri(), KC(), O6(), mb(), SW(), qne(), yn(), rt(), b0A(), RGl=class RWb{
  static{
    this.TemplateId="row"
  }
  constructor(e, t, i){
    this.columns=e, this.getColumnSize=i, this.templateId=RWb.TemplateId, this.renderedTemplates=new Set;
    const r=new Map(t.map(s=>[s.templateId, s]));
    this.renderers=[];
    for(const s of e){
      const o=r.get(s.templateId);
      if(!o)throw new Error(`Table cell renderer for template id ${s.templateId} not found.`);
      this.renderers.push(o)
    }
  }
  renderTemplate(e){
    const t=Rt(e, Ct(".monaco-table-tr")), i=[], r=[];
    for(let o=0;
    o<this.columns.length;
    o++){
      const a=this.renderers[o],l=Rt(t,Ct(".monaco-table-td",{
        "data-col-index":o
      }));
      l.style.width=`${this.getColumnSize(o)}px`,i.push(l),r.push(a.renderTemplate(l))
    }
    const s={
      container:e,cellContainers:i,cellTemplateData:r
    };
    return this.renderedTemplates.add(s), s
  }
  renderElement(e, t, i, r){
    for(let s=0;
    s<this.columns.length;
    s++){
      const a=this.columns[s].project(e);
      this.renderers[s].renderElement(a,t,i.cellTemplateData[s],r)
    }
  }
  disposeElement(e, t, i, r){
    for(let s=0;
    s<this.columns.length;
    s++){
      const o=this.renderers[s];
      if(o.disposeElement){
        const l=this.columns[s].project(e);
        o.disposeElement(l,t,i.cellTemplateData[s],r)
      }
    }
  }
  disposeTemplate(e){
    for(let t=0;
    t<this.columns.length;
    t++)this.renderers[t].disposeTemplate(e.cellTemplateData[t]);
    th(e.container), this.renderedTemplates.delete(e)
  }
  layoutColumn(e, t){
    for(const{
      cellContainers:i
    }
    of this.renderedTemplates)i[e].style.width=`${t}px`
  }
}, Spg=class extends at{
  get minimumSize(){
    return this.column.minimumWidth??120
  }
  get maximumSize(){
    return this.column.maximumWidth??Number.POSITIVE_INFINITY
  }
  get onDidChange(){
    return this.column.onDidChangeWidthConstraints??In.None
  }
  constructor(n, e){
    super(), this.column=n, this.index=e, this._onDidLayout=new Qe, this.onDidLayout=this._onDidLayout.event, this.element=Ct(".monaco-table-th", {
      "data-col-index":e
    }, n.label), n.tooltip&&this._register(q4().setupManagedHover(Sm("mouse"), this.element, n.tooltip))
  }
  layout(n){
    this._onDidLayout.fire([this.index, n])
  }
}, xet=class PWb{
  static{
    this.InstanceCount=0
  }
  get onDidChangeFocus(){
    return this.list.onDidChangeFocus
  }
  get onDidChangeSelection(){
    return this.list.onDidChangeSelection
  }
  get onDidScroll(){
    return this.list.onDidScroll
  }
  get onMouseClick(){
    return this.list.onMouseClick
  }
  get onMouseDblClick(){
    return this.list.onMouseDblClick
  }
  get onMouseMiddleClick(){
    return this.list.onMouseMiddleClick
  }
  get onPointer(){
    return this.list.onPointer
  }
  get onMouseUp(){
    return this.list.onMouseUp
  }
  get onMouseDown(){
    return this.list.onMouseDown
  }
  get onMouseOver(){
    return this.list.onMouseOver
  }
  get onMouseMove(){
    return this.list.onMouseMove
  }
  get onMouseOut(){
    return this.list.onMouseOut
  }
  get onTouchStart(){
    return this.list.onTouchStart
  }
  get onTap(){
    return this.list.onTap
  }
  get onContextMenu(){
    return this.list.onContextMenu
  }
  get onDidFocus(){
    return this.list.onDidFocus
  }
  get onDidBlur(){
    return this.list.onDidBlur
  }
  get onKeyDown(){
    return this.list.onKeyDown
  }
  get scrollTop(){
    return this.list.scrollTop
  }
  set scrollTop(e){
    this.list.scrollTop=e
  }
  get scrollLeft(){
    return this.list.scrollLeft
  }
  set scrollLeft(e){
    this.list.scrollLeft=e
  }
  get scrollHeight(){
    return this.list.scrollHeight
  }
  get renderHeight(){
    return this.list.renderHeight
  }
  get onDidDispose(){
    return this.list.onDidDispose
  }
  constructor(e, t, i, r, s, o){
    this.virtualDelegate=i, this.columns=r, this.domId=`table_id_${++PWb.InstanceCount}`, this.disposables=new Ut, this.cachedWidth=0, this.cachedHeight=0, this.domNode=Rt(t, Ct(`.monaco-table.${this.domId}`));
    const a=r.map((d, m)=>this.disposables.add(new Spg(d, m))), l={
      size:a.reduce((d,m)=>d+m.column.weight,0),views:a.map(d=>({
        size:d.column.weight,view:d
      }))
    };
    this.splitview=this.disposables.add(new Xz(this.domNode, {
      orientation:1,scrollbarVisibility:2,getSashOrthogonalSize:()=>this.cachedHeight,descriptor:l
    })), this.splitview.el.style.height=`${i.headerRowHeight}px`, this.splitview.el.style.lineHeight=`${i.headerRowHeight}px`;
    const u=new RGl(r, s, d=>this.splitview.getViewSize(d));
    this.list=this.disposables.add(new JR(e, this.domNode, v0A(i), [u], o)), In.any(...a.map(d=>d.onDidLayout))(([d, m])=>u.layoutColumn(d, m), null, this.disposables), this.splitview.onDidSashReset(d=>{
      const m=r.reduce((g,f)=>g+f.weight,0),p=r[d].weight/m*this.cachedWidth;
      this.splitview.resizeView(d,p)
    }, null, this.disposables), this.styleElement=wC(this.domNode), this.style(KIc)
  }
  getColumnLabels(){
    return this.columns.map(e=>e.label)
  }
  resizeColumn(e, t){
    const i=Math.round(t/100*this.cachedWidth);
    this.splitview.resizeView(e, i)
  }
  updateOptions(e){
    this.list.updateOptions(e)
  }
  splice(e, t, i=[]){
    this.list.splice(e, t, i)
  }
  rerender(){
    this.list.rerender()
  }
  row(e){
    return this.list.element(e)
  }
  indexOf(e){
    return this.list.indexOf(e)
  }
  get length(){
    return this.list.length
  }
  getHTMLElement(){
    return this.domNode
  }
  layout(e, t){
    e=e??QSc(this.domNode), t=t??KFn(this.domNode), this.cachedWidth=t, this.cachedHeight=e, this.splitview.layout(t);
    const i=e-this.virtualDelegate.headerRowHeight;
    this.list.getHTMLElement().style.height=`${i}px`, this.list.layout(i, t)
  }
  triggerTypeNavigation(){
    this.list.triggerTypeNavigation()
  }
  style(e){
    const t=[];
    t.push(`.monaco-table.${this.domId} > .monaco-split-view2 .monaco-sash.vertical::before {
			top: ${this.virtualDelegate.headerRowHeight+1}px;
			height: calc(100% - ${this.virtualDelegate.headerRowHeight}px);
		}`), this.styleElement.textContent=t.join(`
`), this.list.style(e)
  }
  domFocus(){
    this.list.domFocus()
  }
  setAnchor(e){
    this.list.setAnchor(e)
  }
  getAnchor(){
    return this.list.getAnchor()
  }
  getSelectedElements(){
    return this.list.getSelectedElements()
  }
  setSelection(e, t){
    this.list.setSelection(e, t)
  }
  getSelection(){
    return this.list.getSelection()
  }
  setFocus(e, t){
    this.list.setFocus(e, t)
  }
  focusNext(e=1, t=!1, i){
    this.list.focusNext(e, t, i)
  }
  focusPrevious(e=1, t=!1, i){
    this.list.focusPrevious(e, t, i)
  }
  focusNextPage(e){
    return this.list.focusNextPage(e)
  }
  focusPreviousPage(e){
    return this.list.focusPreviousPage(e)
  }
  focusFirst(e){
    this.list.focusFirst(e)
  }
  focusLast(e){
    this.list.focusLast(e)
  }
  getFocus(){
    return this.list.getFocus()
  }
  getFocusedElements(){
    return this.list.getFocusedElements()
  }
  getRelativeTop(e){
    return this.list.getRelativeTop(e)
  }
  reveal(e, t){
    this.list.reveal(e, t)
  }
  dispose(){
    this.disposables.dispose()
  }
}
}
}), A0A=