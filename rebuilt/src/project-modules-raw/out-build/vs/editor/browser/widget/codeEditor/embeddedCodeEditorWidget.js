// Module: out-build/vs/editor/browser/widget/codeEditor/embeddedCodeEditorWidget.js
// Offset: 24751016 (bundle byte offset)
// Size: 942 bytes

np(), Oh(), VI(), QE(), Cm(), zg(), hs(), si(), Wt(), So(), Io(), Rde(), q3=class extends WS{
  constructor(e, t, i, r, s, o, a, l, u, d, m, p, g, f){
    super(e, {
      ...r.getRawOptions(),overflowWidgetsDomNode:r.getOverflowWidgetsDomNode()
    }, i, s, o, a, l, u, d, m, p, g, f), this._parentEditor=r, this._overwriteOptions=t, super.updateOptions(this._overwriteOptions), this._register(r.onDidChangeConfiguration(A=>this._onParentConfigurationChanged(A)))
  }
  getParentEditor(){
    return this._parentEditor
  }
  _onParentConfigurationChanged(e){
    super.updateOptions(this._parentEditor.getRawOptions()), super.updateOptions(this._overwriteOptions)
  }
  updateOptions(e){
    f3(this._overwriteOptions, e, !0), super.updateOptions(this._overwriteOptions)
  }
}, q3=__decorate([__param(4, ln), __param(5, fl), __param(6, fr), __param(7, wi), __param(8, bo), __param(9, ms), __param(10, Cf), __param(11, JS), __param(12, $u), __param(13, FY)], q3)
}
}), s0A=