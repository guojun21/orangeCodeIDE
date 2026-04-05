"use strict";

// Module: out-build/vs/workbench/contrib/chat/common/chatActions.js
// Offset: 30990837 (bundle byte offset)
// Size: 850 bytes
Ae({
  "out-build/vs/workbench/contrib/chat/common/chatActions.js"() {
    "use strict";
  }
});
function _Tf(n, e) {
  const t = e.at(0);
  const i = $ry(t) ? t : undefined;
  const r = n.get(ES);
  const s = n.get(M1);
  const o = n.get(kV);
  let a = i ? s.getWidgetBySessionId(i.sessionId) : undefined;
  if (!a) {
    if (r.unifiedViewEnabled) {
      a = s.lastFocusedWidget ?? s.getWidgetsByLocations(zh.Panel).find(d => d.isUnifiedPanelWidget);
    } else {
      a = s.getWidgetsByLocations(zh.EditingSession).at(0);
    }
  }
  if (!a?.viewModel) {
    return;
  }
  const l = a.viewModel.model.sessionId;
  const u = o.getEditingSession(l);
  if (u) {
    return {
      editingSession: u,
      chatWidget: a
    };
  }
}
async function qry(n, e) {
  const t = n.get(Ml);
  const i = e.entries.get();
  if (i.length > 0 && !(await t.confirm({
    title: _(5266, null),
    message: i.length === 1 ? _(5267, null, "Copilot Edits", ca(i[0].modifiedURI)) : _(5268, null, "Copilot Edits", i.length),
    primaryButton: _(5269, null),
    type: "info"
  })).confirmed) {
    return false;
  } else {
    await e.reject();
    return true;
  }
}
