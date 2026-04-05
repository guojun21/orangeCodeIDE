// Module: out-build/vs/workbench/contrib/composer/browser/components/ElementTreeSidebar.js
// Offset: 32190551 (bundle byte offset)
// Size: 4791 bytes

Ie(), Ie(), Ie(), Ti(), Lcy(), Ncy(), c4f=qe("<div class=element-tree-sidebar>")
}
});
function l4f(n, e){
  const t=e.trim();
  if(!t||t.length===0)return[{
    text:n, isMatch:!1
  }
  ];
  const i=n.toLowerCase(), r=t.toLowerCase(), s=[];
  let o=0, a=i.indexOf(r);
  for(;
  a!==-1;
  )a>o&&s.push({
    text:n.slice(o, a), isMatch:!1
  }), s.push({
    text:n.slice(a, a+t.length), isMatch:!0
  }), o=a+t.length, a=i.indexOf(r, o);
  return o<n.length&&s.push({
    text:n.slice(o), isMatch:!1
  }), s.length>0?s:[{
    text:n, isMatch:!1
  }
  ]
}
function Ocy(n){
  let e;
  const t=()=>{
    const o=n.selectedIndex();
    return o>=0?o:n.hoveredIndex()
  };
  An(()=>{
    const o=n.selectedIndex();
    if(o>=0&&e){
      const a=e.querySelector(`[data-index="${o}"]`);
      a&&a.scrollIntoView({
        block:"nearest"
      })
    }
  });
  const i=(o, a)=>{
    a.preventDefault(), a.stopPropagation(), n.onSelect(o)
  }, r=(o, a)=>{
    a.preventDefault(), a.stopPropagation(), n.onDeleteHistoryEntry(o)
  }, s=o=>o.type==="search"?(()=>{
    var a=mCi();
    return tn(()=>Un(a, `omnibox-item-icon-codicon ${Qt.asClassName(Be.search)}`)), a
  })():o.favicon?(()=>{
    var a=d4f();
    return a.addEventListener("error", l=>{
      const u=l.currentTarget;
      u.style.display="none";
      const d=u.nextElementSibling;
      d&&(d.style.display="flex")
    }), tn(()=>Zr(a, "src", o.favicon)), a
  })():(()=>{
    var a=mCi();
    return tn(()=>Un(a, `omnibox-item-icon-codicon ${Qt.asClassName(Be.globe)}`)), a
  })();
  return K(Xe, {
    get when(){
      return Ui(()=>!!n.isVisible())()&&n.suggestions().length>0
    }, get children(){
      var o=h4f();
      o.addEventListener("mousedown",l=>l.preventDefault());
      var a=e;
      return typeof a=="function"?Bs(a,o):e=o,ge(o,K(ia,{
        get each(){
          return n.suggestions()
        },children:(l,u)=>(()=>{
          var d=f4f(),m=d.firstChild,p=m.nextSibling,g=p.firstChild,f=p.nextSibling;
          return d.addEventListener("mouseenter",()=>n.onHover(u())),d.addEventListener("click",A=>i(l,A)),ge(m,()=>s(l),null),ge(m,K(Xe,{
            get when(){
              return l.type!=="search"&&l.favicon
            },get children(){
              var A=mCi();
              return A.style.setProperty("display","none"),tn(()=>Un(A,`omnibox-item-icon-codicon omnibox-item-icon-fallback ${Qt.asClassName(Be.globe)}`)),A
            }
          }),null),ge(g,K(Xe,{
            get when(){
              return l.type==="search"
            },get children(){
              return m4f()
            }
          }),null),ge(g,K(ia,{
            get each(){
              return l4f(l.title||l.url,n.query())
            },children:A=>(()=>{
              var w=mAu();
              return ge(w,()=>A.text),tn(()=>Un(w,A.isMatch?"omnibox-match-highlight":"")),w
            })()
          }),null),ge(p,K(Xe,{
            get when(){
              return l.type!=="search"&&l.title&&l.title!==l.url
            },get children(){
              var A=p4f();
              return ge(A,K(ia,{
                get each(){
                  return l4f(l.url,n.query())
                },children:w=>(()=>{
                  var C=mAu();
                  return ge(C,()=>w.text),tn(()=>Un(C,w.isMatch?"omnibox-match-highlight":"")),C
                })()
              })),A
            }
          }),null),ge(f,K(Xe,{
            get when(){
              return l.isBookmarked
            },get children(){
              var A=mCi();
              return tn(()=>Un(A,`omnibox-bookmark-indicator ${Qt.asClassName(Be.starFull)}`)),A
            }
          }),null),ge(f,K(Xe,{
            get when(){
              return l.type==="history"&&!l.isBookmarked
            },get children(){
              var A=g4f(),w=A.firstChild;
              return A.addEventListener("click",C=>r(l.url,C)),tn(()=>Un(w,Qt.asClassName(Be.close))),A
            }
          }),null),tn(A=>{
            var w=`omnibox-suggestion-item ${t()===u()?"selected":""}`,C=u();
            return w!==A.e&&Un(d,A.e=w),C!==A.t&&Zr(d,"data-index",A.t=C),A
          },{
            e:void 0,t:void 0
          }),d
        })()
      })),o
    }
  })
}
function L1a(n, e){
  const t=n.toLowerCase(), i=e.toLowerCase();
  if(!t.includes(i))return 0;
  const r=t.indexOf(i);
  if(r===0)return 100;
  const s=t[r-1];
  return s===" "||s==="/"||s==="."||s==="-"||s==="_"?80:50
}
function hAu(n){
  if(n.startsWith("http://")||n.startsWith("https://")||n.startsWith("localhost")||n.startsWith("127.0.0.1"))return!0;
  const e=!n.includes(" "), t=n.includes("."), i=!n.includes("@");
  return e&&t&&i
}
function u4f(n, e, t){
  const i=[], r=new Set, s=n.toLowerCase(), o=new Set(t.map(u=>u.url)), a=t.filter(u=>{
    const d=u.url.toLowerCase().includes(s), m=(u.title||"").toLowerCase().includes(s), p=(u.customName||"").toLowerCase().includes(s);
    return d||m||p
  }).map(u=>{
    const d=u.customName||u.title||u.url, m=L1a(d, n), p=L1a(u.url, n);
    return{
      bookmark:u,score:Math.max(m,p)
    }
  }).sort((u, d)=>d.score-u.score);
  for(const{
    bookmark:u
  }
  of a)r.has(u.url)||(r.add(u.url), i.push({
    type:"bookmark", url:u.url, title:u.customName||u.title||u.url, favicon:u.favicon, isBookmarked:!0
  }));
  const l=e.filter(u=>{
    const d=u.url.toLowerCase().includes(s), m=(u.title||"").toLowerCase().includes(s);
    return d||m
  }).map(u=>{
    const d=u.title||u.url, m=L1a(d, n), p=L1a(u.url, n), g=Math.max(m, p), f=u.visitCount*(1/(Date.now()-u.lastVisited+1));
    return{
      entry:u,score:g+f*10
    }
  }).sort((u, d)=>d.score-u.score);
  for(const{
    entry:u
  }
  of l)r.has(u.url)||(r.add(u.url), i.push({
    type:"history", url:u.url, title:u.title||u.url, favicon:u.favicon, isBookmarked:o.has(u.url)
  }));
  if(!hAu(n)){
    const u=`https://www.google.com/search?q=${encodeURIComponent(n)}`;
    !r.has(u)&&!r.has(n)&&(r.add(n), i.push({
      type:"search",url:u,title:n
    }))
  }
  return i.slice(0, 10)
}
var mCi, d4f, h4f, m4f, p4f, g4f, f4f, mAu, b4f=