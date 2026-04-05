// Module: out-build/vs/platform/history/browser/contextScopedHistoryWidget.js
// Offset: 25169315 (bundle byte offset)
// Size: 1507 bytes

Aca(), NCA(), JZ(), si(), Hw(), Ht(), rt(), ri(), _la=new Sn("suggestWidgetVisible", !1, _(2076, null)), Cla="historyNavigationWidgetFocus", uQl="historyNavigationForwardsEnabled", dQl="historyNavigationBackwardsEnabled", ndn=void 0, ggi=[], idn=class extends vca{
  constructor(e, t, i, r){
    super(e, t, i);
    const s=this._register(r.createScoped(this.element));
    this._register(CCt(s, this))
  }
}, idn=__decorate([__param(3, wi)], idn), rdn=class extends _pi{
  constructor(e, t, i, r){
    super(e, t, i);
    const s=this._register(r.createScoped(this.inputBox.element));
    this._register(CCt(s, this.inputBox))
  }
}, rdn=__decorate([__param(3, wi)], rdn), sdn=class extends fvg{
  constructor(e, t, i, r, s=!1){
    super(e, t, s, i);
    const o=this._register(r.createScoped(this.inputBox.element));
    this._register(CCt(o, this.inputBox))
  }
}, sdn=__decorate([__param(3, wi)], sdn), qo.registerCommandAndKeybindingRule({
  id:"history.showPrevious", weight:200, when:Ee.and(Ee.has(Cla), Ee.equals(dQl, !0), Ee.not("isComposing"), _la.isEqualTo(!1)), primary:16, secondary:[528], handler:n=>{
    ndn?.showPreviousValue()
  }
}), qo.registerCommandAndKeybindingRule({
  id:"history.showNext", weight:200, when:Ee.and(Ee.has(Cla), Ee.equals(uQl, !0), Ee.not("isComposing"), _la.isEqualTo(!1)), primary:18, secondary:[530], handler:n=>{
    ndn?.showNextValue()
  }
})
}
});
function qet(n){
  return n.lookupKeybinding("history.showPrevious")?.getElectronAccelerator()==="Up"&&n.lookupKeybinding("history.showNext")?.getElectronAccelerator()==="Down"
}
var odn=