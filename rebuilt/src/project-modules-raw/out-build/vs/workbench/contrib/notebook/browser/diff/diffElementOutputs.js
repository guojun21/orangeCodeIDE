// Module: out-build/vs/workbench/contrib/notebook/browser/diff/diffElementOutputs.js
// Offset: 33550587 (bundle byte offset)
// Size: 7477 bytes

ri(), Ht(), rt(), Prt(), Rrt(), z0(), Jr(), bJ(), Tb(), Kl(), C6f=class extends at{
  constructor(n, e, t, i, r, s, o, a, l){
    super(), this._notebookEditor=n, this._notebookTextModel=e, this._notebookService=t, this._quickInputService=i, this._diffElementViewModel=r, this._diffSide=s, this._nestedCell=o, this._outputContainer=a, this.output=l, this.resizeListener=this._register(new Ut)
  }
  render(n, e){
    const t=document.createElement("div");
    let i;
    const[r, s]=this.output.resolveMimeTypes(this._notebookTextModel, void 0), o=this.output.pickedMimeType||r[s];
    if(r.length>1){
      t.style.position="relative";
      const l=Ct(".multi-mimetype-output");
      l.classList.add(...Qt.asClassNameArray(RWl)),l.tabIndex=0,l.title=_(9250,null,r.map(u=>u.mimeType).join(", ")),t.appendChild(l),this.resizeListener.add(_f(l,"mousedown",async u=>{
        u.leftButton&&(u.preventDefault(),u.stopPropagation(),await this.pickActiveMimeTypeRenderer(this._notebookTextModel,this.output))
      })),this.resizeListener.add(ei(l,ir.KEY_DOWN,async u=>{
        const d=new vh(u);
        (d.equals(3)||d.equals(10))&&(u.preventDefault(),u.stopPropagation(),await this.pickActiveMimeTypeRenderer(this._notebookTextModel,this.output))
      }))
    }
    const a=Ct(".output-inner-container");
    if(Rt(t, a), r.length!==0){
      const l=this._notebookService.getRendererInfo(o.rendererId);
      i=l?{
        type:1,renderer:l,source:this.output,mimeType:o.mimeType
      }
      :this._renderMissingRenderer(this.output,o.mimeType),this.output.pickedMimeType=o
    }
    this.domNode=t, this.renderResult=i, i&&(e?this._outputContainer.insertBefore(t, e):this._outputContainer.appendChild(t), this._notebookEditor.createOutput(this._diffElementViewModel, this._nestedCell, i, ()=>this.getOutputOffsetInCell(n), this._diffElementViewModel instanceof mwe?this._diffSide:this._diffElementViewModel.type==="insert"?s1.Modified:s1.Original))
  }
  _renderMissingRenderer(n, e){
    if(!n.model.outputs.length)return this._renderMessage(n, _(9251, null));
    if(!e){
      const i=n.model.outputs.map(r=>r.mime).join(", ");
      return this._renderMessage(n,_(9252,null,i))
    }
    return this._renderSearchForMimetype(n, e)
  }
  _renderSearchForMimetype(n, e){
    const t=`@tag:notebookRenderer ${e}`, i=Ct("p", void 0, `No renderer could be found for mimetype "${e}", but one might be available on the Marketplace.`), r=Ct("a", {
      href:`command:workbench.extensions.search?%22${t}%22`,class:"monaco-button monaco-text-button",tabindex:0,role:"button",style:"padding: 8px; text-decoration: none; color: rgb(255, 255, 255); background-color: rgb(14, 99, 156); max-width: 200px;"
    }, "Search Marketplace");
    return{
      type:0,source:n,htmlContent:i.outerHTML+r.outerHTML
    }
  }
  _renderMessage(n, e){
    const t=Ct("p", void 0, e);
    return{
      type:0,source:n,htmlContent:t.outerHTML
    }
  }
  async pickActiveMimeTypeRenderer(n, e){
    const[t, i]=e.resolveMimeTypes(n, void 0), r=t.filter(l=>l.isTrusted).map((l, u)=>({
      label:l.mimeType,id:l.mimeType,index:u,picked:u===i,detail:this.generateRendererInfo(l.rendererId),description:u===i?_(9253,null):void 0
    })), s=new Ut, o=s.add(this._quickInputService.createQuickPick());
    o.items=r, o.activeItems=r.filter(l=>!!l.picked), o.placeholder=r.length!==t.length?_(9254, null):_(9255, null);
    const a=await new Promise(l=>{
      s.add(o.onDidAccept(()=>{
        l(o.selectedItems.length===1?o.selectedItems[0].index:void 0),s.dispose()
      })),o.show()
    });
    if(a!==void 0&&a!==i){
      const l=this._nestedCell.outputsViewModels.indexOf(e),u=this.domNode.nextElementSibling;
      this.resizeListener.clear();
      const d=this.domNode;
      d&&(d.remove(),this._notebookEditor.removeInset(this._diffElementViewModel,this._nestedCell,e,this._diffSide)),e.pickedMimeType=t[a],this.render(l,u)
    }
  }
  generateRendererInfo(n){
    const e=this._notebookService.getRendererInfo(n);
    return e?`${e.displayName!==""?e.displayName:e.id} (${e.extensionId.value})`:_(9256, null)
  }
  getCellOutputCurrentIndex(){
    return this._diffElementViewModel.getNestedCellViewModel(this._diffSide).outputs.indexOf(this.output.model)
  }
  updateHeight(n, e){
    this._diffElementViewModel.updateOutputHeight(this._diffSide, n, e)
  }
  getOutputOffsetInContainer(n){
    return this._diffElementViewModel.getOutputOffsetInContainer(this._diffSide, n)
  }
  getOutputOffsetInCell(n){
    return this._diffElementViewModel.getOutputOffsetInCell(this._diffSide, n)
  }
}, TEt=class extends at{
  constructor(e, t, i, r, s, o, a, l){
    super(), this._editor=e, this._notebookTextModel=t, this._diffElementViewModel=i, this._nestedCellViewModel=r, this._diffSide=s, this._outputContainer=o, this._notebookService=a, this._quickInputService=l, this._outputEntries=new Map, this._register(this._diffElementViewModel.onDidLayoutChange(()=>{
      this._outputEntries.forEach((u,d)=>{
        const m=r.outputs.indexOf(d.model);
        if(m>=0){
          const p=this._diffElementViewModel.getOutputOffsetInContainer(this._diffSide,m);
          u.domNode.style.top=`${p}px`
        }
      })
    })), this._register(this._nestedCellViewModel.textModel.onDidChangeOutputs(u=>{
      this._updateOutputs(u)
    }))
  }
  _updateOutputs(e){
    const t=[];
    this._outputEntries.forEach((s, o)=>{
      this._nestedCellViewModel.outputsViewModels.indexOf(o)<0&&(t.push(o),s.domNode.remove(),this._editor.removeInset(this._diffElementViewModel,this._nestedCellViewModel,o,this._diffSide))
    }), t.forEach(s=>{
      this._outputEntries.get(s)?.dispose(),this._outputEntries.delete(s)
    });
    let i;
    this._nestedCellViewModel.outputsViewModels.reverse().forEach(s=>{
      if(this._outputEntries.has(s)){
        i=this._outputEntries.get(s).domNode;
        return
      }
      const o=this._nestedCellViewModel.outputsViewModels.indexOf(s);
      this._renderOutput(s,o,i),i=this._outputEntries.get(s)?.domNode
    })
  }
  render(){
    for(let e=0;
    e<this._nestedCellViewModel.outputsViewModels.length;
    e++){
      const t=this._nestedCellViewModel.outputsViewModels[e];
      this._renderOutput(t,e,void 0)
    }
  }
  showOutputs(){
    for(let e=0;
    e<this._nestedCellViewModel.outputsViewModels.length;
    e++){
      const t=this._nestedCellViewModel.outputsViewModels[e];
      this._editor.showInset(this._diffElementViewModel,t.cellViewModel,t,this._diffSide)
    }
  }
  hideOutputs(){
    this._outputEntries.forEach((e, t)=>{
      this._editor.hideInset(this._diffElementViewModel,this._nestedCellViewModel,t)
    })
  }
  _renderOutput(e, t, i){
    this._outputEntries.has(e)||this._outputEntries.set(e, new C6f(this._editor, this._notebookTextModel, this._notebookService, this._quickInputService, this._diffElementViewModel, this._diffSide, this._nestedCellViewModel, this._outputContainer, e)), this._outputEntries.get(e).render(t, i)
  }
}, TEt=__decorate([__param(6, JA), __param(7, ha)], TEt)
}
});
function U_u(n){
  return bhy(n)
}
function bhy(n){
  const e=new Ut, t=e.add(new Qe), i={
    options:{
      enabled:n.getValue("diffEditor.hideUnchangedRegions.enabled"),minimumLineCount:n.getValue("diffEditor.hideUnchangedRegions.minimumLineCount"),contextLineCount:n.getValue("diffEditor.hideUnchangedRegions.contextLineCount"),revealLineCount:n.getValue("diffEditor.hideUnchangedRegions.revealLineCount")
    }, onDidChangeEnablement:t.event.bind(t), dispose:()=>e.dispose()
  };
  return e.add(n.onDidChangeConfiguration(r=>{
    r.affectsConfiguration("diffEditor.hideUnchangedRegions.minimumLineCount")&&(i.options.minimumLineCount=n.getValue("diffEditor.hideUnchangedRegions.minimumLineCount")), r.affectsConfiguration("diffEditor.hideUnchangedRegions.contextLineCount")&&(i.options.contextLineCount=n.getValue("diffEditor.hideUnchangedRegions.contextLineCount")), r.affectsConfiguration("diffEditor.hideUnchangedRegions.revealLineCount")&&(i.options.revealLineCount=n.getValue("diffEditor.hideUnchangedRegions.revealLineCount")), r.affectsConfiguration("diffEditor.hideUnchangedRegions.enabled")&&(i.options.enabled=n.getValue("diffEditor.hideUnchangedRegions.enabled"), t.fire(i.options.enabled))
  })), i
}
var vhy=