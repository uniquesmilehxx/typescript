(() => {
  // 泛型类
  // 定义一个类，类中的属性值的类型不确定，方法中的参数及返回值的类型也不确定
  // 在实例化类的时候，再确定泛型的类型

  // 总之，在定义函数、接口、类时，若有不确定的类型，都可以用泛型来表示


  // 例子：
  class Methods <T> {
    defaultValue: T
    constructor (defaultValue: T) {
      this.defaultValue = defaultValue
    }
    sayHi (msg: T) {
      console.log(msg, this.defaultValue)
    }
  }

  // 在实例化类的时候，再确定泛型的类型
  // 传入number型
  const m1 = new Methods<number>(100)
  m1.sayHi(100)
  // m1.sayHi('abc')  // 报错
 
  // 传入string型
  const m2 = new Methods<string>('abc')
  m2.sayHi('abc')
  // m2.sayHi(100) // 报错

})()