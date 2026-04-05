// Module: out-build/vs/base/browser/ui/keybindingLabel/keybindingLabel.js
// Offset: 2443018 (bundle byte offset)
// Size: 2703 bytes

ri(), O6(), mb(), pKe(), rt(), np(), LhA(), Ht(), Y3n=Ct, RBc={
  keybindingLabelBackground:void 0, keybindingLabelForeground:void 0, keybindingLabelBorder:void 0, keybindingLabelBottomBorder:void 0, keybindingLabelShadow:void 0
}, Xoe=class zGb extends at{
  constructor(e, t, i){
    super(), this.os=t, this.keyElements=new Set, this.options=i||Object.create(null);
    const r=this.options.keybindingLabelForeground;
    this.domNode=Rt(e, Y3n(".monaco-keybinding")), r&&(this.domNode.style.color=r), this.hover=this._register(q4().setupManagedHover(Sm("mouse"), this.domNode, "")), this.didEverRender=!1, e.appendChild(this.domNode)
  }
  get element(){
    return this.domNode
  }
  set(e, t){
    this.didEverRender&&this.keybinding===e&&zGb.areSame(this.matches, t)||(this.keybinding=e, this.matches=t, this.render())
  }
  render(){
    if(this.clear(), this.keybinding){
      const e=this.keybinding.getChords();
      e[0]&&this.renderChord(this.domNode,e[0],this.matches?this.matches.firstPart:null);
      for(let i=1;
      i<e.length;
      i++)Rt(this.domNode,Y3n("span.monaco-keybinding-key-chord-separator",void 0," ")),this.renderChord(this.domNode,e[i],this.matches?this.matches.chordPart:null);
      const t=this.options.disableTitle??!1?void 0:this.keybinding.getAriaLabel()||void 0;
      this.hover.update(t),this.domNode.setAttribute("aria-label",t||"")
    }
    else this.options&&this.options.renderUnboundKeybindings&&this.renderUnbound(this.domNode);
    this.didEverRender=!0
  }
  clear(){
    th(this.domNode), this.keyElements.clear()
  }
  renderChord(e, t, i){
    const r=mKe.modifierLabels[this.os];
    t.ctrlKey&&this.renderKey(e, r.ctrlKey, !!i?.ctrlKey, r.separator), t.shiftKey&&this.renderKey(e, r.shiftKey, !!i?.shiftKey, r.separator), t.altKey&&this.renderKey(e, r.altKey, !!i?.altKey, r.separator), t.metaKey&&this.renderKey(e, r.metaKey, !!i?.metaKey, r.separator);
    const s=t.keyLabel;
    s&&this.renderKey(e, s, !!i?.keyCode, "")
  }
  renderKey(e, t, i, r){
    Rt(e, this.createKeyElement(t, i?".highlight":"")), r&&Rt(e, Y3n("span.monaco-keybinding-key-separator", void 0, r))
  }
  renderUnbound(e){
    Rt(e, this.createKeyElement(_(25, null)))
  }
  createKeyElement(e, t=""){
    const i=Y3n("span.monaco-keybinding-key"+t, void 0, e);
    return this.keyElements.add(i), this.options.keybindingLabelBackground&&(i.style.backgroundColor=this.options.keybindingLabelBackground), this.options.keybindingLabelBorder&&(i.style.borderColor=this.options.keybindingLabelBorder), this.options.keybindingLabelBottomBorder&&(i.style.borderBottomColor=this.options.keybindingLabelBottomBorder), this.options.keybindingLabelShadow&&(i.style.boxShadow=`inset 0 -1px 0 ${this.options.keybindingLabelShadow}`), i
  }
  static areSame(e, t){
    return e===t||!e&&!t?!0:!!e&&!!t&&fv(e.firstPart, t.firstPart)&&fv(e.chordPart, t.chordPart)
  }
}
}
}), vS, Px=