// Module: out-build/vs/workbench/contrib/notebook/browser/viewParts/notebookCellOverlays.js
// Offset: 33038774 (bundle byte offset)
// Size: 2814 bytes

sI(), rt(), Ht(), ip(), dr(), Av(), ss(), ph(), Sb(), Q9f=class extends at{
  constructor(n){
    super(), this.listView=n, this._lastOverlayId=0, this._overlays=Object.create(null), this.domNode=mw(document.createElement("div")), this.domNode.setClassName("cell-overlays"), this.domNode.setPosition("absolute"), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this.domNode.setWidth("100%"), this.listView.containerDomNode.appendChild(this.domNode.domNode)
  }
  changeCellOverlays(n){
    let e=!1;
    return n({
      addOverlay:i=>(e=!0,this._addOverlay(i)),removeOverlay:i=>{
        e=!0,this._removeOverlay(i)
      },layoutOverlay:i=>{
        e=!0,this._layoutOverlay(i)
      }
    }), e
  }
  onCellsChanged(n){
    this.layout()
  }
  onHiddenRangesChange(){
    this.layout()
  }
  layout(){
    for(const n in this._overlays)this._layoutOverlay(n)
  }
  _addOverlay(n){
    const e=`${++this._lastOverlayId}`, t={
      overlayId:e,overlay:n,domNode:mw(n.domNode)
    };
    return this._overlays[e]=t, t.domNode.setClassName("cell-overlay"), t.domNode.setPosition("absolute"), this.domNode.appendChild(t.domNode), e
  }
  _removeOverlay(n){
    const e=this._overlays[n];
    if(e){
      try{
        this.domNode.removeChild(e.domNode)
      }
      catch{
        
      }
      delete this._overlays[n]
    }
  }
  _layoutOverlay(n){
    const e=this._overlays[n];
    if(!e)return;
    if(this._isInHiddenRanges(e)){
      e.domNode.setDisplay("none");
      return
    }
    e.domNode.setDisplay("block");
    const i=this.listView.indexOf(e.overlay.cell);
    if(i===-1)return;
    const r=this.listView.elementTop(i);
    e.domNode.setTop(r)
  }
  _isInHiddenRanges(n){
    return this.listView.indexOf(n.overlay.cell)===-1
  }
}, j9f=class Dto extends rn{
  static{
    this.cellOverlayIds=[]
  }
  constructor(){
    super({
      id:"notebook.developer.addCellOverlays",title:dt(9502,"Toggle Notebook Cell Overlays"),category:Br.Developer,precondition:Gy,f1:!0
    })
  }
  async run(e){
    const t=e.get(yi), i=sA(t.activeEditorPane);
    i&&(Dto.cellOverlayIds.length>0?i.changeCellOverlays(r=>{
      Dto.cellOverlayIds.forEach(s=>{
        r.removeOverlay(s)
      }),Dto.cellOverlayIds=[]
    }):i.changeCellOverlays(r=>{
      const s=i.getCellsInRange();
      if(s.length===0)return;
      const o=[];
      for(let a=0;
      a<s.length;
      a++){
        if(s[a].cellKind!==zd.Markup)continue;
        const l=document.createElement("div");
        l.innerText=`Cell Overlay ${a}`,l.style.top="10px",l.style.right="10px",l.style.backgroundColor="rgba(0, 255, 0, 0.5)";
        const u=r.addOverlay({
          cell:s[a],domNode:l
        });
        o.push(u)
      }
      Dto.cellOverlayIds=o
    }))
  }
}, Dt(j9f)
}
});
function Swu(n, e){
  if(!e.length)return n;
  let t=0, i=0;
  const r=[];
  for(;
  t<n.length&&i<e.length;
  )t<e[i].start&&r.push(...n.slice(t, e[i].start)), t=e[i].end+1, i++;
  return t<n.length&&r.push(...n.slice(t)), r
}
function Ruy(n){
  const e=0-(parseInt(n.style.top, 10)||0);
  return e>=0&&e<=gbn*2
}
function ZSi(n){
  return new Promise((e, t)=>{
    In.once(n.onDidChangeEditorAttachState)(()=>n.editorAttached?e():t())
  })
}
var z9f, gbn, oTa, V9f, K9f=