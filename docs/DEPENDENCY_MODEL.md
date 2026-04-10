# Dependency Model

`orangeCodeIDE` 的目标是：

1. git 仓里只放工程代码、脚本、测试、文档
2. 大型运行时输入作为外部依赖获取
3. 本地通过 bootstrap 装配运行时，不把重 blob 混进代码仓

## 代码和依赖怎么分层

代码层：

- `src/`
- `rebuilt/`
- `scripts/`
- `test/`
- `docs/`

外部依赖层：

- 官方 Cursor distribution
- 官方 VS Code source tarball/tag
- npm 安装的 JS 依赖

## 当前公开 bootstrap 主路径

`npm run bootstrap:runtime`

默认行为：

1. 根据仓库版本推导 Cursor release series
2. 从官方 Cursor 下载端点拉取对应 distribution
3. 本地 staged 到 `.runtime-deps/cursor/<release>/app`
4. 后续装配脚本从 `.runtime-deps/` 白名单复制 runtime 输入，不再把 baseline 灌进 repo root

辅助覆盖项：

- `ORANGECODEIDE_RUNTIME_BASELINE_ARCHIVE=...`
- `ORANGECODEIDE_RUNTIME_BASELINE_URL=...`
- `ORANGECODEIDE_RUNTIME_DIST_URL=...`
- `ORANGECODEIDE_CURSOR_RELEASE=2.6`

这些覆盖项只用于调试、离线回归或替换默认上游，不是公开主路径。

## 当前 runtime 边界

- `.runtime-deps/`：外部 runtime 输入缓存
- `recovered/phase2/core-entrypoints`：phase2 overlay 输入
- `recovered/rebuilt/overrides`：rebuilt 覆盖层
- `recovered/rebuilt/runtime-app`：最终装配产物

当前机器报告：

- `mapped/runtime-origin-report.json`
- `mapped/runtime-residuals-report.json`
- `mapped/runtime-ownership-report.json`
- `mapped/runtime-external-dependencies-report.json`
- `mapped/runtime-node-modules-model-report.json`
- `mapped/runtime-host-assets-model-report.json`
- `mapped/runtime-package-manager-manifest.json`
- `mapped/runtime-native-runtime-manifest.json`
- `mapped/runtime-package-manager-resolution-report.json`
- `mapped/runtime-boundary-check.json`
- `mapped/runtime-independence-report.json`

其中 `runtime-external-dependencies-report.json` 专门回答：

- `node_modules` 里还残留多少 JS package 和 native addon
- `extensions` 里哪些目录仍来自 external runtime input
- `resources/bin/policies/product.json` 里到底还有哪些宿主资产没脱 baseline

其中 `runtime-node-modules-model-report.json` 专门回答：

- 哪些 `node_modules` package 可以归到 package-manager 可安装 JS 依赖
- 哪些 package 属于 native/runtime 硬依赖，需要单独维护平台产物模型
- `node_modules.asar` 当前是否还只是兼容期遗留物

其中 `runtime-host-assets-model-report.json` 专门回答：

- `resources/bin/policies` 里每类宿主资产属于品牌资源、模板配置，还是短期 external binary
- `product.json` 哪些字段已经进入产品模板/配置视角
- 当前还有没有未被模型覆盖的宿主资产

其中 `runtime-package-manager-manifest.json` 和 `runtime-native-runtime-manifest.json` 是下一阶段真正要消费的清单：

- 前者给 package manager/install 模型用
- 后者给 native/runtime 分发与平台产物模型用

当前这条线已经不只是“下一阶段准备”：

- `mapped/runtime-package-manager-install-report.json`：JS install input 已实装并验证通过
- `mapped/runtime-generated-node-modules-report.json`：runtime assembly 已实际生成独立 `node_modules`
- `mapped/runtime-independence-report.json`：当前 `passed = true`，`isFullyIndependent = true`

如果要继续确认 package-manager 这条路不是纸上谈兵，而是真的能解析：

- 跑 `npm run verify:runtime-package-manager-resolution`
- 它会在 `recovered/rebuilt/runtime-package-manager-input/` 生成解析后的 `package.json` 和 `package-lock.json`
- 并输出 `mapped/runtime-package-manager-resolution-report.json`

## 不应该再做的事

- 不把 `out/`、`extensions/`、`resources/`、`bin/`、`node_modules.asar` 提交进 git
- 不依赖本机 `/Applications/Cursor.app`
- 不把 100MB 级 baseline blob 当成仓库 release 主分发模型
