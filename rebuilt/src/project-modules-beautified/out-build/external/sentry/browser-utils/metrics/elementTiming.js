"use strict";

// Module: out-build/external/sentry/browser-utils/metrics/elementTiming.js
// Offset: 225444 (bundle byte offset)
// Size: 2647 bytes
lm();
AFt();
jpt();
dnh = ({
  entries: n
}) => {
  const e = HP();
  const t = e ? qP(e) : undefined;
  const i = t ? jA(t).description : ry().getScopeData().transactionName;
  n.forEach(r => {
    const s = r;
    if (!s.identifier) {
      return;
    }
    const o = s.name;
    const a = s.renderTime;
    const l = s.loadTime;
    const [u, d] = l ? [m9(l), "load-time"] : a ? [m9(a), "render-time"] : [MR(), "entry-emission"];
    const m = o === "image-paint" ? m9(Math.max(0, (a ?? 0) - (l ?? 0))) : 0;
    const p = {
      [w1]: "auto.ui.browser.elementtiming",
      [HE]: "ui.elementtiming",
      [c2]: "component",
      "sentry.span_start_time_source": d,
      "sentry.transaction_name": i,
      "element.id": s.id,
      "element.type": s.element?.tagName?.toLowerCase() || "unknown",
      "element.size": s.naturalWidth && s.naturalHeight ? `${s.naturalWidth}x${s.naturalHeight}` : undefined,
      "element.render_time": a,
      "element.load_time": l,
      "element.url": s.url || undefined,
      "element.identifier": s.identifier,
      "element.paint_type": o
    };
    X3e({
      name: `element[${s.identifier}]`,
      attributes: p,
      startTime: u,
      onlyIfParent: true
    }, g => {
      g.end(u + m);
    });
  });
};
