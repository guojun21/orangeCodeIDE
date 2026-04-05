"use strict";

// Module: out-build/vs/platform/tooltipService/common/tooltipPipelines.js
// Offset: 954315 (bundle byte offset)
// Size: 1843 bytes
_r();
eOn = Fs ? "⌘" : "Ctrl";
lhh = [{
    name: "terminal.cmdk",
    showOn: {
        sequences: [{
            events: [
                ["*", "terminal.show", "terminal.focus", "terminal.type"],
                ["*", "chat.open", "chat.input.focus", "chat.insert_selection.terminal.empty"],
                ["*", "chat.type", "chat.paste", "_"], "chat.submit", ["*", "!", "chat.submit", "editor.paste", "_"], "chat.copy.codeblock", ["*", "!", "chat.submit", "editor.type", "editor.paste", "_"],
                ["*", "terminal.type", "_"], "terminal.paste"
            ],
            timeout_ms: 120000
        }],
        gracePeriod_ms: 2592000000
    },
    popup: {
        header: `Generate Terminal Command (${eOn} + K)`,
        subheader: `You can use ${eOn} + K to generate commands directly inside the terminal`,
        location: "terminal"
    },
    disableOn: {
        sequences: [{
            events: ["terminal.cmdk.submit"],
            timeout_ms: Infinity
        }],
        gracePeriod_ms: 2592000000
    }
}, {
    name: "editor.cmdk",
    showOn: {
        sequences: [{
            events: ["editor.copy", ["*", "chat.open", "chat.input.focus", "chat.insert_selection.editor.empty"],
                ["*", "chat.type", "_"],
                ["*", "chat.paste"],
                ["*", "chat.type", "_"], "chat.submit", ["*", "!", "chat.submit", "editor.paste", "_"], "chat.copy.codeblock", ["*", "!", "chat.submit", "terminal.paste", "terminal.type", "_"],
                ["*", "editor.type", "_"], "editor.paste"
            ],
            timeout_ms: 120000
        }, {
            events: ["chat.open", "chat.insert_selection.editor.non_empty", ["*", "_", "chat.input.focus"],
                ["*", "chat.type", "_"], "chat.submit", ["*", "!", "chat.submit", "terminal.paste", "_"], "chat.copy.codeblock", ["*", "!", "chat.submit", "terminal.paste", "terminal.type", "_"],
                ["*", "editor.type", "_"], "editor.paste"
            ],
            timeout_ms: 120000
        }],
        gracePeriod_ms: 2592000000
    },
    popup: {
        header: `Edit Code (${eOn} + K)`,
        subheader: `You can select code and edit it in your editor using ${eOn} + K`,
        location: "editor"
    },
    disableOn: {
        sequences: [{
            events: ["editor.cmdk.submit"],
            timeout_ms: Infinity
        }],
        gracePeriod_ms: 2592000000
    }
}];
