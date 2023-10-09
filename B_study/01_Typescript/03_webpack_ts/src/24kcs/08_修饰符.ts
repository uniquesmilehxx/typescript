(() => {
  console.log('修饰符')

  // 修饰符：类中的成员的修饰符，主要是描述类中的成员（属性，构造方法，方法）的可访问性
  // 类中的成员都有自己的默认修饰符：public
  // public：公共的，任何位置都可以访问
  // private：私有的，只有自身内部可以访问，外部、子类中都无法访问该成员数据
  // protected：受保护的，自身内部和子类中可以访问，外部无法访问

  // const person = new Person('小明')； person.name 是外部访问！
  //                                    person.eat() ，eat中访问 name 是内部访问

  // const stu = new Student('小红')；stu.name 是外部访问
  //                                 stu.play()，play中访问 name 是子类中访问



  // 定义一个类
  class Person {
    // public（外部、内部、子类内部都可访问）
    // public name: string

    // private（只有内部可访问，外部、子类内部都不可访问）
    // private name: string

    // protected（内部、子类内部可访问，外部不可访问）
    protected name: string

    constructor(name: string) {
      this.name = name
    }

    eat () {
      // 内部访问
      console.log('eat', this.name)
    }
  }

  class Student extends Person {
    constructor (name: string) {
      super(name)
    }

    play () {
      // 子类内部访问
      console.log('play', this.name)
    }
  }

  // name 为 public 时，外部、内部、子类内部都可访问
  // const person = new Person('小明')
  // // 内部，可访问
  // person.eat()
  // // 外部，可访问
  // console.log('person.name', person.name)

  // const stu = new Student('小红')
  // // 子类内部，可访问
  // stu.eat()
  // stu.play()
  // // 外部访问
  // console.log('stu.name', stu.name)

  // --------------------------------------------------------------------------------

  // name 为 private 时，只有内部可访问，外部、子类内部都不可访问
  // const person2 = new Person('小明')
  // // 内部，可访问
  // person2.eat()
  // // 外部：不可访问
  // console.log('person2.name', person2.name)

  // const stu2 = new Student('小红')
  // // 子类内部，不可访问
  // stu2.eat()
  // stu2.play()
  // // 外部：不可访问
  // console.log('stu2.name', stu2.name)

  // --------------------------------------------------------

  // name 为 protected 时，内部、子类内部可访问，外部不可访问
  const person3 = new Person('小明')
  // 内部，可访问
  person3.eat()
  // 外部：不可访问
  console.log('person3.name', person3.name)

  const stu3 = new Student('小红')
  // 子类内部，可访问
  stu3.eat()
  stu3.play()
  // 外部：不可访问
  console.log('stu2.name', stu3.name)




})()