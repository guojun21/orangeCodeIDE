"use strict";

// Module: out-build/vs/workbench/contrib/composer/browser/components/cssInspector/changeTracking.js
// Offset: 31919844 (bundle byte offset)
// Size: 2742 bytes
i7e = n => `${n.elementUniqueId?.trim() || n.elementPath?.trim() || n.elementId?.trim() || n.selector?.trim() || `${n.elementTagName ?? "element"}
:${n.elementClassName ?? ""}
`}::${n.property}`;
_vu = (n, e) => {
  const t = i7e(e);
  let i = n.findIndex(s => i7e(s) === t);
  if (i < 0 && e.selector) {
    i = n.findIndex(s => s.property === e.property && s.selector === e.selector);
  }
  if (i >= 0) {
    const s = n[i];
    if (s.newValue === e.newValue) {
      return {
        records: n,
        changed: false
      };
    }
    if ((s.originalValue ?? s.oldValue) === e.newValue) {
      return {
        records: [...n.slice(0, i), ...n.slice(i + 1)],
        changed: true
      };
    }
    const a = {
      ...s,
      newValue: e.newValue,
      timestamp: e.timestamp,
      domOrderChange: e.domOrderChange ?? s.domOrderChange,
      changeType: e.changeType ?? s.changeType,
      propChange: e.propChange ?? s.propChange,
      originalValue: s.originalValue ?? s.oldValue
    };
    const l = [...n];
    l[i] = a;
    return {
      records: l,
      changed: true
    };
  }
  if (e.oldValue === e.newValue) {
    return {
      records: n,
      changed: false
    };
  }
  const r = {
    ...e,
    originalValue: e.originalValue ?? e.oldValue
  };
  return {
    records: [...n, r],
    changed: true
  };
};
