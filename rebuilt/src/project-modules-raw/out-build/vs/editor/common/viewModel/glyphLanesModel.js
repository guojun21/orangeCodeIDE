// Module: out-build/vs/editor/common/viewModel/glyphLanesModel.js
// Offset: 1412004 (bundle byte offset)
// Size: 1436 bytes

xw(), $Ve=G$.Right, Gbh=class{
  constructor(n){
    this.persist=0, this._requiredLanes=1, this.lanes=new Uint8Array(Math.ceil((n+1)*$Ve/8))
  }
  reset(n){
    const e=Math.ceil((n+1)*$Ve/8);
    this.lanes.length<e?this.lanes=new Uint8Array(e):this.lanes.fill(0), this._requiredLanes=1
  }
  get requiredLanes(){
    return this._requiredLanes
  }
  push(n, e, t){
    t&&(this.persist|=1<<n-1);
    for(let i=e.startLineNumber;
    i<=e.endLineNumber;
    i++){
      const r=$Ve*i+(n-1);
      this.lanes[r>>>3]|=1<<r%8,this._requiredLanes=Math.max(this._requiredLanes,this.countAtLine(i))
    }
  }
  getLanesAtLine(n){
    const e=[];
    let t=$Ve*n;
    for(let i=0;
    i<$Ve;
    i++)(this.persist&1<<i||this.lanes[t>>>3]&1<<t%8)&&e.push(i+1), t++;
    return e.length?e:[G$.Center]
  }
  countAtLine(n){
    let e=$Ve*n, t=0;
    for(let i=0;
    i<$Ve;
    i++)(this.persist&1<<i||this.lanes[e>>>3]&1<<e%8)&&t++, e++;
    return t
  }
}
}
});
function YaA(n, e){
  const t=[];
  let i=0, r=0;
  for(;
  i<n.length&&r<e.length;
  ){
    const s=n[i], o=e[r];
    if(s.endLineNumber<o.startLineNumber-1)t.push(n[i++]);
    else if(o.endLineNumber<s.startLineNumber-1)t.push(e[r++]);
    else{
      const a=Math.min(s.startLineNumber,o.startLineNumber),l=Math.max(s.endLineNumber,o.endLineNumber);
      t.push(new Zt(a,1,l,1)),i++,r++
    }
  }
  for(;
  i<n.length;
  )t.push(n[i++]);
  for(;
  r<e.length;
  )t.push(e[r++]);
  return t
}
function Wbh(n, e){
  if(n.length!==e.length)return!1;
  for(let t=0;
  t<n.length;
  t++)if(!n[t].equalsRange(e[t]))return!1;
  return!0
}
var Qbh, jbh, zbh, Vbh, Kbh, aTc, ZaA=