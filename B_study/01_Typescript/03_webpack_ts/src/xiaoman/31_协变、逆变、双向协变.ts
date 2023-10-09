// 类型兼容，确定一个类型能否赋值给其他类型
// 协变、逆变、双向协变
// “型变”（类型改变）分为两种，一种是子类型可以赋值给父类型，叫做协变，一种是父类型可以赋值给子类型，叫做逆变

// 值协变，函数逆变
// 只能多 不能少

(() => {

  interface A {
    name: string
    age: number
  }
  
  interface B  {
    name: string
    age: number
    sex: string
  }
  
  let a:A = {
    name: 'blue',
    age: 26
  }
  
  let b:B = {
    name: 'red',
    age: 24,
    sex: '女'
  }



  // 一、协变：一般用于值，变量赋值时能多不能少

  // b = a // 报错
  a = b // b 可以覆盖 a 的所有属性，B从结构上来讲是A的子类型，这时赋值不会报错
  console.log('a, b', a, b) // 两个都是 b



  // 二、逆变：一般发生在函数上
  
  let fna = (params: A) => {
    console.log('fna')
  }

  let fnb = (params: B) => {
    console.log('fnb', params.sex)
  }

  // 不安全，会报错
  //    因为若赋值成功，fna在函数声明时按照 A 约束类型，但是调用的时候却是按照 B 的属性和方法来访问
  //    若要这么做，需要把 tsconfig.json 中 strictFunctionTypes 设置为 false（不建议）
  //    然后函数可以互相赋值且不报错，此称之为双向协变
  // 但是我实际操作没有报错。。。。。尴尬
  // fna = fnb 
  // // console.log('fna, fnb', fna, fnb) // 两个都是 fnb



  // 安全，实际调用的都是 fna 的内容
  fnb = fna
  console.log('fna, fnb', fna, fnb) // 两个都是 fna


})()
