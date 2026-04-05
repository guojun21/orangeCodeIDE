// Module: out-build/vs/editor/contrib/colorPicker/browser/hoverColorPicker/hoverColorPickerWidget.js
// Offset: 24737224 (bundle byte offset)
// Size: 671 bytes

_et(), Nte(), ri(), $4(), X_A(), t0A(), Kmg=Ct, yGl=class TWb extends HR{
  static{
    this.ID="editor.contrib.colorPickerWidget"
  }
  constructor(e, t, i, r, s){
    super(), this.model=t, this.pixelRatio=i, this._register(M6.getInstance(As(e)).onDidChange(()=>this.layout())), this._domNode=Kmg(".colorpicker-widget"), e.appendChild(this._domNode), this.header=this._register(new Vmg(this._domNode, this.model, r, s)), this.body=this._register(new Qmg(this._domNode, this.model, this.pixelRatio, s))
  }
  getId(){
    return TWb.ID
  }
  layout(){
    this.body.layout()
  }
  get domNode(){
    return this._domNode
  }
}
}
}), Zmg, n0A=