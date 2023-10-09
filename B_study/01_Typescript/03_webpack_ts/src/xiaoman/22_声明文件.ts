// declare 声明,简写为 d
// 一些老的库，安装后内部可能没有能兼容ts的声明文件，可以手动尝试 npm install @types/xx 安装声明文件
// （如果存在的话，否则需要自己手写声明文件）

// 例：对比 axios、express

// 安装axios、express
// npm i axios 
// npm i express
 
import axios from 'axios' // axios自带声明文件
import express from 'express' // 此时express报红，因为没有声明文件，所以手动为它安装

// npm i @types/express
// 然后上面的 import 就不再报红了

// express 简单使用
// const app = express()
// const router = express.Router()
// app.use('/api', router)

// router.get('/api', (req: any, res:any) => {
//   res.json({
//     code: 200
//   })
// })

// app.listen(9001, () => {
//   console.log('----9001')
// })


// 如果手写声明文件的话，是在 xx.d.ts中使用 declare 语法
// 可以声明全局变量、全局function、全局class等（见22_fuzhu.d.ts）


// 在这里可以使用全局变量，不知道为啥一直报错。。先不管了吧，先了解用法
// globalVars = 100
// globalVars = '用 declare 定义全局变量'
// console.log('globalVars------', globalVars)


