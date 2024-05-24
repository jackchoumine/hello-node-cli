#!/usr/bin/env node

const { init } = require('./src/init')
const packageJson = require('./package.json')
// 和 require('process') 有何不同？
// process 是一个全局对象，不需要 require
// process.argv 是一个数组，包含了启动 Node.js 进程时的命令行参数
// 第一个元素是 process.execPath，第二个元素是当前执行的 JavaScript 文件路径
// 剩下的元素是其他命令行参数
const args = process.argv // .slice(2)
const commandList = args.slice(2)

const command = commandList[0]
const options = commandList.slice(1)
// 解析 jack -v 或 jack --version
console.log(command, options)
if (['-v', '--version'].includes(command)) {
  console.log(packageJson.version)
}
console.log('Hello, Jack!')
