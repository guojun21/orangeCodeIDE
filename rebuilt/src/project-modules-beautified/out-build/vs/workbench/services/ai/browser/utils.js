"use strict";

// Module: out-build/vs/workbench/services/ai/browser/utils.js
// Offset: 28035311 (bundle byte offset)
// Size: 1440 bytes
qp();
Tme();
zr();
Hl();
Rou = n => n.range ? new WB({
  relativeWorkspacePath: n.relativeWorkspacePath,
  contents: n.contents,
  range: {
    startPosition: {
      line: Of(n.range.startLineNumber),
      column: Of(n.range.startColumn)
    },
    endPosition: {
      line: Of(n.range.endLineNumber),
      column: Of(n.range.endColumn)
    }
  }
}) : new WB({
  relativeWorkspacePath: n.relativeWorkspacePath,
  contents: n.contents
});
