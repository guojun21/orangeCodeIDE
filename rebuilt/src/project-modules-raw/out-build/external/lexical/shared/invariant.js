// Module: out-build/external/lexical/shared/invariant.js
// Offset: 4034120 (bundle byte offset)
// Size: 57583 bytes

Ae({
  "out-build/external/lexical/shared/invariant.js"(){
    "use strict"
  }
});
function dqh(n, e, t, i){
  const r=n._keyToDOMMap;
  r.clear(), n._editorState=ZOc(), n._pendingEditorState=i, n._compositionKey=null, n._dirtyType=fYe, n._cloneNotNeeded.clear(), n._dirtyLeaves=new Set, n._dirtyElements.clear(), n._normalizedNodes=new Set, n._updateTags=new Set, n._updates=[], n._blockCursorElement=null;
  const s=n._observer;
  s!==null&&(s.disconnect(), n._observer=null), e!==null&&(e.textContent=""), t!==null&&(t.textContent="", r.set("root", t))
}
function afA(n){
  const e=new Map, t=new Set;
  return n.forEach(i=>{
    const r=i.klass.importDOM!=null?i.klass.importDOM.bind(i.klass):null;
    if(r==null||t.has(r))return;
    t.add(r);
    const s=r();
    s!==null&&Object.keys(s).forEach(o=>{
      let a=e.get(o);
      a===void 0&&(a=[],e.set(o,a)),a.push(s[o])
    })
  }), e
}
function hqh(n){
  const e=n||{
    
  }, t=zqh(), i=e.theme||{
    
  }, r=n===void 0?t:e.parentEditor||null, s=e.disableEvents||!1, o=ZOc(), a=e.namespace||(r!==null?r._config.namespace:u7h()), l=e.editorState, u=[VUo, s8e, G6n, J6n, o8e, ...e.nodes||[]], d=e.onError, m=e.editable!==void 0?e.editable:!0;
  let p;
  if(n===void 0&&t!==null)p=t._nodes;
  else{
    p=new Map;
    for(let f=0;
    f<u.length;
    f++){
      let A=u[f],w=null,C=null;
      if(typeof A!="function"){
        const R=A;
        A=R.replace,w=R.with,C=R.withKlass?R.withKlass:null
      }
      const x=A.getType(),I=A.transform(),B=new Set;
      I!==null&&B.add(I),p.set(x,{
        klass:A,replace:w,replaceWithKlass:C,transforms:B
      })
    }
  }
  const g=new C7h(o, r, p, {
    disableEvents:s, namespace:a, theme:i
  }, d||console.error, afA(p), m);
  return l!==void 0&&(g._pendingEditorState=l, g._dirtyType=Evt), g
}
function cfA(n, e){
  const t=e.getEditorState()._selection, i=n._selection;
  if(i!==null){
    if(i.dirty||!i.is(t))return!0
  }
  else if(t!==null)return!0;
  return!1
}
function lfA(n){
  return new B3c(new Map(n._nodeMap))
}
function ZOc(){
  return new B3c(new Map([["root", nvA()]]))
}
function mqh(n){
  const e=n.exportJSON(), t=n.constructor;
  e.type!==t.getType()&&Yg(!1, "LexicalNode: Node %s does not implement .exportJSON().", t.name);
  const i=e.children;
  if(kd(n)){
    Array.isArray(i)||Yg(!1, "LexicalNode: Node %s is an element but .exportJSON() does not have a children array.", t.name);
    const r=n.getChildren();
    for(let s=0;
    s<r.length;
    s++){
      const o=r[s],a=mqh(o);
      i.push(a)
    }
  }
  return e
}
function pqh(n, e, t, i, r){
  const s=n.anchor, o=n.focus, a=s.getNode(), l=G6(), u=Y9e(l), d=u!==null?u.anchorNode:null, m=s.key, p=l.getElementByKey(m), g=t.length;
  return m!==o.key||!jd(a)||(!r&&(!hvt||P3c<i+50)||a.isDirty()&&g<2||l7h(t))&&s.offset!==o.offset&&!a.isComposing()||p3c(a)||a.isDirty()&&g>1||(r||!hvt)&&p!==null&&!a.isComposing()&&d!==pUo(p)||u!==null&&e!==null&&(!e.collapsed||e.startContainer!==u.anchorNode||e.startOffset!==u.anchorOffset)||a.getFormat()!==n.format||a.getStyle()!==n.style||pbA(n, a)
}
function gqh(n, e){
  return n!==null&&n.nodeValue!==null&&n.nodeType===XRe&&e!==0&&e!==n.nodeValue.length
}
function fqh(n, e, t){
  const{
    anchorNode:i, anchorOffset:r, focusNode:s, focusOffset:o
  }
  =n;
  CUo&&(CUo=!1, gqh(i, r)&&gqh(s, o))||ahe(e, ()=>{
    if(!t){
      cae(null);
      return
    }
    if(!v6n(e, i, s))return;
    const a=Wd();
    if(dd(a)){
      const l=a.anchor,u=l.getNode();
      if(a.isCollapsed()){
        n.type==="Range"&&n.anchorNode===n.focusNode&&(a.dirty=!0);
        const d=S6n(e).event,m=d?d.timeStamp:performance.now(),[p,g,f,A,w]=L3c;
        m<w+200&&l.offset===f&&l.key===A?(a.format=p,a.style=g):l.type==="text"?(a.format=u.getFormat(),a.style=u.getStyle()):l.type==="element"&&(a.format=0,a.style="")
      }
      else{
        let d=IHh,m=!1;
        const p=a.getNodes(),g=p.length;
        for(let f=0;
        f<g;
        f++){
          const A=p[f];
          if(jd(A)&&(m=!0,d&=A.getFormat(),d===0))break
        }
        a.format=m?d:0
      }
    }
    Fd(e, B6n, void 0)
  })
}
function ufA(n, e){
  ahe(e, ()=>{
    const t=Wd(), i=Y9e(e), r=dUo();
    if(i){
      if(dd(t)){
        const s=t.anchor,o=s.getNode();
        if(s.type==="element"&&s.offset===0&&t.isCollapsed()&&!ZY(o)&&lf().getChildrenSize()===1&&o.getTopLevelElementOrThrow().isEmpty()&&r!==null&&t.is(r))i.removeAllRanges(),t.dirty=!0;
        else if(n.detail!==2){
          if(n.detail>=3&&!t.isCollapsed()){
            const l=t.focus.getNode();
            let u=o,d=o,m=o.getPreviousSibling();
            for(;
            m!==null&&!x3(m);
            )u=m,m=m.getPreviousSibling();
            let p=o.getNextSibling();
            for(;
            p!==null&&!x3(p);
            )d=p,p=p.getNextSibling();
            if(u!==o||d!==o){
              const g=o.getParentOrThrow();
              if(kd(g)){
                const f=u.getIndexWithinParent(),A=d.getIndexWithinParent();
                jd(d)?(t.anchor.set(g.__key,f,"element"),t.focus.set(d.__key,d.getTextContentSize(),"text")):(t.anchor.set(g.__key,f,"element"),t.focus.set(g.__key,A+1,"element"))
              }
              else o.select(0)
            }
            else o!==l&&(kd(o)?o.select(0):o.getParentOrThrow().select(0))
          }
        }
      }
      else if(n.pointerType==="touch"){
        const s=i.anchorNode;
        if(s!==null){
          const o=s.nodeType;
          if(o===D9t||o===XRe){
            const a=d3c(r,i,e);
            cae(a)
          }
        }
      }
    }
    Fd(e, DUo, n)
  })
}
function dfA(n, e){
  const t=n.target, i=n.pointerType;
  t instanceof Node&&i!=="touch"&&ahe(e, ()=>{
    sbA(t)||(SUo=!0)
  })
}
function bqh(n){
  if(!n.getTargetRanges)return null;
  const e=n.getTargetRanges();
  return e.length===0?null:e[0]
}
function hfA(n, e){
  return n!==e||kd(n)||kd(e)||!n.isToken()||!e.isToken()
}
function mfA(n){
  return R3c===229&&n<w9t+yUo
}
function pfA(n, e){
  const t=n.inputType, i=bqh(n);
  t==="deleteCompositionText"||rYe&&g7h(e)||t!=="insertCompositionText"&&ahe(e, ()=>{
    const r=Wd();
    if(t==="deleteContentBackward"){
      if(r===null){
        const d=dUo();
        if(!dd(d))return;
        cae(d.clone())
      }
      if(dd(r)){
        if(mfA(n.timeStamp)&&e.isComposing()&&r.anchor.key===r.focus.key){
          if(YY(null),w9t=0,setTimeout(()=>{
            ahe(e,()=>{
              YY(null)
            })
          },yUo),dd(r)){
            const d=r.anchor.getNode();
            d.markDirty(),r.format=d.getFormat(),r.style=d.getStyle()
          }
        }
        else n.preventDefault(),Fd(e,Sve,!0);
        return
      }
    }
    if(!dd(r))return;
    const s=n.data;
    vvt!==null&&b3c(!1, e, vvt), (!r.dirty||vvt!==null)&&r.isCollapsed()&&!ZY(r.anchor.getNode())&&i!==null&&r.applyDOMRange(i), vvt=null;
    const o=r.anchor, a=r.focus, l=o.getNode(), u=a.getNode();
    if(t==="insertText"||t==="insertTranspose"){
      if(s===`
`)n.preventDefault(),Fd(e,X9e,!1);
      else if(s===ePe)n.preventDefault(),Fd(e,wvt,void 0);
      else if(s==null&&n.dataTransfer){
        const d=n.dataTransfer.getData("text/plain");
        n.preventDefault(),r.insertRawText(d)
      }
      else s!=null&&pqh(r,i,s,n.timeStamp,!0)?(n.preventDefault(),Fd(e,dYe,s)):vvt=s;
      P3c=n.timeStamp;
      return
    }
    switch(n.preventDefault(), t){
      case"insertFromYank":case"insertFromDrop":case"insertReplacementText":{
        Fd(e,dYe,n);
        break
      }
      case"insertFromComposition":{
        YY(null),Fd(e,dYe,n);
        break
      }
      case"insertLineBreak":{
        YY(null),Fd(e,X9e,!1);
        break
      }
      case"insertParagraph":{
        YY(null),C9t?(C9t=!1,Fd(e,X9e,!1)):Fd(e,wvt,void 0);
        break
      }
      case"insertFromPaste":case"insertFromPasteAsQuotation":{
        Fd(e,hYe,n);
        break
      }
      case"deleteByComposition":{
        hfA(l,u)&&Fd(e,R6n,void 0);
        break
      }
      case"deleteByDrag":case"deleteByCut":{
        Fd(e,R6n,void 0);
        break
      }
      case"deleteContent":{
        Fd(e,Sve,!1);
        break
      }
      case"deleteWordBackward":{
        Fd(e,e8e,!0);
        break
      }
      case"deleteWordForward":{
        Fd(e,e8e,!1);
        break
      }
      case"deleteHardLineBackward":case"deleteSoftLineBackward":{
        Fd(e,mYe,!0);
        break
      }
      case"deleteContentForward":case"deleteHardLineForward":case"deleteSoftLineForward":{
        Fd(e,mYe,!1);
        break
      }
      case"formatStrikeThrough":{
        Fd(e,t8e,"strikethrough");
        break
      }
      case"formatBold":{
        Fd(e,t8e,"bold");
        break
      }
      case"formatItalic":{
        Fd(e,t8e,"italic");
        break
      }
      case"formatUnderline":{
        Fd(e,t8e,"underline");
        break
      }
      case"historyUndo":{
        Fd(e,E9t,void 0);
        break
      }
      case"historyRedo":{
        Fd(e,x9t,void 0);
        break
      }
      default:
    }
  })
}
function gfA(n, e){
  n.stopPropagation(), ahe(e, ()=>{
    const t=Wd(), i=n.data, r=bqh(n);
    if(i!=null&&dd(t)&&pqh(t, r, i, n.timeStamp, !1)){
      S9t&&(XOc(e,i),S9t=!1);
      const s=t.anchor,o=s.getNode(),a=Y9e(e);
      if(a===null)return;
      const l=s.offset;
      (!hvt||t.isCollapsed()||!jd(o)||a.anchorNode===null||o.getTextContent().slice(0,l)+i+o.getTextContent().slice(l+t.focus.offset)!==d7h(a.anchorNode))&&Fd(e,dYe,i);
      const u=i.length;
      rYe&&u>1&&n.inputType==="insertCompositionText"&&!e.isComposing()&&(t.anchor.offset-=u),!g9t&&!f9t&&!b9t&&e.isComposing()&&(w9t=0,YY(null))
    }
    else b3c(!1, e, i!==null?i:void 0), S9t&&(XOc(e, i||void 0), S9t=!1);
    dbA()
  }), vvt=null
}
function ffA(n, e){
  ahe(e, ()=>{
    const t=Wd();
    if(dd(t)&&!e.isComposing()){
      const i=t.anchor,r=t.anchor.getNode();
      YY(i.key),(n.timeStamp<w9t+yUo||i.type==="element"||!t.isCollapsed()||r.getFormat()!==t.format||r.getStyle()!==t.style)&&Fd(e,dYe,BHh)
    }
  })
}
function XOc(n, e){
  const t=n._compositionKey;
  if(YY(null), t!==null&&e!=null){
    if(e===""){
      const i=jB(t),r=pUo(n.getElementByKey(t));
      r!==null&&r.nodeValue!==null&&jd(i)&&v3c(i,r.nodeValue,null,null,!0);
      return
    }
    if(e[e.length-1]===`
`){
      const i=Wd();
      if(dd(i)){
        const r=i.focus;
        i.anchor.set(r.key,r.offset,r.type),Fd(n,KRe,null);
        return
      }
    }
  }
  b3c(!0, n, e)
}
function bfA(n, e){
  rYe?S9t=!0:ahe(e, ()=>{
    XOc(e, n.data)
  })
}
function vfA(n, e){
  const{
    keyCode:t, ctrlKey:i, metaKey:r, altKey:s
  }
  =n;
  t===18&&!s?(n.preventDefault(), Fd(e, Y3c, n)):(Fs?t===91&&!r:t===17&&!i)?Fd(e, vHh, n):t===16&&Fd(e, kHh, n)
}
function AfA(n, e){
  if(w9t=n.timeStamp, R3c=n.keyCode, e.isComposing())return;
  const{
    keyCode:t, shiftKey:i, ctrlKey:r, metaKey:s, altKey:o
  }
  =n;
  if(Fd(e, pYe, n))return;
  const a=()=>{
    n.stopPropagation(), n.preventDefault()
  };
  if(t===90&&!r&&!s&&!i)n.stopPropagation();
  else if(t===13&&(r||s))Fd(e, YRe, n)&&a();
  else if(t===8&&(r||s)&&!i)n.stopPropagation(), Fd(e, M6n, n)&&n.preventDefault();
  else if(Fs&&t===67&&r)Fd(e, O7h, n)&&a();
  else if(t===67&&r)Fd(e, P7h, n)&&a();
  else if(t===87&&(r||s))Fd(e, dHh, n)&&a();
  else if(t===190&&(r||s))Fd(e, K3c, n)&&a();
  else if(t===191&&(r||s)&&!i)Fd(e, hHh, n)&&a();
  else if(t===191&&(r||s)&&i)Fd(e, mHh, n)&&a();
  else if(t===16)Fd(e, SHh, n)&&a();
  else if(t===75&&(r||s)&&i)Fd(e, K7h, n)&&a();
  else if(t===68&&(r||s)&&i)Fd(e, Y7h, n)&&a();
  else if(t===83&&(r||s)&&i)Fd(e, Z7h, n)&&a();
  else if(t===83&&(r||s))Fd(e, X7h, n)&&a();
  else if(t===75&&(r||s))Fd(e, L7h, n)&&a();
  else if(t===89&&(r||s))Fd(e, N7h, n)&&a();
  else if(t===68&&(r||s))Fd(e, M7h, n)&&a();
  else if(t===69&&(r||s))Fd(e, F7h, n)&&a();
  else if(t===72&&(r||s))Fd(e, U7h, n)&&a();
  else if(t===49&&(r||s))Fd(e, $7h, n)&&a();
  else if(t===50&&(r||s))Fd(e, q7h, n)&&a();
  else if(t===51&&(r||s))Fd(e, H7h, n)&&a();
  else if(t===52&&(r||s))Fd(e, J7h, n)&&a();
  else if(t===53&&(r||s))Fd(e, G7h, n)&&a();
  else if(t===54&&(r||s))Fd(e, W7h, n)&&a();
  else if(t===55&&(r||s))Fd(e, Q7h, n)&&a();
  else if(t===56&&(r||s))Fd(e, j7h, n)&&a();
  else if(t===57&&(r||s))Fd(e, z7h, n)&&a();
  else if(t===48&&(r||s))Fd(e, V7h, n)&&a();
  else if(t===74&&(r||s))Fd(e, eHh, n)&&a();
  else if(t===76&&(r||s))Fd(e, rHh, n)&&a();
  else if(t===89&&(r&&i||s))Fd(e, tHh, n)&&a();
  else if(t===85&&(r||s))Fd(e, nHh, n)&&a();
  else if(t===84&&(r||s))Fd(e, sHh, n)&&a();
  else if(t===80&&(r||s))Fd(e, oHh, n)&&a();
  else if(t===66&&(r||s))Fd(e, aHh, n)&&a();
  else if(t===65&&(r||s))Fd(e, cHh, n)&&a();
  else if(t===73&&(r||s))Fd(e, iHh, n)&&a();
  else if(t===78&&(r||s))Fd(e, j3c, n)&&a();
  else if(t===82&&(r||s))Fd(e, z3c, n)&&a();
  else if(t===77&&(r||s))Fd(e, lHh, n)&&a();
  else if(t===86&&(r||s))Fd(e, V3c, n)&&a();
  else if(t===71&&(r||s))Fd(e, uHh, n)&&a();
  else if(t===219&&(r||s))Fd(e, pHh, n)&&a();
  else if(t===221&&(r||s))Fd(e, gHh, n)&&a();
  else if(w3c(t)&&o)n.stopPropagation(), Fd(e, W3c, n);
  else if(_3c(t)&&o)n.stopPropagation(), Fd(e, Q3c, n);
  else if(PbA(t, r, o, s))n.stopPropagation(), Fd(e, P6n, n);
  else if(LbA(t, r, i, o, s))n.stopPropagation(), Fd(e, H3c, n);
  else if(BbA(t, r, o, s))n.stopPropagation(), Fd(e, L6n, n);
  else if(RbA(t, r, i, o, s))n.stopPropagation(), Fd(e, J3c, n);
  else if(NbA(t, r, s))n.stopPropagation(), Fd(e, n8e, n);
  else if(_3c(t)&&(r||s))n.stopPropagation(), Fd(e, I7h, n);
  else if(w3c(t)&&(r||s))n.stopPropagation(), Fd(e, D7h, n);
  else if(A3c(t)&&(r||s))n.stopPropagation(), Fd(e, B7h, n);
  else if(y3c(t)&&(r||s))n.stopPropagation(), Fd(e, R7h, n);
  else if(MbA(t, r, s))n.stopPropagation(), Fd(e, i8e, n);
  else if(ybA(t, i))n.stopPropagation(), C9t=!0, Fd(e, KRe, n);
  else if(ObA(t))n.stopPropagation(), Fd(e, G3c, n);
  else if(wbA(t, r))a(), C9t=!0, Fd(e, X9e, !0);
  else if(AbA(t, i))n.stopPropagation(), C9t=!1, Fd(e, KRe, n);
  else if(EbA(t, o, s, r))y6n(t)?(n.stopPropagation(), Fd(e, T9t, n)):(a(), Fd(e, Sve, !0));
  else if(UbA(t))n.stopPropagation(), Fd(e, kve, n);
  else if(xbA(t, r, i, o, s))w6n(t)?(n.stopPropagation(), Fd(e, N6n, n)):(a(), Fd(e, Sve, !1));
  else if(_bA(t, o, r))a(), Fd(e, e8e, !0);
  else if(CbA(t, o, r))a(), Fd(e, e8e, !1);
  else if(SbA(t, s))n.preventDefault(), Fd(e, mYe, !0);
  else if(kbA(t, s))a(), Fd(e, mYe, !1);
  else if(fbA(t, o, s, r))a(), Fd(e, t8e, "bold");
  else if(vbA(t, o, s, r))a(), Fd(e, t8e, "underline");
  else if(bbA(t, o, s, r))a(), Fd(e, t8e, "italic");
  else if(gbA(t, o, r, s))Fd(e, ZRe, n);
  else if(TbA(t, i, s, r))a(), Fd(e, E9t, void 0);
  else if(IbA(t, i, s, r))a(), Fd(e, x9t, void 0);
  else if(t===49&&o)Fd(e, AHh, n)&&a();
  else if(t===50&&o)Fd(e, yHh, n)&&a();
  else if(t===51&&o)Fd(e, wHh, n)&&a();
  else if(t===52&&o)Fd(e, _Hh, n)&&a();
  else if(t===53&&o)Fd(e, CHh, n)&&a();
  else if(t===18&&o)Fd(e, fHh, n)&&a();
  else if(Fs?t===91&&s:t===17&&r)Fd(e, bHh, n)&&a();
  else if(h7h(t, i, s, r))Fd(e, Cvt, n)&&n.stopPropagation();
  else{
    const l=e._editorState._selection;
    jte(l)&&(DbA(t, i, s, r)?(a(), Fd(e, _vt, n)):h7h(t, i, s, r)?(a(), Fd(e, Cvt, n)):$bA(t, s, r)&&(a(), e.update(()=>{
      const u=lf();
      u.select(0,u.getChildrenSize())
    })))
  }
  FbA(r, i, o, s)&&Fd(e, THh, n)
}
function vqh(n){
  let e=n.__lexicalEventHandles;
  return e===void 0&&(e=[], n.__lexicalEventHandles=e), e
}
function Aqh(n){
  const e=$c(), t=T3c(e);
  if(t===null)return;
  const i=t7h(t.anchorNode);
  if(i===null)return;
  SUo&&(SUo=!1, ahe(i, ()=>{
    const u=dUo(), d=t.anchorNode;
    if(d===null)return;
    const m=d.nodeType;
    if(m!==D9t&&m!==XRe)return;
    const p=d3c(u, t, i);
    cae(p)
  }));
  const r=f3c(i), s=r[r.length-1], o=s._key, a=Avt.get(o), l=a||s;
  l!==i&&fqh(t, l, !1), fqh(t, i, !0), i!==s?Avt.set(o, i):a&&Avt.delete(o)
}
function yqh(n){
  n._lexicalHandled=!0
}
function wqh(n){
  return n._lexicalHandled===!0
}
function yfA(n, e){
  const t=n.ownerDocument;
  _Uo.set(n, t);
  const i=_9t.get(t)??0;
  i===0&&t.addEventListener("selectionchange", Aqh), _9t.set(t, i+1), n.__lexicalEditor=e;
  const r=vqh(n);
  for(let s=0;
  s<wUo.length;
  s++){
    const[o, a]=wUo[s], l=typeof a=="function"?u=>{
      wqh(u)||(yqh(u),e.isEditable()&&a(u,e))
    }
    :u=>{
      if(!wqh(u)&&(yqh(u),e.isEditable()))switch(o){
        case"cut":return Fd(e,Cvt,u);
        case"copy":return Fd(e,_vt,u);
        case"paste":return Fd(e,hYe,u);
        case"dragstart":return Fd(e,BUo,u);
        case"dragover":return Fd(e,RUo,u);
        case"dragend":return Fd(e,xHh,u);
        case"focus":return Fd(e,O6n,u);
        case"blur":return Fd(e,PUo,u);
        case"drop":return Fd(e,I9t,u)
      }
    };
    n.addEventListener(o, l), r.push(()=>{
      n.removeEventListener(o,l)
    })
  }
}
function wfA(n){
  const e=_Uo.get(n)??n.ownerDocument;
  _Uo.delete(n);
  const t=_9t.get(e);
  if(t!==void 0){
    const s=t-1;
    s<=0?(e.removeEventListener("selectionchange", Aqh), _9t.delete(e)):_9t.set(e, s)
  }
  const i=n.__lexicalEditor;
  i!=null&&(_fA(i), n.__lexicalEditor=null);
  const r=vqh(n);
  for(let s=0;
  s<r.length;
  s++)r[s]();
  n.__lexicalEventHandles=[]
}
function _fA(n){
  if(n._parentEditor!==null){
    const e=f3c(n), i=e[e.length-1]._key;
    Avt.get(i)===n&&Avt.delete(i)
  }
  else Avt.delete(n._key)
}
function CfA(){
  CUo=!0
}
function SfA(n, e, t, i, r){
  L3c=[n, e, t, i, r]
}
function kfA(n, e){
  const t=n._decorators;
  let r=n._pendingDecorators||t;
  const s=e._nodeMap;
  let o;
  for(o in r)s.has(o)||(r===t&&(r=s7h(n)), delete r[o])
}
function _qh(n, e, t, i, r, s){
  let o=n.getFirstChild();
  for(;
  o!==null;
  ){
    const a=o.__key;
    o.__parent===e&&(kd(o)&&_qh(o, a, t, i, r, s), t.has(a)||s.delete(a), r.push(a)), o=o.getNextSibling()
  }
}
function EfA(n, e, t, i){
  const r=n._nodeMap, s=e._nodeMap, o=[];
  for(const[a]of i){
    const l=s.get(a);
    l!==void 0&&(l.isAttached()||(kd(l)&&_qh(l, a, r, s, o, i), r.has(a)||i.delete(a), o.push(a)))
  }
  for(const a of o)s.delete(a);
  for(const a of t){
    const l=s.get(a);
    l!==void 0&&!l.isAttached()&&(r.has(a)||t.delete(a), s.delete(a))
  }
}
function xfA(){
  return kUo
}
function TfA(n){
  EUo=n.timeStamp
}
function IfA(n){
  EUo===0&&S6n(n).addEventListener("textInput", TfA, !0)
}
function e3c(n, e, t){
  return e.__lexicalLineBreak===n||n[`__lexicalKey_${t._key}`]!==void 0
}
function DfA(n){
  return n.getEditorState().read(()=>{
    const e=Wd();
    return e!==null?e.clone():null
  })
}
function BfA(n, e, t){
  const i=Y9e(t);
  let r=null, s=null;
  i!==null&&i.anchorNode===n&&(r=i.anchorOffset, s=i.focusOffset);
  const o=n.nodeValue;
  o!==null&&v3c(e, o, r, s, !1)
}
function RfA(n, e, t){
  if(dd(n)){
    const i=n.anchor.getNode();
    if(i.is(t)&&n.format!==i.getFormat())return!1
  }
  return e.nodeType===XRe&&t.isAttached()
}
function Cqh(n, e, t){
  kUo=!0;
  const i=performance.now()-EUo>S7h;
  try{
    ahe(n, ()=>{
      const r=Wd()||DfA(n),s=new Map,o=n.getRootElement(),a=n._editorState,l=n._blockCursorElement;
      let u=!1,d="";
      for(let p=0;
      p<e.length;
      p++){
        const g=e[p],f=g.type,A=g.target;
        let w=jRe(A,a);
        if(!(w===null&&A!==o||ZD(w))){
          if(f==="characterData")i&&jd(w)&&RfA(r,A,w)&&BfA(A,w,n);
          else if(f==="childList"){
            u=!0;
            const C=g.addedNodes;
            for(let B=0;
            B<C.length;
            B++){
              const R=C[B],N=r7h(R),M=R.parentNode;
              if(M!=null&&R!==l&&N===null&&(R.nodeName!=="BR"||!e3c(R,M,n))){
                if(rYe){
                  const O=R.innerText||R.nodeValue;
                  O&&(d+=O)
                }
                M.removeChild(R)
              }
            }
            const x=g.removedNodes,I=x.length;
            if(I>0){
              let B=0;
              for(let R=0;
              R<I;
              R++){
                const N=x[R];
                (N.nodeName==="BR"&&e3c(N,A,n)||l===N)&&(A.appendChild(N),B++)
              }
              I!==B&&(A===o&&(w=a7h(a)),s.set(A,w))
            }
          }
        }
      }
      if(s.size>0)for(const[p,g]of s)if(kd(g)){
        const f=g.getChildrenKeys();
        let A=p.firstChild;
        for(let w=0;
        w<f.length;
        w++){
          const C=f[w],x=n.getElementByKey(C);
          x!==null&&(A==null?(p.appendChild(x),A=x):A!==x&&p.replaceChild(x,A),A=A.nextSibling)
        }
      }
      else jd(g)&&g.markDirty();
      const m=t.takeRecords();
      if(m.length>0){
        for(let p=0;
        p<m.length;
        p++){
          const g=m[p],f=g.addedNodes,A=g.target;
          for(let w=0;
          w<f.length;
          w++){
            const C=f[w],x=C.parentNode;
            x!=null&&C.nodeName==="BR"&&!e3c(C,A,n)&&x.removeChild(C)
          }
        }
        t.takeRecords()
      }
      r!==null&&(u&&(r.dirty=!0,cae(r)),rYe&&g7h(n)&&r.insertRawText(d))
    })
  }
  finally{
    kUo=!1
  }
}
function Sqh(n){
  const e=n._observer;
  if(e!==null){
    const t=e.takeRecords();
    Cqh(n, t, e)
  }
}
function kqh(n){
  IfA(n), n._observer=new MutationObserver((e, t)=>{
    Cqh(n, e, t)
  })
}
function t3c(n, e, t){
  aae();
  const i=n.__key, r=n.getParent();
  if(r===null)return;
  const s=HbA(n);
  let o=!1;
  if(dd(s)&&e){
    const a=s.anchor, l=s.focus;
    a.key===i&&(mUo(a, n, r, n.getPreviousSibling(), n.getNextSibling()), o=!0), l.key===i&&(mUo(l, n, r, n.getPreviousSibling(), n.getNextSibling()), o=!0)
  }
  if(dd(s)&&e&&!o){
    const a=n.getIndexWithinParent();
    fvt(n), hUo(s, r, a, -1)
  }
  else fvt(n);
  !t&&!zte(r)&&!r.canBeEmpty()&&r.isEmpty()&&t3c(r, e), e&&ZY(r)&&r.isEmpty()&&r.selectEnd()
}
function Eqh(n, e){
  const t=n.__mode, i=n.__format, r=n.__style, s=e.__mode, o=e.__format, a=e.__style;
  return(t===null||t===s)&&(i===null||i===o)&&(r===null||r===a)
}
function xqh(n, e){
  const t=n.mergeWithSibling(e), i=G6()._normalizedNodes;
  return i.add(n.__key), i.add(e.__key), t
}
function Tqh(n){
  let e=n;
  if(e.__text===""&&e.isSimpleText()&&!e.isUnmergeable()){
    e.remove();
    return
  }
  let t;
  for(;
  (t=e.getPreviousSibling())!==null&&jd(t)&&t.isSimpleText()&&!t.isUnmergeable();
  )if(t.__text==="")t.remove();
  else if(Eqh(t, e)){
    e=xqh(t, e);
    break
  }
  else break;
  let i;
  for(;
  (i=e.getNextSibling())!==null&&jd(i)&&i.isSimpleText()&&!i.isUnmergeable();
  )if(i.__text==="")i.remove();
  else if(Eqh(e, i)){
    e=xqh(e, i);
    break
  }
  else break
}
function n3c(n){
  return Iqh(n.anchor), Iqh(n.focus), n
}
function Iqh(n){
  for(;
  n.type==="element";
  ){
    const e=n.getNode(), t=n.offset;
    let i, r;
    if(t===e.getChildrenSize()?(i=e.getChildAtIndex(t-1), r=!0):(i=e.getChildAtIndex(t), r=!1), jd(i)){
      n.set(i.__key,r?i.getTextContentSize():0,"text");
      break
    }
    else if(!kd(i))break;
    n.set(i.__key, r?i.getChildrenSize():0, "element")
  }
}
function aUo(n, e){
  const t=yvt.get(n);
  if(e!==null){
    const i=o3c(n);
    i.parentNode===e&&e.removeChild(i)
  }
  if(uYe.has(n)||Kte._keyToDOMMap.delete(n), kd(t)){
    const i=lUo(t, yvt);
    i3c(i, 0, i.length-1, null)
  }
  t!==void 0&&C3c(I6n, x6n, TUo, t, "destroyed")
}
function i3c(n, e, t, i){
  let r=e;
  for(;
  r<=t;
  ++r){
    const s=n[r];
    s!==void 0&&aUo(s, i)
  }
}
function mvt(n, e){
  n.setProperty("text-align", e)
}
function Dqh(n, e){
  const t=lYe.theme.indent;
  if(typeof t=="string"){
    const r=n.classList.contains(t);
    e>0&&!r?n.classList.add(t):e<1&&r&&n.classList.remove(t)
  }
  const i=getComputedStyle(n).getPropertyValue("--lexical-indent-base-value")||k7h;
  n.style.setProperty("padding-inline-start", e===0?"":`calc(${e} * ${i})`)
}
function Bqh(n, e){
  const t=n.style;
  e===0?mvt(t, ""):e===JUo?mvt(t, "left"):e===GUo?mvt(t, "center"):e===WUo?mvt(t, "right"):e===QUo?mvt(t, "justify"):e===jUo?mvt(t, "start"):e===zUo&&mvt(t, "end")
}
function cUo(n, e, t){
  const i=uYe.get(n);
  i===void 0&&Yg(!1, "createNode: node does not exist in nodeMap");
  const r=i.createDOM(lYe, Kte);
  if(UfA(n, r, Kte), jd(i)?r.setAttribute("data-lexical-text", "true"):ZD(i)&&r.setAttribute("data-lexical-decorator", "true"), kd(i)){
    const s=i.__indent, o=i.__size;
    if(s!==0&&Dqh(r, s), o!==0){
      const l=o-1,u=lUo(i,uYe);
      PfA(u,l,i,r)
    }
    const a=i.__format;
    a!==0&&Bqh(r, a), i.isInline()||Pqh(null, i, r), fUo(i)&&(Y$+=ePe, VRe+=ePe)
  }
  else{
    const s=i.getTextContent();
    if(ZD(i)){
      const o=i.decorate(Kte,lYe);
      o!==null&&Nqh(n,o),r.contentEditable="false"
    }
    else jd(i)&&(i.isDirectionless()||(XY+=s));
    Y$+=s, VRe+=s
  }
  if(e!==null)if(t!=null)e.insertBefore(r, t);
  else{
    const s=e.__lexicalLineBreak;
    s!=null?e.insertBefore(r, s):e.appendChild(r)
  }
  return C3c(I6n, x6n, TUo, i, "created"), r
}
function PfA(n, e, t, i){
  const r=XY;
  XY="", r3c(n, t, 0, e, i, null), Lqh(t, i), XY=r
}
function r3c(n, e, t, i, r, s){
  const o=Y$;
  Y$="";
  let a=t;
  for(;
  a<=i;
  ++a)cUo(n[a], r, s);
  fUo(e)&&(Y$+=ePe), r.__lexicalTextContent=Y$, Y$=o+Y$
}
function Rqh(n, e){
  const t=e.get(n);
  return x3(t)||ZD(t)&&t.isInline()
}
function Pqh(n, e, t){
  const i=n!==null&&(n.__size===0||Rqh(n.__last, yvt)), r=e.__size===0||Rqh(e.__last, uYe);
  if(i){
    if(!r){
      const s=t.__lexicalLineBreak;
      s!=null&&t.removeChild(s),t.__lexicalLineBreak=null
    }
  }
  else if(r){
    const s=bi.document.createElement("br");
    t.__lexicalLineBreak=s, t.appendChild(s)
  }
}
function Lqh(n, e){
  const t=e.__lexicalDirTextContent, i=e.__lexicalDir;
  if(t!==XY||i!==T6n){
    const r=XY==="", s=r?T6n:obA(XY);
    if(s!==i){
      const o=e.classList,a=lYe.theme;
      let l=i!==null?a[i]:void 0,u=s!==null?a[s]:void 0;
      if(l!==void 0){
        if(typeof l=="string"){
          const d=l.split(" ");
          l=a[i]=d
        }
        o.remove(...l)
      }
      if(s===null||r&&s==="ltr")e.removeAttribute("dir");
      else{
        if(u!==void 0){
          if(typeof u=="string"){
            const d=u.split(" ");
            u=a[s]=d
          }
          u!==void 0&&o.add(...u)
        }
        e.dir=s
      }
      if(!xUo){
        const d=n.getWritable();
        d.__dir=s
      }
    }
    T6n=s, e.__lexicalDirTextContent=XY, e.__lexicalDir=s
  }
}
function LfA(n, e, t){
  const i=XY;
  XY="", NfA(n, e, t), Lqh(e, t), XY=i
}
function lUo(n, e){
  const t=[];
  let i=n.__first;
  for(;
  i!==null;
  ){
    const r=e.get(i);
    r===void 0&&Yg(!1, "createChildrenArray: node does not exist in nodeMap"), t.push(i), i=r.__next
  }
  return t
}
function NfA(n, e, t){
  const i=Y$, r=n.__size, s=e.__size;
  if(Y$="", r===1&&s===1){
    const o=n.__first, a=e.__first;
    if(o===a)f6n(o, t);
    else{
      const l=o3c(o),u=cUo(a,null,null);
      t.replaceChild(u,l),aUo(o,null)
    }
  }
  else{
    const o=lUo(n, yvt), a=lUo(e, uYe);
    if(r===0)s!==0&&r3c(a, e, 0, s-1, t, null);
    else if(s===0){
      if(r!==0){
        const u=t.__lexicalLineBreak==null;
        i3c(o,0,r-1,u?null:t),u&&(t.textContent="")
      }
    }
    else FfA(e, o, a, r, s, t)
  }
  fUo(e)&&(Y$+=ePe), t.__lexicalTextContent=Y$, Y$=i+Y$
}
function f6n(n, e){
  const t=yvt.get(n);
  let i=uYe.get(n);
  (t===void 0||i===void 0)&&Yg(!1, "reconcileNode: prevNode or nextNode does not exist in nodeMap");
  const r=N3c||F3c.has(n)||M3c.has(n), s=bUo(Kte, n);
  if(t===i&&!r){
    if(kd(t)){
      const o=s.__lexicalTextContent;
      o!==void 0&&(Y$+=o,VRe+=o);
      const a=s.__lexicalDirTextContent;
      a!==void 0&&(XY+=a)
    }
    else{
      const o=t.getTextContent();
      jd(t)&&!t.isDirectionless()&&(XY+=o),VRe+=o,Y$+=o
    }
    return s
  }
  if(t!==i&&r&&C3c(I6n, x6n, TUo, i, "updated"), i.updateDOM(t, s, lYe)){
    const o=cUo(n, null, null);
    return e===null&&Yg(!1, "reconcileNode: parentDOM is null"), e.replaceChild(o, s), aUo(n, null), o
  }
  if(kd(t)&&kd(i)){
    const o=i.__indent;
    o!==t.__indent&&Dqh(s, o);
    const a=i.__format;
    a!==t.__format&&Bqh(s, a), r&&(LfA(t, i, s), !ZY(i)&&!i.isInline()&&Pqh(t, i, s)), fUo(i)&&(Y$+=ePe, VRe+=ePe)
  }
  else{
    const o=i.getTextContent();
    if(ZD(i)){
      const a=i.decorate(Kte,lYe);
      a!==null&&Nqh(n,a)
    }
    else jd(i)&&!i.isDirectionless()&&(XY+=o);
    Y$+=o, VRe+=o
  }
  return!xUo&&ZY(i)&&i.__cachedText!==VRe&&(i=i.getWritable(), i.__cachedText=VRe), s
}
function Nqh(n, e){
  let t=Kte._pendingDecorators;
  const i=Kte._decorators;
  if(t===null){
    if(i[n]===e)return;
    t=s7h(Kte)
  }
  t[n]=e
}
function MfA(n){
  return n.firstChild
}
function s3c(n){
  let e=n.nextSibling;
  return e!==null&&e===Kte._blockCursorElement&&(e=e.nextSibling), e
}
function FfA(n, e, t, i, r, s){
  const o=i-1, a=r-1;
  let l, u, d=MfA(s), m=0, p=0;
  for(;
  m<=o&&p<=a;
  ){
    const A=e[m], w=t[p];
    if(A===w)d=s3c(f6n(w, s)), m++, p++;
    else{
      l===void 0&&(l=new Set(e)),u===void 0&&(u=new Set(t));
      const C=u.has(A),x=l.has(w);
      if(!C)d=s3c(o3c(A)),aUo(A,s),m++;
      else if(!x)cUo(w,s,d),p++;
      else{
        const I=bUo(Kte,w);
        I===d?d=s3c(f6n(w,s)):(d!=null?s.insertBefore(I,d):s.appendChild(I),f6n(w,s)),m++,p++
      }
    }
  }
  const g=m>o, f=p>a;
  if(g&&!f){
    const A=t[a+1], w=A===void 0?null:Kte.getElementByKey(A);
    r3c(t, n, p, a, s, w)
  }
  else f&&!g&&i3c(e, m, o, s)
}
function OfA(n, e, t, i, r, s){
  Y$="", VRe="", XY="", N3c=i===Evt, T6n=null, Kte=t, lYe=t._config, x6n=t._nodes, TUo=Kte._listeners.mutation, M3c=r, F3c=s, yvt=n._nodeMap, uYe=e._nodeMap, xUo=e._readOnly, O3c=new Map(t._keyToDOMMap);
  const o=new Map;
  return I6n=o, f6n("root", null), Kte=void 0, x6n=void 0, M3c=void 0, F3c=void 0, yvt=void 0, uYe=void 0, lYe=void 0, O3c=void 0, I6n=void 0, o
}
function UfA(n, e, t){
  const i=t._keyToDOMMap;
  e["__lexicalKey_"+t._key]=n, i.set(n, e)
}
function o3c(n){
  const e=O3c.get(n);
  return e===void 0&&Yg(!1, "Reconciliation: could not find DOM element for node key %s", n), e
}
function QRe(n, e, t){
  return new E7h(n, e, t)
}
function a3c(n, e){
  let t=e.__key, i=n.offset, r="element";
  if(jd(e)){
    r="text";
    const s=e.getTextContentSize();
    i>s&&(i=s)
  }
  else if(!kd(e)){
    const s=e.getNextSibling();
    if(jd(s))t=s.__key, i=0, r="text";
    else{
      const o=e.getParent();
      o&&(t=o.__key,i=e.getIndexWithinParent()+1)
    }
  }
  n.set(t, i, r)
}
function Mqh(n, e){
  if(kd(e)){
    const t=e.getLastDescendant();
    kd(t)||jd(t)?a3c(n, t):a3c(n, e)
  }
  else a3c(n, e)
}
function Fqh(n, e, t, i){
  const r=n.getNode(), s=r.getChildAtIndex(n.offset), o=OA(), a=ZY(r)?Lx().append(o):o;
  o.setFormat(t), o.setStyle(i), s===null?r.append(a):s.insertBefore(a), n.is(e)&&e.set(o.__key, 0, "text"), n.set(o.__key, 0, "text")
}
function sYe(n, e, t, i){
  n.key=e, n.offset=t, n.type=i
}
function dd(n){
  return n instanceof k9t
}
function pvt(n){
  return n instanceof $3c
}
function jte(n){
  return n instanceof U3c
}
function Oqh(n){
  const e=n.offset;
  if(n.type==="text")return e;
  const t=n.getNode();
  return e===t.getChildrenSize()?t.getTextContent().length:0
}
function uUo(n){
  const e=n.anchor, t=n.focus;
  return e.type==="element"&&t.type==="element"&&e.key===t.key&&e.offset===t.offset?[0, 0]:[Oqh(e), Oqh(t)]
}
function $fA(n){
  const e=n.focus, t=n.anchor, i=t.key, r=t.offset, s=t.type;
  sYe(t, e.key, e.offset, e.type), sYe(e, i, r, s), n._cachedNodes=null
}
function qfA(n, e, t, i){
  n.modify(e, t, i)
}
function HfA(n, e){
  const t=n.anchor, i=n.focus, r=t.getNode(), s=i.getNode();
  if(r===s&&t.type==="text"&&i.type==="text"){
    const o=t.offset, a=i.offset, l=o<a, u=l?o:a, d=l?a:o, m=d-1;
    if(u!==m){
      const p=r.getTextContent().slice(u,d);
      l7h(p)||(e?i.offset=m:t.offset=m)
    }
  }
}
function Uqh(n, e, t){
  const i=n, s=i.getTextContent().split(/(?=\s)/g), o=s.length;
  let a=0, l=0;
  for(let d=0;
  d<o;
  d++){
    const m=s[d], p=d===o-1;
    if(l=a, a+=m.length, e&&a===t||a>t||p){
      s.splice(d,1),p&&(l=void 0);
      break
    }
  }
  const u=s.join("").trim();
  u===""?i.remove():(i.setTextContent(u), i.select(l, l))
}
function JfA(n, e, t){
  const i=n.getParent();
  return t===null||i===null||!i.canBeEmpty()||i!==t.getNode()
}
function $qh(n, e, t, i){
  let r=e, s;
  if(n.nodeType===D9t){
    let o=!1;
    const a=n.childNodes, l=a.length;
    r===l&&(o=!0, r=l-1);
    let u=a[r], d=!1;
    if(u===i._blockCursorElement?(u=a[r+1], d=!0):i._blockCursorElement!==null&&r--, s=y9t(u), jd(s))r=c7h(s, o);
    else{
      let m=y9t(n);
      if(m===null)return null;
      if(kd(m)){
        let p=m.getChildAtIndex(r);
        if(kd(p)&&JfA(p,r,t)){
          const g=o?p.getLastDescendant():p.getFirstDescendant();
          g===null?(m=p,r=0):(p=g,m=kd(p)?p:p.getParentOrThrow())
        }
        jd(p)?(s=p,m=null,r=c7h(p,o)):p!==m&&o&&!d&&r++
      }
      else{
        const p=m.getIndexWithinParent();
        e===0&&ZD(m)&&y9t(n)===m?r=p:r=p+1,m=m.getParentOrThrow()
      }
      if(kd(m))return QRe(m.__key,r,"element")
    }
  }
  else s=y9t(n);
  return jd(s)?QRe(s.__key, r, "text"):null
}
function qqh(n, e, t){
  const i=n.offset, r=n.getNode();
  if(i===0){
    const s=r.getPreviousSibling(), o=r.getParent();
    if(!e)kd(s)&&!t&&s.isInline()?(n.key=s.__key, n.offset=s.getChildrenSize(), n.type="element"):jd(s)&&(n.key=s.__key, n.offset=s.getTextContent().length);
    else if((t||!e)&&s===null&&kd(o)&&o.isInline()){
      const a=o.getPreviousSibling();
      jd(a)&&(n.key=a.__key,n.offset=a.getTextContent().length)
    }
  }
  else if(i===r.getTextContent().length){
    const s=r.getNextSibling(), o=r.getParent();
    if(e&&kd(s)&&s.isInline())n.key=s.__key, n.offset=0, n.type="element";
    else if((t||e)&&s===null&&kd(o)&&o.isInline()&&!o.canInsertTextAfter()){
      const a=o.getNextSibling();
      jd(a)&&(n.key=a.__key,n.offset=0)
    }
  }
}
function Hqh(n, e, t){
  if(n.type==="text"&&e.type==="text"){
    const i=n.isBefore(e), r=n.is(e);
    qqh(n, i, r), qqh(e, !i, r), r&&(e.key=n.key, e.offset=n.offset, e.type=n.type);
    const s=G6();
    if(s.isComposing()&&s._compositionKey!==n.key&&dd(t)){
      const o=t.anchor,a=t.focus;
      sYe(n,o.key,o.offset,o.type),sYe(e,a.key,a.offset,a.type)
    }
  }
}
function Jqh(n, e, t, i, r, s){
  if(n===null||t===null||!v6n(r, n, t))return null;
  const o=$qh(n, e, dd(s)?s.anchor:null, r);
  if(o===null)return null;
  const a=$qh(t, i, dd(s)?s.focus:null, r);
  if(a===null)return null;
  if(o.type==="element"&&a.type==="element"){
    const l=y9t(n), u=y9t(t);
    if(ZD(l)&&ZD(u))return null
  }
  return Hqh(o, a, s), [o, a]
}
function c3c(n){
  return kd(n)&&!n.isInline()
}
function Gqh(n, e, t, i, r, s){
  const o=K9e(), a=new k9t(QRe(n, e, r), QRe(t, i, s), 0, "");
  return a.dirty=!0, o._selection=a, a
}
function l3c(){
  const n=QRe("root", 0, "element"), e=QRe("root", 0, "element");
  return new k9t(n, e, 0, "")
}
function u3c(){
  return new U3c(new Set)
}
function GfA(){
  const n=QRe("root", 0, "element"), e=QRe("root", 0, "element");
  return new $3c("root", n, e)
}
function WfA(n){
  const t=n.getEditorState()._selection, i=Y9e(n);
  return jte(t)||pvt(t)?t.clone():d3c(t, i, n)
}
function d3c(n, e, t){
  const i=t._window;
  if(i===null)return null;
  const r=i.event, s=r?r.type:void 0, o=s==="selectionchange", a=!xfA()&&(o||s==="beforeinput"||s==="compositionstart"||s==="compositionend"||s==="click"&&r&&r.detail===3||s==="drop"||s===void 0);
  let l, u, d, m;
  if(!dd(n)||a){
    if(e===null)return null;
    if(l=e.anchorNode, u=e.focusNode, d=e.anchorOffset, m=e.focusOffset, o&&dd(n)&&!v6n(t, l, u))return n.clone()
  }
  else return n.clone();
  const p=Jqh(l, d, u, m, t, n);
  if(p===null)return null;
  const[g, f]=p;
  return new k9t(g, f, dd(n)?n.format:0, dd(n)?n.style:"")
}
function Wd(){
  return K9e()._selection
}
function dUo(){
  return G6()._editorState._selection
}
function hUo(n, e, t, i=1){
  const r=n.anchor, s=n.focus, o=r.getNode(), a=s.getNode();
  if(!e.is(o)&&!e.is(a))return;
  const l=e.__key;
  if(n.isCollapsed()){
    const u=r.offset;
    if(t<=u&&i>0||t<u&&i<0){
      const d=Math.max(0,u+i);
      r.set(l,d,"element"),s.set(l,d,"element"),Wqh(n)
    }
  }
  else{
    const u=n.isBackward(), d=u?s:r, m=d.getNode(), p=u?r:s, g=p.getNode();
    if(e.is(m)){
      const f=d.offset;
      (t<=f&&i>0||t<f&&i<0)&&d.set(l,Math.max(0,f+i),"element")
    }
    if(e.is(g)){
      const f=p.offset;
      (t<=f&&i>0||t<f&&i<0)&&p.set(l,Math.max(0,f+i),"element")
    }
  }
  Wqh(n)
}
function Wqh(n){
  const e=n.anchor, t=e.offset, i=n.focus, r=i.offset, s=e.getNode(), o=i.getNode();
  if(n.isCollapsed()){
    if(!kd(s))return;
    const a=s.getChildrenSize(), l=t>=a, u=l?s.getChildAtIndex(a-1):s.getChildAtIndex(t);
    if(jd(u)){
      let d=0;
      l&&(d=u.getTextContentSize()),e.set(u.__key,d,"text"),i.set(u.__key,d,"text")
    }
    return
  }
  if(kd(s)){
    const a=s.getChildrenSize(), l=t>=a, u=l?s.getChildAtIndex(a-1):s.getChildAtIndex(t);
    if(jd(u)){
      let d=0;
      l&&(d=u.getTextContentSize()),e.set(u.__key,d,"text")
    }
  }
  if(kd(o)){
    const a=o.getChildrenSize(), l=r>=a, u=l?o.getChildAtIndex(a-1):o.getChildAtIndex(r);
    if(jd(u)){
      let d=0;
      l&&(d=u.getTextContentSize()),i.set(u.__key,d,"text")
    }
  }
}
function QfA(n, e){
  const i=e.getEditorState()._selection, r=n._selection;
  if(dd(r)){
    const s=r.anchor, o=r.focus;
    let a;
    if(s.type==="text"&&(a=s.getNode(), a.selectionTransform(i, r)), o.type==="text"){
      const l=o.getNode();
      a!==l&&l.selectionTransform(i,r)
    }
  }
}
function mUo(n, e, t, i, r){
  let s=null, o=0, a=null;
  i!==null?(s=i.__key, jd(i)?(o=i.getTextContentSize(), a="text"):kd(i)&&(o=i.getChildrenSize(), a="element")):r!==null&&(s=r.__key, jd(r)?a="text":kd(r)&&(a="element")), s!==null&&a!==null?n.set(s, o, a):(o=e.getIndexWithinParent(), o===-1&&(o=t.getChildrenSize()), n.set(t.__key, o, "element"))
}
function Qqh(n, e, t, i, r){
  n.type==="text"?(n.key=t, e||(n.offset+=r)):n.offset>i.getIndexWithinParent()&&(n.offset-=1)
}
function jfA(n, e, t, i, r, s, o){
  const a=i.anchorNode, l=i.focusNode, u=i.anchorOffset, d=i.focusOffset, m=document.activeElement;
  if(r.has("collaboration")&&m!==s||m!==null&&m3c(m)||r.has("preserve-focus")||m!==null&&!s.contains(m)&&(m.tagName==="INPUT"||m.tagName==="TEXTAREA"||m.isContentEditable===!0||m.closest('[contenteditable="true"]')!==null))return;
  if(!dd(e)){
    n!==null&&v6n(t, a, l)&&i.removeAllRanges();
    return
  }
  const p=e.anchor, g=e.focus, f=p.key, A=g.key, w=bUo(t, f), C=bUo(t, A), x=p.offset, I=g.offset, B=e.format, R=e.style, N=e.isCollapsed();
  let M=w, O=C, $=!1;
  if(p.type==="text"){
    M=pUo(w);
    const H=p.getNode();
    $=H.getFormat()!==B||H.getStyle()!==R
  }
  else dd(n)&&n.anchor.type==="text"&&($=!0);
  if(g.type==="text"&&(O=pUo(C)), !(M===null||O===null)&&(N&&(n===null||$||dd(n)&&(n.format!==B||n.style!==R))&&SfA(B, R, x, f, performance.now()), !(u===x&&d===I&&a===M&&l===O&&!(i.type==="Range"&&N)&&((m===null||!s.contains(m))&&s.focus({
    preventScroll:!0
  }), p.type!=="element")))){
    try{
      i.setBaseAndExtent(M,x,O,I)
    }
    catch{
      
    }
    if(!r.has("skip-scroll-into-view")&&e.isCollapsed()&&s!==null&&s===document.activeElement){
      const H=e instanceof k9t&&e.anchor.type==="element"?M.childNodes[x]||null:i.rangeCount>0?i.getRangeAt(0):null;
      if(H!==null){
        let W;
        if(H instanceof Text){
          const z=document.createRange();
          z.selectNode(H),W=z.getBoundingClientRect()
        }
        else W=H.getBoundingClientRect();
        qbA(t,W,s)
      }
    }
    CfA()
  }
}
function v9t(n, e){
  let t=Wd();
  return t===null&&(t=lf().selectEnd()), t.insertNodes(n, e)
}
function zfA(n, e, t){
  const i=[];
  let r=null, s=null;
  function o(u, d, m){
    const p={
      cell:m,startColumn:d,startRow:u
    }, g=m.__rowSpan, f=m.__colSpan;
    for(let A=0;
    A<g;
    A++){
      i[u+A]===void 0&&(i[u+A]=[]);
      for(let w=0;
      w<f;
      w++)i[u+A][d+w]=p
    }
    e.is(m)&&(r=p), t.is(m)&&(s=p)
  }
  function a(u, d){
    return i[u]===void 0||i[u][d]===void 0
  }
  const l=n.getChildren();
  for(let u=0;
  u<l.length;
  u++){
    const d=l[u];
    Yg(bvt(d), "Expected GridNode children to be GridRowNode");
    const m=d.getChildren();
    let p=0;
    for(const g of m){
      for(Yg(_ve(g),"Expected GridRowNode children to be GridCellNode");
      !a(u,p);
      )p++;
      o(u,p,g),p+=g.__colSpan
    }
  }
  return Yg(r!==null, "Anchor not found in Grid"), Yg(s!==null, "Focus not found in Grid"), [i, r, s]
}
function A9t(){
  return Yte||tJ!==null&&tJ._readOnly
}
function aae(){
  Yte&&Yg(!1, "Cannot use method in read-only mode.")
}
function jqh(){
  D6n>99&&Yg(!1, "One or more transforms are endlessly triggering additional transforms. May have encountered infinite recursion caused by transforms that have their preconditions too lose and/or conflict with each other.")
}
function K9e(){
  return tJ===null&&Yg(!1, "Unable to find an active editor state. State helpers or node methods can only be used synchronously during the callback of editor.update() or editorState.read()."), tJ
}
function G6(){
  return nJ===null&&Yg(!1, "Unable to find an active editor. This method can only be used synchronously during the callback of editor.update()."), nJ
}
function zqh(){
  return nJ
}
function Vqh(n, e, t){
  const i=e.__type, r=rbA(n, i);
  let s=t.get(i);
  s===void 0&&(s=Array.from(r.transforms), t.set(i, s));
  const o=s.length;
  for(let a=0;
  a<o&&(s[a](e), !!e.isAttached());
  a++);
}
function Kqh(n, e){
  return n!==void 0&&n.__key!==e&&n.isAttached()
}
function VfA(n, e){
  const t=e._dirtyLeaves, i=n._nodeMap;
  for(const r of t){
    const s=i.get(r);
    jd(s)&&s.isAttached()&&s.isSimpleText()&&!s.isUnmergeable()&&Tqh(s)
  }
}
function KfA(n, e){
  const t=e._dirtyLeaves, i=e._dirtyElements, r=n._nodeMap, s=oYe(), o=new Map;
  let a=t, l=a.size, u=i, d=u.size;
  for(;
  l>0||d>0;
  ){
    if(l>0){
      e._dirtyLeaves=new Set;
      for(const m of a){
        const p=r.get(m);
        jd(p)&&p.isAttached()&&p.isSimpleText()&&!p.isUnmergeable()&&Tqh(p),p!==void 0&&Kqh(p,s)&&Vqh(e,p,o),t.add(m)
      }
      if(a=e._dirtyLeaves,l=a.size,l>0){
        D6n++;
        continue
      }
    }
    e._dirtyLeaves=new Set, e._dirtyElements=new Map;
    for(const m of u){
      const p=m[0],g=m[1];
      if(p!=="root"&&!g)continue;
      const f=r.get(p);
      f!==void 0&&Kqh(f,s)&&Vqh(e,f,o),i.set(p,g)
    }
    a=e._dirtyLeaves, l=a.size, u=e._dirtyElements, d=u.size, D6n++
  }
  e._dirtyLeaves=t, e._dirtyElements=i
}
function YfA(n){
  return h3c(n, G6()._nodes)
}
function h3c(n, e){
  const t=n.type, i=e.get(t);
  i===void 0&&Yg(!1, 'parseEditorState: type "%s" + not found', t);
  const r=i.klass;
  n.type!==r.getType()&&Yg(!1, "LexicalNode: Node %s does not implement .importJSON().", r.name);
  const s=r.importJSON(n), o=n.children;
  if(kd(s)&&Array.isArray(o))for(let a=0;
  a<o.length;
  a++){
    const l=o[a], u=h3c(l, e);
    s.append(u)
  }
  return s
}
function ZfA(n, e, t){
  const i=ZOc(), r=tJ, s=Yte, o=nJ, a=e._dirtyElements, l=e._dirtyLeaves, u=e._cloneNotNeeded, d=e._dirtyType;
  e._dirtyElements=new Map, e._dirtyLeaves=new Set, e._cloneNotNeeded=new Set, e._dirtyType=0, tJ=i, Yte=!1, nJ=e;
  try{
    const m=e._nodes, p=n.root;
    h3c(p, m), t&&t(), i._readOnly=!0
  }
  catch(m){
    m instanceof Error&&e._onError(m)
  }
  finally{
    e._dirtyElements=a, e._dirtyLeaves=l, e._cloneNotNeeded=u, e._dirtyType=d, tJ=r, Yte=s, nJ=o
  }
  return i
}
function Yqh(n, e){
  const t=tJ, i=Yte, r=nJ;
  tJ=n, Yte=!0, nJ=null;
  try{
    return e()
  }
  finally{
    tJ=t, Yte=i, nJ=r
  }
}
function gvt(n){
  const e=n._pendingEditorState, t=n._rootElement, i=n._headless||t===null;
  if(e===null)return;
  const r=n._editorState, s=r._selection, o=e._selection, a=n._dirtyType!==fYe, l=tJ, u=Yte, d=nJ, m=n._updating, p=n._observer;
  let g=null;
  if(n._pendingEditorState=null, n._editorState=e, !i&&a&&p!==null){
    nJ=n, tJ=e, Yte=!1, n._updating=!0;
    try{
      const N=n._dirtyType,M=n._dirtyElements,O=n._dirtyLeaves;
      p.disconnect(),g=OfA(r,e,n,N,M,O)
    }
    catch(N){
      if(N instanceof Error&&n._onError(N),!IUo)dqh(n,null,t,e),kqh(n),n._dirtyType=Evt,IUo=!0,gvt(n),IUo=!1;
      else throw N;
      return
    }
    finally{
      p.observe(t,q3c),n._updating=m,tJ=l,Yte=u,nJ=d
    }
  }
  e._readOnly||(e._readOnly=!0);
  const f=n._dirtyLeaves, A=n._dirtyElements, w=n._normalizedNodes, C=n._updateTags, x=n._deferred, I=e._nodeMap.size;
  a&&(n._dirtyType=fYe, n._cloneNotNeeded.clear(), n._dirtyLeaves=new Set, n._dirtyElements=new Map, n._normalizedNodes=new Set, n._updateTags=new Set), kfA(n, e);
  const B=i?null:Y9e(n);
  if(n._editable&&B!==null&&(a||o===null||o.dirty)){
    nJ=n, tJ=e;
    try{
      if(p!==null&&p.disconnect(),a||o===null||o.dirty){
        const N=n._blockCursorElement;
        N!==null&&x3c(N,n,t),jfA(s,o,n,B,C,t,I)
      }
      jbA(n,t,o),p!==null&&p.observe(t,q3c)
    }
    finally{
      nJ=d,tJ=l
    }
  }
  g!==null&&ebA(n, r, e, g, C, f), !dd(o)&&o!==null&&(s===null||!s.is(o))&&n.dispatchCommand(B6n, void 0);
  const R=n._pendingDecorators;
  R!==null&&(n._decorators=R, n._pendingDecorators=null, b6n("decorator", n, !0, R)), XfA(n, r, e), b6n("update", n, !0, {
    dirtyElements:A, dirtyLeaves:f, editorState:e, normalizedNodes:w, prevEditorState:r, tags:C
  }), nbA(n, x), tbA(n)
}
function XfA(n, e, t){
  const i=o7h(e), r=o7h(t);
  i!==r&&b6n("textcontent", n, !0, r)
}
function ebA(n, e, t, i, r, s){
  const o=Array.from(n._listeners.mutation), a=o.length;
  for(let l=0;
  l<a;
  l++){
    const[u, d]=o[l], m=i.get(d);
    m!==void 0&&u(m, {
      dirtyLeaves:s,updateTags:r
    })
  }
}
function b6n(n, e, t, ...i){
  const r=e._updating;
  e._updating=t;
  try{
    const s=Array.from(e._listeners[n]);
    for(let o=0;
    o<s.length;
    o++)s[o].apply(null, i)
  }
  finally{
    e._updating=r
  }
}
function Zqh(n, e, t){
  if(n._updating===!1||nJ!==n){
    let r=!1;
    return n.update(()=>{
      r=Zqh(n,e,t)
    }), r
  }
  const i=f3c(n);
  for(let r=4;
  r>=0;
  r--)for(let s=0;
  s<i.length;
  s++){
    const l=i[s]._commands.get(e);
    if(l!==void 0){
      const u=l[r];
      if(u!==void 0){
        const d=Array.from(u),m=d.length;
        for(let p=0;
        p<m;
        p++)if(d[p](t,n)===!0)return!0
      }
    }
  }
  return!1
}
function tbA(n){
  const e=n._updates;
  if(e.length!==0){
    const t=e.shift();
    if(t){
      const[i,r]=t;
      e7h(n,i,r)
    }
  }
}
function nbA(n, e){
  if(n._deferred=[], e.length!==0){
    const t=n._updating;
    n._updating=!0;
    try{
      for(let i=0;
      i<e.length;
      i++)e[i]()
    }
    finally{
      n._updating=t
    }
  }
}
function Xqh(n, e){
  const t=n._updates;
  let i=e||!1;
  for(;
  t.length!==0;
  ){
    const r=t.shift();
    if(r){
      const[s,o]=r;
      let a,l;
      o!==void 0&&(a=o.onUpdate,l=o.tag,o.skipTransforms&&(i=!0),a&&n._deferred.push(a),l&&n._updateTags.add(l)),s()
    }
  }
  return i
}
function e7h(n, e, t){
  const i=n._updateTags;
  let r, s, o=!1, a=!1;
  t!==void 0&&(r=t.onUpdate, s=t.tag, s!=null&&i.add(s), o=t.skipTransforms||!1, a=t.discrete||!1), r&&n._deferred.push(r);
  const l=n._editorState;
  let u=n._pendingEditorState, d=!1;
  (u===null||u._readOnly)&&(u=n._pendingEditorState=lfA(u||l), d=!0), u._flushSync=a;
  const m=tJ, p=Yte, g=nJ, f=n._updating;
  tJ=u, Yte=!1, n._updating=!0, nJ=n;
  try{
    d&&(n._headless?l._selection!=null&&(u._selection=l._selection.clone()):u._selection=WfA(n));
    const w=n._compositionKey;
    e(), o=Xqh(n, o), QfA(u, n), n._dirtyType!==fYe&&(o?VfA(u, n):KfA(u, n), Xqh(n), EfA(l, u, n._dirtyLeaves, n._dirtyElements));
    const C=n._compositionKey;
    w!==C&&(u._flushSync=!0);
    const x=u._selection;
    if(dd(x)){
      const I=u._nodeMap,B=x.anchor.key,R=x.focus.key;
      (I.get(B)===void 0||I.get(R)===void 0)&&Yg(!1,"updateEditor: selection has been lost because the previously selected nodes have been removed and selection wasn't moved to another node. Ensure selection changes after removing/replacing a selected node.")
    }
    else jte(x)&&x._nodes.size===0&&(u._selection=null)
  }
  catch(w){
    w instanceof Error&&n._onError(w), n._pendingEditorState=l, n._dirtyType=Evt, n._cloneNotNeeded.clear(), n._dirtyLeaves=new Set, n._dirtyElements.clear(), gvt(n);
    return
  }
  finally{
    tJ=m, Yte=p, nJ=g, n._updating=f, D6n=0
  }
  n._dirtyType!==fYe||cfA(u, n)?u._flushSync?(u._flushSync=!1, gvt(n)):d&&T7h(()=>{
    gvt(n)
  }):(u._flushSync=!1, d&&(i.clear(), n._deferred=[], n._pendingEditorState=null))
}
function ahe(n, e, t){
  n._updating?n._updates.push([e, t]):e7h(n, e, t)
}
function ibA(){
  return""+x7h++
}
function rbA(n, e){
  const t=n._nodes.get(e);
  return t===void 0&&Yg(!1, "registeredNode: Type %s not found", e), t
}
function sbA(n){
  return ZD(jRe(n))
}
function m3c(n){
  const e=document.activeElement;
  if(e===null)return!1;
  const t=e.nodeName;
  return ZD(jRe(n))&&(t==="INPUT"||t==="TEXTAREA"||e.contentEditable==="true"&&e.__lexicalEditor==null)
}
function v6n(n, e, t){
  const i=n.getRootElement();
  try{
    return i!==null&&i.contains(e)&&i.contains(t)&&e!==null&&!m3c(e)&&t7h(e)===n
  }
  catch{
    return!1
  }
}
function t7h(n){
  let e=n;
  for(;
  e!=null;
  ){
    const t=e.__lexicalEditor;
    if(t!=null)return t;
    e=vUo(e)
  }
  return null
}
function obA(n){
  return RHh.test(n)?"rtl":PHh.test(n)?"ltr":null
}
function p3c(n){
  return n.isToken()||n.isSegmented()
}
function abA(n){
  return n.nodeType===XRe
}
function pUo(n){
  let e=n;
  for(;
  e!=null;
  ){
    if(abA(e))return e;
    e=e.firstChild
  }
  return null
}
function n7h(n, e, t){
  const i=bYe[e];
  return n&i&&(t===null||(t&i)===0)?n^i:t===null||t&i?n|i:n
}
function g3c(n){
  return jd(n)||x3(n)||ZD(n)
}
function i7h(n, e){
  if(e!=null){
    n.__key=e;
    return
  }
  aae(), jqh();
  const t=G6(), i=K9e(), r=ibA();
  i._nodeMap.set(r, n), kd(n)?t._dirtyElements.set(r, !0):t._dirtyLeaves.add(r), t._cloneNotNeeded.add(r), t._dirtyType=e5c, n.__key=r
}
function cbA(n, e, t){
  let i=n;
  for(;
  i!==null;
  ){
    if(t.has(i))return;
    const r=e.get(i);
    if(r===void 0)break;
    t.set(i, !1), i=r.__parent
  }
}
function fvt(n){
  const e=n.getParent();
  if(e!==null){
    const t=n.getWritable(), i=e.getWritable(), r=n.getPreviousSibling(), s=n.getNextSibling();
    if(r===null)if(s!==null){
      const o=s.getWritable();
      i.__first=s.__key,o.__prev=null
    }
    else i.__first=null;
    else{
      const o=r.getWritable();
      if(s!==null){
        const a=s.getWritable();
        a.__prev=o.__key,o.__next=a.__key
      }
      else o.__next=null;
      t.__prev=null
    }
    if(s===null)if(r!==null){
      const o=r.getWritable();
      i.__last=r.__key,o.__next=null
    }
    else i.__last=null;
    else{
      const o=s.getWritable();
      if(r!==null){
        const a=r.getWritable();
        a.__next=o.__key,o.__prev=a.__key
      }
      else o.__prev=null;
      t.__next=null
    }
    i.__size--, t.__parent=null
  }
}
function gUo(n){
  jqh();
  const e=n.getLatest(), t=e.__parent, i=K9e(), r=G6(), s=i._nodeMap, o=r._dirtyElements;
  t!==null&&cbA(t, s, o);
  const a=e.__key;
  r._dirtyType=e5c, kd(n)?o.set(a, !0):r._dirtyLeaves.add(a)
}
function lbA(n){
  const e=n.getPreviousSibling(), t=n.getNextSibling();
  e!==null&&gUo(e), t!==null&&gUo(t)
}
function YY(n){
  aae();
  const e=G6(), t=e._compositionKey;
  if(n!==t){
    if(e._compositionKey=n, t!==null){
      const i=jB(t);
      i!==null&&i.getWritable()
    }
    if(n!==null){
      const i=jB(n);
      i!==null&&i.getWritable()
    }
  }
}
function oYe(){
  return A9t()?null:G6()._compositionKey
}
function jB(n, e){
  const i=(e||K9e())._nodeMap.get(n);
  return i===void 0?null:i
}
function r7h(n, e){
  const t=G6(), i=n[`__lexicalKey_${t._key}`];
  return i!==void 0?jB(i, e):null
}
function jRe(n, e){
  let t=n;
  for(;
  t!=null;
  ){
    const i=r7h(t, e);
    if(i!==null)return i;
    t=vUo(t)
  }
  return null
}
function s7h(n){
  const e=n._decorators, t=Object.assign({
    
  }, e);
  return n._pendingDecorators=t, t
}
function o7h(n){
  return n.read(()=>lf().getTextContent())
}
function ubA(n, e){
  ahe(n, ()=>{
    const t=K9e();
    if(t.isEmpty())return;
    if(e==="root"){
      lf().markDirty();
      return
    }
    const i=t._nodeMap;
    for(const[, r]of i)r.markDirty()
  }, n._pendingEditorState===null?{
    tag:"history-merge"
  }
  :void 0)
}
function lf(){
  return a7h(K9e())
}
function a7h(n){
  return n._nodeMap.get("root")
}
function cae(n){
  aae();
  const e=K9e();
  n!==null&&(n.dirty=!0, n._cachedNodes=null), e._selection=n
}
function dbA(){
  aae();
  const n=G6();
  Sqh(n)
}
function y9t(n){
  const e=G6(), t=hbA(n, e);
  if(t===null){
    const i=e.getRootElement();
    return n===i?jB("root"):null
  }
  return jB(t)
}
function c7h(n, e){
  return e?n.getTextContentSize():0
}
function hbA(n, e){
  let t=n;
  for(;
  t!=null;
  ){
    const i=t[`__lexicalKey_${e._key}`];
    if(i!==void 0)return i;
    t=vUo(t)
  }
  return null
}
function l7h(n){
  return/[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(n)
}
function f3c(n){
  const e=[];
  let t=n;
  for(;
  t!==null;
  )e.push(t), t=t._parentEditor;
  return e
}
function u7h(){
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5)
}
function d7h(n){
  return n.nodeType===XRe?n.nodeValue:null
}
function b3c(n, e, t){
  const i=Y9e(e);
  if(i===null)return;
  const r=i.anchorNode;
  let{
    anchorOffset:s, focusOffset:o
  }
  =i;
  if(r!==null){
    let a=d7h(r);
    const l=jRe(r);
    if(a!==null&&jd(l)){
      if(a===H6n&&t){
        const u=t.length;
        a=t,s=u,o=u
      }
      a!==null&&v3c(l,a,s,o,n)
    }
  }
}
function v3c(n, e, t, i, r){
  let s=n;
  if(s.isAttached()&&(r||!s.isDirty())){
    const o=s.isComposing();
    let a=e;
    (o||r)&&e[e.length-1]===H6n&&(a=e.slice(0, -1));
    const l=s.getTextContent();
    if(r||a!==l){
      if(a===""){
        if(YY(null),!g9t&&!f9t&&!b9t){
          const A=G6();
          setTimeout(()=>{
            A.update(()=>{
              s.isAttached()&&s.remove()
            })
          },20)
        }
        else s.remove();
        return
      }
      const u=s.getParent(),d=dUo(),m=s.getTextContentSize(),p=oYe(),g=s.getKey();
      if(s.isToken()||p!==null&&g===p&&!o||dd(d)&&(u!==null&&!u.canInsertTextBefore()&&d.anchor.offset===0||d.anchor.key===n.__key&&d.anchor.offset===0&&!s.canInsertTextBefore()||d.focus.key===n.__key&&d.focus.offset===m&&!s.canInsertTextAfter())){
        s.markDirty();
        return
      }
      const f=Wd();
      if(!dd(f)||t===null||i===null){
        s.setTextContent(a);
        return
      }
      if(f.setTextNodeRange(s,t,s,i),s.isSegmented()){
        const A=s.getTextContent(),w=OA(A);
        s.replace(w),s=w
      }
      s.setTextContent(a)
    }
  }
}
function mbA(n){
  const e=n.getPreviousSibling();
  return(jd(e)||kd(e)&&e.isInline())&&!e.canInsertTextAfter()
}
function pbA(n, e){
  if(e.isSegmented())return!0;
  if(!n.isCollapsed())return!1;
  const t=n.anchor.offset, i=e.getParentOrThrow(), r=e.isToken();
  return t===0?!e.canInsertTextBefore()||!i.canInsertTextBefore()||r||mbA(e):t===e.getTextContentSize()?!e.canInsertTextAfter()||!i.canInsertTextAfter()||r:!1
}
function gbA(n, e, t, i){
  return n===9&&!e&&!t&&!i
}
function fbA(n, e, t, i){
  return n===66&&!e&&A6n(t, i)
}
function bbA(n, e, t, i){
  return n===73&&!e&&A6n(t, i)
}
function vbA(n, e, t, i){
  return n===85&&!e&&A6n(t, i)
}
function AbA(n, e){
  return m7h(n)&&!e
}
function ybA(n, e){
  return m7h(n)&&e
}
function wbA(n, e){
  return oae&&e&&n===79
}
function _bA(n, e, t){
  return y6n(n)&&(oae?e:t)
}
function CbA(n, e, t){
  return w6n(n)&&(oae?e:t)
}
function SbA(n, e){
  return oae&&e&&y6n(n)
}
function kbA(n, e){
  return oae&&e&&w6n(n)
}
function EbA(n, e, t, i){
  return oae?e||t?!1:y6n(n)||n===72&&i:i||e||t?!1:y6n(n)
}
function xbA(n, e, t, i, r){
  return oae?t||i||r?!1:w6n(n)||n===68&&e:e||i||r?!1:w6n(n)
}
function TbA(n, e, t, i){
  return n===90&&!e&&A6n(t, i)
}
function IbA(n, e, t, i){
  return oae?n===90&&t&&e:n===89&&i||n===90&&i&&e
}
function DbA(n, e, t, i){
  return e?!1:n===67?oae?t:i:!1
}
function h7h(n, e, t, i){
  return e?!1:n===88?oae?t:i:!1
}
function A3c(n){
  return n===37
}
function y3c(n){
  return n===39
}
function w3c(n){
  return n===38
}
function _3c(n){
  return n===40
}
function BbA(n, e, t, i){
  return A3c(n)&&!e&&!i&&!t
}
function RbA(n, e, t, i, r){
  return A3c(n)&&!i&&!t&&(e||r)
}
function PbA(n, e, t, i){
  return y3c(n)&&!e&&!i&&!t
}
function LbA(n, e, t, i, r){
  return y3c(n)&&!i&&!t&&(e||r)
}
function NbA(n, e, t){
  return w3c(n)&&!e&&!t
}
function MbA(n, e, t){
  return _3c(n)&&!e&&!t
}
function FbA(n, e, t, i){
  return n||e||t||i
}
function ObA(n){
  return n===32
}
function A6n(n, e){
  return oae?n:e
}
function m7h(n){
  return n===13
}
function y6n(n){
  return n===8
}
function UbA(n){
  return n===27
}
function w6n(n){
  return n===46
}
function $bA(n, e, t){
  return n===65&&A6n(e, t)
}
function _6n(n, e){
  const t=n[e];
  if(typeof t=="string"){
    const i=t.split(" ");
    return n[e]=i, i
  }
  return t
}
function C3c(n, e, t, i, r){
  if(t.size===0)return;
  const s=i.__type, o=i.__key, a=e.get(s);
  a===void 0&&Yg(!1, "Type %s not in registeredNodes", s);
  const l=a.klass;
  let u=n.get(l);
  u===void 0&&(u=new Map, n.set(l, u));
  const d=u.get(o), m=d==="destroyed"&&r==="created";
  (d===void 0||m)&&u.set(o, m?"updated":r)
}
function p7h(n, e, t){
  const i=n.getParent();
  let r=t, s=n;
  return i!==null&&(e&&t===0?(r=s.getIndexWithinParent(), s=i):!e&&t===s.getChildrenSize()&&(r=s.getIndexWithinParent()+1, s=i)), s.getChildAtIndex(e?r-1:r)
}
function C6n(n, e){
  const t=n.offset;
  if(n.type==="element"){
    const i=n.getNode();
    return p7h(i, e, t)
  }
  else{
    const i=n.getNode();
    if(e&&t===0||!e&&t===i.getTextContentSize()){
      const r=e?i.getPreviousSibling():i.getNextSibling();
      return r===null?p7h(i.getParentOrThrow(),e,i.getIndexWithinParent()+(e?0:1)):r
    }
  }
  return null
}
function g7h(n){
  const e=S6n(n).event, t=e&&e.inputType;
  return t==="insertFromPaste"||t==="insertFromPasteAsQuotation"
}
function Fd(n, e, t){
  return Zqh(n, e, t)
}
function fUo(n){
  return!ZY(n)&&!n.isLastChild()&&!n.isInline()
}
function bUo(n, e){
  const t=n._keyToDOMMap.get(e);
  return t===void 0&&Yg(!1, "Reconciliation: could not find DOM element for node key %s", e), t
}
function vUo(n){
  const e=n.assignedSlot||n.parentElement;
  return e!==null&&e.nodeType===11?e.host:e
}
function qbA(n, e, t){
  const i=Jy(), r=i.defaultView;
  if(r===null)return;
  let{
    top:s, bottom:o
  }
  =e, a=0, l=0, u=t;
  for(;
  u!==null;
  ){
    const d=u===i.body;
    if(d)a=0, l=S6n(n).innerHeight;
    else{
      const p=u.getBoundingClientRect();
      a=p.top,l=p.bottom
    }
    let m=0;
    if(s<a?m=-(a-s):o>l&&(m=o-l), m!==0)if(d)r.scrollBy(0, m);
    else{
      const p=u.scrollTop;
      u.scrollTop+=m;
      const g=u.scrollTop-p;
      s-=g,o-=g
    }
    if(d)break;
    u=vUo(u)
  }
}
function HbA(n, e=0){
  e!==0&&Yg(!1, "TODO");
  const t=Wd();
  if(!dd(t)||!kd(n))return t;
  const{
    anchor:i, focus:r
  }
  =t, s=i.getNode(), o=r.getNode();
  return S3c(s, n)&&i.set(n.__key, 0, "element"), S3c(o, n)&&r.set(n.__key, 0, "element"), t
}
function S3c(n, e){
  let t=n.getParent();
  for(;
  t!==null;
  ){
    if(t.is(e))return!0;
    t=t.getParent()
  }
  return!1
}
function JbA(n){
  return n.ownerDocument.defaultView??null
}
function S6n(n){
  const e=n._window, t=n.getRootElement();
  if(e!==null){
    if(t!==null){
      const i=t.ownerDocument;
      if(e.document!==i){
        const r=i.defaultView;
        if(r!==null)return r
      }
    }
    return e
  }
  if(t!==null){
    const i=t.ownerDocument.defaultView;
    if(i!==null)return i
  }
  Yg(!1, "window object not found")
}
function GbA(n){
  let e=n.getParentOrThrow();
  for(;
  e!==null;
  ){
    if(zte(e))return e;
    e=e.getParentOrThrow()
  }
  return e
}
function zte(n){
  return ZY(n)||kd(n)&&n.isShadowRoot()
}
function WbA(n){
  const e=n.constructor.clone(n);
  return i7h(e, null), e
}
function che(n){
  const e=G6(), t=n.constructor.getType(), i=e._nodes.get(t);
  i===void 0&&Yg(!1, '$initializeNode failed. Ensure node has been registered to the editor. You can do this by passing the node class via the "nodes" array in the editor config.');
  const r=i.replace;
  if(r!==null){
    const s=r(n);
    return s instanceof n.constructor||Yg(!1, "$initializeNode failed. Ensure replacement node is a subclass of the original node."), s
  }
  return n
}
function k3c(n, e){
  const t=n.getParent();
  ZY(t)&&!kd(e)&&!ZD(e)&&Yg(!1, "Only element or decorator nodes can be inserted in to the root node")
}
function QbA(n){
  const e=n.theme, t=bi.document.createElement("div");
  t.contentEditable="false", t.setAttribute("data-lexical-cursor", "true");
  let i=e.blockCursor;
  if(i!==void 0){
    if(typeof i=="string"){
      const r=i.split(" ");
      i=e.blockCursor=r
    }
    i!==void 0&&t.classList.add(...i)
  }
  return t
}
function E3c(n){
  return(ZD(n)||kd(n)&&!n.canBeEmpty())&&!n.isInline()
}
function x3c(n, e, t){
  t.style.removeProperty("caret-color"), e._blockCursorElement=null;
  const i=n.parentElement;
  i!==null&&i.removeChild(n)
}
function jbA(n, e, t){
  let i=n._blockCursorElement;
  if(dd(t)&&t.isCollapsed()&&t.anchor.type==="element"&&e.contains(document.activeElement)){
    const r=t.anchor, s=r.getNode(), o=r.offset, a=s.getChildrenSize();
    let l=!1, u=null;
    if(o===a){
      const d=s.getChildAtIndex(o-1);
      E3c(d)&&(l=!0)
    }
    else{
      const d=s.getChildAtIndex(o);
      if(E3c(d)){
        const m=d.getPreviousSibling();
        (m===null||E3c(m))&&(l=!0,u=n.getElementByKey(d.__key))
      }
    }
    if(l){
      const d=n.getElementByKey(s.__key);
      i===null&&(n._blockCursorElement=i=QbA(n._config)),e.style.caretColor="transparent",u===null?d.appendChild(i):d.insertBefore(i,u);
      return
    }
  }
  i!==null&&x3c(i, n, e)
}
function T3c(n){
  return WRe?(n||window).getSelection():null
}
function Y9e(n){
  const e=n._window, t=n.getRootElement();
  return T3c(e===null&&t===null?null:S6n(n))
}
function f7h(n, e){
  let t=n.getChildAtIndex(e);
  t==null&&(t=n), Yg(!zte(n), "Can not call $splitNode() on root element");
  const i=o=>{
    const a=o.getParentOrThrow(), l=zte(a), u=o===t&&!l?o:WbA(o);
    if(l)return o.insertAfter(u), [o, u, u];
    {
      const[d,m,p]=i(a),g=o.getNextSiblings();
      return p.append(u,...g),[d,m,u]
    }
  }, [r, s]=i(t);
  return[r, s]
}
function b7h(n, e){
  let t=n;
  for(;
  t!==lf()&&t!=null;
  ){
    if(e(t))return t;
    t=t.getParent()
  }
  return null
}
function zbA(n){
  const e=[], t=[n];
  for(;
  t.length>0;
  ){
    const i=t.pop();
    Yg(i!==void 0, "Stack.length > 0; can't be undefined"), kd(i)&&t.unshift(...i.getChildren()), i!==n&&e.push(i)
  }
  return e
}
function Uh(n){
  return{
    
  }
}
function I3c(n, e){
  return e&OUo?"code":e&qUo?"mark":e&UUo?"sub":e&$Uo?"sup":null
}
function D3c(n, e){
  return e&MUo?"strong":e&FUo?"em":"span"
}
function v7h(n, e, t, i, r){
  const s=i.classList;
  let o=_6n(r, "base");
  o!==void 0&&s.add(...o), o=_6n(r, "underlineStrikethrough");
  let a=!1;
  const l=e&$6n&&e&U6n, u=t&$6n&&t&U6n;
  o!==void 0&&(u?(a=!0, l||s.add(...o)):l&&s.remove(...o));
  for(const d in bYe){
    const p=bYe[d];
    if(o=_6n(r, d), o!==void 0)if(t&p){
      if(a&&(d==="underline"||d==="strikethrough")){
        e&p&&s.remove(...o);
        continue
      }
      ((e&p)===0||l&&d==="underline"||d==="strikethrough")&&s.add(...o)
    }
    else e&p&&s.remove(...o)
  }
}
function VbA(n, e){
  const t=n.length, i=e.length;
  let r=0, s=0;
  for(;
  r<t&&r<i&&n[r]===e[r];
  )r++;
  for(;
  s+r<t&&s+r<i&&n[t-s-1]===e[i-s-1];
  )s++;
  return[r, t-r-s, e.slice(r, i-s)]
}
function A7h(n, e, t){
  const i=e.firstChild, r=t.isComposing(), o=n+(r?H6n:"");
  if(i==null)e.textContent=o;
  else{
    const a=i.nodeValue;
    if(a!==o)if(r||rYe){
      const[l,u,d]=VbA(a,o);
      u!==0&&i.deleteData(l,u),i.insertData(l,d)
    }
    else i.nodeValue=o
  }
}
function y7h(n, e, t, i, r, s){
  A7h(r, n, e);
  const a=s.theme.text;
  a!==void 0&&v7h(t, 0, i, n, a)
}
function AUo(n, e){
  const t=bi.document.createElement(e);
  return t.appendChild(n), t
}
function KbA(n){
  const e=n, t=e.style.fontWeight==="700", i=e.style.textDecoration==="line-through", r=e.style.fontStyle==="italic", s=e.style.textDecoration==="underline", o=e.style.verticalAlign;
  return{
    forChild:a=>(jd(a)&&(t&&a.toggleFormat("bold"), i&&a.toggleFormat("strikethrough"), r&&a.toggleFormat("italic"), s&&a.toggleFormat("underline"), o==="sub"&&a.toggleFormat("subscript"), o==="super"&&a.toggleFormat("superscript")), a), node:null
  }
}
function YbA(n){
  const t=n.style.fontWeight==="normal";
  return{
    forChild:i=>(jd(i)&&!t&&i.toggleFormat("bold"), i), node:null
  }
}
function ZbA(n){
  return n.nodeName==="PRE"||n.nodeType===D9t&&n.style.whiteSpace.startsWith("pre")
}
function XbA(n){
  let e, t=n.parentNode;
  const i=[n];
  for(;
  t!==null&&(e=o5c.get(t))===void 0&&!ZbA(t);
  )i.push(t), t=t.parentNode;
  const r=e===void 0?t:e;
  for(let s=0;
  s<i.length;
  s++)o5c.set(i[s], r);
  return r
}
function evA(n){
  const e=n, t=n.parentElement;
  Yg(t!==null, "Expected parentElement of Text not to be null");
  let i=e.textContent||"";
  if(XbA(e)!==null){
    const r=i.split(/(\r?\n|\t)/), s=[], o=r.length;
    for(let a=0;
    a<o;
    a++){
      const l=r[a];
      l===`
`||l===`\r
`?s.push(lhe()):l==="	"?s.push(Vte()):l!==""&&s.push(OA(l))
    }
    return{
      node:s
    }
  }
  if(i=i.replace(/\r?\n|\t/gm, " ").replace("\r", "").replace(/\s+/g, " "), i==="")return{
    node:null
  };
  if(i[0]===" "){
    let r=e, s=!0;
    for(;
    r!==null&&(r=w7h(r, !1))!==null;
    ){
      const o=r.textContent||"";
      if(o.length>0){
        o.match(/(?:\s|\r?\n|\t)$/)&&(i=i.slice(1)),s=!1;
        break
      }
    }
    s&&(i=i.slice(1))
  }
  if(i[i.length-1]===" "){
    let r=e, s=!0;
    for(;
    r!==null&&(r=w7h(r, !0))!==null;
    )if((r.textContent||"").replace(/^[\s|\r?\n|\t]+/, "").length>0){
      s=!1;
      break
    }
    s&&(i=i.slice(0, i.length-1))
  }
  return i===""?{
    node:null
  }
  :{
    node:OA(i)
  }
}
function w7h(n, e){
  let t=n;
  for(;
  ;
  ){
    let i;
    for(;
    (i=e?t.nextSibling:t.previousSibling)===null;
    ){
      const s=t.parentElement;
      if(s===null)return null;
      t=s
    }
    if(t=i, t.nodeType===D9t){
      const s=t.style.display;
      if(s===""&&t.nodeName.match(OHh)===null||s!==""&&!s.startsWith("inline"))return null
    }
    let r=t;
    for(;
    (r=e?t.firstChild:t.lastChild)!==null;
    )t=r;
    if(t.nodeType===XRe)return t;
    if(t.nodeName==="BR")return null
  }
}
function aYe(n){
  const e=UHh[n.nodeName.toLowerCase()];
  return e===void 0?{
    node:null
  }
  :{
    forChild:t=>(jd(t)&&!t.hasFormat(e)&&t.toggleFormat(e), t), node:null
  }
}
function OA(n=""){
  return che(new s8e(n))
}
function jd(n){
  return n instanceof s8e
}
function Vte(){
  return che(new J6n)
}
function Z9e(n){
  return n instanceof J6n
}
function kd(n){
  return n instanceof Eve
}
function _7h(n, e, t){
  let i=n.getNode();
  for(;
  i;
  ){
    const r=i.__key;
    if(e.has(r)&&!t.has(r))return!0;
    i=i.getParent()
  }
  return!1
}
function tvA(n){
  return{
    node:lhe()
  }
}
function lhe(){
  return che(new G6n)
}
function x3(n){
  return n instanceof G6n
}
function bvt(n){
  return n instanceof $Hh
}
function _ve(n){
  return n instanceof qHh
}
function k6n(n){
  return n instanceof HHh
}
function ZD(n){
  return n instanceof W6n
}
function nvA(){
  return new VUo
}
function ZY(n){
  return n instanceof VUo
}
function ivA(n){
  const e=Lx();
  if(n.style){
    e.setFormat(n.style.textAlign);
    const t=parseInt(n.style.textIndent, 10)/20;
    t>0&&e.setIndent(t)
  }
  return{
    node:e
  }
}
function Lx(){
  return che(new o8e)
}
function cYe(n){
  return n instanceof o8e
}
var xA, lI, Cve, uhe, C7h, B3c, zRe, yUo, wUo, w9t, R3c, P3c, vvt, _9t, _Uo, CUo, SUo, C9t, S9t, L3c, Avt, S7h, kUo, EUo, E6n, Y$, XY, VRe, lYe, Kte, x6n, N3c, xUo, TUo, T6n, M3c, F3c, yvt, uYe, O3c, I6n, k7h, E7h, U3c, $3c, k9t, tJ, nJ, Yte, IUo, D6n, q3c, x7h, rvA, T7h, B6n, DUo, Sve, X9e, wvt, dYe, hYe, R6n, e8e, mYe, t8e, E9t, x9t, pYe, P6n, H3c, L6n, J3c, n8e, i8e, I7h, D7h, B7h, R7h, KRe, G3c, T9t, kve, N6n, W3c, Q3c, YRe, P7h, L7h, N7h, M7h, F7h, O7h, U7h, $7h, q7h, H7h, J7h, G7h, W7h, Q7h, j7h, z7h, V7h, K7h, Y7h, Z7h, X7h, eHh, tHh, nHh, iHh, rHh, svA, sHh, oHh, aHh, cHh, ovA, j3c, lHh, uHh, dHh, z3c, V3c, hHh, K3c, mHh, M6n, pHh, gHh, ZRe, fHh, Y3c, bHh, vHh, AHh, yHh, wHh, _Hh, CHh, avA, SHh, kHh, F6n, r8e, gYe, I9t, EHh, BUo, RUo, xHh, _vt, Cvt, Z3c, X3c, Svt, kvt, O6n, PUo, THh, D9t, XRe, fYe, e5c, Evt, t5c, LUo, NUo, MUo, FUo, U6n, $6n, OUo, UUo, $Uo, qUo, IHh, HUo, q6n, JUo, GUo, WUo, QUo, jUo, zUo, n5c, DHh, H6n, ePe, BHh, i5c, r5c, RHh, PHh, bYe, LHh, s5c, NHh, MHh, FHh, s8e, o5c, OHh, UHh, J6n, Eve, G6n, $Hh, qHh, HHh, W6n, VUo, o8e, V_=