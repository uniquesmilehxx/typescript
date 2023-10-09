(() => {
  // 函数重载：函数的名字相同，函数的参数及个数不同
  //         （将函数的参数类型、返回值类型定义地更精确，从而让 ts 能给出更完整的错误提示）

  // 需求：定义add函数，它可以接收两个字符串相拼接，也可以接收两个数字相加


  // 函数重载声明（把函数的类型写的更精确）
  function add (x: string, y: string): string
  function add (x: number, y: number): number

  // 函数
  function add (x: string | number, y: string | number) : (string | number) {
    if (typeof x === 'string' && typeof y === 'string') {
      // 字符串拼接
      return x + y
    } else if (typeof x === 'number' && typeof y === 'number') {
      // 数字相加
      return x + y
    }
  }

  // 正常传参
  console.log(add('张', '三'))
  console.log(add(10, 20))

  // 非法传参（但因满足传参的类型检测，所以不会报错，怎么让ts给出报错呢？那就要把参数的情况限制的更精确————函数重载）
  // 定义函数重载后就会报错
  // console.log(add('张', 10))
  // console.log(add(20, '三'))


})()