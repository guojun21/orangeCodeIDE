// Module: out-build/external/yaml/yaml.js
// Offset: 27990607 (bundle byte offset)
// Size: 9691 bytes

for(ZVg=LVg, XVg=b4A, eKg=v4A, tKg=y4A, nKg=w4A, iKg=A4A, Oq={
  isNothing:ZVg, isObject:XVg, toArray:eKg, repeat:tKg, isNegativeZero:nKg, extend:iKg
}, yAi.prototype=Object.create(Error.prototype), yAi.prototype.constructor=yAi, yAi.prototype.toString=function(e){
  return this.name+": "+NVg(this, e)
}, sX=yAi, rKg=_4A, sKg=["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], oKg=["scalar", "sequence", "mapping"], gQ=S4A, $su.prototype.extend=function(e){
  var t=[], i=[];
  if(e instanceof gQ)i.push(e);
  else if(Array.isArray(e))i=i.concat(e);
  else if(e&&(Array.isArray(e.implicit)||Array.isArray(e.explicit)))e.implicit&&(t=t.concat(e.implicit)), e.explicit&&(i=i.concat(e.explicit));
  else throw new sX("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  t.forEach(function(s){
    if(!(s instanceof gQ))throw new sX("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if(s.loadKind&&s.loadKind!=="scalar")throw new sX("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if(s.multi)throw new sX("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")
  }), i.forEach(function(s){
    if(!(s instanceof gQ))throw new sX("Specified list of YAML types (or a single Type object) contains a non-Type object.")
  });
  var r=Object.create($su.prototype);
  return r.implicit=(this.implicit||[]).concat(t), r.explicit=(this.explicit||[]).concat(i), r.compiledImplicit=MVg(r, "implicit"), r.compiledExplicit=MVg(r, "explicit"), r.compiledTypeMap=k4A(r.compiledImplicit, r.compiledExplicit), r
}, Qsu=$su, jsu=new gQ("tag:yaml.org,2002:str", {
  kind:"scalar", construct:function(n){
    return n!==null?n:""
  }
}), zsu=new gQ("tag:yaml.org,2002:seq", {
  kind:"sequence", construct:function(n){
    return n!==null?n:[]
  }
}), Vsu=new gQ("tag:yaml.org,2002:map", {
  kind:"mapping", construct:function(n){
    return n!==null?n:{
      
    }
  }
}), Ksu=new Qsu({
  explicit:[jsu, zsu, Vsu]
}), Ysu=new gQ("tag:yaml.org,2002:null", {
  kind:"scalar", resolve:E4A, construct:x4A, predicate:T4A, represent:{
    canonical:function(){
      return"~"
    }, lowercase:function(){
      return"null"
    }, uppercase:function(){
      return"NULL"
    }, camelcase:function(){
      return"Null"
    }, empty:function(){
      return""
    }
  }, defaultStyle:"lowercase"
}), Zsu=new gQ("tag:yaml.org,2002:bool", {
  kind:"scalar", resolve:I4A, construct:D4A, predicate:B4A, represent:{
    lowercase:function(n){
      return n?"true":"false"
    }, uppercase:function(n){
      return n?"TRUE":"FALSE"
    }, camelcase:function(n){
      return n?"True":"False"
    }
  }, defaultStyle:"lowercase"
}), Xsu=new gQ("tag:yaml.org,2002:int", {
  kind:"scalar", resolve:N4A, construct:M4A, predicate:F4A, represent:{
    binary:function(n){
      return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)
    }, octal:function(n){
      return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)
    }, decimal:function(n){
      return n.toString(10)
    }, hexadecimal:function(n){
      return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)
    }
  }, defaultStyle:"decimal", styleAliases:{
    binary:[2, "bin"], octal:[8, "oct"], decimal:[10, "dec"], hexadecimal:[16, "hex"]
  }
}), aKg=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), cKg=/^[-+]?[0-9]+e/, eou=new gQ("tag:yaml.org,2002:float", {
  kind:"scalar", resolve:O4A, construct:U4A, predicate:q4A, represent:$4A, defaultStyle:"lowercase"
}), tou=Ksu.extend({
  implicit:[Ysu, Zsu, Xsu, eou]
}), nou=tou, iou=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), rou=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"), sou=new gQ("tag:yaml.org,2002:timestamp", {
  kind:"scalar", resolve:H4A, construct:J4A, instanceOf:Date, represent:G4A
}), oou=new gQ("tag:yaml.org,2002:merge", {
  kind:"scalar", resolve:W4A
}), Pba=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`, aou=new gQ("tag:yaml.org,2002:binary", {
  kind:"scalar", resolve:Q4A, construct:j4A, predicate:V4A, represent:z4A
}), lKg=Object.prototype.hasOwnProperty, uKg=Object.prototype.toString, cou=new gQ("tag:yaml.org,2002:omap", {
  kind:"sequence", resolve:K4A, construct:Y4A
}), dKg=Object.prototype.toString, lou=new gQ("tag:yaml.org,2002:pairs", {
  kind:"sequence", resolve:Z4A, construct:X4A
}), hKg=Object.prototype.hasOwnProperty, uou=new gQ("tag:yaml.org,2002:set", {
  kind:"mapping", resolve:eOA, construct:tOA
}), Lba=nou.extend({
  implicit:[sou, oou], explicit:[aou, cou, lou, uou]
}), Q$e=Object.prototype.hasOwnProperty, CAi=1, dou=2, hou=3, SAi=4, Nba=1, mKg=2, mou=3, pKg=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, gKg=/[\x85\u2028\u2029]/, fKg=/[, \[\]\{
  \
}
]/, pou=/^(?:!|!!|![a-z\-]+!)$/i, gou=/^(?:!|[^, \[\]\{
  \
}
])(?:%[0-9a-f]{
  2
}
|[0-9a-z\-#;
\/\?:@&=\+\$, _\.!~\*'\(\)\[\]])*$/i,fou=new Array(256),bou=new Array(256),E_e=0;E_e<256;E_e++)fou[E_e]=OVg(E_e)?1:0,bou[E_e]=OVg(E_e);vou={YAML:function(e,t,i){var r,s,o;e.version!==null&&Qy(e,"duplication of %YAML directive"),i.length!==1&&Qy(e,"YAML directive accepts exactly one argument"),r=/^([0-9]+)\.([0-9]+)$/.exec(i[0]),r===null&&Qy(e,"ill-formed argument of the YAML directive"),s=parseInt(r[1],10),o=parseInt(r[2],10),s!==1&&Qy(e,"unacceptable YAML version of the document"),e.version=i[0],e.checkLineBreaks=o<2,o!==1&&o!==2&&Dba(e,"unsupported YAML version of the document")},TAG:function(e,t,i){var r,s;i.length!==2&&Qy(e,"TAG directive accepts exactly two arguments"),r=i[0],s=i[1],pou.test(r)||Qy(e,"ill-formed tag handle (first argument) of the TAG directive"),Q$e.call(e.tagMap,r)&&Qy(e,'there is a previously declared suffix for "'+r+'" tag handle'),gou.test(s)||Qy(e,"ill-formed tag prefix (second argument) of the TAG directive");try{s=decodeURIComponent(s)}catch{Qy(e,"tag prefix is malformed: "+s)}e.tagMap[r]=s}},bKg=bOA,vKg=vOA,Aou={loadAll:bKg,load:vKg},you=Object.prototype.toString,wou=Object.prototype.hasOwnProperty,Mba=65279,AKg=9,Omn=10,yKg=13,wKg=32,_Kg=33,CKg=34,Fba=35,SKg=37,kKg=38,EKg=39,xKg=42,_ou=44,TKg=45,kAi=58,IKg=61,DKg=62,BKg=63,RKg=64,Cou=91,Sou=93,PKg=96,kou=123,LKg=124,Eou=125,mV={},mV[0]="\\0",mV[7]="\\a",mV[8]="\\b",mV[9]="\\t",mV[10]="\\n",mV[11]="\\v",mV[12]="\\f",mV[13]="\\r",mV[27]="\\e",mV[34]='\\"',mV[92]="\\\\",mV[133]="\\N",mV[160]="\\_",mV[8232]="\\L",mV[8233]="\\P",NKg=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],MKg=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/,FKg=1,Umn=2,xou=1,Oba=2,Tou=3,Iou=4,ekt=5,OKg=POA,UKg={dump:OKg},$Kg=gQ,qKg=Qsu,HKg=Ksu,JKg=tou,GKg=nou,WKg=Lba,QKg=Aou.load,jKg=Aou.loadAll,zKg=UKg.dump,VKg=sX,KKg={binary:aou,float:eou,map:Vsu,null:Ysu,pairs:lou,set:uou,timestamp:sou,bool:Zsu,int:Xsu,merge:oou,omap:cou,seq:zsu,str:jsu},YKg=Wsu("safeLoad","load"),ZKg=Wsu("safeLoadAll","loadAll"),XKg=Wsu("safeDump","dump"),eYg={Type:$Kg,Schema:qKg,FAILSAFE_SCHEMA:HKg,JSON_SCHEMA:JKg,CORE_SCHEMA:GKg,DEFAULT_SCHEMA:WKg,load:QKg,loadAll:jKg,dump:zKg,YAMLException:VKg,types:KKg,safeLoad:YKg,safeLoadAll:ZKg,safeDump:XKg},EAi=eYg}});function xAi(n){const e=n.split(`
`);let t=0;for(let l=0;l<Math.min(5,e.length);l++)if(e[l].match(/<!-- ([^\s]+)(?: ([^\s]+))? -->/)){t=l+1;break}const i=[];let r=!1,s=-1,o=e.length;for(let l=t;l<e.length;l++){if(e[l].trim()==="### To-dos"){r=!0,s=l;continue}if(r){const u=e[l].match(/^- \[([ x])\] (.+)$/);if(u)i.push({id:Wr(),content:u[2],status:u[1]==="x"?"completed":"pending",dependencies:[]});else if(e[l].trim()&&!e[l].match(/^- \[([ x])\]/)){o=l;break}}}let a;if(s>=0){const l=e.slice(t,s).join(`
`).trim(),u=o<e.length?e.slice(o).join(`
`).trim():"";a=[l,u].filter(Boolean).join(`

`)}else a=e.slice(t).join(`
`).trim();return{frontmatter:{name:"",overview:"",todos:i},body:a}}function LOA(n){return n.replace(/^(\s*(?:content|name|overview):\s*)([^"'\[\{|\n][^\n]*)$/gm,(e,t,i)=>{if(i.includes(": ")||i.includes(" #")||i.trim()!==i){const s=i.replace(/\\/g,"\\\\").replace(/"/g,'\\"');return`${t}"${
  s
}
"`}return e})}function tkt(n){const e=n.match(nYg);if(!e)return null;const t=e[1],i=n.slice(e[0].length).replace(/^[\r\n]+/,""),r=s=>{const o=EAi.load(s,{});if(!o||typeof o!="object")return{frontmatter:{name:"",overview:"",todos:[],isProject:!1},body:i};const a=(o.todos||[]).map(d=>({id:d.id||Wr(),content:d.content||"",status:d.status||"pending",dependencies:d.dependencies||[]})),l=o.phases?o.phases.map(d=>({name:d.name||"",todos:(d.todos||[]).map(m=>({id:m.id||Wr(),content:m.content||"",status:m.status||"pending",dependencies:m.dependencies||[]}))})):void 0;return{frontmatter:{name:o.name||"",overview:o.overview||"",todos:a,isProject:o.isProject??!1,phases:l&&l.length>0?l:void 0},body:i}};try{const s=r(t);if(s)return s}catch{try{const s=LOA(t),o=r(s);if(o)return console.log("[PlanStorageService] YAML frontmatter parsed after sanitization"),o}catch(s){return console.error("[PlanStorageService] Failed to parse YAML frontmatter even after sanitization:",s),null}}return null}function pnt(n){const e=n.todos.map(s=>{const o={id:s.id,content:s.content,status:s.status};return s.dependencies&&s.dependencies.length>0&&(o.dependencies=s.dependencies),o}),t=n.phases?.map(s=>({name:s.name,todos:s.todos.map(o=>{const a={id:o.id,content:o.content,status:o.status};return o.dependencies&&o.dependencies.length>0&&(a.dependencies=o.dependencies),a})})),i={name:n.name,overview:n.overview,todos:e,isProject:n.isProject??!1};return n.isProject&&t&&t.length>0&&(i.phases=t),`---
${EAi.dump(i,{indent:2,lineWidth:-1,quotingType:'"',forceQuotes:!1})}---`}var TAi,j$e,nYg,Uba,nkt=