// Module: out-build/vs/editor/common/modelLineProjectionData.js
// Offset: 1310054 (bundle byte offset)
// Size: 6782 bytes

Lv(), tl(), xw(), QOt=class{
  constructor(n, e, t, i, r){
    this.injectionOffsets=n, this.injectionOptions=e, this.breakOffsets=t, this.breakOffsetsVisibleColumn=i, this.wrappedTextIndentLength=r
  }
  getOutputLineCount(){
    return this.breakOffsets.length
  }
  getMinOutputOffset(n){
    return n>0?this.wrappedTextIndentLength:0
  }
  getLineLength(n){
    const e=n>0?this.breakOffsets[n-1]:0;
    let i=this.breakOffsets[n]-e;
    return n>0&&(i+=this.wrappedTextIndentLength), i
  }
  getMaxOutputOffset(n){
    return this.getLineLength(n)
  }
  translateToInputOffset(n, e){
    n>0&&(e=Math.max(0, e-this.wrappedTextIndentLength));
    let i=n===0?e:this.breakOffsets[n-1]+e;
    if(this.injectionOffsets!==null)for(let r=0;
    r<this.injectionOffsets.length&&i>this.injectionOffsets[r];
    r++)i<this.injectionOffsets[r]+this.injectionOptions[r].content.length?i=this.injectionOffsets[r]:i-=this.injectionOptions[r].content.length;
    return i
  }
  translateToOutputPosition(n, e=2){
    let t=n;
    if(this.injectionOffsets!==null)for(let i=0;
    i<this.injectionOffsets.length&&!(n<this.injectionOffsets[i]||e!==1&&n===this.injectionOffsets[i]);
    i++)t+=this.injectionOptions[i].content.length;
    return this.offsetInInputWithInjectionsToOutputPosition(t, e)
  }
  offsetInInputWithInjectionsToOutputPosition(n, e=2){
    let t=0, i=this.breakOffsets.length-1, r=0, s=0;
    for(;
    t<=i;
    ){
      r=t+(i-t)/2|0;
      const a=this.breakOffsets[r];
      if(s=r>0?this.breakOffsets[r-1]:0,e===0)if(n<=s)i=r-1;
      else if(n>a)t=r+1;
      else break;
      else if(n<s)i=r-1;
      else if(n>=a)t=r+1;
      else break
    }
    let o=n-s;
    return r>0&&(o+=this.wrappedTextIndentLength), new NOn(r, o)
  }
  normalizeOutputPosition(n, e, t){
    if(this.injectionOffsets!==null){
      const i=this.outputPositionToOffsetInInputWithInjections(n,e),r=this.normalizeOffsetInInputWithInjectionsAroundInjections(i,t);
      if(r!==i)return this.offsetInInputWithInjectionsToOutputPosition(r,t)
    }
    if(t===0){
      if(n>0&&e===this.getMinOutputOffset(n))return new NOn(n-1,this.getMaxOutputOffset(n-1))
    }
    else if(t===1){
      const i=this.getOutputLineCount()-1;
      if(n<i&&e===this.getMaxOutputOffset(n))return new NOn(n+1,this.getMinOutputOffset(n+1))
    }
    return new NOn(n, e)
  }
  outputPositionToOffsetInInputWithInjections(n, e){
    return n>0&&(e=Math.max(0, e-this.wrappedTextIndentLength)), (n>0?this.breakOffsets[n-1]:0)+e
  }
  normalizeOffsetInInputWithInjectionsAroundInjections(n, e){
    const t=this.getInjectedTextAtOffset(n);
    if(!t)return n;
    if(e===2){
      if(n===t.offsetInInputWithInjections+t.length&&Nfh(this.injectionOptions[t.injectedTextIndex].cursorStops))return t.offsetInInputWithInjections+t.length;
      {
        let i=t.offsetInInputWithInjections;
        if(Mfh(this.injectionOptions[t.injectedTextIndex].cursorStops))return i;
        let r=t.injectedTextIndex-1;
        for(;
        r>=0&&this.injectionOffsets[r]===this.injectionOffsets[t.injectedTextIndex]&&!(Nfh(this.injectionOptions[r].cursorStops)||(i-=this.injectionOptions[r].content.length,Mfh(this.injectionOptions[r].cursorStops)));
        )r--;
        return i
      }
    }
    else if(e===1||e===4){
      let i=t.offsetInInputWithInjections+t.length,r=t.injectedTextIndex;
      for(;
      r+1<this.injectionOffsets.length&&this.injectionOffsets[r+1]===this.injectionOffsets[r];
      )i+=this.injectionOptions[r+1].content.length,r++;
      return i
    }
    else if(e===0||e===3){
      let i=t.offsetInInputWithInjections,r=t.injectedTextIndex;
      for(;
      r-1>=0&&this.injectionOffsets[r-1]===this.injectionOffsets[r];
      )i-=this.injectionOptions[r-1].content.length,r--;
      return i
    }
    QN(e)
  }
  getInjectedText(n, e){
    const t=this.outputPositionToOffsetInInputWithInjections(n, e), i=this.getInjectedTextAtOffset(t);
    return i?{
      options:this.injectionOptions[i.injectedTextIndex]
    }
    :null
  }
  getInjectedTextAtOffset(n){
    const e=this.injectionOffsets, t=this.injectionOptions;
    if(e!==null){
      let i=0;
      for(let r=0;
      r<e.length;
      r++){
        const s=t[r].content.length,o=e[r]+i,a=e[r]+i+s;
        if(o>n)break;
        if(n<=a)return{
          injectedTextIndex:r,offsetInInputWithInjections:o,length:s
        };
        i+=s
      }
    }
  }
}, NOn=class{
  constructor(n, e){
    this.outputLineIndex=n, this.outputOffset=e
  }
  toString(){
    return`${this.outputLineIndex}:${this.outputOffset}`
  }
  toPosition(n){
    return new ar(n+this.outputLineIndex, this.outputOffset+1)
  }
}
}
});
function NaA(n, e, t, i, r, s, o, a){
  if(r===-1)return null;
  const l=t.length;
  if(l<=1)return null;
  const u=a==="keepAll", d=e.breakOffsets, m=e.breakOffsetsVisibleColumn, p=Ufh(t, i, r, s, o), g=r-p, f=HOo, A=JOo;
  let w=0, C=0, x=0, I=r;
  const B=d.length;
  let R=0;
  if(R>=0){
    let N=Math.abs(m[R]-I);
    for(;
    R+1<B;
    ){
      const M=Math.abs(m[R+1]-I);
      if(M>=N)break;
      N=M,R++
    }
  }
  for(;
  R<B;
  ){
    let N=R<0?0:d[R], M=R<0?0:m[R];
    C>N&&(N=C, M=x);
    let O=0, $=0, H=0, W=0;
    if(M<=I){
      let Y=M,j=N===0?0:t.charCodeAt(N-1),X=N===0?0:n.get(j),ee=!0;
      for(let re=N;
      re<l;
      re++){
        const ne=re,pe=t.charCodeAt(re);
        let le,he;
        if(d3(pe)?(re++,le=0,he=2):(le=n.get(pe),he=MOn(pe,Y,i,s)),ne>C&&Lxc(j,X,pe,le,u)&&(O=ne,$=Y),Y+=he,Y>I){
          ne>C?(H=ne,W=Y-he):(H=re+1,W=Y),Y-$>g&&(O=0),ee=!1;
          break
        }
        j=pe,X=le
      }
      if(ee){
        w>0&&(f[w]=d[d.length-1],A[w]=m[d.length-1],w++);
        break
      }
    }
    if(O===0){
      let Y=M,j=t.charCodeAt(N),X=n.get(j),ee=!1;
      for(let re=N-1;
      re>=C;
      re--){
        const ne=re+1,pe=t.charCodeAt(re);
        if(pe===9){
          ee=!0;
          break
        }
        let le,he;
        if(ggt(pe)?(re--,le=0,he=2):(le=n.get(pe),he=Ize(pe)?s:1),Y<=I){
          if(H===0&&(H=ne,W=Y),Y<=I-g)break;
          if(Lxc(pe,le,j,X,u)){
            O=ne,$=Y;
            break
          }
        }
        Y-=he,j=pe,X=le
      }
      if(O!==0){
        const re=g-(W-$);
        if(re<=i){
          const ne=t.charCodeAt(H);
          let pe;
          d3(ne)?pe=2:pe=MOn(ne,W,i,s),re-pe<0&&(O=0)
        }
      }
      if(ee){
        R--;
        continue
      }
    }
    if(O===0&&(O=H, $=W), O<=C){
      const Y=t.charCodeAt(C);
      d3(Y)?(O=C+2,$=x+2):(O=C+1,$=x+MOn(Y,x,i,s))
    }
    for(C=O, f[w]=O, x=$, A[w]=$, w++, I=$+g;
    R<0||R<B&&m[R]<$;
    )R++;
    let z=Math.abs(m[R]-I);
    for(;
    R+1<B;
    ){
      const Y=Math.abs(m[R+1]-I);
      if(Y>=z)break;
      z=Y,R++
    }
  }
  return w===0?null:(f.length=w, A.length=w, HOo=e.breakOffsets, JOo=e.breakOffsetsVisibleColumn, e.breakOffsets=f, e.breakOffsetsVisibleColumn=A, e.wrappedTextIndentLength=p, e)
}
function MaA(n, e, t, i, r, s, o, a){
  const l=o9e.applyInjectedText(e, t);
  let u, d;
  if(t&&t.length>0?(u=t.map($=>$.options), d=t.map($=>$.column-1)):(u=null, d=null), r===-1)return u?new QOt(d, u, [l.length], [], 0):null;
  const m=l.length;
  if(m<=1)return u?new QOt(d, u, [l.length], [], 0):null;
  const p=a==="keepAll", g=Ufh(l, i, r, s, o), f=r-g, A=[], w=[];
  let C=0, x=0, I=0, B=r, R=l.charCodeAt(0), N=n.get(R), M=MOn(R, 0, i, s), O=1;
  d3(R)&&(M+=1, R=l.charCodeAt(1), N=n.get(R), O++);
  for(let $=O;
  $<m;
  $++){
    const H=$, W=l.charCodeAt($);
    let z, Y;
    d3(W)?($++, z=0, Y=2):(z=n.get(W), Y=MOn(W, M, i, s)), Lxc(R, N, W, z, p)&&(x=H, I=M), M+=Y, M>B&&((x===0||M-I>f)&&(x=H, I=M-Y), A[C]=x, w[C]=I, C++, B=I+f, x=0), R=W, N=z
  }
  return C===0&&(!t||t.length===0)?null:(A[C]=m, w[C]=M, new QOt(d, u, A, w, g))
}
function MOn(n, e, t, i){
  return n===9?t-e%t:Ize(n)||n<32?i:1
}
function Ofh(n, e){
  return e-n%e
}
function Lxc(n, e, t, i, r){
  return t!==32&&(e===2&&i!==2||e!==1&&i===1||!r&&e===3&&i!==2||!r&&i===3&&e!==1)
}
function Ufh(n, e, t, i, r){
  let s=0;
  if(r!==0){
    const o=TH(n);
    if(o!==-1){
      for(let l=0;
      l<o;
      l++){
        const u=n.charCodeAt(l)===9?Ofh(s,e):1;
        s+=u
      }
      const a=r===3?2:r===2?1:0;
      for(let l=0;
      l<a;
      l++){
        const u=Ofh(s,e);
        s+=u
      }
      s+i>t&&(s=0)
    }
  }
  return s
}
var $fh, qfh, Hfh, HOo, JOo, FaA=