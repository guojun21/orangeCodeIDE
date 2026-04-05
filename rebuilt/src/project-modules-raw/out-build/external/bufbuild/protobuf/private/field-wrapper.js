// Module: out-build/external/bufbuild/protobuf/private/field-wrapper.js
// Offset: 2506329 (bundle byte offset)
// Size: 8202 bytes

tke(), DKe(), fmA={
  "google.protobuf.DoubleValue":ud.DOUBLE, "google.protobuf.FloatValue":ud.FLOAT, "google.protobuf.Int64Value":ud.INT64, "google.protobuf.UInt64Value":ud.UINT64, "google.protobuf.Int32Value":ud.INT32, "google.protobuf.UInt32Value":ud.UINT32, "google.protobuf.BoolValue":ud.BOOL, "google.protobuf.StringValue":ud.STRING, "google.protobuf.BytesValue":ud.BYTES
}
}
});
function bmA(n){
  return n?{
    ...rRc, ...n
  }
  :rRc
}
function vmA(n){
  return n?{
    ...sRc, ...n
  }
  :sRc
}
function AmA(){
  return{
    makeReadOptions:bmA, makeWriteOptions:vmA, readMessage(n, e, t, i){
      if(e==null||Array.isArray(e)||typeof e!="object")throw new Error(`cannot decode message ${n.typeName} from JSON: ${PRe(e)}`);
      i=i??new n;
      const r=new Map,s=t.typeRegistry;
      for(const[o,a]of Object.entries(e)){
        const l=n.fields.findJsonName(o);
        if(l){
          if(l.oneof){
            if(a===null&&l.kind=="scalar")continue;
            const u=r.get(l.oneof);
            if(u!==void 0)throw new Error(`cannot decode message ${n.typeName} from JSON: multiple keys for oneof "${l.oneof.name}" present: "${u}", "${o}"`);
            r.set(l.oneof,o)
          }
          Gkh(i,a,l,t,n)
        }
        else{
          let u=!1;
          if(s?.findExtension&&o.startsWith("[")&&o.endsWith("]")){
            const d=s.findExtension(o.substring(1,o.length-1));
            if(d&&d.extendee.typeName==n.typeName){
              u=!0;
              const[m,p]=Mkh(d);
              Gkh(m,a,d.field,t,d),gmA(i,d,p(),t)
            }
          }
          if(!u&&!t.ignoreUnknownFields)throw new Error(`cannot decode message ${n.typeName} from JSON: key "${o}" is unknown`)
        }
      }
      return i
    }, writeMessage(n, e){
      const t=n.getType(),i={
        
      };
      let r;
      try{
        for(r of t.fields.byNumber()){
          if(!$kh(r,n)){
            if(r.req)throw"required field not set";
            if(!e.emitDefaultValues||!wmA(r))continue
          }
          const o=r.oneof?n[r.oneof.localName].value:n[r.localName],a=Wkh(r,o,e);
          a!==void 0&&(i[e.useProtoFieldName?r.name:r.jsonName]=a)
        }
        const s=e.typeRegistry;
        if(s?.findExtensionFor)for(const o of t.runtime.bin.listUnknownFields(n)){
          const a=s.findExtensionFor(t.typeName,o.no);
          if(a&&Fkh(n,a)){
            const l=pmA(n,a,e),u=Wkh(a.field,l,e);
            u!==void 0&&(i[a.field.jsonName]=u)
          }
        }
      }
      catch(s){
        const o=r?`cannot encode field ${t.typeName}.${r.name} to JSON`:`cannot encode message ${t.typeName} to JSON`,a=s instanceof Error?s.message:String(s);
        throw new Error(o+(a.length>0?`: ${a}`:""))
      }
      return i
    }, readScalar(n, e, t){
      return s5n(n,e,t??xKe.BIGINT,!0)
    }, writeScalar(n, e, t){
      if(e!==void 0&&(t||Nkh(n,e)))return f9o(n,e)
    }, debug:PRe
  }
}
function PRe(n){
  if(n===null)return"null";
  switch(typeof n){
    case"object":return Array.isArray(n)?"array":"object";
    case"string":return n.length>100?"string":`"${n.split('"').join('\\"')}"`;
    default:return String(n)
  }
}
function Gkh(n, e, t, i, r){
  let s=t.localName;
  if(t.repeated){
    if(x9(t.kind!="map"), e===null)return;
    if(!Array.isArray(e))throw new Error(`cannot decode field ${r.typeName}.${t.name} from JSON: ${PRe(e)}`);
    const o=n[s];
    for(const a of e){
      if(a===null)throw new Error(`cannot decode field ${r.typeName}.${t.name} from JSON: ${PRe(a)}`);
      switch(t.kind){
        case"message":o.push(t.T.fromJson(a,i));
        break;
        case"enum":const l=nRc(t.T,a,i.ignoreUnknownFields,!0);
        l!==a5n&&o.push(l);
        break;
        case"scalar":try{
          o.push(s5n(t.T,a,t.L,!0))
        }
        catch(u){
          let d=`cannot decode field ${r.typeName}.${t.name} from JSON: ${PRe(a)}`;
          throw u instanceof Error&&u.message.length>0&&(d+=`: ${u.message}`),new Error(d)
        }
        break
      }
    }
  }
  else if(t.kind=="map"){
    if(e===null)return;
    if(typeof e!="object"||Array.isArray(e))throw new Error(`cannot decode field ${r.typeName}.${t.name} from JSON: ${PRe(e)}`);
    const o=n[s];
    for(const[a, l]of Object.entries(e)){
      if(l===null)throw new Error(`cannot decode field ${r.typeName}.${t.name} from JSON: map value null`);
      let u;
      try{
        u=ymA(t.K,a)
      }
      catch(d){
        let m=`cannot decode map key for field ${r.typeName}.${t.name} from JSON: ${PRe(e)}`;
        throw d instanceof Error&&d.message.length>0&&(m+=`: ${d.message}`),new Error(m)
      }
      switch(t.V.kind){
        case"message":o[u]=t.V.T.fromJson(l,i);
        break;
        case"enum":const d=nRc(t.V.T,l,i.ignoreUnknownFields,!0);
        d!==a5n&&(o[u]=d);
        break;
        case"scalar":try{
          o[u]=s5n(t.V.T,l,xKe.BIGINT,!0)
        }
        catch(m){
          let p=`cannot decode map value for field ${r.typeName}.${t.name} from JSON: ${PRe(e)}`;
          throw m instanceof Error&&m.message.length>0&&(p+=`: ${m.message}`),new Error(p)
        }
        break
      }
    }
  }
  else switch(t.oneof&&(n=n[t.oneof.localName]={
    case:s
  }, s="value"), t.kind){
    case"message":const o=t.T;
    if(e===null&&o.typeName!="google.protobuf.Value")return;
    let a=n[s];
    xbt(a)?a.fromJson(e, i):(n[s]=a=o.fromJson(e, i), o.fieldWrapper&&!t.oneof&&(n[s]=o.fieldWrapper.unwrapField(a)));
    break;
    case"enum":const l=nRc(t.T, e, i.ignoreUnknownFields, !1);
    switch(l){
      case o5n:qkh(t,n);
      break;
      case a5n:break;
      default:n[s]=l;
      break
    }
    break;
    case"scalar":try{
      const u=s5n(t.T,e,t.L,!1);
      switch(u){
        case o5n:qkh(t,n);
        break;
        default:n[s]=u;
        break
      }
    }
    catch(u){
      let d=`cannot decode field ${r.typeName}.${t.name} from JSON: ${PRe(e)}`;
      throw u instanceof Error&&u.message.length>0&&(d+=`: ${u.message}`),new Error(d)
    }
    break
  }
}
function ymA(n, e){
  if(n===ud.BOOL)switch(e){
    case"true":e=!0;
    break;
    case"false":e=!1;
    break
  }
  return s5n(n, e, xKe.BIGINT, !0).toString()
}
function s5n(n, e, t, i){
  if(e===null)return i?t5t(n, t):o5n;
  switch(n){
    case ud.DOUBLE:case ud.FLOAT:if(e==="NaN")return Number.NaN;
    if(e==="Infinity")return Number.POSITIVE_INFINITY;
    if(e==="-Infinity")return Number.NEGATIVE_INFINITY;
    if(e===""||typeof e=="string"&&e.trim().length!==e.length||typeof e!="string"&&typeof e!="number")break;
    const r=Number(e);
    if(Number.isNaN(r)||!Number.isFinite(r))break;
    return n==ud.FLOAT&&ykh(r), r;
    case ud.INT32:case ud.FIXED32:case ud.SFIXED32:case ud.SINT32:case ud.UINT32:let s;
    if(typeof e=="number"?s=e:typeof e=="string"&&e.length>0&&e.trim().length===e.length&&(s=Number(e)), s===void 0)break;
    return n==ud.UINT32||n==ud.FIXED32?zBc(s):p9o(s), s;
    case ud.INT64:case ud.SFIXED64:case ud.SINT64:if(typeof e!="number"&&typeof e!="string")break;
    const o=Eo.parse(e);
    return t?o.toString():o;
    case ud.FIXED64:case ud.UINT64:if(typeof e!="number"&&typeof e!="string")break;
    const a=Eo.uParse(e);
    return t?a.toString():a;
    case ud.BOOL:if(typeof e!="boolean")break;
    return e;
    case ud.STRING:if(typeof e!="string")break;
    try{
      encodeURIComponent(e)
    }
    catch{
      throw new Error("invalid UTF8")
    }
    return e;
    case ud.BYTES:if(e==="")return new Uint8Array(0);
    if(typeof e!="string")break;
    return r5n.dec(e)
  }
  throw new Error
}
function nRc(n, e, t, i){
  if(e===null)return n.typeName=="google.protobuf.NullValue"?0:i?n.values[0].no:o5n;
  switch(typeof e){
    case"number":if(Number.isInteger(e))return e;
    break;
    case"string":const r=n.findName(e);
    if(r!==void 0)return r.no;
    if(t)return a5n;
    break
  }
  throw new Error(`cannot decode enum ${n.typeName} from JSON: ${PRe(e)}`)
}
function wmA(n){
  return n.repeated||n.kind=="map"?!0:!(n.oneof||n.kind=="message"||n.opt||n.req)
}
function Wkh(n, e, t){
  if(n.kind=="map"){
    x9(typeof e=="object"&&e!=null);
    const i={
      
    }, r=Object.entries(e);
    switch(n.V.kind){
      case"scalar":for(const[o,a]of r)i[o.toString()]=f9o(n.V.T,a);
      break;
      case"message":for(const[o,a]of r)i[o.toString()]=a.toJson(t);
      break;
      case"enum":const s=n.V.T;
      for(const[o,a]of r)i[o.toString()]=iRc(s,a,t.enumAsInteger);
      break
    }
    return t.emitDefaultValues||r.length>0?i:void 0
  }
  if(n.repeated){
    x9(Array.isArray(e));
    const i=[];
    switch(n.kind){
      case"scalar":for(let r=0;
      r<e.length;
      r++)i.push(f9o(n.T,e[r]));
      break;
      case"enum":for(let r=0;
      r<e.length;
      r++)i.push(iRc(n.T,e[r],t.enumAsInteger));
      break;
      case"message":for(let r=0;
      r<e.length;
      r++)i.push(e[r].toJson(t));
      break
    }
    return t.emitDefaultValues||i.length>0?i:void 0
  }
  switch(n.kind){
    case"scalar":return f9o(n.T, e);
    case"enum":return iRc(n.T, e, t.enumAsInteger);
    case"message":return Jkh(n.T, e).toJson(t)
  }
}
function iRc(n, e, t){
  return x9(typeof e=="number"), n.typeName=="google.protobuf.NullValue"?null:t?e:n.findNumber(e)?.name??e
}
function f9o(n, e){
  switch(n){
    case ud.INT32:case ud.SFIXED32:case ud.SINT32:case ud.FIXED32:case ud.UINT32:return x9(typeof e=="number"), e;
    case ud.FLOAT:case ud.DOUBLE:return x9(typeof e=="number"), Number.isNaN(e)?"NaN":e===Number.POSITIVE_INFINITY?"Infinity":e===Number.NEGATIVE_INFINITY?"-Infinity":e;
    case ud.STRING:return x9(typeof e=="string"), e;
    case ud.BOOL:return x9(typeof e=="boolean"), e;
    case ud.UINT64:case ud.FIXED64:case ud.INT64:case ud.SFIXED64:case ud.SINT64:return x9(typeof e=="bigint"||typeof e=="string"||typeof e=="number"), e.toString();
    case ud.BYTES:return x9(e instanceof Uint8Array), r5n.enc(e)
  }
}
var rRc, sRc, o5n, a5n, _mA=