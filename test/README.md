# Test Harness

当前测试骨架分两层：

- `npm run test:smoke`
  基于当前 rebuilt runtime + CDP 驱动的基础 smoke tests
- `npm run test:agent`
  Agent / Composer 相关 e2e 测试入口；当前已覆盖 panel visible / input focusable / send 123-like token / response started / session log recorded
- `npm run test:agent:demo`
  优先附着当前已开的 `:9333` runtime，在你眼前这个窗口里真实发送一条 agent/composer 消息，并落截图与结果 JSON 到 `test/.output/`

## 设计原则

- 复用现有 `run-electron-rebuilt.sh`
- 复用共享登录态：
  - `/Users/ruicheng.gu/Documents/bs/shopeeCodeDev/.runtime-user-data/rebuilt-main`
- 启动前会清理测试骨架自己上一次留下的 `runtime-app` 进程，避免叠出多窗口
- 不依赖 Playwright / Mocha
- 与 `npm run verify` 完全独立

## 测试参考层

测试骨架对应的独立参考项目放在：

- `/Users/ruicheng.gu/Documents/bs/shopeeCodeDev/reference/testing/vscode-automation`
- `/Users/ruicheng.gu/Documents/bs/shopeeCodeDev/reference/testing/vscode-smoke`
- `/Users/ruicheng.gu/Documents/bs/shopeeCodeDev/reference/testing/vscode-mcp`
- `/Users/ruicheng.gu/Documents/bs/shopeeCodeDev/reference/testing/vscode-integration-electron`

这层是从 upstream `reference/vscode/test/...` 抽出来的只读镜像，方便单独对照测试骨架，而不是每次再去整仓里翻。

## 当前文件

- `test/driver/`
  - 最小启动、CDP、命令与选择器封装
- `test/smoke/`
  - 第一批 smoke tests
- `test/agent/`
  - Agent / Composer 的第一批真实 e2e 用例
  - `demo.mjs`：可重复跑的单次消息发送演示
- `test/.output/`
  - 失败截图与调试产物
