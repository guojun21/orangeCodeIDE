// Module: out-build/vs/workbench/services/selectedContext/browser/selectedContextData.js
// Offset: 25043303 (bundle byte offset)
// Size: 8019 bytes

Yn(), tV(), Ebg=["composers", "selectedCommits", "selectedPullRequests", "gitDiff", "gitDiffFromBranchToMain", "selectedImages", "folderSelections", "fileSelections", "terminalFiles", "selections", "terminalSelections", "selectedDocs", "externalLinks", "diffHistory", "cursorRules", "cursorCommands", "uiElementSelections", "consoleLogs", "ideEditorsState", "gitPRDiffSelections", "subagentSelections", "browserSelections"], Oet=Ebg, rV=n=>["selections", "fileSelections", "folderSelections", "selectedDocs", "selectedCommits", "selectedPullRequests", "terminalSelections", "terminalFiles", "externalLinks", "selectedImages", "composers", "cursorRules", "cursorCommands", "gitPRDiffSelections", "subagentSelections", "browserSelections"].includes(n), xbg=n=>JSON.stringify({
  uri:je.revive(n.uri).toString(), range:n.range, text:n.text
}), Tbg=["selections", "fileSelections", "folderSelections", "terminalSelections", "terminalFiles", "cursorRules", "cursorCommands", "selectedCommits", "selectedPullRequests", "selectedDocs", "externalLinks", "selectedImages", "composers", "symbols", "gitPRDiffSelections", "uiElementSelections", "consoleLogs", "workflows", "subagentSelections", "browserSelections"], Ibg=["gitDiff", "gitDiffFromBranchToMain", "ideEditorsState"]
}
});
function mL(n){
  return JSON.parse(JSON.stringify(n))
}
function GWl(n){
  return je.revive(n.uri).toString()
}
function Uet(n, e, t){
  switch(n){
    case"file":{
      const i=e;
      if(!i)return t;
      try{
        const r=je.revive(i.uri);
        return r.fsPath||r.path
      }
      catch{
        return t
      }
    }
    case"commit":if(e?.sha){
      const i=e;
      return`Commit: ${i.sha.slice(0,7)} "${i.message}"`
    }
    return;
    case"pr":if(e?.number){
      const i=e;
      return i.title?`PR #${i.number}: ${i.title}`:`Pull Request #${i.number}`
    }
    return;
    case"diff":return"Current changes in the repository";
    case"diffToMain":return"Changes from current branch to main branch";
    case"image":return"Image";
    case"web":return"Enable web search capability";
    case"playwrightMcp":return"Enables computer use";
    case"folder":return e?.relativePath||t;
    case"terminalFile":return e?.uri?.path||t;
    case"terminal":if(e?.range){
      const i=e;
      return`Terminal selection from line ${i.range.selectionStartLineNumber} to ${i.range.positionLineNumber}`
    }
    return t;
    case"composer":return t?`Composer: ${t}`:"Composer";
    case"cursorRules":return`Cursor rule: ${e||t}`;
    case"ideEditorsState":return"hello world";
    case"docs":return`Documentation: ${t||e}`;
    case"cursorCommand":return`Command: ${t||e}`;
    default:return t
  }
}
function Vun(n){
  if(n===void 0)return;
  const e=n.split(`
`), t=e.filter(s=>s.trim().length>0), i=Math.min(...t.map(s=>s.search(/\S|$/)));
  return e.map(s=>s.trim().length===0?s:s.slice(i)).join(`
`)
}
async function ila(n, e, t){
  let i;
  try{
    i=await n.createModelReference(e);
    const r=i.object.textEditorModel;
    let s;
    t===void 0?s=r.getFullModelRange():s=t;
    const o=Math.max(s.startLineNumber, 1), a=Math.max(s.startColumn, 1), l=Math.min(s.endLineNumber, r.getLineCount()), u=Math.min(r.getLineMaxColumn(l), s.endColumn), d=new Zt(o, a, l, u);
    return await WWl({
      model:r,inBoundsSelectionRange:d
    })
  }
  finally{
    i?.dispose()
  }
}
async function WWl({
  model:n, inBoundsSelectionRange:e
}){
  let t, i, r;
  return i=n?.getValueInRange(e), t=Vun(i), t=`\`\`\`${n?.getLanguageIdAtPosition(e.startLineNumber,e.startColumn)??""}
${t??""}
\`\`\``, r=n?.uri, {
    text:t, rawText:i, range:{
      selectionStartLineNumber:e.startLineNumber,selectionStartColumn:e.startColumn,positionLineNumber:e.endLineNumber,positionColumn:e.endColumn
    }, uri:r
  }
}
function QWl(n, e, t){
  if(t=t??!0, !n||n?.isEmpty())return;
  let i=n;
  t&&(i=i.setStartPosition(n.startLineNumber, 1));
  const r=e?.getLineMaxColumn(n.endLineNumber)??n.endColumn;
  return t&&(i=i.setEndPosition(n.endLineNumber, r)), i
}
async function Dbg(n, e, t){
  let i=t??n.getLastActiveFileEditor()?.getControl(), r, s, o, a;
  if(i){
    let l;
    if("activeCodeEditor"in i&&(i=i.activeCodeEditor), Ig(i))l=i.getModel()??void 0, e?r=e:r=QWl(i.getSelection()??void 0, l);
    else if(iB(i)){
      const u=i.getModel();
      u&&(l=u.modified,r=QWl(i.getSelection()??void 0,u.modified))
    }
    if(r===void 0)return;
    if(o=l?.getValueInRange(r), a=l?.uri, s=Vun(o), s){
      let u=l?.getLanguageId();
      u||(u=l?.getLanguageIdAtPosition(r.startLineNumber,r.startColumn)??""),s=`\`\`\`${u}
${s??""}
\`\`\``
    }
    else return
  }
  else return;
  if(s&&r&&a)return{
    text:s, rawText:o, range:{
      selectionStartLineNumber:r.startLineNumber,selectionStartColumn:r.startColumn,positionLineNumber:r.endLineNumber,positionColumn:r.endColumn
    }, uri:a
  }
}
async function _CA(n, e, t){
  let i=t??n.getLastActiveFileEditor()?.getControl()??e.getActiveCodeEditor()??e.getFocusedCodeEditor()??null;
  if(!i)return[];
  const r=[];
  let s, o;
  if(i&&"activeCodeEditor"in i&&(i=i.activeCodeEditor), Ig(i))s=i.getModel()??void 0, o=i.getSelections()??void 0;
  else if(iB(i)){
    const a=i.getModel();
    a&&(s=a.modified, o=i.getSelections()??void 0)
  }
  if(!s||!o||o.length===0)return r;
  for(const a of o){
    const l=QWl(a, s);
    if(!l)continue;
    let u=s.getValueInRange(l);
    const d=s.uri;
    let m=Vun(u);
    if(!m)continue;
    let p=s.getLanguageId();
    p||(p=s.getLanguageIdAtPosition(l.startLineNumber, l.startColumn)??""), m=`\`\`\`${p}
${m??""}
\`\`\``, r.push({
      text:m,rawText:u,range:{
        selectionStartLineNumber:l.startLineNumber,selectionStartColumn:l.startColumn,positionLineNumber:l.endLineNumber,positionColumn:l.endColumn
      },uri:d
    })
  }
  return r
}
async function jWl(n, e=!1, t){
  const i=n.activeInstance;
  if(!i||!i.xterm)return;
  let s, o;
  if(i.hasSelection())s=i.selection, o=i.selectionRange;
  else{
    if(e)return;
    const m=i.selectedCommand();
    if(!m)return;
    let p=m.executedMarker?.line;
    const g=m.endMarker?.line;
    if(p===void 0||g===void 0||p>g)return;
    t&&(p=Math.max(g-t, p));
    const f=i.xterm?.getBufferLines(p-1, g);
    s=f.join(`
`), o=new Vl(p, 1, g, f[f.length-1].length)
  }
  if(!s||!o)return;
  const l=`\`\`\`bash
${Vun(s)??""}
\`\`\``, u=i.resource, d=u?{
    scheme:u.scheme, authority:u.authority, path:u.path, query:u.query, fragment:u.fragment
  }
  :rla;
  return{
    text:l, rawText:s, range:o, uri:d
  }
}
async function CCA(n){
  let e=n.text;
  const t=n.range;
  let i=n.languageId;
  const r=n.uri;
  let s=Vun(e);
  if(s)s=`\`\`\`${i}
${s??""}
\`\`\``;
  else return;
  if(s&&t)return{
    text:s, rawText:e, range:t, uri:r??rla
  }
}
async function Bbg(n, e){
  const t=await ila(n, je.revive(e.uri));
  if(t!==void 0)return{
    ...t, uuid:e.uuid, summarizationStrategy:e.summarizationStrategy
  }
}
async function Rbg(n, e, t){
  const i=je.parse(t.docId+"_pages");
  let r=await n.getPages({
    docIdentifier:t.docId
  });
  const s=r.pages.reduce((a, l, u)=>(l!==""&&a.push({
    page:l, url:r.pageUrls[u]
  }), a), []);
  let o="";
  return s.length>0&&(o=s.map(l=>`
- [${l.page}](${l.url})`).join("")), {
    name:t.name, uuid:t.uuid, text:o, uri:i, url:t.url, doc:e.applicationUserPersistentStorage.personalDocs.find(a=>a.identifier===t.docId)
  }
}
async function Pbg(n, e){
  let t;
  e==nae.DIFF_FROM_BRANCH_TO_MAIN?t=await n.getDiffDetailsFromGitDiff({
    gitDiff:void 0, gitDiffFromBranchToMain:!0
  }):t=await n.getDiffDetailsFromGitDiff({
    gitDiff:!0, gitDiffFromBranchToMain:void 0
  });
  let i="", r=[];
  for(const s of t){
    s.diffType===nae.DIFF_FROM_BRANCH_TO_MAIN?i=Zpi:s.diffType===nae.DIFF_TO_HEAD&&(i=Zca);
    for(const o of s.diffs)r.push(o)
  }
  return{
    title:i, diffs:r
  }
}
async function SCA(n, e){
  const t=[e], i=await n.getCommitDetailsFromPartialCommits(t);
  let r=[];
  if(i.length===0)return{
    title:"", diffs:r
  };
  const s=i[0];
  for(const o of s.diff)r.push(o);
  return{
    title:s.message, diffs:r
  }
}
async function Lbg(n, e){
  const t=n.getInstanceFromResource(e);
  if(!t||!t.xterm)return;
  let i="", r=0, s=0;
  for(const m of t.xterm.getBufferReverseIterator()){
    if(i.length+m.length>Fbg)break;
    i=m+(i?`
`+i:""), r++, r===1&&(s=m.length)
  }
  const o=t.xterm.getBufferLength(), a=Math.max(1, o-r+1), l=o, u=t.resource, d=u?{
    scheme:u.scheme, authority:u.authority, path:u.path, query:u.query, fragment:u.fragment
  }
  :rla;
  return{
    text:`\`\`\`bash
${i}
\`\`\``, rawText:i, range:{
      selectionStartLineNumber:a,selectionStartColumn:1,positionLineNumber:l,positionColumn:s
    }, uri:d
  }
}
function igi(n, e){
  if(Q1e(n.workbenchEnvironmentService.remoteAuthority)!==void 0||!e)return!1;
  const t=n.composerDataService.getComposerData(e);
  return n.composerModesService.getComposerUnifiedMode(e.composerId)==="background"||t?.createdFromBackgroundAgent?.bcId!==void 0
}
var Kun, gCt, Nbg, Mbg, zWl, rla, Fbg, gE=