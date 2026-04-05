// Module: out-build/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/ast.js
// Offset: 1068452 (bundle byte offset)
// Size: 8207 bytes

_s(), koe(), X5e(), TOt(), (function(n){
  n[n.Text=0]="Text", n[n.Bracket=1]="Bracket", n[n.Pair=2]="Pair", n[n.UnexpectedClosingBracket=3]="UnexpectedClosingBracket", n[n.List=4]="List"
})(gph||(gph={
  
})), rOo=class{
  get length(){
    return this._length
  }
  constructor(n){
    this._length=n
  }
}, TEc=class zGa extends rOo{
  static create(e, t, i){
    let r=e.length;
    return t&&(r=$B(r, t.length)), i&&(r=$B(r, i.length)), new zGa(r, e, t, i, t?t.missingOpeningBracketIds:Ooe.getEmpty())
  }
  get kind(){
    return 2
  }
  get listHeight(){
    return 0
  }
  get childrenLength(){
    return 3
  }
  getChild(e){
    switch(e){
      case 0:return this.openingBracket;
      case 1:return this.child;
      case 2:return this.closingBracket
    }
    throw new Error("Invalid child index")
  }
  get children(){
    const e=[];
    return e.push(this.openingBracket), this.child&&e.push(this.child), this.closingBracket&&e.push(this.closingBracket), e
  }
  constructor(e, t, i, r, s){
    super(e), this.openingBracket=t, this.child=i, this.closingBracket=r, this.missingOpeningBracketIds=s
  }
  canBeReused(e){
    return!(this.closingBracket===null||e.intersects(this.missingOpeningBracketIds))
  }
  flattenLists(){
    return zGa.create(this.openingBracket.flattenLists(), this.child&&this.child.flattenLists(), this.closingBracket&&this.closingBracket.flattenLists())
  }
  deepClone(){
    return new zGa(this.length, this.openingBracket.deepClone(), this.child&&this.child.deepClone(), this.closingBracket&&this.closingBracket.deepClone(), this.missingOpeningBracketIds)
  }
  computeMinIndentation(e, t){
    return this.child?this.child.computeMinIndentation($B(e, this.openingBracket.length), t):Number.MAX_SAFE_INTEGER
  }
}, DSe=class JJb extends rOo{
  static create23(e, t, i, r=!1){
    let s=e.length, o=e.missingOpeningBracketIds;
    if(e.listHeight!==t.listHeight)throw new Error("Invalid list heights");
    if(s=$B(s, t.length), o=o.merge(t.missingOpeningBracketIds), i){
      if(e.listHeight!==i.listHeight)throw new Error("Invalid list heights");
      s=$B(s,i.length),o=o.merge(i.missingOpeningBracketIds)
    }
    return r?new fph(s, e.listHeight+1, e, t, i, o):new sOo(s, e.listHeight+1, e, t, i, o)
  }
  static create(e, t=!1){
    if(e.length===0)return this.getEmpty();
    {
      let i=e[0].length,r=e[0].missingOpeningBracketIds;
      for(let s=1;
      s<e.length;
      s++)i=$B(i,e[s].length),r=r.merge(e[s].missingOpeningBracketIds);
      return t?new IEc(i,e[0].listHeight+1,e,r):new oOo(i,e[0].listHeight+1,e,r)
    }
  }
  static getEmpty(){
    return new IEc(vW, 0, [], Ooe.getEmpty())
  }
  get kind(){
    return 4
  }
  get missingOpeningBracketIds(){
    return this._missingOpeningBracketIds
  }
  constructor(e, t, i){
    super(e), this.listHeight=t, this._missingOpeningBracketIds=i, this.cachedMinIndentation=-1
  }
  throwIfImmutable(){
    
  }
  makeLastElementMutable(){
    this.throwIfImmutable();
    const e=this.childrenLength;
    if(e===0)return;
    const t=this.getChild(e-1), i=t.kind===4?t.toMutable():t;
    return t!==i&&this.setChild(e-1, i), i
  }
  makeFirstElementMutable(){
    if(this.throwIfImmutable(), this.childrenLength===0)return;
    const t=this.getChild(0), i=t.kind===4?t.toMutable():t;
    return t!==i&&this.setChild(0, i), i
  }
  canBeReused(e){
    if(e.intersects(this.missingOpeningBracketIds)||this.childrenLength===0)return!1;
    let t=this;
    for(;
    t.kind===4;
    ){
      const i=t.childrenLength;
      if(i===0)throw new _m;
      t=t.getChild(i-1)
    }
    return t.canBeReused(e)
  }
  handleChildrenChanged(){
    this.throwIfImmutable();
    const e=this.childrenLength;
    let t=this.getChild(0).length, i=this.getChild(0).missingOpeningBracketIds;
    for(let r=1;
    r<e;
    r++){
      const s=this.getChild(r);
      t=$B(t,s.length),i=i.merge(s.missingOpeningBracketIds)
    }
    this._length=t, this._missingOpeningBracketIds=i, this.cachedMinIndentation=-1
  }
  flattenLists(){
    const e=[];
    for(const t of this.children){
      const i=t.flattenLists();
      i.kind===4?e.push(...i.children):e.push(i)
    }
    return JJb.create(e)
  }
  computeMinIndentation(e, t){
    if(this.cachedMinIndentation!==-1)return this.cachedMinIndentation;
    let i=Number.MAX_SAFE_INTEGER, r=e;
    for(let s=0;
    s<this.childrenLength;
    s++){
      const o=this.getChild(s);
      o&&(i=Math.min(i,o.computeMinIndentation(r,t)),r=$B(r,o.length))
    }
    return this.cachedMinIndentation=i, i
  }
}, sOo=class GJb extends DSe{
  get childrenLength(){
    return this._item3!==null?3:2
  }
  getChild(e){
    switch(e){
      case 0:return this._item1;
      case 1:return this._item2;
      case 2:return this._item3
    }
    throw new Error("Invalid child index")
  }
  setChild(e, t){
    switch(e){
      case 0:this._item1=t;
      return;
      case 1:this._item2=t;
      return;
      case 2:this._item3=t;
      return
    }
    throw new Error("Invalid child index")
  }
  get children(){
    return this._item3?[this._item1, this._item2, this._item3]:[this._item1, this._item2]
  }
  get item1(){
    return this._item1
  }
  get item2(){
    return this._item2
  }
  get item3(){
    return this._item3
  }
  constructor(e, t, i, r, s, o){
    super(e, t, o), this._item1=i, this._item2=r, this._item3=s
  }
  deepClone(){
    return new GJb(this.length, this.listHeight, this._item1.deepClone(), this._item2.deepClone(), this._item3?this._item3.deepClone():null, this.missingOpeningBracketIds)
  }
  appendChildOfSameHeight(e){
    if(this._item3)throw new Error("Cannot append to a full (2,3) tree node");
    this.throwIfImmutable(), this._item3=e, this.handleChildrenChanged()
  }
  unappendChild(){
    if(!this._item3)throw new Error("Cannot remove from a non-full (2,3) tree node");
    this.throwIfImmutable();
    const e=this._item3;
    return this._item3=null, this.handleChildrenChanged(), e
  }
  prependChildOfSameHeight(e){
    if(this._item3)throw new Error("Cannot prepend to a full (2,3) tree node");
    this.throwIfImmutable(), this._item3=this._item2, this._item2=this._item1, this._item1=e, this.handleChildrenChanged()
  }
  unprependChild(){
    if(!this._item3)throw new Error("Cannot remove from a non-full (2,3) tree node");
    this.throwIfImmutable();
    const e=this._item1;
    return this._item1=this._item2, this._item2=this._item3, this._item3=null, this.handleChildrenChanged(), e
  }
  toMutable(){
    return this
  }
}, fph=class extends sOo{
  toMutable(){
    return new sOo(this.length, this.listHeight, this.item1, this.item2, this.item3, this.missingOpeningBracketIds)
  }
  throwIfImmutable(){
    throw new Error("this instance is immutable")
  }
}, oOo=class WJb extends DSe{
  get childrenLength(){
    return this._children.length
  }
  getChild(e){
    return this._children[e]
  }
  setChild(e, t){
    this._children[e]=t
  }
  get children(){
    return this._children
  }
  constructor(e, t, i, r){
    super(e, t, r), this._children=i
  }
  deepClone(){
    const e=new Array(this._children.length);
    for(let t=0;
    t<this._children.length;
    t++)e[t]=this._children[t].deepClone();
    return new WJb(this.length, this.listHeight, e, this.missingOpeningBracketIds)
  }
  appendChildOfSameHeight(e){
    this.throwIfImmutable(), this._children.push(e), this.handleChildrenChanged()
  }
  unappendChild(){
    this.throwIfImmutable();
    const e=this._children.pop();
    return this.handleChildrenChanged(), e
  }
  prependChildOfSameHeight(e){
    this.throwIfImmutable(), this._children.unshift(e), this.handleChildrenChanged()
  }
  unprependChild(){
    this.throwIfImmutable();
    const e=this._children.shift();
    return this.handleChildrenChanged(), e
  }
  toMutable(){
    return this
  }
}, IEc=class extends oOo{
  toMutable(){
    return new oOo(this.length, this.listHeight, [...this.children], this.missingOpeningBracketIds)
  }
  throwIfImmutable(){
    throw new Error("this instance is immutable")
  }
}, bph=[], aOo=class extends rOo{
  get listHeight(){
    return 0
  }
  get childrenLength(){
    return 0
  }
  getChild(n){
    return null
  }
  get children(){
    return bph
  }
  flattenLists(){
    return this
  }
  deepClone(){
    return this
  }
}, IVe=class extends aOo{
  get kind(){
    return 0
  }
  get missingOpeningBracketIds(){
    return Ooe.getEmpty()
  }
  canBeReused(n){
    return!0
  }
  computeMinIndentation(n, e){
    const t=Lde(n), i=(t.columnCount===0?t.lineCount:t.lineCount+1)+1, r=EoA($B(n, this.length))+1;
    let s=Number.MAX_SAFE_INTEGER;
    for(let o=i;
    o<=r;
    o++){
      const a=e.getLineFirstNonWhitespaceColumn(o),l=e.getLineContent(o);
      if(a===0)continue;
      const u=ZP.visibleColumnFromColumn(l,a,e.getOptions().tabSize);
      s=Math.min(s,u)
    }
    return s
  }
}, DEc=class QJb extends aOo{
  static create(e, t, i){
    return new QJb(e, t, i)
  }
  get kind(){
    return 1
  }
  get missingOpeningBracketIds(){
    return Ooe.getEmpty()
  }
  constructor(e, t, i){
    super(e), this.bracketInfo=t, this.bracketIds=i
  }
  get text(){
    return this.bracketInfo.bracketText
  }
  get languageId(){
    return this.bracketInfo.languageId
  }
  canBeReused(e){
    return!1
  }
  computeMinIndentation(e, t){
    return Number.MAX_SAFE_INTEGER
  }
}, vph=class extends aOo{
  get kind(){
    return 3
  }
  constructor(n, e){
    super(e), this.missingOpeningBracketIds=n
  }
  canBeReused(n){
    return!n.intersects(this.missingOpeningBracketIds)
  }
  computeMinIndentation(n, e){
    return Number.MAX_SAFE_INTEGER
  }
}
}
}), Aph, e9e, BEc, yph, wph, REc=