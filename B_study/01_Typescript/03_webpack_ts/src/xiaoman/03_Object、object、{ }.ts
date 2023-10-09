(() => {

  // 1、Object
  // 跟原型链有关，在 js 中，原型链最终指向 Object，所以 Object 包含所有类型
  let a1:Object = 123
  let a2:Object = 'abc'
  let a3:Object = {}
  let a4:Object = () => {}
  let a5:Object = Symbol
  let a6:Object = []

  // 对象类型不允许修改
  // a3.name = 'blue'  // 报错：Property 'name' does not exist on type 'Object'
  // a3.age =  18 // 报错：Property 'age' does not exist on type 'Object'.





  // 2、object
  // 常用于泛型约束
  // let b2:object = 123  // 错误，数字属于原始类型
  // let b3:object = 'abc'  // 错误，字符串属于原始类型
  // let b4:object = false  // 错误，布尔值属于原始类型

  // 只能用于引用类型
  let b1:object = {}
  let b5:object = [1, 2, 3]  // 支持数组类型
  let b8:object = () => {} // 支持函数
  // let b6:object = null  // 支持 null？
  // let b7:object = undefined  // 支持 undefined？






  // 3、{}
  // 字面量模式，可以理解为 new Object，也是包含所有类型
  let c1: {} = 123
  let c2: {} = 'abc'
  let c3: {} = { name: 'blue' }
  let c4: {} = () => {}
  let c5: {} = Symbol
  let c6: {} = []

  // 但是，对象类型不允许修改（Object也是。。。。。）
  c1 = 234
  c2 = 'cba'
  // c3.name = 'black' // 报错：Property 'name' does not exist on type '{}'
  // c3.age = 22 //报错：Property 'age' does not exist on type '{}'

})()