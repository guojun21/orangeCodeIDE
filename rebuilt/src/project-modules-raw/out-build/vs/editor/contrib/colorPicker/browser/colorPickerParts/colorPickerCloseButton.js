// Module: out-build/vs/editor/contrib/colorPicker/browser/colorPickerParts/colorPickerCloseButton.js
// Offset: 24734264 (bundle byte offset)
// Size: 686 bytes

_et(), ri(), rt(), Ht(), yn(), Pm(), Jr(), qi(), jmg=Ct, zmg=class extends at{
  constructor(n){
    super(), this._onClicked=this._register(new Qe), this.onClicked=this._onClicked.event, this._button=document.createElement("div"), this._button.classList.add("close-button"), Rt(n, this._button);
    const e=document.createElement("div");
    e.classList.add("close-button-inner-div"), Rt(this._button, e), Rt(e, jmg(".button"+Qt.asCSSSelector(us("color-picker-close", Be.close, _(1023, null))))).classList.add("close-icon"), this._register(ei(this._button, ir.CLICK, ()=>{
      this._onClicked.fire()
    }))
  }
}
}
}), gpi, Vmg, t0A=