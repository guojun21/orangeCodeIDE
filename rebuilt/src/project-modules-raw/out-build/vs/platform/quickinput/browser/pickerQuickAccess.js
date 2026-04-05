// Module: out-build/vs/platform/quickinput/browser/pickerQuickAccess.js
// Offset: 27636160 (bundle byte offset)
// Size: 5371 bytes

vr(), Po(), rt(), Js(), (function(n){
  n[n.NO_ACTION=0]="NO_ACTION", n[n.CLOSE_PICKER=1]="CLOSE_PICKER", n[n.REFRESH_PICKER=2]="REFRESH_PICKER", n[n.REMOVE_ITEM=3]="REMOVE_ITEM"
})(HF||(HF={
  
})), nX=class extends at{
  constructor(n, e){
    super(), this.prefix=n, this.options=e
  }
  provide(n, e, t){
    const i=new Ut;
    n.canAcceptInBackground=!!this.options?.canAcceptInBackground, n.matchOnLabel=n.matchOnDescription=n.matchOnDetail=n.sortByLabel=!1;
    let r;
    const s=i.add(new uo), o=async()=>{
      r?.dispose(!0),n.busy=!1;
      const l=s.value=new Ut;
      r=l.add(new Wc(e));
      const u=r.token;
      let d=n.value.substring(this.prefix.length);
      this.options?.shouldSkipTrimPickFilter||(d=d.trim());
      const m=this._getPicks(d,l,u,t),p=(f,A)=>{
        let w,C;
        if(Rru(f)?(w=f.items,C=f.active):w=f,w.length===0){
          if(A)return!1;
          (d.length>0||n.hideInput)&&this.options?.noResultsPick&&(Aze(this.options.noResultsPick)?w=[this.options.noResultsPick(d)]:w=[this.options.noResultsPick])
        }
        return n.items=w,C&&(n.activeItems=[C]),!0
      },g=async f=>{
        let A=!1,w=!1;
        await Promise.all([(async()=>{
          typeof f.mergeDelay=="number"&&(await Af(f.mergeDelay),u.isCancellationRequested)||w||(A=p(f.picks,!0))
        })(),(async()=>{
          n.busy=!0;
          try{
            const C=await f.additionalPicks;
            if(u.isCancellationRequested)return;
            let x,I;
            Rru(f.picks)?(x=f.picks.items,I=f.picks.active):x=f.picks;
            let B,R;
            if(Rru(C)?(B=C.items,R=C.active):B=C,B.length>0||!A){
              let N;
              if(!I&&!R){
                const M=n.activeItems[0];
                M&&x.indexOf(M)!==-1&&(N=M)
              }
              p({
                items:[...x,...B],active:I||R||N
              })
            }
          }
          finally{
            u.isCancellationRequested||(n.busy=!1),w=!0
          }
        })()])
      };
      if(m!==null)if(JJg(m))await g(m);
      else if(!(m instanceof Promise))p(m);
      else{
        n.busy=!0;
        try{
          const f=await m;
          if(u.isCancellationRequested)return;
          JJg(f)?await g(f):p(f)
        }
        finally{
          u.isCancellationRequested||(n.busy=!1)
        }
      }
    };
    i.add(n.onDidChangeValue(()=>o())), o(), i.add(n.onDidAccept(l=>{
      if(t?.handleAccept){
        l.inBackground||n.hide(),t.handleAccept?.(n.activeItems[0],l.inBackground);
        return
      }
      const[u]=n.selectedItems;
      typeof u?.accept=="function"&&(l.inBackground||n.hide(),u.accept(n.keyMods,l))
    }));
    const a=async(l, u)=>{
      if(typeof u.trigger!="function")return;
      const d=u.buttons?.indexOf(l)??-1;
      if(d>=0){
        const m=u.trigger(d,n.keyMods),p=typeof m=="number"?m:await m;
        if(e.isCancellationRequested)return;
        switch(p){
          case HF.NO_ACTION:break;
          case HF.CLOSE_PICKER:n.hide();
          break;
          case HF.REFRESH_PICKER:o();
          break;
          case HF.REMOVE_ITEM:{
            const g=n.items.indexOf(u);
            if(g!==-1){
              const f=n.items.slice(),A=f.splice(g,1),w=n.activeItems.filter(x=>x!==A[0]),C=n.keepScrollPosition;
              n.keepScrollPosition=!0,n.items=f,w&&(n.activeItems=w),n.keepScrollPosition=C
            }
            break
          }
        }
      }
    };
    return i.add(n.onDidTriggerItemButton(({
      button:l,item:u
    })=>a(l, u))), i.add(n.onDidTriggerSeparatorButton(({
      button:l,separator:u
    })=>a(l, u))), i
  }
}
}
});
function HNe(n, e, t=!1){
  const i=n||"", r=e||"", s=WSt.value.collator.compare(i, r);
  return WSt.value.collatorIsNumeric&&s===0&&i!==r?i<r?-1:1:s
}
function Pru(n, e){
  const t=QSt.value.collator;
  return n=n||"", e=e||"", U$e(t, n, e)
}
function _FA(n, e){
  const t=QSt.value.collator;
  return n=n||"", e=e||"", jJg(n, e)||U$e(t, n, e)
}
function CFA(n, e){
  const t=QSt.value.collator;
  return n=n||"", e=e||"", QJg(n, e)||U$e(t, n, e)
}
function SFA(n, e){
  return n=n||"", e=e||"", n===e?0:n<e?-1:1
}
function GJg(n, e){
  const[t, i]=WJg(n), [r, s]=WJg(e);
  let o=WSt.value.collator.compare(i, s);
  if(o===0){
    if(WSt.value.collatorIsNumeric&&i!==s)return i<s?-1:1;
    if(o=WSt.value.collator.compare(t, r), WSt.value.collatorIsNumeric&&o===0&&t!==r)return t<r?-1:1
  }
  return o
}
function kFA(n, e){
  n=n||"", e=e||"";
  const t=lnt(n), i=lnt(e), r=QSt.value.collator, s=Xfa.value.collator;
  return U$e(s, t, i)||U$e(r, n, e)
}
function EFA(n, e){
  n=n||"", e=e||"";
  const t=lnt(n), i=lnt(e), r=QSt.value.collator, s=Xfa.value.collator;
  return U$e(s, t, i)||jJg(n, e)||U$e(r, n, e)
}
function xFA(n, e){
  n=n||"", e=e||"";
  const t=lnt(n), i=lnt(e), r=QSt.value.collator, s=Xfa.value.collator;
  return U$e(s, t, i)||QJg(n, e)||U$e(r, n, e)
}
function TFA(n, e){
  n=n||"", e=e||"";
  const t=lnt(n).toLowerCase(), i=lnt(e).toLowerCase();
  return t!==i?t<i?-1:1:n!==e?n<e?-1:1:0
}
function WJg(n, e=!1){
  const t=n?Lru.exec(n):[];
  let i=[t&&t[1]||"", t&&t[3]||""];
  return e&&(!i[0]&&i[1]||i[0]&&i[0].charAt(0)===".")&&(i=[i[0]+"."+i[1], ""]), i
}
function lnt(n){
  const e=n?Lru.exec(n):[];
  return e&&e[1]&&e[1].charAt(0)!=="."&&e[3]||""
}
function U$e(n, e, t){
  const i=n.compare(e, t);
  return i!==0?i:e.length!==t.length?e.length<t.length?-1:1:0
}
function Kfa(n){
  const e=n.charAt(0);
  return e.toLocaleUpperCase()!==e
}
function Yfa(n){
  const e=n.charAt(0);
  return e.toLocaleLowerCase()!==e
}
function QJg(n, e){
  return Kfa(n)&&Yfa(e)?-1:Yfa(n)&&Kfa(e)?1:0
}
function jJg(n, e){
  return Yfa(n)&&Kfa(e)?-1:Kfa(n)&&Yfa(e)?1:0
}
function IFA(n, e, t=!1){
  return t||(n=n&&n.toLowerCase(), e=e&&e.toLowerCase()), n===e?0:n<e?-1:1
}
function Jvi(n, e, t=!1){
  const i=n.split(C1), r=e.split(C1), s=i.length-1, o=r.length-1;
  let a, l;
  for(let u=0;
  ;
  u++){
    if(a=s===u, l=o===u, a&&l)return HNe(i[u], r[u], t);
    if(a)return-1;
    if(l)return 1;
    const d=IFA(i[u], r[u], t);
    if(d!==0)return d
  }
}
function Zfa(n, e, t){
  const i=n.toLowerCase(), r=e.toLowerCase(), s=DFA(n, e, t);
  if(s)return s;
  const o=i.endsWith(t), a=r.endsWith(t);
  if(o!==a)return o?-1:1;
  const l=HNe(i, r);
  return l!==0?l:i.localeCompare(r)
}
function DFA(n, e, t){
  const i=n.toLowerCase(), r=e.toLowerCase(), s=i.startsWith(t), o=r.startsWith(t);
  if(s!==o)return s?-1:1;
  if(s&&o){
    if(i.length<r.length)return-1;
    if(i.length>r.length)return 1
  }
  return 0
}
var WSt, QSt, Xfa, Lru, unt=