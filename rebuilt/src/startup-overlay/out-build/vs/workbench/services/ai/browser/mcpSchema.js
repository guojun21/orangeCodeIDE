"use strict";

// Module: out-build/vs/workbench/services/ai/browser/mcpSchema.js
// Offset: 30186585 (bundle byte offset)
// Size: 3018 bytes
HCf = "vscode://schemas/mcp";
JCf = "vscode://schemas/mcp-config";
Qhu = {
  type: ["object"],
  description: "Configuration for MCP (Model Control Protocol) servers",
  additionalProperties: {
    type: ["object"],
    oneOf: [{
      type: ["object"],
      additionalProperties: false,
      properties: {
        command: {
          type: ["string"],
          description: "Command to start the stdio-based MCP server"
        },
        args: {
          type: ["array"],
          description: "Arguments to pass to the command",
          items: {
            type: ["string"]
          }
        },
        env: {
          type: ["object"],
          description: "Environment variables to set for the server process",
          additionalProperties: {
            type: ["string"]
          }
        },
        envFile: {
          type: ["string"],
          description: "Path to .env file to load environment variables from (supports variable resolution like ${workspaceFolder}/.env)"
        },
        enabledTools: {
          type: ["array"],
          description: "List of tool names that are enabled for this server. If not specified, all tools are enabled by default.",
          items: {
            type: ["string"]
          }
        }
      },
      required: ["command"]
    }, {
      type: ["object"],
      additionalProperties: false,
      properties: {
        url: {
          type: ["string"],
          description: "URL of the SSE-based MCP server"
        },
        enabledTools: {
          type: ["array"],
          description: "List of tool names that are enabled for this server. If not specified, all tools are enabled by default.",
          items: {
            type: ["string"]
          }
        },
        headers: {
          type: ["object"],
          description: "Optional HTTP headers to include with every request to the server",
          additionalProperties: {
            type: ["string"]
          }
        },
        auth: {
          type: ["object"],
          description: "Static OAuth client credentials for this server (optional)",
          properties: {
            CLIENT_ID: {
              type: ["string"],
              description: "OAuth 2.0 Client ID"
            },
            CLIENT_SECRET: {
              type: ["string"],
              description: "OAuth 2.0 Client Secret (optional)"
            },
            scopes: {
              type: ["array"],
              items: {
                type: ["string"]
              },
              description: "OAuth 2.0 scopes to request (optional, auto-fetched from server if not provided)"
            }
          },
          required: ["CLIENT_ID"],
          additionalProperties: false
        }
      },
      required: ["url"]
    }],
    errorMessage: "Must provide either 'command' for stdio-based server or 'url' for SSE-based server"
  }
};
GCf = {
  type: ["object"],
  allowComments: false,
  allowTrailingCommas: false,
  additionalProperties: false,
  properties: {
    mcpServers: Qhu
  },
  required: ["mcpServers"],
  defaultSnippets: [{
    label: "New MCP Configuration",
    description: "Creates a new MCP configuration with example servers",
    body: {
      mcpServers: {
        "example-stdio-server": {
          command: "python server.py",
          args: ["--port", "8080"],
          env: {
            DEBUG: "true"
          }
        },
        "example-stdio-server-with-envfile": {
          command: "python server.py",
          envFile: "${workspaceFolder}/.env",
          env: {
            DEBUG: "true"
          }
        },
        "example-sse-server": {
          url: "http://localhost:3000/sse"
        }
      }
    }
  }]
};
WCf = {
  type: ["object"],
  additionalProperties: false,
  properties: {
    $schema: {
      type: ["string"],
      description: "The schema to use for this file"
    },
    mcpServers: Qhu
  },
  required: ["mcpServers"]
};
