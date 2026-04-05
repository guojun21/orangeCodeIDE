// Module: out-build/vs/base/common/mime.js
// Offset: 752713 (bundle byte offset)
// Size: 2976 bytes

Hl(), NA=Object.freeze({
  text:"text/plain", binary:"application/octet-stream", unknown:"application/unknown", markdown:"text/markdown", latex:"text/latex", uriList:"text/uri-list", html:"text/html"
}), Vch={
  ".css":"text/css", ".csv":"text/csv", ".htm":"text/html", ".html":"text/html", ".ics":"text/calendar", ".js":"text/javascript", ".mjs":"text/javascript", ".svg":"image/svg+xml", ".txt":"text/plain", ".xml":"text/xml"
}, i4o={
  ".aac":"audio/x-aac", ".avi":"video/x-msvideo", ".bmp":"image/bmp", ".flv":"video/x-flv", ".gif":"image/gif", ".ico":"image/x-icon", ".jpe":"image/jpg", ".jpeg":"image/jpg", ".jpg":"image/jpg", ".m1v":"video/mpeg", ".m2a":"audio/mpeg", ".m2v":"video/mpeg", ".m3a":"audio/mpeg", ".mid":"audio/midi", ".midi":"audio/midi", ".mk3d":"video/x-matroska", ".mks":"video/x-matroska", ".mkv":"video/x-matroska", ".mov":"video/quicktime", ".movie":"video/x-sgi-movie", ".mp2":"audio/mpeg", ".mp2a":"audio/mpeg", ".mp3":"audio/mpeg", ".mp4":"video/mp4", ".mp4a":"audio/mp4", ".mp4v":"video/mp4", ".mpe":"video/mpeg", ".mpeg":"video/mpeg", ".mpg":"video/mpeg", ".mpg4":"video/mp4", ".mpga":"audio/mpeg", ".oga":"audio/ogg", ".ogg":"audio/ogg", ".opus":"audio/opus", ".ogv":"video/ogg", ".png":"image/png", ".psd":"image/vnd.adobe.photoshop", ".qt":"video/quicktime", ".spx":"audio/ogg", ".tga":"image/x-tga", ".tif":"image/tiff", ".tiff":"image/tiff", ".wav":"audio/x-wav", ".webm":"video/webm", ".webp":"image/webp", ".wma":"audio/x-ms-wma", ".wmv":"video/x-ms-wmv", ".woff":"application/font-woff"
}, Kch=/^(.+)\/(.+?)(;
.+)?$/
}
});
function ErA(n){
  let e=!1;
  const t=new Map, i=new Map;
  if(xrA(n, d=>{
    if(n===d)return!0;
    const m=JSON.stringify(d);
    if(m.length<30)return!0;
    const p=t.get(m);
    if(!p){
      const g={
        schemas:[d]
      };
      return t.set(m,g),i.set(d,g),!0
    }
    return p.schemas.push(d), i.set(d, p), e=!0, !1
  }), t.clear(), !e)return JSON.stringify(n);
  let s="$defs";
  for(;
  n.hasOwnProperty(s);
  )s+="_";
  const o=[];
  function a(d){
    return JSON.stringify(d, (m, p)=>{
      if(p!==d){
        const g=i.get(p);
        if(g&&g.schemas.length>1)return g.id||(g.id=`_${o.length}`,o.push(g.schemas[0])),{
          $ref:`#/${s}/${g.id}`
        }
      }
      return p
    })
  }
  const l=a(n), u=[];
  for(let d=0;
  d<o.length;
  d++)u.push(`"_${d}":${a(o[d])}`);
  return u.length?`${l.substring(0,l.length-1)},"${s}":{${u.join(",")}}}`:l
}
function H4t(n){
  return typeof n=="object"&&n!==null
}
function xrA(n, e){
  if(!n||typeof n!="object")return;
  const t=(...l)=>{
    for(const u of l)H4t(u)&&o.push(u)
  }, i=(...l)=>{
    for(const u of l)if(H4t(u))for(const d in u){
      const m=u[d];
      H4t(m)&&o.push(m)
    }
  }, r=(...l)=>{
    for(const u of l)if(Array.isArray(u))for(const d of u)H4t(d)&&o.push(d)
  }, s=l=>{
    if(Array.isArray(l))for(const u of l)H4t(u)&&o.push(u);
    else H4t(l)&&o.push(l)
  }, o=[n];
  let a=o.pop();
  for(;
  a;
  )e(a)&&(t(a.additionalItems, a.additionalProperties, a.not, a.contains, a.propertyNames, a.if, a.then, a.else, a.unevaluatedItems, a.unevaluatedProperties), i(a.definitions, a.$defs, a.properties, a.patternProperties, a.dependencies, a.dependentSchemas), r(a.anyOf, a.allOf, a.oneOf, a.prefixItems), s(a.items)), a=o.pop()
}
var TrA=