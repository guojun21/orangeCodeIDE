"use strict";

// Module: out-build/vs/workbench/contrib/notebook/common/notebookDiff.js
// Offset: 33628710 (bundle byte offset)
// Size: 1189 bytes
Ae({
  "out-build/vs/workbench/contrib/notebook/common/notebookDiff.js"() {
    "use strict";
  }
});
function Shy(n, e, t) {
  const i = t.changes;
  for (let r = 0; r < t.changes.length - 1; r++) {
    const s = i[r];
    const o = i[r + 1];
    const a = s.originalStart;
    const l = s.modifiedStart;
    if (s.originalLength === 1 && s.modifiedLength === 0 && o.originalStart === a + 2 && o.originalLength === 0 && o.modifiedStart === l + 1 && o.modifiedLength === 1 && n.cells[a].getHashValue() === e.cells[l + 1].getHashValue() && n.cells[a + 1].getHashValue() === e.cells[l].getHashValue()) {
      s.originalStart = a;
      s.originalLength = 0;
      s.modifiedStart = l;
      s.modifiedLength = 1;
      o.originalStart = a + 1;
      o.originalLength = 1;
      o.modifiedStart = l + 2;
      o.modifiedLength = 0;
      r++;
    }
  }
}
function khy(n, e, t) {
  if (n.length !== e.length) {
    return false;
  }
  const i = t.original.notebook;
  const r = t.modified.notebook;
  for (let s = 0; s < e.length; s++) {
    const o = n[s];
    const a = e[s];
    if (o.type !== a.type) {
      return false;
    }
    switch (o.type) {
      case "delete":
        {
          if (i.cells[o.originalCellIndex].handle !== a.original?.handle) {
            return false;
          }
          continue;
        }
      case "insert":
        {
          if (r.cells[o.modifiedCellIndex].handle !== a.modified?.handle) {
            return false;
          }
          continue;
        }
      default:
        {
          if (i.cells[o.originalCellIndex].handle !== a.original?.handle || r.cells[o.modifiedCellIndex].handle !== a.modified?.handle) {
            return false;
          }
          continue;
        }
    }
  }
  return true;
}
