// Module: out-build/vs/editor/contrib/links/browser/getLinks.js
// Offset: 30889278 (bundle byte offset)
// Size: 2109 bytes

Vs(), Po(), _s(), rt(), Js(), Yn(), ts(), hd(), hs(), Cm(), Mxf=class{
  constructor(n, e){
    this._link=n, this._provider=e
  }
  toJSON(){
    return{
      range:this.range,url:this.url,tooltip:this.tooltip
    }
  }
  get range(){
    return this._link.range
  }
  get url(){
    return this._link.url
  }
  get tooltip(){
    return this._link.tooltip
  }
  async resolve(n){
    return this._link.url?this._link.url:typeof this._provider.resolveLink=="function"?Promise.resolve(this._provider.resolveLink(this._link, n)).then(e=>(this._link=e||this._link, this._link.url?this.resolve(n):Promise.reject(new Error("missing")))):Promise.reject(new Error("missing"))
  }
}, Fpu=class bcd{
  static{
    this.Empty=new bcd([])
  }
  constructor(e){
    this._disposables=new Ut;
    let t=[];
    for(const[i, r]of e){
      const s=i.links.map(o=>new Mxf(o,r));
      t=bcd._union(t,s),Ste(i)&&(this._disposables??=new Ut,this._disposables.add(i))
    }
    this.links=t
  }
  dispose(){
    this._disposables?.dispose(), this.links.length=0
  }
  static _union(e, t){
    const i=[];
    let r, s, o, a;
    for(r=0, o=0, s=e.length, a=t.length;
    r<s&&o<a;
    ){
      const l=e[r],u=t[o];
      if(Zt.areIntersectingOrTouching(l.range,u.range)){
        r++;
        continue
      }
      Zt.compareRangesUsingStarts(l.range,u.range)<0?(i.push(l),r++):(i.push(u),o++)
    }
    for(;
    r<s;
    r++)i.push(e[r]);
    for(;
    o<a;
    o++)i.push(t[o]);
    return i
  }
}, Ss.registerCommand("_executeLinkProvider", async(n, ...e)=>{
  let[t, i]=e;
  Kd(t instanceof je), typeof i!="number"&&(i=0);
  const{
    linkProvider:r
  }
  =n.get($u), s=n.get(Il).getModel(t);
  if(!s)return[];
  const o=await Nxf(r, s, Cs.None);
  if(!o)return[];
  for(let l=0;
  l<Math.min(i, o.links.length);
  l++)await o.links[l].resolve(Cs.None);
  const a=o.links.slice(0);
  return o.dispose(), a
})
}
});
function kry(n, e){
  const t=n.url&&/^command:/i.test(n.url.toString()), i=n.tooltip?n.tooltip:_(t?1427:1428, null), r=_(e?Fs?1429:1430:Fs?1431:1432, null);
  if(n.url){
    let s="";
    if(/^command:/i.test(n.url.toString())){
      const a=n.url.toString().match(/^command:([^?#]+)/);
      if(a){
        const l=a[1];
        s=_(1433,null,l)
      }
    }
    return new _c("", !0).appendLink(n.url.toString(!0).replace(/ /g, "%20"), i, s).appendMarkdown(` (${r})`)
  }
  else return new _c().appendText(`${i} (${r})`)
}
var Opu, DMe, Upu, $pu, Fxf, I_i=