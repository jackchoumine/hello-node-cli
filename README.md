# hello-node-cli

使用 node 编写 cli 工具

## 遇到的问题

1. 提示没有权限

给执行权限： `chmod + x index.js`

2. 添加执行环境

 `#!/usr/bin/env node`

文件第一行，然后 `./index.js` 相当于 `node index.js`

3. 希望在控制台执行`jack`命令，然后执行`node ./index.js`，如何设置？

`packages.json` 添加 `bin`

```json
"bin":{
    "jack": "index.js"
  }
```

> 在控制台执行 jack 就是执行 `node ./index.js`

执行试试： `jack`

提示 `zsh: command not found: jack` , 如何解决？ 把 npm 添到全局 -- `npm link` 。

4. 如何本地测试 npm?

`npm link` 会将本 npm 依赖添加到全局 node_modules 里，再执行 `jack` , jack 命令变绿。

5. 如何移除 link 的 npm?

 `npm rm -g pkg-name` 或者 `npm unlink pkg-name`

6. 发布一个测试版本

 `npm publish --tag demo`

发布后查看版本信息：

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h12o2ojv1aj20ba038mx6.jpg)

因为发布的第一个版本，是最新版，也是 demo 版本。

发布后移除本地的测试包 `npm rm -g hello-node-cli` ，让使用 `npx` 测试是否可用。

 `npx hello-node-cli`

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h12oqst10yj20qa0560tb.jpg)

可用，一个 node-cli 开发、发布完成，后续添加其他功能。

[npm 版本管理最佳实践](https://github.com/canvasT/blog/issues/2)
