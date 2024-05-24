/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-24 06:17:48
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-05-24 06:18:14
 * @Description : attach 调试模式
 */
const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Hello, Jack!')
})

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
