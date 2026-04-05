// Module: out-build/vs/editor/browser/widget/diffEditor/components/diffEditorViewZones/diffEditorViewZones.js
// Offset: 2219661 (bundle byte offset)
// Size: 8835 bytes

ri(), Vs(), vr(), qi(), rt(), Uc(), Jr(), Js(), HY(), B3t(), x3n(), zdA(), fbt(), Gde(), Ix(), tl(), Lte(), Kf(), pl(), ts(), S5o=class extends at{
  constructor(e, t, i, r, s, o, a, l, u, d){
    super(), this._targetWindow=e, this._editors=t, this._diffModel=i, this._options=r, this._diffEditorWidget=s, this._canIgnoreViewZoneUpdateEvent=o, this._origViewZonesToIgnore=a, this._modViewZonesToIgnore=l, this._clipboardService=u, this._contextMenuService=d, this._originalTopPadding=Ua(this, 0), this._originalScrollOffset=Ua(this, 0), this._originalScrollOffsetAnimated=E0h(this._targetWindow, this._originalScrollOffset, this._store), this._modifiedTopPadding=Ua(this, 0), this._modifiedScrollOffset=Ua(this, 0), this._modifiedScrollOffsetAnimated=E0h(this._targetWindow, this._modifiedScrollOffset, this._store);
    const m=Ua("invalidateAlignmentsState", 0), p=this._register(new Hu(()=>{
      m.set(m.get()+1,void 0)
    }, 0));
    this._register(this._editors.original.onDidChangeViewZones(I=>{
      this._canIgnoreViewZoneUpdateEvent()||p.schedule()
    })), this._register(this._editors.modified.onDidChangeViewZones(I=>{
      this._canIgnoreViewZoneUpdateEvent()||p.schedule()
    })), this._register(this._editors.original.onDidChangeConfiguration(I=>{
      (I.hasChanged(152)||I.hasChanged(68))&&p.schedule()
    })), this._register(this._editors.modified.onDidChangeConfiguration(I=>{
      (I.hasChanged(152)||I.hasChanged(68))&&p.schedule()
    }));
    const g=this._diffModel.map(I=>I?tp(this, I.model.original.onDidChangeTokens, ()=>I.model.original.tokenization.backgroundTokenizationState===2):void 0).map((I, B)=>I?.read(B)), f=Ro(I=>{
      const B=this._diffModel.read(I),R=B?.diff.read(I);
      if(!B||!R)return null;
      m.read(I);
      const M=this._options.renderSideBySide.read(I);
      return ACh(this._editors.original,this._editors.modified,R.mappings,this._origViewZonesToIgnore,this._modViewZonesToIgnore,M)
    }), A=Ro(I=>{
      const B=this._diffModel.read(I)?.movedTextToCompare.read(I);
      if(!B)return null;
      m.read(I);
      const R=B.changes.map(N=>new UDc(N));
      return ACh(this._editors.original,this._editors.modified,R,this._origViewZonesToIgnore,this._modViewZonesToIgnore,!0)
    });
    function w(){
      const I=document.createElement("div");
      return I.className="diagonal-fill",I
    }
    const C=this._register(new Ut);
    this.viewZones=Ite(this, (I, B)=>{
      C.clear();
      const R=f.read(I)||[],N=[],M=[],O=this._modifiedTopPadding.read(I);
      O>0&&M.push({
        afterLineNumber:0,domNode:document.createElement("div"),heightInPx:O,showInHiddenAreas:!0,suppressMouseDown:!0
      });
      const $=this._originalTopPadding.read(I);
      $>0&&N.push({
        afterLineNumber:0,domNode:document.createElement("div"),heightInPx:$,showInHiddenAreas:!0,suppressMouseDown:!0
      });
      const H=this._options.renderSideBySide.read(I),W=H?void 0:this._editors.modified._getViewModel()?.createLineBreaksComputer();
      if(W){
        const le=this._editors.original.getModel();
        for(const he of R)if(he.diff)for(let be=he.originalRange.startLineNumber;
        be<he.originalRange.endLineNumberExclusive;
        be++){
          if(be>le.getLineCount())return{
            orig:N,mod:M
          };
          W?.addRequest(le.getLineContent(be),null,null)
        }
      }
      const z=W?.finalize()??[];
      let Y=0;
      const j=this._editors.modified.getOption(68),X=this._diffModel.read(I)?.movedTextToCompare.read(I),ee=this._editors.original.getModel()?.mightContainNonBasicASCII()??!1,re=this._editors.original.getModel()?.mightContainRTL()??!1,ne=hKe.fromEditor(this._editors.modified);
      for(const le of R)if(le.diff&&!H&&(!this._options.useTrueInlineDiffRendering.read(I)||!qDc(le.diff))){
        if(!le.originalRange.isEmpty){
          g.read(I);
          const be=document.createElement("div");
          be.classList.add("view-lines","line-delete","monaco-mouse-cursor-text");
          const fe=this._editors.original.getModel();
          if(le.originalRange.endLineNumberExclusive-1>fe.getLineCount())return{
            orig:N,mod:M
          };
          const ke=new dKe(le.originalRange.mapToLineArray(Ne=>fe.tokenization.getLineTokens(Ne)),le.originalRange.mapToLineArray(Ne=>z[Y++]),ee,re),Se=[];
          for(const Ne of le.diff.innerChanges||[])Se.push(new Ode(Ne.originalRange.delta(-(le.diff.original.startLineNumber-1)),D3t.className,0));
          const Fe=gbt(ke,ne,Se,be,!0),De=document.createElement("div");
          if(De.className="inline-deleted-margin-view-zone",bF(De,ne.fontInfo),this._options.renderIndicators.read(I))for(let Ne=0;
          Ne<Fe.heightInLines;
          Ne++){
            const Oe=document.createElement("div");
            Oe.className=`delete-sign ${Qt.asClassName(xDc)}`,Oe.setAttribute("style",`position:absolute;top:${Ne*j}px;width:${ne.lineDecorationsWidth}px;height:${j}px;right:0;`),De.appendChild(Oe)
          }
          let Pe;
          C.add(new bCh(()=>ed(Pe),De,this._editors.modified,le.diff,this._diffEditorWidget,Fe.viewLineCounts,this._editors.original.getModel(),this._contextMenuService,this._clipboardService));
          for(let Ne=0;
          Ne<Fe.viewLineCounts.length;
          Ne++){
            const Oe=Fe.viewLineCounts[Ne];
            Oe>1&&N.push({
              afterLineNumber:le.originalRange.startLineNumber+Ne,domNode:w(),heightInPx:(Oe-1)*j,showInHiddenAreas:!0,suppressMouseDown:!0
            })
          }
          M.push({
            afterLineNumber:le.modifiedRange.startLineNumber-1,domNode:be,heightInPx:Fe.heightInLines*j,minWidthInPx:Fe.minWidthInPx,marginDomNode:De,setZoneId(Ne){
              Pe=Ne
            },showInHiddenAreas:!0,suppressMouseDown:!0
          })
        }
        const he=document.createElement("div");
        he.className="gutter-delete",N.push({
          afterLineNumber:le.originalRange.endLineNumberExclusive-1,domNode:w(),heightInPx:le.modifiedHeightInPx,marginDomNode:he,showInHiddenAreas:!0,suppressMouseDown:!0
        })
      }
      else{
        const he=le.modifiedHeightInPx-le.originalHeightInPx;
        if(he>0){
          if(X?.lineRangeMapping.original.delta(-1).deltaLength(2).contains(le.originalRange.endLineNumberExclusive-1))continue;
          N.push({
            afterLineNumber:le.originalRange.endLineNumberExclusive-1,domNode:w(),heightInPx:he,showInHiddenAreas:!0,suppressMouseDown:!0
          })
        }
        else{
          let be=function(){
            const ke=document.createElement("div");
            return ke.className="arrow-revert-change "+Qt.asClassName(Be.arrowRight),B.add(ei(ke,"mousedown",Se=>Se.stopPropagation())),B.add(ei(ke,"click",Se=>{
              Se.stopPropagation(),s.revert(le.diff)
            })),Ct("div",{
              
            },ke)
          };
          var pe=be;
          if(X?.lineRangeMapping.modified.delta(-1).deltaLength(2).contains(le.modifiedRange.endLineNumberExclusive-1))continue;
          let fe;
          le.diff&&le.diff.modified.isEmpty&&this._options.shouldRenderOldRevertArrows.read(I)&&(fe=be()),M.push({
            afterLineNumber:le.modifiedRange.endLineNumberExclusive-1,domNode:w(),heightInPx:-he,marginDomNode:fe,showInHiddenAreas:!0,suppressMouseDown:!0
          })
        }
      }
      for(const le of A.read(I)??[]){
        if(!X?.lineRangeMapping.original.intersect(le.originalRange)||!X?.lineRangeMapping.modified.intersect(le.modifiedRange))continue;
        const he=le.modifiedHeightInPx-le.originalHeightInPx;
        he>0?N.push({
          afterLineNumber:le.originalRange.endLineNumberExclusive-1,domNode:w(),heightInPx:he,showInHiddenAreas:!0,suppressMouseDown:!0
        }):M.push({
          afterLineNumber:le.modifiedRange.endLineNumberExclusive-1,domNode:w(),heightInPx:-he,showInHiddenAreas:!0,suppressMouseDown:!0
        })
      }
      return{
        orig:N,mod:M
      }
    });
    let x=!1;
    this._register(this._editors.original.onDidScrollChange(I=>{
      I.scrollLeftChanged&&!x&&(x=!0,this._editors.modified.setScrollLeft(I.scrollLeft),x=!1)
    })), this._register(this._editors.modified.onDidScrollChange(I=>{
      I.scrollLeftChanged&&!x&&(x=!0,this._editors.original.setScrollLeft(I.scrollLeft),x=!1)
    })), this._originalScrollTop=tp(this._editors.original.onDidScrollChange, ()=>this._editors.original.getScrollTop()), this._modifiedScrollTop=tp(this._editors.modified.onDidScrollChange, ()=>this._editors.modified.getScrollTop()), this._register(Oc(I=>{
      const B=this._originalScrollTop.read(I)-(this._originalScrollOffsetAnimated.get()-this._modifiedScrollOffsetAnimated.read(I))-(this._originalTopPadding.get()-this._modifiedTopPadding.read(I));
      B!==this._editors.modified.getScrollTop()&&this._editors.modified.setScrollTop(B,1)
    })), this._register(Oc(I=>{
      const B=this._modifiedScrollTop.read(I)-(this._modifiedScrollOffsetAnimated.get()-this._originalScrollOffsetAnimated.read(I))-(this._modifiedTopPadding.get()-this._originalTopPadding.read(I));
      B!==this._editors.original.getScrollTop()&&this._editors.original.setScrollTop(B,1)
    })), this._register(Oc(I=>{
      const B=this._diffModel.read(I)?.movedTextToCompare.read(I);
      let R=0;
      if(B){
        const N=this._editors.original.getTopForLineNumber(B.lineRangeMapping.original.startLineNumber,!0)-this._originalTopPadding.get();
        R=this._editors.modified.getTopForLineNumber(B.lineRangeMapping.modified.startLineNumber,!0)-this._modifiedTopPadding.get()-N
      }
      R>0?(this._modifiedTopPadding.set(0,void 0),this._originalTopPadding.set(R,void 0)):R<0?(this._modifiedTopPadding.set(-R,void 0),this._originalTopPadding.set(0,void 0)):setTimeout(()=>{
        this._modifiedTopPadding.set(0,void 0),this._originalTopPadding.set(0,void 0)
      },400),this._editors.modified.hasTextFocus()?this._originalScrollOffset.set(this._modifiedScrollOffset.get()-R,void 0,!0):this._modifiedScrollOffset.set(this._originalScrollOffset.get()+R,void 0,!0)
    }))
  }
}, S5o=__decorate([__param(8, jm), __param(9, kc)], S5o)
}
}), T3n, wCh, HDc, _Ch=