// Module: out-build/vs/base/common/assert.js
// Offset: 253925 (bundle byte offset)
// Size: 1847 bytes

_s()
}
});
function Qo(n){
  return typeof n=="string"
}
function kBe(n){
  return Array.isArray(n)&&n.every(e=>Qo(e))
}
function $g(n){
  return typeof n=="object"&&n!==null&&!Array.isArray(n)&&!(n instanceof RegExp)&&!(n instanceof Date)
}
function stA(n){
  const e=Object.getPrototypeOf(Uint8Array);
  return typeof n=="object"&&n instanceof e
}
function _1(n){
  return typeof n=="number"&&!isNaN(n)
}
function s0c(n){
  return!!n&&typeof n[Symbol.iterator]=="function"
}
function uT(n){
  return n===!0||n===!1
}
function Df(n){
  return typeof n>"u"
}
function Ch(n){
  return!gA(n)
}
function gA(n){
  return Df(n)||n===null
}
function Kd(n, e){
  if(!n)throw new Error(e?`Unexpected type, expected '${e}'`:"Unexpected type")
}
function ed(n){
  return Qb(n!=null, "Argument is `undefined` or `null`."), n
}
function egt(n, e){
  if(n==null)throw typeof e=="string"?new Error(e):e
}
function dde(...n){
  const e=[];
  for(let t=0;
  t<n.length;
  t++){
    const i=n[t];
    if(gA(i))throw new Error(`Assertion Failed: argument at index ${t} is undefined or null`);
    e.push(i)
  }
  return e
}
function otA(n, e, t){
  Qb(e.includes(n), `${t}: Expected '${n}' to be one of [${e.join(", ")}].`)
}
function xbe(n){
  if(!$g(n))return!1;
  for(const e in n)if(Hnh.call(n, e))return!1;
  return!0
}
function Aze(n){
  return typeof n=="function"
}
function $nh(...n){
  return n.length>0&&n.every(Aze)
}
function qnh(n, e){
  const t=Math.min(n.length, e.length);
  for(let i=0;
  i<t;
  i++)atA(n[i], e[i])
}
function atA(n, e){
  if(Qo(e)){
    if(typeof n!==e)throw new Error(`argument does not match constraint: typeof ${e}`)
  }
  else if(Aze(e)){
    try{
      if(n instanceof e)return
    }
    catch{
      
    }
    if(!gA(n)&&n.constructor===e||e.length===1&&e.call(void 0, n)===!0)return;
    throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true")
  }
}
function CB_(n){
  return n
}
var Hnh, Js=