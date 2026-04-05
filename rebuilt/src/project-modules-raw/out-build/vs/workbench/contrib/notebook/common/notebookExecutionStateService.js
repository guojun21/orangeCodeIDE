// Module: out-build/vs/workbench/contrib/notebook/common/notebookExecutionStateService.js
// Offset: 25022868 (bundle byte offset)
// Size: 796 bytes

Wt(), (function(n){
  n[n.cell=0]="cell", n[n.notebook=1]="notebook"
})(vJ||(vJ={
  
})), pE=xi("INotebookExecutionStateService")
}
});
function uCA(n){
  const e=Array.from(Efg(n));
  if(e.length)return e;
  const t=n.match(/<h([1-6]).*>(.*)<\/h\1>/i);
  if(t){
    const i=parseInt(t[1]), r=t[2].trim();
    e.push({
      depth:i,text:r
    })
  }
  return e
}
function PWl(n, e){
  const t=[];
  return n.forEach(i=>{
    t.push({
      name:i.name,range:i.range,level:e,kind:i.kind
    }), i.children&&t.push(...PWl(i.children, e+1))
  }), t
}
function dCA(n){
  const e=n.textBuffer;
  for(let t=0;
  t<e.getLineCount();
  t++){
    const i=e.getLineFirstNonWhitespaceColumn(t+1), r=e.getLineLength(t+1);
    if(i<r)return e.getLineContent(t+1)
  }
  return n.getText().substring(0, 100)
}
var Qfg, LWl, Kca, NWl=