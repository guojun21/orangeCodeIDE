// Module: out-build/vs/editor/contrib/gotoSymbol/browser/referencesModel.js
// Offset: 24709846 (bundle byte offset)
// Size: 5161 bytes

_s(), yn(), _3t(), rt(), cu(), Yr(), oa(), ts(), Ht(), tNe=class{
  constructor(n, e, t, i){
    this.isProviderFirst=n, this.parent=e, this.link=t, this._rangeCallback=i, this.id=w3t.nextId()
  }
  get uri(){
    return this.link.uri
  }
  get range(){
    return this._range??this.link.targetSelectionRange??this.link.range
  }
  set range(n){
    this._range=n, this._rangeCallback(this)
  }
  get ariaMessage(){
    const n=this.parent.getPreview(this)?.preview(this.range);
    return n?_(1230, null, n.value, ca(this.uri), this.range.startLineNumber, this.range.startColumn):_(1229, null, ca(this.uri), this.range.startLineNumber, this.range.startColumn)
  }
}, Nmg=class{
  constructor(n){
    this._modelReference=n
  }
  dispose(){
    this._modelReference.dispose()
  }
  preview(n, e=8){
    const t=this._modelReference.object.textEditorModel;
    if(!t)return;
    const{
      startLineNumber:i,startColumn:r,endLineNumber:s,endColumn:o
    }
    =n, a=t.getWordUntilPosition({
      lineNumber:i,column:r-e
    }), l=new Zt(i, a.startColumn, i, r), u=new Zt(s, o, s, 1073741824), d=t.getValueInRange(l).replace(/^\s+/, ""), m=t.getValueInRange(n), p=t.getValueInRange(u).replace(/\s+$/, "");
    return{
      value:d+m+p,highlight:{
        start:d.length,end:d.length+m.length
      }
    }
  }
}, X0t=class{
  constructor(n, e){
    this.parent=n, this.uri=e, this.children=[], this._previews=new fu
  }
  dispose(){
    Bo(this._previews.values()), this._previews.clear()
  }
  getPreview(n){
    return this._previews.get(n.uri)
  }
  get ariaMessage(){
    const n=this.children.length;
    return n===1?_(1231, null, ca(this.uri), this.uri.fsPath):_(1232, null, n, ca(this.uri), this.uri.fsPath)
  }
  async resolve(n){
    if(this._previews.size!==0)return this;
    for(const e of this.children)if(!this._previews.has(e.uri))try{
      const t=await n.createModelReference(e.uri);
      this._previews.set(e.uri,new Nmg(t))
    }
    catch(t){
      Gc(t)
    }
    return this
  }
}, $ne=class gWa{
  constructor(e, t){
    this.groups=[], this.references=[], this._onDidChangeReferenceRange=new Qe, this.onDidChangeReferenceRange=this._onDidChangeReferenceRange.event, this._links=e, this._title=t;
    const[i]=e;
    e.sort(gWa._compareReferences);
    let r;
    for(const s of e)if((!r||!Iu.isEqual(r.uri, s.uri, !0))&&(r=new X0t(this, s.uri), this.groups.push(r)), r.children.length===0||gWa._compareReferences(s, r.children[r.children.length-1])!==0){
      const o=new tNe(i===s,r,s,a=>this._onDidChangeReferenceRange.fire(a));
      this.references.push(o),r.children.push(o)
    }
  }
  dispose(){
    Bo(this.groups), this._onDidChangeReferenceRange.dispose(), this.groups.length=0
  }
  clone(){
    return new gWa(this._links, this._title)
  }
  get title(){
    return this._title
  }
  get isEmpty(){
    return this.groups.length===0
  }
  get ariaMessage(){
    return this.isEmpty?_(1233, null):this.references.length===1?_(1234, null, this.references[0].uri.fsPath):this.groups.length===1?_(1235, null, this.references.length, this.groups[0].uri.fsPath):_(1236, null, this.references.length, this.groups.length)
  }
  nextOrPreviousReference(e, t){
    const{
      parent:i
    }
    =e;
    let r=i.children.indexOf(e);
    const s=i.children.length, o=i.parent.groups.length;
    return o===1||t&&r+1<s||!t&&r>0?(t?r=(r+1)%s:r=(r+s-1)%s, i.children[r]):(r=i.parent.groups.indexOf(i), t?(r=(r+1)%o, i.parent.groups[r].children[0]):(r=(r+o-1)%o, i.parent.groups[r].children[i.parent.groups[r].children.length-1]))
  }
  nearestReference(e, t){
    const i=this.references.map((r, s)=>({
      idx:s,prefixLen:voe(r.uri.toString(),e.toString()),offsetDist:Math.abs(r.range.startLineNumber-t.lineNumber)*100+Math.abs(r.range.startColumn-t.column)
    })).sort((r, s)=>r.prefixLen>s.prefixLen?-1:r.prefixLen<s.prefixLen?1:r.offsetDist<s.offsetDist?-1:r.offsetDist>s.offsetDist?1:0)[0];
    if(i)return this.references[i.idx]
  }
  referenceAt(e, t){
    for(const i of this.references)if(i.uri.toString()===e.toString()&&Zt.containsPosition(i.range, t))return i
  }
  firstReference(){
    for(const e of this.references)if(e.isProviderFirst)return e;
    return this.references[0]
  }
  static _compareReferences(e, t){
    return Iu.compare(e.uri, t.uri)||Zt.compareRangesUsingStarts(e.range, t.range)
  }
}
}
});
function gGl(n, e){
  return e.uri.scheme===n.uri.scheme?!0:!Cgt(e.uri, _n.walkThroughSnippet, _n.vscodeChatCodeBlock, _n.vscodeChatCodeCompareBlock)
}
async function upi(n, e, t, i, r){
  const o=t.ordered(n, i).map(l=>Promise.resolve(r(l, n, e)).then(void 0, u=>{
    JE(u)
  })), a=await Promise.all(o);
  return lh(a.flat()).filter(l=>gGl(n, l))
}
function F1e(n, e, t, i, r){
  return $be("gotoSymbol.getDefinitionsAtPosition", ()=>upi(e, t, n, i, (s, o, a)=>s.provideDefinition(o, a, r)))
}
function fGl(n, e, t, i, r){
  return $be("gotoSymbol.getDeclarationsAtPosition", ()=>upi(e, t, n, i, (s, o, a)=>s.provideDeclaration(o, a, r)))
}
function dpi(n, e, t, i, r){
  return $be("gotoSymbol.getImplementationsAtPosition", ()=>upi(e, t, n, i, (s, o, a)=>s.provideImplementation(o, a, r)))
}
function pca(n, e, t, i, r){
  return $be("gotoSymbol.getTypeDefinitionsAtPosition", ()=>upi(e, t, n, i, (s, o, a)=>s.provideTypeDefinition(o, a, r)))
}
function hpi(n, e, t, i, r, s){
  return $be("gotoSymbol.getReferencesAtPosition", ()=>upi(e, t, n, r, async(o, a, l)=>{
    const u=(await o.provideReferences(a, l, {
      includeDeclaration:!0
    }, s))?.filter(m=>gGl(a, m));
    if(!i||!u||u.length!==2)return u;
    const d=(await o.provideReferences(a, l, {
      includeDeclaration:!1
    }, s))?.filter(m=>gGl(a, m));
    return d&&d.length===1?d:u
  }))
}
async function RAe(n){
  const e=await n(), t=new $ne(e, ""), i=t.references.map(r=>r.link);
  return t.dispose(), i
}
var wet=