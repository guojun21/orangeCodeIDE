// Module: out-build/vs/base/browser/markdownRenderer.js
// Offset: 2088531 (bundle byte offset)
// Size: 1450 bytes

_s(), yn(), tg(), kW(), _3t(), L0(), rt(), vRe(), UB(), zr(), np(), Yr(), oa(), Yn(), ri(), i4t(), z$(), iKe(), Tb(), h0(), bS(), e5o=Object.freeze({
  image:({
    href:n, title:e, text:t
  })=>{
    let i=[], r=[];
    return n&&({
      href:n,dimensions:i
    }
    =w_h(n), r.push(`src="${J3o(n)}"`)), t&&r.push(`alt="${J3o(t)}"`), e&&r.push(`title="${J3o(e)}"`), i.length&&(r=r.concat(i)), "<img "+r.join(" ")+">"
  }, paragraph({
    tokens:n
  }){
    return`<p>${this.parser.parseInline(n)}</p>`
  }, link({
    href:n, title:e, tokens:t
  }){
    let i=this.parser.parseInline(t);
    return typeof n!="string"?"":(n===i&&(i=eDc(i)), e=typeof e=="string"?J3o(eDc(e)):"", n=eDc(n), n=n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g,"&quot;
    ").replace(/'/g,"&#39;
    "),`<a href="${
      n
    }
    " title="${
      e||n
    }
    " draggable="false">${i}</a>`)}}),g0h=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],vDc=["align","autoplay","alt","checked","class","colspan","controls","data-code","data-href","disabled","draggable","height","href","loop","muted","playsinline","poster","rowspan","src","style","target","title","type","width","start"],f0h=new Map([["&quot;
    ",'"'],["&nbsp;"," "],["&amp;","&"],["&#39;","'"],["&lt;
    ","<"],["&gt;
    ",">"]]),b0h=new Ob(h0h),v0h=new Ob(()=>{const n=h0h();return n.code=({text:e})=>`
\`\`\`
${LA(e)}
\`\`\`
`,n}),A0h=3}});function y0h(n){ADc=n}function q4(){return ADc}var ADc,O6=