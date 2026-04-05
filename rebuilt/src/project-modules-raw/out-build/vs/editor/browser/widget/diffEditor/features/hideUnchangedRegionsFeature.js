// Module: out-build/vs/editor/browser/widget/diffEditor/features/hideUnchangedRegionsFeature.js
// Offset: 2331453 (bundle byte offset)
// Size: 12544 bytes

ri(), bS(), qi(), tg(), rt(), Uc(), Jr(), Js(), Ht(), Wt(), Ix(), tl(), ts(), Tg(), V$(), Gde(), hhA(), F3n=class extends at{
  static{
    q5o=this
  }
  static{
    this._breadcrumbsSourceFactory=Ua(q5o, ()=>({
      dispose(){
        
      },getBreadcrumbItems(e,t){
        return[]
      }
    }))
  }
  static setBreadcrumbsSourceFactory(e){
    this._breadcrumbsSourceFactory.set(e, void 0)
  }
  get isUpdatingHiddenAreas(){
    return this._isUpdatingHiddenAreas
  }
  constructor(e, t, i, r){
    super(), this._editors=e, this._diffModel=t, this._options=i, this._instantiationService=r, this._modifiedOutlineSource=wde(this, l=>{
      const u=this._editors.modifiedModel.read(l),d=q5o._breadcrumbsSourceFactory.read(l);
      return!u||!d?void 0:d(u,this._instantiationService)
    }), this._isUpdatingHiddenAreas=!1, this._register(this._editors.original.onDidChangeCursorPosition(l=>{
      if(l.reason===1)return;
      const u=this._diffModel.get();
      pp(d=>{
        for(const m of this._editors.original.getSelections()||[])u?.ensureOriginalLineIsVisible(m.getStartPosition().lineNumber,0,d),u?.ensureOriginalLineIsVisible(m.getEndPosition().lineNumber,0,d)
      })
    })), this._register(this._editors.modified.onDidChangeCursorPosition(l=>{
      if(l.reason===1)return;
      const u=this._diffModel.get();
      pp(d=>{
        for(const m of this._editors.modified.getSelections()||[])u?.ensureModifiedLineIsVisible(m.getStartPosition().lineNumber,0,d),u?.ensureModifiedLineIsVisible(m.getEndPosition().lineNumber,0,d)
      })
    }));
    const s=this._diffModel.map((l, u)=>{
      const d=l?.unchangedRegions.read(u)??[];
      return d.length===1&&d[0].modifiedLineNumber===1&&d[0].lineCount===this._editors.modifiedModel.read(u)?.getLineCount()?[]:d
    });
    this.viewZones=Ite(this, (l, u)=>{
      const d=this._modifiedOutlineSource.read(l);
      if(!d)return{
        origViewZones:[],modViewZones:[]
      };
      const m=[],p=[],g=this._options.renderSideBySide.read(l),f=this._options.compactMode.read(l),A=this._editors.modifiedModel.read(l)?.getLineCount(),w=s.read(l);
      for(let C=0;
      C<w.length;
      C++){
        const x=w[C];
        if(!x.shouldHideControls(l)){
          if(f){
            const I=x.getHiddenModifiedRange(l),B=I.startLineNumber===1,R=A!==void 0&&I.endLineNumberExclusive===A+1;
            if(B||R)continue
          }
          if(f){
            {
              const I=Ro(this,R=>x.getHiddenOriginalRange(R).startLineNumber-1),B=new dbt(I,sBc);
              m.push(B),u.add(new oBc(this._editors.original,B,x,!g))
            }
            {
              const I=Ro(this,R=>x.getHiddenModifiedRange(R).startLineNumber-1),B=new dbt(I,sBc);
              p.push(B),u.add(new oBc(this._editors.modified,B,x))
            }
          }
          else{
            const B=C===w.length-1?2:0;
            if(g){
              const R=Ro(this,M=>x.getHiddenOriginalRange(M).startLineNumber-1),N=new dbt(R,rBc+B);
              m.push(N),u.add(new aBc(this._editors.original,N,x,x.originalUnchangedRange,!g,d,M=>this._diffModel.get().ensureModifiedLineIsVisible(M,2,void 0),this._options))
            }
            {
              const R=Ro(this,O=>x.getHiddenModifiedRange(O).startLineNumber-1),N=g?rBc:XCh,M=new dbt(R,N+B);
              p.push(M),u.add(new aBc(this._editors.modified,M,x,x.modifiedUnchangedRange,!1,d,O=>this._diffModel.get().ensureModifiedLineIsVisible(O,2,void 0),this._options))
            }
          }
        }
      }
      return{
        origViewZones:m,modViewZones:p
      }
    });
    const o={
      description:"unchanged lines",className:"diff-unchanged-lines",isWholeLine:!0
    }, a={
      description:"Fold Unchanged",glyphMarginHoverMessage:new _c(void 0,{
        isTrusted:!0,supportThemeIcons:!0
      }).appendMarkdown(_(244,null)),glyphMarginClassName:"fold-unchanged "+Qt.asClassName(Be.fold),zIndex:10001
    };
    this._register(t5o(this._editors.original, Ro(this, l=>{
      const u=s.read(l),d=u.map(m=>({
        range:m.originalUnchangedRange.toInclusiveRange(),options:o
      }));
      for(const m of u)m.shouldHideControls(l)&&d.push({
        range:Zt.fromPositions(new ar(m.originalLineNumber,1)),options:a
      });
      return d
    }))), this._register(t5o(this._editors.modified, Ro(this, l=>{
      const u=s.read(l),d=u.map(m=>({
        range:m.modifiedUnchangedRange.toInclusiveRange(),options:o
      }));
      for(const m of u)m.shouldHideControls(l)&&d.push({
        range:rh.ofLength(m.modifiedLineNumber,1).toInclusiveRange(),options:a
      });
      return d
    }))), this._register(Oc(l=>{
      const u=s.read(l);
      this._isUpdatingHiddenAreas=!0;
      try{
        this._editors.original.setHiddenAreas(u.map(d=>d.getHiddenOriginalRange(l).toInclusiveRange()).filter(Ch)),this._editors.modified.setHiddenAreas(u.map(d=>d.getHiddenModifiedRange(l).toInclusiveRange()).filter(Ch))
      }
      finally{
        this._isUpdatingHiddenAreas=!1
      }
    })), this._register(this._editors.modified.onMouseUp(l=>{
      if(!l.event.rightButton&&l.target.position&&l.target.element?.className.includes("fold-unchanged")){
        const u=l.target.position.lineNumber,d=this._diffModel.get();
        if(!d)return;
        const m=d.unchangedRegions.get().find(p=>p.modifiedUnchangedRange.includes(u));
        if(!m)return;
        m.collapseAll(void 0),l.event.stopPropagation(),l.event.preventDefault()
      }
    })), this._register(this._editors.original.onMouseUp(l=>{
      if(!l.event.rightButton&&l.target.position&&l.target.element?.className.includes("fold-unchanged")){
        const u=l.target.position.lineNumber,d=this._diffModel.get();
        if(!d)return;
        const m=d.unchangedRegions.get().find(p=>p.originalUnchangedRange.includes(u));
        if(!m)return;
        m.collapseAll(void 0),l.event.stopPropagation(),l.event.preventDefault()
      }
    }))
  }
}, F3n=q5o=__decorate([__param(3, ln)], F3n), oBc=class extends i5o{
  constructor(n, e, t, i=!1){
    const r=kl("div.diff-hidden-lines-widget");
    super(n, e, r.root), this._unchangedRegion=t, this._hide=i, this._nodes=kl("div.diff-hidden-lines-compact", [kl("div.line-left", []), kl("div.text@text", []), kl("div.line-right", [])]), r.root.appendChild(this._nodes.root), this._hide&&this._nodes.root.replaceChildren(), this._register(Oc(s=>{
      if(!this._hide){
        const o=this._unchangedRegion.getHiddenModifiedRange(s).length,a=_(245,null,o);
        this._nodes.text.innerText=a
      }
    }))
  }
}, aBc=class aWa extends i5o{
  static{
    this._linesPerClick=20
  }
  _revealLinesAboveWithScrollCompensation(e){
    if(e<=0)return;
    const t=this._unchangedRegion.getHiddenModifiedRange(void 0).startLineNumber, i=this._editor.getTopForLineNumber(t);
    this._unchangedRegion.showMoreAbove(e, void 0);
    const r=this._unchangedRegion.getHiddenModifiedRange(void 0).startLineNumber, o=this._editor.getTopForLineNumber(r)-i, a=new CustomEvent("diff-editor-scroll-compensate", {
      bubbles:!0,detail:{
        scrollDelta:o
      }
    });
    this._editor.getDomNode()?.dispatchEvent(a), this._editor.setScrollTop(this._editor.getScrollTop()+o)
  }
  constructor(e, t, i, r, s, o, a, l){
    const u=kl("div.diff-hidden-lines-widget");
    super(e, t, u.root), this._editor=e, this._unchangedRegion=i, this._unchangedRegionRange=r, this._hide=s, this._modifiedOutlineSource=o, this._revealModifiedHiddenLine=a, this._options=l, this._nodes=kl("div.diff-hidden-lines", [kl("div.top@top", {
      title:_(246,null)
    }), kl("div.center@content", {
      style:{
        display:"flex"
      }
    }, [kl("div@first", {
      class:"diff-show-more-lines",style:{
        display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"0px",flexShrink:"0"
      }
    }, [Ct("a", {
      title:_(247,null),role:"button",onclick:()=>{
        this._unchangedRegion.showMoreAbove(aWa._linesPerClick,void 0)
      }
    }, ...a_("$(chevron-up)")), Ct("a", {
      title:_(248,null),role:"button",onclick:()=>{
        this._unchangedRegion.showMoreBelow(aWa._linesPerClick,void 0)
      }
    }, ...a_("$(chevron-down)"))]), kl("div@others", {
      style:{
        display:"flex",justifyContent:"center",alignItems:"center"
      }
    })]), kl("div.bottom@bottom", {
      title:_(249,null),role:"button"
    })]), u.root.appendChild(this._nodes.root), this._nodes.others.style.display="flex", this._nodes.others.style.alignItems="center", this._nodes.others.style.flexGrow="1", this._nodes.others.style.gap="6px";
    const d=p=>{
      const g=p.target;
      if(g.closest("a, .breadcrumb-item")||g.classList.contains("codicon"))return;
      const f=this._editor.getModel();
      if(!f)return;
      const A=this._unchangedRegion.visibleLineCountTop.get(),w=this._unchangedRegion.visibleLineCountBottom.get(),C=this._unchangedRegion.lineCount-A-w;
      if(C<=0)return;
      const x=this._unchangedRegionRange.startLineNumber,I=this._unchangedRegionRange.endLineNumberExclusive,B=f.getLineCount(),R=x>1||A>0,N=I<=B||w>0,M=Math.min(aWa._linesPerClick,C);
      let O=0,$=0;
      R&&N?(O=Math.min(Math.ceil(M/2),C),$=M-O):R?O=M:$=M,this._revealLinesAboveWithScrollCompensation(O),$>0&&this._unchangedRegion.showMoreBelow($,void 0)
    };
    this._nodes.content.addEventListener("click", d), this._register({
      dispose:()=>{
        this._nodes.content.removeEventListener("click",d)
      }
    }), this._hide?um(this._nodes.first):this._register(aKe(this._nodes.first, {
      width:HB(this._editor).layoutInfoContentLeft
    })), this._register(Oc(p=>{
      const g=this._unchangedRegion.visibleLineCountTop.read(p)+this._unchangedRegion.visibleLineCountBottom.read(p)===this._unchangedRegion.lineCount;
      this._nodes.bottom.classList.toggle("canMoveTop",!g),this._nodes.bottom.classList.toggle("canMoveBottom",this._unchangedRegion.visibleLineCountBottom.read(p)>0),this._nodes.top.classList.toggle("canMoveTop",this._unchangedRegion.visibleLineCountTop.read(p)>0),this._nodes.top.classList.toggle("canMoveBottom",!g);
      const f=this._unchangedRegion.isDragged.read(p),A=this._editor.getDomNode();
      A&&(A.classList.toggle("draggingUnchangedRegion",!!f),f==="top"?(A.classList.toggle("canMoveTop",this._unchangedRegion.visibleLineCountTop.read(p)>0),A.classList.toggle("canMoveBottom",!g)):f==="bottom"?(A.classList.toggle("canMoveTop",!g),A.classList.toggle("canMoveBottom",this._unchangedRegion.visibleLineCountBottom.read(p)>0)):(A.classList.toggle("canMoveTop",!1),A.classList.toggle("canMoveBottom",!1)))
    }));
    const m=this._editor;
    this._register(ei(this._nodes.top, "mousedown", p=>{
      if(p.button!==0)return;
      this._nodes.top.classList.toggle("dragging",!0),this._nodes.root.classList.toggle("dragging",!0),p.preventDefault();
      const g=p.clientY;
      let f=!1;
      const A=this._unchangedRegion.visibleLineCountTop.get();
      this._unchangedRegion.isDragged.set("top",void 0);
      const w=As(this._nodes.top),C=ei(w,"mousemove",I=>{
        const R=I.clientY-g;
        f=f||Math.abs(R)>2;
        const N=Math.round(R/m.getOption(68)),M=Math.max(0,Math.min(A+N,this._unchangedRegion.getMaxVisibleLineCountTop()));
        this._unchangedRegion.visibleLineCountTop.set(M,void 0)
      }),x=ei(w,"mouseup",I=>{
        f||this._revealLinesAboveWithScrollCompensation(this._options.hideUnchangedRegionsRevealLineCount.get()),this._nodes.top.classList.toggle("dragging",!1),this._nodes.root.classList.toggle("dragging",!1),this._unchangedRegion.isDragged.set(void 0,void 0),C.dispose(),x.dispose()
      })
    })), this._register(ei(this._nodes.bottom, "mousedown", p=>{
      if(p.button!==0)return;
      this._nodes.bottom.classList.toggle("dragging",!0),this._nodes.root.classList.toggle("dragging",!0),p.preventDefault();
      const g=p.clientY;
      let f=!1;
      const A=this._unchangedRegion.visibleLineCountBottom.get();
      this._unchangedRegion.isDragged.set("bottom",void 0);
      const w=As(this._nodes.bottom),C=ei(w,"mousemove",I=>{
        const R=I.clientY-g;
        f=f||Math.abs(R)>2;
        const N=Math.round(R/m.getOption(68)),M=Math.max(0,Math.min(A-N,this._unchangedRegion.getMaxVisibleLineCountBottom())),O=this._unchangedRegionRange.endLineNumberExclusive>m.getModel().getLineCount()?m.getContentHeight():m.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
        this._unchangedRegion.visibleLineCountBottom.set(M,void 0);
        const $=this._unchangedRegionRange.endLineNumberExclusive>m.getModel().getLineCount()?m.getContentHeight():m.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
        m.setScrollTop(m.getScrollTop()+($-O))
      }),x=ei(w,"mouseup",I=>{
        if(this._unchangedRegion.isDragged.set(void 0,void 0),!f){
          const B=m.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
          this._unchangedRegion.showMoreBelow(this._options.hideUnchangedRegionsRevealLineCount.get(),void 0);
          const R=m.getTopForLineNumber(this._unchangedRegionRange.endLineNumberExclusive);
          m.setScrollTop(m.getScrollTop()+(R-B))
        }
        this._nodes.bottom.classList.toggle("dragging",!1),this._nodes.root.classList.toggle("dragging",!1),C.dispose(),x.dispose()
      })
    })), this._register(Oc(p=>{
      const g=[];
      if(!this._hide){
        const f=i.getHiddenModifiedRange(p).length,A=_(250,null,f),w=Ct("span",{
          title:_(251,null)
        },A);
        w.classList.add("diff-hidden-lines-text"),w.style.flexGrow="1",g.push(w);
        const C=Ct("a",{
          class:"diff-hidden-lines-expand-all",role:"button",title:_(252,null)
        },_(253,null));
        C.addEventListener("click",B=>{
          B.preventDefault(),B.stopPropagation(),this._unchangedRegion.showAll(void 0)
        }),g.push(C);
        const x=this._unchangedRegion.getHiddenModifiedRange(p),I=this._modifiedOutlineSource.getBreadcrumbItems(x,p);
        if(I.length>0){
          g.push(Ct("span",{
            class:"diff-hidden-lines-separator"
          },"\xA0\xA0\u2022\xA0\xA0"));
          for(let B=0;
          B<I.length;
          B++){
            const R=I[B],N=$oe.toIcon(R.kind),M=kl("div.breadcrumb-item",{
              style:{
                display:"flex",alignItems:"center"
              }
            },[tL(N),"\xA0",R.name,...B===I.length-1?[]:[tL(Be.chevronRight)]]).root;
            g.push(M),M.onclick=()=>{
              this._revealModifiedHiddenLine(R.startLineNumber)
            }
          }
        }
      }
      um(this._nodes.others,...g)
    }))
  }
}
}
}), H5o, tSh, cBc, mhA=