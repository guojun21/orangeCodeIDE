# Engineering Surface

这份文档只回答一个问题：

**这个仓库里，哪里是真正的工程，哪里只是恢复物料或运行时输入。**

## 一句话判断

- 想直接进代码文件，先从顶层 `src/` 开始
- 想先判断“这是插件仓还是本体仓”，先看 [ARCHITECTURE.md](../ARCHITECTURE.md)
- 想只看本体层，先看 [CORE_INDEX.md](../CORE_INDEX.md)
- 想只看扩展层，先看 [EXTENSION_INDEX.md](../EXTENSION_INDEX.md)
- 想改“工程本体”，去 `rebuilt/`、`scripts/`、`test/`、`docs/`
- 想看“当前状态”，去 `mapped/engineering-surface.json`、`mapped/quality-report.json`
- 想查“恢复证据”，去 `recovered/`
- 想找“上游参考”，去 `reference/`
- 不要把 `out/`、`extensions/`、`node_modules/` 当作默认开发入口

## 默认阅读顺序

1. [README.md](../README.md)
2. [ARCHITECTURE.md](../ARCHITECTURE.md)
3. [CORE_INDEX.md](../CORE_INDEX.md)
4. [EXTENSION_INDEX.md](../EXTENSION_INDEX.md)
5. [READABILITY.md](../READABILITY.md)
6. [CODE_INDEX.md](../CODE_INDEX.md)
7. [COMMAND_INDEX.md](../COMMAND_INDEX.md)
8. [mapped/engineering-surface.json](../mapped/engineering-surface.json)
9. [mapped/quality-report.json](../mapped/quality-report.json)
10. [src/vs/workbench/workbenchDesktopMain/index.js](../src/vs/workbench/workbenchDesktopMain/index.js)

## 目录分层

| 层 | 目录 | 该怎么对待 |
| --- | --- | --- |
| 顶层代码入口 | `src/` | 直接进入真正源码，不用先钻 `rebuilt/src/` |
| 真工程层 | `rebuilt/` | 默认主要编辑面 |
| 真工程层 | `scripts/` | 默认主要编辑面 |
| 真工程层 | `test/` | 默认主要编辑面 |
| 真工程层 | `docs/` | 默认主要编辑面 |
| 运行时输入层 | `out/` `extensions/` `resources/` `bin/` `node_modules/` | 默认不直接改，除非在修启动/运行时兼容 |
| 生成产物层 | `recovered/` `mapped/` | 读、比对、重建，不当最终源码 |
| 只读参考层 | `reference/` `raw/` | 只读 |
| 历史层 | `notes/` `archived/` `wrapDoc/` | 查阶段结论，不当当前工程面 |

## 想做什么，先去哪

| 目标 | 第一落点 |
| --- | --- |
| 直接看核心源码 | [CODE_INDEX.md](../CODE_INDEX.md) / `src/` |
| 看当前仓库健康度 | [mapped/quality-report.json](../mapped/quality-report.json) |
| 看当前真正工程面 | [mapped/engineering-surface.json](../mapped/engineering-surface.json) |
| 改 rebuilt 入口或 slice | [scripts/build-rebuilt-slice.mjs](../scripts/build-rebuilt-slice.mjs) |
| 改 runtime / GUI 验证 | [test/run-smoke.mjs](../test/run-smoke.mjs) / [test/run-agent.mjs](../test/run-agent.mjs) |
| 改 watcher 入口 | [src/vs/platform/files/node/watcherMain/index.js](../src/vs/platform/files/node/watcherMain/index.js) |
| 刷全局绿面 | `npm run accept` / `npm run test:startup-loader-rollout:full` |
| 查历史阶段决定 | `notes/`，但以 `mapped/*.json` 为当前口径 |

## 当前阶段

当前不是“继续补覆盖率”的阶段，而是：

- 维持 `34 / 34` stable slices 的 full-rebuilt 基线
- 维持 runtime / GUI / rollout 绿面
- 逐步把仓库入口整理得更像工程仓而不是恢复现场
- 把真正代码文件提升到根层入口附近

## 默认命令

```bash
npm run status:engineering
npm run check:core
npm run dev
npm run dev:auth
npm run test:watcher:spike
npm run test:workbench-desktop-main:spike
```

## 反模式

下面这些行为会让仓库重新变乱：

- 直接把 `recovered/` 产物当最终源码改
- 把 `mapped/*.json` 当人工维护配置改
- 在根目录继续堆新的“阶段说明”，但不刷新根入口
- 默认从 `out/` 或 `extensions/` 深处开工，而不是先看工程层
- 让真正代码继续只躲在 `rebuilt/src/` 深层路径里，而不给顶层入口
