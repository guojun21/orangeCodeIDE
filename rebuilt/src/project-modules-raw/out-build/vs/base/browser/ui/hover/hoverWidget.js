// Module: out-build/vs/base/browser/ui/hover/hoverWidget.js
// Offset: 4225865 (bundle byte offset)
// Size: 2195 bytes

ri(), Tb(), zI(), rt(), nAA(), Ht(), tUn=Ct, (function(n){
  n[n.LEFT=0]="LEFT", n[n.RIGHT=1]="RIGHT", n[n.BELOW=2]="BELOW", n[n.ABOVE=3]="ABOVE"
})(KJh||(KJh={
  
})), A$o=class extends at{
  constructor(n){
    super(), this.containerDomNode=document.createElement("div"), this.containerDomNode.className="monaco-hover", this.containerDomNode.classList.toggle("fade-in", !!n), this.containerDomNode.tabIndex=0, this.containerDomNode.setAttribute("role", "tooltip"), this.contentsDomNode=document.createElement("div"), this.contentsDomNode.className="monaco-hover-content", this.scrollbar=this._register(new vF(this.contentsDomNode, {
      consumeMouseWheelIfScrollbarIsNeeded:!0
    })), this.containerDomNode.appendChild(this.scrollbar.getDomNode())
  }
  onContentsChanged(){
    this.scrollbar.scanDomNode()
  }
}, y$o=class rWb extends at{
  static render(e, t, i){
    return new rWb(e, t, i)
  }
  constructor(e, t, i){
    super(), this.actionLabel=t.label, this.actionKeybindingLabel=i, this.actionContainer=Rt(e, tUn("div.action-container")), this.actionContainer.setAttribute("tabindex", "0"), this.action=Rt(this.actionContainer, tUn("a.action")), this.action.setAttribute("role", "button"), t.iconClass&&Rt(this.action, tUn(`span.icon.${t.iconClass}`)), this.actionRenderedLabel=i?`${t.label} (${i})`:t.label;
    const r=Rt(this.action, tUn("span"));
    r.textContent=this.actionRenderedLabel, this._store.add(new R5c(this.actionContainer, t.run)), this._store.add(new P5c(this.actionContainer, t.run, [3, 10])), this.setEnabled(!0)
  }
  setEnabled(e){
    e?(this.actionContainer.classList.remove("disabled"), this.actionContainer.removeAttribute("aria-disabled")):(this.actionContainer.classList.add("disabled"), this.actionContainer.setAttribute("aria-disabled", "true"))
  }
}, R5c=class extends at{
  constructor(n, e){
    super(), this._register(ei(n, ir.CLICK, t=>{
      t.stopPropagation(),t.preventDefault(),e(n)
    }))
  }
}, P5c=class extends at{
  constructor(n, e, t){
    super(), this._register(ei(n, ir.KEY_DOWN, i=>{
      const r=new vh(i);
      t.some(s=>r.equals(s))&&(i.stopPropagation(),i.preventDefault(),e(n))
    }))
  }
}
}
});
function YJh(n, e, t, i, r, s){
  const o=t+r/2, a=i+s/2, l=Math.max(Math.abs(n-o)-r/2, 0), u=Math.max(Math.abs(e-a)-s/2, 0);
  return Math.sqrt(l*l+u*u)
}
var Tve, L5c, w$o, iAA=