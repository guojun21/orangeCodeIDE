// Module: out-build/external/sentry/core/utils/cookie.js
// Offset: 115311 (bundle byte offset)
// Size: 1691 bytes

Ae({
  "out-build/external/sentry/core/utils/cookie.js"(){
    "use strict"
  }
});
function FVv(n){
  return Swc.map(r=>{
    const s=n[r], o=Array.isArray(s)?s.join(";"):s;
    return r==="Forwarded"?OVv(o):o?.split(",").map(a=>a.trim())
  }).reduce((r, s)=>s?r.concat(s):r, []).find(r=>r!==null&&UVv(r))||null
}
function OVv(n){
  if(!n)return null;
  for(const e of n.split(";"))if(e.startsWith("for="))return e.slice(4);
  return null
}
function UVv(n){
  return/(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){
    3
  }
  $)|(?:^(?:(?:[a-fA-F\d]{
    1, 4
  }
  :){
    7
  }
  (?:[a-fA-F\d]{
    1, 4
  }
  |:)|(?:[a-fA-F\d]{
    1, 4
  }
  :){
    6
  }
  (?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){
    3
  }
  |:[a-fA-F\d]{
    1, 4
  }
  |:)|(?:[a-fA-F\d]{
    1, 4
  }
  :){
    5
  }
  (?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){
    3
  }
  |(?::[a-fA-F\d]{
    1, 4
  }){
    1, 2
  }
  |:)|(?:[a-fA-F\d]{
    1, 4
  }
  :){
    4
  }
  (?:(?::[a-fA-F\d]{
    1, 4
  }){
    0, 1
  }
  :(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){
    3
  }
  |(?::[a-fA-F\d]{
    1, 4
  }){
    1, 3
  }
  |:)|(?:[a-fA-F\d]{
    1, 4
  }
  :){
    3
  }
  (?:(?::[a-fA-F\d]{
    1, 4
  }){
    0, 2
  }
  :(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){
    3
  }
  |(?::[a-fA-F\d]{
    1, 4
  }){
    1, 4
  }
  |:)|(?:[a-fA-F\d]{
    1, 4
  }
  :){
    2
  }
  (?:(?::[a-fA-F\d]{
    1, 4
  }){
    0, 3
  }
  :(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){
    3
  }
  |(?::[a-fA-F\d]{
    1, 4
  }){
    1, 5
  }
  |:)|(?:[a-fA-F\d]{
    1, 4
  }
  :){
    1
  }
  (?:(?::[a-fA-F\d]{
    1, 4
  }){
    0, 4
  }
  :(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){
    3
  }
  |(?::[a-fA-F\d]{
    1, 4
  }){
    1, 6
  }
  |:)|(?::(?:(?::[a-fA-F\d]{
    1, 4
  }){
    0, 5
  }
  :(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){
    3
  }
  |(?::[a-fA-F\d]{
    1, 4
  }){
    1, 7
  }
  |:)))(?:%[0-9a-zA-Z]{
    1, 
  })?$)/.test(n)
}
var Swc, $Vv=