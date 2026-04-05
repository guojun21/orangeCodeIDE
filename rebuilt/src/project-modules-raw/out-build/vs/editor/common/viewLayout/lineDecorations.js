// Module: out-build/vs/editor/common/viewLayout/lineDecorations.js
// Offset: 1479283 (bundle byte offset)
// Size: 2904 bytes

oa(), lz=class hNi{
  constructor(e, t, i, r){
    this.startColumn=e, this.endColumn=t, this.className=i, this.type=r, this._lineDecorationBrand=void 0
  }
  static _equals(e, t){
    return e.startColumn===t.startColumn&&e.endColumn===t.endColumn&&e.className===t.className&&e.type===t.type
  }
  static equalsArr(e, t){
    const i=e.length, r=t.length;
    if(i!==r)return!1;
    for(let s=0;
    s<i;
    s++)if(!hNi._equals(e[s], t[s]))return!1;
    return!0
  }
  static extractWrapped(e, t, i){
    if(e.length===0)return e;
    const r=t+1, s=i+1, o=i-t, a=[];
    let l=0;
    for(const u of e)u.endColumn<=r||u.startColumn>=s||(a[l++]=new hNi(Math.max(1, u.startColumn-r+1), Math.min(o+1, u.endColumn-r+1), u.className, u.type));
    return a
  }
  static filter(e, t, i, r){
    if(e.length===0)return[];
    const s=[];
    let o=0;
    for(let a=0, l=e.length;
    a<l;
    a++){
      const u=e[a],d=u.range;
      if(d.endLineNumber<t||d.startLineNumber>t||d.isEmpty()&&(u.type===0||u.type===3))continue;
      const m=d.startLineNumber===t?d.startColumn:i,p=d.endLineNumber===t?d.endColumn:r;
      s[o++]=new hNi(m,p,u.inlineClassName,u.type)
    }
    return s
  }
  static _typeCompare(e, t){
    const i=[2, 0, 1, 3];
    return i[e]-i[t]
  }
  static compare(e, t){
    if(e.startColumn!==t.startColumn)return e.startColumn-t.startColumn;
    if(e.endColumn!==t.endColumn)return e.endColumn-t.endColumn;
    const i=hNi._typeCompare(e.type, t.type);
    return i!==0?i:e.className!==t.className?e.className<t.className?-1:1:0
  }
}, vTc=class{
  constructor(n, e, t, i){
    this.startOffset=n, this.endOffset=e, this.className=t, this.metadata=i
  }
}, _vh=class Ead{
  constructor(){
    this.stopOffsets=[], this.classNames=[], this.metadata=[], this.count=0
  }
  static _metadata(e){
    let t=0;
    for(let i=0, r=e.length;
    i<r;
    i++)t|=e[i];
    return t
  }
  consumeLowerThan(e, t, i){
    for(;
    this.count>0&&this.stopOffsets[0]<e;
    ){
      let r=0;
      for(;
      r+1<this.count&&this.stopOffsets[r]===this.stopOffsets[r+1];
      )r++;
      i.push(new vTc(t,this.stopOffsets[r],this.classNames.join(" "),Ead._metadata(this.metadata))),t=this.stopOffsets[r]+1,this.stopOffsets.splice(0,r+1),this.classNames.splice(0,r+1),this.metadata.splice(0,r+1),this.count-=r+1
    }
    return this.count>0&&t<e&&(i.push(new vTc(t, e-1, this.classNames.join(" "), Ead._metadata(this.metadata))), t=e), t
  }
  insert(e, t, i){
    if(this.count===0||this.stopOffsets[this.count-1]<=e)this.stopOffsets.push(e), this.classNames.push(t), this.metadata.push(i);
    else for(let r=0;
    r<this.count;
    r++)if(this.stopOffsets[r]>=e){
      this.stopOffsets.splice(r,0,e),this.classNames.splice(r,0,t),this.metadata.splice(r,0,i);
      break
    }
    this.count++
  }
}, Cvh=class{
  static normalize(n, e){
    if(e.length===0)return[];
    const t=[], i=new _vh;
    let r=0;
    for(let s=0, o=e.length;
    s<o;
    s++){
      const a=e[s];
      let l=a.startColumn,u=a.endColumn;
      const d=a.className,m=a.type===1?2:a.type===2?4:0;
      if(l>1){
        const f=n.charCodeAt(l-2);
        d3(f)&&l--
      }
      if(u>1){
        const f=n.charCodeAt(u-2);
        d3(f)&&u--
      }
      const p=l-1,g=u-2;
      r=i.consumeLowerThan(p,r,t),i.count===0&&(r=p),i.insert(g,d,m)
    }
    return i.consumeLowerThan(1073741824, r, t), t
  }
}
}
}), Svh, A3, acA=