"use strict";

// Module: out-build/vs/workbench/services/configurationResolver/common/configurationResolverSchema.js
// Offset: 31019210 (bundle byte offset)
// Size: 1642 bytes
Ht();
ZCa = _(13745, null);
XCa = _(13746, null);
Cgu = _(13747, null);
Sgu = _(13748, null);
eSa = {
  definitions: {
    inputs: {
      type: "array",
      description: _(13749, null),
      items: {
        oneOf: [{
          type: "object",
          required: ["id", "type", "description"],
          additionalProperties: false,
          properties: {
            id: {
              type: "string",
              description: ZCa
            },
            type: {
              type: "string",
              description: XCa,
              enum: ["promptString"],
              enumDescriptions: [_(13750, null)]
            },
            description: {
              type: "string",
              description: Cgu
            },
            default: {
              type: "string",
              description: Sgu
            },
            password: {
              type: "boolean",
              description: _(13751, null)
            }
          }
        }, {
          type: "object",
          required: ["id", "type", "description", "options"],
          additionalProperties: false,
          properties: {
            id: {
              type: "string",
              description: ZCa
            },
            type: {
              type: "string",
              description: XCa,
              enum: ["pickString"],
              enumDescriptions: [_(13752, null)]
            },
            description: {
              type: "string",
              description: Cgu
            },
            default: {
              type: "string",
              description: Sgu
            },
            options: {
              type: "array",
              description: _(13753, null),
              items: {
                oneOf: [{
                  type: "string"
                }, {
                  type: "object",
                  required: ["value"],
                  additionalProperties: false,
                  properties: {
                    label: {
                      type: "string",
                      description: _(13754, null)
                    },
                    value: {
                      type: "string",
                      description: _(13755, null)
                    }
                  }
                }]
              }
            }
          }
        }, {
          type: "object",
          required: ["id", "type", "command"],
          additionalProperties: false,
          properties: {
            id: {
              type: "string",
              description: ZCa
            },
            type: {
              type: "string",
              description: XCa,
              enum: ["command"],
              enumDescriptions: [_(13756, null)]
            },
            command: {
              type: "string",
              description: _(13757, null)
            },
            args: {
              oneOf: [{
                type: "object",
                description: _(13758, null)
              }, {
                type: "array",
                description: _(13759, null)
              }, {
                type: "string",
                description: _(13760, null)
              }]
            }
          }
        }]
      }
    }
  }
};
