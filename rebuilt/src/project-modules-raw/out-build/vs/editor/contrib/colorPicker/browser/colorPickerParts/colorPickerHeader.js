// Module: out-build/vs/editor/contrib/colorPicker/browser/colorPickerParts/colorPickerHeader.js
// Offset: 24734950 (bundle byte offset)
// Size: 2274 bytes

_et(), ri(), xf(), rt(), Ht(), Nl(), e0A(), gpi=Ct, Vmg=class extends at{
  constructor(n, e, t, i){
    super(), this.model=e, this.type=i, this._closeButton=null, this._domNode=gpi(".colorpicker-header"), Rt(n, this._domNode), this._pickedColorNode=Rt(this._domNode, gpi(".picked-color")), Rt(this._pickedColorNode, gpi("span.codicon.codicon-color-mode")), this._pickedColorPresentation=Rt(this._pickedColorNode, document.createElement("span")), this._pickedColorPresentation.classList.add("picked-color-presentation");
    const r=_(1024, null);
    this._pickedColorNode.setAttribute("title", r), this._originalColorNode=Rt(this._domNode, gpi(".original-color")), this._originalColorNode.style.backgroundColor=Xr.Format.CSS.format(this.model.originalColor)||"", this.backgroundColor=t.getColorTheme().getColor(cVe)||Xr.white, this._register(t.onDidColorThemeChange(s=>{
      this.backgroundColor=s.getColor(cVe)||Xr.white
    })), this._register(ei(this._pickedColorNode, ir.CLICK, ()=>this.model.selectNextColorPresentation())), this._register(ei(this._originalColorNode, ir.CLICK, ()=>{
      this.model.color=this.model.originalColor,this.model.flushColor()
    })), this._register(e.onDidChangeColor(this.onDidChangeColor, this)), this._register(e.onDidChangePresentation(this.onDidChangePresentation, this)), this._pickedColorNode.style.backgroundColor=Xr.Format.CSS.format(e.color)||"", this._pickedColorNode.classList.toggle("light", e.color.rgba.a<.5?this.backgroundColor.isLighter():e.color.isLighter()), this.onDidChangeColor(this.model.color), this.type==="standalone"&&(this._domNode.classList.add("standalone-colorpicker"), this._closeButton=this._register(new zmg(this._domNode)))
  }
  get domNode(){
    return this._domNode
  }
  get closeButton(){
    return this._closeButton
  }
  get pickedColorNode(){
    return this._pickedColorNode
  }
  get originalColorNode(){
    return this._originalColorNode
  }
  onDidChangeColor(n){
    this._pickedColorNode.style.backgroundColor=Xr.Format.CSS.format(n)||"", this._pickedColorNode.classList.toggle("light", n.rgba.a<.5?this.backgroundColor.isLighter():n.isLighter()), this.onDidChangePresentation()
  }
  onDidChangePresentation(){
    this._pickedColorPresentation.textContent=this.model.presentation?this.model.presentation.label:""
  }
}
}
}), Kmg, yGl, Ymg=