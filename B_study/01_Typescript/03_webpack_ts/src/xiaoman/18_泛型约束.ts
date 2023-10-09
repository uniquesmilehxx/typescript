(() => {

  // extends (keyof)



  // 1、T extends interface

  // 例：返回length属性，需要先约束它是有length属性的
  interface ILen {
    length: number
  }

  function getLen <T extends ILen> (x: T): number {
    return x.length
  }
  getLen('111111')



  // 2、keyof 拿出对象中所有 key 值，作为一个联合类型
  // 写法：K extends keyof T，表示拿出 T 中所有的 key 值，作为联合类型，K extends 这个联合类型，则 K 是这个联合类型的子集

  // 例：函数传入对象和 key，获取value
  let obj = {
    name: 'xiaoman',
    age: 15
  }
  
  // type Key = typeof obj
  // 执行上面一行后，鼠标放到 Key 上，显示：
  // type Key = {
  //   name: string;
  //   age: number;
  // }

  // type Key = keyof typeof obj
  // 执行上面一行后，鼠标放到 Key 上，显示：
  // type Key = "name" | "age"
  // 即拿出了所有key值，作为一个联合类型



  // function getVal <T extends object, K> (obj: T, key: K) {
  function getVal <T extends object, K extends keyof T> (obj: T, key: K) {

    // 可以看到代码出现了报错，key不一定存在于obj中，我们怎么手动限制 参数key 一定存在于 obj 中呢？
    // 对 泛型 K 做出限制（取出T中所有属性，作为一个联合类型，然后 让 K extends 它）
    return obj[key] // 报错
  }

  console.log(getVal(obj, 'age'))
  // console.log(getVal(obj, 'sex')) // 不存在的key，报错


  // 3、综合实战（keyof 和 in 的用法综合，in表循环）
  
  // 例：写一个小工具，让 interface 的每一个属性都变成 可选 属性（加上?）

  interface IPer {
    name: String
    age: number
    sex: string
  }

  // 类似于 for in，这里是 定义一个 Key in (keyof T)
  type Options<T extends object> = {
    [Key in keyof T]?:T[Key]
  }

  // 注意，是 type来定义，type来接收
  type a = Options<IPer>
  // a 鼠标放上去，显示如下：
  // type a = {
  //   name?: String;
  //   age?: number;
  //   sex?: string;
  // }


  // 或者都改成 readonly 形式

  type Options2<T extends object> = {
    readonly [Key in keyof T]:T[Key]
  }

  type b = Options2<IPer>
  // type b = {
  //   readonly name: String;
  //   readonly age: number;
  //   readonly sex: string;
  // }


})()