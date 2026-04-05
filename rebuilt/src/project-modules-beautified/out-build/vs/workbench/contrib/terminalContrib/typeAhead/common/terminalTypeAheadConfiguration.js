"use strict";

// Module: out-build/vs/workbench/contrib/terminalContrib/typeAhead/common/terminalTypeAheadConfiguration.js
// Offset: 31292253 (bundle byte offset)
// Size: 1218 bytes
Ht();
dbu = ["vim", "vi", "nano", "tmux"];
(function (n) {
  n.LocalEchoLatencyThreshold = "terminal.integrated.localEchoLatencyThreshold";
  n.LocalEchoEnabled = "terminal.integrated.localEchoEnabled";
  n.LocalEchoExcludePrograms = "terminal.integrated.localEchoExcludePrograms";
  n.LocalEchoStyle = "terminal.integrated.localEchoStyle";
})(nRf ||= {});
iRf = {
  "terminal.integrated.localEchoLatencyThreshold": {
    description: _(12065, null),
    type: "integer",
    minimum: -1,
    default: 30,
    tags: ["preview"]
  },
  "terminal.integrated.localEchoEnabled": {
    markdownDescription: _(12066, null, "`#terminal.integrated.localEchoLatencyThreshold#`"),
    type: "string",
    enum: ["on", "off", "auto"],
    enumDescriptions: [_(12067, null), _(12068, null), _(12069, null)],
    default: "off",
    tags: ["preview"]
  },
  "terminal.integrated.localEchoExcludePrograms": {
    description: _(12070, null),
    type: "array",
    items: {
      type: "string",
      uniqueItems: true
    },
    default: dbu,
    tags: ["preview"]
  },
  "terminal.integrated.localEchoStyle": {
    description: _(12071, null),
    default: "dim",
    anyOf: [{
      enum: ["bold", "dim", "italic", "underlined", "inverted", "#ff0000"]
    }, {
      type: "string",
      format: "color-hex"
    }],
    tags: ["preview"]
  }
};
