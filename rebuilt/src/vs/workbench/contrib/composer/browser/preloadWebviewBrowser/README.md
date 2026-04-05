# preloadWebviewBrowser

这个目录当前的核心文件是：

- [index.js](/Users/ruicheng.gu/Documents/project/02-dev-tools/shopeeCodeDev/src/vs/workbench/contrib/composer/browser/preloadWebviewBrowser/index.js)

它不是生成物，但它已经属于 **复杂 browser glue 文件**，阅读时不要从上到下硬啃。

## 先按职责读

### 1. 宿主依赖和通道白名单

文件开头先定义：

- `ipcRenderer`
- `contextBridge`
- `webFrame`
- `LOCAL_NETWORK_ALLOWED_SUFFIXES`
- `BRIDGE_CHANNELS`

这里决定了：

- 预加载脚本能碰哪些 Electron 能力
- 允许向 host 回传哪些 browser 事件

### 2. 两类 polyfill

前半段最重要的是两个注入函数：

- `injectLocalNetworkAccessPolyfill()`
- `injectWebAuthnPolyfill()`

它们负责在特定页面环境下补：

- local network permission query
- WebAuthn / passkey 相关能力和 timeout 行为

如果你在查“某些登录页 / passkey / 本地网络权限为什么在内置 browser 里和普通浏览器不一样”，先看这段。

### 3. dialog override

- `installDialogOverrides()`

这一段把：

- `alert`
- `confirm`
- `prompt`

改成非阻塞版本，并把调用历史挂在 `window.__cursorDialogConfig` 上。

如果你在查页面弹窗为什么没有真的阻塞 UI，或者 automation 为什么还能继续跑，先看这里。

### 4. renderer 与 host 的桥

bridge 暴露是这一段：

- `contextBridge.exposeInMainWorld('cursorBrowser', bridge)`

它只给页面暴露了一个窄接口：

- `window.cursorBrowser.send(...)`

而且 send 还受 `BRIDGE_CHANNELS` 白名单限制。

如果你在查：

- 页面怎么把事件发回宿主
- 为什么某个 channel 发不出去

先看这段。

### 5. DOMContentLoaded 之后的页面行为

`DOMContentLoaded` 里现在主要做的是：

- 再次安装 dialog override
- 处理 `alt + click` 链接，在 host 里 side-group 打开 URL

如果你在查“页面链接为什么不是默认打开，而是进 side group”，看这一段。

### 6. 全局 keydown 转发

最后一大段是：

- 键盘快捷键归一化
- `keyboard-shortcut` 事件回传
- 原始键盘事件 `did-keydown` 回传

这段负责把：

- reload
- focus url bar
- new tab
- open devtools
- back / forward
- zoom

这些浏览器交互转成 host 侧动作。

## 怎么看才不浪费时间

推荐顺序：

1. 先看常量区
2. 再看三个大函数：local network / webauthn / dialog override
3. 再看 bridge
4. 最后看 DOM 事件和 keydown

## 什么时候该拆

如果后续继续改这个文件，优先拆成：

- `polyfills/`
- `dialogOverrides/`
- `bridge/`
- `keyboardShortcuts/`

不要继续把新逻辑平铺加在 `index.js` 尾部。
