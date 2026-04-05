// Module: out-build/vs/workbench/services/workingCopy/common/workingCopy.js
// Offset: 31160076 (bundle byte offset)
// Size: 2994 bytes

(function(n){
  n[n.None=0]="None", n[n.Untitled=2]="Untitled", n[n.Scratchpad=4]="Scratchpad"
})(gDf||(gDf={
  
})), Dit=""
}
});
function Nsy(n, e){
  const t=e.minBytesRequiredForDetection??e.guessEncoding?ADf:vDf;
  return new Promise((i, r)=>{
    const s=bSe(m=>m.join("")), o=[];
    let a=0, l;
    const u=new Wc, d=async()=>{
      try{
        const m=await Jsy({
          buffer:Ms.concat(o),bytesRead:a
        },e.guessEncoding,e.candidateGuessEncodings);
        if(m.seemsBinary&&e.acceptTextOnly)throw new _Df("Stream is binary but only text is accepted for decoding",1);
        m.encoding=await e.overwriteEncoding(m.encoding),l=await CDf.create(m.encoding);
        const p=l.write(Ms.concat(o).buffer);
        s.write(p),o.length=0,a=0,i({
          stream:s,detected:m
        })
      }
      catch(m){
        u.cancel(),s.destroy(),r(m)
      }
    };
    Agt(n, {
      onData:async m=>{
        l?s.write(l.write(m.buffer)):(o.push(m),a+=m.byteLength,a>=t&&(n.pause(),await d(),setTimeout(()=>n.resume())))
      },onError:m=>s.error(m),onEnd:async()=>{
        l||await d(),s.end(l?.end())
      }
    }, u.token)
  })
}
async function Msy(n, e, t){
  const r=(await DQ("@vscode/iconv-lite-umd", "lib/iconv-lite-umd.js")).getEncoder(wfu(e), t);
  let s=!1, o=!1;
  return{
    read(){
      if(o)return null;
      const a=n.read();
      if(typeof a!="string"){
        if(o=!0,!s&&t?.addBOM)switch(e){
          case MU:case HMe:return Ms.wrap(Uint8Array.from(afn));
          case Bit:return Ms.wrap(Uint8Array.from(m0i));
          case Rit:return Ms.wrap(Uint8Array.from(XSa))
        }
        const l=r.end();
        return l&&l.length>0?(s=!0,Ms.wrap(l)):null
      }
      return s=!0,Ms.wrap(r.write(a))
    }
  }
}
async function Fsy(n){
  return(await DQ("@vscode/iconv-lite-umd", "lib/iconv-lite-umd.js")).encodingExists(wfu(n))
}
function wfu(n){
  return n===HMe||n===null?MU:n
}
function Osy(n, e){
  if(!n||e<m0i.length)return null;
  const t=n.readUInt8(0), i=n.readUInt8(1);
  if(t===m0i[0]&&i===m0i[1])return Bit;
  if(t===XSa[0]&&i===XSa[1])return Rit;
  if(e<afn.length)return null;
  const r=n.readUInt8(2);
  return t===afn[0]&&i===afn[1]&&r===afn[2]?HMe:null
}
async function Usy(n, e){
  const t=await DQ("jschardet", "dist/jschardet.min.js"), i=n.slice(0, yDf), r=Hsy(i.buffer);
  e&&(e=lh(e.map(a=>qsy(a))), e.length===0&&(e=void 0));
  let s;
  try{
    s=t.detect(r, e?{
      detectEncodings:e
    }
    :void 0)
  }
  catch{
    return null
  }
  if(!s||!s.encoding)return null;
  const o=s.encoding.toLowerCase();
  return 0<=SDf.indexOf(o)?null:$sy(s.encoding)
}
function fDf(n){
  return n.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
}
function $sy(n){
  const e=fDf(n);
  return kDf[e]||e
}
function qsy(n){
  const e=fDf(n), t=p0i[e];
  return t?t.guessableName:void 0
}
function Hsy(n){
  let e="";
  for(let t=0;
  t<n.length;
  t++)e+=String.fromCharCode(n[t]);
  return e
}
function Jsy({
  buffer:n, bytesRead:e
}, t, i){
  let r=Osy(n, e), s=!1;
  if(r!==Bit&&r!==Rit&&n){
    let o=!0, a=!0, l=!1;
    for(let u=0;
    u<e&&u<bDf;
    u++){
      const d=u%2===1,m=n.readUInt8(u)===0;
      if(m&&(l=!0),o&&(d&&!m||!d&&m)&&(o=!1),a&&(d&&m||!d&&!m)&&(a=!1),m&&!o&&!a)break
    }
    l&&(o?r=Rit:a?r=Bit:s=!0)
  }
  return t&&!s&&!r&&n?Usy(n.slice(0, e), i).then(o=>({
    seemsBinary:!1, encoding:o
  })):{
    seemsBinary:s, encoding:r
  }
}
var MU, HMe, Bit, Rit, m0i, XSa, afn, bDf, vDf, ADf, yDf, wDf, _Df, CDf, SDf, kDf, RQ, p0i, g0i=