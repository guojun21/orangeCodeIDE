# Architecture

这仓库不是“只给 VS Code / Cursor 写插件”的扩展仓。

它现在的真实结构是：

1. **本体运行时层**：直接接管或重建 Cursor / VS Code 的启动入口、workbench mega-bundle、CLI、watcher、pty host 等 runtime slice
2. **内置扩展层**：在宿主里继续挂 Cursor 自带 extension / MCP / browser automation / retrieval 等能力

一句话：

**这是一个 Cursor-on-top-of-VSCode 的整机 rebuilt 工程，不是纯插件仓。**

## 证据

### 1. 宿主入口是应用本体，不是 extension host 包

- [package.json](package.json)
  - `name = shopeeCodeDev`
  - `main = ./out/main.js`

这说明仓库根包就是 Electron app/runtime 的主入口包，不是单独 extension 的 npm 包。

### 2. 本体层已经被直接接管

- [src/main/index.js](src/main/index.js)
  - 主进程入口 wrapper
- [src/vs/workbench/workbenchDesktopMain/index.js](src/vs/workbench/workbenchDesktopMain/index.js)
  - workbench desktop mega-bundle rebuilt 代理与 startup module resolution canary
- [src/vs/platform/files/node/watcherMain/index.js](src/vs/platform/files/node/watcherMain/index.js)
  - watcher 主入口 rebuilt 实现
- [mapped/quality-report.json](mapped/quality-report.json)
  - `runtimeBundles.coveredPaths` 覆盖 `out/main.js`、`out/cli.js`、`out/vs/code/electron-sandbox/workbench/workbench.js`、`out/vs/platform/files/node/watcher/watcherMain.js` 等核心路径

### 3. 扩展层也同时存在

- [src/extensions/cursor-browser-automation/index.js](src/extensions/cursor-browser-automation/index.js)
- [src/extensions/cursor-agent-exec/index.js](src/extensions/cursor-agent-exec/index.js)
- [src/extensions/cursor-mcp/index.js](src/extensions/cursor-mcp/index.js)
- [mapped/quality-report.json](mapped/quality-report.json)
  - `extensionEntries.coveredPaths` 覆盖 `extensions/cursor-*/dist/*.js`

## 该怎么理解这仓库

不要把它理解成下面任何一种单层模型：

- 不是“普通业务 webapp”
- 不是“只是 VS Code 插件”
- 不是“只是解包后的静态档案”

正确理解是：

- **底座**：VS Code / Cursor runtime rebuilt
- **上层**：Cursor 自带扩展与能力模块
- **证据层**：`mapped/`、`recovered/`
- **参考层**：`reference/`、`raw/`

## 先看哪部分

- 想看“改了本体哪里”：去 [CORE_INDEX.md](CORE_INDEX.md)
- 想看“有哪些内置扩展”：去 [EXTENSION_INDEX.md](EXTENSION_INDEX.md)
- 想看“统一代码入口”：去 [CODE_INDEX.md](CODE_INDEX.md)
