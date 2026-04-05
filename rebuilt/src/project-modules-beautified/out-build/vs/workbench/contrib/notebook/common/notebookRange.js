"use strict";

// Module: out-build/vs/workbench/contrib/notebook/common/notebookRange.js
// Offset: 25015438 (bundle byte offset)
// Size: 230 bytes
Ae({
    "out-build/vs/workbench/contrib/notebook/common/notebookRange.js"() {
        "use strict";
    }
});

function* Efg(n) {
    for (const e of cE.lexer(n, {
            gfm: true
        })) {
        if (e.type === "heading") {
            yield {
                depth: e.depth,
                text: lbt({
                    value: e.raw
                }).trim()
            };
        }
    }
}
