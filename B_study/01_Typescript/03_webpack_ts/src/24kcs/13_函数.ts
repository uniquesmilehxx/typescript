(() => {
  console.log('函数')

  // 封装一些重复使用的代码，在需要的时候直接调用

  // - 函数类型 需要 等号左右两边相对应
  // - 如果不用 interface 实现函数类型，那么等号左侧在定义返回值的时候需要用到箭头函数 => 
  //          如：fnName: (x: string) => string = function (x:string):string {}
  // - 如果用 interface 实现函数类型，那么interface中可以正常使用 冒号 表返回值（参考下面的例子）



  // js 中的书写方式，当前在 ts 中也可以这么写
  // 1、函数声明，命名函数
  // function add (x, y) {
  //   return x + y
  // }

  // 2、函数表达式，匿名函数
  // const add2 = function (x, y) {
  //   return x + y
  // }



  // ts 中的书写方式
  // 1、为参数、函数返回值定义类型 string
  function add (x: string, y: string):string {
    return x + y
  }
  const result: string = add('1', '2')
  console.log(add('10', '20'), result)

  // 2、为参数、函数返回值定义类型 number
  const add2 = function (x: number, y: number): number {
    return x + y
  }
  const result2: number = add2(1, 2)
  console.log(add2(10, 20), result2)


  // 3、函数的完整写法，左侧使用箭头函数
  //    函数类型：(x: number, y: number) => number
  const add3: (x: number, y: number) => number = function (x: number, y: number):number {
    return x + y
  }
  console.log('add3----', add3(100, 300))


  // 4、参考03_函数类型的写法
  interface IFun {
    (x: number, y: number) : number
  }
  const add4: IFun = function (x: number, y: number):number {
    return x + y
  }
  console.log('add4----', add4(200, 300))

})()