// Module: out-build/vs/workbench/services/preferences/common/preferences.js
// Offset: 31142627 (bundle byte offset)
// Size: 2734 bytes

Wt(), Nu(), (function(n){
  n.Null="null", n.Enum="enum", n.String="string", n.MultilineString="multiline-string", n.Integer="integer", n.Number="number", n.Boolean="boolean", n.Array="array", n.Exclude="exclude", n.Include="include", n.Complex="complex", n.NullableInteger="nullable-integer", n.NullableNumber="nullable-number", n.Object="object", n.BooleanObject="boolean-object", n.LanguageTag="language-tag", n.ExtensionToggle="extension-toggle", n.ComplexObject="complex-object"
})(A0||(A0={
  
})), (function(n){
  n[n.None=0]="None", n[n.LanguageTagSettingMatch=1]="LanguageTagSettingMatch", n[n.RemoteMatch=2]="RemoteMatch", n[n.NonContiguousQueryInSettingId=4]="NonContiguousQueryInSettingId", n[n.DescriptionOrValueMatch=8]="DescriptionOrValueMatch", n[n.NonContiguousWordsInSettingsLabel=16]="NonContiguousWordsInSettingsLabel", n[n.ContiguousWordsInSettingsLabel=32]="ContiguousWordsInSettingsLabel", n[n.ContiguousQueryInSettingId=64]="ContiguousQueryInSettingId", n[n.AllWordsInSettingsLabel=128]="AllWordsInSettingsLabel", n[n.ExactMatch=256]="ExactMatch"
})(bD||(bD={
  
})), uDf=bD.AllWordsInSettingsLabel|bD.ContiguousWordsInSettingsLabel|bD.NonContiguousWordsInSettingsLabel|bD.NonContiguousQueryInSettingId|bD.ContiguousQueryInSettingId, tb=xi("preferencesService"), gfu="editor.contrib.defineKeybinding", rfn=".vscode/settings.json", zSa="workbench.settings.openDefaultSettings", VSa="workbench.settings.useSplitJSON", KSa="settings"
}
});
function Lsy(n, e){
  const t=n.get(yi), i=n.get(xl), r=n.get(cB);
  return new Promise(s=>{
    let o=[...e];
    const a=t.onDidCloseEditor(async l=>{
      if(l.context===iV.MOVE)return;
      let u=gp.getOriginalUri(l.editor,{
        supportSideBySide:op.PRIMARY
      }),d=gp.getOriginalUri(l.editor,{
        supportSideBySide:op.SECONDARY
      });
      if(l.context===iV.REPLACE){
        const m=gp.getOriginalUri(t.activeEditor,{
          supportSideBySide:op.PRIMARY
        }),p=gp.getOriginalUri(t.activeEditor,{
          supportSideBySide:op.SECONDARY
        });
        i.extUri.isEqual(u,m)&&(u=void 0),i.extUri.isEqual(d,p)&&(d=void 0)
      }
      if(o=o.filter(m=>!(i.extUri.isEqual(m,u)||i.extUri.isEqual(m,d)||l.context!==iV.REPLACE&&(u?.scheme===_n.untitled&&i.extUri.isEqual(m,u.with({
        scheme:m.scheme
      }))||d?.scheme===_n.untitled&&i.extUri.isEqual(m,d.with({
        scheme:m.scheme
      }))))),o.length===0){
        const m=e.filter(p=>r.isDirty(p));
        return m.length>0&&await ib.settled(m.map(async p=>await new Promise(g=>{
          if(!r.isDirty(p))return g();
          const f=r.onDidChangeDirty(A=>{
            if(!A.isDirty()&&i.extUri.isEqual(p,A.resource))return f.dispose(),g()
          })
        }))),a.dispose(),s()
      }
    })
  })
}
function YSa(n, e, t, i){
  let r=n.getAriaLabel();
  return t&&!t.isPinned(n)&&(r=_(3263, null, r)), t?.isSticky(e??n)&&(r=_(3264, null, r)), t&&typeof i=="number"&&i>1&&(r=`${r}, ${t.ariaLabel}`), r
}
var oC, dDf, ox=