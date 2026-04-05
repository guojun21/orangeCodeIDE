// Module: out-build/vs/workbench/contrib/appLayout/common/unifiedAppLayoutContextKeys.js
// Offset: 27466002 (bundle byte offset)
// Size: 2655 bytes

si(), _r(), $F="cursor.agentIdeUnification.enabled", _fa=new Sn($F, !1, "Whether the agent ide unification is enabled"), s8=Ee.equals(_fa.key, !0), R2A=Ee.equals(_fa.key, !1), Vtt="cursor.agentIdeUnification.featureGate", nru=new Sn(Vtt, !0, "Whether the agent ide unification feature gate is enabled (always true)"), NSt=Ee.equals(nru.key, !0), QHg="cursor.defaultSidebarLocation", iru=new Sn(QHg, "right", "The default sidebar location for the agent ide unification"), P2A=Ee.equals(iru.key, "right"), L2A=Ee.equals(iru.key, "left"), Ivi="cursor.agentIdeUnification.sidebarLocation", Cfa=new Sn(Ivi, "right", "The sidebar location for the agent ide unification"), rru=Ee.equals(Cfa.key, "right"), Sfa=Ee.equals(Cfa.key, "left"), sru="cursor.agentIdeUnification.unifiedSidebarVisible", Dvi=new Sn(sru, !1, "Whether the unified sidebar is visible"), jHg=Ee.equals(Dvi.key, !0), oru=Ee.equals(Dvi.key, !1), zHg="cursor.agentIdeUnification.agentsSurfaceVisible", MSt=new Sn(zHg, !1, "Whether any agents surface is visible"), N2A=Ee.equals(MSt.key, !0), M2A=Ee.equals(MSt.key, !1), ONe="cursor.noTitlebarLayout.enabled", aru=new Sn(ONe, !1, "Whether the no-titlebar layout is currently active (title bar hidden)"), F2A=Ee.equals(aru.key, !0), kfa=-35, Bvi="no-titlebar-layout", cru=11, VHg=60, KHg=52, omn="cursor.onboarding.showing", O2A=new Sn(omn, !1, "Whether the onboarding UI is currently being displayed")
}
});
function qF(n){
  return n===2||n===3
}
function kme(n){
  switch(n){
    case 0:return"left";
    case 1:return"right";
    case 2:return"bottom";
    case 3:return"top";
    default:return"bottom"
  }
}
function Rvi(n){
  return sJg[n]
}
function lru(n){
  switch(n){
    case 0:return"always";
    case 1:return"never";
    case 2:return"preserve";
    default:return"preserve"
  }
}
function U2A(n){
  return n==="workbench.parts.editor"||n==="workbench.parts.statusbar"||n==="workbench.parts.titlebar"
}
function uru(n, e, t){
  if(!P$e(n))return!1;
  if(e.document.body.classList.contains(Bvi))return!0;
  const i=SH(e), r=Nq(n);
  if(!$2A(n))return!0;
  if(r)return!1;
  if(Fs&&kw)return!i;
  if(kw&&!i||HMo()&&!i)return!0;
  switch(M2n(e)?"hidden":R$e(n)){
    case"classic":return!i||!!t;
    case"compact":case"hidden":return!1;
    case"toggle":return!!t;
    case"visible":return!0;
    default:return Eu?!1:!i||!!t
  }
}
function $2A(n){
  if(n.getValue("window.commandCenter"))return!1;
  const e=n.getValue("workbench.activityBar.location");
  if(e==="top"||e==="bottom")return!1;
  const t=n.getValue("workbench.editor.editorActionsLocation"), i=n.getValue("workbench.editor.showTabs");
  return!(t==="titleBar"||t==="default"&&i==="none"||n.getValue("workbench.layoutControl.enabled"))
}
var Vu, YHg, ZHg, XHg, eJg, tJg, nJg, iJg, rJg, sJg, q2A, zp=