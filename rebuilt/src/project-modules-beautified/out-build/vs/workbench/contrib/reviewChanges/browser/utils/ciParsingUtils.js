"use strict";

// Module: out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js
// Offset: 33725670 (bundle byte offset)
// Size: 1391 bytes
Ae({
  "out-build/vs/workbench/contrib/reviewChanges/browser/utils/ciParsingUtils.js"() {
    "use strict";
  }
});
function bUf(n) {
  if (MUf.some(e => e.test(n))) {
    return false;
  } else {
    return NUf.some(e => e.test(n));
  }
}
function h0u(n, e) {
  if (/\.vercel\.app/i.test(e)) {
    return "Vercel Preview";
  } else if (/\.netlify\.(app|com)/i.test(e)) {
    return "Netlify Preview";
  } else if (/\.railway\.app/i.test(e) || /\.up\.railway\.app/i.test(e)) {
    return "Railway Preview";
  } else if (/\.onrender\.com/i.test(e)) {
    return "Render Preview";
  } else if (/\.herokuapp\.com/i.test(e)) {
    return "Heroku Preview";
  } else if (/\.amplifyapp\.com/i.test(e)) {
    return "Amplify Preview";
  } else if (/\.pages\.dev/i.test(e) || /\.workers\.dev/i.test(e)) {
    return "Cloudflare Preview";
  } else if (/\.surge\.sh/i.test(e)) {
    return "Surge Preview";
  } else if (/\.fly\.dev/i.test(e)) {
    return "Fly.io Preview";
  } else if (/\.deno\.dev/i.test(e)) {
    return "Deno Preview";
  } else {
    return n.replace(/[-_]/g, " ").trim() || "Preview";
  }
}
function smy(n, e) {
  const t = [];
  for (const s of n) {
    if (s.__typename === "CheckRun") {
      if (s.detailsUrl && bUf(s.detailsUrl)) {
        t.push({
          name: h0u(s.name, s.detailsUrl),
          url: s.detailsUrl
        });
      }
    } else if (s.__typename === "StatusContext" && s.targetUrl && bUf(s.targetUrl)) {
      t.push({
        name: h0u(s.context, s.targetUrl),
        url: s.targetUrl
      });
    }
  }
  console.debug("[GithubPRService] Deployments received:", e.length);
  for (const s of e) {
    const o = s.latestStatus?.environmentUrl;
    if (o) {
      const a = h0u(s.environment, o);
      t.push({
        name: a,
        url: o
      });
    }
  }
  const i = [];
  const r = new Set();
  for (const s of t) {
    if (!r.has(s.url)) {
      r.add(s.url);
      i.push(s);
    }
  }
  return i;
}
