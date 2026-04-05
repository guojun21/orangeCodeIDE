// Module: out-build/vs/platform/telemetry/common/commonProperties.js
// Offset: 28242908 (bundle byte offset)
// Size: 2474 bytes

_r(), S6(), Bc()
}
});
function knt(n, e){
  return!e.isBuilt&&!e.disableTelemetry?!0:!(e.disableTelemetry||!n.enableTelemetry)
}
function Eau(n, e){
  return e.extensionTestsLocationURI?!0:!(e.isBuilt||e.disableTelemetry||n.enableTelemetry&&n.aiConfig?.ariaKey)
}
function Ent(n){
  const e=n.getValue(zze), t=n.getValue(Skc);
  if(n.getValue(s4n)===!1||t===!1)return 0;
  switch(e??"all"){
    case"all":return 3;
    case"off":return 0
  }
}
function fef(n){
  if(!n)return"none";
  const e=QZ(n);
  return yef.has(e)?e:"other"
}
function U9A(n, e){
  const t=n.msftInternalDomains||[], i=e.getValue("telemetry.internalTesting");
  return O9A(t)||i
}
function $9A(n){
  return[n.appRoot, n.extensionsPath, n.userHome.fsPath, n.tmpDir.fsPath, n.userDataPath]
}
function q9A(n, e){
  if(!n||!n.includes("/")&&!n.includes("\\"))return n;
  let t=n;
  const i=[];
  for(const a of e)for(;
  ;
  ){
    const l=a.exec(n);
    if(!l)break;
    i.push([l.index, a.lastIndex])
  }
  const r=/^[\\\/]?(node_modules|node_modules\.asar)[\\\/]/, s=/(file:\/\/)?([a-zA-Z]:(\\\\|\\|\/)|(\\\\|\\|\/))?([\w-\._]+(\\\\|\\|\/))+[\w-\._]*/g;
  let o=0;
  for(t="";
  ;
  ){
    const a=s.exec(n);
    if(!a)break;
    const l=i.some(([u, d])=>a.index<d&&u<s.lastIndex);
    !r.test(a[0])&&!l&&(t+=n.substring(o, a.index)+"<REDACTED: user-file-path>", o=s.lastIndex)
  }
  return o<n.length&&(t+=n.substr(o)), t
}
function H9A(n){
  if(!n)return n;
  const e=[{
    label:"Google API Key", regex:/AIza[A-Za-z0-9_\\\-]{
      35
    }
    /
  }, {
    label:"Slack Token", regex:/xox[pbar]\-[A-Za-z0-9]/
  }, {
    label:"GitHub Token", regex:/(gh[psuro]_[a-zA-Z0-9]{
      36
    }
    |github_pat_[a-zA-Z0-9]{
      22
    }
    _[a-zA-Z0-9]{
      59
    })/
  }, {
    label:"Generic Secret", regex:/(key|token|sig|secret|signature|password|passwd|pwd|android:value)[^a-zA-Z0-9]/i
  }, {
    label:"CLI Credentials", regex:/((login|psexec|(certutil|psexec)\.exe).{
      1,50
    }
    (\s-u(ser(name)?)?\s+.{
      3,100
    })?\s-(admin|user|vm|root)?p(ass(word)?)?\s+["']?[^$\-\/\s]|(^|[\s\r\n\\])net(\.exe)?.{1,5}(user\s+|share\s+\/user:| user -? secrets ? set) \s + [^ $\s \/])/},{label:"Microsoft Entra ID",regex:/eyJ(?:0eXAiOiJKV1Qi|hbGci|[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.)/},{label:"Email",regex:/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/}];for(const t of e)if(t.regex.test(n))return`<REDACTED: ${t.label}>`;return n}function bef(n,e){return yOt(n,t=>{if(t instanceof X$e||Object.hasOwnProperty.call(t,"isTrustedTelemetryValue"))return t.value;if(typeof t=="string"){let i=t.replaceAll("%20"," ");i=q9A(i,e);for(const r of e)i=i.replace(r,"");return i=H9A(i),i}})}var X$e,vef,Aef,tpn,Bva,yef,l8=