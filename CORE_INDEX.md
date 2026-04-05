# Core Index

这份索引只列 **Cursor / VS Code 本体改造层**。

如果你想确认“这仓库是不是已经在改本体”，先看这里。

## 主进程与顶层入口

1. [src/main/index.js](src/main/index.js)
2. [src/cli/index.js](src/cli/index.js)
3. [src/bootstrapFork/index.js](src/bootstrapFork/index.js)

## Workbench 与浏览器主面

1. [src/vs/workbench/workbenchDesktopMain/index.js](src/vs/workbench/workbenchDesktopMain/index.js)
2. [src/vs/workbench/workbenchDesktopMain/startupModuleResolutionHelper.js](src/vs/workbench/workbenchDesktopMain/startupModuleResolutionHelper.js)
3. [src/vs/workbench/workbenchDesktopMain/tslibRebuilt.js](src/vs/workbench/workbenchDesktopMain/tslibRebuilt.js)

## 核心 runtime slice

1. [src/vs/platform/files/node/watcherMain/index.js](src/vs/platform/files/node/watcherMain/index.js)
2. [src/shared/originalNodeEntrypointProxy/index.js](src/shared/originalNodeEntrypointProxy/index.js)
3. [src/shared/originalBrowserModuleProxy/index.js](src/shared/originalBrowserModuleProxy/index.js)

## 核心验证与报告

1. [scripts/build-rebuilt-slice.mjs](scripts/build-rebuilt-slice.mjs)
2. [scripts/generate-quality-report.mjs](scripts/generate-quality-report.mjs)
3. [mapped/quality-report.json](mapped/quality-report.json)

## 看什么算“本体改造”

只要命中了下面这些路径，就已经不是单纯插件了：

- `out/main.js`
- `out/cli.js`
- `out/vs/code/electron-sandbox/workbench/workbench.js`
- `out/vs/platform/files/node/watcher/watcherMain.js`
- `out/vs/platform/terminal/node/ptyHostMain.js`

这些覆盖事实都能在 [mapped/quality-report.json](mapped/quality-report.json) 里看到。
