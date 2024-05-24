/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-24 05:43:15
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-05-24 05:49:33
 * @Description : 调试学习
 */
const { sum } = require('./sum')
const { fFor, fb } = require('./fn')

main()

function main() {
  console.log('main')
  const a = 1
  const b = 2
  const c = sum(a, b)
  const d = fb(10)
  console.log('c', c)
  fFor(10)
  return 0
}
