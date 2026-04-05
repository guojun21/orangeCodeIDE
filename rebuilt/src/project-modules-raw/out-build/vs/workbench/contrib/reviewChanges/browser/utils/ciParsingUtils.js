// Module: out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js
// Offset: 33725670 (bundle byte offset)
// Size: 1391 bytes

Ae({
  "out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js"(){
    "use strict"
  }
});
function bUf(n){
  return MUf.some(e=>e.test(n))?!1:NUf.some(e=>e.test(n))
}
function h0u(n, e){
  return/\.vercel\.app/i.test(e)?"Vercel Preview":/\.netlify\.(app|com)/i.test(e)?"Netlify Preview":/\.railway\.app/i.test(e)||/\.up\.railway\.app/i.test(e)?"Railway Preview":/\.onrender\.com/i.test(e)?"Render Preview":/\.herokuapp\.com/i.test(e)?"Heroku Preview":/\.amplifyapp\.com/i.test(e)?"Amplify Preview":/\.pages\.dev/i.test(e)||/\.workers\.dev/i.test(e)?"Cloudflare Preview":/\.surge\.sh/i.test(e)?"Surge Preview":/\.fly\.dev/i.test(e)?"Fly.io Preview":/\.deno\.dev/i.test(e)?"Deno Preview":n.replace(/[-_]/g, " ").trim()||"Preview"
}
function smy(n, e){
  const t=[];
  for(const s of n)s.__typename==="CheckRun"?s.detailsUrl&&bUf(s.detailsUrl)&&t.push({
    name:h0u(s.name, s.detailsUrl), url:s.detailsUrl
  }):s.__typename==="StatusContext"&&s.targetUrl&&bUf(s.targetUrl)&&t.push({
    name:h0u(s.context, s.targetUrl), url:s.targetUrl
  });
  console.debug("[GithubPRService] Deployments received:", e.length);
  for(const s of e){
    const o=s.latestStatus?.environmentUrl;
    if(o){
      const a=h0u(s.environment,o);
      t.push({
        name:a,url:o
      })
    }
  }
  const i=[], r=new Set;
  for(const s of t)r.has(s.url)||(r.add(s.url), i.push(s));
  return i
}
var dpe, EX, vUf, zIa, AUf, m0u, yUf, wUf, _Uf, CUf, SUf, kUf, EUf, xUf, TUf, IUf, DUf, BUf, RUf, PUf, LUf, NUf, MUf, zki, w7e, VIa, Mrt=