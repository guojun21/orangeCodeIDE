# Public Bootstrap

`orangeCodeIDE` 的公开分发模型是：

1. git 仓只提交工程代码、脚本、测试和文档
2. runtime baseline 通过版本化 tarball 提供
3. `reference/vscode` 通过固定 tag 下载
4. `.app` 只允许作为维护者本地临时 fallback，不是默认依赖

## Clone 后的最小验证

先准备 runtime baseline：

```bash
ORANGECODEIDE_RUNTIME_BASELINE_ARCHIVE=/absolute/path/orangeCodeIDE-runtime-baseline.tar.gz npm run verify:public-bootstrap
```

这条命令会顺序执行：

1. `npm run bootstrap:runtime -- --force`
2. `npm run bootstrap:vscode -- --force`
3. `npm run build`
4. `npm run test:watcher:spike`
5. `npm run test:workbench-desktop-main:spike`

## 维护者怎么打 baseline

baseline 必须从**已经验证过的工程根 runtime 输入**打，不从 `.app` 反向抽。

```bash
npm run pack:runtime-baseline -- --source-root /absolute/path/to/validated/runtime-root
```

## 2026-04-05 本地验证结果

使用以下源完成了 fresh verify 验证：

- runtime baseline source root: `shopeeCodeDev`
- runtime baseline archive: `dist/orangeCodeIDE-runtime-baseline.tar.gz`
- vscode reference: `1.105.1`

实际通过的链路是：

1. `bootstrap:runtime --force --archive <baseline.tar.gz>`
2. `bootstrap:vscode --force`
3. `npm run build`
4. `npm run test:watcher:spike`
5. `npm run test:workbench-desktop-main:spike`

结论：`clone -> bootstrap -> build -> run` 已经可以在不依赖 `Cursor.app` 默认路径的前提下完成。
