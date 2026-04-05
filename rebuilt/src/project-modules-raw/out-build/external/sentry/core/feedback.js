// Module: out-build/external/sentry/core/feedback.js
// Offset: 152699 (bundle byte offset)
// Size: 570 bytes

aT()
}
}), Qwc={
  
};
WN(Qwc, {
  debug:()=>BYv, error:()=>LYv, fatal:()=>NYv, fmt:()=>NNo, info:()=>RYv, trace:()=>DYv, warn:()=>PYv
});
function lFt(n, e, t, i, r){
  X2t({
    level:n, message:e, attributes:t, severityNumber:r
  }, i)
}
function DYv(n, e, {
  scope:t
}
={
  
}){
  lFt("trace", n, e, t)
}
function BYv(n, e, {
  scope:t
}
={
  
}){
  lFt("debug", n, e, t)
}
function RYv(n, e, {
  scope:t
}
={
  
}){
  lFt("info", n, e, t)
}
function PYv(n, e, {
  scope:t
}
={
  
}){
  lFt("warn", n, e, t)
}
function LYv(n, e, {
  scope:t
}
={
  
}){
  lFt("error", n, e, t)
}
function NYv(n, e, {
  scope:t
}
={
  
}){
  lFt("fatal", n, e, t)
}
var MYv=