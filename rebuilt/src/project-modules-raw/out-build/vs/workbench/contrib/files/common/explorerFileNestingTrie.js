// Module: out-build/vs/workbench/contrib/files/common/explorerFileNestingTrie.js
// Offset: 31204756 (bundle byte offset)
// Size: 3066 bytes

FDf=class{
  constructor(n){
    this.root=new qfu;
    for(const[e, t]of n)for(const i of t)this.root.add(e, i)
  }
  toString(){
    return this.root.toString()
  }
  getAttributes(n, e){
    const t=n.lastIndexOf(".");
    return t<1?{
      dirname:e,basename:n,extname:""
    }
    :{
      dirname:e,basename:n.substring(0,t),extname:n.substring(t+1)
    }
  }
  nest(n, e){
    const t=new qfu;
    for(const s of n){
      const o=this.getAttributes(s,e),a=this.root.get(s,o);
      for(const l of a)t.add(l,s)
    }
    const i=(s, o=new Set)=>{
      if(o.has(s))return[];
      o.add(s);
      const a=this.getAttributes(s,e),l=t.get(s,a);
      return l.length===0?[s]:l.length===1&&l[0]===s?[s]:l.flatMap(u=>i(u,o))
    }, r=new Map;
    for(const s of n){
      let o=i(s);
      o.length===0&&(o=[s]);
      for(const a of o){
        let l=r.get(a);
        l||r.set(a,l=new Set),s!==a&&l.add(s)
      }
    }
    return r
  }
}, qfu=class gjb{
  constructor(){
    this.value=new ODf, this.map=new Map
  }
  add(e, t){
    if(e==="")this.value.add(e, t);
    else if(e[0]==="*")this.value.add(e, t);
    else{
      const i=e[0],r=e.slice(1);
      let s=this.map.get(i);
      s||this.map.set(i,s=new gjb),s.add(r,t)
    }
  }
  get(e, t){
    const i=[];
    i.push(...this.value.get(e, t));
    const r=e[0], s=e.slice(1), o=this.map.get(r);
    return o&&i.push(...o.get(s, t)), i
  }
  toString(e=""){
    const t=[];
    return this.value.hasItems&&t.push(`* => 
`+this.value.toString(e+"  ")), [...this.map.entries()].map(([i, r])=>t.push("^"+i+` => 
`+r.toString(e+"  "))), t.map(i=>e+i).join(`
`)
  }
}, ODf=class fjb{
  constructor(){
    this.star=[], this.epsilon=[], this.map=new Map, this.hasItems=!1
  }
  add(e, t){
    if(this.hasItems=!0, e==="*")this.star.push(new Jfu(t));
    else if(e==="")this.epsilon.push(new Jfu(t));
    else{
      const i=e[e.length-1],r=e.slice(0,e.length-1);
      if(i==="*")throw Error("Unexpected star in SufTrie key: "+e);
      {
        let s=this.map.get(i);
        s||this.map.set(i,s=new fjb),s.add(r,t)
      }
    }
  }
  get(e, t){
    const i=[];
    e===""&&i.push(...this.epsilon.map(a=>a.substitute(t))), this.star.length&&i.push(...this.star.map(a=>a.substitute(t, e)));
    const r=e[e.length-1], s=e.slice(0, e.length-1), o=this.map.get(r);
    return o&&i.push(...o.get(s, t)), i
  }
  toString(e=""){
    const t=[];
    return this.star.length&&t.push("* => "+this.star.join("; ")), this.epsilon.length&&t.push("\u03B5 => "+this.epsilon.join("; ")), [...this.map.entries()].map(([i, r])=>t.push(i+`$ => 
`+r.toString(e+"  "))), t.map(i=>e+i).join(`
`)
  }
}, (function(n){
  n.capture="capture", n.basename="basename", n.dirname="dirname", n.extname="extname"
})(UDf||(UDf={
  
})), Hfu=/\$[({
  ](capture|basename|dirname|extname)[)
}
]/g, Jfu=class{
  constructor(n){
    this.tokens=[], Hfu.lastIndex=0;
    let e, t=0;
    for(;
    e=Hfu.exec(n);
    ){
      const i=n.slice(t,e.index);
      this.tokens.push(i);
      const r=e[1];
      switch(r){
        case"basename":case"dirname":case"extname":case"capture":this.tokens.push({
          capture:r
        });
        break;
        default:throw Error("unknown substitution type: "+r)
      }
      t=e.index+e[0].length
    }
    if(t!==n.length){
      const i=n.slice(t,n.length);
      this.tokens.push(i)
    }
  }
  substitute(n, e){
    return this.tokens.map(t=>{
      if(typeof t=="string")return t;
      switch(t.capture){
        case"basename":return n.basename;
        case"dirname":return n.dirname;
        case"extname":return n.extname;
        case"capture":return e||""
      }
    }).join("")
  }
}
}
}), $Df, v8, w0i, hfn=