(() => {
  // 继承：类与类之间的继承
  // A类继承B类，此时 A叫子类，B叫基类
  // 子类-------->派生类
  // 基类-------->超类（父类）
  // 一旦发生了继承的关系，就出现父子类的关系（叫法）


  // 类的继承：extends关键字
  // 子类继承父类属性（子类调用父类的构造方法）：super(属性1, 属性2....)
  // 子类调用父类的实例方法: super.fn()
  // 子类可以重写父类的实例方法


  // 定义基类、父类、超类
  class Person {
    // 定义属性
    name: string
    age: number
    gender: string

    // 构造函数
    constructor (name: string, age: number, gender: string) {
      this.name = name
      this.age = age
      this.gender = gender
    }

    // 实例方法
    sayHi (str: string) {
      console.log(`我是${this.name}，`, str)
    } 
  }

  // 定义一个类，继承 Person 类
  class Student extends Person {
    // 来自继承的属性，不需要提前定义

    // 构造函数
    constructor(name: string, age: number, gender: string) {
      // 通过 super 关键字 继承父类的属性
      super(name, age, gender)
    }

    // 重写父类的方法
    sayHi () {
      console.log('我是子类的sayHi')
      // 通过 super 关键字 调用父类的方法
      super.sayHi('子类调用父类啦哈哈')
    }

  }

  const person = new Person('小明', 16, '男')
  const student = new Student('小红', 15, '女')

  console.log('---', person, student)

  person.sayHi('父类方法的参数')
  student.sayHi()
})()