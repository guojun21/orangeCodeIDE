// Module: out-build/vs/workbench/contrib/reviewChanges/browser/components/CursorDiffPane.js
// Offset: 34162256 (bundle byte offset)
// Size: 2819 bytes

Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ie(), Ti(), ri(), NSe(), FF(), es(), ngy(), CD(), c7(), oBa(), zqf(), ECu(), TCu(), rBa(), $7f(), iBa(), W7f=qe("<div class=cursor-blame-tabs><button>All Changes</button><button> Chats"), Q7f=qe("<div class=cursor-blame-section-header><div>"), j7f=qe("<div class=cursor-blame-section-title>"), z7f=qe("<div class=agent-layout-multi-diff-error-container><span>"), V7f=qe("<div class=agent-layout-multi-diff-loading-container>"), K7f=qe('<div class="agent-layout-multi-diff-container agent-layout"tabindex=0><div class=review-pr-action-bar><div class=review-pr-action-bar-left></div><div class=review-pr-action-bar-right></div></div><div class=agent-layout-multi-diff-content-area>'), Y7f=qe("<div class=cursor-blame-section-header><div class=cursor-blame-section-title>")
}
});
function Z7f(n){
  typeof n!="number"&&(n=n.getTime());
  const e=Math.round((new Date().getTime()-n)/1e3);
  return e<30?"now":e<uBa?`${e}s`:e<dBa?`${Math.floor(e/uBa)}min`:e<wvn?`${Math.floor(e/dBa)}h`:e<NCu?`${Math.floor(e/wvn)}d`:e<MCu?`${Math.floor(e/NCu)}w`:e<FCu?`${Math.round(e/MCu)}mo`:`${Math.round(e/FCu)}y`
}
function yvn(n){
  return!n||n===eHf
}
function RCu(n){
  const e=n.inspect("cursor.blame.hoverDelay"), t=e.workspaceFolderValue??e.workspaceValue??e.userRemoteValue??e.userLocalValue??e.userValue;
  if(t!==void 0)return t;
  const i=n.getValue("editor.hover.delay")??300;
  return Math.max(i, 500)
}
function X7f(n){
  if(!n)return n;
  let e=n.replace(/!\[([^\[\]]*(?:\[[^\]]*\][^\[\]]*)*)\]\(([^\)]+)\)/g, (t, i, r)=>`[${i&&i.trim()?i.trim():"View image"}](${r})`);
  return e=e.replace(/<picture[^>]*>[\s\S]*?<source[^>]*srcset=["']([^"']+)["'][^>]*>[\s\S]*?<\/picture>/gi, (t, i)=>`[View image](${i.split(/[\s,]/)[0]})`), e=e.replace(/<picture[^>]*>[\s\S]*?<img[^>]*src=["']([^"']+)["'][^>]*>[\s\S]*?<\/picture>/gi, (t, i)=>`[View image](${i})`), e=e.replace(/<img[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*\/?>/gi, (t, i, r)=>`[${r&&r.trim()?r.trim():"View image"}](${i})`), e=e.replace(/<img[^>]*alt=["']([^"']*)["'][^>]*src=["']([^"']+)["'][^>]*\/?>/gi, (t, i, r)=>`[${i&&i.trim()?i.trim():"View image"}](${r})`), e=e.replace(/<img[^>]*src=["']([^"']+)["'][^>]*\/?>/gi, (t, i)=>`[View image](${i})`), e
}
function PCu(n){
  if(n.includes("github"))try{
    let e=n;
    e.match(/^[^@]+@[^:]+:/)?e=e.replace(/^[^@]+@([^:]+):/, "https://$1/"):e.startsWith("ssh://")&&(e=e.replace(/^ssh:\/\/[^@]+@([^/:]+)(:\d+)?\//, "https://$1/"));
    const t=new URL(e);
    return t.hostname.includes("github")?t.hostname:void 0
  }
  catch{
    const e=n.match(/(?:https?:\/\/|ssh:\/\/)?(?:[^@]+@)?([^/:]+)/), t=e?e[1]:void 0;
    return t&&t.includes("github")?t:void 0
  }
}
function LCu(n, e){
  const t=PCu(n);
  if(!t)return;
  const i=y7e(n);
  if(i)return`https://${t}/${i}/commit/${e}`
}
var uBa, dBa, wvn, NCu, MCu, FCu, eHf, hBa=