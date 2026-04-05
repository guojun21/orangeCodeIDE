"use strict";

// Module: out-build/vs/editor/contrib/semanticTokens/common/getSemanticTokens.js
// Offset: 25574762 (bundle byte offset)
// Size: 2182 bytes
Po();
_s();
Yn();
hd();
hs();
Js();
Lwg();
ts();
Cm();
Uwg = class {
  constructor(n, e, t) {
    this.provider = n;
    this.tokens = e;
    this.error = t;
  }
};
$wg = class {
  constructor(n, e) {
    this.provider = n;
    this.tokens = e;
  }
};
Ss.registerCommand("_provideDocumentSemanticTokensLegend", async (n, ...e) => {
  const [t] = e;
  Kd(t instanceof je);
  const i = n.get(Il).getModel(t);
  if (!i) {
    return;
  }
  const {
    documentSemanticTokensProvider: r
  } = n.get($u);
  const s = RkA(r, i);
  if (s) {
    return s[0].getLegend();
  } else {
    return n.get(fr).executeCommand("_provideDocumentRangeSemanticTokensLegend", t);
  }
});
Ss.registerCommand("_provideDocumentSemanticTokens", async (n, ...e) => {
  const [t] = e;
  Kd(t instanceof je);
  const i = n.get(Il).getModel(t);
  if (!i) {
    return;
  }
  const {
    documentSemanticTokensProvider: r
  } = n.get($u);
  if (!Mwg(r, i)) {
    return n.get(fr).executeCommand("_provideDocumentRangeSemanticTokens", t, i.getFullModelRange());
  }
  const s = await Fwg(r, i, null, null, Cs.None);
  if (!s) {
    return;
  }
  const {
    provider: o,
    tokens: a
  } = s;
  if (!a || !Aua(a)) {
    return;
  }
  const l = Bwg({
    id: 0,
    type: "full",
    data: a.data
  });
  if (a.resultId) {
    o.releaseDocumentSemanticTokens(a.resultId);
  }
  return l;
});
Ss.registerCommand("_provideDocumentRangeSemanticTokensLegend", async (n, ...e) => {
  const [t, i] = e;
  Kd(t instanceof je);
  const r = n.get(Il).getModel(t);
  if (!r) {
    return;
  }
  const {
    documentRangeSemanticTokensProvider: s
  } = n.get($u);
  const o = Owg(s, r);
  if (o.length === 0) {
    return;
  }
  if (o.length === 1) {
    return o[0].getLegend();
  }
  if (!i || !Zt.isIRange(i)) {
    console.warn("provideDocumentRangeSemanticTokensLegend might be out-of-sync with provideDocumentRangeSemanticTokens unless a range argument is passed in");
    return o[0].getLegend();
  }
  const a = await Ojl(s, r, Zt.lift(i), Cs.None);
  if (a) {
    return a.provider.getLegend();
  }
});
Ss.registerCommand("_provideDocumentRangeSemanticTokens", async (n, ...e) => {
  const [t, i] = e;
  Kd(t instanceof je);
  Kd(Zt.isIRange(i));
  const r = n.get(Il).getModel(t);
  if (!r) {
    return;
  }
  const {
    documentRangeSemanticTokensProvider: s
  } = n.get($u);
  const o = await Ojl(s, r, Zt.lift(i), Cs.None);
  if (!!o && !!o.tokens) {
    return Bwg({
      id: 0,
      type: "full",
      data: o.tokens.data
    });
  }
});
