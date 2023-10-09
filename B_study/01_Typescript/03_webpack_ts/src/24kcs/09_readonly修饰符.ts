(() => {
  console.log('readonly修饰符')

  // 一、readonly 修饰符
  // 1、修饰类中的【属性成员】，修饰后，该属性成员，就不能在外部被随意修改
  // 2、只有在构造函数中，可以对只读属性成员进行修改！（实例化时传入，也是在执行构造函数修改）

  // 二、定义成员属性的简写
  // 1、类中的属性成员一般在构造函数前需要先定义，然后在构造函数中赋值
  // 2、但是如果在【构造函数的参数】中，添加 readonly、public、private、protected修饰符，就称之为参数属性；
  //    且不需要在构造函数前去手动定义，相当于自动定义了对应【修饰符+属性名】 的属性成员
  //    如：constructor(readonly name: string = 'abc') 相当于自动在构造函数前定义 readonly name:string = 'abc'
  // 3、修饰符使用规则不变（可参照 08_修饰符.ts）
  //    readonly  只读，仅在构造函数中修改
  //    public    内部、子类中、外部 可访问
  //    protected 内部、子类中可访问，       外部不可访问
  //    private   内部可访问，              子类中、外部不可访问


  // 一、readonly 修饰符
  class Person {

    // 可读可写
    name: string

    // 只读
    readonly sex: string
    readonly age: number = 16

    constructor (name: string, sex: string) {
      // 构造函数中，可以修改被设置为 readonly 的属性
      this.name = name
      this.sex = sex

      this.age = 18
    }

    sayName () {
      // 类中的普通方法，不能修改被设置为 readonly 的属性
      this.name = '猪猪'
    }

    saySex () {
      // 编译报错
      // this.sex = '中性'
    }
  }

  // 属性成员正常读写
  const per = new Person('可读可写', '男')
  per.sayName()
  per.name = '猫猫'
  console.log('11111111111', per)

  // 属性成员设置为只读后，外部 以及 类中的普通方法 都无法修改
  const per2 = new Person('只读', '女')
  per2.saySex()
  // 编译报错
  // per2.sex = '中性222'
  // 编译报错：属性成员被 readonly 修饰，如果构造函数中没有该参数，外部也是不能更改的（外部只能通过构造函数去修改）
  // per.age = 20
  console.log('222222222', per2)


  console.log('====================================')


  // 二、定义成员属性的简写

  class Person2 {
    // 定义属性
    age: number = 10

    // 在“构造函数的参数”中，添加readonly、public、private、protected修饰符，会自动生成对应的属性成员
    constructor (
      age: number, 
      public name: string = '默认名称',
      readonly sex: string = "女",
      private money: number = 100
    ) {

      this.age = age

      // 也不需要通过这个方式去更新属性，会自动更新（当然写了也不会报错）
      // this.name = name
      // this.sex = sex
      // this.money = money
    }

    sayHi () {
      this.age = 26
      this.name = '我又起了个名字'
      console.log('修改前的money', this.money)
      this.money = 99999
      // 只读属性，不允许普通方法修改
      // this.sex = '中性'
    }
  }

  const per3 = new Person2(18, '自定义名称', '男', 999)
  console.log('per3---', per3)
  per3.sayHi()
  console.log('per3--222--', per3)

  // 私有属性不允许外部访问
  // console.log('money---', per3.money)

  // 只读属性，不允许外部修改
  // per3.sex = '中性'

})()