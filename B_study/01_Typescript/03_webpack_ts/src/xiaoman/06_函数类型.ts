(() => {

  // 1、定义函数的参数和返回值
  // 默认值和可选参数不能在一个参数上同时使用
  function test (a: number = 1, b: number = 2, c?: number) : number {
    return a + b
  }
  // 箭头函数
  const test2 = (a: number, b: number):number => a + b
  test()
  test(10)
  test(10, 20)




  // 2、复杂一点的类型，传入接口类型
  interface User {
    name: string
    age: number
  }
  function add(user: User): User {
    return user
  }
  add({ name: 'blue', age: 18 })




  // 3、函数 this 类型
  // ts 可以指定 this 的类型，在 js 中无法使用，必须是第一个参数定义 this 的类型
  interface Obj {
    user: number[]
    // add: (this: Obj, num: number) => void
    add: (num: number) => void

  }
  let obj:Obj = {
    user: [1, 2, 3],
    // 小满说不指定this的话，无法访问 this.user，可能是他的版本比较老。。。。
    // add (this: Obj, num: number) {
    //   this.user.push(num)
    // },

    // 不指定this也可以正常使用。。。。
    add (num: number) {
      this.user.push(num)
      console.log(this, this.user)
    }
  }
  obj.add(4)




  // 4、函数重载
  // 一个函数有多种传参或返回类型，可以挨个定义

  let user: number[] = [1, 2, 3, 4]

  // 查找一条数据
  function find(id: number): number[]
  // 添加 - 传入数组
  function find(add: number[]): number[]
  // 查找全部 - 不传
  function find(): number[]

  // 上面的都是约束的情况，这里是具体的定义
  function find (ids ?: number | number[]) :number[] {
    // typeof 检测类型，返回字符串
    if (typeof ids === 'number') {
      return user.filter(item => item === ids)
    }
    else if (Array.isArray(ids)) {
      user.push(...ids)
      return user
    } else {
      return user
    }
  }
  console.log(find(1))
  console.log(find([5]))
  console.log(find())

})()