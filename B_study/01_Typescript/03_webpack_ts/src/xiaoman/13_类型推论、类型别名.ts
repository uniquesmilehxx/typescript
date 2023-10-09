(() => {

  // 类型推论、类型别名


  // 1、ts 天然支持的类型推论


  // let a: number
  let a = 123
  // a = 'abc'  // 会报错，因为上面 ts 已经将 a 推论为 number 型了，所以不支持设置为字符串类型


  // let b: any
  let b
  b = 123
  b = 'abc' // 不会报错，声明的时候没有设置值，后续再赋值成多种类型，会被推断为 any 类型


  // 2、类型别名 type

  // 可支持多种类型
  type t1 = string  // 原始类型
  type t2 = string | number   // 联合类型
  type t3 = (name: string) => void  // 函数类型
  type t4 = {name: string}   // 对象
  type t5 = {}  // 对象
  type t6 = number[]   // 数组
  type t7 = 'abc' | 123 | false // 定义值的别名，使用时只能用这里定义的值



  // 由上述可以发现，type 用法与 interface 非常接近，区别有哪些？

  // 3、区别

  // 3.1  interface 之间可以通过 extends 进行继承，而 type 只能使用 交叉类型& 进行合并

  interface int1 {}
  interface int2  extends int1{}

  type t31 = number[] & B


  // 3.2 type 可以直接定义原始或联合类型，interface 必须定义值后面跟上类型

  type t32 = number | string
  interface int3 {
    t32: number | string
  }

  // 3.3  interface 重名会合并，type不会合并



  // 4、type的妙用

  // extends 在 type中是包含于的意思！！！
  // extends 左边的值，会作为 右边类型 的子类型
  type t41 = 1 extends number ? 1 : 0
  // type t41 = 1
  type t42 = 1 extends any ? 1 : 0
  // type t42 = 1
  type t43 = 1 extends unknown ? 1 : 0
  // type t43 = 1
  type t44 = 1 extends Object ? 1 : 0
  // type t44 = 1
  type t45 = 1 extends Number ? 1 : 0
  // type t45 = 1
  type t46 = 1 extends never ? 1 : 0
  // type t46 = 0




  // 为什么呢？


  // 1、顶级类型（top type）：any、unknown
  // 2、Object 第二大
  // 3、Number String Boolean
  // 4、number string boolean
  // 5、1  'abc'  true
  // 6、never


  // 从上到下的顺序：


  // |     any    |    unknown   |
  // |          Object           |
  // | Number | String | Boolean |
  // | number | string | boolean |
  // |   1    |  'abc' |  false  |
  // |          never            |
  















})()