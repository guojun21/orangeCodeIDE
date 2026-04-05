// Module: out-build/vs/editor/browser/widget/diffEditor/features/movedBlocksLinesFeature.js
// Offset: 2228496 (bundle byte offset)
// Size: 7340 bytes

ri(), Ov(), nl(), Vs(), GD(), qi(), rt(), Uc(), Jr(), Gde(), $I(), Ht(), T3n=class $ad extends at{
  static{
    this.movedCodeBlockPadding=4
  }
  constructor(e, t, i, r, s){
    super(), this._rootElement=e, this._diffModel=t, this._originalEditorLayoutInfo=i, this._modifiedEditorLayoutInfo=r, this._editors=s, this._originalScrollTop=tp(this, this._editors.original.onDidScrollChange, ()=>this._editors.original.getScrollTop()), this._modifiedScrollTop=tp(this, this._editors.modified.onDidScrollChange, ()=>this._editors.modified.getScrollTop()), this._viewZonesChanged=m3("onDidChangeViewZones", this._editors.modified.onDidChangeViewZones), this.width=Ua(this, 0), this._modifiedViewZonesChangedSignal=m3("modified.onDidChangeViewZones", this._editors.modified.onDidChangeViewZones), this._originalViewZonesChangedSignal=m3("original.onDidChangeViewZones", this._editors.original.onDidChangeViewZones), this._state=Ite(this, (d, m)=>{
      this._element.replaceChildren();
      const p=this._diffModel.read(d),g=p?.diff.read(d)?.movedTexts;
      if(!g||g.length===0){
        this.width.set(0,void 0);
        return
      }
      this._viewZonesChanged.read(d);
      const f=this._originalEditorLayoutInfo.read(d),A=this._modifiedEditorLayoutInfo.read(d);
      if(!f||!A){
        this.width.set(0,void 0);
        return
      }
      this._modifiedViewZonesChangedSignal.read(d),this._originalViewZonesChangedSignal.read(d);
      const w=g.map(M=>{
        function O(re,ne){
          const pe=ne.getTopForLineNumber(re.startLineNumber,!0),le=ne.getTopForLineNumber(re.endLineNumberExclusive,!0);
          return(pe+le)/2
        }
        const $=O(M.lineRangeMapping.original,this._editors.original),H=this._originalScrollTop.read(d),W=O(M.lineRangeMapping.modified,this._editors.modified),z=this._modifiedScrollTop.read(d),Y=$-H,j=W-z,X=Math.min($,W),ee=Math.max($,W);
        return{
          range:new dm(X,ee),from:Y,to:j,fromWithoutScroll:$,toWithoutScroll:W,move:M
        }
      });
      w.sort(xnh(JP(M=>M.fromWithoutScroll>M.toWithoutScroll,Inh),JP(M=>M.fromWithoutScroll>M.toWithoutScroll?M.fromWithoutScroll:-M.toWithoutScroll,p9)));
      const C=wCh.compute(w.map(M=>M.range)),x=10,I=f.verticalScrollbarWidth,B=(C.getTrackCount()-1)*10+x*2,R=I+B+(A.contentLeft-$ad.movedCodeBlockPadding);
      let N=0;
      for(const M of w){
        const O=C.getTrack(N),$=I+x+O*10,H=15,W=15,z=R,Y=A.glyphMarginWidth+A.lineNumbersWidth,j=18,X=document.createElementNS("http://www.w3.org/2000/svg","rect");
        X.classList.add("arrow-rectangle"),X.setAttribute("x",`${z-Y}`),X.setAttribute("y",`${M.to-j/2}`),X.setAttribute("width",`${Y}`),X.setAttribute("height",`${j}`),this._element.appendChild(X);
        const ee=document.createElementNS("http://www.w3.org/2000/svg","g"),re=document.createElementNS("http://www.w3.org/2000/svg","path");
        re.setAttribute("d",`M 0 ${M.from} L ${$} ${M.from} L ${$} ${M.to} L ${z-W} ${M.to}`),re.setAttribute("fill","none"),ee.appendChild(re);
        const ne=document.createElementNS("http://www.w3.org/2000/svg","polygon");
        ne.classList.add("arrow"),m.add(Oc(pe=>{
          re.classList.toggle("currentMove",M.move===p.activeMovedText.read(pe)),ne.classList.toggle("currentMove",M.move===p.activeMovedText.read(pe))
        })),ne.setAttribute("points",`${z-W},${M.to-H/2} ${z},${M.to} ${z-W},${M.to+H/2}`),ee.appendChild(ne),this._element.appendChild(ee),N++
      }
      this.width.set(B,void 0)
    }), this._element=document.createElementNS("http://www.w3.org/2000/svg", "svg"), this._element.setAttribute("class", "moved-blocks-lines"), this._rootElement.appendChild(this._element), this._register($i(()=>this._element.remove())), this._register(Oc(d=>{
      const m=this._originalEditorLayoutInfo.read(d),p=this._modifiedEditorLayoutInfo.read(d);
      !m||!p||(this._element.style.left=`${m.width-m.verticalScrollbarWidth}px`,this._element.style.height=`${m.height}px`,this._element.style.width=`${m.verticalScrollbarWidth+m.contentLeft-$ad.movedCodeBlockPadding+this.width.read(d)}px`)
    })), this._register($gt(this._state));
    const o=Ro(d=>{
      const p=this._diffModel.read(d)?.diff.read(d);
      return p?p.movedTexts.map(g=>({
        move:g,original:new dbt(F0(g.lineRangeMapping.original.startLineNumber-1),18),modified:new dbt(F0(g.lineRangeMapping.modified.startLineNumber-1),18)
      })):[]
    });
    this._register(n5o(this._editors.original, o.map(d=>d.map(m=>m.original)))), this._register(n5o(this._editors.modified, o.map(d=>d.map(m=>m.modified)))), this._register(M0((d, m)=>{
      const p=o.read(d);
      for(const g of p)m.add(new HDc(this._editors.original,g.original,g.move,"original",this._diffModel.get())),m.add(new HDc(this._editors.modified,g.modified,g.move,"modified",this._diffModel.get()))
    }));
    const a=m3("original.onDidFocusEditorWidget", d=>this._editors.original.onDidFocusEditorWidget(()=>setTimeout(()=>d(void 0), 0))), l=m3("modified.onDidFocusEditorWidget", d=>this._editors.modified.onDidFocusEditorWidget(()=>setTimeout(()=>d(void 0), 0)));
    let u="modified";
    this._register(p4t({
      createEmptyChangeSummary:()=>{
        
      },handleChange:(d,m)=>(d.didChange(a)&&(u="original"),d.didChange(l)&&(u="modified"),!0)
    }, d=>{
      a.read(d),l.read(d);
      const m=this._diffModel.read(d);
      if(!m)return;
      const p=m.diff.read(d);
      let g;
      if(p&&u==="original"){
        const f=this._editors.originalCursor.read(d);
        f&&(g=p.movedTexts.find(A=>A.lineRangeMapping.original.contains(f.lineNumber)))
      }
      if(p&&u==="modified"){
        const f=this._editors.modifiedCursor.read(d);
        f&&(g=p.movedTexts.find(A=>A.lineRangeMapping.modified.contains(f.lineNumber)))
      }
      g!==m.movedTextToCompare.get()&&m.movedTextToCompare.set(void 0,void 0),m.setActiveMovedText(g)
    }))
  }
}, wCh=class RGb{
  static compute(e){
    const t=[], i=[];
    for(const r of e){
      let s=t.findIndex(o=>!o.intersectsStrict(r));
      s===-1&&(t.length>=6?s=zeA(t,JP(a=>a.intersectWithRangeLength(r),p9)):(s=t.length,t.push(new Clh))),t[s].addRange(r),i.push(s)
    }
    return new RGb(t.length, i)
  }
  constructor(e, t){
    this._trackCount=e, this.trackPerLineIdx=t
  }
  getTrack(e){
    return this.trackPerLineIdx[e]
  }
  getTrackCount(){
    return this._trackCount
  }
}, HDc=class extends i5o{
  constructor(n, e, t, i, r){
    const s=kl("div.diff-hidden-lines-widget");
    super(n, e, s.root), this._editor=n, this._move=t, this._kind=i, this._diffModel=r, this._nodes=kl("div.diff-moved-code-block", {
      style:{
        marginRight:"4px"
      }
    }, [kl("div.text-content@textContent"), kl("div.action-bar@actionBar")]), s.root.appendChild(this._nodes.root);
    const o=tp(this._editor.onDidLayoutChange, ()=>this._editor.getLayoutInfo());
    this._register(aKe(this._nodes.root, {
      paddingRight:o.map(m=>m.verticalScrollbarWidth)
    }));
    let a;
    t.changes.length>0?a=this._kind==="original"?_(254, null, this._move.lineRangeMapping.modified.startLineNumber, this._move.lineRangeMapping.modified.endLineNumberExclusive-1):_(255, null, this._move.lineRangeMapping.original.startLineNumber, this._move.lineRangeMapping.original.endLineNumberExclusive-1):a=this._kind==="original"?_(256, null, this._move.lineRangeMapping.modified.startLineNumber, this._move.lineRangeMapping.modified.endLineNumberExclusive-1):_(257, null, this._move.lineRangeMapping.original.startLineNumber, this._move.lineRangeMapping.original.endLineNumberExclusive-1);
    const l=this._register(new Gf(this._nodes.actionBar, {
      highlightToggledItems:!0
    })), u=new Hs("", a, "", !1);
    l.push(u, {
      icon:!1,label:!0
    });
    const d=new Hs("", "Compare", Qt.asClassName(Be.compareChanges), !0, ()=>{
      this._editor.focus(),this._diffModel.movedTextToCompare.set(this._diffModel.movedTextToCompare.get()===t?void 0:this._move,void 0)
    });
    this._register(Oc(m=>{
      const p=this._diffModel.movedTextToCompare.read(m)===t;
      d.checked=p
    })), l.push(d, {
      icon:!1,label:!0
    })
  }
}
}
}), CCh, VdA=