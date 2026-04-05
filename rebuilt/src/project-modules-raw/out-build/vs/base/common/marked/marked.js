// Module: out-build/vs/base/common/marked/marked.js
// Offset: 2042298 (bundle byte offset)
// Size: 35600 bytes

S9e=tDc(), nDc=/[&<>"']/,x_h=new RegExp(nDc.source,"g"),iDc=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,T_h=new RegExp(iDc.source,"g"),I_h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;
","'":"&#39;"},rDc=n=>I_h[n],D_h=/(^|[^\[])\^/g,C3t={exec:()=>null},m3n=class{options;rules;lexer;constructor(n){this.options=n||S9e}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:h3n(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],i=quA(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(/#$/.test(t)){const i=h3n(t,"#");(this.options.pedantic||!i||/ $/.test(i))&&(t=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:h3n(e[0],`
`)}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){let t=h3n(e[0],`
`).split(`
`),i="",r="";const s=[];for(;t.length>0;){let o=!1;const a=[];let l;for(l=0;l<t.length;l++)if(/^ {0,3}>/.test(t[l]))a.push(t[l]),o=!0;else if(!o)a.push(t[l]);else break;t=t.slice(l);const u=a.join(`
`),d=u.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`).replace(/^ {0,3}>[ \t]?/gm,"");i=i?`${i}
${u}`:u,r=r?`${r}
${d}`:d;const m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,s,!0),this.lexer.state.top=m,t.length===0)break;const p=s[s.length-1];if(p?.type==="code")break;if(p?.type==="blockquote"){const g=p,f=g.raw+`
`+t.join(`
`),A=this.blockquote(f);s[s.length-1]=A,i=i.substring(0,i.length-g.raw.length)+A.raw,r=r.substring(0,r.length-g.text.length)+A.text;break}else if(p?.type==="list"){const g=p,f=g.raw+`
`+t.join(`
`),A=this.list(f);s[s.length-1]=A,i=i.substring(0,i.length-p.raw.length)+A.raw,r=r.substring(0,r.length-g.raw.length)+A.raw,t=f.substring(s[s.length-1].raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:s,text:r}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const i=t.length>1,r={type:"list",raw:"",ordered:i,start:i?+t.slice(0,-1):"",loose:!1,items:[]};t=i?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=i?t:"[*+-]");const s=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o=!1;for(;n;){let a=!1,l="",u="";if(!(e=s.exec(n))||this.rules.block.hr.test(n))break;l=e[0],n=n.substring(l.length);let d=e[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),m=n.split(`
`,1)[0],p=!d.trim(),g=0;if(this.options.pedantic?(g=2,u=d.trimStart()):p?g=e[1].length+1:(g=e[2].search(/[^ ]/),g=g>4?1:g,u=d.slice(g),g+=e[1].length),p&&/^ *$/.test(m)&&(l+=m+`
`,n=n.substring(m.length+1),a=!0),!a){const w=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),C=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),x=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),I=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;n;){const B=n.split(`
`,1)[0];if(m=B,this.options.pedantic&&(m=m.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),x.test(m)||I.test(m)||w.test(m)||C.test(n))break;if(m.search(/[^ ]/)>=g||!m.trim())u+=`
`+m.slice(g);else{if(p||d.search(/[^ ]/)>=4||x.test(d)||I.test(d)||C.test(d))break;u+=`
`+m}!p&&!m.trim()&&(p=!0),l+=B+`
`,n=n.substring(B.length+1),d=m.slice(g)}}r.loose||(o?r.loose=!0:/\n *\n *$/.test(l)&&(o=!0));let f=null,A;this.options.gfm&&(f=/^\[[ xX]\] /.exec(u),f&&(A=f[0]!=="[ ] ",u=u.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:l,task:!!f,checked:A,loose:!1,text:u,tokens:[]}),r.raw+=l}r.items[r.items.length-1].raw=r.items[r.items.length-1].raw.trimEnd(),r.items[r.items.length-1].text=r.items[r.items.length-1].text.trimEnd(),r.raw=r.raw.trimEnd();for(let a=0;a<r.items.length;a++)if(this.lexer.state.top=!1,r.items[a].tokens=this.lexer.blockTokens(r.items[a].text,[]),!r.loose){const l=r.items[a].tokens.filter(d=>d.type==="space"),u=l.length>0&&l.some(d=>/\n.*\n/.test(d.raw));r.loose=u}if(r.loose)for(let a=0;a<r.items.length;a++)r.items[a].loose=!0;return r}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),i=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:i,title:r}}}table(n){const e=this.rules.block.table.exec(n);if(!e||!/[:|]/.test(e[2]))return;const t=k_h(e[1]),i=e[2].replace(/^\||\| *$/g,"").split("|"),r=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===i.length){for(const o of i)/^ *-+: *$/.test(o)?s.align.push("right"):/^ *:-+: *$/.test(o)?s.align.push("center"):/^ *:-+ *$/.test(o)?s.align.push("left"):s.align.push(null);for(let o=0;o<t.length;o++)s.header.push({text:t[o],tokens:this.lexer.inline(t[o]),header:!0,align:s.align[o]});for(const o of r)s.rows.push(k_h(o,s.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:s.align[l]})));return s}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:Hde(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const s=h3n(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{const s=$uA(e[2],"()");if(s>-1){const a=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
s&&(i=s[1], r=s[3])
}
else r=e[3]?e[3].slice(1, -1):"";
return i=i.trim(), /^</.test(i)&&(this.options.pedantic&&!/>$/.test(t)?i=i.slice(1):i=i.slice(1, -1)), E_h(e, {
  href:i&&i.replace(this.rules.inline.anyPunctuation, "$1"), title:r&&r.replace(this.rules.inline.anyPunctuation, "$1")
}, e[0], this.lexer)
}
}
reflink(n, e){
  let t;
  if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){
    const i=(t[2]||t[1]).replace(/\s+/g, " "), r=e[i.toLowerCase()];
    if(!r){
      const s=t[0].charAt(0);
      return{
        type:"text",raw:s,text:s
      }
    }
    return E_h(t, r, t[0], this.lexer)
  }
}
emStrong(n, e, t=""){
  let i=this.rules.inline.emStrongLDelim.exec(n);
  if(!i||i[3]&&t.match(/[\p{
    L
  }
  \p{
    N
  }
  ]/u))return;
  if(!(i[1]||i[2]||"")||!t||this.rules.inline.punctuation.exec(t)){
    const s=[...i[0]].length-1;
    let o, a, l=s, u=0;
    const d=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;
    for(d.lastIndex=0, e=e.slice(-1*n.length+s);
    (i=d.exec(e))!=null;
    ){
      if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;
      if(a=[...o].length,i[3]||i[4]){
        l+=a;
        continue
      }
      else if((i[5]||i[6])&&s%3&&!((s+a)%3)){
        u+=a;
        continue
      }
      if(l-=a,l>0)continue;
      a=Math.min(a,a+l+u);
      const m=[...i[0]][0].length,p=n.slice(0,s+i.index+m+a);
      if(Math.min(s,a)%2){
        const f=p.slice(1,-1);
        return{
          type:"em",raw:p,text:f,tokens:this.lexer.inlineTokens(f)
        }
      }
      const g=p.slice(2,-2);
      return{
        type:"strong",raw:p,text:g,tokens:this.lexer.inlineTokens(g)
      }
    }
  }
}
codespan(n){
  const e=this.rules.inline.code.exec(n);
  if(e){
    let t=e[2].replace(/\n/g, " ");
    const i=/[^ ]/.test(t), r=/^ /.test(t)&&/ $/.test(t);
    return i&&r&&(t=t.substring(1, t.length-1)), t=Hde(t, !0), {
      type:"codespan",raw:e[0],text:t
    }
  }
}
br(n){
  const e=this.rules.inline.br.exec(n);
  if(e)return{
    type:"br", raw:e[0]
  }
}
del(n){
  const e=this.rules.inline.del.exec(n);
  if(e)return{
    type:"del", raw:e[0], text:e[2], tokens:this.lexer.inlineTokens(e[2])
  }
}
autolink(n){
  const e=this.rules.inline.autolink.exec(n);
  if(e){
    let t, i;
    return e[2]==="@"?(t=Hde(e[1]), i="mailto:"+t):(t=Hde(e[1]), i=t), {
      type:"link",raw:e[0],text:t,href:i,tokens:[{
        type:"text",raw:t,text:t
      }
      ]
    }
  }
}
url(n){
  let e;
  if(e=this.rules.inline.url.exec(n)){
    let t, i;
    if(e[2]==="@")t=Hde(e[0]), i="mailto:"+t;
    else{
      let r;
      do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";
      while(r!==e[0]);
      t=Hde(e[0]),e[1]==="www."?i="http://"+e[0]:i=e[0]
    }
    return{
      type:"link",raw:e[0],text:t,href:i,tokens:[{
        type:"text",raw:t,text:t
      }
      ]
    }
  }
}
inlineText(n){
  const e=this.rules.inline.text.exec(n);
  if(e){
    let t;
    return this.lexer.state.inRawBlock?t=e[0]:t=Hde(e[0]), {
      type:"text",raw:e[0],text:t
    }
  }
}
}, B_h=/^(?: *(?:\n|$))+/, R_h=/^( {
  4
}
[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, P_h=/^ {
  0, 3
}
(`{3,}(?=[^`\n]*(?:\n|$))|~{
  3, 
})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {
  0, 3
}
\1[~`]* *(?=\n|$)|$)/,S3t=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,L_h=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,sDc=/(?:[*+-]|\d{1,9}[.)])/,oDc=rN(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,sDc).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{
  3, 
}
|~{
  3, 
})/).replace(/blockquote/g, / {
  0, 3
}
>/).replace(/heading/g, / {
  0, 3
}
#{
  1, 6
}
/).replace(/html/g, / {
  0, 3
}
<[^\n>]+>\n/).getRegex(), W3o=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, N_h=/^[^\n]+/, Q3o=/(?!\s*\])(?:\\.|[^\[\]\\])+/, M_h=rN(/^ {
  0, 3
}
\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Q3o).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), F_h=rN(/^( {
  0, 3
}
bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, sDc).getRegex(), p3n="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", j3o=/<!--(?:-?>|[\s\S]*?(?:-->|$))/, O_h=rN("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", j3o).replace("tag", p3n).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),aDc=rN(W3o).replace("hr",S3t).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p3n).getRegex(),U_h=rN(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",aDc).getRegex(),z3o={blockquote:U_h,code:R_h,def:M_h,fences:P_h,heading:L_h,hr:S3t,html:O_h,lheading:oDc,list:F_h,newline:B_h,paragraph:aDc,table:C3t,text:N_h},cDc=rN("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",S3t).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p3n).getRegex(),$_h={...z3o,table:cDc,paragraph:rN(W3o).replace("hr",S3t).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",cDc).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p3n).getRegex()},q_h={...z3o,html:rN(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",j3o).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:C3t,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:rN(W3o).replace("hr",S3t).replace("heading",` *#{1,6} *[^
]`).replace("lheading",oDc).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},lDc=/^\\([!"#$%&'()*+, \-./:;
<=>?@\[\]\\^_`{|}~])/,H_h=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, uDc=/^( {
  2, 
}
|\\)\n(?!\s*$)/, J_h=/^(`+|[^`])(?:(?= {
  2, 
}
\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,k3t="\\p{P}\\p{S}",G_h=rN(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,k3t).getRegex(),W_h=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, Q_h=rN(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, k3t).getRegex(), j_h=rN("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, k3t).getRegex(), z_h=rN("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, k3t).getRegex(), V_h=rN(/\\([punct])/, "gu").replace(/punct/g, k3t).getRegex(), K_h=rN(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{
  1, 31
}
/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Y_h=rN(j3o).replace("(?:-->|$)","-->").getRegex(),Z_h=rN("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Y_h).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),g3n=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,X_h=rN(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",g3n).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),dDc=rN(/^!?\[(label)\]\[(ref)\]/).replace("label",g3n).replace("ref",Q3o).getRegex(),hDc=rN(/^!?\[(ref)\](?:\[\])?/).replace("ref",Q3o).getRegex(),e0h=rN("reflink|nolink(?!\\()","g").replace("reflink",dDc).replace("nolink",hDc).getRegex(),V3o={_backpedal:C3t,anyPunctuation:V_h,autolink:K_h,blockSkip:W_h,br:uDc,code:H_h,del:C3t,emStrongLDelim:Q_h,emStrongRDelimAst:j_h,emStrongRDelimUnd:z_h,escape:lDc,link:X_h,nolink:hDc,punctuation:G_h,reflink:dDc,reflinkSearch:e0h,tag:Z_h,text:J_h,url:C3t},t0h={...V3o,link:rN(/^!?\[(label)\]\((.*?)\)/).replace("label",g3n).getRegex(),reflink:rN(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",g3n).getRegex()},K3o={...V3o,escape:rN(lDc).replace("])","~|])").getRegex(),url:rN(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;
$)|[?!., :;
*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {
  2, 
}
\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},n0h={...K3o,br:rN(uDc).replace("{2,}","*").getRegex(),text:rN(K3o.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},f3n={normal:z3o,gfm:$_h,pedantic:q_h},E3t={normal:V3o,gfm:K3o,breaks:n0h,pedantic:t0h},XVe=class Mad{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||S9e,this.options.tokenizer=this.options.tokenizer||new m3n,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:f3n.normal,inline:E3t.normal};this.options.pedantic?(t.block=f3n.pedantic,t.inline=E3t.pedantic):this.options.gfm&&(t.block=f3n.gfm,this.options.breaks?t.inline=E3t.breaks:t.inline=E3t.gfm),this.tokenizer.rules=t}static get rules(){return{block:f3n,inline:E3t}}static lex(e,t){return new Mad(t).lex(e)}static lexInline(e,t){return new Mad(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const i=this.inlineQueue[t];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],i=!1){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,u)=>l+"    ".repeat(u.length));let r,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(r=a.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let u;this.options.extensions.startBlock.forEach(d=>{u=d.call({lexer:this},l),typeof u=="number"&&u>=0&&(a=Math.min(a,u))}),a<1/0&&a>=0&&(o=e.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){s=t[t.length-1],i&&s?.type==="paragraph"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r),i=o.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let i,r,s,o=e,a,l,u;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)d.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(u=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(i=d.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),r=t[t.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(i=this.tokenizer.emStrong(e,o,u)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.autolink(e)){e=e.substring(i.raw.length),t.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e))){e=e.substring(i.raw.length),t.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const m=e.slice(1);let p;this.options.extensions.startInline.forEach(g=>{p=g.call({lexer:this},m),typeof p=="number"&&p>=0&&(d=Math.min(d,p))}),d<1/0&&d>=0&&(s=e.substring(0,d+1))}if(i=this.tokenizer.inlineText(s)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(u=i.raw.slice(-1)),l=!0,r=t[t.length-1],r&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}},abt=class{options;parser;constructor(n){this.options=n||S9e}space(n){return""}code({text:n,lang:e,escaped:t}){const i=(e||"").match(/^\S*/)?.[0],r=n.replace(/\n$/,"")+`
`;return i?'<pre><code class="language-'+Hde(i)+'">'+(t?r:Hde(r,!0))+`</code></pre>
`:"<pre><code>"+(t?r:Hde(r,!0))+`</code></pre>
`}blockquote({tokens:n}){return`<blockquote>
${
  this.parser.parse(n)
}
</blockquote>
`}html({text:n}){return n}heading({tokens:n,depth:e}){return`<h${
  e
}
>${
  this.parser.parseInline(n)
}
</h${
  e
}
>
`}hr(n){return`<hr>
`}list(n){const e=n.ordered,t=n.start;let i="";for(let o=0;o<n.items.length;o++){const a=n.items[o];i+=this.listitem(a)}const r=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+r+s+`>
`+i+"</"+r+`>
`}listitem(n){let e="";if(n.task){const t=this.checkbox({checked:!!n.checked});n.loose?n.tokens.length>0&&n.tokens[0].type==="paragraph"?(n.tokens[0].text=t+" "+n.tokens[0].text,n.tokens[0].tokens&&n.tokens[0].tokens.length>0&&n.tokens[0].tokens[0].type==="text"&&(n.tokens[0].tokens[0].text=t+" "+n.tokens[0].tokens[0].text)):n.tokens.unshift({type:"text",raw:t+" ",text:t+" "}):e+=t+" "}return e+=this.parser.parse(n.tokens,!!n.loose),`<li>${
  e
}
</li>
`}checkbox({checked:n}){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:n}){return`<p>${
  this.parser.parseInline(n)
}
</p>
`}table(n){let e="",t="";for(let r=0;r<n.header.length;r++)t+=this.tablecell(n.header[r]);e+=this.tablerow({text:t});let i="";for(let r=0;r<n.rows.length;r++){const s=n.rows[r];t="";for(let o=0;o<s.length;o++)t+=this.tablecell(s[o]);i+=this.tablerow({text:t})}return i&&(i=`<tbody>${
  i
}
</tbody>`),`<table>
<thead>
`+e+`</thead>
`+i+`</table>
`}tablerow({text:n}){return`<tr>
${
  n
}
</tr>
`}tablecell(n){const e=this.parser.parseInline(n.tokens),t=n.header?"th":"td";return(n.align?`<${
  t
}
 align="${n.align}">`:`<${
  t
}
>`)+e+`</${
  t
}
>
`}strong({tokens:n}){return`<strong>${
  this.parser.parseInline(n)
}
</strong>`}em({tokens:n}){return`<em>${
  this.parser.parseInline(n)
}
</em>`}codespan({text:n}){return`<code>${
  n
}
</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${
  this.parser.parseInline(n)
}
</del>`}link({href:n,title:e,tokens:t}){const i=this.parser.parseInline(t),r=S_h(n);if(r===null)return i;n=r;let s='<a href="'+n+'"';return e&&(s+=' title="'+e+'"'),s+=">"+i+"</a>",s}image({href:n,title:e,text:t}){const i=S_h(n);if(i===null)return t;n=i;let r=`<img src="${n}" alt="${t}"`;return e&&(r+=` title="${e}"`),r+=">",r}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):n.text}},Y3o=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}},eKe=class Fad{options;renderer;textRenderer;constructor(e){this.options=e||S9e,this.options.renderer=this.options.renderer||new abt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Y3o}static parse(e,t){return new Fad(t).parse(e)}static parseInline(e,t){return new Fad(t).parseInline(e)}parse(e,t=!0){let i="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const a=s,l=this.options.extensions.renderers[a.type].call({parser:this},a);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){i+=l||"";continue}}const o=s;switch(o.type){case"space":{i+=this.renderer.space(o);continue}case"hr":{i+=this.renderer.hr(o);continue}case"heading":{i+=this.renderer.heading(o);continue}case"code":{i+=this.renderer.code(o);continue}case"table":{i+=this.renderer.table(o);continue}case"blockquote":{i+=this.renderer.blockquote(o);continue}case"list":{i+=this.renderer.list(o);continue}case"html":{i+=this.renderer.html(o);continue}case"paragraph":{i+=this.renderer.paragraph(o);continue}case"text":{let a=o,l=this.renderer.text(a);for(;r+1<e.length&&e[r+1].type==="text";)a=e[++r],l+=`
`+this.renderer.text(a);t?i+=this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l}]}):i+=l;continue}default:{const a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return i}parseInline(e,t){t=t||this.renderer;let i="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=a||"";continue}}const o=s;switch(o.type){case"escape":{i+=t.text(o);break}case"html":{i+=t.html(o);break}case"link":{i+=t.link(o);break}case"image":{i+=t.image(o);break}case"strong":{i+=t.strong(o);break}case"em":{i+=t.em(o);break}case"codespan":{i+=t.codespan(o);break}case"br":{i+=t.br(o);break}case"del":{i+=t.del(o);break}case"text":{i+=t.text(o);break}default:{const a='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return i}},b3n=class{options;constructor(n){this.options=n||S9e}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}},Z3o=class{defaults=tDc();options=this.setOptions;parse=this.parseMarkdown(XVe.lex,eKe.parse);parseInline=this.parseMarkdown(XVe.lexInline,eKe.parseInline);Parser=eKe;Renderer=abt;TextRenderer=Y3o;Lexer=XVe;Tokenizer=m3n;Hooks=b3n;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(const i of n)switch(t=t.concat(e.call(this,i)),i.type){case"table":{const r=i;for(const s of r.header)t=t.concat(this.walkTokens(s.tokens,e));for(const s of r.rows)for(const o of s)t=t.concat(this.walkTokens(o.tokens,e));break}case"list":{const r=i;t=t.concat(this.walkTokens(r.items,e));break}default:{const r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{const o=r[s].flat(1/0);t=t.concat(this.walkTokens(o,e))}):r.tokens&&(t=t.concat(this.walkTokens(r.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const s=e.renderers[r.name];s?e.renderers[r.name]=function(...o){let a=r.renderer.apply(this,o);return a===!1&&(a=s.apply(this,o)),a}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=e[r.level];s?s.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),t.renderer){const r=this.defaults.renderer||new abt(this.defaults);for(const s in t.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const o=s,a=t.renderer[o],l=r[o];r[o]=(...u)=>{let d=a.apply(r,u);return d===!1&&(d=l.apply(r,u)),d||""}}i.renderer=r}if(t.tokenizer){const r=this.defaults.tokenizer||new m3n(this.defaults);for(const s in t.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const o=s,a=t.tokenizer[o],l=r[o];r[o]=(...u)=>{let d=a.apply(r,u);return d===!1&&(d=l.apply(r,u)),d}}i.tokenizer=r}if(t.hooks){const r=this.defaults.hooks||new b3n;for(const s in t.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(s==="options")continue;const o=s,a=t.hooks[o],l=r[o];b3n.passThroughHooks.has(s)?r[o]=u=>{if(this.defaults.async)return Promise.resolve(a.call(r,u)).then(m=>l.call(r,m));const d=a.call(r,u);return l.call(r,d)}:r[o]=(...u)=>{let d=a.apply(r,u);return d===!1&&(d=l.apply(r,u)),d}}i.hooks=r}if(t.walkTokens){const r=this.defaults.walkTokens,s=t.walkTokens;i.walkTokens=function(o){let a=[];return a.push(s.call(this,o)),r&&(a=a.concat(r.call(this,o))),a}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return XVe.lex(n,e??this.defaults)}parser(n,e){return eKe.parse(n,e??this.defaults)}parseMarkdown(n,e){return(i,r)=>{const s={...r},o={...this.defaults,...s},a=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(i):i).then(l=>n(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>e(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(a);try{o.hooks&&(i=o.hooks.preprocess(i));let l=n(i,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let u=e(l,o);return o.hooks&&(u=o.hooks.postprocess(u)),u}catch(l){return a(l)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const i="<p>An error occurred:</p><pre>"+Hde(t.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(t);throw t}}},tKe=new Z3o,cE.options=cE.setOptions=function(n){return tKe.setOptions(n),cE.defaults=tKe.defaults,C_h(cE.defaults),cE},cE.getDefaults=tDc,cE.defaults=S9e,cE.use=function(...n){return tKe.use(...n),cE.defaults=tKe.defaults,C_h(cE.defaults),cE},cE.walkTokens=function(n,e){return tKe.walkTokens(n,e)},cE.parseInline=tKe.parseInline,cE.Parser=eKe,cE.parser=eKe.parse,cE.Renderer=abt,cE.TextRenderer=Y3o,cE.Lexer=XVe,cE.lexer=XVe.lex,cE.Tokenizer=m3n,cE.Hooks=b3n,cE.parse=cE,HuA=cE.options,JuA=cE.setOptions,GuA=cE.use,i0h=cE.walkTokens,WuA=cE.parseInline,mDc=cE,r0h=eKe.parse,cbt=XVe.lex}});function QuA(n,e={}){const t=pDc(e);return t.textContent=n,t}function nKe(n,e={}){const t=pDc(e);return s0h(t,juA(n,!!e.renderCodeSegments),e.actionHandler,e.renderCodeSegments),t}function pDc(n){const e=n.inline?"span":"div",t=document.createElement(e);return n.className&&(t.className=n.className),t}function s0h(n,e,t,i){let r;if(e.type===2)r=document.createTextNode(e.content||"");else if(e.type===3)r=document.createElement("b");else if(e.type===4)r=document.createElement("i");else if(e.type===7&&i)r=document.createElement("code");else if(e.type===5&&t){const s=document.createElement("a");t.disposables.add(_f(s,"click",o=>{t.callback(String(e.index),o)})),r=s}else e.type===8?r=document.createElement("br"):e.type===1&&(r=n);r&&n!==r&&n.appendChild(r),r&&Array.isArray(e.children)&&e.children.forEach(s=>{s0h(r,s,t,i)})}function juA(n,e){const t={type:1,children:[]};let i=0,r=t;const s=[],o=new o0h(n);for(;!o.eos();){let a=o.next();const l=a==="\\"&&gDc(o.peek(),e)!==0;if(l&&(a=o.next()),!l&&zuA(a,e)&&a===o.peek()){o.advance(),r.type===2&&(r=s.pop());const u=gDc(a,e);if(r.type===u||r.type===5&&u===6)r=s.pop();else{const d={type:u,children:[]};u===5&&(d.index=i,i++),r.children.push(d),s.push(r),r=d}}else if(a===`
`)r.type===2&&(r=s.pop()),r.children.push({type:8});else if(r.type!==2){const u={type:2,content:a};r.children.push(u),s.push(r),r=u}else r.content+=a}return r.type===2&&(r=s.pop()),s.length,t}function zuA(n,e){return gDc(n,e)!==0}function gDc(n,e){switch(n){case"*":return 3;case"_":return 4;case"[":return 5;case"]":return 6;case"`":return e?7:0;default:return 0}}var o0h,a0h,iKe=