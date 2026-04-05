// Module: out-build/vs/editor/browser/services/genericUndoRedoElement.js
// Offset: 27525482 (bundle byte offset)
// Size: 5093 bytes

pce=class{
  get type(){
    return 0
  }
  constructor(n, e, t, i, r){
    this.label=n, this.code=e, this.resource=t, this.undos=[], this.redos=[], this.confirmBeforeUndo=!1, this.undos.push(i), this.redos.push(r)
  }
  async undo(){
    for(let n=this.undos.length-1;
    n>=0;
    n--){
      const e=this.undos[n],t=e();
      t instanceof Promise&&await t
    }
  }
  async redo(){
    for(let n=0;
    n<this.redos.length;
    n++){
      const e=this.redos[n],t=e();
      t instanceof Promise&&await t
    }
  }
  rebase(n, e, t, i, r, s, o, a){
    
  }
}
}
});
function K2A(n){
  return{
    ...n, uri:je.revive(n.uri), originalLineTokens:n.originalLineTokens?n.originalLineTokens.map(e=>({
      ...e,tokens:new Uint32Array(e.tokens.buffer)
    })):void 0
  }
}
function Y2A(n, e){
  return n.endLineNumberExclusive<=e.startLineNumber?Ztt.After:n.startLineNumber>e.endLineNumber?Ztt.Before:Ztt.Overlap
}
function hmn(n, e, t, i, r){
  const s=(t?yJ.getLegacy():yJ.getDefault()).computeDiff(n, e, {
    ignoreTrimWhitespace:!1, maxComputationTimeMs:200, computeMoves:!1, onlyCareAboutPrefixOfOriginalLines:!t, shouldGracefullyFallBackOnTimeout:!t
  });
  let o=s.changes;
  s.hitTimeout&&(console.warn("diff computation quit early, not sure what to do here"), o=[new _3(new rh(1, n.length+1), new rh(1, e.length+1), void 0)]);
  const a=[];
  let l=[];
  for(const p of o)if(p.modified.endLineNumberExclusive===e.length+1&&!t){
    if(l=n.slice(p.original.startLineNumber-1, p.original.endLineNumberExclusive-1), p.modified.isEmpty)continue;
    a.push({
      removedTextLines:[],removedLinesOriginalRange:new rh(p.original.startLineNumber,p.original.startLineNumber),addedRange:p.modified,relativeInnerChanges:void 0,removedLinesMetaData:[],addedLinesMetaData:Array(p.modified.endLineNumberExclusive-p.modified.startLineNumber).fill({
        composerGenerationID:i,toolCallID:r
      })
    })
  }
  else{
    const g=Z2A(n, e, p);
    a.push({
      removedTextLines:n.slice(p.original.startLineNumber-1,p.original.endLineNumberExclusive-1),removedLinesOriginalRange:p.original,addedRange:p.modified,relativeInnerChanges:p.innerChanges?.map(f=>({
        originalRange:f.originalRange.delta(-p.original.startLineNumber+1),modifiedRange:f.modifiedRange.delta(-p.modified.startLineNumber+1)
      })),indentation:g,removedLinesMetaData:Array(p.original.endLineNumberExclusive-p.original.startLineNumber).fill({
        composerGenerationID:i,toolCallID:r
      }),addedLinesMetaData:Array(p.modified.endLineNumberExclusive-p.modified.startLineNumber).fill({
        composerGenerationID:i,toolCallID:r
      })
    })
  }
  const u=[...e, ...l];
  let d, m=new rh(1, 1);
  return l.length>0&&(d=e.length+1, m=new rh(e.length+1, e.length+1+l.length)), {
    newFullRangeTextLines:u, changes:a, activeLine:d, pendingRange:m
  }
}
function Z2A(n, e, t){
  const i=n.slice(t.original.startLineNumber-1, t.original.endLineNumberExclusive-1), r=e.slice(t.modified.startLineNumber-1, t.modified.endLineNumberExclusive-1);
  if(!i.length||!r.length)return;
  function s(a){
    let l=0;
    for(const u of a)if(u===" "||u==="	")l+=1;
    else break;
    return l
  }
  const o=s(i[0]);
  for(let a=0;
  a<=r.length-i.length;
  a++){
    const l=r[a];
    if(l===void 0)continue;
    const u=s(l), d=u-o;
    let m=!0;
    for(let p=0;
    p<i.length;
    p++){
      const g=i[p],f=r[a+p];
      if(f===void 0){
        m=!1;
        break
      }
      let A;
      if(d>=0?A=X2A(f,d):A=eFA(f,-d),g.trim()!==A.trim()){
        m=!1;
        break
      }
    }
    if(m){
      const p=u-o;
      return{
        range:new rh(t.modified.startLineNumber+a,t.modified.startLineNumber+a+i.length),level:p
      }
    }
  }
}
function X2A(n, e){
  let t=0;
  const i=4;
  let r=0;
  for(;
  r<n.length&&t<e;
  r++)if(n[r]===" ")t+=1;
  else if(n[r]==="	")t+=i;
  else break;
  return n.substring(r)
}
function eFA(n, e){
  let i="";
  for(;
  e>=4;
  )i+="	", e-=4;
  return i+=" ".repeat(e), i+n
}
function tFA(n, e, t){
  const i=t.object.textEditorModel, r=i.getLineCount();
  let s;
  if(r===0)s=new Zt(1, 1, 1, 1);
  else{
    const u=zA(e.currentRange.startLineNumber, 1, r), d=zA(e.currentRange.endLineNumberExclusive, 1, r+1), m=Math.max(d, u);
    s=u<m?new Zt(u, 1, m-1, i.getLineMaxColumn(m-1)):new Zt(u, 1, u, 1)
  }
  const o=[], a=s.isEmpty()?[]:i.getValueInRange(s).split(i.getEOL()), l=yJ.getLegacy().computeDiff(a, n.newFullRangeTextLines, {
    ignoreTrimWhitespace:!1, computeMoves:!1, maxComputationTimeMs:200
  });
  if(l.hitTimeout){
    console.warn("INLINEDIFF QUITTING EARLY, doing big slow edit");
    let u=n.newFullRangeTextLines.join(i.getEOL());
    s.isEmpty()&&(u+=i.getEOL());
    const d={
      range:s,text:u,forceMoveMarkers:!0
    };
    o.push(d)
  }
  else for(const u of l.changes){
    let d=n.newFullRangeTextLines.slice(u.modified.startLineNumber-1, u.modified.endLineNumberExclusive-1).join(i.getEOL()), m;
    if(u.original.isEmpty){
      const g=s.startLineNumber+u.original.startLineNumber-1;
      m=new Zt(g,1,g,1),g===i.getLineCount()&&i.getLineContent(g).length===0||(d+=i.getEOL())
    }
    else if(u.modified.isEmpty){
      if(m=new Zt(s.startLineNumber+u.original.startLineNumber-1,1,s.startLineNumber+u.original.endLineNumberExclusive-1,1),m.endLineNumber>i.getLineCount()){
        let g=i.getLineCount(),f=1,A=m.startLineNumber;
        A>1&&(A--,f=t.object.textEditorModel.getLineMaxColumn(A)),m=new Zt(A,f,g,t.object.textEditorModel.getLineMaxColumn(g))
      }
      d=null
    }
    else m=new Zt(s.startLineNumber+u.original.startLineNumber-1, 1, s.startLineNumber+u.original.endLineNumberExclusive-1-1, i.getLineMaxColumn(s.startLineNumber+u.original.endLineNumberExclusive-1-1));
    const p={
      range:m,text:d,forceMoveMarkers:!0
    };
    o.push(p)
  }
  return o
}
var Ztt, mJg=