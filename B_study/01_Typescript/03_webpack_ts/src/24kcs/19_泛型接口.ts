(() => {
  // 泛型接口：
  // 1、定义接口时，为接口中的属性或方法定义泛型类型
  // 2、在使用接口时，再指定具体的泛型类型


  // ---------------------------------------------------


  // 泛型接口的简单使用（自己写的例子，仅供理解）
  interface IPerson <T, K> {
    name: T,
    desc: T,
    age: K
  }

  class Person implements IPerson <string, number> {
    name: string
    desc: string
    age: number
    constructor (name: string, desc: string, age: number) {
      this.name = name
      this.desc = desc
      this.age = age
    }
  }

  const per = new Person('张三', '张三的简介', 10)
  console.log('泛型接口的简单使用-------', per)

  console.log('===================================')

// ------------------------------------------------------------------

  // 以下是课程中讲解的示例

  // 单个用户的类
  class User {
    id ?: number
    name: string
    age: number

    constructor (name: string, age: number) {
      this.name = name
      this.age = age
    }
  }


  // 1、定义一个泛型接口，对 Action 类进行约束
  interface IAction <T> {
    // 用户信息数组 data：T 构成的数组
    data: T[],
    // data: Array<T>,

    // 增加 add：接收T类型，返回T类型
    add: (t: T) => T,

    // 查询 getUserByID：根据 id 返回用户信息
    getUserByID: (id: number) => T
  }


  // 对用户集合操作的类（列表展示、增加、查询）
  // 类实现接口，使用implements
  // 2、泛型接口 IAction 在使用时，传入了指定的 User 类型，所以 Action 中对应的其他 T 位置,都需要是 User 型
  class Action implements IAction <User> {

    // 按照接口格式进行实现（这里要设置默认值为空数组，否则添加时往哪添加？）
    data: User[] = []

    // 增加
    add (t: User):User {
      // id 
      t.id = Date.now() + Math.random()
      this.data.push(t)

      // 返回 t
      return t
    }

    // 查询
    getUserByID (id: number) : User {
      return this.data.find(u => u.id === id)
    }
  }

  // 创建 用户操作类的实例
  const action = new Action()

  // 增加用户信息
  // action 实例在调用 add 方法时，需要按照约束传入 User 类型参数（直接对 User 类进行实例化）
  action.add(new User('张三', 18))
  action.add(new User('李四', 20))
  action.add(new User('王五', 22))
  console.log(action.data)

  // 根据id查询
  // add 函数返回的是 T （即一条用户信息），取出 id 来查询
  const { id } = action.add(new User('笑笑', 18))
  console.log(action.getUserByID(id))


})()