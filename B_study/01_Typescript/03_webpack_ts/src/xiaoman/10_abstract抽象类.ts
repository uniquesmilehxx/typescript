(() => {

  // 抽象类、派生类（用得不多，但是还是需要了解一下）
  // abstract 定义抽象类、抽象方法
  // abstract 定义的抽象方法 不能具体实现，只能描述
  // 在派生类中，对抽象方法做具体的实现


  // 抽象类
  abstract class Vue {

    name: string
    constructor(name?: string) {
      this.name = name
    }

    // 抽象方法
    abstract getName ():string

    // 普通方法
    print () {
      return this.name
    }
  }
  // 抽象类不能被实例化，报错
  // const vue = new Vue()



  // 派生类
  class React extends Vue {
    constructor () {
      // super 的传值要与 父类的构造函数参数 相对应
      super('小满')
    }
    getName(): string {
      // 继承了父类的 name 属性， 所以这里可以直接访问
      return this.name
    }
    setName (name: string) {
      this.name = name
    }
  }
  // 派生类可以被实例化
  const react = new React()

  // 通过实例 调用派生类的方法
  console.log('react.getName()', react.getName())

  // 通过实例 调用抽象类的普通方法
  console.log('react.print()', react.print())

  // 通过实例 调用继承自抽象类的普通属性
  console.log('react.name', react.name)

  react.setName('blue')
  console.log('react.name', react.name)


})()