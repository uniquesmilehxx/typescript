(() => {
  console.log('类 类型')

  // 类 类型：类的类型，可以通过接口来实现
  
  // 总结：接口和接口之间叫继承（extends），接口和类之间叫实现（implements）
  // 继承多个、实现多个时，都是逗号隔开


  // 例子1：类类型基本使用（类 实现 接口，通过implements关键字）

  // 定义一个接口
  interface IFly {
    fly():string
  }
  // 定义一个类，这个类的类型就由上面的接口定义
  class Person implements IFly {
    // 接口中定义了fly方法，所以类中也需要将fly方法真正的实现（接口中的内容在类中都要真正的实现）
    fly () {
      console.log('我会飞了1')
      return '哈哈哈'
    }
  }
  const person1 = new Person()
  person1.fly()


  // 例子2，一个类实现多个接口（多个接口之间逗号隔开）

  interface ISwim {
    swim():void
  }
  // 类可以实现一个接口，也可以实现多个接口。要注意：接口中的内容在类中都要真正的实现
  class Person2 implements IFly, ISwim {
    fly () {
      console.log('我会飞了2')
      return '哈哈哈'
    }
    swim () {
      console.log('我会游泳了2')
    }
  }
  const person2 = new Person2()
  person2.fly()
  person2.swim()

  // 例子3：合并多个类，让 class 实现合并后的类（多个接口之间的继承，使用 extends 关键字）

  // 定义一个接口，继承其他多个接口
  interface IFlyAndISwim extends IFly, ISwim {}

  class Person3 implements IFlyAndISwim {
    fly () {
      console.log('我会飞了3')  
      return '哈哈哈'
    }
    swim () {
      console.log('我会游泳了3')
    }
  }
  const person3 = new Person3
  person3.fly()
  person3.swim()


  // 总结：接口和接口之间叫继承（extends），接口和类之间叫实现（implements）
  // 继承多个、实现多个时，都是逗号隔开


})()