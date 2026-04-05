// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookOverviewRuler.js
// Offset: 33399749 (bundle byte offset)
// Size: 2410 bytes

ri(), sI(), Nte(), Io(), Sb(), ZTa=class extends NH{
  constructor(e, t, i){
    super(i), this.notebookEditor=e, this._lanes=3, this._domNode=mw(document.createElement("canvas")), this._domNode.setPosition("relative"), this._domNode.setLayerHinting(!0), this._domNode.setContain("strict"), t.appendChild(this._domNode.domNode), this._register(e.onDidChangeDecorations(()=>{
      this.layout()
    })), this._register(M6.getInstance(As(this._domNode.domNode)).onDidChange(()=>{
      this.layout()
    }))
  }
  layout(){
    const t=this.notebookEditor.getLayoutInfo(), i=t.scrollHeight, r=t.height, s=M6.getInstance(As(this._domNode.domNode)).value;
    this._domNode.setWidth(10), this._domNode.setHeight(r), this._domNode.domNode.width=10*s, this._domNode.domNode.height=r*s;
    const o=this._domNode.domNode.getContext("2d");
    o.clearRect(0, 0, 10*s, r*s), this._render(o, 10*s, r*s, i*s, s)
  }
  _render(e, t, i, r, s){
    const o=this.notebookEditor.getViewModel(), a=this.notebookEditor.getLayoutInfo().fontInfo, l=t/this._lanes;
    let u=0;
    if(o){
      for(let m=0;
      m<o.viewCells.length;
      m++){
        const p=o.viewCells[m],g=p.textBuffer,f=p.getCellDecorations(),A=p.layoutInfo.totalHeight/r*s*i;
        f.filter(w=>w.overviewRuler).forEach(w=>{
          const C=w.overviewRuler,x=this.getColor(C.color)??"#000000",I=Math.min(a.lineHeight,p.layoutInfo.editorHeight/r/g.getLineCount()*s*i),B=C.modelRanges.map(M=>M.startLineNumber).reduce((M,O)=>((M.length===0||M[M.length-1]!==O)&&M.push(O),M),[]);
          let R=0;
          switch(C.position){
            case HU.Left:R=0;
            break;
            case HU.Center:R=l;
            break;
            case HU.Right:R=l*2;
            break;
            default:break
          }
          const N=C.position===HU.Full?l*3:l;
          for(let M=0;
          M<B.length;
          M++){
            e.fillStyle=x;
            const $=(B[M]-1)*I;
            e.fillRect(R,u+$,N,I)
          }
          if(C.includeOutput){
            e.fillStyle=x;
            const M=p.layoutInfo.editorHeight/r*s*i,O=a.lineHeight/r*s*i;
            e.fillRect(l,u+M,l,O)
          }
        }),u+=A
      }
      const d=o.getOverviewRulerDecorations();
      for(let m=0;
      m<d.length;
      m++){
        const p=d[m];
        if(!p.options.overviewRuler)continue;
        const g=this.notebookEditor.getViewZoneLayoutInfo(p.viewZoneId);
        if(!g)continue;
        const f=this.getColor(p.options.overviewRuler.color)??"#000000";
        let A=0;
        switch(p.options.overviewRuler.position){
          case HU.Left:A=0;
          break;
          case HU.Center:A=l;
          break;
          case HU.Right:A=l*2;
          break;
          default:break
        }
        const w=p.options.overviewRuler.position===HU.Full?l*3:l;
        e.fillStyle=f;
        const C=g.height/r*s*i,x=g.top/r*s*i;
        e.fillRect(A,x,w,C)
      }
    }
  }
}, ZTa=__decorate([__param(2, bo)], ZTa)
}
}), XTa, qdy=