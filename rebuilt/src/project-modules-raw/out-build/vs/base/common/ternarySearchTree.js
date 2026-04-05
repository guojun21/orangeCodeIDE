// Module: out-build/vs/base/common/ternarySearchTree.js
// Offset: 914796 (bundle byte offset)
// Size: 10326 bytes

Vs(), oa(), Ldh=class{
  constructor(){
    this._value="", this._pos=0
  }
  reset(n){
    return this._value=n, this._pos=0, this
  }
  next(){
    return this._pos+=1, this
  }
  hasNext(){
    return this._pos<this._value.length-1
  }
  cmp(n){
    const e=n.charCodeAt(0), t=this._value.charCodeAt(this._pos);
    return e-t
  }
  value(){
    return this._value[this._pos]
  }
}, Ndh=class{
  constructor(n=!0){
    this._caseSensitive=n
  }
  reset(n){
    return this._value=n, this._from=0, this._to=0, this.next()
  }
  hasNext(){
    return this._to<this._value.length
  }
  next(){
    this._from=this._to;
    let n=!0;
    for(;
    this._to<this._value.length;
    this._to++)if(this._value.charCodeAt(this._to)===46)if(n)this._from++;
    else break;
    else n=!1;
    return this
  }
  cmp(n){
    return this._caseSensitive?c2o(n, this._value, 0, n.length, this._from, this._to):rFn(n, this._value, 0, n.length, this._from, this._to)
  }
  value(){
    return this._value.substring(this._from, this._to)
  }
}, mOt=class{
  constructor(n=!0, e=!0){
    this._splitOnBackslash=n, this._caseSensitive=e
  }
  reset(n){
    this._from=0, this._to=0, this._value=n, this._valueLen=n.length;
    for(let e=n.length-1;
    e>=0;
    e--, this._valueLen--){
      const t=this._value.charCodeAt(e);
      if(!(t===47||this._splitOnBackslash&&t===92))break
    }
    return this.next()
  }
  hasNext(){
    return this._to<this._valueLen
  }
  next(){
    this._from=this._to;
    let n=!0;
    for(;
    this._to<this._valueLen;
    this._to++){
      const e=this._value.charCodeAt(this._to);
      if(e===47||this._splitOnBackslash&&e===92)if(n)this._from++;
      else break;
      else n=!1
    }
    return this
  }
  cmp(n){
    return this._caseSensitive?c2o(n, this._value, 0, n.length, this._from, this._to):rFn(n, this._value, 0, n.length, this._from, this._to)
  }
  value(){
    return this._value.substring(this._from, this._to)
  }
}, (function(n){
  n[n.Scheme=1]="Scheme", n[n.Authority=2]="Authority", n[n.Path=3]="Path", n[n.Query=4]="Query", n[n.Fragment=5]="Fragment"
})(Mdh||(Mdh={
  
})), Fdh=class{
  constructor(n, e){
    this._ignorePathCasing=n, this._ignoreQueryAndFragment=e, this._states=[], this._stateIdx=0
  }
  reset(n){
    return this._value=n, this._states=[], this._value.scheme&&this._states.push(1), this._value.authority&&this._states.push(2), this._value.path&&(this._pathIterator=new mOt(!1, !this._ignorePathCasing(n)), this._pathIterator.reset(n.path), this._pathIterator.value()&&this._states.push(3)), this._ignoreQueryAndFragment(n)||(this._value.query&&this._states.push(4), this._value.fragment&&this._states.push(5)), this._stateIdx=0, this
  }
  next(){
    return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()?this._pathIterator.next():this._stateIdx+=1, this
  }
  hasNext(){
    return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()||this._stateIdx<this._states.length-1
  }
  cmp(n){
    if(this._states[this._stateIdx]===1)return Tbe(n, this._value.scheme);
    if(this._states[this._stateIdx]===2)return Tbe(n, this._value.authority);
    if(this._states[this._stateIdx]===3)return this._pathIterator.cmp(n);
    if(this._states[this._stateIdx]===4)return R4(n, this._value.query);
    if(this._states[this._stateIdx]===5)return R4(n, this._value.fragment);
    throw new Error
  }
  value(){
    if(this._states[this._stateIdx]===1)return this._value.scheme;
    if(this._states[this._stateIdx]===2)return this._value.authority;
    if(this._states[this._stateIdx]===3)return this._pathIterator.value();
    if(this._states[this._stateIdx]===4)return this._value.query;
    if(this._states[this._stateIdx]===5)return this._value.fragment;
    throw new Error
  }
}, fVe=class had{
  static{
    this.Val=Symbol("undefined_placeholder")
  }
  static wrap(e){
    return e===void 0?had.Val:e
  }
  static unwrap(e){
    return e===had.Val?void 0:e
  }
}, z4n=class{
  constructor(){
    this.height=1
  }
  isEmpty(){
    return!this.left&&!this.mid&&!this.right&&this.value===void 0
  }
  rotateLeft(){
    const n=this.right;
    return this.right=n.left, n.left=this, this.updateHeight(), n.updateHeight(), n
  }
  rotateRight(){
    const n=this.left;
    return this.left=n.right, n.right=this, this.updateHeight(), n.updateHeight(), n
  }
  updateHeight(){
    this.height=1+Math.max(this.heightLeft, this.heightRight)
  }
  balanceFactor(){
    return this.heightRight-this.heightLeft
  }
  get heightLeft(){
    return this.left?.height??0
  }
  get heightRight(){
    return this.right?.height??0
  }
}, (function(n){
  n[n.Left=-1]="Left", n[n.Mid=0]="Mid", n[n.Right=1]="Right"
})(Odh||(Odh={
  
})), MH=class cNi{
  static forUris(e=()=>!1, t=()=>!1){
    return new cNi(new Fdh(e, t))
  }
  static forPaths(e=!1){
    return new cNi(new mOt(void 0, !e))
  }
  static forStrings(){
    return new cNi(new Ldh)
  }
  static forConfigKeys(){
    return new cNi(new Ndh)
  }
  constructor(e){
    this._iter=e
  }
  clear(){
    this._root=void 0
  }
  fill(e, t){
    if(t){
      const i=t.slice(0);
      q2n(i);
      for(const r of i)this.set(r,e)
    }
    else{
      const i=e.slice(0);
      q2n(i);
      for(const r of i)this.set(r[0],r[1])
    }
  }
  set(e, t){
    const i=this._iter.reset(e);
    let r;
    this._root||(this._root=new z4n, this._root.segment=i.value());
    const s=[];
    for(r=this._root;
    ;
    ){
      const a=i.cmp(r.segment);
      if(a>0)r.left||(r.left=new z4n,r.left.segment=i.value()),s.push([-1,r]),r=r.left;
      else if(a<0)r.right||(r.right=new z4n,r.right.segment=i.value()),s.push([1,r]),r=r.right;
      else if(i.hasNext())i.next(),r.mid||(r.mid=new z4n,r.mid.segment=i.value()),s.push([0,r]),r=r.mid;
      else break
    }
    const o=fVe.unwrap(r.value);
    r.value=fVe.wrap(t), r.key=e;
    for(let a=s.length-1;
    a>=0;
    a--){
      const l=s[a][1];
      l.updateHeight();
      const u=l.balanceFactor();
      if(u<-1||u>1){
        const d=s[a][0],m=s[a+1][0];
        if(d===1&&m===1)s[a][1]=l.rotateLeft();
        else if(d===-1&&m===-1)s[a][1]=l.rotateRight();
        else if(d===1&&m===-1)l.right=s[a+1][1]=s[a+1][1].rotateRight(),s[a][1]=l.rotateLeft();
        else if(d===-1&&m===1)l.left=s[a+1][1]=s[a+1][1].rotateLeft(),s[a][1]=l.rotateRight();
        else throw new Error;
        if(a>0)switch(s[a-1][0]){
          case-1:s[a-1][1].left=s[a][1];
          break;
          case 1:s[a-1][1].right=s[a][1];
          break;
          case 0:s[a-1][1].mid=s[a][1];
          break
        }
        else this._root=s[0][1]
      }
    }
    return o
  }
  get(e){
    return fVe.unwrap(this._getNode(e)?.value)
  }
  _getNode(e){
    const t=this._iter.reset(e);
    let i=this._root;
    for(;
    i;
    ){
      const r=t.cmp(i.segment);
      if(r>0)i=i.left;
      else if(r<0)i=i.right;
      else if(t.hasNext())t.next(),i=i.mid;
      else break
    }
    return i
  }
  has(e){
    const t=this._getNode(e);
    return!(t?.value===void 0&&t?.mid===void 0)
  }
  delete(e){
    return this._delete(e, !1)
  }
  deleteSuperstr(e){
    return this._delete(e, !0)
  }
  _delete(e, t){
    const i=this._iter.reset(e), r=[];
    let s=this._root;
    for(;
    s;
    ){
      const o=i.cmp(s.segment);
      if(o>0)r.push([-1,s]),s=s.left;
      else if(o<0)r.push([1,s]),s=s.right;
      else if(i.hasNext())i.next(),r.push([0,s]),s=s.mid;
      else break
    }
    if(s){
      if(t?(s.left=void 0,s.mid=void 0,s.right=void 0,s.height=1):(s.key=void 0,s.value=void 0),!s.mid&&!s.value)if(s.left&&s.right){
        const o=this._min(s.right);
        if(o.key){
          const{
            key:a,value:l,segment:u
          }
          =o;
          this._delete(o.key,!1),s.key=a,s.value=l,s.segment=u
        }
      }
      else{
        const o=s.left??s.right;
        if(r.length>0){
          const[a,l]=r[r.length-1];
          switch(a){
            case-1:l.left=o;
            break;
            case 0:l.mid=o;
            break;
            case 1:l.right=o;
            break
          }
        }
        else this._root=o
      }
      for(let o=r.length-1;
      o>=0;
      o--){
        const a=r[o][1];
        a.updateHeight();
        const l=a.balanceFactor();
        if(l>1?(a.right.balanceFactor()>=0||(a.right=a.right.rotateRight()),r[o][1]=a.rotateLeft()):l<-1&&(a.left.balanceFactor()<=0||(a.left=a.left.rotateLeft()),r[o][1]=a.rotateRight()),o>0)switch(r[o-1][0]){
          case-1:r[o-1][1].left=r[o][1];
          break;
          case 1:r[o-1][1].right=r[o][1];
          break;
          case 0:r[o-1][1].mid=r[o][1];
          break
        }
        else this._root=r[0][1]
      }
    }
  }
  _min(e){
    for(;
    e.left;
    )e=e.left;
    return e
  }
  findSubstr(e){
    const t=this._iter.reset(e);
    let i=this._root, r;
    for(;
    i;
    ){
      const s=t.cmp(i.segment);
      if(s>0)i=i.left;
      else if(s<0)i=i.right;
      else if(t.hasNext())t.next(),r=fVe.unwrap(i.value)||r,i=i.mid;
      else break
    }
    return i&&fVe.unwrap(i.value)||r
  }
  findSuperstr(e){
    return this._findSuperstrOrElement(e, !1)
  }
  _findSuperstrOrElement(e, t){
    const i=this._iter.reset(e);
    let r=this._root;
    for(;
    r;
    ){
      const s=i.cmp(r.segment);
      if(s>0)r=r.left;
      else if(s<0)r=r.right;
      else if(i.hasNext())i.next(),r=r.mid;
      else return r.mid?this._entries(r.mid):t?fVe.unwrap(r.value):void 0
    }
  }
  hasElementOrSubtree(e){
    return this._findSuperstrOrElement(e, !0)!==void 0
  }
  forEach(e){
    for(const[t, i]of this)e(i, t)
  }
  *[Symbol.iterator](){
    yield*this._entries(this._root)
  }
  _entries(e){
    const t=[];
    return this._dfsEntries(e, t), t[Symbol.iterator]()
  }
  _dfsEntries(e, t){
    e&&(e.left&&this._dfsEntries(e.left, t), e.value!==void 0&&t.push([e.key, fVe.unwrap(e.value)]), e.mid&&this._dfsEntries(e.mid, t), e.right&&this._dfsEntries(e.right, t))
  }
  _isBalanced(){
    const e=t=>{
      if(!t)return!0;
      const i=t.balanceFactor();
      return i<-1||i>1?!1:e(t.left)&&e(t.right)
    };
    return e(this._root)
  }
}
}
});
function VsA(n){
  const e=n;
  return!!e&&typeof e.onDidChange=="function"
}
function Bde(n){
  return!!(n.capabilities&2)
}
function Q1c(n){
  return!!(n.capabilities&8)
}
function Udh(n){
  return!!(n.capabilities&131072)
}
function bVe(n){
  return!!(n.capabilities&4)
}
function j1c(n){
  return!!(n.capabilities&16)
}
function z1c(n){
  return Bde(n)?!!(n.capabilities&16384):!1
}
function $dh(n){
  return Bde(n)?!!(n.capabilities&32768):!1
}
function KsA(n){
  return!!(n.capabilities&65536)
}
function YsA(n){
  return!!(n.capabilities&2048)
}
function eL(n, e){
  return V4n.create(n, e)
}
function bft(n){
  return n||eL(_(2032, null), Qm.Unknown)
}
function qdh(n, e){
  return n.name=e?`${e} (FileSystemError)`:"FileSystemError", n
}
function tRe(n){
  if(!n)return Qm.Unknown;
  if(n instanceof V4n)return n.code;
  const e=/^(.+) \(FileSystemError\)$/.exec(n.name);
  if(!e)return Qm.Unknown;
  switch(e[1]){
    case Qm.FileExists:return Qm.FileExists;
    case Qm.FileIsADirectory:return Qm.FileIsADirectory;
    case Qm.FileNotADirectory:return Qm.FileNotADirectory;
    case Qm.FileNotFound:return Qm.FileNotFound;
    case Qm.FileTooLarge:return Qm.FileTooLarge;
    case Qm.FileWriteLocked:return Qm.FileWriteLocked;
    case Qm.NoPermissions:return Qm.NoPermissions;
    case Qm.Unavailable:return Qm.Unavailable
  }
  return Qm.Unknown
}
function Loe(n){
  if(n instanceof GI)return n.fileOperationResult;
  switch(tRe(n)){
    case Qm.FileNotFound:return 1;
    case Qm.FileIsADirectory:return 0;
    case Qm.FileNotADirectory:return 9;
    case Qm.FileWriteLocked:return 5;
    case Qm.NoPermissions:return 6;
    case Qm.FileExists:return 4;
    case Qm.FileTooLarge:return 7;
    default:return 10
  }
}
function Hdh(n){
  if(!(typeof n.size!="number"||typeof n.mtime!="number"))return n.mtime.toString(29)+n.size.toString(31)
}
async function Jdh(n, e){
  if(!e.hasProvider(je.from({
    scheme:n.scheme
  })))return new Promise(t=>{
    const i=e.onDidChangeFileSystemProviderRegistrations(r=>{
      r.scheme===n.scheme&&r.added&&(i.dispose(),t())
    })
  })
}
function Gdh(n){
  const e=typeof n=="string"||n?.scheme===_n.vscodeRemote;
  return typeof n!="string"&&n?.scheme===_n.file?1024*dT.MB:e?10*dT.MB:Eu?50*dT.MB:1024*dT.MB
}
var Gr, JI, nRe, Wdh, Qdh, Qm, V4n, jdh, z5e, zdh, V5e, GI, vVe, pOt, Vdh, g3, FH, gOt, V1c, K1c, Y1c, Kdh, xg, zbe, dT, ns=