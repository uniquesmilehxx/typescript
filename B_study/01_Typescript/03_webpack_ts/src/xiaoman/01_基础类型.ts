(() => {
  // 数值类型
  let notANumber: number = NaN
  let infiniteNumber: number = Infinity // 无穷大


  // void
  // 非严格模式下，可以赋值 undefined null
  let v1: void = undefined
  let v2: void = null
  // 一般用于函数没有返回值的情况
  function fn (): void {}



  // 非严格模式下，undefined 、null 可以互相赋值
  let n: null = null
  let u: undefined = undefined
  u = n
  n = u



  // 将 ts 转 js 并实时监听
  // tsc -w

  // 在控制台执行js文件
  // node xx.js
})()