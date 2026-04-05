# Code Index

这份索引只做一件事：

**把真正常看的代码文件提到仓库第一层。**

## 先分清两层

- 想看“是不是已经改了 Cursor / VS Code 本体”：先看 [CORE_INDEX.md](CORE_INDEX.md)
- 想看“有哪些内置扩展”：先看 [EXTENSION_INDEX.md](EXTENSION_INDEX.md)
- 想看整体判断：先看 [ARCHITECTURE.md](ARCHITECTURE.md)

## 先看这些

### 核心 rebuilt 入口

1. [src/vs/workbench/workbenchDesktopMain/index.js](src/vs/workbench/workbenchDesktopMain/index.js)
2. [src/vs/platform/files/node/watcherMain/index.js](src/vs/platform/files/node/watcherMain/index.js)
3. [src/main/index.js](src/main/index.js)
4. [src/cli/index.js](src/cli/index.js)
5. [src/bootstrapFork/index.js](src/bootstrapFork/index.js)

### 内置扩展入口

1. [src/extensions/cursor-agent-exec/index.js](src/extensions/cursor-agent-exec/index.js)
2. [src/extensions/cursor-browser-automation/index.js](src/extensions/cursor-browser-automation/index.js)
3. [src/extensions/cursor-mcp/index.js](src/extensions/cursor-mcp/index.js)

### 共享代理与运行时桥

1. [src/shared/originalNodeEntrypointProxy/index.js](src/shared/originalNodeEntrypointProxy/index.js)
2. [src/shared/originalBrowserModuleProxy/index.js](src/shared/originalBrowserModuleProxy/index.js)
3. [src/vs/workbench/workbenchDesktopMain/startupModuleResolutionHelper.js](src/vs/workbench/workbenchDesktopMain/startupModuleResolutionHelper.js)

### 构建与收口脚本

1. [scripts/build-rebuilt-slice.mjs](scripts/build-rebuilt-slice.mjs)
2. [scripts/generate-quality-report.mjs](scripts/generate-quality-report.mjs)
3. [scripts/generate-engineering-surface-report.mjs](scripts/generate-engineering-surface-report.mjs)
4. [scripts/assemble-runtime-from-slices.mjs](scripts/assemble-runtime-from-slices.mjs)

### 测试入口

1. [test/run-smoke.mjs](test/run-smoke.mjs)
2. [test/run-agent.mjs](test/run-agent.mjs)
3. [test/smoke/bootstrap.test.mjs](test/smoke/bootstrap.test.mjs)
4. [test/agent/bootstrap.test.mjs](test/agent/bootstrap.test.mjs)

## 记忆方式

- `src/`：看代码
- `scripts/`：看怎么构建和出报告
- `test/`：看怎么验
- `mapped/`：看当前状态
- `CORE_INDEX.md`：看本体改造面
- `EXTENSION_INDEX.md`：看扩展能力面

如果你只是想“赶紧进入真正的代码文件”，从 `src/` 开始，不要先钻 `rebuilt/src/` 深层路径。
