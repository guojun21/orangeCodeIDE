// Module: out-build/vs/platform/reactivestorage/browser/solidObservable.js
// Offset: 26583701 (bundle byte offset)
// Size: 1008 bytes

Ti()
}
});
function Bh(n){
  return n.getBoolean(ENe, -1, !1)?!0:wb(n, "unifiedAppLayout")===N0.Agent
}
function OF(n, e){
  return Bh(n)?e.checkFeatureGate("chat_editor_group_enabled"):!1
}
function ypa(n, e){
  return Bh(n)?e.checkFeatureGate("chat_editor_group_enabled")||wb(n, "autoHideEditorWhenEmpty"):!1
}
function utu(n, e){
  const t=hm(n, "unifiedAppLayout");
  Ai(()=>t.dispose());
  const[i]=aQ(t), r=e.getFeatureGateProperty("chat_editor_group_enabled"), s=Tv(r);
  return xe(()=>i()===N0.Agent&&s())
}
function YLA(n){
  const{
    layoutService:e, storageService:t, experimentService:i
  }
  =n;
  return ypa(t, i)&&!e.isVisible("workbench.parts.editor", bi)&&!e.isVisible("workbench.parts.panel", bi)
}
function fNg(n){
  const{
    layoutService:e, storageService:t, experimentService:i
  }
  =n, r=e.isVisible("workbench.parts.editor", bi), s=e.isVisible("workbench.parts.panel"), o=e.isVisible("workbench.parts.auxiliarybar");
  return r||s||o?null:OF(t, i)?"auxiliaryBar":"editor"
}
var ENe, Q0=