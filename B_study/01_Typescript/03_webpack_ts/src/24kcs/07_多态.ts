(() => {
  console.log('多态')

  // 父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为

  // 父类型的引用（Animal）指向了子类型的对象（pig、dog）
  // const pig: Animal = new Pig()，pig调用run方法，指向Pig的run
  // const dog: Animal = new Dog()，dog调用run方法，指向Dog的run


  // 总结：
  // 1、:父类 = new 子类，调用父子类都有的方法时，以子类为准
  //                     调用子类独有方法时，报错父类中没有该方法，但是可正常输出

  // 2、:子类 = new 父类，调用父子类都有的方法时，以父类为准
  //                     调用子类独有的方法时，报错

  // 3、:父类 = new 父类，一切以父类为准

  // 4、:子类 = new 子类，一切以子类为准
  


  // 定义一个父类
  class Animal {
    name: string
    constructor (name: string) {
      this.name = name
    }
    
    run (meter: number = 0) {
      console.log(`${this.name}能跑${meter}米`)
    }

    eat (times: number = 0) {
      console.log(`${this.name}能吃${times}次饭`)
    }
  }


  // 定义一个子类
  class Dog extends Animal {
    constructor (name: string) {
      super(name)
    }

    run (meter: number = 100) {
      console.log(`${this.name}能跑${meter}米`)
    }
  }

  // 再定义一个子类
  class Pig extends Animal {
    constructor (name: string) {
      super(name)
    }

    run (meter: number = 5) {
      console.log(`${this.name}能跑${meter}米`)
    }

    sleep (hour: number = 10) {
      console.log(`${this.name}能睡${hour}小时`)
    } 
  }

  // 普通使用
  // const ani = new Animal('动物')
  // const dog = new Dog('修勾')
  // const pig = new Pig('佩奇')
  // ani.run()
  // dog.run()
  // pig.run()

  // 类这里像接口一样作为约束？
  // 父类型引用指向子类型的实例 ==> 多态   
  const ani: Animal = new Animal('动物')
  const dog: Dog = new Dog('修勾')
  const pig: Pig = new Pig('佩奇')
  ani.run()
  dog.run()
  dog.eat()
  pig.run()
  pig.sleep()
  // console.log('ani.__proto__ === Animal.prototype', ani.__proto__ === Animal.prototype)


  console.log('==================================')

  // 父类类型创建子类对象
  const dog2: Animal = new Dog('修勾2')
  // 100米，调用的是 Dog 的 run（以 new 的类为准）
  dog2.run()

  const pig2: Animal = new Pig('佩奇2')
  // 5米，调用的 Pig 的 run（以 new 的类为准）
  pig2.run()
  // 编辑器报错提示：Animal中没有sleep方法，但是浏览器可以正常输出？
  // pig2.sleep()

  console.log('=============================================')


  // 约束用自己的 Pig 类，就不会报错（以 new 的类为准）
  const pig3: Pig = new Pig('佩奇2')
  pig3.sleep()

  const dog3: Dog = new Animal('修勾3')
  // 0米，调用的是 Animal的 run（以 new 的类为准）
  dog3.run()

  // 报错：Property 'sleep' is missing in type 'Animal' but required in type 'Pig'（以 new 的类为准）
  // const pig4: Pig = new Animal('佩奇4')
  // pig4.sleep()

  console.log('=============================================')

  // 多态有什么用呢？

  // 该函数需要的类型是 Animal类型的
  function showRun (ani: Animal) {
    ani.run()
  }
  
  // 100，dog: Dog = new Dog
  showRun(dog)
  // 父类类型创建子类对象时，showRun 使用的是子类内的方法
  // 100，dog2: Animal = new Dog
  showRun(dog2)
  // 0，dog3: Dog = new Animal
  showRun(dog3)


  // 总结：
  // 1、:父类 = new 子类，调用父子类都有的方法时，以子类为准
  //                     调用子类独有方法时，报错父类中没有该方法，但是可正常输出

  // 2、:子类 = new 父类，调用父子类都有的方法时，以父类为准
  //                     调用子类独有的方法时，报错

  // 3、:父类 = new 父类，一切以父类为准

  // 4、:子类 = new 子类，一切以子类为准



})()