"use strict";

// Module: out-build/vs/editor/contrib/gotoSymbol/browser/goToSymbol.js
// Offset: 24715007 (bundle byte offset)
// Size: 2311 bytes
Vs();
Po();
_s();
zr();
Cu();
Cm();
eCt();
VA();
RY("_executeDefinitionProvider", (n, e, t) => {
  const i = n.get($u);
  const r = F1e(i.definitionProvider, e, t, false, Cs.None);
  return RAe(() => r);
});
RY("_executeDefinitionProvider_recursive", (n, e, t) => {
  const i = n.get($u);
  const r = F1e(i.definitionProvider, e, t, true, Cs.None);
  return RAe(() => r);
});
RY("_executeTypeDefinitionProvider", (n, e, t) => {
  const i = n.get($u);
  const r = pca(i.typeDefinitionProvider, e, t, false, Cs.None);
  return RAe(() => r);
});
RY("_executeTypeDefinitionProvider_recursive", (n, e, t) => {
  const i = n.get($u);
  const r = pca(i.typeDefinitionProvider, e, t, true, Cs.None);
  return RAe(() => r);
});
RY("_executeDeclarationProvider", (n, e, t) => {
  const i = n.get($u);
  const r = fGl(i.declarationProvider, e, t, false, Cs.None);
  return RAe(() => r);
});
RY("_executeDeclarationProvider_recursive", (n, e, t) => {
  const i = n.get($u);
  const r = fGl(i.declarationProvider, e, t, true, Cs.None);
  return RAe(() => r);
});
RY("_executeReferenceProvider", (n, e, t) => {
  const i = n.get($u);
  const r = hpi(i.referenceProvider, e, t, false, false, Cs.None);
  return RAe(() => r);
});
RY("_executeReferenceProvider_recursive", (n, e, t) => {
  const i = n.get($u);
  const r = hpi(i.referenceProvider, e, t, false, true, Cs.None);
  return RAe(() => r);
});
RY("_executeImplementationProvider", (n, e, t) => {
  const i = n.get($u);
  const r = dpi(i.implementationProvider, e, t, false, Cs.None);
  return RAe(() => r);
});
RY("_executeImplementationProvider_recursive", (n, e, t) => {
  const i = n.get($u);
  const r = dpi(i.implementationProvider, e, t, true, Cs.None);
  return RAe(() => r);
});
