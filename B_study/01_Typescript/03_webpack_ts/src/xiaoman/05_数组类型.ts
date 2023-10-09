(() => {


  // 数组类型


  // 1、普通数组
  let arr1: number[] = [1, 2, 3]
  let arr2: Array<number> = [1, 2, 3]


  // 2、接口限制的数组，对象数组
  interface X {
    name: string
    age?: number
  }
  let arr3: X[] = [
    {
      name: 'blue',
      // sex: 1
    }
  ]



  // 3、二维数组：套娃
  // 推荐第一种写法 [][]
  let arr11: number[][] = [[1, 2], [3], [4, 5, 6]]
  let arr22: Array<Array<number>> = [[1, 2], [3], [4, 5, 6]]



  // 4、数组里面允许各种格式，大杂烩
  let arr4: any[] = [1, true, 'abc']


  // 元祖：数组的类型和个数是确定的
  let arr5: [number, boolean, string] = [1, true, 'abc']




  // 5、函数的剩余参数也可以定义类型
  function fn(...args: number[]) {

    // args 是数组（将剩余参数放进数组）
    console.log(args) // [1, 2]

    // 类数组，不是数组，没有foreach
    console.log(arguments) // [Arguments] {'0': '1', '1': '2'}


    // 怎么定义 arguments 呢？
    // let a: any[] = arguments //会报错

    // 可使用 ts 的内置对象
    let a: IArguments = arguments

    // 或者自定义好内部的属性
    interface B {
      callee: Function
      length: number
      [index: number]: any
    }
    let b: B = arguments
  }
  fn(1, 2)



})()