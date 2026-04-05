# Readability

先说结论：

**现在这仓库不是“完全不可读”，但也绝对不能算“全局可读”。**

更准确的说法是：

- **控制面可读**
- **负载面大量不可读**

## 为什么不能说“全可读”

当前 `src/` 对应的真实源码面很大，包含：

- rebuilt 入口与代理
- workbench / runtime slice
- Cursor 内置扩展
- raw 恢复层
- 第三方 bundle
- proto 生成文件

这些东西混在同一棵树里时，你当然会觉得乱。

真实统计看 [mapped/readability-report.json](mapped/readability-report.json)：

- `src` 别名下面是几千个源码文件
- 其中有非常大的 payload 文件
- 最大的几类基本都是第三方、proto、dist、raw payload

所以问题不是“每个文件都不可读”，而是 **默认阅读面没有被强制切到真正的人类控制面**。

## 现在已经可读的部分

先读这些：

1. [CORE_INDEX.md](CORE_INDEX.md)
2. [EXTENSION_INDEX.md](EXTENSION_INDEX.md)
3. [src/main/index.js](src/main/index.js)
4. [src/cli/index.js](src/cli/index.js)
5. [src/shared/originalNodeEntrypointProxy/index.js](src/shared/originalNodeEntrypointProxy/index.js)
6. [src/shared/originalBrowserModuleProxy/index.js](src/shared/originalBrowserModuleProxy/index.js)
7. [src/vs/workbench/workbenchDesktopMain/index.js](src/vs/workbench/workbenchDesktopMain/index.js)
8. [src/vs/workbench/workbenchDesktopMain/startupModuleResolutionHelper.js](src/vs/workbench/workbenchDesktopMain/startupModuleResolutionHelper.js)
9. [src/vs/platform/files/node/watcherMain/index.js](src/vs/platform/files/node/watcherMain/index.js)

这些文件已经不是 bundle 垃圾堆，而是人能读、能改、能维护的控制面。

## 现在最难读的部分

难读的主要不是“本体入口”，而是这些层：

- `project-modules-raw/`
- `node_modules/`
- `dist/bundle.js`
- `proto/*_pb.js`
- 特别长的 preload / browser glue 文件

其中最典型的人类还会维护、但已经过长的例子是：

- [src/vs/workbench/contrib/composer/browser/preloadWebviewBrowser/index.js](src/vs/workbench/contrib/composer/browser/preloadWebviewBrowser/index.js)

这类文件不是生成物，但已经长到需要结构化拆分。

## 我的方案

### 第一层：继续把“人类阅读入口”顶到第一屏

已经做了：

- `src/`
- `ARCHITECTURE.md`
- `CORE_INDEX.md`
- `EXTENSION_INDEX.md`
- `CODE_INDEX.md`

### 第二层：给仓库一个可读性报告，而不是靠感觉

已经做了：

- [scripts/generate-readability-report.mjs](scripts/generate-readability-report.mjs)
- [mapped/readability-report.json](mapped/readability-report.json)

### 第三层：把“复杂但有人维护”的长文件拆成小面

优先目标不是 proto 和第三方 bundle，而是这种文件：

- `preload`
- `browser glue`
- `service facade`
- `view store`

因为这些才是之后会反复改的工程面。

### 第四层：明确哪些文件不值得读

以后要硬写清楚：

- 生成物默认不读
- proto 默认不读
- raw payload 默认不读
- 第三方 bundle 默认不读

## 默认命令

```bash
npm run report:readability
```

跑完以后直接看：

- [mapped/readability-report.json](mapped/readability-report.json)
