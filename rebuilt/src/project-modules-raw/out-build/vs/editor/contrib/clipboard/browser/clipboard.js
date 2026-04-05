// Module: out-build/vs/editor/contrib/clipboard/browser/clipboard.js
// Offset: 2469525 (bundle byte offset)
// Size: 4039 bytes

Ay(), ri(), _r(), Ht(), dr(), Kf(), si(), VOn(), nwh(), Cu(), Oh(), Qh(), IRe(), SKe="9_cutcopypaste", ekh=kw||document.queryCommandSupported("cut"), $Bc=kw||document.queryCommandSupported("copy"), tkh=typeof navigator.clipboard>"u"||u3?document.queryCommandSupported("paste"):!0, B9e=ekh?UBc(new N5e({
  id:"editor.action.clipboardCutAction", precondition:void 0, kbOpts:kw?{
    primary:2102, win:{
      primary:2102,secondary:[1044]
    }, weight:100
  }
  :void 0, menuOpts:[{
    menuId:st.MenubarEditMenu, group:"2_ccp", title:_(950, null), order:1
  }, {
    menuId:st.EditorContext, group:SKe, title:_(951, null), when:Ci.writable, order:1
  }, {
    menuId:st.CommandPalette, group:"", title:_(952, null), order:1
  }, {
    menuId:st.SimpleEditorContext, group:SKe, title:_(953, null), when:Ci.writable, order:1
  }
  ]
})):void 0, R9e=$Bc?UBc(new N5e({
  id:"editor.action.clipboardCopyAction", precondition:void 0, kbOpts:kw?{
    primary:2081, win:{
      primary:2081,secondary:[2067]
    }, weight:100
  }
  :void 0, menuOpts:[{
    menuId:st.MenubarEditMenu, group:"2_ccp", title:_(954, null), order:2
  }, {
    menuId:st.EditorContext, group:SKe, title:_(955, null), order:2
  }, {
    menuId:st.CommandPalette, group:"", title:_(956, null), order:1
  }, {
    menuId:st.SimpleEditorContext, group:SKe, title:_(957, null), order:2
  }
  ]
})):void 0, or.appendMenuItem(st.MenubarEditMenu, {
  submenu:st.MenubarCopy, title:dt(962, "Copy As"), group:"2_ccp", order:3
}), or.appendMenuItem(st.EditorContext, {
  submenu:st.EditorContextCopy, title:dt(963, "Copy As"), group:SKe, order:3
}), or.appendMenuItem(st.EditorContext, {
  submenu:st.EditorContextShare, title:dt(964, "Share"), group:"11_share", order:-1, when:Ee.and(Ee.notEquals("resourceScheme", "output"), Ci.editorTextFocus)
}), or.appendMenuItem(st.ExplorerContext, {
  submenu:st.ExplorerContextShare, title:dt(965, "Share"), group:"11_share", order:-1
}), eke=tkh?UBc(new N5e({
  id:"editor.action.clipboardPasteAction", precondition:void 0, kbOpts:kw?{
    primary:2100, win:{
      primary:2100,secondary:[1043]
    }, linux:{
      primary:2100,secondary:[1043]
    }, weight:100
  }
  :void 0, menuOpts:[{
    menuId:st.MenubarEditMenu, group:"2_ccp", title:_(958, null), order:4
  }, {
    menuId:st.EditorContext, group:SKe, title:_(959, null), when:Ci.writable, order:4
  }, {
    menuId:st.CommandPalette, group:"", title:_(960, null), order:1
  }, {
    menuId:st.SimpleEditorContext, group:SKe, title:_(961, null), when:Ci.writable, order:4
  }
  ]
})):void 0, nkh=class extends vu{
  constructor(){
    super({
      id:"editor.action.clipboardCopyWithSyntaxHighlightingAction",label:dt(966,"Copy with Syntax Highlighting"),precondition:void 0,kbOpts:{
        kbExpr:Ci.textInputFocus,primary:0,weight:100
      }
    })
  }
  run(n, e){
    !e.hasModel()||!e.getOption(38)&&e.getSelection().isEmpty()||(l3o.forceCopyWithSyntaxHighlighting=!0, e.focus(), e.getContainerDomNode().ownerDocument.execCommand("copy"), l3o.forceCopyWithSyntaxHighlighting=!1)
  }
}, XSh(B9e, "cut"), XSh(R9e, "copy"), eke&&(eke.addImplementation(1e4, "code-editor", (n, e)=>{
  const t=n.get(fl), i=n.get(jm), r=t.getFocusedCodeEditor();
  if(r&&r.hasModel()&&r.hasTextFocus()){
    let s;
    if(r.getOption(157)){
      const a=yIc.get(r.getId());
      a?s=a.executePaste():s=!1
    }
    else s=r.getContainerDomNode().ownerDocument.execCommand("paste");
    return s?ZH.get(r)?.finishedPaste()??Promise.resolve():Eu?(async()=>{
      const a=await i.readText();
      if(a!==""){
        const l=n3t.INSTANCE.get(a);
        let u=!1,d=null,m=null;
        l&&(u=r.getOption(38)&&!!l.isFromEmptySelection,d=typeof l.multicursorText<"u"?l.multicursorText:null,m=l.mode),r.trigger("keyboard","paste",{
          text:a,pasteOnNewLine:u,multicursorText:d,mode:m
        })
      }
    })():!0
  }
  return!1
}), eke.addImplementation(0, "generic-dom", (n, e)=>(Jy().execCommand("paste"), !0))), $Bc&&ac(nkh)
}
});
function OhA(n, e){
  return!(n.include&&!n.include.intersects(e)||n.excludes&&n.excludes.some(t=>ikh(e, t, n.include))||!n.includeSourceActions&&FA.Source.contains(e))
}
function UhA(n, e){
  const t=e.kind?new p0(e.kind):void 0;
  return!(n.include&&(!t||!n.include.contains(t))||n.excludes&&t&&n.excludes.some(i=>ikh(t, i, n.include))||!n.includeSourceActions&&t&&FA.Source.contains(t)||n.onlyIncludePreferredActions&&!e.isPreferred)
}
function ikh(n, e, t){
  return!(!e.contains(n)||t&&e.contains(t))
}
var FA, rkh, E9, e5n, skh, BW=