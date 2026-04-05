// Module: out-build/vs/base/browser/ui/highlightedlabel/highlightedLabel.js
// Offset: 24971332 (bundle byte offset)
// Size: 1598 bytes

ri(), O6(), mb(), bS(), rt(), np(), qx=class OWb extends at{
  constructor(e, t){
    super(), this.options=t, this.text="", this.title="", this.highlights=[], this.didEverRender=!1, this.supportIcons=t?.supportIcons??!1, this.domNode=Rt(e, Ct("span.monaco-highlighted-label"))
  }
  get element(){
    return this.domNode
  }
  set(e, t=[], i="", r){
    e||(e=""), r&&(e=OWb.escapeNewLines(e, t)), !(this.didEverRender&&this.text===e&&this.title===i&&fv(this.highlights, t))&&(this.text=e, this.title=i, this.highlights=t, this.render())
  }
  render(){
    const e=[];
    let t=0;
    for(const i of this.highlights){
      if(i.end===i.start)continue;
      if(t<i.start){
        const o=this.text.substring(t,i.start);
        this.supportIcons?e.push(...a_(o)):e.push(o),t=i.start
      }
      const r=this.text.substring(t,i.end),s=Ct("span.highlight",void 0,...this.supportIcons?a_(r):[r]);
      i.extraClasses&&s.classList.add(...i.extraClasses),e.push(s),t=i.end
    }
    if(t<this.text.length){
      const i=this.text.substring(t);
      this.supportIcons?e.push(...a_(i)):e.push(i)
    }
    if(um(this.domNode, ...e), this.options?.hoverDelegate?.showNativeHover)this.domNode.title=this.title;
    else if(!this.customHover&&this.title!==""){
      const i=this.options?.hoverDelegate??Sm("mouse");
      this.customHover=this._register(q4().setupManagedHover(i,this.domNode,this.title))
    }
    else this.customHover&&this.customHover.update(this.title);
    this.didEverRender=!0
  }
  static escapeNewLines(e, t){
    let i=0, r=0;
    return e.replace(/\r\n|\r|\n/g, (s, o)=>{
      r=s===`\r
`?-1:0,o+=i;
      for(const a of t)a.end<=o||(a.start>=o&&(a.start+=r),a.end>=o&&(a.end+=r));
      return i+=r,"\u23CE"
    })
  }
}
}
}), $0A=