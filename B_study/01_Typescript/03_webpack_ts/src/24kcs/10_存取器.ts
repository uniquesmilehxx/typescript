(() => {
  console.log('存取器')
  // 让我们可以有效的控制 对象中的成员的访问，通过 getters 和 setters 进行操作

  // 通过 get（获取）、set（设置） 属性成员
  // 只有get只能读取，只有set只能设置，两个都有可读可写

  // 例子：外部可以传入姓氏、名字数据，同时使用 set 和 get 控制姓名的数据，外部也可以进行修改操作
  class Person {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
    }

    // 读取器 -----> 负责读取数据的
    get fullName () {
      console.log('get中...')
      // 拼接 姓氏 和 名称
      return this.firstName + '-' + this.lastName
    }

    // 设置器 --------> 负责修改数据的
    set fullName (value) {
      console.log('set中...')
      // 拆分成姓名 和 名称，并赋值
      let arr = value.split('-')
      this.firstName = arr[0]
      this.lastName = arr[1]
    }
  }

  let per = new Person('张', '三')
  // 获取该属性成员------走进get  
  console.log(per.fullName)

  // 设置该属性成员的数据 ---------- 走进set
  per.fullName = '李-四'
  console.log(per.firstName + per.lastName)

})()