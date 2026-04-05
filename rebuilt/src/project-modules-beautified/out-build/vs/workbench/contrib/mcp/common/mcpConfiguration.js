"use strict";

// Module: out-build/vs/workbench/contrib/mcp/common/mcpConfiguration.js
// Offset: 31020852 (bundle byte offset)
// Size: 2155 bytes
Ht();
b8();
kgu();
KTf = "onMcpCollection:";
Egu = n => KTf + n;
YTf = {
  command: "node",
  args: ["my-mcp-server.js"],
  env: {}
};
(function (n) {
  n.ClaudeDesktop = "claude-desktop";
  n.Windsurf = "windsurf";
  n.CursorGlobal = "cursor-global";
  n.CursorWorkspace = "cursor-workspace";
})(ZTf ||= {});
zry = Object.keys({
  "claude-desktop": true,
  windsurf: true,
  "cursor-global": true,
  "cursor-workspace": true
});
XTf = {
  "claude-desktop": _(8752, null),
  windsurf: _(8753, null),
  "cursor-global": _(8754, null),
  "cursor-workspace": _(8755, null)
};
Ugn = "mcp";
eIf = "chat.mcp.discovery.enabled";
tIf = "chat.mcp.enabled";
nIf = {
  "mcp-server-time": {
    command: "python",
    args: ["-m", "mcp_server_time", "--local-timezone=America/Los_Angeles"],
    env: {}
  }
};
Q_i = {
  type: "object",
  additionalProperties: false,
  examples: [YTf],
  properties: {
    type: {
      type: "string",
      enum: ["stdio"],
      description: _(8756, null)
    },
    command: {
      type: "string",
      description: _(8757, null)
    },
    args: {
      type: "array",
      description: _(8758, null),
      items: {
        type: "string"
      }
    },
    envFile: {
      type: "string",
      description: _(8759, null),
      examples: ["${workspaceFolder}/.env"]
    },
    env: {
      description: _(8760, null),
      additionalProperties: {
        anyOf: [{
          type: "null"
        }, {
          type: "string"
        }, {
          type: "number"
        }]
      }
    }
  }
};
Vry = {
  id: ygu,
  type: "object",
  title: _(8761, null),
  allowTrailingCommas: true,
  allowComments: true,
  additionalProperties: false,
  properties: {
    servers: {
      examples: [nIf],
      additionalProperties: {
        oneOf: [Q_i, {
          type: "object",
          additionalProperties: false,
          required: ["url", "type"],
          examples: [{
            type: "sse",
            url: "http://localhost:3001",
            headers: {}
          }],
          properties: {
            type: {
              type: "string",
              enum: ["sse"],
              description: _(8762, null)
            },
            url: {
              type: "string",
              format: "uri",
              description: _(8763, null)
            },
            env: {
              description: _(8764, null),
              additionalProperties: {
                type: "string"
              }
            }
          }
        }]
      }
    },
    inputs: eSa.definitions.inputs
  }
};
Kry = {
  extensionPoint: "modelContextServerCollections",
  activationEventsGenerator(n, e) {
    for (const t of n) {
      if (t.id) {
        e.push(Egu(t.id));
      }
    }
  },
  jsonSchema: {
    description: _(8765, null),
    type: "array",
    defaultSnippets: [{
      body: [{
        id: "",
        label: ""
      }]
    }],
    items: {
      additionalProperties: false,
      type: "object",
      defaultSnippets: [{
        body: {
          id: "",
          label: ""
        }
      }],
      properties: {
        id: {
          description: _(8766, null),
          type: "string"
        },
        label: {
          description: _(8767, null),
          type: "string"
        }
      }
    }
  }
};
