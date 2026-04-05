// Module: out-build/vs/base/common/iconLabels.js
// Offset: 2037181 (bundle byte offset)
// Size: 1602 bytes

Q_(), oa(), Jr(), b_h="$(", q3o=new RegExp(`\\$\\(${Qt.iconNameExpression}(?:${Qt.iconModifierExpression})?\\)`, "g"), v_h=new RegExp(`(\\\\)?${q3o.source}`, "g"), A_h=new RegExp(`\\\\${q3o.source}`, "g"), y_h=new RegExp(`(\\s)?(\\\\)?${q3o.source}(\\s)?`, "g"), H3o=new RegExp(`\\$\\(${Qt.iconNameCharacter}+\\)`, "g")
}
});
function y3t(n){
  return bT(n)?!n.value:Array.isArray(n)?n.every(y3t):!0
}
function bT(n){
  return n instanceof _c?!0:n&&typeof n=="object"?typeof n.value=="string"&&(typeof n.isTrusted=="boolean"||typeof n.isTrusted=="object"||n.isTrusted===void 0)&&(typeof n.supportThemeIcons=="boolean"||n.supportThemeIcons===void 0):!1
}
function XIc(n, e){
  return n===e?!0:!n||!e?!1:n.value===e.value&&n.isTrusted===e.isTrusted&&n.supportThemeIcons===e.supportThemeIcons&&n.supportHtml===e.supportHtml&&(n.baseUri===e.baseUri||!!n.baseUri&&!!e.baseUri&&Zc(je.from(n.baseUri), je.from(e.baseUri)))
}
function obt(n){
  return n.replace(/[\\`*_{}[\]()#+\-!~]/g,"\\$&")}function UuA(n,e){const t=n.match(/^`+/gm)?.reduce((r, s)=>r.length>s.length?r:s).length??0, i=t>=3?t+1:3;
  return[`${"`".repeat(i)}${e}`,n,`${"`".repeat(i)}`].join(`
`)
}
function J3o(n){
  return n.replace(/"/g,"&quot;
  ")}function eDc(n){return n&&n.replace(/\\([\\`*_{}[\]()#+\-.!~])/g,"$1")}function w_h(n){const e=[],t=n.split("|").map(r=>r.trim());n=t[0];const i=t[1];if(i){const r=/height=(\d+)/.exec(i),s=/width=(\d+)/.exec(i),o=r?r[1]:"",a=s?s[1]:"",l=isFinite(parseInt(a)),u=isFinite(parseInt(o));l&&e.push(`width="${
    a
  }
  "`),u&&e.push(`height="${
    o
  }
  "`)}return{href:n,dimensions:e}}var __h,_c,tg=