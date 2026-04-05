# Recovery Workspace

这个仓库同时包含：

- 可执行的 Cursor 运行时基线
- 恢复过程中的中间产物
- 已经工程化的 rebuilt 源码与验证链

默认不要把它理解成“所有目录地位一样”的普通仓库。

## 默认工作面

日常工作优先级：

1. `src/`
2. `rebuilt/`
3. `scripts/`
4. `test/`
5. `docs/`

如果你不是在维护运行时输入兼容性，就不要先去动：

- `out/`
- `extensions/`
- `resources/`
- `bin/`
- `node_modules/`

## 分层约定

### 工程层

- `src/`: 顶层源码入口，直接进入真正代码
- `rebuilt/`: 真正演进的恢复后源码
- `scripts/`: 自动化和报告构建
- `test/`: runtime、GUI、smoke、agent、spike 校验
- `docs/`: 工程入口与仓库导航

### 运行时输入层

- `out/`
- `extensions/`
- `resources/`
- `bin/`
- `node_modules/`
- `package.json`
- `product.json`

这些路径直接参与 Electron 启动或运行时装配，默认视为 executable input。

### 生成层

- `recovered/`: 恢复产物、built 文件、runtime 组装结果
- `mapped/`: 质量报告、映射结果、基线与 gate 产物

### 只读层

- `reference/`
- `raw/`

### 历史层

- `notes/`
- `archived/`
- `wrapDoc/`

## 路径规则

- 所有脚本的 `ROOT` 都必须来自 [scripts/paths.mjs](scripts/paths.mjs)
- `mapped/*.json` 由脚本生成，不手改
- `recovered/` 不是最终源码
- `reference/` 不是开发目录
- 只有 `rebuilt/` 允许长期演进成可维护工程

## 默认入口

先看：

1. [README.md](README.md)
2. [ARCHITECTURE.md](ARCHITECTURE.md)
3. [CORE_INDEX.md](CORE_INDEX.md)
4. [EXTENSION_INDEX.md](EXTENSION_INDEX.md)
5. [READABILITY.md](READABILITY.md)
6. [CODE_INDEX.md](CODE_INDEX.md)
7. [docs/ENGINEERING_SURFACE.md](docs/ENGINEERING_SURFACE.md)
8. [mapped/engineering-surface.json](mapped/engineering-surface.json)
9. [mapped/quality-report.json](mapped/quality-report.json)

## Rules

- 用户可见回复默认直接中文。
- 不把历史 notes 当成当前唯一真相；当前口径优先看 `mapped/*.json` 和根入口文档。
- 保持当前 runtime 可启动、可校验、可 rollout。
- 做仓库整理时，优先“凸显工程面”，不要冒险大搬运行时基线目录。
