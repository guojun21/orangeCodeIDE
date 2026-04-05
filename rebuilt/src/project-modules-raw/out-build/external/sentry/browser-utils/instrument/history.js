// Module: out-build/external/sentry/browser-utils/instrument/history.js
// Offset: 228747 (bundle byte offset)
// Size: 606 bytes

lm(), AY()
}
});
function P2n(n){
  const e=N2n[n];
  if(e)return e;
  let t=zC[n];
  if(uMo(t))return N2n[n]=t.bind(zC);
  const i=zC.document;
  if(i&&typeof i.createElement=="function")try{
    const r=i.createElement("iframe");
    r.hidden=!0, i.head.appendChild(r);
    const s=r.contentWindow;
    s?.[n]&&(t=s[n]), i.head.removeChild(r)
  }
  catch(r){
    gze&&Jo.warn(`Could not create sandbox iframe for ${n} check, bailing to window.${n}: `, r)
  }
  return t&&(N2n[n]=t.bind(zC))
}
function gnh(n){
  N2n[n]=void 0
}
function L2n(...n){
  return P2n("setTimeout")(...n)
}
var N2n, OeA=