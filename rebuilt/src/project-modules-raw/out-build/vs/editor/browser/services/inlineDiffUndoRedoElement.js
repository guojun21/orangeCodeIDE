// Module: out-build/vs/editor/browser/services/inlineDiffUndoRedoElement.js
// Offset: 27530810 (bundle byte offset)
// Size: 4318 bytes

XZ=class{
  get type(){
    return 0
  }
  constructor(n, e, t, i, r, s, o=!1){
    this.label=n, this.code=e, this.diffId=t, this.resource=i, this.skipIntermediateSteps=o, this.undos=[], this.redos=[], this.confirmBeforeUndo=!1, this.undos.push(r), this.redos.push(s)
  }
  push(n, e){
    this.skipIntermediateSteps&&e?this.redos.push(...n.redos):this.skipIntermediateSteps||(this.undos.push(...n.undos), this.redos.push(...n.redos))
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
  rebase(){
    
  }
  toString(){
    return`InlineDiffUndoRedoElement: ${this.label}`
  }
}
}
});
function gJg(n, e, t, i){
  const{
    isThemed:r
  }
  =t, s=t.showRemovedChanges??!0, o=t.showInsertedLineBackgrounds??!0, a=[], l=n.currentRange.startLineNumber;
  for(const u of n.changes){
    const d=l+u.addedRange.startLineNumber-1;
    if(u.addedRange.startLineNumber===u.addedRange.endLineNumberExclusive&&u.removedTextLines.length>0){
      if(!s)continue;
      const C=new Zt(d,0,d,0);
      a.push({
        range:C,options:{
          description:"inline-diff-pure-deletion",overviewRuler:{
            position:Tx.Left,color:b9(sOt)
          },minimap:{
            position:1,color:b9(sOt)
          }
        }
      });
      continue
    }
    if(u.addedRange.startLineNumber===u.addedRange.endLineNumberExclusive)continue;
    const p=new Zt(d, 0, l+u.addedRange.endLineNumberExclusive-1-1, 0);
    s&&a.push({
      range:p,options:{
        description:"inline-diff-removed"
      }
    });
    const f=o?`inline-diff-added ${r?"inline-diff-added-color":"inline-diff-added-color-unthemed"}`:"inline-diff-added", A="inline-diff-added-lines", w=nFA(u, l, d, p, r, o, f, A, i);
    w?a.push(...w):a.push({
      range:p,options:{
        description:f,className:f,inlineClassName:A,isWholeLine:!0,overviewRuler:{
          position:Tx.Right,color:b9(ZBe)
        },minimap:{
          position:1,color:b9(ZBe)
        }
      }
    })
  }
  if(e&&n.streamingState){
    const u=iFA(n, l);
    a.push(...u)
  }
  return a
}
function nFA(n, e, t, i, r, s, o, a, l){
  if(!n.indentation)return null;
  let u, d, m, p="";
  try{
    u=e+n.indentation.range.startLineNumber-1, d=e+n.indentation.range.endLineNumberExclusive-1-1, l?(m=new Zt(u, 1, d, l.getLineMaxColumn(d)), p=l.getValueInRange(m)):(m=new Zt(u, 1, d, 1), p="placeholder")
  }
  catch{
    return null
  }
  if(!p.trim()||!u||!d||!m)return null;
  const g=[];
  if(s)for(let f=u;
  f<=d;
  f++)g.push({
    range:new Zt(f, 1, f, n.indentation.level+1), options:{
      description:"inline-diff-indent-change",className:n.indentation.level>0?"inline-diff-indentation-increased":"inline-diff-indentation-decreased"
    }
  });
  if(u>t){
    const f=new Zt(t, 0, u-1, 0);
    g.push({
      range:f,options:{
        description:o,className:o,inlineClassName:a,isWholeLine:!0,overviewRuler:{
          position:Tx.Right,color:b9(ZBe)
        },minimap:{
          position:1,color:b9(ZBe)
        }
      }
    })
  }
  if(d<i.endLineNumber){
    const f=new Zt(d+1, 0, i.endLineNumber, 0);
    g.push({
      range:f,options:{
        description:o,className:o,inlineClassName:a,isWholeLine:!0,overviewRuler:{
          position:Tx.Right,color:b9(ZBe)
        },minimap:{
          position:1,color:b9(ZBe)
        }
      }
    })
  }
  return s&&g.push({
    range:m, options:{
      description:"inline-diff-indented-subset",className:r?"inline-diff-indented-subset":"inline-diff-indented-subset-unthemed",isWholeLine:!0
    }
  }), g
}
function iFA(n, e){
  const t=[], i=n.streamingState;
  if(!i)return t;
  if(i.activeLine){
    const r=e+i.activeLine-1;
    t.push({
      range:new Zt(r,0,r,0),options:{
        description:"inline-diff-current",className:"inline-diff-current",isWholeLine:!0
      }
    })
  }
  if(i.pendingRange){
    const r=i.pendingRange.startLineNumber, s=i.pendingRange.endLineNumberExclusive;
    if(r!==s){
      const o=new Zt(e+r-1,0,e+s-1-1,0);
      t.push({
        range:o,options:{
          description:"inline-diff-pending",className:"inline-diff-pending",isWholeLine:!0
        }
      })
    }
  }
  return t
}
function mmn(n, e){
  if(n.changes.length===0)return;
  const t=e.lineNumber, i=s=>{
    const o=Xtt(n, s);
    return Math.min(Math.abs(t-o.startLineNumber), Math.abs(t-o.endLineNumber))
  };
  let r=0;
  for(let s=1;
  s<n.changes.length;
  s++)i(n.changes[s])<i(n.changes[r])&&(r=s);
  return n.changes[r]
}
function Ffa(n, e, t){
  const i=Xtt(n, e);
  return e.addedRange.startLineNumber===e.addedRange.endLineNumberExclusive&&e.removedTextLines.length>0?Math.min(i.startLineNumber, t):Math.min(i.endLineNumber+1, t)
}
function Xtt(n, e){
  const t=n.currentRange.startLineNumber, i=t+e.addedRange.startLineNumber-1;
  if(e.addedRange.startLineNumber===e.addedRange.endLineNumberExclusive)return new Zt(i, 1, i, 1);
  const r=t+e.addedRange.endLineNumberExclusive-1-1;
  return new Zt(i, 1, r, 1)
}
var Fvi=