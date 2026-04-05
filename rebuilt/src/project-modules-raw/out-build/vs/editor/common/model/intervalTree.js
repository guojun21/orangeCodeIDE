// Module: out-build/vs/editor/common/model/intervalTree.js
// Offset: 1135249 (bundle byte offset)
// Size: 7185 bytes

(function(n){
  n.EditorHintDecoration="squiggly-hint", n.EditorInfoDecoration="squiggly-info", n.EditorWarningDecoration="squiggly-warning", n.EditorAIDecoration="squiggly-ai", n.EditorErrorDecoration="squiggly-error", n.EditorUnnecessaryDecoration="squiggly-unnecessary", n.EditorUnnecessaryInlineDecoration="squiggly-inline-unnecessary", n.EditorDeprecatedInlineDecoration="squiggly-inline-deprecated"
})(tgh||(tgh={
  
})), (function(n){
  n[n.Black=0]="Black", n[n.Red=1]="Red"
})(ngh||(ngh={
  
})), (function(n){
  n[n.ColorMask=1]="ColorMask", n[n.ColorMaskInverse=254]="ColorMaskInverse", n[n.ColorOffset=0]="ColorOffset", n[n.IsVisitedMask=2]="IsVisitedMask", n[n.IsVisitedMaskInverse=253]="IsVisitedMaskInverse", n[n.IsVisitedOffset=1]="IsVisitedOffset", n[n.IsForValidationMask=4]="IsForValidationMask", n[n.IsForValidationMaskInverse=251]="IsForValidationMaskInverse", n[n.IsForValidationOffset=2]="IsForValidationOffset", n[n.StickinessMask=24]="StickinessMask", n[n.StickinessMaskInverse=231]="StickinessMaskInverse", n[n.StickinessOffset=3]="StickinessOffset", n[n.CollapseOnReplaceEditMask=32]="CollapseOnReplaceEditMask", n[n.CollapseOnReplaceEditMaskInverse=223]="CollapseOnReplaceEditMaskInverse", n[n.CollapseOnReplaceEditOffset=5]="CollapseOnReplaceEditOffset", n[n.IsMarginMask=64]="IsMarginMask", n[n.IsMarginMaskInverse=191]="IsMarginMaskInverse", n[n.IsMarginOffset=6]="IsMarginOffset", n[n.MIN_SAFE_DELTA=-1073741824]="MIN_SAFE_DELTA", n[n.MAX_SAFE_DELTA=1073741824]="MAX_SAFE_DELTA"
})(igh||(igh={
  
})), pOo=class{
  constructor(n, e, t){
    this.metadata=0, this.parent=this, this.left=this, this.right=this, tI(this, 1), this.start=e, this.end=t, this.delta=0, this.maxEnd=t, this.id=n, this.ownerId=0, this.options=null, Qph(this, !1), zph(this, !1), Vph(this, 1), Kph(this, !1), this.cachedVersionId=0, this.cachedAbsoluteStart=e, this.cachedAbsoluteEnd=t, this.range=null, mT(this, !1)
  }
  reset(n, e, t, i){
    this.start=e, this.end=t, this.maxEnd=t, this.cachedVersionId=n, this.cachedAbsoluteStart=e, this.cachedAbsoluteEnd=t, this.range=i
  }
  setOptions(n){
    this.options=n;
    const e=this.options.className;
    Qph(this, e==="squiggly-error"||e==="squiggly-warning"||e==="squiggly-info"), zph(this, this.options.glyphMarginClassName!==null), Vph(this, this.options.stickiness), Kph(this, this.options.collapseOnReplaceEdit)
  }
  setCachedOffsets(n, e, t){
    this.cachedVersionId!==t&&(this.range=null), this.cachedVersionId=t, this.cachedAbsoluteStart=n, this.cachedAbsoluteEnd=e
  }
  detach(){
    this.parent=null, this.left=null, this.right=null
  }
}, _y=new pOo(null, 0, 0), _y.parent=_y, _y.left=_y, _y.right=_y, tI(_y, 0), mOn=class{
  constructor(){
    this.root=_y, this.requestNormalizeDelta=!1
  }
  intervalSearch(n, e, t, i, r, s){
    return this.root===_y?[]:KoA(this, n, e, t, i, r, s)
  }
  search(n, e, t, i){
    return this.root===_y?[]:Yph(this, n, e, t, i)
  }
  collectNodesFromOwner(n){
    return zoA(this, n)
  }
  collectNodesPostOrder(){
    return VoA(this)
  }
  insert(n){
    Zph(this, n), this._normalizeDeltaIfNecessary()
  }
  delete(n){
    Xph(this, n), this._normalizeDeltaIfNecessary()
  }
  resolveNode(n, e){
    const t=n;
    let i=0;
    for(;
    n!==this.root;
    )n===n.parent.right&&(i+=n.parent.delta), n=n.parent;
    const r=t.start+i, s=t.end+i;
    t.setCachedOffsets(r, s, e)
  }
  acceptReplace(n, e, t, i){
    const r=QoA(this, n, n+e);
    for(let s=0, o=r.length;
    s<o;
    s++){
      const a=r[s];
      Xph(this,a)
    }
    this._normalizeDeltaIfNecessary(), joA(this, n, n+e, t), this._normalizeDeltaIfNecessary();
    for(let s=0, o=r.length;
    s<o;
    s++){
      const a=r[s];
      a.start=a.cachedAbsoluteStart,a.end=a.cachedAbsoluteEnd,WoA(a,n,n+e,t,i),a.maxEnd=a.end,Zph(this,a)
    }
    this._normalizeDeltaIfNecessary()
  }
  getAllInOrder(){
    return Yph(this, 0, !1, 0, !1)
  }
  _normalizeDeltaIfNecessary(){
    this.requestNormalizeDelta&&(this.requestNormalizeDelta=!1, GoA(this))
  }
}, (function(n){
  n[n.MarkerDefined=0]="MarkerDefined", n[n.ForceMove=1]="ForceMove", n[n.ForceStay=2]="ForceStay"
})(rgh||(rgh={
  
}))
}
});
function jEc(n){
  for(;
  n.left!==jb;
  )n=n.left;
  return n
}
function ogh(n){
  for(;
  n.right!==jb;
  )n=n.right;
  return n
}
function zEc(n){
  return n===jb?0:n.size_left+n.piece.length+zEc(n.right)
}
function VEc(n){
  return n===jb?0:n.lf_left+n.piece.lineFeedCnt+VEc(n.right)
}
function KEc(){
  jb.parent=jb
}
function pOn(n, e){
  const t=e.right;
  t.size_left+=e.size_left+(e.piece?e.piece.length:0), t.lf_left+=e.lf_left+(e.piece?e.piece.lineFeedCnt:0), e.right=t.left, t.left!==jb&&(t.left.parent=e), t.parent=e.parent, e.parent===jb?n.root=t:e.parent.left===e?e.parent.left=t:e.parent.right=t, t.left=e, e.parent=t
}
function gOn(n, e){
  const t=e.left;
  e.left=t.right, t.right!==jb&&(t.right.parent=e), t.parent=e.parent, e.size_left-=t.size_left+(t.piece?t.piece.length:0), e.lf_left-=t.lf_left+(t.piece?t.piece.lineFeedCnt:0), e.parent===jb?n.root=t:e===e.parent.right?e.parent.right=t:e.parent.left=t, t.right=e, e.parent=t
}
function gOo(n, e){
  let t, i;
  if(e.left===jb?(i=e, t=i.right):e.right===jb?(i=e, t=i.left):(i=jEc(e.right), t=i.right), i===n.root){
    n.root=t, t.color=0, e.detach(), KEc(), n.root.parent=jb;
    return
  }
  const r=i.color===1;
  if(i===i.parent.left?i.parent.left=t:i.parent.right=t, i===e?(t.parent=i.parent, fOn(n, t)):(i.parent===e?t.parent=i:t.parent=i.parent, fOn(n, t), i.left=e.left, i.right=e.right, i.parent=e.parent, i.color=e.color, e===n.root?n.root=i:e===e.parent.left?e.parent.left=i:e.parent.right=i, i.left!==jb&&(i.left.parent=i), i.right!==jb&&(i.right.parent=i), i.size_left=e.size_left, i.lf_left=e.lf_left, fOn(n, i)), e.detach(), t.parent.left===t){
    const o=zEc(t), a=VEc(t);
    if(o!==t.parent.size_left||a!==t.parent.lf_left){
      const l=o-t.parent.size_left,u=a-t.parent.lf_left;
      t.parent.size_left=o,t.parent.lf_left=a,n9e(n,t.parent,l,u)
    }
  }
  if(fOn(n, t.parent), r){
    KEc();
    return
  }
  let s;
  for(;
  t!==n.root&&t.color===0;
  )t===t.parent.left?(s=t.parent.right, s.color===1&&(s.color=0, t.parent.color=1, pOn(n, t.parent), s=t.parent.right), s.left.color===0&&s.right.color===0?(s.color=1, t=t.parent):(s.right.color===0&&(s.left.color=0, s.color=1, gOn(n, s), s=t.parent.right), s.color=t.parent.color, t.parent.color=0, s.right.color=0, pOn(n, t.parent), t=n.root)):(s=t.parent.left, s.color===1&&(s.color=0, t.parent.color=1, gOn(n, t.parent), s=t.parent.left), s.left.color===0&&s.right.color===0?(s.color=1, t=t.parent):(s.left.color===0&&(s.right.color=0, s.color=1, pOn(n, s), s=t.parent.left), s.color=t.parent.color, t.parent.color=0, s.left.color=0, gOn(n, t.parent), t=n.root));
  t.color=0, KEc()
}
function agh(n, e){
  for(fOn(n, e);
  e!==n.root&&e.parent.color===1;
  )if(e.parent===e.parent.parent.left){
    const t=e.parent.parent.right;
    t.color===1?(e.parent.color=0, t.color=0, e.parent.parent.color=1, e=e.parent.parent):(e===e.parent.right&&(e=e.parent, pOn(n, e)), e.parent.color=0, e.parent.parent.color=1, gOn(n, e.parent.parent))
  }
  else{
    const t=e.parent.parent.left;
    t.color===1?(e.parent.color=0, t.color=0, e.parent.parent.color=1, e=e.parent.parent):(e===e.parent.left&&(e=e.parent, gOn(n, e)), e.parent.color=0, e.parent.parent.color=1, pOn(n, e.parent.parent))
  }
  n.root.color=0
}
function n9e(n, e, t, i){
  for(;
  e!==n.root&&e!==jb;
  )e.parent.left===e&&(e.parent.size_left+=t, e.parent.lf_left+=i), e=e.parent
}
function fOn(n, e){
  let t=0, i=0;
  if(e!==n.root){
    for(;
    e!==n.root&&e===e.parent.right;
    )e=e.parent;
    if(e!==n.root)for(e=e.parent, t=zEc(e.left)-e.size_left, i=VEc(e.left)-e.lf_left, e.size_left+=t, e.lf_left+=i;
    e!==n.root&&(t!==0||i!==0);
    )e.parent.left===e&&(e.parent.size_left+=t, e.parent.lf_left+=i), e=e.parent
  }
}
var fOo, cgh, jb, eaA=