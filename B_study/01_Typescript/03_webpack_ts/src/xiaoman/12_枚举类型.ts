(() => {

  // 枚举


  // 1、普通定义
  enum Color {
    red,
    green,
    blue
  }
  console.log(Color.red) // 0
  console.log(Color.green) // 1
  console.log(Color.blue) // 2


  // 2】增长枚举
  enum Color2 {
    red = 2,
    green,
    blue
  }
  console.log(Color2.red) // 2
  console.log(Color2.green) // 3
  console.log(Color2.blue) // 4


  // 3、自定义枚举：可用数字，可用字符串，可以混用（不推荐混用）
  // 4、异构枚举
  enum Color3 {
    red = 5,
    green = 10,
    blue = 'blue'
  }
  console.log(Color3.red) // 5
  console.log(Color3.green) // 10
  console.log(Color3.blue) // 'blue'



  // 5、接口枚举
  enum Types {
    man = 'man11111',
    woman = 'woman'
  }

  interface Man {
    sex: Types.man
  }
  let obj: Man = {
    sex: Types.man
  }
  console.log(obj.sex)




  // 6、const 枚举
  
  // 比较同一个枚举，使用const 与 不使用const 的区别

  enum Types2 {
    success,
    fail
  }
  const enum Types3 {
    success,
    fail
  }

  let code:number = 0
  console.log(code === Types2.success) // true
  console.log(code === Types3.success) // true

  // 使用上区别不大，因为都是只读的
  // 但是编译后不同
  //      code === Types3.success 会 编译成 code === 0（Types3.success直接编译成 0）
  //      code === Types2.success 会 把Types2编译成一个对象再比较其中的success




  // 7、反向映射（值必须是数字类型！！！）

  // 可以通过元素找到值，也可以通过值找到元素


  enum Types4 {
    success = 200,
    notfound = 404,
    error = 500
  }

  console.log(Types4.success) // 200
  console.log(Types4[200]) // 'success'

  console.log(Types4.notfound) // 404
  console.log(Types4[500]) // 'error'


  let code2:number = Types4.success
  console.log('value-----', code2) // 200

  let str: string = Types4[404]
  console.log('key-------', str) // 'notfound'


  // 原理：编译后长这样：
  // Types4[Types4['success'] = 200] = 'success' // 所以是双向的，且只能指定为数值型，无法设置为字符串




  // 字符串无法反射！！！！！
  enum Types5 {
    Blue = 'b',
    Red = 'r',
    Green = 'g'
  }
  console.log(Types5.Blue)  // b
  console.log(Types5['b'])  // undefined





})()