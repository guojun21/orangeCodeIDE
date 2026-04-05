// Module: out-build/vs/editor/browser/widget/diffEditor/components/accessibleDiffViewer.js
// Offset: 2154847 (bundle byte offset)
// Size: 11067 bytes

ri(), ive(), Ov(), zI(), Vs(), qi(), rt(), Uc(), Jr(), HY(), Gde(), pk(), Ix(), $I(), tl(), ts(), WY(), Ku(), LH(), Qft(), Lte(), Ht(), QS(), Wt(), Pm(), EdA(), nl(), O0h=us("diff-review-insert", Be.add, _(217, null)), U0h=us("diff-review-remove", Be.remove, _(218, null)), $0h=us("diff-review-close", Be.close, _(219, null)), yRe=class extends at{
  static{
    this._ttPolicy=nve("diffReview", {
      createHTML:e=>e
    })
  }
  constructor(e, t, i, r, s, o, a, l, u){
    super(), this._parentNode=e, this._visible=t, this._setVisible=i, this._canClose=r, this._width=s, this._height=o, this._diffs=a, this._models=l, this._instantiationService=u, this._state=Ite(this, (d, m)=>{
      const p=this._visible.read(d);
      if(this._parentNode.style.visibility=p?"visible":"hidden",!p)return null;
      const g=m.add(this._instantiationService.createInstance(p5o,this._diffs,this._models,this._setVisible,this._canClose)),f=m.add(this._instantiationService.createInstance(g5o,this._parentNode,g,this._width,this._height,this._models));
      return{
        model:g,view:f
      }
    }).recomputeInitiallyAndOnChange(this._store)
  }
  next(){
    pp(e=>{
      const t=this._visible.get();
      this._setVisible(!0,e),t&&this._state.get().model.nextGroup(e)
    })
  }
  prev(){
    pp(e=>{
      this._setVisible(!0,e),this._state.get().model.previousGroup(e)
    })
  }
  close(){
    pp(e=>{
      this._setVisible(!1,e)
    })
  }
}, yRe=__decorate([__param(8, ln)], yRe), p5o=class extends at{
  constructor(e, t, i, r, s){
    super(), this._diffs=e, this._models=t, this._setVisible=i, this.canClose=r, this._accessibilitySignalService=s, this._groups=Ua(this, []), this._currentGroupIdx=Ua(this, 0), this._currentElementIdx=Ua(this, 0), this.groups=this._groups, this.currentGroup=this._currentGroupIdx.map((o, a)=>this._groups.read(a)[o]), this.currentGroupIndex=this._currentGroupIdx, this.currentElement=this._currentElementIdx.map((o, a)=>this.currentGroup.read(a)?.lines[o]), this._register(Oc(o=>{
      const a=this._diffs.read(o);
      if(!a){
        this._groups.set([],void 0);
        return
      }
      const l=xdA(a,this._models.getOriginalModel().getLineCount(),this._models.getModifiedModel().getLineCount());
      pp(u=>{
        const d=this._models.getModifiedPosition();
        if(d){
          const m=l.findIndex(p=>d?.lineNumber<p.range.modified.endLineNumberExclusive);
          m!==-1&&this._currentGroupIdx.set(m,u)
        }
        this._groups.set(l,u)
      })
    })), this._register(Oc(o=>{
      const a=this.currentElement.read(o);
      a?.type===mz.Deleted?this._accessibilitySignalService.playSignal(rb.diffLineDeleted,{
        source:"accessibleDiffViewer.currentElementChanged"
      }):a?.type===mz.Added&&this._accessibilitySignalService.playSignal(rb.diffLineInserted,{
        source:"accessibleDiffViewer.currentElementChanged"
      })
    })), this._register(Oc(o=>{
      const a=this.currentElement.read(o);
      if(a&&a.type!==mz.Header){
        const l=a.modifiedLineNumber??a.diff.modified.startLineNumber;
        this._models.modifiedSetSelection(Zt.fromPositions(new ar(l,1)))
      }
    }))
  }
  _goToGroupDelta(e, t){
    const i=this.groups.get();
    !i||i.length<=1||h4t(t, r=>{
      this._currentGroupIdx.set(dm.ofLength(i.length).clipCyclic(this._currentGroupIdx.get()+e),r),this._currentElementIdx.set(0,r)
    })
  }
  nextGroup(e){
    this._goToGroupDelta(1, e)
  }
  previousGroup(e){
    this._goToGroupDelta(-1, e)
  }
  _goToLineDelta(e){
    const t=this.currentGroup.get();
    !t||t.lines.length<=1||pp(i=>{
      this._currentElementIdx.set(dm.ofLength(t.lines.length).clip(this._currentElementIdx.get()+e),i)
    })
  }
  goToNextLine(){
    this._goToLineDelta(1)
  }
  goToPreviousLine(){
    this._goToLineDelta(-1)
  }
  goToLine(e){
    const t=this.currentGroup.get();
    if(!t)return;
    const i=t.lines.indexOf(e);
    i!==-1&&pp(r=>{
      this._currentElementIdx.set(i,r)
    })
  }
  revealCurrentElementInEditor(){
    if(!this.canClose.get())return;
    this._setVisible(!1, void 0);
    const e=this.currentElement.get();
    e&&(e.type===mz.Deleted?this._models.originalReveal(Zt.fromPositions(new ar(e.originalLineNumber, 1))):this._models.modifiedReveal(e.type!==mz.Header?Zt.fromPositions(new ar(e.modifiedLineNumber, 1)):void 0))
  }
  close(){
    this.canClose.get()&&(this._setVisible(!1, void 0), this._models.modifiedFocus())
  }
}, p5o=__decorate([__param(4, fS)], p5o), I3t=3, (function(n){
  n[n.Header=0]="Header", n[n.Unchanged=1]="Unchanged", n[n.Deleted=2]="Deleted", n[n.Added=3]="Added"
})(mz||(mz={
  
})), q0h=class{
  constructor(n, e){
    this.range=n, this.lines=e
  }
}, H0h=class{
  constructor(){
    this.type=mz.Header
  }
}, J0h=class{
  constructor(n, e){
    this.diff=n, this.originalLineNumber=e, this.type=mz.Deleted, this.modifiedLineNumber=void 0
  }
}, G0h=class{
  constructor(n, e){
    this.diff=n, this.modifiedLineNumber=e, this.type=mz.Added, this.originalLineNumber=void 0
  }
}, W0h=class{
  constructor(n, e){
    this.originalLineNumber=n, this.modifiedLineNumber=e, this.type=mz.Unchanged
  }
}, g5o=class extends at{
  constructor(e, t, i, r, s, o){
    super(), this._element=e, this._model=t, this._width=i, this._height=r, this._models=s, this._languageService=o, this.domNode=this._element, this.domNode.className="monaco-component diff-review monaco-editor-background";
    const a=document.createElement("div");
    a.className="diff-review-actions", this._actionBar=this._register(new Gf(a)), this._register(Oc(l=>{
      this._actionBar.clear(),this._model.canClose.read(l)&&this._actionBar.push(Sh({
        id:"diffreview.close",label:_(220,null),class:"close-diff-review "+Qt.asClassName($0h),enabled:!0,run:async()=>t.close()
      }),{
        label:!1,icon:!0
      })
    })), this._content=document.createElement("div"), this._content.className="diff-review-content", this._content.setAttribute("role", "code"), this._scrollbar=this._register(new vF(this._content, {
      
    })), um(this.domNode, this._scrollbar.getDomNode(), a), this._register(Oc(l=>{
      this._height.read(l),this._width.read(l),this._scrollbar.scanDomNode()
    })), this._register($i(()=>{
      um(this.domNode)
    })), this._register(aKe(this.domNode, {
      width:this._width,height:this._height
    })), this._register(aKe(this._content, {
      width:this._width,height:this._height
    })), this._register(M0((l, u)=>{
      this._model.currentGroup.read(l),this._render(u)
    })), this._register(_f(this.domNode, "keydown", l=>{
      (l.equals(18)||l.equals(2066)||l.equals(530))&&(l.preventDefault(),this._model.goToNextLine()),(l.equals(16)||l.equals(2064)||l.equals(528))&&(l.preventDefault(),this._model.goToPreviousLine()),(l.equals(9)||l.equals(2057)||l.equals(521)||l.equals(1033))&&(l.preventDefault(),this._model.close()),(l.equals(10)||l.equals(3))&&(l.preventDefault(),this._model.revealCurrentElementInEditor())
    }))
  }
  _render(e){
    const t=this._models.getOriginalOptions(), i=this._models.getModifiedOptions(), r=document.createElement("div");
    r.className="diff-review-table", r.setAttribute("role", "list"), r.setAttribute("aria-label", _(221, null)), bF(r, i.get(52)), um(this._content, r);
    const s=this._models.getOriginalModel(), o=this._models.getModifiedModel();
    if(!s||!o)return;
    const a=s.getOptions(), l=o.getOptions(), u=i.get(68), d=this._model.currentGroup.get();
    for(const m of d?.lines||[]){
      if(!d)break;
      let p;
      if(m.type===mz.Header){
        const f=document.createElement("div");
        f.className="diff-review-row",f.setAttribute("role","listitem");
        const A=d.range,w=this._model.currentGroupIndex.get(),C=this._model.groups.get().length,x=N=>N===0?_(222,null):N===1?_(223,null):_(224,null,N),I=x(A.original.length),B=x(A.modified.length);
        f.setAttribute("aria-label",_(225,null,w+1,C,A.original.startLineNumber,I,A.modified.startLineNumber,B));
        const R=document.createElement("div");
        R.className="diff-review-cell diff-review-summary",R.appendChild(document.createTextNode(`${w+1}/${C}: @@ -${A.original.startLineNumber},${A.original.length} +${A.modified.startLineNumber},${A.modified.length} @@`)),f.appendChild(R),p=f
      }
      else p=this._createRow(m,u,this._width.get(),t,s,a,i,o,l);
      r.appendChild(p);
      const g=Ro(f=>this._model.currentElement.read(f)===m);
      e.add(Oc(f=>{
        const A=g.read(f);
        p.tabIndex=A?0:-1,A&&p.focus()
      })),e.add(ei(p,"focus",()=>{
        this._model.goToLine(m)
      }))
    }
    this._scrollbar.scanDomNode()
  }
  _createRow(e, t, i, r, s, o, a, l, u){
    const d=r.get(151), m=d.glyphMarginWidth+d.lineNumbersWidth, p=a.get(151), g=10+p.glyphMarginWidth+p.lineNumbersWidth;
    let f="diff-review-row", A="";
    const w="diff-review-spacer";
    let C=null;
    switch(e.type){
      case mz.Added:f="diff-review-row line-insert",A=" char-insert",C=O0h;
      break;
      case mz.Deleted:f="diff-review-row line-delete",A=" char-delete",C=U0h;
      break
    }
    const x=document.createElement("div");
    x.style.minWidth=i+"px", x.className=f, x.setAttribute("role", "listitem"), x.ariaLevel="";
    const I=document.createElement("div");
    I.className="diff-review-cell", I.style.height=`${t}px`, x.appendChild(I);
    const B=document.createElement("span");
    B.style.width=m+"px", B.style.minWidth=m+"px", B.className="diff-review-line-number"+A, e.originalLineNumber!==void 0?B.appendChild(document.createTextNode(String(e.originalLineNumber))):B.innerText="\xA0", I.appendChild(B);
    const R=document.createElement("span");
    R.style.width=g+"px", R.style.minWidth=g+"px", R.style.paddingRight="10px", R.className="diff-review-line-number"+A, e.modifiedLineNumber!==void 0?R.appendChild(document.createTextNode(String(e.modifiedLineNumber))):R.innerText="\xA0", I.appendChild(R);
    const N=document.createElement("span");
    if(N.className=w, C){
      const $=document.createElement("span");
      $.className=Qt.asClassName(C),$.innerText="\xA0\xA0",N.appendChild($)
    }
    else N.innerText="\xA0\xA0";
    I.appendChild(N);
    let M;
    if(e.modifiedLineNumber!==void 0){
      let $=this._getLineHtml(l,a,u.tabSize,e.modifiedLineNumber,this._languageService.languageIdCodec);
      yRe._ttPolicy&&($=yRe._ttPolicy.createHTML($)),I.insertAdjacentHTML("beforeend",$),M=l.getLineContent(e.modifiedLineNumber)
    }
    else{
      let $=this._getLineHtml(s,r,o.tabSize,e.originalLineNumber,this._languageService.languageIdCodec);
      yRe._ttPolicy&&($=yRe._ttPolicy.createHTML($)),I.insertAdjacentHTML("beforeend",$),M=s.getLineContent(e.originalLineNumber)
    }
    M.length===0&&(M=_(226, null));
    let O="";
    switch(e.type){
      case mz.Unchanged:e.originalLineNumber===e.modifiedLineNumber?O=_(227,null,M,e.originalLineNumber):O=_(228,null,M,e.originalLineNumber,e.modifiedLineNumber);
      break;
      case mz.Added:O=_(229,null,M,e.modifiedLineNumber);
      break;
      case mz.Deleted:O=_(230,null,M,e.originalLineNumber);
      break
    }
    return x.setAttribute("aria-label", O), x
  }
  _getLineHtml(e, t, i, r, s){
    const o=e.getLineContent(r), a=t.get(52), l=OB.createEmpty(o, s), u=zOt.isBasicASCII(o, e.mightContainNonBasicASCII()), d=zOt.containsRTL(o, u, e.mightContainRTL());
    return ccA(new JVe(a.isMonospace&&!t.get(33), a.canUseHalfwidthRightwardsArrow, o, !1, u, d, 0, l, [], i, 0, a.spaceWidth, a.middotWidth, a.wsmiddotWidth, t.get(122), t.get(104), t.get(99), t.get(53)!==Y5e.OFF, null)).html
  }
}, g5o=__decorate([__param(5, Jl)], g5o), Q0h=class{
  constructor(n){
    this.editors=n
  }
  getOriginalModel(){
    return this.editors.original.getModel()
  }
  getOriginalOptions(){
    return this.editors.original.getOptions()
  }
  originalReveal(n){
    this.editors.original.revealRange(n), this.editors.original.setSelection(n), this.editors.original.focus()
  }
  getModifiedModel(){
    return this.editors.modified.getModel()
  }
  getModifiedOptions(){
    return this.editors.modified.getOptions()
  }
  modifiedReveal(n){
    n&&(this.editors.modified.revealRange(n), this.editors.modified.setSelection(n)), this.editors.modified.focus()
  }
  modifiedSetSelection(n){
    this.editors.modified.setSelection(n)
  }
  modifiedFocus(){
    this.editors.modified.focus()
  }
  getModifiedPosition(){
    return this.editors.modified.getPosition()??void 0
  }
}
}
}), TdA, IdA, DdA, j0h, xDc, TDc, IDc, DDc, BDc, _3n, f5o, z0h, D3t, V0h, K0h, B3t=