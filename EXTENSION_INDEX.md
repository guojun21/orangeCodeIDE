# Extension Index

这份索引只列 **Cursor 内置扩展层**。

如果你想看“插件面”而不是宿主本体，先看这里。

## 扩展源码入口

1. [src/extensions/cursor-agent-exec/index.js](src/extensions/cursor-agent-exec/index.js)
2. [src/extensions/cursor-browser-automation/index.js](src/extensions/cursor-browser-automation/index.js)
3. [src/extensions/cursor-mcp/index.js](src/extensions/cursor-mcp/index.js)
4. [src/extensions/cursor-retrieval/index.js](src/extensions/cursor-retrieval/index.js)
5. [src/extensions/cursor-always-local/index.js](src/extensions/cursor-always-local/index.js)
6. [src/extensions/cursor-socket/index.js](src/extensions/cursor-socket/index.js)

## 它们在运行时的落点

这些源码对应的运行时输出，会落到：

- `extensions/cursor-agent-exec/dist/main.js`
- `extensions/cursor-browser-automation/dist/extension.js`
- `extensions/cursor-mcp/dist/main.js`
- `extensions/cursor-retrieval/dist/main.js`

覆盖事实在 [mapped/quality-report.json](mapped/quality-report.json) 的 `extensionEntries.coveredPaths`。

## 怎么和本体层区分

- `src/extensions/*`：扩展层
- `src/main/*`、`src/cli/*`、`src/vs/*`：宿主 / workbench / runtime 层

如果你看到的是 `vscode.commands.registerCommand`、`vscode.window.createOutputChannel`、`cursor.registerMcpProvider` 这类 API，通常就在扩展层。
