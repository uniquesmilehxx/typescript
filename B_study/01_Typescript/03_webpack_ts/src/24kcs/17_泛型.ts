(() => {
  // 泛型：在定义函数、接口、类的时候，不能预先确定要使用的数据的类型，而是在使用的时候才能确定

  // - 泛型的使用，让类型也成为变量
  // - 如函数泛型的使用：
  //    - 函数声明的时候：fn<T>，函数其他需要的地方直接用 T 即可（T 即代表调用时传入的那个类型）
  //    - 函数调用的时候：fn<T>()，传入具体的 T，如 fn<number>()



  // 需求 1 ：给定一个值(字符串)，再给一个数量，将对应数量的值放进数组中返回
  function getArr (value: string, count: number) :string[] {
    let arr:string[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  console.log(getArr('abc', 5))  // ['abc', 'abc', 'abc', 'abc', 'abc']

  // -------------------------------------------------------------------------------


  // 需求 2：给定的值 是 number 型，同需求1
  function getArr2 (value: number, count: number) :number[] {
    let arr:number[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  console.log(getArr2(100.321, 5))  // [100.321, 100.321, 100.321, 100.321, 100.321]

  //------------------------------------------------------------------------------------------------

  // 需求 3 ：给定的值 可能是 string型，也可能是 number型
  function getArr3 (value: any, count: number) :any[] {
    let arr:any[] = []
    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr1 = getArr3(100.321, 5)
  console.log('arr1', arr1)  // [100.321, 100.321, 100.321, 100.321, 100.321]
  const arr2 = getArr3('abc', 5)
  console.log('arr2', arr2)  // ['abc', 'abc', 'abc', 'abc', 'abc']

  // 这时如果想要进一步执行一些字符串、数值特有的方法，不会有补全提示
  console.log(arr1[0].toFixed(2))
  console.log(arr2[0].split(''))
  // 如果让 ts 知道了我们当前的类型，执行一些对应方法的时候，就会有提示，具体怎么做？

  // ----------------------------------------------------------------------------------------------

  // 需求 4：泛型的使用，让类型也成为变量
  // 函数声明的时候：fn<T>，函数其他需要的地方直接用 T 即可（T 即代表调用时传入的那个类型）
  // 函数调用的时候：fn<T>()，传入具体的 T，如 fn<number>()

  function getArr4<T> (value: T, count: number) : T[] {
    // 两种写法
    let arr: T[] = []
    // let arr:Array<T> = []

    for (let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  // 调用时传入当前的类型
  const arr3 = getArr4<number>(100.321, 5)
  console.log('arr3', arr3)  // [100.321, 100.321, 100.321, 100.321, 100.321]
  const arr4 = getArr4<string>('abc', 5)
  console.log('arr4', arr4)  // ['abc', 'abc', 'abc', 'abc', 'abc']

  // 这时再执行一些方法时，就会有对应的提示补全（ 因为return的是 T[] ）
  console.log(arr3[0].toFixed(2))
  console.log(arr4[0].split(''))


})()