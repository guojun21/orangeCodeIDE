// Module: out-build/vs/editor/common/viewLayout/linePart.js
// Offset: 1482187 (bundle byte offset)
// Size: 8069 bytes

(function(n){
  n[n.IS_WHITESPACE=1]="IS_WHITESPACE", n[n.PSEUDO_BEFORE=2]="PSEUDO_BEFORE", n[n.PSEUDO_AFTER=4]="PSEUDO_AFTER", n[n.IS_WHITESPACE_MASK=1]="IS_WHITESPACE_MASK", n[n.PSEUDO_BEFORE_MASK=2]="PSEUDO_BEFORE_MASK", n[n.PSEUDO_AFTER_MASK=4]="PSEUDO_AFTER_MASK"
})(Svh||(Svh={
  
})), A3=class{
  constructor(n, e, t, i){
    this.endIndex=n, this.type=e, this.metadata=t, this.containsRTL=i, this._linePartBrand=void 0
  }
  isWhitespace(){
    return!!(this.metadata&1)
  }
  isPseudoAfter(){
    return!!(this.metadata&4)
  }
}
}
});
function Wft(n, e){
  if(n.lineContent.length===0){
    if(n.lineDecorations.length>0){
      e.appendString("<span>");
      let t=0,i=0,r=0;
      for(const o of n.lineDecorations)(o.type===1||o.type===2)&&(e.appendString('<span class="'),e.appendString(o.className),e.appendString('"></span>'),o.type===1&&(r|=1,t++),o.type===2&&(r|=2,i++));
      e.appendString("</span>");
      const s=new n3o(1,t+i);
      return s.setColumnInfo(1,t,0,0),new i3o(s,!1,r)
    }
    return e.appendString("<span><span></span></span>"), new i3o(new n3o(0, 0), !1, 0)
  }
  return gcA(lcA(n), e)
}
function ccA(n){
  const e=new Gbe(1e4), t=Wft(n, e);
  return new Ivh(t.characterMapping, e.build(), t.containsRTL, t.containsForeignElements)
}
function lcA(n){
  const e=n.lineContent;
  let t, i, r;
  n.stopRenderingLineAfter!==-1&&n.stopRenderingLineAfter<e.length?(t=!0, i=e.length-n.stopRenderingLineAfter, r=n.stopRenderingLineAfter):(t=!1, i=0, r=e.length);
  let s=ucA(e, n.containsRTL, n.lineTokens, n.fauxIndentLength, r);
  n.renderControlCharacters&&!n.isBasicASCII&&(s=hcA(e, s)), (n.renderWhitespace===4||n.renderWhitespace===1||n.renderWhitespace===2&&n.selectionsOnLine||n.renderWhitespace===3&&!n.continuesWithWrappedLine)&&(s=mcA(n, e, r, s));
  let o=0;
  if(n.lineDecorations.length>0){
    for(let a=0, l=n.lineDecorations.length;
    a<l;
    a++){
      const u=n.lineDecorations[a];
      u.type===3||u.type===1?o|=1:u.type===2&&(o|=2)
    }
    s=pcA(e, r, s, n.lineDecorations)
  }
  return n.containsRTL||(s=dcA(e, s, !n.isBasicASCII||n.fontLigatures)), new Dvh(n.useMonospaceOptimizations, n.canUseHalfwidthRightwardsArrow, e, r, t, i, s, o, n.fauxIndentLength, n.tabSize, n.startVisibleColumn, n.containsRTL, n.spaceWidth, n.renderSpaceCharCode, n.renderWhitespace, n.renderControlCharacters)
}
function ucA(n, e, t, i, r){
  const s=[];
  let o=0;
  i>0&&(s[o++]=new A3(i, "", 0, !1));
  let a=i;
  for(let l=0, u=t.getCount();
  l<u;
  l++){
    const d=t.getEndOffset(l);
    if(d<=i)continue;
    const m=t.getClassName(l);
    if(d>=r){
      const g=e?Tze(n.substring(a,r)):!1;
      s[o++]=new A3(r,m,0,g);
      break
    }
    const p=e?Tze(n.substring(a, d)):!1;
    s[o++]=new A3(d, m, 0, p), a=d
  }
  return s
}
function dcA(n, e, t){
  let i=0;
  const r=[];
  let s=0;
  if(t)for(let o=0, a=e.length;
  o<a;
  o++){
    const l=e[o], u=l.endIndex;
    if(i+50<u){
      const d=l.type,m=l.metadata,p=l.containsRTL;
      let g=-1,f=i;
      for(let A=i;
      A<u;
      A++)n.charCodeAt(A)===32&&(g=A),g!==-1&&A-f>=50&&(r[s++]=new A3(g+1,d,m,p),f=g+1,g=-1);
      f!==u&&(r[s++]=new A3(u,d,m,p))
    }
    else r[s++]=l;
    i=u
  }
  else for(let o=0, a=e.length;
  o<a;
  o++){
    const l=e[o], u=l.endIndex, d=u-i;
    if(d>50){
      const m=l.type,p=l.metadata,g=l.containsRTL,f=Math.ceil(d/50);
      for(let A=1;
      A<f;
      A++){
        const w=i+A*50;
        r[s++]=new A3(w,m,p,g)
      }
      r[s++]=new A3(u,m,p,g)
    }
    else r[s++]=l;
    i=u
  }
  return r
}
function kvh(n){
  return n<32?n!==9:n===127||n>=8234&&n<=8238||n>=8294&&n<=8297||n>=8206&&n<=8207||n===1564
}
function hcA(n, e){
  const t=[];
  let i=new A3(0, "", 0, !1), r=0;
  for(const s of e){
    const o=s.endIndex;
    for(;
    r<o;
    r++){
      const a=n.charCodeAt(r);
      kvh(a)&&(r>i.endIndex&&(i=new A3(r,s.type,s.metadata,s.containsRTL),t.push(i)),i=new A3(r+1,"mtkcontrol",s.metadata,!1),t.push(i))
    }
    r>i.endIndex&&(i=new A3(o, s.type, s.metadata, s.containsRTL), t.push(i))
  }
  return t
}
function mcA(n, e, t, i){
  const r=n.continuesWithWrappedLine, s=n.fauxIndentLength, o=n.tabSize, a=n.startVisibleColumn, l=n.useMonospaceOptimizations, u=n.selectionsOnLine, d=n.renderWhitespace===1, m=n.renderWhitespace===3, p=n.renderSpaceWidth!==n.spaceWidth, g=[];
  let f=0, A=0, w=i[A].type, C=i[A].containsRTL, x=i[A].endIndex;
  const I=i.length;
  let B=!1, R=TH(e), N;
  R===-1?(B=!0, R=t, N=t):N=mde(e);
  let M=!1, O=0, $=u&&u[O], H=a%o;
  for(let z=s;
  z<t;
  z++){
    const Y=e.charCodeAt(z);
    $&&z>=$.endOffset&&(O++, $=u&&u[O]);
    let j;
    if(z<R||z>N)j=!0;
    else if(Y===9)j=!0;
    else if(Y===32)if(d)if(M)j=!0;
    else{
      const X=z+1<t?e.charCodeAt(z+1):0;
      j=X===32||X===9
    }
    else j=!0;
    else j=!1;
    if(j&&u&&(j=!!$&&$.startOffset<=z&&$.endOffset>z), j&&m&&(j=B||z>N), j&&C&&z>=R&&z<=N&&(j=!1), M){
      if(!j||!l&&H>=o){
        if(p){
          const X=f>0?g[f-1].endIndex:s;
          for(let ee=X+1;
          ee<=z;
          ee++)g[f++]=new A3(ee,"mtkw",1,!1)
        }
        else g[f++]=new A3(z,"mtkw",1,!1);
        H=H%o
      }
    }
    else(z===x||j&&z>s)&&(g[f++]=new A3(z, w, 0, C), H=H%o);
    for(Y===9?H=o:Ize(Y)?H+=2:H++, M=j;
    z===x&&(A++, A<I);
    )w=i[A].type, C=i[A].containsRTL, x=i[A].endIndex
  }
  let W=!1;
  if(M)if(r&&d){
    const z=t>0?e.charCodeAt(t-1):0, Y=t>1?e.charCodeAt(t-2):0;
    z===32&&Y!==32&&Y!==9||(W=!0)
  }
  else W=!0;
  if(W)if(p){
    const z=f>0?g[f-1].endIndex:s;
    for(let Y=z+1;
    Y<=t;
    Y++)g[f++]=new A3(Y, "mtkw", 1, !1)
  }
  else g[f++]=new A3(t, "mtkw", 1, !1);
  else g[f++]=new A3(t, w, 0, C);
  return g
}
function pcA(n, e, t, i){
  i.sort(lz.compare);
  const r=Cvh.normalize(n, i), s=r.length;
  let o=0;
  const a=[];
  let l=0, u=0;
  for(let m=0, p=t.length;
  m<p;
  m++){
    const g=t[m], f=g.endIndex, A=g.type, w=g.metadata, C=g.containsRTL;
    for(;
    o<s&&r[o].startOffset<f;
    ){
      const x=r[o];
      if(x.startOffset>u&&(u=x.startOffset,a[l++]=new A3(u,A,w,C)),x.endOffset+1<=f)u=x.endOffset+1,a[l++]=new A3(u,A+" "+x.className,w|x.metadata,C),o++;
      else{
        u=f,a[l++]=new A3(u,A+" "+x.className,w|x.metadata,C);
        break
      }
    }
    f>u&&(u=f, a[l++]=new A3(u, A, w, C))
  }
  const d=t[t.length-1].endIndex;
  if(o<s&&r[o].startOffset===d)for(;
  o<s&&r[o].startOffset===d;
  ){
    const m=r[o];
    a[l++]=new A3(u, m.className, m.metadata, !1), o++
  }
  return a
}
function gcA(n, e){
  const t=n.fontIsMonospace, i=n.canUseHalfwidthRightwardsArrow, r=n.containsForeignElements, s=n.lineContent, o=n.len, a=n.isOverflowing, l=n.overflowingCharCount, u=n.parts, d=n.fauxIndentLength, m=n.tabSize, p=n.startVisibleColumn, g=n.containsRTL, f=n.spaceWidth, A=n.renderSpaceCharCode, w=n.renderWhitespace, C=n.renderControlCharacters, x=new n3o(o+1, u.length);
  let I=!1, B=0, R=p, N=0, M=0, O=0;
  g?e.appendString('<span dir="ltr">'):e.appendString("<span>");
  for(let $=0, H=u.length;
  $<H;
  $++){
    const W=u[$], z=W.endIndex, Y=W.type, j=W.containsRTL, X=w!==0&&W.isWhitespace(), ee=X&&!t&&(Y==="mtkw"||!r), re=B===z&&W.isPseudoAfter();
    if(N=0, e.appendString("<span "), j&&e.appendString('style="unicode-bidi:isolate" '), e.appendString('class="'), e.appendString(ee?"mtkz":Y), e.appendASCIICharCode(34), X){
      let ne=0;
      {
        let pe=B,le=R;
        for(;
        pe<z;
        pe++){
          const be=(s.charCodeAt(pe)===9?m-le%m:1)|0;
          ne+=be,pe>=d&&(le+=be)
        }
      }
      for(ee&&(e.appendString(' style="width:'),e.appendString(String(f*ne)),e.appendString('px"')),e.appendASCIICharCode(62);
      B<z;
      B++){
        x.setColumnInfo(B+1,$-O,N,M),O=0;
        const pe=s.charCodeAt(B);
        let le,he;
        if(pe===9){
          le=m-R%m|0,he=le,!i||he>1?e.appendCharCode(8594):e.appendCharCode(65515);
          for(let be=2;
          be<=he;
          be++)e.appendCharCode(160)
        }
        else le=2,he=1,e.appendCharCode(A),e.appendCharCode(8204);
        N+=le,M+=he,B>=d&&(R+=he)
      }
    }
    else for(e.appendASCIICharCode(62);
    B<z;
    B++){
      x.setColumnInfo(B+1,$-O,N,M),O=0;
      const ne=s.charCodeAt(B);
      let pe=1,le=1;
      switch(ne){
        case 9:pe=m-R%m,le=pe;
        for(let he=1;
        he<=pe;
        he++)e.appendCharCode(160);
        break;
        case 32:e.appendCharCode(160);
        break;
        case 60:e.appendString("&lt;");
        break;
        case 62:e.appendString("&gt;");
        break;
        case 38:e.appendString("&amp;");
        break;
        case 0:C?e.appendCharCode(9216):e.appendString("&#00;");
        break;
        case 65279:case 8232:case 8233:case 133:e.appendCharCode(65533);
        break;
        default:Ize(ne)&&le++,C&&ne<32?e.appendCharCode(9216+ne):C&&ne===127?e.appendCharCode(9249):C&&kvh(ne)?(e.appendString("[U+"),e.appendString(fcA(ne)),e.appendString("]"),pe=8,le=pe):e.appendCharCode(ne)
      }
      N+=pe,M+=le,B>=d&&(R+=le)
    }
    re?O++:O=0, B>=o&&!I&&W.isPseudoAfter()&&(I=!0, x.setColumnInfo(B+1, $, N, M)), e.appendString("</span>")
  }
  return I||x.setColumnInfo(o+1, u.length-1, N, M), a&&(e.appendString('<span class="mtkoverflow">'), e.appendString(_(933, null, bcA(l))), e.appendString("</span>")), e.appendString("</span>"), new i3o(x, g, r)
}
function fcA(n){
  return n.toString(16).toUpperCase().padStart(4, "0")
}
function bcA(n){
  return n<1024?_(934, null, n):n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/1024/1024).toFixed(1)} MB`
}
var Evh, ATc, JVe, xvh, yTc, n3o, Tvh, i3o, Ivh, Dvh, Bvh, Qft=