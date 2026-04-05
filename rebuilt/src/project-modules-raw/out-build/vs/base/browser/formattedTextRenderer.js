// Module: out-build/vs/base/browser/formattedTextRenderer.js
// Offset: 2077898 (bundle byte offset)
// Size: 903 bytes

ri(), o0h=class{
  constructor(n){
    this.source=n, this.index=0
  }
  eos(){
    return this.index>=this.source.length
  }
  next(){
    const n=this.peek();
    return this.advance(), n
  }
  peek(){
    return this.source[this.index]
  }
  advance(){
    this.index++
  }
}, (function(n){
  n[n.Invalid=0]="Invalid", n[n.Root=1]="Root", n[n.Text=2]="Text", n[n.Bold=3]="Bold", n[n.Italics=4]="Italics", n[n.Action=5]="Action", n[n.ActionClose=6]="ActionClose", n[n.Code=7]="Code", n[n.NewLine=8]="NewLine"
})(a0h||(a0h={
  
}))
}
});
function a_(n){
  const e=new Array;
  let t, i=0, r=0;
  for(;
  (t=c0h.exec(n))!==null;
  ){
    r=t.index||0, i<r&&e.push(n.substring(i, r)), i=(t.index||0)+t[0].length;
    const[, s, o, a]=t;
    e.push(s?`$(${o}${a?`#${
      a
    }
    `:""})`:tL({
      id:o
    }, a))
  }
  return i<n.length&&e.push(n.substring(i)), e
}
function tL(n, e){
  const t=Ct("span");
  return t.classList.add(...Qt.asClassNameArray(n)), e&&t.classList.add(e), t
}
var c0h, bS=