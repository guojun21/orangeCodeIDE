// Module: out-build/vs/workbench/browser/parts/editor/diffEditorCommands.js
// Offset: 31180299 (bundle byte offset)
// Size: 2677 bytes

Yr(), Yn(), sw(), Ht(), dr(), si(), Hw(), Afu(), Mm(), Xq(), ss(), tka="toggle.diff.renderSideBySide", nka="workbench.action.compareEditor.nextChange", ika="workbench.action.compareEditor.previousChange", Sfu="workbench.action.compareEditor.focusPrimarySide", kfu="workbench.action.compareEditor.focusSecondarySide", Efu="workbench.action.compareEditor.focusOtherSide", EDf="workbench.action.compareEditor.openSide", xfu="toggle.diff.ignoreTrimWhitespace", rka="workbench.action.compareEditor.swapSides"
}
});
function gO(n, e, t, i){
  const r=Wsy(n, e, t, i), s=r.length&&r[0].preserveFocus||!1, o={
    groupedEditors:[], preserveFocus:s
  };
  for(const a of r){
    const l=zsy(a, t);
    if(!l)continue;
    const{
      group:u,editor:d
    }
    =l;
    let m;
    for(const p of o.groupedEditors)if(p.group.id===u.id){
      m=p;
      break
    }
    m||(m={
      group:u,editors:[]
    }, o.groupedEditors.push(m)), d&&m.editors.push(d)
  }
  return o
}
function Wsy(n, e, t, i){
  const r=i.lastFocusedList;
  let s=r instanceof JR&&r.getHTMLElement()===_C(), o=jsy(n, s, e, t, i);
  if(!o){
    const l=t.activeGroup, u=l.activeEditor;
    o={
      groupId:l.id,editorIndex:u?l.getIndexOfEditor(u):void 0
    }, s=!1
  }
  const a=TDf(o, s, e, t, i);
  return Qsy(o, a)
}
function Qsy(n, e){
  if(e.length<=1)return e;
  const t=e.findIndex(i=>i.groupId===n.groupId&&i.editorIndex===n.editorIndex);
  if(t!==-1)e.splice(t, 1), e.unshift(n);
  else if(n.editorIndex===void 0)e.unshift(n);
  else throw new Error("Editor context not found in multi editor context");
  return e
}
function jsy(n, e, t, i, r){
  const s=n.filter(o=>ngi(o)||je.isUri(o));
  for(const o of s)if(ngi(o))return o;
  for(const o of s){
    const a=t.findEditors(o);
    if(a.length){
      const l=a[0],u=i.getGroup(l.groupId);
      return{
        groupId:l.groupId,editorIndex:u?.getIndexOfEditor(l.editor)
      }
    }
  }
  if(e){
    const o=r.lastFocusedList;
    for(const a of o.getFocusedElements())if(IDf(a))return Tfu(a, void 0, i)
  }
}
function TDf(n, e, t, i, r){
  if(e){
    const o=r.lastFocusedList.getSelectedElements().filter(IDf);
    if(o.length>1)return o.map(a=>Tfu(a, n.preserveFocus, i));
    if(o.length===0)return TDf(n, !1, t, i, r)
  }
  else{
    const s=i.getGroup(n.groupId), o=n.editorIndex!==void 0?s?.getEditorByIndex(n.editorIndex):s?.activeEditor;
    if(s&&o&&s.isSelected(o))return s.selectedEditors.map(a=>Tfu({
      editor:a,groupId:s.id
    }, n.preserveFocus, i))
  }
  return[n]
}
function Tfu(n, e, t){
  if(JWl(n))return{
    groupId:n.id, editorIndex:void 0, preserveFocus:e
  };
  const i=t.getGroup(n.groupId);
  return{
    groupId:n.groupId, editorIndex:i?i.getIndexOfEditor(n.editor):-1, preserveFocus:e
  }
}
function IDf(n){
  return JWl(n)||UWl(n)
}
function zsy(n, e){
  const t=e.getGroup(n.groupId);
  if(!t)return;
  if(n.editorIndex===void 0)return{
    group:t, editor:void 0
  };
  const i=t.getEditorByIndex(n.editorIndex);
  return{
    group:t, editor:i
  }
}
var ufn=