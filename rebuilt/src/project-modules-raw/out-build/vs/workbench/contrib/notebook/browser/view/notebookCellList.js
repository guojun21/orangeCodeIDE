// Module: out-build/vs/workbench/contrib/notebook/browser/view/notebookCellList.js
// Offset: 33041588 (bundle byte offset)
// Size: 26157 bytes

ri(), KC(), a3n(), yn(), rt(), _r(), UVe(), Ei(), Rf(), Sb(), ph(), W1e(), i1(), sE(), sI(), VSi(), Wt(), xuy(), uD(), Tuy(), Duy(), Buy(), (function(n){
  n[n.Top=0]="Top", n[n.Center=1]="Center", n[n.Bottom=2]="Bottom", n[n.NearTop=3]="NearTop"
})(z9f||(z9f={
  
})), gbn=5e3, oTa=class extends tQ{
  get onWillScroll(){
    return this.view.onWillScroll
  }
  get rowsContainer(){
    return this.view.containerDomNode
  }
  get scrollableElement(){
    return this.view.scrollableElementDomNode
  }
  get viewModel(){
    return this._viewModel
  }
  get visibleRanges(){
    return this._visibleRanges
  }
  set visibleRanges(e){
    aCA(this._visibleRanges, e)||(this._visibleRanges=e, this._onDidChangeVisibleRanges.fire())
  }
  get isDisposed(){
    return this._isDisposed
  }
  get webviewElement(){
    return this._webviewElement
  }
  get inRenderingTransaction(){
    return this.view.inRenderingTransaction
  }
  constructor(e, t, i, r, s, o, a, l, u, d, m){
    super(e, t, r, s, a, o, l, u, d), this.listUser=e, this.notebookOptions=i, this._previousFocusedElements=[], this._localDisposableStore=new Ut, this._viewModelStore=new Ut, this._onDidRemoveOutputs=this._localDisposableStore.add(new Qe), this.onDidRemoveOutputs=this._onDidRemoveOutputs.event, this._onDidHideOutputs=this._localDisposableStore.add(new Qe), this.onDidHideOutputs=this._onDidHideOutputs.event, this._onDidRemoveCellsFromView=this._localDisposableStore.add(new Qe), this.onDidRemoveCellsFromView=this._onDidRemoveCellsFromView.event, this._viewModel=null, this._hiddenRangeIds=[], this.hiddenRangesPrefixSum=null, this._onDidChangeVisibleRanges=this._localDisposableStore.add(new Qe), this.onDidChangeVisibleRanges=this._onDidChangeVisibleRanges.event, this._visibleRanges=[], this._isDisposed=!1, this._isInLayout=!1, this._webviewElement=null, a5.bindTo(this.contextKeyService).set(!0), this._previousFocusedElements=this.getFocusedElements(), this._localDisposableStore.add(this.onDidChangeFocus(x=>{
      this._previousFocusedElements.forEach(I=>{
        x.elements.indexOf(I)<0&&I.onDeselect()
      }),this._previousFocusedElements=x.elements
    }));
    const p=cNe.bindTo(o);
    p.set("none");
    const g=Afg.bindTo(o);
    g.set("none");
    const f=this._localDisposableStore.add(new uo), A=this._localDisposableStore.add(new uo);
    this._notebookCellAnchor=new J9f(m, u, this.onDidScroll);
    const w=x=>{
      switch(x.cursorAtBoundary()){
        case gwe.Both:p.set("both");
        break;
        case gwe.Top:p.set("top");
        break;
        case gwe.Bottom:p.set("bottom");
        break;
        default:p.set("none");
        break
      }
      switch(x.cursorAtLineBoundary()){
        case yxe.Both:g.set("both");
        break;
        case yxe.Start:g.set("start");
        break;
        case yxe.End:g.set("end");
        break;
        default:g.set("none");
        break
      }
    };
    this._localDisposableStore.add(this.onDidChangeFocus(x=>{
      if(x.elements.length){
        const I=x.elements[0];
        f.value=I.onDidChangeState(B=>{
          B.selectionChanged&&w(I)
        }),A.value=I.onDidChangeEditorAttachState(()=>{
          I.editorAttached&&w(I)
        }),w(I);
        return
      }
      p.set("none")
    }));
    const C=()=>{
      if(!this.view.length)return;
      const x=this.getViewScrollTop(),I=this.getViewScrollBottom();
      if(x>=I)return;
      const B=zA(this.view.indexAt(x),0,this.view.length-1),R=this.view.element(B),N=this._viewModel.getCellIndex(R),M=zA(this.view.indexAt(I),0,this.view.length-1),O=this.view.element(M),$=this._viewModel.getCellIndex(O);
      $-N===M-B?this.visibleRanges=[{
        start:N,end:$+1
      }
      ]:this.visibleRanges=this._getVisibleRangesFromIndex(B,N,M,$)
    };
    this._localDisposableStore.add(this.view.onDidChangeContentHeight(()=>{
      this._isInLayout&&r_(As(t),()=>{
        C()
      }),C()
    })), this._localDisposableStore.add(this.view.onDidScroll(()=>{
      this._isInLayout&&r_(As(t),()=>{
        C()
      }),C()
    }))
  }
  createListView(e, t, i, r){
    const s=new H9f(e, t, i, r);
    return this.viewZones=new G9f(s, this), this.cellOverlays=new Q9f(s), s
  }
  _getView(){
    return this.view
  }
  attachWebview(e){
    e.style.top=`-${gbn}px`, this.rowsContainer.insertAdjacentElement("afterbegin", e), this._webviewElement=new qH(e)
  }
  elementAt(e){
    if(!this.view.length)return;
    const t=this.view.indexAt(e), i=zA(t, 0, this.view.length-1);
    return this.element(i)
  }
  elementHeight(e){
    const t=this._getViewIndexUpperBound(e);
    if(t===void 0||t<0||t>=this.length)throw this._getViewIndexUpperBound(e), new HSe(this.listUser, `Invalid index ${t}`);
    return this.view.elementHeight(t)
  }
  detachViewModel(){
    this._viewModelStore.clear(), this._viewModel=null, this.hiddenRangesPrefixSum=null
  }
  attachViewModel(e){
    this._viewModel=e, this._viewModelStore.add(e.onDidChangeViewCells(s=>{
      if(this._isDisposed)return;
      this.viewZones.onCellsChanged(s),this.cellOverlays.onCellsChanged(s);
      const o=this._hiddenRangeIds.map(m=>this._viewModel.getTrackedRange(m)).filter(m=>m!==null),a=Swu(this._viewModel.viewCells,o),l=[],u=new Set;
      for(let m=0;
      m<this.length;
      m++)l.push(this.element(m)),u.add(this.element(m).uri.toString());
      const d=SWl(l,a,m=>u.has(m.uri.toString()));
      s.synchronous?this._updateElementsInWebview(d):this._viewModelStore.add(r_(As(this.rowsContainer),()=>{
        this._isDisposed||this._updateElementsInWebview(d)
      }))
    })), this._viewModelStore.add(e.onDidChangeSelection(s=>{
      if(s==="view")return;
      const o=Qne(e.getSelections()).map(l=>e.cellAt(l)).filter(l=>!!l).map(l=>this._getViewIndexUpperBound(l));
      this.setSelection(o,void 0,!0);
      const a=Qne([e.getFocus()]).map(l=>e.cellAt(l)).filter(l=>!!l).map(l=>this._getViewIndexUpperBound(l));
      a.length&&this.setFocus(a,void 0,!0)
    }));
    const t=e.getHiddenRanges();
    this.setHiddenAreas(t, !1);
    const i=QUe(t), r=e.viewCells.slice(0);
    i.reverse().forEach(s=>{
      const o=r.splice(s.start,s.end-s.start+1);
      this._onDidRemoveCellsFromView.fire(o)
    }), this.splice2(0, 0, r)
  }
  _updateElementsInWebview(e){
    e.reverse().forEach(t=>{
      const i=[],r=[],s=[];
      for(let o=t.start;
      o<t.start+t.deleteCount;
      o++){
        const a=this.element(o);
        a.cellKind===zd.Code?this._viewModel.hasCell(a)?i.push(...a?.outputsViewModels):r.push(...a?.outputsViewModels):s.push(a)
      }
      this.splice2(t.start,t.deleteCount,t.toInsert),this._onDidHideOutputs.fire(i),this._onDidRemoveOutputs.fire(r),this._onDidRemoveCellsFromView.fire(s)
    })
  }
  clear(){
    super.splice(0, this.length)
  }
  setHiddenAreas(e, t){
    if(!this._viewModel)return!1;
    const i=QUe(e), r=this._hiddenRangeIds.map(o=>this._viewModel.getTrackedRange(o)).filter(o=>o!==null);
    if(i.length===r.length){
      let o=!1;
      for(let a=0;
      a<i.length;
      a++)if(!(i[a].start===r[a].start&&i[a].end===r[a].end)){
        o=!0;
        break
      }
      if(!o)return this._updateHiddenRangePrefixSum(i),this.viewZones.onHiddenRangesChange(),this.viewZones.layout(),this.cellOverlays.onHiddenRangesChange(),this.cellOverlays.layout(),!1
    }
    this._hiddenRangeIds.forEach(o=>this._viewModel.setTrackedRange(o, null, 3));
    const s=i.map(o=>this._viewModel.setTrackedRange(null, o, 3)).filter(o=>o!==null);
    return this._hiddenRangeIds=s, this._updateHiddenRangePrefixSum(i), this.viewZones.onHiddenRangesChange(), this.cellOverlays.onHiddenRangesChange(), t&&this.updateHiddenAreasInView(r, i), this.viewZones.layout(), this.cellOverlays.layout(), !0
  }
  _updateHiddenRangePrefixSum(e){
    let t=0, i=0;
    const r=[];
    for(;
    i<e.length;
    ){
      for(let o=t;
      o<e[i].start-1;
      o++)r.push(1);
      r.push(e[i].end-e[i].start+1+1),t=e[i].end+1,i++
    }
    for(let o=t;
    o<this._viewModel.length;
    o++)r.push(1);
    const s=new Uint32Array(r.length);
    for(let o=0;
    o<r.length;
    o++)s[o]=r[o];
    this.hiddenRangesPrefixSum=new Uft(s)
  }
  updateHiddenAreasInView(e, t){
    const i=Swu(this._viewModel.viewCells, e), r=new Set;
    i.forEach(a=>{
      r.add(a.uri.toString())
    });
    const s=Swu(this._viewModel.viewCells, t), o=SWl(i, s, a=>r.has(a.uri.toString()));
    this._updateElementsInWebview(o)
  }
  splice2(e, t, i=[]){
    if(e<0||e>this.view.length)return;
    const r=UR(this.rowsContainer);
    super.splice(e, t, i), r&&this.domFocus();
    const s=[];
    this.getSelectedElements().forEach(o=>{
      this._viewModel.hasCell(o)&&s.push(o.handle)
    }), !s.length&&this._viewModel.viewCells.length&&this._viewModel.updateSelectionsState({
      kind:Wy.Index,focus:{
        start:0,end:1
      },selections:[{
        start:0,end:1
      }
      ]
    }), this.viewZones.layout(), this.cellOverlays.layout()
  }
  getModelIndex(e){
    const t=this.indexOf(e);
    return this.getModelIndex2(t)
  }
  getModelIndex2(e){
    return this.hiddenRangesPrefixSum?this.hiddenRangesPrefixSum.getPrefixSum(e-1):e
  }
  getViewIndex(e){
    const t=this._viewModel.getCellIndex(e);
    return this.getViewIndex2(t)
  }
  getViewIndex2(e){
    if(!this.hiddenRangesPrefixSum)return e;
    const t=this.hiddenRangesPrefixSum.getIndexOf(e);
    return t.remainder!==0?e>=this.hiddenRangesPrefixSum.getTotalSum()?e-(this.hiddenRangesPrefixSum.getTotalSum()-this.hiddenRangesPrefixSum.getCount()):void 0:t.index
  }
  convertModelIndexToViewIndex(e){
    return this.hiddenRangesPrefixSum?e>=this.hiddenRangesPrefixSum.getTotalSum()?Math.min(this.length, this.hiddenRangesPrefixSum.getTotalSum()):this.hiddenRangesPrefixSum.getIndexOf(e).index:e
  }
  modelIndexIsVisible(e){
    return this.hiddenRangesPrefixSum&&this.hiddenRangesPrefixSum.getIndexOf(e).remainder!==0?e>=this.hiddenRangesPrefixSum.getTotalSum():!0
  }
  _getVisibleRangesFromIndex(e, t, i, r){
    const s=[], o=[];
    let a=e, l=t;
    for(;
    a<=i;
    ){
      const u=this.hiddenRangesPrefixSum.getPrefixSum(a);
      u===l+1?(s.length&&(s[s.length-1]===l-1?o.push({
        start:s[s.length-1],end:l+1
      }):o.push({
        start:s[s.length-1],end:s[s.length-1]+1
      })),s.push(l),a++,l++):(s.length&&(s[s.length-1]===l-1?o.push({
        start:s[s.length-1],end:l+1
      }):o.push({
        start:s[s.length-1],end:s[s.length-1]+1
      })),s.push(l),a++,l=u)
    }
    return s.length&&o.push({
      start:s[s.length-1],end:s[s.length-1]+1
    }), QUe(o)
  }
  getVisibleRangesPlusViewportAboveAndBelow(){
    if(this.view.length<=0)return[];
    const e=Math.max(this.getViewScrollTop()-this.renderHeight, 0), t=this.view.indexAt(e), i=this.view.element(t), r=this._viewModel.getCellIndex(i), s=zA(this.getViewScrollBottom()+this.renderHeight, 0, this.scrollHeight), o=zA(this.view.indexAt(s), 0, this.view.length-1), a=this.view.element(o), l=this._viewModel.getCellIndex(a);
    return l-r===o-t?[{
      start:r,end:l
    }
    ]:this._getVisibleRangesFromIndex(t, r, o, l)
  }
  _getViewIndexUpperBound(e){
    if(!this._viewModel)return-1;
    const t=this._viewModel.getCellIndex(e);
    if(t===-1)return-1;
    if(!this.hiddenRangesPrefixSum)return t;
    const i=this.hiddenRangesPrefixSum.getIndexOf(t);
    return i.remainder!==0&&t>=this.hiddenRangesPrefixSum.getTotalSum()?t-(this.hiddenRangesPrefixSum.getTotalSum()-this.hiddenRangesPrefixSum.getCount()):i.index
  }
  _getViewIndexUpperBound2(e){
    if(!this.hiddenRangesPrefixSum)return e;
    const t=this.hiddenRangesPrefixSum.getIndexOf(e);
    return t.remainder!==0&&e>=this.hiddenRangesPrefixSum.getTotalSum()?e-(this.hiddenRangesPrefixSum.getTotalSum()-this.hiddenRangesPrefixSum.getCount()):t.index
  }
  focusElement(e){
    const t=this._getViewIndexUpperBound(e);
    if(t>=0&&this._viewModel){
      const i=this.element(t).handle;
      this._viewModel.updateSelectionsState({
        kind:Wy.Handle,primary:i,selections:[i]
      },"view"),this.setFocus([t],void 0,!1)
    }
  }
  selectElements(e){
    const t=e.map(i=>this._getViewIndexUpperBound(i)).filter(i=>i>=0);
    this.setSelection(t)
  }
  getCellViewScrollTop(e){
    const t=this._getViewIndexUpperBound(e);
    if(t===void 0||t<0||t>=this.length)throw new HSe(this.listUser, `Invalid index ${t}`);
    return this.view.elementTop(t)
  }
  getCellViewScrollBottom(e){
    const t=this._getViewIndexUpperBound(e);
    if(t===void 0||t<0||t>=this.length)throw new HSe(this.listUser, `Invalid index ${t}`);
    const i=this.view.elementTop(t), r=this.view.elementHeight(t);
    return i+r
  }
  setFocus(e, t, i){
    if(i){
      super.setFocus(e,t);
      return
    }
    if(e.length){
      if(this._viewModel){
        const r=this.element(e[0]).handle;
        this._viewModel.updateSelectionsState({
          kind:Wy.Handle,primary:r,selections:this.getSelection().map(s=>this.element(s).handle)
        },"view")
      }
    }
    else if(this._viewModel){
      if(this.length)return;
      this._viewModel.updateSelectionsState({
        kind:Wy.Handle,primary:null,selections:[]
      },"view")
    }
    super.setFocus(e, t)
  }
  setSelection(e, t, i){
    if(i){
      super.setSelection(e,t);
      return
    }
    e.length?this._viewModel&&this._viewModel.updateSelectionsState({
      kind:Wy.Handle,primary:this.getFocusedElements()[0]?.handle??null,selections:e.map(r=>this.element(r)).map(r=>r.handle)
    }, "view"):this._viewModel&&this._viewModel.updateSelectionsState({
      kind:Wy.Handle,primary:this.getFocusedElements()[0]?.handle??null,selections:[]
    }, "view"), super.setSelection(e, t)
  }
  revealCells(e){
    const t=this._getViewIndexUpperBound2(e.start);
    if(t<0)return;
    const i=this._getViewIndexUpperBound2(e.end-1), r=this.getViewScrollTop(), s=this.getViewScrollBottom(), o=this.view.elementTop(t);
    if(o>=r&&o<s){
      const a=this.view.elementTop(i),l=this.view.elementHeight(i);
      if(a+l<=s)return;
      if(a>=s)return this._revealInternal(i,!1,2);
      if(a<s)return a+l-s<o-r?this.view.setScrollTop(r+a+l-s):this._revealInternal(t,!1,0)
    }
    this._revealInViewWithMinimalScrolling(t)
  }
  _revealInViewWithMinimalScrolling(e, t){
    const i=this.view.firstMostlyVisibleIndex, r=this.view.elementHeight(e);
    e<=i||!t&&r>=this.view.renderHeight?this._revealInternal(e, !0, 0):this._revealInternal(e, !0, 2, t)
  }
  scrollToBottom(){
    const e=this.view.scrollHeight, t=this.getViewScrollTop(), i=this.getViewScrollBottom();
    this.view.setScrollTop(e-(i-t))
  }
  async revealCell(e, t){
    const i=this._getViewIndexUpperBound(e);
    if(!(i<0)){
      switch(t){
        case 2:this._revealInternal(i,!1,0);
        break;
        case 3:this._revealInternal(i,!1,1);
        break;
        case 4:this._revealInternal(i,!0,1);
        break;
        case 5:this._revealInternal(i,!0,3);
        break;
        case 6:this._revealInViewWithMinimalScrolling(i,!0);
        break;
        case 1:this._revealInViewWithMinimalScrolling(i);
        break
      }
      if((e.getEditState()===aw.Editing||t===6&&e.cellKind===zd.Code)&&!e.editorAttached)return ZSi(e)
    }
  }
  _revealInternal(e, t, i, r){
    if(e>=this.view.length)return;
    const s=this.getViewScrollTop(), o=this.getViewScrollBottom(), a=this.view.elementTop(e), l=this.view.elementHeight(e)+a;
    if(!(t&&a>=s&&l<o))switch(i){
      case 0:this.view.setScrollTop(a),this.view.setScrollTop(this.view.elementTop(e));
      break;
      case 1:case 3:{
        this.view.setScrollTop(a-this.view.renderHeight/2);
        const u=this.view.elementTop(e),d=this.view.elementHeight(e),m=this.getViewScrollBottom()-this.getViewScrollTop();
        d>=m?this.view.setScrollTop(u):i===1?this.view.setScrollTop(u+d/2-m/2):i===3&&this.view.setScrollTop(u-m/5)
      }
      break;
      case 2:if(r){
        const u=this.viewModel?.layoutInfo?.fontInfo.lineHeight??15,d=this.notebookOptions.getLayoutConfiguration().cellTopMargin+this.notebookOptions.getLayoutConfiguration().editorTopPadding,m=a+u+d;
        if(m<o)return;
        this.view.setScrollTop(this.scrollTop+(m-o));
        break
      }
      this.view.setScrollTop(this.scrollTop+(l-o)),this.view.setScrollTop(this.scrollTop+(this.view.elementTop(e)+this.view.elementHeight(e)-this.getViewScrollBottom()));
      break;
      default:break
    }
  }
  async revealRangeInCell(e, t, i){
    const r=this._getViewIndexUpperBound(e);
    if(!(r<0))switch(i){
      case Axe.Default:return this._revealRangeInternalAsync(r,t);
      case Axe.Center:return this._revealRangeInCenterInternalAsync(r,t);
      case Axe.CenterIfOutsideViewport:return this._revealRangeInCenterIfOutsideViewportInternalAsync(r,t)
    }
  }
  async _revealRangeInternalAsync(e, t){
    const i=this.getViewScrollTop(), r=this.getViewScrollBottom(), s=this.view.elementTop(e), o=this.view.element(e);
    if(o.editorAttached)this._revealRangeCommon(e, t);
    else{
      const a=this.view.elementHeight(e);
      let l;
      return s+a<=i?(this.view.setScrollTop(s),l="top"):s>=r&&(this.view.setScrollTop(s-this.view.renderHeight/2),l="bottom"),new Promise((d,m)=>{
        In.once(o.onDidChangeEditorAttachState)(()=>{
          o.editorAttached?d():m()
        })
      }).then(()=>{
        this._revealRangeCommon(e,t,l)
      })
    }
  }
  async _revealRangeInCenterInternalAsync(e, t){
    const i=(a, l)=>{
      const u=this.view.element(a),d=u.getPositionScrollTopOffset(l),m=this.view.elementTop(a)+d;
      this.view.setScrollTop(m-this.view.renderHeight/2),u.revealRangeInCenter(l)
    }, s=this.view.elementTop(e);
    this.view.setScrollTop(s-this.view.renderHeight/2);
    const o=this.view.element(e);
    if(o.editorAttached)i(e, t);
    else return ZSi(o).then(()=>i(e, t))
  }
  async _revealRangeInCenterIfOutsideViewportInternalAsync(e, t){
    const i=(d, m)=>{
      const p=this.view.element(d),g=p.getPositionScrollTopOffset(m),f=this.view.elementTop(d)+g;
      this.view.setScrollTop(f-this.view.renderHeight/2),p.revealRangeInCenter(m)
    }, r=this.getViewScrollTop(), s=this.getViewScrollBottom(), a=this.view.elementTop(e), l=this.view.element(e), u=a+l.getPositionScrollTopOffset(t);
    if(u<r||u>s){
      this.view.setScrollTop(u-this.view.renderHeight/2);
      const d=this.view.elementTop(e)+l.getPositionScrollTopOffset(t);
      if(this.view.setScrollTop(d-this.view.renderHeight/2),!l.editorAttached)return ZSi(l).then(()=>i(e,t))
    }
    else if(l.editorAttached)l.revealRangeInCenter(t);
    else return ZSi(l).then(()=>i(e, t))
  }
  _revealRangeCommon(e, t, i){
    const r=this.view.element(e), s=this.getViewScrollTop(), o=this.getViewScrollBottom(), a=r.getPositionScrollTopOffset(t), l=this.view.elementHeight(e);
    if(a>=l){
      const m=r.layoutInfo.totalHeight;
      this.updateElementHeight(e,m)
    }
    const d=this.view.elementTop(e)+a;
    d<s?this.view.setScrollTop(d-30):d>o?this.view.setScrollTop(s+d-o+30):i==="bottom"?this.view.setScrollTop(s+d-o+30):i==="top"&&this.view.setScrollTop(d-30)
  }
  revealCellOffsetInCenter(e, t){
    const i=this._getViewIndexUpperBound(e);
    if(i>=0){
      const r=this.view.element(i),s=this.view.elementTop(i);
      if(r instanceof GV)return this._revealInCenterIfOutsideViewport(i);
      {
        const o=r.layoutInfo.outputContainerOffset+Math.min(t,r.layoutInfo.outputTotalHeight);
        this.view.setScrollTop(s-this.view.renderHeight/2),this.view.setScrollTop(s+o-this.view.renderHeight/2)
      }
    }
  }
  revealOffsetInCenterIfOutsideViewport(e){
    const t=this.getViewScrollTop(), i=this.getViewScrollBottom();
    if(e<t||e>i){
      const r=Math.max(0,e-this.view.renderHeight/2);
      this.view.setScrollTop(r)
    }
  }
  _revealInCenterIfOutsideViewport(e){
    this._revealInternal(e, !0, 1)
  }
  domElementOfElement(e){
    const t=this._getViewIndexUpperBound(e);
    return t>=0&&t<this.length?this.view.domElement(t):null
  }
  focusView(){
    this.view.domNode.focus()
  }
  triggerScrollFromMouseWheelEvent(e){
    this.view.delegateScrollFromMouseWheelEvent(e)
  }
  delegateVerticalScrollbarPointerDown(e){
    this.view.delegateVerticalScrollbarPointerDown(e)
  }
  isElementAboveViewport(e){
    return this.view.elementTop(e)+this.view.elementHeight(e)<this.scrollTop
  }
  updateElementHeight2(e, t, i=null){
    const r=this._getViewIndexUpperBound(e);
    if(r===void 0||r<0||r>=this.length)return;
    if(this.isElementAboveViewport(r)){
      const l=this.elementHeight(e)-t;
      this._webviewElement&&In.once(this.view.onWillScroll)(()=>{
        const u=parseInt(this._webviewElement.domNode.style.top,10);
        Ruy(this._webviewElement.domNode)?this._webviewElement.setTop(u-l):this._webviewElement.setTop(-gbn)
      }),this.view.updateElementHeight(r,t,i),this.viewZones.layout(),this.cellOverlays.layout();
      return
    }
    if(i!==null){
      this.view.updateElementHeight(r,t,i),this.viewZones.layout(),this.cellOverlays.layout();
      return
    }
    const s=this.getFocus(), o=s.length?s[0]:null;
    if(o){
      const a=t-this.view.elementHeight(r);
      if(this._notebookCellAnchor.shouldAnchor(this.view,o,a,this.element(r))){
        this.view.updateElementHeight(r,t,o),this.viewZones.layout(),this.cellOverlays.layout();
        return
      }
    }
    this.view.updateElementHeight(r, t, null), this.viewZones.layout(), this.cellOverlays.layout()
  }
  changeViewZones(e){
    this.viewZones.changeViewZones(e)&&this.viewZones.layout()
  }
  changeCellOverlays(e){
    this.cellOverlays.changeCellOverlays(e)&&this.cellOverlays.layout()
  }
  getViewZoneLayoutInfo(e){
    return this.viewZones.getViewZoneLayoutInfo(e)
  }
  domFocus(){
    const e=this.getFocusedElements()[0], t=e&&this.domElementOfElement(e);
    this.view.domNode.ownerDocument.activeElement&&t&&t.contains(this.view.domNode.ownerDocument.activeElement)||!Fs&&this.view.domNode.ownerDocument.activeElement&&_oe(this.view.domNode.ownerDocument.activeElement, "context-view")||super.domFocus()
  }
  focusContainer(e){
    e&&(this._viewModel?.updateSelectionsState({
      kind:Wy.Handle,primary:null,selections:[]
    }, "view"), this.setFocus([], void 0, !0), this.setSelection([], void 0, !0)), super.domFocus()
  }
  getViewScrollTop(){
    return this.view.getScrollTop()
  }
  getViewScrollBottom(){
    return this.getViewScrollTop()+this.view.renderHeight
  }
  setCellEditorSelection(e, t){
    const i=e;
    i.editorAttached?i.setSelection(t):ZSi(i).then(()=>{
      i.setSelection(t)
    })
  }
  style(e){
    const t=this.view.domId;
    this.styleElement||(this.styleElement=wC(this.view.domNode));
    const i=t&&`.${t}`, r=[];
    e.listBackground&&r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows { background: ${e.listBackground}; }`), e.listFocusBackground&&(r.push(`.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { background-color: ${e.listFocusBackground}; }`), r.push(`.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused:hover { background-color: ${e.listFocusBackground}; }`)), e.listFocusForeground&&r.push(`.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { color: ${e.listFocusForeground}; }`), e.listActiveSelectionBackground&&(r.push(`.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { background-color: ${e.listActiveSelectionBackground}; }`), r.push(`.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected:hover { background-color: ${e.listActiveSelectionBackground}; }`)), e.listActiveSelectionForeground&&r.push(`.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { color: ${e.listActiveSelectionForeground}; }`), e.listFocusAndSelectionBackground&&r.push(`
				.monaco-drag-image${i},
				.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected.focused { background-color: ${e.listFocusAndSelectionBackground}; }
			`), e.listFocusAndSelectionForeground&&r.push(`
				.monaco-drag-image${i},
				.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected.focused { color: ${e.listFocusAndSelectionForeground}; }
			`), e.listInactiveFocusBackground&&(r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { background-color:  ${e.listInactiveFocusBackground}; }`), r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused:hover { background-color:  ${e.listInactiveFocusBackground}; }`)), e.listInactiveSelectionBackground&&(r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { background-color:  ${e.listInactiveSelectionBackground}; }`), r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected:hover { background-color:  ${e.listInactiveSelectionBackground}; }`)), e.listInactiveSelectionForeground&&r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { color: ${e.listInactiveSelectionForeground}; }`), e.listHoverBackground&&r.push(`.monaco-list${i}:not(.drop-target) > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover:not(.selected):not(.focused) { background-color:  ${e.listHoverBackground}; }`), e.listHoverForeground&&r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${e.listHoverForeground}; }`), e.listSelectionOutline&&r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { outline: 1px dotted ${e.listSelectionOutline}; outline-offset: -1px; }`), e.listFocusOutline&&r.push(`
				.monaco-drag-image${i},
				.monaco-list${i}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }
			`), e.listInactiveFocusOutline&&r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { outline: 1px dotted ${e.listInactiveFocusOutline}; outline-offset: -1px; }`), e.listHoverOutline&&r.push(`.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover { outline: 1px dashed ${e.listHoverOutline}; outline-offset: -1px; }`), e.listDropOverBackground&&r.push(`
				.monaco-list${i}.drop-target,
				.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-rows.drop-target,
				.monaco-list${i} > div.monaco-scrollable-element > .monaco-list-row.drop-target { background-color: ${e.listDropOverBackground} !important; color: inherit !important; }
			`);
    const s=r.join(`
`);
    s!==this.styleElement.textContent&&(this.styleElement.textContent=s)
  }
  getRenderHeight(){
    return this.view.renderHeight
  }
  getScrollHeight(){
    return this.view.scrollHeight
  }
  layout(e, t){
    this._isInLayout=!0, super.layout(e, t), this.renderHeight===0?this.view.domNode.style.visibility="hidden":this.view.domNode.style.visibility="initial", this._isInLayout=!1
  }
  dispose(){
    this._isDisposed=!0, this._viewModelStore.dispose(), this._localDisposableStore.dispose(), this._notebookCellAnchor.dispose(), this.viewZones.dispose(), this.cellOverlays.dispose(), super.dispose(), this._previousFocusedElements=[], this._viewModel=null, this._hiddenRangeIds=[], this.hiddenRangesPrefixSum=null, this._visibleRanges=[]
  }
}, oTa=__decorate([__param(7, Nh), __param(8, Fn), __param(9, ln), __param(10, pE)], oTa), V9f=class extends at{
  constructor(n){
    super(), this.list=n
  }
  getViewIndex(n){
    return this.list.getViewIndex(n)??-1
  }
  getViewHeight(n){
    return this.list.viewModel?this.list.elementHeight(n):-1
  }
  getCellRangeFromViewRange(n, e){
    if(!this.list.viewModel)return;
    const t=this.list.getModelIndex2(n);
    if(t===void 0)throw new Error(`startIndex ${n} out of boundary`);
    if(e>=this.list.length){
      const i=this.list.viewModel.length;
      return{
        start:t,end:i
      }
    }
    else{
      const i=this.list.getModelIndex2(e);
      if(i===void 0)throw new Error(`endIndex ${e} out of boundary`);
      return{
        start:t,end:i
      }
    }
  }
  getCellsFromViewRange(n, e){
    if(!this.list.viewModel)return[];
    const t=this.getCellRangeFromViewRange(n, e);
    return t?this.list.viewModel.getCellsInRange(t):[]
  }
  getCellsInRange(n){
    return this.list.viewModel?.getCellsInRange(n)??[]
  }
  getVisibleRangesPlusViewportAboveAndBelow(){
    return this.list?.getVisibleRangesPlusViewportAboveAndBelow()??[]
  }
}
}
});
function Puy(n){
  const e=n.match(Y9f);
  if(!e)return 0;
  switch(e[1]){
    case"comment":return 1;
    case"string":return 2;
    case"regex":return 3;
    case"regexp":return 3
  }
  throw new Error("Unexpected match for standard token type!")
}
function fbn(n){
  const e=[];
  for(let t=1, i=n.length;
  t<i;
  t++){
    const r=n[t];
    e[t]=`.mtk${t} { color: ${r}; }`
  }
  return e.push(".mtki { font-style: italic; }"), e.push(".mtkb { font-weight: bold; }"), e.push(".mtku { text-decoration: underline; text-underline-position: under; }"), e.push(".mtks { text-decoration: line-through; }"), e.push(".mtks.mtku { text-decoration: underline line-through; text-underline-position: under; }"), e.join(`
`)
}
var Y9f, bbn=