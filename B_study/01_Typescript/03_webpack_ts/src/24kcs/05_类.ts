(() => {
  console.log('类')
  
  // 类，可以理解为模板，通过模板可以实例化对象
  // 面向对象的编程思想

  class Person {

    // 定义属性（js中没有提前定义，直接在构造函数里面赋值就行）
    name: string
    age: number
    sex: string

    // 构造函数（自带默认值的写法  str:string='abc'）
    constructor(name: string = '小甜甜', age: number = 15, sex:string = '男') {
      this.name = name
      this.age = age
      this.sex = sex
    }

    // 定义实例方法
    sayHi (str: string) {
      console.log(`我是${this.name}，我今年${this.age}岁，我是${this.sex}孩子，`, str)
    }
  }

  // 实例化对象
  const person = new Person('blue', 18, '女')
  const person2 = new Person()

  // 调用实例的方法
  person.sayHi('你呢')
  person2.sayHi('哈哈哈')

})()