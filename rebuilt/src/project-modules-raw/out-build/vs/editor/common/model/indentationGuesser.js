// Module: out-build/vs/editor/common/model/indentationGuesser.js
// Offset: 1127390 (bundle byte offset)
// Size: 7859 bytes

Gph=class{
  constructor(){
    this.spacesDiff=0, this.looksLikeAlignment=!1
  }
}
}
});
function UY(n){
  return(n.metadata&1)>>>0
}
function tI(n, e){
  n.metadata=n.metadata&254|e<<0
}
function W$(n){
  return(n.metadata&2)>>>1===1
}
function mT(n, e){
  n.metadata=n.metadata&253|(e?1:0)<<1
}
function Wph(n){
  return(n.metadata&4)>>>2===1
}
function Qph(n, e){
  n.metadata=n.metadata&251|(e?1:0)<<2
}
function jph(n){
  return(n.metadata&64)>>>6===1
}
function zph(n, e){
  n.metadata=n.metadata&191|(e?1:0)<<6
}
function HoA(n){
  return(n.metadata&24)>>>3
}
function Vph(n, e){
  n.metadata=n.metadata&231|e<<3
}
function JoA(n){
  return(n.metadata&32)>>>5===1
}
function Kph(n, e){
  n.metadata=n.metadata&223|(e?1:0)<<5
}
function GoA(n){
  let e=n.root, t=0;
  for(;
  e!==_y;
  ){
    if(e.left!==_y&&!W$(e.left)){
      e=e.left;
      continue
    }
    if(e.right!==_y&&!W$(e.right)){
      t+=e.delta,e=e.right;
      continue
    }
    e.start=t+e.start, e.end=t+e.end, e.delta=0, RVe(e), mT(e, !0), mT(e.left, !1), mT(e.right, !1), e===e.parent.right&&(t-=e.parent.delta), e=e.parent
  }
  mT(n.root, !1)
}
function ROt(n, e, t, i){
  return n<t?!0:n>t||i===1?!1:i===2?!0:e
}
function WoA(n, e, t, i, r){
  const s=HoA(n), o=s===0||s===2, a=s===1||s===2, l=t-e, u=i, d=Math.min(l, u), m=n.start;
  let p=!1;
  const g=n.end;
  let f=!1;
  e<=m&&g<=t&&JoA(n)&&(n.start=e, p=!0, n.end=e, f=!0);
  {
    const w=r?1:l>0?2:0;
    !p&&ROt(m, o, e, w)&&(p=!0), !f&&ROt(g, a, e, w)&&(f=!0)
  }
  if(d>0&&!r){
    const w=l>u?2:0;
    !p&&ROt(m, o, e+d, w)&&(p=!0), !f&&ROt(g, a, e+d, w)&&(f=!0)
  }
  {
    const w=r?1:0;
    !p&&ROt(m, o, t, w)&&(n.start=e+u, p=!0), !f&&ROt(g, a, t, w)&&(n.end=e+u, f=!0)
  }
  const A=u-l;
  p||(n.start=Math.max(0, m+A)), f||(n.end=Math.max(0, g+A)), n.start>n.end&&(n.end=n.start)
}
function QoA(n, e, t){
  let i=n.root, r=0, s=0, o=0, a=0;
  const l=[];
  let u=0;
  for(;
  i!==_y;
  ){
    if(W$(i)){
      mT(i.left,!1),mT(i.right,!1),i===i.parent.right&&(r-=i.parent.delta),i=i.parent;
      continue
    }
    if(!W$(i.left)){
      if(s=r+i.maxEnd,s<e){
        mT(i,!0);
        continue
      }
      if(i.left!==_y){
        i=i.left;
        continue
      }
    }
    if(o=r+i.start, o>t){
      mT(i,!0);
      continue
    }
    if(a=r+i.end, a>=e&&(i.setCachedOffsets(o, a, 0), l[u++]=i), mT(i, !0), i.right!==_y&&!W$(i.right)){
      r+=i.delta,i=i.right;
      continue
    }
  }
  return mT(n.root, !1), l
}
function joA(n, e, t, i){
  let r=n.root, s=0, o=0, a=0;
  const l=i-(t-e);
  for(;
  r!==_y;
  ){
    if(W$(r)){
      mT(r.left,!1),mT(r.right,!1),r===r.parent.right&&(s-=r.parent.delta),RVe(r),r=r.parent;
      continue
    }
    if(!W$(r.left)){
      if(o=s+r.maxEnd,o<e){
        mT(r,!0);
        continue
      }
      if(r.left!==_y){
        r=r.left;
        continue
      }
    }
    if(a=s+r.start, a>t){
      r.start+=l,r.end+=l,r.delta+=l,(r.delta<-1073741824||r.delta>1073741824)&&(n.requestNormalizeDelta=!0),mT(r,!0);
      continue
    }
    if(mT(r, !0), r.right!==_y&&!W$(r.right)){
      s+=r.delta,r=r.right;
      continue
    }
  }
  mT(n.root, !1)
}
function zoA(n, e){
  let t=n.root;
  const i=[];
  let r=0;
  for(;
  t!==_y;
  ){
    if(W$(t)){
      mT(t.left,!1),mT(t.right,!1),t=t.parent;
      continue
    }
    if(t.left!==_y&&!W$(t.left)){
      t=t.left;
      continue
    }
    if(t.ownerId===e&&(i[r++]=t), mT(t, !0), t.right!==_y&&!W$(t.right)){
      t=t.right;
      continue
    }
  }
  return mT(n.root, !1), i
}
function VoA(n){
  let e=n.root;
  const t=[];
  let i=0;
  for(;
  e!==_y;
  ){
    if(W$(e)){
      mT(e.left,!1),mT(e.right,!1),e=e.parent;
      continue
    }
    if(e.left!==_y&&!W$(e.left)){
      e=e.left;
      continue
    }
    if(e.right!==_y&&!W$(e.right)){
      e=e.right;
      continue
    }
    t[i++]=e, mT(e, !0)
  }
  return mT(n.root, !1), t
}
function Yph(n, e, t, i, r){
  let s=n.root, o=0, a=0, l=0;
  const u=[];
  let d=0;
  for(;
  s!==_y;
  ){
    if(W$(s)){
      mT(s.left,!1),mT(s.right,!1),s===s.parent.right&&(o-=s.parent.delta),s=s.parent;
      continue
    }
    if(s.left!==_y&&!W$(s.left)){
      s=s.left;
      continue
    }
    a=o+s.start, l=o+s.end, s.setCachedOffsets(a, l, i);
    let m=!0;
    if(e&&s.ownerId&&s.ownerId!==e&&(m=!1), t&&Wph(s)&&(m=!1), r&&!jph(s)&&(m=!1), m&&(u[d++]=s), mT(s, !0), s.right!==_y&&!W$(s.right)){
      o+=s.delta,s=s.right;
      continue
    }
  }
  return mT(n.root, !1), u
}
function KoA(n, e, t, i, r, s, o){
  let a=n.root, l=0, u=0, d=0, m=0;
  const p=[];
  let g=0;
  for(;
  a!==_y;
  ){
    if(W$(a)){
      mT(a.left,!1),mT(a.right,!1),a===a.parent.right&&(l-=a.parent.delta),a=a.parent;
      continue
    }
    if(!W$(a.left)){
      if(u=l+a.maxEnd,u<e){
        mT(a,!0);
        continue
      }
      if(a.left!==_y){
        a=a.left;
        continue
      }
    }
    if(d=l+a.start, d>t){
      mT(a,!0);
      continue
    }
    if(m=l+a.end, m>=e){
      a.setCachedOffsets(d,m,s);
      let f=!0;
      i&&a.ownerId&&a.ownerId!==i&&(f=!1),r&&Wph(a)&&(f=!1),o&&!jph(a)&&(f=!1),f&&(p[g++]=a)
    }
    if(mT(a, !0), a.right!==_y&&!W$(a.right)){
      l+=a.delta,a=a.right;
      continue
    }
  }
  return mT(n.root, !1), p
}
function Zph(n, e){
  if(n.root===_y)return e.parent=_y, e.left=_y, e.right=_y, tI(e, 0), n.root=e, n.root;
  YoA(n, e), PVe(e.parent);
  let t=e;
  for(;
  t!==n.root&&UY(t.parent)===1;
  )if(t.parent===t.parent.parent.left){
    const i=t.parent.parent.right;
    UY(i)===1?(tI(t.parent, 0), tI(i, 0), tI(t.parent.parent, 1), t=t.parent.parent):(t===t.parent.right&&(t=t.parent, dOn(n, t)), tI(t.parent, 0), tI(t.parent.parent, 1), hOn(n, t.parent.parent))
  }
  else{
    const i=t.parent.parent.left;
    UY(i)===1?(tI(t.parent, 0), tI(i, 0), tI(t.parent.parent, 1), t=t.parent.parent):(t===t.parent.left&&(t=t.parent, hOn(n, t)), tI(t.parent, 0), tI(t.parent.parent, 1), dOn(n, t.parent.parent))
  }
  return tI(n.root, 0), e
}
function YoA(n, e){
  let t=0, i=n.root;
  const r=e.start, s=e.end;
  for(;
  ;
  )if(XoA(r, s, i.start+t, i.end+t)<0)if(i.left===_y){
    e.start-=t, e.end-=t, e.maxEnd-=t, i.left=e;
    break
  }
  else i=i.left;
  else if(i.right===_y){
    e.start-=t+i.delta, e.end-=t+i.delta, e.maxEnd-=t+i.delta, i.right=e;
    break
  }
  else t+=i.delta, i=i.right;
  e.parent=i, e.left=_y, e.right=_y, tI(e, 1)
}
function Xph(n, e){
  let t, i;
  if(e.left===_y?(t=e.right, i=e, t.delta+=e.delta, (t.delta<-1073741824||t.delta>1073741824)&&(n.requestNormalizeDelta=!0), t.start+=e.delta, t.end+=e.delta):e.right===_y?(t=e.left, i=e):(i=ZoA(e.right), t=i.right, t.start+=i.delta, t.end+=i.delta, t.delta+=i.delta, (t.delta<-1073741824||t.delta>1073741824)&&(n.requestNormalizeDelta=!0), i.start+=e.delta, i.end+=e.delta, i.delta=e.delta, (i.delta<-1073741824||i.delta>1073741824)&&(n.requestNormalizeDelta=!0)), i===n.root){
    n.root=t, tI(t, 0), e.detach(), QEc(), RVe(t), n.root.parent=_y;
    return
  }
  const r=UY(i)===1;
  if(i===i.parent.left?i.parent.left=t:i.parent.right=t, i===e?t.parent=i.parent:(i.parent===e?t.parent=i:t.parent=i.parent, i.left=e.left, i.right=e.right, i.parent=e.parent, tI(i, UY(e)), e===n.root?n.root=i:e===e.parent.left?e.parent.left=i:e.parent.right=i, i.left!==_y&&(i.left.parent=i), i.right!==_y&&(i.right.parent=i)), e.detach(), r){
    PVe(t.parent), i!==e&&(PVe(i), PVe(i.parent)), QEc();
    return
  }
  PVe(t), PVe(t.parent), i!==e&&(PVe(i), PVe(i.parent));
  let s;
  for(;
  t!==n.root&&UY(t)===0;
  )t===t.parent.left?(s=t.parent.right, UY(s)===1&&(tI(s, 0), tI(t.parent, 1), dOn(n, t.parent), s=t.parent.right), UY(s.left)===0&&UY(s.right)===0?(tI(s, 1), t=t.parent):(UY(s.right)===0&&(tI(s.left, 0), tI(s, 1), hOn(n, s), s=t.parent.right), tI(s, UY(t.parent)), tI(t.parent, 0), tI(s.right, 0), dOn(n, t.parent), t=n.root)):(s=t.parent.left, UY(s)===1&&(tI(s, 0), tI(t.parent, 1), hOn(n, t.parent), s=t.parent.left), UY(s.left)===0&&UY(s.right)===0?(tI(s, 1), t=t.parent):(UY(s.left)===0&&(tI(s.right, 0), tI(s, 1), dOn(n, s), s=t.parent.left), tI(s, UY(t.parent)), tI(t.parent, 0), tI(s.left, 0), hOn(n, t.parent), t=n.root));
  tI(t, 0), QEc()
}
function ZoA(n){
  for(;
  n.left!==_y;
  )n=n.left;
  return n
}
function QEc(){
  _y.parent=_y, _y.delta=0, _y.start=0, _y.end=0
}
function dOn(n, e){
  const t=e.right;
  t.delta+=e.delta, (t.delta<-1073741824||t.delta>1073741824)&&(n.requestNormalizeDelta=!0), t.start+=e.delta, t.end+=e.delta, e.right=t.left, t.left!==_y&&(t.left.parent=e), t.parent=e.parent, e.parent===_y?n.root=t:e===e.parent.left?e.parent.left=t:e.parent.right=t, t.left=e, e.parent=t, RVe(e), RVe(t)
}
function hOn(n, e){
  const t=e.left;
  e.delta-=t.delta, (e.delta<-1073741824||e.delta>1073741824)&&(n.requestNormalizeDelta=!0), e.start-=t.delta, e.end-=t.delta, e.left=t.right, t.right!==_y&&(t.right.parent=e), t.parent=e.parent, e.parent===_y?n.root=t:e===e.parent.right?e.parent.right=t:e.parent.left=t, t.right=e, e.parent=t, RVe(e), RVe(t)
}
function egh(n){
  let e=n.end;
  if(n.left!==_y){
    const t=n.left.maxEnd;
    t>e&&(e=t)
  }
  if(n.right!==_y){
    const t=n.right.maxEnd+n.delta;
    t>e&&(e=t)
  }
  return e
}
function RVe(n){
  n.maxEnd=egh(n)
}
function PVe(n){
  for(;
  n!==_y;
  ){
    const e=egh(n);
    if(n.maxEnd===e)return;
    n.maxEnd=e, n=n.parent
  }
}
function XoA(n, e, t, i){
  return n===t?e-i:n-t
}
var tgh, ngh, igh, pOo, _y, mOn, rgh, sgh=