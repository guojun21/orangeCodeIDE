# Public Bootstrap

`orangeCodeIDE` 的公开分发模型是：

1. git 仓只提交工程代码、脚本、测试和文档
2. runtime input 默认从官方 Cursor distribution 下载并本地解包
3. `reference/vscode` 通过固定 tag 下载
4. 不依赖任何本机 `.app`，也不要求仓库自己托管大 baseline blob

## Clone 后的最小验证

默认直接走官方依赖下载：

```bash
npm run verify:public-bootstrap
```

这条命令会顺序执行：

1. `npm run bootstrap:runtime -- --force`
2. `npm run bootstrap:vscode -- --force`
3. `npm run build`
4. `npm run test:watcher:spike`
5. `npm run test:workbench-desktop-main:spike`

## 覆盖默认依赖来源

如果你在做离线回归、内网对比或调试，也可以显式覆盖 runtime 来源：

```bash
ORANGECODEIDE_RUNTIME_BASELINE_ARCHIVE=/absolute/path/orangeCodeIDE-runtime-baseline.tar.gz npm run verify:public-bootstrap
```

## 2026-04-05 本地验证结果

当前已经实际验证通过的公开主路径是：

- runtime source: 官方 Cursor 2.6 distribution
- vscode reference: `1.105.1`

实际通过的链路是：

1. `bootstrap:runtime --force`
2. `bootstrap:vscode --force`
3. `npm run build`
4. `npm run test:watcher:spike`
5. `npm run test:workbench-desktop-main:spike`

结论：公开主路径应该是“官方依赖下载 + 本地装配”，不是“本机 `.app` fallback”，也不是“仓库自己托管 100MB 级 baseline blob”。
