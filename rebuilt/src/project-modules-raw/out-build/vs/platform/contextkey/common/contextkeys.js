// Module: out-build/vs/platform/contextkey/common/contextkeys.js
// Offset: 24945271 (bundle byte offset)
// Size: 3350 bytes

_r(), Ht(), si(), eWl=new Sn("isMac", Fs, _(1829, null)), tWl=new Sn("isLinux", xv, _(1830, null)), NAe=new Sn("isWindows", Sc, _(1831, null)), uU=new Sn("isWeb", Eu, _(1832, null)), MAe=new Sn("isMacNative", Fs&&!Eu, _(1833, null)), nWl=new Sn("isIOS", ZL, _(1834, null)), kgg=new Sn("isMobile", k0c, _(1835, null)), Gy=new Sn("isDevelopment", !1, !0), hL=new Sn("isDevUser", !1, _(1836, null)), Gae=new Sn("isGlass", !1, _(1837, null)), Egg=new Sn("productQualityType", "", _(1838, null)), lD="inputFocus", eQ=new Sn(lD, !1, _(1839, null)), xgg=new Sn("windowInWindowExpanded", !1)
}
});
function Ica(n, e){
  const t=n.createScoped(e.getHTMLElement());
  return xpi.bindTo(t), t
}
function Dca(n, e){
  const t=Run.bindTo(n), i=()=>{
    const r=e.scrollTop===0, s=e.scrollHeight-e.renderHeight-e.scrollTop<1;
    r&&s?t.set("both"):r?t.set("top"):s?t.set("bottom"):t.set("none")
  };
  return i(), e.onDidScroll(i)
}
function oNe(n){
  return n.getValue(Det)==="alt"
}
function Bca(n, e){
  const t=n.get(Fn), i=n.get(mo), r=new Ut;
  return[{
    ...e, keyboardNavigationDelegate:{
      mightProducePrintableCharacter(o){
        return i.mightProducePrintableCharacter(o)
      }
    }, smoothScrolling:!!t.getValue(UAe), mouseWheelScrollSensitivity:t.getValue($1e), fastScrollSensitivity:t.getValue(q1e), multipleSelectionController:e.multipleSelectionController??r.add(new Bgg(t)), keyboardNavigationEventFilter:F0A(i), scrollByPage:!!t.getValue(OAe)
  }, r]
}
function FAe(n="keydown", e, t){
  const i=new KeyboardEvent(n);
  return i.preserveFocus=e, i.pinned=t, i.__forceEvent=!0, i
}
function F0A(n){
  let e=!1;
  return t=>{
    if(t.toKeyCodeChord().isModifierKey())return!1;
    if(e)return e=!1, !1;
    const i=n.softDispatch(t, t.target);
    return i.kind===1?(e=!0, !1):(e=!1, i.kind===0)
  }
}
function Tgg(n){
  const e=n.getValue(Pca);
  if(e==="highlight")return nR.Highlight;
  if(e==="filter")return nR.Filter;
  const t=n.getValue(Rpi);
  if(t==="simple"||t==="highlight")return nR.Highlight;
  if(t==="filter")return nR.Filter
}
function Igg(n){
  const e=n.getValue(Nca);
  if(e==="fuzzy")return XW.Fuzzy;
  if(e==="contiguous")return XW.Contiguous
}
function Epi(n, e){
  const t=n.get(Fn), i=n.get(sy), r=n.get(wi), s=n.get(ln), o=()=>{
    const p=r.getContextKeyValue(lWl);
    if(p==="automatic")return bRe.Automatic;
    if(p==="trigger"||r.getContextKeyValue(uWl)===!1)return bRe.Trigger;
    const f=t.getValue(Lca);
    if(f==="automatic")return bRe.Automatic;
    if(f==="trigger")return bRe.Trigger
  }, a=e.horizontalScrolling!==void 0?e.horizontalScrolling:!!t.getValue(Wae), [l, u]=s.invokeFunction(Bca, e), d=e.paddingBottom, m=e.renderIndentGuides!==void 0?e.renderIndentGuides:t.getValue(Ppi);
  return{
    getTypeNavigationMode:o, disposable:u, options:{
      keyboardSupport:!1,...l,indent:typeof t.getValue(Lun)=="number"?t.getValue(Lun):void 0,renderIndentGuides:m,smoothScrolling:!!t.getValue(UAe),defaultFindMode:Tgg(t),defaultFindMatchType:Igg(t),horizontalScrolling:a,scrollByPage:!!t.getValue(OAe),paddingBottom:d,hideTwistiesOfChildlessElements:e.hideTwistiesOfChildlessElements,expandOnlyOnTwistieClick:e.expandOnlyOnTwistieClick??t.getValue(Lpi)==="doubleClick",contextViewProvider:i,findWidgetStyles:WCh,enableStickyScroll:!!t.getValue(Npi),stickyScrollMaxItemCount:Number(t.getValue(Mpi))
    }
  }
}
var Nh, Dgg, Run, iWl, rWl, xpi, Pun, Iet, D1, Tpi, U1e, Rca, cCt, sWl, Ipi, oWl, Dpi, aWl, cWl, lWl, uWl, Det, Bpi, Wae, Pca, Lca, Rpi, OAe, Nca, Lun, Ppi, UAe, $1e, q1e, Lpi, Npi, Mpi, Bgg, tQ, Mca, WUe, Fca, dWl, Rgg, Pgg, H1e, Nun, Mun, Eq, Bet, Ret, Lgg, Rf=