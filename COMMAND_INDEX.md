# Command Index

这份索引只保留真正常用的工程命令。

## 最常用

```bash
npm run status:engineering
npm run check:core
npm run verify:public-bootstrap
npm run dev
npm run dev:auth
```

## 命令含义

| 命令 | 作用 |
| --- | --- |
| `npm run status:engineering` | 刷新工程面报告和质量总览 |
| `npm run check:core` | 运行当前主收口链：`accept + startup-loader-rollout` |
| `npm run verify:public-bootstrap` | fresh clone 场景下的 `bootstrap + build + watcher spike + workbench spike` |
| `npm run dev` | 启动 rebuilt runtime 做人工观察 |
| `npm run dev:auth` | 带认证态启动 rebuilt runtime |
| `npm run test:watcher:spike` | 定向检查最后一颗 watcher rebuilt 入口 |
| `npm run test:workbench-desktop-main:spike` | workbench 主战场专项校验 |

## 什么时候不用去翻 package.json

如果你只是日常开发和验收，不要先去大海捞针翻 6000 行 scripts。

先从这 7 条开始：

1. `npm run status:engineering`
2. `npm run check:core`
3. `npm run verify:public-bootstrap`
4. `npm run dev`
5. `npm run dev:auth`
6. `npm run test:watcher:spike`
7. `npm run test:workbench-desktop-main:spike`
