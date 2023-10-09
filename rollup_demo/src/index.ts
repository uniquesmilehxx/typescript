const a:string = 'blue'
const b:number = 123

// 测试热更新、sourcemap
// console.log('---@@@1112223333', a)


// 打印环境变量，报错
// 因为 process.env 是 node 环境里面的东西，浏览器里面没这个东西
// 通过插件注册为浏览器的环境变量
// 然后就可以打印啦
// console.log(process.env.NODE_ENV)


// 判断环境的函数
// 比如 可以用在 rollup.config.js 中，用来设置一些打包相关的东西
const isDev = () => {
  if (process.env.NODE_ENV === 'development') {
    return true
  } else  {
    return false
  }
}
// console.log('isDev', isDev())









