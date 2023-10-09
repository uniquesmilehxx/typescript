(() => {

  // interface
  // 不能多属性，也不能少属性
  // 同名会合并，所以都需要满足
  // 可以使用索引签名的方式，去定义其他任意不确定的属性
  // readonly只读    ?可选



  // 同名会合并，所以都需要满足
  interface Person {
    readonly name: string
    age: number
  }
  interface Person {
    ikun: string,
    // 可选，非必填
    height ?: number,
    // 可以使用索引签名的方式，去定义其他任意不确定的属性
    [prop: string]: any
  }
  let per:Person = {
    name: 'blue',
    age: 18,
    ikun: '篮球',
    // 对应索引签名的部分
    a: 1,
    b: 2,
    c: 3
  }

  // 只读属性不允许修改
  // per.name = 'black'



  // 接口继承 通过 extends 
  interface Parent {
    name: string
  }
  interface Son extends Parent {
    age: number
  }
  let obj: Son = {
    name: 'aaa',
    age: 18
  }


  // 定义函数接口
  interface Fn {
    (name: string) : number
  }

  const fn: Fn = function (name: string): number {
    return 111
  }


})()