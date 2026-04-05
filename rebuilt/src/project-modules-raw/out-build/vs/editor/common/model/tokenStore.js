// Module: out-build/vs/editor/common/model/tokenStore.js
// Offset: 1213111 (bundle byte offset)
// Size: 5188 bytes

NVe=class YJb{
  get children(){
    return this._children
  }
  get length(){
    return this._length
  }
  constructor(e){
    this.height=e, this._children=[], this._length=0
  }
  static create(e, t){
    const i=new YJb(e.height+1);
    return i.appendChild(e), i.appendChild(t), i
  }
  canAppendChild(){
    return this._children.length<3
  }
  appendChild(e){
    if(!this.canAppendChild())throw new Error("Cannot insert more than 3 children in a ListNode");
    this._children.push(e), this._length+=e.length, this._updateParentLength(e.length), P6(e)||(e.parent=this)
  }
  _updateParentLength(e){
    let t=this.parent;
    for(;
    t;
    )t._length+=e, t=t.parent
  }
  unappendChild(){
    const e=this._children.pop();
    return this._length-=e.length, this._updateParentLength(-e.length), e
  }
  prependChild(e){
    if(this._children.length>=3)throw new Error("Cannot prepend more than 3 children in a ListNode");
    this._children.unshift(e), this._length+=e.length, this._updateParentLength(e.length), P6(e)||(e.parent=this)
  }
  unprependChild(){
    const e=this._children.shift();
    return this._length-=e.length, this._updateParentLength(-e.length), e
  }
  lastChild(){
    return this._children[this._children.length-1]
  }
  dispose(){
    this._children.splice(0, this._children.length)
  }
}, (function(n){
  n[n.None=0]="None", n[n.ViewportGuess=1]="ViewportGuess", n[n.EditGuess=2]="EditGuess", n[n.Accurate=3]="Accurate"
})(qoe||(qoe={
  
})), Ggh=class ZJb{
  get root(){
    return this._root
  }
  constructor(e){
    this._textModel=e, this._root=this.createEmptyRoot()
  }
  createEmptyRoot(){
    return{
      length:this._textModel.getValueLength(),token:0,height:0,tokenQuality:qoe.None
    }
  }
  buildStore(e, t){
    this._root=this.createFromUpdates(e, t)
  }
  createFromUpdates(e, t){
    if(e.length===0)return this.createEmptyRoot();
    let i={
      length:e[0].length,token:e[0].token,height:0,tokenQuality:t
    };
    for(let r=1;
    r<e.length;
    r++)i=Jgh(i, {
      length:e[r].length,token:e[r].token,height:0,tokenQuality:t
    });
    return i
  }
  update(e, t, i){
    t.length!==0&&this.replace(e, t[0].startOffsetInclusive, t, i)
  }
  delete(e, t){
    this.replace(e, t, [], qoe.EditGuess)
  }
  replace(e, t, i, r){
    const s=t+e, o=[], a=[], l=[{
      node:this._root,offset:0
    }
    ];
    for(;
    l.length>0;
    ){
      const m=l.pop(),p=m.offset;
      if(p<t&&p+m.node.length<=t){
        P6(m.node)||(m.node.parent=void 0),o.push(m.node);
        continue
      }
      else P6(m.node)&&p<t&&o.push({
        length:t-p,token:m.node.token,height:0,tokenQuality:m.node.tokenQuality
      });
      if(!(t<=p&&p+m.node.length<=s)){
        if(p>=s){
          P6(m.node)||(m.node.parent=void 0),a.push(m.node);
          continue
        }
        else if(P6(m.node)&&p+m.node.length>s){
          a.push({
            length:p+m.node.length-s,token:m.node.token,height:0,tokenQuality:m.node.tokenQuality
          });
          continue
        }
        if(!P6(m.node)){
          let g=p+m.node.length;
          for(let f=m.node.children.length-1;
          f>=0;
          f--)g-=m.node.children[f].length,l.push({
            node:m.node.children[f],offset:g
          })
        }
      }
    }
    let u;
    i.length>0?u=o.concat(this.createFromUpdates(i, r), a):u=o.concat(a);
    let d=u[0];
    for(let m=1;
    m<u.length;
    m++)d=uaA(d, u[m]);
    this._root=d??this.createEmptyRoot()
  }
  traverseInOrderInRange(e, t, i){
    const r=[{
      node:this._root,offset:0
    }
    ];
    for(;
    r.length>0;
    ){
      const{
        node:s,offset:o
      }
      =r.pop();
      if(!(o+s.length<=e||o>=t)){
        if(i(s,o))return;
        if(!P6(s)){
          let l=o+s.length;
          for(let u=s.children.length-1;
          u>=0;
          u--)l-=s.children[u].length,r.push({
            node:s.children[u],offset:l
          })
        }
      }
    }
  }
  getTokenAt(e){
    let t;
    return this.traverseInOrderInRange(e, this._root.length, (i, r)=>P6(i)?(t={
      token:i.token,startOffsetInclusive:r,length:i.length
    }, !0):!1), t
  }
  getTokensInRange(e, t){
    const i=[];
    return this.traverseInOrderInRange(e, t, (r, s)=>{
      if(P6(r)){
        let o=r.length,a=s;
        s<e&&s+r.length>t?(a=e,o=t-e):s<e?(o-=e-s,a=e):s+r.length>t&&(o-=s+r.length-t),i.push({
          token:r.token,startOffsetInclusive:a,length:o
        })
      }
      return!1
    }), i
  }
  markForRefresh(e, t){
    this.traverseInOrderInRange(e, t, i=>(P6(i)&&(i.tokenQuality=qoe.None), !1))
  }
  rangeHasTokens(e, t, i){
    let r=!0;
    return this.traverseInOrderInRange(e, t, s=>(P6(s)&&s.tokenQuality<i&&(r=!1), !1)), r
  }
  rangeNeedsRefresh(e, t){
    let i=!1;
    return this.traverseInOrderInRange(e, t, r=>(P6(r)&&r.tokenQuality!==qoe.Accurate&&(i=!0), !1)), i
  }
  getNeedsRefresh(){
    const e=[];
    return this.traverseInOrderInRange(0, this._textModel.getValueLength(), (t, i)=>(P6(t)&&t.tokenQuality!==qoe.Accurate&&(e.length>0&&e[e.length-1].endOffset===i?e[e.length-1].endOffset+=t.length:e.push({
      startOffset:i,endOffset:i+t.length
    })), !1)), e
  }
  deepCopy(){
    const e=new ZJb(this._textModel);
    return e._root=this._copyNodeIterative(this._root), e
  }
  _copyNodeIterative(e){
    const t=P6(e)?{
      length:e.length,token:e.token,tokenQuality:e.tokenQuality,height:e.height
    }
    :new NVe(e.height), i=[[e, t]];
    for(;
    i.length>0;
    ){
      const[r,s]=i.pop();
      if(!P6(r))for(const o of r.children){
        const a=P6(o)?{
          length:o.length,token:o.token,tokenQuality:o.tokenQuality,height:o.height
        }
        :new NVe(o.height);
        s.appendChild(a),i.push([o,a])
      }
    }
    return t
  }
  printTree(e=this._root){
    const t=[], i=[[e, 0]];
    for(;
    i.length>0;
    ){
      const[r,s]=i.pop(),o="  ".repeat(s);
      if(P6(r))t.push(`${o}Leaf(length: ${r.length}, token: ${r.token}, refresh: ${r.tokenQuality})
`);
      else{
        t.push(`${o}List(length: ${r.length})
`);
        for(let a=r.children.length-1;
        a>=0;
        a--)i.push([r.children[a],s+1])
      }
    }
    return t.join("")
  }
  dispose(){
    const e=[[this._root, !1]];
    for(;
    e.length>0;
    ){
      const[t,i]=e.pop();
      if(!P6(t))if(i)t.dispose(),t.parent=void 0;
      else{
        e.push([t,!0]);
        for(let r=t.children.length-1;
        r>=0;
        r--)e.push([t.children[r],!1])
      }
    }
    this._root=void 0
  }
}
}
}), COo, Qgh, jgh=