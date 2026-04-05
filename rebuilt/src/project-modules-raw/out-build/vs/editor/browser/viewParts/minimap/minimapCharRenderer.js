// Module: out-build/vs/editor/browser/viewParts/minimap/minimapCharRenderer.js
// Offset: 1674048 (bundle byte offset)
// Size: 1256 bytes

JAh(), jFo(), WTc=class Bad{
  constructor(e, t){
    this.scale=t, this._minimapCharRendererBrand=void 0, this.charDataNormal=Bad.soften(e, 12/15), this.charDataLight=Bad.soften(e, 50/60)
  }
  static soften(e, t){
    const i=new Uint8ClampedArray(e.length);
    for(let r=0, s=e.length;
    r<s;
    r++)i[r]=QFo(e[r]*t);
    return i
  }
  renderChar(e, t, i, r, s, o, a, l, u, d, m){
    const p=1*this.scale, g=2*this.scale, f=m?1:g;
    if(t+p>e.width||i+f>e.height){
      console.warn("bad render request outside image data");
      return
    }
    const A=d?this.charDataLight:this.charDataNormal, w=HAh(r, u), C=e.width*4, x=a.r, I=a.g, B=a.b, R=s.r-x, N=s.g-I, M=s.b-B, O=Math.max(o, l), $=e.data;
    let H=w*p*g, W=i*C+t*4;
    for(let z=0;
    z<f;
    z++){
      let Y=W;
      for(let j=0;
      j<p;
      j++){
        const X=A[H++]/255*(o/255);
        $[Y++]=x+R*X,$[Y++]=I+N*X,$[Y++]=B+M*X,$[Y++]=O
      }
      W+=C
    }
  }
  blockRenderChar(e, t, i, r, s, o, a, l){
    const u=1*this.scale, d=2*this.scale, m=l?1:d;
    if(t+u>e.width||i+m>e.height){
      console.warn("bad render request outside image data");
      return
    }
    const p=e.width*4, g=.5*(s/255), f=o.r, A=o.g, w=o.b, C=r.r-f, x=r.g-A, I=r.b-w, B=f+C*g, R=A+x*g, N=w+I*g, M=Math.max(s, a), O=e.data;
    let $=i*p+t*4;
    for(let H=0;
    H<m;
    H++){
      let W=$;
      for(let z=0;
      z<u;
      z++)O[W++]=B,O[W++]=R,O[W++]=N,O[W++]=M;
      $+=p
    }
  }
}
}
}), QTc, jTc, zTc, elA=