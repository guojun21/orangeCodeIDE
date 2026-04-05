// Module: out-build/vs/editor/common/tokens/contiguousTokensEditing.js
// Offset: 1197801 (bundle byte offset)
// Size: 1300 bytes

LH(), lRe=new Uint32Array(0).buffer, cz=class mad{
  static deleteBeginning(e, t){
    return e===null||e===lRe?e:mad.delete(e, 0, t)
  }
  static deleteEnding(e, t){
    if(e===null||e===lRe)return e;
    const i=s9e(e), r=i[i.length-2];
    return mad.delete(e, t, r)
  }
  static delete(e, t, i){
    if(e===null||e===lRe||t===i)return e;
    const r=s9e(e), s=r.length>>>1;
    if(t===0&&r[r.length-2]===i)return lRe;
    const o=OB.findIndexInTokensArray(r, t), a=o>0?r[o-1<<1]:0, l=r[o<<1];
    if(i<l){
      const g=i-t;
      for(let f=o;
      f<s;
      f++)r[f<<1]-=g;
      return e
    }
    let u, d;
    a!==t?(r[o<<1]=t, u=o+1<<1, d=t):(u=o<<1, d=a);
    const m=i-t;
    for(let g=o+1;
    g<s;
    g++){
      const f=r[g<<1]-m;
      f>d&&(r[u++]=f,r[u++]=r[(g<<1)+1],d=f)
    }
    if(u===r.length)return e;
    const p=new Uint32Array(u);
    return p.set(r.subarray(0, u), 0), p.buffer
  }
  static append(e, t){
    if(t===lRe)return e;
    if(e===lRe)return t;
    if(e===null)return e;
    if(t===null)return null;
    const i=s9e(e), r=s9e(t), s=r.length>>>1, o=new Uint32Array(i.length+r.length);
    o.set(i, 0);
    let a=i.length;
    const l=i[i.length-2];
    for(let u=0;
    u<s;
    u++)o[a++]=r[u<<1]+l, o[a++]=r[(u<<1)+1];
    return o.buffer
  }
  static insert(e, t, i){
    if(e===null||e===lRe)return e;
    const r=s9e(e), s=r.length>>>1;
    let o=OB.findIndexInTokensArray(r, t);
    o>0&&r[o-1<<1]===t&&o--;
    for(let a=o;
    a<s;
    a++)r[a<<1]+=i;
    return e
  }
}
}
}), lxc, caA=