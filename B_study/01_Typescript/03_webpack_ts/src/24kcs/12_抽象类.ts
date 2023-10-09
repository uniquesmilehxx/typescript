(() => {
  console.log('抽象类')

  // - 抽象类的目的或者作用，最终为子类服务
  // - 抽象类中可以有抽象方法，也可以有实例方法（也可以写抽象属性，但是一般不这么用，因为抽象属性也需要被子类实现）
  // - 抽象类中的抽象方法：不能有具体的实现，会报错；在其子类（派生类）中需要具体实现所有抽象方法
  // - 抽象类是不能被实例化的；其子类（派生类）可以实例化
  // - 可以调用抽象类中的实例方法，而抽象方法调用的是其子类的具体实现（子类的实例方法）


  // 定义一个抽象类
  abstract class Animal {

    // 抽象属性，一般不这么用（因为还需要让子类去实现这个抽象属性）
    // abstract name: string

    // 抽象方法：不能有具体的实现，会报错
    // abstract eat () {
    //    console.log('具体实现')
    // }
    abstract eat():void
    abstract eat2():void

    // 实例方法
    sayHi () {
      console.log('你好，我是抽象类中的实例方法')
    }
  }

  // 抽象类是不能被实例化的
  // const ani:Animal = new Animal()

  // 定义一个子类（派生类）
  class Dog extends Animal {
    // 一般不这么用
    // name:string

    // 实现抽象类中的抽象方法，此时这个方法就是当前类的实例方法
    eat () {
      console.log('抽象方法在子类中的具体实现')
    }
    eat2 () {
      console.log('每一个抽象方法在子类中都需要有具体的实现')
    }
  }

  const dog:Dog = new Dog()
  // 调用的是子类的实例方法
  dog.eat()
  dog.eat2()
  // 调用的是抽象类中的实例方法
  dog.sayHi()
  
})()