(() => {
  console.log('静态成员')

  // 1、在类中通过 static 修饰的属性、普通方法（非构造函数），
  //    那么就是静态的属性及及静态的方法，也称之为：静态成员
  // 2、静态成员在使用时通过 【类名.静态成员】这种语法来调用的，而不是通过 this实例（实例化对象）
  //    例如下面的  Person.gender、Person.sayName()


  class Person {
    // 普通属性
    nameOwn: string

    // 静态属性
    static gender: string = '女'


    // 构造函数前不能添加 static
    constructor (name: string) {
      this.nameOwn = name

      // 访问静态属性，不能通过this，this是实例对象；需要通过 【类名.属性】访问
      // console.log('访问静态属性，', this.gender)
      console.log('访问静态属性【类名.属性】', this.nameOwn, Person.gender)
    }

    // 普通方法
    sayHi () {
      console.log('hello你们好')
    }

    // 静态方法
    static sayName () {
      console.log('访问静态方法【类名.方法】', Person.gender)
    }
  }
  // 实例化对象
  const per = new Person('佩奇')
  console.log(per.nameOwn)
  per.sayHi()

  // 访问静态方法也不能通过 this实例（实例化对象），要通过 【类名.方法】访问
  // per.sayName()
  Person.sayName()
})()