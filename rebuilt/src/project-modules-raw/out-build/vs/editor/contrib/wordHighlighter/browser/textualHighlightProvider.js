// Module: out-build/vs/editor/contrib/wordHighlighter/browser/textualHighlightProvider.js
// Offset: 32764441 (bundle byte offset)
// Size: 1589 bytes

Jbe(), Cm(), Tg(), rt(), cu(), Myu=class{
  constructor(){
    this.selector={
      language:"*"
    }
  }
  provideDocumentHighlights(n, e, t){
    const i=[], r=n.getWordAtPosition({
      lineNumber:e.lineNumber,column:e.column
    });
    return r?n.isDisposed()?void 0:n.findMatches(r.word, !0, !1, !0, eVe, !1).map(o=>({
      range:o.range,kind:LOt.Text
    })):Promise.resolve(i)
  }
  provideMultiDocumentHighlights(n, e, t, i){
    const r=new fu, s=n.getWordAtPosition({
      lineNumber:e.lineNumber,column:e.column
    });
    if(!s)return Promise.resolve(r);
    for(const o of[n, ...t]){
      if(o.isDisposed())continue;
      const l=o.findMatches(s.word,!0,!1,!0,eVe,!1).map(u=>({
        range:u.range,kind:LOt.Text
      }));
      l&&r.set(o.uri,l)
    }
    return r
  }
}, vxa=class extends at{
  constructor(e){
    super(), this._register(e.documentHighlightProvider.register("*", new Myu)), this._register(e.multiDocumentHighlightProvider.register("*", new Myu))
  }
}, vxa=__decorate([__param(0, $u)], vxa)
}
});
function T5f(n, e, t, i){
  const r=n.ordered(e);
  return f2o(r.map(s=>()=>Promise.resolve(s.provideDocumentHighlights(e, t, i)).then(void 0, JE)), s=>s!=null).then(s=>{
    if(s){
      const o=new fu;
      return o.set(e.uri,s),o
    }
    return new fu
  })
}
function Qly(n, e, t, i, r){
  const s=n.ordered(e);
  return f2o(s.map(o=>()=>{
    const a=r.filter(l=>sRe(l)).filter(l=>ASi(o.selector, l.uri, l.getLanguageId(), !0, void 0, void 0)>0);
    return Promise.resolve(o.provideMultiDocumentHighlights(e, t, a, i)).then(void 0, JE)
  }), o=>o!=null)
}
function jly(n, e, t, i){
  return new I5f(e, t, i, n)
}
function zly(n, e, t, i, r){
  return new D5f(e, t, i, n, r)
}
var mP, Fyu, Axa, Oyu, I5f, D5f, yxa, HV, Uyu, B5f, R5f, P5f, $yu=