#!/usr/bin/env node
const clear = require('clear-any-console')
const welcome = require('cli-welcome')
const pkgJson = require('./package.json')
const chalk = require('chalk') //NOTE 控制台彩色字体输出
const log = console.log
// console.clear() // 输出之前清除控制台
// clear() // 兼容 3 大 os
welcome({
  title: pkgJson.name,
  tagLine: 'Howdy,nice to meet ya',
  description: pkgJson.description,
  version: pkgJson.version,
  bgColor: '#FADC00',
  color: '#00000',
  bold: true,
  clear: true,
})
log(`${chalk.blue('My name is Jack!')}`)
