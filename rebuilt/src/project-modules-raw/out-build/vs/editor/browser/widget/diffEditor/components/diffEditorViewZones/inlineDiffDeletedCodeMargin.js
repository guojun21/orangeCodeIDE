// Module: out-build/vs/editor/browser/widget/diffEditor/components/diffEditorViewZones/inlineDiffDeletedCodeMargin.js
// Offset: 2210570 (bundle byte offset)
// Size: 4578 bytes

ri(), nl(), qi(), rt(), _r(), Jr(), Ht(), bCh=class extends at{
  get visibility(){
    return this._visibility
  }
  set visibility(n){
    this._visibility!==n&&(this._visibility=n, this._diffActions.style.visibility=n?"visible":"hidden")
  }
  constructor(n, e, t, i, r, s, o, a, l){
    super(), this._getViewZoneId=n, this._marginDomNode=e, this._modifiedEditor=t, this._diff=i, this._editor=r, this._viewLineCounts=s, this._originalTextModel=o, this._contextMenuService=a, this._clipboardService=l, this._visibility=!1, this._marginDomNode.style.zIndex="10", this._diffActions=document.createElement("div"), this._editor.getModifiedEditor()?.getIsMultiDiffEditor?.()||(this._diffActions.className=Qt.asClassName(Be.lightBulb)+" lightbulb-glyph"), this._diffActions.style.position="absolute";
    const u=this._modifiedEditor.getOption(68);
    this._diffActions.style.right="0px", this._diffActions.style.visibility="hidden", this._diffActions.style.height=`${u}px`, this._diffActions.style.lineHeight=`${u}px`, this._marginDomNode.appendChild(this._diffActions);
    let d=0;
    const m=t.getOption(132)&&!ZL, p=(g, f)=>{
      this._contextMenuService.showContextMenu({
        domForShadowRoot:m?t.getDomNode()??void 0:void 0,getAnchor:()=>({
          x:g,y:f
        }),getActions:()=>{
          const A=[],w=i.modified.isEmpty;
          return A.push(new Hs("diff.clipboard.copyDeletedContent",w?i.original.length>1?_(232,null):_(233,null):i.original.length>1?_(234,null):_(235,null),void 0,!0,async()=>{
            const x=this._originalTextModel.getValueInRange(i.original.toExclusiveRange());
            await this._clipboardService.writeText(x)
          })),i.original.length>1&&A.push(new Hs("diff.clipboard.copyDeletedLineContent",_(w?236:237,null,i.original.startLineNumber+d),void 0,!0,async()=>{
            let x=this._originalTextModel.getLineContent(i.original.startLineNumber+d);
            x===""&&(x=this._originalTextModel.getEndOfLineSequence()===0?`
`:`\r
`),await this._clipboardService.writeText(x)
          })),t.getOption(96)||A.push(new Hs("diff.inline.revertChange",_(238,null),void 0,!0,async()=>{
            this._editor.revert(this._diff)
          })),A
        },autoSelectFirstItem:!0
      })
    };
    this._register(_f(this._diffActions, "mousedown", g=>{
      if(!g.leftButton)return;
      const{
        top:f,height:A
      }
      =qS(this._diffActions),w=Math.floor(u/3);
      g.preventDefault(),p(g.posx,f+A+w)
    })), this._register(t.onMouseMove(g=>{
      (g.target.type===8||g.target.type===5)&&g.target.detail.viewZoneId===this._getViewZoneId()?(d=this._updateLightBulbPosition(this._marginDomNode,g.event.browserEvent.y,u),this.visibility=!0):this.visibility=!1
    })), this._register(t.onMouseDown(g=>{
      g.event.rightButton&&(g.target.type===8||g.target.type===5)&&g.target.detail.viewZoneId===this._getViewZoneId()&&(g.event.preventDefault(),d=this._updateLightBulbPosition(this._marginDomNode,g.event.browserEvent.y,u),p(g.event.posx,g.event.posy+u))
    }))
  }
  _updateLightBulbPosition(n, e, t){
    const{
      top:i
    }
    =qS(n), r=e-i, s=Math.floor(r/t), o=s*t;
    if(this._diffActions.style.top=`${o}px`, this._viewLineCounts){
      let a=0;
      for(let l=0;
      l<this._viewLineCounts.length;
      l++)if(a+=this._viewLineCounts[l],s<a)return l
    }
    return s
  }
}
}
});
function gbt(n, e, t, i, r=!1){
  bF(i, e.fontInfo);
  const s=t.length>0, o=new Gbe(1e4);
  let a=0, l=0;
  const u=[];
  for(let g=0;
  g<n.lineTokens.length;
  g++){
    const f=g+1, A=n.lineTokens[g], w=n.lineBreakData[g], C=lz.filter(t, f, 1, Number.MAX_SAFE_INTEGER);
    if(w){
      let x=0;
      for(const I of w.breakOffsets){
        const B=A.sliceAndInflate(x,I,0);
        a=Math.max(a,vCh(l,B,lz.extractWrapped(C,x,I),s,n.mightContainNonBasicASCII,n.mightContainRTL,e,o,r)),l++,x=I
      }
      u.push(w.breakOffsets.length)
    }
    else u.push(1), a=Math.max(a, vCh(l, A, C, s, n.mightContainNonBasicASCII, n.mightContainRTL, e, o, r)), l++
  }
  a+=e.scrollBeyondLastColumn;
  const d=o.build(), m=$Dc?$Dc.createHTML(d):d;
  i.innerHTML=m;
  const p=a*e.typicalHalfwidthCharacterWidth;
  return{
    heightInLines:l, minWidthInPx:p, viewLineCounts:u
  }
}
function vCh(n, e, t, i, r, s, o, a, l){
  a.appendString('<div class="view-line'), !l&&!i&&a.appendString(" char-delete"), a.appendString('" style="top:'), a.appendString(String(n*o.lineHeight)), o.setWidth?a.appendString('px;width:1000000px;">'):a.appendString('px;">');
  const u=e.getLineContent(), d=zOt.isBasicASCII(u, r), m=zOt.containsRTL(u, d, s), p=Wft(new JVe(o.fontInfo.isMonospace&&!o.disableMonospaceOptimizations, o.fontInfo.canUseHalfwidthRightwardsArrow, u, !1, d, m, 0, e, t, o.tabSize, 0, o.fontInfo.spaceWidth, o.fontInfo.middotWidth, o.fontInfo.wsmiddotWidth, o.stopRenderingLineAfter, o.renderWhitespace, o.renderControlCharacters, o.fontLigatures!==Y5e.OFF, null), a);
  return a.appendString("</div>"), p.characterMapping.getHorizontalOffset(p.characterMapping.length)
}
var $Dc, dKe, hKe, fbt=