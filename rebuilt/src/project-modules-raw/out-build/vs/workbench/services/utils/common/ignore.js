// Module: out-build/vs/workbench/services/utils/common/ignore.js
// Offset: 28350059 (bundle byte offset)
// Size: 3653 bytes

if(cu(), _r(), mAa="", wcu=" ", pAa="\\", Rtf=/^\s+$/, Ptf=/(?:[^\\]|^)\\$/, Ltf=/^\\!/, Ntf=/^\\#/, Mtf=/\r?\n/g, Ftf=/^\.*\/|^\.+$/, gAa="/", _cu=5e4, Ccu="node-ignore", typeof Symbol<"u"&&(Ccu=Symbol.for("node-ignore")), Scu=Ccu, Otf=(n, e, t)=>Object.defineProperty(n, e, {
  value:t
}), Utf=/([0-z])-([0-z])/g, kcu=()=>!1, $tf=n=>n.replace(Utf, (e, t, i)=>t.charCodeAt(0)<=i.charCodeAt(0)?e:mAa), qtf=n=>{
  const{
    length:e
  }
  =n;
  return n.slice(0, e-e%2)
}, Htf=[[/^\uFEFF/, ()=>mAa], [/\\?\s+$/, n=>n.indexOf("\\")===0?wcu:mAa], [/\\\s/g, ()=>wcu], [/[\\$.|*+(){
  ^]/g, n=>`\\${n}`], [/(?!\\)\?/g, ()=>"[^/]"], [/^\//, ()=>"^"], [/\//g, ()=>"\\/"], [/^\^*\\\*\\\*\\\//, ()=>"^(?:.*\\/)?"], [/^(?=[^^])/, function(){
    return/\/(?!$)/.test(this)?"^":"(?:^|\\/)"
  }
  ], [/\\\/\\\*\\\*(?=\\\/|$)/g, (n, e, t)=>e+6<t.length?"(?:\\/[^\\/]+)*":"\\/.+"], [/(^|[^\\]+)(\\\*)+(?=.+)/g, (n, e, t)=>{
    const i=t.replace(/\\\*/g, "[^\\/]*");
    return e+i
  }
  ], [/\\\\\\(?=[$.|*+(){
    ^])/g, ()=>pAa], [/\\\\/g, ()=>pAa], [/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (n, e, t, i, r)=>e===pAa?`\\[${t}${qtf(i)}${r}`:r==="]"&&i.length%2===0?`[${$tf(t)}${i}]`:"[]"], [/(?:[^*])$/, n=>/\/$/.test(n)?`${n}$`:`${n}(?=$|\\/$)`], [/(\^|\\\/)?\\\*$/, (n, e)=>`${e?`${
      e
    }
    [^/]+`:"[^/]*"}(?=$|\\/$)`]], Ecu=Object.create(null), Jtf=(n, e)=>{
      let t=Ecu[n];
      return t||(t=Htf.reduce((i,r)=>i.replace(r[0],r[1].bind(n)),n),Ecu[n]=t),e?new RegExp(t,"i"):new RegExp(t)
    }, fAa=n=>typeof n=="string", Gtf=n=>n&&fAa(n)&&!Rtf.test(n)&&!Ptf.test(n)&&n.indexOf("#")!==0, Wtf=n=>n.split(Mtf), Qtf=class{
      constructor(n,e,t,i){
        this.origin=n,this.pattern=e,this.negative=t,this.regex=i
      }
    }, jtf=(n, e)=>{
      const t=n;
      let i=!1;
      n.indexOf("!")===0&&(i=!0,n=n.substr(1)),n=n.replace(Ltf,"!").replace(Ntf,"#");
      const r=Jtf(n,e);
      return new Qtf(t,n,i,r)
    }, ztf=(n, e)=>{
      throw new e(n)
    }, rMe=(n, e, t)=>fAa(n)?n?rMe.isNotRelative(n)?t(`path should be a \`path.relative()\`d string, but got "${e}"`, RangeError):!0:t("path must not be empty", TypeError):t(`path must be a string, but got \`${e}\``, TypeError), xcu=n=>Ftf.test(n), rMe.isNotRelative=xcu, rMe.convert=n=>n, Vtf=class{
      constructor({
        ignorecase:n=!0,ignoreCase:e=n,allowRelativePaths:t=!1
      }
      ={
        
      }){
        Otf(this,Scu,!0),this._rules=[],this._ignoreCase=e,this._allowRelativePaths=t,this._initCache()
      }
      _initCache(){
        this._ignoreCache=new Fb(_cu),this._testCache=new Fb(_cu)
      }
      _addPattern(n){
        if(n&&n[Scu]){
          this._rules=this._rules.concat(n._rules),this._added=!0;
          return
        }
        if(Gtf(n)){
          const e=jtf(n,this._ignoreCase);
          this._added=!0,this._rules.push(e)
        }
      }
      add(n){
        return this._added=!1,Btf(fAa(n)?Wtf(n):n).forEach(this._addPattern,this),this._added&&this._initCache(),this
      }
      addPattern(n){
        return this.add(n)
      }
      _testOne(n,e){
        let t=!1,i=!1;
        return this._rules.forEach(r=>{
          const{
            negative:s
          }
          =r;
          if(i===s&&t!==i||s&&!t&&!i&&!e)return;
          r.regex.test(n)&&(t=!s,i=s)
        }),{
          ignored:t,unignored:i
        }
      }
      _test(n,e,t,i){
        const r=n&&rMe.convert(n);
        return rMe(r,n,this._allowRelativePaths?kcu:ztf),this._t(r,e,t,i)
      }
      _t(n,e,t,i){
        const r=e.get(n);
        if(r!==void 0)return r;
        if(i||(i=n.split(gAa)),i.pop(),!i.length){
          const o=this._testOne(n,t);
          return e.set(n,o),o
        }
        const s=this._t(i.join(gAa)+gAa,e,t,i);
        if(s.ignored)return e.set(n,s),s;
        {
          const o=this._testOne(n,t);
          return e.set(n,o),o
        }
      }
      ignores(n){
        return this._test(n,this._ignoreCache,!1).ignored
      }
      createFilter(){
        return n=>!this.ignores(n)
      }
      filter(n){
        return Btf(n).filter(this.createFilter())
      }
      test(n){
        return this._test(n,this._testCache,!0)
      }
    }, wyi=n=>new Vtf(n), Ktf=n=>rMe(n&&rMe.convert(n), n, kcu), wyi.isPathValid=Ktf, wyi.default=wyi, sMe=wyi, Sc){
      const n=t=>/^\\\\\?\\/.test(t)||/["<>|\u0000-\u001F]+/u.test(t)?t:t.replace(/\\/g,"/");rMe.convert=n;const e=/^[a-z]:\//i;rMe.isNotRelative=t=>e.test(t)||xcu(t)}}}),bAa,Tcu,Icu=