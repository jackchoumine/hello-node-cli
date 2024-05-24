/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-24 05:46:55
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-05-24 05:47:37
 * @Description :
 */
function fFor(n) {
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
}

function fb(n) {
  if (n === 0) return 0
  if (n === 1) return 1
  return fb(n - 1) + fb(n - 2)
}

module.exports = {
  fFor,
  fb,
}
