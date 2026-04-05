// Module: out-build/vs/workbench/contrib/reviewChanges/browser/components/ReviewChangesEllipsisMenu.js
// Offset: 34118602 (bundle byte offset)
// Size: 4564 bytes

Ie(), Ie(), Ie(), nl(), qi(), ml(), Jr(), es(), Ek(), jqf=qe("<div class=agent-layout-multi-diff-ellipsis-button><div class=agent-layout-multi-diff-ellipsis-icon><span>")
}
});
function Vqf(n){
  const e=new Map;
  for(const t of n)if(t.logsPath){
    const i=je.file(t.logsPath), r=Wr(), s=fd(t.logsPath);
    e.set(t.check.name, {
      logsPath:t.logsPath,uri:i,uuid:r,fileName:s
    })
  }
  return e
}
function Kqf(n, e, t){
  const i=Spy(n, e, t), r=JSON.stringify({
    root:{
      type:"root",version:1,children:i,format:"",indent:0,direction:"ltr"
    }
  }), s=xpy(n, e, t);
  return{
    richText:r, plainText:s
  }
}
function Spy(n, e, t){
  const i=[];
  if(i.push(Yqf(`CI failures for PR #${n}. Please analyze these CI logs and help fix the issues:`)), i.push(kpy()), e.length>0){
    i.push(Yqf("Failed checks:"));
    for(const r of e){
      const s=t.get(r.name);
      i.push(Epy(r.name,s))
    }
  }
  return i
}
function Yqf(n){
  return{
    type:"paragraph", version:1, format:"", indent:0, direction:"ltr", children:[{
      type:"text",version:1,detail:0,format:0,mode:"normal",style:"",text:n
    }
    ]
  }
}
function kpy(){
  return{
    type:"paragraph", version:1, format:"", indent:0, direction:"ltr", children:[]
  }
}
function Epy(n, e){
  const t=[{
    type:"text", version:1, detail:0, format:0, mode:"normal", style:"", text:`- ${n}`
  }
  ];
  return e&&(t.push({
    type:"text", version:1, detail:0, format:0, mode:"normal", style:"", text:" "
  }), t.push({
    type:"mention", version:1, detail:0, format:0, mode:"segmented", style:"", text:`@${e.logsPath}`, mentionName:e.fileName, typeaheadType:"file", storedKey:`file:${e.uri.toString()}`, uuid:e.uuid
  })), {
    type:"paragraph", version:1, format:"", indent:0, direction:"ltr", children:t
  }
}
function xpy(n, e, t){
  const i=[`CI failures for PR #${n}. Please analyze these CI logs and help fix the issues:`, ""];
  if(e.length>0){
    i.push("Failed checks:");
    for(const r of e){
      const s=t.get(r.name);
      s?i.push(`- ${r.name} @${s.logsPath}`):i.push(`- ${r.name}`)
    }
  }
  return i.join(`
`)
}
async function Tpy(n){
  const{
    checkStatus:e, prNumber:t, services:i
  }
  =n;
  let r=i.composerDataService.selectedComposerId;
  r||(r=(await i.composerService.createComposer({
    partialState:{
      unifiedMode:"agent"
    }, openInNewTab:!1
  }))?.composerId??"");
  const s=i.composerDataService.getHandleIfLoaded_MIGRATED(r);
  if(!s){
    console.error("[addMultipleChecksToChat] No composer data handle found");
    return
  }
  const o=i.workspaceContextService.getWorkspace();
  if(!o.folders||o.folders.length===0)return;
  const a=await kie(o, i.pathService), l=Ryi(a), u=je.joinPath(l, `pr-${t}`), d=je.joinPath(u, "checks");
  await i.fileService.createFolder(d);
  const m=e.checks.filter(x=>x.status==="failure"), p=m.filter(x=>x.detailsUrl).map(async x=>{
    try{
      const I=await i.githubPRService.getJobLogs(x.detailsUrl,t,x.databaseId,x.name);
      return{
        check:x,logsPath:I?.logsPath
      }
    }
    catch(I){
      return console.error(`[addCIFailuresToChat] Failed to fetch logs for ${x.name}:`,I),{
        check:x,logsPath:void 0
      }
    }
  }), g=await Promise.all(p), f=Vqf(g), A=[];
  for(const[, x]of f)A.push({
    uri:x.uri, uuid:x.uuid
  });
  A.length>0&&i.composerDataService.updateComposerDataSetStore(s, x=>x("context", "fileSelections", I=>[...I||[], ...A]));
  const{
    richText:w, plainText:C
  }
  =Kqf(t, m, f);
  i.composerDataService.updateComposerData(s, {
    text:C, richText:w
  }), i.composerEventService.fireShouldForceText({
    composerId:r
  }), i.composerService.handleOpenComposer(r, {
    focusMainInputBox:!0, insertSelection:!1
  })
}
async function Ipy(n){
  const{
    check:e, prNumber:t, services:i
  }
  =n;
  let r=i.composerDataService.selectedComposerId;
  r||(r=(await i.composerService.createComposer({
    partialState:{
      unifiedMode:"agent"
    }, openInNewTab:!1
  }))?.composerId??"");
  const s=i.composerDataService.getHandleIfLoaded_MIGRATED(r);
  if(!s){
    console.error("[addSingleCheckToChat] No composer data handle found");
    return
  }
  const o=i.workspaceContextService.getWorkspace();
  if(!o.folders||o.folders.length===0)return;
  const a=await kie(o, i.pathService), l=Ryi(a), u=je.joinPath(l, `pr-${t}`), d=je.joinPath(u, "checks");
  await i.fileService.createFolder(d);
  let m;
  if(e.detailsUrl)try{
    m=(await i.githubPRService.getJobLogs(e.detailsUrl, t, e.databaseId, e.name))?.logsPath
  }
  catch(w){
    console.error(`[addSingleCheckToChat] Failed to fetch logs for ${e.name}:`, w)
  }
  const p=Vqf(m?[{
    check:e, logsPath:m
  }
  ]:[]), g=[];
  for(const[, w]of p)g.push({
    uri:w.uri, uuid:w.uuid
  });
  g.length>0&&i.composerDataService.updateComposerDataSetStore(s, w=>w("context", "fileSelections", C=>[...C||[], ...g]));
  const{
    richText:f, plainText:A
  }
  =Kqf(t, [e], p);
  i.composerDataService.updateComposerData(s, {
    text:A, richText:f
  }), i.composerEventService.fireShouldForceText({
    composerId:r
  }), i.composerService.handleOpenComposer(r, {
    focusMainInputBox:!0, insertSelection:!1
  })
}
var Dpy=