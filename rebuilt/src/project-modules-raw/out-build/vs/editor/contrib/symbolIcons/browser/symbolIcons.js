// Module: out-build/vs/editor/contrib/symbolIcons/browser/symbolIcons.js
// Offset: 4170209 (bundle byte offset)
// Size: 3712 bytes

_vA(), Ht(), Nl(), CvA=Rn("symbolIcon.arrayForeground", ym, _(1635, null)), SvA=Rn("symbolIcon.booleanForeground", ym, _(1636, null)), kvA=Rn("symbolIcon.classForeground", {
  dark:"#EE9D28", light:"#D67E00", hcDark:"#EE9D28", hcLight:"#D67E00"
}, _(1637, null)), EvA=Rn("symbolIcon.colorForeground", ym, _(1638, null)), xvA=Rn("symbolIcon.constantForeground", ym, _(1639, null)), TvA=Rn("symbolIcon.constructorForeground", {
  dark:"#B180D7", light:"#652D90", hcDark:"#B180D7", hcLight:"#652D90"
}, _(1640, null)), d5c=Rn("symbolIcon.enumeratorForeground", {
  dark:"#EE9D28", light:"#D67E00", hcDark:"#EE9D28", hcLight:"#D67E00"
}, _(1641, null)), iJh=Rn("symbolIcon.enumeratorMemberForeground", {
  dark:"#75BEFF", light:"#007ACC", hcDark:"#75BEFF", hcLight:"#007ACC"
}, _(1642, null)), IvA=Rn("symbolIcon.eventForeground", {
  dark:"#EE9D28", light:"#D67E00", hcDark:"#EE9D28", hcLight:"#D67E00"
}, _(1643, null)), DvA=Rn("symbolIcon.fieldForeground", {
  dark:"#75BEFF", light:"#007ACC", hcDark:"#75BEFF", hcLight:"#007ACC"
}, _(1644, null)), rJh=Rn("symbolIcon.fileForeground", ym, _(1645, null)), sJh=Rn("symbolIcon.folderForeground", ym, _(1646, null)), BvA=Rn("symbolIcon.functionForeground", {
  dark:"#B180D7", light:"#652D90", hcDark:"#B180D7", hcLight:"#652D90"
}, _(1647, null)), RvA=Rn("symbolIcon.interfaceForeground", {
  dark:"#75BEFF", light:"#007ACC", hcDark:"#75BEFF", hcLight:"#007ACC"
}, _(1648, null)), PvA=Rn("symbolIcon.keyForeground", ym, _(1649, null)), LvA=Rn("symbolIcon.keywordForeground", ym, _(1650, null)), h5c=Rn("symbolIcon.methodForeground", {
  dark:"#B180D7", light:"#652D90", hcDark:"#B180D7", hcLight:"#652D90"
}, _(1651, null)), NvA=Rn("symbolIcon.moduleForeground", ym, _(1652, null)), MvA=Rn("symbolIcon.namespaceForeground", ym, _(1653, null)), FvA=Rn("symbolIcon.nullForeground", ym, _(1654, null)), OvA=Rn("symbolIcon.numberForeground", ym, _(1655, null)), UvA=Rn("symbolIcon.objectForeground", ym, _(1656, null)), $vA=Rn("symbolIcon.operatorForeground", ym, _(1657, null)), qvA=Rn("symbolIcon.packageForeground", ym, _(1658, null)), HvA=Rn("symbolIcon.propertyForeground", ym, _(1659, null)), JvA=Rn("symbolIcon.referenceForeground", ym, _(1660, null)), GvA=Rn("symbolIcon.snippetForeground", ym, _(1661, null)), WvA=Rn("symbolIcon.stringForeground", ym, _(1662, null)), QvA=Rn("symbolIcon.structForeground", ym, _(1663, null)), jvA=Rn("symbolIcon.textForeground", ym, _(1664, null)), zvA=Rn("symbolIcon.typeParameterForeground", ym, _(1665, null)), VvA=Rn("symbolIcon.unitForeground", ym, _(1666, null)), oJh=Rn("symbolIcon.variableForeground", {
  dark:"#75BEFF", light:"#007ACC", hcDark:"#75BEFF", hcLight:"#007ACC"
}, _(1667, null))
}
});
function KvA(n, e, t){
  if(!e)return n.map(o=>({
    kind:"action", item:o, group:m5c, disabled:!!o.action.disabled, label:o.action.disabled||o.action.title, canPreview:!!o.action.edit?.edits.length
  }));
  const i=aJh.map(o=>({
    group:o, actions:[]
  }));
  for(const o of n){
    const a=o.action.kind?new p0(o.action.kind):p0.None;
    for(const l of i)if(l.group.kind.contains(a)){
      l.actions.push(o);
      break
    }
  }
  const r=i.find(o=>o.group.kind===FA.QuickFix);
  if(r!==void 0){
    r.actions.sort((a, l)=>{
      const u=[Z6n],d=u.findIndex(p=>a.action.title.includes(p)),m=u.findIndex(p=>l.action.title.includes(p));
      return d===-1&&m===-1?0:d!==-1&&m===-1?1:d===-1&&m!==-1?-1:d-m
    });
    const o=r.actions.findIndex(a=>a.action.title.trim()===Z6n);
    r.actions=r.actions.filter((a, l, u)=>a.action.title.trim()!==Z6n||l===o).filter(a=>!a.action.title.includes("using Copilot"))
  }
  const s=[];
  for(const o of i)if(o.actions.length){
    s.push({
      kind:"header",group:o.group
    });
    for(const a of o.actions){
      const l=o.group;
      s.push({
        kind:"action",item:a,group:a.action.title.trim()===Z6n?{
          ...o.group,icon:Be.sparkle
        }
        :o.group,label:a.action.title,disabled:!!a.action.disabled,keybinding:t(a.action)
      })
    }
  }
  return s
}
var Z6n, m5c, aJh, YvA=