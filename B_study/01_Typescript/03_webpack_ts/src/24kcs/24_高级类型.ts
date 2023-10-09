(() => {
  // 自己总结的一部分
  // ts 中的 高级类型（本篇参考官网 https://www.tslang.cn/docs/handbook/advanced-types.html ）


  // 一、交叉类型 & （都要满足）

  interface IPeople {
    name: string
    sex: string
  }
  interface IMan {
    age: number
  }

  // 需要同时满足（两个之间没有继承关系）
  function showMsg (x: IPeople & IMan) {
    console.log('-----', x)
  }
  showMsg({
    name: 'blue',
    sex: '女',
    age: 18
  })

  console.log('=================================================')

  // 二、联合类型 |  （满足一个即可）

  function add (x: string | number) {
    console.log(x)
  }
  add('abc')
  add(100)

  console.log('=================================================')


  // 三、类型别名

  // 简单使用
  type Name = string | number
  function show (x: Name) {
    console.log(x)
  }
  show('使用类型别名，type + 自定类型名称')

  // 与泛型的使用
  type Name2 <T> = T | number
  function showType (x: Name2 <string>) {
    console.log(x)
  }
  showType('类型别名与泛型共同使用')
  showType(100)

  // 与 interface的区别
  // 简单使用好像没啥区别（对象、函数两者都适用）
  // 但是
  //    1、类型别名不能被 extends和 implements（自己也不能 extends和 implements其它类型）
  //    2、type 能使用 in 关键字生成映射类型，但 interface 不行
  //    3、同名合并：interface 支持，type 不支持
  //    4、与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组

  type A = { 
    num: number
  }
  interface B {
    num: number
  }

  function test (x: A) {
    console.log(x)
  }
  test({ num: 100 })

  function test2 (x: B) {
    console.log(x)
  }
  test2({ num: 200 })


  // type 使用基本类型
  // type Name = string;

  // type in 生成映射
  // type Keys = "firstname" | "surname"
  // type DudeType = {
  //   [key in Keys]: string
  // }
  // const test: DudeType = {
  //   firstname: "Pawel",
  //   surname: "Grzybek"
  // }


})()