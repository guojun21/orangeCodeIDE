// Module: out-build/vs/workbench/contrib/reviewChanges/browser/components/CIStatusIndicator.js
// Offset: 34132761 (bundle byte offset)
// Size: 3896 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), qi(), Jr(), es(), dxe(), c7(), Dpy(), Bpy(), iBa(), Zqf=qe("<span><span class=ci-status-count__icon></span><span class=ci-status-count__value>"), p1i=qe("<span>"), Xqf=qe('<button class=ci-popup-item__chat-button title="Add to Chat">'), e7f=qe("<div><span></span><span class=ci-popup-item__name></span><div class=ci-popup-item__actions>"), t7f=qe("<span class=ci-popup-item__name>Running..."), n7f=qe('<div class="ci-status-popup__group ci-status-popup__group--bugbot"><div class=ci-status-popup__group-header>Bugbot</div><div class="ci-popup-item ci-popup-item--bugbot">'), i7f=qe("<div class=ci-status-popup__group><div class=ci-status-popup__group-header> failed"), r7f=qe("<div class=ci-status-popup__group><div class=ci-status-popup__group-header> running"), s7f=qe("<div class=ci-status-popup__group><div class=ci-status-popup__group-header> passed"), o7f=qe("<div class=ci-status-popup__group><div class=ci-status-popup__group-header> neutral"), a7f=qe("<div class=ci-status-popup__group><div class=ci-status-popup__group-header> skipped"), c7f=qe("<button class=ci-status-popup__add-all-button><span>Add failed to Chat"), l7f=qe('<span title="Open in GitHub">'), u7f=qe("<div class=ci-status-popup__footer>"), d7f=qe("<div class=ci-status-popup><div class=ci-status-popup__content>"), h7f=qe("<span class=ci-popup-item__name>"), m7f=qe("<button type=button class=ci-popup-item__fix-all-button>Fix all"), p7f=qe('<div class="smart-review-panel__meta-section smart-review-panel__checks-section"><span class=smart-review-panel__changes-label>Checks</span><div class="smart-review-panel__meta-section-content smart-review-panel__hoverable-inline">'), cBa=qe("<i>")
}
});
function g7f(n){
  return n.replace(/\r\n/g, `
`).replace(/\r/g, `
`)
}
function Opy(n){
  const e=n.trimStart();
  if(!e.startsWith(">"))return n;
  const t=e.slice(1);
  return t.startsWith(" ")?t.slice(1):t
}
function Upy(n){
  const e=n.trim();
  return/^-\s+\*\*[^*]+?\*\*:\s*$/.test(e)
}
function $py(n){
  return n.trimStart().startsWith("- ")
}
function qpy(n){
  return/^[ \t]{
    2, 
  }
  -\s+/.test(n)
}
function Hpy(n){
  return n.replace(/\s+$/, "")
}
function Jpy(n){
  const t=g7f(n).split(`
`), i=[];
  for(const u of t){
    const d=u.replace(/\s+$/, "");
    if(d.trim()===""){
      i.push(d);
      continue
    }
    const m=d.trimStart();
    if(m.startsWith(">")){
      i.push(d);
      continue
    }
    const p=m;
    let g=i.length-1;
    for(;
    g>=0&&i[g].trim()==="";
    )g--;
    if(g<0){
      i.push(`> ${p}`);
      continue
    }
    i[g]=`${i[g].replace(/\s+$/,"")} ${p}`
  }
  const r=i.map(u=>{
    const d=Opy(u);
    return u.trimStart().startsWith(">")&&d.trim()===""?"":d
  }), s=r.findIndex(u=>u.trim()!=="");
  if(s!==-1){
    const d=r[s].trim().match(/^\[\!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:\s+(.*))?$/i);
    if(d){
      const m=d[1].toUpperCase(),p=d[2]?.trim();
      r[s]=`**${DCu[m]??m}**`;
      const g=[""];
      p&&g.push(p),r.splice(s+1,0,...g)
    }
  }
  const o=[];
  let a=!1;
  for(const u of r){
    const d=u.trim();
    if(d===""){
      o.push("");
      continue
    }
    if(Upy(u)){
      a=!0,o.push(d);
      continue
    }
    if($py(u)){
      const m=Hpy(u);
      a&&!qpy(m)?o.push(`  ${m.trimStart()}`):o.push(m);
      continue
    }
    o.push(u.trimEnd())
  }
  return o.map(u=>u.trim()===""?">":`> ${u}`).join(`
`).trim()
}
function Gpy(n){
  const e=n.split(`
`), t=[];
  let i=0;
  for(;
  i<e.length;
  ){
    const r=e[i], s=r.trimStart();
    if(s.startsWith(">")){
      const a=s.slice(1).trim().match(/^\[\!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:\s+(.*))?$/i);
      if(a){
        const l=a[1].toUpperCase(),u=a[2]?.trim();
        t.push(`> **${DCu[l]??l}**`),t.push(">"),u&&t.push(`> ${u}`),i++;
        continue
      }
    }
    t.push(r), i++
  }
  return t.join(`
`)
}
function ICu(n){
  let e=g7f(n), t=!1;
  for(;
  ;
  ){
    const i=f7f.exec(e);
    if(!i||i.index===void 0)break;
    const r=i.index, s=r+i[0].length, o=e.slice(s), a=b7f.exec(o);
    if(!a||a.index===void 0){
      e=`${e.slice(0,r)}${e.slice(s)}`,t=!0;
      break
    }
    const l=s+a.index, u=l+a[0].length, d=e.slice(s, l), m=Jpy(d);
    e=`${e.slice(0,r)}
${m}
${e.slice(u)}`
  }
  return t||(e=Gpy(e)), e
}
var DCu, f7f, b7f, BCu=