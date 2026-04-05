// Module: out-build/vs/workbench/contrib/files/browser/fileActions.contribution.js
// Offset: 32441197 (bundle byte offset)
// Size: 12677 bytes

Ht(), Tka(), TBf(), dr(), tly(), UMe(), hs(), si(), Hw(), gD(), M1t(), l5(), N1(), Rf(), zr(), Mm(), Av(), $ie(), qi(), ip(), of(), Dt(XDf), Dt(eBf), Dt(tBf), Dt(rBf), Dt(iBf), Dt(Xfu), Dt(nBf), Dt(pBf), Dt(gBf), Dt(fBf), Dt(bBf), Ss.registerCommand("_files.windowOpen", TOf), Ss.registerCommand("_files.newWindow", IOf), YMe=10, NAu="renameFile", qo.registerCommandAndKeybindingRule({
  id:NAu, weight:200+YMe, when:Ee.and(fX, gX.toNegated(), ZEe), primary:60, mac:{
    primary:3
  }, handler:sBf
}), MAu="moveFileToTrash", qo.registerCommandAndKeybindingRule({
  id:MAu, weight:200+YMe, when:Ee.and(fX, Ngn), primary:20, mac:{
    primary:2049, secondary:[20]
  }, handler:aBf
}), bCi="deleteFile", qo.registerCommandAndKeybindingRule({
  id:bCi, weight:200+YMe, when:fX, primary:1044, mac:{
    primary:2561
  }, handler:ebu
}), qo.registerCommandAndKeybindingRule({
  id:bCi, weight:200+YMe, when:Ee.and(fX, Ngn.toNegated()), primary:20, mac:{
    primary:2049
  }, handler:ebu
}), FAu="filesExplorer.cut", qo.registerCommandAndKeybindingRule({
  id:FAu, weight:200+YMe, when:Ee.and(fX, gX.toNegated(), ZEe), primary:2102, handler:lBf
}), OAu="filesExplorer.copy", qo.registerCommandAndKeybindingRule({
  id:OAu, weight:200+YMe, when:Ee.and(fX, gX.toNegated()), primary:2081, handler:cBf
}), K1a="filesExplorer.paste", Ss.registerCommand(K1a, hBf), qo.registerKeybindingRule({
  id:`^${K1a}`, weight:200+YMe, when:Ee.and(fX, ZEe), primary:2100
}), qo.registerCommandAndKeybindingRule({
  id:"filesExplorer.cancelCut", weight:200+YMe, when:Ee.and(fX, dgu), primary:9, handler:async n=>{
    await n.get(DC).setToCopy([], !0)
  }
}), qo.registerCommandAndKeybindingRule({
  id:"filesExplorer.openFilePreserveFocus", weight:200+YMe, when:Ee.and(fX, dB.toNegated()), primary:10, handler:mBf
}), $fn={
  id:Kgn, title:_(7775, null)
}, qfn={
  id:Ygn, title:_(7776, null)
}, V1t={
  id:Vgn, title:_(7777, null)
}, V1a(Kgn, $fn.title, Ep.IsFileSystemResource, "1_cutcopypaste", !0), V1a(Ygn, qfn.title, Ep.IsFileSystemResource, "1_cutcopypaste", !0), V1a(V1t.id, V1t.title, Ep.IsFileSystemResource, "2_files", !1, 1), DOf("workbench.files.action.acceptLocalChanges", _(7778, null), Be.check, -10, EBf), DOf("workbench.files.action.revertLocalChanges", _(7779, null), Be.discard, -9, xBf), rpe({
  id:Kgn, title:dt(7806, "Copy Path of Active File"), category:Br.File
}), rpe({
  id:Ygn, title:dt(7807, "Copy Relative Path of Active File"), category:Br.File
}), rpe({
  id:Zgn, title:ifu, category:Br.File
}), rpe({
  id:rfu, title:qIf, category:Br.File
}), rpe({
  id:u0i, title:dt(7808, "Save All in Group"), category:Br.File
}), rpe({
  id:sfu, title:dt(7809, "Save All Files"), category:Br.File
}), rpe({
  id:l0i, title:dt(7810, "Revert File"), category:Br.File
}), rpe({
  id:MSa, title:dt(7811, "Compare Active File with Saved"), category:Br.File, metadata:{
    description:dt(7812, "Opens a new diff editor to compare the active file with the version on disk.")
  }
}), rpe({
  id:FSa, title:nfu, category:Br.File
}), rpe({
  id:pfn, title:jfu, category:Br.File
}, Tnt.notEqualsTo("0")), rpe({
  id:C0i, title:zfu, category:Br.File, metadata:{
    description:dt(7813, "Create a new folder or directory")
  }
}, Tnt.notEqualsTo("0")), rpe({
  id:xit, title:cfu, category:Br.File
}), Y1a=Ee.or(Ep.IsFileSystemResource, Ep.Scheme.isEqualTo(_n.untitled)), vCi={
  id:Ygu, title:_(7780, null)
}, or.appendMenuItem(st.OpenEditorsContext, {
  group:"navigation", order:10, command:vCi, when:Y1a
}), or.appendMenuItem(st.OpenEditorsContext, {
  group:"1_open", order:10, command:{
    id:b0i, title:_(7781, null)
  }, when:Ee.and(Dnt, Eit.toNegated())
}), or.appendMenuItem(st.OpenEditorsContext, {
  group:"1_cutcopypaste", order:10, command:$fn, when:Ep.IsFileSystemResource
}), or.appendMenuItem(st.OpenEditorsContext, {
  group:"1_cutcopypaste", order:20, command:qfn, when:Ep.IsFileSystemResource
}), or.appendMenuItem(st.OpenEditorsContext, {
  group:"2_save", order:10, command:{
    id:Zgn, title:ifu, precondition:d0i
  }, when:Ee.or(Ep.Scheme.isEqualTo(_n.untitled), Ee.and(Eit.toNegated(), USa.toNegated(), IAi.toNegated()))
}), or.appendMenuItem(st.OpenEditorsContext, {
  group:"2_save", order:20, command:{
    id:l0i, title:_(7782, null), precondition:d0i
  }, when:Ee.and(Eit.toNegated(), USa.toNegated(), Ep.Scheme.notEqualsTo(_n.untitled), IAi.toNegated())
}), or.appendMenuItem(st.OpenEditorsContext, {
  group:"2_save", order:30, command:{
    id:u0i, title:_(7783, null), precondition:Ova
  }, when:Eit
}), or.appendMenuItem(st.OpenEditorsContext, {
  group:"3_compare", order:10, command:{
    id:MSa, title:_(7784, null), precondition:d0i
  }, when:Ee.and(Ep.IsFileSystemResource, IAi.toNegated(), U1e.toNegated())
}), UAu={
  id:tfu, title:_(7785, null)
}, or.appendMenuItem(st.OpenEditorsContext, {
  group:"3_compare", order:20, command:UAu, when:Ee.and(Ep.HasResource, $Sa, Y1a, U1e.toNegated())
}), $Au={
  id:Xgu, title:_(7786, null)
}, or.appendMenuItem(st.OpenEditorsContext, {
  group:"3_compare", order:30, command:$Au, when:Ee.and(Ep.HasResource, Y1a, U1e.toNegated())
}), Z1a={
  id:efu, title:_(7787, null)
}, or.appendMenuItem(st.OpenEditorsContext, {
  group:"3_compare", order:30, command:Z1a, when:Ee.and(Ep.HasResource, U1e, ofu)
}), or.appendMenuItem(st.EditorTitleContext, {
  group:"1_compare", order:30, command:Z1a, when:Ee.and(Ep.HasResource, qau, Hau)
}), BOf={
  id:dun, title:"Add File to Cursor Chat"
}, or.appendMenuItem(st.ExplorerContext, {
  group:"3_composer", order:20, command:BOf, when:Ee.and(Ep.HasResource, Ep.IsFileSystemResource, dB.toNegated())
}), ROf={
  id:epi, title:"Add File to New Cursor Chat"
}, or.appendMenuItem(st.ExplorerContext, {
  group:"3_composer", order:25, command:ROf, when:Ee.and(Ep.HasResource, Ep.IsFileSystemResource, dB.toNegated())
}), POf={
  id:dun, title:"Add Directory to Cursor Chat"
}, or.appendMenuItem(st.ExplorerContext, {
  group:"3_composer", order:21, command:POf, when:Ee.and(Ep.HasResource, Ep.IsFileSystemResource, dB)
}), LOf={
  id:epi, title:"Add Directory to New Cursor Chat"
}, or.appendMenuItem(st.ExplorerContext, {
  group:"3_composer", order:26, command:LOf, when:Ee.and(Ep.HasResource, Ep.IsFileSystemResource, dB)
}), or.appendMenuItem(st.OpenEditorsContext, {
  group:"4_close", order:10, command:{
    id:$ce, title:_(7788, null)
  }, when:Eit.toNegated()
}), or.appendMenuItem(st.OpenEditorsContext, {
  group:"4_close", order:20, command:{
    id:f0i, title:_(7789, null)
  }, when:Eit.toNegated()
}), or.appendMenuItem(st.OpenEditorsContext, {
  group:"4_close", order:30, command:{
    id:dfn, title:_(7790, null)
  }
}), or.appendMenuItem(st.OpenEditorsContext, {
  group:"4_close", order:40, command:{
    id:Lit, title:_(7791, null)
  }
}), or.appendMenuItem(st.ExplorerContext, {
  group:"navigation", order:4, command:{
    id:pfn, title:jfu, precondition:ZEe
  }, when:dB
}), or.appendMenuItem(st.ExplorerContext, {
  group:"navigation", order:6, command:{
    id:C0i, title:zfu, precondition:ZEe
  }, when:dB
}), or.appendMenuItem(st.ExplorerContext, {
  group:"navigation", order:10, command:vCi, when:Ee.and(dB.toNegated(), Ep.HasResource)
}), or.appendMenuItem(st.ExplorerContext, {
  group:"navigation", order:20, command:{
    id:Zgu, title:_(7792, null)
  }, when:Ee.and(dB.toNegated(), ugu)
}), or.appendMenuItem(st.ExplorerContext, {
  group:"3_compare", order:20, command:UAu, when:Ee.and(dB.toNegated(), Ep.HasResource, $Sa, U1e.toNegated())
}), or.appendMenuItem(st.ExplorerContext, {
  group:"3_compare", order:30, command:$Au, when:Ee.and(dB.toNegated(), Ep.HasResource, U1e.toNegated())
}), or.appendMenuItem(st.ExplorerContext, {
  group:"3_compare", order:30, command:Z1a, when:Ee.and(dB.toNegated(), Ep.HasResource, U1e)
}), or.appendMenuItem(st.ExplorerContext, {
  group:"5_cutcopypaste", order:8, command:{
    id:FAu, title:_(7793, null)
  }, when:Ee.and(gX.toNegated(), ZEe)
}), or.appendMenuItem(st.ExplorerContext, {
  group:"5_cutcopypaste", order:10, command:{
    id:OAu, title:zDf
  }, when:gX.toNegated()
}), or.appendMenuItem(st.ExplorerContext, {
  group:"5_cutcopypaste", order:20, command:{
    id:K1a, title:VDf, precondition:Ee.and(ZEe, Vfu)
  }, when:dB
}), or.appendMenuItem(st.ExplorerContext, {
  group:"5b_importexport", order:10, command:{
    id:Kfu, title:KDf
  }, when:Ee.or(Ee.and(uU.toNegated(), Ep.Scheme.notEqualsTo(_n.file)), Ee.and(uU, dB.toNegated(), gX.toNegated()), Ee.and(uU, Mau))
}), or.appendMenuItem(st.ExplorerContext, {
  group:"5b_importexport", order:20, command:{
    id:Yfu, title:YDf
  }, when:Ee.and(uU, dB, ZEe)
}), or.appendMenuItem(st.ExplorerContext, {
  group:"6_copypath", order:10, command:$fn, when:Ep.IsFileSystemResource
}), or.appendMenuItem(st.ExplorerContext, {
  group:"6_copypath", order:20, command:qfn, when:Ep.IsFileSystemResource
}), or.appendMenuItem(st.ExplorerContext, {
  group:"2_workspace", order:10, command:{
    id:x0i, title:sbu
  }, when:Ee.and(gX, Ee.or(Pme, m_.isEqualTo("workspace")))
}), or.appendMenuItem(st.ExplorerContext, {
  group:"2_workspace", order:30, command:{
    id:afu, title:JIf
  }, when:Ee.and(gX, dB, Ee.and(Tnt.notEqualsTo("0"), Ee.or(Pme, m_.isEqualTo("workspace"))))
}), or.appendMenuItem(st.ExplorerContext, {
  group:"7_modification", order:10, command:{
    id:NAu, title:QDf, precondition:ZEe
  }, when:gX.toNegated()
}), or.appendMenuItem(st.ExplorerContext, {
  group:"7_modification", order:20, command:{
    id:MAu, title:jDf
  }, alt:{
    id:bCi, title:_(7794, null)
  }, when:Ee.and(gX.toNegated(), Ngn)
}), or.appendMenuItem(st.ExplorerContext, {
  group:"7_modification", order:20, command:{
    id:bCi, title:_(7795, null)
  }, when:Ee.and(gX.toNegated(), Ngn.toNegated())
});
for(const n of[st.EmptyEditorGroupContext, st.EditorTabsBarContext])or.appendMenuItem(n, {
  command:{
    id:xit, title:_(7796, null)
  }, group:"1_file", order:10
}), or.appendMenuItem(n, {
  command:{
    id:"workbench.action.quickOpen", title:_(7797, null)
  }, group:"1_file", order:20
});
or.appendMenuItem(st.MenubarFileMenu, {
  group:"1_new", command:{
    id:xit, title:_(7798, null)
  }, order:1
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"4_save", command:{
    id:Zgn, title:_(7799, null), precondition:Ee.or(ow, Ee.and(wit, LEe))
  }, order:1
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"4_save", command:{
    id:FSa, title:_(7800, null), precondition:Ee.or(ow, Ee.and(wit, LEe))
  }, order:2
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"4_save", command:{
    id:OSa, title:_(7801, null), precondition:Ova
  }, order:3
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"5_autosave", command:{
    id:Xfu.ID, title:_(7802, null), toggled:Ee.notEquals("config.files.autoSave", "off")
  }, order:1
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"6_close", command:{
    id:l0i, title:_(7803, null), precondition:Ee.or(Ee.and(Uau), Ee.and(Ep.Scheme.notEqualsTo(_n.untitled), wit, LEe))
  }, order:1
}), or.appendMenuItem(st.MenubarFileMenu, {
  group:"6_close", command:{
    id:$ce, title:_(7804, null), precondition:Ee.or(ow, Ee.and(wit, LEe))
  }, order:2
}), or.appendMenuItem(st.MenubarGoMenu, {
  group:"3_global_nav", command:{
    id:"workbench.action.quickOpen", title:_(7805, null)
  }, order:1
}), or.appendMenuItem(st.ChatAttachmentsContext, {
  group:"navigation", order:10, command:vCi, when:Ee.and(Ep.IsFileSystemResource, dB.toNegated())
}), or.appendMenuItem(st.ChatAttachmentsContext, {
  group:"navigation", order:20, command:V1t, when:Ep.IsFileSystemResource
}), or.appendMenuItem(st.ChatAttachmentsContext, {
  group:"1_cutcopypaste", order:10, command:$fn, when:Ep.IsFileSystemResource
}), or.appendMenuItem(st.ChatAttachmentsContext, {
  group:"1_cutcopypaste", order:20, command:qfn, when:Ep.IsFileSystemResource
});
for(const n of[st.ChatInlineResourceAnchorContext, st.ChatInputResourceAttachmentContext])or.appendMenuItem(n, {
  group:"navigation", order:10, command:vCi, when:Ee.and(Ep.HasResource, dB.toNegated())
}), or.appendMenuItem(n, {
  group:"navigation", order:20, command:V1t, when:Ep.IsFileSystemResource
}), or.appendMenuItem(n, {
  group:"1_cutcopypaste", order:10, command:$fn, when:Ep.IsFileSystemResource
}), or.appendMenuItem(n, {
  group:"1_cutcopypaste", order:20, command:qfn, when:Ep.IsFileSystemResource
})
}
});
function eEa(n, e, t){
  const i=n.get(wi), r=n.get(ln), s=new Ut, o=s.add(i.createScoped(e));
  return s.add(NOf(n, o, t)), e.draggable=!0, s.add(ei(e, "dragstart", a=>{
    r.invokeFunction(l=>Yme(l, [t], a)), a.dataTransfer?.setDragImage(e, 0, 0)
  })), s.add(MOf(n, e, o, st.ChatInputResourceAttachmentContext, t)), s
}
function qAu(n, e, t, i, r){
  const s=n.get(ln), o=n.get($u), a=n.get(El), l=new Ut;
  l.add(NOf(n, t, i.value.uri)), ACi.bindTo(t).set(i.value.uri.toString()), e.draggable=!0, l.add(ei(e, "dragstart", p=>{
    s.invokeFunction(g=>Yme(g, [{
      resource:i.value.uri,selection:i.value.range
    }
    ], p)), yBc([{
      fsPath:i.value.uri.fsPath,range:i.value.range,name:i.name,kind:i.kind
    }
    ], p), p.dataTransfer?.setDragImage(e, 0, 0)
  }));
  const d=[[Ci.hasDefinitionProvider.bindTo(t), o.definitionProvider], [Ci.hasReferenceProvider.bindTo(t), o.referenceProvider], [Ci.hasImplementationProvider.bindTo(t), o.implementationProvider], [Ci.hasTypeDefinitionProvider.bindTo(t), o.typeDefinitionProvider]], m=async()=>{
    const p=await a.createModelReference(i.value.uri);
    try{
      const g=p.object.textEditorModel;
      for(const[f,A]of d)f.set(A.has(g))
    }
    finally{
      p.dispose()
    }
  };
  return l.add(MOf(n, e, t, r, i.value, m)), l
}
function NOf(n, e, t){
  const i=n.get(Gr), r=n.get(Jl), s=n.get(Il), o=new Ep(e, i, r, s);
  return o.set(t), o
}
function MOf(n, e, t, i, r, s){
  const o=n.get(kc), a=n.get(xd);
  return ei(e, ir.CONTEXT_MENU, async l=>{
    const u=new yy(As(l), l);
    zu.stop(l, !0);
    try{
      await s?.()
    }
    catch(d){
      console.error(d)
    }
    o.showContextMenu({
      contextKeyService:t,getAnchor:()=>u,getActions:()=>{
        const d=a.getMenuActions(i,t,{
          arg:r
        });
        return YH(d)
      }
    })
  })
}
var ACi, tEa, HAu=