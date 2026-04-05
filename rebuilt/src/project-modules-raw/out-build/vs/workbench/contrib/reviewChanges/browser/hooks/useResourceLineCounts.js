// Module: out-build/vs/workbench/contrib/reviewChanges/browser/hooks/useResourceLineCounts.js
// Offset: 34056006 (bundle byte offset)
// Size: 1640 bytes

Ti()
}
});
async function gqf(n, e, t, i){
  if(n)try{
    return(await n).object.textEditorModel.getLinesContent()
  }
  catch(r){
    console.error("[ReviewChanges] Failed to read diff model contents", r)
  }
  if(typeof t=="string")return t.split(/\r?\n/);
  if(i)try{
    return(await e.readFile(i)).value.toString().split(/\r?\n/)
  }
  catch{
    
  }
  return[]
}
function fqf(n, e, t){
  const i=Math.max(0, e-1), r=Math.max(i, t-1);
  return n.slice(i, r)
}
async function ppy(n, e){
  const t=n.modifiedUri||n.goToFileUri||n.originalUri;
  if(!t)return;
  const[i, r]=await Promise.all([gqf(n.originalModel, e, n.originalContents, n.originalUri??t), gqf(n.modifiedModel, e, n.modifiedContents, t)]);
  if(i.length===0&&r.length===0)return;
  const o=yJ.getDefault().computeDiff(i, r, {
    ignoreTrimWhitespace:!1, maxComputationTimeMs:1e3, computeMoves:!1
  });
  if(o.changes.length===0)return;
  const a=[];
  let l=1/0, u=0;
  for(const A of o.changes){
    const w=Math.max(1, A.original.startLineNumber), C=Math.max(1, A.modified.startLineNumber), x=A.original.length, I=A.modified.length;
    l=Math.min(l, C);
    const B=C+Math.max(0, I-1);
    u=Math.max(u, B), a.push(`@@ -${w},${x} +${C},${I} @@`);
    const R=x>0?fqf(i, w, A.original.endLineNumberExclusive):[], N=I>0?fqf(r, C, A.modified.endLineNumberExclusive):[];
    for(const M of R)a.push(`-${M}`);
    for(const M of N)a.push(`+${M}`)
  }
  const d=l===1/0?1:l, m=u===0?d:u;
  let p=a;
  a.length>ACu&&(p=a.slice(0, ACu), p.push("... diff truncated ..."));
  let g=p.join(`
`);
  g.length>yCu&&(g=g.slice(0, yCu)+`
... diff truncated ...`);
  const f=g.split(/\r?\n/).length;
  return{
    diffText:g, lineCount:f, uri:t, startLine:d, endLine:m
  }
}
var ACu, yCu, gpy=