// Module: out-build/vs/base/common/verifier.js
// Offset: 31107644 (bundle byte offset)
// Size: 4483 bytes

Js(), efn=class{
  constructor(n){
    this.defaultValue=n
  }
  verify(n){
    return this.isType(n)?n:this.defaultValue
  }
}, DM=class extends efn{
  isType(n){
    return typeof n=="boolean"
  }
}, qSa=class extends efn{
  isType(n){
    return typeof n=="number"
  }
}, ZIf=class extends efn{
  isType(n){
    return n instanceof Set
  }
}, Oie=class extends efn{
  constructor(n, e){
    super(n), this.allowedValues=e
  }
  isType(n){
    return this.allowedValues.includes(n)
  }
}, ufu=class extends efn{
  constructor(n, e){
    super(n), this.verifier=e
  }
  verify(n){
    return this.isType(n)?YIf(this.verifier, n):this.defaultValue
  }
  isType(n){
    return $g(n)
  }
}
}
});
function Dsy(n){
  return n.affectsConfiguration("workbench.editor")||n.affectsConfiguration("workbench.iconTheme")||n.affectsConfiguration("window.density")
}
function XIf(n, e){
  const t={
    ...R_, hasIcons:e.getFileIconTheme().hasFileIcons
  }, i=n.getValue();
  if(i?.workbench?.editor)if(Object.assign(t, i.workbench.editor), $g(i.workbench.editor.autoLockGroups)){
    t.autoLockGroups=R_.autoLockGroups;
    for(const[s, o]of Object.entries(i.workbench.editor.autoLockGroups))o===!0&&t.autoLockGroups.add(s)
  }
  else t.autoLockGroups=R_.autoLockGroups;
  const r=n.getValue();
  return r?.window?.density?.editorTabHeight&&(t.tabHeight=r.window.density.editorTabHeight), Bsy(t)
}
function Bsy(n){
  return typeof n.showTabs=="boolean"&&(n.showTabs=n.showTabs?"multiple":"single"), YIf({
    wrapTabs:new DM(R_.wrapTabs), scrollToSwitchTabs:new DM(R_.scrollToSwitchTabs), highlightModifiedTabs:new DM(R_.highlightModifiedTabs), tabActionCloseVisibility:new DM(R_.tabActionCloseVisibility), tabActionUnpinVisibility:new DM(R_.tabActionUnpinVisibility), alwaysShowEditorActions:new DM(R_.alwaysShowEditorActions), pinnedTabsOnSeparateRow:new DM(R_.pinnedTabsOnSeparateRow), focusRecentEditorAfterClose:new DM(R_.focusRecentEditorAfterClose), showIcons:new DM(R_.showIcons), enablePreview:new DM(R_.enablePreview), enablePreviewFromQuickOpen:new DM(R_.enablePreviewFromQuickOpen), enablePreviewFromCodeNavigation:new DM(R_.enablePreviewFromCodeNavigation), closeOnFileDelete:new DM(R_.closeOnFileDelete), closeEmptyGroups:new DM(R_.closeEmptyGroups), revealIfOpen:new DM(R_.revealIfOpen), mouseBackForwardToNavigate:new DM(R_.mouseBackForwardToNavigate), restoreViewState:new DM(R_.restoreViewState), splitOnDragAndDrop:new DM(R_.splitOnDragAndDrop), dragToOpenWindow:new DM(R_.dragToOpenWindow), centeredLayoutFixedWidth:new DM(R_.centeredLayoutFixedWidth), hasIcons:new DM(R_.hasIcons), tabSizingFixedMinWidth:new qSa(R_.tabSizingFixedMinWidth), tabSizingFixedMaxWidth:new qSa(R_.tabSizingFixedMaxWidth), showTabs:new Oie(R_.showTabs, ["multiple", "single", "none"]), tabActionLocation:new Oie(R_.tabActionLocation, ["left", "right"]), tabSizing:new Oie(R_.tabSizing, ["fit", "shrink", "fixed"]), pinnedTabSizing:new Oie(R_.pinnedTabSizing, ["normal", "compact", "shrink"]), tabHeight:new Oie(R_.tabHeight, ["default", "compact"]), preventPinnedEditorClose:new Oie(R_.preventPinnedEditorClose, ["keyboardAndMouse", "keyboard", "mouse", "never"]), titleScrollbarSizing:new Oie(R_.titleScrollbarSizing, ["default", "large"]), openPositioning:new Oie(R_.openPositioning, ["left", "right", "first", "last"]), openSideBySideDirection:new Oie(R_.openSideBySideDirection, ["right", "down"]), labelFormat:new Oie(R_.labelFormat, ["default", "short", "medium", "long"]), splitInGroupLayout:new Oie(R_.splitInGroupLayout, ["vertical", "horizontal"]), splitSizing:new Oie(R_.splitSizing, ["distribute", "split", "auto"]), doubleClickTabToToggleEditorGroupSizes:new Oie(R_.doubleClickTabToToggleEditorGroupSizes, ["maximize", "expand", "off"]), editorActionsLocation:new Oie(R_.editorActionsLocation, ["default", "titleBar", "hidden"]), autoLockGroups:new ZIf(R_.autoLockGroups), limit:new ufu(R_.limit, {
      enabled:new DM(R_.limit.enabled),value:new qSa(R_.limit.value),perEditorGroup:new DM(R_.limit.perEditorGroup),excludeDirty:new DM(R_.limit.excludeDirty)
    }), decorations:new ufu(R_.decorations, {
      badges:new DM(R_.decorations.badges),colors:new DM(R_.decorations.colors)
    })
  }, n)
}
function eDf(n, e, t){
  return!e||!n.activeEditor||e.matches(n.activeEditor)?{
    ...t, viewState:n.activeEditorPane?.getViewState()
  }
  :t||Object.create(null)
}
function HSa(n, e, t){
  if(e.length===0)return[];
  const i=[];
  let r;
  const s=[];
  for(const a of e)!r&&n.isActive(a)?r=a:s.push(a);
  r||(r=s.shift()), s.sort((a, l)=>n.getIndexOfEditor(l)-n.getIndexOfEditor(a));
  const o=lh([r, ...s]);
  for(let a=0;
  a<o.length;
  a++){
    const l=o[a];
    i.push({
      editor:l,options:{
        pinned:!0,sticky:n.isSticky(l),inactive:a>0,preserveFocus:t
      }
    })
  }
  return i
}
var Zye, R1t, R_, exe=