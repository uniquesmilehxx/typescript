(() => {


  // 1、联合类型 |
  // 支持多种类型，满足其一即可
  let phone: number | string = '010-6789345'

  function fn (param: number | boolean) :boolean {
    return !!param
  }
  console.log(fn(0))
  console.log(fn(1))
  console.log(fn(2))
  console.log(fn(false))
  console.log(fn(true))



  // 2、交叉类型 &
  // 两个没有继承关系的类型，但需要同时满足
  interface People {
    name: string
    age: number
  }
  interface Man {
    sex: string
  }
  // 同时满足！！
  let person: People & Man = {
    name: 'blue',
    age: 18,
    sex: '女'
  }



  // 3、类型断言
  function getLen (param: string | number):number {
    // typeof 类型保护
    if (typeof param === 'number') {
      param = param.toString()
    }
    return param.length


    // 类型断言的两种写法
    // 断言为 string 类型：  xx as string 或 <string>xx
    // return (param as string).length
    return (<string>param).length
    
  }
  console.log(getLen('abc'))
  console.log(getLen(12345))




  interface A {
    a: string
  }
  interface B {
    b: number
  }
  function fn1 (test: A | B): void {
    // console.log(test.a) // test内不一定有a
    console.log('---', (<A>test).a)  // 断言为 A
    console.log('---', (test as B).b) // 断言为 B
  }
  fn1({
    b: 123
  });
  


  // window.abc = 123 // 不允许，window 上没有 abc
  // 临时断言：可以把 window 断言为 any 类型，然后就可以任意增加属性了
  (window as any).abc = 123

  function fn2 (a: any) : boolean {
    return (a as boolean)
  }
  // 这里只是欺骗了typescript，手动将  any断言为boolean，实则返回的还是 1
  console.log(fn2(1))


})()