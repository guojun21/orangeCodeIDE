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
3. 本地解包出 runtime 所需输入
4. 同步到仓库根运行时目录

辅助覆盖项：

- `ORANGECODEIDE_RUNTIME_BASELINE_ARCHIVE=...`
- `ORANGECODEIDE_RUNTIME_BASELINE_URL=...`
- `ORANGECODEIDE_RUNTIME_DIST_URL=...`
- `ORANGECODEIDE_CURSOR_RELEASE=2.6`

这些覆盖项只用于调试、离线回归或替换默认上游，不是公开主路径。

## 不应该再做的事

- 不把 `out/`、`extensions/`、`resources/`、`bin/`、`node_modules.asar` 提交进 git
- 不依赖本机 `/Applications/Cursor.app`
- 不把 100MB 级 baseline blob 当成仓库 release 主分发模型
