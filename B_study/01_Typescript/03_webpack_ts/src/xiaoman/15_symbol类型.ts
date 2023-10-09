(() => {

  // es6新增了 Symbol 类型


  // 一、基本用法

  // Symbol (description?: string | number) => symbol，接收 string 或 number
  // symbol 的值是唯一的
  let s1: symbol = Symbol(1)
  let s2: symbol = Symbol(1)
  // 用的是不同的内存地址，所以不相等
  console.log('---', s1, s2, s1 === s2, s1 == s2) // Symbol(111) Symbol(111) false false


  // 二、怎么让两个 symbol 打印出全等？

  // Symbol.for(key)
  // for会在全局的symbol里面查找有没有注册过这个key，有的话直接拿来用，没有的话才创建
  console.log(Symbol.for('xiaoman') === Symbol.for('xiaoman'))

  let s3:symbol = Symbol.for('xiaoman')
  let s4:symbol = Symbol.for('xiaoman')
  console.log('-----', s3, s4, s3 === s4)

  // 三、使用场景

  let obj = {
    name: 1,
    age: 1,
    // age: 2   //同一个key会进行覆盖

    // 使用 symbol 当做 key,同一个值也不会覆盖
    [s1]: 111,
    [s2]: 222
  }
  console.log('-----', obj)


  // 怎么取到 obj 中的所有 key 呢？（包含symbol）

  // for in 取不到 symbol
  for (let key in obj) {
    console.log(key)
  }

  // Object.keys 取不到 symbol
  console.log(Object.keys(obj))

  // Object.getOwnPropertyNames 取不到 symbol
  console.log(Object.getOwnPropertyNames(obj))

  // Object.getOwnPropertySymbols 只能取到 symbol，取不到普通的 key
  console.log(Object.getOwnPropertySymbols(obj))
  
  // Reflect.ownKeys 可取到所有！
  // function Reflect.ownKeys(target: object): (string | symbol)[]
  console.log(Reflect.ownKeys(obj))

})()