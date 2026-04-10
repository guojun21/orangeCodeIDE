# orangeCodeIDE

这是一个 **公开的 Cursor runtime rebuilt 工程仓**。  
它不是单纯插件仓，也不是把宿主运行时快照直接塞进 git 的仓。

这里提交的是：

- 工程代码
- rebuilt 源码
- 构建脚本
- 测试脚本
- 工程文档

这里**不**提交的是：

- `out/`
- `extensions/`
- `node_modules/`
- `resources/`
- `bin/`
- `policies/`
- `product.json`

这些都通过 bootstrap 在本地准备，而且默认不会再被灌进 repo root。

当前 runtime 的正式边界是：

- `.runtime-deps/`：外部 runtime 依赖缓存
- `recovered/rebuilt/overrides/`：rebuilt 覆盖层
- `recovered/rebuilt/runtime-app/`：本地装配产物

当前独立宿主 gate 也已经收绿：

- `mapped/runtime-independence-report.json`: `passed = true`
- `mapped/runtime-independence-report.json`: `isFullyIndependent = true`
- `mapped/runtime-independence-report.json`: `residualExternalItems = []`

当前 runtime 诊断报告：

- `mapped/runtime-origin-report.json`
- `mapped/runtime-residuals-report.json`
- `mapped/runtime-ownership-report.json`
- `mapped/runtime-external-dependencies-report.json`
- `mapped/runtime-node-modules-model-report.json`
- `mapped/runtime-host-assets-model-report.json`
- `mapped/runtime-package-manager-manifest.json`
- `mapped/runtime-package-manager-install-report.json`
- `mapped/runtime-native-runtime-manifest.json`
- `mapped/runtime-package-manager-resolution-report.json`
- `mapped/runtime-boundary-check.json`
- `mapped/runtime-independence-report.json`

## Clone 后怎么跑

```bash
npm run bootstrap
npm run build
npm run dev
```

`npm run bootstrap` 会做两件事：

1. 从 **官方 Cursor distribution** 下载运行时依赖并缓存到 `.runtime-deps/`  
2. 下载固定版本的 `reference/vscode` 参考源码

想直接验证“别人 clone 下来能不能装依赖并跑起来”，先看：

- [docs/PUBLIC_BOOTSTRAP.md](docs/PUBLIC_BOOTSTRAP.md)

默认目标不是依赖本机 `.app`，也不是让仓库自己托管 100MB 级 runtime blob。

默认什么都不传，直接走官方依赖下载并 staged 到 `.runtime-deps`：

```bash
npm run bootstrap:runtime
```

如果你要覆盖默认依赖来源，可以显式传：

```bash
ORANGECODEIDE_RUNTIME_BASELINE_ARCHIVE=/absolute/path/orangeCodeIDE-runtime-baseline.tar.gz npm run bootstrap:runtime
```

或者：

```bash
ORANGECODEIDE_RUNTIME_BASELINE_URL=https://.../orangeCodeIDE-runtime-baseline.tar.gz npm run bootstrap:runtime
```

如果你是这个仓的维护者，`pack:runtime-baseline` 只是内部诊断/回归工具，不是公开 bootstrap 的主路径：

```bash
npm run pack:runtime-baseline -- --source-root /absolute/path/to/validated/runtime-root
```

如果你只想先准备源码参考层：

```bash
npm run bootstrap:vscode
```

当前正式状态已经收口到：

- stable active slices: `34 / 34 = 100% full-rebuilt`
- `rebuilt-source-quality.json`: green
- `startup-loader-runtime-gate.json`: green
- `startup-loader-rollout-gate.json`: green
- `accept-latest.json`: 已刷新

如果你刚进入这个仓库，不要先在根目录乱翻。先按下面顺序看：

1. [CODE_INDEX.md](CODE_INDEX.md)
2. [ARCHITECTURE.md](ARCHITECTURE.md)
3. [CORE_INDEX.md](CORE_INDEX.md)
4. [EXTENSION_INDEX.md](EXTENSION_INDEX.md)
5. [READABILITY.md](READABILITY.md)
6. [docs/ENGINEERING_SURFACE.md](docs/ENGINEERING_SURFACE.md)
7. [COMMAND_INDEX.md](COMMAND_INDEX.md)
8. [mapped/engineering-surface.json](mapped/engineering-surface.json)
9. [mapped/quality-report.json](mapped/quality-report.json)
10. [WORKSPACE.md](WORKSPACE.md)

## 这到底是不是插件仓

不是。

这个仓库现在的真实形态是：

- 一层是 **Cursor / VS Code 本体运行时的 rebuilt 工程**
- 一层是 **Cursor 自带扩展与能力层**

也就是说，它不是“只写插件”的扩展仓，而是 **改了本体，再叠内置扩展**。

直接看这些文件就能分辨：

- 本体层入口：
  - [src/main/index.js](src/main/index.js)
  - [src/vs/workbench/workbenchDesktopMain/index.js](src/vs/workbench/workbenchDesktopMain/index.js)
  - [src/vs/platform/files/node/watcherMain/index.js](src/vs/platform/files/node/watcherMain/index.js)
- 扩展层入口：
  - [src/extensions/cursor-browser-automation/index.js](src/extensions/cursor-browser-automation/index.js)
  - [src/extensions/cursor-agent-exec/index.js](src/extensions/cursor-agent-exec/index.js)
  - [src/extensions/cursor-mcp/index.js](src/extensions/cursor-mcp/index.js)

## 真正的工程在哪里

下面这些层，才是默认应该投入精力的地方：

| 目录 | 角色 | 默认策略 |
| --- | --- | --- |
| `src/` | 顶层源码入口，直接指向 `rebuilt/src/` | 主要编辑面 |
| `rebuilt/` | 真正的工程源码层 | 主要编辑面 |
| `config/runtime/` | runtime 依赖、装配、ownership source-of-truth | 主要编辑面 |
| `scripts/` | 构建、恢复、报告、装配自动化 | 主要编辑面 |
| `test/` | runtime、GUI、smoke、agent、spike 校验 | 主要编辑面 |
| `docs/` | 仓库导航、工程面说明、阶段收口文档 | 主要编辑面 |

公开依赖模型见：

- [docs/DEPENDENCY_MODEL.md](docs/DEPENDENCY_MODEL.md)

## 这些不是主源码

下面这些目录都重要，但**不是**默认开发入口：

| 目录 | 性质 | 处理方式 |
| --- | --- | --- |
| `.runtime-deps/` | 外部 runtime 依赖缓存 | 默认只读，不进 git |
| `out/` `extensions/` `resources/` `bin/` `node_modules/` | 运行时兼容层 | 不再作为默认 runtime 输入根 |
| `recovered/` | 恢复过程产物 | 可重建，不当最终源码 |
| `mapped/` | 机器报告和映射结果 | 自动生成，不当业务源码 |
| `reference/` `raw/` | 只读参考层 | 不直接演进 |
| `notes/` `archived/` `wrapDoc/` | 历史与归档 | 只读参考 |

一句话记住：

`src` 是顶层代码入口，`reference/raw` 提供参考，`recovered/mapped` 提供证据，`rebuilt/scripts/test/docs` 才是工程面。

## 最常看的代码文件

如果你只是想直接进代码，不想钻深层路径，先看：

1. [src/vs/workbench/workbenchDesktopMain/index.js](src/vs/workbench/workbenchDesktopMain/index.js)
2. [src/vs/platform/files/node/watcherMain/index.js](src/vs/platform/files/node/watcherMain/index.js)
3. [src/main/index.js](src/main/index.js)
4. [src/cli/index.js](src/cli/index.js)
5. [src/bootstrapFork/index.js](src/bootstrapFork/index.js)
6. [CORE_INDEX.md](CORE_INDEX.md)
7. [EXTENSION_INDEX.md](EXTENSION_INDEX.md)
8. [CODE_INDEX.md](CODE_INDEX.md)

## 常用命令

```bash
npm run status:engineering
npm run check:core
npm run verify:public-bootstrap
npm run verify:runtime-boundary
npm run verify:runtime-independence
npm run report:runtime-external-dependencies
npm run report:runtime-node-modules-model
npm run report:runtime-host-assets-model
npm run report:runtime-package-manager-manifest
npm run report:runtime-native-runtime-manifest
npm run verify:runtime-package-manager-resolution
npm run dev
npm run dev:auth
npm run test:watcher:spike
npm run test:workbench-desktop-main:spike
```

建议默认工作流：

1. `npm run status:engineering`
2. 先从 `src/` 进入代码
3. 做代码修改
4. `npm run check:core`

## 当前阶段

成熟度数字已经封顶，下一阶段不再是追 `xx% full-rebuilt`，而是：

- 持续做 runtime / GUI 级抽检
- 收紧 `rebuilt/` 与 `scripts/` 的工程边界
- 让根目录入口更像工程仓，而不是恢复实验现场
- 让真正代码文件在仓库第一层就能被点到

对应收口：

- [135-one-hundred-percent-all-green-milestone.md](notes/135-one-hundred-percent-all-green-milestone.md)
- [136-post-100-runtime-gui-closure.md](notes/136-post-100-runtime-gui-closure.md)
- [137-engineering-surface-repo-cleanup.md](notes/137-engineering-surface-repo-cleanup.md)
